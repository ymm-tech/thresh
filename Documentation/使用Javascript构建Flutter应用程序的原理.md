# 使用Javascript构建Flutter应用程序的原理

> 由于直接使用 Flutter 构建的应用程序在 iOS 端无法实现热更新，并且对于前端工程师来说依然需要耗费精力去学习 dart 语法和 Flutter 库才能开发 Flutter 项目。因此，基于 Javascript 构建 Flutter 应用程序的想法应运而生。

### Flutter 中的 UI 渲染

在 Flutter 中描述视图组成的基本单位是 widget，每一个 widget 只包含当前部件的配置信息，它是一个轻量的、可被高效创建于销毁的数据结构。而许许多多的 widgets 组合在一起，构建出了一个包含视图所有信息的 WidgetTree.

之后 Flutter 会从 WidgetTree 中生成 ElementTree，再由 ElementTree 生成 RenderObjectTree. ElementTree 中的 element 会同时持有其对应的 widget 与 renderObject.

三棵树中，WidgetTree 会被频繁创建于销毁，但是 ElementTree 和 RenderObjectTree 只会在发生状态改变的时候才会改变，ElementTree 负责元素的更新与 diff，RenderObjectTree 则负责实际的布局与绘制。

![](https://image.ymm56.com/ymmfile/operation-biz/4204f5de-a499-4724-8287-f3b08d5b061d.JPEG)

### 使用 JS 构建 Flutter 应用

大部分移动端跨平台方案都是基于**通信机制**实现的，比如 React Native，微信小程序等。Flutter 也提供了与 Native 通信的能力，但是由于 Flutter 自身无法直接对 JS 文件进行解释执行，因此必须借助于 Native 来执行 JS，并且通过 Native 作为中介，实现 JS <=> Native <=> Flutter 的通信。

通过在 JS 中构建 UI 的描述层，再将 UI 描述转换为 json 格式字符串，经由 Native 发送到 Flutter ，由 Flutter 对 json 字符串进行解析后创建对应的 WidgetTree 并执行后续渲染操作。

![](https://image.ymm56.com/ymmfile/operation-biz/4fb53261-31e2-4a83-9edd-929309889b71.JPEG)

这套基于 JS 构建 Flutter 应用的框架，我们将其称为 Dynamic Flutter.



#### 从 Flutter 初始化开始

Flutter 会由 `main()` 函数开始执行，会经历一下几个步骤：

1. 首先建立与 Native 之间的通信渠道 `MethodChannel` 以保证所有的通信都能够被接收和发送；
2. 其次会建立接收到消息时的所有处理方法的分发渠道，以保证所有合法的通信都能够在 Flutter 中被正确处理，同时通过 `MethodChannel` 向 JS 发送当前设备的媒介数据；
3. 然后会对 Flutter 中的 Widget 做处理，注册拦截函数，以便在接收到渲染 json 数据后将 json 转换为 Widget；
4. 最后建立 Flutter App 的初始承载页面，该页面在接收到 JS 发送显示页面的消息之前将会一直处于等待状态；同时向 JS 发送 `ready` 消息，表示 Flutter 环境已准备完成，可以显示页面。

JS 在接收到 `ready` 消息后，会根据 `ready` 中传递的路由信息查找到对应页面的 UI 创建函数，进而将最终得到的渲染 json 数据发送给 Flutter 以显示页面。



#### JS 与 Flutter 的通信实现

在 JS 代码执行之前，Native 会向 JS 代码的执行环境中注入通信方法 `methodChannel_js_call_flutter` `methodChannel_flutter_call_js`，前者为 JS 向 Flutter 传递消息的通道，后者则是 Flutter 向 JS 传递消息的通道。

通过这两个通道，就可以实现所有数据在 JS 与 Flutter 之间的流转。



#### 通过 JS 构建 Flutter 页面

##### 在 JS 中构建 UI

在 JS 中 UI 的构建通过 JSX 实现，借鉴了 React 的写法。

依据 Flutter 中对 Widget 注册的所有拦截函数，JS 中会提供一套与之相对应的原子组件，以便在两种不同的 DSL 之间进行组件的互相转换。

> 原子组件即构成 UI 的最小单位组件。
>
> 在 React 等前端框架中，`<div />` `<span />` 即是原子组件；在 React Native 等跨端框架中，`<View />` `<Text />` 既是原子组件。
>
> 而在通过 JS 构建 Flutter 页面时，也提供了一套自有的原子组件，如：`<Container />` `<Page />` 等。
>
> 在原子组件的基础上，通过将组件结构与逻辑封装在一起形成一个新的组件，便于在更多地方直接使用以及为之后的维护提供便利。这样的组件被称为自定义组件。

JSX 借助 `babel-plugin-transform-react-jsx` 插件，能够将 JSX 转换为节点构建函数 `createElement()` 并传入相应的参数，该函数最终会创建一个具有节点信息，并且关联了父节点的 VNode 对象。经过层层构建，最终由 JSX 构建的页面会被转换为一个 VNodeTree.

之后将从 VNodeTree 中逐层提取节点信息，同时将每一个 vnode 节点上的事件属性转换为事件 id ，并将该事件存入节点的事件池中。完成以上操作后，会创建出一个每个层级都具有固定格式的渲染 json 树。将这颗树通过 `methodChannel_js_call_flutter` 发送到 Flutter 中。

![](https://image.ymm56.com/ymmfile/operation-biz/babc1e97-fead-4893-a33e-d31141029ff3.JPEG)

> 需要注意的是，Flutter 中存在 StatefulWidget 和 StatelessWidget 的区别。在 JS 中，所有的自定义组件在转换为 json 时都会通过 `isStateful` 字段被标记为可更新组件，从而在 Flutter 中被转换成 StatefulWidget；而所有的原子组件都会被转换为 StatelessWidget.



##### Flutter 如何显示页面

Flutter 接收到渲染 json 数据后，会通过递归遍历的方式从最底层开始，将每一个独立的渲染数据节点解析为 model 对象。Model 将会持有所有的渲染数据，同时会关联自己的父节点；同时 model 会携带所有的渲染数据，通过 Widget 拦截函数生成其对应的 widget 实例，并持有该 widget 实例。

> 如 JS 中的 `<Container />` 组件在 Flutter 中经过拦截函数将会被创建为一个名叫 `DFContainer` 的 widget 实例。 `DFContainer` 等 widgets 是使用 Flutter 提供的原子组件单独封装的一套与 JS 中的原子组件一一对应的自定义组件。

当通过 model 创建 widget 时，如果发现其 `isStateful = true`，则会在该 widget 实例外层包裹一个 StatefulWidget，同时让 model 持有该 StatefulWidget 及其 state，以便之后进行更新操作。也就是说，如果一个 model 具有  `isStateful = true`，则其会同时持有 widget & statefulWidget & state.

在遍历过程中，原先的 json 数据会被转换为两个树 —— modelTree & widgetTree. 其中 widgetTree 中的每个节点都会被 modelTree 中对应的节点所持有。

对于首次显示的页面来说，会使用被创建的 widgetTree 直接替换初始化时创建的承载页面的内容；而非首页则会直接通过 `Navigator.push()`，使用 widgetTree 创建并显示一个新页面。

<img src="https://image.ymm56.com/ymmfile/operation-biz/9f6a1e9e-5c4f-4a8b-a554-8fc13566b58b.JPEG" style="zoom:75%;" />



#### Flutter 中的事件触发与传递

在将 JS 中的事件函数转换为 id 后，这个 id 也会与节点所属页面名称、节点 id 一起被携带到 Flutter 中，最终这三个信息会被包装为一个 Flutter 中的事件函数。

当在 Flutter 中触发事件时，首先会触发这个函数，该函数会向 JS 发送一条携带了页面名称、节点 id、事件 id 以及事件参数的消息。

JS 接收到该消息后，首先会根据页面名称与节点 id 查找到触发了事件的节点，接着通过事件 id 在节点事件池中查找到对应的事件，传入参数并执行该事件。



#### JS 与 Flutter 中的组件更新

##### JS 中的更新

触发事件的目的大部分都是为了更新页面上的内容，在 JS 中，组件更新的基本单位是自定义组件。

当一个自定义组件触发 `setState()` 后，会将该组件推入更新队列中等待更新。在节点进入队列之前会进行去重，从队列中进入第一个组件开始后的 16ms，队列将执行更新操作。在这 16ms 内进入队列中的其他待更新组件将会一同触发更新。

在实际进行更新操作前，会先对队列中的元素进行父节点的去重，即：依次获取所有待更新节点，同时向上获取该节点的父节点，如果其父节点存在于当前队列中，则从队列中移除该待更新节点，不存在则保留。这样做是因为只要队列中存在了父组件，则子组件就一定会被更新；其目的是为了**执行最少次数操作，但实现尽可能多组件的更新。**

组件的更新借鉴了 React 的组件更新 diff 算法，但是由于引入了 Flutter StatefulWidget 和 StatelessWidget 的概念，因此相比 React 的 diff 算法，thresh.js 的 diff 算法是粗粒度的。

两者相同的地方在于：都会对每一个节点进行对比，以保证每一个节点的状态都正确，最终被正确更新。

不同点在于：React 除了会对同类型节点进行属性和状态的合并外，也会将新创建或被删除的节点在旧节点数组中进行插入或删除操作，操作和更新的基本单位是原子组件；而 thresh.js 只会关注那些更新前后依然保留的同类型节点，在完成属性与状态的合并后，会直接抛弃旧节点，保留新节点，最终新节点将替换待更新自定义组件中的旧节点，并使用更新后的自定义组件的数据向 Flutter 发出更新消息——更新的基本单位是自定义组件。

<img src="https://image.ymm56.com/ymmfile/operation-biz/4358346b-88a8-47cd-afa3-5a3d897c5c0c.JPEG" style="zoom:75%;" />

> 之所以不采用 React 这种深入到原子组件层面的 diff 算法，是因为最终更新消息发送到 Flutter 后，构建出的新的 widgetTree 在 Flutter 中还会进行一次 diff 操作，因此基于自定义组件的更新会在一定程度上提升 JS 中 diff 的性能。



##### Flutter 中的更新

JS 发送的更新消息有两部分组成：需要被更新的页面名称、更新节点 id 以及更新节点的 json 数据。

当 Flutter 收到 JS 发送的更新消息后，首先会重复 json 转换为 model 步骤，创建出 modelTree & widgetTree. 之后通过更新的页面名称和节点 id 在缓存中查找到需要被更新的 model。

由于更新以 JS 中的自定义组件为最小单位，而每个自定义组件在 Flutter 中都会被创建为 StatefulWidget，因此在获取到新旧两个 model 后会进行如下操作：

1. 将 newModel 的渲染数据、子节点 models 及其所持有的 newWidget 合并到 oldModel；
2. 通过 oldModel 所持有的 state 将 statefulWidget 中所包裹的 oldWidget 更新为 newWidget；
3. 通过 state 完成组件更新操作后，Flutter 会对被更新的组件进行 diff 与重新渲染，以保证页面能够显示新的内容。

### 结束语

通过 JS 构建 Flutter 应用程序的基本原理并不复杂，主要是 JS 中的数据处理、Flutter 中的数据转换，以及实现数据在 JS 和 Flutter 中的流转通道。本文对前两者做了比较详致的介绍，而对数据通信更感兴趣的同学可以移步下一篇文章了解更多相关的内容。
