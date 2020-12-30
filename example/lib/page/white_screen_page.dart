import 'package:flutter/material.dart';
import 'package:thresh/thresh.dart';
import 'package:thresh/devtools/dev_tools.dart';

class WhiteScreenPage extends StatefulWidget {
  @override
  _WhiteScreenPageState createState() => _WhiteScreenPageState();
}

class _WhiteScreenPageState extends State<WhiteScreenPage> {
  bool canReload = false;
  Color orange = Color(0xFFFA871E);

  @override
  void initState() {
    super.initState();
    canReload = dynamicApp?.canReload ?? false;
  }

  @override
  Widget build(BuildContext context) {
    MediaQueryData data = MediaQuery.of(context);
    return Scaffold(
      backgroundColor: Color(0xfff2f2f2),
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(44),
        child: AppBar(
          backgroundColor: Colors.white,
          leading: Center(
            child: GestureDetector(
              child: Icon(Icons.arrow_back_ios, color: Color(0xff666666)),
              onTap: () async {
                if (Navigator.canPop(context)) {
                  Navigator.pop(context);
                } else {
                  dynamicChannel.callNative(
                    module: 'base',
                    method: 'closeWindow'
                  );
                }
              },
            ),
          ),
          // title: Text(
          //   '异常处理',
          //   style: TextStyle(
          //     fontSize: 16,
          //     fontWeight: FontWeight.normal,
          //     color: Colors.white,
          //   ),
          // ),
          // centerTitle: true,
          elevation: 0.5,
        ),
      ),
      body: Container(
        alignment: Alignment.center,
        padding: EdgeInsets.only(top: data.size.height * 0.25),
        child: Column(
          children: <Widget>[
            Image.asset(
              'packages/dynamic_flutter_host/assets/error_net.png',
              width: data.size.width * 0.5,
            ),
            Container(
              margin: EdgeInsets.only(top: 20),
              child: Text(
                '网络出问题了，刷新一下试试吧',
                style: TextStyle(color: Color(0xff666666), fontSize: 16),
              ),
            ),
            canReload ? GestureDetector(
              child: Container(
                width: 108,
                height: 32,
                margin: EdgeInsets.only(top: 20),
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(4),
                  color: orange,
                ),
                child: Text(
                  '刷新',
                  style: TextStyle(color: Colors.white, fontSize: 14),
                ),
              ),
              onTap: () {
                devtools.reloadThresh(reloadContext: context);
              },
            ) : Container()
          ],
        ),
      )
    );
  }
}
