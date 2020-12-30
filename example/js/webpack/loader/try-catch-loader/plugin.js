'use strict'

Object.defineProperty(exports, "__esModule", {
  value: true
})
const _babelTemplate = require('babel-template')
const _babelTemplate2 = _interopRequireDefault(_babelTemplate)
const _babelTypes = require('babel-types')
const t = _interopRequireWildcard(_babelTypes)
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) return obj
  else {
    var newObj = {}
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]
      }
    }
    newObj.default = obj
    return newObj
  }
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  }
}

const wrapFunctionRethrow = (0, _babelTemplate2.default)('{\n  try {\n    BODY\n  } catch(ERROR_VARIABLE_NAME) {\n    REPORT_ERROR(ERROR_VARIABLE_NAME, ERROR_FUNCTION_NAME, ERROR_FILE_NAME)\n    throw ERROR_VARIABLE_NAME\n  }\n}')
const wrapFunctionNothrow = (0, _babelTemplate2.default)('{\n  try {\n    BODY\n  } catch(ERROR_VARIABLE_NAME) {\n    REPORT_ERROR(ERROR_VARIABLE_NAME, ERROR_FUNCTION_NAME, ERROR_FILE_NAME)\n  }\n}')

let reportError = void 0
let fileName = void 0
let wrapFunction = void 0
// webpack 编译后不需要添加 try catch 的函数名
// 包括 Promise async await 编译后的函数
let noCatchFuncNames = [ '__', 'step', 'verb', 'rejected', 'fulfilled', 'adopt', '__awaiter', '__generator', 'P', ]

exports.default = {
  pre: function pre(file) {
    reportError = this.opts.reportError || 'console.error'
    wrapFunction = this.opts.rethrow ? wrapFunctionRethrow : wrapFunctionNothrow
    if (this.opts.noCatchFuncNames && this.opts.noCatchFuncNames.length) {
      noCatchFuncNames = noCatchFuncNames.concat(this.opts.noCatchFuncNames)
    }
    if (this.opts.reportError) noCatchFuncNames.push(this.opts.reportError)
    fileName = this.opts.fileName || ''
  },

  visitor: {
    'Function': {
      exit: function (path, state) {
        const body = path.node.body.body
        if (body.length === 0) return

        let functionName = ''
        
        // 如果 body 只有 1 个节点，类型为 return
        // 则获取该节点返回值的 name
        // name 可能的值为 __awaiter __generator step
        // 以此过滤掉异步回调
        if (body.length === 1) {
          const returnNode = body[0]
          if (returnNode.type === 'ReturnStatement' && returnNode.argument && returnNode.argument.callee) {
            functionName = returnNode.argument.callee.name
          }
        }
        // 如果节点存在父节点的调用关系
        // 获取父节点 name
        // name 可能的值为 __awaiter __generator step
        // 以此过滤掉异步回调
        else if (path.parent && path.parent.callee && path.parent.callee.name) {
          functionName = path.parent.callee.name
        }
        // 正常获取函数名
        // 匿名函数不存在 id & key
        else if (path.node.id) functionName = path.node.id.name
        else if (path.node.key) functionName = path.node.key.name

        if (noCatchFuncNames.indexOf(functionName) > -1) return

        path.get('body').replaceWith(wrapFunction({
          BODY: body,
          REPORT_ERROR: t.identifier(reportError),
          ERROR_VARIABLE_NAME: path.scope.generateUidIdentifier('e'),
          ERROR_FUNCTION_NAME: t.StringLiteral(functionName || ''),
          ERROR_FILE_NAME: t.StringLiteral(fileName || '')
        }))
      }
    }
  }
}