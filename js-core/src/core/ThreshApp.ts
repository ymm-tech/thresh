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
import RenderManager from '../manager/RenderManager'
import createElement from './createElement'
import Widget from './Widget'
import VNode from './VNode'
import appContainer from './AppContainer'
import { PageRoute, PageInfo, RouteConfig, ThreshProvidersConfig } from '../types/type'
import { ToastInfo } from '../types/widget'
import threshAppContext from './ThreshAppContext'
import Util from '../shared/Util'
import bus from '../shared/bus'
import eventManager from '../manager/EventManager'

/**
 * 对外暴露所有接口的threshApp主类
 */
export class ThreshApp {
  // 代码中配置的默认展示页面
  private _defaultPageName: string
  // 代码中配置的404页面
  private _notFoundPageName: string
  // 是否正在关闭 modal
  // 如果正在关闭中，将阻止新的 modal 创建
  private _modalIsHiding: boolean = false
  // flutter version
  flutterVersion: string
  // js version
  get jsVersion (): string {
    return '1.3.2'
  }
  // 是否调试模式
  debugMode: boolean = false
  // 平台类型
  platform: 'Android' | 'iOS' | void
  // 外部环境是否准备完成
  envReady: boolean = false
  // 三方注入的路由信息
  injectRouteInfo: PageRoute
  // 三方插件
  providers: ThreshProvidersConfig = {}

  // 持有注入的路由信息
  injectRoute = injectRoute
  createElement: Function = createElement
  Widget = Widget

  get pageName (): string {
    const originPageName = appContainer.currentPageName
    const defaultPageName = (threshApp.injectRouteInfo || { pageName: '' }).pageName
    if (!originPageName) return defaultPageName
    return originPageName.split('#').shift() || defaultPageName
  }
  get referPageName (): string {
    const originReferPageName = appContainer.referPageName
    if (!originReferPageName) return ''
    return originReferPageName.split('#').shift() || ''
  }

  constructor () {
    threshAppContext.initGlobal(this)
  }

  clear () {
    appContainer.clear()
    bus.clear()
    eventManager.resetAndRegisterBuiltInEvents()
  }

  // 上报异常到 flutter
  onError = (error: any) => {}

  /**
   * 判断当前 df 版本是否小于目标版本
   * @param flutterVersion 目标 df 版本
   */
  flutterVersionSmallerThan = Util.flutterVersionSmallerThan

  /**
   * 注册页面
   * @param {String} pageName
   * @param {Function} pageBuilder
   * @param {boolean} isDefault
   */
  registerPage (pageName: string, pageBuilder: Function, config: RouteConfig = {
    isDefault: false,
    isNotFound: false
  }) {
    appContainer.addRoute(pageName, pageBuilder)
    if (config.isDefault) this._defaultPageName = pageName
    if (config.isNotFound) this._notFoundPageName = pageName
  }
  /**
   * @override
   * 表示相关环境已准备完成执行的回调，如 flutter 环境
   * 可以在这个函数中做一些配置
   */
  ready = () => {}
  /**
   * js主动显示页面
   * 存在 injectRouteInfo 时显示 injectRouteInfo 对应的页面
   * 不存在时显示 _defaultPageName 页面
   * 都不存在时不显示
   */
  runApp () {
    this.pushPage()
  }
  /**
   * 通知 flutter 进入下一级页面
   * @param {String} pageName
   * @param {Object} params 页面参数
   */
  pushPage (pageName?: string, params: object = {}) {
    const pageCreateTimestamp = Date.now()
    const pageRes: PageInfo = this._findPage(pageName || '', params)
    if (pageRes.pageData) {
      RenderManager.pushPage(pageRes.pageData, pageRes.pageName, pageCreateTimestamp)
      Util.log('Push page: ' + pageRes.pageName)
    }
  }
  /**
   * 推出页面或关闭当前窗口
   */
  async popPage () {
    if (appContainer.isEmpty) return
    return await RenderManager.popPage()
  }
  /**
   * 当前页面是否可以pop
   */
  canPop (): boolean {
    return appContainer.canPop
  }
  /**
   * 显示模态框
   * @param {VNode} modal
   * @param {String} title
   * @param {boolean} popup
   */
  showModal (modal: VNode, {
    title,
    popup
  }: {
    title?: string,
    popup?: boolean
  } = {}) {
    if (!this._modalIsHiding) {
      RenderManager.showModal(modal, appContainer.formatModalName(title), !!popup)
    }
  }
  /**
   * 隐藏模态框
   */
  async hideModal () {
    this._modalIsHiding = true
    await RenderManager.hideModal()
    this._modalIsHiding = false
  }
  /**
   * 显示 toast
   * toast 不具备生命周期
   * @param {VNode} toast
   * @param {ToastInfo} info 该参数字段见下，可选
   * @param {String} name 名称，用来控制隐藏，如果不设置将会设置为自动隐藏
   * @param {int} stayTime toast 保持时间，默认 2000ms
   * @param {int} duration toast 动画时长，默认 200ms
   * @param {boolean} mask 是否需要透明遮罩，默认 false，设置为 true 则背景不可点击
   * @param {Object|Array<Object>} position 动画位置信息，可以是一个 Object 也可以是包含两个 Object 的数组（第一个元素是起始位置，第二个是结束位置），Object 有 left right top bottom width height 6个 double 属性，存在 width 时会忽略 left right，不设置默认为 { bottom: 50, right: 50, left: 50 }
   * @param {double|Array<double>} opacity 动画透明度，可以是一个 double 也可以是包含两个 double 的数组（第一个元素是起始透明度，第二个是结束透明度），不设置默认为 [0.0, 1.0]
   */
  showToast (toast: VNode, info?: ToastInfo) {
    RenderManager.showToast(toast, info)
  }
  /**
   * 隐藏 toast
   * @param {String} name
   */
  hideToast (name: string) {
    RenderManager.hideToast(name)
  }
  /**
   * 在关闭容器之前
   * 通过该方法可以停止页面上永久渲染组件的渲染，如 Refresh / gif 等
   * 防止关闭容器后因为持续渲染导致 crash
   * PS: 如果通过 threshApp.popPage() 关闭容器则不需要主动调用该方法，popPage 内部会判断调用时机
   */
  stopInfinitRender () {
    RenderManager.stopAlwaysRender()
  }
  /**
   * 上报当前正在显示页面的数据
   * @param networkTime 接口耗时
   */
  pageDidShow (networkTime: number = 0) {
    MethodChannel.pageDidShow(networkTime)
  }
  /**
   * 加载 providers
   */
  useProviders (providers: ThreshProvidersConfig) {
    this.providers = providers
  }
  /** 
   * native 打印方法
   */
  print (args: any) {
    MethodChannel.print(args)
  }
  /**
   * 重载 js 并执行
   */
  // reload () {
  //   MethodChannel.reload()
  // }
  /**
   * 在已注册的页面找到目标页面
   * 页面优先级如下：
   * 1. 已指定页面则显示指定页面，不存在则显示404页面，未设置404页面则会向flutter发出pageNotFound的通知并执行flutter中的处理方法
   * 2. 未指定页面则按如下顺序显示：注入路由页面 > 默认页面 > 404页面 > flutter pageNotFound
   */
  _findPage (pageName: string, params: object = {}): PageInfo {
    let pageBuilder: Function
    let pageData: any
    if (!pageName) {
      if (this.injectRouteInfo) {
        pageName = this.injectRouteInfo.pageName
        params = this.injectRouteInfo.params
      } else if (this._defaultPageName) {
        pageName = this._defaultPageName
      } else if (this._notFoundPageName) {
        pageName = this._notFoundPageName
      }
    } else {
      if (!appContainer.hasRoute(pageName) && this._notFoundPageName) {
        pageName = this._notFoundPageName
      }
    }
    if (!appContainer.hasRoute(pageName)) {
      RenderManager.pageNotFound(pageName)
    } else {
      const builder: Function = appContainer.getRoute(pageName) as Function
      pageBuilder = builder()
      if (pageBuilder) {
        pageData = createElement(pageBuilder, params)
        if (!(pageData instanceof VNode)) throw new Error(`page ${pageName} is not a Widget`)
      } else {
        RenderManager.pageNotFound(pageName)
      }
    }
    
    return {
      pageData,
      pageName
    }
  }
}

/**
* 第三方注入路由
* 该方法需要暴露在全局下
* 调试是可以使用该方法快速进入某个页面
* @param {String} pageName 
* @param {Object} params
*/
export function injectRoute (route: PageRoute) {
  if (!route.pageName) return
  threshApp.injectRouteInfo = route
}

const threshApp: ThreshApp = new ThreshApp()
export default threshApp
