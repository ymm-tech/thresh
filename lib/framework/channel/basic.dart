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

import 'dart:convert';
import 'package:flutter/services.dart';
import 'package:flutter/material.dart';
import 'package:thresh/framework/main.dart';
import 'package:thresh/framework/core/dynamic_app.dart';
import 'package:thresh/devtools/dev_tools.dart';
import 'package:thresh/basic/util.dart';

import '../../basic/util.dart';

typedef void DynamicChannelFn(dynamic params);

DynamicChannel dynamicChannel = DynamicChannel();

List<String> _notPrintChannelMethodHandler = [
  'devtools',
  'clearTimer',
  'popPage',
  'bridgeRequest',
];
List<String> _notPrintChannelMethodInvoke = [
  'bridgeResponse',
  'fireTimer',
  'clearTimer',
];
List<String> _simplyPrintChannelMethodHandler = [
  'pushPage',
  'replacePage',
  'updateWidget',
  'showToast',
];
List<String> _shouldResetContextIdChannelMethodHandler = [
  'mediaQuery',
  'pushPage',
];

class DynamicChannel {
  static DynamicChannel _instance;

  MethodChannel _channel;
  Map<String, DynamicChannelFn> _channelFuncs = {};

  static DynamicChannel getInstance() {
    if (_instance == null) {
      _instance = DynamicChannel._();
      _instance.setupChannel();
    }
    return _instance;
  }

  factory DynamicChannel() => DynamicChannel.getInstance();
  DynamicChannel._();

  static register(Map<String, DynamicChannelFn> channelFuncs) {
    DynamicChannel channel = DynamicChannel();
    channel.injectMethods(channelFuncs);
  }

  void injectMethods(Map<String, DynamicChannelFn> channelFuncs) {
    for (String key in channelFuncs.keys) {
      this._channelFuncs[key] = channelFuncs[key];
    }
  }

  void setupChannel() {
    _channel = MethodChannel('thresh');
    _channel.setMethodCallHandler((MethodCall call) async {
      if (dynamicApp == null) return;

      final String jsContextId = call.arguments['contextId'];
      if (jsContextId != null && dynamicApp.jsContextId != jsContextId) return;

      if (call.method == 'methodChannel_js_call_flutter') {
        final String method = call.arguments['method'];
        final dynamic params = call.arguments['params'];

        if (dynamicApp.debugMode) {
          if (!_notPrintChannelMethodHandler.contains(method)) {
            devtools.insert(
              InfoType.channel,
              DevInfo(
                title: 'Method Channel Handler\nMethod: $method',
                content: _simplyPrintChannelMethodHandler.contains(method)
                    ? null
                    : 'Params: $params',
              ),
            );
          }
        }
        Function func = _channelFuncs[method];
        func?.call(params);
      }
    });
  }

  Future<dynamic> call({
    ChannelMethod channelMethod,
    Map<String, dynamic> params,
  }) async {
    if (dynamicApp == null) return null;
    String callType = 'methodChannel_flutter_call_js';
    bool needEncode = true;
    if (channelMethod.callType == CallType.callNative) {
      callType = 'methodChannel_flutter_call_native';
      needEncode = false;
    }
    if (!_notPrintChannelMethodInvoke.contains(channelMethod.method)) {
      devtools.insert(
        InfoType.channel,
        DevInfo(
          title: Util.formatMutipulLineText(
              ['Method Channel Invoke', 'Method: ${channelMethod.method}']),
          content: Util.formatMutipulLineText(
              ['Method: ${channelMethod.method}', 'Params: $params']),
        ),
      );
    }
    // 由于 channel 传输数据偶现丢失的情况，因此在 flutterCallJs 时对数据进行序列化
    return _channel.invokeMethod(callType, {
      'contextId': dynamicApp.jsContextId,
      'method': channelMethod.method,
      'params': needEncode ? jsonEncode(params) : params,
    });
  }

  Future<dynamic> callNative({
    @required String module, // 模块名
    String business, // 业务名
    @required String method,
    Map<String, dynamic> params,
  }) async {
    if (dynamicApp == null) return null;
    Map<String, dynamic> bridgeParams = {
      'module': module,
      'method': method,
      'params': params ?? {}
    };
    if (business != null) bridgeParams['business'] = business;
    return _channel.invokeMethod('methodChannel_flutter_call_native', {
      'contextId': dynamicApp.jsContextId,
      'method': ChannelMethod.callNative.method,
      'params': bridgeParams,
    });
  }
}

class ChannelMethod {
  /// 查询设备信息
  static const ChannelMethod mediaQuery =
      ChannelMethod('mediaQuery', CallType.callJs);

  /// flutte 准备完成
  static const ChannelMethod ready = ChannelMethod('ready', CallType.callJs);

  /// flutter 通知 js 显示某个页面
  static const ChannelMethod setupPage =
      ChannelMethod('setupPage', CallType.callJs);

  /// 通知 js 需要推出页面
  static const ChannelMethod needPopPage =
      ChannelMethod('needPopPage', CallType.callJs);

  /// 通知 js 当前页面已推出
  static const ChannelMethod hasPopPage =
      ChannelMethod('hasPopPage', CallType.callJs);

  /// 触发 js 事件
  static const ChannelMethod triggerEvent =
      ChannelMethod('triggerEvent', CallType.callJs);

  /// 触发生命周期
  static const ChannelMethod lifeCycle =
      ChannelMethod('lifeCycle', CallType.callJs);

  /// 触发 js timer
  static const ChannelMethod fireTimer =
      ChannelMethod('fireTimer', CallType.callJs);

  /// 清除 js timer
  static const ChannelMethod clearTimer =
      ChannelMethod('clearTimer', CallType.callJs);

  /// 返回网络请求数据
  static const ChannelMethod bridgeResponse =
      ChannelMethod('bridgeResponse', CallType.callJs);

  /// 初始页面加载完毕
  static const ChannelMethod pageDidLoad =
      ChannelMethod('pageDidLoad', CallType.callJs);

  /// 在控制台打印
  static const ChannelMethod print =
      ChannelMethod('print', CallType.callNative);

  /// 重载 bundle.js
  static const ChannelMethod reload =
      ChannelMethod('reload', CallType.callNative);

  /// 获取 bundle 目录
  static const ChannelMethod getBundleDir =
      ChannelMethod('getBundleDir', CallType.callNative);

  /// 调用 native 方法
  static const ChannelMethod callNative =
      ChannelMethod('callNative', CallType.callNative);

  final CallType callType;
  final String method;
  const ChannelMethod(this.method, this.callType);
}

enum CallType {
  callJs,
  callNative,
}
