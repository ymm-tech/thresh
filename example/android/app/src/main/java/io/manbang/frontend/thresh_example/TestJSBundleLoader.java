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

import android.content.Context;
import android.os.Handler;

import io.manbang.frontend.thresh.runtime.jscore.bundle.BundleCallback;
import io.manbang.frontend.thresh.runtime.jscore.bundle.BundleOptions;
import io.manbang.frontend.thresh.runtime.jscore.bundle.BundleType;
import io.manbang.frontend.thresh.runtime.jscore.bundle.JSBundleLoader;
import io.manbang.frontend.thresh.runtime.jscore.runtime.JSExecutor;
import io.manbang.frontend.thresh.util.ThreshToast;

public class TestJSBundleLoader extends JSBundleLoader {

    public TestJSBundleLoader(Context context) {
        super(context);
    }

    public TestJSBundleLoader(Context context, Handler handler) {
        super(context, handler);
    }

    @Override
    public void loadScript(JSExecutor executor,BundleOptions bundleOptions, BundleCallback bundleCallback) {
        mainHandler.post(new Runnable() {
            @Override
            public void run() {
                if (bundleOptions.bundleType == BundleType.ASSETS_FILE) {
                    loadScriptFromAssets(executor,context.getAssets(), bundleOptions.bundlePath,bundleOptions.bundleName, bundleCallback);
                } else if (bundleOptions.bundleType == BundleType.LOCAL_FILE) {
                    loadScriptFromFile(executor,bundleOptions.bundlePath,bundleOptions.bundleName, bundleCallback);
                } else if (bundleOptions.bundleType == BundleType.JS_SERVER) {
                    loadScriptRemoteDebugger(executor,bundleOptions.debugServerIP,bundleOptions.debugServerPort, bundleCallback);
                } else {
                    ThreshToast.makeText(context, "不支持的模式", 0);
                }
            }
        });
    }
}
