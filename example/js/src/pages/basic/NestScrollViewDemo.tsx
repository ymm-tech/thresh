import Thresh, {
  Widget,
  ui,
  basicWidgets
} from 'thresh-lib'
import Box from '../../widgets/Box'
import Title from '../../widgets/Title'
import { Colors } from '../../config'
import { Image } from 'thresh-lib/src/core/basicWidget'
import Center from '../../widgets/Center'

const {
  Page,
  AppBar,
  NestScrollView,
  Container,
  Text,
} = basicWidgets

export default class NestScrollViewDemo extends Widget <any, any> {

  renderContent () {
    return (new Array(20)).fill(1).map(() => (
      <Container borderRadius={5} width={20} height={20} backgroundColor={Colors.Primary} margin={5} />
    ))
  }

  render () {
    return (
      <Page>
        <NestScrollView
          appBar={<AppBar title="NestScrollView 组件" titleColor={Colors.White} backgroundColor={Colors.Primary} />}
          offset={ui.screenHeight - 100}
          backgroundView={
            <Center width={ui.screenWidth} height={ui.screenHeight} backgroundColor={Colors.Primary}>
              <Text color={Colors.White}>向上拖拽底部视图</Text>
            </Center>
          }
        >
          <Container width={ui.screenWidth}>
            <Container
              margin={{top: ui.rpx(20), bottom: ui.rpx(20), left: (ui.screenWidth - ui.rpx(100)) / 2}}
              width={ui.rpx(100)}
              height={ui.rpx(10)}
              borderRadius={ui.rpx(5)}
              backgroundColor={Colors.White}
            />
            <Image width={ui.screenWidth} src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2438981516,3561412782&fm=26&gp=0.jpg" />
          </Container>
        </NestScrollView>
      </Page>
    )
  }
}
