import Thresh, {
  Widget,
  ui,
  basicWidgets,
  Util
} from 'thresh-lib'
import { Colors } from '../../config'
import { Image } from 'thresh-lib/src/core/basicWidget'
import Center from '../../widgets/Center'

const {
  Page,
  AppBar,
  NestScrollView,
  Container,
  StackView,
  Text,
  Button
} = basicWidgets

export default class NestScrollViewDemo extends Widget <any, any> {
  state = {
    offset: ui.screenHeight - 200,
  }

  $nestScrollView

  bindNestScrollView (ref) {
    this.$nestScrollView = ref
  }

  buttonStyles = {
    width: 120,
    height: 50,
    borderRadius: 5,
    backgroundColor: Colors.Primary
  }

  renderContent () {
    return (new Array(20)).fill(1).map(() => (
      <Container borderRadius={5} width={20} height={20} backgroundColor={Colors.Primary} margin={5} />
    ))
  }

  render () {
    return (
      <Page>
        <NestScrollView
          ref={this.bindNestScrollView.bind(this)}
          appBar={<AppBar title="NestScrollView 组件" titleColor={Colors.White} elevationValue={5} backgroundColor={Colors.Primary} />}
          backgroundAppBar={<AppBar titleColor={Colors.White} backgroundColor={Colors.Primary} />}
          offset={this.state.offset}
          initBorderRadius={20}
          backgroundView={
            <Center width={ui.screenWidth} height={ui.screenHeight} backgroundColor={Colors.Primary}>
              <Text color={Colors.White}>向上拖拽底部视图</Text>
            </Center>
          }
          animatedHeaderView={
            <Button {...this.buttonStyles} backgroundColor={Colors.White} margin={{ left: 20 }} onTap={() => { this.$nestScrollView.open() }}>
              <Text color={Colors.Primary}>点击上滑</Text>
            </Button>
          }
          animatedBottomView={
            <StackView>
              <Button {...this.buttonStyles} margin={{bottom: ui.bottomBarHeight, left: 20}} onTap={() => { this.$nestScrollView.close() }}>
                <Text color={Colors.White}>点击下滑 1</Text>
              </Button>
              <Button {...this.buttonStyles} absolute={{bottom: ui.bottomBarHeight, right: 20}} onTap={() => { this.$nestScrollView.close() }}>
                <Text color={Colors.White}>点击下滑 2</Text>
              </Button>
            </StackView>
          }
          willDragStatusChange={({currentStatusIsInit, nextStatusIsInit}) => {
            Util.log({ currentStatusIsInit, nextStatusIsInit })
          }}
        >
          <Container
            backgroundColor={Colors.Primary}
          >
            <Container
              margin={{top: ui.rpx(20), bottom: ui.rpx(20), left: (ui.screenWidth - ui.rpx(100)) / 2}}
              width={ui.rpx(100)}
              height={ui.rpx(10)}
              borderRadius={ui.rpx(5)}
              backgroundColor={Colors.White}
            />
            <Image
              height={ui.screenHeight / 2}
              width={ui.screenWidth}
              src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2438981516,3561412782&fm=26&gp=0.jpg"
              fit="cover"
              onTap={() => {
                Util.log('image tapped')
              }}
            />
          </Container>
        </NestScrollView>
      </Page>
    )
  }
}
