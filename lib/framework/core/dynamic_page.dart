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
import 'package:thresh/basic/global_def.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/basic/bus.dart';
import 'package:thresh/framework/core/dynamic_app.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/devtools/dev_tools.dart';

bool _devtoolsNearFooter = true;

/// 每个页面的根widget
/// 便于需要整个页面更新时重建page
class DynamicPage extends StatefulWidget {
  final Map<String, dynamic> modelData;

  DynamicPage([this.modelData]);

  @override
  DynamicPageState createState() => DynamicPageState();
}

class DynamicPageState extends State<DynamicPage> {
  // Key key = UniqueKey();
  Map<String, dynamic> dynamicModelData;
  Widget widgetInstance;
  int stackIndex;
  bool didFirstBuild = false;
  bool devtoolsNearFooter = true;

  @override
  void initState() {
    if (dynamicApp == null) {
      devtools.debug('initState', 'dynamic_page.dart', 'return',
          'dynamicApp is null: ${dynamicApp == null}');
      return;
    }
    super.initState();
    dynamicModelData = widget.modelData;
    // 记录当前页面state在state栈中所处的位置，并向栈中推入state
    stackIndex = dynamicApp.stateStack.length;
    dynamicApp.stateStack.push(this);
    dynamicApp.updateContext(context);
    devtoolsNearFooter = _devtoolsNearFooter;
    bus.fire('callAppStart');
  }

  @override
  void didChangeDependencies() {
    if (dynamicApp == null) {
      devtools.debug('didChangeDependencies', 'dynamic_page.dart', 'return',
          'dynamicApp is null: ${dynamicApp == null}');
      return;
    }
    super.didChangeDependencies();
    if (didFirstBuild) return;
    didFirstBuild = true;
    buildWidget();
  }

  @override
  void didUpdateWidget(DynamicPage oldWidget) {
    if (dynamicApp == null) {
      devtools.debug('didUpdateWidget', 'dynamic_page.dart', 'return',
          'dynamicApp is null: ${dynamicApp == null}');
      return;
    }

    super.didUpdateWidget(oldWidget);
    // 整个page更新时替换旧的state
    dynamicApp.stateStack[stackIndex] = this;
  }

  @override
  void dispose() {
    if (dynamicApp == null) {
      devtools.debug('dispose', 'dynamic_page.dart', 'return',
          'dynamicApp is null: ${dynamicApp == null}');
      return;
    }
    dynamicApp.popPage();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (dynamicApp == null) {
      devtools.debug('build', 'dynamic_page.dart', 'return',
          'dynamicApp is null: ${dynamicApp == null}');
      return Container();
    }
    return Material(
        // key: key,
        color: Colors.transparent,
        child: !dynamicApp.debugMode
            ? widgetInstance ?? buildPlaceholder(context)
            : Stack(
                textDirection: TextDirection.ltr,
                children: <Widget>[
                  widgetInstance ?? buildPlaceholder(context),
                  Positioned(
                      right: 10,
                      bottom: devtoolsNearFooter ? 15 : null,
                      top: devtoolsNearFooter ? null : 40,
                      child: Directionality(
                          textDirection: TextDirection.ltr,
                          child: Row(
                            children: <Widget>[
                              Container(
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(26),
                                  color: Colors.blue,
                                ),
                                child: IconButton(
                                  icon: Icon(
                                    Icons.settings,
                                    size: 24,
                                    color: Colors.white,
                                  ),
                                  padding: EdgeInsets.all(1),
                                  onPressed: () {
                                    devtools.showDevtools();
                                  },
                                ),
                              ),
                              Container(
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(26),
                                  color: Colors.cyan,
                                ),
                                margin: EdgeInsets.only(left: 5),
                                child: IconButton(
                                  icon: Icon(
                                    Icons.refresh,
                                    size: 24,
                                    color: Colors.white,
                                  ),
                                  padding: EdgeInsets.all(1),
                                  onPressed: () {
                                    devtools.reloadThresh();
                                  },
                                ),
                              ),
                              Container(
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(26),
                                  color: Colors.blueGrey,
                                ),
                                margin: EdgeInsets.only(left: 5),
                                child: IconButton(
                                  icon: Icon(
                                    Icons.swap_vert,
                                    size: 24,
                                    color: Colors.white,
                                  ),
                                  padding: EdgeInsets.all(1),
                                  onPressed: () {
                                    setState(() {
                                      devtoolsNearFooter = !devtoolsNearFooter;
                                      _devtoolsNearFooter = devtoolsNearFooter;
                                    });
                                  },
                                ),
                              ),
                            ],
                          )))
                ],
              ));
  }

  Widget buildPlaceholder(BuildContext context) {
    if (dynamicApp?.placeholderPageBuilder != null) {
      return dynamicApp.placeholderPageBuilder(context);
    } else {
      return Scaffold(backgroundColor: Colors.white);
    }
  }

  /// 更新当前页面
  void setModelData(Map<String, dynamic> modelData, [bool isReplace = false]) {
    if (dynamicApp == null) {
      devtools.debug('setModel', 'dynamic_page.dart', 'return',
          'dynamicApp is null: ${dynamicApp == null}');
      return;
    }
    dynamicModelData = modelData;
    buildWidget(isReplace);
  }

  /// 直接设置页面内容
  void setPage(Widget pageContent) {
    setState(() {
      // key = UniqueKey();
      widgetInstance = pageContent;
    });
  }

  void buildWidget([bool isReplace = false]) {
    if (dynamicApp == null || dynamicModelData == null) {
      devtools.debug('buildWidget', 'dynamic_page.dart', 'return',
          'dynamicApp is null: ${dynamicApp == null}\nynamicModelData is null: ${dynamicModelData == null}');
      return;
    }

    DynamicModel dynamicModel;
    Widget whiteScreen;
    try {
      dynamicModel = DynamicModel.create(dynamicModelData, context: context);
    } catch (error, trace) {
      ThreshError dfe = ThreshError(error.toString(), trace: trace.toString());
      Util.onError(dfe);
      whiteScreen = Util.onWhiteScreen(dfe, context);
    }
    if (dynamicModel != null) {
      dynamicModel.buildDynamicWidget();
      String pageName = dynamicModel.pageName;
      !isReplace
          ? dynamicApp.currentPageOrModalName = pageName
          : dynamicApp.nameStack.last = pageName;
      dynamicApp.modelCache[pageName] = dynamicModel;
      setState(() {
        // key = UniqueKey();
        widgetInstance = dynamicModel.dynamicWidget;
      });
    } else {
      setPage(whiteScreen);
    }
  }
}
