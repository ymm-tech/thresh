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

import { ThreshApp } from '../core/ThreshApp'
import MethodChannel from '../channel/MethodChannel'
import { flutterCallJs, nativeCallJs } from '../channel/dispatchMethod'
import UtilManager from '../manager/UtilManager'
import { methodChannel_fire_js_event, methodChannel_register_js_event } from '../manager/EventManager'
import Util from '../shared/Util'

declare const window

// 记录上一个错误信息，防止误报
let lastErrorMessage: string

export default function initGlobal (threshApp: ThreshApp) {
  let g: any;
  g = (function() { return this })()
  try {
    g = g || new Function("return this")()
  } catch (e) {
    if (typeof window === "object") g = window
  }

  g['Thresh'] = threshApp

  g['methodChannel_flutter_call_js'] = flutterCallJs
  g['methodChannel_native_call_js'] = nativeCallJs
  g['methodChannel_fire_js_event'] = methodChannel_fire_js_event
  g['methodChannel_register_js_event'] = methodChannel_register_js_event

  g['__reportError__'] = (error: any, functionName?: string, fileName?: string) => {
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
    if (lastErrorMessage === messages[0]) return
    lastErrorMessage = messages[0]
    const message = messages.join('\n')

    // 开发模式下向 flutter 发送异常，将会显示在调试面板上
    if (threshApp.debugMode) {
      MethodChannel.call('onError', {
        message,
        stack: error.stack || '',
        pageName: threshApp.pageName || 'unknown',
        referPageName: threshApp.referPageName || 'unknown'
      })
    }
    threshApp.onError({
      message,
      stack: error.stack || ''
    })
  }

  // @ts-ignore
  g['setTimeout'] = UtilManager.setTimeout
  // @ts-ignore
  g['setInterval'] = UtilManager.setInterval
  // @ts-ignore
  g['clearTimeout'] = UtilManager.clearTimer
  // @ts-ignore
  g['clearInterval'] = UtilManager.clearTimer
}

// ios 10.0.x 版本上 Promise 回调中的 resolve 存在异常
// 必须先通过 Promise.resolve() 进行一遍类似初始化的操作
export function promiseResolveHackForIos_10_0_x () {
  return Promise.resolve()
}
