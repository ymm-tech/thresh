import Thresh, { basicWidgets } from 'thresh-lib'
import { Colors } from '../../config'
import Title from '../../widgets/Title'
import Box from '../../widgets/Box'

const { Page, AppBar, Checkbox, Text } = basicWidgets

export default class CheckboxDemo extends Thresh.Widget <any, any> {
  state = {
    value: []
  }

  radioList = [ 'apple', 'banana', 'orange', 'pear', 'mango' ]

  onChange (item: string, e: any) {
    const { value } = this.state
    const selected = e.value
    if (selected) value.push(item)
    else value.splice(value.indexOf(item), 1)
    this.setState()
  }
  
  render () {
    return (
      <Page
        backgroundColor={Colors.Pagebg}
        appBar={
          <AppBar title="Checkbox 多选框组件" />
        }
      >
        <Title title={this.state.value.length ? ('当前选中: ' + this.state.value.join(', ')) : '当前未选中'} />
        <Box>
          {this.radioList.map(item => (
            <Checkbox height={30} value={this.state.value.indexOf(item) > -1} activeColor={Colors.Primary} onChange={this.onChange.bind(this, item)}>
              <Text>{item}</Text>
            </Checkbox>
          ))}
        </Box>
      </Page>
    )
  }
}
