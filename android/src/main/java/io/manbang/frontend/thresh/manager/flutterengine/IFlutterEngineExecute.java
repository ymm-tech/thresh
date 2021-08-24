package io.manbang.frontend.thresh.manager.flutterengine;

public interface IFlutterEngineExecute {

     interface IFlutterContainer {
        void putEngineId(String key, String engineId);

        String getInitialRoute();

        String engineIdKey();

        String dartEntryPointFunctionName();

    }

     void initFlutterEngine(IFlutterContainer flutterContainer) ;

     void loadFlutterPage();
}
