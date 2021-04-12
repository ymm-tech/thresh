# DragableScrollView

### 概述[底部多段式拖拽滑动视图]

`<DragableScrollView />` 是一个支持从底部向上进行两段/三端式拖拽的滑动视图组件。

需要注意的是，DragableScrollView 必须放置在一个 relative Container 容器中，DragableScrollView 本身不需要设置 absolute 属性。


### 示例代码

```javascript
import Thresh, {
  Widget,
  ui,
  basicWidgets
} from 'thresh-lib'
import { Colors } from '../../config'

const {
  Page,
  DragableScrollView,
  Container,
} = basicWidgets

export default class DragableScrollView Demo extends Widget <any, any> {
  $dragableScrollView

  bindDragableScrollView (ref) {
    this.$dragableScrollView = ref
  }

  handleDragPositionChange (e) {
    console.log(e)
  }

  setDragableScrollViewToInitial () {
    if (!this.$view) return
    this.$dragableScrollView.dragPositionAnimateTo('initial')
  }

  renderContent () {
    return (new Array(50)).fill(1).map((_, index) => (
      <Container backgroundColor={Colors.White}>
        <Container borderRadius={5} width={20} height={20} backgroundColor={index ? Colors.Primary : Colors.Red} margin={5} />
      </Container>
    ))
  }

  render () {
    return (
      <Page
        appBar={<AppBar title="DragableScrollView" />}
        backgroundColor={Colors.Pagebg}
      >
        <Container relative>
          <Container
            width={ui.screenWidth}
            height={ui.screenHeight - ui.appbarHeight - ui.statusBarHeight}
            backgroundColor={Colors.Primary}
          />
          <DragableScrollView
            ref={this.bindDragableScrollView.bind(this)}
            initialSize={0.5}
            minSize={0.2}
            backgroundColor={Colors.White}
            borderRadius={{
              topLeft: 10,
              topRight: 10,
            }}
            onDragPositionChange={this.handleDragPositionChange.bind(this)}
            headerView={
              <Container
                alignItems="center"
                padding={10}
                backgroundColor={Colors.White}
                onTap={this.setDragableScrollViewToInitial.bind(this)}
              >
                <Container
                  width={50}
                  height={6}
                  borderRadius={3}
                  backgroundColor={Colors.Primary}
                />
              </Container>
            }
          >
            {this.renderContent()}
          </DragableScrollView>
        </Container>
      </Page>
    )
  }
}
```


### 组件属性

> DragableScrollView 不支持大部分的通用属性，其只具备如下属性。

| 属性名             | 类型       | 说明                                                         | 默认值 |
| ------------------ | ---------- | ------------------------------------------------------------ | ------ |
| initialSize             | `number`   | 拖拽区域初始显示高度占容器高度的比值，如 0.3                                 |        |
| maxSize             | `number`   | 拖拽区域上拉的最大高度占容器高度的比值                                 | 1      |
| minSize     | `number `   | 拖拽区域下拉的最小高度占容器高度的比值<br /><br />默认与initialSize相同，此时为两段式拖拽；当设置的值比initialSize小时为三段式多拽                                                  |        |
| backgroundColor           | `number`   | 拖拽区域背景色       |        |
| borderRadius    | `number`<br /><br />`{topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number}`   | 拖拽区域圆角                     |        |
| headerView           | `Widget ` | 位于拖拽区域顶部的固定头部视图 |        |
| onScroll | `Function` | 拖拽区域内部触发滚动时的回调，同ScrollView的onScroll |        |
| onDragPositionChange | `Function` | 拖拽区域位置改变后的回调，他的回调参数存在三种值：initial / max / min |        |

###  组件方法
```[Refresh](Documentation/基础组件/Refreshmd)
/**
 * 控制拖拽区域内部滚动视图的滚动位置
 */
scrollTo (offset: number, duration?: number)

/**
 * 控制拖拽区域的显示位置
 */
dragPositionAnimateTo (positionType: 'initial' | 'max' | 'min')
```