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

import android.os.Build;
import android.os.Handler;
import android.os.Looper;

import java.util.concurrent.atomic.AtomicInteger;

import io.flutter.view.FlutterMain;
import io.manbang.frontend.thresh.runtime.JSManager;

/**
 * thresh instance
 */
public class Thresh {

    private ThreshPlatform mPlatform;

    private JSManager jsManager;

    private static volatile Thresh sInstance = null;

    private Handler mainHandler;

    private AtomicInteger mSequenceGenerator = new AtomicInteger();

    public Thresh() {

    }

    public static Thresh get() {
        if (sInstance == null) {
            sInstance = new Thresh();
        }
        return sInstance;
    }

    public void init(ThreshPlatform platform) {
        mPlatform = platform;
        // Initialization of some devices lower than 6.0.1 will cause crash
        // https://bugly.qq.com/v2/crash-reporting/crashes/33840e9461/2265630/report?pid=1&crashDataType=undefined
        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.N){
            FlutterMain.startInitialization(platform.getApplicationContext());
        }
    }

    public ThreshPlatform platform() {
        return sInstance.mPlatform;
    }

    public Handler getMainHandler() {
        if (mainHandler == null)
            return (mainHandler = new Handler(Looper.getMainLooper()));
        else
            return mainHandler;
    }
    public void destroy(){
        if (jsManager != null){
            jsManager.destroy();
        }
        sInstance = null;
    }

    public JSManager getJSManager(){
        if (jsManager == null){
            jsManager = new JSManager();
        }
        return jsManager;
    }

    /**
     * create root id
     */
    public String createThreshRootId() {
        return  "threshRootID#" + mSequenceGenerator.incrementAndGet();
    }
}
