# AppBar

### 概述[导航栏]

`<AppBar />` 组件是当前页面的导航栏。为了保证渲染正确，`<AppBar />` 只应该在 `<Page />` 组件中作为 `appBar` 属性使用。

> **注意：**
>
> AppBar 与其他基础组件的区别在于：
>
> 1. 不能够脱离`<Page />`单独使用；
> 2. 无法使用其他基础组件通用的属性。



### 示例代码

```javascript
import Thresh, { basicWidgets } from 'thresh-js'

const { Page, Container, Text, AppBar } = basicWidgets

export default class Homepage extends Thresh.Widget {
  render () {
    return {
      <Page
      	appBar={
      		<AppBar title="Homepage" />
    		}
      >
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

| 属性名            | 类型                                                         | 说明                                                   | 默认值       |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------ | ------------ |
| title             | `string`                                                     | 标题                                                   |              |
| titleColor        | `number`                                                     | 标题色值                                               | `0xff000000` |
| titleSize         | `number`                                                     | 标题字号                                               | `14`         |
| titleWeight       | `string`<br /><br />- 'normal'<br />- 'light'<br />- 'bold'<br />- 'bolder' | 标题字重                                               | `'normal'`   |
| titleView         | `Widget`                                                     | 标题视图                                               |              |
| centerTitle       | `boolean`                                                    | 标题是否居中                                           | `true`       |
| elevation         | `boolean`                                                    | 是否显示导航栏底边阴影                                 | `false`      |
| showLeadingButton | `boolean`                                                    | 是否显示左侧默认返回按钮                               | `true`       |
| leading           | `Widget`                                                     | 左侧按钮<br /><br />使用该属性后将会覆盖默认的返回按钮 |              |
| buttons           | `Widget[]`                                                   | 右侧按钮组                                             |              |
| statusTextLight   | `boolean`                                                    | 状态栏文字颜色是否切换为亮色                           | `false`      |
| backgroundColor   | `number`                                                     | 背景色                                                 | `0xffffffff` |



### 组件方法

```javascript
/**
	* 通过此方法可以更快速的更新当前标题，而不用通过 setState() 触发更新
	* @param {number} title 需要显示的标题
	* 注意：当使用 titleView 时，updateTitle 方法不生效
	*/
updateTitle(title: string)
```