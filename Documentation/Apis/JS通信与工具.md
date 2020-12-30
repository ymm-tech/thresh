# JS通信与工具

Thresh 中也有很多 api 提供了网络请求、与 native 的通信、动态计算宽高、事件触发等的能力。

## Util

> 使用 Util 需要先导入，导入方式为：`import { Util } from 'thresh-js'`.



#### Util.request(params: RequestParams, module: string = 'base', method: string = 'request'): Promise

发起网络请求。在本地调试模式下，网络请求会通过 flutter 进行发起；在非本地调试模式下，将会通过 native bridge 发起。参数说明与使用如下：

```javascript
/**
 * 网络请求方法
 * @param {RequestParams} params 网络请求参数
 * @param {string} module 网络请求 bridge module name，默认 'base'
 * @param {string} method 网络请求 bridge method name，默认 'request'
 * @return {Promise<any>} 返回值为返回请求结果的 Promise
 */
Util.request(
  params: RequstParams,
  module: string = 'base',
  method: string = 'request'
): Promise<any>
  
interface RequstParams {
  url: string
  method?: 'POST' | 'GET' | 'DELETE' | 'PUT'
  headers?: object
  data?: object
  querys?: object
}
  
// example
const res = await Util.request({
  url: 'https://xxxxxx',
  method: 'POST',
  data: { id: 1 }
})
```





#### Util.copy(data: any, showSuccess: boolean = true)

复制一条数据。该方法具有两个参数，第一个参数是待复制内容，第二个参数是是否显示复制成功提示。

方法内部会先将 data 转成 string 后进行复制，如果 `showSuccess = true` 则默认会显示文案为 “复制成功” 的 toast. 使用方式如下：

```javascript
// 复制一条文本并且不显示成功 toast
Util.copy('copy this text to clipboard', false)
```





> **TIP**
>
> 当处于调试模式时，通过以下 3 个 api 可以将需要打印的内容显示在调试面板上。

#### Util.log(...args: any[])

使用方法同`console.log()`



#### Util.warn(...args: any[])

使用方法同`console.warn()`



#### Util.error(...args: any[])

使用方法同`console.error()`





> **TIP**
>
> 以下 3 个 api 可以直接使用 js 中常用的 setTimeout / setInterval / clearTimeout / clearInterval.
>
> 需要注意的是，由于 js 的运行环境为 jscore/v8，为了保证其他依赖库中使用定时器时不会报错，应当将 dynamic-flutter 作为项目入口第一个依赖引入！

#### Util.setTimeout(callback: Function, delay: number): string

使用方法同 `setTimeout()`



#### Util.setInterval(callback: Function, delay: number): string

使用方法同 `setInterval()`



#### Util.clearTimer(timerId: string)

使用方法同 `clearTimeout()` `clearInterval`



## Bridge

> 使用 Bridge 需要先导入，导入方式为：`import { Bridge } from 'thresh-js'`.



#### Bridge.invoke(params: BridgeParams): Promise

向 native 发起 bridge 请求，会返回一个返回 bridge 请求结果的 Promise。参数说明与使用方法如下：

```javascript
interface BridgeParams {
  module: string, // bridge module name
  method: string, // bridge method name
  params?: any // bridge 请求参数
}

// example - show loading
const res = await Bridge.invoke({
  module: 'ui',
  method: 'showLoading',
  params: { message: '加载中...' }
})
```



## UI

>  使用 ui 需要先导入，导入方式为：`import { ui } from 'thresh-js'`.



#### ui.rpx(size: number): number

根据设备像素密度比与设计图尺寸动态计算在当前设备上实际显示的尺寸。该方法应当在 `DF.ready()` 后调用，以保证页面显示准确。



#### ui.screenWidth: number

获取当前屏幕宽度。该方法应当在 `DF.ready()` 后运行时调用，以保证取得的值的准确性。



#### ui.screenHeight: number

获取当前屏幕高度。该方法应当在 `DF.ready()` 后运行时调用，以保证取得的值的准确性。



#### ui.statusBarHeight: number

获取当前设备状态栏高度。该方法应当在 `DF.ready()` 后运行时调用，以保证取得的值的准确性。



#### ui.bottomBarHeight: number

获取当前设备底部控制条高度。该方法应当在 `DF.ready()` 后运行时调用，以保证取得的值的准确性。



#### ui.appbarHeight: number

获取当前运行环境顶部导航栏高度。该方法应当在 `DF.ready()` 后运行时调用，以保证取得的值的准确性。



#### ui.devicePixelRatio: number

获取当前设备像素密度比。该方法应当在 `DF.ready()` 后运行时调用，以保证取得的值的准确性。



#### ui.setDesignInfo: (width: number, height:number)

设定设计搞的宽高，以保证 `ui.rpx()` 方法最终计算出来的显示效果与设计图一致。如不使用该方法，默认设计图宽高为：1280 x 750.



#### ui.setAppBarHeight: (appbarHeight: number)

设定 appbar 高度，默认高度为 56.



## Event

>  使用 Event 需要先导入，导入方式为：`import { Event } from 'thresh-js'`.



#### Event.register(name: string, callback: Function)

注册一个事件。具有两个参数，第一个为事件名，第二个为事件回调。需要注意的是同一个事件名只能注册一个回调事件，如果重复注册，后者将会覆盖前者。

```javascript
Event.register('test', param => {
	Util.log(param)
})
```



#### Event.fire(name: string, ...args: any[])

触发事件。具有至少 1 个参数，第一个为需要触发的事件名，其他参数为需要传递进回调事件的参数。如需要触发的事件未被注册将不会有响应。

```javascript
Event.fire('test', 123)
```



#### Event.has(name: string): boolean

判断当前某个事件名是否已经被注册。

```javascript
Event.has('test') // return true
Event.has('ready') // return false
```



#### Event.remove(name: string)

移除某个已经注册过的事件。如该事件未被注册将会忽略。

```javascript
Event.remove('test')
```





