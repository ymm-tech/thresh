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
import 'package:thresh/framework/core/dynamic_app.dart';
import 'package:thresh/framework/channel/basic.dart';
import 'package:thresh/basic/global_def.dart';
import 'package:thresh/basic/util.dart';

/// 注册工具 channel 方法
void registerUtilChannelMethods() {
  DynamicChannel.register({
    'setBundleDir': (params) {
      String dir = Util.getString(params['bundleDir']);
      if (dir != null)
        Util.bundleDirectory = dir;
      else
        Util.onError(ThreshError('bundle dir is null'));
    },
    'setAppBarHeight': (params) {
      double appBarHeight =
          Util.getDouble(params['appBarHeight']) ?? kToolbarHeight;
      dynamicApp?.appBarHeight = appBarHeight;
    },
    'copy': (params) {
      Util.copyData(Util.getString(params['data']),
          Util.getBoolean(params['showSuccess']));
    },
    'blur': (params) {
      FocusScope.of(dynamicApp.context).requestFocus(FocusNode());
    },
    'onError': (params) {
      String message = Util.getString(params['message']);
      String stack = Util.getString(params['stack']);
      String pageName = Util.getString(params['pageName']);
      String referPageName = Util.getString(params['referPageName']);
      Util.onError(ThreshError(message,
          trace: stack,
          type: ThreshErrorType.JS,
          pageName: pageName,
          referPageName: referPageName));
    }
  });
}
