package io.manbang.frontend.thresh.runtime.release;

import android.os.Handler;
import android.util.Log;

import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import io.manbang.frontend.thresh.runtime.JSManager;
import io.manbang.frontend.thresh.runtime.JSModule;

/**
 * 释放Module服务
 */
class ReleaseService {

    private static final String TAG = "ModuleRelease.RS";

    public interface OnReleaseCallBack {
        void callBack(boolean release);
    }

    private final JsModuleReleaseConfig config;
    private final Handler handler;
    private final Map<String, Runnable> taskMap = new HashMap<>();

    ReleaseService(JsModuleReleaseConfig config) {
        this.config = config;
        this.handler = new Handler();
        Log.d(TAG, "module释放策略==>" + new Gson().toJson(config));
    }

    boolean cancelRelease(JSModule jsModule) {
        final String moduleName = jsModule.getModuleName();
        if (taskMap.containsKey(moduleName)) {
            handler.removeCallbacks(taskMap.get(moduleName));
            taskMap.remove(moduleName);
            Log.d(TAG, jsModule.getModuleName() + "==>销毁任务取消");
            return true;
        }
        Log.d(TAG, jsModule.getModuleName() + "==>不存在正在运行的销毁任务");
        return false;
    }

    void release(final JSModule jsModule, final ReleaseService.OnReleaseCallBack callBack) {

        for (JsModuleReleaseConfig.ModuleItemConfig config : config.modules) {
            if (!jsModule.getModuleName().equals(config.moduleName)) {
                continue;
            }
            Log.d(TAG, jsModule.getModuleName() + "==>销毁策略："+new Gson().toJson(config));
            if (!config.release) {
                callBack.callBack(false);
                Log.d(TAG, jsModule.getModuleName() + "==>不需要销毁");
                return;
            }
            if (config.delayReleaseTime <= 0) {
                Log.d(TAG, jsModule.getModuleName() + "==>立即销毁");
                JSManager.getInstance().releaseJsModule(jsModule);
                callBack.callBack(true);
                return;
            }

            cancelRelease(jsModule);

            taskMap.put(jsModule.getModuleName(), new Runnable() {
                @Override
                public void run() {
                    Log.d(TAG, jsModule.getModuleName() + "==>延迟销毁完成");
                    JSManager.getInstance().releaseJsModule(jsModule);
                    taskMap.remove(jsModule.getModuleName());
                    callBack.callBack(true);
                }
            });

            Log.d(TAG, jsModule.getModuleName() + "==>延迟销毁 (" + config.delayReleaseTime + "ms)");

            handler.postDelayed(taskMap.get(jsModule.getModuleName()), config.delayReleaseTime);

            return;
        }

        Log.d(TAG, jsModule.getModuleName() + "==>未匹配到销毁策略");
    }

    /**
     * @param moduleMap 需要释放的moduleMap key：module value：存在的数量
     * @return 释放掉的module列表
     */
    List<JSModule> lowMemoryRelease(Map<JSModule, Integer> moduleMap) {

        List<JSModule> releaseModules = new ArrayList<>();

        if (!config.lowMemoryRelease) {
            return releaseModules;
        }

        Set<JSModule> jsModules = moduleMap.keySet();
        for (JSModule module : jsModules) {
            Integer count = moduleMap.get(module);
            if (count == null || count <= 0) {
                releaseModules.add(module);
                JSManager.getInstance().releaseJsModule(module);
            }
        }

        return releaseModules;

    }

}
