### 进入开发

1. 安装 yarn
2. 执行 `yarn config set registry http://npm.amh-group.com/` 切换 npm 源至运满满
3. 进入工程根目录，执行 `yarn install` 安装依赖
4. 执行 `yarn dev` 启动本地服务
5. 进入 Thresh - example 项目，执行 `flutter run` 启动 flutter 本地调试工程
> Thresh-example 将会自动连接到 http://127.0.0.1:12345 并加载 js 执行文件

> iOS 宿主工程支持连接本地服务进行调试，首先使用 `yarn prod` 代替 `yarn dev`，之后进入 iOS 宿主工程调试面板填写本地 ip 即可

### 项目打包

执行 `yarn build` 即可打包，打包后的项目会在 `/dist` 目录中

