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
import 'package:thresh/framework/widget/data/widget_toast.dart';
import 'package:thresh/devtools/dev_panel.dart';
import 'package:thresh/devtools/panel_content.dart';

_Devtools devtools = _Devtools();

class _Devtools {
  int lastPanelIndex = 0;
  bool panelIsShow = false;
  BuildContext panelContext;
  DevPanelState panelState;
  List<InfoType> panels;
  Map<InfoType, PanelHolder> _panelHolders = {};

  showDevtools() {
    if (panelIsShow) {
      Navigator.maybePop(panelContext);
      return;
    }
    showGeneralDialog(
      context: dynamicApp.context,
      barrierDismissible: false,
      transitionDuration: const Duration(milliseconds: 100),
      pageBuilder: (BuildContext context, Animation<double> animation,
          Animation<double> secondaryAnimation) {
        panelIsShow = true;
        panelContext = context;
        return Material(
          color: Colors.transparent,
          child: DevPanel(),
        );
      },
    );
  }

  void reloadThresh({BuildContext reloadContext}) async {
    BuildContext currentContext = dynamicApp.context;
    DFToastManager.removeAll();
    dynamicApp.reset();
    dynamicApp.reloadJS();
    devtools.clear();
    reloadContext == null
        ? DynamicAppRoot.restart(currentContext)
        : Navigator.of(reloadContext).pushAndRemoveUntil(
            MaterialPageRoute(
              builder: (BuildContext context) => DynamicAppRoot(),
            ),
            (route) => route == null,
          );
  }

  registePanel(List<InfoType> showPanels) {
    panels = showPanels;
    panels.map((InfoType panel) {
      if (_panelHolders[panel] == null) {
        _panelHolders[panel] = PanelHolder();
      }
    }).toList();
  }

  List<DevInfo> updatePanel(InfoType type, PanelContentState state) {
    _panelHolders[type].state = state;
    return _panelHolders[type].infoStack;
  }

  clear({bool current = false}) {
    if (current) {
      InfoType type = panels[lastPanelIndex];
      _panelHolders[type].infoStack = [];
      _panelHolders[type].state?.clear();
    } else {
      for (InfoType type in _panelHolders.keys) {
        _panelHolders[type].infoStack = [];
        _panelHolders[type].state?.clear();
      }
    }
  }

  insert(InfoType type, DevInfo info) {
    if (dynamicApp == null || !dynamicApp.debugMode) return;
    // if (info.title != null) print('[[ devtools print ]]: ${info.title}');
    // if (info.content != null) print('[[ devtools print ]]: ${info.content}');
    if (panels == null || !panels.contains(type)) return;
    PanelHolder panelHolder = _panelHolders[type];
    if (panelHolder == null) return;
    _panelHolders[type].infoStack.insert(0, info);
    _panelHolders[type].state?.insert(info);

    if (InfoType.isError(type)) {
      for (int i = 0; i < panels.length; i++) {
        if (InfoType.isError(panels[i])) {
          lastPanelIndex = i;
          if (!panelIsShow) {
            panelIsShow = true;
            Timer(Duration(milliseconds: 200), () {
              showDevtools();
            });
          } else {
            panelState?.controller?.index = lastPanelIndex;
          }
        }
      }
    }
  }

  debug(String methodName, String fileName, String debugType,
      [String otherInfos]) {
    insert(
      InfoType.debug,
      DevInfo(
        title: Util.formatMutipulLineText([
          'Method: $methodName',
          'File: $fileName',
          'Type: $debugType',
        ]),
        content: otherInfos,
      ),
    );
  }
}

class DevInfo {
  final String title;
  final String content;

  DevInfo({this.title, this.content});

  @override
  String toString() {
    return '{ title: $title, content: $content }';
  }
}

class InfoType {
  static InfoType log = const InfoType('Log');
  static InfoType warn = const InfoType('Warn');
  static InfoType error = const InfoType('Error');
  static InfoType network = const InfoType('Network');
  static InfoType bridge = const InfoType('Bridge');
  static InfoType render = const InfoType('Render');
  static InfoType channel = const InfoType('Channel');
  static InfoType event = const InfoType('Event');
  static InfoType debug = const InfoType('Debug');

  const InfoType(this.type);

  final String type;

  static bool isError(InfoType type) {
    return type.type == 'Error';
  }

  static InfoType getType(String type) {
    switch (type) {
      case 'event':
        return InfoType.event;
      case 'log':
        return InfoType.log;
      case 'warn':
        return InfoType.warn;
      case 'error':
        return InfoType.error;
      case 'network':
        return InfoType.network;
      case 'bridge':
        return InfoType.bridge;
      case 'render':
        return InfoType.render;
      case 'channel':
        return InfoType.channel;
      default:
        return null;
    }
  }
}

class PanelHolder {
  PanelContentState state;
  List<DevInfo> infoStack = [];
}
