import Thresh, { basicWidgets } from 'thresh-lib'
import { Colors } from '../../config'
import Title from '../../widgets/Title'
import Box from '../../widgets/Box'

const { Page, AppBar, Radio, Text } = basicWidgets

export default class RadioDemo extends Thresh.Widget <any, any> {
  state = {
    value: void 0
  }

  radioList = [ 'apple', 'banana', 'orange', 'pear', 'mango' ]
  
  render () {
    return (
      <Page
        backgroundColor={Colors.Pagebg}
        appBar={
          <AppBar title="Radio 单选框组件" />
        }
      >
        <Title title={this.state.value ? ('当前选中: ' + this.state.value) : '当前未选中'} />
        <Box>
          {this.radioList.map(item => (
            <Radio height={30} value={item} groupValue={this.state.value} activeColor={Colors.Primary} onChange={({ value }) => { this.setState({ value }) }}>
              <Text>{item}</Text>
            </Radio>
          ))}
        </Box>
      </Page>
    )
  }
}
