import Thresh, { basicWidgets, ui } from 'thresh-lib'
import { Colors } from '../../config'
import Title from '../../widgets/Title'
import Box from '../../widgets/Box'

const { Page, AppBar, Container, ScrollView } = basicWidgets

export default class ContainerDemo extends Thresh.Widget <any, any> {
  widgetDidMount () {
    Thresh.pageDidShow()
  }
  render () {
    return (
      <Page
        backgroundColor={Colors.Pagebg}
        appBar={
          <AppBar title="Container 基础容器" />
        }
      >
        <ScrollView>
          <Title title="Flex 布局 1" />
          <Box>
            <Container width={Box.width} row padding={10}>
              <Container margin={5} flex={1} height={50} backgroundColor={Colors.Red} borderRadius={5} />
              <Container margin={5} flex={2} height={50} backgroundColor={Colors.Primary} borderRadius={5} />
              <Container margin={5} flex={3} height={50} backgroundColor={Colors.Primary} borderRadius={5} />
            </Container>
          </Box>

          {/* <Container row relative backgroundColor={0xffadefcb}>
            <Container absolute={{left: 40, bottom: 0}} width={50} height={20} backgroundColor={Colors.Red} borderRadius={5} />
            <Container margin={5} flex={2} height={50} backgroundColor={Colors.Primary} borderRadius={5} />
            <Container margin={5} flex={3} height={50} backgroundColor={Colors.Primary} borderRadius={5} />
          </Container> */}
          
          <Title title="Flex 布局 2" />
          <Box>
            <Container width={Box.width} row justifyContent="spaceAround" padding={10}>
              <Container margin={5} width={50} height={50} backgroundColor={Colors.Primary} borderRadius={5} />
              <Container margin={5} width={50} height={50} backgroundColor={Colors.Primary} borderRadius={5} />
              <Container margin={5} width={50} height={50} backgroundColor={Colors.Primary} borderRadius={5} />
            </Container>
          </Box>

          <Title title="Flex 布局 3" />
          <Box>
            <Container width={Box.width} height={300} justifyContent="spaceBetween" alignItems="center" padding={10}>
              <Container margin={5} width={50} height={50} backgroundColor={Colors.Primary} borderRadius={5} />
              <Container margin={5} width={50} height={50} backgroundColor={Colors.Primary} borderRadius={5} />
              <Container margin={5} width={50} height={50} backgroundColor={Colors.Primary} borderRadius={5} />
            </Container>
          </Box>
        </ScrollView>
      </Page>
    )
  }
}
