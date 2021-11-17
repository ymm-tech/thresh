import 'dart:io';
import 'dart:typed_data';
import 'dart:ui';

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
import 'package:flutter/rendering.dart';
import 'package:path_provider/path_provider.dart';
import 'package:thresh/devtools/dev_tools.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/widget_basic.dart';

class DFRepaintView extends DFBasicWidget {
  DFRepaintView(
    this.model, {
    this.key,
    @required this.child,
    this.controller,
  }) : super(model, key: key);

  final DynamicModel model;
  final Key key;
  final Widget child;
  final RepaintViewController controller;

  final GlobalKey globalKey = GlobalKey();

  Widget buildMainWidget(BuildContext context) {
    controller.holdKey(globalKey);
    return RepaintBoundary(key: globalKey, child: child);
  }
}

class ProxyDFRepaintView extends ProxyBase {
  static void register() {
    ProxyDFRepaintView instance = ProxyDFRepaintView();
    RegisterWidget().register(
      widgetName: 'RepaintView',
      constructor: instance.constructor,
    );
  }

  DFRepaintView constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> buildProps = model.buildProps;

    RepaintViewController controller;
    if (model.controller != null && model.controller is RepaintViewController) {
      controller = model.controller;
    } else {
      controller = RepaintViewController();
      model.controller = controller;
    }

    return DFRepaintView(model,
        child: buildProps['child'], controller: controller);
  }
}

class RepaintViewController {
  GlobalKey key;

  holdKey(GlobalKey key) {
    this.key = key;
  }

  saveRepaintView(String path, String name) {
    Future.delayed(const Duration(milliseconds: 200), () async {
      BuildContext buildContext = key.currentContext;
      if (null != buildContext) {
        RenderRepaintBoundary boundary = buildContext.findRenderObject();
        //尝试解决一个报错
        // if it needs repaint, we paint it.
        // sleep(Duration(milliseconds: 50));
        var image = await boundary.toImage(pixelRatio: window.devicePixelRatio);
        ByteData byteData = await image.toByteData(format: ImageByteFormat.png);
        //自己存
        Uint8List picBytes = byteData.buffer.asUint8List();
        Directory documentsDirectory = await getApplicationDocumentsDirectory();
        String fullPath = documentsDirectory.path + "/$path" + "/$name";
        Directory dir = Directory(documentsDirectory.path + "/$path");
        
        devtools.insert(InfoType.log, DevInfo(
        title: "title",
        content: fullPath
        ));
        bool exist = await dir.exists();

        devtools.insert(InfoType.log, DevInfo(
        title: "title",
        content: "exist:"+exist.toString()
        ));
        if (!exist) {
          await dir.create();
        }
        File(fullPath).writeAsBytes(picBytes);
        //存相册
        // final result =
        //     await ImageGallerySaver.saveImage(byteData.buffer.asUint8List());
      }
    });
  }
}
