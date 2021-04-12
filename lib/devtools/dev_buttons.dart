import 'package:flutter/material.dart';
import 'package:thresh/devtools/dev_tools.dart';

class DevButtons extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _DevButtonsState();
}

class _DevButtonsState extends State<DevButtons> {
  bool devtoolsNearFooter = true;

  @override
  Widget build(BuildContext context) {
    return Positioned(
      right: 10,
      bottom: devtoolsNearFooter ? 15 : null,
      top: devtoolsNearFooter ? null : 40,
      child: Directionality(
        textDirection: TextDirection.ltr,
        child: Row(
          children: <Widget>[
            Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(26),
                color: Colors.blue,
              ),
              child: IconButton(
                icon: Icon(
                  Icons.settings,
                  size: 24,
                  color: Colors.white,
                ),
                padding: EdgeInsets.all(1),
                onPressed: () {
                  devtools.showDevtools();
                },
              ),
            ),
            Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(26),
                color: Colors.cyan,
              ),
              margin: EdgeInsets.only(left: 5),
              child: IconButton(
                icon: Icon(
                  Icons.refresh,
                  size: 24,
                  color: Colors.white,
                ),
                padding: EdgeInsets.all(1),
                onPressed: () {
                  devtools.reloadThresh();
                },
              ),
            ),
            Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(26),
                color: Colors.blueGrey,
              ),
              margin: EdgeInsets.only(left: 5),
              child: IconButton(
                icon: Icon(
                  Icons.swap_vert,
                  size: 24,
                  color: Colors.white,
                ),
                padding: EdgeInsets.all(1),
                onPressed: () {
                  setState(
                    () {
                      devtoolsNearFooter = !devtoolsNearFooter;
                    },
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
