/*
 * MIT License
 *
 * Copyright (c) 2020 ManBang Group
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
package io.manbang.frontend.thresh_example;

import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.DART_ENTRYPOINT_META_DATA_KEY;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.DEFAULT_BACKGROUND_MODE;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.DEFAULT_DART_ENTRYPOINT;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.DEFAULT_INITIAL_ROUTE;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.EXTRA_BACKGROUND_MODE;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.EXTRA_CACHED_ENGINE_ID;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.EXTRA_DESTROY_ENGINE_WITH_ACTIVITY;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.EXTRA_INITIAL_ROUTE;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.INITIAL_ROUTE_META_DATA_KEY;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.NORMAL_THEME_META_DATA_KEY;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.SPLASH_SCREEN_META_DATA_KEY;


import android.content.Context;
import android.content.pm.ActivityInfo;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.FragmentActivity;

import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.view.Window;
import android.view.WindowManager;
import androidx.fragment.app.FragmentManager;
import io.flutter.Log;
import io.flutter.embedding.android.DrawableSplashScreen;
import io.flutter.embedding.android.FlutterActivityLaunchConfigs.BackgroundMode;
import io.flutter.embedding.android.FlutterEngineConfigurator;
import io.flutter.embedding.android.FlutterEngineProvider;
import io.flutter.embedding.android.RenderMode;
import io.flutter.embedding.android.SplashScreen;
import io.flutter.embedding.android.SplashScreenProvider;
import io.flutter.embedding.android.TransparencyMode;
import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.embedding.engine.FlutterShellArgs;
import io.flutter.embedding.engine.plugins.util.GeneratedPluginRegister;
import io.flutter.plugin.common.StandardMessageCodec;
import io.flutter.plugin.platform.PlatformPlugin;
import io.manbang.frontend.thresh.containers.ThreshFragment;
import io.manbang.frontend.thresh_example.nativeview.NativeTextView;
import io.manbang.frontend.thresh_example.nativeview.NativeViewFactory;

public class ThreshDemoFragmentActivity extends FragmentActivity implements SplashScreenProvider,
        FlutterEngineProvider, FlutterEngineConfigurator {

    private static final String TAG = "ThreshDemoFragmentActivity";

    // FlutterFragment management.
    private static final String TAG_FLUTTER_FRAGMENT = "flutter_fragment";
    // TODO(mattcarroll): replace ID with R.id when build system supports R.java
    private static final int FRAGMENT_CONTAINER_ID = 609893468; // random number

    /**
     * Creates an {@link Intent} that launches a {@code ThreshDemoFragmentActivity}, which executes a
     * {@code main()} Dart entrypoint, and displays the "/" route as Flutter's initial route.
     */
    @NonNull
    public static Intent createDefaultIntent(@NonNull Context launchContext) {
        return withNewEngine().build(launchContext);
    }

    /**
     * Creates an {@link NewEngineIntentBuilder}, which can be used to
     * configure an {@link Intent} to launch a {@code ThreshDemoFragmentActivity} that internally creates
     * a new {@link FlutterEngine} using the desired Dart entrypoint, initial route, etc.
     */
    @NonNull
    public static NewEngineIntentBuilder withNewEngine() {
        return new NewEngineIntentBuilder(ThreshDemoFragmentActivity.class);
    }

    /**
     * Builder to create an {@code Intent} that launches a {@code ThreshDemoFragmentActivity} with a new
     * {@link FlutterEngine} and the desired configuration.
     */
    public static class NewEngineIntentBuilder {
        private final Class<? extends ThreshDemoFragmentActivity> activityClass;
        private String initialRoute = DEFAULT_INITIAL_ROUTE;
        private String backgroundMode = DEFAULT_BACKGROUND_MODE;

        /**
         * Constructor that allows this {@code NewEngineIntentBuilder} to be used by subclasses of
         * {@code ThreshDemoFragmentActivity}.
         *
         * <p>Subclasses of {@code ThreshDemoFragmentActivity} should provide their own static version of
         * {@link #withNewEngine()}, which returns an instance of {@code NewEngineIntentBuilder}
         * constructed with a {@code Class} reference to the {@code ThreshDemoFragmentActivity} subclass,
         * e.g.:
         *
         * <p>{@code return new NewEngineIntentBuilder(MyFlutterActivity.class); }
         */
        public NewEngineIntentBuilder(@NonNull Class<? extends ThreshDemoFragmentActivity> activityClass) {
            this.activityClass = activityClass;
        }

        /**
         * The initial route that a Flutter app will render in this {@code ThreshDemoFragmentActivity},
         * defaults to "/".
         */
        @NonNull
        public NewEngineIntentBuilder initialRoute(@NonNull String initialRoute) {
            this.initialRoute = initialRoute;
            return this;
        }

        @NonNull
        public NewEngineIntentBuilder backgroundMode(@NonNull BackgroundMode backgroundMode) {
            this.backgroundMode = backgroundMode.name();
            return this;
        }

        /**
         * Creates and returns an {@link Intent} that will launch a {@code ThreshDemoFragmentActivity} with
         * the desired configuration.
         */
        @NonNull
        public Intent build(@NonNull Context context) {
            return new Intent(context, activityClass)
                    .putExtra(EXTRA_INITIAL_ROUTE, initialRoute)
                    .putExtra(EXTRA_BACKGROUND_MODE, backgroundMode)
                    .putExtra(EXTRA_DESTROY_ENGINE_WITH_ACTIVITY, true);
        }
    }

    /**
     * Creates a {@link CachedEngineIntentBuilder}, which can be used to configure an {@link Intent}
     * to launch a {@code ThreshDemoFragmentActivity} that internally uses an existing {@link
     * FlutterEngine} that is cached in {@link io.flutter.embedding.engine.FlutterEngineCache}.
     */
    @NonNull
    public static CachedEngineIntentBuilder withCachedEngine(@NonNull String cachedEngineId) {
        return new CachedEngineIntentBuilder(ThreshDemoFragmentActivity.class, cachedEngineId);
    }

    /**
     * Builder to create an {@code Intent} that launches a {@code ThreshDemoFragmentActivity} with an
     * existing {@link FlutterEngine} that is cached in {@link
     * io.flutter.embedding.engine.FlutterEngineCache}.
     */
    public static class CachedEngineIntentBuilder {
        private final Class<? extends ThreshDemoFragmentActivity> activityClass;
        private final String cachedEngineId;
        private boolean destroyEngineWithActivity = false;
        private String backgroundMode = DEFAULT_BACKGROUND_MODE;

        public CachedEngineIntentBuilder(
                @NonNull Class<? extends ThreshDemoFragmentActivity> activityClass, @NonNull String engineId) {
            this.activityClass = activityClass;
            this.cachedEngineId = engineId;
        }

        /**
         * Returns true if the cached {@link FlutterEngine} should be destroyed and removed from the
         * cache when this {@code ThreshDemoFragmentActivity} is destroyed.
         *
         * <p>The default value is {@code false}.
         */
        public CachedEngineIntentBuilder destroyEngineWithActivity(boolean destroyEngineWithActivity) {
            this.destroyEngineWithActivity = destroyEngineWithActivity;
            return this;
        }

        @NonNull
        public CachedEngineIntentBuilder backgroundMode(@NonNull BackgroundMode backgroundMode) {
            this.backgroundMode = backgroundMode.name();
            return this;
        }

        /**
         * Creates and returns an {@link Intent} that will launch a {@code ThreshDemoFragmentActivity} with
         * the desired configuration.
         */
        @NonNull
        public Intent build(@NonNull Context context) {
            return new Intent(context, activityClass)
                    .putExtra(EXTRA_CACHED_ENGINE_ID, cachedEngineId)
                    .putExtra(EXTRA_DESTROY_ENGINE_WITH_ACTIVITY, destroyEngineWithActivity)
                    .putExtra(EXTRA_BACKGROUND_MODE, backgroundMode);
        }
    }

    @Nullable private ThreshDemoFragment flutterFragment;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        switchLaunchThemeForNormalTheme();

        super.onCreate(savedInstanceState);

        configureWindowForTransparency();
        setContentView(createFragmentContainer());
        configureStatusBarForFullscreenFlutterExperience();
        ensureFlutterFragmentCreated();
    }

    /**
     * Switches themes for this {@code Activity} from the theme used to launch this {@code Activity}
     * to a "normal theme" that is intended for regular {@code Activity} operation.
     *
     * <p>This behavior is offered so that a "launch screen" can be displayed while the application
     * initially loads. To utilize this behavior in an app, do the following:
     *
     * <ol>
     *   <li>Create 2 different themes in style.xml: one theme for the launch screen and one theme for
     *       normal display.
     *   <li>In the launch screen theme, set the "windowBackground" property to a {@code Drawable} of
     *       your choice.
     *   <li>In the normal theme, customize however you'd like.
     *   <li>In the AndroidManifest.xml, set the theme of your {@code ThreshDemoFragmentActivity} to your
     *       launch theme.
     *   <li>Add a {@code <meta-data>} property to your {@code ThreshDemoFragmentActivity} with a name of
     *       "io.flutter.embedding.android.NormalTheme" and set the resource to your normal theme,
     *       e.g., {@code android:resource="@style/MyNormalTheme}.
     * </ol>
     *
     * With the above settings, your launch theme will be used when loading the app, and then the
     * theme will be switched to your normal theme once the app has initialized.
     *
     * <p>Do not change aspects of system chrome between a launch theme and normal theme. Either
     * define both themes to be fullscreen or not, and define both themes to display the same status
     * bar and navigation bar settings. If you wish to adjust system chrome once your Flutter app
     * renders, use platform channels to instruct Android to do so at the appropriate time. This will
     * avoid any jarring visual changes during app startup.
     */
    private void switchLaunchThemeForNormalTheme() {
        try {
            ActivityInfo activityInfo =
                    getPackageManager().getActivityInfo(getComponentName(), PackageManager.GET_META_DATA);
            if (activityInfo.metaData != null) {
                int normalThemeRID = activityInfo.metaData.getInt(NORMAL_THEME_META_DATA_KEY, -1);
                if (normalThemeRID != -1) {
                    setTheme(normalThemeRID);
                }
            } else {
                Log.v(TAG, "Using the launch theme as normal theme.");
            }
        } catch (PackageManager.NameNotFoundException exception) {
            Log.e(
                    TAG,
                    "Could not read meta-data for ThreshDemoFragmentActivity. Using the launch theme as normal theme.");
        }
    }

    @Nullable
    @Override
    public SplashScreen provideSplashScreen() {
        Drawable manifestSplashDrawable = getSplashScreenFromManifest();
        if (manifestSplashDrawable != null) {
            return new DrawableSplashScreen(manifestSplashDrawable);
        } else {
            return null;
        }
    }

    @Nullable
    @SuppressWarnings("deprecation")
    private Drawable getSplashScreenFromManifest() {
        try {
            ActivityInfo activityInfo =
                    getPackageManager().getActivityInfo(getComponentName(), PackageManager.GET_META_DATA);
            Bundle metadata = activityInfo.metaData;
            Integer splashScreenId =
                    metadata != null ? metadata.getInt(SPLASH_SCREEN_META_DATA_KEY) : null;
            return splashScreenId != null
                    ? Build.VERSION.SDK_INT > Build.VERSION_CODES.LOLLIPOP
                    ? getResources().getDrawable(splashScreenId, getTheme())
                    : getResources().getDrawable(splashScreenId)
                    : null;
        } catch (PackageManager.NameNotFoundException e) {
            // This is never expected to happen.
            return null;
        }
    }

    /**
     * Sets this {@code Activity}'s {@code Window} background to be transparent, and hides the status
     * bar, if this {@code Activity}'s desired {@link BackgroundMode} is {@link
     * BackgroundMode#transparent}.
     *
     * <p>For {@code Activity} transparency to work as expected, the theme applied to this {@code
     * Activity} must include {@code <item name="android:windowIsTranslucent">true</item>}.
     */
    private void configureWindowForTransparency() {
        BackgroundMode backgroundMode = getBackgroundMode();
        if (backgroundMode == BackgroundMode.transparent) {
            getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        }
    }

    @NonNull
    private View createFragmentContainer() {
        FrameLayout container = new FrameLayout(this);
        container.setId(FRAGMENT_CONTAINER_ID);
        container.setLayoutParams(
                new ViewGroup.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        return container;
    }

    private void ensureFlutterFragmentCreated() {
        FragmentManager fragmentManager = getSupportFragmentManager();
        flutterFragment = (ThreshDemoFragment) fragmentManager.findFragmentByTag(TAG_FLUTTER_FRAGMENT);
        if (flutterFragment == null) {
            // No FlutterFragment exists yet. This must be the initial Activity creation. We will create
            // and add a new FlutterFragment to this Activity.
            flutterFragment = new ThreshDemoFragment();
            Bundle bundle = new Bundle();
            bundle.putBoolean("should_attach_engine_to_activity",true);
            bundle.putString(ThreshFragment.ARG_INITIAL_ROUTE,getIntent().getStringExtra(EXTRA_INITIAL_ROUTE));

            flutterFragment.setArguments(bundle);
            fragmentManager
                    .beginTransaction()
                    .add(FRAGMENT_CONTAINER_ID, flutterFragment, TAG_FLUTTER_FRAGMENT)
                    .commit();
        }
    }

    @NonNull
    protected ThreshFragment createFlutterFragment() {
        final BackgroundMode backgroundMode = getBackgroundMode();
        final RenderMode renderMode = getRenderMode();
        final TransparencyMode transparencyMode =
                backgroundMode == BackgroundMode.opaque
                        ? TransparencyMode.opaque
                        : TransparencyMode.transparent;

        if (getCachedEngineId() != null) {
            Log.v(
                    TAG,
                    "Creating FlutterFragment with cached engine:\n"
                            + "Cached engine ID: "
                            + getCachedEngineId()
                            + "\n"
                            + "Will destroy engine when Activity is destroyed: "
                            + shouldDestroyEngineWithHost()
                            + "\n"
                            + "Background transparency mode: "
                            + backgroundMode
                            + "\n"
                            + "Will attach FlutterEngine to Activity: "
                            + shouldAttachEngineToActivity());

            return ThreshDemoFragment.withCachedEngine(getCachedEngineId())
                    .renderMode(renderMode)
                    .transparencyMode(transparencyMode)
                    .shouldAttachEngineToActivity(shouldAttachEngineToActivity())
                    .destroyEngineWithFragment(shouldDestroyEngineWithHost())
                    .build();
        } else {
            Log.v(
                    TAG,
                    "Creating FlutterFragment with new engine:\n"
                            + "Background transparency mode: "
                            + backgroundMode
                            + "\n"
                            + "Dart entrypoint: "
                            + getDartEntrypointFunctionName()
                            + "\n"
                            + "Initial route: "
                            + getInitialRoute()
                            + "\n"
                            + "App bundle path: "
                            + getAppBundlePath()
                            + "\n"
                            + "Will attach FlutterEngine to Activity: "
                            + shouldAttachEngineToActivity());

            return ThreshDemoFragment.withNewEngine()
                    .dartEntrypoint(getDartEntrypointFunctionName())
                    .initialRoute(getInitialRoute())
                    .appBundlePath(getAppBundlePath())
                    .flutterShellArgs(FlutterShellArgs.fromIntent(getIntent()))
                    .renderMode(renderMode)
                    .transparencyMode(transparencyMode)
                    .shouldAttachEngineToActivity(shouldAttachEngineToActivity())
                    .build();
        }
    }

    private void configureStatusBarForFullscreenFlutterExperience() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            Window window = getWindow();
            window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            window.setStatusBarColor(0x40000000);
            window.getDecorView().setSystemUiVisibility(PlatformPlugin.DEFAULT_SYSTEM_UI);
        }
    }

    @Override
    public void onPostResume() {
        super.onPostResume();
        flutterFragment.onPostResume();
    }

    @Override
    protected void onNewIntent(@NonNull Intent intent) {
        // Forward Intents to our FlutterFragment in case it cares.
        flutterFragment.onNewIntent(intent);
        super.onNewIntent(intent);
    }

    @Override
    public void onBackPressed() {
        flutterFragment.onBackPressed();
    }

    @Override
    public void onRequestPermissionsResult(
            int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        flutterFragment.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }

    @Override
    public void onUserLeaveHint() {
        flutterFragment.onUserLeaveHint();
    }

    @Override
    public void onTrimMemory(int level) {
        super.onTrimMemory(level);
        flutterFragment.onTrimMemory(level);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        flutterFragment.onActivityResult(requestCode, resultCode, data);
    }

    @SuppressWarnings("unused")
    @Nullable
    protected FlutterEngine getFlutterEngine() {
        return flutterFragment.getFlutterEngine();
    }

    /**
     * Returns false if the {@link FlutterEngine} backing this {@code ThreshDemoFragmentActivity} should
     * outlive this {@code ThreshDemoFragmentActivity}, or true to be destroyed when the {@code
     * ThreshDemoFragmentActivity} is destroyed.
     *
     * <p>The default value is {@code true} in cases where {@code ThreshDemoFragmentActivity} created its
     * own {@link FlutterEngine}, and {@code false} in cases where a cached {@link FlutterEngine} was
     * provided.
     */
    public boolean shouldDestroyEngineWithHost() {
        return getIntent().getBooleanExtra(EXTRA_DESTROY_ENGINE_WITH_ACTIVITY, false);
    }

    protected boolean shouldAttachEngineToActivity() {
        return true;
    }

    /** Hook for subclasses to easily provide a custom {@code FlutterEngine}. */
    @Nullable
    @Override
    public FlutterEngine provideFlutterEngine(@NonNull Context context) {
        // No-op. Hook for subclasses.
        return null;
    }

    /**
     * Hook for subclasses to easily configure a {@code FlutterEngine}.
     *
     * <p>This method is called after {@link #provideFlutterEngine(Context)}.
     *
     * <p>All plugins listed in the app's pubspec are registered in the base implementation of this
     * method. To avoid automatic plugin registration, override this method without invoking super().
     * To keep automatic plugin registration and further configure the flutterEngine, override this
     * method, invoke super(), and then configure the flutterEngine as desired.
     */
    @Override
    public void configureFlutterEngine(@NonNull FlutterEngine flutterEngine) {
        GeneratedPluginRegister.registerGeneratedPlugins(flutterEngine);
        NativeViewFactory nativeViewFactory = new NativeViewFactory(this, StandardMessageCodec.INSTANCE, NativeTextView.NATIVE_TEXT_VIEW);
        flutterEngine.getPlatformViewsController().getRegistry().registerViewFactory(NativeTextView.NATIVE_TEXT_VIEW, nativeViewFactory);
    }

    /**
     * Hook for the host to cleanup references that were established in {@link
     * #configureFlutterEngine(FlutterEngine)} before the host is destroyed or detached.
     *
     * <p>This method is called in {@link #onDestroy()}.
     */
    @Override
    public void cleanUpFlutterEngine(@NonNull FlutterEngine flutterEngine) {
        // No-op. Hook for subclasses.
    }

    @NonNull
    protected String getAppBundlePath() {
        // If this Activity was launched from tooling, and the incoming Intent contains
        // a custom app bundle path, return that path.
        // TODO(mattcarroll): determine if we should have an explicit FlutterTestActivity instead of
        // conflating.
        if (isDebuggable() && Intent.ACTION_RUN.equals(getIntent().getAction())) {
            String appBundlePath = getIntent().getDataString();
            if (appBundlePath != null) {
                return appBundlePath;
            }
        }

        return null;
    }

    @NonNull
    public String getDartEntrypointFunctionName() {
        try {
            ActivityInfo activityInfo =
                    getPackageManager().getActivityInfo(getComponentName(), PackageManager.GET_META_DATA);
            Bundle metadata = activityInfo.metaData;
            String desiredDartEntrypoint =
                    metadata != null ? metadata.getString(DART_ENTRYPOINT_META_DATA_KEY) : null;
            return desiredDartEntrypoint != null ? desiredDartEntrypoint : DEFAULT_DART_ENTRYPOINT;
        } catch (PackageManager.NameNotFoundException e) {
            return DEFAULT_DART_ENTRYPOINT;
        }
    }

    @NonNull
    protected String getInitialRoute() {
        if (getIntent().hasExtra(EXTRA_INITIAL_ROUTE)) {
            return getIntent().getStringExtra(EXTRA_INITIAL_ROUTE);
        }

        try {
            ActivityInfo activityInfo =
                    getPackageManager().getActivityInfo(getComponentName(), PackageManager.GET_META_DATA);
            Bundle metadata = activityInfo.metaData;
            String desiredInitialRoute =
                    metadata != null ? metadata.getString(INITIAL_ROUTE_META_DATA_KEY) : null;
            return desiredInitialRoute != null ? desiredInitialRoute : DEFAULT_INITIAL_ROUTE;
        } catch (PackageManager.NameNotFoundException e) {
            return DEFAULT_INITIAL_ROUTE;
        }
    }

    /**
     * Returns the ID of a statically cached {@link FlutterEngine} to use within this {@code
     * ThreshDemoFragmentActivity}, or {@code null} if this {@code ThreshDemoFragmentActivity} does not want
     * to use a cached {@link FlutterEngine}.
     */
    @Nullable
    protected String getCachedEngineId() {
        return getIntent().getStringExtra(EXTRA_CACHED_ENGINE_ID);
    }

    /**
     * The desired window background mode of this {@code Activity}, which defaults to {@link
     * BackgroundMode#opaque}.
     */
    @NonNull
    protected BackgroundMode getBackgroundMode() {
        if (getIntent().hasExtra(EXTRA_BACKGROUND_MODE)) {
            return BackgroundMode.valueOf(getIntent().getStringExtra(EXTRA_BACKGROUND_MODE));
        } else {
            return BackgroundMode.opaque;
        }
    }

    @NonNull
    protected RenderMode getRenderMode() {
        final BackgroundMode backgroundMode = getBackgroundMode();
        return backgroundMode == BackgroundMode.opaque ? RenderMode.surface : RenderMode.texture;
    }

    /**
     * Returns true if Flutter is running in "debug mode", and false otherwise.
     *
     * <p>Debug mode allows Flutter to operate with hot reload and hot restart. Release mode does not.
     */
    private boolean isDebuggable() {
        return (getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE) != 0;
    }
}
