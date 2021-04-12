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
package io.manbang.frontend.thresh.channel;

/**
 * thresh constants
 */
public final class MethodConstants {
    /**
     * key for reload operation
     */
    public static final String RELOAD = "reload";
    /**
     * native调js方法
     */
    public static final String PRINT = "print";

    /**
     * native调js方法
     * jsCallNative 新增触发 nativeView 方法，参数格式如下：
     *
     * {
     *   method: 'invokeNativeViewMethod', // 固定
     *   params: {
     *     methodName: 'refresh', // 需要触发的 native view 方法名，目前值有 refresh destroy，必传
     *     methodParams: {}, // 触发 native view 方法时传递的参数，非必传
     *     viewType: 'trade/map_view', // 触发的 native view type，必传
     *     viewParams: {}, // 触发的 native view 当前的参数，存在参数时会传
     *   }
     */
    public static final String REFRESH_NATIVE_VIEW = "invokeNativeViewMethod";

    /**
     * key for page render finish
     */
    public static final String PAGE_DID_SHOW = "pageDidShow";

    public static final String CALL_PARAMS = "params";

    public static final String CALL_MODULE = "module";

    public static final String CALL_METHOD = "method";

    public static final String BRIDGE_REQUEST = "bridgeRequest";

    public static final String BRIDGE_RESPONSE = "bridgeResponse";
    /**
     * 用于flutter调用native的bridge方法
     */
    public static final String callNative = "callNative";

    //定时器
    public static final String CALL_TIMER_OPERATOR = "call_timer_operator";
}

