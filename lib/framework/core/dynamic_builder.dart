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
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_widget.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/devtools/dev_tools.dart';

_DynamicBuilder dynamicBuilder = _DynamicBuilder();
RegisterWidget _registerWidget = RegisterWidget();

/// 构建调度，用来构建和更新widgetTree
class _DynamicBuilder {
  static _DynamicBuilder _instance;
  static _DynamicBuilder getInstance() {
    if (_instance == null) {
      _instance = _DynamicBuilder._();
    }
    return _instance;
  }

  factory _DynamicBuilder() => _DynamicBuilder.getInstance();
  _DynamicBuilder._();

  /// 将widgetModel构建为widgetTree
  Widget buildWidgetWithModel(DynamicModel model, [BuildContext context]) {
    if (dynamicApp == null) return Container();
    Widget buildRes =
        _registerWidget.render(model, context ?? dynamicApp.context);
    if (buildRes is DynamicWidget) model.dynamicWidget = buildRes;
    // printModelBuildRes(model, buildRes);
    return buildRes;
  }
}

void printModelBuildRes(DynamicModel model, dynamic buildRes) {
  List<String> content = [
    '[type] - ${model.name}',
    '[widgetId] - ${model.widgetId}',
    '[buildRes] - $buildRes',
  ];
  if (buildRes is DynamicWidget) {
    content.add('[widgetInstance] - ${buildRes.widgetInstance}');
  }
  devtools.insert(
    InfoType.render,
    DevInfo(
      title: 'Model Build Result',
      content: Util.formatMutipulLineText(content),
    ),
  );
}
