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

import VNode, { LifeCycle } from '../core/VNode'

export const MODAL_TAG = 'modal#'

export interface PerformanceInfo {
  // 该页面数据是否已经上报
  // 防止被重复上报
  hasReported?: boolean
  // 页面创建时间
  // 以页面在 js 端 push 的时间为准
  createTimestamp?: number
  // 页面首帧加载时间
  // 以页面在 flutter 端完成首帧渲染的时间为准
  loadTimestamp?: number
}

class PageContainer {
  static pageIsModal (pageName: string): boolean {
    return pageName && pageName.startsWith(MODAL_TAG)
  }
  static formatModalName (modalName: string): string {
    return `${MODAL_TAG}${(modalName || Date.now().toString())}`
  }

  contextId: string
  // 所有 page 与 modal name 的缓存
  namesCache: string[] = []
  // page names
  pageNamesCache: string[] = []
  // modal names
  modalNamesCache: string[] = []
  // 所有 page 与 modal 的节点树缓存
  nodeDataCache: Map<string, VNode> = new Map()
  // 页面采集信息
  pagePerformanceInfos: Map<string, PerformanceInfo> = new Map()

  constructor (contextId) {
    this.contextId = contextId
  }
  
  /**
   * 当前容器是否无内容
   */
  get isEmpty (): boolean {
    return this.namesCache.length === 0
  }
  /**
   * 当前容器是否可以执行 pop 操作
   */
  get canPop (): boolean {
    return this.namesCache.length > 1
  }
  /**
   * 当前屏幕显示的内容是否为 modal
   */
  get currentShowIsModal (): boolean {
    if (this.isEmpty) return false
    return PageContainer.pageIsModal(this.namesCache[0])
  }
  /**
   * 当前显示视图的名称
   * 可能是 page 也可能是 modal
   */
  get currentShowName (): string | void {
    if (this.isEmpty) return
    return this.namesCache[0]
  }
  /**
   * 当前显示页面的名称
   */
  get currentPageName (): string | void {
    if (this.isEmpty) return
    return this.pageNamesCache[0]
  }
  /**
   * 当前显示页面的 vnode
   */
  get currentPageData (): VNode | void {
    const pageName: string | void = this.currentPageName
    if (!pageName) return
    return this.nodeDataCache.get(pageName)
  }
  /**
   * 当前显示页面的前一页面名称
   */
  get referPageName (): string | void {
    if (this.pageNamesCache.length < 2) return
    return this.pageNamesCache[1]
  }
  /**
   * 销毁容器
   */
  destroy () {
    let name: string | void = this.namesCache.shift()
    // 从后往前一次处罚所有 页面/modal 的 unmount 事件
    while (name) {
      this.nodeDataCache.get(name).invokeLifeCycle(LifeCycle.widgetDidUnmount)
      name = this.namesCache.shift()
    }
    this.pageNamesCache = []
    this.modalNamesCache = []
    this.nodeDataCache.clear()
    this.pagePerformanceInfos.clear()
  }
  /**
   * 是否存在某一页面
   * @param pageName 页面名称
   * @param includeModal 是否同时在 modal 中查找，默认只在 page 中查找
   */
  hasPage (pageName: string, includeModal: boolean = false): boolean {
    if (!includeModal) return this.pageNamesCache.indexOf(pageName) > -1
    return this.namesCache.indexOf(pageName) > -1
  }
  /**
   * 存入页面
   */
  pushPage (pageName: string, vnodeTree: VNode, createTimestamp: number) {
    if (this.namesCache.includes(pageName)) throw new Error(`Route name "${pageName}" has already exist!`);
    this.namesCache.unshift(pageName)
    this.pageNamesCache.unshift(pageName)
    this.nodeDataCache.set(pageName, vnodeTree)
    this.pagePerformanceInfos.set(pageName, {
      hasReported: false,
      createTimestamp,
    })
  }
  /**
   * 存入 modal
   */
  showModal (modalName: string, vnodeTree: VNode) {
    if (this.namesCache.includes(modalName)) throw new Error(`Route name "${modalName}" has already exist!`);
    this.namesCache.unshift(modalName)
    this.nodeDataCache.set(modalName, vnodeTree)
    this.modalNamesCache.unshift(modalName)
  }
  /**
   * 移除当前显示的页面或 modal
   */
  removeCurrentShow () {
    if (this.isEmpty) return
    const name: string = this.namesCache.shift()
    if (!PageContainer.pageIsModal(name)) this.pageNamesCache.shift()
    else this.modalNamesCache.shift()
    this.nodeDataCache.delete(name)
    this.pagePerformanceInfos.delete(name)
  }
  /**
   * 获取页面或 modal 的 vnode 数据
   * @param pageName 页面名称
   */
  getPageData (pageName: string): VNode | void {
    if (!pageName) return
    if (this.nodeDataCache.has(pageName)) return this.nodeDataCache.get(pageName)
  }
  /**
   * 设置页面渲染数据
   */
  setPagePerformanceInfo (pageName: string, loadTimestamp: number) {
    let currentPerformanceInfo: PerformanceInfo = this.getPagePerformanceInfo(pageName)
    if (!currentPerformanceInfo || currentPerformanceInfo.hasReported || currentPerformanceInfo.loadTimestamp) return
    currentPerformanceInfo.loadTimestamp = loadTimestamp
  }
  /**
   * 获取页面渲染数据
   */
  getPagePerformanceInfo (pageName?: string) {
    return this.pagePerformanceInfos.get(pageName || this.currentPageName || '')
  }
}

export default PageContainer
