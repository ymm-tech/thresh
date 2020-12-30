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
import MethodChannel from '../channel/MethodChannel'
import Dispatcher from '../channel/dispatchMethod'
import VNode from '../core/VNode'
import appContainer, { MODAL_TAG } from '../core/AppContainer'
import Util from '../shared/Util'
import bus from '../shared/bus'
import EventManager from './EventManager'
import UIManager from './UIManager'
import { PageInfo, RenderData } from '../types/type'
import { ToastInfo } from '../types/widget'
import { Page } from '../core/basicWidget'

/**
 * 页面渲染管理器
 */
export default class RenderManager {
  private static pageId: number = 1
  private static modalNumber: number = 0
  /**
   * 获取当前页面信息
   */
  static get currentPage (): PageInfo|void {
    if (appContainer.isEmpty) return
    let pageName: string | void = appContainer.currentPageName
    if (!pageName) return
    let pageData: VNode | void = appContainer.currentPageData
    if (!pageData) return
    const temp: string[] = pageName.split('#')
    temp.pop()
    pageName = temp.join('#')
    return {
      pageName,
      pageData
    }
  }
  /**
   * 页面不存在
   */
  static pageNotFound (nextPath: string) {
    const allPaths: string[] = Array.from(appContainer.routes.keys())
    MethodChannel.call('pageNotFound', {
      allPath: allPaths.join('\n'),
      nextPath,
      prevPath: appContainer.referPageName || ''
    })
  }
  /**
   * 建立页面/模态框
   * @param {VNode} renderTree 
   * @param {String} pageName 
   * @param {Boolean} isModal 是否作为模态框显示
   * @param {Boolean} popup 作为模态框显示时是否从底部弹出
   */
  static pushPage (renderTree: VNode, pageName: string, isModal: boolean = false, popup: boolean = false) {
    if (appContainer.isEmpty && (UIManager.screenWidth === 0 || UIManager.screenHeight === 0)) {
      throw new Error(`[UI ERROR] screenWidth: ${UIManager.screenWidth}, screenHeight: ${UIManager.screenHeight}`)
    }
    if (!appContainer.isEmpty && !isModal) EventManager.fire('pageOnHide')
    const page = RenderManager._buildPage(renderTree, pageName)
    appContainer.pushPage(page.pageName, renderTree, isModal)
    if (!isModal) EventManager.fire('pageOnShow')
    MethodChannel.call('pushPage', {
      widgetRenderData: page.pageData,
      pageName: page.pageName,
      isModal,
      popup
    })
  }
  /**
   * 用一个新的页面替换当前显示的页面
   * @param {VNode} newRenderTree 
   * @param {String} newPageName
   */
  static replacePage (newRenderTree: VNode, newPageName: string) {
    EventManager.fire('pageOnHide')
    const page: PageInfo = RenderManager._buildPage(newRenderTree, newPageName)
    appContainer.replacePage(page.pageName, newRenderTree)
    EventManager.fire('pageOnShow')
    MethodChannel.call('replacePage', {
      widgetRenderData: page.pageData,
      pageName: page.pageName
    })
  }
  /**
   * 推出当前页面
   */
  static async popPage (): Promise<void> {
    const pageName: string = appContainer.namesCache[appContainer.namesCache.length - 1]

    if (!appContainer.currentShowIsModal) {
      const shouldPop: boolean = await Page.invokeBeforePagePop()
      if (!shouldPop) return
    }

    const popPageCallback: Function = resolve => {
      bus.register(() => {
        resolve()
      }, pageName)
    }
    if (RenderManager.canPop()) {
      // 如果当前页面可关闭
      // 则在向 flutter 发出关闭页面消息并注册关闭回调
      // 回调将会在 flutter 关闭页面并向 js 发出 popPage 消息后，在 Dispatch.popPage() 中被触发，并同时触发 pageOnHide
      MethodChannel.call('popPage', { pageName })
      return new Promise(resolve => {
        popPageCallback(resolve)
      })
    } else {
      return new Promise(resolve => {
        popPageCallback(resolve)
        // 当前页面不可关闭，则手动触发 Dispatch.popPage()
        Dispatcher.popPage({ pageName })
      })
    }
  }
  /**
   * threshApp当前页面是否可以推出
   */
  static canPop (): boolean {
    // 存在根flutter页面时一定可以pop
    // 不存在时只有当页面数量大于1时才可以pop
    return threshApp.hasRootFlutterPage || appContainer.namesCache.length > 1
  }
  /**
   * 显示模态
   */
  static showModal (modalRenderTree: VNode, title: string, popup: boolean) {
    RenderManager.modalNumber++
    RenderManager.pushPage(modalRenderTree, title, true, popup)
  }
  /**
   * 隐藏模态
   */
  static async hideModal (): Promise<void> {
    if (RenderManager.modalNumber) {
      RenderManager.modalNumber--
      return await RenderManager.popPage()
    }
  }
  /**
   * 显示taost
   */
  static showToast (toastRenderTree: VNode, toastInfo: ToastInfo = {}) {
    const toastRenderData: RenderData = toastRenderTree.toRenderData('toast#' + (toastInfo.name || Date.now()))
    MethodChannel.call('showToast', {
      toastRenderData: Util.toString(toastRenderData),
      toastInfo: Util.toString(toastInfo)
    })
  }
  /**
   * 隐藏taost
   */
  static hideToast (toastName: string) {
    MethodChannel.call('hideToast', { toastName })
  }
  /**
   * 更新widget
   * @param {VNode} updateRenderTree 
   * @param {String} needUpdateWidgetId 
   * @param {String} invokeDidUpdateWidgetId
   * @param {String} pageName
   * @param {bool} setRootBasicStateful 是否设置newWidgetTree的根basic widget为stateful，因为更新时只能拿到render执行结果，无法获取到包裹它的widget是否是stateful的，所以需要手动传入
   */
  static updateWidget (updateRenderTree: VNode, needUpdateWidgetId: string, invokeDidUpdateWidgetId: string, pageName: string) {
    // 当需要更新 widget 时查看 widget cache 中是否已经存在需要被替换的 widget tree 的根节点标记
    const updateRenderData: RenderData = updateRenderTree.toRenderData(pageName)
    MethodChannel.call('updateWidget', {
      widgetUpdateData: Util.toString(updateRenderData),
      needUpdateWidgetId,
      invokeDidUpdateWidgetId,
      pageName
    })
  }
  /**
   * 停止 flutter 中永久渲染组件的渲染
   */
  static stopAlwaysRender () {
    MethodChannel.call('stopAlwaysRender')
  }
  /**
   * 获取设备媒体信息
   * 由于mediaQuery是threshApp中唯一一个双向的方法
   * 因此在接收到来自flutter的mediaQuery信息时，还会携带上其他的信息
   * 如：debugMode bizName 等
   */
  static getMediaQuery (jsVersion: string) {
    MethodChannel.call('mediaQuery', { jsEnv: process.env.NODE_ENV, jsVersion })
  }
  /**
   * 构建页面
   * 返回一个可以被flutter解析渲染的 jsonTreeString
   */
  private static _buildPage (renderTree: VNode, pageName: string): PageInfo {
    if (!pageName) throw new Error('set up page must has a pageName')
    pageName = `${pageName}#${RenderManager.pageId++}`
    const renderData: RenderData = renderTree.toRenderData(pageName)
    if (!renderTree.fetchRootNode().pageNode && !pageName.startsWith(MODAL_TAG)) throw new Error('Each page must has one <Page />')
    return {
      pageName,
      pageData: Util.toString(renderData)
    }
  }
}
