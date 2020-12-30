# NativeView

### 概述[原生视图]

`<NativeView />` 组件会显示一个已经被 Native 注册在 Flutter 中的原生组件。

> **注意：**
>
> 使用该组件需要 Native 端同步配合，对于未被注册的原生组件，使用 `<NativeView />` 将无效。



### 示例代码

```javascript
import Thresh, { basicWidgets } from 'thresh-js'

const { NativeView } = basicWidgets

export default class MapView extends Thresh.Widget {
  render () {
    return {
      <NativeView type="mapView" />
    }
  }
}
```



### 组件属性

| 属性名 | 类型       | 说明                         |
| ------ | ---------- | ---------------------------- |
| type   | `string`   | 对应 Native 中注册的组件名   |
| params | `any`      | 被传递到 Native 组件中的参数 |
| onLoad | `Function` | NativeView 加载完成回调事件  |



### 组件方法

```javascript
/**
	* 通过此方法可以刷新当前 Native View
	* @param {any} params 刷新时传递的参数
	*/
refresh(params?: any)

/**
	* 通过此方法可以销毁当前 Native View
	* @param {any} params 刷新时传递的参数
	*/
destroy(params?: any)

/**
	* 通过此方法可以向 Native View 发送任意自定义事件
	* @param {string} methodName 事件名称
	* @param {any} methodParams 事件参数
	*/
invokeCustomMethod(methodName: string, methodParams?: any)
```

