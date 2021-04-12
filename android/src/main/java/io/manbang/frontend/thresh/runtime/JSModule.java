/*
 * MIT License
 *
 * Copyright (c) 2020 ManBang Group
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
package io.manbang.frontend.thresh.runtime;

import android.os.SystemClock;
import android.text.TextUtils;
import android.util.Log;

import com.eclipsesource.v8.JavaCallback;
import com.eclipsesource.v8.V8Array;
import com.eclipsesource.v8.V8Object;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import androidx.annotation.NonNull;

import io.manbang.frontend.thresh.runtime.jscore.MBJSExecutor;
import io.manbang.frontend.thresh.runtime.jscore.bundle.BundleOptions;
import io.manbang.frontend.thresh.runtime.jscore.runtime.JSCallback;
import io.manbang.frontend.thresh.runtime.jscore.util.V8Util;
import io.manbang.frontend.thresh.util.ThreshLogger;

/**
 * A JS Module can be provided to js executor instances.
 */
public class JSModule {

    private @NonNull
    String moduleName;
    private String callJSLifecycleMethod;
    private String callJSMethod;
    private MBJSExecutor executor;
    private boolean isLoaded;
    public JSThread jsThread;
    private String moduleVersion;
    private Map<String, List<JavaCallback>> javaCallBackMap = new HashMap<>();
    private List<JSFunctionInfo> initFunInfoList = new ArrayList<>();
    private final BundleOptions bundleOptions;

    public JSModule(@NonNull String moduleName, String moduleVersion, final BundleOptions bundleOptions) {
        this.moduleName = moduleName;
        jsThread = new JSThread(moduleName);
        this.moduleVersion = moduleVersion;
        this.bundleOptions = bundleOptions;
        runInJsThread(new Runnable() {
            @Override
            public void run() {
                executor = new MBJSExecutor(bundleOptions);
            }
        });
    }

    public String getModuleName() {
        return this.moduleName;
    }

    public String getModuleVersion() {
        return moduleVersion;
    }

    public boolean isLoaded() {
        return isLoaded;
    }

    public MBJSExecutor getExecutor() {
        return this.executor;
    }

    public boolean sameDebugService(BundleOptions bundleOptions) {
        return getDebugServiceAddress(bundleOptions).equals(getDebugServiceAddress(this.bundleOptions));
    }

    private String getDebugServiceAddress(BundleOptions bundleOptions) {
        if (bundleOptions == null) {
            return "";
        }
        if (bundleOptions.debugServerIP == null || bundleOptions.debugServerPort == null) {
            return "";
        }
        return bundleOptions.debugServerIP + ":" + bundleOptions.debugServerPort;
    }

    public void registerJavaMethodCallBack(final JavaCallback javaCallback, final String name) {

        if (!javaCallBackMap.containsKey(name)) {
            javaCallBackMap.put(name, new ArrayList<JavaCallback>());
        }
        javaCallBackMap.get(name).add(javaCallback);

        runInJsThread(new Runnable() {
            @Override
            public void run() {
                executor.registerJavaMethod(new JavaCallback() {
                    @Override
                    public Object invoke(V8Object v8Object, V8Array v8Array) {
                        List<JavaCallback> javaCallbackList = javaCallBackMap.get(name);
                        for (JavaCallback callback : javaCallbackList) {
                            callback.invoke(v8Object, v8Array);
                        }
                        return null;
                    }
                }, name);
            }
        });
    }

    public void unregisterJavaMethodCallBack(JavaCallback javaCallback, String name) {
        List<JavaCallback> javaCallbackList = javaCallBackMap.get(name);
        if (javaCallbackList != null) {
            javaCallbackList.remove(javaCallback);
        }
    }

    public void runInJsThread(final Runnable runnable) {
        this.jsThread.execute(new JSThread.ThreshJSTask() {
            @Override
            public void execute() {
                if (runnable != null) {
                    runnable.run();
                }
            }
        });
    }

    /**
     * Register life cycle events, bind the container to the JS cycle
     */
    public void registerLifecycleEvent(String callJSLifecycleMethod, String callJSMethod) {
        this.callJSLifecycleMethod = callJSLifecycleMethod;
        this.callJSMethod = callJSMethod;
    }

    public void onPause(String pageId) {
        execMessage(pageId, "pageOnHide", null);
    }

    public void onResume(String pageId) {
        execMessage(pageId, "pageOnShow", null);
    }

    public void onDestroy(String pageId) {
        if (!isLoaded()) {
            return;
        }
        //Notify js page destruction
        execMessage(pageId, "onDestroyed", null);

    }

    public void onBackPressed(String pageId) {
        execMessage(pageId, "nativePop", null);
    }

    /**
     * Execute js message method
     *
     * <p> js life cycle events </p>
     * <p> Specify a js method </p>
     */
    public void execMessage(final String contextId, final String method, final Object params) {
        if (!isLoaded()) {
            return;
        }
        ThreshLogger.v("contextId :" + contextId + ", method : " + method + " , params :" + params);
        runInJsThread(new Runnable() {
            private final List<String> eventType = Arrays.asList(
                    "pageOnShow", "pageOnHide", "nativePop", "willDestroy"
            );

            @Override
            public void run() {
                if (eventType.contains(method)) {
                    executor.executeJSFunction(callJSLifecycleMethod, null, method, contextId);
                    return;
                }
                Map<String, Object> callParams = new HashMap();
                callParams.put("method", method);
                callParams.put("params", params);
                wrapParamWithContextId(callParams, contextId);
                V8Object object = V8Util.toV8Object(executor.runtime(), callParams);
                executor.executeJSFunction(callJSMethod, null, object);
                ThreshLogger.v("[finish]");
            }
        });
    }


    /**
     * Execute JS Bundle
     */
    public Object executeScript(final String contextId, final String script, final JSCallback callback) {
        try {
            runInJsThread(new Runnable() {
                @Override
                public void run() {
                    long startTime = SystemClock.elapsedRealtime();
                    if (!TextUtils.isEmpty(contextId)) {
                        executor.runtime().add("threshContextId", contextId);
                    }
                    Object result = executor.executeScript(script, callback);
                    ThreshLogger.v("real loadJSTime：" + (SystemClock.elapsedRealtime() - startTime) + "ms \n", 0);
                    if (callback != null) {
                        callback.success(result);
                    }
                    isLoaded = true;
                    for (JSFunctionInfo info : initFunInfoList) {
                        executeJSFunction(info.contextId, info.funcName, info.callback, info.params);
                    }
                    initFunInfoList.clear();
                    ThreshLogger.v("[finish]");
                }
            });
        } catch (Exception e) {
            ThreshLogger.e(e, "Unhandled exception %s", e.toString());
            if (callback != null) {
                callback.error(-1, e.getMessage(), e.getCause());
            }
        }
        return null;
    }


    private static class JSFunctionInfo {
        String contextId;
        String funcName;
        JSCallback callback;
        Map params;

        public JSFunctionInfo(String contextId, String funcName, JSCallback callback, Map params) {
            this.contextId = contextId;
            this.funcName = funcName;
            this.callback = callback;
            this.params = params;
        }
    }

    /**
     * Execute JS Function
     */
    public void executeJSFunction(String contextId, final String funcName, final JSCallback callback, final Map params) {

        if (!isLoaded()) {
            initFunInfoList.add(new JSFunctionInfo(contextId, funcName, callback, params));
            return;
        }

        ThreshLogger.v(contextId + ":" + params.get("method"));

        wrapParamWithContextId(params, contextId);

        runInJsThread(new Runnable() {
            @Override
            public void run() {
                try {
                    ThreshLogger.v(funcName + "[start]");
                    V8Object object = V8Util.toV8Object(executor.runtime(), params);
                    executor.executeJSFunction(funcName, callback, object);
                    ThreshLogger.v(funcName + "[finish]");
                } catch (Exception e) {
                    ThreshLogger.e(e, "executeJSFunction Unhandled exception %s", e.toString());
                    if (callback != null) {
                        callback.error(-1, e.getMessage(), e.getCause());
                    }
                }
            }
        });
    }

    public void destroy() {
        if (executor != null) {
            runInJsThread(new Runnable() {
                @Override
                public void run() {
                    executor.close();
                    executor = null;
                }
            });
        }
    }

    private void wrapParamWithContextId(final Map params, String contextId) {
        params.put("contextId", contextId);
    }


}