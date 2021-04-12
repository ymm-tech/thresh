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

import 'package:flutter/material.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/framework/core/dynamic_app.dart';
import 'package:thresh/framework/core/dynamic_builder.dart';
import 'package:thresh/framework/core/dynamic_widget.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/devtools/dev_tools.dart';

typedef FindModelCallback = DynamicModel Function(DynamicModel);

/// js端传输过来的jsonData转换为的model
/// 具有层级关系，可以递归查找
class DynamicModel {
  /// 以页面为单位缓存所有的 controller
  static Map<String, Map<String, dynamic>> controllers = {};

  /// widgetName
  String name;

  /// 所属页面名称
  String pageName;

  /// widgetId
  String widgetId;

  /// 当前model对应的widget是否是stateful
  bool isStateful;

  /// 当前model对应的widget的key
  Key key;

  /// 当前widget对应的props
  Map<String, dynamic> props = {};

  /// props的属性为DynamicModel时构建出的值
  Map<String, dynamic> buildProps = {};
  // 父节点 model
  DynamicModel parent;

  /// 当前model构建出的动态组件
  DynamicWidget dynamicWidget;

  /// 持有当前stateful model对应widget实例的state，当页面render时赋值
  DynamicWidgetState dynamicWidgetState;

  /// 持有动态组件内部的组件实例
  DFBasicWidget widgetInstance;

  set controller(dynamic controller) {
    if (DynamicModel.controllers[pageName] == null) {
      DynamicModel.controllers[pageName] = {widgetId: controller};
    } else {
      DynamicModel.controllers[pageName][widgetId] = controller;
    }
  }

  dynamic get controller => DynamicModel.controllers[pageName] != null
      ? DynamicModel.controllers[pageName][widgetId]
      : null;

  DynamicModel.create(
    Map<String, dynamic> widgetModel, {
    BuildContext context,
    DynamicModel parentModel,
  }) {
    if (dynamicApp == null) {
      devtools.debug('create', 'dynamic_model.dart', 'return',
          'dynamicApp is null: ${dynamicApp == null}');
      return;
    }

    name = widgetModel['name'];
    pageName = widgetModel['pageName'];
    widgetId = widgetModel['widgetId'];
    isStateful = widgetModel['isStateful'] == true;
    key = widgetModel['key'] != null ? ValueKey(widgetModel['key']) : null;
    parent = parentModel;

    Map<String, dynamic> tempProps = widgetModel['props'];
    for (String key in tempProps.keys) {
      dynamic data = tempProps[key];
      if (DynamicModel.isModelMap(data)) {
        DynamicModel dynamicModel =
            DynamicModel.create(data, context: context, parentModel: this);
        props[key] = dynamicModel;
        dynamicModel.buildDynamicWidget(
            context: context ?? dynamicApp.context,
            propKeyInParentModel: key,
            propIsArray: false);
      } else if (DynamicModel.isModelList(data)) {
        props[key] = data.map((item) {
          DynamicModel dynamicModel =
              DynamicModel.create(item, context: context, parentModel: this);
          dynamicModel.buildDynamicWidget(
              context: context ?? dynamicApp.context,
              propKeyInParentModel: key,
              propIsArray: true);
          return dynamicModel;
        }).toList();
      } else {
        props[key] = data;
      }
    }
    // dynamicWidgetPrinter(this);
  }

  /// 更新当前model的widget state
  void setWidgetState(DynamicWidgetState state) {
    dynamicWidgetState = state;
  }

  /// 构建组件实例
  /// [isInListViewBuilder] 如果该方法是在 ListView.itemBuilder 中调用，则构建完成后直接返回，不需要其他操作
  Widget buildDynamicWidget({
    BuildContext context,
    String propKeyInParentModel,
    bool propIsArray = false,
    bool isInListViewBuilder = false,
  }) {
    Widget buildRes = dynamicBuilder.buildWidgetWithModel(
        this, context ?? dynamicApp.context);
    if (buildRes is DynamicWidget) dynamicWidget = buildRes;
    if (parent == null || isInListViewBuilder) return buildRes;
    if (!propIsArray) {
      parent.buildProps[propKeyInParentModel] = buildRes;
    } else {
      dynamic buildPropsItemArray = parent.buildProps[propKeyInParentModel];
      if (buildPropsItemArray == null)
        parent.buildProps[propKeyInParentModel] = [buildRes];
      else
        buildPropsItemArray.add(buildRes);
    }
    return buildRes;
  }

  /// 将新model中的属性合并到当前model中
  /// 为了实现局部更新
  void merge(DynamicModel newModel) {
    name = newModel.name;
    widgetId = newModel.widgetId;
    isStateful = newModel.isStateful;
    key = newModel.key;
    props = newModel.props;
    buildProps = newModel.buildProps;
    // 更新 widget
    dynamicWidgetState?.updateWidget(newModel.dynamicWidget.widgetInstance);
  }

  /// 向上查找最近的 stateful model
  /// 未使用到
  DynamicModel findNearlyStatefulModel() {
    if (this.parent == null) return this;
    if (this.parent.isStateful) return this.parent;
    return this.parent.findNearlyStatefulModel();
  }

  /// 判断当前 List 中的元素是否是 DynamicModel 或者能够用来构建 DynamicModel
  static bool isModelList(data) {
    return (data is List) &&
        (data.length > 0) &&
        ((data.first is DynamicModel) || DynamicModel.isModelMap(data.first));
  }

  /// 判断当前 Map 是否可以用来构建 DynamicModel
  static bool isModelMap(data) {
    return (data is Map) && data['name'] != null;
  }

  /// 查找指定的 widgets
  static List<DynamicModel> findTargetModels(
      {@required DynamicModel aimModel,
      @required String aimWidgetId,
      FindModelCallback findCallback}) {
    List<DynamicModel> targetModels = [];

    if (aimModel.widgetId == aimWidgetId) {
      DynamicModel model = findCallback?.call(aimModel);
      targetModels.add(model ?? aimModel);
    }

    for (String key in aimModel.props.keys) {
      dynamic data = aimModel.props[key];
      if (data is DynamicModel) {
        targetModels.addAll(findTargetModels(
            aimModel: aimModel.props[key],
            aimWidgetId: aimWidgetId,
            findCallback: findCallback));
      }
      if (DynamicModel.isModelList(data)) {
        for (int i = 0; i < data.length; i++) {
          targetModels.addAll(findTargetModels(
              aimModel: data[i],
              aimWidgetId: aimWidgetId,
              findCallback: findCallback));
        }
      }
    }
    return targetModels;
  }
}

void dynamicWidgetPrinter(DynamicModel dw) {
  devtools.insert(
    InfoType.render,
    DevInfo(
      title: 'Dynamic Widget Model',
      content: Util.formatMutipulLineText([
        '[name] - ${dw.name}',
        '[widgetId] - ${dw.widgetId}',
        '[props] - ${dw.props}',
      ]),
    ),
  );
}
