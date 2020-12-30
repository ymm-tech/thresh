# Radio

### 概述[单选框]

`<Radio />` 是一个单选框组件。

> **注意：**
>
> `<Radio />` 是一个单一子节点组件！
>
> 当存在多个 `<Radio />` 时，其分组依据 `groupValue` 属性的值。
>
> 务必为 `<Radio />` 赋值高度，否则将不可见。



### 示例代码

```javascript
import Thresh, { basicWidgets } from 'thresh-js'

const { Container, Radio, Text } = basicWidgets

export default class RadioGroup extends Thresh.Widget {
  state = {
    selected: ''
  }
	radioGroup = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
  ]
  
  render () {
    return {
      <Container>
      	{
      		this.radioGroup.map(({ label, value }) => (
          	<Radio
            	value={value}
							groupValue={this.state.selected}
              onChange={({ value}) => {
                this.setState({
                  selected: value
                })
              }}
						>
            	<Text>{label}</Text>
            </Radio>
          ))
    		}
      </Container>
    }
  }
}
```



### 组件属性

| 属性名      | 类型       | 说明                                                         |
| ----------- | ---------- | ------------------------------------------------------------ |
| value       | `string`   | 当前 `Radio` 的值                                            |
| groupValue  | `string`   | 当前 `Radio` 组选中的值<br /><br />通过 `groupValue` 区分不同的 `Radio` 组 |
| activeColor | `number`   | 选中后高亮的颜色值                                           |
| onChange    | `Function` | 选中的值发生变化时的回调事件，具有 1 个参数<br /><br />参数具有 `value` 属性，`string` 类型，表示当前选中的值 |