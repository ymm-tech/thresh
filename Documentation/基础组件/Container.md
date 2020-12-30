# Container

### 概述[基础容器]

`<Container />` 组件是用来划分布局的基础容器。

> **注意：**
>
> `<Container />` 是一个默认会将自身宽高收缩到最小值的组件，也就是说在没有显示声明宽高，且其内部没有子组件的情况下，其宽高都为 0；在其内部具有子组件时，其宽高将会被自动撑开。



### 示例代码

```javascript
import Thresh, { basicWidgets } from 'thresh-js'

const { Container, Text } = basicWidgets

export default class ColumnLayout extends Thresh.Widget {
  render () {
    return {
      <Container>
      	<Text>垂直布局文字1</Text>
      	<Text>垂直布局文字2</Text>
      	<Text>垂直布局文字3</Text>
      </Container>
    }
  }
}

export default class RowLayout extends DF.Widget {
  render () {
    return {
      <Container row>
      	<Text>水平布局文字1</Text>
      	<Text>水平布局文字2</Text>
      	<Text>水平布局文字3</Text>
      </Container>
    }
  }
}
```



### 组件属性

| 属性名         | 类型                                                         | 说明                                                         | 默认值    |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | --------- |
| row            | `boolean`                                                    | 是否水平布局<br /><br />垂直布局时主轴为竖轴，设为 `row` 后主轴为横轴 | `false`   |
| wrap           | `boolean`                                                    | 内容超出一行时是否允许换行<br /><br />水平布局时有效         | `false`   |
| reverse        | `boolean`                                                    | 是否反向排列                                                 | `false`   |
| relative       | `boolean`                                                    | 是否设置为相对布局<br /><br />当子组件中存在 `absolute` 布局组件时，父组件必须设置为 `relative` | `false`   |
| justifyContent | `string`<br /><br />- 'start'<br />- 'end'<br />- 'center'<br />- 'spaceBetween'<br />- 'spaceAround' | 子组件在主轴方向上的对齐方式<br /><br />使用可参考：[Flex布局](https://www.runoob.com/w3cnote/flex-grammar.html) | `'start'` |
| alignItems     | `string`<br /><br />- 'start'<br />- 'end'<br />- 'center'<br />- 'stretch'<br />- 'baseline' | 子组件在辅轴就方向上的对齐方式<br /><br />使用可参考：[Flex布局](https://www.runoob.com/w3cnote/flex-grammar.html) | `'start'` |
| alignContent   | `string`<br /><br />- 'start'<br />- 'end'<br />- 'center'<br />- 'spaceBetween'<br />- 'spaceAround' | 存在换行时，子组件多行之间的堆叠方式<br /><br />使用可参考：[Flex布局](https://www.runoob.com/w3cnote/flex-grammar.html) | `'start'` |

