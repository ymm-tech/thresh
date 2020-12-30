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
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_widget.dart';
import 'package:thresh/framework/widget/main.dart';
import 'package:thresh/basic/global_def.dart';
import 'package:thresh/devtools/dev_tools.dart';

/// 全局注册widget拦截
class RegisterProxy {
  static bool _hasRegister = false;

  static void register() {
    if (RegisterProxy._hasRegister) return;
    RegisterProxy._hasRegister = true;
    registeBasicWidgets();
  }
}

/// 所有拦截widget都需要继承该类并实现register方法
abstract class ProxyBase {
  static void register() {}
}

/// 拦截后的widget/dart/enum构造器保存池
/// 用于构建widget/dart/enum实例
class RegisterWidget {
  static RegisterWidget _instance;
  Map<String, Map<String, ModelBuilder>> _proxy = {};

  static RegisterWidget getInstance() {
    if (_instance == null) {
      _instance = RegisterWidget._();
    }
    return _instance;
  }
  RegisterWidget._();
  factory RegisterWidget() => RegisterWidget.getInstance();

  /// 注册方法
  void register({
    String widgetName,
    ModelBuilder constructor,
    Map<String, ModelBuilder> modelBuilders,
  }) {
    _proxy[widgetName] = {
      'constructor': constructor,
    };
    Map<String, ModelBuilder> proxyItem = _proxy[widgetName];
    if (modelBuilders == null) return;
    for (String key in modelBuilders.keys) {
      proxyItem[key] = modelBuilders[key];
    }
  }

  /// 构建widget
  /// 返回 StatelessWidget / DynamicWidget
  /// 如果返回DynamicWidget，则DynamicWidget会为model绑定其所对应的widgetState
  Widget render(DynamicModel model, BuildContext context) {
    if (dynamicApp == null) return Container();
    Map<String, ModelBuilder> widgetProxy = _proxy[model.name];
    if (widgetProxy == null) {
      devtools.insert(InfoType.error, DevInfo(
        title: 'Render Error',
        content: 'Widget ${model.name} has not register, it will be replaced with a Container widget or null'
      ));
      return Container();
    }
    ModelBuilder builder = widgetProxy['constructor'];
    Widget instance = builder(model, context);
    return model.isStateful
      ? model.name != 'AppBar'
        ? DynamicWidget(model: model, widgetInstance: instance,)
        : DynamicPreferredSizeWidget(model: model, widgetInstance: instance,)
      : instance;
  }
}
