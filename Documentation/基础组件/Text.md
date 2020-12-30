# Text

### 概述[文本]

`<Icon />` 是文本组件，通过属性也可以实现富文本效果。



### 示例代码

```javascript
import Thresh, { basicWidgets } from 'thresh-js'

const { Text } = basicWidgets

export default class NormalText extends Thresh.Widget {
  render () {
    return {
      <Text>这是一个普通文本</Text>
    }
  }
}

export default class RichText extends DF.Widget {
  render () {
    return {
      <Text
      	richText={[
      		text: '富文本第二句话是红色，',
      		color: 0xffff0000
      	], [
      		text: '富文本第三句话是绿色20px，',
      		color: 0xff00ff00,
          size: 20
      	], [
      		text: '富文本第四句话是黄色30px加粗。',
      		color: 0xff0000ff,
          size: 30,
          weight: 'bolder'
      	]}
      >
        这是富文本开头，
			</Text>
    }
  }
}
```



### 组件属性

| 属性名        | 类型                                                         | 说明                                                         | 默认值                   |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------ |
| align         | `string`<br /><br />- 'left'<br />- 'right'<br />- 'center'  | 文本对齐方式                                                 | `'left'`                 |
| lineHeight    | `number`                                                     | 行高<br /><br />由于安卓与 iOS 行高的渲染效果不同，为保证单行效果一致，安卓默认具有行高为 1，iOS 不设置默认行高。<br />在渲染多行文本时，安卓的行间距会比 iOS 小，如需保持多行文本行高相同，需要显示声明行高 | 1 - 安卓<br />null - iOS |
| wrap          | `boolean`                                                    | 是否允许换行                                                 | `false`                  |
| overflow      | `string`<br /><br />- 'ellipsis'<br />- 'visible'<br />- 'fade'<br />- 'clip' | 文本超出时的显示方式                                         |                          |
| maxLines      | `number`                                                     | 最大显示行数                                                 |                          |
| richText      | `Span`<br /><br />`Span[]`                                   | 富文本属性，`Span` 类型具有的属性在下方；这些属性除 `text` 外，在 `Text` 组件中直接使用同样有效 |                          |
| text          | `string`                                                     | 富文本文字内容                                               |                          |
| size          | `number`                                                     | 文本/富文本文字大小                                          |                          |
| weight        | `string`<br /><br />- 'normal'<br />- 'light'<br />- 'bold'<br />- 'bolder' | 文本/富文本字重                                              | `normal`                 |
| color         | `number`                                                     | 文本/富文本色值                                              | `0xff000000`             |
| shadow        | `{color?: number, offsetX?: number, offsetY?: number, blur?: number, spread?: number}` | 文本/富文本阴影                                              |                          |
| letterSpacing | `number`                                                     | 字符间距                                                     |                          |
| wordSpacing   | `number`                                                     | 单词间距                                                     |                          |
| decoration    | `string`<br /><br />- 'none'<br />- 'lineThrough'<br />- 'overline'<br />- 'underline' | 文本装饰线                                                   |                          |