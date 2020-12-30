import Thresh, { basicWidgets } from 'thresh-lib'
import { Colors } from '../../config'
import Title from '../../widgets/Title'
import Box from '../../widgets/Box'

const { Page, AppBar, Container, Button, Text } = basicWidgets

export default class ButtonDemo extends Thresh.Widget <any, any> {
  state = {
    count: 0
  }
  buttonStyles = {
    width: 100,
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.Primary
  }
  render () {
    return (
      <Page
        backgroundColor={Colors.Pagebg}
        appBar={
          <AppBar title="Button 按钮组件" />
        }
      >
        <Title title={'点击按钮计数: ' + this.state.count} />
        <Box>
          <Container width={Box.width} row justifyContent="spaceAround">
            <Button {...this.buttonStyles} onTap={() => { this.setState({count: this.state.count-1}) }}>
              <Text color={Colors.White}>点击-1</Text>
            </Button>
            <Button {...this.buttonStyles} onTap={() => { this.setState({count: this.state.count+1}) }}>
              <Text color={Colors.White}>点击+1</Text>
            </Button>
          </Container>
        </Box>
      </Page>
    )
  }
}
