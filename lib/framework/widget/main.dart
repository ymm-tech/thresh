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

import 'package:thresh/framework/widget/data/widget_notice_bar.dart';
import 'package:thresh/framework/widget/data/widget_qr_image.dart';
import 'package:thresh/framework/widget/data/widget_picker.dart';
import 'package:thresh/framework/widget/layout/widget_page.dart';
import 'package:thresh/framework/widget/layout/widget_app_bar.dart';
import 'package:thresh/framework/widget/layout/widget_container.dart';
import 'package:thresh/framework/widget/layout/widget_scroll_view.dart';
import 'package:thresh/framework/widget/layout/widget_list_view.dart';
import 'package:thresh/framework/widget/layout/widget_drawer_scroll_view.dart';
import 'package:thresh/framework/widget/layout/widget_nest_scroll_view.dart';
import 'package:thresh/framework/widget/layout/widget_dragable_scroll_view/index.dart';
import 'package:thresh/framework/widget/layout/widget_swiper_view.dart';
import 'package:thresh/framework/widget/layout/widget_swipe_actions_view.dart';
import 'package:thresh/framework/widget/layout/widget_native_view.dart';
import 'package:thresh/framework/widget/data/widget_text.dart';
import 'package:thresh/framework/widget/data/widget_spin.dart';
import 'package:thresh/framework/widget/data/widget_refresh.dart';
import 'package:thresh/framework/widget/data/widget_icon.dart';
import 'package:thresh/framework/widget/data/widget_image.dart';
import 'package:thresh/framework/widget/form/widget_button.dart';
import 'package:thresh/framework/widget/form/widget_radio.dart';
import 'package:thresh/framework/widget/form/widget_checkbox.dart';
import 'package:thresh/framework/widget/form/widget_input.dart';
import 'package:thresh/framework/widget/form/widget_switch.dart';

void registeBasicWidgets() {
  ProxyDFPage.register();
  ProxyDFAppBar.register();
  ProxyDFContainer.register();
  ProxyDFScrollView.register();
  ProxyDFListView.register();
  ProxyDFNestScrollView.register();
  ProxyThreshDrawerScrollView.register();
  ProxyDFDragableScrollView.register();
  ProxyDFSwipeActionsView.register();
  ProxyDFSwiperView.register();
  ProxyDFNativeView.register();

  ProxyDFText.register();
  ProxyDFIcon.register();
  ProxyDFImage.register();
  ProxyDFQrImage.register();
  ProxyDFSpin.register();
  ProxyDFRefresh.register();
  ProxyDFNoticeBar.register();

  ProxyDFButton.register();
  ProxyDFRadio.register();
  ProxyDFCheckbox.register();
  ProxyDFInput.register();
  ProxyDFSwitch.register();
  ProxyDFPicker.register();
}
