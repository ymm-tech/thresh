import 'dart:ui';

import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';

import 'thresh.dart' as thresh;

// 本地调试入口
void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  window.onSemanticsEnabledChanged = () {};
  RendererBinding.instance.setSemanticsEnabled(false);
  if (window.defaultRouteName.isNotEmpty
      && window.defaultRouteName.startsWith('thresh/thresh-page')) {
    thresh.initPlugin(window.defaultRouteName);
    return;
  }
  // 默认测试页面
  thresh.main();
}

