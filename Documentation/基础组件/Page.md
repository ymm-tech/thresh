# Page

### 概述[页面容器]

`<Page />` 组件是用来承载页面的最外层组件。当需要显示一个完整页面时，务必在最外层使用该组件。

### 示例代码

```javascript
import Thresh, { basicWidgets } from 'thresh-js'

const { Page, Container, Text } = basicWidgets

export default class Homepage extends Thresh.Widget {
  render () {
    return {
      <Page>
      	<Container width={200} height={200} margin={10}>
        	<Text>页面容器1</Text> 
        </Container>
      	<Container width={200} height={200} margin={10}>
        	<Text>页面容器2</Text> 
        </Container>
    		<Container width={200} height={200} margin={10}>
        	<Text>页面容器3</Text> 
        </Container>
      </Page>
    }
  }
}
```



### 组件属性

| 属性名          | 类型       | 说明                                                         |
| --------------- | ---------- | ------------------------------------------------------------ |
| appBar          | `Widget`   | 导航栏                                                       |
| backgroundColor | `number`   | 背景色                                                       |
| onShow          | `Function` | 页面即将显示时的回调事件                                     |
| onHide          | `Function` | 页面即将隐藏时的回调事件                                     |
| beforePop       | `Function` | 当前页面 pop 之前的回调<br/>如果返回 false 或者 Promise<false> 将停止 pop |

