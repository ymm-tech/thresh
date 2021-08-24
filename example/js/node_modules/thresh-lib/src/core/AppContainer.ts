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

import VNode from '../core/VNode'
import PageContainer, { PerformanceInfo } from './PageContainer'

class AppContainer {
  _pageId: number = 0
  // 路由
  routes: Map<string, Function> = new Map()
  // 页面容器
  // native 端每个 flutter vc 对应一个 pageContainer
  // 由于每个 flutter vc 必然会调用一次 thresh.runApp()
  // 因此在 runApp 时创建当前 flutter vc 对应的 pageContainer
  // 在接收到 onDestroy 消息时销毁当前的 pageContainer
  pageContainerContextIds: string[] = []
  pageContainers: Map<string, PageContainer> = new Map()

  clear() {
    this._pageId = 0
    while (this.currentPageContainer) {
      this.destroyPageContainer()
    }
  }

  /**
   * 添加路由
   */
  addRoute(routeName: string, pageBuilder: Function) {
    if (this.routes.has(routeName)) throw new Error(`Route name "${routeName}" has already exist!`);
    this.routes.set(routeName, pageBuilder)
  }
  /**
   * 判断路由是否存在
   */
  hasRoute(routeName: string): boolean {
    return this.routes.has(routeName)
  }
  /**
   * 获取路由
   */
  getRoute(routeName: string): Function | void {
    if (!this.hasRoute(routeName)) return
    return this.routes.get(routeName)
  }

  /**
   * 获取当前显示页面的 contextId
   */
  private _contextId?: string
  get contextId(): string | void {
    if (this.isEmpty) return
    return this._contextId || this.pageContainerContextIds[0]
  }
  set contextId(currentId: string | void) {
    if (!currentId) return
    if (!this.pageContainerContextIds.includes(currentId)) return
    this._contextId = currentId;
  }
  /**
   * 获取 pageId
   */
  get pageId(): number {
    return ++this._pageId
  }
  /**
   * 当前容器是否无内容
   */
  get isEmpty(): boolean {
    return this.pageContainerCount === 0
  }
  /**
   * 当前容器是否可以执行 pop 操作
   */
  get canPop(): boolean {
    if (this.isEmpty) return false
    return this.currentPageContainer?.canPop || false
  }
  /**
   * 当前页面容器数量
   */
  get pageContainerCount(): number {
    return this.pageContainers.size
  }
  /**
   * 获取当前页面容器
   */
  get currentPageContainer(): PageContainer | undefined {
    if (this.isEmpty) return
    return this.pageContainers.get(this.contextId as string)
  }
  /**
   * 当前屏幕显示的内容是否为 modal
   */
  get currentShowIsModal(): boolean {
    if (this.isEmpty) return false
    return this.currentPageContainer!.currentShowIsModal
  }
  /**
   * 当前显示视图的名称
   * 可能是 page 也可能是 modal
   */
  get currentShowName(): string | void {
    if (this.isEmpty) return
    return this.currentPageContainer!.currentShowName
  }
  /**
   * 当前显示页面的名称
   */
  get currentPageName(): string | void {
    if (this.isEmpty) return
    return this.currentPageContainer!.currentPageName
  }
  /**
   * 当前显示页面的 vnode
   */
  get currentPageData(): VNode | void {
    if (this.isEmpty) return
    return this.currentPageContainer!.currentPageData
  }
  /**
   * 当前显示页面的前一页面名称
   */
  get referPageName(): string | void {
    if (this.isEmpty) return
    let referPageName = this.currentPageContainer!.referPageName
    if (referPageName || this.pageContainerCount === 1) return referPageName
    const prevContextId: string = this.pageContainerContextIds[1]
    const prevPageContainer: PageContainer = this.pageContainers.get(prevContextId)
    if (!prevPageContainer) return
    return prevPageContainer.currentPageName
  }
  /**
   * 创建新的页面容器
   */
  createPageContainer(contextId: string) {
    this._contextId = contextId
    this.pageContainerContextIds.unshift(contextId)
    this.pageContainers.set(contextId, new PageContainer(contextId))
  }
  /**
   * 销毁页面容器
   */
  destroyPageContainer(contextId?: string) {
    if (!contextId) contextId = this.currentPageContainer.contextId
    const targetPageContainer: PageContainer = this.pageContainers.get(contextId)
    if (targetPageContainer) {
      targetPageContainer.destroy()
      this.pageContainers.delete(contextId)
    }
    const index = this.pageContainerContextIds.indexOf(contextId)
    if (index > -1) this.pageContainerContextIds.splice(index, 1)
    this._contextId = undefined
  }
  /**
   * 判断页面是否是 modal
   */
  pageIsModal(pageName: string): boolean {
    return PageContainer.pageIsModal(pageName)
  }
  /**
   * 格式化 modal name
   */
  formatModalName(modalName: string): string {
    return PageContainer.formatModalName(modalName)
  }
  /**
   * 是否存在某一页面
   * @param pageName 页面名称
   * @param withModal 是否同时在 modal 中查找，默认只在 page 中查找
   */
  hasPage(pageName: string, withModal: boolean = false): boolean {
    if (this.isEmpty) return false
    const containerCount = this.pageContainerCount
    for (let i = 0; i < containerCount; i++) {
      const contextId = this.pageContainerContextIds[i]
      const targetPageContainer: PageContainer = this.pageContainers.get(contextId)
      const exist = targetPageContainer.hasPage(pageName, withModal)
      if (exist) return true
    }
    return false
  }
  /**
   * 存入页面
   * @param pageName 页面名
   * @param vnodeTree 页面 vnode
   */
  pushPage(pageName: string, vnodeTree: VNode, createTimestamp: number) {
    if (this.isEmpty) return
    this.currentPageContainer.pushPage(pageName, vnodeTree, createTimestamp)
  }
  /**
   * 存入 modal
   * @param pageName 页面名
   * @param vnodeTree 页面 vnode
   * @param isModal 是否为 modal
   */
  showModal(modalName: string, vnodeTree: VNode) {
    if (this.isEmpty) return
    this.currentPageContainer.showModal(modalName, vnodeTree)
  }
  /**
   * 移除当前显示的页面或 modal
   */
  removeCurrentShow() {
    if (this.isEmpty) return
    this.currentPageContainer!.removeCurrentShow()
  }
  /**
   * 通过名称获取页面或 modal 的 vnode 数据
   */
  getPageDataWithPageName(pageName): VNode | void {
    if (this.isEmpty) return
    const containerCount = this.pageContainerCount
    for (let i = 0; i < containerCount; i++) {
      const contextId = this.pageContainerContextIds[i]
      const targetPageContainer: PageContainer = this.pageContainers.get(contextId)
      const pageData: VNode | void = targetPageContainer.getPageData(pageName)
      if (pageData) return pageData
    }
  }
  /**
   * 通过 contextId 判断 container 是否存在
   */
  pageContainerExisted(contextId: string): boolean {
    return this.pageContainerContextIds.includes(contextId)
  }
  /**
   * 通过 contextId 获取页面的 vnode 数据
   */
  getPageDataWithContextId(contextId: string): VNode | void {
    if (this.isEmpty) return
    const targetPageContainer: PageContainer = this.pageContainers.get(contextId)
    if (!targetPageContainer) return
    return targetPageContainer.currentPageData
  }
  /**
   * 通过页面名获取该页面所在的容器
   */
  getPageContainerWithPageName(pageName: string): PageContainer | undefined {
    if (this.isEmpty) return
    const containerCount = this.pageContainerCount
    for (let i = 0; i < containerCount; i++) {
      const contextId = this.pageContainerContextIds[i]
      const targetPageContainer: PageContainer = this.pageContainers.get(contextId)
      const exist = targetPageContainer.hasPage(pageName)
      if (exist) return targetPageContainer
    }
    return
  }
  /**
   * 设置页面渲染数据
   */
  setPagePerformanceInfo(pageName: string, loadTimestamp: number) {
    const targetPageContainer = this.getPageContainerWithPageName(pageName)
    if (!targetPageContainer) return
    targetPageContainer.setPagePerformanceInfo(pageName, loadTimestamp)
  }
  /**
   * 获取页面渲染数据
   */
  getPagePerformanceInfo(pageName?: string): PerformanceInfo | undefined {
    const targetPageContainer = pageName
      ? this.getPageContainerWithPageName(pageName)
      : this.currentPageContainer
    if (!targetPageContainer) return
    return targetPageContainer.getPagePerformanceInfo(pageName)
  }
}

const appContainer = new AppContainer()
export default appContainer
