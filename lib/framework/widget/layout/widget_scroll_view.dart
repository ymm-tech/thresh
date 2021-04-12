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
import 'package:thresh/framework/core/dynamic_widget.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/basic/global_def.dart';

/// 基础组件 DFScrollView
class DFScrollView extends DFBasicWidget {
  DFScrollView(
    DynamicModel model, {
    Key key,
    this.scrollable = true,
    this.direction = 'vertical',
    this.padding,
    this.controller,
    this.children,
    this.onScroll,
  }) : super(model, key: key);

  final bool scrollable;
  final String direction;
  final EdgeInsets padding;
  final ScrollController controller;
  final List<Widget> children;
  final ParamGlobalHandler onScroll;

  @override
  Widget buildMainWidget(BuildContext context) {
    bool isVertical = direction == 'vertical';
    return MediaQuery.removePadding(
      removeTop: true,
      removeBottom: true,
      context: context,
      child: NotificationListener<ScrollNotification>(
        onNotification: (notification) {
          if (onScroll == null) return true;
          onScroll(notification.metrics.pixels.toInt());
          return true;
        },
        child: NotificationListener(
          onNotification: (ScrollEndNotification notification) {
            if (onScroll == null) return true;
            onScroll(notification.metrics.pixels.toInt());
            return true;
          },
          child: ListView(
            controller: controller,
            padding: padding,
            scrollDirection: isVertical ? Axis.vertical : Axis.horizontal,
            physics: scrollable
                ? AlwaysScrollableScrollPhysics()
                : NeverScrollableScrollPhysics(),
            children: [
              Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: children.map((child) {
                  return isVertical
                      ? Column(
                          children: [child],
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                        )
                      : Row(
                          children: [child],
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                        );
                }).toList(),
              )
            ],
          ),
        ),
      ),
    );
  }

  static bool isScrollView(Widget w) {
    return ((w is DynamicWidget) && (w.widgetInstance is DFScrollView)) ||
        (w is DFScrollView);
  }
}

class ProxyDFScrollView extends ProxyBase {
  static void register() {
    ProxyDFScrollView instance = ProxyDFScrollView();
    RegisterWidget().register(
      widgetName: 'ScrollView',
      constructor: instance.constructor,
    );
  }

  DFScrollView constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    Map<String, dynamic> buildProps = model.buildProps;

    ScrollController controller;
    if (model.controller != null && model.controller is ScrollController) {
      controller = model.controller;
    } else {
      controller = ScrollController();
      model.controller = controller;
    }

    return DFScrollView(
      model,
      controller: controller,
      scrollable: Util.getBoolean(props['scrollable'], nullIsTrue: true),
      direction: Util.getDirection(props['direction']),
      padding: Util.getEdgeInsets(props['padding']),
      children: Util.getWidgetList(buildProps['children']),
      onScroll: getOnScrollDebouncedMethod(eventGlobalHandlerWithParam(
          pageName: model.pageName,
          widgetId: model.widgetId,
          eventId: model.props['_onScrollId'],
          type: 'onScroll')),
    );
  }

  Function getOnScrollDebouncedMethod(Function onScroll) {
    if (onScroll == null) return null;
    return Util.throttle((offset) {
      onScroll({'offset': offset});
    });
  }
}
