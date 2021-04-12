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
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/devtools/dev_buttons.dart';
import 'package:thresh/framework/channel/basic.dart';
import 'package:thresh/framework/channel/render.dart';
import 'package:thresh/framework/channel/controller.dart';
import 'package:thresh/framework/channel/util.dart';
import 'package:thresh/framework/channel/bridge.dart';
import 'package:thresh/framework/channel/dev.dart';
import 'package:thresh/framework/core/dynamic_page.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/widget/layout/widget_bottom_sheet.dart';
import 'package:thresh/framework/widget/data/widget_toast.dart';
import 'package:thresh/basic/bus.dart';
import 'package:thresh/basic/global_def.dart';
import 'package:thresh/devtools/dev_tools.dart';

const String _appStartEventName = 'callAppStart';

_DynamicApp dynamicApp = _DynamicApp();

/// 全局统筹dynamic app的所有通信与事件
/// 分发建立与更新事件给build manager
/// 处理页面route/state/context
class _DynamicApp {
  static _DynamicApp _instance;

  /// 是否为 debug 模式
  bool debugMode = false;

  /// js 环境
  String jsEnv = 'production';

  /// js 版本
  String jsVersion = '';

  /// df 版本
  String flutterVersion = '1.3.0';

  /// 需要显示的 flutter app
  Widget mainApp;

  /// app name
  String appName;

  /// js context id
  String jsContextId;

  /// js bundle path
  String jsBundlePath;

  /// 路由信息
  RouteInfo defaultRoute;

  /// 页面不存在的处理方法
  NotFoundPageBuilder notFoundPage;

  /// 异常处理方法
  ErrorHandler errorHandler;

  /// 白屏处理方法
  OnWhiteScreen onWhiteScreen;

  /// 在显示 df page 之前显示的占位页面构造器
  PlaceholderBuilder placeholderPageBuilder;

  /// app是否已被创建
  bool hasSetup = false;

  /// app是否能够刷新
  bool canReload = false;

  /// 初始页面数据是否已经传输到 flutter
  bool firstPageDidSend = false;

  /// 初始页面加载是否超时
  bool firstPageOverTime = false;

  /// appBar高度
  double appBarHeight = kToolbarHeight;

  /// 被创建的page/modal model缓存
  Map<String, DynamicModel> modelCache = {};

  /// pageName/modalName 栈
  StackList<String> nameStack = StackList();

  /// page/modal state 栈
  StackList<DynamicPageState> stateStack = StackList();

  /// context栈
  StackList<BuildContext> contextStack = StackList();

  /// 被构建的 Thresh root context
  BuildContext rootContext;

  /// 用来请求 mediaQueryData 的 context
  BuildContext mediaQueryContext;

  /// app 被销毁时需要停止渲染的 controllers
  List<DFStopAlwaysRenderController> stopAlwaysRenderControllers = [];

  /// 被构建的 Thresh App
  Widget _rootApp;

  /// flutter页面 context
  BuildContext _flutterPageContext;

  /// df app 实例化方法
  static _DynamicApp getInstance() {
    if (_instance == null) {
      _instance = _DynamicApp._();
      _instance.setupChannelFuncs();
    }
    return _instance;
  }

  factory _DynamicApp() => _DynamicApp.getInstance();
  _DynamicApp._();

  /// 判断当前 js 的执行环境是否为生产
  bool get jsEnvIsProd => jsEnv == 'production';

  /// 获取当前页面名称
  String get pageName {
    int i = nameStack.length - 1;
    if (i >= 0) {
      while (i >= 0) {
        String name = nameStack[i];
        List<String> pn = name.split('#');
        pn.removeLast();
        if (pn.first != 'modal') return pn.join('#');
        i--;
      }
    }
    return null;
  }

  /// 获取 referPageName
  /// 可能为空
  String get referPageName {
    int i = nameStack.length - 1;
    bool hasFindCurrentPageName = false;
    if (i >= 1) {
      while (i >= 0) {
        String name = nameStack[i];
        List<String> pn = name.split('#');
        pn.removeLast();
        if (pn.first != 'modal') {
          if (hasFindCurrentPageName) {
            return pn.join('#');
          } else {
            hasFindCurrentPageName = true;
          }
        }
        i--;
      }
    }
    return null;
  }

  /// 获取当前显示的页面或 modal 的名称
  String get currentPageOrModalName => nameStack.last;
  set currentPageOrModalName(String pageName) {
    if (nameStack.has(pageName)) return;
    nameStack.push(pageName);
  }

  /// 获取当前显示页面或 modal 的 context
  BuildContext get context => contextStack.last ?? _flutterPageContext;

  /// 更新当前显示页面或 modal 的 context
  updateContext(BuildContext context, {isFlutterPageContext: false}) {
    if (isFlutterPageContext) {
      _flutterPageContext = context;
    } else {
      contextStack.push(context);
    }
  }

  /// 停止持久渲染的组件
  void stopAlwaysRender() {
    stopAlwaysRenderControllers.forEach((controller) {
      controller?.stopRender();
      controller?.dispose();
    });
    stopAlwaysRenderControllers.clear();
  }

  ///  df app 实例被销毁
  void destroy() {
    stopAlwaysRender();
    if (!debugMode) {
      DynamicAppRoot.destroy(context);
      dynamicApp = null;
      dynamicChannel = null;
    }
  }

  /// 开始显示 df app 页面
  Widget start({bool isAppInit = false}) {
    if (_rootApp == null) _rootApp = DynamicAppRoot();
    if (isAppInit) runApp(_rootApp);

    bus.register(() {
      bus.remove(_appStartEventName);
      if (mainApp == null) {
        ready();
      } else {
        flutterSetup();
      }
    }, _appStartEventName);
    if (!stateStack.isEmpty) bus.fire(_appStartEventName);
    return _rootApp;
  }

  /// 重置 df app
  void reset() {
    _flutterPageContext = null;
    modelCache = {};
    hasSetup = false;
    firstPageDidSend = false;
    firstPageOverTime = false;
    nameStack = StackList();
    stateStack = StackList();
    contextStack = StackList();
  }

  /// 标记 flutter 端 app 是否已经被建立
  void flutterSetup() {
    if (!hasSetup) hasSetup = true;
  }

  /// 为 method channel 通知建立对应的回调方法与处理逻辑
  setupChannelFuncs() {
    // 渲染
    registerRenderChannelMethods();
    // 控制器
    registerControllerChannelMethods();
    // 工具方法
    registerUtilChannelMethods();
    // bridge
    registerBridgeChannelMethods();
    // 调试工具
    registerDevtoolsChannelMethods();
  }

  /// method channel 通知处理逻辑
  /// 显示 js 页面
  void pushPage({
    @required String pageName,
    @required Map<String, dynamic> pageData,
  }) {
    if (firstPageOverTime) return;
    if (!firstPageDidSend) firstPageDidSend = true;
    if (hasSetup) {
      Navigator.push(context, DynamicPageRoute(
        builder: (context) {
          return DynamicPage(
            pageData: pageData,
            pageName: pageName,
          );
        },
      ));
    } else {
      if (stateStack.first == null) {
        devtools.debug(
          'pushPage',
          'dynamic_app.dart',
          'return',
          Util.formatMutipulLineText([
            'stateStack:',
            '[length] - ${stateStack.length}',
            '[first] - ${stateStack.first}',
          ]),
        );
        return;
      }
      flutterSetup();
      stateStack.first.setModelData(pageData, pageName);
    }
  }

  /// method channel 通知处理逻辑
  /// 显示 js modal
  void showModal({
    @required String modalName,
    @required Map<String, dynamic> modalData,
    bool popup = false,
  }) {
    !popup
        ? showGeneralDialog(
            context: context,
            barrierDismissible: false,
            transitionDuration: const Duration(milliseconds: 150),
            pageBuilder: (BuildContext buildContext,
                Animation<double> animation,
                Animation<double> secondaryAnimation) {
              return Material(
                color: Colors.transparent,
                child: DynamicPage(
                  pageData: modalData,
                  pageName: modalName,
                  isModal: true,
                ),
              );
            },
          )
        : showDynamicModalBottomSheet(
            context: context,
            builder: (BuildContext buildContext) {
              return Material(
                color: Colors.transparent,
                child: DynamicPage(
                  pageData: modalData,
                  pageName: modalName,
                  isModal: true,
                ),
              );
            },
          );
  }

  /// method channel通知处理逻辑
  /// 更新组件
  /// 通过需要被更新的 widgetId 和 updateData 更新 widgetModel 与 widgetTree
  void updateWidget({
    @required String pageName,
    @required String needUpdateWidgetId,
    @required String invokeDidUpdateWidgetId,
    @required Map<String, dynamic> updateData,
  }) {
    if (updateData == null) return;
    DynamicModel pageModel = modelCache[pageName];
    if (pageModel == null) {
      throw Exception('page: $pageName is not exist');
    }
    DynamicModel newModel = updateData != null
        ? DynamicModel.create(updateData, context: context)
        : null;
    if (newModel == null) return;
    newModel.buildDynamicWidget();
    DynamicModel.findTargetModels(
      aimModel: pageModel,
      aimWidgetId: needUpdateWidgetId,
      findCallback: (DynamicModel model) {
        model.merge(newModel);
        return model;
      },
    );
    triggerLifeCycle(
      LifeCycleStep.widgetDidUpdate,
      pageName,
      invokeDidUpdateWidgetId,
    );
  }

  /// 调用 method channel 方法
  /// 将设备信息发送给 js
  void sendMediaQuery() {
    MediaQueryData data = MediaQuery.of(mediaQueryContext);
    call(method: ChannelMethod.mediaQuery, params: {
      'width': data.size.width,
      'height': data.size.height,
      'statusBarHeight': data.padding.top,
      'bottomBarHeight': data.padding.bottom,
      'appBarHeight': dynamicApp.appBarHeight,
      'devicePixelRatio': data.devicePixelRatio,
      'debugMode': debugMode,
      'platform': Platform.isIOS ? 'iOS' : 'Android',
      'flutterVersion': flutterVersion,
      // 是否需要通过 js 获取 bundlePath
      // 存在 jsBundlePath 时则不需要通过 js 获取
      'needJsBundlePath': jsBundlePath == null,
      'packageTag': '0401 12:00',
    });
  }

  /// 调用 method channel 方法
  /// df app 建立时通知 js
  /// 不可在框架外调用
  void ready() {
    Map<String, dynamic> params = defaultRoute?.getInfo() ?? {};
    params['jsContextId'] = jsContextId;

    if (debugMode) {
      List<String> devContent = [];
      devContent.add('Page Name: ${params['pageName'] ?? 'None'}');
      if (params['params'] == null)
        devContent.add('Page Params: None');
      else {
        Map<String, dynamic> subParams = params['params'];
        for (String key in subParams.keys) {
          devContent.add('Params: [ $key = ${subParams[key]} ]');
        }
      }
      devtools.insert(
        InfoType.event,
        DevInfo(
          title: 'App Ready',
          content: Util.formatMutipulLineText(devContent),
        ),
      );
    }

    call(
      method: ChannelMethod.ready,
      params: params,
    );
  }

  /// 调用method channel方法
  /// 在已有flutter页面中主动显示js页面时通知js
  void setupPage({
    String pageName,
    Map<String, dynamic> params,
    @required BuildContext context,
  }) {
    updateContext(context, isFlutterPageContext: true);
    call(
      method: ChannelMethod.setupPage,
      params: pageName != null
          ? {'pageName': pageName, 'params': params}
          : defaultRoute?.getInfo(),
    );
  }

  /// 调用method channel方法
  /// 退出当前页面
  void popPage({bool isRootPage: false}) {
    if (currentPageOrModalName == null) {
      devtools.debug(
        'popPage',
        'dynamic_app.dart',
        'return',
        'currentPageOrModalName is null: ${currentPageOrModalName == null}',
      );
      return;
    }
    // 退出页面时清空 controllers & modelTree
    DynamicModel.controllers.remove(currentPageOrModalName);
    modelCache.remove(currentPageOrModalName);
    call(
      method: ChannelMethod.hasPopPage,
      params: {'pageName': currentPageOrModalName},
    );
    nameStack.pop();
    stateStack.pop();
    if (!isRootPage) {
      contextStack.pop();
    }
  }

  /// 调用method channel方法
  /// 通知 js 执行 popPage
  void needPopPage() {
    call(
      method: ChannelMethod.needPopPage,
      params: {'pageName': currentPageOrModalName},
    );
  }

  /// 调用method channel 方法
  /// 触发生命周期
  void triggerLifeCycle(LifeCycleStep lifeStep, String pageName,
      [String widgetId]) {
    call(method: ChannelMethod.lifeCycle, params: {
      'lifeStep': lifeStep.value,
      'pageName': pageName,
      'widgetId': widgetId
    });
  }

  /// 调用method channel方法
  /// 事件触发回调
  void eventHandler({
    @required String pageName,
    @required String widgetId,
    @required String eventId,
    @required String eventType,
    dynamic args,
  }) {
    if (pageName == null || widgetId == null || eventId == null) return;
    call(method: ChannelMethod.triggerEvent, params: {
      'pageName': pageName,
      'widgetId': widgetId,
      'eventId': eventId,
      'eventType': eventType,
      'args': args
    });
  }

  /// 刷新 app
  void reload([BuildContext reloadContext]) {
    if (!canReload) return;
    devtools.reloadThresh(reloadContext: reloadContext);
  }

  /// 调用method channel方法
  /// 重载js
  void reloadJS() {
    dynamicChannel?.call(channelMethod: ChannelMethod.reload);
  }

  /// 调用method channel方法
  void call({ChannelMethod method, Map<String, dynamic> params}) {
    dynamicChannel?.call(channelMethod: method, params: params);
  }
}

/// App根节点
class DynamicAppRoot extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _DynamicAppRootState();
  }

  static restart(BuildContext context) {
    final _DynamicAppRootState state = context?.findAncestorStateOfType();
    state?.rebuild();
  }

  static destroy(BuildContext context) {
    final _DynamicAppRootState state = context?.findAncestorStateOfType();
    state?.dispose();
  }
}

class _DynamicAppRootState extends State<DynamicAppRoot> {
  Key key = UniqueKey();

  @override
  void initState() {
    super.initState();
    dynamicApp?.rootContext = context;
  }

  Widget get mainApp => MaterialApp(
        color: Colors.white,
        title: dynamicApp?.appName ?? '',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        debugShowCheckedModeBanner: false,
        home: DynamicMainApp(),
      );

  @override
  Widget build(BuildContext context) {
    return Material(
      key: key,
      child: WillPopScope(
        child: Stack(
          textDirection: TextDirection.ltr,
          children: <Widget>[
            mainApp,
            DFToastWrap(),
            dynamicApp?.debugMode == true
              ? DevButtons()
              : Container(),
          ],
        ),
        onWillPop: () {
          dynamicApp?.needPopPage();
          return Future.value(false);
        },
      ),
    );
  }

  rebuild() {
    setState(() {
      key = UniqueKey();
    });
  }

  @override
  void dispose() {
    super.dispose();
  }
}

class DynamicMainApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    if (dynamicApp == null) return Container();

    // TODO - DynamicMainApp 改为 StatefulWidget
    // initState 中添加以下回调
    // 防止native弹窗引起rebuild导致消息重复发送
    dynamicApp.mediaQueryContext = context;
    Future.microtask(() {
      dynamicApp.sendMediaQuery();
      if (bus.has(_appStartEventName))
        bus.fire(_appStartEventName);
      else
        dynamicApp.ready();
    });

    return dynamicApp.mainApp ?? DynamicPage();
  }
}

class DynamicPageRoute<T> extends PageRoute<T>
    with MaterialRouteTransitionMixin<T> {
  DynamicPageRoute({
    @required this.builder,
    RouteSettings settings,
    this.maintainState = true,
    bool fullscreenDialog = false,
  })  : assert(builder != null),
        assert(maintainState != null),
        assert(fullscreenDialog != null),
        super(settings: settings, fullscreenDialog: fullscreenDialog);

  final WidgetBuilder builder;

  @override
  Widget buildContent(BuildContext context) => builder(context);

  @override
  final bool maintainState;

  @override
  String get debugLabel => '${super.debugLabel}(${settings.name})';

  // @override
  // bool get opaque => false;
}
