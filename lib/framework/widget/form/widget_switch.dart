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
import 'package:flutter/cupertino.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/basic/global_def.dart';

/// 基础组件 DFSwitch
class DFSwitch extends DFBasicWidget {
  DFSwitch(
    DynamicModel model, {
    Key key,
    @required this.value,
    @required this.onChanged,
    this.activeColor,
    this.activeTrackColor,
    this.inactiveThumbColor,
    this.inactiveTrackColor,
    this.isAndroidStyle,
  }) : super(model, key: key);

  final bool value;
  final Color activeColor;
  final Color activeTrackColor;
  final Color inactiveThumbColor;
  final Color inactiveTrackColor;
  final ParamGlobalHandler onChanged;
  final bool isAndroidStyle;

  @override
  Widget buildMainWidget(BuildContext context) {
    Widget dfSwitch;
    if (this.isAndroidStyle) {
      dfSwitch = Switch(
        value: value,
        activeColor: activeColor,
        activeTrackColor: activeTrackColor,
        inactiveThumbColor: inactiveThumbColor,
        inactiveTrackColor: inactiveTrackColor,
        onChanged: (bool value) {
          invokeOnChanged(value);
        },
      );
    } else {
      dfSwitch = CupertinoSwitch(
        value: value,
        activeColor: activeColor,
        onChanged: (bool value) {
          invokeOnChanged(value);
        },
      );
    }
    return dfSwitch;
  }

  void invokeOnChanged(bool value) {
    onChanged({'value': value});
  }
}

class ProxyDFSwitch extends ProxyBase {
  static void register() {
    ProxyDFSwitch instance = ProxyDFSwitch();
    RegisterWidget().register(
      widgetName: 'Switch',
      constructor: instance.constructor,
    );
  }

  DFSwitch constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    return DFSwitch(model,
        value: Util.getBoolean(props['value']),
        activeColor: Util.getColor(props['activeColor']) ?? Colors.blue,
        isAndroidStyle: Util.getBoolean(props['isAndroidStyle']) ?? false,
        activeTrackColor:
            Util.getColor(props['activeTrackColor']) ?? Colors.blue,
        inactiveThumbColor:
            Util.getColor(props['inactiveThumbColor']) ?? Colors.blueGrey,
        inactiveTrackColor:
            Util.getColor(props['inactiveTrackColor']) ?? Colors.blueGrey,
        onChanged: eventGlobalHandlerWithParam(
            pageName: model.pageName,
            widgetId: model.widgetId,
            eventId: model.props['_onChangeId'],
            type: 'onChange'));
  }
}
