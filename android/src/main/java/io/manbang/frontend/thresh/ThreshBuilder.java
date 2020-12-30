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

import java.util.Map;

import androidx.annotation.NonNull;

/**
 * thresh global constructor
 */
public final class ThreshBuilder {

    public static final String DEFAULT_DART_ENTRYPOINT = "main";
    /**
     * debug mode
     */
    private boolean isDebug = false;
    /**
     * support JSCore singleton
     */
    private boolean supportJSSingleton;

    /**
     * js run on ui thread
     */
    private boolean isJSThreadRunUI;
    /**
     * dart entry point
     */
    private String dartEntryPoint = DEFAULT_DART_ENTRYPOINT;
    /**
     * Global AppContext
     */
    private Application mApp;
    /**
     * Reporter listener
     */
    private ReporterListener reporterListener;

    public ThreshBuilder(Application app) {
        this.mApp = app;
    }

    public ThreshBuilder isDebug(boolean isDebug) {
        this.isDebug = isDebug;
        return this;
    }
    public ThreshBuilder isJSThreadRunUI(boolean isJSThreadRunUI) {
        this.isJSThreadRunUI = isJSThreadRunUI;
        return this;
    }
    public ThreshBuilder setSupportJSSingleton(boolean supportJSSingleton) {
        this.supportJSSingleton = supportJSSingleton;
        return this;
    }
    public ThreshBuilder dartEntryPoint(@NonNull String dartEntryPoint) {
        this.dartEntryPoint = dartEntryPoint;
        return this;
    }
    public ThreshBuilder setReporterListener(ReporterListener reporterListener) {
        this.reporterListener = reporterListener;
        return this;
    }

    public ThreshPlatform build() {

        ThreshPlatform platform = new ThreshPlatform() {
            @Override
            public boolean isDebug() {
                return isDebug;
            }

            @Override
            public boolean supportJSSingleton() {
                return supportJSSingleton;
            }

            @Override
            public boolean isJSThreadRunUI() {
                return isJSThreadRunUI;
            }

            @Override
            public String getDartEntryPoint() {
                return dartEntryPoint;
            }

            @Override
            public Application getApplicationContext() {
                return mApp;
            }
        };
        platform.reporterListener = reporterListener;
        return platform;
    }

    /**
     *  Reporter listener
     */
    public interface ReporterListener {

        /**
         *
         * @param level
         *      <p> VERBOSE = 2 </p>
         *      <p> DEBUG = 3 </p>
         *      <p> INFO = 4 </p>
         *      <p> WARN = 5 </p>
         *      <p> ERROR = 6 </p>
         * @param tag logger tag
         *
         * @param message message
         *
         * @param tr error
         *
         */
        void log(int level,String tag,String message,Throwable tr);

        /**
         * Report performance management data
         *
         * @param params
         */
        void reportPerformance(Map params);

        /**
         * Report exception log
         *
         * @param errorMessage
         * @param errorDetails
         */
        void reportException(String errorMessage, Object errorDetails);
    }
}
