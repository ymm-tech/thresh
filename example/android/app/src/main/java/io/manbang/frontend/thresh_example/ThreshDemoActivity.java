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

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.plugin.common.StandardMessageCodec;
import io.manbang.frontend.thresh.runtime.jscore.bundle.BundleOptions;
import io.manbang.frontend.thresh.runtime.jscore.bundle.BundleType;
import io.manbang.frontend.thresh.runtime.jscore.bundle.ContainerType;
import io.manbang.frontend.thresh.runtime.jscore.runtime.JSCallback;
import io.manbang.frontend.thresh.containers.ThreshActivity;
import io.manbang.frontend.thresh.manager.ContextIdManager;
import io.manbang.frontend.thresh.runtime.ThreshEngine;
import io.manbang.frontend.thresh.runtime.ThreshEngineOptions;
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

    private ThreshEngine engine;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        initThreshEngine();
    }
    private void initThreshEngine(){
        long startTime = System.currentTimeMillis();
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
        engine = new ThreshEngine(builder.build(), getContextId());
        engine.bindThreshMethodCall(new ThreshDemoMethodChannel(getFlutterEngine(),engine));
        engine.bindNativeModule(new ThreshDemoBridge(this));
        engine.bindBundleLoader(new TestJSBundleLoader(this));
        engine.loadScript(new JSCallback() {
            @Override
            public void success(@Nullable Object o) {
                engine.setReady(true);
            }

            @Override
            public void error(int code, @Nullable String reason, @Nullable Object o) {
                engine.setReady(false);
            }
        });
    }

    @Override
    protected void onPause() {
        super.onPause();
        engine.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        engine.onResume();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        engine.onDestroy();
        engine = null;
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        engine.onBackPressed();
    }

    @Override
    public void configureFlutterEngine(@NonNull FlutterEngine flutterEngine) {
        super.configureFlutterEngine(flutterEngine);
        NativeViewFactory nativeViewFactory = new NativeViewFactory(getActivity(), StandardMessageCodec.INSTANCE, NativeTextView.NATIVE_TEXT_VIEW);
        flutterEngine.getPlatformViewsController().getRegistry().registerViewFactory(NativeTextView.NATIVE_TEXT_VIEW, nativeViewFactory);
    }
}
