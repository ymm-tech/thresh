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

import java.util.Map;

import io.manbang.frontend.thresh.channel.BridgeCallback;
import io.manbang.frontend.thresh.runtime.jscore.runtime.JSCallback;

public interface EngineService {

    /**
     * load bundle
     */
    void loadScript();

    /**
     * load bundle
     * @param callback
     */
    void loadScript(final JSCallback callback);

    /**
     * exec js function
     *
     * @param funcName
     * @param callback
     * @param params
     */
    void executeJSFunction(String funcName, JSCallback callback, Map params);

    /**
     * invoke native bridge
     *
     * @param module
     * @param method
     * @param params
     * @param callback
     */
    void invokeNativeModule(String module, String method, Map params, BridgeCallback callback);
}
