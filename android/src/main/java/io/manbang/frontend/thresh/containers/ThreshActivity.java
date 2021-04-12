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
package io.manbang.frontend.thresh.containers;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import io.flutter.embedding.android.DrawableSplashScreen;
import io.flutter.embedding.android.FlutterActivityLaunchConfigs;
import io.flutter.embedding.android.FlutterSurfaceView;
import io.flutter.embedding.android.FlutterTextureView;
import io.flutter.embedding.android.RenderMode;
import io.flutter.embedding.android.SplashScreen;
import io.flutter.embedding.android.TransparencyMode;
import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.embedding.engine.FlutterShellArgs;
import io.flutter.embedding.engine.plugins.util.GeneratedPluginRegister;
import io.flutter.plugin.platform.PlatformPlugin;
import io.manbang.frontend.thresh.manager.ContextIdManager;
import io.manbang.frontend.thresh.util.ThreshLogger;

import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.DART_ENTRYPOINT_META_DATA_KEY;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.DEFAULT_DART_ENTRYPOINT;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.DEFAULT_INITIAL_ROUTE;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.EXTRA_BACKGROUND_MODE;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.EXTRA_CACHED_ENGINE_ID;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.EXTRA_DESTROY_ENGINE_WITH_ACTIVITY;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.EXTRA_ENABLE_STATE_RESTORATION;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.EXTRA_INITIAL_ROUTE;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.INITIAL_ROUTE_META_DATA_KEY;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.NORMAL_THEME_META_DATA_KEY;
import static io.manbang.frontend.thresh.containers.ThreshFlutterActivityLaunchConfigs.SPLASH_SCREEN_META_DATA_KEY;

/**
 * Thresh Activity container
 */
public abstract class ThreshActivity extends AppCompatActivity implements ThreshFlutterActivityAndFragmentDelegate.Host {

    private static final String TAG = "ThreshActivity#";

    protected ThreshFlutterActivityAndFragmentDelegate delegate;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        switchLaunchThemeForNormalTheme();

        super.onCreate(savedInstanceState);

        delegate = new ThreshFlutterActivityAndFragmentDelegate(this);
        delegate.onAttach(this);
        delegate.onActivityCreated(savedInstanceState);

        configureWindowForTransparency();
        setContentView(createFlutterView());
        configureStatusBarForFullscreenFlutterExperience();
    }

    private void switchLaunchThemeForNormalTheme() {
        try {
            ActivityInfo activityInfo = getPackageManager().getActivityInfo(getComponentName(), PackageManager.GET_META_DATA);
            if (activityInfo.metaData != null) {
                int normalThemeRID = activityInfo.metaData.getInt(NORMAL_THEME_META_DATA_KEY, -1);
                if (normalThemeRID != -1) {
                    setTheme(normalThemeRID);
                }
            } else {
                ThreshLogger.v(TAG + "Using the launch theme as normal theme.");
            }
        } catch (PackageManager.NameNotFoundException exception) {
            ThreshLogger.e(TAG + "Could not read meta-data for FlutterActivity. Using the launch theme as normal theme.");
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

    /**
     * Returns a {@link Drawable} to be used as a splash screen as requested by meta-data in the
     * {@code AndroidManifest.xml} file, or null if no such splash screen is requested.
     *
     * <p>See {@link ThreshFlutterActivityLaunchConfigs#SPLASH_SCREEN_META_DATA_KEY} for the meta-data key
     * to be used in a manifest file.
     */
    @Nullable
    @SuppressWarnings("deprecation")
    private Drawable getSplashScreenFromManifest() {
        try {
            ActivityInfo activityInfo =
                    getPackageManager().getActivityInfo(getComponentName(), PackageManager.GET_META_DATA);
            Bundle metadata = activityInfo.metaData;
            int splashScreenId = metadata != null ? metadata.getInt(SPLASH_SCREEN_META_DATA_KEY) : 0;
            return splashScreenId != 0
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
     * bar, if this {@code Activity}'s desired {@link FlutterActivityLaunchConfigs.BackgroundMode} is {@link
     * FlutterActivityLaunchConfigs.BackgroundMode#transparent}.
     *
     * <p>For {@code Activity} transparency to work as expected, the theme applied to this {@code
     * Activity} must include {@code <item name="android:windowIsTranslucent">true</item>}.
     */
    private void configureWindowForTransparency() {
        FlutterActivityLaunchConfigs.BackgroundMode backgroundMode = getBackgroundMode();
        if (backgroundMode == FlutterActivityLaunchConfigs.BackgroundMode.transparent) {
            getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        }
    }

    @NonNull
    private View createFlutterView() {
        return delegate.onCreateView(
                null /* inflater */, null /* container */, null /* savedInstanceState */);
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
    protected void onStart() {
        super.onStart();
        delegate.onStart();
    }

    @Override
    protected void onResume() {
        super.onResume();
        delegate.onResume();
    }

    @Override
    public void onPostResume() {
        super.onPostResume();
        delegate.onPostResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
        delegate.onPause();
    }

    @Override
    protected void onStop() {
        super.onStop();
        delegate.onStop();
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        delegate.onSaveInstanceState(outState);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        delegate.onDestroyView();
        delegate.onDetach();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        delegate.onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onNewIntent(@NonNull Intent intent) {
        super.onNewIntent(intent);
        delegate.onNewIntent(intent);
    }

    @Override
    public void onBackPressed() {
        delegate.onBackPressed();
    }

    @Override
    public void onRequestPermissionsResult(
            int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        delegate.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }

    @Override
    public void onUserLeaveHint() {
        delegate.onUserLeaveHint();
    }

    @Override
    public void onTrimMemory(int level) {
        super.onTrimMemory(level);
        delegate.onTrimMemory(level);
    }

    /**
     * {@link ThreshFlutterActivityAndFragmentDelegate.Host} method that is used by {@link
     * ThreshFlutterActivityAndFragmentDelegate} to obtain a {@code Context} reference as needed.
     */
    @Override
    @NonNull
    public Context getContext() {
        return this;
    }

    /**
     * {@link ThreshFlutterActivityAndFragmentDelegate.Host} method that is used by {@link
     * ThreshFlutterActivityAndFragmentDelegate} to obtain an {@code Activity} reference as needed. This
     * reference is used by the delegate to instantiate a {@link io.manbang.frontend.thresh.view.ThreshFlutterView}, a {@link
     * PlatformPlugin}, and to determine if the {@code Activity} is changing configurations.
     */
    @Override
    @NonNull
    public Activity getActivity() {
        return this;
    }

    /**
     * {@link ThreshFlutterActivityAndFragmentDelegate.Host} method that is used by {@link
     * ThreshFlutterActivityAndFragmentDelegate} to obtain Flutter shell arguments when initializing
     * Flutter.
     */
    @NonNull
    @Override
    public FlutterShellArgs getFlutterShellArgs() {
        return FlutterShellArgs.fromIntent(getIntent());
    }

    /**
     * Returns the ID of a statically cached {@link FlutterEngine} to use within this {@code
     * FlutterActivity}, or {@code null} if this {@code FlutterActivity} does not want to use a cached
     * {@link FlutterEngine}.
     */
    @Override
    @Nullable
    public String getCachedEngineId() {
        return getIntent().getStringExtra(EXTRA_CACHED_ENGINE_ID);
    }

    /**
     * Returns false if the {@link FlutterEngine} backing this {@code FlutterActivity} should outlive
     * this {@code FlutterActivity}, or true to be destroyed when the {@code FlutterActivity} is
     * destroyed.
     *
     * <p>The default value is {@code true} in cases where {@code FlutterActivity} created its own
     * {@link FlutterEngine}, and {@code false} in cases where a cached {@link FlutterEngine} was
     * provided.
     */
    @Override
    public boolean shouldDestroyEngineWithHost() {
        boolean explicitDestructionRequested =
                getIntent().getBooleanExtra(EXTRA_DESTROY_ENGINE_WITH_ACTIVITY, false);
        if (getCachedEngineId() != null || delegate.isFlutterEngineFromHost()) {
            // Only destroy a cached engine if explicitly requested by app developer.
            return explicitDestructionRequested;
        } else {
            // If this Activity created the FlutterEngine, destroy it by default unless
            // explicitly requested not to.
            return getIntent().getBooleanExtra(EXTRA_DESTROY_ENGINE_WITH_ACTIVITY, true);
        }
    }

    /**
     * The Dart entrypoint that will be executed as soon as the Dart snapshot is loaded.
     *
     * <p>This preference can be controlled by setting a {@code <meta-data>} called {@link
     * ThreshFlutterActivityLaunchConfigs#DART_ENTRYPOINT_META_DATA_KEY} within the Android manifest
     * definition for this {@code FlutterActivity}.
     *
     * <p>Subclasses may override this method to directly control the Dart entrypoint.
     */
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

    /**
     * The initial route that a Flutter app will render upon loading and executing its Dart code.
     *
     * <p>This preference can be controlled with 2 methods:
     *
     * <ol>
     *   <li>Pass a boolean as {@link ThreshFlutterActivityLaunchConfigs#EXTRA_INITIAL_ROUTE} with the
     *       launching {@code Intent}, or
     *   <li>Set a {@code <meta-data>} called {@link
     *       ThreshFlutterActivityLaunchConfigs#INITIAL_ROUTE_META_DATA_KEY} for this {@code Activity} in
     *       the Android manifest.
     * </ol>
     * <p>
     * If both preferences are set, the {@code Intent} preference takes priority.
     *
     * <p>The reason that a {@code <meta-data>} preference is supported is because this {@code
     * Activity} might be the very first {@code Activity} launched, which means the developer won't
     * have control over the incoming {@code Intent}.
     *
     * <p>Subclasses may override this method to directly control the initial route.
     */
    @NonNull
    public String getInitialRoute() {
        String route;
        if (getIntent().hasExtra(EXTRA_INITIAL_ROUTE)) {
            route = getIntent().getStringExtra(EXTRA_INITIAL_ROUTE);
        } else {
            route = getRouteFromMetaData();
        }
        return ContextIdManager.INSTANCE.wrapRouteAddContextId(this,route);
    }

    private String getRouteFromMetaData() {
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
     * A custom path to the bundle that contains this Flutter app's resources, e.g., Dart code
     * snapshots.
     *
     * <p>When this {@code FlutterActivity} is run by Flutter tooling and a data String is included in
     * the launching {@code Intent}, that data String is interpreted as an app bundle path.
     *
     * <p>When otherwise unspecified, the value is null, which defaults to the app bundle path defined
     * in {@link io.flutter.embedding.engine.loader.FlutterLoader#findAppBundlePath()}.
     *
     * <p>Subclasses may override this method to return a custom app bundle path.
     */
    @NonNull
    public String getAppBundlePath() {
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

    /**
     * Returns true if Flutter is running in "debug mode", and false otherwise.
     *
     * <p>Debug mode allows Flutter to operate with hot reload and hot restart. Release mode does not.
     */
    private boolean isDebuggable() {
        return (getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE) != 0;
    }

    /**
     * {@link ThreshFlutterActivityAndFragmentDelegate.Host} method that is used by {@link
     * ThreshFlutterActivityAndFragmentDelegate} to obtain the desired {@link RenderMode} that should be
     */
    @NonNull
    @Override
    public RenderMode getRenderMode() {
        return getBackgroundMode() == FlutterActivityLaunchConfigs.BackgroundMode.opaque ? RenderMode.surface : RenderMode.texture;
    }

    /**
     * {@link ThreshFlutterActivityAndFragmentDelegate.Host} method that is used by {@link
     * ThreshFlutterActivityAndFragmentDelegate} to obtain the desired {@link TransparencyMode} that should
     */
    @NonNull
    @Override
    public TransparencyMode getTransparencyMode() {
        return getBackgroundMode() == FlutterActivityLaunchConfigs.BackgroundMode.opaque
                ? TransparencyMode.opaque
                : TransparencyMode.transparent;
    }

    /**
     * The desired window background mode of this {@code Activity}, which defaults to {@link
     * FlutterActivityLaunchConfigs.BackgroundMode#opaque}.
     */
    @NonNull
    protected FlutterActivityLaunchConfigs.BackgroundMode getBackgroundMode() {
        if (getIntent().hasExtra(EXTRA_BACKGROUND_MODE)) {
            return FlutterActivityLaunchConfigs.BackgroundMode
                    .valueOf(getIntent().getStringExtra(EXTRA_BACKGROUND_MODE));
        } else {
            return FlutterActivityLaunchConfigs.BackgroundMode.opaque;
        }
    }

    /**
     * Hook for subclasses to easily provide a custom {@link FlutterEngine}.
     *
     * <p>This hook is where a cached {@link FlutterEngine} should be provided, if a cached {@link
     * FlutterEngine} is desired.
     */
    @Nullable
    @Override
    public FlutterEngine provideFlutterEngine(@NonNull Context context) {
        // No-op. Hook for subclasses.
        return null;
    }

    /**
     * Hook for subclasses to obtain a reference to the {@link FlutterEngine} that is owned by this
     * {@code FlutterActivity}.
     */
    @Nullable
    protected FlutterEngine getFlutterEngine() {
        return delegate.getFlutterEngine();
    }

    @Nullable
    @Override
    public PlatformPlugin providePlatformPlugin(
            @Nullable Activity activity, @NonNull FlutterEngine flutterEngine) {
        if (activity != null) {
            return new PlatformPlugin(getActivity(), flutterEngine.getPlatformChannel());
        } else {
            return null;
        }
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

    @Override
    public boolean shouldAttachEngineToActivity() {
        return true;
    }

    @Override
    public void onFlutterSurfaceViewCreated(@NonNull FlutterSurfaceView flutterSurfaceView) {
        // Hook for subclasses.
    }

    @Override
    public void onFlutterTextureViewCreated(@NonNull FlutterTextureView flutterTextureView) {
        // Hook for subclasses.
    }

    @Override
    public void onFlutterUiDisplayed() {
        // Notifies Android that we're fully drawn so that performance metrics can be collected by
        // Flutter performance tests.
        // This was supported in KitKat (API 19), but has a bug around requiring
        // permissions. See https://github.com/flutter/flutter/issues/46172
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            reportFullyDrawn();
        }
    }

    @Override
    public void onFlutterUiNoLongerDisplayed() {
        // no-op
    }

    @Override
    public boolean shouldRestoreAndSaveState() {
        if (getIntent().hasExtra(EXTRA_ENABLE_STATE_RESTORATION)) {
            return getIntent().getBooleanExtra(EXTRA_ENABLE_STATE_RESTORATION, false);
        }
        if (getCachedEngineId() != null) {
            // Prevent overwriting the existing state in a cached engine with restoration state.
            return false;
        }
        return true;
    }

    protected String getContextId(){
        return ContextIdManager.INSTANCE.getContextId(this);
    }
}
