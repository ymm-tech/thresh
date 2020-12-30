import Thresh, {
  Widget,
  ui,
  basicWidgets
} from 'thresh-lib'
import Box from '../../widgets/Box'

const {
  Page,
  AppBar,
  ScrollView,
  Text,
  Radio,
  Checkbox,
  Button
} = basicWidgets

export default class FormExamples extends Widget <any, any> {
  state = {
    radioSelected: ''
  }

  titleMargin = { bottom: 10 }

  radioList = [
    { label: 'Radio 1', value: '1' },
    { label: 'Radio 2', value: '2' },
    { label: 'Radio 3', value: '3' }
  ]

  checkboxList = [
    { label: 'Checkbox 1', value: false },
    { label: 'Checkbox 2', value: false },
    { label: 'Checkbox 3', value: false },
  ]

  render () {
    return (
      <Page
        appBar={<AppBar title="表单组件示例页面" />}
      >
        <ScrollView>
          <Box>
            <Text margin={this.titleMargin}>单选框组件 Radio</Text>
            {
              this.radioList.map(({ label, value }) => (
                <Radio
                  height={ui.rpx(60)}
                  value={value}
                  groupValue={this.state.radioSelected}
                  activeColor={0xffff5b00}
                  onChange={({ value }) => {
                    this.setState({
                      radioSelected: value
                    })
                  }}
                >
                  <Text>{label}</Text>
                </Radio>
              ))
            }
          </Box>

          <Box>
            <Text margin={this.titleMargin}>多选框组件 Checkbox</Text>
            {
              this.checkboxList.map(item => (
                <Checkbox
                  height={ui.rpx(60)}
                  value={item.value}
                  activeColor={0xffff5b00}
                  onChange={({ value }) => {
                    item.value = value
                    this.setState()
                  }}
                >
                  <Text>{item.label}</Text>
                </Checkbox>
              ))
            }
          </Box>
        </ScrollView>
      </Page>
    )
  }
}
