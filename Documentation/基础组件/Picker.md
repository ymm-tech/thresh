# Picker
### 概述【选择器组件】

### 示例代码
```javaScript
import Thresh, {
Widget,
ui,
basicWidgets
} from 'thresh-lib'
import Box from '../../widgets/Box'
import Title from '../../widgets/Title'
import { Colors } from '../../config'
import Util from 'thresh-lib/src/shared/Util'

const {
Page,
AppBar,
ScrollView,
Container,
Text,
Picker,
Button
} = basicWidgets

export default class PickerDemo extends Widget <any, any> {
  $picker

  bindPicker (ref) {
    this.$picker = ref
  }

  buttonStyles = {
    width: 150,
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.Primary
  }

  render () {
    return (
      <Page
        appBar={<AppBar title="Picker 选择组件" />}
        backgroundColor={Colors.Pagebg}
      >
        <ScrollView>
          <Box>
            <Title title="无默认值时，默认定格在第一个选项" />
            <Container width={Box.width} height={150}>
              <Picker height={150} itemHeight={45}  onChange={(value) => {Util.log(value)}}>
                <Text size={20}>香蕉</Text>
                <Text size={20}>苹果</Text>
                <Text size={20}>梨子</Text>
              </Picker>
            </Container>
          </Box>
          <Box>
            <Title title="默认值：梨子" />
            <Container width={Box.width} height={200}>
              <Picker value={2} height={200} itemHeight={45}  onChange={(value) => {Util.log(value)}} backgroundColor={Colors.Primary}>
                <Text size={20}>香蕉</Text>
                <Text size={20}>苹果</Text>
                <Text size={20}>梨子</Text>
                <Text size={20}>西瓜</Text>
                <Text size={20}>芒果</Text>
              </Picker>
            </Container>
          </Box>
          <Box>
          <Title title="滚动到指定值" />
          <Container width={Box.width} height={250}>
            <Picker ref={this.bindPicker.bind(this)}  value={6} height={200} itemHeight={45}  onChange={(value) => {Util.log(value)}} backgroundColor={Colors.Primary}>
              <Text size={20}>香蕉</Text>
              <Text size={20}>苹果</Text>
              <Text size={20}>梨子</Text>
              <Text size={20}>西瓜</Text>
              <Text size={20}>芒果</Text>
              <Text size={20}>葡萄</Text>
              <Text size={20}>哈密瓜</Text>
            </Picker>
          </Container>
          <Container
            alignContent='center'
           >
            <Button {...this.buttonStyles} onTap={() => { this.$picker.animateTo(0,500) }}>
              <Text color={Colors.White}>点击滚动到香蕉</Text>
            </Button>
          </Container>
        </Box>
        </ScrollView>
      </Page>
    )
  }
}

```

### 组件属性
|属性名|类型|说明|默认值
|-|-|-|-|
|height|`number`|容器高度|无默认值，必传|
|itemHeight|`number`|子项高度|无默认值，必传|
|value|`number`|初始的子项索引值，注意该值只对首次渲染生效。||
|looping|`boolean`|是否无线循环|`false`
|backgroundColor|`number`|背景颜色|`0xFFD2D4DB`|
|onChange|`Function`|值改变回调函数，具有 1 个参数。参数具有 value 属性，为当前选中子项的索引值。需要注意的是，页面上始终会显示最新状态，因此不需要再次调用 setState()。如需修改选中的子项，使用下方组件方法会更加高效||

### 组件方法
```javaScript
  /**
   * @description: 跳转到指定项（无动画）
   * @param {number} index 指定向索引
   */
  jumpTo(index:number)

  /**
   * @description: 滚动到指定项(线性动画)
   * @param {number} index 子项索引
   * @param {number} duration 持续时间（ms），默认200ms
   */
  animateTo(index:number,duration:number = 200)
```



### tips
问：为什么动态设置子项却没有立即同步更新，而是需要滑动才会更新呢？
答：此为flutter原生问题，目前解决的办法是给每个子项设置一个唯一key。