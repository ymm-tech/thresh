# Thresh — JS-based Flutter Dynamic UI Framework

[中文版文档](https://github.com/ymm-tech/thresh/blob/main/README.md)|[English Document](https://github.com/ymm-tech/thresh/blob/main/Documentation/README_EN.md)

Thresh provides a simple and efficient application development framework and rich components and APIs to help developers have native APP experience services in front-end development. It is a set of stable and high-performance cross-end dynamic solutions open sourced by Manbang Group .

### Demo Download Url [Thresh_v0.0.6.apk](https://github.com/ymm-tech/thresh/tree/main/example/apk/Thresh_v0.0.6.apk)

### First、Main Core Highlights

**1、Suitable for front-end development, zero-cost access (Develop language: JS/TS) .** 

**2、Complete development and debugging panel, support HotReload, second-level compilation .**

**3、Supports component level updates of Page .**

### Second、Thresh Features And Overall Architecture

The original intention of the Thresh project was to provide a completely cross-terminal dynamic solution based on Flutter, with performance reaching or even better than React Native, coupled with its multi-terminal rendering consistency and the upcoming Google Fuchsia system default development language is Flutter , shows that Thresh will be full of imagination in the future.

#### 2.1、 Main features

- **Custom DSL**, strong scalability, in the future, it will automatically convert DSL based on the sketch plug-in prototype diagram
- **Multi-terminal consistency**, with a unified rendering engine skia, better cross-terminal compatibility adaptation
- **Support Hot Reload**, easy to develop and debug,Compile and run in seconds
- **Support component level update**, excellent experience
- **Single-ended development**,reduce development costs

#### 2.2、Dynamic Common Ideas

- **Flutter compilation product replacement**

  Google originally planned to launch the Code Push solution in 2019, but later gave up. There are two main reasons: violation of app store regulations and security considerations; but currently Android can be dynamic through product replacement, but iOS cannot. .

- **Component construction**

  Dart is used to define part of the core common components, the JSON page assembled by the existing component list is issued on the platform, and the page is parsed and rendered on the end. This solution can meet light interaction scenarios, but can only support limited dynamics.

- **Custom Dart conversion + dynamic logic mapping**

  By customizing a set of Dart specifications and generating JSON through a converter to achieve dynamic updates, the performance loss is small, but the logic dynamics need to be embedded in advance, and front-end development students need a certain learning cost.

- **Custom DSL+ relies on dynamic execution of JS engine**

  Similar to RN/Weex, through custom dynamic UI description + JS engine interpretation operation conversion ideas, and finally build pages and execute dynamic logic. This solution is very friendly to front-end development, with zero learning cost, but due to running on the JS engine, there will be some performance loss.

#### 2.3、Scheme realization and ideas

In dynamic design, DSL design is particularly important. Considering the extremely strong logic dynamics and compatible isomorphic solutions, we choose JS as the development language; the core idea is to use the first of the three trees in the page rendering logic of Flutter , Constructed by JS. Among them, the JS and Flutter layer are required to complete the basic component mapping, and then the UI description is generated through the JSCore engine and passed to the UIEngine of the Dart layer. The UIEngine converts the UI description into Flutter controls, and finally renders the page.

  <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu2c.png" alt="image1" height="300" width="610" />

The dynamic Flutter framework is mainly composed of these three parts. Each part handles different logic and binding event communication to update the rendering page and event response. Its core rendering communication process: Flutter ⇋ native ⇋ js.

- **UI LAYER**

  Use the JS layer to define basic components with the same functions as Flutter, and describe the Flutter WidgetTree, and then use these components and APIs to construct front-end business pages.

- **Native LAYER**

  1. JS (JSCore/V8) engine loads and executes the UI layer package (xxx business_js.bundle), and registers passive methods to be called by JS, such as bridge, event response, exception report, etc.

  2. Maintain the NativeChannel instance, establish a channel with Flutter, as the communication medium between JS and Flutter; and maintain the UI thread and task thread queue.

- **Flutter LAYER**

  Maintain JavaScript converted to Dart Engine, and support caching, asynchronous update of components; event communication and page life cycle management, etc.

### Third、DEVELOPER GUIDE

If you want to use the flutter dynamic capability provided by Thresh in your project, you can refer to the following steps to quickly create a Thresh project.

A Thresh project consists of several parts: business code, thresh plugin, thresh-js library, and integration with Native host. The following will explain the code base, environment access and debugging one by one.

#### 3.1、Environmental preparation

Android side environment: Android Studio iOS side: XCode

JS: VSCode + node + npm/yarn

Flutter SDK: **flutter 1.22.5** [Note: The new version will be gradually supported in the future [Flutter environment installation please move](https://flutter.dev/docs/get-started/install)]

#### 3.2、Github description

| Name            | Address                                     | Develop language      | Description               |
| --------------- | ------------------------------------------- | --------------------- | ------------------------- |
| thresh          | git@github.com:ymm-tech/thresh.git          | java / oc / dart / js | Host/native/dart/js-core  |
| thresh-template | git@github.com:ymm-tech/thresh-template.git | js                    | Thresh Project Template   |
| thresh-cli      | git@github.com:ymm-tech/thresh-cli.git      | js                    | Thresh command line tools |

#### 3.3、Integration process and debugging

##### 3.3.1、Environment configuration and preparation

```
// 1、Enter the root directory of thresh and execute the following command line
# flutter clean
# flutter packages get
# flutter packages upgrade
// 2、Enter the example root directory and execute the following command line
# flutter clean
# flutter packages get
# flutter packages upgrade
# flutter run 
// 3、After successful compilation and installation, manually open the thresh app, as shown below:
```

 <img src="https://image.ymm56.com/ymmfile/ps-temporary/1eocdasu0.jpg" alt="Thresh" height="420" width="620"  />     

##### 3.3.2、Thresh operating mode and local debugging service

First load the local bundle.js package, and directly click the Start local bundle button to open the demo page in the figure above.

###### 3.3.2.1、Turn on sandbox mode

> ```
> Sandbox debugging mode description:
> 1. Start the JS server, the port number defaults to 12345
> 2. For real machine debugging, when the default address is 127.0.0.1, you need to connect to the proxy of the computer or enter the IP of the JS server (that is, the computer) directly in the LAN environment (such as 192.168.0.106)
> ```

###### 3.3.2.2、Start the local JS server

Enter the project root directory,

1. Execute the `yarn install` command to install the dependent files; [If the installation fails or other errors occur, you can try to delete the default yarn.lock file and re-execute the install command]

2. Executing the `yarn dev` command will start the project and enter the local development mode.

The local http service will be started in development mode. The default service port is 12345, and the port number can be modified in the root directory /webpack/config.js. If you are interested in js configuration and packaging, please refer to **Packaging Instructions**.

> **TIP**
>
> It is not recommended to modify the default port number, otherwise the corresponding port number of the debugging host project needs to be modified synchronously.

After the project is started, the page cannot be viewed in the browser, and it needs to be viewed and debugged in the debugging host project.

If you need to sandbox the local code in the actual host project, please execute the `yarn prod` command, which will start the local development mode in a way that can be run on the actual host. The process.env.NODE_ENV corresponding to the two startup commands are development and production respectively.

```javascript
#Open the JS code warehouse [Demo example project as an example: dynamic_flutter_demo], and enter the root directory to open the command line, execute the following command
#[Note: When installing for the first time, it is best to manually delete the yarn.lock file and install it]
ManbangMacBook-Pro:dynamic_flutter_demo Manbang$ yarn install
ManbangMacBook-Pro:dynamic_flutter_demo Manbang$ yarn prod
yarn run v1.22.4
warning package.json: No license field
$ cross-env NODE_ENV=production webpack-dev-server --config webpack/webpack.config.js
ℹ ｢wds｣: Project is running at http://0.0.0.0:12345/webpack-dev-server/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /Users/Manbang/Documents/YMM/code_flutter/dynamic_flutter_demo/src
ℹ ｢wdm｣: Hash: 014ee6cacc21626073f2
Version: webpack 4.44.2
Time: 5799ms
Built at: 2020-10-26 3:33:35 PM
                 Asset      Size  Chunks             Chunk Names
/assets/test_image.png  35.6 KiB          [emitted]  
             bundle.js   516 KiB       0  [emitted]  main
Entrypoint main = bundle.js
  [0] ./src/index.ts 1.62 KiB {0} [built]
  [1] ./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js 147 bytes {0} [built]
  [2] ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js 64 bytes {0} [built]
  [3] ./node_modules/core-js-pure/stable/instance/concat.js 76 bytes {0} [built]
 [50] ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js 66 bytes {0} [built]
 [51] ./node_modules/core-js-pure/stable/instance/for-each.js 529 bytes {0} [built]
 [89] ./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js 71 bytes {0} [built]
 [90] ./node_modules/core-js-pure/stable/object/define-property.js 83 bytes {0} [built]
 [93] ./node_modules/thresh-js/index.ts 2.49 KiB {0} [built]
 [94] ./node_modules/thresh-js/src/core/dynamicFlutter.ts 19.6 KiB {0} [built]
[164] ./node_modules/thresh-js/src/manager/BridgeManager.ts 9.83 KiB {0} [built]
[202] ./node_modules/thresh-js/src/manager/UtilManager.ts 11 KiB {0} [built]
[203] ./node_modules/thresh-js/src/manager/RenderManager.ts 18.8 KiB {0} [built]
[268] ./src/config.ts 7.24 KiB {0} [built]
[315] ./src/pages/homePage.tsx 7.1 KiB {0} [built]
    + 301 hidden modules
ℹ ｢wdm｣: Compiled successfully.

#So far the JS server started successfully！！！
```

###### 3.3.2.3、Click to start the debug page

When you see the Thresh Demos page and it is successful as shown in the figure above, if there is an exception such as the local server, it should be due to other reasons such as the failure of the proxy connection.

###### 3.3.2.4, engineering debugging

1. Hot Reload

   The current business development mode supports hot reload. When js changes, save it in real time and recompile it, and click the reload button on the host side to reload; the debugging tool provides logging tools, reloading, etc., which records the full link operation log for convenience Development and debugging.

2. JS debugging

   JS direct debugging currently only supports mac + simulator + safari browser, how to debug can refer to the steps on the Internet.

#### 3.4、Create project engineering

##### 3.4.1, create a JS project project

Like most frameworks, Thresh's js-side framework also has its own scaffolding tool. Through the scaffolding tool, a Thresh js business project can be created quickly and easily. The specific process is as follows: (Take yarn as an example. If yarn is not installed, replace it with npm Equivalent command)

###### 3.4.1.1, install scaffolding tools globally

`yarn global add thresh-js-cli`

```
ManbangMacBook-Pro:thresh_test_demo Manbang$ yarn global add thresh-js-cli
yarn global v1.22.4
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Installed "thresh-js-cli@1.0.0" with binaries:
      - thresh-cli
✨  Done in 1.34s.
```

###### 3.4.1.2、Create a project

You can create a new one by executing the thresh-cli create yourAppName command in the target directory, such as: `thresh-cli create TreshTest1`, and related dependencies will be automatically installed when the project is created.

> **TIP**
>
> For the project created by the `thresh-cli create` command, the project name will also be used as the name field in package.json, and this field will be used as the module name of the project in the host project. Therefore, if the project name is not the module name, you need to modify the name field in package.json by yourself.

```
ManbangMacBook-Pro: thresh_test_demo Manbang$ thresh-cli create ThreshTest1
Use ThreshTest1 as the project/module name? (y/N) y
Create project successfully
```

###### 3.4.1.3, start the local JS server

Repeat the above steps to start the local JS server, and now you can see that the JS server is successfully opened.

##### 3.4.2, create a host project

###### 3.4.2.1, create flutter project

> After successfully creating the flutter project by yourself and configuring the yaml source, please add dependencies in the pubspec.yaml file on the flutter side:

```
thresh: "^0.0.4" or Warehouse dependency (recommended warehouse dependency)
```

```
Android host code configuration
1. Open the created project
Application class#onCreate: Initialize engine
ThreshFlutter.startInitialization(this);
2. Create ThreshDemoActivity and inherit ThreshActivity
The implementation code can directly refer to the code in the example of the thresh warehouse branch

iOS host code configuration
1. Set the flutterInDebugMode field in userDefaults
2. Use ThreshViewController directly or create a VC inherited from ThreshViewController
```

###### 3.4.2.2、Start flutter run

The following example will appear

​         <img src="https://image.ymm56.com/ymmfile/ps-temporary/1eocdd2i5.jpg" alt="Thresh" height="420" width="420"  />

At this point, congratulations on the successful operation of your project!

### Fourth、 Local debugging-host sandbox debugging mode

Take Demo as an example for local debugging.

Run the host AppDemo project (currently the ThreshDemo project is the host demo project), after startup, it will directly connect to http://127.0.0.1:12345/ to load and execute the js script, thereby displaying the pages in ThreshDemo. The page display effect is as follows:

After cloning ThreshDemo to the local, enter the root directory and execute the `yarn install` `yarn dev` command in turn to start the local debugging of js demo. The service is started at http://127.0.0.1:12345/.

After the dependencies are added, you can directly refer to the article **Apis/Flutter** for Thresh access.

### Fifth、Advanced Guide

* [Principles of building Flutter applications using Javascript](Documentation/使用Javascript构建Flutter应用程序的原理.md)

* [Native-based three-terminal communication mechanism](Documentation/基于Native的三端通信机制.md)

* [API-Flutter](Documentation/Apis/Flutter.md)

* [API-JS Communication and Tools](Documentation/Apis/JS通信与工具.md)

* [API-JS page rendering](Documentation/Apis/JS页面渲染.md)

* [API-Native](Documentation/Apis/Native.md)

* [Packing Instructions](Documentation/打包说明.md)

* [Basic Components](Documentation/基础组件/组件说明.md) The following is the basic component documents:

  | [Container](Documentation/基础组件/Container.md) | [AppBar](Documentation/基础组件/AppBar.md)         | [Page](Documentation/基础组件/Page.md)                       | [Button](Documentation/基础组件/Button.md) |
  | ------------------------------------------------ | -------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------ |
  | [Checkbox](Documentation/基础组件/Checkbox.md)   | [Icon](Documentation/基础组件/Icon.md)             | [Image](Documentation/基础组件/Image.md)                     | [Input](Documentation/基础组件/Input.md)   |
  | [ListView](Documentation/基础组件/ListView.md)   | [NativeView](Documentation/基础组件/NativeView.md) | [NestScrollView](Documentation/基础组件/NestScrollView.md)   | [Radio](Documentation/基础组件/Radio.md)   |
  | [Refresh](Documentation/基础组件/Refreshmd)      | [ScrollView](Documentation/基础组件/ScrollView.md) | [SwipeActionsView](Documentation/基础组件/SwipeActionsView.md) | [Text](Documentation/基础组件/Text.md)     |

### Sixth、Access case

The following are the applications compiled by Thresh collected on this site for everyone to visit and learn.
If you want to submit a work, or request to modify or delete the applications listed here, please submit [PR]

 <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu7c.png" alt="运满满" style="zoom:67%;" />                                                       <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu7c.png" alt="运满满" style="zoom:67%;" />

### YMM Driver                              YMM Shipper

Mobile phone distribution artifact.                 Mobile phone distribution artifact.

  -  [iOS](https://apps.apple.com/us/app/apple-store/id766046464)  - [Android](https://imagecdn.ymm56.com/ymmfile/app-apk-biz/73de2567-2621-4935-855b-afc97d7a8733.apk)                                                [iOS](https://apps.apple.com/us/app/apple-store/id766046464)  - [Android](https://imagecdn.ymm56.com/ymmfile/app-apk-biz/73de2567-2621-4935-855b-afc97d7a8733.apk)

##### Application core scenario [Total daily average PV exceeds 10 million, js error rate is less than one in 100,000]

  <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu46.png" alt="Thresh" style="zoom: 50%;" />

### Seventh、Contact US

If you encounter problems during use, or have good suggestions, please feel free to send us. For detailed instructions, please refer to [Contribution Guide](CONTRIBUTING.md)

Friends who are interested in Thresh can join the group for communication. Dingding group:【id：31835161】

​    <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu7e.jpg" alt="Thresh" height="300" width="240" />

### Eighth、Project author

* Weishun.xu - Core developer - [SeaShrimper](https://github.com/SeaShrimper)
* Liang.xu - Core developer - [TroyXL](https://github.com/TroyXL)
* Wei.zhang - Core developer - [snowfall]( https://github.com/snowfall)
* Jingdong.tang - Core developer - [JD-Tang](https://github.com/JD-Tang)
* Zheng.zhang - Core developer - [long831302](https://github.com/long8313002/)
* Junking.mao - Core developer - [maojunlong](https://github.com/maojunlong)

### Ninth、Open source agreement

Thresh follows the [MIT](https://opensource.org/licenses/MIT) open source license agreement.

### Tenth、Thanks

Reference and open source projects used

| Project                                                 | Open source agreement                                        | Description         |
| ------------------------------------------------------- | ------------------------------------------------------------ | ------------------- |
| [Flutter][https://github.com/flutter/flutter.git]       | [MIT](http://opensource.org/licenses/MIT)                    | dart sdk engine.etc |
| [Maven][6]                                              | [Apache License](https://github.com/apache/maven/blob/master/LICENSE) | Dependent library   |
| [ReactNative][https://github.com/facebook/react-native] | [MIT](http://opensource.org/licenses/MIT)                    | Runtime mechanism   |
| [J2V8][https://github.com/eclipsesource/J2V8.git]       | [Eclipse Public License - v 1.0](https://www.eclipse.org/legal/epl-v10.html) | Android v8          |