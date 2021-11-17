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
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/basic/util.dart';

/// 基础组件 DFBreath
class DFBreath extends DFBasicWidget {
  DFBreath(
    this.model, {
    Key key,
    this.duration,
    this.from,
    this.to,
    this.content,
    this.controller,
  }) : super(model, key: key);

  final DynamicModel model;
  final int duration; // 旋转一周耗时
  final double from; // 缩放开始比例
  final double to; // 缩放结束比例
  final Widget content;
  final DFStopAlwaysRenderController controller;

  @override
  Widget buildMainWidget(BuildContext context) {
    return _DFBreath(duration, from, to, content, controller);
  }
}

class _DFBreath extends StatefulWidget {
  _DFBreath(this.duration, this.from, this.to, this.content, this.controller);

  final int duration;
  final double from;
  final double to;
  final Widget content;
  final DFStopAlwaysRenderController controller;

  @override
  State<StatefulWidget> createState() => _DFBreathState();
}

class _DFBreathState extends State<_DFBreath>
    with SingleTickerProviderStateMixin {
  AnimationController animationController;
  bool shouldRender = true;

  @override
  void initState() {
    super.initState();
    widget.controller.currentState = this;
    animationController = AnimationController(
      duration: Duration(milliseconds: widget.duration),
      vsync: this,
      lowerBound: widget.from,
      upperBound: widget.to
    );
    animationController.addStatusListener((status) async {
      if (status == AnimationStatus.completed) {
        animationController.reverse();
      }if (status == AnimationStatus.dismissed) {
        animationController.forward();
      }
    });
    animationController.forward();
  }

  @override
  void dispose() {
    animationController.dispose();
    dynamicApp?.stopAlwaysRenderControllers?.remove(widget.controller);
    widget.controller.dispose();
    super.dispose();
  }

  stopRender() {
    setState(() {
      shouldRender = false;
      animationController.dispose();
    });
  }

  @override
  Widget build(BuildContext context) {
    if (shouldRender)
      return ScaleTransition(
        alignment: Alignment.center,
        scale: animationController,
        child: widget.content ?? Container(),
      );
    return Container();
  }
}

class ProxyDFBreath extends ProxyBase {
  DFStopAlwaysRenderController controller;

  static void register() {
    ProxyDFBreath instance = ProxyDFBreath();
    RegisterWidget().register(
      widgetName: 'Breath',
      constructor: instance.constructor,
    );
  }

  DFBreath constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    Map<String, dynamic> buildProps = model.buildProps;

    if (model.controller != null &&
        model.controller is DFStopAlwaysRenderController) {
      controller = model.controller;
    } else {
      controller = DFStopAlwaysRenderController();
      model.controller = controller;
      controller.name = 'Breath';
      dynamicApp?.stopAlwaysRenderControllers?.add(controller);
    }

    return DFBreath(
      model,
      duration: Util.getInt(props['duration']) ?? 3000,
      from: Util.getDouble(props['from']) ?? 0.0,
      to: Util.getDouble(props['to']) ?? 1.0,
      content: buildProps['content'],
      controller: controller,
    );
  }
}
