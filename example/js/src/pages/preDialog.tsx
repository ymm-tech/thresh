import Thresh, {
  Widget,
  basicWidgets,
  ui,
  Bridge,
} from 'thresh-lib'
import { Colors, widgetList, apiList } from '../config'
import Box from '../widgets/Box'
import Center from '../widgets/Center'
import Title from '../widgets/Title'

const {
  Page,
  AppBar,
  Container,
  Icon,
  Text,
  ScrollView,
} = basicWidgets

export default class PreDialog extends Widget<any, any> {
  widgetDidMount() {
    Thresh.showModal(<NavigatorDialog />)
  }
  render() {
    return (
      <Page backgroundColor={Colors.Transparent} />
    )
  }
}

class NavigatorDialog extends Widget {
  render () {
    return (
      <Container
        width={ui.screenWidth}
        height={ui.screenHeight}
        justifyContent="center"
        alignItems="center"
        backgroundColor={0x80000000}
      >
        <Container
          width={ui.screenWidth * 0.8}
          padding={20}
          borderRadius={10}
          justifyContent="center"
          alignItems="center"
          backgroundColor={Colors.White}
        >
          <Text weight="bold" margin={{ bottom: 10 }}>点击下方按钮</Text>
          <Text weight="bold" margin={{ bottom: 10 }}>选择你要进行的操作</Text>

          <Container row>
            <Container
              flex={1}
              margin={{ top: 10 }}
              padding={10}
              borderRadius={5}
              backgroundColor={Colors.Primary}
              alignItems="center"
              onTap={() => {
                Thresh.pushPage('homePage')
              }}
            >
              <Text color={Colors.White}>进入Thresh Demo首页</Text>
            </Container>
          </Container>

          <Container row>
            <Container
              flex={1}
              margin={{ top: 10 }}
              padding={10}
              borderRadius={5}
              backgroundColor={Colors.Red}
              alignItems="center"
              onTap={async () => {
                await Thresh.hideModal()
                Thresh.popPage()
              }}
            >
              <Text color={Colors.White}>关闭当前弹窗</Text>
            </Container>
          </Container>

        </Container>
      </Container>
    )
  }
}


