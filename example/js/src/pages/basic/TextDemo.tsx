import Thresh, { basicWidgets } from 'thresh-lib'
import { Colors } from '../../config'
import Title from '../../widgets/Title'
import Box from '../../widgets/Box'
import { Container } from 'thresh-lib/src/core/basicWidget'

const { Page, AppBar, ScrollView, Text } = basicWidgets

export default class TextDemo extends Thresh.Widget <any, any> {
  widgetDidMount () {
    Thresh.pageDidShow()
  }
  render () {
    return (
      <Page
        backgroundColor={Colors.Pagebg}
        appBar={
          <AppBar title="Text 文本组件" />
        }
      >
        <ScrollView>
          <Title title="普通文本" />
          <Box>
            <Text color={Colors.Primary} size={20} weight="bolder">这是一段普通文本，可以设置文本颜色和字号、字重。</Text>
          </Box>
          
          <Title title="富文本" />
          <Box>
            <Text
              richText={[
                { text: '这是富文本的红色文字，', color: 0xffff0000 },
                { text: '这是富文本的绿色加粗文字，', color: 0xff00ff00, weight: 'bolder' },
                { text: '这是富文本的蓝色加粗加大文字。', color: 0xff0000ff, weight: 'bolder', size: 20 },
              ]}
            >
              这是一段富文本，
            </Text>
          </Box>

          <Box>
            <Container height={50} border={{ color: Colors.Primary }} justifyContent="center" alignItems="center">
            <Text
            border={{ color: Colors.Red }}
              // backgroundColor={Colors.Primary}
              // padding={5}
            >
              HFJKHDSJFHJSDHFJKD
            </Text>
            </Container>
          </Box>
        </ScrollView>
      </Page>
    )
  }
}
