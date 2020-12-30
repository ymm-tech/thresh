# Image

### 概述[图片]

`<Image />` 是一个用来显示图片的组件。



### 示例代码

```javascript
import Thresh, { basicWidgets } from 'thresh-js'

const { Image } = basicWidgets

export default class ImageItem extends Thresh.Widget {
  render () {
    return {
      <Image src="https://xxx" />
    }
  }
}
```



### 组件属性

| 属性名      | 类型                                                         | 说明                                                         | 默认值  |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------- |
| src         | `string`                                                     | 图片路径                                                     |         |
| placeholder | `string`                                                     | 占位图片路径                                                 |         |
| fit         | `string`<br /><br />- 'fill'<br />- 'contain'<br />- 'cover'<br />- 'fitWidth'<br />- 'fitHeight'<br />- 'scaleDown'<br />- 'none' | 图片显示效果                                                 |         |
| fadeIn      | `boolean`                                                    | 是否开启隐藏占位图时的动画效果                               | `false` |
| onLoad      | `Function`                                                   | 滑动时触发的滑动回调事件，具有 1 个参数<br /><br />参数具有 `width` `height` 属性，表示当前图片资源的实际宽高<br />如果需要取得图片显示宽高，需要通过 `onLayout` 进行获取 |         |