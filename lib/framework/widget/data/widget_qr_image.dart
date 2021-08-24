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

import 'package:cached_network_image/cached_network_image.dart';
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
    this.embeddedImageUrl,
    this.embeddedImageWidth,
    this.embeddedImageHeight,
    this.embeddedImageColor,
    this.errorCorrectionLevel
  }) : super(model, key: key);

  final String text;
  final double size;
  // bool	Adds an extra pixel in size to prevent gaps (default is true).
  final bool gapless;
  // The foreground color (default is black).
  final Color foregroundColor;
  // 内嵌居中的图片
  final String embeddedImageUrl;
  // 内嵌图片宽度
  final double embeddedImageWidth;
  // 内嵌图片高度
  final double embeddedImageHeight;
  // 内嵌的图片颜色
  final Color embeddedImageColor;
  // 定义的值QrErrorCorrectLevel
  final int errorCorrectionLevel;


  @override
  Widget buildMainWidget(BuildContext context) {
    if(embeddedImageUrl != null && embeddedImageUrl.isNotEmpty){
      return QrImage(
        data: text,
        size: size,
        gapless: gapless,
        errorCorrectionLevel: errorCorrectionLevel,
        foregroundColor:foregroundColor,
        embeddedImage: CachedNetworkImageProvider(embeddedImageUrl),
        embeddedImageStyle : QrEmbeddedImageStyle(
          size: Size(embeddedImageWidth,embeddedImageHeight),
          color: embeddedImageColor,
        ),
      );
    }else{
      return QrImage(
        data: text,
        size: size,
        gapless: gapless,
        foregroundColor:foregroundColor,
        errorCorrectionLevel: errorCorrectionLevel,
      );
    }
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
      errorCorrectionLevel: Util.getInt(props['errorCorrectionLevel']) ?? QrErrorCorrectLevel.L,
      gapless:Util.getBoolean(props['gapless'],nullIsTrue: true),
      foregroundColor: Util.getColor(props['foregroundColor']),
      embeddedImageUrl: Util.getString(props['embeddedImageUrl']),
      embeddedImageWidth: Util.getDouble(props['embeddedImageWidth']),
      embeddedImageHeight: Util.getDouble(props['embeddedImageHeight']),
      embeddedImageColor: Util.getColor(props['embeddedImageColor']),
    );
  }
}
