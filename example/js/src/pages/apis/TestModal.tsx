import Thresh, { Widget, basicWidgets, ui, Util } from 'thresh-lib'
import { Colors } from '../../config'

const { rpx } = ui
const { Container, Text, Image, SwiperView, Button, Input, ScrollView } = basicWidgets

export interface ModalAbnormalInfoProps {
  data?: object
  onConfirm?: (res: any) => void
}

const iconTelephone = 'https://image.ymm56.com/ymmfile/operation-biz/9d3b52e6-dec9-479a-a05c-54325d56503b.png'
const iconEnvelope = 'https://image.ymm56.com/ymmfile/operation-biz/a01801d2-fd87-4576-9aa1-70b4b98ece3f.png'

export default class ModalAbnormalInfo extends Widget<ModalAbnormalInfoProps, any> {
  state = {
    heightScale: 0.8,
    formData: {
      name: '',
      phone: ''
    },
    imgMap: [
      {
        url: 'https://img1.baidu.com/it/u=1727065879,3497399731&fm=26&fmt=auto&gp=0.jpg',
        act: true
      },
      {
        url:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F1%2F580088dda686c.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627634452&t=0ddc482f8af95a7befbb8c58ca62464b',
        act: false
      },
      {
        url:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fe%2F53a9158adaa12.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627634452&t=f79c6cdc439e65e34595a81ae3cd1a77',
        act: false
      }
    ]
  }

  renderHeaderView = () => {
    return (
      <Container
        padding={{
          left: rpx(28),
          right: rpx(28)
        }}
      >
        <Container padding={{ left: rpx(20), right: rpx(20) }}>
          <Text color={Colors.Primary} weight="bold" size={rpx(32)}>
            专线发起问题件异常需您审核
          </Text>
          <Text color={Colors.Primary} size={rpx(24)} margin={{ top: rpx(8) }}>
            此问题件未确认前，此运单无法发运、自提或送货上门
          </Text>
        </Container>

        <Container
          row
          width={ui.screenWidth - rpx(56)}
          padding={{
            top: rpx(26),
            bottom: rpx(22),
            left: rpx(20),
            right: rpx(20)
          }}
          alignItems="center"
          border={{ width: rpx(1), color: 0xffe6e6e6, side: ['bottom'] }}
        >
          <Text color={Colors.Primary} size={rpx(24)}>
            问题原因：
          </Text>
          <Text color={Colors.Primary} weight="bold" size={rpx(32)}>
            包装不符
          </Text>
        </Container>

        <Container row padding={{ top: rpx(26), bottom: rpx(22) }}>
          <Container
            flex={1}
            alignItems="center"
            onTap={() => {
              this.onCallDriver(15656693716)
            }}
          >
            <Image src={iconTelephone} width={rpx(48)} height={rpx(48)} />
            <Text color={Colors.Primary} size={rpx(20)}>
              联系TA
            </Text>
          </Container>
          <Container flex={1} alignItems="center">
            <Image src={iconEnvelope} width={rpx(48)} height={rpx(48)} />
            <Text color={Colors.Primary} size={rpx(20)}>
              申诉
            </Text>
          </Container>
        </Container>
      </Container>
    )
  }

  // 描述
  renderDescriptionView = () => {
    return (
      <Container
        row
        padding={{
          top: rpx(24),
          bottom: rpx(22),
          left: rpx(48),
          right: rpx(48)
        }}
      >
        <Text color={Colors.Primary} size={rpx(28)}>
          描述：
        </Text>
        <Text
          margin={{
            left: rpx(12)
          }}
          color={Colors.Primary}
          size={rpx(28)}
          wrap
          flex={1}
        >
          货物重量增加2吨，这里是原因原因原因； 货物重量增加2吨，这里是原因原因原因； 货物重量增加2吨。
        </Text>
      </Container>
    )
  }

  // 图片凭证
  renderPictureVoucherView = () => {
    return (
      <Container
        padding={{
          bottom: rpx(26),
          left: rpx(48),
          right: rpx(48)
        }}
      >
        <Text size={rpx(28)} color={Colors.Primary}>
          图片凭证：
        </Text>
        <SwiperView
          width={ui.screenWidth - rpx(96)}
          height={rpx(468)}
          margin={{ top: rpx(28), bottom: rpx(12) }}
          onChange={this.onChangeSwiper}
        >
          {this.state.imgMap.map((item) => {
            return (
              <Container>
                <Image src={item.url} width={ui.screenWidth - rpx(96)} height={rpx(468)} fit="cover" />
              </Container>
            )
          })}
        </SwiperView>
        <Container row justifyContent="center" width={ui.screenWidth - rpx(96)}>
          {this.state.imgMap.map((item) => {
            return (
              <Text
                height={rpx(14)}
                width={rpx(14)}
                margin={{ left: rpx(14), right: rpx(14) }}
                backgroundColor={item.act ? Colors.Primary : Colors.Primary}
                borderRadius={100}
              ></Text>
            )
          })}
        </Container>
      </Container>
    )
  }

  // 联系人
  renderCancatInfoView = () => {
    return (
      <Container
        padding={{
          left: rpx(48),
          right: rpx(48)
        }}
      >
        <Container
          row
          alignItems="center"
          padding={{
            top: rpx(20),
            bottom: rpx(20)
          }}
        >
          <Text size={rpx(28)} color={Colors.Primary}>
            收货人姓名
          </Text>
          <Input
            textStyle={{ size: rpx(28) }}
            alignItems="center"
            padding={{
              left: rpx(55),
              right: rpx(20),
              bottom: rpx(6)
            }}
            flex={1}
            value={this.state.formData.name}
            onChange={({ value }) => this.onChangeInput('name', value)}
            placeholder="必填"
            keyboardType="text"
            // onFocus={() => {
            //   this.onFocusChange(true)
            // }}
            // onBlur={() => {
            //   this.onFocusChange(true)
            // }}
          />
        </Container>

        <Container
          row
          alignItems="center"
          padding={{
            top: rpx(20),
            bottom: rpx(20)
          }}
        >
          <Text size={rpx(28)} color={Colors.Primary}>
            收货人电话
          </Text>
          <Input
            textStyle={{ size: rpx(28) }}
            alignItems="center"
            padding={{
              left: rpx(55),
              right: rpx(20)
            }}
            flex={1}
            value={this.state.formData.phone}
            onChange={({ value }) => this.onChangeInput('phone', value)}
            placeholder="必填"
            keyboardType="phone"
            // onFocus={() => {
            //   this.onFocusChange(true)
            // }}
            // onBlur={() => {
            //   this.onFocusChange(true)
            // }}
          />
        </Container>
      </Container>
    )
  }

  // 底部按钮
  renderFooterButtonView = () => {
    return (
      <Container
        backgroundColor={Colors.White}
        justifyContent="center"
        alignItems="center"
        padding={{
          left: rpx(28),
          right: rpx(28),
          top: rpx(12),
          bottom: rpx(12)
        }}
      >
        <Button backgroundColor={Colors.Primary} borderRadius={rpx(8)} height={rpx(76)} onTap={this.onKnow.bind(this)}>
          <Text color={Colors.White} weight="bold" size={rpx(32)}>
            我知道了
          </Text>
        </Button>
      </Container>
    )
  }

  onKnow = () => {
    const { onConfirm } = this.props
    onConfirm && onConfirm(true)
  }

  onChangeSwiper = (res) => {
    this.setState({
      imgMap: this.state.imgMap.map((item, index) => {
        if (res.index === index) {
          item.act = true
        } else {
          item.act = false
        }
        return item
      })
    })
  }

  // 电话联系
  onCallDriver = (telephone: any) => {}

  onChangeInput = (key, val) => {
    const { formData } = this.state
    formData[key] = val
    this.setState({ formData: formData })
  }

  // 控制弹窗的高度，让键盘将输入框顶起
  onFocusChange = (val) => {
    this.setState({ heightScale: val ? 0.5 : 0.8 })
  }

  render() {
    const { data } = this.props
    const { heightScale } = this.state

    return (
      <Container
        width={ui.screenWidth}
        height={ui.screenHeight * heightScale}
        padding={{
          top: rpx(40)
        }}
        onTap={() => {
          Util.blur()
        }}
        backgroundColor={Colors.White}
      >
        <ScrollView width={ui.screenWidth} avoidKeyboard>
          {this.renderHeaderView()}
          <Container width={ui.screenWidth} height={rpx(10)} backgroundColor={Colors.Pagebg}></Container>
          {this.renderDescriptionView()}
          {this.renderPictureVoucherView()}
          <Container width={ui.screenWidth} height={rpx(20)} backgroundColor={Colors.Pagebg}></Container>
          {this.renderCancatInfoView()}
          <Container width={ui.screenWidth} height={rpx(20)} backgroundColor={Colors.Pagebg}></Container>
          {this.renderFooterButtonView()}
          {/* <KeyboardAvoidView /> */}
        </ScrollView>
      </Container>
    )
  }
}
