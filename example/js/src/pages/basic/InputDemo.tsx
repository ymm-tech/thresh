import Thresh, { basicWidgets } from 'thresh-lib'
import { Colors } from '../../config'
import Title from '../../widgets/Title'
import Box from '../../widgets/Box'

const { Page, AppBar, Input } = basicWidgets

export default class InputDemo extends Thresh.Widget <any, any> {
  state = {
    value: ''
  }
  
  render () {
    return (
      <Page
        backgroundColor={Colors.Pagebg}
        appBar={
          <AppBar title="Input 输入框组件" />
        }
      >
        <Title title={this.state.value ? ('当前输入内容: ' + this.state.value) : '当前未输入内容'} />
        <Box>
          <Input value={this.state.value} maxLines={5} placeholder="请输入内容" onChange={({ value }) => { this.setState({ value }) }} />
        </Box>
      </Page>
    )
  }
}
