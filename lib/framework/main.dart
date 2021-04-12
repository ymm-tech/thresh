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
import 'package:thresh/basic/util.dart';
import 'package:thresh/framework/core/dynamic_app.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/channel/basic.dart';
import 'package:thresh/framework/widget/layout/widget_app_bar.dart';
import 'package:thresh/basic/global_def.dart';
import 'package:thresh/devtools/dev_tools.dart';

export 'package:thresh/framework/core/dynamic_app.dart';
export 'package:thresh/framework/channel/basic.dart';
export 'package:thresh/basic/global_def.dart';

bool _hasInit = false;
void _callRunApp(Widget app) {
  runApp(app);
}

void initThreshChannel() {
  DynamicChannel.getInstance();
}

/// 初始化DynamicApp
/// [appName] 应用名称
/// [mainApp] 作为Thresh App入口的flutter app，如果不存在则会直接调出Thresh App
/// [defaultRoute] Thresh App的默认路由，会注入到js中
/// [notFoundPage] 404 页面
/// [onWhiteScreen] Thresh 中发生白屏时显示的页面
/// [errorHandler] Thresh 中发生异常时的处理方法
/// [runApp] 是否直接运行app，默认true，如果为false则需要手动调用runApp
/// [showWhiteScreenWhenWaitingForMillionSeconds] 当 Thresh 初始页面等待时间超过该时间时会显示白屏页面，默认 3000ms，设为 null 或 0 时不会主动显示白屏页面，仅在非 debugMode 有效
/// [debugMode] 开发配置，线上环境不要使用
Widget initThreshApp({
  bool runApp = true,
  bool debugMode = false,
  String appName,
  Widget mainApp,
  String jsContextId,
  String jsBundlePath,
  RouteInfo defaultRoute,
  NotFoundPageBuilder notFoundPage,
  OnWhiteScreen onWhiteScreen,
  PlaceholderBuilder placeholderPageBuilder,
  ErrorHandler errorHandler,
  int showWhiteScreenWhenWaitingForMillionSeconds = 3000,
}) {
  Widget rootApp;
  try {
    if (_hasInit) return mainApp;
    _hasInit = true;
    if (!debugMode &&
        mainApp == null &&
        showWhiteScreenWhenWaitingForMillionSeconds != null &&
        showWhiteScreenWhenWaitingForMillionSeconds != 0) {
      _showWhiteScreenIfWaitLongTime(
          showWhiteScreenWhenWaitingForMillionSeconds);
    }
    if (debugMode) {
      devtools.registePanel([
        InfoType.log,
        InfoType.warn,
        InfoType.error,
        InfoType.network,
        InfoType.bridge,
        InfoType.channel,
        InfoType.render,
        InfoType.event,
        InfoType.debug,
      ]);
    }
    if (jsBundlePath != null) Util.bundleDirectory = jsBundlePath;
    dynamicApp
      ..appName = appName
      ..mainApp = mainApp
      ..debugMode = debugMode
      ..jsContextId = jsContextId ?? Util.randomString(withTimestamp: true)
      ..jsBundlePath = jsBundlePath
      ..defaultRoute = defaultRoute
      ..notFoundPage = notFoundPage
      ..errorHandler = errorHandler
      ..onWhiteScreen = onWhiteScreen
      ..placeholderPageBuilder = placeholderPageBuilder
      ..canReload = true;
    rootApp = dynamicApp.start(isAppInit: runApp);
    RegisterProxy.register();
    devtools.debug(
      'initThreshApp',
      'main.dart',
      'info',
    );
  } catch (error, trace) {
    ThreshError threshError =
        ThreshError(error.toString(), trace: trace?.toString() ?? '');
    errorHandler?.call(threshError);
    devtools.insert(
        InfoType.error,
        DevInfo(
            title: threshError.toString(),
            content:
                (threshError.trace ?? threshError.stackTrace)?.toString() ??
                    ''));
    if (rootApp == null) {
      if (onWhiteScreen != null) {
        rootApp = onWhiteScreen(threshError);
      } else {
        rootApp = Scaffold(
          backgroundColor: Colors.white,
          appBar: AppBar(
            title: Text(
              'Error',
              style: TextStyle(color: Colors.white),
            ),
            leading: AppBarBackButton(),
            centerTitle: true,
            backgroundColor: Colors.blue,
          ),
          body: ListView(
            padding: EdgeInsets.all(10),
            children: [
              Text(
                  'Thresh app has an error!\nMore details have print below.\n\n${error.toString()}\n\n${trace?.toString() ?? ''}')
            ],
          ),
        );
      }
      if (runApp)
        _callRunApp(MaterialApp(
          color: Colors.white, // TODO - Colors.transparent,
          home: rootApp,
        ));
    }
  }
  return rootApp;
}

void _showWhiteScreenIfWaitLongTime(int overTime) {
  int t = DateTime.now().millisecondsSinceEpoch;
  Timer(Duration(milliseconds: overTime), () {
    if (dynamicApp != null && dynamicApp.firstPageDidSend) return;
    dynamicApp?.firstPageOverTime = true;
    ThreshError dfe = ThreshError('初始页面建立超时',
        trace:
            'startTime: $t, endTime: ${DateTime.now().millisecondsSinceEpoch}');
    Util.onError(dfe);
    if (dynamicApp?.rootContext == null) return;
    Widget whiteScreen = Util.onWhiteScreen(dfe);
    if (dynamicApp?.stateStack?.last != null) {
      dynamicApp.stateStack.last.setPage(whiteScreen);
    } else {
      Navigator.push(
        dynamicApp.rootContext,
        DynamicPageRoute(
          builder: (context) => whiteScreen,
        ),
      );
    }
  });
}
