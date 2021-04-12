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

import android.os.Handler;
import android.os.Looper;
import android.text.TextUtils;
import android.util.Log;

import com.eclipsesource.v8.JavaCallback;
import com.eclipsesource.v8.V8Array;
import com.eclipsesource.v8.V8Object;

import androidx.annotation.Nullable;

import io.manbang.frontend.thresh.runtime.jscore.bundle.BundleCallback;
import io.manbang.frontend.thresh.runtime.jscore.bundle.JSBundleLoader;
import io.manbang.frontend.thresh.runtime.jscore.runtime.JSCallback;
import io.manbang.frontend.thresh.runtime.jscore.util.V8Util;
import io.manbang.frontend.thresh.channel.BridgeCallback;
import io.manbang.frontend.thresh.channel.MethodConstants;
import io.manbang.frontend.thresh.channel.nativemodule.NativeModule;
import io.manbang.frontend.thresh.channel.MethodChannelModule;
import io.manbang.frontend.thresh.manager.ContextIdManager;
import io.manbang.frontend.thresh.util.ThreshLogger;

import java.util.Locale;
import java.util.Map;

import io.manbang.frontend.thresh.view.LifecycleListener;

import static io.manbang.frontend.thresh.channel.MethodConstants.CALL_TIMER_OPERATOR;

/**
 * thresh engine
 */
public class ThreshEngine implements LifecycleListener, EngineService {

    /**
     * bundle options
     */
    private ThreshEngineOptions engineOptions;
    private String contextId;
    /**
     * channel
     */
    private MethodChannelModule threshChannel;
    /**
     * native module
     */
    private NativeModule nativeModule;
    /**
     * bundle loader
     */
    public JSBundleLoader bundleLoader;
    /**
     * handler
     */
    private Handler mMainHandler;
    /**
     * JS module
     */
    public JSModule jsModule;

    /**
     * thresh engine status
     *
     * <p> IF isReady true : thresh engine ok ,else fail</p>
     */

    public ThreshEngine(ThreshEngineOptions engineOptions, String contextId) {
        this.engineOptions = engineOptions;
        this.contextId = contextId;
        assertBundleParams();
        jsModule = JSManager.getInstance().getJSModule(engineOptions.moduleName);
        if (jsModuleInvalid()) {
            jsModule.destroy();
            jsModule = null;
        }
        if (jsModule == null) {
            jsModule = new JSModule(engineOptions.moduleName, engineOptions.moduleVersion, engineOptions.bundleOptions);
            JSManager.getInstance().registerJSModule(jsModule);
        }
        this.mMainHandler = new Handler(Looper.getMainLooper());
        registerMethodCall();
    }

    //JSModule失效（存在但不可用）
    private boolean jsModuleInvalid() {
        if (jsModule == null) {
            return false;
        }
        if (!engineOptions.moduleVersion.equals(jsModule.getModuleVersion())) {//版本号不一致
            return true;
        }

        if (!jsModule.sameDebugService(engineOptions.bundleOptions)) {//服务地址不一致
            return true;
        }

        return false;
    }

    /**
     * bind method channel for thresh engine
     */
    public void bindThreshMethodCall(MethodChannelModule channel) {
        this.threshChannel = channel;
    }

    /**
     * bind native bridge for thresh engine
     */
    public void bindNativeModule(NativeModule nativeModule) {
        this.nativeModule = nativeModule;
    }

    /**
     * bind bundle loader for thresh engine
     */
    public void bindBundleLoader(JSBundleLoader bundleLoader) {
        this.bundleLoader = bundleLoader;
    }

    /**
     * register flutter <->  native <-> JS  call
     **/
    private void registerMethodCall() {

        jsModule.registerJavaMethodCallBack(jsCallFlutterCallBack, engineOptions.jsCallFlutterMethod);

        jsModule.registerJavaMethodCallBack(jsCallNativeCallBack, engineOptions.jsCallNativeMethod);

        jsModule.registerJavaMethodCallBack(jsCallTimerCallBack, engineOptions.callNativeTimer);

        jsModule.registerLifecycleEvent(engineOptions.callJSLifecycleMethod, engineOptions.callJSMethod);
    }

    private JavaCallback jsCallFlutterCallBack = new JavaCallback() {
        @Override
        public Object invoke(V8Object v8Object, V8Array v8Array) {
            performCallFlutter(V8Util.toMap(v8Array));
            return null;
        }
    };

    private JavaCallback jsCallNativeCallBack = new JavaCallback() {
        @Override
        public Object invoke(V8Object v8Object, V8Array v8Array) {
            performCallNative(V8Util.toMap(v8Array));
            return null;
        }
    };

    private JavaCallback jsCallTimerCallBack = new JavaCallback() {
        @Override
        public Object invoke(V8Object v8Object, V8Array v8Array) {
            final Map args = V8Util.toMap(v8Array);
            args.put(MethodConstants.CALL_METHOD, CALL_TIMER_OPERATOR);
            performCallNative(args);
            return null;
        }
    };


    /**
     * An method for js call flutter
     * <LI>  {@link ThreshEngineOptions#jsCallFlutterMethod} </LI>
     */
    public void performCallFlutter(final Map args) {
        if (isNotTargetContextId(args)) {
            return;
        }
        mMainHandler.post(new Runnable() {
            @Override
            public void run() {
                if (threshChannel != null) {
                    threshChannel.invokeMethod(engineOptions.jsCallFlutterMethod, args);
                }
            }
        });
    }

    private boolean isNotTargetContextId(Map args) {
        Object methodContextId = args.get("contextId");
        if (methodContextId == null) {
            return false;
        }
        return !this.contextId.equals(methodContextId);
    }

    /**
     * An method for js call native
     * <LI>  {@link ThreshEngineOptions#jsCallNativeMethod} </LI>
     */
    private void performCallNative(Map args) {
        if (isNotTargetContextId(args)) {
            return;
        }
        if (args != null) {
            nativeModule.dispatchJSCallNativeEvent(ThreshEngine.this, args.get(MethodConstants.CALL_METHOD) + "", args);
        }
    }

    /**
     * {@link LifecycleListener#onPause()}
     */
    @Override
    public void onPause() {
        if (jsModule != null) {
            jsModule.onPause(contextId);
        }
    }

    /**
     * {@link LifecycleListener#onResume()}
     */
    @Override
    public void onResume() {
        if (jsModule != null) {
            jsModule.onResume(contextId);
        }
    }

    /**
     * {@link LifecycleListener#onDestroy()}
     */
    @Override
    public void onDestroy() {
        ContextIdManager.INSTANCE.clearByContextId(contextId);
        if (jsModule != null) {
            jsModule.onDestroy(contextId);
            jsModule.unregisterJavaMethodCallBack(jsCallFlutterCallBack, engineOptions.jsCallFlutterMethod);
            jsModule.unregisterJavaMethodCallBack(jsCallNativeCallBack, engineOptions.jsCallNativeMethod);
            jsModule.unregisterJavaMethodCallBack(jsCallTimerCallBack, engineOptions.callNativeTimer);
        }
        // unregister channel
        if (threshChannel != null) {
            threshChannel.unRegister();
            threshChannel = null;
        }
        bundleLoader = null;
        nativeModule = null;
    }

    /**
     * {@link LifecycleListener#onBackPressed()}
     */
    @Override
    public void onBackPressed() {
        if (jsModule != null) {
            jsModule.onBackPressed(contextId);
        }
    }

    public ThreshEngineOptions getThreshOptions() {
        return engineOptions;
    }

    public void setReady(boolean isReady) {
        ThreshLogger.v(String.format(Locale.US, "[--- ThreshEngine READY %s --- ]", isReady ? "Success" : "Failure"));
    }


    public void assertBundleParams() {
        if (engineOptions == null
                || engineOptions.bundleOptions == null
                || TextUtils.isEmpty(engineOptions.moduleName)) {
            ThreshLogger.e("Must be bundle options value exception");
            throw new ThreshException("Must be bundle options value.");
        }
    }

    @Override
    public void loadScript() {
        loadScript(null);
    }

    @Override
    public void forceLoadScript() {
        loadScriptImpl(null);
    }

    @Override
    public void loadScript(final JSCallback callback) {
        if (jsModule.isLoaded()) {
            return;
        }
        loadScriptImpl(callback);
    }

    private void loadScriptImpl(final JSCallback callback) {
        if (bundleLoader == null) {
            if (callback != null) {
                callback.error(-1, "BundleLoader cannot null", "");
            }
            return;
        }
        bundleLoader.loadScript(null, engineOptions.bundleOptions, new BundleCallback() {
            @Override
            public void onResult(int code, String reason, String data) {
                if (code == 0 && !TextUtils.isEmpty(data)) {
                    if (callback != null) {
                        jsModule.executeScript(contextId, data, callback);
                    } else {
                        jsModule.executeScript(contextId, data, new JSCallback() {
                            @Override
                            public void success(@Nullable Object o) {
                                setReady(true);
                            }

                            @Override
                            public void error(int i, @Nullable String s, @Nullable Object o) {
                                setReady(false);
                            }
                        });
                    }
                } else {
                    ThreshLogger.e("READ BUNDLE ERROR:" + reason);
                }
            }
        });
    }


    @Override
    public void loadBundleScript(final BundleCallback callback) {
        if (jsModule.isLoaded()) {
            return;
        }
        if (bundleLoader != null) {
            bundleLoader.loadScript(null, engineOptions.bundleOptions, callback);
        } else {
            if (callback != null) {
                callback.onResult(-1, "BundleLoader cannot null", "");
            }
        }
    }

    @Override
    public void executeScript(final String script, final JSCallback callback) {
        if (jsModule.isLoaded()) {
            return;
        }
        if (callback != null) {
            jsModule.executeScript(contextId, script, callback);
        } else {
            jsModule.executeScript(contextId, script, new JSCallback() {
                @Override
                public void success(@Nullable Object o) {
                    setReady(true);
                }

                @Override
                public void error(int i, @Nullable String s, @Nullable Object o) {
                    setReady(false);
                }
            });
        }
    }

    @Override
    public void execMessage(String method, Object params) {
        if (jsModule != null) {
            jsModule.execMessage(contextId, method, params);
        }
    }

    @Override
    public void executeJSFunction(String funcName, JSCallback callback, Map params) {
        if (jsModule != null) {
            jsModule.executeJSFunction(contextId, funcName, callback, params);
        }
    }

    @Override
    public void invokeNativeModule(String module, String method, Map params, BridgeCallback callback) {
        if (nativeModule != null) {
            nativeModule.invokeNativeModule(module, method, params, callback);
        }
    }
}