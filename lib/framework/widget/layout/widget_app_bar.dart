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

import 'package:thresh/framework/channel/basic.dart';
import 'package:thresh/framework/widget/widget_basic.dart';
import 'package:flutter/material.dart';
import 'package:thresh/framework/core/dynamic_app.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/framework/widget/data/widget_text.dart';

class DFAppBar extends DFBasicWidget implements PreferredSizeWidget {
  DFAppBar(
    this.model, {
    Key key,
    this.elevation = false,
    this.isLight = true,
    this.backgroundColor,
    this.centerTitle = true,
    this.title,
    this.leading,
    this.actions,
  }) : super(model, key: key);

  final DynamicModel model;
  final bool elevation;
  final bool isLight;
  final Color backgroundColor;
  final bool centerTitle;
  final Widget title;
  final Widget leading;
  final List<Widget> actions;

  @override
  Widget buildMainWidget(BuildContext context) {
    return PreferredSize(
      key: model.key,
      preferredSize: preferredSize,
      child: AppBar(
        automaticallyImplyLeading: false,
        elevation: elevation ? 1 : 0,
        centerTitle: centerTitle,
        backgroundColor: backgroundColor,
        brightness: isLight ? Brightness.dark : Brightness.light,
        leading: leading,
        actions: actions,
        title: title,
        titleSpacing: 0,
      ),
    );
  }

  @override
  Size get preferredSize =>
      Size.fromHeight(dynamicApp?.appBarHeight ?? kToolbarHeight);
}

/// 基础组件 DFAppBar
class ProxyDFAppBar extends ProxyBase {
  static void register() {
    ProxyDFAppBar instance = ProxyDFAppBar();
    RegisterWidget().register(
      widgetName: 'AppBar',
      constructor: instance.constructor,
    );
  }

  Widget constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    Map<String, dynamic> buildProps = model.buildProps;

    AppBarController controller;
    if (model.controller != null && model.controller is AppBarController) {
      controller = model.controller;
    } else {
      controller = AppBarController();
      model.controller = controller;
    }

    bool isLight = Util.getBoolean(props['statusTextLight']);
    Color themeColor = Util.getColor(props['titleColor']) ??
        (isLight ? Colors.white : Colors.black);
    final ModalRoute<dynamic> parentRoute = ModalRoute.of(context);
    final bool useCloseButton =
        parentRoute is PageRoute<dynamic> && parentRoute.fullscreenDialog;
    final List<Widget> actions = Util.getWidgetList(buildProps['buttons']);

    return DFAppBar(
      model,
      key: model.key,
      elevation: Util.getBoolean(props['elevation']),
      isLight: isLight,
      backgroundColor: Util.getColor(props['backgroundColor']) ?? Colors.white,
      leading: buildProps['leading'] ??
          (!Util.getBoolean(props['showLeadingButton'], nullIsTrue: true)
              ? null
              : !useCloseButton
                  ? AppBarBackButton(color: themeColor)
                  : AppBarCloseButton(color: themeColor)),
      centerTitle: Util.getBoolean(props['centerTitle'], nullIsTrue: true),
      actions: actions.isEmpty
          ? null
          : [
              Row(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: actions,
              )
            ],
      title: buildProps['titleView'] ??
          AppBarText(
            props['title'] ?? '',
            style: TextStyle(
              color: themeColor,
              fontSize: Util.getDouble(props['titleSize']),
              fontWeight: Util.getTextWeight(props['titleWeight']),
            ),
            controller: controller,
          ),
    );
  }
}

class AppBarBackButton extends StatelessWidget {
  const AppBarBackButton({Key key, this.color}) : super(key: key);
  final Color color;

  @override
  Widget build(BuildContext context) {
    assert(debugCheckHasMaterialLocalizations(context));
    return GestureDetector(
      child: Container(
        width: 44,
        height: 44,
        padding: EdgeInsets.only(left: 10),
        alignment: Alignment.centerLeft,
        child: Icon(Icons.arrow_back_ios, color: color),
      ),
      onTap: () {
        _appBarPop(context);
      },
    );
  }
}

class AppBarCloseButton extends StatelessWidget {
  const AppBarCloseButton({Key key, this.color}) : super(key: key);
  final Color color;

  @override
  Widget build(BuildContext context) {
    assert(debugCheckHasMaterialLocalizations(context));
    return GestureDetector(
      child: Container(
        width: 44,
        height: 44,
        padding: EdgeInsets.only(left: 10),
        alignment: Alignment.centerLeft,
        child: Icon(Icons.close, color: color),
      ),
      onTap: () {
        _appBarPop(context);
      },
    );
  }
}

void _appBarPop(BuildContext context) {
  dynamicApp?.needPopPage();
}

class AppBarText extends StatefulWidget {
  AppBarText(this.text, {this.style, this.controller});

  @override
  State<StatefulWidget> createState() {
    return AppBarTextState();
  }

  final String text;
  final TextStyle style;
  final AppBarController controller;
}

class AppBarTextState extends State<AppBarText> {
  String text;

  @override
  void initState() {
    super.initState();
    text = widget.text ?? '';
    widget.controller.holdState(this);
  }

  @override
  void didUpdateWidget(AppBarText oldWidget) {
    super.didUpdateWidget(oldWidget);
    updateTitle(widget.text);
    widget.controller.holdState(this);
  }

  @override
  void dispose() {
    widget.controller.holdState(null);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return DFText(
      null,
      text: text,
      style: widget.style,
      maxLines: 1,
    );
  }

  updateTitle(String title) {
    this.setState(() {
      text = title;
    });
  }
}

class AppBarController {
  AppBarTextState state;

  holdState(AppBarTextState state) {
    this.state = state;
  }

  updateTitle(String title) {
    state?.updateTitle(title);
  }
}
