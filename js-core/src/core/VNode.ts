/**
 * MIT License
 *
 * Copyright (c) 2020 ManBang Group
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import Widget from './Widget'
import { ListView } from './basicWidget'
import Util from '../shared/Util'
import { RenderData, ThreshProvider } from '../types/type'
import threshApp from './ThreshApp'
import appContainer from './AppContainer'
import TimerManager from '../manager/TimerManager'
import UtilManager from '../manager/UtilManager'

export type PropChildrenVNodeType = VNode | VNode[]
const ChildrenKey: string = 'children'
type W = Widget<any, any>
type Key = string | number | void
type Ref = ((widget: W) => void) | void

export interface PropChildrenVNode {
  [childrenPropName: string]: PropChildrenVNodeType
}
interface NodeEvents {
  [eventName: string]: Function
}
interface VNodeUpdateInfo {
  updateNodeId: string, // flutter 端需要被更新的原子组件 node id
  invokeUpdateNodeId: string // js 端需要出发 update 的自定义组件 node id
}

export default class VNode {
  // 节点类型
  type: string
  // 节点属性
  props: any
  // 父节点
  parent: VNode | void
  // 子节点
  children: VNode[] = []
  // 原子节点属性上的子节点
  basicWidgetPropChildren: PropChildrenVNode = {}
  // 节点的 widget 实例
  widget: W
  // 节点实例构造器
  widgetBuilder: any
  // 是否原子节点
  isBasicWidget: boolean
  // 原子节点 children 属性对应的 name
  childrenMapedName: string = ChildrenKey
  // 原子节点 children 属性对应的类型是否为 array
  childrenIsArray: boolean = true
  // 节点 id
  nodeId: string
  // 节点为 NativeView 时的 viewId
  nativeViewId?: string
  // 节点上的事件
  events: NodeEvents = {}
  // 节点所属页面
  pageName?: string
  // 子节点中存在 Page 时保存 Page Node
  pageNode: VNode | void
  // 节点是否已挂载
  hasMount: boolean = false
  // context id
  contextId: string = appContainer.contextId as string

  isPageNode: boolean = false
  isNativeViewNode: boolean = false
  isInputNode: boolean = false

  key?: Key
  parentKey?: Key
  ref?: Ref
  updateInfo?: VNodeUpdateInfo
  shouldRender: boolean = true

  private _refHasMount: boolean = false

  static nodeIdIndex: number = 0
  static getNodeId(type: string): string {
    return `${type}#${++VNode.nodeIdIndex}`
  }
  static asyncEventTypes: string[] = [
    'onRefresh',
    'onLoadMore',
  ]
  static eventTypes: string[] = [
    'onTap',
    'onLongTap',
    'onPan',
    'onScroll',
    'onChange',
    'onLoad',
    'onLayout',
    'onFocus',
    'onBlur',
    'onActionsOpen',
    'onActionsClose',
    'willDragStatusChange',
    'onDragStatusChange',
    'onDragPositionChange',
    'onOpen',
    'onSubmitted',
    'onClicked',
    ...VNode.asyncEventTypes,
  ]
  static throttledEventTypes: string[] = ['onTap']

  constructor({
    type,
    props,
    widgetBuilder,
    isBasicWidget,
    childrenMapedName,
    childrenIsArray,
    parent,
    key,
    ref,
  }: {
    type: string,
    props: any,
    widgetBuilder: any,
    isBasicWidget: boolean,
    childrenMapedName: string
    childrenIsArray: boolean
    parent?: VNode | void,
    key?: Key,
    ref?: Ref,
  }) {
    this.type = type
    this.props = props
    this.widgetBuilder = widgetBuilder
    this.isBasicWidget = isBasicWidget
    this.childrenMapedName = childrenMapedName
    this.childrenIsArray = childrenIsArray
    this.parent = parent
    this.key = key
    this.ref = ref
    this.nodeId = VNode.getNodeId(type)

    if (isBasicWidget) {
      this.isPageNode = type === 'Page'
      this.isNativeViewNode = type === 'NativeView'
      this.isInputNode = type === 'Input'
    }

    if (this.isNativeViewNode) {
      this.nativeViewId = `${this.nodeId}#${this.props.type}#${Date.now()}`
    }

    this.findVNodeInProps()
  }

  // 在 props 中查找所有的 vnode
  findVNodeInProps() {
    for (let key in this.props) {
      const item: any = this.props[key]
      if (item instanceof VNode && this.isBasicWidget) {
        item.parent = this
        this.basicWidgetPropChildren[key] = item
      }
      if (Array.isArray(item)) {
        item.forEach((subItem: any) => {
          if (subItem instanceof VNode) {
            subItem.parent = this
            if (key === ChildrenKey) this.appendChild(subItem)
            else if (this.isBasicWidget) this.appendChildInArrayProps(subItem, key)
          }
        })
      }
    }
  }

  // 在 props 中查找事件
  findEventsInProps() {
    if (!this.isBasicWidget) return
    this.events = {}
    let eventId: number = 0
    VNode.eventTypes.forEach(key => {
      let prop: any = this.props[key]
      if (prop instanceof Function) {
        const eventCacheId: string = `event/${++eventId}`
        if (VNode.throttledEventTypes.includes(key)) prop = Util.throttle(prop)
        this.events[eventCacheId] = prop
        this.props[`_${key}Id`] = eventCacheId
      }
    })
  }

  // 触发组件实例 render
  doRender() {
    if (!this.shouldRender) return
    this.shouldRender = false
    if (!this.widget) {
      this.widget = new this.widgetBuilder(this.props)
      this.widget.__vNode__ = this
    }
    this.widget.props = this.props

    if (!this.isBasicWidget) {
      const node: VNode | void = this.widget.render()
      if (!node) throw new Error(`Widget's render method must return a widget. Error in: <${this.type} />`)
      node.parent = this
      this.children = [node]
    }
  }

  // 执行组件更新
  doUpdate(): VNode | void {
    if (!this.widget) {
      this.widget = new this.widgetBuilder(this.props)
      this.widget.__vNode__ = this
    }
    const newRenderNode: VNode | void = this.widget.render()
    if (!newRenderNode) throw new Error(`Widget's render method must return a widget. Error in: <${this.type} />`)
    return newRenderNode
  }

  // 新旧节点融合
  doMerge(oldNode: VNode) {
    this.contextId = oldNode.contextId
    this.hasMount = true
    this.nodeId = oldNode.nodeId
    this.nativeViewId = oldNode.nativeViewId
    this.widget = oldNode.widget
    this.widget.__vNode__ = this
  }

  // 将 vNode 转换为 flutter 可用的 json
  toRenderData(pageName: string, setStateful: boolean = true): RenderData {
    this.pageName = pageName
    if (this.pageNode) this.pageNode = void 0
    this.findEventsInProps()
    this.doRender()

    if (!this.isBasicWidget) {
      // 非原子组件，children 只有 1 个元素
      // flutter version 1.1.0 及以上，所有自定义组件都是 stateful
      // flutter version 1.1.0 以下，只有声明了 state 的自定义组件才是 stateful
      if (this.children.length) {
        const child: VNode = this.children[0]
        if (Util.isNil(child.key)) child.parentKey = this.key || this.parentKey
        return child.toRenderData(pageName, true)
      }
    } else {
      let childrenRenderData: any = {}
      this.mapChildren((vNode: VNode, key: string, fromArray: boolean) => {
        if (!fromArray) childrenRenderData[key] = vNode.toRenderData(pageName, false)
        else {
          if (!childrenRenderData[key]) childrenRenderData[key] = []
          childrenRenderData[key].push(vNode.toRenderData(pageName, false))
        }
        if (key === ChildrenKey && !this.childrenIsArray) {
          childrenRenderData[this.childrenMapedName] = childrenRenderData[key][0]
          delete childrenRenderData[key]
        }
      })

      if (this.isPageNode) {
        const rootNode: VNode = this.fetchRootNode()
        rootNode.pageNode = this
      }

      if (this.isNativeViewNode) {
        const params = this.props.params || {}
        if (!params.__viewId__) {
          params.__viewId__ = this.nativeViewId
          this.props.params = params
        }
      }

      return {
        name: this.type,
        widgetId: this.nodeId,
        isStateful: setStateful,
        pageName,
        props: this.execPropsProvider(Object.assign({}, this.props, childrenRenderData)),
        key: this.key || this.parentKey
      }
    }
  }

  private execPropsProvider(props: Object): Object {
    const propsProviders: ThreshProvider[] = threshApp.providers.propsProvider || []
    let index = propsProviders.length - 1
    while (index > -1) {
      const provider = propsProviders[index--]
      const tempProps = provider.propsProvider(props)
      if (tempProps) props = tempProps
    }
    return props
  }

  // 在当前 vnode 上查找目标节点
  fetch(targetNodeId: string): VNode {
    if (this.nodeId === targetNodeId) return this
    let targetVNode: VNode
    this.mapChildren((vNode: VNode) => {
      if (vNode.nodeId === targetNodeId) {
        targetVNode = vNode
        return false
      }
      targetVNode = vNode.fetch(targetNodeId)
      return !targetVNode
    })
    return targetVNode
  }

  // 查找距离当前节点向上最近的可更新的原子节点
  fetchNearlyCanUpdateBasicNode(): VNode {
    const node: VNode = this.fetchNearlyCustomNode()
    let firstChildNode: VNode = node.children[0]
    while (firstChildNode && !firstChildNode.isBasicWidget) {
      firstChildNode = firstChildNode.children[0]
    }
    return firstChildNode
  }
  // 查找距离当前节点向上最近的非原子节点
  fetchNearlyCustomNode(): VNode {
    if (!this.isBasicWidget) return this
    const parent: VNode | void = this.parent
    if (parent) return parent.fetchNearlyCustomNode()
    return this
  }
  // 查找距离当前节点向下最近的原子节点
  fetchNearlyBasicNode(): VNode {
    if (this.isBasicWidget) return this
    return this.children[0].fetchNearlyBasicNode()
  }
  // 查找根节点
  fetchRootNode(): VNode {
    if (!this.parent) return this
    const parent: VNode | void = this.parent
    if (parent) return parent.fetchRootNode()
    return this
  }
  // 查找页面名
  fetchNodePageName(): string {
    if (this.pageName) return this.pageName
    if (this.parent) return this.parent.fetchNodePageName()
    return ''
  }

  // 毕竟两个节点的 type & key 是否相等
  isSameAs(otherNode: VNode) {
    return this.type === otherNode.type && this.key === otherNode.key
  }

  // 触发组件上的事件
  async invokeEvent(targetNodeId: string, eventId: string, eventType: string, params: any) {
    const targetNode: VNode = this.fetch(targetNodeId)
    if (!targetNode) return
    const eventFn: Function = targetNode.events[eventId]
    if (!eventFn) return
    if (!eventType || !VNode.asyncEventTypes.includes(eventType)) eventFn(params)
    else {
      try {
        await eventFn(params)
      } finally {
        // Hack fix
        // 异步操作完成后的32毫秒再发送停止异步操作的通知
        // 异步操作中可能含有setState，从而保证停止通知在setState后再发送
        TimerManager.setTimeout(() => {
          this.stopAsyncEvent(targetNode, eventType)
        }, 32)
      }
    }
  }

  // 停止异步事件
  stopAsyncEvent(node: VNode, eventType: string) {
    if (!node || !eventType || !VNode.asyncEventTypes.includes(eventType)) return
    if (node.type === 'ListView') {
      (node.widget as unknown as ListView).stopAsyncOperate(eventType === 'onRefresh' ? 'refresh' : 'loadMore')
    }
  }

  // 触发组件生命周期方法
  invokeLifeCycle(lifeStep: string) {
    if (!this.widget || !LifeCycle.isExist(lifeStep)) return

    const lifeStepIsDidUnmount = lifeStep === LifeCycle.widgetDidUnmount

    // 当生命周期不是卸载时，从子组件向父组件依次触发
    if (!lifeStepIsDidUnmount) {
      this._invokeChildrenLifeCycle(lifeStep)
    }
    
    if (!this.hasMount && lifeStep === LifeCycle.widgetDidUpdate) {
      this.hasMount = true
      this._invokeMountRef()
      this.widget.widgetDidMount()
    } else {
      this.hasMount = !lifeStepIsDidUnmount
      this._invokeMountRef()
      this.widget[lifeStep]()
    }

    // 当组件卸载时，didUnmount从父组件向子组件触发
    if (lifeStepIsDidUnmount) {
      this._invokeChildrenLifeCycle(lifeStep)
    }
  }

  private _invokeChildrenLifeCycle(lifeStep: string) {
    this.mapChildren((vNode: VNode) => {
      vNode.invokeLifeCycle(lifeStep)
    })
  }

  private _invokeMountRef() {
    if (!this.ref) return
    if (this.hasMount && !this._refHasMount) {
      this.ref(this.widget)
      this._refHasMount = true
    }
    else if (!this.hasMount && this._refHasMount) {
      this.ref(undefined)
      this._refHasMount = false
    }
  }

  // 向数组尾部添加子节点
  appendChild(child: VNode, target: VNode[] = this.children) {
    if (target.includes(child)) this.removeChild(child)
    target.push(child)
  }
  // 移除数组中的某个节点
  removeChild(child: VNode, target: VNode[] = this.children) {
    const removeIndex: number = target.indexOf(child)
    if (removeIndex > -1) target.splice(removeIndex, 1)
  }
  // 向 basicWidgetPropChildren 中的某个数组属性添加子节点
  appendChildInArrayProps(child: VNode, propName: string) {
    this.appendChild(child, this.getTargetChildrenArrayInPropChildren(propName))
  }

  // 遍历当前节点或目标中的所有子节点
  private mapChildren(
    cb: (vNode: VNode, key: string, fromArray: boolean) => boolean | void,
    mapTarget?: PropChildrenVNode | VNode[]
  ) {
    if (!mapTarget) {
      for (let i = 0; i < this.children.length; i++) {
        const item: VNode = this.children[i]
        if (item instanceof VNode && cb(item, ChildrenKey, true) === false) return
      }
      for (let key in this.basicWidgetPropChildren) {
        const item: PropChildrenVNodeType = this.basicWidgetPropChildren[key]
        if (!Array.isArray(item)) {
          if (item instanceof VNode && cb(item, key, false) === false) return
        } else {
          for (let i = 0; i < item.length; i++) {
            if (item[i] instanceof VNode && cb(item[i], key, true) === false) return
          }
        }
      }
    } else {
      if (Util.isArray(mapTarget)) {
        for (let i = 0; i < mapTarget.length; i++) {
          const item: VNode = mapTarget[i]
          if (item instanceof VNode && cb(item, '', true) === false) return
        }
      } else {
        for (let key in mapTarget) {
          const item: PropChildrenVNodeType = mapTarget[key]
          if (!Array.isArray(item)) {
            if (item instanceof VNode && cb(item, key, false) === false) return
          } else {
            for (let i = 0; i < item.length; i++) {
              if (item[i] instanceof VNode && cb(item[i], key, true) === false) return
            }
          }
        }
      }
    }
  }

  // 获取 basicWidgetPropChildren 中的某个数组属性
  private getTargetChildrenArrayInPropChildren(propName: string): VNode[] {
    if (!this.basicWidgetPropChildren[propName]) this.basicWidgetPropChildren[propName] = []
    return this.basicWidgetPropChildren[propName] as VNode[]
  }
}

/**
 * 生命周期类
 */
export class LifeCycle {
  private static lifes: string[] = [
    'widgetDidMount',
    'widgetDidUpdate',
    'widgetDidUnmount',
  ]

  static widgetDidMount: string = LifeCycle.lifes[0]
  static widgetDidUpdate: string = LifeCycle.lifes[1]
  static widgetDidUnmount: string = LifeCycle.lifes[2]

  static isExist(lifeStep: string): boolean {
    return LifeCycle.lifes.indexOf(lifeStep) > -1
  }
}
