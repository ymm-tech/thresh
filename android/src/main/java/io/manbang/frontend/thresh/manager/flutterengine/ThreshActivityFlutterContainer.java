package io.manbang.frontend.thresh.manager.flutterengine;

import io.manbang.frontend.thresh.containers.ThreshActivity;
import io.manbang.frontend.thresh.manager.ContextIdManager;

public class ThreshActivityFlutterContainer implements FlutterEngineExecute.IFlutterContainer {

    private ThreshActivity activity;
    private String dartEntryPointFunctionName;

    public ThreshActivityFlutterContainer(ThreshActivity activity){

        this(activity,"main");
    }

    public ThreshActivityFlutterContainer(ThreshActivity activity,String dartEntryPointFunctionName){

        this.activity = activity;
        this.dartEntryPointFunctionName =  dartEntryPointFunctionName;
    }
    
    @Override
    public void putEngineId(String key, String engineId) {
        activity.getIntent().putExtra(key,engineId);
    }

    @Override
    public String getInitialRoute() {
        return activity.getInitialRoute();
    }

    @Override
    public String engineIdKey() {
        
        return ContextIdManager.INSTANCE.getContextId(activity);
    }

    @Override
    public String dartEntryPointFunctionName() {
        return dartEntryPointFunctionName;
    }
}
