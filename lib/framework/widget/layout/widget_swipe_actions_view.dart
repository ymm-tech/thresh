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

import 'package:thresh/framework/main.dart';
import 'package:flutter/material.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/basic/util.dart';

/// 基础组件 DFSwipeActionsView
class DFSwipeActionsView extends DFBasicWidget {
  DFSwipeActionsView(DynamicModel model, {
    Key key,
    this.controller,
    this.content,
    this.swipeSide,
    this.swipeMaxDistance,
    this.autoClose,
    this.open,
    this.actions,
    this.onActionsOpen,
    this.onActionsClose,
  }) : super(model, key: key);

  final SwipeActionsViewController controller;
  final Widget content;
  final String swipeSide;
  final double swipeMaxDistance;
  final bool autoClose;
  final bool open;
  final List<Widget> actions;
  final VoidGlobalHandler onActionsOpen;
  final VoidGlobalHandler onActionsClose;

  Widget buildMainWidget(BuildContext context) {
    return _DFSwipeActionsView(
      controller: controller,
      content: content,
      swipeSide: swipeSide,
      swipeMaxDistance: swipeMaxDistance,
      autoClose: autoClose,
      open: open,
      actions: actions,
      onActionsOpen: onActionsOpen,
      onActionsClose: onActionsClose,
    );
  }
}

class _DFSwipeActionsView extends StatefulWidget {
  _DFSwipeActionsView({
    this.controller,
    this.content,
    this.swipeSide,
    this.swipeMaxDistance,
    this.autoClose,
    this.open,
    this.actions,
    this.onActionsOpen,
    this.onActionsClose,
  });

  final SwipeActionsViewController controller;
  final Widget content;
  final String swipeSide;
  final double swipeMaxDistance;
  final bool autoClose;
  final bool open;
  final List<Widget> actions;
  final VoidGlobalHandler onActionsOpen;
  final VoidGlobalHandler onActionsClose;

  @override
  State<StatefulWidget> createState() => _DFSwipeActionsViewState();
}

class _DFSwipeActionsViewState extends State<_DFSwipeActionsView> with SingleTickerProviderStateMixin {
  bool isOpening = false;
  double offset = 0;
  AnimationController animation;

  @override
  void initState() {
    super.initState();
    widget.controller.state = this;
    if (!hasSwipeItems) {
      widget.controller.animation = null;
      return;
    } 
    if (widget.open) {
      offset = offset + widget.swipeMaxDistance;
      isOpening = true;
    }
    animation = AnimationController(
      lowerBound: 0,
      upperBound: widget.swipeMaxDistance,
      duration: Duration(milliseconds: 200),
      vsync: this,
    )
    ..addListener(() {
      setState(() {
        offset = animation.value;
        if (offset == 0.0 && isOpening) {
          isOpening = false;
          widget.onActionsClose?.call();
        }
        if (offset == widget.swipeMaxDistance && !isOpening) {
          isOpening = true;
          widget.onActionsOpen?.call();
        }
      });
    });
    widget.controller.animation = animation;
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    widget.controller.state = this;
  }

  @override
  void dispose() {
    animation?.dispose();
    super.dispose();
  }

  // 是否水平滑动
  bool get isHorizontal => widget.swipeSide == 'left' || widget.swipeSide == 'right';

  // 滑动侧是否为左侧或上侧
  bool get isLeading => widget.swipeSide == 'left' || widget.swipeSide == 'top';

  bool get hasSwipeItems => widget.swipeMaxDistance != null &&
                       widget.swipeMaxDistance > 0 &&
                       widget.actions != null &&
                       widget.actions.length > 0;

  @override
  Widget build(BuildContext context) {
    if (!hasSwipeItems) return widget.content;
    return Stack(
      children: <Widget>[
        AnimatedOpacity(opacity: 0, duration: Duration(milliseconds: 100),child: widget.content,), // 该组件用来撑起 Stack 高度
        buildSwipeItems(),
        Positioned(
          left: isHorizontal
            ? isLeading ? offset : -offset
            : 0,
          right: isHorizontal
            ? isLeading ? -offset : offset
            : 0,
          top: isHorizontal
            ? 0
            : isLeading ? offset : -offset,
          bottom: isHorizontal
            ? 0
            : isLeading ? -offset : offset,
          child: isHorizontal
            ? GestureDetector(
              child: widget.content,
              onHorizontalDragUpdate: (e) {
                swipeUpdate(e.delta.dx);
              },
              onHorizontalDragEnd: (e) {
                swipeEnd();
              }
            )
            : GestureDetector(
              child: widget.content,
              onVerticalDragUpdate: (e) {
                swipeUpdate(e.delta.dy);
              },
              onVerticalDragEnd: (e) {
                swipeEnd();
              }
            ),
        ),
      ],
    );
  }

  swipeUpdate (double delta) {
    setState(() {
      if (isLeading) {
        offset += delta;
        if (offset <= 0) offset = 0;
        if (offset >= widget.swipeMaxDistance) offset = widget.swipeMaxDistance;
      } else {
        offset -= delta;
        if (offset <= 0) offset = 0;
        if (offset >= widget.swipeMaxDistance) offset = widget.swipeMaxDistance;
      }
    });
  }

  swipeEnd () {
    animation.value = offset;
    if (offset < widget.swipeMaxDistance / 2) animation.animateTo(0);
    else animation.animateTo(widget.swipeMaxDistance);
  }

  Widget buildSwipeItems() {
    return Positioned(
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      child: isHorizontal ? Row(
        mainAxisAlignment: isLeading ? MainAxisAlignment.start : MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: buildSwipeInnerItems(),
      ): Column(
        mainAxisAlignment: isLeading ? MainAxisAlignment.start : MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: buildSwipeInnerItems(),
      ),
    );
  }

  List<Widget> buildSwipeInnerItems() {
    return widget.actions.map((item) {
      return isHorizontal ? Column(
        children: <Widget>[
          Expanded(
            child: widget.autoClose ? GestureDetector(
              child: item,
              onTap: () {
                animation.animateTo(0);
              }
            ) : item,
          )
        ],
      ) : Row(
        children: <Widget>[
          Expanded(
            child: widget.autoClose ? GestureDetector(
              child: item,
              onTap: () {
                animation.animateTo(0);
              }
            ) : item,
          )
        ],
      );
    }).toList();
  }
}

List<String> _swipeSides = [ 'right', 'left', 'top', 'bottom' ];

class ProxyDFSwipeActionsView extends ProxyBase {
  static void register() {
    ProxyDFSwipeActionsView instance = ProxyDFSwipeActionsView();
    RegisterWidget().register(
      widgetName: 'SwipeActionsView',
      constructor: instance.constructor,
    );
  }

  DFSwipeActionsView constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    Map<String, dynamic> buildProps = model.buildProps;

    SwipeActionsViewController controller;
    if (model.controller != null && model.controller is SwipeActionsViewController) {
      controller = model.controller;
    } else {
      controller = SwipeActionsViewController();
      model.controller = controller;
    }

    String swipeSide = Util.getString(props['swipeSide']);
    if (!_swipeSides.contains(swipeSide)) swipeSide = _swipeSides.first;

    return DFSwipeActionsView(
      model,
      controller: controller,
      content: buildProps['content'] as Widget,
      swipeSide: swipeSide,
      swipeMaxDistance: Util.getDouble(props['swipeMaxDistance']),
      autoClose: Util.getBoolean(props['autoClose'], nullIsTrue: true),
      open: Util.getBoolean(props['open']),
      actions: Util.getWidgetList(buildProps['actions']),
      onActionsOpen: eventGlobalVoidHandler(pageName: model.pageName, widgetId: model.widgetId, eventId: model.props['_onActionsOpenId'], type: 'onActionsOpen'),
      onActionsClose: eventGlobalVoidHandler(pageName: model.pageName, widgetId: model.widgetId, eventId: model.props['_onActionsCloseId'], type: 'onActionsClose'),
    );
  }
}

class SwipeActionsViewController {
  _DFSwipeActionsViewState state;
  AnimationController animation;

  openActions() {
    if (!_continue() || state.isOpening) return;
    animation?.animateTo(state.widget.swipeMaxDistance);
  }

  closeActions() {
    if (!_continue() || !state.isOpening) return;
    animation?.animateTo(0);
  }

  bool _continue() {
    return state != null && animation != null;
  }
}
