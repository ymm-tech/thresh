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
import 'package:flutter/cupertino.dart';
import 'package:thresh/framework/core/dynamic_model.dart';
import 'package:thresh/framework/core/dynamic_proxy.dart';
import 'package:thresh/basic/util.dart';
import 'package:thresh/framework/widget/widget_basic.dart';

/// 基础组件 DFIcon
class DFIcon extends DFBasicWidget {
  DFIcon(DynamicModel model, {
    Key key,
    this.type,
    this.color,
    this.size,
    this.isLoading = false,
  }) : super(model, key: key);

  final IconData type;
  final Color color;
  final double size;
  final bool isLoading;

  @override
  Widget buildMainWidget(BuildContext context) {
    return !isLoading
      ? Icon(
        type,
        color: color,
        size: size,
      ): CupertinoActivityIndicator(
        radius: size / 2,
      );
  }
}

class ProxyDFIcon extends ProxyBase {
  static void register() {
    ProxyDFIcon instance = ProxyDFIcon();
    RegisterWidget().register(
      widgetName: 'Icon',
      constructor: instance.constructor,
    );
  }

  DFIcon constructor(DynamicModel model, BuildContext context) {
    Map<String, dynamic> props = model.props;
    String type = Util.getString(props['type']);
    return DFIcon(
      model,
      type: getIcon(type),
      color: Util.getColor(props['color']) ?? Colors.black,
      size: Util.getDouble(props['size']) ?? 14,
      isLoading: type == 'loading',
    );
  }

  IconData getIcon(String type) {
    if (type == null) return Icons.info_outline;
    switch (type) {
      case 'apps': return Icons.apps;
      case 'arrow_back': return Icons.arrow_back;
      case 'arrow_back_ios': return Icons.arrow_back_ios;
      case 'arrow_downward': return Icons.arrow_downward;
      case 'arrow_drop_down': return Icons.arrow_drop_down;
      case 'arrow_drop_up': return Icons.arrow_drop_up;
      case 'arrow_forward': return Icons.arrow_forward;
      case 'arrow_forward_ios': return Icons.arrow_forward_ios;
      case 'arrow_left': return Icons.arrow_left;
      case 'arrow_right': return Icons.arrow_right;
      case 'arrow_upward': return Icons.arrow_upward;
      case 'check': return Icons.check;
      case 'check_circle': return Icons.check_circle;
      case 'check_circle_outline': return Icons.check_circle_outline;
      case 'add': return Icons.add;
      case 'add_circle': return Icons.add_circle;
      case 'add_circle_outline': return Icons.add_circle_outline;
      case 'close': return Icons.close;
      case 'cancel': return Icons.cancel;
      case 'create': return Icons.create;
      case 'chevron_left': return Icons.chevron_left;
      case 'chevron_right': return Icons.chevron_right;
      case 'expand_less': return Icons.expand_less;
      case 'expand_more': return Icons.expand_more;
      case 'refresh': return Icons.refresh;
      case 'fullscreen': return Icons.fullscreen;
      case 'fullscreen_exit': return Icons.fullscreen_exit;
      case 'more_horiz': return Icons.more_horiz;
      case 'more_vert': return Icons.more_vert;
      case 'unfold_less': return Icons.unfold_less;
      case 'unfold_more': return Icons.unfold_more;
      case 'control_point': return Icons.control_point;
      case 'crop': return Icons.crop;
      case 'adjust': return Icons.adjust;
      case 'camera': return Icons.camera;
      case 'camera_alt': return Icons.camera_alt;
      case 'image': return Icons.image;
      case 'broken_image': return Icons.broken_image;
      case 'phone_iphone': return Icons.phone_iphone;
      case 'phone_android': return Icons.phone_android;
      case 'watch': return Icons.watch;
      case 'tv': return Icons.tv;
      case 'headset': return Icons.headset;
      case 'computer': return Icons.computer;
      case 'cloud_done': return Icons.cloud_done;
      case 'cloud_download': return Icons.cloud_download;
      case 'cloud_upload': return Icons.cloud_upload;
      case 'cloud_off': return Icons.cloud_off;
      case 'folder': return Icons.folder;
      case 'title': return Icons.title;
      case 'insert_link': return Icons.link;
      case 'insert_chart': return Icons.insert_chart;
      case 'format_quote': return Icons.format_quote;
      case 'format_list_bulleted': return Icons.format_list_bulleted;
      case 'format_list_numbered': return Icons.format_list_numbered;
      case 'attach_file': return Icons.attach_file;
      case 'attach_money': return Icons.attach_money;
      case 'access_alarms': return Icons.access_alarms;
      case 'account_box': return Icons.account_box;
      case 'account_circle': return Icons.account_circle;
      case 'bookmark': return Icons.bookmark;
      case 'bookmark_border': return Icons.bookmark_border;
      case 'fingerprint': return Icons.fingerprint;
      case 'gif': return Icons.gif;
      case 'home': return Icons.home;
      case 'info': return Icons.info;
      case 'info_outline': return Icons.info_outline;
      default: return Icons.info_outline;
    }
  }
}
