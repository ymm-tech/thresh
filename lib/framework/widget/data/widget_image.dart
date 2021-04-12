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

import 'dart:io';
import 'dart:async';
import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:thresh/framework/core/dynamic_app.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/basic/global_def.dart';
import 'package:thresh/devtools/dev_tools.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:thresh/thresh.dart';

class DFImage extends DFBasicWidget {
  DFImage(
    DynamicModel model, {
    Key key,
    this.controller,
    @required this.src,
    this.width,
    this.height,
    this.fadeIn = false,
    this.placeholder,
    this.fit,
    this.onLoad,
  }) : super(model, key: key);

  final DFStopAlwaysRenderController controller;
  final String src;
  final String placeholder;
  final double width;
  final double height;
  final bool fadeIn;
  final BoxFit fit;
  final ParamGlobalHandler onLoad;

  Widget buildMainWidget(BuildContext context) {
    return _DFImageWidget(
      controller: controller,
      src: src,
      width: width,
      height: height,
      fadeIn: fadeIn,
      placeholder: placeholder,
      fit: fit,
      onLoad: onLoad,
    );
  }
}

class _DFImageWidget extends StatefulWidget {
  _DFImageWidget({
    this.controller,
    @required this.src,
    this.width,
    this.height,
    this.fadeIn = false,
    this.placeholder,
    this.fit,
    this.onLoad,
  });

  final DFStopAlwaysRenderController controller;
  final String src;
  final String placeholder;
  final double width;
  final double height;
  final bool fadeIn;
  final BoxFit fit;
  final ParamGlobalHandler onLoad;

  @override
  State<StatefulWidget> createState() {
    return _DFImageWidgetState();
  }
}

class _DFImageWidgetState extends State<_DFImageWidget> {
  ImageProvider imageProvider;
  ImageProvider placeholderProvider;
  double width;
  double height;
  bool fadeIn;
  BoxFit fit;
  bool disposed = false;

  @override
  void initState() {
    super.initState();
    widget.controller?.currentState = this;
    width = widget.width;
    height = widget.height;
    fadeIn = widget.fadeIn;
    fit = widget.fit;
    getPlaceholder();
    getImage();
  }

  @override
  void didUpdateWidget(_DFImageWidget oldWidget) {
    if (disposed) return;
    super.didUpdateWidget(oldWidget);
    if (oldWidget.src != widget.src) getImage();
    if (oldWidget.placeholder != widget.placeholder) getPlaceholder();
    if (oldWidget.width != widget.width ||
        oldWidget.height != widget.height ||
        oldWidget.fadeIn != widget.fadeIn ||
        oldWidget.fit != widget.fit) {
      getImage();
      setState(() {
        width = widget.width;
        height = widget.height;
        fadeIn = widget.fadeIn;
        fit = widget.fit;
      });
    }
  }

  @override
  void dispose() {
    this.disposed = true;
    if (widget.controller != null) {
      dynamicApp?.stopAlwaysRenderControllers?.remove(widget.controller);
      widget.controller.dispose();
    }
    super.dispose();
  }

  stopRender() {
    if (widget == null ||
        widget.src == null ||
        widget.src.toLowerCase().endsWith('.gif')) {
      setState(() {
        imageProvider = null;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    if (imageProvider == null) return Container(width: width, height: height);
    Duration duration = Duration(milliseconds: fadeIn ? 150 : 1);
    return widget.placeholder != null
        ? placeholderProvider == null
            ? Container(width: width, height: height)
            : FadeInImage(
                image: imageProvider,
                placeholder: placeholderProvider,
                width: width,
                height: height,
                fit: fit,
                fadeOutDuration: duration,
                fadeInDuration: duration,
              )
        : Image(
            image: imageProvider,
            width: width,
            height: height,
            fit: fit,
          );
  }

  getImage() async {
    ImageProvider p = await getImageProvider(widget.src);
    if (widget.onLoad != null) {
      ImageStreamListener listener =
          ImageStreamListener((ImageInfo info, bool synchronousCall) {
        widget.onLoad({'width': info.image.width, 'height': info.image.height});
      }, onError: (e, s) {});

      p.resolve(ImageConfiguration()).addListener(listener);
    }
    if (disposed) return;
    setState(() {
      imageProvider = p;
    });
  }

  getPlaceholder() async {
    ImageProvider p = await getImageProvider(widget.placeholder);
    if (disposed) return;
    setState(() {
      placeholderProvider = p;
    });
  }

  Future<ImageProvider> getImageProvider(String url) async {
    if (url == null) return null;
    // 网络图片
    if (url.startsWith('http://') || url.startsWith('https://')) {
      devtools.insert(
        InfoType.event,
        DevInfo(
          title: 'Load Image',
          content: Util.formatMutipulLineText([
            'From: ${dynamicApp.jsEnvIsProd ? 'Cache' : 'Network'}',
            'Url: $url',
          ]),
        ),
      );
      return dynamicApp.jsEnvIsProd
          ? CachedNetworkImageProvider(url)
          : NetworkImage(url);
    }
    // 本地图片
    else {
      String fullPath = url;
      if (!fullPath.startsWith('assets://'))
        fullPath = Util.getBundleFilePath(url);
      if (fullPath.startsWith('assets://')) {
        devtools.insert(
          InfoType.event,
          DevInfo(
            title: 'Load Image',
            content: Util.formatMutipulLineText([
              'From: Assets',
              'Path: $fullPath',
            ]),
          ),
        );
        Uint8List byteData = await loadImageFromAssets(fullPath);
        return MemoryImage(byteData);
      } else {
        // 资源包图片
        Uint8List byteData = await loadImageFromMemoryFile(File(fullPath));
        return MemoryImage(byteData);
      }
    }
    // assets 图片
  }

  Future<Uint8List> loadImageFromMemoryFile(File file) async {
    List<int> bytes = await file.readAsBytes();
    return Uint8List.fromList(bytes);
  }
}

Future<Uint8List> loadImageFromAssets(String url) async {
  final dynamic res = await dynamicChannel
      ?.callNative(module: 'dynamicFlutter', method: 'getNativeImage', params: {
    'imageSource': 'assets',
    'imagePath': url,
  });
  dynamic result = Util.filterBridgeResponse(res);
  if (result is List) {
    List<int> bytes = result.cast<int>();
    return Uint8List.fromList(bytes);
  }
  return result;
}

class ProxyDFImage extends ProxyBase {
  DFStopAlwaysRenderController controller;

  static void register() {
    ProxyDFImage instance = ProxyDFImage();
    RegisterWidget().register(
      widgetName: 'Image',
      constructor: instance.constructor,
    );
  }

  DFImage constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;

    String src = Util.getString(props['src']);

    String controllerName = 'Image: $src';
    if (model.controller != null &&
        model.controller is DFStopAlwaysRenderController) {
      controller = model.controller;
    } else {
      controller = DFStopAlwaysRenderController();
      model.controller = controller;
      dynamicApp?.stopAlwaysRenderControllers?.add(controller);
    }
    controller.name = controllerName;

    return DFImage(model,
        controller: controller,
        src: src,
        placeholder: Util.getString(props['placeholder']),
        width: Util.getDouble(props['width']),
        height: Util.getDouble(props['height']),
        fadeIn: Util.getBoolean(props['fadeIn']),
        fit: Util.getBoxFit(props['fit']),
        onLoad: eventGlobalHandlerWithParam(
            pageName: model.pageName,
            widgetId: model.widgetId,
            eventId: model.props['_onLoadId'],
            type: 'onLoad'));
  }
}
