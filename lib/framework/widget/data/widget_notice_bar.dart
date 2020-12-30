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
import 'package:thresh/basic/global_def.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/framework/core/dynamic_app.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/widget_basic.dart';

class DFNoticeBar extends DFBasicWidget {
  DFNoticeBar(
    DynamicModel model, {
    Key key,
    this.controller,
    this.gutter,
    this.speed,
    this.prefix,
    this.suffix,
    this.children,
  }) : super(model, key: key);

  final DFStopAlwaysRenderController controller;
  final double speed;
  final double gutter;
  final Widget prefix;
  final Widget suffix;
  final List<Widget> children;

  Widget buildMainWidget(BuildContext context) {
    return _DFNoticeBar(
      speed: speed,
      prefix: prefix,
      suffix: suffix,
      children: children,
      gutter: gutter,
      stopAlwaysRenderontroller: controller,
    );
  }
}

class _DFNoticeBar extends StatefulWidget {
  _DFNoticeBar({
    Key key,
    @required this.children,
    this.speed = 30,
    this.prefix,
    this.suffix,
    this.gutter,
    this.stopAlwaysRenderontroller,
  }) : super(key: key);

  final List<Widget> children;
  final double gutter;
  final double speed;
  final Widget prefix;
  final Widget suffix;
  final DFStopAlwaysRenderController stopAlwaysRenderontroller;

  @override
  State<StatefulWidget> createState() => _DFNoticeBarState();
}

class _DFNoticeBarState extends State<_DFNoticeBar>
    with SingleTickerProviderStateMixin {
  GlobalKey childWrapperKey = GlobalKey();
  GlobalKey childKey = GlobalKey();
  double childWrapperWidth = 0;
  double childWidth = 0;
  double childHeight = 0;
  bool needAnimation = false;
  AnimationController animationController;

  bool get isSingleChild => widget.children.length <= 1;

  @override
  void initState() {
    super.initState();
    widget.stopAlwaysRenderontroller?.currentState = this;
    WidgetsBinding.instance.addPostFrameCallback((duration) {
      childWrapperWidth = childWrapperKey.currentContext.size.width;
      childWidth = childKey.currentContext.size.width;
      childHeight = childKey.currentContext.size.height;
      needAnimation = !(childWidth <= childWrapperWidth && isSingleChild);
      setState(() {});
      if (!needAnimation) return;
      initTransitionAnimation();
    });
  }

  stopRender() {
    animationController.stop();
  }

  initTransitionAnimation() {
    final double distance = childWidth;
    double timeSpend = distance / widget.speed;
    if (timeSpend < 1) timeSpend = 1;

    animationController = AnimationController(
      lowerBound: 0,
      upperBound: 1,
      vsync: this,
      duration: Duration(seconds: timeSpend.toInt()),
    );
    animationController.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        animationController.reset();
        animationController.forward();
      }
    });
    animationController.forward();
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        widget.prefix ?? Container(),
        Expanded(
          child: Container(
            key: childWrapperKey,
            child: Stack(
              children: <Widget>[
                Container(width: childWrapperWidth, height: childHeight),
                Positioned(
                  top: 0,
                  left: 0,
                  child: buildNotice(),
                ),
              ],
            ),
          ),
        ),
        widget.suffix ?? Container(),
      ],
    );
  }

  Widget buildNotice() {
    final Widget notice = isSingleChild ? buildSingleNotice() : buildNoticeList();
    if (animationController == null) return notice;
    return SlideTransition(
      position: Tween<Offset>(begin: Offset.zero, end: Offset(-1, 0)).animate(animationController),
      child: notice,
    );
  }

  Widget buildSingleNotice() {
    final Widget child = widget.children.first;
    if (child == null) return Container();
    return Row(
      children: <Widget>[
        Container(
          width: needAnimation ? childWrapperWidth : 0,
        ),
        Container(
          key: childKey,
          child: child,
        ),
      ],
    );
  }

  Widget buildNoticeList() {
    return Row(
      key: childKey,
      children: widget.children.map((child) {
        final bool isFirst = widget.children.first == child;
        return Container(
          padding: EdgeInsets.only(left: isFirst
            ? childWrapperWidth
            : widget.gutter ?? childWrapperWidth
          ),
          child: child,
        );
      }).toList(),
    );
  }

  @override
  void dispose() {
    animationController?.stop();
    animationController?.dispose();
    widget.stopAlwaysRenderontroller?.dispose();
    super.dispose();
  }
}

class ProxyDFNoticeBar extends ProxyBase {
  DFStopAlwaysRenderController controller;

  static void register() {
    ProxyDFNoticeBar instance = ProxyDFNoticeBar();
    RegisterWidget().register(
      widgetName: 'NoticeBar',
      constructor: instance.constructor,
    );
  }

  DFNoticeBar constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    Map<String, dynamic> buildProps = model.buildProps;

    if (model.controller != null && model.controller is DFStopAlwaysRenderController) {
      controller = model.controller;
    } else {
      controller = DFStopAlwaysRenderController();
      model.controller = controller;
      controller.name = 'Notice';
      dynamicApp?.stopAlwaysRenderControllers?.add(controller);
    }

    final double gutter = Util.getDouble(props['gutter']);

    return DFNoticeBar(model,
      controller: controller,
      gutter: gutter != null && gutter < 0 ? 0 : gutter,
      speed: Util.getDouble(props['speed']) ?? 30,
      prefix: buildProps['prefix'],
      suffix: buildProps['suffix'],
      children: Util.getWidgetList(buildProps['children']),
    );
  }
}
