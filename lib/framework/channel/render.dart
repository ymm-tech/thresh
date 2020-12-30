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
import 'package:flutter/material.dart';
import 'package:thresh/framework/core/dynamic_app.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/channel/basic.dart';
import 'package:thresh/framework/widget/data/widget_toast.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/devtools/dev_tools.dart';

/// 注册渲染相关 channel 方法
void registerRenderChannelMethods () {
  DynamicChannel.register({
    // 获取设备相关信息
    'mediaQuery': (params) {
      String jsEnv = params['jsEnv'] ?? 'production';
      String jsVersion = params['jsVersion'];
      dynamicApp
        ..jsEnv = jsEnv
        ..jsVersion = jsVersion
        ..sendMediaQuery()
        ..start();
      devtools.debug(
        'Thresh App Init',
        'render.dart',
        'info',
        'JsEnv: $jsEnv\nJsVersion: $jsVersion\nFlutterVersion: ${dynamicApp.flutterVersion}'
      );
    },
    'pageNotFound': (params) {
      String allPath = params['allPath'] ?? '';
      String prevPath = params['prevPath'] ?? '';
      String nextPath = params['nextPath'] ?? '';
      if (dynamicApp?.notFoundPage != null) {
        if (dynamicApp.hasSetup) {
          Navigator.push(dynamicApp?.context, MaterialPageRoute(
            builder: (BuildContext context) {
              return dynamicApp?.notFoundPage(context, {
                'allPath': allPath,
                'prevPath': prevPath,
                'nextPath': nextPath,
              });
            },
          ));
        } else {
          Navigator.pushReplacement(dynamicApp?.context, MaterialPageRoute(
            builder: (BuildContext context) {
              return dynamicApp?.notFoundPage(context, {
                'allPath': allPath,
                'prevPath': prevPath,
                'nextPath': nextPath,
              });
            },
          ));
        }
      }
    },
    // 建立page
    'pushPage': (params) {
      String pageName = Util.getString(params['pageName']);
      bool isModal = Util.getBoolean(params['isModal']);
      bool popup = Util.getBoolean(params['popup']);
      Map<String, dynamic> pageData = jsonDecode(params['widgetRenderData']);
      devtools.insert(InfoType.event, DevInfo(
        title: !isModal ? 'Push Page' : 'Show Modal',
        content: !isModal ? 'Page Name: $pageName' : 'Modal Name: $pageName'
      ));
      dynamicApp?.pushPage(
        pageName: pageName,
        pageData: pageData,
        isModal: isModal,
        popup: popup
      );
    },
    // 建立page
    'replacePage': (params) {
      String pageName = params['pageName'];
      Map<String, dynamic> pageData = jsonDecode(params['widgetRenderData']);
      devtools.insert(InfoType.event, DevInfo(
        title: 'Replace Modal',
        content: '''
Page Name: $pageName
Replaced Page Name: ${dynamicApp?.nameStack?.last}'''
      ));
      dynamicApp?.replacePage(
        pageName: pageName,
        pageData: pageData,
      );
    },
    // 推出页面
    'popPage': (params) {
      if (Navigator.canPop(dynamicApp?.context)) {
        devtools.insert(InfoType.event, DevInfo(
          title: dynamicApp?.modalCount == 0 ? 'Hide Page' : 'Hide Modal',
          content: '${dynamicApp?.modalCount == 0 ? 'PageName' : 'ModalName'}: ${dynamicApp?.nameStack?.last}'
        ));
        if (dynamicApp != null) {
          if (dynamicApp.modalCount > 0) dynamicApp.modalCount--;
          Navigator.pop(dynamicApp.context);
        }
      }
    },
    'showToast': (params) {
      Map<String, dynamic> toastInfo = params['toastInfo'] != null ? jsonDecode(params['toastInfo']) : null;
      Map<String, dynamic> toastRenderData = jsonDecode(params['toastRenderData']);
      DynamicModel toastModel = DynamicModel.create(toastRenderData);
      DFToastInfo info = toastInfo != null ? DFToastInfo.fromModel(toastInfo) : DFToastInfo();
      devtools.insert(InfoType.event, DevInfo(
        title: 'Show Toast',
        content: '''
Toast Name: ${info.name}
Auto Dismiss: ${info.stayTime > 0}
Stay Time: ${info.stayTime}'''
      ));
      DFToastManager.show(
        toastInfo: info,
        toastBody: toastModel.buildDynamicWidget(),
      );
    },
    'hideToast': (params) {
      String toastName = params['toastName'];
      DFToastManager.hide(toastName);
    },
    // 更新widget
    'updateWidget': (params) {
      String pageName = params['pageName'];
      String needUpdateWidgetId = params['needUpdateWidgetId'];
      String invokeDidUpdateWidgetId = params['invokeDidUpdateWidgetId'];
      Map<String, dynamic> updateData = jsonDecode(params['widgetUpdateData']);
      devtools.insert(InfoType.event, DevInfo(
        title: 'Update Widget',
        content: '''
Widget Id: $invokeDidUpdateWidgetId
Page/Modal Name: $pageName
Update Data: $updateData'''
      ));
      dynamicApp?.updateWidget(
        pageName: pageName,
        needUpdateWidgetId: needUpdateWidgetId,
        invokeDidUpdateWidgetId: invokeDidUpdateWidgetId,
        updateData: updateData
      );
    },
    // 停止持久渲染
    'stopAlwaysRender': (params) {
      devtools.insert(InfoType.event, DevInfo(title: 'Dynamic App Stop Always Render'));
      dynamicApp?.stopAlwaysRender();
    },
    // 实例销毁
    'onDestroyed': (params) {
      devtools.insert(InfoType.event, DevInfo(title: 'Dynamic App Destroyed'));
      dynamicApp?.destroy();
    },
  });
}
