/**
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

import MethodChannel, { FlutterMethodChannelType } from '../channel/MethodChannel'
import BridgeManager from './BridgeManager'
import Util from '../shared/Util'
import { RequestParams } from '../types/type'
import devtools from './DevtoolsManager'

/**
 * 工具方法管理器
 */
export default class UtilManager {
  /**
   * 发起网络请求
   * debugMode状态下会通过flutter发起请求
   * 否则通过native bridge发起请求
   */
  static async request (params: RequestParams, module: string = 'base', method: string = 'request'): Promise<any> {
    if (process.env.NODE_ENV !== 'production') {
      if (!BridgeManager.networkModuleNames.includes(module)) BridgeManager.networkModuleNames.push(module)
      if (!BridgeManager.networkModuleNames.includes(method)) BridgeManager.networkModuleNames.push(method)
    }
    return BridgeManager.invoke({
      module,
      method,
      params: params
    })
  }
  /**
   * 复制到剪贴板
   * @param {any} data
   */
  static copy (data: any, showSuccess: boolean = true) {
    MethodChannel.call({
      method: FlutterMethodChannelType.copy,
      params: {
        data: Util.toString(data),
        showSuccess
      },
    })
  }
  /**
   * 收起键盘
   */
  static blur () {
    MethodChannel.call({
      method: FlutterMethodChannelType.blur
    })
  }

  static log (...args: any[]) {
    if (console && console.log) {
      console.log(...args)
    }
    devtools.log(...args)
  }
  static warn (...args: any[]) {
    if (console && console.warn) {
      console.warn(...args)
    }
    devtools.warn(...args)
  }
  static error (...args: any[]) {
    if (console && console.error) {
      console.error(...args)
    }
    devtools.error(...args)
  }
}
