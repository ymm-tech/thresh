/*
 * MIT License
 * <p>
 * Copyright (c) 2020 ManBang Group
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * <p>
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * <p>
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
package io.manbang.frontend.thresh;

import android.app.Application;

import io.manbang.frontend.thresh.runtime.jscore.bundle.BundleCallback;
import io.manbang.frontend.thresh.runtime.jscore.runtime.JSExecutor;

public abstract class ThreshPlatform {

    /**
     * debug mode
     */
    public abstract boolean isDebug();

    /**
     * support JSCore singleton
     * {@link io.manbang.frontend.thresh.runtime.JSModule#}
     */
    public abstract boolean supportJSSingleton();

    /**
     * js thread runs on the ui thread, the default ui
     * {@link io.manbang.frontend.thresh.runtime.jscore.bundle.JSBundleLoader#loadScript(JSExecutor, BundleOptions, BundleCallback)}
     * <LI> If it is not running on ui thread, JSExecutor must pass null, and js file needs to be executed actively in JSThread thread </LI>
     */
    public abstract boolean isJSThreadRunUI();

    /**
     * dart entry point
     */
    public abstract String getDartEntryPoint();

    /**
     * Global AppContext
     */
    public abstract Application getApplicationContext();
    /**
     * Reporter listener
     */
    public ThreshBuilder.ReporterListener reporterListener;


}
