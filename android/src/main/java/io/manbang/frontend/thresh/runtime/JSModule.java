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

import com.eclipsesource.v8.JavaCallback;
import com.eclipsesource.v8.JavaVoidCallback;
import com.eclipsesource.v8.V8Array;
import com.eclipsesource.v8.V8Object;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

import androidx.annotation.NonNull;
import io.manbang.frontend.thresh.Thresh;
import io.manbang.frontend.thresh.runtime.jscore.MBJSExecutor;
import io.manbang.frontend.thresh.runtime.jscore.bundle.BundleOptions;
import io.manbang.frontend.thresh.runtime.jscore.runtime.JSCallback;
import io.manbang.frontend.thresh.runtime.jscore.util.V8Util;
import io.manbang.frontend.thresh.util.ThreshLogger;

/**
 * A JS Module can be provided to js executor instances.
 */
public class JSModule {
    /**
     * module name
     */
    @NonNull
    private String moduleName;
    /**
     * bundle options
     */
    private BundleOptions bundleOptions;
    /**
     * Call JS event method
     */
    private String callJSLifecycleMethod;
    /**
     * Call the specified js method
     */
    private String callJSMethod;
    /**
     * General event type
     */
    private List<String> eventType;
    /**
     * js executor
     */
    private MBJSExecutor executor;

    /**
     * JSContext status
     *      <LI> not loaded (false), loaded (true) </LI>
     */
    public boolean jsStatusReady;
    /**
     * JS thread
     */
    public JSThread jsThread;
    /**
     * Used for generating monotonically-increasing sequence numbers for JSContext
     */
    private AtomicInteger mSequenceGenerator = new AtomicInteger();
    /**
     * Maintain the relationship between rootId and contextId
     */
    private Map<String,String> mRootIds;

    public JSModule(String moduleName,final BundleOptions bundleOptions) {
        this.moduleName = moduleName;
        this.bundleOptions = bundleOptions;
        jsThread = new JSThread(moduleName);
        jsThread.execute(new JSThread.ThreshJSTask() {
            @Override
            public void execute() {
                executor = new MBJSExecutor(bundleOptions);
            }
        });
    }

    /**
     * @param rootId
     */
    public void addRootId(String rootId){
        if (Thresh.get().platform().supportJSSingleton()){
            if (TextUtils.isEmpty(rootId)) {
                throw new IllegalStateException("Cannot loadApp while rootId is null.");
            }
            if (mRootIds == null){
                mRootIds = new HashMap<>();
            }
            mRootIds.put(rootId,"");
        }
    }
    public String getModuleName(){
        return this.moduleName;
    }

    public MBJSExecutor getExecutor(){
        return this.executor;
    }

    public void registerCallFlutter(final String jsCallFlutterMethod, final JavaCallback callback) {
        registerJavaMethod(new JavaCallback() {
            @Override
            public Object invoke(V8Object receiver, V8Array parameters) {
                if (callback == null){
                    callback.invoke(receiver,parameters);
                }
                return null;
            }
        }, jsCallFlutterMethod);


    }

    public void registerCallNative(final String jsCallNativeMethod,final JavaCallback callback) {
        registerJavaMethod(new JavaCallback() {
            @Override
            public Object invoke(V8Object receiver, V8Array parameters) {
                if (callback == null){
                    callback.invoke(receiver,parameters);
                }
                return null;
            }
        }, jsCallNativeMethod);
    }
    /**
     * Register life cycle events, bind the container to the JS cycle
     */
    public void registerLifecycleEvent(String callJSLifecycleMethod,String callJSMethod){
        this.callJSLifecycleMethod = callJSLifecycleMethod;
        this.callJSMethod = callJSMethod;
        if (this.eventType == null){
            this.eventType = new ArrayList<>();
            this.eventType.add("pageOnShow");
            this.eventType.add("pageOnHide");
            this.eventType.add("nativePop");
            // for iOS
            this.eventType.add("willDestroy");
        }
    }

    public void onPause(String pageId) {
        execMessage(pageId,"pageOnHide",null);
    }

    public void onResume(String pageId) {
        execMessage(pageId,"pageOnShow",null);
    }

    public void onDestroy(String pageId) {
        if (checkInit()){
            return;
        }
        //Notify js page destruction
        execMessage(pageId,"onDestroyed",null);

        if (!Thresh.get().platform().supportJSSingleton()){
            destroy();
        }
    }

    public void onBackPressed(String pageId) {
        execMessage(pageId,"nativePop",null);
    }

    /**
     * Execute js specified method
     *
     * <p> js life cycle events </p>
     * <p> Specify a js method </p>
     */
    public void execMessage(final String rootId,final String method, final Object params) {
        if (checkInit()){
            return;
        }
        ThreshLogger.v("rootId :" + rootId +", method : " + method + " , params :" + params);
        jsThread.execute(new JSThread.ThreshJSTask() {
            @Override
            public void execute() {
                if (!TextUtils.isEmpty(method) && eventType != null && eventType.contains(method)) {
                    if (Thresh.get().platform().supportJSSingleton()){
                        executor.executeJSFunction(callJSLifecycleMethod, null, mRootIds != null ? mRootIds.get(rootId) : null,method);
                    }else {
                        executor.executeJSFunction(callJSLifecycleMethod, null,method);
                    }
                } else {
                    Map callParams = new HashMap();
                    callParams.put("method", method);
                    callParams.put("params", params);
                    if (Thresh.get().platform().supportJSSingleton()){
                        callParams.put("contextId", mRootIds != null ? mRootIds.get(rootId) : "");
                    }
                    V8Object object = V8Util.toV8Object(executor.runtime(), callParams);
                    executor.executeJSFunction(callJSMethod, null, object);
                }
                ThreshLogger.v("[finish]");
            }
        });
    }

    public boolean checkInit(){
        return this.executor == null && !jsStatusReady;
    }


    public void registerJavaMethod(final JavaVoidCallback callback, final String name) {
        try {
            jsThread.execute(new JSThread.ThreshJSTask() {
                @Override
                public void execute() {
                    executor.registerJavaMethod(callback, name);
                    ThreshLogger.v(name + "[finish]");
                }
            });

        } catch (Exception e) {
            ThreshLogger.e(e, "Unhandled exception %s", e.toString());
        }

    }

    public void registerJavaMethod(final JavaCallback callback, final String name) {

        try {
            jsThread.execute(new JSThread.ThreshJSTask() {
                @Override
                public void execute() {
                    executor.registerJavaMethod(callback, name);
                    ThreshLogger.v(name + "[finish]");
                }
            });
        } catch (Exception e) {
            ThreshLogger.e(e, "Unhandled exception %s", e.toString());
        }
    }

    public void registerJavaMethod(final Object object, final String methodName, final String functionName,
                                   final Class<?>[] parameterTypes) {
        try {
            jsThread.execute(new JSThread.ThreshJSTask() {
                @Override
                public void execute() {
                    executor.registerJavaMethod(object, methodName, functionName, parameterTypes);
                }
            });
        } catch (Exception e) {
            ThreshLogger.e(e, "Unhandled exception %s", e.toString());
        }
    }

    /**
     * Execute JS Bundle
     */
    public Object executeScript(final String rootId,final String script, final JSCallback callback) {
        try {
            jsThread.execute(new JSThread.ThreshJSTask() {
                @Override
                public void execute() {
                    long startTime = SystemClock.elapsedRealtime();
                    if (Thresh.get().platform().supportJSSingleton() && !TextUtils.isEmpty(rootId)){
                        String id = String.valueOf(getSequenceNumber());
                        mRootIds.put(rootId,id);
                        executor.runtime().add("threshContextId",id);
                    }
                    Object result = executor.executeScript(script,callback);
                    ThreshLogger.v("real loadJSTime：" + (SystemClock.elapsedRealtime() - startTime) + "ms \n", 0) ;
                    if (callback != null) {
                        callback.success(result);
                    }
                    ThreshLogger.v("[finish]");
                }
            });

        } catch (Exception e) {
            ThreshLogger.e(e, "Unhandled exception %s", e.toString());
            if (callback != null) {
                callback.error(-1, e.getMessage(),e.getCause());
            }
        }
        return null;
    }
    /**
     * Execute JS Bundle
     */
    public Object executeScript(final String script, final JSCallback callback) {

        executeScript("",script,callback);
        return null;
    }
    /**
     * Execute JS Function
     */
    public void executeJSFunction(final String funcName, final JSCallback callback,final Map params) {
        if (!jsStatusReady){
            ThreshLogger.v(funcName + "[js status fail]");
            return;
        }
        try {
            jsThread.execute(new JSThread.ThreshJSTask() {
                @Override
                public void execute() {
                    V8Object object = V8Util.toV8Object(executor.runtime(), params);
                    executor.executeJSFunction(funcName, callback,object);
                    ThreshLogger.v(funcName + "[finish]");
                }
            });
        } catch (Exception e) {
            ThreshLogger.e(e, "executeJSFunction Unhandled exception %s", e.toString());
            if (callback != null) {
                callback.error(-1, e.getMessage(),e.getCause());
            }
        }
    }

    public void destroy(){
        if (executor != null){
            executor.close();
            executor = null;
        }
        jsStatusReady = false;
    }

    /**
     * Gets a sequence number.
     */
    public int getSequenceNumber() {
        return mSequenceGenerator.incrementAndGet();
    }
}
