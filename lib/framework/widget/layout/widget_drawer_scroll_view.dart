
import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/basic/global_def.dart';

class ThreshDrawerScrollController {
  void open() {
    _handler?.call(true);
  }

  void close() {
    _handler?.call(false);
  }

  void Function(bool open) _handler;
}

class ThreshDrawerScrollView extends DFBasicWidget {

  ThreshDrawerScrollView(this.model, this.controller, {
    Key key,
    this.children,
    this.backgroundView,
    this.drawerHeight = 350.0,
    this.handlebarHeight = 64.0,
    this.open = true,
    this.closeByScroll = true,
    this.duration = const Duration(milliseconds: 250),
    this.onOpen,
  }) : super(model, key: key);

  final DynamicModel model;
  // 抽屉视图
  final List<Widget> children;
  // 背景视图
  final Widget backgroundView;
  // 抽屉尺寸
  final double drawerHeight;
  // 露出尺寸
  final double handlebarHeight;
  // 开启/收起 默认开启状态
  final bool open;
  // 是否支持滚动收起 默认true
  final bool closeByScroll;
  // 动画时长
  final Duration duration;
  final ThreshDrawerScrollController controller;
  final ParamGlobalHandler onOpen;

  @override
  Widget buildMainWidget(BuildContext context) {
    return _ThreshDrawerScrollView(
      children: children,
      backgroundView: backgroundView,
      drawerHeight: drawerHeight,
      handlebarHeight: handlebarHeight,
      open: open,
      closeByScroll: closeByScroll,
      duration: duration,
      controller: controller,
      onOpen: onOpen,
    );
  }
}

class _ThreshDrawerScrollView extends StatefulWidget {
  _ThreshDrawerScrollView({
    this.children,
    this.backgroundView,
    this.drawerHeight,
    this.handlebarHeight,
    this.open,
    this.closeByScroll,
    this.duration,
    this.controller,
    this.onOpen,
    this.model
  });

  final DynamicModel model;
  // 抽屉视图
  final List<Widget> children;
  // 背景视图
  final Widget backgroundView;
  // 抽屉尺寸
  final double drawerHeight;
  // 露出尺寸
  final double handlebarHeight;
  // 开启/收起 默认开启状态
  final bool open;
  // 是否支持滚动收起 默认true
  final bool closeByScroll;
  // 动画时长
  final Duration duration;
  final ThreshDrawerScrollController controller;
  final ParamGlobalHandler onOpen;

  @override
  State<StatefulWidget> createState() => _ThreshDrawerScrollViewState();
}

class _ThreshDrawerScrollViewState extends State<_ThreshDrawerScrollView> with TickerProviderStateMixin {
  WidgetsBinding widgetsBinding;
  Size drawerScrollViewSize;

  @override
  void initState() {
    super.initState();

    animationController = AnimationController(vsync: this, duration: widget.duration);

    widget.controller._handler = (open) {
      if (open) {
        this.open(false);
      } else {
        this.close(false);
      }
    };
    addFrameListener();
  }

  addFrameListener() {
    widgetsBinding = WidgetsBinding.instance;
    widgetsBinding.addPostFrameCallback((callback) {
      this.setState(() {
        drawerScrollViewSize = Size.copy(context.size);
      });
    });
  }

  @override
  void didChangeDependencies() {
    if (mounted) {
      drawerHeight = widget.drawerHeight;
      handlebarHeight = widget.handlebarHeight;
      opened = widget.open;
      offset = opened?0:(drawerHeight - handlebarHeight); // 初始位置
    }
    super.didChangeDependencies();
  }

  @override
  void dispose() {
    animationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        widget.backgroundView ?? Container(constraints: BoxConstraints.expand()),
        buildContent()
      ],
    );
  }

  Widget buildContent() {
    if (drawerScrollViewSize == null) return Container();
    return Container(
        width: drawerScrollViewSize.width,
        height: drawerScrollViewSize.height,
        alignment: AlignmentDirectional.bottomCenter,
        child: buildDrawer()
    );
  }

  Widget buildDrawer() {
    // 限制偏移量 防止超出范围
    offset = offset.clamp(0.0, drawerHeight - handlebarHeight);
    return Transform.translate(
      offset: Offset(0.0, offset),
      child: RawGestureDetector(
        gestures: { VerticalDragGestureRecognizer: dragGesture() },
        child: ConstrainedBox(
          key: _drawerKey,
          constraints: BoxConstraints(maxHeight: drawerHeight), // 设置抽屉高度
          child: NotificationListener(
            onNotification: (Notification notification) => handleScrollNotification(notification),
            child: SingleChildScrollView(
              physics: ClampingScrollPhysics(),
              child: Column(
                children: widget.children,
              ),
            ),
          ),
        ),
      ),
    );
  }

  // 监听滚动
  bool handleScrollNotification(Notification notification) {
    if (widget.closeByScroll) {
      switch (notification.runtimeType) {
        case ScrollStartNotification:
          ScrollStartNotification scrollNotification = notification;
          ScrollMetrics metrics = scrollNotification.metrics;
          scrollOffset = metrics.pixels;
          scrollAtEdge = metrics.atEdge;
          return true;
        case ScrollUpdateNotification:
          ScrollUpdateNotification scrollNotification = notification;
          ScrollMetrics metrics = scrollNotification.metrics;
          double pixels = metrics.pixels;
          double flag = pixels - scrollOffset;
          if (flag > 0 && !opened) open();
          return true;
        case ScrollEndNotification:
          return true;
        case OverscrollNotification:
          OverscrollNotification scrollNotification = notification;
          ScrollMetrics metrics = scrollNotification.metrics;
          double pixels = metrics.pixels;
          double flag = pixels - scrollOffset;
          if (scrollOffset == 0.0 && flag == 0.0 && scrollAtEdge &&
              opened) close();
          return true;
      }
    }
    return false;
  }

  // 自定义垂直拖拽手势
  GestureRecognizerFactoryWithHandlers<VerticalDragGestureRecognizer> dragGesture() {
    return GestureRecognizerFactoryWithHandlers<VerticalDragGestureRecognizer>(
        () => VerticalDragGestureRecognizer(),
        (VerticalDragGestureRecognizer instance) {
          instance
          ..onStart = (DragStartDetails details) {
            // 获取启动位置
            lastDrag = details.globalPosition.dy;
          }
          ..onUpdate = (DragUpdateDetails details) {
            lastDragOffset = details.globalPosition.dy - lastDrag;
            offset = offset + details.delta.dy;
            lastDrag = details.globalPosition.dy;
            setState(() {});
          }
          ..onEnd = (DragEndDetails details) {
            if (lastDragOffset < 0) {
              open();
            } else {
              close();
            }
          };
        }
    );
  }

  void open([bool callback]) {
    if (!opened) {
      double end = 0;
      double start = offset;
      slide(start, end, callback ?? true);
    }
  }

  void close([bool callback]) {
    if (opened) {
      RenderObject renderObject = _drawerKey.currentContext.findRenderObject();
      drawerActualHeight = renderObject.semanticBounds.size.height;
      // 实际高度小于设置高度时，以实际高度为准，防止向下滚出页面
      double end = drawerHeight > drawerActualHeight ? drawerActualHeight - handlebarHeight : drawerHeight - handlebarHeight;
      double start = offset;
      slide(start, end, callback ?? true);
    }
  }
  // 起始位置为0 向下增加offset即为关闭
  void slide(double start, double end, bool callback) {
    opened = end == 0.0;

    widget.onOpen({'opened': opened});

    CurvedAnimation curve = new CurvedAnimation(
      parent: animationController,
      curve: Curves.easeOut,
    );

    animation = Tween(
      begin: start,
      end: end,
    ).animate(curve)
      ..addListener(() {
        setState(() {
          offset = animation.value;
        });
      });

    animationController.reset();
    animationController.forward();
  }

  GlobalKey _drawerKey = new GlobalKey();
  bool opened = true;
  double drawerHeight;
  double handlebarHeight;
  // 组件实际高度
  double drawerActualHeight;
  // 偏移量
  double offset;
  // 最近的拖拽位置
  double lastDrag;
  // 拖拽偏移量
  double lastDragOffset;
  double scrollOffset;
  bool scrollAtEdge = false;
  Animation<double> animation;
  AnimationController animationController;
}

class ProxyThreshDrawerScrollView extends ProxyBase {
  
  static void register() {
    ProxyThreshDrawerScrollView _instance = ProxyThreshDrawerScrollView();
    RegisterWidget().register(
      widgetName: 'DrawerScrollView',
      constructor: _instance.constructor
    );
  }
  
  ThreshDrawerScrollView constructor(DynamicModel model, BuildContext context) {

    Map<String, dynamic> props = model.props;
    Map<String, dynamic> buildProps = model.buildProps;
    
    return ThreshDrawerScrollView(
      model,
      ThreshDrawerScrollController(),
      children: Util.getWidgetList(buildProps['children']),
      backgroundView: buildProps['backgroundView'],
      drawerHeight: Util.getDouble(props['drawerHeight']),
      handlebarHeight: Util.getDouble(props['handlebarHeight']),
      open: Util.getBoolean(props['open']),
      closeByScroll: Util.getBoolean(props['closeByScroll']),
      onOpen: eventGlobalHandlerWithParam(pageName: model.pageName, widgetId: model.widgetId, eventId: model.props['_onOpenId'], type: 'onOpen'),
    );
  }
}