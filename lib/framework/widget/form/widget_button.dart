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

/// 基础组件 DFButton
class DFButton extends DFBasicWidget {
  DFButton(DynamicModel model, {
    Key key,
    this.child,
  }) : super(
    model,
    key: key,
    backgroundColor: Colors.white,
    tapOpacity: 0.5,
  );

  final Widget child;

  @override
  Widget buildMainWidget(BuildContext context) {
    return Container(
      color: Colors.transparent,
      alignment: Alignment.center,
      child: child,
    );
  }
}

class ProxyDFButton extends ProxyBase {
  static void register() {
    ProxyDFButton instance = ProxyDFButton();
    RegisterWidget().register(
      widgetName: 'Button',
      constructor: instance.constructor,
    );
  }

  DFButton constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> buildProps = model.buildProps;
    return DFButton(
      model,
      child: buildProps['child'],
    );
  }
}
