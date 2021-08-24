import Thresh, { ui, Util } from "thresh-lib";
import { AppBar, Container, GridView, Page, Text } from "thresh-lib/src/core/basicWidget";
import { Colors } from "../../config";

export default class GridViewDemo extends Thresh.Widget<any, any> {

    cityNames = [
        '全市',
        '格拉贝勒',
        '齐干却勒街道',
        '兵团五十三团',
        '前海街道',
        '兵团第五十团',
        '永安坝街道',
        '兵团四十四团',
        '兵团四十九团',
        '兵团五十一团',
    ];

    constructor(props) {
        super(props)
        this.state = {
            cities: this.getCities()
        }
    }

    getCities() {
        let result = [];
        for (let i = 0; i < this.cityNames.length; i++) {
            result.push(
                this._renderUnslectedItem(i)
            )
        }
        return result;
    }

    _renderSlectedItem(i) {
        return (
            <Container
                padding={{ left: ui.rpx(18), right: ui.rpx(18) }}
                borderRadius={ui.rpx(12)}
                border={{ color: 0xFFFF8600, width: ui.rpx(1) }}
                backgroundColor={0xFFFFF0E5}
                alignItems='center'
                justifyContent='center'>
                <Text size={ui.rpx(26)} maxLines={1} overflow='ellipsis' color={0xFFFF5B00}>{this.cityNames[i]}</Text>
            </Container>
        )
    }

    _renderUnslectedItem(i) {
        return (
            <Container
                padding={{ left: ui.rpx(18), right: ui.rpx(18) }}
                borderRadius={ui.rpx(12)}
                backgroundColor={Colors.White}
                alignItems='center'
                justifyContent='center'>
                <Text size={ui.rpx(26)} maxLines={1} overflow='ellipsis'>{this.cityNames[i]}</Text>
            </Container>
        )
    }

    render() {
        return (<Page appBar={<AppBar title="GridView" />}>
            <GridView
                height={ui.screenHeight - ui.appbarHeight}
                backgroundColor={0xFFF6F6F6}
                padding={ui.rpx(14)}
                scrollable='always'
                layoutGrid='fixedCount'
                crossAxisCount={4}
                mainAxisSpacing={ui.rpx(20)}
                crossAxisSpacing={ui.rpx(20)}
                childAspectRatio={2.35}
                items={this.state.cities}
                onClicked={(e) => {
                    this.state.cities.splice(e.index, 1, this._renderSlectedItem(e.index))
                    this.setState()
                }}
            />
        </Page>)
    }
}