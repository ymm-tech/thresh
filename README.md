# Thresh — 基于JS的Flutter动态化方案

[中文版文档](README.md)|[English Document](Documentation/README-EN.md)

Thresh提供了一个简单、高效的应用开发框架和丰富的组件及API，帮助开发者在前端开发中具有原生 APP 体验的服务，是满帮集团开源的一套稳定、高性能的跨端动态化方案。

### 一、Thresh特性与整体架构

Thresh项目推出的初心是为了能提供一种基于Flutter的完全跨端动态化方案，性能能达到甚至优于React Native，再加上其多端渲染一致性以及即将推出的Google Fuchsia系统默认开发语言为Flutter，都表明Thresh未来将会充满想象力，也将极大可能会成为替代React Native等的一种长期方案。

#### 1.1、 主要特性

- **自定义DSL**，扩展性强，未来会做基于sketch插件原型图自动转换DSL
- **多端一致性**，拥有统一的渲染引擎skia，较好的跨端兼容性适配
- **支持Hot Reload**，便于开发调试，秒级编译运行
- **支持组件级别更新**，极佳的体验性
- **单端开发**，降低开发成本

#### 1.2、动态化常见思路

- **Flutter编译产物替换**

  Google原本打算在2019年推出Code Push方案，后来放弃了，主要两个原因：违反应用商店的规定和安全方面考虑；但目前android是可以通过产物替换来做到动态化，iOS端则无法做到。

- **组件化搭建**

  通过Dart来定义部分核心通用组件，在平台下发已有的组件列表拼装的页面JSON，端上再通过解析渲染成页面。这种方案能满足轻交互场景，但只能支持有限动态性。

- **自定义Dart转换+动态逻辑映射**

  通过自定义一套Dart规范以及通过转换器生成JSON来做到动态更新，性能损失小，但是逻辑动态性需要提前预埋，且前端开发同学需要一定的学习成本。

- **自定义DSL+依赖JS引擎的动态执行**

  类似于RN/Weex，通过自定义动态化UI描述 + JS引擎的解释运行转换思路，最终构建成页面和执行动态逻辑。这个方案对于前端开发非常友好，零学习成本，但是由于在JS引擎运行，会有一些性能损耗。 


#### 1.3、方案实现与思路

在动态化设计中，DSL 设计尤其重要，考虑极强的逻辑动态性以及兼容同构方案我们选定JS作为开发语言；核心思路是把 Flutter 的页面渲染逻辑中的三棵树中的第一棵，通过JS 来构造。这其中要完成JS与 Flutter 层完成基础组件映射，再通过JSCore引擎来生成UI描述，并传递给Dart层的 UIEngine，UIEngine 把UI描述转换为 Flutter 控件，最终渲染成页面。

  <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu2c.png" alt="image1" height="300" width="610" />

动态化Flutter 框架主要由这三部分构成，每一部分都处理不同的逻辑和绑定事件通信来更新渲染页面、事件响应，其核心渲染通信流程：Flutter ⇋ native ⇋ js 。

- **UI层**

  运用JS层定义了与Flutter同功能的基础组件，并对Flutter WidgetTree进行描述，再通过这些组件和API来构造成前端业务页面。

- **Native层**

  1、JS（JSCore/V8）引擎来加载并执行UI层包(xxx业务_js.bundle)，注册被动方法来被JS 调用，如bridge、事件响应、异常上报等。

  2、维护NativeChannel实例，与Flutter建立通道，作为JS 与 Flutter通信的媒介；以及维护UI 线程、任务线程队列。

- **Flutter层**

  维护JavaScript转换为Dart的Engine，并支持缓存，异步更新组件；事件通信以及页面的生命周期管理等。

### 二、接入指南

如果你要在项目中使用 Thresh 提供的 flutter 动态化能力，可以参考以下步骤快速创建一个Thresh 项目。

一个 Thresh项目由 几个部分构成，分别是：业务代码、thresh插件、thresh-js库、与 Native宿主集成。下面将会对代码库、环境接入以及调试一一做出说明。

#### 2.1、环境准备

Android 端环境 ：Android Studio  iOS 端：XCode

JS：VSCode + node + npm/yarn

Flutter SDK：**flutter1.9.1-hotfix.6**【备注：新版本后续会逐步支持 [Flutter环境安装请移步](https://flutter.dev/docs/get-started/install)】

#### 2.2、仓库说明

| 仓库名称        | 地址                                        | 开发语言              | 备注                     |
| --------------- | ------------------------------------------- | --------------------- | ------------------------ |
| thresh          | git@github.com:ymm-tech/thresh.git          | java / oc / dart / js | 宿主/native/dart/js-core |
| thresh-template | git@github.com:ymm-tech/thresh-template.git | js                    | JS 脚手架模板项目        |
| thresh-cli      | git@github.com:ymm-tech/thresh-cli.git      | js                    | JS 脚手架                |

#### 2.3、集成流程与调试

##### 2.3.1、环境配置与准备

```
// 1、进入thresh根目录下，执行以下命令行
# flutter clean
# flutter packages get
# flutter packages upgrade
// 2、进入example根目录下，执行以下命令行
# flutter clean
# flutter packages get
# flutter packages upgrade
# flutter run 
// 3、编译、安装成功后，手动打开thresh app，如下所示：
```

 <img src="https://image.ymm56.com/ymmfile/ps-temporary/1eocdasu0.jpg" alt="Thresh" height="420" width="620"  />     

##### 2.3.2、Thresh运行模式与本地调试服务

首先加载本地的bundle.js包，直接点击启动本地bundle 按钮，即可打开上图demo页面。

###### 2.3.2.1、打开沙盒模式

> ```
> 沙盒调试模式说明：
> 1、启动JS服务器，端口号默认12345 
> 2、真机调试默认127.0.0.1地址时需连上电脑的代理或者局域网环境直接输入JS服务器（即电脑）的IP（如192.168.0.106）
> ```

###### 2.3.2.2、启动本地JS服务器

进入项目根目录，

1、执行 `yarn install`命令，安装依赖文件；【如出现安装失败或其他报错，可尝试删除默认yarn.lock文件并重新执行install命令】

2、执行 `yarn dev` 命令将会启动项目并进入本地开发模式。

开发模式下会启动本地 http 服务，默认服务端口为 12345，端口号可以在根目录 /webpack/config.js 中修改。对于 js 端相关配置与打包感兴趣可以参考 **打包说明**。

> **TIP**
>
> 不建议对默认端口号进行修改，否则也需要同步修改调试宿主工程的相应端口号。

项目启动后无法在浏览器中查看页面，需要在调试宿主工程中进行查看与调试。

如需在实际宿主工程中沙盒调试本地代码，请执行 `yarn prod` 命令，将会以可运行于实际宿主中的方式启动本地开发模式。两种启动命令对应的 process.env.NODE_ENV 分别为 development 和 production.

```javascript
#打开JS代码仓库【演示示例工程为例： dynamic_flutter_demo】，并且进入根目录下打开命令行，执行以下命令
#【备注：首次安装时，最好先手动删除下yarn.lock文件并且install下】 
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

#至此JS服务器启动成功！！！
```

###### 2.3.2.3、点击启动调试页面

当看到跟Thresh Demos 页面且如上图所示即成功，如出现本地服务器等异常，应该是代理没连成功等其他原因。

###### 2.3.2.4、工程调试

1. Hot Reload

   当前业务开发模式支持hot reload，js有改动时，实时保存后重新编译，在宿主侧点击reload按钮重新加载即可；调试工具提供了日志工具、重新加载等，里面记录了全链路操作日志方便开发调试。

2. JS调试

   JS直接调试目前只支持 mac + 模拟器 + safari浏览器，如何调试可以参考网上的步骤。

#### 2.4、创建项目工程

##### 2.4.1、创建JS项目工程 

和大部分框架一样，Thresh 的 js 端框架也有自己的脚手架工具，通过脚手架工具可以便捷快速地创建一个 Thresh js 业务工程，具体流程如下：(以 yarn 为例，如未安装 yarn，可替换为 npm 的等价命令)

###### 2.4.1.1、全局安装脚手架工具

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

###### 2.4.1.2、创建项目工程

在目标目录中执行 thresh-cli create yourAppName 命令即可创建一个新的，如：`thresh-cli create TreshTest1`，项目创建的同时会自动安装相关依赖。

> **TIP**
>
> `thresh-cli create` 命令创建的项目，其项目名会同时作为 package.json 中的 name 字段，并且该字段会作为项目在宿主工程中的模块名被使用。因此如项目名不是模块名，需要自行修改 package.json 中的 name 字段。

```
ManbangMacBook-Pro:thresh_test_demo Manbang$ thresh-cli create ThreshTest1
使用ThreshTest1作为项目/模块名称? (y/N) y
创建项目成功
```

###### 2.4.1.3、启动本地JS服务器

再重复下上面的启动本地JS服务器步骤即可，至此看到打开JS服务器成功。

##### 2.4.2、创建宿主工程

###### 2.4.2.1、创建flutter工程

> 自行创建flutter工程项目成功后并配置yaml源，Flutter 端请在 pubspec.yaml 文件中添加依赖项：

```
thresh: "^1.0.0"
```

```
Android端宿主代码配置
1、打开已创建的工程
Application类#onCreate：初始化engine
ThreshFlutter.startInitialization(this);
2、创建ThreshDemoActivity并继承ThreshActivity
实现代码可直接参考thresh仓库分支的example里面代码

iOS端宿主代码配置
1、设置userDefaults中flutterInDebugMode字段
2、直接使用ThreshViewController或者创建继承自ThreshViewController的VC即可
```

###### 2.4.2.2、启动flutter run 

会出现以下示例

​         <img src="https://image.ymm56.com/ymmfile/ps-temporary/1eocdd2i5.jpg" alt="Thresh" height="420" width="420"  />

至此，恭喜您项目运行成功！

### 三、本地调试 - 宿主沙盒调试模式

本地调试以 Demo 作为说明示例。

运行宿主 AppDemo 工程（目前以 ThreshDemo 项目为宿主 demo 工程），启动后将会直接连接到 http://127.0.0.1:12345/ 加载并执行 js 脚本，从而显示 ThreshDemo 中的页面。页面显示效果如下：

将 ThreshDemo 克隆到本地后，进入根目录，依次执行 `yarn install`  `yarn dev` 命令即可启动 js demo 的本地调试，服务启动于 http://127.0.0.1:12345/.

依赖项添加完成后，可直接参考 **Apis/Flutter** 一文进行 Thresh 的接入。

### 四、进阶指南

* [使用Javascript构建Flutter应用程序的原理](Documentation/使用Javascript构建Flutter应用程序的原理.md)

* [基于Native的三端通信机制](Documentation/基于Native的三端通信机制.md)

* [API-Flutter](Documentation/Apis/Flutter.md)

* [API-JS通信与工具](Documentation/Apis/JS通信与工具.md)

* [API-JS页面渲染](Documentation/Apis/JS页面渲染.md)

* [API-Native](Documentation/Apis/Native.md)

* [打包说明](Documentation/打包说明.md)

* [基础组件](Documentation/基础组件/组件说明.md) 以下为基础组件文档：

  | [Container](Documentation/基础组件/Container.md) | [AppBar](Documentation/基础组件/AppBar.md) | [Page](Documentation/基础组件/Page.md)            | [Button](Documentation/基础组件/Button.md) |
  | --------------------------------------- | ----------------------------------------- | ----------------------------------------------------- | --------------------------------- |
  | [Checkbox](Documentation/基础组件/Checkbox.md) | [Icon](Documentation/基础组件/Icon.md) | [Image](Documentation/基础组件/Image.md)          | [Input](Documentation/基础组件/Input.md) |
  | [ListView](Documentation/基础组件/ListView.md) | [NativeView](Documentation/基础组件/NativeView.md) | [NestScrollView](Documentation/基础组件/NestScrollView.md) | [Radio](Documentation/基础组件/Radio.md) |
  | [Refresh](Documentation/基础组件/Refreshmd) | [ScrollView](Documentation/基础组件/ScrollView.md) | [SwipeActionsView](Documentation/基础组件/SwipeActionsView.md) | [Text](Documentation/基础组件/Text.md) |

### 五、接入案例

以下是本站收集的使用 Thresh 编写的应用，供大家参观学习。
如果你想提交作品，或是要求修改、删除这里列出的应用，请提出 [PR](www.ymm56.com)。

 <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu7c.png" alt="运满满" style="zoom:67%;" />                                                       <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu7c.png" alt="运满满" style="zoom:67%;" />

### 运满满司机端                              运满满货主端

手机配货神器。                                                     手机配货神器。

  - [Android](https://imagecdn.ymm56.com/ymmfile/app-apk-biz/73de2567-2621-4935-855b-afc97d7a8733.apk)                                                       [iOS](https://apps.apple.com/us/app/apple-store/id766046464)  - [Android](https://imagecdn.ymm56.com/ymmfile/app-apk-biz/73de2567-2621-4935-855b-afc97d7a8733.apk)

##### 应用核心场景【总日均PV超千万，js错误率低于十万分之一】

  <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu46.png" alt="Thresh" style="zoom: 50%;" />

### 六、联系我们

如果你在使用过程中遇到问题，或者有好的建议，欢迎给我们提。详细说明请移步 [贡献指南](CONTRIBUTING.md)

对Thresh有兴趣的小伙伴，可以加群交流 钉钉群：

​    <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu7e.jpg" alt="Thresh" height="300" width="240" />

### 七、项目作者

* 徐维顺 - 核心开发者 - [SeaShrimper](https://github.com/SeaShrimper)
* 徐亮 - 核心开发者 - [TroyXL](https://github.com/TroyXL)
* 章伟 - 核心开发者 - [snowfall]( https://github.com/snowfall)
* 汤靖咚 - 核心开发者 - [JD-Tang](https://github.com/JD-Tang)
* 茆俊龙 - 主要贡献者 - [maojunlong](https://github.com/maojunlong)

### 八、开源协议

Thresh遵循[MIT](https://opensource.org/licenses/MIT)开源许可证协议。

### 九、致谢

参考以及使用的开源项目

| 项目名称                                                | 开源协议                                                     | 说明              |
| ------------------------------------------------------- | ------------------------------------------------------------ | ----------------- |
| [Flutter][https://github.com/flutter/flutter.git]       | [MIT](http://opensource.org/licenses/MIT)                    | dart sdk engine等 |
| [Maven][6]                                              | [Apache License](https://github.com/apache/maven/blob/master/LICENSE) | 依赖库            |
| [ReactNative][https://github.com/facebook/react-native] | [MIT](http://opensource.org/licenses/MIT)                    | jsc加载等         |
| [J2V8][https://github.com/eclipsesource/J2V8.git]       | [Eclipse Public License - v 1.0](https://www.eclipse.org/legal/epl-v10.html) | Android v8        |
