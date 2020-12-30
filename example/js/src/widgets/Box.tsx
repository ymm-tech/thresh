import Thresh, { ui, basicWidgets } from 'thresh-lib'
import { Colors } from '../config'

const MARGIN = 10
const { Container } = basicWidgets

interface IBox {
  contentWidth?: number,
  onTap?: Function,
  children?: any
}

export default class Box extends Thresh.Widget <IBox, any> {
  static get width(): number { return ui.screenWidth - 2 * MARGIN } 

  render () {
    return (
      <Container
        margin={{ top: MARGIN/2, bottom: MARGIN/2, left: MARGIN, right: MARGIN }}
        boxShadow={{ color: 0x20649ef4, offsetX: 3, offsetY: 3, blur: 5 }}
        borderRadius={5}
        onTap={this.props.onTap && this.props.onTap.bind(this)}
      >
        <Container
          width={this.props.contentWidth ? this.props.contentWidth + 40 : Box.width}
          backgroundColor={Colors.White}
          borderRadius={5}
          padding={20}
        >
          {this.props.children}
        </Container>
      </Container>
    )
  } 
}
