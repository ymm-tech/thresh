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

import Util from "./Util"
import { FuncCache } from '../types/type'

/**
 * 简易实现的事件触发器
 * 仅框架内部使用
 * 一个name仅对应一个回调事件
 * 未传入name时默认会有自增id作为name
 * 主要为 定时器 bridge 等服务
 */
class Bus {
  private _busId: number = 0
  private _pool: FuncCache = {}

  register (callback: Function, name?: string): string {
    if (!Util.isFunc(callback)) return
    let busName: string = name ? name.toString() : (++this._busId).toString()
    this._pool[busName] = callback
    return busName
  }

  fire (name: string, ...args: any[]) {
    if (!name) return
    const cb = this._pool[name]
    cb && cb(...args)
  }

  has (name: string): boolean {
    return !!(name && this._pool[name])
  }

  remove (name: string) {
    if (!name) return
    if (this._pool[name]) delete this._pool[name]
  }
}

export default new Bus()
