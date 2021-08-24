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
import 'package:thresh/basic/global_def.dart';
import 'package:flutter/material.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/basic/util.dart';

const Duration _dragDuration = Duration(milliseconds: 500); // 上滑 or 下滑事件间隔
const Duration _fadeDuration = Duration(milliseconds: 300);
const Curve _curve = Curves.easeInOut;
typedef _ApplyOffset = double Function(double offset, double pixels);
typedef _ApplyBallistic = bool Function();
typedef _ExecStickyAnimation = TickerFuture Function();

/// 基础组件 DFNestScrollView
class DFNestScrollView extends DFBasicWidget {
  DFNestScrollView(
    this.model, {
    Key key,
    @required this.offset,
    this.initBorderRadius = 0,
    this.stickyBorderRadius = 0,
    this.triggerStickyDistance = 50,
    this.appBar,
    this.backgroundAppBar,
    this.children = const [],
    this.backgroundView,
    this.maskView,
    this.fixedBottomView,
    this.animatedBottomView,
    this.animatedHeaderView,
    @required this.customController,
    this.onScroll,
    this.willDragStatusChange,
    this.onDragStatusChange,
  }) : super(model, key: key);

  final DynamicModel model;
  final double offset;
  final double initBorderRadius;
  final double stickyBorderRadius;
  final double triggerStickyDistance;
  final PreferredSizeWidget appBar;
  final PreferredSizeWidget backgroundAppBar;
  final List<Widget> children;
  final Widget backgroundView;
  final Widget maskView;
  final Widget fixedBottomView;
  final Widget animatedBottomView;
  final Widget animatedHeaderView;
  final DFNestScrollViewCustomController customController;
  final ParamGlobalHandler onScroll;
  final ParamGlobalHandler willDragStatusChange;
  final ParamGlobalHandler onDragStatusChange;

  @override
  Widget buildMainWidget(BuildContext context) {
    return _DFNestScrollView(
      offset: offset,
      initBorderRadius: initBorderRadius,
      stickyBorderRadius: stickyBorderRadius,
      triggerStickyDistance: triggerStickyDistance,
      appBar: appBar,
      backgroundAppBar: backgroundAppBar,
      children: children,
      backgroundView: backgroundView,
      maskView: maskView,
      fixedBottomView: fixedBottomView,
      animatedBottomView: animatedBottomView,
      animatedHeaderView: animatedHeaderView,
      customController: customController,
      onScroll: onScroll,
      willDragStatusChange: willDragStatusChange,
      onDragStatusChange: onDragStatusChange,
    );
  }
}

class _DFNestScrollView extends StatefulWidget {
  _DFNestScrollView({
    @required this.offset,
    this.initBorderRadius = 0,
    this.stickyBorderRadius = 0,
    this.triggerStickyDistance = 100,
    this.appBar,
    this.backgroundAppBar,
    this.children = const [],
    this.backgroundView,
    this.maskView,
    this.fixedBottomView,
    this.animatedBottomView,
    this.animatedHeaderView,
    @required this.customController,
    this.onScroll,
    this.willDragStatusChange,
    this.onDragStatusChange,
  });

  /// 底部视图偏移量
  final double offset;

  /// 初始状态时的圆角
  final double initBorderRadius;

  /// 吸顶状态时的圆角
  final double stickyBorderRadius;

  /// 触发自动吸顶或触低效果时拖动的距离
  final double triggerStickyDistance;

  /// 吸顶状态时的appBar
  final PreferredSizeWidget appBar;

  /// 吸顶状态时的背景appBar
  /// 如果存在backgroundAppBar，则吸顶状态优先显示backgroundAppBar，内容滚动后才显示appBar
  final PreferredSizeWidget backgroundAppBar;

  /// 底部视图子节点
  final List<Widget> children;

  /// 背景视图
  final Widget backgroundView;

  /// 覆盖在背景视图上的遮罩视图
  /// 只有在吸顶状态时才显示
  final Widget maskView;

  /// 位于底部视图下方的视图
  /// 吸顶时可见，不具有动画
  final Widget fixedBottomView;

  /// 位于底部视图下方的视图
  /// 吸顶时可见，具有动画
  final Widget animatedBottomView;

  /// 位于底部视图上方的视图
  /// 非吸顶时可见，具有动画
  final Widget animatedHeaderView;

  /// 滚动控制器
  final DFNestScrollViewCustomController customController;

  /// 底部视图内容滚动时的回调
  final ParamGlobalHandler onScroll;

  /// 底部视图状态即将改变时的回调
  final ParamGlobalHandler willDragStatusChange;

  /// 底部视图状态改变时的回调
  final ParamGlobalHandler onDragStatusChange;

  @override
  State<StatefulWidget> createState() => _DFNestScrollViewState();
}

class _DFNestScrollViewState extends State<_DFNestScrollView>
    with TickerProviderStateMixin {
  /// 整体视图size
  Size nestScrollViewSize;

  /// 底部内容视图size
  Size contentViewSize;

  /// appbar高度
  double appBarHeight = 0;

  /// 底部内容初始偏移量
  double initOffset;

  // 是否在自动吸附动画中
  bool inStickyAnimation = false;

  /// 底部头视图高度
  double headerViewHeight = 0;

  /// 拖动动画控制器
  AnimationController dragController;

  /// 其他动画控制器
  AnimationController animationController;

  /// 滑动动画
  Animation<Offset> slideAnimation;

  /// 组件控制器
  _DFNestScrollViewController nestScrollController;

  /// 滑动控制器
  ScrollController _scrollController = ScrollController();

  /// 物理效果
  _NestScrollPhysics _physics;

  /// 当前是否初始化状态
  bool _isInitStatus = true;

  /// 是否显示状态栏
  bool _shouldShowAppBar = false;

  /// 底部内容视图key
  final ValueKey _mainContentKey = ValueKey('mainContentView');

  /// 底部透视图key
  final GlobalKey _animatedHeaderViewKey = GlobalKey();

  /// 底部视图实际偏移量
  double get offset => dragController.value;
  set offset(double value) {
    dragController.value = value;
  }

  /// 获取当前动画组件是否应该显示
  bool get animatedWidgetOffstage => offset == initOffset;

  @override
  void initState() {
    super.initState();
    initOrUpdateOffsetsInfos();
    initAnimationControllers();
    initScrollControllers();
    addFrameListener();
  }

  @override
  void dispose() {
    dragController.dispose();
    animationController.dispose();
    super.dispose();
  }

  /// 监听首帧
  /// 获得整个视图的size与headerViewHeight
  void addFrameListener() {
    WidgetsBinding.instance?.addPostFrameCallback((callback) {
      setState(() {
        nestScrollViewSize = Size.copy(context.size);
        if (widget.animatedHeaderView != null) {
          headerViewHeight = _animatedHeaderViewKey.currentContext.size.height;
        }
      });
    });
  }

  /// 设置初始时的偏移量offset与appBarHeight
  void initOrUpdateOffsetsInfos() {
    initOffset = widget.offset;
    appBarHeight = (widget.appBar == null
        ? 0
        : widget.appBar.preferredSize.height +
            MediaQueryData.fromWindow(window).padding.top);
  }

  /// 初始化动画控制器
  void initAnimationControllers() {
    dragController = AnimationController(
      lowerBound: appBarHeight,
      upperBound: initOffset,
      value: initOffset,
      duration: _dragDuration,
      vsync: this,
    );
    bool _allowTriggerWillChange = true;
    dragController.addListener(() {
      if (!_allowTriggerWillChange ||
          dragController.status != AnimationStatus.forward) return;
      final double value = dragController.value;
      final bool allowTrigger = _isInitStatus
          ? value <= initOffset - widget.triggerStickyDistance * 1.5
          : value >= appBarHeight + widget.triggerStickyDistance * 1.5;
      if (allowTrigger) {
        _allowTriggerWillChange = false;
        triggerWillChangeStatus();
      }
    });
    dragController.addStatusListener((status) {
      if (status != AnimationStatus.completed) return;
      _allowTriggerWillChange = true;
      final double _offset = offset;
      if (_offset == initOffset && _isInitStatus) return;
      if (_offset == appBarHeight && !_isInitStatus) return;
      if (_offset == initOffset && !_isInitStatus) _isInitStatus = true;
      if (_offset == appBarHeight && _isInitStatus) _isInitStatus = false;
      _scrollController.jumpTo(0);
      triggerOnChangeStatus();
    });

    animationController = AnimationController(
      lowerBound: 0.0,
      upperBound: 1.0,
      duration: _fadeDuration,
      vsync: this,
    );
    if (widget.animatedBottomView != null)
      slideAnimation = Tween<Offset>(
        begin: Offset(0, 1),
        end: Offset(0, 0),
      ).animate(animationController);
  }

  /// 初始化滑动控制器
  void initScrollControllers() {
    nestScrollController = _DFNestScrollViewController(
      applyBallistic: () => offset == appBarHeight,
      applyOffset: (delta, pixels) {
        final bool allowDrag = offset > appBarHeight || delta > 0;
        if (pixels < 5 && allowDrag) {
          if (delta > 0)
            onDragDownUpdate(delta);
          else
            onDragUpUpdate(delta);
          return 0;
        }
        return delta;
      },
    );
    _physics = _NestScrollPhysics(nestScrollController);
    widget.customController.setTriggerMethods(
      triggerOpen: stickToBottom,
      triggerClose: stickToTop,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        buildBackgroundView(),
        buildBackgroundMask(),
        buildAnimatedHeaderView(),
        buildDragableBottomView(),
        buildFadeAppbar(),
        buildSlideBottomView(),
      ],
    );
  }

  /// 背景视图
  Widget buildBackgroundView() {
    return widget.backgroundView ??
        Container(
          constraints: BoxConstraints.expand(),
        );
  }

  /// 背景遮罩
  Widget buildBackgroundMask() {
    return widget.maskView == null
        ? Container()
        : Positioned(
            top: appBarHeight,
            left: 0,
            right: 0,
            bottom: 0,
            child: AnimatedBuilder(
              animation: animationController,
              builder: (context, child) => Offstage(
                offstage: animatedWidgetOffstage,
                child: FadeTransition(
                  opacity: animationController,
                  child: Container(
                    constraints: BoxConstraints.expand(),
                    child: widget.maskView,
                  ),
                ),
              ),
            ),
          );
  }

  /// 底部内容头视图
  Widget buildAnimatedHeaderView() {
    if (widget.animatedHeaderView == null) return Container();

    return AnimatedBuilder(
      animation: dragController,
      builder: (context, child) {
        final double offsetDiff = initOffset - offset;
        double opacity = 1;
        if (offsetDiff > 0) {
          if (offsetDiff >= 100)
            opacity = 0;
          else
            opacity = (100 - offsetDiff) / 100;
        }
        return Transform.translate(
          offset: Offset(0, offset - headerViewHeight),
          child: AnimatedOpacity(
            key: _animatedHeaderViewKey,
            opacity: opacity,
            duration: Duration(milliseconds: 100),
            child: widget.animatedHeaderView,
          ),
        );
      },
    );
  }

  /// 底部视图
  Widget buildDragableBottomView() {
    return AnimatedBuilder(
      animation: dragController,
      builder: (context, child) {
        return Transform.translate(
          key: _mainContentKey,
          offset: Offset(0, offset),
          // 当 scroll view 内部高度不足时无法触发 scroll 事件，导致无法响应上下拖动操作
          // 因此需要通过监听手势实现高度不足时的拖动操作
          // 当高度足够时，手势事件会被 scroll view 消费，不会传递到此处，因此不会产生冲突
          child: GestureDetector(
            child: buildDragableContent(),
            onVerticalDragUpdate: (e) {
              final double delta = e.delta.dy;
              if (delta < 0)
                onDragUpUpdate(delta);
              else
                onDragDownUpdate(delta);
            },
            onVerticalDragEnd: (e) {
              onDragEnd();
            },
          ),
        );
      },
    );
  }

  /// 底部视图内容
  Widget buildDragableContent() {
    if (widget.children.isEmpty || nestScrollViewSize == null)
      return Container();
    final Radius radius = Radius.circular(offset > appBarHeight
        ? widget.initBorderRadius
        : widget.stickyBorderRadius);
    return ClipRRect(
      borderRadius: BorderRadius.only(
        topLeft: radius,
        topRight: radius,
      ),
      child: SizedBox(
        width: nestScrollViewSize.width,
        height: nestScrollViewSize.height - appBarHeight,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Expanded(
              child: NotificationListener(
                onNotification: (ScrollNotification e) {
                  final double pixels = e.metrics.pixels;
                  final bool shouldShowAppBar = pixels > 10;
                  if (shouldShowAppBar != _shouldShowAppBar)
                    setState(() {
                      _shouldShowAppBar = shouldShowAppBar;
                    });
                  triggerOnScroll(pixels);
                  if (e.runtimeType == ScrollEndNotification) onDragEnd();
                  return true;
                },
                child: MediaQuery.removePadding(
                  context: context,
                  removeTop: true,
                  removeBottom: true,
                  child: ListView(
                    controller: _scrollController,
                    physics: _physics,
                    children: [
                      Column(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: widget.children,
                      ),
                    ],
                  ),
                ),
              ),
            ),
            widget.fixedBottomView ?? Container(),
          ],
        ),
      ),
    );
  }

  /// appBar
  Widget buildFadeAppbar() {
    if (widget.appBar == null) return Container();
    final bool hasBackground = widget.backgroundAppBar != null;

    return Positioned(
      top: 0,
      left: 0,
      right: 0,
      height: appBarHeight,
      child: AnimatedBuilder(
        animation: animationController,
        builder: (context, child) {
          return Offstage(
            offstage: animatedWidgetOffstage,
            child: FadeTransition(
              opacity: animationController,
              child: MediaQuery.removePadding(
                context: context,
                removeBottom: true,
                child: Stack(
                  children: [
                    widget.backgroundAppBar ?? Container(),
                    Offstage(
                      offstage: hasBackground ? !_shouldShowAppBar : false,
                      child: widget.appBar,
                    ),
                  ],
                ),
              ),
            ),
          );
        },
      ),
    );
  }

  /// 底部动画视图
  Widget buildSlideBottomView() {
    if (widget.animatedBottomView == null) return Container();
    return Positioned(
      left: 0,
      right: 0,
      bottom: 0,
      child: SlideTransition(
        position: slideAnimation,
        child: widget.animatedBottomView,
      ),
    );
  }

  /// 向上拖拽操作更新
  void onDragUpUpdate(double delta) {
    if (inStickyAnimation) return;
    final double currentOffset = caculateCurrentOffset(delta);
    if (initOffset - currentOffset > widget.triggerStickyDistance)
      stickToTop();
    else
      offset = currentOffset;
  }

  /// 向下拖拽操作更新
  void onDragDownUpdate(double delta) {
    if (inStickyAnimation) return;
    final double currentOffset = caculateCurrentOffset(delta);
    if (widget.triggerStickyDistance + appBarHeight < currentOffset)
      stickToBottom();
    else
      offset = currentOffset;
  }

  /// 拖拽操作完成
  void onDragEnd() {
    if (initOffset - offset < widget.triggerStickyDistance)
      // 当滚动间距较大时就触发 向上 or 向下
      stickToBottom();
    if (offset - appBarHeight < widget.triggerStickyDistance)
      // 否则，则回弹
      stickToTop();
  }

  /// 吸顶
  void stickToTop() {
    execStickyAnimation(() {
      animationController.forward();
      return dragController.animateTo(
        dragController.lowerBound,
        curve: _curve,
      );
    });
  }

  /// 吸底
  void stickToBottom() {
    execStickyAnimation(() {
      animationController.reverse();
      return dragController.animateTo(
        dragController.upperBound,
        curve: _curve,
      );
    });
  }

  /// 触发动画
  void execStickyAnimation(_ExecStickyAnimation animationTrigger) async {
    inStickyAnimation = true;
    await animationTrigger();
    inStickyAnimation = false;
  }

  /// 计算当前偏移量
  double caculateCurrentOffset(double delta) {
    double currentOffset = offset + delta;
    return currentOffset < appBarHeight
        ? appBarHeight
        : currentOffset > initOffset
            ? initOffset
            : currentOffset;
  }

  /// 触发onScroll
  void triggerOnScroll(double o) {
    widget.onScroll?.call(o);
  }

  /// 触发willChange
  void triggerWillChangeStatus() {
    widget.willDragStatusChange?.call({
      'currentStatusIsInit': _isInitStatus,
      'nextStatusIsInit': !_isInitStatus
    });
  }

  /// 触发onChange
  void triggerOnChangeStatus() {
    widget.onDragStatusChange?.call({
      'isInitStatus': _isInitStatus,
    });
  }
}

class _DFNestScrollViewController {
  _DFNestScrollViewController({
    @required this.applyOffset,
    @required this.applyBallistic,
  });

  _ApplyOffset applyOffset;
  _ApplyBallistic applyBallistic;
}

class DFNestScrollViewCustomController {
  Function triggerOpen;
  Function triggerClose;

  setTriggerMethods({
    @required Function triggerOpen,
    @required Function triggerClose,
  }) {
    this.triggerOpen = triggerOpen;
    this.triggerClose = triggerClose;
  }

  setNestScrollViewStatus(bool isOpened) {
    if (isOpened)
      triggerClose?.call();
    else
      triggerOpen?.call();
  }
}

/// 用于 NestScrollView 的自定义物理滚动效果
/// 当 scrollView 位于底部（初始状态）时，可以触发向上拖拽事件但是不改变内容位置
/// 当 scrollView 位于顶部时，可进行正常的操作
/// 代码修改自 ClampingScrollPhysics
class _NestScrollPhysics extends ScrollPhysics {
  _NestScrollPhysics(this.controller, {ScrollPhysics parent})
      : super(parent: parent);

  final _DFNestScrollViewController controller;

  @override
  _NestScrollPhysics applyTo(ScrollPhysics ancestor) {
    return _NestScrollPhysics(
      controller,
      parent: buildParent(ancestor),
    );
  }

  @override
  double applyPhysicsToUserOffset(ScrollMetrics position, double offset) {
    return controller.applyOffset(offset, position.pixels);
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
            '  $position');
      }
      return true;
    }());
    if (value < position.pixels &&
        position.pixels <= position.minScrollExtent) // underscroll
      return value - position.pixels;
    if (position.maxScrollExtent <= position.pixels &&
        position.pixels < value) // overscroll
      return value - position.pixels;
    if (value < position.minScrollExtent &&
        position.minScrollExtent < position.pixels) // hit top edge
      return value - position.minScrollExtent;
    if (position.pixels < position.maxScrollExtent &&
        position.maxScrollExtent < value) // hit bottom edge
      return value - position.maxScrollExtent;
    return 0.0;
  }

  @override
  Simulation createBallisticSimulation(
    ScrollMetrics position,
    double velocity,
  ) {
    // 是否允许滚动惯性效果
    return controller.applyBallistic()
        ? super.createBallisticSimulation(position, velocity)
        : null;
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

    final PreferredSizeWidget appBar = buildProps['appBar'];
    final PreferredSizeWidget backgroundAppBar = buildProps['backgroundAppBar'];

    return DFNestScrollView(
      model,
      offset: Util.getDouble(props['offset']) ?? 0,
      initBorderRadius: Util.getDouble(props['initBorderRadius']) ?? 0,
      stickyBorderRadius: Util.getDouble(props['stickyBorderRadius']) ?? 0,
      triggerStickyDistance:
          Util.getDouble(props['triggerStickyDistance']) ?? 50,
      appBar: appBar,
      backgroundAppBar: backgroundAppBar,
      children: Util.getWidgetList(buildProps['children']),
      backgroundView: buildProps['backgroundView'],
      maskView: buildProps['maskView'],
      fixedBottomView: buildProps['fixedBottomView'],
      animatedBottomView: buildProps['animatedBottomView'],
      animatedHeaderView: buildProps['animatedHeaderView'],
      onScroll: getOnScrollDebouncedMethod(
        eventGlobalHandlerWithParam(
          pageName: model.pageName,
          widgetId: model.widgetId,
          eventId: model.props['_onScrollId'],
          type: 'onScroll',
        ),
      ),
      willDragStatusChange: eventGlobalHandlerWithParam(
        pageName: model.pageName,
        widgetId: model.widgetId,
        eventId: model.props['_willDragStatusChangeId'],
        type: 'willDragStatusChange',
      ),
      onDragStatusChange: eventGlobalHandlerWithParam(
        pageName: model.pageName,
        widgetId: model.widgetId,
        eventId: model.props['_onDragStatusChangeId'],
        type: 'onDragStatusChange',
      ),
      customController: customController,
    );
  }

  Function getOnScrollDebouncedMethod(Function onScroll) {
    if (onScroll == null) return null;
    return Util.throttle((offset) {
      onScroll({'offset': offset});
    });
  }
}
