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

import threshApp, { Widget } from '../..'
import VNode from '../core/VNode'
import BridgeManager from '../manager/BridgeManager'
import { SHOW_DIVIDER_KEY } from '../manager/DevtoolsManager'

/**
 * threshApp内部工具类
 */
export default class Util {
  static get isProd () { return process.env.NODE_ENV === 'production' }

  static flutterVersionSmallerThan (flutterVersion: string): boolean {
    const aimFlutterVersionNumber = Number(flutterVersion.split('.').splice(0, 3).join(''))
    if (isNaN(aimFlutterVersionNumber)) return true
    const flutterVersionNumber = threshApp.flutterVersion ? Number(threshApp.flutterVersion.split('.').splice(0, 3).join('')) : 0
    return flutterVersionNumber < aimFlutterVersionNumber
  }

  static randomId () { return Math.random().toString(16).replace('0.', '') }
  
  /**
   * 判断当前参数类型
   */
  static isObject (value: any): boolean {
    return Util.type(value) === '[object Object]'
  }
  static isArray (value: any): boolean {
    return Util.type(value) === '[object Array]'
  }
  static type (value: any): string {
    return Object.prototype.toString.call(value)
  }
  static isBaseType (value: any): boolean {
    return [ 'number', 'string', 'boolean', 'undefined' ].includes(typeof value)
  }

  /**
   * 将目标转换为一维数组
   */
  static toFlatWidgetArray (source: any[]): any[] {
    if (!source) return []
    if (!Array.isArray(source)) return [ source ]
    let target: any[] = []
    if (source.length) {
      source.forEach((item: any) => {
        if (!Array.isArray(item) && !Util.isNil(item)) target.push(item)
        else target = target.concat(Util.toFlatWidgetArray(item))
      })
    }
    return target
  }

  /**
   * 将所有参数组成一个object
   * 后面的参数会覆盖前面参数的同名属性
   * 如果参数中存在不为object的将会被忽略
   * 使用Object.assign进行浅拷贝
   * 返回一个新的Object
   */
  static merge (...objectList: any[]): object {
    if (!objectList.length) return {}
    return objectList.reduce((last: any, obj: object) => {
      return Object.assign(last, Util.isObject(obj) ? obj : {})
    }, {})
  }

  /**
   * 判断是否为 string
   */
  static isString (value: any) {
    return typeof value === 'string'
  }

  /**
   * 将任意值转换为string
   */
  static toString (value: any, showUndefined: boolean = false): string {
    if (Util.isNil(value)) return !showUndefined ? '' : 'undefined'
    let res: string
    if (Util.isString(value)) return value
    if (value instanceof VNode) return `Widget ${value.type}`
    if (value instanceof Widget) return `Widget ${value.__vNode__?.type || '[unknown]'}`
    try {
      res = JSON.stringify(value)
    } catch (e) {
      res = value.toString()
    } finally {
      if (Util.isNil(res)) res = Util.type(value)
    }
    return res
  }

  static anyToRawString (...params: any[]): string {
    let content: string = ''
    params.forEach((item, index) => {
      let temp: string
      if (item instanceof Error) {
        temp = Util.formatError(item)
      }
      // else if (Util.isObject(item)) {
      //   let tempArr: string[] = []
      //   for (let key in item) {
      //     const value = item[key]
      //     if (key !== SHOW_DIVIDER_KEY) tempArr.push(`[${key}] - ${Util.toString(value, true)}`)
      //     else tempArr.push(`-----${Util.isString(value) ? value : ''}-----`)
      //     temp = tempArr.join('\n')
      //   }
      // }
      else {
        temp = Util.toString(item, true)
      }
      if (index) temp = '\n\n\n' + temp
      content += temp
    })
    return content
  }

  /**
   * 判断当前参数是否为undefined或null
   */
  static isNil (value: any): boolean {
    return value === undefined || value === null
  }

  /**
   * 判断当前参数是否为函数
   */
  static isFunc (value: any): boolean {
    return value && (typeof value === 'function')
  }

  /**
   * 格式化错误信息
   */
  static formatError (error: Error): string {
    let eParams: any
    eParams = {
      message: error.message,
      stack: error.stack,
    }
    return Util.anyToRawString(eParams)
  }

  /**
   * 获取指定范围内数组
   */
  static randomNumberInRange (max: number, min: number = 0, precision: number = 0): number {
    return Number((Math.random() * ( max - min + 1 ) + min).toFixed(precision))
  }

  /**
   * 去除对象中的所有 undefined/null 值
   */
  static filterAllNilProps (value : any) {
    if (!Util.isObject(value)) return value
    walk(value)
    return value

    function walk (data): any {
      for (let key in data) {
        const p: any = data[key]
        if (Util.isNil(p)) delete data[key]
        if (Util.isObject(p)) walk(p)
      }
    }
  }

  /**
   * 节流函数
   */
  static throttle (callback: Function, delay: number = 500): Function {
    let last: number
    return (...args: any[]) => {
      let current: number = Date.now()
      if (last && current - last < delay) return
      last = current
      callback(...args)
    }
  }

  /**
   * Native 日志
   */
  static log (content: string) {
    const t: number = Date.now()
    BridgeManager.invoke({
      module: 'base',
      method: 'log',
      params: {
        level: 2,
        tag: '[[Dynamic Flutter JS Log]]',
        content: `[${t}] - ${content}`
      }
    })
  }

  // ios 10.0.x 版本上 Promise 回调中的 resolve 存在异常
  // 必须先通过 Promise.resolve() 进行一遍类似初始化的操作
  static promiseResolveHackForIos_10_0_x () {
    return Promise.resolve()
  }
}
