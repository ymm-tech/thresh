import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:thresh/basic/global_def.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:thresh/basic/util.dart';

// 基础组件 DFPicker

class DFPicker extends DFBasicWidget {
  DFPicker(
    DynamicModel model, {
    Key key,
    this.backgroundColor,
    this.value,
    this.controller,
    this.looping = false,
    @required this.itemExtent,
    @required this.onChanged,
    @required this.children,
  }) : super(model, key: key);

  final Color backgroundColor;
  final int value;
  final FixedExtentScrollController controller;
  final bool looping;
  final double itemExtent;
  final ParamGlobalHandler onChanged;
  final List<Widget> children;

  Widget buildMainWidget(BuildContext context) {
    return _DFPicker(
      backgroundColor: backgroundColor,
      value: value,
      controller: controller,
      looping: looping,
      itemExtent: itemExtent,
      onChanged: onChanged,
      children: children,
    );
  }
}

class _DFPicker extends StatefulWidget {
  _DFPicker({
    this.backgroundColor,
    this.value,
    this.controller,
    this.looping = false,
    @required this.itemExtent,
    @required this.onChanged,
    @required this.children,
  });

  final Color backgroundColor;
  final int value;
  final FixedExtentScrollController controller;
  final bool looping;
  final double itemExtent;
  final ParamGlobalHandler onChanged;
  final List<Widget> children;

  @override
  State<StatefulWidget> createState() {
    return _DFPickerState();
  }
}

class _DFPickerState extends State<_DFPicker> {
  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    widget.controller?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return CupertinoPicker(
      backgroundColor: widget.backgroundColor,
      looping: widget.looping,
      itemExtent: widget.itemExtent,
      children: widget.children,
      scrollController: widget.controller,
      onSelectedItemChanged: (index) {
        widget.onChanged({'value': index});
      },
    );
  }
}

class ProxyDFPicker extends ProxyBase {
  static void register() {
    ProxyDFPicker instance = ProxyDFPicker();
    RegisterWidget().register(
      widgetName: 'Picker',
      constructor: instance.constructor,
    );
  }

  DFPicker constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    Map<String, dynamic> buildProps = model.buildProps;

    FixedExtentScrollController controller;
    if (model.controller != null &&
        model.controller is FixedExtentScrollController) {
      controller = model.controller;
    } else {
      controller = FixedExtentScrollController(
          initialItem: Util.getInt(props['value']) ?? 0);
      model.controller = controller;
    }

    return DFPicker(
      model,
      backgroundColor:
          Util.getColor(props['backgroundColor']) ?? Color(0xFFD2D4DB),
      looping: Util.getBoolean(props['looping'], nullIsTrue: false),
      itemExtent: Util.getDouble(props['itemHeight'], range: Range(min: 0)),
      value: Util.getInt(props['value']),
      controller: controller,
      children: Util.getWidgetList(buildProps['children'])
          .map((child) => Container(
                alignment: Alignment.center,
                child: child,
              ))
          .toList(),
      onChanged: eventGlobalHandlerWithParam(
        pageName: model.pageName,
        widgetId: model.widgetId,
        eventId: model.props['_onChangeId'],
        type: 'onChange',
      ),
    );
  }

  // Function getOnChangeDebouncedMethod(Function onChange) {
  //   if (onChange == null) return null;
  //   return Util.throttle((value) {
  //     onChange(value);
  //   }, 100);
  // }
}
