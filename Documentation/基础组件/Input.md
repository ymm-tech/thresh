# Input

### 概述[文本框]

`<Input />` 是文本输入组件，可以通过设置属性实现 `Textatea`



### 示例代码

```javascript
import Thresh, { basicWidgets } from 'thresh-js'

const { Input, Container } = basicWidgets

export default class InputBox extends Thresh.Widget {
  render () {
    return {
      <Container>
      	<Input
      		value="init value"
      		placeholder="please input something..."
      	/>
      </Container>
    }
  }
}
```



### 组件属性

| 属性名           | 类型                                                         | 说明                                                         | 默认值   |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | -------- |
| value            | `string`                                                     | `Input` 的值（初始值），修改请使用 setValue() 方法（见下方） |          |
| disabled         | `boolean`                                                    | 是否禁用                                                     | `false`  |
| autofocus        | `boolean`                                                    | 是否自动聚焦                                                 | `false`  |
| maxLines         | `number`                                                     | 最大输入行数                                                 | `1`      |
| maxLength        | `number`                                                     | 最大输入字符数                                               |          |
| textAlign        | `string`<br /><br />- 'left'<br />- 'right'<br />- 'center'  | 文本对齐方式                                                 | `'left'` |
| textStyle        | `TextStyle`                                                  | 文本样式，`TextStyle` 的属性见下方表格                       |          |
| placeholder      | `string`                                                     | 占位符文字，`TextStyle` 的属性见下方表格                     |          |
| placeholderStyle | `TextStyle`                                                  | 占位符文字样式                                               |          |
| cursorColor      | `number`                                                     | 文本/富文本色值                                              |          |
| keyboardType     | `string`<br /><br />- 'text' 文本键盘<br />- 'multiline' 多行输入键盘<br />- 'number' 数字键盘<br />- 'decimalNumber' 小数点数字键盘<br />- 'phone' 拨号键盘<br />- 'datetime' 日期键盘<br />- 'emailAddress' 邮箱键盘<br />- 'url' url 键盘 | 键盘类型                                                     | `'text'` |
| onChange         | `Function`                                                   | 值改变回调函数，具有 1 个参数<br /><br />参数具有 `value` 属性，为当前输入框的值<br />需要注意的是，当值改变后，页面上始终会显示最新的值，因此不需要再次调用 setState()。如需修改输入框的值，使用下方组件方法会更加高效 |          |
| onFocus          | `Function`                                                   | 聚焦回调函数，参数同 `onChange`                              |          |
| onBlur           | `Function`                                                   | 失焦回调函数，参数同 `onChange`                              |          |



### 组件方法

```javascript
/**
	* 设置输入框的值必须通过该方法，直接使用 setState() 将不生效，
	* @param {string} value 需要设置的值
	*/
setValue(value: string)
```



### TextStyle

| 属性名        | 类型                                                         | 说明     |
| ------------- | ------------------------------------------------------------ | -------- |
| size          | `number`                                                     | 字号     |
| weight        | `string`<br /><br />- 'normal'<br />- 'light'<br />- 'bold'<br />- 'bolder' | 字重     |
| color         | `number`                                                     | 字体颜色 |
| shadow        | `{color?: number, offsetX?: number, offsetY?: number, blur?: number, spread?: number}` | 文本阴影 |
| letterSpacing | `number`                                                     | 字符间距 |
| wordSpacing   | `number`                                                     | 单词间距 |

