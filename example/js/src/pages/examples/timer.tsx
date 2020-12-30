import Thresh, {
  Widget,
  Util,
  basicWidgets
} from 'thresh-lib'

const {
  Page,
  AppBar,
  Text
} = basicWidgets

export default class Timer extends Widget <any, any> {
  state = {
    timeoutUpdated: false,
    intervalCount: 0
  }

  timeout: string
  interval: string

  constructor (props) {
    super(props)
    this.timeout = Util.setTimeout(() => {
      this.setState({
        timeoutUpdated: true
      })
    }, 5000)
    this.interval = Util.setInterval(() => {
      if (this.state.intervalCount >= 10) {
        Util.clearTimer(this.interval)
        return
      }
      this.setState({
        intervalCount: this.state.intervalCount + 1
      })
    }, 1000)
  }

  widgetDidUnmount () {
    Util.clearTimer(this.timeout)
    Util.clearTimer(this.interval)
  }

  render () {
    return (
      <Page
        appBar={<AppBar title="Timer" />}
      >
        <TimerItem text={`普通定时器-5秒更新: ${ this.state.timeoutUpdated ? '已更新' : '未更新' }`} />
        <TimerItem text={`循环定时器-10秒停止: ${ this.state.intervalCount } 秒`} />
      </Page>
    )
  }
}

class TimerItem extends Widget <any, any> {
  render () {
    return (
      <Text margin={20}>
        {this.props.text}
      </Text>
    )
  }
}

