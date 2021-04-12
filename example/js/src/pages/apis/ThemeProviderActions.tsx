import Thresh, {
  Widget,
  basicWidgets,
  ui,
  Util,
} from 'thresh-lib'
import { Colors } from '../../config'

const {
  Page,
  AppBar,
  Container,
  Text,
} = basicWidgets

export default class ThemeProviderActions extends Widget <any, any> {
  state = {
    themeKey: 'base_common_btn_main'
  }

  widgetDidMount () {
    setTimeout(() => {
      this.setState({
        themeKey: 'base_common_btn_border'
      })
    }, 2000)
  }

  render () {
    return (
      <Page
        appBar={<AppBar title={this.props.title || 'Thresh Provider'} />}
        backgroundColor={Colors.Pagebg}
      >
        <Container margin={20}>
          <Text themeKey={this.state.themeKey}>12345</Text>

          <Text themeKey="richText" />
        </Container>
      </Page>
    )
  }
}


