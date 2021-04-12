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
import 'package:qr_flutter/qr_flutter.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/basic/util.dart';

/// 基础组件 QrImage
/// 支持二维码
class DFQrImage extends DFBasicWidget {
  DFQrImage(DynamicModel model, {
    Key key,
    this.text,
    this.size,
    this.gapless,
    this.foregroundColor,
  }) : super(model, key: key);

  final String text;
  final double size;
  // bool	Adds an extra pixel in size to prevent gaps (default is true).
  final bool gapless;
  // The foreground color (default is black).
  final Color foregroundColor;

  @override
  Widget buildMainWidget(BuildContext context) {
    return QrImage(
      data: text,
      size: size,
      gapless: gapless,
      foregroundColor:foregroundColor,
    );
  }
}

class ProxyDFQrImage extends ProxyBase {
  static void register() {
    ProxyDFQrImage instance = ProxyDFQrImage();
    RegisterWidget().register(
      widgetName: 'QrImage',
      constructor: instance.constructor,
    );
  }

  DFQrImage constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    return DFQrImage(
      model,
      text: Util.getSafeString(props['text']),
      size: Util.getDouble(props['size']) ?? 100,
      gapless:Util.getBoolean(props['gapless'],nullIsTrue: true),
      foregroundColor: Util.getColor(props['foregroundColor']),
    );
  }
}
