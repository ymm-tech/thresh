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

import MethodChannel, { FlutterMethodChannelType } from "../channel/MethodChannel"

interface MediaQueryInfo {
  width?: number,
  height?: number,
  statusBarHeight?: number,
  bottomBarHeight?: number,
  appBarHeight?: number,
  devicePixelRatio?: number,
}

const APP_BAR_DEFAULT_HEIGHT: number = 56

/**
 * ui管理器
 */
export default class UIManager {
  static rpx (width: number): number {
    if (!width) return 0
    const realWidth = mediaQuery.computeRealWidth(width)
    // 由于 realWidth 会向下取整，所以 width = 1 时 realWidth = 0 导致不显示
    // 所以给最小值为 width / mediaQuery.devicePixelRatio
    return realWidth ? realWidth : width / mediaQuery.devicePixelRatio
  }
  static get screenWidth (): number {
    return mediaQuery.screenWidth
  }
  static get screenHeight (): number {
    return mediaQuery.screenHeight
  }
  static get statusBarHeight (): number {
    return mediaQuery.statusBarHeight
  }
  static get bottomBarHeight (): number {
    return mediaQuery.bottomBarHeight
  }
  static get appbarHeight (): number {
    return mediaQuery.appBarHeight
  }
  static get devicePixelRatio (): number {
    return mediaQuery.devicePixelRatio
  }
  static setDeviceInfo (info: MediaQueryInfo = {}) {
    mediaQuery.setDeviceInfo(info)
  }
  static setDesignInfo (width: number, height: number) {
    mediaQuery.setDesignInfo(width, height)
  }
  static setAppBarHeight (appBarHeight: number) {
    mediaQuery.appBarHeight = appBarHeight
    MethodChannel.call({
      method: FlutterMethodChannelType.setAppBarHeight,
      params: { appBarHeight },
    })
  }
}

class MediaQuery {
  private _screenWidth: number = 0
  private _screenHeight: number = 0
  private _statusBarHeight: number = 0
  private _bottomBarHeight: number = 0
  private _appBarHeight: number = APP_BAR_DEFAULT_HEIGHT
  private _devicePixelRatio: number = 1
  private _designWidth: number = 750
  private _designHeight: number = 1280
  private _scaleWidth: number = 0.5
  private _scaleHeight: number = 0.5

  get screenWidth (): number {
    return this._screenWidth
  }
  get screenHeight (): number {
    return this._screenHeight
  }
  get statusBarHeight (): number {
    return this._statusBarHeight
  }
  get bottomBarHeight (): number {
    return this._bottomBarHeight
  }
  get appBarHeight (): number {
    return this._appBarHeight
  }
  set appBarHeight (height: number) {
    this._appBarHeight = height || APP_BAR_DEFAULT_HEIGHT
  }
  get devicePixelRatio (): number {
    return this._devicePixelRatio
  }

  setDeviceInfo (info: MediaQueryInfo = {}) {
    const { width, height, statusBarHeight, bottomBarHeight, appBarHeight, devicePixelRatio } = info
    this._screenWidth = width || this._screenWidth
    this._screenHeight = height || this._screenHeight
    this._statusBarHeight = statusBarHeight || this._statusBarHeight
    this._bottomBarHeight = bottomBarHeight || this._bottomBarHeight
    this._devicePixelRatio = devicePixelRatio || this._devicePixelRatio
    // 只有 appBarHeight 为默认高度时才可以被修改
    if (this._appBarHeight === APP_BAR_DEFAULT_HEIGHT) this._appBarHeight = appBarHeight || APP_BAR_DEFAULT_HEIGHT
    this.setScaleInfo()
  }
  setDesignInfo (designWidth: number, designHeight: number) {
    if (designWidth) this._designWidth = designWidth
    if (designHeight) this._designHeight = designWidth
    this.setScaleInfo()
  }
  private setScaleInfo () {
    // 默认UED为两倍图
    // scale > 0.5 时忽略并强设为 0.5
    this._scaleWidth = this._screenWidth / this._designWidth
    this._scaleHeight = this._screenHeight / this._designHeight
    if (this._scaleWidth > 0.5) this._scaleWidth = 0.5
    if (this._scaleHeight > 0.5) this._scaleHeight = 0.5
  }
  computeRealWidth (width): number {
    return Math.floor(width * this._scaleWidth)
  }
  computedRealHeight (height): number {
    return Math.floor(height * this._scaleHeight)
  }
}

export const mediaQuery = new MediaQuery()

