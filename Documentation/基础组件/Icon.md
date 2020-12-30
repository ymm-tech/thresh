# Icon

### 概述[图标]

`<Icon />` 是图标组件，其提供了部分 Flutter 中支持的图标。



### 示例代码

```javascript
import Thresh, { basicWidgets } from 'thresh-js'

const { Container, Icon } = basicWidgets

export default class Loading extends Thresh.Widget {
  render () {
    return {
      <Container>
      	<Icon type="loading" />
      </Container>
    }
  }
}
```



### 组件属性

| 属性名 | 类型       | 说明     |
| ------ | ---------- | -------- |
| type   | `string`   | 图标类型 |
| color  | `number`   | 图标大小 |
| size   | `Function` | 图标颜色 |