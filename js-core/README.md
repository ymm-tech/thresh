# Thresh

如果你要在项目中使用 Thresh 提供的 flutter 动态化能力，可以参考以下步骤快速创建一个 Thresh 项目。

一个 Thresh 项目由 3 部分构成，分别是：JS 脚本、Flutter 依赖与 Native 集成。以下将会对 JS 端的接入做出说明。

## 环境准备 

JS：VSCode + node + npm/yarn

Flutter SDK：**flutter1.22.5**

## JS 端

和大部分框架一样，Thresh 的 js 端框架也有自己的脚手架工具，通过脚手架工具可以便捷快速地创建一个 Thresh js 工程，具体流程如下：(以 yarn 为例，如未安装 yarn，可替换为 npm 的等价命令)

1. 全局安装脚手架工具：`yarn global add thresh-lib-cli`；

2. 在目标目录中执行 thresh-cli create yourAppName 命令即可创建一个新的，如：`thresh-cli create transport`，项目创建的同时会自动安装相关依赖。

   > **TIP**
   >
   > `thresh-cli create` 命令创建的项目，其项目名会同时作为 package.json 中的 name 字段，并且该字段会作为项目在宿主工程中的模块名被使用。因此如项目名不是模块名，需要自行修改 package.json 中的 name 字段。



#### 启动项目

进入项目根目录，执行 `yarn dev` 命令将会启动项目并进入本地开发模式。

开发模式下会启动本地 http 服务，默认服务端口为 12345，端口号可以在根目录 /webpack/config.js 中修改。。

> **TIP**
>
> 不建议对默认端口号进行修改，否则也需要同步修改调试宿主工程的相应端口号。

项目启动后无法在浏览器中查看页面，需要在调试宿主工程中进行查看与调试。

如需在实际宿主工程中沙盒调试本地代码，请执行 `yarn prod` 命令，将会以可运行于实际宿主中的方式启动本地开发模式。两种启动命令对应的 process.env.NODE_ENV 分别为 development 和 production.

## Flutter 端

Flutter 端请在 pubspec.yaml 文件中添加依赖项：

```yaml
dependencies:
  thresh: ^0.0.6
```

#### 本地调试模式

将 ThreshAppDemo 克隆到本地后，进入根目录，依次执行 `yarn install`  `yarn dev` 命令即可启动 js demo 的本地调试，服务启动于 http://127.0.0.1:12345/.

运行宿主 AppDemo 工程（目前以 TWDynamicFlutter 项目为宿主 demo 工程），启动后将会直接连接到 http://127.0.0.1:12345/ 加载并执行 js 脚本，从而显示 ThreshAppDemo 中的页面。页面显示效果如下：

<img src="https://image.ymm56.com/ymmfile/operation-biz/21ebe4a0-507c-4d7b-9f66-c66aac06197a.png" alt="Demo" style="zoom: 25%;" /><img src="https://image.ymm56.com/ymmfile/operation-biz/62ceda48-edb1-4890-8150-0dd6c0a23a4e.png" alt="Demo" style="zoom: 25%;" />



<img src="https://image.ymm56.com/ymmfile/operation-biz/8bb945b7-d1fd-4c30-b80a-c88e609af9c9.png" alt="Demo" style="zoom: 25%;" /><img src="https://image.ymm56.com/ymmfile/operation-biz/a09b376c-069d-4e24-aba2-5ceaf21c9cdc.png" alt="Demo" style="zoom: 25%;" />
