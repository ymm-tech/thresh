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
package io.manbang.frontend.thresh.channel;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;

import java.util.HashMap;
import java.util.Map;

import io.manbang.frontend.thresh.Thresh;
import io.manbang.frontend.thresh.runtime.ThreshEngine;
import io.manbang.frontend.thresh.util.ThreshLogger;
import io.manbang.frontend.thresh.util.ThreshReporter;

/**
 * Process JS or Flutter to call Native bridge capabilities
 */
public abstract class NativeModule implements NativeModuleProvider {

    private Context context;

    private Handler mainHandler;

    public NativeModule(Context context) {
        this(context,new Handler(Looper.getMainLooper()));
    }
    public NativeModule(Context context,Handler handler) {
        this.context = context;
        this.mainHandler = handler;
    }
    @Override
    public void dispatchJSCallNativeEvent(final ThreshEngine engine,String eventMethod, final Map params) {
        ThreshLogger.v(" dispatch：[start] eventMethod :" + eventMethod);
        if (params != null) {
            ThreshLogger.v("params = " + params);
            if (MethodConstants.BRIDGE_REQUEST.equals(eventMethod)) {
                Map request = BridgeUtil.jsToBridgeRequest(params);
                invokeNativeModule(request.get(MethodConstants.CALL_MODULE) + "", request.get(MethodConstants.CALL_METHOD)  + "", request, new BridgeCallback() {
                    @Override
                    public void onResult(int code, String reason,
                                         Map<String, Object> bridgeResult) {
                        if(context == null){
                            return;
                        }
                        if ("log".equals(BridgeUtil.getMethod(params))){
                            ThreshLogger.v("js-native-log: " + params);
                            return;
                        }
                        final Map v8Params = BridgeUtil.bridgeResponseToJS(BridgeUtil.getBridgeMethodId(params),BridgeUtil.getContextId(params), bridgeResult);
                        if (v8Params != null){
                            mainHandler.post(new Runnable() {
                                @Override
                                public void run() {
                                    try {
                                        engine.executeJSFunction(engine.getThreshOptions().callJSMethod, null, v8Params);
                                    }catch (Exception e){
                                        ThreshLogger.e(e, "Unhandled exception %s", e.toString());
                                    }
                                }
                            });
                        }else {
                            ThreshLogger.v("map null");
                        }
                    }
                });
            } else if (MethodConstants.RELOAD.equals(eventMethod)) {
            } else if (MethodConstants.PRINT.equals(eventMethod)) {
            } else if (MethodConstants.PAGE_DID_SHOW.equals(eventMethod)) {
                if (engine.getThreshOptions().pageStartTime > 0){
                    if (params.get(MethodConstants.CALL_PARAMS) instanceof HashMap){
                        Map performanceParams = ThreshReporter.monitorPerformance((HashMap)params.get(MethodConstants.CALL_PARAMS), engine.getThreshOptions().pageStartTime);
                        if (Thresh.get().platform().reporterListener != null){
                            Thresh.get().platform().reporterListener.reportPerformance(performanceParams);
                        }
                    }
                    engine.getThreshOptions().pageStartTime = 0;
                }
            } else if (MethodConstants.REFRESH_NATIVE_VIEW.equals(eventMethod)) { }
        } else {
            ThreshLogger.v("js_engine_js_call_native_null");
        }
    }
}
