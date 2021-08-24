package io.manbang.frontend.thresh.manager.flutterengine;

import android.content.Intent;

public class ThreshIntentContainer implements FlutterEngineExecute.IFlutterContainer {

    private final Intent intent;
    private final String route;
    private String engineId;
    private String dartEntryPointFunctionName;

    public ThreshIntentContainer(Intent intent, String route,String engineId,String dartEntryPointFunctionName){

        this.intent = intent;
        this.route = route;
        this.engineId = engineId;
        this.dartEntryPointFunctionName = dartEntryPointFunctionName;
    }

    public ThreshIntentContainer(Intent intent, String route,String engineId){

       this(intent,route,engineId,"main");
    }
    
    @Override
    public void putEngineId(String key, String engineId) {
        intent.putExtra(key,engineId);
    }

    @Override
    public String getInitialRoute() {
        return route;
    }

    @Override
    public String engineIdKey() {
        return engineId;
    }

    @Override
    public String dartEntryPointFunctionName() {
        return dartEntryPointFunctionName;
    }
}
