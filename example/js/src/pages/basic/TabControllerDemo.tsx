import Thresh, { ui, Util, Widget } from "thresh-lib";
import { AppBar, Container, Page, TabView, Text } from "thresh-lib/src/core/basicWidget";
import { Colors } from "../../config";


export default class TabViewDemo extends Thresh.Widget<any, any> {
    $tabView

    render() {
        return (
            <Page
                appBar={<AppBar title="TabController" backgroundColor={0xFFE0F2F1} />}
            >
                <Container width={ui.screenWidth} height={ui.rpx(100)} backgroundColor={0xFFEA80FC} alignItems='center' justifyContent='center'>
                    <Text size={ui.rpx(34)} weight='bold' color={Colors.White}>{'Header View'}</Text>
                </Container>
                <Container width={ui.screenWidth} flex={1}>
                    <TabView
                        height={ui.screenHeight - ui.appbarHeight - ui.rpx(200)}
                        ref={(e) => {
                            this.$tabView = e
                        }}
                        tabBarColor={0xFFE0F2F1}
                        tabs={[
                            <Container alignItems='center' justifyContent='center'>
                                <Text>{'First'}</Text>
                            </Container>,
                            <Container alignItems='center' justifyContent='center'>
                                <Text >{'LongSecond'}</Text>
                            </Container>,
                            <Container alignItems='center' justifyContent='center'>
                                <Text>{'Third'}</Text>
                            </Container>,
                            <Container alignItems='center' justifyContent='center'>
                                <Text>{'4'}</Text>
                            </Container>,
                            <Container alignItems='center' justifyContent='center'>
                                <Text>{'Fifth'}</Text>
                            </Container>

                        ]}
                        rightItems={[
                            <Container
                                width={ui.rpx(100)}
                                alignItems='center'
                                justifyContent='center'
                                backgroundColor={0xFFFFA726}
                                onTap={() => {
                                    Util.log('click 筛选')
                                }}>
                                <Text>{'筛选'}</Text>
                            </Container>,
                            <Container
                                width={ui.rpx(100)}
                                alignItems='center'
                                justifyContent='center'
                                backgroundColor={0xFF26C6DA}
                                onTap={() => {
                                    this.$tabView.switchTo(Math.random() * 5)
                                }}>
                                <Text>{'切换'}</Text>
                            </Container>
                        ]}
                        onChange={(v) => {
                            Util.log(v)
                        }}
                        isScrollable={true}
                        labelStyle={{ color: Colors.Red, weight: 'bold', size: ui.rpx(30) }}
                        unselectedLabelStyle={{ color: 0xFFD500F9, weight: 'normal', size: ui.rpx(24) }}
                        indicatorPadding={{ left: ui.rpx(40), right: ui.rpx(40) }}
                        indicatorColor={Colors.Red}
                        indicatorWeight={ui.rpx(10)}
                        indicatorCap='round'
                        pages={[
                            <Container backgroundColor={Colors.Primary} alignItems='center' justifyContent='center'>
                                <Text>{'First'}</Text>
                            </Container>,
                            <Container backgroundColor={Colors.Lightgray} alignItems='center' justifyContent='center'>
                                <Text>{'Second'}</Text>
                            </Container>,
                            <Container backgroundColor={Colors.Darkgray} alignItems='center' justifyContent='center'>
                                <Text>{'Third'}</Text>
                            </Container>,
                            <Container backgroundColor={Colors.Pagebg} alignItems='center' justifyContent='center'>
                                <Text>{'Fourth'}</Text>
                            </Container>,
                            <Container backgroundColor={Colors.Red} alignItems='center' justifyContent='center'>
                                <Text>{'Fifth'}</Text>
                            </Container>
                        ]}
                    />
                </Container>
                <Container width={ui.screenWidth} height={ui.rpx(100)} backgroundColor={0xFFFF7043} alignItems='center' justifyContent='center'>
                    <Text size={ui.rpx(34)} weight='bold' color={Colors.White}>{'Footer View'}</Text>
                </Container>
            </Page>
        )
    }
}