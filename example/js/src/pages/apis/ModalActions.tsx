import Thresh, { basicWidgets, ui } from 'thresh-lib'
import { Colors } from '../../config'
import Title from '../../widgets/Title'
import Box from '../../widgets/Box'

const {
  Page,
  AppBar,
  Container,
  Button,
  Text
} = basicWidgets

function buttonStyles () {
  return {
    width: 200,
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.Primary
  }
}

export default class ModalActions extends Thresh.Widget <any, any> {
  showModalScrollView (popup) {
    Thresh.showModal(
      <ModalExample popup={popup} />,
      { popup }
    )
  }

  render () {
    return (
      <Page
      backgroundColor={0x0000000}
        appBar={
          <AppBar title="模态页面操作" />
        }
      >
        <Title title="显示普通模态页面" />
        <Box>
          <Button {...buttonStyles()} onTap={() => { this.showModalScrollView(false) }}>
            <Text color={Colors.White}>显示普通模态页面</Text>
          </Button>
        </Box>

        <Title title="显示底部滑入模态页面" />
        <Box>
          <Button {...buttonStyles()} onTap={() => { this.showModalScrollView(true) }}>
            <Text color={Colors.White}>显示底部滑入模态页面</Text>
          </Button>
        </Box>

        <Title title="更多使用方式" />
        <Box>
          <Text>你可以通过自定义 Modal 页面的结构与样式，实现对话框、确认框等存在交互的复杂模态组件。</Text>
        </Box>
      </Page>
    )
  }
}

class ModalExample extends Thresh.Widget <any> {
  state = {
    counter: 10
  }

  widgetDidMount () {
    const t = setInterval(() => {
      if (this.state.counter === 0) {
        clearInterval(t)
        return
      }
      this.state.counter--
      this.setState()
    }, 1000)
  }

  render () {
    return (
      <Container>
        <Container height={ui.screenHeight * 0.8} width={ui.screenWidth} backgroundColor={this.props.popup ? 0x00000000 : 0x80000000} onTap={() => { Thresh.hideModal() }} />
        <Container height={ui.screenHeight * 0.2} width={ui.screenWidth} justifyContent="center" alignItems="center" backgroundColor={0xffffffff}>
          <Button {...buttonStyles()} onTap={() => { Thresh.hideModal() }}>
            <Text color={Colors.White}>关闭模态页面 - {this.state.counter}</Text>
          </Button>
          <Text size={ui.rpx(24)} color={Colors.Lightgray} margin={{ top: 20 }}>点击透明背景部分也可以关闭模态页面</Text>
        </Container>
      </Container>
    )
  }
}
