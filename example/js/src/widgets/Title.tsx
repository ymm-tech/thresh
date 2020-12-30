import Thresh, { basicWidgets } from 'thresh-lib'
import { Colors } from '../config'

interface ITitle {
  title: string
}

const { Text } = basicWidgets

export default class Title extends Thresh.Widget <ITitle, any> {
  render () {
    return (
      <Text
        margin={{ left: 10, top: 10, bottom: 5 }}
        padding={{ left: 10 }}
        border={{ width: 5, color: Colors.Primary, side: [ 'left' ]}}
        color={Colors.Primary}
      >
        {this.props.title}
      </Text>
    )
  }
}

