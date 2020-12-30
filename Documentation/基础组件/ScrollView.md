# ScrollView

### 概述[滚动视图]

`<ScrollView />` 是一个内部可以滚动的组件。

> **注意：**
>
> `<ScrollView />`不能使用 `flex` 属性，且在未设置宽高的情况下，默认会取其直接父组件的宽高。



### 示例代码

```javascript
import Thresh, { basicWidgets } from 'thresh-js'

const { Page, ScrollView, Container, Text } = basicWidgets

export default class ScrollableView extends Thresh.Widget {
  render () {
    return {
      <ScrollView width={200} height={500}>
        <Container width={200} height={200}>
          <Text>滚动视图子组件1</Text>
        </Container>
        <Container width={200} height={200}>
          <Text>滚动视图子组件2</Text>
        </Container>
        <Container width={200} height={200}>
          <Text>滚动视图子组件3</Text>
        </Container>
        <Container width={200} height={200}>
          <Text>滚动视图子组件4</Text>
        </Container>
        <Container width={200} height={200}>
          <Text>滚动视图子组件5</Text>
        </Container>
        <Container width={200} height={200}>
          <Text>滚动视图子组件6</Text>
        </Container>
      </ScrollView>
    }
  }
}
```



### 组件属性

| 属性名    | 类型                                                 | 说明                                                         | 默认值       |
| --------- | ---------------------------------------------------- | ------------------------------------------------------------ | ------------ |
| direction | `string`<br /><br />- 'vertical'<br />- 'horizontal' | 滑动方向，默认垂直                                           | `'vertical'` |
| onScroll  | `Function`                                           | 滑动时触发的滑动回调事件，具有 1 个参数<br /><br />参数具有 `offset` 属性，表示当前滑动位移值 |              |



### 组件方法

```javascript
/**
	* 使 ScrollView 滚动到指定位置
	* @param {number} offset 相对应原始位置的偏移量
	* @param {number} duration 滚动到指定位置的耗时
	*/
scrollTo(offset: number, duration?: number)
```