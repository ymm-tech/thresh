# Refresh

### 概述[刷新指示器]
`<Refresh />` 是一个刷新指示器组件。



### 示例代码

```javascript
import Thresh, { basicWidgets } from 'thresh-js'

const { Refresh } = basicWidgets

export default class RefreshView extends Thresh.Widget {
  render () {
    return {
      <Refresh color={0xffff0000} size={20} />
    }
  }
}
```



### 组件属性

| 属性名      | 类型     | 说明           | 默认值       |
| ----------- | -------- | -------------- | ------------ |
| color       | `number` | 指示器主色     | `0xff0000ff` |
| secondColor | `number` | 指示器辅色     |              |
| size        | `number` | 指示器尺寸     |              |
| strokeWidth | `number` | 指示器绘制粗细 |              |



