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

import threshApp from '../..'
import BridgeManager from '../manager/BridgeManager'
import UtilManager from '../manager/UtilManager'
import Util from '../shared/Util'
import { ChannelParams, BridgeParams } from '../types/type'

declare const methodChannel_js_call_flutter: Function
declare const methodChannel_js_call_native: Function

/**
 * 打印method channel方法参数
 */
const methodChannelConsole = (channelParams: ChannelParams) => {
  const { method, params } = channelParams
  console.group('[CHANNEL PRINT] method: ' + method)
  if (params) {
    if (params.widgetRenderData) {
      params.widgetRenderData = JSON.parse(params.widgetRenderData)
    }
    if (params.widgetUpdateData) {
      params.widgetUpdateData = JSON.parse(params.widgetUpdateData)
    }
  }
  console.log('[CHANNEL PRINT] params: ', params)
  console.groupEnd()
}

/**
 * js与native和flutter通信的方法
 * methodChannel_js_call_flutter methodChannel_js_call_native 为 native 注入到当前 js context 中的方法
 */
function jsCallNative (channelParams: ChannelParams) {
  try {
    channelParams = formatChannelParams(channelParams)
    if (!channelParams.method) return
    // reportChannelLog(channelParams, 'Native')
    methodChannel_js_call_native(channelParams)
  } catch (e) {} finally {
    // if (threshApp.debugMode && process.env.NODE_ENV === 'development') {
    //   methodChannelConsole(channelParams)
    // }
  }
}
function jsCallFlutter (channelParams: ChannelParams) {
  if (threshApp && !threshApp._alive) return
  try {
    channelParams = formatChannelParams(channelParams)
    if (!channelParams.method) return
    // reportChannelLog(channelParams, 'Flutter')
    methodChannel_js_call_flutter(channelParams)
  } catch (e) {} finally {
    // if (threshApp.debugMode && process.env.NODE_ENV === 'development') {
    //   methodChannelConsole(channelParams)
    // }
  }
}

function formatChannelParams (channelParams: ChannelParams): ChannelParams {
  let { params } = channelParams
  if (Util.isNil(params)) params = {}
  if (!Util.isObject(params)) {
    UtilManager.error('Channel params must pass in an object!')
    return { method: '' }
  }
  if (!Util.isNil(params.__channelStartTime__)) {
    UtilManager.error('Channel params cannot use "__channelStartTime__" as a key!')
    return { method: '' }
  }
  params.__channelStartTime__ = Date.now()
  channelParams.params = params
  return channelParams
}

// function reportChannelLog (channelParams: ChannelParams, callType: 'Flutter' | 'Native') {
//   const noLogMethods: string[] = [ 'devtools', 'clearTimer', 'setInterval', 'setTimeout', 'print', 'reload', 'bridgeRequest' ]
//   const { method, params } = channelParams
//   if (method && !noLogMethods.includes(method)) {
//     let content: any = { method }
//     if (method === 'pushPage') {
//       content.params = {
//         pageName: params.pageName,
//         isModal: params.isModal,
//         popup: params.popup,
//         hasRenderData: !!params.widgetRenderData
//       }
//     } else if (method === 'replacePage') {
//       content.params = {
//         pageName: params.pageName,
//         hasRenderData: !!params.widgetRenderData
//       }
//     } else if (method === 'updateWidget') {
//       content.params = {
//         pageName: params.pageName,
//         hasRenderData: !!params.widgetUpdateData,
//         needUpdateWidgetId: params.needUpdateWidgetId,
//         invokeDidUpdateWidgetId: params.invokeDidUpdateWidgetId,
//       }
//     } else if (method === 'showToast') {
//       content.params = {
//         hasRenderData: !!params.toastRenderData,
//         toastInfo: params.toastInfo
//       }
//     } else content.params = params

//     BridgeManager.invoke({
//       module: 'base',
//       method: 'log',
//       params: {
//         level: 0,
//         tag: callType === 'Flutter' ? 'Thresh_jsCallFlutter' : 'Thresh_jsCallNative',
//         content: JSON.stringify(content)
//       }
//     })
//   }
// }

/**
 * 通信类
 * 封装了js调用native和flutter的方法
 */
export default class MethodChannel {
  // 是否已调用 pageDidShow
  static hasCallPageDidShow: boolean = false
  // 页面显示首帧时的时间戳
  static pageDidLoadTime: number
  // js 与 flutter 首次通信时的时间戳
  static jsStartTime: number = 0
  // js -> flutter 首次通信的耗时
  static channelFirstSpendTime: number = 0
  // js runApp 时的时间戳
  static jsRunAppTime: number = 0

  // 调用注入方法
  static call (method: string, params: any = {}) {
    if (!MethodChannel.jsStartTime) MethodChannel.jsStartTime = Date.now()
    jsCallFlutter({ method, params })
  }
  // 页面初次渲染完成时通知 native
  static pageDidShow (networkTime: number = 0) {
    if (MethodChannel.hasCallPageDidShow) return
    MethodChannel.hasCallPageDidShow = true

    const { pageDidLoadTime, jsStartTime, channelFirstSpendTime, jsRunAppTime } = MethodChannel
    jsCallNative({ method: 'pageDidShow', params: {
      flutterVersion: threshApp.flutterVersion,
      jsVersion: threshApp.jsVersion,
      pageName: threshApp.pageName || 'unknown',
      networkTime,
      pageDidLoad: pageDidLoadTime || (Date.now() - networkTime),
      jsStartTime,
      jsRunAppTime,
      channelFirstSpendTime,
      pageDidShowTime: Date.now()
    } })
    UtilManager.log({
      networkTime,
      jsRenderTime: Date.now() - MethodChannel.jsRunAppTime - networkTime,
      jsTotalTime: Date.now() - MethodChannel.jsStartTime,
      channelFirstSpendTime
    })
  }
  // 输出到native
  static print (params: any = {}) {
    jsCallNative({ method: 'print', params })
  }
  // 重载bundle.js
  static reload () {
    jsCallNative({ method: 'reload', params: {} })
  }
  // 触发 NativeView 方法
  static invokeNativeViewMethod ({
    methodName,
    methodParams = {},
    viewType,
    viewParams = {},
  }: {
    methodName: string,
    methodParams?: any,
    viewType: string,
    viewParams?: any,
  }) {
    jsCallNative({ method: 'invokeNativeViewMethod', params: {
      methodName,
      methodParams,
      viewType,
      viewParams,
    } })
  }
  // bridge方法
  static bridge (methodId: string, params: BridgeParams) {
    const channelMethodName = 'bridgeRequest'
    if (!Util.isProd && BridgeManager.isNetworkRequest(params)) {
      jsCallFlutter({
        method: channelMethodName,
        params: {
          methodId,
          request: Util.toString(params),
        }
      })
      return
    }
    jsCallNative({
      method: channelMethodName,
      params: {
        methodId,
        request: params,
      }
    })
  }
}
