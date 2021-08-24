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

import Widget, { BasicWidget } from './Widget'
import Util from '../shared/Util'
import VNode from './VNode'

type W = Widget <any, any>

/**
 * 组件构造器
 */
export default function createElement (WidgetBuilder: any, props: any, ...children: any[]): VNode | void {
  const widgetName: string | void = getWidgetName(WidgetBuilder)
  if (!widgetName) return
  
  props = Util.merge(props)
  if (WidgetBuilder.childrenRule) {
    WidgetBuilder['childrenRule'].mapChildrenToProps(Util.toFlatWidgetArray(children), props)
  } else {
    props.children = Util.toFlatWidgetArray(children).filter(child => child instanceof VNode)
  }
  props = Util.merge(WidgetBuilder.defaultProps, props)

  const isBasicWidget: boolean = WidgetBuilder['isBasicWidget'] === true
  const key: string | number | void = props.key
  const ref: ((any) => void) | void = props.ref
  delete props.ref

  let childrenIsArray = true
  let childrenMapedName = 'children'
  if (isBasicWidget) {
    if (WidgetBuilder['childrenRule']) {
      childrenIsArray = WidgetBuilder['childrenRule']['length'] > 1
      childrenMapedName = WidgetBuilder['childrenRule']['name']
    }
  }

  return new VNode({
    type: widgetName,
    props,
    widgetBuilder: WidgetBuilder,
    isBasicWidget,
    key,
    ref,
    childrenIsArray,
    childrenMapedName
  })
}

const WIDGET_NAME_REG = /^function ([A-Za-z]{2,})\((props){0,1}\)/

function getWidgetName (widgetBuilder: any): string | void {
  let res: any[] = widgetBuilder.toString().match(WIDGET_NAME_REG)
  return res ? res[1] : void 0
}
