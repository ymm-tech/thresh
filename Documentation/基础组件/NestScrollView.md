# NestScrollView

### 概述[背景固定的滑动组件]
`<NestScrollView /` 是一个具有自定义背景视图，主体滑动内容居于底部，并且滑动内容可以上拉下拖的组件。

### 示例代码

```javascript
import Thresh, { basicWidgets, ui } from 'thresh-js'

const {
  NestScrollView,
  Container,
  Text,
} = basicWidgets

export default class NestScrollViewDemo extends Thresh.Widget {
  render () {
    return {
      <NestScrollView
      	width={ui.screenWidth}
      	height={ui.screenHeight}
    		offset={ui.screenHeight - 100}
      	backgroundView={(
      		<Container width={ui.screenWidth} height={ui.screenHeight} backgroundColor={0xff0000ff}>
            <Text>这是蓝色背景视图</Text>
          </Container>
      	)}
      >
      	<Container margin={10}>
          <Text>这是内容 1</Text>
        </Container>

				<Container margin={10}>
          <Text>这是内容 2</Text>
        </Container>

				<Container margin={10}>
          <Text>这是内容 3</Text>
        </Container>

				<Container margin={10}>
          <Text>这是内容 4</Text>
        </Container>

				<Container margin={10}>
          <Text>这是内容 5</Text>
        </Container>

				<Container margin={10}>
          <Text>这是内容 6</Text>
        </Container>

				<Container margin={10}>
          <Text>这是内容 7</Text>
        </Container>
      </NestScrollView>
    }
  }
}
```



### 组件属性

| 属性名             | 类型       | 说明                                                         | 默认值 |
| ------------------ | ---------- | ------------------------------------------------------------ | ------ |
| appBar             | `Widget`   | 主体内容上拉后显示的 app bar                                 |        |
| offset             | `number`   | 主体内容距离容器顶部的偏移量                                 | 0      |
| backgroundView     | `Widget`   | 容器背景视图                                                 |        |
| maskView           | `Widget`   | 主体内容上拉后，位于背景视图与主体视图直接的遮罩层视图       |        |
| fixedBottomView    | `Widget`   | 主体内容上拉后，固定在容器底部显示的视图                     |        |
| onScroll           | `Function` | 主体内容上拉后，主体内容发生滚动时的回调，具有 1 个参数<br /><br />参数具有 `offset` 属性，表示当前滑动位移值 |        |
| onDragStatusChange | `Function` | 主体内容上拉和下拖后触发的回调，具有 1 个参数<br /><br />参数具有 *isInitStatus* 属性，表示当前容器的状态是否是初始状态 |        |

