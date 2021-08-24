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

import bus from '../shared/bus'
import Util from '../shared/Util'
import devtools, { InfoType } from './DevtoolsManager'
import { Page } from '../core/basicWidget';

// thresh 内建事件
export enum BuiltInEventType {
  pageOnShow = 'pageOnShow',
  pageOnHide = 'pageOnHide',
}

/**
 * 事件管理器
 * 暴露给外部使用，可以与 native 之间进行事件通信
 * TODO - 支持单事件多次注册，使用三方库
 */
class EventManager {
  private _hasRegisterBuiltInEvents: boolean = false

  /**
   * 注册内建事件
   * 内建事件回调的第一个参数是 contextId
   * contextId 来自 native 触发
   * 如果是内部调用则不存在该参数
   */
  registerBuiltInEvents () {
    if (this._hasRegisterBuiltInEvents) return

    // 注册事件 - 页面显示
    this.register(BuiltInEventType.pageOnShow, (contextId: string) => {
      Page.invokePageOnShow(contextId)
    })
    // 注册事件 - 页面隐藏
    this.register(BuiltInEventType.pageOnHide, (contextId: string) => {
      Page.invokePageOnHide(contextId)
    })

    this._hasRegisterBuiltInEvents = true
  }
  resetAndRegisterBuiltInEvents () {
    this._hasRegisterBuiltInEvents = false
    this.registerBuiltInEvents()
  }
  /**
   * 注册事件
   * native 可以通过 methodChannel_register_js_event 注册一个 js 事件
   */
  register (name: string, callback: Function) {
    if (!Util.isFunc(callback)) return
    bus.register(callback, name)
    devtools.show(InfoType.event, Util.anyToRawString({
      type: 'register',
      name
    }), `注册事件：${name}`)
  }
  /**
   * 执行事件
   * js 可以通过 EventManager.fire 执行一个事件
   * native 则使用 methodChannel_fire_js_event
   * 1. 执行事件是会先查询是否已注册
   * 2. 当未在 js 中查询到注册的事件时，会向 native 发送执行事件的通知
   */
  fire (name: string | any[], ...args: any[]) {
    this.fireWithContextId(name, undefined, ...args)
  }
  fireWithContextId (name: string | any[], contextId: string | undefined, ...args: any[]) {
    if (typeof name !== 'string') {
      if (!Array.isArray(name)) return
      if (!name.length) return
      const temp = name.shift()
      args = [ ...name, ...args ]
      name = temp
    }
    if (typeof name !== 'string') return

    if (bus.has(name)) {
      devtools.show(InfoType.event, Util.anyToRawString({
        type: 'fire',
        contextId,
        name,
        args
      }), `触发JS注册事件：${name}`, contextId)
      return contextId
        ? bus.fire(name, contextId, ...args)
        : bus.fire(name, ...args)
    } else {
      // TODO - call native method
      // devtools.show(InfoType.event, Util.anyToRawString({
      //   type: 'fire',
      //   name,
      //   args
      // }), `触发Native注册事件：${name}`)
    }
  }
  /**
   * 查询某个事件是否已注册在 js 中
   * 无法查询是否在 native 中注册
   */
  has (name: string, callback?: Function): boolean {
    return bus.has(name, callback)
  }
  /**
   * 从已注册在 js 的事件中移除某个事件
   * 无法移除 native 中注册的事件
   * @param name 
   */
  remove (name: string, callback?: Function) {
    bus.remove(name, callback)
    devtools.show(InfoType.event, Util.anyToRawString({
      type: 'remove',
      name
    }), `移除注册事件：${name}`)
  }
  /**
   * 判断是否内置事件
   */
  isBuiltInEvent (name: string) {
    return BuiltInEventType[name] !== undefined
  }
}

const eventManager: EventManager = new EventManager()
export default eventManager

export function methodChannel_fire_js_event (name: string, contextId: string, ...args: any[]) {
  devtools.show(InfoType.event, Util.anyToRawString({
    type: 'fire event from native',
    contextId,
    name,
    args
  }), `来自Native的事件触发：${name}`, contextId)

  if (!eventManager.isBuiltInEvent(name)) return eventManager.fire(name, ...args)
  else return eventManager.fireWithContextId(name, contextId, ...args)
}

export function methodChannel_register_js_event (name: string, contextId: string, callback: Function) {
  eventManager.register(name, callback)
}
