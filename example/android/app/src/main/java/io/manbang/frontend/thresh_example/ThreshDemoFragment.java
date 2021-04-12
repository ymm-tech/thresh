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

import io.manbang.frontend.thresh.runtime.jscore.bundle.BundleOptions;
import io.manbang.frontend.thresh.runtime.jscore.bundle.BundleType;
import io.manbang.frontend.thresh.runtime.jscore.bundle.ContainerType;
import io.manbang.frontend.thresh.containers.ThreshFragment;
import io.manbang.frontend.thresh.runtime.ThreshEngine;
import io.manbang.frontend.thresh.runtime.ThreshEngineOptions;

public class ThreshDemoFragment extends ThreshFragment {

    private ThreshEngine engine;
    private long startTime;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        startTime = System.currentTimeMillis();
        initThreshEngine();
    }

    private void initThreshEngine(){
        int loadMode = getActivity().getIntent().getIntExtra("load_mode", BundleType.ASSETS_FILE.getType());
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
        bundleBuilder.withDebugServerIp(getActivity().getIntent().getStringExtra("debug_local_ip"));
        bundleBuilder.withDebugServerPort(getActivity().getIntent().getStringExtra("debug_local_port"));
        bundleBuilder.withBundleType(bundleType);
        ThreshEngineOptions.Builder builder = new ThreshEngineOptions.Builder(bundleBuilder.build());
        builder.moduleName("test-fragment-business-module");
        builder.setPageStartTime(startTime);
        engine = new ThreshEngine(builder.build(),getContextId());
        engine.bindThreshMethodCall(new ThreshDemoMethodChannel(getFlutterEngine(),engine));
        engine.bindNativeModule(new ThreshDemoBridge(getActivity()));
        engine.bindBundleLoader( new TestJSBundleLoader(getActivity()));
        engine.loadScript();
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        engine = null;
    }
}
