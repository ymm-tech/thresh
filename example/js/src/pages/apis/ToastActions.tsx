import Thresh, { basicWidgets, ui } from 'thresh-lib'
import { Colors } from '../../config'
import Title from '../../widgets/Title'
import Box from '../../widgets/Box'

const {
  Page,
  AppBar,
  Container,
  Button,
  Text,
  Icon
} = basicWidgets

function buttonStyles () {
  return {
    width: 200,
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.Primary
  }
}

export default class ToastActions extends Thresh.Widget <any, any> {
  showAutoHideToast () {
    Thresh.showToast(
      <Container row padding={ui.rpx(14)} borderRadius={ui.rpx(8)} justifyContent="center" alignItems="center" backgroundColor={0x80000000}>
        <Icon type="info_outline" size={18} color={Colors.White} margin={{ right: 10 }} />
        <Text color={Colors.White}>这是一个自定义 toast</Text>
      </Container>
    )
  }

  render () {
    return (
      <Page
      backgroundColor={Colors.Pagebg}
        appBar={
          <AppBar title="提示框操作" />
        }
      >
        <Title title="显示 3s 后自动消失提示框" />
        <Box>
          <Button {...buttonStyles()} onTap={() => { this.showAutoHideToast() }}>
            <Text color={Colors.White}>显示 3s 后自动消失提示框</Text>
          </Button>
        </Box>

        <Title title="更多使用方式" />
        <Box>
          <Text>你可以通过设置 Thresh.showToast() 的配置项，实现不会自动消失、通过代码控制消失的 toast.</Text>
        </Box>
      </Page>
    )
  }
}