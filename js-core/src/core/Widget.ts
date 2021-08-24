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
import ChildrenRule from './ChildrenRule'
import scheduleUpdate from './scheduleUpdate'
import VNode from './VNode'
import Util from '../shared/Util'
import { RefCallback, ThreshWidget } from '../types/widget'

/**
 * 校验object是否合法
 * @param {any} object 
 */
function checkObjectValid (object: any, noFunc: boolean = false): boolean {
  if (object === null || object === undefined) return true
  if (!Util.isObject(object)) {
    threshApp.onError(new Error('props or state must be an object type'))
    return false
  }
  if (noFunc) {
    for (const key in object) {
      if (Util.isFunc(object[key])) {
        threshApp.onError(new Error(`prop ${key} must not be a function type`))
        return false
      }
    }
  }
  return true
}

/**
 * Widget
 */
// interface WidgetProps {
//   key?: any,
//   ref?: RefCallback,
//   children?: ThreshWidget[],
// }
export default class Widget <P = {}, S = {}> {
  props: P
  state?: S
  __vNode__: VNode

  static defaultProps: any = {}

  widgetDidMount() {}
  widgetDidUpdate() {}
  widgetDidUnmount() {}

  constructor (props: P) {
    if (checkObjectValid(props)) {
      this.props = Util.merge(props) as any
    }
  }
  
  /**
   * 更新state
   * @param {any} state
   */
  setState (state?: S) {
    if (!this.__vNode__.hasMount || !checkObjectValid(state)) return
    if (state) Object.assign(this.state, state)
    scheduleUpdate(this.__vNode__)
  }
  /**
   * 强制更新
   */
  forceUpdate() {
    this.setState()
  }

  /**
   * 组件渲染方法
   */
  render (): VNode | void {}
}

/**
 * 基础组件类
 * 继承自Widget
 * 外部不可使用该类
 */
export class BasicWidget <P = {}, S = {}> extends Widget <P, S> {
  static isBasicWidget: boolean = true
  static childrenRule: ChildrenRule

  setState () {
    threshApp.onError(new Error(`basic widget cannot call setState()`))
  }
}
