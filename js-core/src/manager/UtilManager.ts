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

import MethodChannel from '../channel/MethodChannel'
import BridgeManager from './BridgeManager'
import bus from '../shared/bus'
import Util from '../shared/Util'
import { RequestParams } from '../types/type'
import DevtoolsManager from './DevtoolsManager'

/**
 * 工具方法管理器
 */
export default class UtilManager {
  /**
   * 定时执行器
   */
  static setTimeout (callback: Function, duration: number = 16): string {
    return UtilManager.registerTimer('setTimeout', callback, duration)
  }
  /**
   * 循环定时执行器
   */
  static setInterval (callback: Function, duration: number = 16): string {
    return UtilManager.registerTimer('setInterval', callback, duration)
  }
  /**
   * 清除定时器
   */
  static clearTimer (timerId: string) {
    if (!timerId) return
    if (!bus.has(timerId)) return
    bus.remove(timerId)
    MethodChannel.call('clearTimer', { timerId })
  }
  /**
   * 注册定时器
   */
  private static registerTimer (type: string, callback: Function, duration: number): string {
    if (!Util.isFunc(callback)) return
    const timerId = bus.register(callback)
    MethodChannel.call(type, {
      timerId,
      duration
    })
    return timerId
  }
  /**
   * 发起网络请求
   */
  static async request (params: RequestParams): Promise<any> {
    return BridgeManager.invoke({
      module: BridgeManager.THRESH_BUILT_IN_BRIDGE,
      method: BridgeManager.BRIDGE_METHOD_NET_REQUEST,
      params: params
    })
  }
  /**
   * 复制到剪贴板
   * @param {any} data
   */
  static copy (data: any, showSuccess: boolean = true) {
    MethodChannel.call('copy', {
      data: Util.toString(data),
      showSuccess
    })
  }

  static log (...args: any[]) {
    if (console && console.log) {
      console.log(...args)
    }
    DevtoolsManager.log(...args)
  }
  static warn (...args: any[]) {
    if (console && console.warn) {
      console.warn(...args)
    }
    DevtoolsManager.warn(...args)
  }
  static error (...args: any[]) {
    if (console && console.error) {
      console.error(...args)
    }
    DevtoolsManager.error(...args)
  }
}
