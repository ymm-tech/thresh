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
package io.manbang.frontend.thresh.manager.config


/**
 * 配置项解析器
 * @提供了一些具体实现 支持从Asset、文件、ThemeConfig 加载配置项
 */
interface IParseConfig {
    fun parse(): ThreshConfig
}

/**
 * Thresh配置项
 */
data class ThreshConfig(var isDebug: Boolean = false,
                        var isJSThreadRunUI: Boolean = false,
                        var dartEntryPoint: String = "main")

/**
 * Thresh相关配置管理
 */
class ThreshConfigManager private constructor() {
    private var config: ThreshConfig = ThreshConfig()

    fun init(configParse: IParseConfig) {
        init(configParse.parse())
    }

    fun init(config: ThreshConfig) {
        this.config = config.copy()
    }

    companion object {
        private val instance = ThreshConfigManager()

        fun config(): ThreshConfig {
            return instance.config
        }

        fun getInstance(): ThreshConfigManager {
            return instance
        }
    }

}