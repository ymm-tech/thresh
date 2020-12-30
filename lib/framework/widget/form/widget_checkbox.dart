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

/// 基础组件 DFCheckbox
class DFCheckbox extends DFBasicWidget {
  DFCheckbox(DynamicModel model, {
    Key key,
    @required this.value,
    @required this.title,
    @required this.onChange,
    this.activeColor,
  }) : super(model, key: key);

  final bool value;
  final Widget title;
  final Color activeColor;
  final ParamGlobalHandler onChange;

  @override
  Widget buildMainWidget(BuildContext context) {
    Checkbox checkbox = Checkbox(
      value: value,
      onChanged: (bool value) {
        invokeOnChanged(value);
      },
      activeColor: activeColor
    );
    return GestureDetector(
      child: Container(
        constraints: BoxConstraints.expand(),
        color: Colors.transparent,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            checkbox,
            title
          ],
        ),
      ),
      onTap: () {
        invokeOnChanged(!value);
      },
    );
  }

  void invokeOnChanged (bool value) {
    onChange({ 'value': value });
  }
}

class ProxyDFCheckbox extends ProxyBase {
  static void register() {
    ProxyDFCheckbox instance = ProxyDFCheckbox();
    RegisterWidget().register(
      widgetName: 'Checkbox',
      constructor: instance.constructor,
    );
  }

  DFCheckbox constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    Map<String, dynamic> buildProps = model.buildProps;
    return DFCheckbox(
      model,
      value: Util.getBoolean(props['value']),
      title: buildProps['title'],
      activeColor: Util.getColor(props['activeColor']) ?? Colors.blue,
      onChange: eventGlobalHandlerWithParam(pageName: model.pageName, widgetId: model.widgetId, eventId: model.props['_onChangeId'], type: 'onChange')
    );
  }
}
