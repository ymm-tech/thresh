/*
 * MIT License
 * <p>
 * Copyright (c) 2021 ManBang Group
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
package io.manbang.frontend.thresh

import io.manbang.frontend.thresh.manager.config.IParseConfig
import io.manbang.frontend.thresh.manager.config.ThreshConfig
import io.manbang.frontend.thresh.manager.config.ThreshConfigManager
import io.manbang.frontend.thresh.manager.handler.ThreshHandlerManager
import io.manbang.frontend.thresh.manager.handler.interfaces.IReportHandler

/**
 * 门面类，唯一负责对外交流入口
 * 只做逻辑分发和中转，不进行消费
 */
object Thresh {

    /**
     * 初始化配置
     */
    fun initConfig(configParse:IParseConfig){
        ThreshConfigManager.getInstance().init(configParse)
    }

    fun initConfig(config: ThreshConfig){
        ThreshConfigManager.getInstance().init(config)
    }

    /**
     * 初始化Thresh内部策略
     * 有些能力需求外部注入进来
     */
    fun initThreshHandler(reportHandler:IReportHandler? = null){
        if(reportHandler!=null){
            ThreshHandlerManager.setReportHandler(reportHandler)
        }
    }

    /**
     * 释放Thresh相关资源
     */
    fun release() {

    }
}