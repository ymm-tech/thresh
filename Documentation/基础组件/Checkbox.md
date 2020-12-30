# Checkbox

### 概述[多选框]

`<Checkbox />` 是一个多选框组件。

> **注意：**
>
> `<Checkbox />` 是一个单一子节点组件！
>
> 务必为 `<Checkbox />` 赋值高度，否则将不可见。



### 示例代码

```javascript
import Thresh, { basicWidgets } from 'thresh-js'

const { Container, Checkbox, Text } = basicWidgets

export default class CheckboxGroup extends Thresh.Widget {
  state = {
    checkboxGroup: [
      { label: 'Apple', selected: true },
      { label: 'Banana', selected: false },
      { label: 'Orange', selected: false },
    ]
  }
  
  render () {
    return {
      <Container>
      	{
      		this.state.checkboxGroup.map(({ label, selected }, index) => (
          	<Checkbox
            	value={value}
              onChange={({ value}) => {
                const { checkboxGroup } = this.state
                checkboxGroup[index].selected = value
                this.setState({ checkboxGroup })
              }}
						>
            	<Text>{label}</Text>
            </Checkbox>
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
| value       | `boolean`  | 当前是否被选中                                               |
| activeColor | `number`   | 选中后高亮的颜色值                                           |
| onChange    | `Function` | 选中的值发生变化时的回调事件，具有 1 个参数<br /><br />参数具有 `value` 属性，`boolean` 类型，表示当前是否选中 |