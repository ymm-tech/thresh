# Flutter Apis

Flutter 端提供了简便的 api 供开发者快速便捷得接入 Thresh.

## 初始化

#### 引入模块

```dart
import 'package:thresh/thresh.dart';
```



#### Channel 初始化

DF 中的 channel 在使用时会自动初始化，但是也可以通过该方法在项目启动时手动初始化。

```dart
initThreshChannel();
```



#### ThreshApp 初始化

启动一个动态 Flutter App，必须调用 `initThreshApp()` 来进行初始化，初始化成功后会返回当前 Thresh App 的实例，是 Widget 类型，在拿到该实例后可以手动调用 `runApp()` 来运行，也可以在初始化中让框架主动调用 `runApp()`.

> **TIP**
>
> 是否在外部手动调用 `runApp()` 由配置参数决定。请保证在一个项目中不会多次调用 `runApp()`.

该方法具有很多的配置参数，参数说明如下：

```dart
/// 初始化 Thresh App，所有配置参数均为可选
/// [runApp] 是否允许框架内部调用 runApp() 方法，默认 true，如不允许则需要拿到初始化方法返回值后，在框架外手动调用
/// [debugMode] 当前 Thresh App 是否为调试模式，默认 false，如设为 true 将显示调试面板
/// [appName] 应用名称
/// [mainApp] 如果要将 Thresh App 作为已有 Flutter 应用的子页面显示，则将已有 Flutter 页面传入该参数
/// [defaultRoute] Thresh App 的默认路由，初始化后会注入到 js 中作为注入路由信息
/// [notFoundPage] 404 页面构造器，返回 Widget
/// [onWhiteScreen] 白屏页面构造器，返回 Widget
/// [placeholderPageBuilder] 在 Thresh App 的首屏显示出来之前的占位屏页面构造器，以提供给用户更好的体验，返回 Widget
/// [errorHandler] Thresh App 运行过程中发生异常时的处理方法，可以做异常上报
/// [showWhiteScreenWhenWaitingForMillionSeconds] Thresh App 首屏显示等待时间，单位 ms，默认 3000ms,超时后会显示白屏页面；该参数在 debugMode 和存在 mainApp 以及设为 0/null 时将无效
Widget initThreshApp({
  runApp: true,
  debugMode: false,
  String appName,
  Widget mainApp,
  RouteInfo defaultRoute,
  NotFoundPageBuilder notFoundPage,
  OnWhiteScreen onWhiteScreen,
  PlaceholderBuilder placeholderBuilder,
  ErrorHandler errorHandler,
  int showWhiteScreenWhenWaitingForMillionSeconds
})
```



## Bridge 能力

#### 引入模块

```dart
import 'package:thresh/thresh.dart';
```



#### 使用

```dart
Future<dynamic> dynamicChannel.callNative(
	@required String module,
  @required String method,
  Map<String, dynamic> params
)
```



## 调试能力

#### 引入模块

```dart
import 'package:thresh/devtools/dev_tools.dart';
```



#### 使用

```dart
/// 向指定调试面板中插入一条数据
/// [type] 需要插入到的面板类型，目前一共支持 log warn error network bridge track render channel event debug 十中类型
/// [info] 需要在调试面板中显示的信息
devtools.insert(InfoType type, DevInfo info)
  
/// 向调试面板的 debug 面板中插入一条数据
/// [methodName] 当前调用该方法的方法名，便于快速定位
/// [fileName] 当前调用该方法的文件名，便于快速定位
/// [debugType] 当前 debug 的自定义类型，便于查看分类
/// [otherInfos] 其他需要输出的信息
devtools.debug(
	String methodName,
  String fileName,
  String debugType,
  [ String otherInfos ]
)
  
/// 重载当前 DF App 并重新执行 js 脚本，请谨慎使用该方法！
/// [reloadContext] 重载 DF App 的 context，请注意，再框架外部手动调用该方法时请传入外部页面当前的正确的 context
devtools.reloadThresh({ BuildContext reloadContext })
```

