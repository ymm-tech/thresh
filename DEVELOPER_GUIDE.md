## 开发者指南

> Thresh提供了简单、高效的应用跨平台动态化开发框架和丰富的组件，帮助开发者能快速、友好的接入。如果你要在项目中使用 Thresh 提供的 flutter 动态化能力，可以参考以下步骤快速创建一个Thresh 项目，主要分环境准备、快速接入、创建项目工程、工程调试几个方面来介绍。

一个 Thresh项目由 几个部分构成，分别是：业务代码、thresh插件、thresh-js库、与 Native宿主集成。本文将会对代码库、环境接入以及调试一一做出说明。

### 1、环境准备

#### 1.1、配置环境

宿主环境 ：Android（AS）+ iOS （XCode）

JS/TS：VSCode + node + npm/yarn

Flutter SDK：flutter1.9.1-hotfix.6【备注：新版本后续会逐步支持】

#### 1.2、仓库说明

| 仓库名称        | 地址                                        | 开发语言              | 备注                     |
| --------------- | ------------------------------------------- | --------------------- | ------------------------ |
| thresh          | git@github.com:ymm-tech/thresh.git          | java / oc / dart / js | 宿主/native/dart/js-core |
| thresh-template | git@github.com:ymm-tech/thresh-template.git | js                    | JS 脚手架模板项目        |
| thresh-cli      | git@github.com:ymm-tech/thresh-cli.git      | js                    | JS 脚手架                |



### 2、快速接入

#### 2.1、环境配置与准备

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

 <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu67.png" alt="Thresh" height="420" width="200"  />   <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu6c.png" alt="Thresh" height="420" width="200"  />  <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu6h.png" alt="Thresh" height="420" width="200"  />

#### 2.2、Thresh运行模式

##### 2.2.1、加载本地的bundle.js包

​			直接点击启动本地bundle 按钮，即可打开上图demo页面。

##### 2.2.2、启动本地调试服务

###### 2.2.2.1、打开沙盒模式

> ```
> 沙盒调试模式说明：
> 1、启动JS服务器，端口号默认12345 
> 2、真机调试默认127.0.0.1地址时需连上电脑的代理或者局域网环境直接输入JS服务器（即电脑）的IP（如192.168.0.106）
> ```

###### 2.2.2.2、启动本地JS服务器

进入项目根目录，然后进入example/js目录（默认demo目录）

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

###### 2.2.2.3、点击启动调试页面

当看到跟Thresh Demos 页面且如上图所示即成功，如出现本地服务器等异常，应该是代理没连成功等其他原因。

### 3、如何创建项目工程

#### 3.1、创建JS项目工程 

和大部分框架一样，Thresh 的 js 端框架也有自己的脚手架工具，通过脚手架工具可以便捷快速地创建一个 Thresh js 业务工程，具体流程如下：(以 yarn 为例，如未安装 yarn，可替换为 npm 的等价命令)

##### 3.1.1、全局安装脚手架工具

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

##### 3.1.2、创建项目工程

在目标目录中执行 thresh-cli create yourAppName 命令即可创建一个新的，如：`thresh-cli create ThreshTest1`，项目创建的同时会自动安装相关依赖。

> **TIP**
>
> `thresh-cli create` 命令创建的项目，其项目名会同时作为 package.json 中的 name 字段，并且该字段会作为项目在宿主工程中的模块名被使用。因此如项目名不是模块名，需要自行修改 package.json 中的 name 字段。

```
ManbangMacBook-Pro:thresh_test_demo Manbang$ thresh-cli create ThreshTest1
使用ThreshTest1作为项目/模块名称? (y/N) y
创建项目成功
```

##### 3.1.3、启动本地JS服务器

再重复下上面的启动本地JS服务器步骤即可，至此看到打开JS服务器成功。

#### 3.2、创建宿主工程

##### 3.2.1、创建flutter工程

> 自行创建flutter工程项目成功后并配置yaml源，Flutter 端请在 pubspec.yaml 文件中添加依赖项：

```
thresh: "^0.0.4" 或 仓库依赖（建议仓库依赖）
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

##### 3.2.2、启动flutter run 

会出现以下示例

   <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu6l.png" alt="Thresh" height="420" width="200"  />     <img src="https://imagecdn.ymm56.com/ymmfile/ps-temporary/1eqpbmu6p.png" alt="Thresh" height="420" width="200"  />

至此，恭喜您项目运行成功！

### 4、工程调试

#### 4.1、Hot Reload

当前业务开发模式支持hot reload，js有改动时，实时保存后重新编译，在宿主侧点击reload按钮重新加载即可；调试工具提供了日志工具、重新加载等，里面记录了全链路操作日志方便开发调试。

#### 4.2、js直接调试

js直接调试目前只支持 mac + 模拟器 + safari浏览器，如何调试可以参考网上的步骤。