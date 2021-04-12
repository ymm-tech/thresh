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
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/basic/util.dart';

/// 基础组件 DFText
/// 支持富文本
class DFText extends DFBasicWidget {
  DFText(
    DynamicModel model, {
    Key key,
    this.text,
    this.children,
    this.style,
    this.align = TextAlign.left,
    this.wrap = true,
    this.overflow,
    this.maxLines,
  }) : super(model, key: key);

  final String text;
  final List<TextSpan> children;
  final TextStyle style;
  final TextAlign align;
  final bool wrap;
  final TextOverflow overflow;
  final int maxLines;

  @override
  Widget buildMainWidget(BuildContext context) {
    return Text.rich(
      TextSpan(
        text: text ?? '',
        children: children,
      ),
      style: style,
      textAlign: align,
      softWrap: wrap,
      overflow: overflow,
      maxLines: maxLines,
      textScaleFactor: 1.0,
    );
  }
}

class ProxyDFText extends ProxyBase {
  static void register() {
    ProxyDFText instance = ProxyDFText();
    RegisterWidget().register(
      widgetName: 'Text',
      constructor: instance.constructor,
    );
  }

  DFText constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    return DFText(
      model,
      text: Util.getSafeString(props['text']),
      children: getTextSpanList(Util.getList(props['richText'])),
      style: Util.getTextStyle(props),
      align: Util.getTextAlign(props['align']),
      wrap: Util.getBoolean(props['wrap'], nullIsTrue: true),
      overflow: Util.getTextOverflow(props['overflow']),
      maxLines: Util.getInt(props['maxLines']),
    );
  }

  List<TextSpan> getTextSpanList(List list) {
    if (list == null) return null;
    List<TextSpan> res = [];
    for (dynamic item in list) {
      TextSpan span = Util.getTextSpan(item);
      if (span != null) res.add(span);
    }
    return res;
  }
}
