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
import 'package:thresh/basic/util.dart';
import 'package:thresh/basic/global_def.dart';

class DFSwiperView extends DFBasicWidget {
  DFSwiperView(this.model, {
    this.key,
    this.row = true,
    this.controller,
    this.onChange,
    @required this.children,
  }) : super(model, key: key);

  final DynamicModel model;
  final bool row;
  final Key key;
  final PageController controller;
  final ParamGlobalHandler onChange;
  final List<Widget> children;

  Widget buildMainWidget(BuildContext context) {
    return PageView.builder(
      controller: controller,
      scrollDirection: row ? Axis.horizontal : Axis.vertical,
      itemCount: children.length,
      itemBuilder: (BuildContext context, int index) {
        return children[index];
      },
      onPageChanged: (int index) {
        if (onChange == null) return;
        onChange({ 'index': index });
      },
    );
  }
}

class ProxyDFSwiperView extends ProxyBase {
  static void register() {
    ProxyDFSwiperView instance = ProxyDFSwiperView();
    RegisterWidget().register(
      widgetName: 'SwiperView',
      constructor: instance.constructor,
    );
  }

  DFSwiperView constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    Map<String, dynamic> buildProps = model.buildProps;

    List<Widget> children = Util.getWidgetList(buildProps['children']);
    int initPage = Util.getInt(props['initIndex']) ?? 0;
    double viewportFraction = Util.getDouble(props['viewportFraction'],range: Range(min:0,max: 1.0)) ?? 1.0;
    PageController controller;
    if (model.controller != null && model.controller is PageController) {
      controller = model.controller;
    } else {
      controller = PageController(initialPage: initPage > children.length - 1 ? 0 : initPage,viewportFraction:viewportFraction);
      model.controller = controller;
    }

    return DFSwiperView(
      model,
      row: Util.getBoolean(props['row'], nullIsTrue: true),
      controller: controller,
      children: children,
      onChange: eventGlobalHandlerWithParam(pageName: model.pageName, widgetId: model.widgetId, eventId: model.props['_onChangeId'], type: 'onChange')
    );
  }
}
