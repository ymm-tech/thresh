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

export default class HomePage extends Widget<any, any> {
  widgetDidMount() {
    Thresh.pageDidShow()
  }
  tapListItem(pageName) {
    Thresh.pushPage(pageName)
  }
  render() {
    return (
      <Page
        appBar={<AppBar title={this.props.title || 'Thresh Demos'} backgroundColor={Colors.White} elevation />}
        backgroundColor={Colors.Pagebg}
      >
        <ScrollView>
          <Title title="基础组件" />
          {widgetList.map(({ title, desc, pageName }) => (
            <Box onTap={this.tapListItem.bind(this, pageName)}>
              <Container
                row
                width={Box.width}
                alignItems="center"
              >
                <Container flex={1}>
                  <Text color={Colors.Darkgray}>{title}</Text>
                  <Text color={Colors.Lightgray} size={12} margin={{ top: 5 }}>{desc}</Text>
                </Container>
                <Center width={30} height={30} borderRadius={15} backgroundColor={Colors.Primary}>
                  <Icon type="arrow_forward_ios" color={Colors.White} />
                </Center>
              </Container>
            </Box>
          ))}

          <Title title="APIS" />
          {apiList.map(({ title, desc, pageName }) => (
            <Box onTap={this.tapListItem.bind(this, pageName)}>
              <Container
                row
                width={Box.width}
                alignItems="center"
              >
                <Container flex={1}>
                  <Text color={Colors.Darkgray}>{title}</Text>
                  <Text color={Colors.Lightgray} size={12} margin={{ top: 5 }}>{desc}</Text>
                </Container>
                <Center width={30} height={30} borderRadius={15} backgroundColor={Colors.Primary}>
                  <Icon type="arrow_forward_ios" color={Colors.White} />
                </Center>
              </Container>
            </Box>
          ))}

          <Container height={ui.bottomBarHeight} />
        </ScrollView>
      </Page>
    )
  }
}


