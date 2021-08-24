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
import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter/material.dart';
import 'package:thresh/basic/device_info.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/basic/global_def.dart';
import 'package:thresh/devtools/dev_tools.dart';

enum GestureType { HorizontalDrag, VerticalDrag, Pan, Scale }

class DFNativeView extends DFBasicWidget {
  DFNativeView(
    DynamicModel model, {
    Key key,
    @required this.type,
    this.params,
    this.gestures,
    this.onLoad,
  }) : super(model, key: key);

  final String type;
  final Map<String, dynamic> params;
  final List<GestureType> gestures;
  final VoidGlobalHandler onLoad;

  Widget buildMainWidget(BuildContext context) {
    return _DFNativeViewWidget(
      type: type,
      params: params,
      gestures: gestures,
      onLoad: onLoad,
    );
  }
}

class _DFNativeViewWidget extends StatefulWidget {
  _DFNativeViewWidget({
    @required this.type,
    this.params,
    this.gestures,
    this.onLoad,
  });

  final String type;
  final Map<String, dynamic> params;
  final List<GestureType> gestures;
  final VoidGlobalHandler onLoad;

  @override
  State<StatefulWidget> createState() {
    return _DFNativeViewWidgetState();
  }
}

class _DFNativeViewWidgetState extends State<_DFNativeViewWidget> {
  var platformChannel;

  String type;
  Map<String, dynamic> params;
  List<GestureType> gestures;
  bool isInit = false;

  @override
  void initState() {
    super.initState();
    type = widget.type;
    params = widget.params;
    gestures = widget.gestures;
  }

  @override
  void didUpdateWidget(_DFNativeViewWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.type != widget.type ||
        oldWidget.params.toString() != widget.params.toString())
      this.setState(() {
        type = widget.type;
        params = widget.params;
      });
  }

  Set<Factory<OneSequenceGestureRecognizer>> gestureRecognizer(
      List<GestureType> gestures) {
    if (gestures == null)
      return <Factory<OneSequenceGestureRecognizer>>[].toSet();
    List<Factory<OneSequenceGestureRecognizer>> gesturesFactory = [];
    gestures.forEach((element) {
      if (element == GestureType.HorizontalDrag) {
        gesturesFactory.add(Factory<HorizontalDragGestureRecognizer>(
            () => HorizontalDragGestureRecognizer()));
      } else if (element == GestureType.VerticalDrag) {
        gesturesFactory.add(Factory<VerticalDragGestureRecognizer>(
            () => VerticalDragGestureRecognizer()));
      } else if (element == GestureType.Pan) {
        gesturesFactory
            .add(Factory<PanGestureRecognizer>(() => PanGestureRecognizer()));
      } else if (element == GestureType.Scale) {
        gesturesFactory.add(
            Factory<ScaleGestureRecognizer>(() => ScaleGestureRecognizer()));
      }
    });
    return gesturesFactory.toSet();
  }

  @override
  Widget build(BuildContext context) {
    Widget $nativeView;
    if (Platform.isAndroid) {
      $nativeView = Listener(
        onPointerDown: (PointerDownEvent event) {
          var arguments = Map();
          arguments['dx'] = event.localPosition.dx;
          arguments['dy'] = event.localPosition.dy;
          if (platformChannel != null) {
            platformChannel.invokeMethod('down', arguments);
          }
        },
        onPointerUp: (PointerUpEvent event) {
          var arguments = Map();
          arguments['dx'] = event.localPosition.dx;
          arguments['dy'] = event.localPosition.dy;
          if (platformChannel != null) {
            platformChannel.invokeMethod('up', arguments);
          }
        },

        child: AnimatedOpacity(
              opacity: isInit ? 1 : 0,
              duration: Duration(milliseconds: 100),
              child: AndroidView(
              viewType: type,
              onPlatformViewCreated: onViewCreated,
              layoutDirection: TextDirection.ltr,
              creationParams: params,
              creationParamsCodec: StandardMessageCodec(),
              gestureRecognizers: gestureRecognizer(gestures),
            ),
        ),
      );
      // if(Device.isAndroidQ()){
      //   $nativeView = PlatformViewLink(
      //     viewType: type,
      //     surfaceFactory:
      //         (BuildContext context, PlatformViewController controller) {
      //       return AndroidViewSurface(
      //         controller: controller,
      //         gestureRecognizers: const <Factory<OneSequenceGestureRecognizer>>{},
      //         hitTestBehavior: PlatformViewHitTestBehavior.opaque,
      //       );
      //     },
      //     onCreatePlatformView: (PlatformViewCreationParams creationParams) {
      //       return PlatformViewsService.initSurfaceAndroidView(
      //         id: creationParams.id,
      //         viewType: type,
      //         creationParams: params,
      //         layoutDirection: TextDirection.ltr,
      //         creationParamsCodec: StandardMessageCodec(),
      //       )
      //         ..addOnPlatformViewCreatedListener(creationParams.onPlatformViewCreated)
      //         ..create();
      //     },
      //   );
      // }else{
      //   // 解决androidView黑屏问题
      //   $nativeView = AnimatedOpacity(
      //     opacity: isInit ? 1 : 0,
      //     duration: Duration(milliseconds: 100),
      //     child: AndroidView(
      //       viewType: type,
      //       onPlatformViewCreated: onViewCreated,
      //       layoutDirection: TextDirection.ltr,
      //       creationParams: params,
      //       creationParamsCodec: StandardMessageCodec(),
      //     ),
      //   );
      // }
    } else {
      $nativeView = UiKitView(
        viewType: type,
        onPlatformViewCreated: onViewCreated,
        creationParams: params,
        creationParamsCodec: StandardMessageCodec(),
        gestureRecognizers: gestureRecognizer(gestures),
      );
    }
    return $nativeView;
  }

  onViewCreated(int id) {
    platformChannel = MethodChannel('com.flutter_to_native/thresh_$id');
    devtools.insert(
        InfoType.event,
        DevInfo(
            title: 'Load Native View: ${widget.type}',
            content: 'View Type: ${widget.type}'));
    // if (Platform.isAndroid && !Device.isAndroidQ())
    if (Platform.isAndroid) {
      new Future.delayed(new Duration(milliseconds: 500), () {
        setState(() {
          isInit = true;
        });
      });
    }
    if (widget.onLoad == null) return;
    widget.onLoad();
  }
}

class ProxyDFNativeView extends ProxyBase {
  static void register() {
    ProxyDFNativeView instance = ProxyDFNativeView();
    RegisterWidget().register(
      widgetName: 'NativeView',
      constructor: instance.constructor,
    );
  }

  DFNativeView constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;

    List<GestureType> getGestureList(List list) {
      if (list == null) return null;
      List<GestureType> res = [];
      for (dynamic item in list) {
        GestureType gesture;
        switch (item) {
          case 'HorizontalDrag':
            gesture = GestureType.HorizontalDrag;
            break;
          case 'VerticalDrag':
            gesture = GestureType.VerticalDrag;
            break;
          case 'Pan':
            gesture = GestureType.Pan;
            break;
          case 'Scale':
            gesture = GestureType.Scale;
            break;
        }
        if (gesture != null) res.add(gesture);
      }
      return res;
    }

    return DFNativeView(model,
        type: Util.getString(props['type']),
        params: props['params'],
        gestures: getGestureList(Util.getList(props['gesture'])),
        onLoad: eventGlobalVoidHandler(
            pageName: model.pageName,
            widgetId: model.widgetId,
            eventId: model.props['_onLoadId'],
            type: 'onLoad'));
  }
}
