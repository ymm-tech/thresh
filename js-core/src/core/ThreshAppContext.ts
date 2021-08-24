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

import { ThreshApp } from './ThreshApp'
import MethodChannel, { FlutterMethodChannelType } from '../channel/MethodChannel'
import { flutterCallJs, nativeCallJs } from '../channel/dispatchMethod'
import TimerManager, { methodChannel_timer_fire } from '../manager/TimerManager'
import { methodChannel_fire_js_event, methodChannel_register_js_event } from '../manager/EventManager'
import Util from '../shared/Util'
import appContainer from './AppContainer'

declare const window

export class ThreshAppContext {
  // 全局对象
  private static _global: any
  // 记录上一个错误信息，防止误报
  private static _lastErrorMessage: string

  static initGlobal (threshApp: ThreshApp) {
    ThreshAppContext._global = (function() { return this })()
    try {
      ThreshAppContext._global = ThreshAppContext._global || new Function("return this")()
    } catch (e) {
      if (typeof window === "object") ThreshAppContext._global = window
    }
    ThreshAppContext._initGlobalMethods(threshApp)
  }

  /**
   * 向全局添加属性
   * 单 context 环境中，防止重复添加
   * @param prop 属性名
   * @param valueGetter 获取属性值的方法
   */
  static addUniquePropToGlobal<T> (prop: string, valueGetter: (oldValue?: T) => T) {
    const currentValue = ThreshAppContext.getGlobalProp(prop)
    const newValue = valueGetter(currentValue)
    ThreshAppContext.setGlobalProp(prop, newValue)
  }

  static getGlobalProp (prop: string) {
    return ThreshAppContext._global[prop]
  }
  static setGlobalProp (prop: string, value: any) {
    ThreshAppContext._global[prop] = value
  }

  private static _initGlobalMethods (threshApp: ThreshApp) {
    // 全局添加通信方法
    ThreshAppContext.addUniquePropToGlobal('methodChannel_flutter_call_js', () => flutterCallJs)
    ThreshAppContext.addUniquePropToGlobal('methodChannel_native_call_js', () => nativeCallJs)
    ThreshAppContext.addUniquePropToGlobal('methodChannel_fire_js_event', () => methodChannel_fire_js_event)
    ThreshAppContext.addUniquePropToGlobal('methodChannel_register_js_event', () => methodChannel_register_js_event)
    ThreshAppContext.addUniquePropToGlobal('methodChannel_timer_fire', () => methodChannel_timer_fire)

    // 全局添加定时器方法
    ThreshAppContext.addUniquePropToGlobal('setTimeout', () => TimerManager.setTimeout)
    ThreshAppContext.addUniquePropToGlobal('setInterval', () => TimerManager.setInterval)
    ThreshAppContext.addUniquePropToGlobal('clearTimeout', () => TimerManager.clearTimer)
    ThreshAppContext.addUniquePropToGlobal('clearInterval', () => TimerManager.clearTimer)

    // 全局异常处理方法
    ThreshAppContext.addUniquePropToGlobal('__reportError__', () => ((error: any, functionName?: string, fileName?: string) => {
      if (Util.isNil(error)) return
      // 上报时需要排除非 Error 类型
      // 尽量保证上报准确
      if (!error.message) return
      // 以下两个类型的 error 为 async 函数中主要 error 伴随产生的 error
      if (error.message.indexOf('result.done') > -1 || error.message.indexOf('op[0]') > -1) return
      if (console && console.error) console.error(error)
      let messages = [
        error.message
          ? error.message
          : error.toString()
      ]
      if (functionName) messages.push(`In function: ${functionName}`)
      if (fileName) messages.push(`In file: ${fileName}`)
      // 如果上一个异常与当前异常相同则忽略
      if (ThreshAppContext._lastErrorMessage === messages[0]) return
      ThreshAppContext._lastErrorMessage = messages[0]
      const message = messages.join('\n').trim()
      const stack = (error.stack || '').trim()

      // 开发模式下向 flutter 发送异常，将会显示在调试面板上
      if (threshApp.debugMode) {
        MethodChannel.call({
          method: FlutterMethodChannelType.onError,
          params: {
            message,
            stack,
            pageName: threshApp.pageName || 'unknown',
            referPageName: threshApp.referPageName || 'unknown'
          },
        })
      }
      threshApp.onError({ message, stack })
    }))

    ThreshAppContext.addUniquePropToGlobal('debug_get_appContainer', () => appContainer)
  }
}

export default ThreshAppContext
