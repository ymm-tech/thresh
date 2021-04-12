import 'dart:async';
import 'package:flutter/services.dart';
import 'package:flutter/material.dart';
import 'package:thresh/thresh.dart';
import 'package:thresh/devtools/dev_tools.dart';

import 'page/not_found_page.dart';
import 'page/white_screen_page.dart';

/// 本地调试入口
void main() async {
  initThreshChannel();
  runApp(initThresh(true));
}

/// 宿主包入口
void initPlugin(dynamic url) async {
  await SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
  Map params = _parseRoute(url);
  runZoned<void>(() {
    initThreshChannel();
    Widget app = initThresh(false, params);
    runApp(app);
  }, onError: (error, trace) {
    print("exception:" + error.toString());
    print("stackTrace:" + error.trace ?? error.stackTrace?.toString() ?? '');
    print("bizName:" +
        '[bizName] - ${params['biz'] ?? 'unknown'}; [pageName] - ${params['page'] ?? 'unknown'}; [referPageName] - ${params['referPageName'] ?? 'unknown'}');
  });
}

/// thresh app 初始化入口
Widget initThresh(bool local, [Map<String, dynamic> params]) {
  RouteInfo route;
  int whiteScreenOvertime = 3000;
  String routePageName;
  String routeReferPageName;
  String bizName = 'unknown';
  String jsBundlePath;
  String jsContextId;
  bool debugMode = local;
  if (params != null) {
    // buildType = 2: release mode
    debugMode = params['buildType']?.toString() != '2';
    routePageName = params['page'];
    bizName = params['biz'];
    if (params['jsBundlePath'] != null)
      jsBundlePath = Uri.decodeComponent(params['jsBundlePath']);
    if (params['contextId'] != null) jsContextId = params['contextId'];
    if (params['whiteScreenOvertime'] != null) {
      try {
        whiteScreenOvertime = int.parse(params['whiteScreenOvertime']);
      } catch (e) {}
    }
    // if (routePageName == null) {
    //   return NotFoundPage(url: _formatQueryToUrl(params));
    // }
    routeReferPageName = params['referPageName'];

    route = RouteInfo(routePageName, params: params);
  }
  return initThreshApp(
      runApp: false,
      debugMode: debugMode,
      jsBundlePath: jsBundlePath,
      jsContextId: jsContextId,
      defaultRoute: route,
      showWhiteScreenWhenWaitingForMillionSeconds: whiteScreenOvertime,
      notFoundPage: (BuildContext context, Map<String, String> pathInfo) {
        return NotFoundPage(
          allPath: pathInfo['allPath'],
          nextPath: pathInfo['nextPath'],
          prevPath: pathInfo['prevPath'],
          url: _formatQueryToUrl(params),
        );
      },
      onWhiteScreen: (dynamic reason) => WhiteScreenPage(),
      placeholderPageBuilder: (BuildContext context) {
        return _placeholderPageBuilder(context, routePageName);
      },
      errorHandler: (ThreshError error) {
        print(error);
        devtools.insert(
          InfoType.log,
          DevInfo(title: 'errorReport', content: 'error: ${error?.toString()}'),
        );
        if (local) return;

        String exception = error.toString();
        String stackTrace = error.trace ?? error.stackTrace?.toString() ?? '';
        String pageName = error.pageName ??
            dynamicApp?.pageName ??
            routePageName ??
            'unknown';
        String referPageName = error.referPageName ??
            dynamicApp?.referPageName ??
            routeReferPageName ??
            'unknown';

        print("exception :" + exception);
        print("stackTrace :" + stackTrace);
        print("pageName :" + pageName);
        print("referPageName :" + referPageName);
      });
}

/// 占位页面构造器
Widget _placeholderPageBuilder(BuildContext context, [String pageName = '']) {
  return Scaffold(
      backgroundColor: Colors.white,
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(44),
        child: getAppBar(context, pageName),
      ));
}

/// 自定义 app bar
AppBar getAppBar(BuildContext context, String pageName) {
  bool brightness = false;
  Color backgroundColor = Colors.white;
  Color iconColor = Colors.black;
  if (pageName == 'orderDetail') {
    iconColor = Colors.white;
    backgroundColor = Color(0xFF363B4D);
    brightness = true;
  }
  Widget leading = GestureDetector(
    child: Container(
      width: 44,
      height: 44,
      padding: EdgeInsets.only(left: 10),
      alignment: Alignment.centerLeft,
      child: Icon(Icons.arrow_back_ios, color: iconColor),
    ),
    onTap: () {
      _popPage(context);
    },
  );
  return AppBar(
      leading: leading,
      elevation: 0,
      backgroundColor: backgroundColor,
      brightness: brightness ? Brightness.dark : Brightness.light);
}

/// 退出当前页面
void _popPage(BuildContext context) {
  if (Navigator.canPop(context)) {
    Navigator.pop(context);
  } else {
    dynamicChannel.callNative(module: 'base', method: 'closeWindow');
  }
}

/// 解析路由
/// 格式："thresh/thresh-page?page=orderDetail&biz=trade&orderId=12392241252577280"
Map<String, dynamic> _parseRoute(dynamic url) {
  List<String> urls = url.split('?');
  String query = '';
  if (urls.length == 2) {
    query = urls[1];
  }
  final Map<String, dynamic> params = Map<String, dynamic>();
  var search = RegExp('([^&=]+)=?([^&]*)');
  if (query.startsWith('?')) query = query.substring(1);
  for (Match match in search.allMatches(query)) {
    String key = match.group(1);
    String value = match.group(2);
    params[key] = value.trim();
  }
  return params;
}

/// 格式化参数为 url
String _formatQueryToUrl(Map<String, dynamic> params) {
  if (params == null) return 'unknown url';
  List<String> queryList = [];
  String pageName = params['page'] ?? 'unknown';
  for (String key in params.keys) {
    if (key != 'page') queryList.add('$key=${params[key]}');
  }
  return pageName + queryList.join('&');
}
