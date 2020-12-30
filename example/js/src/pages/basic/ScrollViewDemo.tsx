import Thresh, {
  Widget,
  ui,
  basicWidgets
} from 'thresh-lib'
import Box from '../../widgets/Box'
import Title from '../../widgets/Title'
import { Colors } from '../../config'

const {
  Page,
  AppBar,
  ScrollView,
  Container,
  Text,
} = basicWidgets

export default class ScrollViewDemo extends Widget <any, any> {

  renderContent () {
    return (new Array(20)).fill(1).map(() => (
      <Container borderRadius={5} width={20} height={20} backgroundColor={Colors.Primary} margin={5} />
    ))
  }

  render () {
    return (
      <Page
        appBar={<AppBar title="ScrollView 滚动组件" />}
        backgroundColor={Colors.Pagebg}
      >
        <Title title="竖向滚动" />
        <Box contentWidth={30}>
          <Container width={30} height={ui.screenHeight / 3}>
            <ScrollView>
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
