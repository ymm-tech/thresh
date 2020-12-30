import 'package:flutter/material.dart';
import 'package:thresh/thresh.dart';
import 'package:thresh/devtools/dev_tools.dart';

class NotFoundPage extends StatefulWidget {
  NotFoundPage({
    this.allPath = '',
    this.nextPath = '',
    this.prevPath = '',
    this.url,
    this.debug = false,
  });
  @override
  _NotFoundPageState createState() => _NotFoundPageState();

  final bool debug;
  final String allPath;
  final String nextPath;
  final String prevPath;
  final String url;
}

class _NotFoundPageState extends State<NotFoundPage> {
  String title = '404';
  @override
  void initState() {
    super.initState();
  }

  String getPageName(String str) {
    return str == null ? '' : str.replaceAll('/', '_');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(44),
        child: AppBar(
          leading: IconButton(
            icon: Icon(
              Icons.arrow_back_ios,
              size: 24,
              color: Colors.white,
            ),
            color: Colors.white,
            onPressed: () async {
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
          actions: widget.debug ? <Widget>[
            IconButton(
              icon: Icon(
                Icons.refresh,
                size: 24,
                color: Colors.white,
              ),
              onPressed: () async {
                devtools.reloadThresh(reloadContext: context);
              },
            )
          ] : [],
          title: Text(
            title ?? this.title ?? '',
            style: TextStyle(
              fontSize: 18,
              color: const Color(0xffffffff),
            ),
          ),
          centerTitle: true,
          elevation: 0,
        ),
      ),
      body: Center(
        child: Padding(
          padding: EdgeInsets.all(25),
          child: Column(
            children: <Widget>[
              Image.asset('packages/flutter_common/assets/404.png'),
              Text(
                '404',
                style: TextStyle(
                  fontSize: 50,
                  color: Colors.grey,
                ),
              ),
              Text(
                'to: ${widget.nextPath ?? ''}',
                style: TextStyle(
                  fontSize: 12,
                  color: Colors.grey,
                ),
              ),
              Text(
                'from: ${widget.url ?? widget.prevPath}',
                style: TextStyle(
                  fontSize: 12,
                  color: Colors.grey,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
