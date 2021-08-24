package io.manbang.frontend.thresh.runtime.release;

import android.util.Log;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import io.manbang.frontend.thresh.runtime.JSModule;

public class ModuleRelease {

    private static final String TAG = "ModuleRelease";

    private static final ModuleRelease manager = new ModuleRelease();

    public static ModuleRelease getInstance() {
        return manager;
    }

    //value 为module存在的数量
    private final Map<JSModule, Integer> moduleMap;
    private ReleaseService releaseService;


    private ModuleRelease() {
        this.moduleMap = new HashMap<>();
    }

    public void init(JsModuleReleaseConfig config) {
        this.releaseService = new ReleaseService(config);
    }

    public void onCreate(JSModule jsModule) {
        Integer count = moduleMap.get(jsModule);
        if (count == null) {
            count = 0;
        }
        moduleMap.put(jsModule, count + 1);
        Log.d(TAG, jsModule.getModuleName() + "==>初始化");
        if (releaseService != null && releaseService.cancelRelease(jsModule)) {
            Log.d(TAG, jsModule.getModuleName() + "==>销毁任务结束");
        }
        Log.d(TAG, "存活ModuleList==>" + moduleListString());
    }

    public void onDestroy(final JSModule jsModule) {
        Log.d(TAG, jsModule.getModuleName() + ":" + jsModule.toString() + "==>退到后台");
        Integer count = moduleMap.get(jsModule);
        if (count == null || count == 0 || --count == 0) {
            moduleMap.put(jsModule, 0);
            releaseJsModule(jsModule);
        } else {
            moduleMap.put(jsModule, count);
        }
    }

    private void releaseJsModule(final JSModule jsModule) {
        if (releaseService == null) {
            return;
        }
        Log.d(TAG, jsModule.getModuleName() + "==>准备销毁");
        releaseService.release(jsModule, new ReleaseService.OnReleaseCallBack() {
            @Override
            public void callBack(boolean release) {
                if (release) {
                    moduleMap.remove(jsModule);
                    Log.d(TAG, jsModule.getModuleName() + "==>销毁成功");
                    Log.d(TAG, "存活ModuleList==>" + moduleListString());
                }
            }
        });
    }

    public void onLowMemory() {
        if (releaseService != null) {
            List<JSModule> releasedModuleList = releaseService.lowMemoryRelease(moduleMap);
            for (JSModule module : releasedModuleList) {
                moduleMap.remove(module);
            }
            Log.d(TAG, "存活ModuleList==>" + moduleListString());
        }
    }

    private String moduleListString() {
        Set<JSModule> jsModules = moduleMap.keySet();
        StringBuilder builder = new StringBuilder("[");
        for (JSModule module : jsModules) {
            builder.append(module.getModuleName())
                    .append("(")
                    .append(moduleMap.get(module))
                    .append(")")
                    .append("、");
        }
        return builder.append("]").toString();
    }
}

