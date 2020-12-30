# SwipeActionsView

### 概述[侧滑按钮视图]

`<SwipeActionsView />` 是一个可以向左侧滑动，显示右侧按钮的组件。

> `<SwipeActionsView />` 不能够通过嵌套方式传递子组件，而应通过 `content` 属性进行传递。

### 示例代码

```javascript
import Thresh, { basicWidgets, Util, ui } from 'thresh-js'

const { SwipeActionsView, Container, Text } = basicWidgets

export default class ListDemo extends Thresh.Widget {
  render () {
    return {
      <SwipeActionsView
      	swipeMaxDistance={ui.rpx(100)}
  			actions={[
          <Center width={ui.rpx(200)} backgroundColor={0xffff0000}>
            <Text color={0xffffffff}>点击关闭</Text>
          </Center>
        ]}
        content={
          <Container width={ui.screenWidth} padding={30} backgroundColor={0xffffffff} justifyContent="center">
            <Text>向左侧横向滑动显示按钮</Text>
          </Container>
        }
        onActionsOpen={() => {
          Util.log('SwipeActionView is opening.')
        }}
        onActionsClose={() => {
          Util.log('SwipeActionView is closing.')
        }}
      />
    }
  }
}
```



### 组件属性

| 属性名           | 类型       | 说明                                                         | 默认值 |
| ---------------- | ---------- | ------------------------------------------------------------ | ------ |
| swipeMaxDistance | `number`   | 向左侧滑动的最大距离，如不设置将会禁止滑动                   |        |
| actions          | `Widget[]` | 滑动后显示的按钮，按钮高度将会默认撑满容器高度，如不设置将会禁止滑动 |        |
| content          | `Widget`   | 组件可滑动部分的内容，必传                                   |        |
| onActionsOpen    | `Function` | 滑动打开完成后的回调                                         |        |
| onActionsClose   | `Function` | 滑动关闭完成后的回调                                         |        |



### 组件方法

```javascript
/**
	* 如果 SwipeActionsView 正在关闭状态，调用会打开
	*/
openActions()

/**
	* 如果 SwipeActionsView 正在打开状态，调用会关闭
	*/
closeActions()
```

