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
import DevtoolsManager, { InfoType } from './DevtoolsManager'

/**
 * 事件管理器
 * 暴露给外部使用，可以与 native 之间进行事件通信
 */
export default class EventManager {
  /**
   * 注册事件
   * native 可以通过 methodChannel_register_js_event 注册一个 js 事件
   */
  static register (name: string, callback: Function) {
    if (!Util.isFunc(callback)) return
    bus.register(callback, name)
    DevtoolsManager.show(InfoType.event, Util.anyToRawString({
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
  static fire (name: string | any[], ...args: any[]) {
    if (typeof name !== 'string') {
      if (!Array.isArray(name)) return
      if (!name.length) return
      const temp = name.shift()
      args = [ ...name, ...args ]
      name = temp
    }
    if (typeof name !== 'string') return

    if (bus.has(name)) {
      bus.fire(name, ...args)
      DevtoolsManager.show(InfoType.event, Util.anyToRawString({
        type: 'fire',
        name,
        args
      }), `触发JS注册事件：${name}`)
    } else {
      // TODO - call native method
      DevtoolsManager.show(InfoType.event, Util.anyToRawString({
        type: 'fire',
        name,
        args
      }), `触发Native注册事件：${name}`)
    }
  }
  /**
   * 查询某个事件是否已注册在 js 中
   * 无法查询是否在 native 中注册
   */
  static has (name: string): boolean {
    return bus.has(name)
  }
  /**
   * 从已注册在 js 的事件中移除某个事件
   * 无法移除 native 中注册的事件
   * @param name 
   */
  static remove (name: string) {
    bus.remove(name)
    DevtoolsManager.show(InfoType.event, Util.anyToRawString({
      type: 'remove',
      name
    }), `移除注册事件：${name}`)
  }
}

export function methodChannel_fire_js_event (name: string, ...args: any[]) {
  EventManager.fire(name, ...args)
}
export function methodChannel_register_js_event (name: string, callback: Function) {
  EventManager.register(name, callback)
}
