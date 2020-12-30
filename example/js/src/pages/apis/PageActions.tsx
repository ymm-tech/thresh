import Thresh, { basicWidgets } from 'thresh-lib'
import { Colors } from '../../config'
import Title from '../../widgets/Title'
import Box from '../../widgets/Box'

const {
  Page,
  AppBar,
  Button,
  Text
} = basicWidgets

function buttonStyles () {
  return {
    width: 100,
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.Primary
  }
}

export default class PageActions extends Thresh.Widget <any, any> {
  render () {
    return (
      <Page
      backgroundColor={Colors.Pagebg}
        appBar={
          <AppBar title="页面操作 - 主页面" />
        }
      >
        <Title title="点击按钮显示下级页面" />
        <Box>
          <Button {...buttonStyles()} onTap={() => { Thresh.pushPage('api-page-actions-next') }}>
            <Text color={Colors.White}>下级页面</Text>
          </Button>
        </Box>

        <Title title="点击按钮替换当前页面" />
        <Box>
          <Button {...buttonStyles()} onTap={() => { Thresh.replacePage('api-page-actions-replace') }}>
            <Text color={Colors.White}>替换页面</Text>
          </Button>
        </Box>

        <Title title="点击按钮返回上级页面" />
        <Box>
          <Button {...buttonStyles()} onTap={() => { Thresh.popPage() }}>
            <Text color={Colors.White}>返回上级</Text>
          </Button>
        </Box>
      </Page>
    )
  }
}

export class NextPage extends Thresh.Widget <any, any> {
  render () {
    return (
      <Page
        backgroundColor={Colors.Pagebg}
        appBar={
          <AppBar title="页面操作 - 次级页面" />
        }
      >
        <Title title="点击按钮返回上级页面" />
        <Box>
          <Button {...buttonStyles()} onTap={() => { Thresh.popPage() }}>
            <Text color={Colors.White}>返回上级</Text>
          </Button>
        </Box>
      </Page>
    )
  }
}

export class ReplacePage extends Thresh.Widget <any, any> {
  render () {
    return (
      <Page
        backgroundColor={Colors.Pagebg}
        appBar={
          <AppBar title="页面操作 - 替换页面" />
        }
      >
        <Title title="点击按钮替换回页面操作主页面" />
        <Box>
          <Button {...buttonStyles()} onTap={() => { Thresh.replacePage('api-page-actions') }}>
            <Text color={Colors.White}>回到原页面</Text>
          </Button>
        </Box>
        <Title title="点击按钮返回上级页面 - 首页" />
        <Box>
          <Button {...buttonStyles()} onTap={() => { Thresh.popPage() }}>
            <Text color={Colors.White}>返回上级</Text>
          </Button>
        </Box>
      </Page>
    )
  }
}
