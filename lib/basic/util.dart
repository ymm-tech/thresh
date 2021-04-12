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
import 'dart:math';
import 'dart:async';
import 'dart:convert';
import 'package:dio/dio.dart';
import 'package:thresh/devtools/dev_tools.dart';
import 'package:thresh/framework/core/dynamic_app.dart';
import 'package:thresh/framework/widget/layout/widget_app_bar.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:thresh/basic/global_def.dart';
import 'package:thresh/framework/widget/data/widget_toast.dart';
import 'package:thresh/framework/core/dynamic_model.dart';

const List<String> DIRECTIONS = const ['horizontal', 'vertical'];
const List<String> POSITIONS = const ['relative', 'absolute'];
const List<String> BORDER_STYLES = const ['solid'];
const List<String> TRANSFORM_TYPES = const ['rotation', 'transition'];
const int BLACK = 0xFF000000;

class Util {
  static bool _isAndroid = Platform.isAndroid;

  static bool get isAndroid => _isAndroid;

  /// 将 value 转换为 boolean
  /// [nullIsTrue] 当 value 为 null 时是否返回 true
  static bool getBoolean(dynamic value, {bool nullIsTrue = false}) {
    if ((value == null && !nullIsTrue) ||
        value == '' ||
        value == 0 ||
        value == false) return false;
    return true;
  }

  static int getInt(dynamic value) {
    return (value is num) ? value.toInt() : null;
  }

  static double getDouble(dynamic value, {Range range}) {
    if (value is num)
      return range == null
          ? value.toDouble()
          : range.convertNumber(value).toDouble();
    return null;
  }

  static String getString(dynamic value) {
    if (value is String) return value;
    if (value != null) return value.toString();
    return null;
  }

  // 过滤不可见 Unicode 码
  // 否则会导致页面字体错乱
  static String getSafeString(dynamic value) {
    String res = Util.getString(value);
    if (res == null) return res;
    return res.replaceAll(RegExp('[\u0000-\u001F\u007F-\u00A0]'), '');
  }

  /// 将度数转换为弧度
  static double degreeToRadians(dynamic value) {
    double degree = Util.getDouble(value);
    return degree == null ? null : degree * pi / 180;
  }

  static List getList(dynamic value) {
    if (value == null || value is List) return value;
    return [value];
  }

  static dynamic getListLast(List list) {
    return list.length > 0 ? list.last : null;
  }

  static dynamic getListFirst(List list) {
    return list.length > 0 ? list.first : null;
  }

  static List<double> getDoubleList(dynamic value,
      {int length: 4, double defaultValue: 0}) {
    if (value == null) return null;
    if (value is num) return List.filled(length, value.toDouble());
    if (!(value is List)) return null;
    List<double> insets = List.filled(length, defaultValue);
    for (int i = 0; i < (value as List).length; i++) {
      dynamic inset = value[i];
      if (inset is num) insets[i] = inset.toDouble();
    }
    return insets;
  }

  static List<Widget> getWidgetList(dynamic value) {
    if (!(value is List)) return [];
    List<Widget> target = [];
    for (int i = 0; i < value.length; i++) {
      if (value[i] is Widget) {
        Widget widget = value[i];
        target.add(widget);
      }
    }
    return target;
  }

  static List<DynamicModel> getDynamicModelList(dynamic value) {
    if (!(value is List)) return [];
    List<DynamicModel> target = [];
    for (int i = 0; i < value.length; i++) {
      if (value[i] is DynamicModel) {
        DynamicModel model = value[i];
        target.add(model);
      }
    }
    return target;
  }

  static String getDirection(dynamic value) {
    return DIRECTIONS.contains(value) ? (value as String) : 'vertical';
  }

  static Map<String, double> getAbsolute(dynamic value) {
    if (value is num) {
      double v = value.toDouble();
      return {
        'top': v,
        'bottom': v,
        'left': v,
        'right': v,
      };
    }
    if (value is Map)
      return {
        'top': (value['top'] != null && value['top'] is num)
            ? value['top'].toDouble()
            : null,
        'bottom': (value['bottom'] != null && value['bottom'] is num)
            ? value['bottom'].toDouble()
            : null,
        'left': (value['left'] != null && value['left'] is num)
            ? value['left'].toDouble()
            : null,
        'right': (value['right'] != null && value['right'] is num)
            ? value['right'].toDouble()
            : null,
      };
    return null;
  }

  static Matrix4 getTransform(dynamic value) {
    if (!(value is Map)) return null;
    String type = value['type'];
    dynamic v = value['value'];
    if (type == TRANSFORM_TYPES[0]) {
      // rotate
      double r = Util.degreeToRadians(v);
      if (r != null) return Matrix4.rotationZ(r);
      return null;
    } else if (type == TRANSFORM_TYPES[1]) {
      // 位移
      if (!(v is Map)) return null;
      double x = Util.getDouble(v['x']);
      double y = Util.getDouble(v['y']);
      double z = Util.getDouble(v['z']);
      if (x == null && y == null && z == null) return null;
      return Matrix4.translationValues(x ?? 0, y ?? 0, z ?? 0);
    } else
      return null;
  }

  static EdgeInsets getEdgeInsets(dynamic value) {
    if (value is num) return EdgeInsets.all(value.toDouble());
    if (!(value is Map)) return null;
    return EdgeInsets.fromLTRB(
        value['left']?.toDouble() ?? 0,
        value['top']?.toDouble() ?? 0,
        value['right']?.toDouble() ?? 0,
        value['bottom']?.toDouble() ?? 0);
  }

  static Border getBorder(dynamic border) {
    if (!(border is Map)) return null;

    dynamic style = border['style'] ?? 'solid';
    dynamic width = border['width'] ?? 1.0;
    dynamic color = border['color'];
    dynamic side = border['side'];

    if (style != 'solid' || (side != null && !(side is List))) return null;

    final BorderSide borderSide = BorderSide(
      color: getColor(color) ?? Colors.black,
      width: getDouble(width) ?? 1,
    );
    if (side == null) {
      return Border.fromBorderSide(borderSide);
    } else {
      return Border(
        top: side.contains('top') ? borderSide : BorderSide.none,
        bottom: side.contains('bottom') ? borderSide : BorderSide.none,
        left: side.contains('left') ? borderSide : BorderSide.none,
        right: side.contains('right') ? borderSide : BorderSide.none,
      );
    }
  }

  static BorderRadius getBorderRadius(dynamic value) {
    if (value is num) return BorderRadius.circular(value.toDouble());
    if (!(value is Map)) return null;
    return BorderRadius.only(
      topLeft: Radius.circular(
        value['topLeft']?.toDouble() ?? 0,
      ),
      topRight: Radius.circular(
        value['topRight']?.toDouble() ?? 0,
      ),
      bottomRight: Radius.circular(
        value['bottomRight']?.toDouble() ?? 0,
      ),
      bottomLeft: Radius.circular(
        value['bottomLeft']?.toDouble() ?? 0,
      ),
    );
  }

  static Alignment getAlignment(dynamic value,
      [Alignment defaultValue = Alignment.topLeft]) {
    if (!(value is String)) return defaultValue;
    switch (value as String) {
      case 'topLeft':
        return Alignment.topLeft;
      case 'topCenter':
        return Alignment.topCenter;
      case 'topRight':
        return Alignment.topRight;
      case 'center':
        return Alignment.center;
      case 'centerLeft':
        return Alignment.centerLeft;
      case 'centerRight':
        return Alignment.centerRight;
      case 'bottomLeft':
        return Alignment.bottomLeft;
      case 'bottomCenter':
        return Alignment.bottomCenter;
      case 'bottomRight':
        return Alignment.bottomRight;
      default:
        return defaultValue;
    }
  }

  static MainAxisAlignment getMainAxisAlignment(dynamic value) {
    if (!(value is String)) return MainAxisAlignment.start;
    switch (value as String) {
      case 'flex-start':
      case 'start':
        return MainAxisAlignment.start;
      case 'flex-end':
      case 'end':
        return MainAxisAlignment.end;
      case 'center':
        return MainAxisAlignment.center;
      case 'spaceBetween':
        return MainAxisAlignment.spaceBetween;
      case 'spaceAround':
        return MainAxisAlignment.spaceAround;
      default:
        return MainAxisAlignment.start;
    }
  }

  static CrossAxisAlignment getCrossAxisAlignment(dynamic value) {
    if (!(value is String)) return CrossAxisAlignment.start;
    switch (value as String) {
      case 'flex-start':
      case 'start':
        return CrossAxisAlignment.start;
      case 'flex-end':
      case 'end':
        return CrossAxisAlignment.end;
      case 'center':
        return CrossAxisAlignment.center;
      case 'stretch':
        return CrossAxisAlignment.stretch;
      case 'baseline':
        return CrossAxisAlignment.baseline;
      default:
        return CrossAxisAlignment.start;
    }
  }

  static WrapAlignment getWrapAlignment(dynamic value) {
    if (!(value is String)) return WrapAlignment.start;
    switch (value as String) {
      case 'flex-start':
      case 'start':
        return WrapAlignment.start;
      case 'flex-end':
      case 'end':
        return WrapAlignment.end;
      case 'center':
        return WrapAlignment.center;
      case 'spaceBetween':
        return WrapAlignment.spaceBetween;
      case 'spaceAround':
        return WrapAlignment.spaceAround;
      default:
        return WrapAlignment.start;
    }
  }

  static Color getColor(dynamic value) {
    return (value is int) && value >= 0x00000000 && value <= 0xffffffff
        ? Color(value)
        : null;
  }

  static List<String> _gradientTypes = ['linear', 'radial']; // 'sweep' 扇形渐变暂不考虑
  static Gradient getGradient(dynamic value) {
    if (value == null || !(value is Map)) return null;
    if (value['colors'] == null || !(value['colors'] is List)) return null;
    String type = value['type'];
    if (!_gradientTypes.contains(value['type'])) type = _gradientTypes.first;
    List<Color> colors = [];
    for (dynamic colorValue in value['colors']) {
      final Color color = Util.getColor(colorValue);
      if (color != null) colors.add(color);
    }
    List<double> stops = [];
    for (dynamic stop in value['stops'] ?? []) {
      final double stopValue = Util.getDouble(stop,range: Range(min:0.0,max:1.0));
      if (stopValue != null) stops.add(stopValue);
    }
    if (colors.isEmpty) return null;
    switch (type) {
      case 'linear':
        return LinearGradient(
          colors: colors,
          stops: colors.length == stops.length
              ? stops
              : null, // If [stops] is non-null, it must  have the same length as [colors].
          begin: Util.getAlignment(value['begin'], Alignment.centerLeft),
          end: Util.getAlignment(value['end'], Alignment.centerRight),
        );
      case 'radial':
        return RadialGradient(
          colors: colors,
          stops: colors.length == stops.length
              ? stops
              : null, // If [stops] is non-null, it must  have the same length as [colors].
          center: Util.getAlignment(value['center'], Alignment.center),
          radius: Util.getDouble(value['radius']),
        );
    }
    return null;
  }

  static TextDecoration getTextDecoration(dynamic value) {
    if (!(value is String)) return null;
    switch (value as String) {
      case 'none':
        return TextDecoration.none;
      case 'lineThrough':
        return TextDecoration.lineThrough;
      case 'overline':
        return TextDecoration.overline;
      case 'underline':
        return TextDecoration.underline;
      default:
        return null;
    }
  }

  static FontWeight getTextWeight(dynamic value) {
    if (!(value is String)) return null;
    switch (value as String) {
      case 'normal':
        return FontWeight.normal;
      case 'light':
        return FontWeight.w300;
      case 'bold':
        return FontWeight.w600;
      case 'bolder':
        return FontWeight.w700;
      default:
        return null;
    }
  }

  static TextAlign getTextAlign(dynamic value) {
    if (!(value is String)) return TextAlign.left;
    switch (value as String) {
      case 'left':
        return TextAlign.left;
      case 'right':
        return TextAlign.right;
      case 'center':
        return TextAlign.center;
      default:
        return TextAlign.left;
    }
  }

  static TextOverflow getTextOverflow(dynamic value) {
    if (!(value is String)) return null;
    switch (value as String) {
      case 'ellipsis':
        return TextOverflow.ellipsis;
      case 'visible':
        return TextOverflow.visible;
      case 'clip':
        return TextOverflow.clip;
      case 'fade':
        return TextOverflow.fade;
      default:
        return null;
    }
  }

  static TextStyle getTextStyle(dynamic value) {
    if (!(value is Map)) return null;
    double size = Util.getDouble(value['size']);
    FontWeight weight = Util.getTextWeight(value['weight']);
    List<Shadow> shadow = Util.getTextShadow(value['shadow']);
    TextDecoration decoration = Util.getTextDecoration(value['decoration']);
    Color color = Util.getColor(value['color']);
    Color backgroundColor = Util.getColor(value['backgroundColor']);
    double letterSpacing = Util.getDouble(value['letterSpacing']);
    double wordSpacing = Util.getDouble(value['wordSpacing']);
    double lineHeight = Util.getDouble(value['lineHeight']);

    return TextStyle(
      fontSize: size,
      fontWeight: weight,
      shadows: shadow,
      color: color,
      backgroundColor: backgroundColor,
      letterSpacing: letterSpacing,
      wordSpacing: wordSpacing,
      decoration: decoration,
      decorationColor: color,
      height: lineHeight,
    );
  }

  static TextSpan getTextSpan(dynamic value) {
    if (!(value is Map)) return null;
    if (value['text'] == null) return null;
    return TextSpan(
        text: Util.getSafeString(value['text']),
        style: Util.getTextStyle(value));
  }

  static BoxFit getBoxFit(dynamic value) {
    if (!(value is String)) return null;
    switch (value as String) {
      case 'fill':
        return BoxFit.fill;
      case 'contain':
        return BoxFit.contain;
      case 'cover':
        return BoxFit.cover;
      case 'fitWidth':
        return BoxFit.fitWidth;
      case 'fitHeight':
        return BoxFit.fitHeight;
      case 'none':
        return BoxFit.none;
      case 'scaleDown':
        return BoxFit.scaleDown;
      default:
        return null;
    }
  }

  static List<BoxShadow> getBoxShadow(dynamic value) {
    if (!Util._isShadowMap(value)) return null;
    return [
      BoxShadow(
        color: Util.getColor(value['color']) ?? Colors.black,
        offset: Offset(
          Util.getDouble(value['offsetX']) ?? 0,
          Util.getDouble(value['offsetY']) ?? 0,
        ),
        blurRadius: Util.getDouble(value['blur']) ?? 0,
        spreadRadius: Util.getDouble(value['spread']) ?? 0,
      )
    ];
  }

  static List<Shadow> getTextShadow(dynamic value) {
    if (!Util._isShadowMap(value)) return null;
    return [
      Shadow(
        color: Util.getColor(value['color']) ?? Colors.black,
        offset: Offset(
          Util.getDouble(value['offsetX']) ?? 0,
          Util.getDouble(value['offsetY']) ?? 0,
        ),
        blurRadius: Util.getDouble(value['blur']) ?? 0,
      )
    ];
  }

  static bool _isShadowMap(dynamic value) {
    if (!(value is Map)) return false;
    if (value['color'] != null ||
        value['offsetX'] != null ||
        value['offsetY'] != null ||
        value['blur'] != null) return true;
    return false;
  }

  static String _bundleDirectory;
  static set bundleDirectory(String dir) {
    Util._bundleDirectory = dir;
  }

  static String getBundleFilePath(filePathInBundle) {
    if (Util._bundleDirectory == null) {
      Util.onError(ThreshError('bundle directory is not exist'));
      return '';
    } else {
      return Util._bundleDirectory + filePathInBundle;
    }
  }

  static Future<void> copyData(String data, [bool showSuccess = true]) async {
    await Clipboard.setData(ClipboardData(text: data));
    if (showSuccess) {
      Util.showToast('复制成功');
    }
  }

  static void showToast(String content) {
    DFToastManager.show(
        toastBody: Container(
          padding: EdgeInsets.all(5),
          alignment: Alignment.center,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(4),
            color: Colors.black87,
          ),
          child: Text(
            content,
            style: TextStyle(
              color: Colors.white,
            ),
            textAlign: TextAlign.center,
          ),
        ),
        toastInfo: DFToastInfo(
            showDevInfo: false,
            startPosition: Position(bottom: 50, left: 50, right: 50)));
  }

  /// 节流函数，默认 32ms
  static Function throttle(Function callback, [int delay = 16]) {
    bool canInvoke = true;
    return (dynamic args) {
      if (!canInvoke) return;
      canInvoke = false;
      callback(args);
      Timer(Duration(milliseconds: delay), () {
        canInvoke = true;
      });
    };
  }

  static Dio _dio;
  static Future<Map<String, dynamic>> request(dynamic params) async {
    if (_dio == null) {
      _dio = Dio(BaseOptions(
        sendTimeout: 50000,
        receiveTimeout: 30000,
        responseType: ResponseType.plain,
      ));
    }

    String url = params['url'];
    Options options = Options();
    options.method = params['method'] ?? 'POST';
    if (params['headers'] != null) {
      options.headers = {};
      (params['headers'] as Map).forEach((key, value) {
        options.headers[key] = value;
      });
    }
    String queryUrl = '';
    if (params['querys'] != null) {
      Map querys = params['querys'];
      List<String> queryList = [];
      querys.forEach((key, value) {
        queryList.add('$key=$value');
      });
      queryUrl = queryList.join("&");
    }
    if (url.indexOf('?') == -1)
      url = '$url?$queryUrl';
    else
      url = '$url&$queryUrl';

    Response data;
    try {
      data = await _dio.request(url, options: options, data: params['data']);
    } catch (e) {
      if (e is DioError) data = e.response;
      print(e);
    }
    if (options.headers['Content-Type'] == 'application/json' ||
        options.headers['content-type'] == 'application/json') {
      try {
        data.data = json.decode(data.data);
      } catch (e) {
        print(e);
      }
    }

    /// 模拟 native bridge request 的返回格式
    return {
      'data': {'data': data.data, 'code': data.statusCode, 'reason': ''},
      'code': 0,
      'reason': '',
    };
  }

  static String formatMutipulLineText(List<String> textList) {
    return textList.join('\n');
  }

  static String _alphabet =
      '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

  /// 生成指定长度随机字符串
  /// [length] 字符串长度
  /// [withTimestamp] 字符串结尾是否需要携带当前时间戳
  static String randomString({int length = 10, bool withTimestamp = false}) {
    String random = '';
    for (int i = 0; i < length; i++) {
      random += _alphabet[Random().nextInt(_alphabet.length)];
    }
    if (withTimestamp) random += '.${DateTime.now().millisecondsSinceEpoch}';
    return random;
  }

  // 处理 df 异常
  static void onError(ThreshError error) {
    devtools.insert(
        InfoType.error,
        DevInfo(
            title: error.message.toString(),
            content: (error.trace ?? error.stackTrace)?.toString() ?? ''));
    if (dynamicApp?.errorHandler != null)
      dynamicApp.errorHandler(error);
    else
      throw error;
  }

  static dynamic filterBridgeResponse(dynamic res) {
    if (!(res is Map)) return {};
    dynamic result;
    if (res['data'] != null) {
      result = res['data']['data'] ?? res['data'];
    }
    return result;
  }

  /// 白屏触发
  static Widget onWhiteScreen(dynamic reason, [BuildContext context]) {
    return dynamicApp?.onWhiteScreen?.call(reason) ??
        Scaffold(
          backgroundColor: Colors.white,
          appBar: AppBar(
            title: Text(
              'Error',
              style: TextStyle(color: Colors.white),
            ),
            leading: AppBarBackButton(),
            actions: dynamicApp?.canReload == true
                ? <Widget>[
                    IconButton(
                      icon: Icon(
                        Icons.refresh,
                        size: 24,
                        color: const Color(0xffffffff),
                      ),
                      onPressed: () async {
                        context == null
                            ? dynamicApp.reload()
                            : dynamicApp.reload(context);
                      },
                    )
                  ]
                : null,
            centerTitle: true,
            backgroundColor: Colors.blue,
          ),
          body: Container(
            child: Center(
              child: Text(
                  'Dynamic flutter app has an error!\nMore details have print below.\n\n${reason.toString()}'),
            ),
          ),
        );
  }
}
