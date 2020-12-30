package io.manbang.frontend.thresh.containers;

import android.app.Activity;
import android.graphics.PixelFormat;
import android.net.Uri;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.accessibility.AccessibilityNodeProvider;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import io.flutter.plugin.common.BasicMessageChannel;
import io.flutter.plugin.common.StringCodec;
import io.flutter.view.AccessibilityBridge;
import io.flutter.view.FlutterMain;
import io.flutter.view.FlutterNativeView;
import io.flutter.view.FlutterRunArguments;
import io.flutter.view.FlutterView;
import io.manbang.frontend.thresh.Thresh;
import io.manbang.frontend.thresh.util.ThreshLogger;
import io.manbang.frontend.thresh.view.ThreshFlutterView;

/**
 * A delegate for handling Thresh Application support. This delegate is unaware whether it is used in
 * an {@link android.app.Activity} or a {@link android.app.Fragment}.
 */
public class ThreshDelegate {

    public static final String KEY_ROUTER_NAME = "thresh_launch_router_name";

    private final Activity mActivity;

    private FlutterView mRootView;

    @Nullable
    private String mLaunchOptions;
    /**
     * page root view id
     */
    private String mRootId;

    public ThreshDelegate(Activity activity, @Nullable Bundle launchOptions) {
        mActivity = activity;
        mLaunchOptions =  (launchOptions == null || TextUtils.isEmpty(launchOptions.getString(KEY_ROUTER_NAME))) ?
                "/" : launchOptions.getString(KEY_ROUTER_NAME);
    }
    public ThreshDelegate(Activity activity, @Nullable String launchOptions) {
        mActivity = activity;
        mLaunchOptions = launchOptions;
    }
    public void loadApp() {
        if (mRootView != null) {
            throw new IllegalStateException("Cannot loadApp while app is already running.");
        }
        if (Thresh.get().platform().supportJSSingleton()) {
            Uri uri = Uri.parse(mLaunchOptions);
            mRootId =uri.getQueryParameter("threshRootId");
            if (TextUtils.isEmpty(mRootId)){
                mRootId = Thresh.get().createThreshRootId();
            }
        }
        mRootView = createRootView(mLaunchOptions);
    }

    public void onStart() {
        if (getThreshRootView() != null) {
            getThreshRootView().onStart();
        }
        ThreshLogger.v("onStart");
    }

    public void onResume() {
        if (getThreshRootView() != null) {
            getThreshRootView().onPostResume();
        }
        ThreshLogger.v("onResume");
    }

    public void onPause() {
        if (getThreshRootView() != null) {
            getThreshRootView().onPause();
        }
        ThreshLogger.v("onPause");
    }

    public void onStop() {
        if (getThreshRootView() != null) {
            getThreshRootView().onStop();
        }

        ThreshLogger.v("onStop");
    }

    public void onDestroy() {
        try {
            if (getThreshRootView() != null) {
                try {
                    AccessibilityNodeProvider accessibilityNodeProvider = getThreshRootView()
                            .getAccessibilityNodeProvider();
                    if (accessibilityNodeProvider instanceof AccessibilityBridge) {
                        ((AccessibilityBridge) accessibilityNodeProvider).release();
                    }
                } catch (Throwable e) {
                    e.printStackTrace();
                }
                getThreshRootView().destroy();
            }
            ThreshLogger.v("onDestroy");
        } catch (Exception e) {
            ThreshLogger.e(e, "Unhandled exception %s", e.toString());
        }
    }

    public FlutterView getThreshRootView() {
        return mRootView;
    }

    /**
     * create root view
     *
     * @param routerName page router address
     *     <LI> Routing parameter description：ymm://flutter.dynamic/dynamic-page?page=XXX&biz=XXX&threshRootId=XXX&orderId=XXX </LI>
     *     <p1> path : thresh/thresh-page       -- Y                                   </p1>
     *     <p2> Fixed parameter : page=XXX               -- Y      -- Specify a page                </p2>
     *     <p3> Fixed parameter : threshRootId=XXX       -- Y      -- Page id number, singleton must be transmitted </p3>
     *     <p4> Fixed parameter : biz=XXX                -- N      -- Specify a business                </p4>
     *     <p5> Fixed parameter : buildType=0/1          -- N      -- Whether to display the debug panel in compilation mode    </p5>
     *     <p6> Fixed parameter : jsBundlePath=XXX       -- N      -- bundle path                   </p6>
     *     <p7> Fixed parameter : whiteScreenOvertime=X  -- N      -- White screen detection time, default 3s         </p7>
     *     <p8> Fixed parameter : referPageName=X        -- N      -- Previous page                 </p8>
     *     <p9> Fixed parameter : param1=X1&param2=X2&param3=X3                                </p9>
     */
    protected FlutterView createRootView(String routerName) {
        mRootView = createView(mActivity, routerName);
        mRootView.getHolder().setFormat(PixelFormat.TRANSLUCENT);
        FlutterRunArguments arguments = new FlutterRunArguments();
        arguments.bundlePath = FlutterMain.findAppBundlePath();
        arguments.entrypoint = Thresh.get().platform().getDartEntryPoint();
        mRootView.runFromBundle(arguments);
        return mRootView;
    }
    public FlutterView createView(@NonNull final Activity activity,
                                         final String initialRoute) {
        FlutterMain.startInitialization(activity.getApplicationContext());
        FlutterMain.ensureInitializationComplete(activity.getApplicationContext(), null);
        final FlutterNativeView nativeView = new FlutterNativeView(activity);
        final FlutterView flutterView = new ThreshFlutterView(activity, null, nativeView) {
            private final BasicMessageChannel<String> lifecycleMessages = new BasicMessageChannel<>(
                    this, "flutter/lifecycle", StringCodec.INSTANCE);

            @Override
            public void onFirstFrame() {
                super.onFirstFrame();
                setAlpha(1.0f);
            }

            @Override
            public void onPostResume() {
                // Overriding default behavior to avoid dictating system UI via PlatformPlugin.
                lifecycleMessages.send("AppLifecycleState.resumed");
            }
        };
        if (initialRoute != null) {
            flutterView.setInitialRoute(initialRoute);
        }
        flutterView.setAlpha(0.0f);
        return flutterView;
    }
    /**
     * root view id
     */
    public String getRootId(){
        return mRootId;
    }
}
