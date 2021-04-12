import PageAppBar from './pages/basic/PageAppBar'
import ContainerDemo from './pages/basic/ContainerDemo'
import TextDemo from './pages/basic/TextDemo'
import ImageDemo from './pages/basic/ImageDemo'
import QrImageDemo from './pages/basic/QrImageDemo'
import IconDemo from './pages/basic/IconDemo'
import ScrollViewDemo from './pages/basic/ScrollViewDemo'
import ListViewDemo from './pages/basic/ListViewDemo'
import SwipeActionsViewDemo from './pages/basic/SwipeActionsViewDemo'
import SwiperViewDemo from './pages/basic/SwiperViewDemo'
import NativeViewDemo from './pages/basic/NativeViewDemo'
import ButtonDemo from './pages/basic/ButtonDemo'
import RadioDemo from './pages/basic/RadioDemo'
import CheckboxDemo from './pages/basic/CheckboxDemo'
import InputDemo from './pages/basic/InputDemo'
import PageActions, { NextPage, ReplacePage } from './pages/apis/PageActions'
import ModalActions from './pages/apis/ModalActions'
import ToastActions from './pages/apis/ToastActions'
import RefreshDemo from './pages/basic/RefreshDemo'
import NestScrollViewDemo from './pages/basic/NestScrollViewDemo'
import NoticeBarDemo from './pages/basic/NoticeBarDemo'
import ThemeProviderActions from './pages/apis/ThemeProviderActions'
import SwitchDemo from './pages/basic/SwitchDemo'
import PickerDemo from './pages/basic/PickerDemo'
import TimerDemo from './pages/examples/timer'
import DrawerScrollViewDemo from './pages/basic/DragableScrollViewDemo'

interface IPageConfig {
  title?: string,
  desc?: string,
  useInject?: boolean,
  pageName: string,
  pageBuilder: Function
}

export const Colors = {
  Black: 0xff000000,
  White: 0xffffffff,
  Primary: 0xff649ef4,
  Red: 0xffff0000,
  Pagebg: 0xfff3f3f3,
  Darkgray: 0xff333333,
  Lightgray: 0xff999999
}

export const widgetList: IPageConfig[] = [
  {
    title: 'Page & AppBar',
    desc: '页面与导航栏组件',
    pageName: 'widget-page-appbar',
    pageBuilder: () => PageAppBar
  },
  {
    title: 'Container',
    desc: '基础容器组件',
    pageName: 'widget-container',
    pageBuilder: () => ContainerDemo
  },
  {
    title: 'Text',
    desc: '文本组件',
    pageName: 'widget-text',
    pageBuilder: () => TextDemo
  },
  {
    title: 'Image',
    desc: '图片组件',
    pageName: 'widget-image',
    pageBuilder: () => ImageDemo
  },
  {
      title: 'QrImage',
      desc: '二维码组件',
      pageName: 'widget-qrimage',
      pageBuilder: () => QrImageDemo
    },
  {
    title: 'Icon',
    desc: '图标组件',
    pageName: 'widget-icon',
    pageBuilder: () => IconDemo
  },
  {
    title: 'Refresh',
    desc: '刷新指示器组件',
    pageName: 'widget-refresh',
    pageBuilder: () => RefreshDemo
  },
  {
    title: 'NoticeBar',
    desc: '通知栏组件',
    pageName: 'widget-notice-bar',
    pageBuilder: () => NoticeBarDemo
  },
  {
    title: 'ScrollView',
    desc: '滚动视图组件',
    pageName: 'widget-scrollview',
    pageBuilder: () => ScrollViewDemo
  },
  {
    title: 'ListView',
    desc: '列表视图组件',
    pageName: 'widget-listview',
    pageBuilder: () => ListViewDemo
  },
  {
    title: 'NestScrollView',
    desc: '富交互滚动视图组件',
    pageName: 'widget-nestScrollview',
    pageBuilder: () => NestScrollViewDemo
  },
  {
    title: 'DragableScrollView',
    desc: '底部拖拽滚动视图组件',
    // useInject: true,
    pageName: 'widget-dragableScrollview',
    pageBuilder: () => DrawerScrollViewDemo
  },
  {
    title: 'SwiperActionsView',
    desc: '侧滑显示按钮组件',
    pageName: 'widget- swiperActionsview',
    pageBuilder: () => SwipeActionsViewDemo
  },
  {
    title: 'SwiperView',
    desc: '滑动视图组件',
    pageName: 'widget-swiperview',
    pageBuilder: () => SwiperViewDemo
  },
  {
    title: 'NativeView',
    desc: '原生视图组件',
    pageName: 'widget-nativeview',
    pageBuilder: () => NativeViewDemo
  },
  {
    title: 'Input',
    desc: '输入框组件',
    // useInject: true,
    pageName: 'widget-input',
    pageBuilder: () => InputDemo
  },
  {
    title: 'Button',
    desc: '按钮组件',
    pageName: 'widget-button',
    pageBuilder: () => ButtonDemo
  },
  {
    title: 'Radio',
    desc: '单选框组件',
    pageName: 'widget-radio',
    pageBuilder: () => RadioDemo
  },
  {
    title: 'Checkbox',
    desc: '多选框组件',
    pageName: 'widget-checkbox',
    pageBuilder: () => CheckboxDemo
  },
  {
    title: 'Switch',
    desc: '开关组件',
    pageName: 'widget-switch',
    pageBuilder: () => SwitchDemo
  },
  {
    title: 'Picker',
    desc: '选择组件',
    pageName: 'widget-picker',
    pageBuilder: () => PickerDemo
  }
]

export const apiList: IPageConfig[] = [
  {
    title: 'Page Actions',
    desc: '页面操作',
    pageName: 'api-page-actions',
    pageBuilder: () => PageActions
  },
  {
    title: 'Modal Actions',
    desc: '模态页面操作',
    useInject: false,
    pageName: 'api-modal-actions',
    pageBuilder: () => ModalActions
  },
  {
    title: 'Toast Actions',
    desc: '提示框操作',
    pageName: 'api-toast-actions',
    pageBuilder: () => ToastActions
  },
  {
    title: 'Theme Provider',
    desc: '主题换肤',
    pageName: 'api-theme-provider',
    pageBuilder: () => ThemeProviderActions
  },
  {
    title: 'Timer Apis',
    desc: '定时器操作',
    pageName: 'api-timers',
    pageBuilder: () => TimerDemo
  }
]

export const extraPages: IPageConfig[] = [
  {
    pageName: 'api-page-actions-next',
    pageBuilder: () => NextPage
  },
  {
    pageName: 'api-page-actions-replace',
    pageBuilder: () => ReplacePage
  }
]
