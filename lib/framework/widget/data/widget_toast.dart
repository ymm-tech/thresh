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
import 'package:thresh/basic/global_def.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/devtools/dev_tools.dart';

/// toast管理类
/// show 显示toast
/// hide 隐藏toast
class DFToastManager {
  static DFToastWrapState toastWrap;
  static Map<String, DFToast> toasts = {};

  static void init(DFToastWrapState toastWrap) {
    DFToastManager.toastWrap = toastWrap;
  }
  /// 显示 toast
  static void show({
    @required Widget toastBody,
    DFToastInfo toastInfo
  }) {
    if (toastInfo == null) toastInfo = DFToastInfo();
    if (DFToastManager.toasts[toastInfo.name] != null) return;
    DFToast toast = DFToast(toastInfo: toastInfo, child: toastBody,);
    DFToastManager.toasts[toastInfo.name] = toast;
    DFToastManager.toastWrap.add(toast);
  }
  /// 隐藏 toast
  static void hide(String toastName) {
    DFToast toast = DFToastManager.toasts[toastName];
    if (toast != null) {
      toast.controller.remove();
    }
  }
  /// 将 toast 移除
  static void remove(DFToast toast) {
    DFToastManager.toasts.remove(toast.toastInfo.name);
    DFToastManager.toastWrap.remove();
  }
  /// 移除所有
  static void removeAll() {
    for (String key in DFToastManager.toasts.keys) {
      DFToastManager.hide(key);
    }
  }
}

/// 基础组件 DFToast
class DFToast extends StatefulWidget {
  DFToast({
    this.toastInfo,
    this.child,
  });

  final DFToastInfo toastInfo;
  final Widget child;
  final DFToastController controller = DFToastController();

  @override
  State<StatefulWidget> createState() {
    return DFToastState();
  }

  void remove() {
    controller.remove();
  }
}

class DFToastState extends State<DFToast> {
  bool isOpacityAnimated = true;
  Position position;
  DFToastInfo info;
  double opacity;

  @override
  void initState() {
    super.initState();
    widget.controller.state = this;
    DFToastInfo info = widget.toastInfo;
    position = info.startPosition ?? Position(bottom: 50, left: 30, right: 30);
    opacity = info.startOpacity;
    createStartAnimation();
    if (info.stayTime > 0) createEndAnimation(dismissDelay: info.stayTime + info.duration);
  }

  void createStartAnimation() {
    DFToastInfo info = widget.toastInfo;
    Timer(Duration(milliseconds: 0), () {
      setState(() {
        opacity = info.endOpacity;
        if (info.endPosition != null) position = info.endPosition;
      });
    });
  }
  void createEndAnimation({ int dismissDelay: 0 }) {
    DFToastInfo info = widget.toastInfo;
    Timer(Duration(milliseconds: dismissDelay), () {
      if (info.showDevInfo) {
        devtools.insert(InfoType.event, DevInfo(
          title: 'Hide Toast',
          content: 'Toast Name: ${info.name}'
        ));
      }
      setState(() {
        opacity = info.startOpacity;
        position = info.startPosition ?? Position(bottom: 50, left: 30, right: 30);
      });
    });
    Timer(Duration(milliseconds: dismissDelay + info.duration), () {
      DFToastManager.remove(widget);
    });
  }

  @override
  Widget build(BuildContext context) {
    Widget animation = buildAnimation();
    if (widget.toastInfo.mask) {
      return Positioned.fill(
        child: Container(
          color: Colors.transparent,
          child: Directionality(
            textDirection: TextDirection.ltr,
            child: Stack(
              children: [ animation ],
            )
          ),
        ),
      );
    }
    return animation;
  }

  Widget buildAnimation() {
    int duration = widget.toastInfo.duration;
    return AnimatedPositioned(
      top: position.top,
      bottom: position.bottom,
      left: position.left,
      right: position.right,
      curve: Curves.easeInOut,
      duration: Duration(milliseconds: duration),
      child: AnimatedOpacity(
        opacity: opacity,
        curve: Curves.easeInOut,
        duration: Duration(milliseconds: duration),
        child: widget.child,
      ),
    );
  }
}

class DFToastController {
  DFToastState _state;

  set state(DFToastState state) {
    _state = state;
  }

  void remove() {
    if (_state != null) {
      _state.createEndAnimation();
    }
  }
}

/// toast在根节点的包裹类
/// 用来显示所有的toast
class DFToastWrap extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return DFToastWrapState();
  }
}

class DFToastWrapState extends State<DFToastWrap> {
  List<DFToast> toasts = [];
  int dismissToastCount = 0;

  @override
  void initState() {
    super.initState();
    DFToastManager.init(this);
  }
  /// 添加需要显示的toast
  void add(DFToast toast) {
    setState(() {
      toasts.add(toast);
    });
  }
  /// 通过计数的方式批量移除toast
  /// 当需要移除的toast计数与当前存在的toast数量相同时
  /// 说明toast需要全部移除
  /// 不使用toasts.remove()后setState是因为这样会导致同时显示多个时toastState丢失
  void remove() {
    dismissToastCount++;
    if (dismissToastCount == toasts.length) {
      setState(() {
        dismissToastCount = 0;
        toasts = [];
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    if (toasts.isEmpty) return Container();
    return Positioned(
      child: Directionality(
        textDirection: TextDirection.ltr,
        child: Stack(
          children: toasts,
        )
      ),
    );
  }
}

/// toast显示所需信息
class DFToastInfo {
  /// 用来为没有设置name的toast设置name
  static int toastId = 0;
  /// 是否控制台显示，默认显示消息
  bool showDevInfo = true;
  /// toast name
  /// toast的标识符，在手动操控消失时需要
  /// 如果未设置且 stayTime 也未设置或 0 则会强制为 stayTime设置为 2000
  String name;
  /// 持续时长，默认 2000
  /// 不设置或 0 则不会自动消失
  /// 设置后达到时间会自动消失
  int stayTime;
  /// 动画时长，默认 200
  int duration;
  /// 是否需要遮罩，默认 false
  /// true 则背景不可点击
  /// 遮罩为透明
  bool mask;
  /// 动画开始位置信息，默认 bottom:50 left:30 right:30
  Position startPosition;
  /// 动画结束位置信息
  Position endPosition;
  /// 动画开始透明度，默认 0
  double startOpacity;
  /// 动画结束透明度，默认 1
  double endOpacity;

  DFToastInfo({
    this.showDevInfo = true,
    this.stayTime = 2000,
    this.duration = 200,
    this.mask = false,
    this.startPosition,
    this.endPosition,
    this.startOpacity = 0.0,
    this.endOpacity = 1.0
  }) : name = (++DFToastInfo.toastId).toString();

  DFToastInfo.fromModel(Map<String, dynamic> model) {
    String toastName = Util.getString(model['name']);
    name = toastName ?? (++DFToastInfo.toastId).toString();
    stayTime = toastName == null ? (Util.getInt(model['stayTime']) ?? 2000) : (Util.getInt(model['stayTime']) ?? 0);
    duration = Util.getInt(model['duration']) ?? 200;
    mask = Util.getBoolean(model['mask']);
    if (model['position'] != null) {
      dynamic position = model['position'];
      if (position is List) {
        if (position.length > 0) startPosition = Position.fromModel(position.first);
        if (position.length > 1) endPosition = Position.fromModel(position[1]);
      } else {
        startPosition = Position.fromModel(position);
      }
    }
    if (model['opacity'] != null) {
      dynamic opacity = model['opacity'];
      if (opacity is List) {
        if (opacity.length > 0) startOpacity = Util.getDouble(opacity.first, range: Range(min: 0, max: 1)) ?? 0.0;
        if (opacity.length > 1) endOpacity = Util.getDouble(opacity[1], range: Range(min: 0, max: 1)) ?? 1.0;
      } else {
        startOpacity = endOpacity = Util.getDouble(opacity, range: Range(min: 0, max: 1)) ?? 1.0;
      }
    } else {
      startOpacity = 0.0;
      endOpacity = 1.0;
    }
    startOpacity = Util.getDouble(model['startOpacity'], range: Range(min: 0, max: 1)) ?? 0.0;
    endOpacity = Util.getDouble(model['endOpacity'], range: Range(min: 0, max: 1)) ?? 1.0;
  }
}
