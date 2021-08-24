import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:thresh/basic/global_def.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/framework/channel/basic.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/widget_basic.dart';

const String square = 'square';
const String round = 'round';

class ThreshTabBarUnderlineTabIndicator extends Decoration {
  const ThreshTabBarUnderlineTabIndicator({
    this.borderSide = const BorderSide(width: 2.0, color: Colors.white),
    this.insets = EdgeInsets.zero,
    this.capType = 'round',
  })  : assert(borderSide != null),
        assert(insets != null);

  final BorderSide borderSide;

  final EdgeInsetsGeometry insets;

  final String capType;

  @override
  Decoration lerpFrom(Decoration a, double t) {
    if (a is UnderlineTabIndicator) {
      return UnderlineTabIndicator(
        borderSide: BorderSide.lerp(a.borderSide, borderSide, t),
        insets: EdgeInsetsGeometry.lerp(a.insets, insets, t),
      );
    }
    return super.lerpFrom(a, t);
  }

  @override
  Decoration lerpTo(Decoration b, double t) {
    if (b is UnderlineTabIndicator) {
      return UnderlineTabIndicator(
        borderSide: BorderSide.lerp(borderSide, b.borderSide, t),
        insets: EdgeInsetsGeometry.lerp(insets, b.insets, t),
      );
    }
    return super.lerpTo(b, t);
  }

  @override
  _ThreshTabBarUnderlinePainter createBoxPainter([VoidCallback onChanged]) {
    StrokeCap strokeCap;
    if (capType == round) {
      strokeCap = StrokeCap.round;
    } else if (capType == square) {
      strokeCap = StrokeCap.square;
    }
    return _ThreshTabBarUnderlinePainter(this, onChanged, strokeCap: strokeCap);
  }

  Rect _indicatorRectFor(Rect rect, TextDirection textDirection) {
    assert(rect != null);
    assert(textDirection != null);
    final Rect indicator = insets.resolve(textDirection).deflateRect(rect);
    return Rect.fromLTWH(
      indicator.left,
      indicator.bottom - borderSide.width,
      indicator.width,
      borderSide.width,
    );
  }

  @override
  Path getClipPath(Rect rect, TextDirection textDirection) {
    return Path()..addRect(_indicatorRectFor(rect, textDirection));
  }
}

class _ThreshTabBarUnderlinePainter extends BoxPainter {
  _ThreshTabBarUnderlinePainter(this.decoration, VoidCallback onChanged,
      {this.strokeCap = StrokeCap.round})
      : assert(decoration != null),
        super(onChanged);

  final ThreshTabBarUnderlineTabIndicator decoration;

  final StrokeCap strokeCap;

  @override
  void paint(Canvas canvas, Offset offset, ImageConfiguration configuration) {
    assert(configuration != null);
    assert(configuration.size != null);
    Rect rect = offset & configuration.size;
    rect = Rect.fromLTRB(rect.left, rect.top, rect.right, rect.bottom);
    final TextDirection textDirection = configuration.textDirection;
    final Rect indicator = decoration
        ._indicatorRectFor(rect, textDirection)
        .deflate(decoration.borderSide.width / 2.0);
    final Paint paint = decoration.borderSide.toPaint()..strokeCap = strokeCap;
    canvas.drawLine(indicator.bottomLeft, indicator.bottomRight, paint);
  }
}

class ThreshTabView extends DFBasicWidget {
  ThreshTabView(
    DynamicModel model, {
    Key key,
    this.pages,
    this.tabs,
    this.rightItems,
    this.tabsHorizontalMargin,
    this.isScrollable = false,
    this.tabBarColor = Colors.white,
    this.tabBarHeight = 46.0,
    this.shadowColor = Colors.black,
    this.elevation = 4.0,
    this.borderRadius = 0,
    this.labelStyle,
    this.unselectedLabelStyle,
    this.indicatorPadding,
    this.indicatorWeight = 2.0,
    this.indicatorColor = Colors.orange,
    this.indicatorCap,
    this.controller,
    this.onChange,
  }) : super(model, key: key);

  // 主视图
  final List<Widget> pages;
  final List<Widget> tabs;
  final List<Widget> rightItems;

  final double tabsHorizontalMargin;
  final bool isScrollable;
  final Color tabBarColor;
  final double tabBarHeight;
  final Color shadowColor;
  final double elevation;
  final double borderRadius;
  final TextStyle labelStyle;
  final TextStyle unselectedLabelStyle;

  final EdgeInsets indicatorPadding;
  final double indicatorWeight;
  final Color indicatorColor;
  final String indicatorCap;

  final ThreshTabController controller;
  final ParamGlobalHandler onChange;

  @override
  Widget buildMainWidget(BuildContext context) {
    return _ThreshTabView(
      pages: pages,
      tabs: tabs,
      rightItems: rightItems ?? [],
      tabsHorizontalMargin: tabsHorizontalMargin,
      isScrollable: isScrollable,
      tabBarColor: tabBarColor,
      tabBarHeight: tabBarHeight,
      shadowColor: shadowColor,
      elevation: elevation,
      borderRadius: borderRadius,
      labelStyle: labelStyle,
      unselectedLabelStyle: unselectedLabelStyle,
      indicatorPadding: indicatorPadding,
      indicatorWeight: indicatorWeight,
      indicatorColor: indicatorColor,
      indicatorCap: indicatorCap,
      controller: controller,
      onChange: onChange,
    );
  }
}

class _ThreshTabView extends StatefulWidget {
  _ThreshTabView({
    this.pages,
    this.tabs,
    this.rightItems,
    this.tabsHorizontalMargin,
    this.isScrollable = false,
    this.tabBarColor = Colors.white,
    this.tabBarHeight = 46.0,
    this.shadowColor = Colors.black,
    this.elevation = 4.0,
    this.borderRadius = 0,
    this.labelStyle,
    this.unselectedLabelStyle,
    this.indicatorPadding,
    this.indicatorWeight = 2.0,
    this.indicatorColor = Colors.orange,
    this.indicatorCap,
    this.controller,
    this.onChange,
  });

  // 主视图
  final List<Widget> pages;
  final List<Widget> tabs;
  final List<Widget> rightItems;

  final double tabsHorizontalMargin;
  final bool isScrollable;
  final Color tabBarColor;
  final double tabBarHeight;
  final Color shadowColor;
  final double elevation;
  final double borderRadius;
  final TextStyle labelStyle;
  final TextStyle unselectedLabelStyle;

  final EdgeInsets indicatorPadding;
  final double indicatorWeight;
  final Color indicatorColor;
  final String indicatorCap;

  final ThreshTabController controller;
  final ParamGlobalHandler onChange;

  @override
  State<StatefulWidget> createState() => _ThreshTabControllerState();
}

class _ThreshTabControllerState extends State<_ThreshTabView>
    with SingleTickerProviderStateMixin {
  @override
  Widget build(BuildContext context) {
    print(widget.controller);
    final Size size = MediaQuery.of(context).size;
    return Container(
      width: size.width,
      height: size.height,
      child: DefaultTabController(
          length: widget.tabs.length,
          child: Builder(builder: (BuildContext context) {
            widget.controller.tabController = DefaultTabController.of(context);
            widget.controller.tabController.addListener(() {
              if (widget.controller.tabController.animation.value ==
                  widget.controller.tabController.index) {
                widget.onChange({
                  'previousIndex':
                      widget.controller.tabController.previousIndex,
                  'index': widget.controller.tabController.index
                });
              }
            });
            return Scaffold(
                appBar: PreferredSize(
                    child: AppBar(
                      automaticallyImplyLeading: false,
                      titleSpacing: widget.tabsHorizontalMargin,
                      toolbarHeight:
                          widget.tabBarHeight + widget.indicatorWeight,
                      backgroundColor: widget.tabBarColor,
                      title: TabBar(
                        isScrollable: widget.isScrollable,
                        labelColor: widget.labelStyle.color,
                        unselectedLabelColor: widget.unselectedLabelStyle.color,
                        labelStyle: widget.labelStyle,
                        unselectedLabelStyle: widget.unselectedLabelStyle,
                        tabs: widget.tabs
                            .map((e) => Container(
                                  height: widget.tabBarHeight,
                                  child: e,
                                ))
                            .toList(),
                        indicatorWeight: widget.indicatorWeight,
                        indicator: ThreshTabBarUnderlineTabIndicator(
                            borderSide: BorderSide(
                                color: widget.indicatorColor,
                                width: widget.indicatorWeight),
                            insets: widget.indicatorPadding,
                            capType: widget.indicatorCap),
                      ),
                      actions: widget.rightItems,
                      elevation: widget.elevation,
                      shadowColor: widget.shadowColor,
                    ),
                    preferredSize: Size(size.width,
                        widget.tabBarHeight + widget.indicatorWeight)),
                body: TabBarView(children: widget.pages));
          })),
    );
  }
}

class ProxyThreshTabView extends ProxyBase {
  static void register() {
    ProxyThreshTabView _instance = ProxyThreshTabView();
    RegisterWidget().register(
      widgetName: 'TabView',
      constructor: _instance.constructor,
    );
  }

  ThreshTabView constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    Map<String, dynamic> buildProps = model.buildProps;

    ThreshTabController controller;
    if (model.controller != null && model.controller is ThreshTabController) {
      controller = model.controller;
    } else {
      controller = ThreshTabController();
      model.controller = controller;
    }
    print(controller);

    return ThreshTabView(
      model,
      pages: Util.getWidgetList(buildProps['pages']),
      tabs: Util.getWidgetList(buildProps['tabs']),
      rightItems: Util.getWidgetList(buildProps['rightItems']),
      tabsHorizontalMargin: Util.getDouble(props['tabsHorizontalMargin']) ?? 0,
      isScrollable: Util.getBoolean(props['isScrollable']) ?? false,
      tabBarColor: Util.getColor(props['tabBarColor']) ?? Colors.white,
      tabBarHeight: Util.getDouble(props['tabBarHeight']) ?? 46.0,
      shadowColor: Util.getColor(props['shadowColor']) ?? Colors.black,
      elevation: Util.getDouble(props['elevation']) ?? 4.0,
      borderRadius: Util.getDouble(props['borderRadius']) ?? 0,
      labelStyle: Util.getTextStyle(props['labelStyle']) ??
          TextStyle(color: Colors.black, fontWeight: FontWeight.normal),
      unselectedLabelStyle: Util.getTextStyle(props['unselectedLabelStyle']) ??
          TextStyle(color: Colors.grey, fontWeight: FontWeight.normal),
      indicatorPadding:
          Util.getEdgeInsets(props['indicatorPadding']) ?? EdgeInsets.all(0),
      indicatorWeight: Util.getDouble(props['indicatorWeight']) ?? 2.0,
      indicatorColor: Util.getColor(props['indicatorColor']) ?? Colors.orange,
      indicatorCap: Util.getSafeString(props['indicatorCap']) ?? round,
      controller: controller,
      onChange: eventGlobalHandlerWithParam(
          pageName: model.pageName,
          widgetId: model.widgetId,
          eventId: model.props['_onChangeId'],
          type: 'onChange'),
    );
  }
}

class ThreshTabController {
  TabController tabController;

  animateTo(int index) {
    tabController.animateTo(index);
  }
}
