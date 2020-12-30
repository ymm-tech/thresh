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

import 'package:thresh/basic/util.dart';
import 'package:thresh/framework/channel/basic.dart';
import 'package:thresh/devtools/dev_tools.dart';

/// 注册渲染相关 channel 方法
void registerDevtoolsChannelMethods () {
  DynamicChannel.register({
    'devtools': (params) {
      String type = Util.getString(params['type']);
      String title = Util.getString(params['title']);
      String content = Util.getString(params['content']);
      if (type == null) return;
      InfoType infoType = InfoType.getType(type);
      if (infoType == null) return;
      devtools.insert(infoType, DevInfo(
        title: title,
        content: content
      ));
    },
  });
}
