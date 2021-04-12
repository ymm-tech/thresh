import Thresh, {
Widget,
ui,
basicWidgets,
Util
} from 'thresh-lib'
import Box from '../../widgets/Box'
import Title from '../../widgets/Title'
import { Colors } from '../../config'

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
              <Picker height={150} itemHeight={45}  onChange={(value) => {Util.log(value)}} backgroundColor={Colors.Primary}>
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
