package io.manbang.frontend.thresh.manager.flutterengine;

import android.content.Context;

import io.flutter.FlutterInjector;
import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.embedding.engine.FlutterEngineCache;
import io.flutter.embedding.engine.FlutterEngineGroup;
import io.flutter.embedding.engine.dart.DartExecutor;
import io.flutter.embedding.engine.loader.FlutterLoader;
import io.flutter.plugin.common.MethodChannel;
import io.manbang.frontend.thresh.util.ThreshLogger;

/**
 * flutterEngine 管理
 * 2.2版本引入FlutterEngineGroup,降低多页面内存占用
 */
public class FlutterEngineExecute implements IFlutterEngineExecute {

    private FlutterEngineGroup engineGroup;
    private Context context;
    private LoadFlutterPage loadFlutterPage;

    public FlutterEngineExecute() {
    }

    public void init(Context context) {
        if (android.os.Build.VERSION.SDK_INT >= 24) {
            engineGroup = new FlutterEngineGroup(context);
            engineGroup.createAndRunDefaultEngine(context);
        }else{
            FlutterLoader loader = FlutterInjector.instance().flutterLoader();
            if (!loader.initialized()) {
                loader.startInitialization(context.getApplicationContext());
                loader.ensureInitializationComplete(context,null);
            }
        }
        this.context = context;
    }

    @Override
    public void initFlutterEngine(IFlutterContainer flutterContainer) {
        if (context == null) {
            ThreshLogger.e("flutterEngine_init_fail : " + flutterContainer.getInitialRoute());
            return;
        }
        FlutterEngine topEngine;
        DartExecutor.DartEntrypoint dartEntrypoint = new DartExecutor.DartEntrypoint(
                FlutterInjector.instance().flutterLoader().findAppBundlePath(),
                flutterContainer.dartEntryPointFunctionName()
        );

        if (engineGroup != null) {
            topEngine = engineGroup.createAndRunEngine(context, dartEntrypoint);
        } else {
            topEngine = new FlutterEngine(context);
            topEngine.getDartExecutor().executeDartEntrypoint(dartEntrypoint);
        }
        topEngine.getNavigationChannel().setInitialRoute(flutterContainer.getInitialRoute());
        loadFlutterPage = new LoadFlutterPage(topEngine, flutterContainer.getInitialRoute());

        FlutterEngineCache.getInstance().put(flutterContainer.engineIdKey(), topEngine);
        flutterContainer.putEngineId("cached_engine_id", flutterContainer.engineIdKey());

    }


    @Override
    public void loadFlutterPage() {
        if (loadFlutterPage != null) {
            loadFlutterPage.load();
        }
    }


    private static class LoadFlutterPage {

        private final FlutterEngine topEngine;
        private final String initRoute;

        LoadFlutterPage(FlutterEngine topEngine, String initRoute) {

            this.topEngine = topEngine;
            this.initRoute = initRoute;
        }


        void load() {
            MethodChannel sMethodChannel = new MethodChannel(topEngine.getDartExecutor(), "io.manbang.frontend/method_channel");
            sMethodChannel.invokeMethod("setInitRoute", initRoute);
        }
    }

}
