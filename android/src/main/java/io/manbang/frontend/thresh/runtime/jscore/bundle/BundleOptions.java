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
package io.manbang.frontend.thresh.runtime.jscore.bundle;

/**
 * bundle包选项
 */
public final class BundleOptions {
    /**
     * 默认测试服务器地址
     */
    private static final String DEBUG_SERVER_IP = "127.0.0.1";
    /**
     * 默认测试服务器端口号
     */
    private static final String DEBUG_SERVER_PORT = "12345";
    /**
     * 默认bundle文件名
     */
    private static final String BUNDLE_NAME = "bundle.js";
    /**
     * 使用方
     */
    public ContainerType containerType;

    /**
     * 加载类型
     */
    public BundleType bundleType;
    /**
     * bundle包 绝对路径
     *
     * example：/sdcard/0/thresh/
     */
    public String bundlePath;
    /**
     * bundle包 文件名称
     * {@link #BUNDLE_NAME}
     */
    public String bundleName;
    /**
     * 测试服务器ip
     * {@link #DEBUG_SERVER_IP}
     */
    public String debugServerIP;
    /**
     * 测试服务器端口号
     * {@link #DEBUG_SERVER_PORT}
     */
    public String debugServerPort;

    public static class Builder{

        private ContainerType containerType;

        private BundleType bundleType;

        private String bundlePath;

        private String bundleName = BUNDLE_NAME;

        private String debugServerIp = DEBUG_SERVER_IP;

        private String debugServerPort = DEBUG_SERVER_PORT;

        /**
         *
         * @param containerType 容器类型
         */
        public Builder(ContainerType containerType) {
            this.containerType = containerType;
        }

        public Builder withBundleType(BundleType bundleType) {
            this.bundleType = bundleType;
            return this;
        }

        public Builder withDebugServerIp(String debugServerIp) {
            this.debugServerIp = debugServerIp;
            return this;
        }

        public Builder withDebugServerPort(String debugServerPort) {
            this.debugServerPort = debugServerPort;
            return this;
        }

        public Builder withBundlePath(String bundlePath) {
            this.bundlePath = bundlePath;
            return this;
        }

        public Builder withBundleName(String bundleName) {
            this.bundleName = bundleName;
            return this;
        }

        public BundleOptions build(){
            return new BundleOptions(this);
        }
    }
    private BundleOptions(Builder builder){
        containerType = builder.containerType;
        bundleType = builder.bundleType;
        bundlePath = builder.bundlePath;
        bundleName = builder.bundleName;
        debugServerIP = builder.debugServerIp;
        debugServerPort = builder.debugServerPort;
    }
}
