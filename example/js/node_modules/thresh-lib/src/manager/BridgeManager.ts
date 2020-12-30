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

import MethodChannel from '../channel/MethodChannel'
import Util from '../shared/Util'
import bus from '../shared/bus'
import { BridgeParams } from '../types/type'
import DevtoolsManager from './DevtoolsManager'
import UtilManager from './UtilManager'

/**
 * Bridge管理器
 */
export default class BridgeManager {
  static THRESH_BUILT_IN_BRIDGE = 'THRESH_BUILT_IN_BRIDGE'
  static BRIDGE_METHOD_NET_REQUEST = 'BRIDGE_METHOD_NET_REQUEST'

  static async invoke (params: BridgeParams): Promise<any> {
    return new Promise(resolve => {
      BridgeManager.request(params, res => {
        resolve(res)
      })
    })
  }

  private static request (params: BridgeParams, callback?: Function) {
    let methodId: string
    if (Util.isFunc(callback)) {
      methodId = bus.register(callback)
    }
    if (!Util.isObject(params.params)) params.params = {}
    else params = Util.filterAllNilProps(params)
    MethodChannel.bridge(methodId, params)
    DevtoolsManager.bridge(methodId, params, true)
    if (!Util.isProd && !BridgeManager.isNetworkRequest(params)) {
      // 开发模式下，如果长时间未响应某个bridge，则主动mock响应，防止阻塞进程
      UtilManager.setTimeout(() => {
        BridgeManager.response(methodId, {
          code: 0,
          reason: '[Mock] - 请注意：由于Bridge未在500ms内响应，JS主动模拟bridge响应！该模拟仅在开发模式中有效！',
          data: {}
        })
      }, 500)
    }
  }

  static response (methodId: string, response: any) {
    if (!bus.has(methodId)) return
    DevtoolsManager.bridge(methodId, response, false)
    bus.fire(methodId, response)
    bus.remove(methodId)
  }

  static isNetworkRequest (params: BridgeParams): boolean {
    return params.module === BridgeManager.THRESH_BUILT_IN_BRIDGE && params.method === BridgeManager.BRIDGE_METHOD_NET_REQUEST
  }
}
