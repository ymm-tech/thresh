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
import 'package:thresh/basic/util.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/basic/global_def.dart';

/// 基础组件 DFInput
class DFInput extends DFBasicWidget {
  DFInput(
    DynamicModel model, {
    Key key,
    this.disabled = false,
    this.autofocus = false,
    this.maxLines,
    this.maxLength,
    this.lineHeight,
    this.height,
    this.padding,
    this.textAlign,
    this.textStyle,
    this.placeholder,
    this.placeholderStyle,
    this.cursorColor,
    this.keyboardType,
    this.controller,
    this.focusNode,
    this.onChange,
  }) : super(
          model,
          key: key,
        );

  final bool disabled;
  final bool autofocus;
  final int maxLines;
  final int maxLength;
  final double height;
  final double lineHeight;
  final EdgeInsets padding;
  final TextAlign textAlign;
  final TextStyle textStyle;
  final String placeholder;
  final TextStyle placeholderStyle;
  final Color cursorColor;
  final TextInputType keyboardType;
  final DFTextEditingController controller;
  final FocusNode focusNode;
  final ParamGlobalHandler onChange;

  @override
  Widget buildMainWidget(BuildContext context) {
    final bool isPureNumberType = keyboardType == TextInputType.number;

    return TextField(
      controller: controller,
      focusNode: focusNode,
      decoration: InputDecoration(
        hintText: placeholder,
        hintStyle: placeholderStyle,
        counter: Container(
          width: 0,
          height: 0,
        ),
        contentPadding:
            maxLines == 1 ? EdgeInsets.only(top: getPaddingTop()) : null,
        enabledBorder: InputBorder.none,
        disabledBorder: InputBorder.none,
        errorBorder: InputBorder.none,
        border: InputBorder.none,
      ),
      keyboardType: keyboardType,
      keyboardAppearance: Brightness.light,
      // textInputAction: widget.textInputAction,
      textCapitalization: TextCapitalization.none,
      style: textStyle,
      strutStyle: StrutStyle(
        height: maxLines > 1 ? lineHeight : 1,
      ),
      textAlign: textAlign,
      autofocus: autofocus,
      autocorrect: false,
      maxLines: maxLines,
      maxLength: maxLength,
      maxLengthEnforced: true,
      enabled: !disabled,
      cursorColor: cursorColor,
      onChanged: (String value) {
        // 数字类型下，安卓键盘可能依然带有小数点或其他字符按键
        // 通过该方法过滤这些不正确的按键
        if (isPureNumberType && value != null && value.isNotEmpty) {
          final int v = int.tryParse(value);
          if (v == null) {
            // 无法正确解析为整型，说明包含数字以外的其他字符
            final String lastText = controller.lastText;
            controller.text = lastText;
            controller.lastText = lastText;
            return;
          }
        }

        if (onChange != null) {
          onChange({'value': value});
        }
        controller.lastText = value;
      },
    );
  }

  double getPaddingTop() {
    if (height == null || height == 0) return 0;
    double inputHeight =
        height - ((padding?.top) ?? 0) - ((padding?.bottom) ?? 0);
    double paddingTop = inputHeight / 2 - (textStyle?.fontSize ?? 14) / 1.3;
    return paddingTop > 0 ? paddingTop : 0;
  }
}

class ProxyDFInput extends ProxyBase {
  DFTextEditingController controller;
  FocusNode focusNode;
  ParamGlobalHandler onFocus;
  ParamGlobalHandler onBlur;
  ParamGlobalHandler onChange;

  static void register() {
    ProxyDFInput instance = ProxyDFInput();
    RegisterWidget().register(
      widgetName: 'Input',
      constructor: instance.constructor,
    );
  }

  DFInput constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;

    String text = Util.getString(props['value']) ?? '';

    onChange = eventGlobalHandlerWithParam(
        pageName: model.pageName,
        widgetId: model.widgetId,
        eventId: model.props['_onChangeId'],
        type: 'onChange');
    onFocus = eventGlobalHandlerWithParam(
        pageName: model.pageName,
        widgetId: model.widgetId,
        eventId: model.props['_onFocusId'],
        type: 'onFocus');
    onBlur = eventGlobalHandlerWithParam(
        pageName: model.pageName,
        widgetId: model.widgetId,
        eventId: model.props['_onBlurId'],
        type: 'onBlur');

    if (model.controller != null &&
        model.controller is DFTextEditingController) {
      controller = model.controller;
      // Input value 不受 setState 控制，如果需要修改 value，需要通过 $input.setValue() 设置
      // controller.text = text;
      controller.onChange = onChange;
      focusNode = controller.focusNode;
    } else {
      focusNode = FocusNode();
      controller = DFTextEditingController(
          text: text, onChange: onChange, focusNode: focusNode);
      focusNode.addListener(focusNodeListener);
      model.controller = controller;
    }

    return DFInput(
      model,
      disabled: Util.getBoolean(props['disabled']),
      autofocus: Util.getBoolean(props['autofocus']),
      maxLines: Util.getInt(props['maxLines']) ?? 1,
      maxLength: Util.getInt(props['maxLength']),
      lineHeight: Util.getDouble(props['lineHeight']) ?? 1,
      textAlign: Util.getTextAlign(props['textAlign']),
      textStyle: Util.getTextStyle(props['textStyle']),
      placeholder: Util.getString(props['placeholder']) ?? '',
      placeholderStyle: Util.getTextStyle(props['placeholderStyle']),
      cursorColor: Util.getColor(props['cursorColor']),
      keyboardType: getKeyboardType(props['keyboardType']),
      controller: controller,
      focusNode: focusNode,
      onChange: onChange,
      height: Util.getDouble(props['height'] ?? props['minHeight']),
      padding: Util.getEdgeInsets(props['padding']),
    );
  }

  void focusNodeListener() {
    Map<String, String> e = {'value': controller?.text ?? ''};
    if (focusNode.hasFocus && onFocus != null) {
      onFocus(e);
      return;
    }
    if (!focusNode.hasFocus && onBlur != null) {
      onBlur(e);
    }
  }

  TextInputType getKeyboardType(dynamic value) {
    if (!(value is String)) return TextInputType.text;
    switch (value) {
      case 'text':
        return TextInputType.text;
      case 'multiline':
        return TextInputType.multiline;
      case 'number':
        return TextInputType.number;
      case 'decimalNumber':
        return TextInputType.numberWithOptions(decimal: true);
      case 'phone':
        return TextInputType.phone;
      case 'datetime':
        return TextInputType.datetime;
      case 'emailAddress':
        return TextInputType.emailAddress;
      case 'url':
        return TextInputType.url;
      default:
        return TextInputType.text;
    }
  }
}

class DFTextEditingController extends TextEditingController {
  String lastText;
  ParamGlobalHandler onChange;
  FocusNode focusNode;

  DFTextEditingController({String text, this.onChange, this.focusNode})
      : lastText = text,
        super(text: text);

  set text(String newText) {
    final bool shouldTriggetOnChange = newText != lastText;
    lastText = text;
    value = value.copyWith(
      text: newText,
      // selection: TextSelection.collapsed(offset: value.selection.baseOffset),
      selection: TextSelection.collapsed(offset: newText.length),
      composing: TextRange.empty,
    );
    if (onChange != null && shouldTriggetOnChange) onChange({'value': newText});
  }
}
