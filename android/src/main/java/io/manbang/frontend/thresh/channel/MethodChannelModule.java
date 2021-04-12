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

import io.flutter.embedding.engine.FlutterEngine;
import io.manbang.frontend.thresh.runtime.EngineService;
import io.manbang.frontend.thresh.util.ThreshLogger;

import java.util.Map;

import io.flutter.plugin.common.MethodCall;
import io.flutter.plugin.common.MethodChannel;
import io.flutter.plugin.common.PluginRegistry;

/**
 * thresh flutter methodChannel
 */
public abstract class MethodChannelModule implements MethodChannel.MethodCallHandler,MethodChannelProvider {

    /**
     * flutter call js event
     */
    private static final String METHOD_CHANNEL_FLUTTER_CALL_JS  = "methodChannel_flutter_call_js";
    /**
     * flutter call native event
     */
    private static final String METHOD_CHANNEL_FLUTTER_CALL_NATIVE = "methodChannel_flutter_call_native";

    private final static String CHANNEL_TYPE = "thresh";

    private MethodChannel channel;

    private final EngineService engineService;
    /**
     * flutterView mode
     * @param engine
     */
    public MethodChannelModule(FlutterEngine engine, EngineService engineService) {
        this.channel = new MethodChannel(engine.getDartExecutor(), CHANNEL_TYPE);
        this.channel.setMethodCallHandler(this);
        this.engineService = engineService;
    }

    /**
     * activity mode
     *
     * @param registrar
     */
    public MethodChannelModule(PluginRegistry.Registrar registrar,EngineService engineService) {
        this.channel = new MethodChannel(registrar.messenger(), CHANNEL_TYPE);
        this.channel.setMethodCallHandler(this);
        this.engineService = engineService;
    }

    public MethodChannel getChannel(){
        return channel;
    }
    /**
     * unregister channel
     */
    public void unRegister() {
        if (channel != null){
            channel.setMethodCallHandler(null);
            channel = null;
        }
    }

    @Override
    public void onMethodCall(MethodCall methodCall, final MethodChannel.Result result) {
        if (methodCall == null){
            return;
        }
        String channelMethod = methodCall.method;
        Object arguments = methodCall.arguments;
        if (dispatchModuleChannelEvent(channelMethod,channelMethod,arguments,result) != null){
            return;
        }
        ThreshLogger.v("channelMethod= " + channelMethod  + "\n methodCall.arguments = "+ arguments);
        if (METHOD_CHANNEL_FLUTTER_CALL_JS.equals(channelMethod)) {
            // flutter call js
            if (engineService != null ){
                engineService.executeJSFunction(METHOD_CHANNEL_FLUTTER_CALL_JS, null, (Map)arguments);
            }else {
                ThreshLogger.v("threshEngine=null");
            }
        } else if (METHOD_CHANNEL_FLUTTER_CALL_NATIVE.equals(channelMethod) && arguments instanceof Map) {
            String method= ((Map) arguments).get(MethodConstants.CALL_METHOD) + "";
            Map params = (Map)((Map) arguments).get(MethodConstants.CALL_PARAMS);
            // flutter call native
            if (MethodConstants.RELOAD.equals(method)) {
                if (engineService != null){
                    engineService.forceLoadScript();
                }
            }else if (MethodConstants.callNative.equals(method)){
                if (engineService != null){
                    engineService.invokeNativeModule(params.get(MethodConstants.CALL_MODULE) + "",params.get(MethodConstants.CALL_METHOD)+ "", params, new BridgeCallback() {
                        @Override
                        public void onResult(int code, String reason, Map<String, Object> bridgeResult) {
                            result.success(bridgeResult);
                        }
                    });
                }
            } else if (MethodConstants.PRINT.equals(method)) {
                ThreshLogger.d("MethodCall.method = " + method, result.toString());
            }
        } else {
            ThreshLogger.d("MethodCall null" + channelMethod);
        }
    }

    @Override
    public void invokeMethod(String method, Map params) {
        if (params != null &&  channel != null ) {
            channel.invokeMethod(method, params);
            ThreshLogger.v(params + "[finish]");
        } else {
            ThreshLogger.v("js_engine_js_call_flutter_null");
        }
    }
}