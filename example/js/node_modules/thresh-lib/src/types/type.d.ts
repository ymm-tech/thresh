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

import { FlutterMethodChannelType, NativeMethodChannelType, MethodChannelReceiveType } from "../channel/MethodChannel";
import { Container } from "../core/basicWidget";

export interface RenderData {
  name: string
  widgetId: string
  isStateful: boolean
  pageName: string
  props: Object
  key: number | string | void
}

export interface PageInfo {
  pageName: string
  pageData: any
}

export interface PageRoute {
  pageName: string
  params?: any
}

export interface RouteConfig {
  isDefault?: boolean
  isNotFound?: boolean
}

export interface BridgeParams {
  module: string
  business?: string
  method: string
  params?: any
}

export interface RequestParams {
  url: string
  method?: 'POST' | 'GET' | 'DELETE' | 'PUT'
  headers?: object
  data?: object
  querys?: object
}

export interface ChannelParams {
  contextId?: string | void
  method: FlutterMethodChannelType | NativeMethodChannelType | MethodChannelReceiveType
  params?: any
  chunkInfo?: ChannelParamsChunkInfo
}

export interface ChannelParamsChunkInfo {
  // 分块id
  chunkId: string
  // 分块index
  chunkIndex: number
  // 分块数量
  chunkCount: number
}

export interface ThreshProvider {
  propsProvider?(props: Object) : Object
}

export interface ThreshProvidersConfig {
  propsProvider?: ThreshProvider[]
}
