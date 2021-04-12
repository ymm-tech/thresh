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
import 'package:thresh/framework/core/dynamic_widget.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/framework/widget/layout/widget_scroll_view.dart';
import 'package:thresh/framework/widget/layout/widget_list_view.dart';
import 'package:thresh/framework/widget/layout/widget_dragable_scroll_view/index.dart';

/// 基础组件 DFContainer
/// 组件内部嵌套结构如下
/// GestureDetector => Opacity => ClipRRect => Stack/Positioned => Column/Row/Wrap => Expanded => Container
/// 以上除最后一级 Container 外，其余所有层级会根据条件判断是否需要，以保证达到层级嵌套最浅
class DFContainer extends DFBasicWidget {
  DFContainer(
    DynamicModel model, {
    Key key,
    this.row = false,
    // this.parentContainerIsRow = false,
    this.wrap = false,
    this.reverse = false,
    this.relative = false,
    this.flex,
    this.width,
    this.height,
    this.top,
    this.bottom,
    this.left,
    this.right,
    this.mainAxisAlignment,
    this.crossAxisAlignment,
    this.runAlignment,
    this.children,
  }) : super(model, key: key);
  // 使 Container 默认宽度撑满
  // 如果父组件为具有 row 属性的 Container ，其 width 则默认不撑满
  // super(model, key: key, width: parentContainerIsRow ? width : width ?? double.infinity);

  final bool row;
  // final bool parentContainerIsRow;
  final bool wrap;
  final bool reverse;
  final bool relative;
  final int flex;
  final double width;
  final double height;
  final double top;
  final double bottom;
  final double left;
  final double right;
  final String mainAxisAlignment;
  final String crossAxisAlignment;
  final String runAlignment;
  final List<Widget> children;

  @override
  Widget buildMainWidget(BuildContext context) {
    return buildPositionWidget();
  }

  Widget buildPositionWidget() {
    if (relative) {
      return Stack(
        children: buildRelativeInnerWidgets(),
      );
    }
    return buildDirectionWidget(children);
  }

  Widget buildDirectionWidget(List<Widget> widgets) {
    if (widgets.length == 1 &&
        (DFScrollView.isScrollView(widgets.first) ||
            DFListView.isListView(widgets.first))) {
      return widgets.first;
    }
    return Container(
      child: !wrap
          ? !row
              ? Column(
                  mainAxisSize: height == null && flex == null
                      ? MainAxisSize.min
                      : MainAxisSize.max,
                  mainAxisAlignment:
                      Util.getMainAxisAlignment(mainAxisAlignment),
                  crossAxisAlignment:
                      Util.getCrossAxisAlignment(crossAxisAlignment),
                  children: widgets,
                )
              : Row(
                  mainAxisSize: width == null && flex == null
                      ? MainAxisSize.min
                      : MainAxisSize.max,
                  mainAxisAlignment:
                      Util.getMainAxisAlignment(mainAxisAlignment),
                  crossAxisAlignment:
                      Util.getCrossAxisAlignment(crossAxisAlignment),
                  children: widgets,
                )
          : buildWrapWidget(widgets),
    );
  }

  Widget buildWrapWidget(List<Widget> widgets) {
    return Wrap(
      direction: !row ? Axis.vertical : Axis.horizontal,
      alignment: Util.getWrapAlignment(mainAxisAlignment),
      runAlignment: Util.getWrapAlignment(runAlignment),
      children: widgets,
    );
  }

  /// 过滤出 relative 布局中的 absolute 组件
  /// 提取出非 absolute 组件使用 buildDirectionWidget 正常布局
  List<Widget> buildRelativeInnerWidgets() {
    List<Widget> stackInnerWidgets = [];
    List<Widget> directionWidgets = [];
    List<Widget> absoluteWidgets = [];
    children.map((child) {
      bool isAbsolute = ((child is DynamicWidget)
                  ? (child.model.dynamicWidget.widgetInstance as DFBasicWidget)
                  : (child as DFBasicWidget))
              ?.isAbsolute ??
          false;
      // if (isDragableScrollView) widgetInstance = Positioned.fill(child: widgetInstance);
      if (!isAbsolute)
        directionWidgets.add(child);
      else
        absoluteWidgets.add(child);
    }).toList();
    stackInnerWidgets.add(buildDirectionWidget(directionWidgets));
    stackInnerWidgets.addAll(absoluteWidgets);
    return stackInnerWidgets;
  }
}

class ProxyDFContainer extends ProxyBase {
  static void register() {
    ProxyDFContainer instance = ProxyDFContainer();
    RegisterWidget().register(
      widgetName: 'Container',
      constructor: instance.constructor,
    );
  }

  DFContainer constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    Map<String, dynamic> buildProps = model.buildProps;

    return DFContainer(
      model,
      row: Util.getBoolean(props['row']),
      // parentContainerIsRow: Util.getBoolean(model.parent?.props['row']),
      wrap: Util.getBoolean(props['wrap']),
      reverse: Util.getBoolean(props['reverse']),
      relative: Util.getBoolean(props['relative']),
      flex: Util.getInt(props['flex']),
      width: Util.getDouble(props['width']),
      height: Util.getDouble(props['height']),
      top: Util.getDouble(props['top']),
      bottom: Util.getDouble(props['bottom']),
      left: Util.getDouble(props['left']),
      right: Util.getDouble(props['right']),
      mainAxisAlignment:
          Util.getString(props['justifyContent'] ?? props['mainAxisAlignment']),
      crossAxisAlignment:
          Util.getString(props['alignItems'] ?? props['crossAxisAlignment']),
      runAlignment: Util.getString(props['alignContent']),
      children: Util.getWidgetList(buildProps['children']),
    );
  }
}
