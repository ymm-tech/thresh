package io.manbang.frontend.thresh.containers;

// Copyright 2013 The Flutter Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/** Collection of Flutter launch configuration options. */
// This class is public so that Flutter app developers can reference
// BackgroundMode
public class ThreshFlutterActivityLaunchConfigs {
    // Meta-data arguments, processed from manifest XML.
    /* package */ public static final String DART_ENTRYPOINT_META_DATA_KEY = "io.flutter.Entrypoint";
    /* package */ public static final String INITIAL_ROUTE_META_DATA_KEY = "io.flutter.InitialRoute";
    /* package */ public static final String SPLASH_SCREEN_META_DATA_KEY =
            "io.flutter.embedding.android.SplashScreenDrawable";
    /* package */ public static final String NORMAL_THEME_META_DATA_KEY =
            "io.flutter.embedding.android.NormalTheme";

    // Intent extra arguments.
    /* package */ public static final String EXTRA_INITIAL_ROUTE = "route";
    /* package */ public static final String EXTRA_BACKGROUND_MODE = "background_mode";
    /* package */ public static final String EXTRA_CACHED_ENGINE_ID = "cached_engine_id";
    /* package */ public static final String EXTRA_DESTROY_ENGINE_WITH_ACTIVITY =
            "destroy_engine_with_activity";
    /* package */ public static final String EXTRA_ENABLE_STATE_RESTORATION = "enable_state_restoration";

    // Default configuration.
    /* package */ public static final String DEFAULT_DART_ENTRYPOINT = "main";
    /* package */ public static final String DEFAULT_INITIAL_ROUTE = "/index";
    /* package */ public static final String DEFAULT_BACKGROUND_MODE = BackgroundMode.opaque.name();

    /** The mode of the background of a Flutter {@code Activity}, either opaque or transparent. */
    public enum BackgroundMode {
        /** Indicates a FlutterActivity with an opaque background. This is the default. */
        opaque,
        /** Indicates a FlutterActivity with a transparent background. */
        transparent
    }

    private ThreshFlutterActivityLaunchConfigs() {}
}

