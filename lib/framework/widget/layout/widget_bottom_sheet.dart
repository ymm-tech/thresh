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

const Duration _kBottomSheetDuration = Duration(milliseconds: 200);

/// [v1.0.3]底部动态弹窗组件
/// 修改自 buttom_sheet.dart
/// 不提供注册方法，即可通过 showDynamicModalBottomSheet 调用

class DynamicBottomSheet extends StatefulWidget {
  const DynamicBottomSheet({
    Key key,
    this.animationController,
    this.elevation = 0.0,
    @required this.builder,
  }) : assert(builder != null),
       assert(elevation != null && elevation >= 0.0),
       super(key: key);

  final AnimationController animationController;

  final WidgetBuilder builder;

  final double elevation;

  @override
  _DynamicBottomSheetState createState() => _DynamicBottomSheetState();

  static AnimationController createAnimationController(TickerProvider vsync) {
    return AnimationController(
      duration: _kBottomSheetDuration,
      debugLabel: 'DynamicBottomSheet',
      vsync: vsync,
    );
  }
}

class _DynamicBottomSheetState extends State<DynamicBottomSheet> {
  @override
  Widget build(BuildContext context) {
    return widget.builder(context);
  }
}

class _DynamicModalBottomSheetLayout extends SingleChildLayoutDelegate {
  _DynamicModalBottomSheetLayout(this.progress);

  final double progress;

  @override
  BoxConstraints getConstraintsForChild(BoxConstraints constraints) {
    return BoxConstraints(
      minWidth: constraints.maxWidth,
      maxWidth: constraints.maxWidth,
      minHeight: 0.0,
      // maxHeight: constraints.maxHeight * 9.0 / 16.0,
    );
  }

  @override
  Offset getPositionForChild(Size size, Size childSize) {
    return Offset(0.0, size.height - childSize.height * progress);
  }

  @override
  bool shouldRelayout(_DynamicModalBottomSheetLayout oldDelegate) {
    return progress != oldDelegate.progress;
  }
}

class _DynamicModalBottomSheet<T> extends StatefulWidget {
  const _DynamicModalBottomSheet({ Key key, this.route }) : super(key: key);

  final _DynamicModalBottomSheetRoute<T> route;

  @override
  _DynamicModalBottomSheetState<T> createState() => _DynamicModalBottomSheetState<T>();
}

class _DynamicModalBottomSheetState<T> extends State<_DynamicModalBottomSheet<T>> {
  @override
  Widget build(BuildContext context) {
    final MediaQueryData mediaQuery = MediaQuery.of(context);

    return AnimatedBuilder(
      animation: widget.route.animation,
      builder: (BuildContext context, Widget child) {
        final double animationValue = mediaQuery.accessibleNavigation ? 1.0 : widget.route.animation.value;
        return ClipRect(
          child: CustomSingleChildLayout(
            delegate: _DynamicModalBottomSheetLayout(animationValue),
            child: DynamicBottomSheet(
              animationController: widget.route._animationController,
              builder: widget.route.builder,
            ),
          ),
        );
      },
    );
  }
}

class _DynamicModalBottomSheetRoute<T> extends PopupRoute<T> {
  _DynamicModalBottomSheetRoute({
    this.builder,
    this.theme,
    this.barrierLabel,
    RouteSettings settings,
  }) : super(settings: settings);

  final WidgetBuilder builder;
  final ThemeData theme;

  @override
  Duration get transitionDuration => _kBottomSheetDuration;

  @override
  bool get barrierDismissible => true;

  @override
  final String barrierLabel;

  @override
  Color get barrierColor => Color(0x80000000);

  AnimationController _animationController;

  @override
  AnimationController createAnimationController() {
    assert(_animationController == null);
    _animationController = BottomSheet.createAnimationController(navigator.overlay);
    return _animationController;
  }

  @override
  Widget buildPage(BuildContext context, Animation<double> animation, Animation<double> secondaryAnimation) {
    Widget bottomSheet = MediaQuery.removePadding(
      context: context,
      removeTop: true,
      child: _DynamicModalBottomSheet<T>(route: this),
    );
    if (theme != null)
      bottomSheet = Theme(data: theme, child: bottomSheet);
    return bottomSheet;
  }
}

/// 底部动态弹窗组件
Future<T> showDynamicModalBottomSheet<T>({
  @required BuildContext context,
  @required WidgetBuilder builder,
}) {
  assert(context != null);
  assert(builder != null);
  assert(debugCheckHasMaterialLocalizations(context));
  return Navigator.push(context, _DynamicModalBottomSheetRoute<T>(
    builder: builder,
    theme: Theme.of(context, shadowThemeOnly: true),
    barrierLabel: MaterialLocalizations.of(context).modalBarrierDismissLabel,
  ));
}
