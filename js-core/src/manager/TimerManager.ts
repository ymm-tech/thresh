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

import Util from "../shared/Util"
import bus from "../shared/bus"

// native 注入的注册定时器方法
declare const methodChannel_timer_operator: Function

// 定时器类型
enum TimerType {
  timeout,
  interval,
}

export default class TimerManager {
  private static _timerIds: string[] = []
  /**
   * 定时执行器
   */
  static setTimeout (callback: Function, duration: number = 0): string {
    return TimerManager.registerTimer(TimerType.timeout, callback, duration)
  }
  /**
   * 循环定时执行器
   */
  static setInterval (callback: Function, duration: number = 0): string {
    return TimerManager.registerTimer(TimerType.interval, callback, duration)
  }
  /**
   * 清除定时器
   */
  static clearTimer (timerId: string) {
    if (!timerId) return
    bus.remove(timerId)
    methodChannel_timer_operator({
      type: 'clear',
      id: timerId,
    })
    const index = TimerManager._timerIds.indexOf(timerId)
    if (index > -1) TimerManager._timerIds.splice(index, 1)
  }
  /**
   * 执行定时器
   */
  static fireTimer (timerId: string) {
    if (!timerId) return
    bus.fire(timerId)
  }
  /**
   * 清空所有定时器
   */
  static clearAllTimers () {
    TimerManager._timerIds.forEach(TimerManager.clearTimer)
  }
  /**
   * 注册定时器
   */
  private static registerTimer (type: TimerType, callback: Function, duration: number): string {
    if (!Util.isFunc(callback)) return
    if (!duration || duration < 0) duration = 0
    const loop = type === TimerType.interval

    const timerId = bus.register(
      loop
        ? callback
        // 如果是单次定时器
        // 执行回调后立刻清除
        : () => {
          callback()
          TimerManager.clearTimer(timerId)
        },
      this.timerId
    )
    methodChannel_timer_operator({
      type: 'register',
      id: timerId,
      duration,
      loop,
    })
    TimerManager._timerIds.push(timerId)
    return timerId
  }

  private static get timerId () {
    return `timer_${Math.random().toString(16).replace('0', Date.now().toString())}`
  }
}

// 暴露到全局的 timer 触发方法
export function methodChannel_timer_fire(params: any) {
  if (!params) return
  const { id } = params
  if (!id) return
  TimerManager.fireTimer(id)
}

