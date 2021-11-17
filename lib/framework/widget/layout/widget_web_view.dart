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
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/core/dynamic_widget.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:webview_flutter/webview_flutter.dart';

class DFWebView extends DFBasicWidget {
  DFWebView(
    this.model, {
    this.key,
    @required this.initialUrl,
  }) : super(model, key: key);

  final DynamicModel model;
  final Key key;
  final String initialUrl;

  Widget buildMainWidget(BuildContext context) {
    if (Platform.isAndroid) WebView.platform = SurfaceAndroidWebView();
    return WebView(
        initialUrl: this.initialUrl,
        javascriptMode: JavascriptMode.unrestricted);
  }

  static bool isWebView(Widget w) {
    return ((w is DynamicWidget) && (w.widgetInstance is DFWebView)) ||
        (w is DFWebView);
  }
}

class ProxyDFWebView extends ProxyBase {
  static void register() {
    ProxyDFWebView instance = ProxyDFWebView();
    RegisterWidget().register(
      widgetName: 'WebView',
      constructor: instance.constructor,
    );
  }

  DFWebView constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;

    return DFWebView(model, initialUrl: props['initialUrl']);
  }
}
