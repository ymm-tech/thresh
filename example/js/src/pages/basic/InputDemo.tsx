import Thresh, { basicWidgets, Util } from 'thresh-lib'
import { Colors } from '../../config'
import Title from '../../widgets/Title'
import Box from '../../widgets/Box'
import { Input } from 'thresh-lib/src/core/basicWidget'

const { Page, AppBar, Container } = basicWidgets

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
  $input: Input

  state = {
    value: ''
  }

  widgetDidMount () {
    setTimeout(() => {
      this.$input.focus()

      setTimeout(() => {
        this.$input.blur()
      }, 3000)
    }, 3000)
  }
  
  render () {
    return (
      <Container>
        <Title title={this.state.value ? (`当前输入内容${this.state.value.length}: ` + this.state.value) : '当前未输入内容'} />
        <Box>
          <Input
            ref={e => this.$input = e as Input}
            padding={10}
            backgroundColor={Colors.Pagebg}
            value={this.state.value}
            placeholder="请输入内容"
            // textStyle={{
            //   size: 10
            // }}
            // maxLength={10}
            // maxLines={5}
            returnActionType="done"
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
