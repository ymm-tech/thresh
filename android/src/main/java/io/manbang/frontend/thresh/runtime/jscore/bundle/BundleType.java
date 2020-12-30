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
 * bundle包运行类型
 * <p>
 * 101： 本地内置包
 * 102： 宿主，加载本地Assets内置包
 * -100：js服务器
 */
public enum BundleType {

    /**
     * 宿主，加载本地内置包
     */
    LOCAL_FILE(101),
    /**
     * 宿主，加载本地Assets内置包
     */
    ASSETS_FILE(102),
    /**
     * 本地调试模式，连接js服务器端口
     */
    JS_SERVER(-100);

    private final int type;

    BundleType(int type) {
        this.type = type;
    }

    public int getType(){
        return type;
    }

}