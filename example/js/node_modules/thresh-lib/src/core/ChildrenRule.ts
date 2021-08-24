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

import UtilManager from '../manager/UtilManager'

type RuleFunc = (children: any[]) => any
interface ChildrenRuleInfo {
  length?: number,
  name?: string,
  ruleFunc?: RuleFunc,
  widgetName: string
}

/**
 * 组件子元素规则类
 */
export default class ChildrenRule implements ChildrenRuleInfo {
  // 子元素数量
  length: number = Infinity
  // 子元素映射到props中的属性名
  name: string = 'children'
  // 组件映射规则函数
  ruleFunc: RuleFunc
  // 规则映射函数
  // 当前组件名称，报错时使用，便于检查
  widgetName: string

  constructor (info: ChildrenRuleInfo = { widgetName: '' }) {
    const { length, name, ruleFunc, widgetName } = info
    if (length === 0 || length === 1) this.length = length
    if (name) this.name = name
    if (ruleFunc) this.ruleFunc = ruleFunc
    if (widgetName) this.widgetName = widgetName
  }

  mapChildrenToProps (children: any[], targetProps: object) {
    let length: number = children.length
    let aim: any
    if (this.length === 0) {
      if (length > 0) {
        UtilManager.warn(`Widget "${this.widgetName}" must not have children`)
      }
    } else if (this.length === 1) {
      if (length === 0) {
        UtilManager.error(new Error(`Widget "${this.widgetName}" must have one child`))
      } else if (length === 1) {
        aim = this.ruleFunc ? this.ruleFunc(children) : children[0]
      } else {
        aim = this.ruleFunc ? this.ruleFunc(children) : children[0]
        if (Array.isArray(aim) && aim.length > 1) {
          aim = aim[0]
          UtilManager.warn(`Widget "${this.widgetName}" must have only one child`)
        }
      }
    } else {
      aim = this.ruleFunc ? this.ruleFunc(children) : children
    }
    if (aim) {
      targetProps[this.name] = aim
    }
  }
}
