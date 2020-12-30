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
import 'package:thresh/devtools/dev_tools.dart';
import 'package:thresh/devtools/panel_content.dart';

class DevPanel extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return DevPanelState();
  }
}

class DevPanelState extends State <DevPanel> with SingleTickerProviderStateMixin {
  TabController controller;
  int tabIndex;


  @override
  void initState() {
    super.initState();
    tabIndex = devtools.lastPanelIndex;
    controller = TabController(initialIndex: tabIndex, length: devtools.panels.length, vsync: this);
    devtools.panelState = this;
  }

  @override
  void didUpdateWidget(DevPanel oldWidget) {
    super.didUpdateWidget(oldWidget);
    devtools.panelState = this;
  }

  @override
  void dispose() {
    super.dispose();
    controller = null;
    devtools.panelIsShow = false;
    devtools.panelState = null;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: BoxConstraints.expand(),
      color: Colors.black54,
      child: ClipRRect(
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(15),
          topRight: Radius.circular(15),
        ),
        child: Container(
          constraints: BoxConstraints.expand(),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.only(
              topLeft: Radius.circular(15),
              topRight: Radius.circular(15),
            ),
          ),
          margin: EdgeInsets.only(top: 80),
          child: Column(
            children: <Widget>[
              buildTabBar(),
              buildTabView(),
              buildTabBottom(),
            ],
          ),
        ),
      ),
    );
  }

  Widget buildTabBar() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Expanded(
          child: Container(
            child: TabBar(
              tabs: devtools.panels.map((InfoType tab) => Tab(text: tab.type)).toList(),
              isScrollable: true,
              controller: controller,
              indicatorColor: devtools.panels[tabIndex] != InfoType.error ? Colors.blue : Colors.red,
              labelColor: devtools.panels[tabIndex] != InfoType.error ? Colors.blue : Colors.red,
              labelStyle: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
              unselectedLabelColor: Colors.grey,
              unselectedLabelStyle: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.normal,
              ),
              onTap: (index) {
                tabIndex = index;
                devtools.lastPanelIndex = index;
                this.setState(() {});
              },
            ),
          ),
        ),
        Container(
          color: Colors.blue,
          margin: EdgeInsets.only(left: 10),
          width: 1,
          height: 15,
        ),
        Container(
          width: 40,
          alignment: Alignment.center,
          child: IconButton(
            icon: const Icon(Icons.close),
            iconSize: 18,
            color: Colors.blue,
            onPressed: () {
              Navigator.maybePop(context);
            },
          ),
        ),
      ],
    );
  }

  Widget buildTabView() {
    return Expanded(
      child: TabBarView(
        controller: controller,
        children: devtools.panels.map((InfoType type) => PanelContent(type)).toList(),
      ),
    );
  }

  Widget buildTabBottom() {
    TextStyle style = TextStyle(
      color: Colors.white
    );
    return Container(
      padding: EdgeInsets.fromLTRB(20, 5, 20, 5),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Expanded(
            child: MaterialButton(
              child: Text('清空当前', style: style,),
              color: Colors.orange,
              onPressed: () {
                devtools.clear(current: true);
              },
            ),
          ),
          Container(width: 20),
          Expanded(
            child: MaterialButton(
              child: Text('清空所有', style: style,),
              color: Colors.red,
              onPressed: () {
                devtools.clear();
              },
            ),
          ),
        ],
      ),
    );
  }
}
