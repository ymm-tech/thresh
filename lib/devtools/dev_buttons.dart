import 'package:flutter/material.dart';
import 'package:thresh/devtools/dev_tools.dart';
import 'package:thresh/framework/core/dynamic_app.dart';

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
                color: Colors.redAccent,
              ),
              margin: EdgeInsets.only(left: 5),
              child: IconButton(
                icon: Icon(
                  Icons.laptop_chromebook,
                  size: 24,
                  color: Colors.white,
                ),
                padding: EdgeInsets.all(1),
                onPressed: () {
                  buildRemoteAddressDialog();
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

  void buildRemoteAddressDialog() {
    showGeneralDialog(
      context: dynamicApp.context,
      barrierDismissible: false,
      transitionDuration: const Duration(milliseconds: 100),
      pageBuilder: (BuildContext context, Animation<double> animation,
          Animation<double> secondaryAnimation) {
        final TextEditingController controller =
            TextEditingController(text: devtools.remoteDevtoolAddress);
        return AlertDialog(
          title: Text('修改远程调试地址'),
          content: Padding(
            padding: EdgeInsets.symmetric(vertical: 20),
            child: TextField(
              controller: controller,
              maxLines: 1,
            ),
          ),
          actions: <Widget>[
            FlatButton(
              child: Text('取消'),
              onPressed: () {
                Navigator.pop(context);
              },
            ),
            FlatButton(
              child: Text('确认'),
              onPressed: () {
                devtools.setRemoteDevtool(controller.text);
                Navigator.pop(context);
              },
            ),
          ],
        );
      },
    );
  }
}
