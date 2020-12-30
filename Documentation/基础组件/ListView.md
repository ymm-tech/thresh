# ListView

### 概述[列表视图]

`<ListView />` 是一个内部可以滚动的列表组件，内部的列将会被动态创建与复用。

> **注意：**
>
> `<ListView />` 不能使用 `flex` 属性，且在未设置宽高的情况下，默认会取其直接父组件的宽高。



### 示例代码

```javascript
import Thresh, { basicWidgets } from 'thresh-js'

const { ListView, Container, Text } = basicWidgets

export default class ListDemo extends Thresh.Widget {
  render () {
    return {
      <ListView width={200} height={500}>
        <Container width={200} height={200}>
          <Text>列表视图子组件1</Text>
        </Container>
        <Container width={200} height={200}>
          <Text>列表视图子组件2</Text>
        </Container>
        <Container width={200} height={200}>
          <Text>列表视图子组件3</Text>
        </Container>
        <Container width={200} height={200}>
          <Text>列表视图子组件4</Text>
        </Container>
        <Container width={200} height={200}>
          <Text>列表视图子组件5</Text>
        </Container>
        <Container width={200} height={200}>
          <Text>列表视图子组件6</Text>
        </Container>
      </ListView>
    }
  }
}
```



### 组件属性

| 属性名                 | 类型                                                 | 说明                                                         | 默认值       |
| ---------------------- | ---------------------------------------------------- | ------------------------------------------------------------ | ------------ |
| direction              | `string`<br /><br />- 'vertical'<br />- 'horizontal' | 滑动方向，默认垂直                                           | `'vertical'` |
| onScroll               | `Function`                                           | 滑动时触发的滑动回调事件，具有 1 个参数<br /><br />参数具有 `offset` 属性，表示当前滑动位移值 |              |
| refreshColor           | `number`                                             | 下拉刷新 loading 图案的颜色                                  | 蓝色         |
| refreshBackgroundColor | `number`                                             | 下拉刷新 loading 背景的颜色                                  | 白色         |
| onRefresh              | `Function`                                           | 下拉刷新时触发的方法，必须是一个返回 Promise 的异步方法<br />如不存在该方法，将无法触发下拉刷新 |              |
| onLoadMore             | `Function`                                           | 上拉加载时触发的方法，必须是一个返回 Promise 的异步方法<br />上拉加载的视觉效果可以自定义，如不存在该方法，将无法触发上拉加载 |              |



### 组件方法

```javascript
/**
	* 使 ScrollView 滚动到指定位置
	* @param {number} offset 相对应原始位置的偏移量
	* @param {number} duration 滚动到指定位置的耗时
	*/
scrollTo(offset: number, duration?: number)
```