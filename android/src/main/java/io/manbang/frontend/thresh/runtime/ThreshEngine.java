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

import com.eclipsesource.v8.JavaCallback;
import com.eclipsesource.v8.V8Array;
import com.eclipsesource.v8.V8Object;

import androidx.annotation.Nullable;
import io.manbang.frontend.thresh.Thresh;
import io.manbang.frontend.thresh.channel.BridgeCallback;
import io.manbang.frontend.thresh.channel.MethodConstants;
import io.manbang.frontend.thresh.channel.NativeModule;
import io.manbang.frontend.thresh.channel.MethodChannelModule;
import io.manbang.frontend.thresh.runtime.jscore.bundle.BundleCallback;
import io.manbang.frontend.thresh.runtime.jscore.bundle.JSBundleLoader;
import io.manbang.frontend.thresh.runtime.jscore.runtime.JSCallback;
import io.manbang.frontend.thresh.runtime.jscore.util.V8Util;
import io.manbang.frontend.thresh.util.ThreshLogger;

import java.lang.ref.WeakReference;
import java.util.Locale;
import java.util.Map;

import io.manbang.frontend.thresh.view.LifecycleListener;

/**
 * thresh engine
 */
public class ThreshEngine implements LifecycleListener,EngineService{

    /**
     * bundle options
     */
    private ThreshEngineOptions engineOptions;
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
    private boolean isReady;

    public ThreshEngine(ThreshEngineOptions engineOptions) {
        this.engineOptions = engineOptions;
        assertBundleParams();
        if (Thresh.get().platform().supportJSSingleton()){
            jsModule = Thresh.get().getJSManager().getJSModule(engineOptions.moduleName);
            if (jsModule == null){
                jsModule =  new JSModule(engineOptions.moduleName,engineOptions.bundleOptions);
                Thresh.get().getJSManager().registerJSModule(new WeakReference<JSModule>(jsModule));
            }
        }else {
            jsModule =  new JSModule(engineOptions.moduleName,engineOptions.bundleOptions);
        }
        jsModule.addRootId(engineOptions.rootId);
        this.mMainHandler = new Handler(Looper.getMainLooper());
        registerMethodCall();
        isReady = false;
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
        jsModule.jsThread.execute(new JSThread.ThreshJSTask() {
            @Override
            public void execute() {
                jsModule.getExecutor().registerJavaMethod(new JavaCallback() {
                    @Override
                    public Object invoke(V8Object v8Object, V8Array v8Array) {
                        performCallFlutter(v8Array);
                        return null;
                    }
                },engineOptions.jsCallFlutterMethod);
            }
        });
        jsModule.jsThread.execute(new JSThread.ThreshJSTask() {
            @Override
            public void execute() {
                jsModule.getExecutor().registerJavaMethod(new JavaCallback() {
                    @Override
                    public Object invoke(V8Object v8Object, V8Array v8Array) {
                        performCallNative(v8Array);
                        return null;
                    }
                },engineOptions.jsCallNativeMethod);
            }
        });

        jsModule.registerLifecycleEvent(engineOptions.callJSLifecycleMethod,engineOptions.callJSMethod);
    }
    /**
     * An method for js call flutter
     * <LI>  {@link ThreshEngineOptions#jsCallFlutterMethod} </LI>
     */
    public void performCallFlutter(final V8Array parameters) {
        final Map args = V8Util.toMap(parameters);
        mMainHandler.post(new Runnable() {
            @Override
            public void run() {
                if (threshChannel != null){
                    threshChannel.invokeMethod(engineOptions.jsCallFlutterMethod,args);
                }
            }
        });
    }

    /**
     * An method for js call native
     * <LI>  {@link ThreshEngineOptions#jsCallNativeMethod} </LI>
     */
    private void performCallNative(final V8Array parameters) {
        final Map args = V8Util.toMap(parameters);
        if (args != null){
            nativeModule.dispatchJSCallNativeEvent(ThreshEngine.this,args.get(MethodConstants.CALL_METHOD) + "", args);
        }
    }

    /**
     * {@link LifecycleListener#onPause()}
     */
    @Override
    public void onPause() {
        if (checkInit()){
            return;
        }
        if (jsModule != null){
            jsModule.onPause(engineOptions.rootId);
        }
    }
    /**
     * {@link LifecycleListener#onResume()}
     */
    @Override
    public void onResume() {
        if (checkInit()){
            return;
        }
        if (jsModule != null){
            jsModule.onResume(engineOptions.rootId);
        }
    }
    /**
     * {@link LifecycleListener#onDestroy()}
     */
    @Override
    public void onDestroy() {
        if (checkInit()){
            return;
        }
        if (jsModule != null){
            jsModule.onDestroy(engineOptions.rootId);
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
        if (checkInit()){
            return;
        }
        if (jsModule != null){
            jsModule.onBackPressed(engineOptions.rootId);
        }
    }

    public ThreshEngineOptions getThreshOptions(){
        return engineOptions;
    }

    public void setReady(boolean isReady){
        this.isReady = isReady;
        jsModule.jsStatusReady = isReady;
        ThreshLogger.v(String.format(Locale.US, "[--- ThreshEngine READY %s --- ]", isReady ? "Success" : "Failure"));
    }

    public boolean checkInit(){
        return !isReady;
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
    public void loadScript(){
        loadScript(null);
    }
    @Override
    public void loadScript(final JSCallback callback) {
        if (bundleLoader != null){
            bundleLoader.loadScript(null, engineOptions.bundleOptions, new BundleCallback() {
                @Override
                public void onResult(int code, String reason,String data) {
                    if (code == 0 && !TextUtils.isEmpty(data)){
                        if (callback != null){
                            jsModule.executeScript(engineOptions.rootId,data, callback);
                        }else {
                            jsModule.executeScript(engineOptions.rootId, data, new JSCallback() {
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
                    }else {
                        ThreshLogger.e("READ BUNDLE ERROR:" + reason);
                    }
                }
            });
        }else {
            if (callback !=null){
                callback.error(-1,"BundleLoader cannot null","");
            }
        }
    }
    @Override
    public void executeJSFunction(String funcName, JSCallback callback,Map params) {
        if (jsModule != null){
            jsModule.executeJSFunction(funcName, callback, params);
        }
    }
    @Override
    public void invokeNativeModule(String module, String method, Map params, BridgeCallback callback){
        if (nativeModule != null){
            nativeModule.invokeNativeModule(module,method,params,callback);
        }
    }
}