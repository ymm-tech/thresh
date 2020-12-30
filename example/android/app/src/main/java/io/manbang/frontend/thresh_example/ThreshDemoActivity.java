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

import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.Nullable;
import io.flutter.plugin.common.StandardMessageCodec;
import io.flutter.plugins.GeneratedPluginRegistrant;
import io.flutter.view.FlutterView;
import io.manbang.frontend.thresh.containers.ThreshActivity;
import io.manbang.frontend.thresh.runtime.ThreshEngine;
import io.manbang.frontend.thresh.runtime.ThreshEngineOptions;
import io.manbang.frontend.thresh.runtime.jscore.bundle.BundleOptions;
import io.manbang.frontend.thresh.runtime.jscore.bundle.BundleType;
import io.manbang.frontend.thresh.runtime.jscore.bundle.ContainerType;
import io.manbang.frontend.thresh.runtime.jscore.runtime.JSCallback;
import io.manbang.frontend.thresh.util.CompactUtil;
import io.manbang.frontend.thresh.util.ThreshLogger;
import io.manbang.frontend.thresh.view.platformview.ThreshNativeViewRegistrant;
import io.manbang.frontend.thresh_example.nativeview.NativeTextView;
import io.manbang.frontend.thresh_example.nativeview.NativeViewFactory;

/**
 * 测试demo
 * <p>
 *     flutter debug模式启动flutter页面会慢，建议切到release模式
 * </p>
 *
 */
public class ThreshDemoActivity extends ThreshActivity {

    private LinearLayout rootView;

    private View placeHolder;

    private View errorView;

    private TextView tvError;

    private FrameLayout.LayoutParams rootViewLp;

    private long startTime;

    private int screenWidth;

    private ThreshEngine engine;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_thresh_container);
        startTime = System.currentTimeMillis();
        screenWidth = getResources().getDisplayMetrics().widthPixels;
        rootViewLp = new FrameLayout.LayoutParams(screenWidth * 2, LinearLayout.LayoutParams.MATCH_PARENT);
        rootView = findViewById(R.id.contentView);
        rootView.setLayoutParams(rootViewLp);
        placeHolder = findViewById(R.id.place_holder);
        placeHolder.setLayoutParams(new LinearLayout.LayoutParams(screenWidth, LinearLayout.LayoutParams.MATCH_PARENT));
        errorView = findViewById(R.id.ly_error);
        tvError = findViewById(R.id.tv_error);
        errorView.setVisibility(View.GONE);
        View ivLeft = findViewById(R.id.iv_left);
        ivLeft.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
        addFlutterView();
        initEngine();
    }

    private void addFlutterView(){
        final long startTime = System.currentTimeMillis();
        getThreshRootView().addFirstFrameListener(new FlutterView.FirstFrameListener() {
            @Override
            public void onFirstFrame() {
                placeHolder.setVisibility(View.GONE);
                rootViewLp.width = screenWidth;
                rootView.setLayoutParams(rootViewLp);
                ThreshLogger.v("firstFrame", "time == " +(System.currentTimeMillis() - startTime));
            }
        });
        rootView.addView(getThreshRootView(), new LinearLayout.LayoutParams(screenWidth, LinearLayout.LayoutParams.MATCH_PARENT));

    }
    private void initEngine(){
        int loadMode = getIntent().getIntExtra("load_mode", BundleType.ASSETS_FILE.getType());
        BundleType bundleType;
        if (loadMode == BundleType.ASSETS_FILE.getType()){
            bundleType = BundleType.ASSETS_FILE;
        }else if (loadMode == BundleType.LOCAL_FILE.getType()){
            bundleType = BundleType.LOCAL_FILE;
        }else if (loadMode == BundleType.JS_SERVER.getType()){
            bundleType = BundleType.JS_SERVER;
        }else {
            bundleType = BundleType.ASSETS_FILE;
        }
        BundleOptions.Builder bundleBuilder = new BundleOptions.Builder(ContainerType.Thresh);
        bundleBuilder.withDebugServerIp(getIntent().getStringExtra("debug_local_ip"));
        bundleBuilder.withDebugServerPort(getIntent().getStringExtra("debug_local_port"));
        bundleBuilder.withBundleType(bundleType);
        ThreshEngineOptions.Builder builder = new ThreshEngineOptions.Builder(bundleBuilder.build());
        builder.moduleName("test-activity-business-module");
        builder.setPageStartTime(startTime);
        builder.setRootId(getRootId());
        engine = new ThreshEngine(builder.build());
        engine.bindThreshMethodCall(new ThreshDemoMethodChannel(getThreshRootView(),engine));
        engine.bindNativeModule(new ThreshDemoBridge(this));
        engine.bindBundleLoader(new TestJSBundleLoader(this));
        engine.loadScript(new JSCallback() {
            @Override
            public void success(@Nullable Object o) {
                engine.setReady(true);
                loadPage(0,"",engine.getThreshOptions());
            }

            @Override
            public void error(int code, @Nullable String reason, @Nullable Object o) {
                engine.setReady(false);
                loadPage(-1,reason,engine.getThreshOptions());
            }
        });
    }
    private void loadPage(int code, String reason,ThreshEngineOptions engineOptions){
        if (code == 0) {
            errorView.setVisibility(View.GONE);
            rootView.setVisibility(View.VISIBLE);
        } else {
            FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT);
            params.setMargins(0, CompactUtil.getStatusBarHeight(ThreshDemoActivity.this),
                              0, 0);
            TextView tvRefresh = findViewById(R.id.tv_refresh);
            errorView.setLayoutParams(params);
            errorView.setVisibility(View.VISIBLE);
            tvError.setText(reason);
            tvRefresh.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    engine.loadScript( new JSCallback() {
                        @Override
                        public void success(@Nullable Object o) {
                            errorView.setVisibility(View.GONE);
                        }

                        @Override
                        public void error(int code, @Nullable String reason, @Nullable Object o) {
                            loadPage(-1,reason,engine.getThreshOptions());
                        }
                    });
                }
            });
        }
    }
    @Override
    public ThreshEngine getThreshEngine() {
        return engine;
    }

    @Override
    public void registerPluginRegistry() {
        GeneratedPluginRegistrant.registerWith(getThreshRootView().getPluginRegistry());
        ThreshNativeViewRegistrant registrant = new ThreshNativeViewRegistrant();
        NativeViewFactory nativeViewFactory = new NativeViewFactory(this, StandardMessageCodec.INSTANCE, NativeTextView.NATIVE_TEXT_VIEW);
        registrant.registerWith(NativeTextView.NATIVE_TEXT_VIEW, getThreshRootView().getPluginRegistry(),nativeViewFactory);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        engine = null;
    }
}
