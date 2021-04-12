# Thresh — 基于JS的Flutter动态化方案

[中文版文档](README.md)|[English Document](https://github.com/ymm-tech/thresh/blob/main/Documentation/README_EN.md)

Thresh提供了一个简单、高效的应用开发框架和丰富的组件及API，帮助开发者在前端开发中具有原生 APP 体验的服务，是满帮集团开源的一套稳定、高性能的跨端动态化方案。

### 体验包下载地址 [Thresh_v0.0.6.apk](https://github.com/ymm-tech/thresh/tree/main/example/apk/Thresh_v0.0.6.apk)

### 一、主要核心亮点

**1、适用于前端开发，零成本接入（开发语言：JS/TS）** 

**2、完善的开发调试面板， 支持HotReload，秒级编译**

**3、页面支持组件级别更新**

### 二、Thresh特性与整体架构

Thresh项目推出的初心是为了能提供一种基于Flutter的完全跨端动态化方案，性能能达到甚至优于React Native，再加上其多端渲染一致性以及即将推出的Google Fuchsia系统默认开发语言为Flutter，都表明Thresh未来将会充满想象力。

#### 2.1、 主要特性

- **自定义DSL**，扩展性强，未来会做基于sketch插件原型图自动转换DSL
- **多端一致性**，拥有统一的渲染引擎skia，较好的跨端兼容性适配
- **支持Hot Reload**，便于开发调试，秒级编译运行
- **支持组件级别更新**，极佳的体验性
- **单端开发**，降低开发成本

#### 2.2、动态化常见思路

- **Flutter编译产物替换**

  Google原本打算在2019年推出Code Push方案，后来放弃了，主要两个原因：违反应用商店的规定和安全方面考虑；但目前android是可以通过产物替换来做到动态化，iOS端则无法做到。

- **组件化搭建**

  通过Dart来定义部分核心通用组件，在平台下发已有的组件列表拼装的页面JSON，端上再通过解析渲染成页面。这种方案能满足轻交互场景，但只能支持有限动态性。

- **自定义Dart转换+动态逻辑映射**

  通过自定义一套Dart规范以及通过转换器生成JSON来做到动态更新，性能损失小，但是逻辑动态性需要提前预埋，且前端开发同学需要一定的学习成本。

- **自定义DSL+依赖JS引擎的动态执行**

  类似于RN/Weex，通过自定义动态化UI描述 + JS引擎的解释运行转换思路，最终构建成页面和执行动态逻辑。这个方案对于前端开发非常友好，零学习成本，但是由于在JS引擎运行，会有一些性能损耗。 

#### 2.3、方案实现与思路

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

### 三、接入指南

如果你要在项目中使用 Thresh 提供的 flutter 动态化能力，可以参考以下步骤快速创建一个Thresh 项目。

一个 Thresh项目由 几个部分构成，分别是：业务代码、thresh插件、thresh-js库、与 Native宿主集成。下面将会对代码库、环境接入以及调试一一做出说明。

#### 3.1、环境准备

Android 端环境 ：Android Studio  iOS 端：XCode

JS：VSCode + node + npm/yarn

Flutter SDK：**flutter 1.22.5 **【备注：新版本后续会逐步支持 [Flutter环境安装请移步](https://flutter.dev/docs/get-started/install)】

#### 2.2、仓库说明

| 仓库名称        | 地址                                        | 开发语言              | 备注                     |
| --------------- | ------------------------------------------- | --------------------- | ------------------------ |
| thresh          | git@github.com:ymm-tech/thresh.git          | java / oc / dart / js | 宿主/native/dart/js-core |
| thresh-template | git@github.com:ymm-tech/thresh-template.git | js                    | JS 脚手架模板项目        |
| thresh-cli      | git@github.com:ymm-tech/thresh-cli.git      | js                    | JS 脚手架                |

#### 3.3、集成流程与调试

接入比较简单，[请参考开发手册](DEVELOPER_GUIDE.md)

### 四、进阶指南

* [使用Javascript构建Flutter应用程序的原理](Documentation/使用Javascript构建Flutter应用程序的原理.md)

* [基于Native的三端通信机制](Documentation/基于Native的三端通信机制.md)

* [API-Flutter](Documentation/Apis/Flutter.md)

* [API-JS通信与工具](Documentation/Apis/JS通信与工具.md)

* [API-JS页面渲染](Documentation/Apis/JS页面渲染.md)

* [API-Native](Documentation/Apis/Native.md)

* [打包说明](Documentation/打包说明.md)

* [基础组件](Documentation/基础组件/组件说明.md) 以下为基础组件文档：

  | [Container](Documentation/基础组件/Container.md) | [AppBar](Documentation/基础组件/AppBar.md)         | [Page](Documentation/基础组件/Page.md)                       | [Button](Documentation/基础组件/Button.md) |
  | ------------------------------------------------ | -------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------ |
  | [Checkbox](Documentation/基础组件/Checkbox.md)   | [Icon](Documentation/基础组件/Icon.md)             | [Image](Documentation/基础组件/Image.md)                     | [Input](Documentation/基础组件/Input.md)   |
  | [ListView](Documentation/基础组件/ListView.md)   | [NativeView](Documentation/基础组件/NativeView.md) | [NestScrollView](Documentation/基础组件/NestScrollView.md)   | [Radio](Documentation/基础组件/Radio.md)   |
  | [Refresh](Documentation/基础组件/Refresh.md)     | [ScrollView](Documentation/基础组件/ScrollView.md) | [SwipeActionsView](Documentation/基础组件/SwipeActionsView.md) | [Text](Documentation/基础组件/Text.md)     |
  | [Refresh](Documentation/基础组件/Refresh.md)     | [Refresh](Documentation/基础组件/Refresh.md)       | [Refresh](Documentation/基础组件/Refresh.md)                 |                                            |

### 五、接入案例

以下是本站收集的使用 Thresh 编写的应用，供大家参观学习。
如果你想提交作品，或是要求修改、删除这里列出的应用，请提出 [PR](www.ymm56.com)。

 <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu7c.png" alt="运满满" style="zoom:67%;" />                                                       <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu7c.png" alt="运满满" style="zoom:67%;" />

### 运满满司机端                              运满满货主端

手机配货神器。                                                     手机配货神器。

  -  [iOS](https://apps.apple.com/us/app/apple-store/id766046464)  - [Android](https://imagecdn.ymm56.com/ymmfile/app-apk-biz/73de2567-2621-4935-855b-afc97d7a8733.apk)                                          [iOS](https://apps.apple.com/us/app/apple-store/id766046464)  - [Android](https://imagecdn.ymm56.com/ymmfile/app-apk-biz/73de2567-2621-4935-855b-afc97d7a8733.apk)

##### 应用核心场景【总日均PV超千万，js错误率低于十万分之一】

  <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu46.png" alt="Thresh" style="zoom: 50%;" />

### 六、联系我们

如果你在使用过程中遇到问题，或者有好的建议，欢迎给我们提。详细说明请移步 [贡献指南](CONTRIBUTING.md)

对Thresh有兴趣的小伙伴，可以加群交流 钉钉群：【钉钉群号：31835161】

​    <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu7e.jpg" alt="Thresh" height="300" width="240" />

### 七、项目作者

* 徐维顺 - 核心开发者 - [SeaShrimper](https://github.com/SeaShrimper)
* 徐亮 - 核心开发者 - [TroyXL](https://github.com/TroyXL)
* 章伟 - 核心开发者 - [snowfall]( https://github.com/snowfall)
* 汤靖咚 - 核心开发者 - [JD-Tang](https://github.com/JD-Tang)
* 张政 - 核心开发者 - [long831302](https://github.com/long8313002/)
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