package io.manbang.frontend.thresh.runtime.release;


import java.util.List;

/**
 * Module释放配置
 */
public  class JsModuleReleaseConfig {
    public static class ModuleItemConfig {
        String moduleName;
        boolean release;
        long delayReleaseTime;
    }

    boolean lowMemoryRelease;
    List<ModuleItemConfig> modules;
}
