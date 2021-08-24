/**
 * MIT License
 *
 * Copyright (c) 2020 ManBang Group
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import Widget, { BasicWidget } from './Widget'
import VNode from './VNode'
import appContainer from './AppContainer'
import ChildrenRule from './ChildrenRule'
import MethodChannel, { FlutterMethodChannelType } from '../channel/MethodChannel'
import Util from '../shared/Util'
import {
  PageProps,
  AppBarProps,
  ContainerProps,
  StackViewProps,
  ScrollViewProps,
  ListViewProps,
  NestScrollViewProps,
  DrawerScrollViewProps,
  DragableScrollViewProps,
  SwipeActionsViewProps,
  NativeViewProps,
  SwiperViewProps,
  TextProps,
  IconProps,
  ImageProps,
  QrImageProps,
  SpinProps,
  RefreshProps,
  NoticeBarProps,
  ButtonProps,
  RadioProps,
  CheckboxProps,
  InputProps,
  SwitchProps,
  PickerProps,
  TabViewProps,
  GridViewProps
} from '../types/widget'

const AnimationDuration = 150

/**
 * 页面布局
 */

// 页面组件
export class Page extends BasicWidget<PageProps, any> {
  static async invokeBeforePagePop(): Promise<boolean> {
    const pageNode: VNode | void = Page.getPageWithContextId(appContainer.contextId as string)
    if (!pageNode) return true
    if (!pageNode.props.beforePop) return true
    const beforePopRes = pageNode.props.beforePop()
    if (beforePopRes === false) return false
    if (beforePopRes instanceof Promise) {
      const finalRes = await beforePopRes
      if (finalRes === false) return false
    }
    return true
  }

  static invokePageOnShow(contextId: string) {
    const pageNode: VNode | void = Page.getPageWithContextId(contextId)
    if (!pageNode) return
    appContainer.contextId = contextId
    pageNode.props.onShow && pageNode.props.onShow()
  }

  static invokePageOnHide(contextId: string) {
    const pageNode: VNode | void = this.getPageWithContextId(contextId)
    if (!pageNode) return
    pageNode.props.onHide && pageNode.props.onHide()
  }

  private static getPageWithContextId(contextId: string): VNode | void {
    if (appContainer.isEmpty) return
    const targetPageNode: VNode | void = appContainer.getPageDataWithContextId(contextId)
    if (!targetPageNode) return
    return targetPageNode.pageNode
  }
}
// 顶部导航栏组件
export class AppBar extends BasicWidget<AppBarProps, any> {
  private __lastTitle: string
  updateTitle(title: string) {
    const lastTitle: string = !Util.isNil(this.__lastTitle) ? this.__lastTitle : (this.props.title || '')
    if (lastTitle === title) return
    this.__lastTitle = title
    __setNavProps(this, FlutterMethodChannelType.updateTitle, { title })
  }
}
// 容器组件
export class Container extends BasicWidget<ContainerProps, any> {}
/**
 * 堆叠组件
 * StackView size 有其内部的所有非 absolute 节点撑起
 * 至少需要有一个非 absolute 的子节点来撑起 StackView size，否则 StackView 将不可见
 * 子节点可以直接使用 absolute 进行定位
 * 在未设置 absolute 的情况下，所有子节点会以容器左上角为锚点堆叠放置
 */
export class StackView extends BasicWidget<StackViewProps, any> {}
// 滑动容器组件
export class ScrollView extends BasicWidget<ScrollViewProps, any> {
  scrollTo(offset: number, duration: number = AnimationDuration) {
    __setNavProps(this, FlutterMethodChannelType.scrollTo, { offset, duration })
  }
}
// 列表容器组件
export class ListView extends BasicWidget<ListViewProps, any> {
  scrollTo(offset: number, duration: number = AnimationDuration) {
    __setNavProps(this, FlutterMethodChannelType.scrollTo, { offset, duration })
  }

  stopAsyncOperate(type: 'refresh' | 'loadMore') {
    __setNavProps(this, FlutterMethodChannelType.stopAsyncOperate, { type })
  }
}
export class NestScrollView extends BasicWidget<NestScrollViewProps, any> {
  open() {
    __setNavProps(this, FlutterMethodChannelType.setNestScrollViewStatus, { isOpened: true })
  }
  // 关闭ScrollView（下滑）
  close() {
    __setNavProps(this, FlutterMethodChannelType.setNestScrollViewStatus, { isOpened: false })
  }
}
export class DrawerScrollView extends BasicWidget<DrawerScrollViewProps, any> { }

export class DragableScrollView extends BasicWidget<DragableScrollViewProps, any> {
  scrollTo(offset: number, duration: number = AnimationDuration) {
    __setNavProps(this, FlutterMethodChannelType.scrollTo, { offset, duration })
  }
  dragPositionAnimateTo(positionType: 'initial' | 'max' | 'min') {
    __setNavProps(this, FlutterMethodChannelType.dragPositionAnimateTo, { positionType })
  }
}

export class SwipeActionsView extends BasicWidget<SwipeActionsViewProps, any> {
  openActions() {
    __setNavProps(this, FlutterMethodChannelType.openActions, {})
  }
  closeActions() {
    __setNavProps(this, FlutterMethodChannelType.closeActions, {})
  }
}
SwipeActionsView.childrenRule = new ChildrenRule({
  widgetName: 'SwipeActionsView',
  length: 0,
})

export class SwiperView extends BasicWidget<SwiperViewProps, any> {
  swipeTo(index: number, duration: number = AnimationDuration) {
    __setNavProps(this, FlutterMethodChannelType.swipeTo, { index, duration })
  }
}
export class NativeView extends BasicWidget<NativeViewProps, any> {
  refresh(params: any = {}) {
    this.invokeCustomMethod('refresh', params)
  }

  destroy(params: any = {}) {
    this.invokeCustomMethod('destroy', params)
  }

  invokeCustomMethod(methodName: string, methodParams: any = {}) {
    MethodChannel.invokeNativeViewMethod({
      methodName,
      methodParams,
      viewType: this.props.type,
      viewParams: this.props.params || {}
    })
  }
}

/**
 * 数据展示
 */

// 图标组件
export class Icon extends BasicWidget<IconProps, any> { }
Icon.childrenRule = new ChildrenRule({
  widgetName: 'Icon',
  length: 0
})
// 图片组件
export class Image extends BasicWidget<ImageProps, any> { }
Image.childrenRule = new ChildrenRule({
  length: 0,
  widgetName: 'Image'
})
// 图片组件
export class QrImage extends BasicWidget<QrImageProps, any> { }
QrImage.childrenRule = new ChildrenRule({
  length: 0,
  widgetName: 'QrImage'
})
// 文本组件
export class Text extends BasicWidget<TextProps, any> { }
Text.childrenRule = new ChildrenRule({
  name: 'text',
  widgetName: 'Text',
  ruleFunc: (children: any[]) => children.map((child: any) => child != undefined ? child.toString() : '').join('')
})
// 无限旋转组件
export class Spin extends BasicWidget<SpinProps, any> { }
Spin.childrenRule = new ChildrenRule({
  widgetName: 'Spin',
  length: 0,
})
// 旋转刷新组件
export class Refresh extends BasicWidget<RefreshProps, any> { }
Refresh.childrenRule = new ChildrenRule({
  widgetName: 'Refresh',
  length: 0,
})
// 通知栏组件
export class NoticeBar extends BasicWidget<NoticeBarProps, any> { }
NoticeBar.childrenRule = new ChildrenRule({
  widgetName: 'NoticeBar',
})

/**
 * 表单元素
 */

// 按钮组件
export class Button extends BasicWidget<ButtonProps, any> { }
Button.childrenRule = new ChildrenRule({
  widgetName: 'Button',
  name: 'child',
  length: 1,
})
// 单选框组件
export class Radio extends BasicWidget<RadioProps, any> { }
Radio.childrenRule = new ChildrenRule({
  length: 1,
  name: 'title',
  widgetName: 'Radio'
})
// 开关组件
export class Switch extends BasicWidget<SwitchProps, any> { }
Switch.childrenRule = new ChildrenRule({
  length: 0,
  widgetName: 'Switch'
})
// 复选框组件
export class Checkbox extends BasicWidget<CheckboxProps, any> { }
Checkbox.childrenRule = new ChildrenRule({
  length: 1,
  name: 'title',
  widgetName: 'Checkbox'
})
// 输入框组件
export class Input extends BasicWidget<InputProps, any> {
  setValue(value: string) {
    __setNavProps(this, FlutterMethodChannelType.setValue, { value })
  }
  focus() {
    __setNavProps(this, FlutterMethodChannelType.triggerFocus, { type: 'focus' })
  }
  blur() {
    __setNavProps(this, FlutterMethodChannelType.triggerFocus, { type: 'blur' })
  }
}
Input.childrenRule = new ChildrenRule({
  length: 0,
  widgetName: 'Input'
})

function __setNavProps(widget: Widget<any, any>, method: FlutterMethodChannelType, params: object = {}) {
  const vNode: VNode = widget.__vNode__
  if (!vNode.hasMount) return
  MethodChannel.call({
    method,
    params: {
      pageName: vNode.pageName,
      widgetId: vNode.nodeId,
      ...params
    },
  })
}

// 选择组件
export class Picker extends BasicWidget<PickerProps, any> {
  // 跳转到指定位置
  jumpTo(index: number) {
    __setNavProps(this, FlutterMethodChannelType.jumpTo, { index })
  }
  // 滚动到指定位置
  animateTo(index: number, duration: number = AnimationDuration) {
    __setNavProps(this, FlutterMethodChannelType.animateTo, { index, duration })
  }
}
Picker.childrenRule = new ChildrenRule({
  widgetName: 'Picker'
})

// 顶部tab控制器
export class TabView extends BasicWidget<TabViewProps, any> {
  switchTo(index: number) {
    __setNavProps(this, FlutterMethodChannelType.switchTo, { index })
  }
}
TabView.childrenRule = new ChildrenRule({
  widgetName: 'TabView'
})

export class GridView extends BasicWidget<GridViewProps, any> {
  scrollTo(offset: number, duration: number = AnimationDuration) {
    __setNavProps(this, FlutterMethodChannelType.scrollTo, { offset, duration })
  }
}

export default {
  Page,
  AppBar,
  Container,
  StackView,
  ScrollView,
  ListView,
  NestScrollView,
  DrawerScrollView,
  DragableScrollView,
  SwipeActionsView,
  SwiperView,
  NativeView,

  Icon,
  Image,
  QrImage,
  Text,
  Spin,
  Refresh,
  NoticeBar,

  Button,
  Radio,
  Checkbox,
  Input,
  Switch,
  Picker,
  TabView,
  GridView
}
