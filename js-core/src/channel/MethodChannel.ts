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

import BridgeManager from '../manager/BridgeManager'
import UtilManager from '../manager/UtilManager'
import Util from '../shared/Util'
import { ChannelParams, BridgeParams } from '../types/type'
import threshApp from '../core/ThreshApp'
import appContainer from '../core/AppContainer'
import { PerformanceInfo } from '../core/PageContainer'

declare const methodChannel_js_call_flutter: Function
declare const methodChannel_js_call_native: Function

/**
 * JS 向 Flutter 发出消息的类型枚举
 */
export enum FlutterMethodChannelType {
  none = '', // 改消息会被忽略
  setBundleDir = 'setBundleDir',
  devtools = 'devtools',
  bridgeRequest = 'bridgeRequest',
  onError = 'onError',
  // UI
  mediaQuery = 'mediaQuery',
  setAppBarHeight = 'setAppBarHeight',
  pushPage = 'pushPage',
  popPage = 'popPage',
  showModal = 'showModal',
  showToast = 'showToast',
  hideToast = 'hideToast',
  updateWidget = 'updateWidget',
  pageNotFound = 'pageNotFound',
  stopAlwaysRender = 'stopAlwaysRender',
  onDestroyed = 'onDestroyed',
  // Utils  
  copy = 'copy',
  blur = 'blur',
  // Widget Methods
  updateTitle = 'updateTitle',
  scrollTo = 'scrollTo',
  stopAsyncOperate = 'stopAsyncOperate',
  openActions = 'openActions',
  closeActions = 'closeActions',
  swipeTo = 'swipeTo',
  setValue = 'setValue',
  triggerFocus = 'triggerFocus',
  jumpTo = 'jumpTo',
  animateTo = 'animateTo',
  switchTo = 'switchTo',
  setNestScrollViewStatus = 'setNestScrollViewStatus',
  dragPositionAnimateTo = 'dragPositionAnimateTo',
}
/**
 * JS 向  Native 发出消息的类型枚举
 */
export enum NativeMethodChannelType {
  print = 'print',
  reload = 'reload',
  pageDidShow = 'pageDidShow',
  invokeNativeViewMethod = 'invokeNativeViewMethod',
  bridgeRequest = 'bridgeRequest',
  sendData = 'sendData',
}
/**
 * JS 接收到的消息类型枚举
 */
export enum MethodChannelReceiveType {
  mediaQuery = 'mediaQuery',
  ready = 'ready',
  setupPage = 'setupPage',
  needPopPage = 'needPopPage',
  hasPopPage = 'hasPopPage',
  triggerEvent = 'triggerEvent',
  lifeCycle = 'lifeCycle',
  bridgeResponse = 'bridgeResponse',
  closeWindow = 'closeWindow',
  pageDidLoad = 'pageDidLoad',
  onDestroyed = 'onDestroyed',
}

/**
 * 打印method channel方法参数
 */
const methodChannelConsole = (channelParams: ChannelParams) => {
  const { method, params, contextId } = channelParams
  console.group('[CHANNEL PRINT] method: ' + method)
  if (params) {
    if (params.widgetRenderData) {
      params.widgetRenderData = JSON.parse(params.widgetRenderData)
    }
    if (params.widgetUpdateData) {
      params.widgetUpdateData = JSON.parse(params.widgetUpdateData)
    }
  }
  console.log('contextId: ', contextId)
  console.log('params: ', params)
  console.groupEnd()
}

/**
 * js与native和flutter通信的方法
 * methodChannel_js_call_flutter methodChannel_js_call_native 为 native 注入到当前 js context 中的方法
 */
function jsCallNative(channelParams: ChannelParams) {
  try {
    channelParams = formatChannelParams(channelParams)
    if (channelParams.method === FlutterMethodChannelType.none) return
    methodChannel_js_call_native(channelParams)
  } catch (e) { } finally {
    // if (threshApp.debugMode && process.env.NODE_ENV === 'development') {
    //   methodChannelConsole(channelParams)
    // }
  }
}
function jsCallFlutter(channelParams: ChannelParams) {
  try {
    channelParams = formatChannelParams(channelParams)
    if (channelParams.method === FlutterMethodChannelType.none) return
    methodChannel_js_call_flutter(channelParams)
  } catch (e) { } finally {
    // if (threshApp.debugMode && process.env.NODE_ENV === 'development') {
    //   methodChannelConsole(channelParams)
    // }
  }
}

function formatChannelParams(channelParams: ChannelParams, stringifyParams: boolean = false): ChannelParams {
  let { params } = channelParams
  if (Util.isNil(params)) params = {}
  if (!Util.isObject(params)) {
    UtilManager.error('Channel params must pass in an object!')
    return { method: FlutterMethodChannelType.none }
  }
  // if (!Util.isNil(params.__channelStartTime__)) {
  //   UtilManager.error('Channel params cannot use "__channelStartTime__" as a key!')
  //   return { method: FlutterMethodChannelType.none }
  // }
  // params.__channelStartTime__ = Date.now()
  if (!channelParams.contextId) channelParams.contextId = appContainer.contextId
  channelParams.params = stringifyParams ? JSON.stringify(params) : params
  return channelParams
}

/**
 * 通信类
 * 封装了js调用native和flutter的方法
 */
export default class MethodChannel {
  static MAX_CHUNK_SIZE: number = 1024 * 10

  // 调用注入方法
  static call({
    method,
    params = {},
    contextId,
  }: {
    method: FlutterMethodChannelType | NativeMethodChannelType
    params?: any
    contextId?: string
  }) {
    jsCallFlutter({
      contextId,
      method,
      params
    })
  }

  // 页面初次渲染完成时通知 native
  static pageDidShow(networkTime: number = 0) {
    const performanceInfo: PerformanceInfo | undefined = appContainer.getPagePerformanceInfo()
    if (!performanceInfo || performanceInfo.hasReported) return

    performanceInfo.hasReported = true

    const pageShowTimestamp = Date.now()
    const pageName = threshApp.pageName || 'unknown'

    jsCallNative({
      method: NativeMethodChannelType.pageDidShow,
      params: {
        flutterVersion: threshApp.flutterVersion,
        jsVersion: threshApp.jsVersion,
        pageName,
        // 网络通信耗时
        networkTime,
        // 页面创建时的时间戳
        pageCreateTimestamp: performanceInfo.createTimestamp,
        // 页面首帧加载完成的时间戳
        pageLoadTimestamp: performanceInfo.loadTimestamp,
        // 页面显示时的时间戳（包含网络通信耗时）
        pageShowTimestamp,
      }
    })
    UtilManager.log({
      pageName,
      networkTime,
      pageLoadTime: performanceInfo.loadTimestamp - performanceInfo.createTimestamp,
      pageShowTime: pageShowTimestamp - performanceInfo.createTimestamp
    })
  }
  // 输出到native
  static print(params: any = {}) {
    jsCallNative({
      method: NativeMethodChannelType.print,
      params
    })
  }
  // 重载bundle.js
  static reload() {
    jsCallNative({
      method: NativeMethodChannelType.reload,
      params: {}
    })
  }
  // 触发 NativeView 方法
  static invokeNativeViewMethod({
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
    jsCallNative({
      method: NativeMethodChannelType.invokeNativeViewMethod,
      params: {
        methodName,
        methodParams,
        viewType,
        viewParams,
      }
    })
  }
  // bridge方法
  static bridge(methodId: string, params: BridgeParams) {
    if (!Util.isProd && BridgeManager.isNetworkRequest(params)) {
      jsCallFlutter({
        method: FlutterMethodChannelType.bridgeRequest,
        params: {
          methodId,
          request: Util.toString(params),
        }
      })
      return
    }
    jsCallNative({
      method: NativeMethodChannelType.bridgeRequest,
      params: {
        methodId,
        request: params,
      }
    })
  }

  // 向Native侧传数据
  static sendDataToNative(params: any = {}) {
    jsCallNative({
      method: NativeMethodChannelType.sendData,
      params
    })
  }
}
