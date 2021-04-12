import Thresh, { basicWidgets } from 'thresh-lib'
import { Colors } from '../../config'
import Title from '../../widgets/Title'
import Box from '../../widgets/Box'

const { Page, AppBar, Switch } = basicWidgets

export default class SwitchDemo extends Thresh.Widget <any, any> {
  state = {
    value: true
  }  
  render () {
    return (
      <Page
        backgroundColor={Colors.Pagebg}
        appBar={
          <AppBar title="Switch 开关组件" />
        }
      >
        <Title title={this.state.value ? '当前开关打开' : '当前开关关闭'} />
        <Box>
          <Switch value={this.state.value}  activeColor={0xFFFA871E} onChange={({ value }) => { this.setState({ value }) }} />
        </Box>
      </Page>
    )
  }
}
