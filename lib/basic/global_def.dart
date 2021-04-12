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
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/framework/core/dynamic_app.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/channel/basic.dart';
import 'package:thresh/devtools/dev_tools.dart';

/// 带参数全局事件回调类型
typedef ParamGlobalHandler<T> = void Function(T param);

/// 无返回值全局事件回调类型
typedef VoidGlobalHandler = void Function();

/// 拦截器的构建方法类型
typedef ModelBuilder = Widget Function(
    DynamicModel model, BuildContext context);

/// 404页面
typedef NotFoundPageBuilder = Widget Function(
    BuildContext context, Map<String, String> pathInfo);

/// 异常处理
typedef ErrorHandler = void Function(ThreshError error);

/// 白屏处理
typedef OnWhiteScreen = Widget Function(dynamic reason);

/// 占位屏构造器
typedef PlaceholderBuilder = Widget Function(BuildContext context);

/// 带参数的全局事件回调生成器
ParamGlobalHandler<T> eventGlobalHandlerWithParam<T>(
    {@required String pageName,
    @required String widgetId,
    @required String eventId,
    @required String type}) {
  if (pageName == null || widgetId == null || eventId == null) return null;
  ParamGlobalHandler<T> handler = (T args) {
    devtools.insert(
        InfoType.event,
        DevInfo(
            title: 'Trigger Event: $type',
            content:
                'Page/Modal Name: $pageName\nWidget Id: $widgetId\nArgs: $args'));
    dynamicApp?.eventHandler(
        pageName: pageName,
        widgetId: widgetId,
        eventId: eventId,
        eventType: type,
        args: args);
  };
  return handler;
}

/// 无返回值的全局事件回调生成器
VoidGlobalHandler eventGlobalVoidHandler(
    {@required String pageName,
    @required String widgetId,
    @required String eventId,
    @required String type}) {
  if (pageName == null || widgetId == null || eventId == null) return null;
  VoidGlobalHandler handler = () {
    devtools.insert(
        InfoType.event,
        DevInfo(
            title: 'Trigger Event: $type',
            content: 'Page/Modal Name: $pageName\nWidget Id: $widgetId'));
    dynamicApp?.eventHandler(
      pageName: pageName,
      widgetId: widgetId,
      eventId: eventId,
      eventType: type,
    );
  };
  return handler;
}

/// 数字范围类型
/// 闭区间
/// [Range(min: 0, max: 1)] 表示 [0, 1]
class Range {
  final num min;
  final num max;

  Range({this.min, this.max});

  /// 判断目标数字是否在当前范围内
  /// 在范围内则返回当前数字
  /// 不在范围内则返回边界数字
  convertNumber(num value) {
    if (min != null && value < min) return min;
    if (max != null && value > max) return max;
    return value;
  }
}

/// 模拟栈列表并提供一些特殊的方法
class StackList<T> {
  List<T> stack = [];

  int get length => stack.length;
  bool get isEmpty => stack.isEmpty;
  T get last => length > 0 ? stack.last : null;
  set last(T item) {
    if (length > 0) stack.last = item;
  }

  T get first => length > 0 ? stack.first : null;
  set first(T item) {
    if (length > 0) stack.first = item;
  }

  T operator [](int index) => stack[index];
  void operator []=(int index, T item) => replace(item, index);

  /// 向栈中添加元素
  void push(T item) {
    stack.add(item);
  }

  /// 推出栈尾元素
  T pop() {
    return stack.length > 0 ? stack.removeLast() : null;
  }

  /// 替换栈中元素
  T replace(T item, int index) {
    if (index < length) {
      T temp = stack[index];
      if (temp != item) stack[index] = item;
      return temp;
    }
    return null;
  }

  /// 判断当前栈是否含有某个元素
  bool has(T item) {
    return stack.contains(item);
  }
}

/// 具有上下左右四个属性的位置类型
class Position {
  static Size _screenSize = MediaQueryData.fromWindow(window).size;

  double top;
  double bottom;
  double left;
  double right;

  Position({
    this.top,
    this.bottom,
    this.left,
    this.right,
  });

  /// 从 model 中获取值
  Position.fromModel(dynamic value) {
    if (value is num) {
      double v = value.toDouble();
      top = v;
      bottom = v;
      left = v;
      right = v;
    }
    if ((value is Map)) {
      double width = (value['width'] != null && value['width'] is num)
          ? value['width'].toDouble()
          : null;
      // 计算 left right 保证居中
      if (width == null) {
        left = (value['left'] != null && value['left'] is num)
            ? value['left'].toDouble()
            : null;
        right = (value['right'] != null && value['right'] is num)
            ? value['right'].toDouble()
            : null;
        if (left == null && right == null)
          left = right = 50; // 如果 left right 都不存在则为 left right 设置默认值 50
        else if (left == null)
          left = right; // 如果只存在一个则为另一个设置相同的值
        else
          right = left;
      } else {
        // 如果存在 width 则统一为 left right 设置值
        left = right = (Position._screenSize.width - width) / 2;
      }

      double height = (value['height'] != null && value['height'] is num)
          ? value['height'].toDouble()
          : null;
      top = (value['top'] != null && value['top'] is num)
          ? value['top'].toDouble()
          : null;
      bottom = (value['bottom'] != null && value['bottom'] is num)
          ? value['bottom'].toDouble()
          : null;
      if (top == null || bottom == null) {
        if (height == null) {
          if (top == null && bottom == null) bottom = 50;
        } else {
          if (top == null && bottom == null) {
            bottom = 50;
            top = Position._screenSize.height - bottom - height;
          } else if (top == null) {
            top = Position._screenSize.height - bottom - height;
          } else if (bottom == null) {
            bottom = 50;
            top = Position._screenSize.height - bottom - height;
          }
        }
      }
    }
  }
}

class LayoutInfo {
  LayoutInfo({
    this.x,
    this.y,
    this.width,
    this.height,
    this.margin,
  });

  final double x;
  final double y;
  final double width;
  final double height;
  EdgeInsets margin;

  Map<String, double> toMap() {
    Map<String, double> map = {};
    if (margin == null) margin = EdgeInsets.all(0);
    if (x != null) map['x'] = x + margin.left;
    if (y != null) map['y'] = y + margin.top;
    if (width != null) map['width'] = width - (margin.left + margin.right);
    if (height != null) map['height'] = height - (margin.top + margin.bottom);
    return map;
  }
}

enum TimerType {
  /// 单次定时器
  timeout,

  /// 多次定时器
  interval,
}

/// 生命周期类型
class LifeCycleStep {
  final String value;

  static const widgetDidMount = const LifeCycleStep('widgetDidMount');
  static const widgetDidUpdate = const LifeCycleStep('widgetDidUpdate');
  static const widgetDidUnmount = const LifeCycleStep('widgetDidUnmount');

  const LifeCycleStep(this.value);
}

/// 路由信息
class RouteInfo {
  final String pageName;
  final Map<String, dynamic> params;

  const RouteInfo(this.pageName, {this.params});

  Map<String, dynamic> getInfo() {
    return {
      'pageName': pageName,
      'params': params,
    };
  }
}

/// 组件点击后的纹理类型
/// 用于关闭默认的水纹效果
class NoSplashFactory extends InteractiveInkFeatureFactory {
  const NoSplashFactory();

  @override
  InteractiveInkFeature create(
      {MaterialInkController controller,
      RenderBox referenceBox,
      Offset position,
      Color color,
      TextDirection textDirection,
      bool containedInkWell = false,
      rectCallback,
      BorderRadius borderRadius,
      ShapeBorder customBorder,
      double radius,
      onRemoved}) {
    return new NoSplash(
      controller: controller,
      referenceBox: referenceBox,
    );
  }
}

class NoSplash extends InteractiveInkFeature {
  NoSplash({
    @required MaterialInkController controller,
    @required RenderBox referenceBox,
  })  : assert(controller != null),
        assert(referenceBox != null),
        super(
          controller: controller,
          referenceBox: referenceBox,
        );

  @override
  void paintFeature(Canvas canvas, Matrix4 transform) {}
}

/// df 异常
enum ThreshErrorType { JS, Flutter }

class ThreshError extends Error {
  final ThreshErrorType type;
  final String message;
  final String trace;
  final String pageName;
  final String referPageName;

  ThreshError(this.message,
      {this.trace,
      this.type = ThreshErrorType.Flutter,
      this.pageName,
      this.referPageName})
      : super();

  String toString() => Util.formatMutipulLineText([
        '[Error Detail] - $message',
        '[Error Type] - ${this.type == ThreshErrorType.Flutter ? 'Flutter' : 'JS'}',
      ]);
}

class DFStopAlwaysRenderController {
  dynamic currentState;
  String name;

  stopRender() {
    currentState?.stopRender?.call();
  }

  dispose() {
    currentState = null;
  }
}
