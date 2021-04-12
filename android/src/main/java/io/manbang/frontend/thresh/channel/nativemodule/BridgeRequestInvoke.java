/*
 * MIT License
 *
 * Copyright (c) 2021 ManBang Group
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
package io.manbang.frontend.thresh.channel.nativemodule;

import android.content.Context;
import android.os.Handler;

import java.util.Map;

import io.manbang.frontend.thresh.channel.BridgeCallback;
import io.manbang.frontend.thresh.channel.BridgeUtil;
import io.manbang.frontend.thresh.channel.MethodConstants;
import io.manbang.frontend.thresh.runtime.ThreshEngine;
import io.manbang.frontend.thresh.util.ThreshLogger;

 class BridgeRequestInvoke implements NativeModule.INativeInvoke {

    private final Context context;
    private final Handler handler;
    private final NativeModule nativeModule;

    BridgeRequestInvoke(Context context, Handler handler, NativeModule nativeModule) {

        this.context = context;
        this.handler = handler;
        this.nativeModule = nativeModule;
    }

    @Override
    public void invoke(final ThreshEngine engine, final Map params) {
        final Map request = BridgeUtil.jsToBridgeRequest(params);
        final String module = (String)request.get(MethodConstants.CALL_MODULE);
        final String method = (String) request.get(MethodConstants.CALL_METHOD);
        nativeModule.invokeNativeModule(module, method, request, new BridgeCallback() {
            @Override
            public void onResult(int code, String reason,
                                 Map<String, Object> bridgeResult) {
                if (context == null) {
                    return;
                }
                if ("log".equals(BridgeUtil.getMethod(params))) {
                    ThreshLogger.v("js-native-log: " + params);
                    return;
                }
                final Map v8Params = BridgeUtil.bridgeResponseToJS(BridgeUtil.getBridgeMethodId(params),
                        BridgeUtil.getContextId(params), bridgeResult);

                if (v8Params != null) {
                    handler.post(new Runnable() {
                        @Override
                        public void run() {
                            try {
                                engine.executeJSFunction(engine.getThreshOptions().callJSMethod, null, v8Params);
                            } catch (Exception e) {
                                ThreshLogger.e(e, "Unhandled exception %s", e.toString());
                            }
                        }
                    });
                } else {
                    ThreshLogger.v("map null");
                }
            }
        });
    }

}

