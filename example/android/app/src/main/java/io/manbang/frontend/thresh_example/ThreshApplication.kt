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
package io.manbang.frontend.thresh_example

import android.app.Application
import android.util.Log
import io.manbang.frontend.thresh.Thresh
import io.manbang.frontend.thresh.manager.config.ThreshConfig
import io.manbang.frontend.thresh.manager.handler.interfaces.IReportHandler
import io.manbang.frontend.thresh.util.ThreshLogger

/**
 * 程序初始化入口
 */
class ThreshApplication : Application() {
    override fun onCreate() {
        super.onCreate()


        Thresh.initConfig(ThreshConfig(
                isDebug = true,
                dartEntryPoint = "main",
                isJSThreadRunUI = true
        ))

        Thresh.initThreshHandler(reportHandler = object:IReportHandler{
            override fun log(level: Int, tag: String?, message: String?, tr: Throwable?) {
                if(level == Log.ERROR){
                    Log.e(tag,message)
                }else{
                    Log.i(tag,message)
                }
            }

            override fun reportPerformance(params: Map<*, *>?) {
            }

            override fun reportException(errorMessage: String?, errorDetails: Any?) {
            }
        })
        ThreshLogger.DEBUG = true
        ThreshLogger.setTag("Thresh#")
    }
}