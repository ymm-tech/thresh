# SwiperView

### 概述[滚动视图]

`<SwiperView />` 是一个识别手势滑动并切换显示页面的组件。

> **注意：**
>
> `<SwiperView />` 的直接子组件不论有没有设置宽高，都会被赋值为`<SwiperView />`的宽高。



### 示例代码

```javascript
import Thresh, { basicWidgets } from 'thresh-js'

const { SwiperView, Container, Image } = basicWidgets

export default class ImageViewer extends Thresh.Widget {
  render () {
    return {
      <SwiperView width={200} height={200}>
     		<Container>
        	<Image src="https://xxx-1" />  
        </Container>
        <Container>
        	<Image src="https://xxx-2" />  
        </Container>
        <Container>
        	<Image src="https://xxx-3" />  
        </Container>
      </SwiperView>
    }
  }
}
```



### 组件属性

| 属性名    | 类型       | 说明                                                         | 默认值 |
| --------- | ---------- | ------------------------------------------------------------ | ------ |
| row       | `boolean`  | 是否水平方向滑动，默认水平方向滑动                           | `true` |
| initIndex | `number`   | 初始显示的内容 index                                         | `0`    |
| onChange  | `Function` | 发生切换时的回调事件，具有 1 个参数<br /><br />参数具有 `index` 属性，表示切换后显示内容的 index |        |



### 组件方法

```javascript
/**
	* 使 SwiperView 滚动到指定内容
	* @param {number} index 需要显示的内容 index
	* @param {number} duration 移动到指定内容的耗时
	*/
swipeTo(index: number, duration?: number)
```

