import 'package:flutter/material.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/layout/widget_dragable_scroll_view/dragable_scroll_view.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/basic/global_def.dart';

class DFDragableScrollView extends DFBasicWidget {
  DFDragableScrollView(
    DynamicModel model, {
    this.initialSize,
    this.minSize,
    this.maxSize,
    this.backgroundColor,
    this.borderRadius,
    this.headerView,
    this.children,
    this.onScroll,
    this.onDragPositionChange,
  }) : super(model);

  final double initialSize;
  final double minSize;
  final double maxSize;
  final Color backgroundColor;
  final BorderRadius borderRadius;
  final Widget headerView;
  final List<Widget> children;
  final ParamGlobalHandler onScroll;
  final ParamGlobalHandler onDragPositionChange;

  Widget buildMainWidget(context) {
    return DraggableScrollView(
      initialChildSize: initialSize,
      maxChildSize: maxSize,
      minChildSize: minSize,
      builder: (context, controller) {
        model.controller = controller;

        final Widget $view = Container(
          color: backgroundColor,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              buildHeaderView(context, controller),
              Expanded(
                child: MediaQuery.removePadding(
                  context: context,
                  removeTop: true,
                  removeBottom: true,
                  child: ListView(
                    controller: controller,
                    children: children,
                  ),
                ),
              ),
            ],
          ),
        );

        if (borderRadius == null) return $view;
        return ClipRRect(
          borderRadius: borderRadius,
          child: $view,
        );
      },
      onDragPositionChange: onDragPositionChange == null
          ? null
          : (positionType) {
              onDragPositionChange({'position': positionType.value});
            },
      onScroll: onScroll,
    );
  }

  buildHeaderView(BuildContext context, DraggableScrollController controller) {
    if (headerView == null) return Container();
    return GestureDetector(
      child: SizedBox(
        width: double.infinity,
        child: headerView,
      ),
      onVerticalDragUpdate: (details) {
        controller.extent.addPixelDelta(-details.delta.dy, context);
      },
      onVerticalDragEnd: (details) {
        controller.extent.animateTo(
          controller.extent.stickyPositionType,
          controller,
        );
      },
    );
  }
}

class ProxyDFDragableScrollView extends ProxyBase {
  static void register() {
    ProxyDFDragableScrollView instance = ProxyDFDragableScrollView();
    RegisterWidget().register(
      widgetName: 'DragableScrollView',
      constructor: instance.constructor,
    );
  }

  DFDragableScrollView constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    Map<String, dynamic> buildProps = model.buildProps;

    final double initialSize =
        Util.getDouble(props['initialSize'], range: Range(min: 0, max: 1)) ??
            0.5;
    final double maxSize =
        Util.getDouble(props['maxSize'], range: Range(min: 0, max: 1)) ?? 1;
    final double minSize =
        Util.getDouble(props['minSize'], range: Range(min: 0, max: 1)) ??
            initialSize;

    print('minSize: $minSize');
    print('maxSize: $maxSize');
    print('initialSize: $initialSize');

    return DFDragableScrollView(
      model,
      initialSize: initialSize,
      maxSize: maxSize,
      minSize: minSize,
      backgroundColor:
          Util.getColor(props['backgroundColor']) ?? Colors.transparent,
      borderRadius: Util.getBorderRadius(model.props['borderRadius']),
      headerView: buildProps['headerView'] as Widget,
      children: Util.getWidgetList(buildProps['children']),
      onScroll: getOnScrollDebouncedMethod(
        eventGlobalHandlerWithParam(
          pageName: model.pageName,
          widgetId: model.widgetId,
          eventId: model.props['_onScrollId'],
          type: 'onScroll',
        ),
      ),
      onDragPositionChange: eventGlobalHandlerWithParam(
        pageName: model.pageName,
        widgetId: model.widgetId,
        eventId: model.props['_onDragPositionChangeId'],
        type: 'onDragPositionChange',
      ),
    );
  }

  Function getOnScrollDebouncedMethod(Function onScroll) {
    if (onScroll == null) return null;
    return Util.throttle((offset) {
      onScroll({'offset': offset});
    });
  }
}
