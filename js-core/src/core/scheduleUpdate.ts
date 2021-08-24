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

import VNode, { PropChildrenVNodeType, PropChildrenVNode } from './VNode'
import RenderManager from '../manager/RenderManager'
import Util from '../shared/Util'
import TimerManager from '../manager/TimerManager'

// 更新队列
class UpdateQueue {
  static lastPrecommitTime: number = Date.now()
  static commitPendingTime: number = 16

  private queue: VNode[] = []
  get isEmpty(): boolean {
    return !this.queue.length
  }

  // 重置队列
  reset() {
    this.queue = []
  }
  // 向队尾添加节点
  add(node: VNode) {
    if (!this.queue.includes(node)) {
      this.queue.push(node)
    }
  }
  // 使队内元素唯一并重置
  // 返回操作后得到的数组
  // 规则：遍历所有节点，每一个节点向上获取其所有父元素，如果其父元素已经存在于队列中，则忽略该节点
  unique(): VNode[] {
    const uniqued: VNode[] = this.queue.filter((node: VNode, index: number, source: VNode[]) => {
      if (!node.hasMount) return false
      let parent: VNode | void = node.parent
      while (parent) {
        if (source.includes(parent) || !parent.hasMount) return false
        parent = parent.parent
      }
      return true
    })
    this.reset()
    return uniqued
  }
}

// 待更新队列
const pendingUpdateQueue: UpdateQueue = new UpdateQueue()
// 最终执行更新的队列
const shouldUpdateQueue: UpdateQueue = new UpdateQueue()

// 计划更新
// 收集 16ms 内产生的所有更新节点后再更新
export default function scheduleUpdate(vNode: VNode) {
  const now = Date.now()
  if (pendingUpdateQueue.isEmpty || now - UpdateQueue.lastPrecommitTime >= UpdateQueue.commitPendingTime) {
    UpdateQueue.lastPrecommitTime = now
    TimerManager.setTimeout(() => {
      prepareCommit(pendingUpdateQueue.unique())
    }, UpdateQueue.commitPendingTime)
  }
  pendingUpdateQueue.add(vNode)
}

// 准备更新
// 对队列中的节点执行更新操作
// 在粗粒度比较每一个用户自定义节点后进行更新
function prepareCommit(pendingUpdateQueue: VNode[]) {
  pendingUpdateQueue.forEach((item: VNode) => {
    const newRenderNode: VNode | void = item.doUpdate()
    const oldRenderNode: VNode | void = item.children[0]
    if (!newRenderNode || !oldRenderNode) return

    compareAndMergeNode(
      newRenderNode,
      oldRenderNode
    )
    const updateNodeId = oldRenderNode.fetchNearlyCanUpdateBasicNode().nodeId
    newRenderNode.parent = item
    item.children = [newRenderNode]
    item.updateInfo = {
      updateNodeId,
      invokeUpdateNodeId: item.nodeId
    }
    shouldUpdateQueue.add(item)
  })

  commitUpdate()
}

// 提交更新
function commitUpdate() {
  shouldUpdateQueue.unique().forEach((updateNode: VNode) => {
    if (!updateNode.updateInfo) return
    const { updateNodeId, invokeUpdateNodeId } = updateNode.updateInfo
    RenderManager.updateWidget(updateNode, updateNodeId, invokeUpdateNodeId, updateNode.fetchNodePageName())
    updateNode.updateInfo = null
  })
}

// 比较与合并新旧节点
function compareAndMergeNode(
  newNode: VNode,
  oldNode: VNode
): boolean {
  if (!newNode || !oldNode) return
  if (!(newNode instanceof VNode) || !(oldNode instanceof VNode)) return
  if (newNode === oldNode) return
  if (!newNode.isSameAs(oldNode)) return

  newNode.doMerge(oldNode)

  const newNodeIsBasic: boolean = newNode.isBasicWidget
  const oldNodeIsBasic: boolean = oldNode.isBasicWidget

  // 仅处理 type相同 key相同并且都是自定义组件的节点
  // 使用旧节点的 widget，以新节点的 props 重新渲染
  // 使新的自定义组件具有之前的 state
  if (!newNodeIsBasic && !oldNodeIsBasic) {
    newNode.doRender()
    compareAndMergeNode(newNode.children[0], oldNode.children[0])
  }

  // 新旧节点 type相同 key相同并且都是原子节点时
  // 对新旧节点内部的各节点进行 compare and merge
  if (newNodeIsBasic && oldNodeIsBasic) {
    // if (newNode.isInputNode && oldNode.isInputNode) {
    //   if (newNode.props.value !== oldNode.props.value) {
    //     UtilManager.error(`Dont update 'text' prop of <Input /> by call setState(), this will not take effect on <Input />. You can use Input ref method setValue() to update it.`)
    //   }
    // }

    // 对 children 进行比较
    compareNodeInProps(newNode.basicWidgetPropChildren, oldNode.basicWidgetPropChildren)
    compareNodeArray(newNode.children, oldNode.children)
    // 对 props 中的节点进行比较
    const newKeys: string[] = Object.keys(newNode.basicWidgetPropChildren)
    const oldKeys: string[] = Object.keys(oldNode.basicWidgetPropChildren)
    // 获取 props 中新旧节点 keyName 的并集
    const keys = Array.from(new Set([...newKeys, ...oldKeys]))
    for (let key in keys) {
      const itemInOld: PropChildrenVNodeType | void = oldNode[key]
      const itemInNew: PropChildrenVNodeType | void = newNode[key]

      // 新旧节点并不都存在时忽略
      if (!itemInOld || !itemInNew) continue

      const itemInOldIsArray: boolean = Array.isArray(itemInOld)
      const itemInNewIsArray: boolean = Array.isArray(itemInNew)

      // 新旧节点都不是数组
      if (!itemInOldIsArray && !itemInNewIsArray) {
        compareAndMergeNode(itemInNew as VNode, itemInOld as VNode)
      }
      // 新旧节点都是数组
      if (itemInOldIsArray && itemInNewIsArray) {
        compareNodeArray(itemInNew as VNode[], itemInOld as VNode[])
      }
    }
  }
}

// 比较两个节点数组
function compareNodeArray(newNodeArray: VNode[], oldNodeArray: VNode[]) {
  const newLength: number = (newNodeArray || []).length
  const oldLength: number = (oldNodeArray || []).length
  if (!newLength || !oldLength) return

  let indexInNew: number = 0
  while (indexInNew < newLength) {
    const newNode: VNode = newNodeArray[indexInNew]
    // 旧数组索引
    let indexInOld: number = 0
    // 与新节点相同的旧节点在旧数组中的位置
    let mountIndexInOldArray: number

    let oldNode: VNode = oldNodeArray[indexInOld]
    // 在旧数组中查找与当前新节点相同的第一个元素的位置
    while (oldNode && Util.isNil(mountIndexInOldArray)) {
      if (newNode.isSameAs(oldNode)) mountIndexInOldArray = indexInOld
      oldNode = oldNodeArray[++indexInOld]
    }
    // 旧数组中存在与当前新节点相同的元素时
    // 从旧数组中移除并获取该元素，与新节点进行比较
    if (!Util.isNil(mountIndexInOldArray)) {
      oldNode = oldNodeArray.splice(mountIndexInOldArray, 1)[0]
      compareAndMergeNode(newNode, oldNode)
    }
    indexInNew++
  }
}

// 比较属性上的节点
function compareNodeInProps(newPropNodes: PropChildrenVNode, oldPropsNodes: PropChildrenVNode) {
  for (let key in newPropNodes) {
    if (newPropNodes[key]) {
      compareAndMergeNode(newPropNodes[key] as VNode, oldPropsNodes[key] as VNode)
    }
    if (newPropNodes[key] instanceof Array) {
      compareNodeArray(newPropNodes[key] as VNode[], oldPropsNodes[key] as VNode[])
    }
  }
}
