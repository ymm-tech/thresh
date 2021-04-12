import Thresh, { basicWidgets, Util } from 'thresh-lib'
import { Colors } from '../../config'
import Title from '../../widgets/Title'
import Box from '../../widgets/Box'

const { Page, AppBar, Container, Input } = basicWidgets

export default class InputDemo extends Thresh.Widget <any, any> {
  render () {
    return (
      <Page
        backgroundColor={Colors.Pagebg}
        appBar={
          <AppBar title="Input 输入框组件" />
        }
      >
        <InputDemoBody />
      </Page>
    )
  }
}

class InputDemoBody extends Thresh.Widget {
  state = {
    value: ''
  }
  
  render () {
    return (
      <Container>
        <Title title={this.state.value ? (`当前输入内容${this.state.value.length}: ` + this.state.value) : '当前未输入内容'} />
        <Box>
          <Input padding={10} backgroundColor={Colors.Pagebg} value={this.state.value} placeholder="请输入内容" maxLength={10}
            onSubmitted={({ value }) =>{
              Util.log('onSubmitted', value)
            }}
            onFocus={({ value }) =>{
              Util.log('onFocus', value)
            }}
            onBlur={({ value }) =>{
              Util.log('onBlur', value)
            }}
            onChange={({ value }) => {
              Util.log('onChange', value)
              this.setState({ value })
            }}
          />
        </Box>
      </Container>
    )
  }
}
