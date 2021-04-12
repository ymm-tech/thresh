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

import Util from './Util'

export interface BusCache {
  [busName: string]: Function[]
}

/**
 * 简易实现的事件触发器
 * 仅框架内部使用
 * 未传入name时默认会有自增id作为name
 * 主要为 定时器 bridge 等服务
 */
class Bus {
  private _busId: number = 0
  private _pool: BusCache = {}

  register (callback: Function, name?: string): string {
    if (!Util.isFunc(callback)) return
    let busName: string = name ? name.toString() : (++this._busId).toString()
    if (!this._pool[busName]) this._pool[busName] = []
    this._pool[busName].push(callback)
    return busName
  }

  fire (name: string, ...args: any[]) {
    if (!name) return
    const callbacks = this._pool[name]
    if (!callbacks || !callbacks.length) return
    return callbacks.map(callback => callback(...args))
  }

  has (name: string, callback?: Function): boolean {
    if (!name || !this._pool[name]) return false
    if (!callback) return true
    const callbacks = this._pool[name]
    const index = callbacks.indexOf(callback)
    return index > -1
  }

  remove (name: string, callback?: Function) {
    if (!name || !this._pool[name]) return
    if (!callback) {
      delete this._pool[name]
      return
    }
    const callbacks = this._pool[name]
    const index = callbacks.indexOf(callback)
    if (index > -1) callbacks.splice(index, 1)
  }

  clear () {
    this._busId = 0
    this._pool = {}
  }
}

const bus: Bus = new Bus()
export default bus
