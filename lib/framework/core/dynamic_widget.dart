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
import 'package:thresh/framework/widget/widget_basic.dart';

/// 包裹每一个StatefulWidget，从而提供局部更新的能力
/// 可以从任意statefulWidget节点进行setState从而更新UI
class DynamicWidget extends StatefulWidget {
  /// 当前持有的model
  final DynamicModel model;
  /// 构建widget的实例
  final Widget widgetInstance;

  DynamicWidget({ @required this.model, @required this.widgetInstance });

  @override
  State<StatefulWidget> createState() {
    return DynamicWidgetState(widgetInstance);
  }
}

class DynamicWidgetState extends State<DynamicWidget> {
  Widget widgetInstance;
  bool hasDispose = false;

  DynamicWidgetState(this.widgetInstance);

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    _setWidgetModel();
  }

  @override
  void didUpdateWidget(DynamicWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    _setWidgetModel();
    updateWidget(widget.model.dynamicWidget.widgetInstance);
  }

  @override
  void dispose() {
    hasDispose = true;
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return widgetInstance;
  }

  /// 更新model持有的state
  _setWidgetModel() {
    if (widget.model != null) {
      widget.model.setWidgetState(this);
      widget.model.widgetInstance = widgetInstance as DFBasicWidget;
    }
  }
  
  /// 更新state持有的widget实例
  void updateWidget(Widget newWidget) {
    if (hasDispose || widgetInstance == newWidget) return;
    setState(() {
      widgetInstance = newWidget;
    });
    widget.model.widgetInstance = newWidget as DFBasicWidget;
  }
}

class DynamicPreferredSizeWidget extends DynamicWidget implements PreferredSizeWidget {
  DynamicPreferredSizeWidget({ @required DynamicModel model, @required PreferredSizeWidget widgetInstance }) :
   super(model: model, widgetInstance: widgetInstance);

  @override
  Size get preferredSize => widgetInstance == null
    ? null
    : (widgetInstance as PreferredSizeWidget).preferredSize;
}
