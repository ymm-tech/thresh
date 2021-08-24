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

import MethodChannel, { FlutterMethodChannelType } from '../channel/MethodChannel'
import BridgeManager from './BridgeManager'
import Util from '../shared/Util'
import { BridgeParams } from '../types/type'
import { ThreshAppContext } from '../core/ThreshAppContext'
import threshApp from '../core/ThreshApp'

export enum InfoType {
  log = 'log',
  warn = 'warn',
  error = 'error',
  network = 'network',
  bridge = 'bridge',
  event = 'event'
}

export const SHOW_DIVIDER_KEY = '__showDivider__'

export class DevtoolsManager {
  pool: any = {}

  show (type: InfoType, content: string, title?: string, contextId?: string | undefined) {
    if (!threshApp || !threshApp.debugMode) return
    MethodChannel.call({
      contextId,
      method: FlutterMethodChannelType.devtools,
      params: {
        type,
        title,
        content
      },
    })
  }

  log (...args: any[]) {
    if (!threshApp || !threshApp.debugMode) return
    this.show(InfoType.log, Util.anyToRawString(...args))
  }

  warn (...args: any[]) {
    if (!threshApp || !threshApp.debugMode) return
    this.show(InfoType.warn, Util.anyToRawString(...args))
  }

  error (...args: any[]) {
    if (!threshApp || !threshApp.debugMode) return
    this.show(InfoType.error, Util.anyToRawString(...args))
  }

  bridge (methodId: string, data: any, isRequest: boolean = false) {
    if (!threshApp || !threshApp.debugMode) return
    let bridgeParams: BridgeParams
    if (isRequest) {
      this.pool[methodId] = data
      bridgeParams = data
    } else {
      bridgeParams = this.pool[methodId]
      delete this.pool[methodId]
    }

    if (!bridgeParams) return

    const { module, business, method, params } = bridgeParams
    if (BridgeManager.isNetworkRequest(bridgeParams)) {
      let showInfo: any
      if (isRequest) {
        showInfo = {
          method: params.method,
          // [SHOW_DIVIDER_KEY]: 'params',
          ...(params.data || params.query || {})
        }
      } else {
        showInfo = {
          code: data.code,
          reason: data.reason,
          // [SHOW_DIVIDER_KEY]: 'data',
          ...(
            (Util.isString(data.data) || Util.isNil(data.data) || !Util.isObject(data.data))
            ? { data: data.data }
            : data.data
          )
        }
      }
      this.network(params.url, showInfo, isRequest)
      return
    }
    if (!threshApp || !threshApp.debugMode) return
    let logInfos = [ isRequest ? 'Request' : 'Response', `Module: ${module}` ]
    if (business) logInfos.push(`Business: ${business}`)
    logInfos.push(`Method: ${method}`)
    logInfos.push(`MethodId: ${methodId}`)
    this.show(
      InfoType.bridge, 
      Util.anyToRawString(data), 
      logInfos.join('\n')
    )
  }

  network (url: string, params: any, isRequest: boolean = false) {
    if (!threshApp || !threshApp.debugMode) return
    this.show(InfoType.network, Util.anyToRawString(params), `${isRequest ? 'Request' : 'Response'}\n${url}`)
  }
}

const devtools: DevtoolsManager = new DevtoolsManager()

export default devtools

