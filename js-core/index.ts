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

import threshApp, { injectRoute } from './src/core/ThreshApp'
import Widget from './src/core/Widget'
import createElement from './src/core/createElement'
import basicWidgets, { Page } from './src/core/basicWidget'
import RenderManager from './src/manager/RenderManager'
import UtilManager from './src/manager/UtilManager'
import UIManager from './src/manager/UIManager'
import BridgeManager from './src/manager/BridgeManager'
import EventManager from './src/manager/EventManager'

const Thresh = threshApp

RenderManager.getMediaQuery(Thresh.jsVersion)

// 注册事件 - 页面显示
EventManager.register('pageOnShow', (fromPageName: string) => {
  Page.invokePageOnShow(fromPageName)
})
// 注册事件 - 页面隐藏
EventManager.register('pageOnHide', () => {
  Page.invokePageOnHide()
})
// 注册事件 - 当 native(主要是安卓) 发生按键或手势返回事件时，native 会阻止返回并触发该事件，将返回操作交给 js 控制
EventManager.register('nativePop', () => {
  Thresh.popPage()
})

export default Thresh
export {
  Widget,
  UtilManager as Util,
  BridgeManager as Bridge,
  EventManager as Event,
  UIManager as ui,
  createElement,
  basicWidgets,
  injectRoute
}
