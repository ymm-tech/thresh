package io.manbang.frontend.thresh.channel.nativemodule;

import android.app.Activity;
import android.content.Intent;

import com.google.gson.Gson;

import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

import io.flutter.plugin.common.JSONUtil;
import io.manbang.frontend.thresh.runtime.ThreshEngine;

public class SendResultInvoke implements NativeModule.INativeInvoke {

    private Activity activity;

    SendResultInvoke(Activity activity) {

        this.activity = activity;
    }

    @Override
    public void invoke(ThreshEngine engine, Map params) {
        Intent intent = new Intent();
        final String PARAM_KEY = "params";
        if(params!=null&&params.size()>0&&params.containsKey(PARAM_KEY)){
            Object resultParam = params.get(PARAM_KEY);
            if(resultParam instanceof String){
                intent.putExtra(PARAM_KEY,(String) resultParam);
            }else if(resultParam instanceof Map){
                intent.putExtra(PARAM_KEY,new JSONObject((Map) resultParam).toString());
            }
        }
        activity.setResult(Activity.RESULT_OK, intent);
    }
}
