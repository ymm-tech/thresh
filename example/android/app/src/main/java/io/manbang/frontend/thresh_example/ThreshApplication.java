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

import android.app.Application;

import io.manbang.frontend.thresh.Thresh;
import io.manbang.frontend.thresh.ThreshBuilder;
import io.manbang.frontend.thresh.ThreshPlatform;
import io.manbang.frontend.thresh.util.ThreshLogger;

/**
 * 程序初始化入口
 */
public class ThreshApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        ThreshPlatform platform= new ThreshBuilder(this)
                .isDebug(true)
                .isJSThreadRunUI(true)
                .setSupportJSSingleton(false)
                .dartEntryPoint("main")
                .build();
        Thresh.get().init(platform);
        ThreshLogger.setTag("Thresh#");
        ThreshLogger.DEBUG = platform.isDebug();
    }
}
