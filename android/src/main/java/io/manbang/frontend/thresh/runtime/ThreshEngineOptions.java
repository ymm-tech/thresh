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
package io.manbang.frontend.thresh.runtime;

import io.manbang.frontend.thresh.runtime.jscore.bundle.BundleOptions;
/**
 * Contains and exposes a variety of non type specific options that can be applied to a load in
 * Thresh.
 */
public final class ThreshEngineOptions {

    /**
     * An event of lifecycle & notify  for refresh js
     */
    private static final String METHOD_FIRE_JS_EVENT = "methodChannel_fire_js_event";
    /**
     * JS calls Native message method and is used for two-way communication
     */
    public static final String METHOD_JS_CALL_NATIVE  = "methodChannel_js_call_native";
    /**
     * Native calls JS message method and is used for two-way communication
     */
    private static final String METHOD_NATIVE_CALL_JS  = "methodChannel_native_call_js";

    private static final String TIMER_OPERATOR = "methodChannel_timer_operator";

    private static final String TIMER_OPERATOR_CALLBACK = "methodChannel_timer_fire";

    /**
     * JS calls Native message method ,then Native calls Flutter message method and is used for three-way communication
     */
    private static final String METHOD_CHANNEL_JS_CALL_FLUTTER  = "methodChannel_js_call_flutter";
    /**
     * An default module name of ThreshModule
     */
    private static final String MODULE_NAME = "ThreshModule";

    /**
     * business module name
     */
    public String moduleName;
    
    public String moduleVersion;

    public BundleOptions bundleOptions;
    /**
     * Calling JS execution lifecycle method
     *
     * {@link #METHOD_FIRE_JS_EVENT}
     */
    public String callJSLifecycleMethod;
    /**
     * JS call Native
     * {@link #METHOD_JS_CALL_NATIVE}
     */
    public String jsCallNativeMethod;
    /**
     * Native call JS
     * {@link #METHOD_NATIVE_CALL_JS}
     */
    public String callJSMethod;
    /**
     * JS call Flutter
     * {@link #METHOD_CHANNEL_JS_CALL_FLUTTER}
     */
    public String jsCallFlutterMethod;
    /**
     * page open start time
     */
    public long pageStartTime;

    public String callNativeTimer ;

    public String callNativeTimerFire ;

    public static class Builder{

        private BundleOptions bundleOptions;

        private String moduleName = MODULE_NAME;
        
        private String moduleVersion = "";

        private String callJSLifecycleMethod = METHOD_FIRE_JS_EVENT;

        private String jsCallNativeMethod = METHOD_JS_CALL_NATIVE;

        private String callJSMethod = METHOD_NATIVE_CALL_JS;

        private String callNativeTimer = TIMER_OPERATOR;

        private String callNativeTimerFire = TIMER_OPERATOR_CALLBACK;

        public String jsCallFlutterMethod = METHOD_CHANNEL_JS_CALL_FLUTTER;

        private long pageStartTime;

        private String rootId;

        /**
         */
        public Builder(BundleOptions bundleOptions) {
            this.bundleOptions = bundleOptions;
        }

        /**
         * business module name
         * @param moduleName
         */
        public Builder moduleName(String moduleName){
            this.moduleName = moduleName;
            return this;
        }
        
        public Builder moduleVersion(String moduleVersion){
            this.moduleVersion = moduleVersion;
            return this;
        }
        
        /**
         * Register general JS call Native method
         *
         * @param jsCallNativeMethod {@link #METHOD_JS_CALL_NATIVE}
         */
        public Builder regJSCallNativeMethod(String jsCallNativeMethod){
            this.jsCallNativeMethod = jsCallNativeMethod;
            return this;
        }
        /**
         * Register general JS call Flutter method
         *
         * @param jsCallFlutterMethod {@link #METHOD_CHANNEL_JS_CALL_FLUTTER}
         */
        public Builder regJSCallFlutterMethod(String jsCallFlutterMethod){
            this.jsCallFlutterMethod = jsCallFlutterMethod;
            return this;
        }
        /**
         * Register general Native  call JS method
         *
         * @param callJSMethod {@link #METHOD_NATIVE_CALL_JS}
         */
        public Builder regCallJSMethod(String callJSMethod){
            this.callJSMethod = callJSMethod;
            return this;
        }

        /**
         * Register binding container and JS life cycle
         *
         * @param callJSLifecycleMethod {@link #METHOD_FIRE_JS_EVENT}
         */
        public Builder regJSLifecycleMethod(String callJSLifecycleMethod){
            this.callJSLifecycleMethod = callJSLifecycleMethod;
            return this;
        }

        /**
         * set page open start time
         *
         * @param pageStartTime
         * @return
         */
        public Builder setPageStartTime(long pageStartTime) {
            this.pageStartTime = pageStartTime;
            return this;
        }

        /**
         * set root id
         * @param rootId
         * @return
         */
        public Builder setRootId(String rootId) {
            this.rootId = rootId;
            return this;
        }
        public ThreshEngineOptions build(){
            return new ThreshEngineOptions(this);
        }
    }
    private ThreshEngineOptions(Builder builder){
        bundleOptions = builder.bundleOptions;
        moduleName = builder.moduleName;
        moduleVersion =builder.moduleVersion;
        callJSLifecycleMethod = builder.callJSLifecycleMethod;
        jsCallNativeMethod = builder.jsCallNativeMethod;
        callJSMethod = builder.callJSMethod;
        jsCallFlutterMethod = builder.jsCallFlutterMethod;
        pageStartTime = builder.pageStartTime;
        callNativeTimer = builder.callNativeTimer;
        callNativeTimerFire = builder.callNativeTimerFire;
    }
}
