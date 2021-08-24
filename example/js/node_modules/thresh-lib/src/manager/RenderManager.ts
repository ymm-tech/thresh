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
import dispatcher from '../channel/dispatchMethod'
import VNode from '../core/VNode'
import appContainer from '../core/AppContainer'
import Util from '../shared/Util'
import bus from '../shared/bus'
import eventManager, { BuiltInEventType } from './EventManager'
import UIManager from './UIManager'
import { PageInfo, RenderData } from '../types/type'
import { ToastInfo } from '../types/widget'
import { Page } from '../core/basicWidget'

/**
 * 页面渲染管理器
 */
export default class RenderManager {
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
    MethodChannel.call({
      method: FlutterMethodChannelType.pageNotFound,
      params: {
        allPath: allPaths.join('\n'),
        nextPath,
        prevPath: appContainer.referPageName || ''
      },
    })
  }
  /**
   * 建立页面/模态框
   * @param {VNode} renderTree 
   * @param {String} pageName
   * @param {number} createTimestamp 页面创建时间
   */
  static pushPage (renderTree: VNode, pageName: string, createTimestamp: number) {
    if (appContainer.isEmpty && (UIManager.screenWidth === 0 || UIManager.screenHeight === 0)) {
      throw new Error(`[UI ERROR] screenWidth: ${UIManager.screenWidth}, screenHeight: ${UIManager.screenHeight}`)
    }
    const contextId: string = appContainer.contextId as string
    if (!appContainer.isEmpty) Page.invokePageOnHide(contextId)
    const page = RenderManager._buildPage(renderTree, pageName)
    appContainer.pushPage(page.pageName, renderTree, createTimestamp)
    MethodChannel.call({
      method: FlutterMethodChannelType.pushPage,
      params: {
        pageName: page.pageName,
        widgetRenderData: page.pageData,
      },
    })
    const pageOnShowEventName = `pageOnShow#${page.pageName}`
    bus.register(() => {
      Page.invokePageOnShow(contextId)
      bus.remove(pageOnShowEventName)
    }, pageOnShowEventName)
  }
  /**
   * 推出当前页面
   */
  static async popPage (): Promise<void> {
    const showName: string | void = appContainer.currentShowName
    if (!showName) return

    if (!appContainer.currentShowIsModal) {
      const shouldPop: boolean = await Page.invokeBeforePagePop()
      if (!shouldPop) return
    }

    // 如果当前页面可执行 popPage 操作
    // 则向 flutter 发出 popPage 消息
    // flutter 完成相关操作后向 js 发出 hasPopPage 消息
    if (appContainer.canPop) {
      MethodChannel.call({
        method: FlutterMethodChannelType.popPage,
        params: { pageName: showName },
      })
      // 注册 popPage 完成的回调
      // 该回调会在 dispatcher.hasPopPage 中被调用
      const popPageCallback: Function = resolve => {
        bus.register(() => {
          resolve()
        }, showName)
      }
      return new Promise(resolve => {
        popPageCallback(resolve)
      })
    }
    // 当前页面不可执行 popPage 操作
    // 则直接调用 closeWindow 关闭当前 native 窗口
    // 页面 onHide onShow onDestroy 等操作由 native 来触发
    else {
      dispatcher.closeWindow()
    }
  }
  /**
   * 显示 modal
   */
  static showModal (modalRenderTree: VNode, title: string, popup: boolean) {
    const modal = RenderManager._buildPage(modalRenderTree, title)
    appContainer.showModal(modal.pageName, modalRenderTree)
    MethodChannel.call({
      method: FlutterMethodChannelType.showModal,
      params: {
        modalName: modal.pageName,
        widgetRenderData: modal.pageData,
        popup
      },
    })
  }
  /**
   * 隐藏 modal
   */
  static hideModal () {
    return RenderManager.popPage()
  }
  /**
   * 显示taost
   */
  static showToast (toastRenderTree: VNode, toastInfo: ToastInfo = {}) {
    const toastRenderData: RenderData = toastRenderTree.toRenderData('toast#' + (toastInfo.name || Date.now()))
    MethodChannel.call({
      method: FlutterMethodChannelType.showToast,
      params: {
        toastRenderData: JSON.stringify(toastRenderData),
        toastInfo: JSON.stringify(toastInfo),
      },
    })
  }
  /**
   * 隐藏taost
   */
  static hideToast (toastName: string) {
    MethodChannel.call({
      method: FlutterMethodChannelType.hideToast,
      params: { toastName },
    })
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
    MethodChannel.call({
      method: FlutterMethodChannelType.updateWidget,
      params: {
        pageName,
        needUpdateWidgetId,
        invokeDidUpdateWidgetId,
        widgetUpdateData: JSON.stringify(updateRenderData),
      },
      contextId: updateRenderTree.contextId,
    })
  }
  /**
   * 停止 flutter 中永久渲染组件的渲染
   */
  static stopAlwaysRender (contextId?: string) {
    MethodChannel.call({
      method: FlutterMethodChannelType.stopAlwaysRender,
      contextId,
    })
  }
  /**
   * 获取设备媒体信息
   * 由于mediaQuery是threshApp中唯一一个双向的方法
   * 因此在接收到来自flutter的mediaQuery信息时，还会携带上其他的信息
   * 如：debugMode bizName 等
   */
  static getMediaQuery (jsVersion: string) {
    MethodChannel.call({
      method: FlutterMethodChannelType.mediaQuery,
      params: { jsEnv: process.env.NODE_ENV, jsVersion },
    })
  }
  /**
   * 构建页面
   * 返回一个可以被flutter解析渲染的 jsonTreeString
   */
  private static _buildPage (renderTree: VNode, pageName: string): PageInfo {
    if (!pageName) throw new Error('set up page must have a pageName')
    pageName = `${pageName}#${appContainer.pageId}`
    const renderData: RenderData = renderTree.toRenderData(pageName)
    if (!renderTree.fetchRootNode().pageNode && !appContainer.pageIsModal(pageName)) throw new Error('Each page must have one <Page />')
    return {
      pageName,
      pageData: JSON.stringify(renderData)
    }
  }
}
