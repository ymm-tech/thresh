import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:thresh/basic/global_def.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/widget_basic.dart';

const String bouncing = 'bouncing';
const String always = 'always';
const String never = 'never';
const String vertical = 'vertical';
const String horizontal = 'horizontal';
const String trailing = 'trailing';
const String leading = 'leading';
const String fixedCount = 'fixedCount';
const String maxExtent = 'maxExtent';

class ThreshGridView extends DFBasicWidget {
  ThreshGridView(DynamicModel model,
      {Key key,
      this.backgroundColor,
      this.scrollable,
      this.scrollDirection,
      this.startPosition,
      this.padding,
      this.layoutGrid,
      this.crossAxisCount,
      this.maxCrossAxisExtent,
      this.mainAxisSpacing,
      this.crossAxisSpacing,
      this.childAspectRatio,
      this.items,
      this.controller,
      this.onScroll,
      this.onClicked})
      : super(model, key: key);

  final Color backgroundColor;
  final String scrollable;
  final String scrollDirection;
  final String startPosition;
  final EdgeInsets padding;
  final String layoutGrid;
  final int crossAxisCount;
  final double maxCrossAxisExtent;
  final double mainAxisSpacing;
  final double crossAxisSpacing;
  final double childAspectRatio;
  final List<Widget> items;
  final ScrollController controller;
  final ParamGlobalHandler onScroll;
  final ParamGlobalHandler onClicked;

  @override
  Widget buildMainWidget(BuildContext context) {
    return _ThreshGridView(
      backgroundColor: backgroundColor,
      scrollable: scrollable,
      scrollDirection: scrollDirection,
      startPosition: startPosition,
      padding: padding,
      layoutGrid: layoutGrid,
      crossAxisCount: crossAxisCount,
      maxCrossAxisExtent: maxCrossAxisExtent,
      mainAxisSpacing: mainAxisSpacing,
      crossAxisSpacing: crossAxisSpacing,
      childAspectRatio: childAspectRatio,
      items: items,
      controller: controller,
      onScroll: onScroll,
      onClicked: onClicked,
    );
  }
}

class _ThreshGridView extends StatefulWidget {
  _ThreshGridView(
      {this.backgroundColor,
      this.scrollable,
      this.scrollDirection,
      this.startPosition,
      this.padding,
      this.layoutGrid,
      this.crossAxisCount,
      this.maxCrossAxisExtent,
      this.mainAxisSpacing,
      this.crossAxisSpacing,
      this.childAspectRatio,
      this.items,
      this.controller,
      this.onScroll,
      this.onClicked});

  final Color backgroundColor;
  final String scrollable;
  final String scrollDirection;
  final String startPosition;
  final EdgeInsets padding;
  final String layoutGrid;
  final int crossAxisCount;
  final double maxCrossAxisExtent;
  final double mainAxisSpacing;
  final double crossAxisSpacing;
  final double childAspectRatio;
  final List<Widget> items;
  final ScrollController controller;
  final ParamGlobalHandler onScroll;
  final ParamGlobalHandler onClicked;

  @override
  State<StatefulWidget> createState() {
    return _ThreshGridViewState();
  }
}

class _ThreshGridViewState extends State<_ThreshGridView> {
  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;
    return Container(
      width: size.width,
      height: size.height,
      color: widget.backgroundColor,
      child: NotificationListener<ScrollNotification>(
        // ignore: missing_return
        onNotification: (ScrollNotification notification) {
          widget.onScroll({
            'offset': notification.metrics.pixels,
            'contentSize': notification.metrics.maxScrollExtent
          });
        },
        child: GridView.builder(
          physics: getPhysics(),
          scrollDirection: widget.scrollDirection == vertical
              ? Axis.vertical
              : Axis.horizontal,
          reverse: widget.startPosition == trailing,
          padding: widget.padding,
          gridDelegate: getGridDelegate(),
          itemCount: widget.items.length,
          itemBuilder: (BuildContext context, int index) {
            return GestureDetector(
              child: widget.items[index],
              onTap: () => {
                print('点击了第 $index 个'),
                widget.onClicked({'index': index})
              },
            );
          },
        ),
      ),
    );
  }

  ScrollPhysics getPhysics() {
    if (widget.scrollable == bouncing) return BouncingScrollPhysics();
    if (widget.scrollable == always) return AlwaysScrollableScrollPhysics();
    if (widget.scrollable == never) return NeverScrollableScrollPhysics();
    return AlwaysScrollableScrollPhysics();
  }

  SliverGridDelegate getGridDelegate() {
    return (widget.layoutGrid == fixedCount)
        ? SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: widget.crossAxisCount,
            mainAxisSpacing: widget.mainAxisSpacing,
            crossAxisSpacing: widget.crossAxisSpacing,
            childAspectRatio: widget.childAspectRatio)
        : SliverGridDelegateWithMaxCrossAxisExtent(
            maxCrossAxisExtent: widget.maxCrossAxisExtent,
            mainAxisSpacing: widget.mainAxisSpacing,
            crossAxisSpacing: widget.crossAxisSpacing,
            childAspectRatio: widget.childAspectRatio);
  }
}

class ProxyThreshGridView extends ProxyBase {
  static void register() {
    ProxyThreshGridView _instance = ProxyThreshGridView();
    RegisterWidget().register(
      widgetName: 'GridView',
      constructor: _instance.constructor,
    );
  }

  ThreshGridView constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    Map<String, dynamic> buildProps = model.buildProps;
    print(props);
    print(buildProps);
    ScrollController controller;
    if (model.controller != null && model.controller is ScrollController) {
      controller = model.controller;
    } else {
      controller = ScrollController();
      model.controller = controller;
    }

    return ThreshGridView(
      model,
      backgroundColor: Util.getColor(props['backgroundColor']) ?? Colors.white,
      scrollable: Util.getString(props['scrollable']) ?? always,
      scrollDirection: Util.getString(props['scrollDirection']) ?? vertical,
      startPosition: Util.getString(props['startPosition']) ?? leading,
      padding: Util.getEdgeInsets(props['padding']) ?? EdgeInsets.all(0),
      layoutGrid: Util.getString(props['layoutGrid']) ?? fixedCount,
      crossAxisCount: Util.getInt(props['crossAxisCount']) ?? 3,
      maxCrossAxisExtent: Util.getDouble(props['maxCrossAxisExtent']) ?? 150,
      mainAxisSpacing: Util.getDouble(props['mainAxisSpacing']) ?? 0,
      crossAxisSpacing: Util.getDouble(props['crossAxisSpacing']) ?? 0,
      childAspectRatio: Util.getDouble(props['childAspectRatio']) ?? 1,
      items: Util.getWidgetList(buildProps['items']),
      controller: controller,
      onScroll: eventGlobalHandlerWithParam(
          pageName: model.pageName,
          widgetId: model.widgetId,
          eventId: model.props['_onScrollId'],
          type: 'onScroll'),
      onClicked: eventGlobalHandlerWithParam(
          pageName: model.pageName,
          widgetId: model.widgetId,
          eventId: model.props['_onClickedId'],
          type: 'onClicked'),
    );
  }
}
