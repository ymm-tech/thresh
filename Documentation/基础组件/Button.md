# Button

### 概述[按钮]

`<Button />` 是一个自带点击效果（点击时具有 0.5 透明度）的按钮组件。

> **注意：**
>
> `<Button />` 是一个单一子节点组件！



### 示例代码

```javascript
import Thresh, { basicWidgets } from 'thresh-js'

const { Button, Text } = basicWidgets

export default class ImageItem extends Thresh.Widget {
  render () {
    return {
      <Button>
      	<Text>这是一个按钮</Text>
      </Button>
    }
  }
}
```



### 组件属性

无