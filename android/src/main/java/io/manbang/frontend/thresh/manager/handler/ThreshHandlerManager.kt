/*
 * MIT License
 *
 * Copyright (c) 2021 ManBang Group
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
package io.manbang.frontend.thresh.manager.handler

import io.manbang.frontend.thresh.manager.handler.interfaces.IReportHandler
import java.lang.reflect.Proxy

object ThreshHandlerManager {

    private var reportHandler: IReportHandler? = null

    fun setReportHandler(reportHandler: IReportHandler){
        this.reportHandler = reportHandler
    }

    /**
     * 上报数据功能
     */
    fun reportHandler(): IReportHandler {
        return returnProxyIfEmpty(reportHandler, IReportHandler::class.java)
    }

    //如果空返回代理对象，否则原对象返回
    private fun <T> returnProxyIfEmpty(handler: T?, clazz: Class<T>): T {
        return handler ?: emptyProxy(clazz)
    }

    private fun <T> emptyProxy(clazz: Class<T>): T {

        return Proxy.newProxyInstance(clazz.classLoader, arrayOf(clazz)) { _, _, _ -> null } as T

    }
}