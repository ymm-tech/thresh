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
import 'package:flutter/rendering.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/basic/global_def.dart';
import 'package:thresh/basic/util.dart';

typedef ChildBuilder = Widget Function(BuildContext context);

class DFBasicWidget extends StatelessWidget {
  final DynamicModel model;
  final double _width;
  final double _height;
  final double _minWidth;
  final double _minHeight;
  final double _maxWidth;
  final double _maxHeight;
  final int _flex;
  final Map<String, double> _absolute;
  final EdgeInsets _padding;
  final EdgeInsets _margin;
  final Color _tintColor;
  final Color _backgroundColor;
  final Gradient _backgroundGradient;
  final Border _border;
  final BorderRadius _borderRadius;
  final List<BoxShadow> _boxShadow;
  final bool _disabled;
  final double _opacity;
  final double _tapOpacity;
  final Matrix4 _transform;
  final ParamGlobalHandler _onTap;
  final ParamGlobalHandler _onLongTap;
  final ParamGlobalHandler _onPan;
  final ParamGlobalHandler _onLayout;

  /// 子组件，优先级高于childBuilder
  final Widget child;

  /// 子组件构造器
  final ChildBuilder childBuilder;

  DFBasicWidget(
    this.model, {
    Key key,
    double width,
    double height,
    double minWidth,
    double minHeight,
    double maxWidth,
    double maxHeight,
    int flex,
    Map<String, double> absolute,
    EdgeInsets padding,
    EdgeInsets margin,
    Color tintColor,
    Color backgroundColor,
    Gradient backgroundGradient,
    Border border,
    BorderRadius borderRadius,
    List<BoxShadow> boxShadow,
    bool disabled = false,
    double opacity = 1.0,
    double tapOpacity,
    Matrix4 transform,
    this.child,
    this.childBuilder,
  })  : _width = model != null
            ? Util.getDouble(model.props['width']) ?? width
            : width,
        _height = model != null
            ? Util.getDouble(model.props['height']) ?? height
            : height,
        _minWidth = model != null
            ? Util.getDouble(model.props['minWidth']) ?? minWidth
            : minWidth,
        _minHeight = model != null
            ? Util.getDouble(model.props['minHeight']) ?? minHeight
            : minHeight,
        _maxWidth = model != null
            ? Util.getDouble(model.props['maxWidth']) ?? maxWidth
            : maxWidth,
        _maxHeight = model != null
            ? Util.getDouble(model.props['maxHeight']) ?? maxHeight
            : maxHeight,
        _flex = model != null ? Util.getInt(model.props['flex']) ?? flex : flex,
        _absolute = model != null
            ? Util.getAbsolute(model.props['absolute'])
            : absolute,
        _padding = model != null &&
                model.name != 'ListView' &&
                model.name != 'ScrollView'
            ? Util.getEdgeInsets(model.props['padding']) ?? padding
            : padding,
        _margin = model != null
            ? Util.getEdgeInsets(model.props['margin']) ?? margin
            : margin,
        _tintColor = model != null
            ? Util.getColor(model.props['tintColor']) ?? tintColor
            : tintColor,
        _backgroundColor = model != null
            ? Util.getColor(model.props['backgroundColor']) ?? backgroundColor
            : backgroundColor,
        _backgroundGradient = model != null
            ? Util.getGradient(model.props['backgroundGradient']) ??
                backgroundGradient
            : backgroundGradient,
        _border = model != null
            ? Util.getBorder(model.props['border']) ?? border
            : border,
        _borderRadius = model != null
            ? Util.getBorderRadius(model.props['borderRadius']) ?? borderRadius
            : borderRadius,
        _boxShadow = model != null
            ? Util.getBoxShadow(model.props['boxShadow']) ?? boxShadow
            : boxShadow,
        _disabled = model != null
            ? (Util.getBoolean(model.props['disabled']))
            : disabled,
        _transform = model != null
            ? Util.getTransform(model.props['transform']) ?? transform
            : transform,
        _opacity = model != null
            ? (Util.getDouble(
                  model.props['opacity'],
                  range: Range(min: 0, max: 1),
                ) ??
                opacity)
            : 1.0,
        _tapOpacity = model != null
            ? (Util.getDouble(
                  model.props['tapOpacity'],
                  range: Range(min: 0, max: 1),
                ) ??
                tapOpacity ??
                Util.getDouble(model.props['opacity']) ??
                1.0)
            : 1.0,
        _onTap = model != null
            ? eventGlobalHandlerWithParam(
                pageName: model.pageName,
                widgetId: model.widgetId,
                eventId: model.props['_onTapId'],
                type: 'onTap',
              )
            : null,
        _onLongTap = model != null
            ? eventGlobalHandlerWithParam(
                pageName: model.pageName,
                widgetId: model.widgetId,
                eventId: model.props['_onLongTapId'],
                type: 'onLongTap',
              )
            : null,
        _onPan = model != null
            ? eventGlobalHandlerWithParam(
                pageName: model.pageName,
                widgetId: model.widgetId,
                eventId: model.props['_onPanId'],
                type: 'onPan',
              )
            : null,
        _onLayout = model != null
            ? eventGlobalHandlerWithParam(
                pageName: model.pageName,
                widgetId: model.widgetId,
                eventId: model.props['_onLayoutId'],
                type: 'onLayout',
              )
            : null,
        super(key: key ?? (model != null ? model.key : null));

  @override
  Widget build(BuildContext context) {
    final Widget $widget = buildLayoutWidget(context);
    return isDragableScrollView ? Positioned.fill(child: $widget) : $widget;
  }

  Widget buildLayoutWidget(BuildContext context) {
    if (isDragableScrollView) return buildTouchWidget(context);

    if (_absolute != null) {
      return Positioned(
        top: _absolute['top'],
        bottom: _absolute['bottom'],
        left: _absolute['left'],
        right: _absolute['right'],
        child: buildTouchWidget(context),
      );
    } else if (_flex != null) {
      return Expanded(
        flex: _flex,
        child: buildTouchWidget(context),
      );
    }
    return buildTouchWidget(context);
  }

  Widget buildTouchWidget(BuildContext context) {
    if (_disabled) return buildOpacityWidget(context);
    if (_onTap == null && _onLongTap == null && (_onPan == null))
      return buildOpacityWidget(context);
    return DFTouchable(
      opacity: _opacity,
      tapOpacity: _tapOpacity,
      onTap: _onTap,
      onLongTap: _onLongTap,
      onPan: _onPan,
      margin: _margin,
      child: buildOpacityWidget(context),
    );
  }

  Widget buildOpacityWidget(BuildContext context) {
    return Opacity(
      opacity: _opacity,
      child: buildLayoutListener(context),
    );
  }

  Widget buildLayoutListener(BuildContext context) {
    // 不用添加 onlayout 可以直接进行构建的情况
    if (_onLayout == null) return buildStyleWidget(context);

    return NotificationListener<_DFSizeChangedLayoutNotification>(
      child: _DFSizeChangedLayoutNotifier(
        child: buildStyleWidget(context),
      ),
      onNotification: (_DFSizeChangedLayoutNotification notification) {
        final layoutInfo = LayoutInfo(
          x: notification.offset.dx,
          y: notification.offset.dy,
          width: notification.size.width,
          height: notification.size.height,
          margin: _margin,
        );
        _onLayout(layoutInfo.toMap());
        return true;
      },
    );
  }

  Widget buildStyleWidget(BuildContext context) {
    if (isDragableScrollView) return buildMainWidget(context);

    BoxConstraints constraint = BoxConstraints(
      minWidth: _minWidth ?? 0,
      minHeight: _minHeight ?? 0,
      maxWidth: _maxWidth ?? double.infinity,
      maxHeight: _maxHeight ?? double.infinity,
    );
    Widget styleWidget;
    if (_borderRadius == null) {
      styleWidget = Container(
        margin: _margin,
        padding: _padding,
        width: _width,
        height: _height,
        constraints: constraint,
        transform: _transform,
        decoration: getBoxDecoration(),
        child: buildMainWidget(context),
      );
    } else {
      styleWidget = Container(
        width: _width,
        height: _height,
        constraints: constraint,
        margin: _margin,
        transform: _transform,
        decoration: getBoxDecoration(),
        child: ClipRRect(
          borderRadius: _borderRadius,
          child: Container(
            padding: _padding,
            child: buildMainWidget(context),
          ),
        ),
      );
    }
    if (_tintColor != null) {
      styleWidget = ColorFiltered(
        colorFilter: ColorFilter.mode(_tintColor, BlendMode.modulate),
        child: styleWidget,
      );
    }
    return styleWidget;
  }

  Widget buildMainWidget(BuildContext context) {
    if (this.child != null) return this.child;
    if (this.childBuilder != null) return this.childBuilder(context);
    return Container();
  }

  BoxDecoration getBoxDecoration() {
    return BoxDecoration(
      color: _backgroundColor ?? Colors.transparent,
      gradient: _backgroundGradient,
      boxShadow: _boxShadow,
      border: _border,
      borderRadius: _borderRadius,
    );
  }

  bool get isAbsolute => _absolute != null || isDragableScrollView;
  bool get isDragableScrollView => model?.name == 'DragableScrollView';
}

class DFTouchable extends StatefulWidget {
  final double opacity;
  final double tapOpacity;
  final ParamGlobalHandler onTap;
  final ParamGlobalHandler onLongTap;
  final ParamGlobalHandler onPan;
  final Widget child;
  final EdgeInsets margin;

  DFTouchable(
      {this.onTap,
      this.onLongTap,
      this.onPan,
      this.opacity = 1.0,
      this.tapOpacity = 1.0,
      this.margin,
      @required this.child});

  @override
  State<StatefulWidget> createState() {
    return DFTouchableState();
  }
}

class DFTouchableState extends State<DFTouchable> {
  double opacity;
  Offset position = Offset.zero;

  @override
  void initState() {
    super.initState();
    opacity = widget.opacity;
  }

  @override
  void didUpdateWidget(DFTouchable oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.opacity != oldWidget.opacity) {
      setState(() {
        opacity = widget.opacity;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTapDown: onTapTrigger,
      onTapUp: onTapTrigger,
      onTapCancel: () {
        onTapTrigger(null);
      },
      onTap: () {
        if (widget.onTap == null) return;
        widget.onTap({
          'x': position.dx.toInt(),
          'y': position.dy.toInt(),
          'layout': getLayoutInfo(context).toMap(),
        });
      },
      onLongPressStart: onTapTrigger,
      onLongPressEnd: onTapTrigger,
      onLongPress: () {
        if (widget.onLongTap == null) return;
        widget.onLongTap({
          'x': position.dx.toInt(),
          'y': position.dy.toInt(),
          'layout': getLayoutInfo(context).toMap(),
        });
      },
      onPanUpdate: (e) {
        if (widget.onPan == null) return;
        widget.onPan({
          'dx': e.delta.dx.toInt(),
          'dy': e.delta.dy.toInt(),
        });
      },
      child: Opacity(
        opacity: opacity,
        child: widget.child,
      ),
    );
  }

  LayoutInfo getLayoutInfo(BuildContext context) {
    final RenderBox renderBox = context.findRenderObject();
    final Offset offset = renderBox.localToGlobal(Offset.zero);
    final Size size = renderBox.size;
    return LayoutInfo(
      x: offset.dx,
      y: offset.dy,
      width: size.width,
      height: size.height,
      margin: widget.margin,
    );
  }

  void onTapTrigger(e) {
    if ((e is TapDownDetails) || (e is LongPressStartDetails)) {
      position = e.globalPosition;
    }
    if (widget.opacity == widget.tapOpacity) return;
    setState(() {
      opacity = opacity == widget.opacity ? widget.tapOpacity : widget.opacity;
    });
  }
}

class _DFSizeChangedLayoutNotifier extends SingleChildRenderObjectWidget {
  const _DFSizeChangedLayoutNotifier({Key key, Widget child})
      : super(key: key, child: child);

  @override
  _DFRenderSizeChangedWithCallback createRenderObject(BuildContext context) {
    return _DFRenderSizeChangedWithCallback(
        onLayoutChangedCallback: (Size size, Offset offset) {
      _DFSizeChangedLayoutNotification(size, offset).dispatch(context);
    });
  }
}

class _DFRenderSizeChangedWithCallback extends RenderProxyBox {
  _DFRenderSizeChangedWithCallback({
    RenderBox child,
    @required this.onLayoutChangedCallback,
  })  : assert(onLayoutChangedCallback != null),
        super(child);

  final Function onLayoutChangedCallback;

  Size _oldSize;

  @override
  void performLayout() {
    super.performLayout();
    Future.microtask(() {
      sendNotification(localToGlobal(Offset.zero));
    });
  }

  void sendNotification(Offset offset) {
    if (_oldSize == null ||
        size.width != _oldSize.width ||
        size.height != _oldSize.height) {
      onLayoutChangedCallback(size, offset);
    }
    _oldSize = size;
  }
}

class _DFSizeChangedLayoutNotification extends LayoutChangedNotification {
  Size size;
  Offset offset;

  _DFSizeChangedLayoutNotification(this.size, this.offset);
}
