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

export const MODAL_TAG = 'modal#'

class AppContainer {
  // 路由
  routes: Map<string, Function> = new Map()
  // 所有 page 与 modal name 的缓存
  namesCache: string[] = []
  // page names
  pageNamesCache: string[] = []
  // modal names
  modalNamesCache: string[] = []
  // 所有 page 与 modal 的节点树缓存
  pageDataCache: Map<string, VNode> = new Map()

  // 路由操作
  addRoute (routeName: string, pageBuilder: Function) {
    if (this.routes.has(routeName)) throw new Error(`Route name "${routeName}" has already exist!`);
    this.routes.set(routeName, pageBuilder)
  }
  hasRoute (routeName: string): boolean {
    return this.routes.has(routeName)
  }
  getRoute (routeName: string): Function | void {
    if (!this.hasRoute(routeName)) return
    return this.routes.get(routeName)
  }

  // 页面操作
  
  /**
   * 当前 container 是否不存在内容
   */
  get isEmpty (): boolean {
    return this.pageNamesCache.length === 0
  }
  /**
   * 当前屏幕显示的内容是否为 modal
   */
  get currentShowIsModal (): boolean {
    if (this.isEmpty) return false
    return this.namesCache[this.namesCache.length - 1].startsWith(MODAL_TAG)
  }
  /**
   * 当前显示页面的名称
   */
  get currentPageName (): string | void {
    if (this.isEmpty) return
    return this.pageNamesCache[this.pageNamesCache.length - 1]
  }
  /**
   * 当前显示页面的 vnode
   */
  get currentPageData (): VNode | void {
    const pageName: string | void = this.currentPageName
    if (!pageName) return
    return this.pageDataCache.get(pageName)
  }
  /**
   * 当前显示页面的前一页面名称
   */
  get referPageName (): string | void {
    if (this.pageNamesCache.length < 2) return
    return this.pageNamesCache[this.pageNamesCache.length - 2]
  }
  /**
   * 是否存在某一页面
   * @param pageName 页面名称
   * @param withModal 是否同时在 modal 中查找，默认只在 page 中查找
   */
  hasPage (pageName: string, withModal: boolean = false): boolean {
    if (!withModal) return this.pageNamesCache.indexOf(pageName) > -1
    return this.namesCache.indexOf(pageName) > -1
  }
  /**
   * 存入页面
   * @param pageName 页面名
   * @param vnodeTree 页面 vnode
   * @param isModal 是否为 modal
   */
  pushPage (pageName: string, vnodeTree: VNode, isModal: boolean = false) {
    if (this.namesCache.includes(pageName)) throw new Error(`Route name "${pageName}" has already exist!`);
    this.namesCache.push(pageName)
    this.pageDataCache.set(pageName, vnodeTree)
    if (!isModal) this.pageNamesCache.push(pageName)
    else this.modalNamesCache.push(pageName)
  }
  /**
   * 替换当前显示的页面
   * @param newPageName 新页面名
   * @param newVNodeTree 新页面 vnode
   */
  replacePage (newPageName: string, newVNodeTree: VNode) {
    const oldPageName: string = this.pageNamesCache.pop()
    const index: number = this.namesCache.indexOf(oldPageName)
    this.namesCache.splice(index, 1, newPageName)
    this.pageNamesCache.push(newPageName)
    this.pageDataCache.set(newPageName, newVNodeTree)
    this.pageDataCache.delete(oldPageName)
  }
  /**
   * 移除当前显示的页面或 modal
   */
  removeCurrentShow () {
    if (this.isEmpty) return
    const name: string = this.namesCache.pop()
    if (!name.startsWith(MODAL_TAG)) this.pageNamesCache.pop()
    else this.modalNamesCache.pop()
    this.pageDataCache.delete(name)
  }
  /**
   * 获取页面或 modal 的 vnode 数据
   * @param pageName 页面名称
   */
  getPageData (pageName): VNode | void {
    if (!pageName) return
    if (this.pageDataCache.has(pageName)) return this.pageDataCache.get(pageName)
  }
}

export default new AppContainer()
