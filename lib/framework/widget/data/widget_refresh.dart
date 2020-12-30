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

import 'package:thresh/basic/global_def.dart';
import 'package:thresh/framework/core/dynamic_app.dart';
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/framework/widget/widget_basic.dart';

/// 基础组件 DFRefresh
class DFRefresh extends DFBasicWidget {
  DFRefresh(DynamicModel model, {
    Key key,
    this.color,
    this.secondColor,
    this.size,
    this.strokeWidth,
    this.controller,
  }) : super(model, key: key);

  final Color color;
  final Color secondColor;
  final double size;
  final double strokeWidth;
  final DFStopAlwaysRenderController controller;

  @override
  Widget buildMainWidget(BuildContext context) {
    return _DFRefresh(
      color: color,
      secondColor: secondColor,
      size: size,
      strokeWidth: strokeWidth,
      controller: controller,
    );
  }
}

class _DFRefresh extends StatefulWidget {
  _DFRefresh({
    this.color,
    this.secondColor,
    this.size,
    this.strokeWidth,
    this.controller,
  });

  final Color color;
  final Color secondColor;
  final double size;
  final double strokeWidth;
  final DFStopAlwaysRenderController controller;

  @override
  State<StatefulWidget> createState() => _DFRefreshState();
}

class _DFRefreshState extends State<_DFRefresh> {
  bool shouldRender = true;

  @override
  void initState() {
    super.initState();
    widget.controller.currentState = this;
  }

  @override
  dispose() {
    dynamicApp?.stopAlwaysRenderControllers?.remove(widget.controller);
    widget.controller.dispose();
    super.dispose();
  }

  stopRender() {
    setState(() {
      shouldRender = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (shouldRender) return Container(
      width: widget.size,
      height: widget.size,
      child: CircularProgressIndicator(
        strokeWidth: widget.strokeWidth,
        backgroundColor: widget.secondColor,
        valueColor: AlwaysStoppedAnimation<Color>(widget.color),
      ),
    );
    return Container();
  }
}

class ProxyDFRefresh extends ProxyBase {
  DFStopAlwaysRenderController controller;

  static void register() {
    ProxyDFRefresh instance = ProxyDFRefresh();
    RegisterWidget().register(
      widgetName: 'Refresh',
      constructor: instance.constructor,
    );
  }

  DFRefresh constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;

    if (model.controller != null && model.controller is DFStopAlwaysRenderController) {
      controller = model.controller;
    } else {
      controller = DFStopAlwaysRenderController();
      model.controller = controller;
      controller.name = 'Refresh';
      dynamicApp?.stopAlwaysRenderControllers?.add(controller);
    }

    return DFRefresh(
      model,
      color: Util.getColor(props['color']),
      secondColor: Util.getColor(props['secondColor']) ?? Colors.transparent,
      size: Util.getDouble(props['size']) ?? 20.0,
      strokeWidth: Util.getDouble(props['strokeWidth']) ?? 4.0,
      controller: controller,
    );
  }
}


