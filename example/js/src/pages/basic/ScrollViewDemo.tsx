import Thresh, {
  Widget,
  ui,
  basicWidgets
} from 'thresh-lib'
import Box from '../../widgets/Box'
import Title from '../../widgets/Title'
import { Colors } from '../../config'
import { NativeView } from 'thresh-lib/src/core/basicWidget'

const {
  Page,
  AppBar,
  ScrollView,
  Container,
  Text,
} = basicWidgets

export default class ScrollViewDemo extends Widget <any, any> {

  renderContent () {
    return (new Array(20)).fill(1).map((_, index) => (
      <NativeView
        gesture={['HorizontalDrag']}
        type={"thresh/native_text_view"} params={{ "text": "我是NativeTextView，测试" }} width={ui.screenWidth} height={ui.rpx(300)} backgroundColor={0xffFFFBF9} />
    ))
  }

  $ref

  render () {
    return (
      <Page
        appBar={<AppBar title="ScrollView 滚动组件" />}
        backgroundColor={Colors.Pagebg}
      >
        <Title title="竖向滚动" />
        <Box contentWidth={300}>
          <Container width={300} height={ui.screenHeight / 3}>
            <ScrollView ref={e => this.$ref = e}>
              {this.renderContent()}
            </ScrollView>
          </Container>
        </Box>

        <Title title="横向滚动" />
        <Box>
          <Container width={Box.width} height={30}>
            <ScrollView direction="horizontal">
              <Container row>
                {this.renderContent()}
              </Container>
            </ScrollView>
          </Container>
        </Box>
      </Page>
    )
  }
}
