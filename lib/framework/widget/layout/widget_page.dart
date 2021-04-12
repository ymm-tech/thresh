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
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/framework/widget/layout/widget_scroll_view.dart';
import 'package:thresh/framework/widget/layout/widget_list_view.dart';
import 'package:thresh/basic/util.dart';

/// 基础组件 DFPage
class DFPage extends DFBasicWidget {
  DFPage(
    this.model, {
    Key key,
    this.appBar,
    this.children,
    this.backgroundColor = Colors.white,
    this.scrollable = false,
  }) : super(model, key: key);

  final DynamicModel model;
  final PreferredSizeWidget appBar;
  final List<Widget> children;
  final Color backgroundColor;
  final bool scrollable;

  @override
  Widget buildMainWidget(BuildContext context) {
    return Scaffold(
      appBar: appBar,
      body: Container(
        constraints: BoxConstraints.expand(),
        child: Container(
          alignment: Alignment.topLeft,
          child: buildContentWidget(context),
        ),
      ),
      backgroundColor: backgroundColor,
    );
  }

  Widget buildContentWidget(BuildContext context) {
    if (children.length == 0) return null;
    if (children.length == 1) {
      Widget child = children.first;
      if (DFScrollView.isScrollView(child) || DFListView.isListView(child)) {
        return child;
      }
      return Column(
        children: children,
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
      );
    }
    return Column(
      children: children,
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
    );
  }
}

class ProxyDFPage extends ProxyBase {
  static void register() {
    ProxyDFPage instance = ProxyDFPage();
    RegisterWidget().register(
      widgetName: 'Page',
      constructor: instance.constructor,
    );
  }

  DFPage constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    Map<String, dynamic> buildProps = model.buildProps;

    return DFPage(
      model,
      appBar: buildProps['appBar'] as PreferredSizeWidget,
      children: Util.getWidgetList(buildProps['children']),
      backgroundColor: Util.getColor(props['backgroundColor']) ?? Colors.white,
    );
  }
}
