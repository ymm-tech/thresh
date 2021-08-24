package io.manbang.frontend.thresh.manager.flutterengine;

import io.manbang.frontend.thresh.containers.ThreshFragment;
import io.manbang.frontend.thresh.manager.ContextIdManager;

public class ThreshFragmentContainer implements FlutterEngineExecute.IFlutterContainer {

    private ThreshFragment fragment;
    private String dartEntryPointFunctionName ;

    public ThreshFragmentContainer(ThreshFragment fragment) {

        this(fragment,"main");
    }

    public ThreshFragmentContainer(ThreshFragment fragment,String dartEntryPointFunctionName) {
        this.fragment = fragment;
        this.dartEntryPointFunctionName = dartEntryPointFunctionName;
    }

    @Override
    public void putEngineId(String key, String engineId) {
        if (fragment.getArguments() != null) {
            fragment.getArguments().putString(key, engineId);
        }
    }

    @Override
    public String getInitialRoute() {
        return fragment.getInitialRoute();
    }

    @Override
    public String engineIdKey() {
        return ContextIdManager.INSTANCE.getContextId(fragment);
    }

    @Override
    public String dartEntryPointFunctionName() {
        return dartEntryPointFunctionName;
    }
}
