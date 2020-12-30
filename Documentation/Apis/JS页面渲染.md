# JS页面渲染

在页面中通过 `import Thresh from 'thresh-js'` 可以获取到 `thresh-js` 框架中暴露出来的核心对象 `Thresh`.

`Thresh` 中目前一共提供了 20 个可用的属性与方法，通过这些 api 我们可以构建出完整的页面，并将多个页面链接，成为一个 app.



## Basic Widget Class

#### Thresh.Widget

新增一个自定义组件可以通过继承该类实现。自定义组件的写法与 React 组件类似，也具备了几乎相同的组件内 api. 可以参考一下写法实现一个自定义组件。

```javascript
import Thresh, { basicWidgets } from 'thresh-js'

const { Text } = basicWidgets

class Homepage extends Thresh.Widget <any, any> {
  // 构造方法，可选；如无需要在构造方法中实现的逻辑，可以省略
  constructor (props) {
    super(props)
    // your codes
  }
  
  state = {
  	isUpdated: false
	}
  
  // 组件已挂载方法，可选
  widgetDidMount () {
    setTimeout(() => {
      // 调用 setState() 方法触发组件更新
      this.setState({ isUpdated: true })
    }, 5000)
    // your codes
  }

	// 组件已更新方法，可选
	widgetDidUpdate () {
    // your codes
  }

	// 组件即将卸载方法，可选
	widgetWillUnmount () {
    // your codes
  }
	
	// 组件渲染方法，必须存在
	render () {
    return <Text>{this.state.isUpdated ? '组件已更新' : '组件未更新'}</Text>
  }
}
```

你也可以通过这种的方式获取到 `Widget`：`import { Widget } from 'thresh-js'`.

**widgetInstance.setState()**

与 React 类似，触发组件更新时可以通过在组件中调用 `setState()` 方法，之后框架会对调用了 `setState()` 的组件进行异步更新；与 React 不同的是， `setState()` 中可以只传入一个 Object 或者不传参。如果传参的话，传入的参数会立即与当前 state 进行合并，因此你可以立即获取到最新的 state。并且只要调用了 `setState()` ，当前组件就会进入更新队列。以上面的 `Homepage` 组件为例，以下两种触发更新的方式都是正确的：

```javascript
// 方法 1
this.setState({ isUpdate: true })

// 方法 2
this.state.isUpdate = true
this.setState()
```

> **TIP**
>
> 触发 `setState()` 后页面将会更新，然后会继续触发该组件的 `widgetDidUpdate` 方法，如果在 `widgetDidUpdate` 存在 `setState()`，请务必做好条件判断，以保证其能够避免无限更新的问题！



## Properties

> 以下属性中标记 NeedDFReady: true 的，应当保证其在 Thresh.ready() 方法中及以后调用，否则获取到的值可能不正确！
>
> Thresh.ready() 的相关说明可参考下一部分 Methods.



#### Thresh.jsVersion: string

NeedThreshReady: false

获取当前 thresh-js 框架的 js 端三位版本号。



#### Thresh.flutterVersion: string

NeedThreshReady: true

获取当前 thresh-js 框架的 flutter 端三位版本号。



#### Thresh.debugMode: boolean

NeedThreshReady: true

获取当前 flutter 端的调试模式。如果为 true 表示 Thresh 页面底部将会显示调试面板按钮，并且 Thresh 的页面超时监听等功能将会被禁用。

> **TIP**
>
> 需要注意的是，Thresh.debugMode = true 仅表示 flutter 的运行环境，不表示当前 js 的运行环境为开发环境。
>
> 除本地调试时 js 的运行环境为 development 外，其余都为线上环境 production。如需获取正确的 js 运行环境，可用过环境变量 process.env.NODE_ENV 获取！



#### Thresh.platform: 'iOS' | 'Android'

NeedThreshReady: true

获取当前 Thresh 的运行平台。



#### Thresh.pageName: string

NeedThreshReady: true

获取当前 Thresh 显示的页面名称，无页面显示时为空字符串。



#### Thresh.referPageName: string

NeedThreshReady: true

获取当前 Thresh 显示页面的上一个页面名称，无上一个页面时为空字符串。

## Methods



#### Thresh.ready = () => {}

当 Thresh 运行环境准备完成时，Thresh 框架内部会主动调用 Thresh.ready()`. 通过重写此方法，可以在显示页面之前完成一些业务依赖的前置操作，如获取 appInfo userInfo 等信息。示例代码如下：

```javascript
Thresh.ready = async () => {
	await getAppInfo()
	await getUserInfo()
	// 运行当前 app
	Thresh.runApp()
}
```



#### Thresh.runApp()

运行 Thresh app. 该方法无参数，需要主动调用后才能够显示页面，代码示例见上方 `Thresh.ready`。为了保证页面能够被正常显示，所有依赖都已获取，`Thresh.runApp()` 方法应当在 `Thresh.ready` 中的合适位置被调用。页面显示规则为：

1. 存在注入路由时显示注入的路由页面
2. 不存在注入路由时显示路由配置中的默认页面
3. 不存在默认页面时显示路由配置中的 404 页面
4. 不存在 404 页面时将会通知 flutter 显示默认的 404 页面



#### Thresh.onError = (error: any) => {}

DF App 中的异常捕获方法，通过重写 onError 方法能够实现自定义的异常上报机制。如不重写该方法，则只会在调试模式下将错误显示到调试面板中。

该方法具有 1 个参数 `error`，大部分情况下，`error` 是 `Error` 对象或具有 `message` 和 `stack` 的 object. 

> 由于 Thresh 的运行环境为 jsCore/v8，因此不具备 window.onerror，如要捕获异常请务必重写该方法。



#### Thresh.flutterVersionSmallerThan(flutterVersion: string): boolean

该方法能够用来判断当前 Thresh 的 flutter 版本是否小于某个指定的版本（版本号应为 3 位），从而实现基于 Thresh flutter 版本号的局部代码版本控制。示例代码如下：

```javascript
// 如果当前运行的 Thresh flutter 版本为 1.1.1 及以上将会返回 true
// 否则返回 false
Thresh.flutterVersionSmallerThan('1.1.0')
```



#### Thresh.registerPage(pageName: string, pageBuilder: Function, config: RouteConfig = { isDefault: false, isNotFound: false })

通过该方法能够像 Thresh 中注册一个页面，在业务代码中如需显示下一个页面，应当使用注册过的 `pageName`，对于为注册的页面将会显示 404 页面。注册页面一共需要三个参数，参数说明与使用如下：

```javascript
/**
 * @param {string} pageName 页面名称/路由名称
 * @param {Function} pageBuilder 页面构造器，返回一个 Widget Class
 * @param {RouteConfig} config 路由配置参数，可选。isDefault 为 true 表示该页面为默认页面，isNotFound 为 true 表示该页面为 404 页面。当同时存在多个路由具有相同的配置时，将会以后注册的为准。
 */
Thresh.registerPage(
	pageName: string,
	pageBuilder: Function,
	config: RouteConfig = { isDefault: false, isNotFound: false }
)

// example - 向 DF 中注册以下 3 个页面
Thresh.registerPage('homePage', () => HomePage, { isDefault: true })
Thresh.registerPage('otherPage', () => OtherPage)
Thresh.registerPage('notFoundPage', () => NotFoundPage, { isNotFound: true })
```



#### Thresh.injectRouteInfo(route: PageRoute)

该方法能够向 Thresh 中注入一个路由，从而实现相应页面的优先显示。需要注意的是，该方法应当在 `Thresh.runApp()` 之前调用，并且尽量保证该方法被用于开发环境，否则可能会出现线上环境中注入的路由被覆盖的问题！方法具有 1 个 `PageRoute` 参数，该参数的说明与使用方法如下：

```javascript
interface PageRoute {
  pageName: string // 页面/路由名称
  params?: object // 需要被传入页面 props 中的参数
}
  
// example - js 本地调试时向 DF 中注入路由
if (process.env.NODE_ENV === 'development') {
  Thresh.injectRouteInfo({
    pageName: 'otherPage',
    // 参数可在 OtherPage 组件中通过 this.props.id, this.props.name 获取到
    params: { id: 1, name: 'otherPage' }
  })
}
```

你也可以通过这种的方式获取到 `injectRouteInfo`：`import { injectRouteInfo } from 'thresh-js'`



#### Thresh.pushPage(pageName: string, params: object)

Thresh 显示下一级页面，第一个参数为页面/路由名称，第二个参数为需要传递到页面组件中的参数。如果需要显示的页面未注册，将会显示 404 页面。使用方式如下：

```javascript
Thresh.pushPage('otherPage', { id: 1, name: 'otherPage' })
```



#### Thresh.replacePage(pageName: string, params: object)

将当前显示的页面替换为另一个页面。参数与使用方法与 `Thresh.pushPage()` 相同。



#### Thresh.popPage(): Promise

离开当前显示页面回到上一页面。该方法无参数，返回 `Promise`对象。

> **TIP**
>
> 需要注意的是，如果通过 `Thresh.replacePage()` 将页面 A 替换为页面 B 后，在页面 B 中使用 `Thresh.popPage()` 不会返回到页面 A，因为 A 与 B 属于同一层级。



#### Thresh.canPop(): Boolean

判断当前页面是否可以 pop，无参数。对于 Thresh 的页面来说，是否可以 pop 存在两种情况：

1. 根页面，无法 pop，`Thresh.canPop() = false`. 在根页面中调用 `Thresh.popPage()` 将会先判断 `Thresh.canPop() === false` 后关闭整个 flutter 容器；
2. 非根页面，可以 pop，`Thresh.canPop() = true`.



#### Thresh.showModal(modal: VNode, opts?: object)

显示模态页面。该方法具有两个参数，第一个参数为需要显示的模态页面节点，第二参数为模态页面选项。参数具体说明与使用方式如下：

```javascript
/**
 * @param {VNode} modal 模态页面节点，即 <Container /> 或 <Text>123</Text> 等
 * @param {Function} pageBuilder 页面构造器，返回一个 Widget Class
 * @param {object} opts 模态显示配置：title 为模态页面名称，若不传则在框架中会为其动态创建一个名称；popup 为模态页面显示方式，默认显示方式为渐隐渐现，设置为 true 后其显示方式为从底部弹出且自带透明黑色背景(0x80000000)
 */
Thresh.showModal(modal: VNode, opts: { title?: string, popup?: boolean})

// example - 显示一个模态页面
Thresh.showModal(<Text>this is a modal page</Text>)
```



#### Thresh.hideModal(): Promise

隐藏当前显示的模态页面。该方法没有参数。需要注意的是，如果同时显示了多个模态页面，该方法将会从最后显示的模态页面开始逐个关闭，因此如果显示了 5 个模态页面，则需要调用 5 次该方法才能将模态页面全部关闭。



#### Thresh.showToast(toast: VNode, info: ToastInfo)

显示 toast 提示。该方法具有两个参数，第一个参数为需要显示的 toast 节点，第二个参数为 toast 选项，toast 选项的具体说明与该方法的使用方式如下：

```javascript
interface ToastInfo {
  // toast 名称，可选，用来控制该 toast 的关闭。如不设置则 toast 会自动隐藏
  name: string
  // toast 停留时长(ms)，默认 2000ms，如设置为 0 且存在 name 的情况下，将一直存在而不会自动关闭
  stayTime: number
  // toast 动画时长(ms)，默认 200ms
  duration: number
  // 是否需要透明遮罩，默认 false，如果设置为 true 则底部页面不可点击与滑动
  mask: boolean
  // 动画位置信息，默认值 { bottom: 50, right: 50, left: 50 }. Positioned 属性说明见下方
  // 如果不是数组则表示 toast 显示的位置；如果是数组则需要有两个值，第一个值为动画起始位置，第二个值为动画结束位置
  position: Positioned | Array<Positioned>
  // 透明度动画信息，默认值 [0, 1]
  // 如果不是数组则表示 toast 的透明度；如果为数组则需要有两个值，第一个值为动画起始透明度，第二个值为动画结束透明度
  opacity: number | Arrya<number> 
}

interface Positioned {
  left?: number
  right?: number
  top?: number
  bottom?: number
  // 存在 width 时会忽略 left & right，自动计算 toast 位置以使其水平居中显示
  width?: number
  height?: number
}

// example - 显示 toast
Thresh.showToast(
	<Text>this is a toast</Text>,
  {
    name: 'test-toast',
    stayTime: 3000,
    position: { left: 40, right: 40, bottom: 100 },
  	opacity: 0.8
  }
)
```

> **TIP**
>
> 需要注意的是，通过 `Thresh.showToast()` 显示的 toast 是一个静态的组件，不具备 `setState()` 的能力，即使在 toast 组件中调用了 `setState()` 也不会更新页面。



#### Thresh.hideToast(toastName: string)

关闭指定 toast，具有一个字符串类型参数，该参数为 `Thresh.showToast()` 时 toast 选项中的 name.



#### Thresh.pageDidShow(networkTime: number)

对 Thresh App 的首页进行性能统计，具有 1 个网络耗时参数，其默认值为 0，可以根据页面需要在统计到网络耗时后调用该方法传入参数。

调用该方法后会向 native 发送包含页面首帧耗时、js 执行耗时、js runApp 耗时、首次通信耗时、网络请求耗时等多个数据。具体发送的参数如下：

| 参数名                | 参数类型 | 参数含义                                     |
| --------------------- | -------- | -------------------------------------------- |
| flutterVersion        | String   | DF flutter 端版本号                          |
| jsVersion             | String   | DF js 端版本号                               |
| pageName              | String   | 当前页面名称/路由                            |
| networkTime           | Number   | 首屏主要接口的网络请求耗时，可以为空         |
| pageDidLoad           | Number   | 页面显示首帧时的时间戳                       |
| jsStartTime           | Number   | JS 发出第一条通信消息时的时间戳              |
| jsRunAppTime          | Number   | JS 执行 runApp() 时的时间戳                  |
| channelFirstSpendTime | Number   | Flutter 首次通信从消息发出到被接收之间的耗时 |
| pageDidShowTime       | Number   | DF.pageDidShow() 被调用时的时间戳            |

以上与时间有关的参数触发的先后顺序为：

jsStartTime -> channelFirstSpendTime -> jsRunAppTime -> pageDidLoad -> networkTime -> pageDidShowTime.

> **TIP**
>
> 该方法在整个 Thresh App 的生命周期中，只有第一次调用时有效。一般只用来统计首屏的相关数据，可以在任意页面中使用以保证任意页面作为首屏时都能够发送出相关数据。



#### Thresh.stopInfinitRender()

停止当前页面上所有无限渲染组件的渲染，该方法建议在关闭 Thresh 容器时使用。

通过 `Thresh.popPage()` 正常退出 Thresh 容器不需要调用此方法，框架内部会主动调用。

> **TIP**
>
> 使用此方法后，页面上的 Refresh 组件及 gif 图片等都将被销毁且无法重新显示，请谨慎使用。













