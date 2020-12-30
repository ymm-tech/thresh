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
import MethodChannel from './MethodChannel'
import VNode, { LifeCycle } from '../core/VNode'
import appContainer, { MODAL_TAG } from '../core/AppContainer'
import { mediaQuery as mq } from '../manager/UIManager'
import RenderManager from '../manager/RenderManager'
import UtilManager from '../manager/UtilManager'
import BridgeManager from '../manager/BridgeManager'
import bus from '../shared/bus'
import Util from '../shared/Util'
import { promiseResolveHackForIos_10_0_x } from '../shared/initGlobal'
import { ChannelParams, PageInfo } from '../types/type'
import { Page } from '../core/basicWidget'

declare const __LOCAL_BUNDLE_DIR__: string
declare const __BIZ_NAME__: string

/**
 * native与flutter调用js后的方法分发器
 */
export default class Dispatcher {
  static dispatch (channelParams: ChannelParams, from: 'Native' | 'Flutter') {
    let { method, params } = channelParams

    if (from === 'Flutter') {
      if (Util.isString(params)) {
        try {
          params = JSON.parse(params)
        } catch (e) {
          UtilManager.warn(e)
        }
      }
    }
    const fn: Function | void = Dispatcher[method]
    if (fn) fn(params)
  }

  // flutter_call_js
  static async mediaQuery (params: any) {
    if (threshApp.envReady) return
    const { debugMode = false, platform, flutterVersion, flutterFirstChannelSpend = 0, width = 0, needJsBundlePath = true } = params
    if (!width) return
    mq.setDeviceInfo(params)
    threshApp.debugMode = !!debugMode
    threshApp.platform = platform
    threshApp.flutterVersion = flutterVersion
    threshApp.envReady = true

    if (!MethodChannel.channelFirstSpendTime && flutterFirstChannelSpend) MethodChannel.channelFirstSpendTime = flutterFirstChannelSpend

    let bundleDir: string
    let res: any

    // 开发模式获取本地 bundle path 并发送到 flutter
    if (process.env.NODE_ENV === 'development') {
      bundleDir = __LOCAL_BUNDLE_DIR__
      MethodChannel.call('setBundleDir', { bundleDir })
    } else { // 非开发环境
      if (needJsBundlePath) {
        res = await BridgeManager.invoke({
          module: 'thresh',
          method: 'jsbundlePath',
          params: { bizName: __BIZ_NAME__ }
        })
        bundleDir = res.data || ''
        if (!bundleDir) throw new Error(`cannot get thresh js bundle dir: ${JSON.stringify(res)}`)
        MethodChannel.call('setBundleDir', { bundleDir })
      }
    }
  }
  // flutter_call_js
  static async ready (params: any) {
    if (!threshApp.envReady) {
      RenderManager.getMediaQuery(threshApp.jsVersion)
      return
    }
    if (threshApp.hasRunApp) return
    threshApp.hasRunApp = true
    threshApp.hasRootFlutterPage = false
    if (params) {
      threshApp.injectRoute(params)
    }
    await promiseResolveHackForIos_10_0_x()
    threshApp.ready()
  }
  // flutter_call_js
  static setupPage (params: any) {
    const pageName = params ? params.pageName : void 0
    const query: object = params ? params.params || {} : void 0
    const pageRes: PageInfo = threshApp['_findPage'](pageName, query)
    if (!pageRes.pageData) return
    RenderManager.pushPage(pageRes.pageData, pageRes.pageName)
  }
  // flutter_call_js
  // flutter 触发 pop 时通知 js 执行 popPage
  // 然后回到 flutter 执行实际的 popPage
  // 最后回到 js 执行 popPage 后的工作
  static needPopPage (params: any) {
    RenderManager.popPage()
  }
  // flutter_call_js
  // 执行该方法时 flutter 实际 popPage 已完成
  static popPage (params: any = {}) {
    let { pageName } = params
    if (!pageName) pageName = appContainer.namesCache[appContainer.namesCache.length - 1]
    if (appContainer.hasPage(pageName, true)) {
      const renderTree: VNode = appContainer.getPageData(pageName) as VNode
      // 页面 pop 流程：
      // 先触发 pageOnHide
      // 再执行 pop 完成回调
      // 移除当前页面缓存或关闭窗口
      // 然后执行组件已卸载操作
      // 如果存在前一个页面还需要触发该页面的 pageOnShow
      Page.invokePageOnHide()
      bus.fire(pageName)
      bus.remove(pageName)
      if (!threshApp.canPop()) {
        // 关闭容器
        Dispatcher.closeWindow()
        // 触发当前页面的 didUnmount 方法
        renderTree.invokeLifeCycle(LifeCycle.widgetDidUnmount)
      } else {
        // 移除当前显示页面
        appContainer.removeCurrentShow()
        // 触发当前显示页面的 didUnmount 方法
        renderTree.invokeLifeCycle(LifeCycle.widgetDidUnmount)
        // 如果当前显示的是弹窗则中断
        // TODO - 弹窗中包含 Page 组件时也需要触发 onShow onHide，目前暂未触发
        if ((pageName as string).startsWith(MODAL_TAG)) return
        // 触发即将显示页面的 onShow 方法
        Page.invokePageOnShow(pageName)
      }
    }
  }
  // flutter_call_js
  static triggerEvent (params: any) {
    if (!params) return
    const { pageName, widgetId, eventId, eventType, args } = params
    const pageNode: VNode | void = appContainer.getPageData(pageName)
    if (!pageNode) return
    pageNode.invokeEvent(widgetId, eventId, eventType, args)
  }
  // flutter_call_js
  static lifeCycle (params: any) {
    if (!params) return
    const pageName = params.pageName
    const lifeStep: string = params.lifeStep
    const widgetId: string = params.widgetId
    const pageNode: VNode | void = appContainer.getPageData(pageName)
    if (!pageName || !pageNode || !lifeStep) return
    if (!widgetId) {
      pageNode.invokeLifeCycle(lifeStep)
    } else {
      const renderNode: VNode = pageNode.fetch(widgetId)
      if (renderNode) renderNode.invokeLifeCycle(lifeStep)
    }
  }
  // flutter_call_js
  static fireTimer (params: any) {
    bus.fire(params.timerId)
  }
  // flutter_call_js
  static clearTimer (params: any) {
    UtilManager.clearTimer(params.timerId)
  }
  // flutter_call_js native_call_js
  static bridgeResponse (params: any) {
    const { methodId, response } = params
    // response 内部还包装了一层，需要读取内层
    const res = response.data || response
    try {
      if (res.data && (typeof res.data === 'string')) {
        res.data = JSON.parse(res.data)
      }
    } catch (e) {}
    BridgeManager.response(methodId, res)
  }
  // flutter_call_js
  static closeWindow () {
    RenderManager.stopAlwaysRender()
    UtilManager.setTimeout(() => {
      Dispatcher.onDestroyed()
      BridgeManager.invoke({
        module: 'base',
        method: 'closeWindow'
      })
    }, 100)
  }
  // flutter_call_js
  static pageDidLoad () {
    MethodChannel.pageDidLoadTime = Date.now()
  }
  // native_call_js
  static onDestroyed () {
    MethodChannel.call('onDestroyed', {})
    threshApp._alive = false
  }
}

/**
 * js 暴露给 flutter 调用的方法
 */
function methodChannel_flutter_call_js (channelParams: ChannelParams) {
  if (!threshApp._alive) return
  Dispatcher.dispatch(channelParams, 'Flutter')
}
/**
 * js 暴露给 native 调用的方法
 */
function methodChannel_native_call_js (channelParams: ChannelParams) {
  if (!threshApp._alive) return
  Dispatcher.dispatch(channelParams, 'Native')
}

export {
  methodChannel_flutter_call_js as flutterCallJs,
  methodChannel_native_call_js as nativeCallJs
}
