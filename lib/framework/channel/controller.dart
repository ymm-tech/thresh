import 'package:thresh/framework/widget/layout/widget_dragable_scroll_view/dragable_scroll_view.dart';

/// MIT License
///
/// Copyright (c) 2020 ManBang Group
/// Permission is hereby granted, free of charge, to any person obtaining a copy
/// of this software and associated documentation files (the "Software"), to deal
/// in the Software without restriction, including without limitation the rights
/// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
/// copies of the Software, and to permit persons to whom the Software is
/// furnished to do so, subject to the following conditions:
///
/// The above copyright notice and this permission notice shall be included in all
/// copies or substantial portions of the Software.
///
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
/// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
/// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
/// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
/// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
/// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
/// SOFTWARE.

import 'package:thresh/framework/widget/layout/widget_swipe_actions_view.dart';
import 'package:flutter/material.dart';
import 'package:thresh/framework/core/dynamic_app.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/channel/basic.dart';
import 'package:thresh/framework/widget/form/widget_input.dart';
import 'package:thresh/framework/widget/layout/widget_app_bar.dart';
import 'package:thresh/framework/widget/layout/widget_list_view.dart';
import 'package:thresh/framework/widget/layout/widget_nest_scroll_view.dart';
import 'package:thresh/devtools/dev_tools.dart';
import 'package:thresh/basic/util.dart';

class _ControllerDevInfo {
  final String title;
  final String content;

  _ControllerDevInfo(this.title, this.content);

  print(InfoType type, [String message]) {
    devtools.insert(
        type,
        DevInfo(
          title: message == null ? title : '$title: $message',
          content: content,
        ));
  }
}

List<DynamicModel> _findTargetModels(
    dynamic params, List<String> aimModelTypes, _ControllerDevInfo info) {
  if (params == null) {
    info.print(InfoType.warn, 'Params Is Null');
    return [];
  }
  String pageName = Util.getString(params['pageName']);
  String widgetId = Util.getString(params['widgetId']);
  DynamicModel pageModel = dynamicApp?.modelCache[pageName];
  if (pageModel == null) {
    info.print(InfoType.warn, 'Not Find Page');
    return [];
  }
  List<DynamicModel> targetModels =
      DynamicModel.findTargetModels(aimModel: pageModel, aimWidgetId: widgetId);
  if (targetModels.isEmpty) {
    info.print(InfoType.warn, 'Not Find Widget');
    return [];
  }
  if (!targetModels.every((model) =>
      aimModelTypes.contains(model.name) && model.controller != null)) {
    info.print(InfoType.warn, 'Widget is not ${aimModelTypes.join(' or ')}');
    return [];
  }
  info.print(InfoType.event);
  return targetModels;
}

/// 注册控制器相关 channel 方法
void registerControllerChannelMethods() {
  DynamicChannel.register({
    // 修改 AppBar text
    'updateTitle': (params) {
      String pageName = Util.getString(params['pageName']);
      String widgetId = Util.getString(params['widgetId']);
      String title = Util.getString(params['title']);
      List<DynamicModel> targetModels = _findTargetModels(
        params,
        ['AppBar'],
        _ControllerDevInfo(
          'UpdateTitle',
          Util.formatMutipulLineText([
            'Page/Modal Name: $pageName',
            'Widget Id: $widgetId',
            'Title: $title',
          ]),
        ),
      );
      for (DynamicModel model in targetModels) {
        (model.controller as AppBarController).updateTitle(title ?? '');
      }
    },

    // ScrollView / ListView / DragableScrollView 滚动到指定位置
    'scrollTo': (params) {
      String pageName = Util.getString(params['pageName']);
      String widgetId = Util.getString(params['widgetId']);
      double offset = Util.getDouble(params['offset']);
      int duration = Util.getInt(params['duration']) ?? 200;
      List<DynamicModel> targetModels = _findTargetModels(
        params,
        ['ScrollView', 'ListView', 'DragableScrollView'],
        _ControllerDevInfo(
          'scrollTo',
          Util.formatMutipulLineText([
            'Page/Modal Name: $pageName',
            'Widget Id: $widgetId',
            'Scroll To: $offset',
          ]),
        ),
      );
      for (DynamicModel model in targetModels) {
        (model.controller as ScrollController).animateTo(offset,
            duration: Duration(milliseconds: duration),
            curve: ElasticInOutCurve());
      }
    },

    // ListView 停止异步操作
    'stopAsyncOperate': (params) {
      String pageName = Util.getString(params['pageName']);
      String widgetId = Util.getString(params['widgetId']);
      String type = Util.getString(params['type']);
      List<DynamicModel> targetModels = _findTargetModels(
        params,
        ['ListView'],
        _ControllerDevInfo(
          'StopRefresh',
          Util.formatMutipulLineText([
            'Page/Modal Name: $pageName',
            'Widget Id: $widgetId',
            'Event Type: $type',
          ]),
        ),
      );
      for (DynamicModel model in targetModels) {
        (model.controller as ListViewController).stopAsyncOperate(
            type == 'refresh'
                ? ListViewOperateType.refresh
                : ListViewOperateType.loadMore);
      }
    },

    // DragableScrollView 切换到指定状态
    'dragPositionAnimateTo': (params) async {
      String pageName = Util.getString(params['pageName']);
      String widgetId = Util.getString(params['widgetId']);
      String positionType = Util.getString(params['positionType']);
      List<DynamicModel> targetModels = _findTargetModels(
        params,
        ['DragableScrollView'],
        _ControllerDevInfo(
          'dragPositionAnimateTo',
          Util.formatMutipulLineText([
            'Page/Modal Name: $pageName',
            'Widget Id: $widgetId',
            'Position Type: $positionType',
          ]),
        ),
      );
      for (DynamicModel model in targetModels) {
        final DraggableScrollController controller =
            model.controller as DraggableScrollController;
        await controller.extent.animateTo(
          DragableScrollPositionType(positionType),
          controller,
        );
        if (positionType != DragableScrollPositionType.max.value)
          controller.jumpTo(0);
      }
    },

    // SwipeActionsView 打开操作按钮
    'openActions': (params) {
      String pageName = Util.getString(params['pageName']);
      String widgetId = Util.getString(params['widgetId']);
      String type = Util.getString(params['type']);
      List<DynamicModel> targetModels = _findTargetModels(
        params,
        ['SwipeActionsView'],
        _ControllerDevInfo(
          'OpenActions',
          Util.formatMutipulLineText([
            'Page/Modal Name: $pageName',
            'Widget Id: $widgetId',
            'Event Type: $type',
          ]),
        ),
      );
      for (DynamicModel model in targetModels) {
        (model.controller as SwipeActionsViewController).openActions();
      }
    },

    // SwipeActionsView 关闭操作按钮
    'closeActions': (params) {
      String pageName = Util.getString(params['pageName']);
      String widgetId = Util.getString(params['widgetId']);
      String type = Util.getString(params['type']);
      List<DynamicModel> targetModels = _findTargetModels(
        params,
        ['SwipeActionsView'],
        _ControllerDevInfo(
          'CloseActions',
          Util.formatMutipulLineText([
            'Page/Modal Name: $pageName',
            'Widget Id: $widgetId',
            'Event Type: $type',
          ]),
        ),
      );
      for (DynamicModel model in targetModels) {
        (model.controller as SwipeActionsViewController).closeActions();
      }
    },

    // SwiperView 滚动到指定位置
    'swipeTo': (params) {
      String pageName = Util.getString(params['pageName']);
      String widgetId = Util.getString(params['widgetId']);
      int index = Util.getInt(params['index']);
      int duration = Util.getInt(params['duration']) ?? 200;
      List<DynamicModel> targetModels = _findTargetModels(
        params,
        ['ScrollView', 'ListView'],
        _ControllerDevInfo(
          'UpdateTitle',
          Util.formatMutipulLineText([
            'Page/Modal Name: $pageName',
            'Widget Id: $widgetId',
            'Swipe To: $index',
          ]),
        ),
      );
      for (DynamicModel model in targetModels) {
        (model.controller as PageController).animateToPage(index,
            duration: Duration(milliseconds: duration),
            curve: ElasticInOutCurve());
      }
    },

    // 修改 Input 的值
    'setValue': (params) {
      String pageName = Util.getString(params['pageName']);
      String widgetId = Util.getString(params['widgetId']);
      String value = Util.getString(params['value']) ?? '';
      List<DynamicModel> targetModels = _findTargetModels(
        params,
        ['Input'],
        _ControllerDevInfo(
          'setValue',
          Util.formatMutipulLineText([
            'Page/Modal Name: $pageName',
            'Widget Id: $widgetId',
            'Value: $value',
          ]),
        ),
      );
      for (DynamicModel model in targetModels) {
        (model.controller as DFTextEditingController).text = value;
      }
    },

    // Picker 跳转到指定位置
    'jumpTo': (params) {
      int index = Util.getInt(params['index']);
      String pageName = Util.getString(params['pageName']);
      String widgetId = Util.getString(params['widgetId']);
      List<DynamicModel> targetModels = _findTargetModels(
        params,
        ['Picker'],
        _ControllerDevInfo(
          'jumpTo',
          Util.formatMutipulLineText([
            'Page/Modal Name: $pageName',
            'Widget Id: $widgetId',
            'Jumpt To: $index',
          ]),
        ),
      );
      for (DynamicModel model in targetModels) {
        (model.controller as FixedExtentScrollController).jumpToItem(index);
      }
    },

    // Picker 滚动到指定位置
    'animateTo': (params) {
      int index = Util.getInt(params['index']);
      int duration = Util.getInt(params['duration']) ?? 200;
      String pageName = Util.getString(params['pageName']);
      String widgetId = Util.getString(params['widgetId']);
      List<DynamicModel> targetModels = _findTargetModels(
        params,
        ['Picker'],
        _ControllerDevInfo(
          'animateTo',
          Util.formatMutipulLineText([
            'Page/Modal Name: $pageName',
            'Widget Id: $widgetId',
            'Animate To: $index',
          ]),
        ),
      );
      for (DynamicModel model in targetModels) {
        (model.controller as FixedExtentScrollController).animateToItem(index,
            duration: Duration(milliseconds: duration), curve: Curves.linear);
      }
    },

    // 设置NestScrollView打开状态
    'setNestScrollViewStatus': (params) {
      String pageName = Util.getString(params['pageName']);
      String widgetId = Util.getString(params['widgetId']);
      bool isOpened = Util.getBoolean(params['isOpened']);
      List<DynamicModel> targetModels = _findTargetModels(
        params,
        ['NestScrollView'],
        _ControllerDevInfo(
          'setNestScrollViewStatus',
          Util.formatMutipulLineText([
            'Page/Modal Name: $pageName',
            'Widget Id: $widgetId',
            'Is Opened: $isOpened',
          ]),
        ),
      );
      for (DynamicModel model in targetModels) {
        (model.controller as DFNestScrollViewCustomController)
            .setNestScrollViewStatus(isOpened);
      }
    },
  });
}
