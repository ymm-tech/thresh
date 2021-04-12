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
package io.manbang.frontend.thresh_example;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Handler;
import android.text.TextUtils;

import java.util.HashMap;
import java.util.Map;

import io.manbang.frontend.thresh.runtime.jscore.bundle.BundleType;
import io.manbang.frontend.thresh.channel.BridgeCallback;
import io.manbang.frontend.thresh.channel.nativemodule.NativeModule;
import io.manbang.frontend.thresh.containers.ThreshActivity;
import io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs;
import io.manbang.frontend.thresh.util.ThreshLogger;

public class ThreshDemoBridge extends NativeModule {

    public Context context;


    public ThreshDemoBridge(Context context) {
        super(context);
        this.context = context;
    }

    public ThreshDemoBridge(Context context, Handler handler) {
        super(context, handler);
        this.context = context;
    }

    @Override
    public void invokeNativeModule(String module, String method, Map params, BridgeCallback callback) {
        // 执行bridge操作
        if (params == null){
            return;
        }
        //封装返回数据
        Map response = new HashMap();
        Map data = new HashMap();
        response.put("reason","");
        response.put("code",0);
        data.put("reason","");
        data.put("code",0);
        response.put("data", data);
        if ("base".equals(module)){
            // 基础业务
            if ("closeWindow".equals(method)){
                if ( context != null && context instanceof Activity){
                    ((Activity) context).finish();
                }
            } else if ("openSchema".equals(method) && params.get("params") != null){

                SharedPreferences sp = context.getSharedPreferences("thresh_data", Context.MODE_PRIVATE);
                String debug_local_ip = sp.getString("debug_local_ip","");

                if(TextUtils.isEmpty(debug_local_ip)){
                    Intent intent = new Intent(context, ThreshDemoFragmentActivity.class);
                    intent.putExtra("load_mode", BundleType.ASSETS_FILE.getType());
                    intent.putExtra(ThreshFlutterActivityLaunchConfigs.EXTRA_INITIAL_ROUTE, "thresh/thresh-page?page=homePage");
                    context.startActivity(intent);
                }else{
                    Intent intent = new Intent(context, ThreshDemoActivity.class);
                    intent.putExtra("load_mode", BundleType.JS_SERVER.getType())
                            .putExtra("debug_local_port", "12345")
                            .putExtra("debug_local_ip", debug_local_ip)
                            .putExtra(ThreshFlutterActivityLaunchConfigs.EXTRA_INITIAL_ROUTE, "thresh/thresh-page?page=homePage")
                            .putExtra(ThreshFlutterActivityLaunchConfigs.EXTRA_DESTROY_ENGINE_WITH_ACTIVITY, true);
                    context.startActivity(intent);
                }
            }else if ("log".equals(method) && params.get("params") != null){
                ThreshLogger.v(params.get("params").toString());
            }
        }else if ("thresh".equals(module)){
            // thresh业务
            if ("jsbundlePath".equals(method)){
                // 测试方法
                data.put("data","/sdcard/data");
            }
        }else {
            // 其他业务
        }
        if (callback != null){
            callback.onResult(0,"",response);
        }
    }
}