## Thresh-Flutter动态化框架

### 一、前言

Flutter作为Google推出的一种全新的响应式、跨平台、高性能的移动开发框架，在性能、稳定性和多端体验一致性上都有着较好的表现，自开源以来，已经受到越来越多开发者的喜爱。随着Flutter框架的不断发展和完善，业内越来越多的团队开始尝试并落地Flutter技术。研发效率提升已经成为几乎所有互联网大前端团队的核心指标，其中跨端动态化无疑是效率提升的最重要一环，不仅让研发效率提高一倍，并且能大大缩短业务发版周期和降低发版成本【[《满帮大前端效能提升》](https://mp.weixin.qq.com/s/DVZG5WDi9iqmKI8qBd2qmw)这篇文章能看到满帮业务发版非常频繁，一周多发】。当前主流动态化方案包括各家的自研小程序、RN、配置化等，这些方案也是双端开发变单端，但在端渲染一致性上表现不理想，有一定的平台差异性。

基于此，满帮大前端团队从2019年8月份开始对Flutter动态化进行探索，内部代号"Thresh"，于当年10月份上线一个页面后，线上数据指标表现良好后，随后大规模上线10+业务场景，其中包括核心页面订单详情、货主货源详情等。

### 二、Thresh特性与整体架构

Thresh项目推出的初心是为了能提供一种基于Flutter的完全跨端动态化方案，性能能达到甚至优于React Native，再加上其多端渲染一致性以及即将推出的Google Fuchsia系统默认开发语言为Flutter，都表明Thresh未来将会充满想象力，也将极大可能会成为替代React Native等的一种长期方案。

#### 2.1、主要特性

- **自定义DSL**，扩展性强，未来会做基于sketch插件原型图自动转换DSL
- **多端一致性**，拥有统一的渲染引擎skia，较好的跨端兼容性适配
- **支持Hot Reload**，便于开发调试，秒级编译运行
- **支持组件级别更新**，极佳的体验性
- **单端开发**，降低开发成本

#### 2.2、动态化常见思路

- **产物替换**

  Google原本打算在2019年推出Code Push方案，后来放弃了，主要两个原因：违反应用商店的规定和安全方面考虑；但目前android侧还是有办法通过产物更新来做到动态化，不过一端的动态化优势不明显。

- **组件化与逻辑动态化**

  通过dart来定义部分核心通用组件，再组装拼接出页面，部分业务逻辑通过JS环境来实现。

- **动态DSL**

  Native侧具备JS执行环境，类似于React Native ,不同的是组件渲染通过Flutter，极大的保证双端的一致性。Thresh目前采用的是这种方案，前端开发推荐使用TS。

#### 2.3、整体架构

   <img src="https://image.ymm56.com/ymmfile/ps-temporary/1eoc68s3j.png" height="570" width="700" />

如上图所示，从底向上，CI/CD + 基础服务 + 监控上报等支撑了Thresh业务，最上面为架构图。

- X-RAY为公司自研的生产发布平台，支持Bundle包的构建下发以及运维。
- 顶部是整体Thresh的架构流程图，包含 页面开发、DSL 的转换、通信等等，用于构建页面与逻辑。

### 三、Thresh设计思路与原理

#### 3.1、渲染层级描述

在动态化设计中，DSL 设计尤其重要，考虑极强的逻辑动态性以及兼容同构方案我们选定JS作为开发语言；核心思路是把 Flutter 的页面渲染逻辑中的三棵树中的第一棵，通过JS 来构造。这其中要完成JS与 Flutter 层完成基础组件映射，再通过JS引擎来生成UI描述，并传递给Dart层的 UIEngine，UIEngine 把UI描述转换为 Flutter 控件，最终渲染成页面。

动态化Flutter 框架主要由这三部分构成，每一部分都处理不同的逻辑和绑定事件通信来更新渲染页面、事件响应，其核心渲染通信流程：Flutter ⇋ Native ⇋ JS 。

- **UI层**

  运用JS层定义了与Flutter同功能的基础组件，并对Flutter WidgetTree进行描述，再通过这些组件和API来构造成前端业务页面。

- **Native层**

  1、JS（JSCore/V8）引擎来加载并执行UI层包(xxx业务_js.bundle)，注册被动方法来被JS 调用，如bridge、事件响应、异常上报等。

  2、维护NativeChannel实例，与Flutter建立通道，作为JS 与 Flutter通信的媒介；以及维护UI 线程、任务线程队列。

- **Flutter层**

  维护JavaScript转换为Dart的Engine，并支持缓存，异步更新组件；事件通信以及页面的生命周期管理等。

##### 3.1.1、UI层

Thresh框架完成了常用基础组件的定义与开发，能支撑95%业务场景的接入，语法定义规则支持React；另外Flutter的核心渲染主要由三棵树构成，WidgetTree、ElementTree以及RenderObjectTree，WidgetTree包含一些配置信息，用于build和销毁，这里面UI 层主要处理与widgetTree相关的组件映射、转换等；现支持的组件列表以及其部分属性：

 <img src="https://image.ymm56.com/ymmfile/ps-temporary/1eoc68s3q.png" height="370" width="425" />   

 <img src="https://image.ymm56.com/ymmfile/ps-temporary/1eoc68s3c.png" height="370" width="550" />

在 Flutter 中描述视图组成的基本单位是 widget，每一个 widget 只包含当前部件的配置信息，它是一个轻量的、可被高效创建于销毁的数据结构。而许许多多的 widgets 组合在一起，构建出了一个包含视图所有信息的 WidgetTree。之后 Flutter 会从 WidgetTree 中生成 ElementTree，再由 ElementTree 生成 RenderObjectTree. ElementTree 中的 element 会同时持有其对应的 widget 与 renderObject。三棵树中，WidgetTree 会被频繁创建于销毁，但是 ElementTree 和 RenderObjectTree 只会在发生状态改变的时候才会改变，ElementTree 负责元素的更新与 diff，RenderObjectTree 则负责实际的布局与绘制。





 <img src="https://image.ymm56.com/ymmfile/ps-temporary/1eoc68s3u.png" height="200" width="850"  />

##### 3.1.2、Native层

作为UI层与Flutter层的中间媒介，承载了整个通信链路，Native通过JS引擎来加载JSBundle包，并依次注入函数方法来达到 JSCallNative通信的目的；MethodChannel现方案每个Engine维护一个Channel实例并通过MethodChannle来达到FlutterCallNative以及NativeCallFlutter的目的，这种方式目前能满足现有业务需求，后期将对Engine改造成单例化，增强性能。

 <img src="https://image.ymm56.com/ymmfile/ps-temporary/1eoc68s3f.png" height="500" width="580" />

##### 3.1.3、Flutter层

1. **JS数据转换Dart**

   JavaScript定义了与Flutter一一对应的基础组件，并依据 Flutter 中对 Widget 注册的所有拦截函数，这样可以达到UI组件与Dart Widget 之间进行组件的互相转换；

2. **事件触发与传递**

   每个JS方法、组件、页面均会生成唯一id，并通过事件函数来传递到Flutter层，以此来区分事件类型与执行策略并达到事件传递；

3. **JS与Flutter组件的更新**

   更新分为两部分，JS层与Flutter层，JS层主要是参考React diff策略来拿到需要更新的组件并通过消息通道传递给Flutter，Flutter层再根据该数据【更新的页面名称、更新节点 id 以及更新节点的 json 数据】来生成新的页面widget，Flutter通过调用setState方法来做diff组件更新；

4. **页面渲染与生命周期管理**

   对于当完成所有链路的数据转换后就会拿到modelTree & widgetTree，modelTree会持有并缓存widgetTree，最终构建一个Widget页面并渲染显示；

 <img src="https://image.ymm56.com/ymmfile/ps-temporary/1eoc68s3a.png" height="360" width="560" />

#### 3.2、如何构建Dart页面

##### 3.2.1、使用JS构建Flutter

大部分移动端跨平台方案都是基于**通信机制**实现的，比如 React Native，微信小程序等。Flutter 也提供了与 Native 通信的能力，但是由于 Flutter 自身无法直接对 JS 文件进行解释执行，因此必须借助于 Native 来执行 JS，并且通过 Native 作为中介，实现 JS <=> Native <=> Flutter 的通信。

通过在 JS 中构建 UI 的描述层，再将 UI 描述转换为 json 格式字符串，经由 Native 发送到 Flutter ，由 Flutter 对 json 字符串进行解析后创建对应的 WidgetTree 并执行后续渲染操作。

 <img src="https://image.ymm56.com/ymmfile/operation-biz/4fb53261-31e2-4a83-9edd-929309889b71.JPEG" alt="image-20200329213237962" height="220" width="320"/>

##### 3.2.2、从 Flutter 初始化开始

Flutter 会由 `main()` 函数开始执行，会经历一下几个步骤：

1. 首先建立与 Native 之间的通信渠道 `MethodChannel` 以保证所有的通信都能够被接收和发送；
2. 其次会建立接收到消息时的所有处理方法的分发渠道，以保证所有合法的通信都能够在 Flutter 中被正确处理，同时通过 `MethodChannel` 向 JS 发送当前设备的媒介数据；
3. 然后会对 Flutter 中的 Widget 做处理，注册拦截函数，以便在接收到渲染 json 数据后将 json 转换为 Widget；
4. 最后建立 Flutter App 的初始承载页面，该页面在接收到 JS 发送显示页面的消息之前将会一直处于等待状态；同时向 JS 发送 `ready` 消息，表示 Flutter 环境已准备完成，可以显示页面。

JS 在接收到 `ready` 消息后，会根据 `ready` 中传递的路由信息查找到对应页面的 UI 创建函数，进而将最终得到的渲染 json 数据发送给 Flutter 以显示页面。

##### 3.2.3、 JS 与 Flutter 的通信实现

在 JS 代码执行之前，Native 会向 JS 代码的执行环境中注入通信方法 `methodChannel_js_call_flutter` `methodChannel_flutter_call_js`，前者为 JS 向 Flutter 传递消息的通道，后者则是 Flutter 向 JS 传递消息的通道。

通过这两个通道，就可以实现所有数据在 JS 与 Flutter 之间的流转。

##### 3.2.4、通过 JS 构建 Flutter 页面

###### 3.2.4.1、在 JS 中构建 UI

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

 <img src="https://image.ymm56.com/ymmfile/operation-biz/babc1e97-fead-4893-a33e-d31141029ff3.JPEG" height="200" width="800" />

> 需要注意的是，Flutter 中存在 StatefulWidget 和 StatelessWidget 的区别。在 JS 中，所有的自定义组件在转换为 json 时都会通过 `isStateful` 字段被标记为可更新组件，从而在 Flutter 中被转换成 StatefulWidget；而所有的原子组件都会被转换为 StatelessWidget.

###### 3.2.4.1、Flutter 如何显示页面

Flutter 接收到渲染 json 数据后，会通过递归遍历的方式从最底层开始，将每一个独立的渲染数据节点解析为 model 对象。Model 将会持有所有的渲染数据，同时会关联自己的父节点；同时 model 会携带所有的渲染数据，通过 Widget 拦截函数生成其对应的 widget 实例，并持有该 widget 实例。

> 如 JS 中的 `<Container />` 组件在 Flutter 中经过拦截函数将会被创建为一个名叫 `DFContainer` 的 widget 实例。 `DFContainer` 等 widgets 是使用 Flutter 提供的原子组件单独封装的一套与 JS 中的原子组件一一对应的自定义组件。

当通过 model 创建 widget 时，如果发现其 `isStateful = true`，则会在该 widget 实例外层包裹一个 StatefulWidget，同时让 model 持有该 StatefulWidget 及其 state，以便之后进行更新操作。也就是说，如果一个 model 具有  `isStateful = true`，则其会同时持有 widget & statefulWidget & state.

在遍历过程中，原先的 json 数据会被转换为两个树 —— modelTree & widgetTree. 其中 widgetTree 中的每个节点都会被 modelTree 中对应的节点所持有。

对于首次显示的页面来说，会使用被创建的 widgetTree 直接替换初始化时创建的承载页面的内容；而非首页则会直接通过 `Navigator.push()`，使用 widgetTree 创建并显示一个新页面。

 <img src="https://image.ymm56.com/ymmfile/operation-biz/9f6a1e9e-5c4f-4a8b-a554-8fc13566b58b.JPEG" height="420" width="660"  />

##### 3.2.5、Flutter 中的事件触发与传递

在将 JS 中的事件函数转换为 id 后，这个 id 也会与节点所属页面名称、节点 id 一起被携带到 Flutter 中，最终这三个信息会被包装为一个 Flutter 中的事件函数。

当在 Flutter 中触发事件时，首先会触发这个函数，该函数会向 JS 发送一条携带了页面名称、节点 id、事件 id 以及事件参数的消息。

JS 接收到该消息后，首先会根据页面名称与节点 id 查找到触发了事件的节点，接着通过事件 id 在节点事件池中查找到对应的事件，传入参数并执行该事件。

##### 3.2.6、JS 与 Flutter 中的组件更新

###### 3.2.6.1、JS 中的更新

触发事件的目的大部分都是为了更新页面上的内容，在 JS 中，组件更新的基本单位是自定义组件。

当一个自定义组件触发 `setState()` 后，会将该组件推入更新队列中等待更新。在节点进入队列之前会进行去重，从队列中进入第一个组件开始后的 16ms，队列将执行更新操作。在这 16ms 内进入队列中的其他待更新组件将会一同触发更新。

在实际进行更新操作前，会先对队列中的元素进行父节点的去重，即：依次获取所有待更新节点，同时向上获取该节点的父节点，如果其父节点存在于当前队列中，则从队列中移除该待更新节点，不存在则保留。这样做是因为只要队列中存在了父组件，则子组件就一定会被更新；其目的是为了**执行最少次数操作，但实现尽可能多组件的更新。**

组件的更新借鉴了 React 的组件更新 diff 算法，但是由于引入了 Flutter StatefulWidget 和 StatelessWidget 的概念，因此相比 React 的 diff 算法，thresh.js 的 diff 算法是粗粒度的。

两者相同的地方在于：都会对每一个节点进行对比，以保证每一个节点的状态都正确，最终被正确更新。

不同点在于：React 除了会对同类型节点进行属性和状态的合并外，也会将新创建或被删除的节点在旧节点数组中进行插入或删除操作，操作和更新的基本单位是原子组件；而 thresh.js 只会关注那些更新前后依然保留的同类型节点，在完成属性与状态的合并后，会直接抛弃旧节点，保留新节点，最终新节点将替换待更新自定义组件中的旧节点，并使用更新后的自定义组件的数据向 Flutter 发出更新消息——更新的基本单位是自定义组件。

 <img src="https://image.ymm56.com/ymmfile/operation-biz/4358346b-88a8-47cd-afa3-5a3d897c5c0c.JPEG" height="460" width="600"  />

> 之所以不采用 React 这种深入到原子组件层面的 diff 算法，是因为最终更新消息发送到 Flutter 后，构建出的新的 widgetTree 在 Flutter 中还会进行一次 diff 操作，因此基于自定义组件的更新会在一定程度上提升 JS 中 diff 的性能。

###### 3.2.6.2、Flutter 中的更新

JS 发送的更新消息有两部分组成：需要被更新的页面名称、更新节点 id 以及更新节点的 json 数据。

当 Flutter 收到 JS 发送的更新消息后，首先会重复 json 转换为 model 步骤，创建出 modelTree & widgetTree. 之后通过更新的页面名称和节点 id 在缓存中查找到需要被更新的 model。

由于更新以 JS 中的自定义组件为最小单位，而每个自定义组件在 Flutter 中都会被创建为 StatefulWidget，因此在获取到新旧两个 model 后会进行如下操作：

1. 将 newModel 的渲染数据、子节点 models 及其所持有的 newWidget 合并到 oldModel；
2. 通过 oldModel 所持有的 state 将 statefulWidget 中所包裹的 oldWidget 更新为 newWidget；
3. 通过 state 完成组件更新操作后，Flutter 会对被更新的组件进行 diff 与重新渲染，以保证页面能够显示新的内容。

#### 3.4、通信机制

在 Flutter 动态化中，通信是基石，所有的一切都是建立在通信上的，需要通信的双方分别是：JS & Flutter.

JS 与 Flutter 是依赖于 Native 又完全独立的两端：JS 中的数据运算与流转不会直接影响到 Flutter 页面的渲染；Flutter 的渲染过程也不会阻塞 JS 的代码执行。

为了让完全独立的两者产生联系，我们找到了一个既能与 JS 产生联系，又能与 Flutter 传递消息的媒介 —— Native. 通过将一个消息从一端传递给 Native，再由 Native 完整传递给另一端，就实现了 JS 与 Flutter 之间的通信。

##### 3.4.1、搭建三端通信链路

在 Flutter 初始化时，Flutter 会与 Native 通过 `methodChannel` 建立通信关系，`methodChannel` 是一条双向通信的链路，既可以在 Flutter 中接收到 Native 的消息，也可以主动向 Native 发出消息。

同时，Native 在执行 JS 代码之前会向 JS 的 `context` 中注入一个方法，我们将这个方法命名为 `methodChannel_js_call_flutter`，用来使 JS 能够向 Flutter 传递消息。

>  `methodChannel_js_call_flutter` 方法的实现方是 Native，但是调用方（消息的传递方）是 JS，最终消息的接收方式 Flutter，因此在命名中忽略了 Native，只保留了消息发出和接收的双方，以便代码的直观和便于理解。同时还有另一个方法 `methodChannel_js_call_native`，该方法的消息接收方是 Native，通过这种方式命名可以有效区分这两个方法。

在 Flutter 动态化中，一个完整的跨三端的通信链路一般是：

 <img src="https://image.ymm56.com/ymmfile/ps-temporary/1eoc68s38.png" height="100" width="530"  />

从上面两个链路中会发现，第一条链路是完整的，消息可以顺利到达 Flutter；但是第二个链路在 Native 中断掉了，没有一个通道能够将消息传递到 JS 中。为了解决这个问题，JS 会在 `context` 中暴露一个名为  `methodChannel_flutter_call_js` 的方法，该方法的参数即为消息内容，这样 Native 就能够直接调用该方法将消息传递到 JS.

 <img src="https://image.ymm56.com/ymmfile/ps-temporary/1eoc68s36.png" height="80" width="550"  />

##### 3.4.2、“半双工”通信与通信反馈

在动态 Flutter 中，几乎所有的三端通信需求都是“半双工”的。此处的“半双工”指的是，**当一方作为消息传递方时，无法通过当前传递消息的通道获得消息接受方的反馈**。这就表示当传递方发送出一条消息后就会结束自己的通信行为，它们不需要去关心自己是否会得到反馈，而实际上也不会有任何反馈。

基于以上情况，动态 Flutter 中的所有通信链路都会使用这种模式进行通信：消息传递方只需要传递数据而不需要关心回调，消息接收方只需要处理数据而不需要返回处理结果。这种模式对于跨越三端的通信来说更便于管理和约束，也使得 Native 成为了一个完全的数据中转站，否则 Native 除了需要传送数据外，还需要处理结果的反馈工作。于是，一条清晰的数据流转路线便形成了：**数据传递方 -> 数据中转方 -> 数据接收方**。

 <img src="https://image.ymm56.com/ymmfile/operation-biz/8c2cd7a5-89b6-47c7-b0cb-88ea9b057179.JPEG" height="300" width="330" />

但是并不是所有的通信都不需要反馈，例如与 Native 通信的双端通信链路 bridge，在向 Native 发出通信消息后需要获得 Native 的处理结果。对于这种情况，简单粗暴的单向通信将无法直接满足需求。但如果换成携带回调的“全双工”通信，从而能够在同一个通信通道上实现结果的接收，将会破坏原有的通信模式，也为通信的管理增加了难度。

为了解决在“半双工”通信模式上的通信反馈问题，我们通过在传递方为每一个需要反馈的通信加上标识符，再将反馈处理方法通过标识符缓存；当接收方处理完成后，携带标识符通过另一个通信通道将处理结果作为一个新的消息传递给原本的传递方后（在这个新的通道中，原本的数据传递和接收方将会互换身份），传递方会根据标识符在缓存中查找到处理方法并执行处理逻辑。

 <img src="https://image.ymm56.com/ymmfile/operation-biz/8c9e715f-45e5-4ed9-a67f-0cbf1bae5ef9.JPEG" height="400" width="600"  />

##### 3.4.3、确保首次通信的正确接收

JS 与 Flutter 的通信是 Flutter 动态化的基石，而首次通信的成功与否又是通信能否成功建立的首要条件。

由于所有的跨三端通信都是“半双工”的，而 JS 与 Flutter 的环境准备又各自完全独立，这也就导致如果任一方环境准备完成前，另一方就发送了消息，这就会出现环境未完成的一方无法接收到消息的情况，从而影响后面所有的通信，导致通信中断或错乱。

为了解决这种情况，JS 与 Flutter 中采取了以下策略来保证首次通信的顺利执行（以下以 A / B 代指 JS 与 Flutter 中的任一方）：

1. A 环境准备完成后会立即向 B 发送通知；
2. 如果 B 已准备好则会立即回复一条通知，A 收到回复通知后标记双方环境已建立，可进行后续的通信；
3. 如果 B 未准备好，则 A 将不会收到任何回复，直到 B 准备好，此时A / B 身份互换，会重新回到步骤 1.

 <img src="https://image.ymm56.com/ymmfile/operation-biz/88741353-95c8-4617-aab9-5689e8ab029e.JPEG" height="280" width="480"  />

#### 3.5、集成流程与调试

具体集成方案流程请参考开源代码。

### 四、围绕Thresh的生态建设

  <img src="https://image.ymm56.com/ymmfile/ps-temporary/1eoc68s3n.png" height="306" width="800" />

 通过整体生态建设架构图，简单介绍业务开发、调试、发布能力。

- 业务开发

  业务开发语言除JS外，Thresh兼容ts，语法层面暂不支持css，能较低成本的让前端开发融入。

- Debug能力

  调试面板 + HotReload能极大地提高开发调试效率。

- 发布能力

  依赖满帮自研的X-RAY灰度发布系统，具备分钟级别动态发版能力，能快速支撑业务和问题修复。

### 五、业务场景落地

业务落地在运满满/货车帮的司机端、货主端4个app中，场景涵盖列表、复杂交互、表单、展示等不同类型10+页面，日均PV超千万，js错误率低于十万分之一。并且对Thresh的全方位指标就行了统计（ 包括FPS、engine初始化、加载bundle包时长、加载JS时长、render时长、通信时长等），通过各项指标监控表现，页面打开时长（不含网络指标参考：bundle包1M - Android打开600ms  iOS打开500ms左右 ）

##### 应用核心场景【总日均PV超千万，js错误率低于十万分之一】

  <img src="https://image.ymm56.com/ymmfile/ps-temporary/1eocdh5u2.png" alt="Thresh" style="zoom: 50%;" />

### 六、未来继续做的事情

近期到2021年Q1会完成以下几个优化点：（届时会及时同步到开源项目中）

1、优化bundle包页面加载通过函数驱动

2、引擎单例化

3、SDK升级支持高版本Flutter

**性能优化**

通道性能改善，减少通信链路路径，探索基于dartNative的双向通信方案

流畅度检测

数据序列化支持

**完善调试工具以及脚手架**

Debug模式引入webview容器支持动态调试

Bundle包构建、发布流程优化

**完善基础组件库**

进一步完善基础组件的开发

### 七、总结与展望

我们通过自定义DSL + JSCore的解释运行转换思路，实现了这套完全动态化的Thresh跨平台方案，建设了一套Thresh生态体系，涵盖了开发调试、发布、测试、运维各个阶段。目前多个业务场景落地，大大提升了开发效率、缩短了需求发版周期，并且良好的多端兼容性问题。

未来我们进一步完善Thresh的生态建设以及提高性能，提升开发效率，并且积极将该技术栈推广到其他技术团队，共建Thresh生态。