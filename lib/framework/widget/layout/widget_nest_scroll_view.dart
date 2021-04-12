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

import 'dart:ui';
import 'dart:math' as math;
import 'package:thresh/basic/global_def.dart';
import 'package:flutter/material.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/basic/util.dart';

const double _TriggerAutoAnimateDistance = 50; // 触发自动吸顶或触低效果时拖动的距离
const Duration _Duration = Duration(milliseconds: 300); // 上滑 or 下滑事件间隔
const Curve _Curve = Curves.easeInOut;

/// 基础组件 DFNestScrollView
class DFNestScrollView extends DFBasicWidget {
  DFNestScrollView(this.model, {
    Key key,
    this.offset,
    this.appBar,
    this.children,
    this.backgroundView,
    this.maskView,
    this.fixedBottomView,
    this.customController,
    this.onScroll,
    this.onDragStatusChange,
  }) : super(model, key: key);

  final DynamicModel model;
  final double offset;
  final PreferredSizeWidget appBar;
  final List<Widget> children; // 页面主体视图
  final Widget backgroundView; // 页面背景视图
  final Widget maskView; // 页面拉起时的遮罩视图
  final Widget fixedBottomView; // 上拉时固定在页面底部的视图
  final DFNestScrollViewCustomController customController;
  final ParamGlobalHandler onScroll;
  final ParamGlobalHandler onDragStatusChange;

  @override
  Widget buildMainWidget(BuildContext context) {
    return _DFNestScrollView(
      offset: offset,
      appBar: appBar,
      children: children,
      backgroundView: backgroundView,
      maskView: maskView,
      fixedBottomView: fixedBottomView,
      customController: customController,
      onScroll: onScroll,
      onDragStatusChange: onDragStatusChange,
    );
  }
}

class _DFNestScrollView extends StatefulWidget {
  _DFNestScrollView({
    this.offset,
    this.appBar,
    this.children,
    this.backgroundView,
    this.maskView,
    this.fixedBottomView,
    this.customController,
    this.onScroll,
    this.onDragStatusChange,
  });

  final double offset;
  final PreferredSizeWidget appBar;
  final List<Widget> children;
  final Widget backgroundView;
  final Widget maskView;
  final Widget fixedBottomView;
  final DFNestScrollViewCustomController customController;
  final ParamGlobalHandler onScroll;
  final ParamGlobalHandler onDragStatusChange;

  @override
  State<StatefulWidget> createState() => _DFNestScrollViewState();
}

class _DFNestScrollViewState extends State<_DFNestScrollView> with TickerProviderStateMixin {
  WidgetsBinding widgetsBinding;
  Size nestScrollViewSize;
  Size contentViewSize;
  double showAppBarDistance = 0; //  显示 app bar 的主体部分 offset distance
  double initOffset;
  bool isInitStatus = true; // 是否为初始状态
  bool inAutoScroll = false; // 是否在自动滚动状态

  double offset = 0;
  double opacity = 0;
  AnimationController dragController;
  AnimationController fadeController;
  ScrollController scrollController = ScrollController();
  _DFNestScrollViewController nestScrollController;
  _NestScrollPhysics physics;

  @override
  void initState() {
    super.initState();
    initOrUpdateOffsetsInfos();
    initAnimationControllers();
    addFrameListener();
    nestScrollController = _DFNestScrollViewController((delta) {
      onDragUpUpdate(delta);
    });
    physics = _NestScrollPhysics(nestScrollController);
    initCustomController(); // 初始化自定义controller
  }

  @override
  void didUpdateWidget(_DFNestScrollView oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.offset != oldWidget.offset || widget.appBar != oldWidget.appBar) {
      initOrUpdateOffsetsInfos();
      setState(() {});
    }
  }

  @override
  void dispose() {
    dragController?.dispose();
    fadeController?.dispose();
    super.dispose();
  }

  addFrameListener() {
    widgetsBinding = WidgetsBinding.instance;
    widgetsBinding.addPostFrameCallback((callback) {
      setState(() {
        nestScrollViewSize = Size.copy(context.size);
      });
    });
  }

  initOrUpdateOffsetsInfos() {
    initOffset = widget.offset;
    showAppBarDistance = widget.appBar == null
      ? 0
      : widget.appBar.preferredSize.height + MediaQueryData.fromWindow(window).padding.top;
    if (isInitStatus) offset = initOffset;
  }

  initAnimationControllers() {
    dragController = AnimationController(
      lowerBound: showAppBarDistance,
      upperBound: initOffset,
      vsync: this,
    );
    dragController.value = initOffset;
    dragController.addListener(() {
      setState(() {
        offset = dragController.value;
      });
    });
    dragController.addStatusListener((status) {
      if (status != AnimationStatus.completed) return;
      inAutoScroll = false;

      if (dragController.value == initOffset && isInitStatus) return;
      if (dragController.value == showAppBarDistance && !isInitStatus) return;

      if (dragController.value == initOffset && !isInitStatus) {
        isInitStatus = true;
        fadeController.reverse();
        scrollController.jumpTo(0);
      }
      if (dragController.value == showAppBarDistance && isInitStatus) {
        isInitStatus = false;
        fadeController.forward();
      }
      widget.onDragStatusChange?.call({ 'isInitStatus': isInitStatus });
      nestScrollController.triggerAllowScrolling(!isInitStatus);
    });

    fadeController = AnimationController(
      duration: _Duration,
      vsync: this,
    );
    fadeController.value = opacity;
    fadeController.addListener(() {
      setState(() {
        opacity = fadeController.value;
      });
    });
  }

  initCustomController() {
    widget.customController.setDragControlelr(dragController);
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        // 背景视图
        widget.backgroundView ?? Container(constraints: BoxConstraints.expand(),),

        // 背景颜色
        opacity == 0 || widget.maskView == null
          ? Container()
          : Positioned(
            top: widget.appBar == null ? 0 : showAppBarDistance, left: 0, right: 0, bottom: 0,
            child: Opacity(
              opacity: opacity,
              child: Container(
                constraints: BoxConstraints.expand(),
                child: widget.maskView,
              ),
            ),
          ),

        // 主视图
        Transform.translate(
          key: ValueKey('mainContentView'),
          offset: Offset(0, offset),
          child: GestureDetector(
            child: buildContent(),
            onVerticalDragUpdate: (e) {
              if (isInitStatus) onDragUpUpdate(e.delta.dy);
              else onDragDownUpdate(e.delta.dy);
            },
            onVerticalDragEnd: (e) {
              onDragEnd();
            },
          ),
        ),

        // AppBar
        opacity == 0 || widget.appBar == null
            ? Container()
            : Positioned(
                top: 0,
                left: 0,
                right: 0,
                height: showAppBarDistance,
                child: Opacity(
                  opacity: opacity,
                  child: MediaQuery.removePadding(
                      context: context,
                      removeBottom: true,
                      child: widget.appBar),
                ),
              ),
      ],
    );
  }

  Widget buildContent() {
    if (widget.children.isEmpty || nestScrollViewSize == null)
      return Container();
    Widget content = Container(
      width: nestScrollViewSize.width,
      height: nestScrollViewSize.height - showAppBarDistance,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Expanded(
            child: NotificationListener(
              onNotification: (ScrollUpdateNotification e) {
                triggerOnScroll(e.metrics.pixels);
                return true;
              },
              child: NotificationListener(
                onNotification: (OverscrollNotification e) {
                  if (e.dragDetails == null || isInitStatus) return true;
                  onDragDownUpdate(e.dragDetails.delta.dy);
                  return true;
                },
                child: NotificationListener(
                  onNotification: (ScrollEndNotification e) {
                    triggerOnScroll(e.metrics.pixels);
                    onDragEnd();
                    return true;
                  },
                  child: SingleChildScrollView(
                    controller: scrollController,
                    physics: physics,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: widget.children,
                    ),
                  ),
                ),
              ),
            ),
          ),
          widget.fixedBottomView ?? Container(),
        ],
      ),
    );

    return content;
  }

  double caculateCurrentOffset(double delta) {
    double currentOffset = offset + delta;
    currentOffset = currentOffset < showAppBarDistance
      ? showAppBarDistance
      : currentOffset > initOffset
        ? initOffset
        : currentOffset;
    return currentOffset;
  }

  onDragUpUpdate(double delta) {
    if (!isInitStatus || inAutoScroll) return;
    final double currentOffset = caculateCurrentOffset(delta);
    dragController.value = currentOffset;
    if (initOffset - currentOffset > _TriggerAutoAnimateDistance) {
      inAutoScroll = true;
      dragController.animateTo(showAppBarDistance,
          duration: _Duration, curve: _Curve);
    } else {
      setState(() {
        offset = currentOffset;
      });
    }
  }

  onDragDownUpdate(double delta) {
    if (isInitStatus || inAutoScroll) return;
    final double currentOffset = caculateCurrentOffset(delta);
    dragController.value = currentOffset;
    if (_TriggerAutoAnimateDistance + showAppBarDistance < currentOffset) {
      inAutoScroll = true;
      dragController.animateTo(initOffset, duration: _Duration, curve: _Curve);
    } else {
      setState(() {
        offset = currentOffset;
      });
    }
  }

  onDragEnd() {
    if (initOffset - offset < _TriggerAutoAnimateDistance) {
      // 当滚动间距较大时就触发 向上 or 向下
      dragController.animateTo(initOffset, duration: _Duration, curve: _Curve);
    }
    if (offset - showAppBarDistance < _TriggerAutoAnimateDistance) {
      // 否则，则回弹
      dragController.animateTo(showAppBarDistance,
          duration: _Duration, curve: _Curve);
    }
    nestScrollController.triggerAllowScrolling(!isInitStatus);
  }

  computeOpacity([ double o ]) {
    setState(() {
      opacity = o ?? (initOffset - offset + showAppBarDistance) / initOffset;
    });
  }

  triggerOnScroll(double o) {
    widget.onScroll?.call(o);
  }
}

typedef _CaculateOffset = void Function(double);

class _DFNestScrollViewController {
  _DFNestScrollViewController(this.caculator) : assert(caculator != null);

  bool _allowScrolling = false;
  _CaculateOffset caculator;

  get allowScrolling => _allowScrolling;

  triggerAllowScrolling(bool allow) {
    _allowScrolling = allow;
  }
}

class DFNestScrollViewCustomController {
  AnimationController dragController;

  DFNestScrollViewCustomController();

  setDragControlelr(AnimationController controller) {
    this.dragController = controller;
  }

  setNestScrollViewStatus(bool isOpened) {
    if (this.dragController == null) return;
    if (isOpened) {
      this.dragController.animateTo(this.dragController.lowerBound,
          duration: _Duration, curve: _Curve);
    } else {
      this.dragController.animateTo(this.dragController.upperBound,
          duration: _Duration, curve: _Curve);
    }
  }
}

/// 用于 NestScrollView 的自定义物理滚动效果
/// 当 scrollView 位于底部（初始状态）时，可以触发向上拖拽事件但是不改变内容位置
/// 当 scrollView 位于顶部时，可进行正常的操作
/// 代码修改自 ClampingScrollPhysics
class _NestScrollPhysics extends ScrollPhysics {
  _NestScrollPhysics(this.controller, {
    ScrollPhysics parent
  }) : super(parent: parent);

  final _DFNestScrollViewController controller;

  @override
  _NestScrollPhysics applyTo(ScrollPhysics ancestor) {
    return _NestScrollPhysics(
      this.controller,
      parent: buildParent(ancestor),
    );
  }

  @override
  bool get allowImplicitScrolling => this.controller.allowScrolling;

  @override
  double applyPhysicsToUserOffset(ScrollMetrics position, double offset) {
    this.controller.caculator(offset);
    return this.controller.allowScrolling ? offset : 0;
  }

  @override
  double applyBoundaryConditions(ScrollMetrics position, double value) {
    assert(() {
      if (value == position.pixels) {
        throw FlutterError(
          '$runtimeType.applyBoundaryConditions() was called redundantly.\n'
          'The proposed new position, $value, is exactly equal to the current position of the '
          'given ${position.runtimeType}, ${position.pixels}.\n'
          'The applyBoundaryConditions method should only be called when the value is '
          'going to actually change the pixels, otherwise it is redundant.\n'
          'The physics object in question was:\n'
          '  $this\n'
          'The position object in question was:\n'
          '  $position'
        );
      }
      return true;
    }());
    if (value < position.pixels && position.pixels <= position.minScrollExtent) // underscroll
      return value - position.pixels;
    if (position.maxScrollExtent <= position.pixels && position.pixels < value) // overscroll
      return value - position.pixels;
    if (value < position.minScrollExtent && position.minScrollExtent < position.pixels) // hit top edge
      return value - position.minScrollExtent;
    if (position.pixels < position.maxScrollExtent && position.maxScrollExtent < value) // hit bottom edge
      return value - position.maxScrollExtent;
    return 0.0;
  }

  @override
  Simulation createBallisticSimulation(ScrollMetrics position, double velocity) {
    // 当不允许滚动时需要禁用惯性效果
    if (!this.controller.allowScrolling) return null;
    final Tolerance tolerance = this.tolerance;
    if (position.outOfRange) {
      double end;
      if (position.pixels > position.maxScrollExtent)
        end = position.maxScrollExtent;
      if (position.pixels < position.minScrollExtent)
        end = position.minScrollExtent;
      assert(end != null);
      return ScrollSpringSimulation(
        spring,
        position.pixels,
        end,
        math.min(0.0, velocity),
        tolerance: tolerance,
      );
    }
    if (velocity.abs() < tolerance.velocity)
      return null;
    if (velocity > 0.0 && position.pixels >= position.maxScrollExtent)
      return null;
    if (velocity < 0.0 && position.pixels <= position.minScrollExtent)
      return null;
    return ClampingScrollSimulation(
      position: position.pixels,
      velocity: velocity,
      tolerance: tolerance,
    );
  }
}

class ProxyDFNestScrollView extends ProxyBase {
  static void register() {
    ProxyDFNestScrollView instance = ProxyDFNestScrollView();
    RegisterWidget().register(
      widgetName: 'NestScrollView',
      constructor: instance.constructor,
    );
  }

  DFNestScrollView constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    Map<String, dynamic> buildProps = model.buildProps;

    DFNestScrollViewCustomController customController;
    if (model.controller != null &&
        model.controller is DFNestScrollViewCustomController) {
      customController = model.controller;
    } else {
      customController = DFNestScrollViewCustomController();
      model.controller = customController;
    }

    return DFNestScrollView(
      model,
      offset: Util.getDouble(props['offset']) ?? 0,
      appBar: buildProps['appBar'] as PreferredSizeWidget,
      children: Util.getWidgetList(buildProps['children']),
      backgroundView: buildProps['backgroundView'],
      maskView: buildProps['maskView'],
      fixedBottomView: buildProps['fixedBottomView'],
      onScroll: getOnScrollDebouncedMethod(eventGlobalHandlerWithParam(pageName: model.pageName, widgetId: model.widgetId, eventId: model.props['_onScrollId'], type: 'onScroll')),
      onDragStatusChange: eventGlobalHandlerWithParam(pageName: model.pageName, widgetId: model.widgetId, eventId: model.props['_onDragStatusChangeId'], type: 'onDragStatusChange'),
      customController: customController,
    );
  }

  Function getOnScrollDebouncedMethod(Function onScroll) {
    if (onScroll == null) return null;
    return Util.throttle((offset) {
      onScroll({ 'offset': offset });
    });
  }
}
