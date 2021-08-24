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
import MethodChannel, { FlutterMethodChannelType, MethodChannelReceiveType } from './MethodChannel'
import VNode, { LifeCycle } from '../core/VNode'
import appContainer from '../core/AppContainer'
import { mediaQuery as mq } from '../manager/UIManager'
import RenderManager from '../manager/RenderManager'
import UtilManager from '../manager/UtilManager'
import BridgeManager from '../manager/BridgeManager'
import bus from '../shared/bus'
import Util from '../shared/Util'
import { ChannelParams } from '../types/type'
import { Page } from '../core/basicWidget'
import TimerManager from '../manager/TimerManager'

declare const __LOCAL_BUNDLE_DIR__: string
declare const __BIZ_NAME__: string

enum DispatcherFromType {
  Flutter,
  Native,
}

/**
 * native与flutter调用js后的方法分发器
 */
export class Dispatcher {
  // 事件分发中心
  dispatch(channelParams: ChannelParams, from: DispatcherFromType) {
    let { method, params, contextId } = channelParams

    // 来自 flutter 的消息是被 stringify 的
    // 需要先解析为 Object
    if (from === DispatcherFromType.Flutter) {
      if (Util.isString(params)) {
        try {
          params = JSON.parse(params)
        } catch (e) {
          UtilManager.warn(e)
        }
      }
    }

    const fn: Function | void = this[method]
    if (fn) fn(params, (contextId || '').toString())
  }

  /**
   * flutter_call_js
   * flutter 在获取到设备媒介参数后会通过该消息发送给 js
   */
  async [MethodChannelReceiveType.mediaQuery](params: any) {
    // 防止重复获取
    if (threshApp.envReady) return

    const {
      debugMode = false,
      platform,
      flutterVersion,
      width = 0,
      needJsBundlePath = true,
    } = params
    // width 不存在时认为该条消息无效
    if (!width) return

    // fix promise bug
    await Util.promiseResolveHackForIos_10_0_x()

    threshApp.debugMode = !!debugMode
    threshApp.platform = platform
    threshApp.flutterVersion = flutterVersion
    threshApp.envReady = true
    mq.setDeviceInfo(params)

    // 获取并设置 bundleDir
    let bundleDir: string
    let res: any
    // 开发模式获取本地 bundle path 并发送到 flutter
    if (process.env.NODE_ENV === 'development') {
      bundleDir = __LOCAL_BUNDLE_DIR__
      MethodChannel.call({
        method: FlutterMethodChannelType.setBundleDir,
        params: { bundleDir },
      })
    }
    // 非开发环境
    // needJsBundlePath 标记 Thresh 是否需要通过 js 获取 bundle path
    else {
      if (needJsBundlePath) {
        res = await BridgeManager.invoke({
          module: 'thresh',
          method: 'jsbundlePath',
          params: { bizName: __BIZ_NAME__ }
        })
        bundleDir = res.data || ''
        if (!bundleDir) throw new Error(`cannot get thresh js bundle dir: ${JSON.stringify(res)}`)
        MethodChannel.call({
          method: FlutterMethodChannelType.setBundleDir,
          params: { bundleDir },
        })
      }
    }
    Util.log('Flutter env is ready')
  }

  /**
   * flutter_call_js
   * flutter 端环境准备完成后发送该消息
   * 该消息可能会携带需要显示的页面数据
   */
  async [MethodChannelReceiveType.ready](params: any) {
    if (!threshApp.envReady) {
      RenderManager.getMediaQuery(threshApp.jsVersion)
      return
    }

    const contextId: string = params.jsContextId
    if (!contextId || appContainer.pageContainerExisted(contextId)) return

    if (params.pageName) {
      threshApp.injectRoute(params)
    }
    appContainer.createPageContainer(contextId)
    threshApp.ready()
  }

  /**
   * flutter_call_js
   * flutter 通过该消息通知 js 显示某个页面
   */
  [MethodChannelReceiveType.setupPage](params: any) {
    const pageName = params ? params.pageName : void 0
    const query: object = params ? params.params || {} : void 0
    threshApp.pushPage(pageName, query)
  }

  /**
   * flutter_call_js
   * flutter 触发 popPage 时通过该方法将 popPage 的决定权交给 js
   * flutter 本身触发的 popPage 不生效，通过 js 触发的 popPage 才生效
   * 以便执行 popPage 前的一些额外操作
   */
  [MethodChannelReceiveType.needPopPage]() {
    threshApp.popPage()
  }

  /**
   * flutter_call_js
   * 执行该方法时 flutter 实际 hasPopPage 已完成
   */
  [MethodChannelReceiveType.hasPopPage](params: any = {}) {
    let hidePageName = params.pageName
    // 获取到当前被退出页面的名字
    if (!hidePageName) hidePageName = appContainer.currentShowName

    if (appContainer.hasPage(hidePageName, true)) {
      const contextId: string = appContainer.contextId as string
      // 判断当前被关闭的页面是不是 modal
      // 如果是 modal 页面，将不会触发当前 modal 内部 Page.onHide 以及即将显示的页面的 Page.onShow
      const isModalPage = appContainer.pageIsModal(hidePageName)
      const renderTree: VNode = appContainer.getPageDataWithPageName(hidePageName) as VNode
      // popPage 后续流程：
      // 1. 触发 pageOnHide
      if (!isModalPage) Page.invokePageOnHide(contextId)
      // 2. 执行 popPage 结束回调并移除
      bus.fire(hidePageName)
      bus.remove(hidePageName)
      // 3. 移除当前显示页面
      appContainer.removeCurrentShow()
      // 4. 触发当前显示页面的 didUnmount
      renderTree.invokeLifeCycle(LifeCycle.widgetDidUnmount)
      // 5. 触发即将显示页面的 onShow 方法
      if (!isModalPage) Page.invokePageOnShow(contextId)
    }
  }

  /**
   * flutter_call_js
   * 触发组件事件
   */
  [MethodChannelReceiveType.triggerEvent](params: any) {
    if (!params) return
    const { pageName, widgetId, eventId, eventType, args } = params
    const pageNode: VNode | void = appContainer.getPageDataWithPageName(pageName)
    if (!pageNode) return
    pageNode.invokeEvent(widgetId, eventId, eventType, args)
  }

  /**
   * flutter_call_js
   * 触发组件生命周期
   */
  [MethodChannelReceiveType.lifeCycle](params: any) {
    if (!params) return
    const pageName = params.pageName
    const lifeStep: string = params.lifeStep
    const widgetId: string = params.widgetId
    const pageNode: VNode | void = appContainer.getPageDataWithPageName(pageName)
    if (!pageName || !pageNode || !lifeStep) return
    if (!widgetId) {
      pageNode.invokeLifeCycle(lifeStep)
    } else {
      const renderNode: VNode = pageNode.fetch(widgetId)
      if (renderNode) renderNode.invokeLifeCycle(lifeStep)
    }
    if (lifeStep === LifeCycle.widgetDidMount) {
      bus.fire(`pageOnShow#${pageName}`)
    }
  }

  /**
   * flutter_call_js native_call_js
   * bridge 响应
   */
  [MethodChannelReceiveType.bridgeResponse](params: any) {
    const { methodId, response } = params
    // response 内部还包装了一层，需要读取内层
    const res = response.data || response
    try {
      if (res.data && (typeof res.data === 'string')) {
        res.data = JSON.parse(res.data)
      }
    } catch (e) { }
    BridgeManager.response(methodId, res)
  }

  /**
   * flutter_call_js
   * 关闭当前 native 窗口
   */
  [MethodChannelReceiveType.closeWindow]() {
    BridgeManager.invoke({
      module: 'app',
      business: 'ui',
      method: 'closeWindow'
    })
  }

  /**
   * flutter_call_js
   * flutter 通知 js 当前页面首帧加载已完成
   */
  [MethodChannelReceiveType.pageDidLoad](params: any) {
    const { pageName, loadTimestamp } = params
    appContainer.setPagePerformanceInfo(pageName, loadTimestamp)
  }

  /**
   * native_call_js
   * native 通知 js 当前 flutter 容器已销毁
   */
  [MethodChannelReceiveType.onDestroyed](_: any, contextId: string) {
    // 销毁当前 flutter 容器中的无限渲染组件
    // 如：Spin gif ...
    RenderManager.stopAlwaysRender(contextId)
    // 销毁 flutter thresh 实例
    MethodChannel.call({
      method: FlutterMethodChannelType.onDestroyed,
      contextId,
    })
    appContainer.destroyPageContainer(contextId)
    // 如果当前 app container 中不存在页面
    // 则清空 threshApp 的相关数据
    if (appContainer.isEmpty) {
      threshApp.clear()
      TimerManager.clearAllTimers()
    }
  }
}

const dispatcher: Dispatcher = new Dispatcher()
export default dispatcher

/**
 * js 暴露给 flutter 调用的方法
 */
function methodChannel_flutter_call_js(channelParams: ChannelParams) {
  // console.log('methodChannel_flutter_call_js', channelParams)
  dispatcher.dispatch(channelParams, DispatcherFromType.Flutter)
}
/**
 * js 暴露给 native 调用的方法
 */
function methodChannel_native_call_js(channelParams: ChannelParams) {
  // console.log('methodChannel_native_call_js', channelParams)
  dispatcher.dispatch(channelParams, DispatcherFromType.Native)
}

export {
  methodChannel_flutter_call_js as flutterCallJs,
  methodChannel_native_call_js as nativeCallJs,
}
