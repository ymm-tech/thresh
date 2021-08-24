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

import 'dart:async';
import 'package:flutter/material.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/core/dynamic_widget.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/basic/global_def.dart';

/// 基础组件 DFListView
class DFListView extends DFBasicWidget {
  DFListView(
    DynamicModel model, {
    Key key,
    this.direction = 'vertical',
    this.padding,
    this.physics,
    this.controller,
    this.childrenModels,
    this.refreshColor,
    this.refreshBackgroundColor,
    this.onScroll,
    this.onRefresh,
    this.onLoadMore,
  }) : super(model, key: key);

  final String direction;
  final EdgeInsets padding;
  final ScrollPhysics physics;
  final ListViewController controller;
  final List<DynamicModel> childrenModels;
  final Color refreshColor;
  final Color refreshBackgroundColor;
  final ParamGlobalHandler onScroll;
  final VoidGlobalHandler onRefresh;
  final VoidGlobalHandler onLoadMore;

  Widget buildMainWidget(BuildContext context) {
    return _DFListView(
      direction: direction,
      padding: padding,
      physics: physics,
      controller: controller,
      childrenModels: childrenModels,
      refreshColor: refreshColor,
      refreshBackgroundColor: refreshBackgroundColor,
      onScroll: onScroll,
      onRefresh: onRefresh,
      onLoadMore: onLoadMore,
    );
  }

  static bool isListView(Widget w) {
    return ((w is DynamicWidget) && (w.widgetInstance is DFListView)) ||
        (w is DFListView);
  }
}

class _DFListView extends StatefulWidget {
  _DFListView({
    this.direction = 'vertical',
    this.padding,
    this.physics,
    this.controller,
    this.childrenModels,
    this.refreshColor,
    this.refreshBackgroundColor,
    this.onScroll,
    this.onRefresh,
    this.onLoadMore,
  });

  final String direction;
  final EdgeInsets padding;
  final ScrollPhysics physics;
  final ListViewController controller;
  final List<DynamicModel> childrenModels;
  final Color refreshColor;
  final Color refreshBackgroundColor;
  final ParamGlobalHandler onScroll;
  final VoidGlobalHandler onRefresh;
  final VoidGlobalHandler onLoadMore;

  @override
  State<StatefulWidget> createState() {
    return _DFListViewState();
  }
}

class _DFListViewState extends State<_DFListView> {
  List<DynamicModel> childrenModels;
  final bool isAndroid = Util.isAndroid;

  @override
  void initState() {
    super.initState();
    childrenModels = widget.childrenModels;
  }

  @override
  void didUpdateWidget(_DFListView oldWidget) {
    super.didUpdateWidget(oldWidget);
    setState(() {
      childrenModels = widget.childrenModels;
    });
  }

  Widget buildListViewListener(BuildContext context) {
    Widget $listView = buildRefreshIndicator(context);
    if (widget.onScroll == null && widget.onLoadMore == null) return $listView;
    bool shouldTriggerLoadMoreOnScrollEnd = false;
    return NotificationListener(
      child: $listView,
      onNotification: (notification) {
        if (notification.runtimeType == ScrollUpdateNotification) {
          final int pixels = notification.metrics.pixels.toInt();
          widget.onScroll?.call(pixels);
          final int offset = (pixels - notification.metrics.maxScrollExtent).toInt();
          if (widget.onLoadMore == null || pixels < 0 || offset < 0) {
            shouldTriggerLoadMoreOnScrollEnd = false;
            return true;
          }

          if (offset > 20) shouldTriggerLoadMoreOnScrollEnd = true;
        }
        if (notification.runtimeType == ScrollEndNotification &&
            shouldTriggerLoadMoreOnScrollEnd) {
          shouldTriggerLoadMoreOnScrollEnd = false;
          triggerLoadMore();
        }
        return true;
      },
    );
  }

  Widget buildRefreshIndicator(BuildContext context) {
    Widget $listView = buildListView(context);

    if (widget.onRefresh != null) {
      $listView = RefreshIndicator(
        color: widget.refreshColor,
        backgroundColor: widget.refreshBackgroundColor,
        child: $listView,
        onRefresh: () {
          if (widget.controller.canTriggerOperate()) {
            widget.onRefresh();
            return widget.controller
                .startAsyncOperate(ListViewOperateType.refresh);
          }
          return Future.value();
        },
      );
    }
    return $listView;
  }

  Widget buildListView(BuildContext context) {
    return ListView.builder(
      padding: widget.padding,
      controller: widget.controller,
      scrollDirection:
          widget.direction == 'vertical' ? Axis.vertical : Axis.horizontal,
      physics: widget.physics,
      itemCount: childrenModels.length,
      itemBuilder: (BuildContext context, int index) {
        DynamicModel model = childrenModels[index];
        return _DFListViewItem(
          builder: (BuildContext context) => model.buildDynamicWidget(
              context: context, isInListViewBuilder: true),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return MediaQuery.removePadding(
      removeTop: true,
      removeBottom: true,
      context: context,
      child: buildListViewListener(context),
    );
  }

  triggerLoadMore() {
    if (widget.onLoadMore == null) return;
    if (widget.controller.canTriggerOperate()) {
      widget.onLoadMore();
      widget.controller.startAsyncOperate(ListViewOperateType.loadMore);
    }
  }
}

class _DFListViewItem extends StatelessWidget {
  _DFListViewItem({
    @required this.builder,
  });

  final WidgetBuilder builder;

  @override
  Widget build(BuildContext context) {
    return builder(context);
  }
}

class ProxyDFListView extends ProxyBase {
  static void register() {
    ProxyDFListView instance = ProxyDFListView();
    RegisterWidget().register(
      widgetName: 'ListView',
      constructor: instance.constructor,
    );
  }

  DFListView constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;

    ListViewController controller;
    if (model.controller != null && model.controller is ListViewController) {
      controller = model.controller;
    } else {
      controller = ListViewController();
      model.controller = controller;
    }

    final bool scrollable =
        Util.getBoolean(props['scrollable'], nullIsTrue: true);
    ScrollPhysics physics =
        AlwaysScrollableScrollPhysics(parent: BouncingScrollPhysics());
    if (!scrollable)
      physics = NeverScrollableScrollPhysics(parent: BouncingScrollPhysics());

    return DFListView(
      model,
      controller: controller,
      direction: Util.getDirection(props['direction']),
      padding: Util.getEdgeInsets(props['padding']),
      childrenModels: Util.getDynamicModelList(props['children']),
      physics: physics,
      onScroll: getOnScrollDebouncedMethod(eventGlobalHandlerWithParam(
          pageName: model.pageName,
          widgetId: model.widgetId,
          eventId: model.props['_onScrollId'],
          type: 'onScroll')),
      refreshColor: Util.getColor(props['refreshColor']),
      refreshBackgroundColor: Util.getColor(props['refreshBackgroundColor']),
      onRefresh: eventGlobalVoidHandler(
          pageName: model.pageName,
          widgetId: model.widgetId,
          eventId: model.props['_onRefreshId'],
          type: 'onRefresh'),
      onLoadMore: eventGlobalVoidHandler(
          pageName: model.pageName,
          widgetId: model.widgetId,
          eventId: model.props['_onLoadMoreId'],
          type: 'onLoadMore'),
    );
  }

  Function getOnScrollDebouncedMethod(Function onScroll) {
    if (onScroll == null) return null;
    return Util.throttle((offset) {
      onScroll({'offset': offset});
    });
  }
}

class ListViewController extends ScrollController {
  Completer refreshCompleter;
  Completer loadMoreCompleter;

  Future<void> startAsyncOperate(ListViewOperateType type) {
    if (!canTriggerOperate()) return Future.value();
    if (type == ListViewOperateType.refresh) {
      refreshCompleter = Completer();
      return refreshCompleter.future;
    } else {
      loadMoreCompleter = Completer();
      return loadMoreCompleter.future;
    }
  }

  stopAsyncOperate(ListViewOperateType type) {
    if (type == ListViewOperateType.refresh) {
      refreshCompleter.complete();
      refreshCompleter = null;
    } else {
      loadMoreCompleter.complete();
      loadMoreCompleter = null;
    }
  }

  canTriggerOperate() {
    return refreshCompleter == null && loadMoreCompleter == null;
  }
}

class ListViewOperateType {
  static ListViewOperateType refresh = const ListViewOperateType('refresh');
  static ListViewOperateType loadMore = const ListViewOperateType('loadMore');

  const ListViewOperateType(this.type);

  final String type;
}
