/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(2));

var _symbol = _interopRequireDefault(__webpack_require__(100));

var _iterator = _interopRequireDefault(__webpack_require__(132));

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  try {
    function adopt(value) {
      try {
        return value instanceof P ? value : new P(function (resolve) {
          try {
            resolve(value);
          } catch (_e) {
            __reportError__(_e, "", "");

            throw _e;
          }
        });
      } catch (_e2) {
        __reportError__(_e2, "", "");

        throw _e2;
      }
    }

    return new (P || (P = _promise["default"]))(function (resolve, reject) {
      try {
        function fulfilled(value) {
          try {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          } catch (_e3) {
            __reportError__(_e3, "", "");

            throw _e3;
          }
        }

        function rejected(value) {
          try {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          } catch (_e4) {
            __reportError__(_e4, "", "");

            throw _e4;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e5) {
            __reportError__(_e5, "", "");

            throw _e5;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e6) {
        __reportError__(_e6, "", "");

        throw _e6;
      }
    });
  } catch (_e7) {
    __reportError__(_e7, "", "");

    throw _e7;
  }
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  try {
    var _ = {
      label: 0,
      sent: function sent() {
        try {
          if (t[0] & 1) throw t[1];
          return t[1];
        } catch (_e8) {
          __reportError__(_e8, "sent", "");

          throw _e8;
        }
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof _symbol["default"] === "function" && (g[_iterator["default"]] = function () {
      try {
        return this;
      } catch (_e9) {
        __reportError__(_e9, "", "");

        throw _e9;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e10) {
        __reportError__(_e10, "", "");

        throw _e10;
      }
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  } catch (_e11) {
    __reportError__(_e11, "", "");

    throw _e11;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(139);

var homePage_1 = __webpack_require__(275);

var managePage_1 = __webpack_require__(294);

var signupPage_1 = __webpack_require__(296);

var webviewPage_1 = __webpack_require__(300); // 注入路由
// 可在开发时使用，从而直接进入某个页面
// Thresh.injectRoute({
//   pageName: 'managePage',
//   params: {
//     title: '活动详情'
//   }
// })


thresh_lib_1["default"].registerPage('homePage', function () {
  try {
    return homePage_1["default"];
  } catch (_e12) {
    __reportError__(_e12, "", "");

    throw _e12;
  }
}, {
  isDefault: true
});
thresh_lib_1["default"].registerPage('signupPage', function () {
  try {
    return signupPage_1["default"];
  } catch (_e13) {
    __reportError__(_e13, "", "");

    throw _e13;
  }
});
thresh_lib_1["default"].registerPage('managePage', function () {
  try {
    return managePage_1["default"];
  } catch (_e14) {
    __reportError__(_e14, "", "");

    throw _e14;
  }
});
thresh_lib_1["default"].registerPage('webviewPage', function () {
  try {
    return webviewPage_1["default"];
  } catch (_e15) {
    __reportError__(_e15, "", "");

    throw _e15;
  }
});
/**
 * flutter 环境准备就绪
 * js 主动显示页面
 */

thresh_lib_1["default"].ready = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      try {
        thresh_lib_1["default"].runApp();
      } catch (error) {
        thresh_lib_1["default"].onError(error);
      }

      return [2
      /*return*/
      ];
    });
  });
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(4);

module.exports = parent;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
__webpack_require__(66);
__webpack_require__(67);
__webpack_require__(88);
__webpack_require__(89);
__webpack_require__(90);
__webpack_require__(91);
__webpack_require__(96);
var path = __webpack_require__(24);

module.exports = path.Promise;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var getPrototypeOf = __webpack_require__(30);
var setPrototypeOf = __webpack_require__(39);
var create = __webpack_require__(41);
var createNonEnumerableProperty = __webpack_require__(27);
var createPropertyDescriptor = __webpack_require__(13);
var iterate = __webpack_require__(53);

var $AggregateError = function AggregateError(errors, message) {
  var that = this;
  if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
  if (setPrototypeOf) {
    // eslint-disable-next-line unicorn/error-message -- expected
    that = setPrototypeOf(new Error(undefined), getPrototypeOf(that));
  }
  if (message !== undefined) createNonEnumerableProperty(that, 'message', String(message));
  var errorsArray = [];
  iterate(errors, errorsArray.push, { that: errorsArray });
  createNonEnumerableProperty(that, 'errors', errorsArray);
  return that;
};

$AggregateError.prototype = create(Error.prototype, {
  constructor: createPropertyDescriptor(5, $AggregateError),
  message: createPropertyDescriptor(5, ''),
  name: createPropertyDescriptor(5, 'AggregateError')
});

// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$({ global: true }, {
  AggregateError: $AggregateError
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7);
var getOwnPropertyDescriptor = __webpack_require__(9).f;
var isForced = __webpack_require__(23);
var path = __webpack_require__(24);
var bind = __webpack_require__(25);
var createNonEnumerableProperty = __webpack_require__(27);
var has = __webpack_require__(20);

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  /* global globalThis -- safe */
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(10);
var propertyIsEnumerableModule = __webpack_require__(12);
var createPropertyDescriptor = __webpack_require__(13);
var toIndexedObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(18);
var has = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(21);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(11);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(15);
var requireObjectCoercible = __webpack_require__(17);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(11);
var classof = __webpack_require__(16);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(10);
var fails = __webpack_require__(11);
var createElement = __webpack_require__(22);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var isObject = __webpack_require__(19);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(11);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(26);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(10);
var definePropertyModule = __webpack_require__(28);
var createPropertyDescriptor = __webpack_require__(13);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(21);
var anObject = __webpack_require__(29);
var toPrimitive = __webpack_require__(18);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(20);
var toObject = __webpack_require__(31);
var sharedKey = __webpack_require__(32);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(38);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(17);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33);
var uid = __webpack_require__(37);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(34);
var store = __webpack_require__(35);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.9.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var setGlobal = __webpack_require__(36);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var createNonEnumerableProperty = __webpack_require__(27);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(11);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(29);
var aPossiblePrototype = __webpack_require__(40);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(29);
var defineProperties = __webpack_require__(42);
var enumBugKeys = __webpack_require__(50);
var hiddenKeys = __webpack_require__(49);
var html = __webpack_require__(51);
var documentCreateElement = __webpack_require__(22);
var sharedKey = __webpack_require__(32);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(10);
var definePropertyModule = __webpack_require__(28);
var anObject = __webpack_require__(29);
var objectKeys = __webpack_require__(43);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(44);
var enumBugKeys = __webpack_require__(50);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(20);
var toIndexedObject = __webpack_require__(14);
var indexOf = __webpack_require__(45).indexOf;
var hiddenKeys = __webpack_require__(49);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(14);
var toLength = __webpack_require__(46);
var toAbsoluteIndex = __webpack_require__(48);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(47);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(47);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(52);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(24);
var global = __webpack_require__(7);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(29);
var isArrayIteratorMethod = __webpack_require__(54);
var toLength = __webpack_require__(46);
var bind = __webpack_require__(25);
var getIteratorMethod = __webpack_require__(62);
var iteratorClose = __webpack_require__(65);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(55);
var Iterators = __webpack_require__(61);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var shared = __webpack_require__(33);
var has = __webpack_require__(20);
var uid = __webpack_require__(37);
var NATIVE_SYMBOL = __webpack_require__(56);
var USE_SYMBOL_AS_UID = __webpack_require__(60);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var IS_NODE = __webpack_require__(57);
var V8_VERSION = __webpack_require__(58);
var fails = __webpack_require__(11);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  /* global Symbol -- required for testing */
  return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);
});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(16);
var global = __webpack_require__(7);

module.exports = classof(global.process) == 'process';


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var userAgent = __webpack_require__(59);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(52);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(56);

module.exports = NATIVE_SYMBOL
  /* global Symbol -- safe */
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(63);
var Iterators = __webpack_require__(61);
var wellKnownSymbol = __webpack_require__(55);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(64);
var classofRaw = __webpack_require__(16);
var wellKnownSymbol = __webpack_require__(55);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(55);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(29);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var IS_PURE = __webpack_require__(34);
var global = __webpack_require__(7);
var getBuiltIn = __webpack_require__(52);
var NativePromise = __webpack_require__(68);
var redefine = __webpack_require__(69);
var redefineAll = __webpack_require__(70);
var setToStringTag = __webpack_require__(71);
var setSpecies = __webpack_require__(73);
var isObject = __webpack_require__(19);
var aFunction = __webpack_require__(26);
var anInstance = __webpack_require__(74);
var inspectSource = __webpack_require__(75);
var iterate = __webpack_require__(53);
var checkCorrectnessOfIteration = __webpack_require__(76);
var speciesConstructor = __webpack_require__(77);
var task = __webpack_require__(78).set;
var microtask = __webpack_require__(80);
var promiseResolve = __webpack_require__(82);
var hostReportErrors = __webpack_require__(84);
var newPromiseCapabilityModule = __webpack_require__(83);
var perform = __webpack_require__(85);
var InternalStateModule = __webpack_require__(86);
var isForced = __webpack_require__(23);
var wellKnownSymbol = __webpack_require__(55);
var IS_NODE = __webpack_require__(57);
var V8_VERSION = __webpack_require__(58);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);

module.exports = global.Promise;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(27);

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(69);

module.exports = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
  } return target;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(64);
var defineProperty = __webpack_require__(28).f;
var createNonEnumerableProperty = __webpack_require__(27);
var has = __webpack_require__(20);
var toString = __webpack_require__(72);
var wellKnownSymbol = __webpack_require__(55);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!has(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(64);
var classof = __webpack_require__(63);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(52);
var definePropertyModule = __webpack_require__(28);
var wellKnownSymbol = __webpack_require__(55);
var DESCRIPTORS = __webpack_require__(10);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(35);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(55);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(29);
var aFunction = __webpack_require__(26);
var wellKnownSymbol = __webpack_require__(55);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var fails = __webpack_require__(11);
var bind = __webpack_require__(25);
var html = __webpack_require__(51);
var createElement = __webpack_require__(22);
var IS_IOS = __webpack_require__(79);
var IS_NODE = __webpack_require__(57);

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins -- safe
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(59);

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var getOwnPropertyDescriptor = __webpack_require__(9).f;
var macrotask = __webpack_require__(78).set;
var IS_IOS = __webpack_require__(79);
var IS_WEBOS_WEBKIT = __webpack_require__(81);
var IS_NODE = __webpack_require__(57);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(59);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(29);
var isObject = __webpack_require__(19);
var newPromiseCapability = __webpack_require__(83);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(26);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(87);
var global = __webpack_require__(7);
var isObject = __webpack_require__(19);
var createNonEnumerableProperty = __webpack_require__(27);
var objectHas = __webpack_require__(20);
var shared = __webpack_require__(35);
var sharedKey = __webpack_require__(32);
var hiddenKeys = __webpack_require__(49);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var inspectSource = __webpack_require__(75);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var aFunction = __webpack_require__(26);
var newPromiseCapabilityModule = __webpack_require__(83);
var perform = __webpack_require__(85);
var iterate = __webpack_require__(53);

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var aFunction = __webpack_require__(26);
var getBuiltIn = __webpack_require__(52);
var newPromiseCapabilityModule = __webpack_require__(83);
var perform = __webpack_require__(85);
var iterate = __webpack_require__(53);

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$({ target: 'Promise', stat: true }, {
  any: function any(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        errors.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var IS_PURE = __webpack_require__(34);
var NativePromise = __webpack_require__(68);
var fails = __webpack_require__(11);
var getBuiltIn = __webpack_require__(52);
var speciesConstructor = __webpack_require__(77);
var promiseResolve = __webpack_require__(82);
var redefine = __webpack_require__(69);

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// patch native Promise.prototype for native async functions
if (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
  redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
}


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(92).charAt;
var InternalStateModule = __webpack_require__(86);
var defineIterator = __webpack_require__(93);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(47);
var requireObjectCoercible = __webpack_require__(17);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var createIteratorConstructor = __webpack_require__(94);
var getPrototypeOf = __webpack_require__(30);
var setPrototypeOf = __webpack_require__(39);
var setToStringTag = __webpack_require__(71);
var createNonEnumerableProperty = __webpack_require__(27);
var redefine = __webpack_require__(69);
var wellKnownSymbol = __webpack_require__(55);
var IS_PURE = __webpack_require__(34);
var Iterators = __webpack_require__(61);
var IteratorsCore = __webpack_require__(95);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(95).IteratorPrototype;
var create = __webpack_require__(41);
var createPropertyDescriptor = __webpack_require__(13);
var setToStringTag = __webpack_require__(71);
var Iterators = __webpack_require__(61);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(11);
var getPrototypeOf = __webpack_require__(30);
var createNonEnumerableProperty = __webpack_require__(27);
var has = __webpack_require__(20);
var wellKnownSymbol = __webpack_require__(55);
var IS_PURE = __webpack_require__(34);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
var DOMIterables = __webpack_require__(99);
var global = __webpack_require__(7);
var classof = __webpack_require__(63);
var createNonEnumerableProperty = __webpack_require__(27);
var Iterators = __webpack_require__(61);
var wellKnownSymbol = __webpack_require__(55);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(14);
var addToUnscopables = __webpack_require__(98);
var Iterators = __webpack_require__(61);
var InternalStateModule = __webpack_require__(86);
var defineIterator = __webpack_require__(93);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 99 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(101);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(102);

module.exports = parent;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
__webpack_require__(66);
__webpack_require__(108);
__webpack_require__(115);
__webpack_require__(116);
__webpack_require__(117);
__webpack_require__(118);
__webpack_require__(119);
__webpack_require__(120);
__webpack_require__(121);
__webpack_require__(122);
__webpack_require__(123);
__webpack_require__(124);
__webpack_require__(125);
__webpack_require__(126);
__webpack_require__(127);
__webpack_require__(128);
__webpack_require__(129);
__webpack_require__(130);
__webpack_require__(131);
var path = __webpack_require__(24);

module.exports = path.Symbol;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var fails = __webpack_require__(11);
var isArray = __webpack_require__(104);
var isObject = __webpack_require__(19);
var toObject = __webpack_require__(31);
var toLength = __webpack_require__(46);
var createProperty = __webpack_require__(105);
var arraySpeciesCreate = __webpack_require__(106);
var arrayMethodHasSpeciesSupport = __webpack_require__(107);
var wellKnownSymbol = __webpack_require__(55);
var V8_VERSION = __webpack_require__(58);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(16);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(18);
var definePropertyModule = __webpack_require__(28);
var createPropertyDescriptor = __webpack_require__(13);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
var isArray = __webpack_require__(104);
var wellKnownSymbol = __webpack_require__(55);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(11);
var wellKnownSymbol = __webpack_require__(55);
var V8_VERSION = __webpack_require__(58);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var global = __webpack_require__(7);
var getBuiltIn = __webpack_require__(52);
var IS_PURE = __webpack_require__(34);
var DESCRIPTORS = __webpack_require__(10);
var NATIVE_SYMBOL = __webpack_require__(56);
var USE_SYMBOL_AS_UID = __webpack_require__(60);
var fails = __webpack_require__(11);
var has = __webpack_require__(20);
var isArray = __webpack_require__(104);
var isObject = __webpack_require__(19);
var anObject = __webpack_require__(29);
var toObject = __webpack_require__(31);
var toIndexedObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(18);
var createPropertyDescriptor = __webpack_require__(13);
var nativeObjectCreate = __webpack_require__(41);
var objectKeys = __webpack_require__(43);
var getOwnPropertyNamesModule = __webpack_require__(109);
var getOwnPropertyNamesExternal = __webpack_require__(110);
var getOwnPropertySymbolsModule = __webpack_require__(111);
var getOwnPropertyDescriptorModule = __webpack_require__(9);
var definePropertyModule = __webpack_require__(28);
var propertyIsEnumerableModule = __webpack_require__(12);
var createNonEnumerableProperty = __webpack_require__(27);
var redefine = __webpack_require__(69);
var shared = __webpack_require__(33);
var sharedKey = __webpack_require__(32);
var hiddenKeys = __webpack_require__(49);
var uid = __webpack_require__(37);
var wellKnownSymbol = __webpack_require__(55);
var wrappedWellKnownSymbolModule = __webpack_require__(112);
var defineWellKnownSymbol = __webpack_require__(113);
var setToStringTag = __webpack_require__(71);
var InternalStateModule = __webpack_require__(86);
var $forEach = __webpack_require__(114).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(44);
var enumBugKeys = __webpack_require__(50);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(14);
var nativeGetOwnPropertyNames = __webpack_require__(109).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 111 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(55);

exports.f = wellKnownSymbol;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(24);
var has = __webpack_require__(20);
var wrappedWellKnownSymbolModule = __webpack_require__(112);
var defineProperty = __webpack_require__(28).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(25);
var IndexedObject = __webpack_require__(15);
var toObject = __webpack_require__(31);
var toLength = __webpack_require__(46);
var arraySpeciesCreate = __webpack_require__(106);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(113);

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),
/* 116 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(113);

// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(113);

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(113);

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(113);

// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(113);

// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
defineWellKnownSymbol('matchAll');


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(113);

// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(113);

// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(113);

// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(113);

// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(113);

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(113);

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(113);

// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var setToStringTag = __webpack_require__(71);

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 130 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 131 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(133);

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(134);

module.exports = parent;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(119);
__webpack_require__(91);
__webpack_require__(96);
var WrappedWellKnownSymbolModule = __webpack_require__(112);

module.exports = WrappedWellKnownSymbolModule.f('iterator');


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(136);

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(137);

module.exports = parent;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
var path = __webpack_require__(24);

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(10);
var objectDefinePropertyModile = __webpack_require__(28);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.injectRoute = exports.createElement = exports.basicWidgets = exports.Event = exports.Timer = exports.ui = exports.Bridge = exports.Util = exports.Widget = void 0;

var ThreshApp_1 = __webpack_require__(140);

(0, _defineProperty["default"])(exports, "injectRoute", {
  enumerable: true,
  get: function get() {
    try {
      return ThreshApp_1.injectRoute;
    } catch (_e) {
      __reportError__(_e, "", "");

      throw _e;
    }
  }
});

var Widget_1 = __webpack_require__(256);

exports.Widget = Widget_1["default"];

var createElement_1 = __webpack_require__(272);

exports.createElement = createElement_1["default"];

var basicWidget_1 = __webpack_require__(247);

exports.basicWidgets = basicWidget_1["default"];

var RenderManager_1 = __webpack_require__(234);

var UtilManager_1 = __webpack_require__(233);

exports.Util = UtilManager_1["default"];

var UIManager_1 = __webpack_require__(246);

exports.ui = UIManager_1["default"];

var BridgeManager_1 = __webpack_require__(150);

exports.Bridge = BridgeManager_1["default"];

var EventManager_1 = __webpack_require__(274);

exports.Event = EventManager_1["default"];

var TimerManager_1 = __webpack_require__(232);

exports.Timer = TimerManager_1["default"];
var Thresh = ThreshApp_1["default"];
RenderManager_1["default"].getMediaQuery(Thresh.jsVersion);
EventManager_1["default"].registerBuiltInEvents();
exports["default"] = Thresh;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(2));

var _symbol = _interopRequireDefault(__webpack_require__(100));

var _iterator = _interopRequireDefault(__webpack_require__(132));

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _now = _interopRequireDefault(__webpack_require__(141));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  try {
    function adopt(value) {
      try {
        return value instanceof P ? value : new P(function (resolve) {
          try {
            resolve(value);
          } catch (_e) {
            __reportError__(_e, "", "");

            throw _e;
          }
        });
      } catch (_e2) {
        __reportError__(_e2, "", "");

        throw _e2;
      }
    }

    return new (P || (P = _promise["default"]))(function (resolve, reject) {
      try {
        function fulfilled(value) {
          try {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          } catch (_e3) {
            __reportError__(_e3, "", "");

            throw _e3;
          }
        }

        function rejected(value) {
          try {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          } catch (_e4) {
            __reportError__(_e4, "", "");

            throw _e4;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e5) {
            __reportError__(_e5, "", "");

            throw _e5;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e6) {
        __reportError__(_e6, "", "");

        throw _e6;
      }
    });
  } catch (_e7) {
    __reportError__(_e7, "", "");

    throw _e7;
  }
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  try {
    var _ = {
      label: 0,
      sent: function sent() {
        try {
          if (t[0] & 1) throw t[1];
          return t[1];
        } catch (_e8) {
          __reportError__(_e8, "sent", "");

          throw _e8;
        }
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof _symbol["default"] === "function" && (g[_iterator["default"]] = function () {
      try {
        return this;
      } catch (_e9) {
        __reportError__(_e9, "", "");

        throw _e9;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e10) {
        __reportError__(_e10, "", "");

        throw _e10;
      }
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  } catch (_e11) {
    __reportError__(_e11, "", "");

    throw _e11;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.injectRoute = exports.ThreshApp = void 0;

var MethodChannel_1 = __webpack_require__(145);

var RenderManager_1 = __webpack_require__(234);

var createElement_1 = __webpack_require__(272);

var Widget_1 = __webpack_require__(256);

var VNode_1 = __webpack_require__(204);

var AppContainer_1 = __webpack_require__(210);

var ThreshAppContext_1 = __webpack_require__(273);

var Util_1 = __webpack_require__(162);

var bus_1 = __webpack_require__(226);

var EventManager_1 = __webpack_require__(274);
/**
 * 对外暴露所有接口的threshApp主类
 */


var ThreshApp =
/** @class */
function () {
  try {
    function ThreshApp() {
      try {
        // 是否正在关闭 modal
        // 如果正在关闭中，将阻止新的 modal 创建
        this._modalIsHiding = false; // 是否调试模式

        this.debugMode = false; // 外部环境是否准备完成

        this.envReady = false; // 三方插件

        this.providers = {}; // 持有注入的路由信息

        this.injectRoute = injectRoute;
        this.createElement = createElement_1["default"];
        this.Widget = Widget_1["default"]; // 上报异常到 flutter

        this.onError = function (error) {};
        /**
         * 判断当前 df 版本是否小于目标版本
         * @param flutterVersion 目标 df 版本
         */


        this.flutterVersionSmallerThan = Util_1["default"].flutterVersionSmallerThan;
        /**
         * @override
         * 表示相关环境已准备完成执行的回调，如 flutter 环境
         * 可以在这个函数中做一些配置
         */

        this.ready = function () {};

        ThreshAppContext_1["default"].initGlobal(threshApp);
      } catch (_e12) {
        __reportError__(_e12, "ThreshApp", "");

        throw _e12;
      }
    }

    (0, _defineProperty["default"])(ThreshApp.prototype, "jsVersion", {
      // js version
      get: function get() {
        try {
          return '1.3.0';
        } catch (_e13) {
          __reportError__(_e13, "", "");

          throw _e13;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(ThreshApp.prototype, "pageName", {
      get: function get() {
        try {
          return AppContainer_1["default"].currentPageName || (threshApp.injectRouteInfo || {
            pageName: ''
          }).pageName;
        } catch (_e14) {
          __reportError__(_e14, "", "");

          throw _e14;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(ThreshApp.prototype, "referPageName", {
      get: function get() {
        try {
          return AppContainer_1["default"].referPageName || '';
        } catch (_e15) {
          __reportError__(_e15, "", "");

          throw _e15;
        }
      },
      enumerable: false,
      configurable: true
    });

    ThreshApp.prototype.clear = function () {
      try {
        AppContainer_1["default"].clear();
        bus_1["default"].clear();
        EventManager_1["default"].resetAndRegisterBuiltInEvents();
      } catch (_e16) {
        __reportError__(_e16, "", "");

        throw _e16;
      }
    };
    /**
     * 注册页面
     * @param {String} pageName
     * @param {Function} pageBuilder
     * @param {boolean} isDefault
     */


    ThreshApp.prototype.registerPage = function (pageName, pageBuilder, config) {
      try {
        if (config === void 0) {
          config = {
            isDefault: false,
            isNotFound: false
          };
        }

        AppContainer_1["default"].addRoute(pageName, pageBuilder);
        if (config.isDefault) this._defaultPageName = pageName;
        if (config.isNotFound) this._notFoundPageName = pageName;
      } catch (_e17) {
        __reportError__(_e17, "", "");

        throw _e17;
      }
    };
    /**
     * js主动显示页面
     * 存在 injectRouteInfo 时显示 injectRouteInfo 对应的页面
     * 不存在时显示 _defaultPageName 页面
     * 都不存在时不显示
     */


    ThreshApp.prototype.runApp = function () {
      try {
        this.pushPage();
      } catch (_e18) {
        __reportError__(_e18, "", "");

        throw _e18;
      }
    };
    /**
     * 通知 flutter 进入下一级页面
     * @param {String} pageName
     * @param {Object} params 页面参数
     */


    ThreshApp.prototype.pushPage = function (pageName, params) {
      try {
        if (params === void 0) {
          params = {};
        }

        var pageCreateTimestamp = (0, _now["default"])();

        var pageRes = this._findPage(pageName || '', params);

        if (pageRes.pageData) {
          RenderManager_1["default"].pushPage(pageRes.pageData, pageRes.pageName, pageCreateTimestamp);
          Util_1["default"].log('Push page: ' + pageRes.pageName);
        }
      } catch (_e19) {
        __reportError__(_e19, "", "");

        throw _e19;
      }
    };
    /**
     * 推出页面或关闭当前窗口
     */


    ThreshApp.prototype.popPage = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          try {
            switch (_a.label) {
              case 0:
                if (AppContainer_1["default"].isEmpty) return [2
                /*return*/
                ];
                return [4
                /*yield*/
                , RenderManager_1["default"].popPage()];

              case 1:
                return [2
                /*return*/
                , _a.sent()];
            }
          } catch (_e20) {
            __reportError__(_e20, "", "");

            throw _e20;
          }
        });
      });
    };
    /**
     * 当前页面是否可以pop
     */


    ThreshApp.prototype.canPop = function () {
      try {
        return AppContainer_1["default"].canPop;
      } catch (_e21) {
        __reportError__(_e21, "", "");

        throw _e21;
      }
    };
    /**
     * 显示模态框
     * @param {VNode} modal
     * @param {String} title
     * @param {boolean} popup
     */


    ThreshApp.prototype.showModal = function (modal, _a) {
      try {
        var _b = _a === void 0 ? {} : _a,
            title = _b.title,
            popup = _b.popup;

        if (!this._modalIsHiding) {
          RenderManager_1["default"].showModal(modal, AppContainer_1["default"].formatModalName(title), !!popup);
        }
      } catch (_e22) {
        __reportError__(_e22, "", "");

        throw _e22;
      }
    };
    /**
     * 隐藏模态框
     */


    ThreshApp.prototype.hideModal = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          try {
            switch (_a.label) {
              case 0:
                this._modalIsHiding = true;
                return [4
                /*yield*/
                , RenderManager_1["default"].hideModal()];

              case 1:
                _a.sent();

                this._modalIsHiding = false;
                return [2
                /*return*/
                ];
            }
          } catch (_e23) {
            __reportError__(_e23, "", "");

            throw _e23;
          }
        });
      });
    };
    /**
     * 显示 toast
     * toast 不具备生命周期
     * @param {VNode} toast
     * @param {ToastInfo} info 该参数字段见下，可选
     * @param {String} name 名称，用来控制隐藏，如果不设置将会设置为自动隐藏
     * @param {int} stayTime toast 保持时间，默认 2000ms
     * @param {int} duration toast 动画时长，默认 200ms
     * @param {boolean} mask 是否需要透明遮罩，默认 false，设置为 true 则背景不可点击
     * @param {Object|Array<Object>} position 动画位置信息，可以是一个 Object 也可以是包含两个 Object 的数组（第一个元素是起始位置，第二个是结束位置），Object 有 left right top bottom width height 6个 double 属性，存在 width 时会忽略 left right，不设置默认为 { bottom: 50, right: 50, left: 50 }
     * @param {double|Array<double>} opacity 动画透明度，可以是一个 double 也可以是包含两个 double 的数组（第一个元素是起始透明度，第二个是结束透明度），不设置默认为 [0.0, 1.0]
     */


    ThreshApp.prototype.showToast = function (toast, info) {
      try {
        RenderManager_1["default"].showToast(toast, info);
      } catch (_e24) {
        __reportError__(_e24, "", "");

        throw _e24;
      }
    };
    /**
     * 隐藏 toast
     * @param {String} name
     */


    ThreshApp.prototype.hideToast = function (name) {
      try {
        RenderManager_1["default"].hideToast(name);
      } catch (_e25) {
        __reportError__(_e25, "", "");

        throw _e25;
      }
    };
    /**
     * 在关闭容器之前
     * 通过该方法可以停止页面上永久渲染组件的渲染，如 Refresh / gif 等
     * 防止关闭容器后因为持续渲染导致 crash
     * PS: 如果通过 threshApp.popPage() 关闭容器则不需要主动调用该方法，popPage 内部会判断调用时机
     */


    ThreshApp.prototype.stopInfinitRender = function () {
      try {
        RenderManager_1["default"].stopAlwaysRender();
      } catch (_e26) {
        __reportError__(_e26, "", "");

        throw _e26;
      }
    };
    /**
     * 上报当前正在显示页面的数据
     * @param networkTime 接口耗时
     */


    ThreshApp.prototype.pageDidShow = function (networkTime) {
      try {
        if (networkTime === void 0) {
          networkTime = 0;
        }

        MethodChannel_1["default"].pageDidShow(networkTime);
      } catch (_e27) {
        __reportError__(_e27, "", "");

        throw _e27;
      }
    };
    /**
     * 加载 providers
     */


    ThreshApp.prototype.useProviders = function (providers) {
      try {
        this.providers = providers;
      } catch (_e28) {
        __reportError__(_e28, "", "");

        throw _e28;
      }
    };
    /**
     * native 打印方法
     */


    ThreshApp.prototype.print = function (args) {
      try {
        MethodChannel_1["default"].print(args);
      } catch (_e29) {
        __reportError__(_e29, "", "");

        throw _e29;
      }
    };
    /**
     * 重载 js 并执行
     */
    // reload () {
    //   MethodChannel.reload()
    // }

    /**
     * 在已注册的页面找到目标页面
     * 页面优先级如下：
     * 1. 已指定页面则显示指定页面，不存在则显示404页面，未设置404页面则会向flutter发出pageNotFound的通知并执行flutter中的处理方法
     * 2. 未指定页面则按如下顺序显示：注入路由页面 > 默认页面 > 404页面 > flutter pageNotFound
     */


    ThreshApp.prototype._findPage = function (pageName, params) {
      try {
        if (params === void 0) {
          params = {};
        }

        var pageBuilder;
        var pageData;

        if (!pageName) {
          if (this.injectRouteInfo) {
            pageName = this.injectRouteInfo.pageName;
            params = this.injectRouteInfo.params;
          } else if (this._defaultPageName) {
            pageName = this._defaultPageName;
          } else if (this._notFoundPageName) {
            pageName = this._notFoundPageName;
          }
        } else {
          if (!AppContainer_1["default"].hasRoute(pageName) && this._notFoundPageName) {
            pageName = this._notFoundPageName;
          }
        }

        if (!AppContainer_1["default"].hasRoute(pageName)) {
          RenderManager_1["default"].pageNotFound(pageName);
        } else {
          var builder = AppContainer_1["default"].getRoute(pageName);
          pageBuilder = builder();

          if (pageBuilder) {
            pageData = createElement_1["default"](pageBuilder, params);
            if (!(pageData instanceof VNode_1["default"])) throw new Error("page " + pageName + " is not a Widget");
          } else {
            RenderManager_1["default"].pageNotFound(pageName);
          }
        }

        return {
          pageData: pageData,
          pageName: pageName
        };
      } catch (_e30) {
        __reportError__(_e30, "", "");

        throw _e30;
      }
    };

    return ThreshApp;
  } catch (_e31) {
    __reportError__(_e31, "", "");

    throw _e31;
  }
}();

exports.ThreshApp = ThreshApp;
/**
* 第三方注入路由
* 该方法需要暴露在全局下
* 调试是可以使用该方法快速进入某个页面
* @param {String} pageName
* @param {Object} params
*/

function injectRoute(route) {
  try {
    if (!route.pageName) return;
    threshApp.injectRouteInfo = route;
  } catch (_e32) {
    __reportError__(_e32, "injectRoute", "");

    throw _e32;
  }
}

exports.injectRoute = injectRoute;
var threshApp = new ThreshApp();
exports["default"] = threshApp;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(142);

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(143);

module.exports = parent;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(144);
var path = __webpack_require__(24);

module.exports = path.Date.now;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(6);

// `Date.now` method
// https://tc39.es/ecma262/#sec-date.now
$({ target: 'Date', stat: true }, {
  now: function now() {
    return new Date().getTime();
  }
});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _stringify = _interopRequireDefault(__webpack_require__(146));

var _now = _interopRequireDefault(__webpack_require__(141));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.MethodChannelReceiveType = exports.NativeMethodChannelType = exports.FlutterMethodChannelType = void 0;

var BridgeManager_1 = __webpack_require__(150);

var UtilManager_1 = __webpack_require__(233);

var Util_1 = __webpack_require__(162);

var ThreshApp_1 = __webpack_require__(140);

var AppContainer_1 = __webpack_require__(210);
/**
 * JS 向 Flutter 发出消息的类型枚举
 */


var FlutterMethodChannelType;

(function (FlutterMethodChannelType) {
  try {
    FlutterMethodChannelType["none"] = "";
    FlutterMethodChannelType["setBundleDir"] = "setBundleDir";
    FlutterMethodChannelType["devtools"] = "devtools";
    FlutterMethodChannelType["bridgeRequest"] = "bridgeRequest";
    FlutterMethodChannelType["onError"] = "onError"; // UI

    FlutterMethodChannelType["mediaQuery"] = "mediaQuery";
    FlutterMethodChannelType["setAppBarHeight"] = "setAppBarHeight";
    FlutterMethodChannelType["pushPage"] = "pushPage";
    FlutterMethodChannelType["popPage"] = "popPage";
    FlutterMethodChannelType["showModal"] = "showModal";
    FlutterMethodChannelType["showToast"] = "showToast";
    FlutterMethodChannelType["hideToast"] = "hideToast";
    FlutterMethodChannelType["updateWidget"] = "updateWidget";
    FlutterMethodChannelType["pageNotFound"] = "pageNotFound";
    FlutterMethodChannelType["stopAlwaysRender"] = "stopAlwaysRender";
    FlutterMethodChannelType["onDestroyed"] = "onDestroyed"; // Utils  

    FlutterMethodChannelType["copy"] = "copy";
    FlutterMethodChannelType["blur"] = "blur"; // Widget Methods

    FlutterMethodChannelType["updateTitle"] = "updateTitle";
    FlutterMethodChannelType["scrollTo"] = "scrollTo";
    FlutterMethodChannelType["stopAsyncOperate"] = "stopAsyncOperate";
    FlutterMethodChannelType["openActions"] = "openActions";
    FlutterMethodChannelType["closeActions"] = "closeActions";
    FlutterMethodChannelType["swipeTo"] = "swipeTo";
    FlutterMethodChannelType["setValue"] = "setValue";
    FlutterMethodChannelType["jumpTo"] = "jumpTo";
    FlutterMethodChannelType["animateTo"] = "animateTo";
    FlutterMethodChannelType["setNestScrollViewStatus"] = "setNestScrollViewStatus";
    FlutterMethodChannelType["dragPositionAnimateTo"] = "dragPositionAnimateTo";
    FlutterMethodChannelType["saveRepaintView"] = "saveRepaintView";
  } catch (_e) {
    __reportError__(_e, "", "");

    throw _e;
  }
})(FlutterMethodChannelType = exports.FlutterMethodChannelType || (exports.FlutterMethodChannelType = {}));
/**
 * JS 向  Native 发出消息的类型枚举
 */


var NativeMethodChannelType;

(function (NativeMethodChannelType) {
  try {
    NativeMethodChannelType["print"] = "print";
    NativeMethodChannelType["reload"] = "reload";
    NativeMethodChannelType["pageDidShow"] = "pageDidShow";
    NativeMethodChannelType["invokeNativeViewMethod"] = "invokeNativeViewMethod";
    NativeMethodChannelType["bridgeRequest"] = "bridgeRequest";
  } catch (_e2) {
    __reportError__(_e2, "", "");

    throw _e2;
  }
})(NativeMethodChannelType = exports.NativeMethodChannelType || (exports.NativeMethodChannelType = {}));
/**
 * JS 接收到的消息类型枚举
 */


var MethodChannelReceiveType;

(function (MethodChannelReceiveType) {
  try {
    MethodChannelReceiveType["mediaQuery"] = "mediaQuery";
    MethodChannelReceiveType["ready"] = "ready";
    MethodChannelReceiveType["setupPage"] = "setupPage";
    MethodChannelReceiveType["needPopPage"] = "needPopPage";
    MethodChannelReceiveType["hasPopPage"] = "hasPopPage";
    MethodChannelReceiveType["triggerEvent"] = "triggerEvent";
    MethodChannelReceiveType["lifeCycle"] = "lifeCycle";
    MethodChannelReceiveType["bridgeResponse"] = "bridgeResponse";
    MethodChannelReceiveType["closeWindow"] = "closeWindow";
    MethodChannelReceiveType["pageDidLoad"] = "pageDidLoad";
    MethodChannelReceiveType["onDestroyed"] = "onDestroyed";
  } catch (_e3) {
    __reportError__(_e3, "", "");

    throw _e3;
  }
})(MethodChannelReceiveType = exports.MethodChannelReceiveType || (exports.MethodChannelReceiveType = {}));
/**
 * 打印method channel方法参数
 */


var methodChannelConsole = function methodChannelConsole(channelParams) {
  try {
    var method = channelParams.method,
        params = channelParams.params,
        contextId = channelParams.contextId;
    console.group('[CHANNEL PRINT] method: ' + method);

    if (params) {
      if (params.widgetRenderData) {
        params.widgetRenderData = JSON.parse(params.widgetRenderData);
      }

      if (params.widgetUpdateData) {
        params.widgetUpdateData = JSON.parse(params.widgetUpdateData);
      }
    }

    console.log('contextId: ', contextId);
    console.log('params: ', params);
    console.groupEnd();
  } catch (_e4) {
    __reportError__(_e4, "methodChannelConsole", "");

    throw _e4;
  }
};
/**
 * js与native和flutter通信的方法
 * methodChannel_js_call_flutter methodChannel_js_call_native 为 native 注入到当前 js context 中的方法
 */


function jsCallNative(channelParams) {
  try {
    try {
      channelParams = formatChannelParams(channelParams);
      if (channelParams.method === FlutterMethodChannelType.none) return;
      methodChannel_js_call_native(channelParams);
    } catch (e) {} finally {// if (threshApp.debugMode && 'production' === 'development') {
      //   methodChannelConsole(channelParams)
      // }
    }
  } catch (_e5) {
    __reportError__(_e5, "", "");

    throw _e5;
  }
}

function jsCallFlutter(channelParams) {
  try {
    try {
      channelParams = formatChannelParams(channelParams);
      if (channelParams.method === FlutterMethodChannelType.none) return;
      methodChannel_js_call_flutter(channelParams);
    } catch (e) {} finally {// if (threshApp.debugMode && process.env.NODE_ENV === 'development') {
      //   methodChannelConsole(channelParams)
      // }
    }
  } catch (_e6) {
    __reportError__(_e6, "", "");

    throw _e6;
  }
}

function formatChannelParams(channelParams, stringifyParams) {
  try {
    if (stringifyParams === void 0) {
      stringifyParams = false;
    }

    var params = channelParams.params;
    if (Util_1["default"].isNil(params)) params = {};

    if (!Util_1["default"].isObject(params)) {
      UtilManager_1["default"].error('Channel params must pass in an object!');
      return {
        method: FlutterMethodChannelType.none
      };
    } // if (!Util.isNil(params.__channelStartTime__)) {
    //   UtilManager.error('Channel params cannot use "__channelStartTime__" as a key!')
    //   return { method: FlutterMethodChannelType.none }
    // }
    // params.__channelStartTime__ = Date.now()


    if (!channelParams.contextId) channelParams.contextId = AppContainer_1["default"].contextId;
    channelParams.params = stringifyParams ? (0, _stringify["default"])(params) : params;
    return channelParams;
  } catch (_e7) {
    __reportError__(_e7, "formatChannelParams", "");

    throw _e7;
  }
}
/**
 * 通信类
 * 封装了js调用native和flutter的方法
 */


var MethodChannel =
/** @class */
function () {
  try {
    function MethodChannel() {} // 调用注入方法


    MethodChannel.call = function (_a) {
      try {
        var method = _a.method,
            _b = _a.params,
            params = _b === void 0 ? {} : _b,
            contextId = _a.contextId;
        jsCallFlutter({
          contextId: contextId,
          method: method,
          params: params
        });
      } catch (_e8) {
        __reportError__(_e8, "", "");

        throw _e8;
      }
    }; // 页面初次渲染完成时通知 native


    MethodChannel.pageDidShow = function (networkTime) {
      try {
        if (networkTime === void 0) {
          networkTime = 0;
        }

        var performanceInfo = AppContainer_1["default"].getPagePerformanceInfo();
        if (!performanceInfo || performanceInfo.hasReported) return;
        performanceInfo.hasReported = true;
        var pageShowTimestamp = (0, _now["default"])();
        var pageName = ThreshApp_1["default"].pageName || 'unknown';
        jsCallNative({
          method: NativeMethodChannelType.pageDidShow,
          params: {
            flutterVersion: ThreshApp_1["default"].flutterVersion,
            jsVersion: ThreshApp_1["default"].jsVersion,
            pageName: pageName,
            // 网络通信耗时
            networkTime: networkTime,
            // 页面创建时的时间戳
            pageCreateTimestamp: performanceInfo.createTimestamp,
            // 页面首帧加载完成的时间戳
            pageLoadTimestamp: performanceInfo.loadTimestamp,
            // 页面显示时的时间戳（包含网络通信耗时）
            pageShowTimestamp: pageShowTimestamp
          }
        });
        UtilManager_1["default"].log({
          pageName: pageName,
          networkTime: networkTime,
          pageLoadTime: performanceInfo.loadTimestamp - performanceInfo.createTimestamp,
          pageShowTime: pageShowTimestamp - performanceInfo.createTimestamp
        });
      } catch (_e9) {
        __reportError__(_e9, "", "");

        throw _e9;
      }
    }; // 输出到native


    MethodChannel.print = function (params) {
      try {
        if (params === void 0) {
          params = {};
        }

        jsCallNative({
          method: NativeMethodChannelType.print,
          params: params
        });
      } catch (_e10) {
        __reportError__(_e10, "", "");

        throw _e10;
      }
    }; // 重载bundle.js


    MethodChannel.reload = function () {
      try {
        jsCallNative({
          method: NativeMethodChannelType.reload,
          params: {}
        });
      } catch (_e11) {
        __reportError__(_e11, "", "");

        throw _e11;
      }
    }; // 触发 NativeView 方法


    MethodChannel.invokeNativeViewMethod = function (_a) {
      try {
        var methodName = _a.methodName,
            _b = _a.methodParams,
            methodParams = _b === void 0 ? {} : _b,
            viewType = _a.viewType,
            _c = _a.viewParams,
            viewParams = _c === void 0 ? {} : _c;
        jsCallNative({
          method: NativeMethodChannelType.invokeNativeViewMethod,
          params: {
            methodName: methodName,
            methodParams: methodParams,
            viewType: viewType,
            viewParams: viewParams
          }
        });
      } catch (_e12) {
        __reportError__(_e12, "", "");

        throw _e12;
      }
    }; // bridge方法


    MethodChannel.bridge = function (methodId, params) {
      try {
        if (!Util_1["default"].isProd && BridgeManager_1["default"].isNetworkRequest(params)) {
          jsCallFlutter({
            method: FlutterMethodChannelType.bridgeRequest,
            params: {
              methodId: methodId,
              request: Util_1["default"].toString(params)
            }
          });
          return;
        }

        jsCallNative({
          method: NativeMethodChannelType.bridgeRequest,
          params: {
            methodId: methodId,
            request: params
          }
        });
      } catch (_e13) {
        __reportError__(_e13, "", "");

        throw _e13;
      }
    };

    MethodChannel.MAX_CHUNK_SIZE = 1024 * 10;
    return MethodChannel;
  } catch (_e14) {
    __reportError__(_e14, "", "");

    throw _e14;
  }
}();

exports["default"] = MethodChannel;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(148);

module.exports = parent;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(149);
var core = __webpack_require__(24);

if (!core.JSON) core.JSON = { stringify: JSON.stringify };

// eslint-disable-next-line no-unused-vars -- required for `.length`
module.exports = function stringify(it, replacer, space) {
  return core.JSON.stringify.apply(null, arguments);
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(6);
var getBuiltIn = __webpack_require__(52);
var fails = __webpack_require__(11);

var $stringify = getBuiltIn('JSON', 'stringify');
var re = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var fix = function (match, offset, string) {
  var prev = string.charAt(offset - 1);
  var next = string.charAt(offset + 1);
  if ((low.test(match) && !hi.test(next)) || (hi.test(match) && !low.test(prev))) {
    return '\\u' + match.charCodeAt(0).toString(16);
  } return match;
};

var FORCED = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  // https://github.com/tc39/proposal-well-formed-stringify
  $({ target: 'JSON', stat: true, forced: FORCED }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var result = $stringify.apply(null, arguments);
      return typeof result == 'string' ? result.replace(re, fix) : result;
    }
  });
}


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(2));

var _symbol = _interopRequireDefault(__webpack_require__(100));

var _iterator = _interopRequireDefault(__webpack_require__(132));

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _includes = _interopRequireDefault(__webpack_require__(151));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  try {
    function adopt(value) {
      try {
        return value instanceof P ? value : new P(function (resolve) {
          try {
            resolve(value);
          } catch (_e) {
            __reportError__(_e, "", "");

            throw _e;
          }
        });
      } catch (_e2) {
        __reportError__(_e2, "", "");

        throw _e2;
      }
    }

    return new (P || (P = _promise["default"]))(function (resolve, reject) {
      try {
        function fulfilled(value) {
          try {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          } catch (_e3) {
            __reportError__(_e3, "", "");

            throw _e3;
          }
        }

        function rejected(value) {
          try {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          } catch (_e4) {
            __reportError__(_e4, "", "");

            throw _e4;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e5) {
            __reportError__(_e5, "", "");

            throw _e5;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e6) {
        __reportError__(_e6, "", "");

        throw _e6;
      }
    });
  } catch (_e7) {
    __reportError__(_e7, "", "");

    throw _e7;
  }
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  try {
    var _ = {
      label: 0,
      sent: function sent() {
        try {
          if (t[0] & 1) throw t[1];
          return t[1];
        } catch (_e8) {
          __reportError__(_e8, "sent", "");

          throw _e8;
        }
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof _symbol["default"] === "function" && (g[_iterator["default"]] = function () {
      try {
        return this;
      } catch (_e9) {
        __reportError__(_e9, "", "");

        throw _e9;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e10) {
        __reportError__(_e10, "", "");

        throw _e10;
      }
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  } catch (_e11) {
    __reportError__(_e11, "", "");

    throw _e11;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var MethodChannel_1 = __webpack_require__(145);

var Util_1 = __webpack_require__(162);

var bus_1 = __webpack_require__(226);

var DevtoolsManager_1 = __webpack_require__(225);

var TimerManager_1 = __webpack_require__(232);
/**
 * Bridge管理器
 */


var BridgeManager =
/** @class */
function () {
  try {
    function BridgeManager() {}

    BridgeManager.invoke = function (params) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          try {
            return [2
            /*return*/
            , new _promise["default"](function (resolve) {
              try {
                BridgeManager.request(params, function (res) {
                  try {
                    resolve(res);
                  } catch (_e12) {
                    __reportError__(_e12, "", "");

                    throw _e12;
                  }
                });
              } catch (_e13) {
                __reportError__(_e13, "", "");

                throw _e13;
              }
            })];
          } catch (_e14) {
            __reportError__(_e14, "", "");

            throw _e14;
          }
        });
      });
    };

    BridgeManager.request = function (params, callback) {
      try {
        var methodId;

        if (Util_1["default"].isFunc(callback)) {
          methodId = bus_1["default"].register(callback);
        }

        if (!Util_1["default"].isObject(params.params)) params.params = {};else params = Util_1["default"].filterAllNilProps(params);
        MethodChannel_1["default"].bridge(methodId, params);
        if (!BridgeManager.isLogRequest(params)) DevtoolsManager_1["default"].bridge(methodId, params, true);

        if (!Util_1["default"].isProd && !BridgeManager.isNetworkRequest(params)) {
          // 开发模式下，如果宿主包中长时间未响应某个bridge，则主动mock响应，防止阻塞进程
          TimerManager_1["default"].setTimeout(function () {
            try {
              BridgeManager.response(methodId, {
                code: 0,
                reason: '[Mock] - 请注意：由于Bridge未在500ms内响应，JS主动模拟bridge响应！该模拟仅在开发模式中有效！',
                data: {}
              });
            } catch (_e15) {
              __reportError__(_e15, "", "");

              throw _e15;
            }
          }, 500);
        }
      } catch (_e16) {
        __reportError__(_e16, "", "");

        throw _e16;
      }
    };

    BridgeManager.response = function (methodId, response) {
      try {
        if (!bus_1["default"].has(methodId)) return;
        DevtoolsManager_1["default"].bridge(methodId, response, false);
        bus_1["default"].fire(methodId, response);
        bus_1["default"].remove(methodId);
      } catch (_e17) {
        __reportError__(_e17, "", "");

        throw _e17;
      }
    };

    BridgeManager.isNetworkRequest = function (params) {
      try {
        var _context, _context2;

        return (0, _includes["default"])(_context = BridgeManager.networkModuleNames).call(_context, params.module) && (0, _includes["default"])(_context2 = BridgeManager.networkModuleNames).call(_context2, params.method);
      } catch (_e18) {
        __reportError__(_e18, "", "");

        throw _e18;
      }
    };

    BridgeManager.isLogRequest = function (params) {
      try {
        return params.module === 'base' && params.method === 'log';
      } catch (_e19) {
        __reportError__(_e19, "", "");

        throw _e19;
      }
    };

    BridgeManager.networkModuleNames = ['base', 'network', 'netbase', 'request'];
    return BridgeManager;
  } catch (_e20) {
    __reportError__(_e20, "", "");

    throw _e20;
  }
}();

exports["default"] = BridgeManager;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(152);

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(153);

module.exports = parent;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var arrayIncludes = __webpack_require__(154);
var stringIncludes = __webpack_require__(157);

var ArrayPrototype = Array.prototype;
var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.includes;
  if (it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.includes)) return arrayIncludes;
  if (typeof it === 'string' || it === StringPrototype || (it instanceof String && own === StringPrototype.includes)) {
    return stringIncludes;
  } return own;
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(155);
var entryVirtual = __webpack_require__(156);

module.exports = entryVirtual('Array').includes;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var $includes = __webpack_require__(45).includes;
var addToUnscopables = __webpack_require__(98);

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(24);

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(158);
var entryVirtual = __webpack_require__(156);

module.exports = entryVirtual('String').includes;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var notARegExp = __webpack_require__(159);
var requireObjectCoercible = __webpack_require__(17);
var correctIsRegExpLogic = __webpack_require__(161);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(160);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
var classof = __webpack_require__(16);
var wellKnownSymbol = __webpack_require__(55);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(55);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _typeof2 = _interopRequireDefault(__webpack_require__(163));

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _splice = _interopRequireDefault(__webpack_require__(173));

var _includes = _interopRequireDefault(__webpack_require__(151));

var _isArray = _interopRequireDefault(__webpack_require__(178));

var _forEach = _interopRequireDefault(__webpack_require__(182));

var _concat = _interopRequireDefault(__webpack_require__(189));

var _reduce = _interopRequireDefault(__webpack_require__(193));

var _assign = _interopRequireDefault(__webpack_require__(199));

var _stringify = _interopRequireDefault(__webpack_require__(146));

var _now = _interopRequireDefault(__webpack_require__(141));

var _promise = _interopRequireDefault(__webpack_require__(2));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var __1 = __webpack_require__(139);

var VNode_1 = __webpack_require__(204);

var BridgeManager_1 = __webpack_require__(150);

var DevtoolsManager_1 = __webpack_require__(225);
/**
 * threshApp内部工具类
 */


var Util =
/** @class */
function () {
  try {
    function Util() {}

    (0, _defineProperty["default"])(Util, "isProd", {
      get: function get() {
        try {
          return 'production' === 'production';
        } catch (_e) {
          __reportError__(_e, "", "");

          throw _e;
        }
      },
      enumerable: false,
      configurable: true
    });

    Util.flutterVersionSmallerThan = function (flutterVersion) {
      try {
        var _context, _context2;

        var aimFlutterVersionNumber = Number((0, _splice["default"])(_context = flutterVersion.split('.')).call(_context, 0, 3).join(''));
        if (isNaN(aimFlutterVersionNumber)) return true;
        var flutterVersionNumber = __1["default"].flutterVersion ? Number((0, _splice["default"])(_context2 = __1["default"].flutterVersion.split('.')).call(_context2, 0, 3).join('')) : 0;
        return flutterVersionNumber < aimFlutterVersionNumber;
      } catch (_e2) {
        __reportError__(_e2, "", "");

        throw _e2;
      }
    };

    Util.randomId = function () {
      try {
        return Math.random().toString(16).replace('0.', '');
      } catch (_e3) {
        __reportError__(_e3, "", "");

        throw _e3;
      }
    };
    /**
     * 判断当前参数类型
     */


    Util.isObject = function (value) {
      try {
        return Util.type(value) === '[object Object]';
      } catch (_e4) {
        __reportError__(_e4, "", "");

        throw _e4;
      }
    };

    Util.isArray = function (value) {
      try {
        return Util.type(value) === '[object Array]';
      } catch (_e5) {
        __reportError__(_e5, "", "");

        throw _e5;
      }
    };

    Util.type = function (value) {
      try {
        return Object.prototype.toString.call(value);
      } catch (_e6) {
        __reportError__(_e6, "", "");

        throw _e6;
      }
    };

    Util.isBaseType = function (value) {
      try {
        var _context3;

        return (0, _includes["default"])(_context3 = ['number', 'string', 'boolean', 'undefined']).call(_context3, (0, _typeof2["default"])(value));
      } catch (_e7) {
        __reportError__(_e7, "", "");

        throw _e7;
      }
    };
    /**
     * 将目标转换为一维数组
     */


    Util.toFlatWidgetArray = function (source) {
      try {
        if (!source) return [];
        if (!(0, _isArray["default"])(source)) return [source];
        var target = [];

        if (source.length) {
          (0, _forEach["default"])(source).call(source, function (item) {
            try {
              if (!(0, _isArray["default"])(item) && !Util.isNil(item)) target.push(item);else target = (0, _concat["default"])(target).call(target, Util.toFlatWidgetArray(item));
            } catch (_e8) {
              __reportError__(_e8, "", "");

              throw _e8;
            }
          });
        }

        return target;
      } catch (_e9) {
        __reportError__(_e9, "", "");

        throw _e9;
      }
    };
    /**
     * 将所有参数组成一个object
     * 后面的参数会覆盖前面参数的同名属性
     * 如果参数中存在不为object的将会被忽略
     * 使用Object.assign进行浅拷贝
     * 返回一个新的Object
     */


    Util.merge = function () {
      try {
        var objectList = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          objectList[_i] = arguments[_i];
        }

        if (!objectList.length) return {};
        return (0, _reduce["default"])(objectList).call(objectList, function (last, obj) {
          try {
            return (0, _assign["default"])(last, Util.isObject(obj) ? obj : {});
          } catch (_e10) {
            __reportError__(_e10, "", "");

            throw _e10;
          }
        }, {});
      } catch (_e11) {
        __reportError__(_e11, "", "");

        throw _e11;
      }
    };
    /**
     * 判断是否为 string
     */


    Util.isString = function (value) {
      try {
        return typeof value === 'string';
      } catch (_e12) {
        __reportError__(_e12, "", "");

        throw _e12;
      }
    };
    /**
     * 将任意值转换为string
     */


    Util.toString = function (value, showUndefined) {
      try {
        var _a;

        if (showUndefined === void 0) {
          showUndefined = false;
        }

        if (Util.isNil(value)) return !showUndefined ? '' : 'undefined';
        var res;
        if (Util.isString(value)) return value;
        if (value instanceof VNode_1["default"]) return "Widget " + value.type;
        if (value instanceof __1.Widget) return "Widget " + (((_a = value.__vNode__) === null || _a === void 0 ? void 0 : _a.type) || '[unknown]');

        try {
          res = (0, _stringify["default"])(value);
        } catch (e) {
          res = value.toString();
        } finally {
          if (Util.isNil(res)) res = Util.type(value);
        }

        return res;
      } catch (_e13) {
        __reportError__(_e13, "", "");

        throw _e13;
      }
    };

    Util.anyToRawString = function () {
      try {
        var params = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          params[_i] = arguments[_i];
        }

        var content = '';
        (0, _forEach["default"])(params).call(params, function (item, index) {
          try {
            var temp;

            if (item instanceof Error) {
              temp = Util.formatError(item);
            } else if (Util.isObject(item)) {
              var tempArr = [];

              for (var key in item) {
                var value = item[key];
                if (key !== DevtoolsManager_1.SHOW_DIVIDER_KEY) tempArr.push("[" + key + "] - " + Util.toString(value, true));else tempArr.push("-----" + (Util.isString(value) ? value : '') + "-----");
                temp = tempArr.join('\n');
              }
            } else {
              temp = Util.toString(item, true);
            }

            if (index) temp = '\n\n\n' + temp;
            content += temp;
          } catch (_e14) {
            __reportError__(_e14, "", "");

            throw _e14;
          }
        });
        return content;
      } catch (_e15) {
        __reportError__(_e15, "", "");

        throw _e15;
      }
    };
    /**
     * 判断当前参数是否为undefined或null
     */


    Util.isNil = function (value) {
      try {
        return value === undefined || value === null;
      } catch (_e16) {
        __reportError__(_e16, "", "");

        throw _e16;
      }
    };
    /**
     * 判断当前参数是否为函数
     */


    Util.isFunc = function (value) {
      try {
        return value && typeof value === 'function';
      } catch (_e17) {
        __reportError__(_e17, "", "");

        throw _e17;
      }
    };
    /**
     * 格式化错误信息
     */


    Util.formatError = function (error) {
      try {
        var eParams;
        eParams = {
          message: error.message,
          stack: error.stack
        };
        return Util.anyToRawString(eParams);
      } catch (_e18) {
        __reportError__(_e18, "", "");

        throw _e18;
      }
    };
    /**
     * 获取指定范围内数组
     */


    Util.randomNumberInRange = function (max, min, precision) {
      try {
        if (min === void 0) {
          min = 0;
        }

        if (precision === void 0) {
          precision = 0;
        }

        return Number((Math.random() * (max - min + 1) + min).toFixed(precision));
      } catch (_e19) {
        __reportError__(_e19, "", "");

        throw _e19;
      }
    };
    /**
     * 去除对象中的所有 undefined/null 值
     */


    Util.filterAllNilProps = function (value) {
      try {
        if (!Util.isObject(value)) return value;
        walk(value);
        return value;

        function walk(data) {
          try {
            for (var key in data) {
              var p = data[key];
              if (Util.isNil(p)) delete data[key];
              if (Util.isObject(p)) walk(p);
            }
          } catch (_e20) {
            __reportError__(_e20, "", "");

            throw _e20;
          }
        }
      } catch (_e21) {
        __reportError__(_e21, "", "");

        throw _e21;
      }
    };
    /**
     * 节流函数
     */


    Util.throttle = function (callback, delay) {
      try {
        if (delay === void 0) {
          delay = 200;
        }

        var last;
        return function () {
          try {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            var current = (0, _now["default"])();
            if (last && current - last < delay) return;
            last = current;
            callback.apply(void 0, args);
          } catch (_e22) {
            __reportError__(_e22, "", "");

            throw _e22;
          }
        };
      } catch (_e23) {
        __reportError__(_e23, "", "");

        throw _e23;
      }
    };
    /**
     * Native 日志
     */


    Util.log = function (content) {
      try {
        var t = (0, _now["default"])();
        BridgeManager_1["default"].invoke({
          module: 'base',
          method: 'log',
          params: {
            level: 2,
            tag: '[[Dynamic Flutter JS Log]]',
            content: "[" + t + "] - " + content
          }
        });
      } catch (_e24) {
        __reportError__(_e24, "", "");

        throw _e24;
      }
    }; // ios 10.0.x 版本上 Promise 回调中的 resolve 存在异常
    // 必须先通过 Promise.resolve() 进行一遍类似初始化的操作


    Util.promiseResolveHackForIos_10_0_x = function () {
      try {
        return _promise["default"].resolve();
      } catch (_e25) {
        __reportError__(_e25, "", "");

        throw _e25;
      }
    };

    return Util;
  } catch (_e26) {
    __reportError__(_e26, "", "");

    throw _e26;
  }
}();

exports["default"] = Util;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(164);

var _Symbol$iterator = __webpack_require__(171);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(165);

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(102);
__webpack_require__(166);
__webpack_require__(167);
__webpack_require__(168);
__webpack_require__(169);
// TODO: Remove from `core-js@4`
__webpack_require__(170);

module.exports = parent;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(113);

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('asyncDispose');


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(113);

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('dispose');


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(113);

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol('observable');


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(113);

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('patternMatch');


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__(113);

defineWellKnownSymbol('replaceAll');


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(172);

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(134);

module.exports = parent;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(174);

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(175);

module.exports = parent;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var splice = __webpack_require__(176);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.splice;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.splice) ? splice : own;
};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(177);
var entryVirtual = __webpack_require__(156);

module.exports = entryVirtual('Array').splice;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var toAbsoluteIndex = __webpack_require__(48);
var toInteger = __webpack_require__(47);
var toLength = __webpack_require__(46);
var toObject = __webpack_require__(31);
var arraySpeciesCreate = __webpack_require__(106);
var createProperty = __webpack_require__(105);
var arrayMethodHasSpeciesSupport = __webpack_require__(107);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(179);

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(180);

module.exports = parent;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(181);
var path = __webpack_require__(24);

module.exports = path.Array.isArray;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(6);
var isArray = __webpack_require__(104);

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(183);

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
var forEach = __webpack_require__(184);
var classof = __webpack_require__(63);
var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.forEach)
    // eslint-disable-next-line no-prototype-builtins -- safe
    || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;
};


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(185);

module.exports = parent;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(186);
var entryVirtual = __webpack_require__(156);

module.exports = entryVirtual('Array').forEach;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var forEach = __webpack_require__(187);

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(114).forEach;
var arrayMethodIsStrict = __webpack_require__(188);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(11);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(190);

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(191);

module.exports = parent;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var concat = __webpack_require__(192);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.concat;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.concat) ? concat : own;
};


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
var entryVirtual = __webpack_require__(156);

module.exports = entryVirtual('Array').concat;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(194);

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(195);

module.exports = parent;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var reduce = __webpack_require__(196);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.reduce) ? reduce : own;
};


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(197);
var entryVirtual = __webpack_require__(156);

module.exports = entryVirtual('Array').reduce;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var $reduce = __webpack_require__(198).left;
var arrayMethodIsStrict = __webpack_require__(188);
var CHROME_VERSION = __webpack_require__(58);
var IS_NODE = __webpack_require__(57);

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(26);
var toObject = __webpack_require__(31);
var IndexedObject = __webpack_require__(15);
var toLength = __webpack_require__(46);

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(200);

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(201);

module.exports = parent;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(202);
var path = __webpack_require__(24);

module.exports = path.Object.assign;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(6);
var assign = __webpack_require__(203);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(10);
var fails = __webpack_require__(11);
var objectKeys = __webpack_require__(43);
var getOwnPropertySymbolsModule = __webpack_require__(111);
var propertyIsEnumerableModule = __webpack_require__(12);
var toObject = __webpack_require__(31);
var IndexedObject = __webpack_require__(15);

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  /* global Symbol -- required for testing */
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(2));

var _symbol = _interopRequireDefault(__webpack_require__(100));

var _iterator = _interopRequireDefault(__webpack_require__(132));

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _now = _interopRequireDefault(__webpack_require__(141));

var _isArray = _interopRequireDefault(__webpack_require__(178));

var _forEach = _interopRequireDefault(__webpack_require__(182));

var _includes = _interopRequireDefault(__webpack_require__(151));

var _assign = _interopRequireDefault(__webpack_require__(199));

var _indexOf = _interopRequireDefault(__webpack_require__(205));

var _splice = _interopRequireDefault(__webpack_require__(173));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  try {
    function adopt(value) {
      try {
        return value instanceof P ? value : new P(function (resolve) {
          try {
            resolve(value);
          } catch (_e) {
            __reportError__(_e, "", "");

            throw _e;
          }
        });
      } catch (_e2) {
        __reportError__(_e2, "", "");

        throw _e2;
      }
    }

    return new (P || (P = _promise["default"]))(function (resolve, reject) {
      try {
        function fulfilled(value) {
          try {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          } catch (_e3) {
            __reportError__(_e3, "", "");

            throw _e3;
          }
        }

        function rejected(value) {
          try {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          } catch (_e4) {
            __reportError__(_e4, "", "");

            throw _e4;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e5) {
            __reportError__(_e5, "", "");

            throw _e5;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e6) {
        __reportError__(_e6, "", "");

        throw _e6;
      }
    });
  } catch (_e7) {
    __reportError__(_e7, "", "");

    throw _e7;
  }
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  try {
    var _ = {
      label: 0,
      sent: function sent() {
        try {
          if (t[0] & 1) throw t[1];
          return t[1];
        } catch (_e8) {
          __reportError__(_e8, "sent", "");

          throw _e8;
        }
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof _symbol["default"] === "function" && (g[_iterator["default"]] = function () {
      try {
        return this;
      } catch (_e9) {
        __reportError__(_e9, "", "");

        throw _e9;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e10) {
        __reportError__(_e10, "", "");

        throw _e10;
      }
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  } catch (_e11) {
    __reportError__(_e11, "", "");

    throw _e11;
  }
};

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  try {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
      s += arguments[i].length;
    }

    for (var r = Array(s), k = 0, i = 0; i < il; i++) {
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
        r[k] = a[j];
      }
    }

    return r;
  } catch (_e12) {
    __reportError__(_e12, "", "");

    throw _e12;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.LifeCycle = void 0;

var Util_1 = __webpack_require__(162);

var ThreshApp_1 = __webpack_require__(140);

var AppContainer_1 = __webpack_require__(210);

var ChildrenKey = 'children';

var VNode =
/** @class */
function () {
  try {
    function VNode(_a) {
      try {
        var type = _a.type,
            props = _a.props,
            widgetBuilder = _a.widgetBuilder,
            isBasicWidget = _a.isBasicWidget,
            childrenMapedName = _a.childrenMapedName,
            childrenIsArray = _a.childrenIsArray,
            parent = _a.parent,
            key = _a.key,
            ref = _a.ref; // 子节点

        this.children = []; // 原子节点属性上的子节点

        this.basicWidgetPropChildren = {}; // 原子节点 children 属性对应的 name

        this.childrenMapedName = ChildrenKey; // 原子节点 children 属性对应的类型是否为 array

        this.childrenIsArray = true; // 节点上的事件

        this.events = {}; // 节点是否已挂载

        this.isMount = false; // context id

        this.contextId = AppContainer_1["default"].contextId;
        this.shouldRender = true;
        this.type = type;
        this.props = props;
        this.widgetBuilder = widgetBuilder;
        this.isBasicWidget = isBasicWidget;
        this.childrenMapedName = childrenMapedName;
        this.childrenIsArray = childrenIsArray;
        this.parent = parent;
        this.key = key;
        this.ref = ref;
        this.nodeId = VNode.getNodeId(type);

        if (this.isNativeViewNode()) {
          this.nativeViewId = this.nodeId + "#" + this.props.type + "#" + (0, _now["default"])();
        }

        this.findVNodeInProps();
      } catch (_e13) {
        __reportError__(_e13, "VNode", "");

        throw _e13;
      }
    }

    VNode.getNodeId = function (type) {
      try {
        return type + "#" + ++VNode.nodeIdIndex;
      } catch (_e14) {
        __reportError__(_e14, "", "");

        throw _e14;
      }
    }; // 在 props 中查找所有的 vnode


    VNode.prototype.findVNodeInProps = function () {
      try {
        var _this = this;

        var _loop_1 = function _loop_1(key) {
          try {
            var item = this_1.props[key];

            if (item instanceof VNode && this_1.isBasicWidget) {
              item.parent = this_1;
              this_1.basicWidgetPropChildren[key] = item;
            }

            if ((0, _isArray["default"])(item)) {
              (0, _forEach["default"])(item).call(item, function (subItem) {
                try {
                  if (subItem instanceof VNode) {
                    subItem.parent = _this;
                    if (key === ChildrenKey) _this.appendChild(subItem);else if (_this.isBasicWidget) _this.appendChildInArrayProps(subItem, key);
                  }
                } catch (_e15) {
                  __reportError__(_e15, "", "");

                  throw _e15;
                }
              });
            }
          } catch (_e16) {
            __reportError__(_e16, "_loop_1", "");

            throw _e16;
          }
        };

        var this_1 = this;

        for (var key in this.props) {
          _loop_1(key);
        }
      } catch (_e17) {
        __reportError__(_e17, "", "");

        throw _e17;
      }
    }; // 在 props 中查找事件


    VNode.prototype.findEventsInProps = function () {
      try {
        var _context;

        var _this = this;

        if (!this.isBasicWidget) return;
        this.events = {};
        var eventId = 0;
        (0, _forEach["default"])(_context = VNode.eventTypes).call(_context, function (key) {
          try {
            var prop = _this.props[key];

            if (prop instanceof Function) {
              var _context2;

              var eventCacheId = "event/" + ++eventId;
              if ((0, _includes["default"])(_context2 = VNode.throttledEventTypes).call(_context2, key)) prop = Util_1["default"].throttle(prop);
              _this.events[eventCacheId] = prop;
              _this.props["_" + key + "Id"] = eventCacheId;
            }
          } catch (_e18) {
            __reportError__(_e18, "", "");

            throw _e18;
          }
        });
      } catch (_e19) {
        __reportError__(_e19, "", "");

        throw _e19;
      }
    }; // 触发组件实例 render


    VNode.prototype.doRender = function () {
      try {
        if (!this.shouldRender) return;
        this.shouldRender = false;

        if (!this.widget) {
          this.widget = new this.widgetBuilder(this.props);
          this.widget.__vNode__ = this;
        }

        this.widget.props = this.props;

        if (!this.isBasicWidget) {
          var node = this.widget.render();
          if (!node) throw new Error("Widget's render method must return a widget. Error in: <" + this.type + " />");
          node.parent = this;
          this.children = [node];
        }
      } catch (_e20) {
        __reportError__(_e20, "", "");

        throw _e20;
      }
    }; // 执行组件更新


    VNode.prototype.doUpdate = function () {
      try {
        if (!this.widget) {
          this.widget = new this.widgetBuilder(this.props);
          this.widget.__vNode__ = this;
        }

        var newRenderNode = this.widget.render();
        if (!newRenderNode) throw new Error("Widget's render method must return a widget. Error in: <" + this.type + " />");
        return newRenderNode;
      } catch (_e21) {
        __reportError__(_e21, "", "");

        throw _e21;
      }
    }; // 新旧节点融合


    VNode.prototype.doMerge = function (oldNode) {
      try {
        this.contextId = oldNode.contextId;
        this.isMount = true;
        this.nodeId = oldNode.nodeId;
        this.nativeViewId = oldNode.nativeViewId;
        this.widget = oldNode.widget;
        this.widget.__vNode__ = this;
      } catch (_e22) {
        __reportError__(_e22, "", "");

        throw _e22;
      }
    }; // 将 vNode 转换为 flutter 可用的 json


    VNode.prototype.toRenderData = function (pageName, setStateful) {
      try {
        var _this = this;

        if (setStateful === void 0) {
          setStateful = true;
        }

        this.pageName = pageName;
        if (this.pageNode) this.pageNode = void 0;
        this.findEventsInProps();
        this.doRender();
        if (this.ref) this.ref(this.widget);

        if (!this.isBasicWidget) {
          // 非原子组件，children 只有 1 个元素
          // flutter version 1.1.0 及以上，所有自定义组件都是 stateful
          // flutter version 1.1.0 以下，只有声明了 state 的自定义组件才是 stateful
          if (this.children.length) {
            var child = this.children[0];
            if (Util_1["default"].isNil(child.key)) child.parentKey = this.key || this.parentKey;
            return child.toRenderData(pageName, true);
          }
        } else {
          var childrenRenderData_1 = {};
          this.mapChildren(function (vNode, key, fromArray) {
            try {
              if (!fromArray) childrenRenderData_1[key] = vNode.toRenderData(pageName, false);else {
                if (!childrenRenderData_1[key]) childrenRenderData_1[key] = [];
                childrenRenderData_1[key].push(vNode.toRenderData(pageName, false));
              }

              if (key === ChildrenKey && !_this.childrenIsArray) {
                childrenRenderData_1[_this.childrenMapedName] = childrenRenderData_1[key][0];
                delete childrenRenderData_1[key];
              }
            } catch (_e23) {
              __reportError__(_e23, "", "");

              throw _e23;
            }
          });

          if (this.isPageNode()) {
            var rootNode = this.fetchRootNode();

            if (rootNode.pageNode) {
              throw new Error('Each page only has one <Page />');
            }

            rootNode.pageNode = this;
          }

          if (this.isNativeViewNode()) {
            var params = this.props.params || {};

            if (!params.__viewId__) {
              params.__viewId__ = this.nativeViewId;
              this.props.params = params;
            }
          }

          return {
            name: this.type,
            widgetId: this.nodeId,
            isStateful: setStateful,
            pageName: pageName,
            props: this.execPropsProvider((0, _assign["default"])({}, this.props, childrenRenderData_1)),
            key: this.key || this.parentKey
          };
        }
      } catch (_e24) {
        __reportError__(_e24, "", "");

        throw _e24;
      }
    };

    VNode.prototype.execPropsProvider = function (props) {
      try {
        var propsProviders = ThreshApp_1["default"].providers.propsProvider || [];
        var index = propsProviders.length - 1;

        while (index > -1) {
          var provider = propsProviders[index--];
          var tempProps = provider.propsProvider(props);
          if (tempProps) props = tempProps;
        }

        return props;
      } catch (_e25) {
        __reportError__(_e25, "", "");

        throw _e25;
      }
    }; // 在当前 vnode 上查找目标节点


    VNode.prototype.fetch = function (targetNodeId) {
      try {
        if (this.nodeId === targetNodeId) return this;
        var targetVNode;
        this.mapChildren(function (vNode) {
          try {
            if (vNode.nodeId === targetNodeId) {
              targetVNode = vNode;
              return false;
            }

            targetVNode = vNode.fetch(targetNodeId);
            return !targetVNode;
          } catch (_e26) {
            __reportError__(_e26, "", "");

            throw _e26;
          }
        });
        return targetVNode;
      } catch (_e27) {
        __reportError__(_e27, "", "");

        throw _e27;
      }
    }; // 查找距离当前节点向上最近的可更新的原子节点


    VNode.prototype.fetchNearlyCanUpdateBasicNode = function () {
      try {
        var node = this.fetchNearlyCustomNode();
        var firstChildNode = node.children[0];

        while (firstChildNode && !firstChildNode.isBasicWidget) {
          firstChildNode = firstChildNode.children[0];
        }

        return firstChildNode;
      } catch (_e28) {
        __reportError__(_e28, "", "");

        throw _e28;
      }
    }; // 查找距离当前节点向上最近的非原子节点


    VNode.prototype.fetchNearlyCustomNode = function () {
      try {
        if (!this.isBasicWidget) return this;
        var parent = this.parent;
        if (parent) return parent.fetchNearlyCustomNode();
        return this;
      } catch (_e29) {
        __reportError__(_e29, "", "");

        throw _e29;
      }
    }; // 查找距离当前节点向下最近的原子节点


    VNode.prototype.fetchNearlyBasicNode = function () {
      try {
        if (this.isBasicWidget) return this;
        return this.children[0].fetchNearlyBasicNode();
      } catch (_e30) {
        __reportError__(_e30, "", "");

        throw _e30;
      }
    }; // 查找根节点


    VNode.prototype.fetchRootNode = function () {
      try {
        if (!this.parent) return this;
        var parent = this.parent;
        if (parent) return parent.fetchRootNode();
        return this;
      } catch (_e31) {
        __reportError__(_e31, "", "");

        throw _e31;
      }
    }; // 查找页面名


    VNode.prototype.fetchNodePageName = function () {
      try {
        if (this.pageName) return this.pageName;
        if (this.parent) return this.parent.fetchNodePageName();
        return '';
      } catch (_e32) {
        __reportError__(_e32, "", "");

        throw _e32;
      }
    }; // 毕竟两个节点的 type & key 是否相等


    VNode.prototype.isSameAs = function (otherNode) {
      try {
        return this.type === otherNode.type && this.key === otherNode.key;
      } catch (_e33) {
        __reportError__(_e33, "", "");

        throw _e33;
      }
    };

    VNode.prototype.isPageNode = function () {
      try {
        return this.isBasicWidget && this.type === 'Page';
      } catch (_e34) {
        __reportError__(_e34, "", "");

        throw _e34;
      }
    };

    VNode.prototype.isNativeViewNode = function () {
      try {
        return this.isBasicWidget && this.type === 'NativeView';
      } catch (_e35) {
        __reportError__(_e35, "", "");

        throw _e35;
      }
    }; // 触发组件上的事件


    VNode.prototype.invokeEvent = function (targetNodeId, eventId, eventType, params) {
      return __awaiter(this, void 0, void 0, function () {
        var targetNode, eventFn, err_1;
        return __generator(this, function (_a) {
          var _context3;

          switch (_a.label) {
            case 0:
              targetNode = this.fetch(targetNodeId);
              if (!targetNode) return [2
              /*return*/
              ];
              eventFn = targetNode.events[eventId];
              if (!eventFn) return [2
              /*return*/
              ];
              if (!(!eventType || !(0, _includes["default"])(_context3 = VNode.asyncEventTypes).call(_context3, eventType))) return [3
              /*break*/
              , 1];
              eventFn(params);
              return [3
              /*break*/
              , 5];

            case 1:
              _a.trys.push([1, 3, 4, 5]);

              return [4
              /*yield*/
              , eventFn(params)];

            case 2:
              _a.sent();

              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _a.sent();
              return [3
              /*break*/
              , 5];

            case 4:
              this.stopAsyncEvent(targetNode, eventType);
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    }; // 停止异步事件


    VNode.prototype.stopAsyncEvent = function (node, eventType) {
      try {
        var _context4;

        if (!node || !eventType || !(0, _includes["default"])(_context4 = VNode.asyncEventTypes).call(_context4, eventType)) return;

        if (node.type === 'ListView') {
          node.widget.stopAsyncOperate(eventType === 'onRefresh' ? 'refresh' : 'loadMore');
        }
      } catch (_e36) {
        __reportError__(_e36, "", "");

        throw _e36;
      }
    }; // 触发组件生命周期方法


    VNode.prototype.invokeLifeCycle = function (lifeStep) {
      try {
        if (!this.widget || !LifeCycle.isExist(lifeStep)) return;

        if (!this.isMount && lifeStep === LifeCycle.widgetDidUpdate) {
          this.isMount = true;
          this.widget.widgetDidMount();
        } else {
          if (lifeStep !== LifeCycle.widgetDidUnmount) this.isMount = true;else this.isMount = false;
          this.widget[lifeStep]();
        }

        this.mapChildren(function (vNode) {
          try {
            vNode.invokeLifeCycle(lifeStep);
          } catch (_e37) {
            __reportError__(_e37, "", "");

            throw _e37;
          }
        });
      } catch (_e38) {
        __reportError__(_e38, "", "");

        throw _e38;
      }
    }; // 向数组尾部添加子节点


    VNode.prototype.appendChild = function (child, target) {
      try {
        if (target === void 0) {
          target = this.children;
        }

        if ((0, _includes["default"])(target).call(target, child)) this.removeChild(child);
        target.push(child);
      } catch (_e39) {
        __reportError__(_e39, "", "");

        throw _e39;
      }
    }; // 移除数组中的某个节点


    VNode.prototype.removeChild = function (child, target) {
      try {
        if (target === void 0) {
          target = this.children;
        }

        var removeIndex = (0, _indexOf["default"])(target).call(target, child);
        if (removeIndex > -1) (0, _splice["default"])(target).call(target, removeIndex, 1);
      } catch (_e40) {
        __reportError__(_e40, "", "");

        throw _e40;
      }
    }; // 向 basicWidgetPropChildren 中的某个数组属性添加子节点


    VNode.prototype.appendChildInArrayProps = function (child, propName) {
      try {
        this.appendChild(child, this.getTargetChildrenArrayInPropChildren(propName));
      } catch (_e41) {
        __reportError__(_e41, "", "");

        throw _e41;
      }
    }; // 遍历当前节点或目标中的所有子节点


    VNode.prototype.mapChildren = function (cb, mapTarget) {
      try {
        if (!mapTarget) {
          for (var i = 0; i < this.children.length; i++) {
            var item = this.children[i];
            if (item instanceof VNode && cb(item, ChildrenKey, true) === false) return;
          }

          for (var key in this.basicWidgetPropChildren) {
            var item = this.basicWidgetPropChildren[key];

            if (!(0, _isArray["default"])(item)) {
              if (item instanceof VNode && cb(item, key, false) === false) return;
            } else {
              for (var i = 0; i < item.length; i++) {
                if (item[i] instanceof VNode && cb(item[i], key, true) === false) return;
              }
            }
          }
        } else {
          if (Util_1["default"].isArray(mapTarget)) {
            for (var i = 0; i < mapTarget.length; i++) {
              var item = mapTarget[i];
              if (item instanceof VNode && cb(item, '', true) === false) return;
            }
          } else {
            for (var key in mapTarget) {
              var item = mapTarget[key];

              if (!(0, _isArray["default"])(item)) {
                if (item instanceof VNode && cb(item, key, false) === false) return;
              } else {
                for (var i = 0; i < item.length; i++) {
                  if (item[i] instanceof VNode && cb(item[i], key, true) === false) return;
                }
              }
            }
          }
        }
      } catch (_e42) {
        __reportError__(_e42, "", "");

        throw _e42;
      }
    }; // 获取 basicWidgetPropChildren 中的某个数组属性


    VNode.prototype.getTargetChildrenArrayInPropChildren = function (propName) {
      try {
        if (!this.basicWidgetPropChildren[propName]) this.basicWidgetPropChildren[propName] = [];
        return this.basicWidgetPropChildren[propName];
      } catch (_e43) {
        __reportError__(_e43, "", "");

        throw _e43;
      }
    };

    VNode.nodeIdIndex = 0;
    VNode.asyncEventTypes = ['onRefresh', 'onLoadMore'];
    VNode.eventTypes = __spreadArrays(['onTap', 'onLongTap', 'onPan', 'onScroll', 'onChange', 'onLoad', 'onLayout', 'onFocus', 'onBlur', 'onActionsOpen', 'onActionsClose', 'onDragStatusChange', 'onDragPositionChange', 'onOpen', 'onSubmitted'], VNode.asyncEventTypes);
    VNode.throttledEventTypes = ['onTap'];
    return VNode;
  } catch (_e44) {
    __reportError__(_e44, "", "");

    throw _e44;
  }
}();

exports["default"] = VNode;
/**
 * 生命周期类
 */

var LifeCycle =
/** @class */
function () {
  try {
    function LifeCycle() {}

    LifeCycle.isExist = function (lifeStep) {
      try {
        var _context5;

        return (0, _indexOf["default"])(_context5 = LifeCycle.lifes).call(_context5, lifeStep) > -1;
      } catch (_e45) {
        __reportError__(_e45, "", "");

        throw _e45;
      }
    };

    LifeCycle.lifes = ['widgetDidMount', 'widgetDidUpdate', 'widgetDidUnmount'];
    LifeCycle.widgetDidMount = LifeCycle.lifes[0];
    LifeCycle.widgetDidUpdate = LifeCycle.lifes[1];
    LifeCycle.widgetDidUnmount = LifeCycle.lifes[2];
    return LifeCycle;
  } catch (_e46) {
    __reportError__(_e46, "", "");

    throw _e46;
  }
}();

exports.LifeCycle = LifeCycle;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(206);

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(207);

module.exports = parent;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var indexOf = __webpack_require__(208);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.indexOf) ? indexOf : own;
};


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(209);
var entryVirtual = __webpack_require__(156);

module.exports = entryVirtual('Array').indexOf;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var $indexOf = __webpack_require__(45).indexOf;
var arrayMethodIsStrict = __webpack_require__(188);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _map = _interopRequireDefault(__webpack_require__(211));

var _indexOf = _interopRequireDefault(__webpack_require__(205));

var _splice = _interopRequireDefault(__webpack_require__(173));

var _includes = _interopRequireDefault(__webpack_require__(151));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var PageContainer_1 = __webpack_require__(219);

var AppContainer =
/** @class */
function () {
  try {
    function AppContainer() {
      try {
        this._pageId = 0; // 路由

        this.routes = new _map["default"](); // 页面容器
        // native 端每个 flutter vc 对应一个 pageContainer
        // 由于每个 flutter vc 必然会调用一次 thresh.runApp()
        // 因此在 runApp 时创建当前 flutter vc 对应的 pageContainer
        // 在接收到 onDestroy 消息时销毁当前的 pageContainer

        this.pageContainerContextIds = [];
        this.pageContainers = new _map["default"]();
      } catch (_e) {
        __reportError__(_e, "AppContainer", "");

        throw _e;
      }
    }

    AppContainer.prototype.clear = function () {
      try {
        this._pageId = 0;

        while (this.currentPageContainer) {
          this.destroyPageContainer();
        }
      } catch (_e2) {
        __reportError__(_e2, "", "");

        throw _e2;
      }
    };
    /**
     * 添加路由
     */


    AppContainer.prototype.addRoute = function (routeName, pageBuilder) {
      try {
        if (this.routes.has(routeName)) throw new Error("Route name \"" + routeName + "\" has already exist!");
        this.routes.set(routeName, pageBuilder);
      } catch (_e3) {
        __reportError__(_e3, "", "");

        throw _e3;
      }
    };
    /**
     * 判断路由是否存在
     */


    AppContainer.prototype.hasRoute = function (routeName) {
      try {
        return this.routes.has(routeName);
      } catch (_e4) {
        __reportError__(_e4, "", "");

        throw _e4;
      }
    };
    /**
     * 获取路由
     */


    AppContainer.prototype.getRoute = function (routeName) {
      try {
        if (!this.hasRoute(routeName)) return;
        return this.routes.get(routeName);
      } catch (_e5) {
        __reportError__(_e5, "", "");

        throw _e5;
      }
    };

    (0, _defineProperty["default"])(AppContainer.prototype, "contextId", {
      /**
       * 获取当前显示页面的 contextId
       */
      get: function get() {
        try {
          if (this.isEmpty) return;
          return this.currentPageContainer.contextId;
        } catch (_e6) {
          __reportError__(_e6, "get", "");

          throw _e6;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(AppContainer.prototype, "pageId", {
      /**
       * 获取 pageId
       */
      get: function get() {
        try {
          return ++this._pageId;
        } catch (_e7) {
          __reportError__(_e7, "", "");

          throw _e7;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(AppContainer.prototype, "isEmpty", {
      /**
       * 当前容器是否无内容
       */
      get: function get() {
        try {
          return this.pageContainerCount === 0;
        } catch (_e8) {
          __reportError__(_e8, "", "");

          throw _e8;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(AppContainer.prototype, "canPop", {
      /**
       * 当前容器是否可以执行 pop 操作
       */
      get: function get() {
        try {
          var _a;

          if (this.isEmpty) return false;
          return ((_a = this.currentPageContainer) === null || _a === void 0 ? void 0 : _a.canPop) || false;
        } catch (_e9) {
          __reportError__(_e9, "get", "");

          throw _e9;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(AppContainer.prototype, "pageContainerCount", {
      /**
       * 当前页面容器数量
       */
      get: function get() {
        try {
          return this.pageContainers.size;
        } catch (_e10) {
          __reportError__(_e10, "", "");

          throw _e10;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(AppContainer.prototype, "currentPageContainer", {
      /**
       * 获取当前页面容器
       */
      get: function get() {
        try {
          if (this.isEmpty) return;
          var currentPageContainerContextId = this.pageContainerContextIds[this.pageContainerCount - 1];
          return this.pageContainers.get(currentPageContainerContextId);
        } catch (_e11) {
          __reportError__(_e11, "get", "");

          throw _e11;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(AppContainer.prototype, "currentShowIsModal", {
      /**
       * 当前屏幕显示的内容是否为 modal
       */
      get: function get() {
        try {
          if (this.isEmpty) return false;
          return this.currentPageContainer.currentShowIsModal;
        } catch (_e12) {
          __reportError__(_e12, "get", "");

          throw _e12;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(AppContainer.prototype, "currentShowName", {
      /**
       * 当前显示视图的名称
       * 可能是 page 也可能是 modal
       */
      get: function get() {
        try {
          if (this.isEmpty) return;
          return this.currentPageContainer.currentShowName;
        } catch (_e13) {
          __reportError__(_e13, "get", "");

          throw _e13;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(AppContainer.prototype, "currentPageName", {
      /**
       * 当前显示页面的名称
       */
      get: function get() {
        try {
          if (this.isEmpty) return;
          return this.currentPageContainer.currentPageName;
        } catch (_e14) {
          __reportError__(_e14, "get", "");

          throw _e14;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(AppContainer.prototype, "currentPageData", {
      /**
       * 当前显示页面的 vnode
       */
      get: function get() {
        try {
          if (this.isEmpty) return;
          return this.currentPageContainer.currentPageData;
        } catch (_e15) {
          __reportError__(_e15, "get", "");

          throw _e15;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(AppContainer.prototype, "referPageName", {
      /**
       * 当前显示页面的前一页面名称
       */
      get: function get() {
        try {
          if (this.isEmpty) return;
          var referPageName = this.currentPageContainer.referPageName;
          if (referPageName || this.pageContainerCount === 1) return referPageName;
          var prevPageContainer = this.pageContainers[this.pageContainerCount - 2];
          return prevPageContainer.referPageName;
        } catch (_e16) {
          __reportError__(_e16, "get", "");

          throw _e16;
        }
      },
      enumerable: false,
      configurable: true
    });
    /**
     * 创建新的页面容器
     */

    AppContainer.prototype.createPageContainer = function (contextId) {
      try {
        this.pageContainerContextIds.push(contextId);
        this.pageContainers.set(contextId, new PageContainer_1["default"](contextId));
      } catch (_e17) {
        __reportError__(_e17, "", "");

        throw _e17;
      }
    };
    /**
     * 销毁页面容器
     */


    AppContainer.prototype.destroyPageContainer = function (contextId) {
      try {
        var _context, _context2;

        if (!contextId) contextId = this.currentPageContainer.contextId;
        var targetPageContainer = this.pageContainers.get(contextId);

        if (targetPageContainer) {
          targetPageContainer.destroy();
          this.pageContainers["delete"](contextId);
        }

        var index = (0, _indexOf["default"])(_context = this.pageContainerContextIds).call(_context, contextId);
        if (index > -1) (0, _splice["default"])(_context2 = this.pageContainerContextIds).call(_context2, index, 1);
      } catch (_e18) {
        __reportError__(_e18, "", "");

        throw _e18;
      }
    };
    /**
     * 判断页面是否是 modal
     */


    AppContainer.prototype.pageIsModal = function (pageName) {
      try {
        return PageContainer_1["default"].pageIsModal(pageName);
      } catch (_e19) {
        __reportError__(_e19, "", "");

        throw _e19;
      }
    };
    /**
     * 格式化 modal name
     */


    AppContainer.prototype.formatModalName = function (modalName) {
      try {
        return PageContainer_1["default"].formatModalName(modalName);
      } catch (_e20) {
        __reportError__(_e20, "", "");

        throw _e20;
      }
    };
    /**
     * 是否存在某一页面
     * @param pageName 页面名称
     * @param withModal 是否同时在 modal 中查找，默认只在 page 中查找
     */


    AppContainer.prototype.hasPage = function (pageName, withModal) {
      try {
        if (withModal === void 0) {
          withModal = false;
        }

        if (this.isEmpty) return false;
        var containerCount = this.pageContainerCount;

        for (var i = containerCount - 1; i > -1; i--) {
          var contextId = this.pageContainerContextIds[i];
          var targetPageContainer = this.pageContainers.get(contextId);
          var exist = targetPageContainer.hasPage(pageName, withModal);
          if (exist) return true;
        }

        return false;
      } catch (_e21) {
        __reportError__(_e21, "", "");

        throw _e21;
      }
    };
    /**
     * 存入页面
     * @param pageName 页面名
     * @param vnodeTree 页面 vnode
     */


    AppContainer.prototype.pushPage = function (pageName, vnodeTree, createTimestamp) {
      try {
        if (this.isEmpty) return;
        this.currentPageContainer.pushPage(pageName, vnodeTree, createTimestamp);
      } catch (_e22) {
        __reportError__(_e22, "", "");

        throw _e22;
      }
    };
    /**
     * 存入 modal
     * @param pageName 页面名
     * @param vnodeTree 页面 vnode
     * @param isModal 是否为 modal
     */


    AppContainer.prototype.showModal = function (modalName, vnodeTree) {
      try {
        if (this.isEmpty) return;
        this.currentPageContainer.showModal(modalName, vnodeTree);
      } catch (_e23) {
        __reportError__(_e23, "", "");

        throw _e23;
      }
    };
    /**
     * 移除当前显示的页面或 modal
     */


    AppContainer.prototype.removeCurrentShow = function () {
      try {
        if (this.isEmpty) return;
        this.currentPageContainer.removeCurrentShow();
      } catch (_e24) {
        __reportError__(_e24, "", "");

        throw _e24;
      }
    };
    /**
     * 通过名称获取页面或 modal 的 vnode 数据
     */


    AppContainer.prototype.getPageDataWithPageName = function (pageName) {
      try {
        if (this.isEmpty) return;
        var containerCount = this.pageContainerCount;

        for (var i = containerCount - 1; i > -1; i--) {
          var contextId = this.pageContainerContextIds[i];
          var targetPageContainer = this.pageContainers.get(contextId);
          var pageData = targetPageContainer.getPageData(pageName);
          if (pageData) return pageData;
        }
      } catch (_e25) {
        __reportError__(_e25, "", "");

        throw _e25;
      }
    };
    /**
     * 通过 contextId 判断 container 是否存在
     */


    AppContainer.prototype.pageContainerExisted = function (contextId) {
      try {
        var _context3;

        return (0, _includes["default"])(_context3 = this.pageContainerContextIds).call(_context3, contextId);
      } catch (_e26) {
        __reportError__(_e26, "", "");

        throw _e26;
      }
    };
    /**
     * 通过 contextId 获取页面的 vnode 数据
     */


    AppContainer.prototype.getPageDataWithContextId = function (contextId) {
      try {
        if (this.isEmpty) return;
        var targetPageContainer = this.pageContainers.get(contextId);
        if (!targetPageContainer) return;
        return targetPageContainer.currentPageData;
      } catch (_e27) {
        __reportError__(_e27, "", "");

        throw _e27;
      }
    };
    /**
     * 通过页面名获取该页面所在的容器
     */


    AppContainer.prototype.getPageContainerWithPageName = function (pageName) {
      try {
        if (this.isEmpty) return;
        var containerCount = this.pageContainerCount;

        for (var i = containerCount - 1; i > -1; i--) {
          var contextId = this.pageContainerContextIds[i];
          var targetPageContainer = this.pageContainers.get(contextId);
          var exist = targetPageContainer.hasPage(pageName);
          if (exist) return targetPageContainer;
        }

        return;
      } catch (_e28) {
        __reportError__(_e28, "", "");

        throw _e28;
      }
    };
    /**
     * 设置页面渲染数据
     */


    AppContainer.prototype.setPagePerformanceInfo = function (pageName, loadTimestamp) {
      try {
        var targetPageContainer = this.getPageContainerWithPageName(pageName);
        if (!targetPageContainer) return;
        targetPageContainer.setPagePerformanceInfo(pageName, loadTimestamp);
      } catch (_e29) {
        __reportError__(_e29, "", "");

        throw _e29;
      }
    };
    /**
     * 获取页面渲染数据
     */


    AppContainer.prototype.getPagePerformanceInfo = function (pageName) {
      try {
        var targetPageContainer = pageName ? this.getPageContainerWithPageName(pageName) : this.currentPageContainer;
        if (!targetPageContainer) return;
        return targetPageContainer.getPagePerformanceInfo(pageName);
      } catch (_e30) {
        __reportError__(_e30, "", "");

        throw _e30;
      }
    };

    return AppContainer;
  } catch (_e31) {
    __reportError__(_e31, "", "");

    throw _e31;
  }
}();

var appContainer = new AppContainer();
exports["default"] = appContainer;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(212);

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(213);

module.exports = parent;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(214);
__webpack_require__(66);
__webpack_require__(91);
__webpack_require__(96);
var path = __webpack_require__(24);

module.exports = path.Map;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(215);
var collectionStrong = __webpack_require__(218);

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var global = __webpack_require__(7);
var InternalMetadataModule = __webpack_require__(216);
var fails = __webpack_require__(11);
var createNonEnumerableProperty = __webpack_require__(27);
var iterate = __webpack_require__(53);
var anInstance = __webpack_require__(74);
var isObject = __webpack_require__(19);
var setToStringTag = __webpack_require__(71);
var defineProperty = __webpack_require__(28).f;
var forEach = __webpack_require__(114).forEach;
var DESCRIPTORS = __webpack_require__(10);
var InternalStateModule = __webpack_require__(86);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var exported = {};
  var Constructor;

  if (!DESCRIPTORS || typeof NativeConstructor != 'function'
    || !(IS_WEAK || NativePrototype.forEach && !fails(function () { new NativeConstructor().entries().next(); }))
  ) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else {
    Constructor = wrapper(function (target, iterable) {
      setInternalState(anInstance(target, Constructor, CONSTRUCTOR_NAME), {
        type: CONSTRUCTOR_NAME,
        collection: new NativeConstructor()
      });
      if (iterable != undefined) iterate(iterable, target[ADDER], { that: target, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    forEach(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
        createNonEnumerableProperty(Constructor.prototype, KEY, function (a, b) {
          var collection = getInternalState(this).collection;
          if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
          var result = collection[KEY](a === 0 ? 0 : a, b);
          return IS_ADDER ? this : result;
        });
      }
    });

    IS_WEAK || defineProperty(Constructor.prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).collection.size;
      }
    });
  }

  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: true }, exported);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(49);
var isObject = __webpack_require__(19);
var has = __webpack_require__(20);
var defineProperty = __webpack_require__(28).f;
var uid = __webpack_require__(37);
var FREEZING = __webpack_require__(217);

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(11);

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(28).f;
var create = __webpack_require__(41);
var redefineAll = __webpack_require__(70);
var bind = __webpack_require__(25);
var anInstance = __webpack_require__(74);
var iterate = __webpack_require__(53);
var defineIterator = __webpack_require__(93);
var setSpecies = __webpack_require__(73);
var DESCRIPTORS = __webpack_require__(10);
var fastKey = __webpack_require__(216).fastKey;
var InternalStateModule = __webpack_require__(86);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _map = _interopRequireDefault(__webpack_require__(211));

var _startsWith = _interopRequireDefault(__webpack_require__(220));

var _now = _interopRequireDefault(__webpack_require__(141));

var _indexOf = _interopRequireDefault(__webpack_require__(205));

var _includes = _interopRequireDefault(__webpack_require__(151));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.MODAL_TAG = void 0;

var VNode_1 = __webpack_require__(204);

exports.MODAL_TAG = 'modal#';

var PageContainer =
/** @class */
function () {
  try {
    function PageContainer(contextId) {
      try {
        // 所有 page 与 modal name 的缓存
        this.namesCache = []; // page names

        this.pageNamesCache = []; // modal names

        this.modalNamesCache = []; // 所有 page 与 modal 的节点树缓存

        this.nodeDataCache = new _map["default"](); // 页面采集信息

        this.pagePerformanceInfos = new _map["default"]();
        this.contextId = contextId;
      } catch (_e) {
        __reportError__(_e, "PageContainer", "");

        throw _e;
      }
    }

    PageContainer.pageIsModal = function (pageName) {
      try {
        return pageName && (0, _startsWith["default"])(pageName).call(pageName, exports.MODAL_TAG);
      } catch (_e2) {
        __reportError__(_e2, "", "");

        throw _e2;
      }
    };

    PageContainer.formatModalName = function (modalName) {
      try {
        return "" + exports.MODAL_TAG + (modalName || (0, _now["default"])().toString());
      } catch (_e3) {
        __reportError__(_e3, "", "");

        throw _e3;
      }
    };

    (0, _defineProperty["default"])(PageContainer.prototype, "isEmpty", {
      /**
       * 当前容器是否无内容
       */
      get: function get() {
        try {
          return this.namesCache.length === 0;
        } catch (_e4) {
          __reportError__(_e4, "", "");

          throw _e4;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(PageContainer.prototype, "canPop", {
      /**
       * 当前容器是否可以执行 pop 操作
       */
      get: function get() {
        try {
          return this.namesCache.length > 1;
        } catch (_e5) {
          __reportError__(_e5, "", "");

          throw _e5;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(PageContainer.prototype, "currentShowIsModal", {
      /**
       * 当前屏幕显示的内容是否为 modal
       */
      get: function get() {
        try {
          if (this.isEmpty) return false;
          return PageContainer.pageIsModal(this.namesCache[this.namesCache.length - 1]);
        } catch (_e6) {
          __reportError__(_e6, "get", "");

          throw _e6;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(PageContainer.prototype, "currentShowName", {
      /**
       * 当前显示视图的名称
       * 可能是 page 也可能是 modal
       */
      get: function get() {
        try {
          if (this.isEmpty) return;
          return this.namesCache[this.namesCache.length - 1];
        } catch (_e7) {
          __reportError__(_e7, "get", "");

          throw _e7;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(PageContainer.prototype, "currentPageName", {
      /**
       * 当前显示页面的名称
       */
      get: function get() {
        try {
          if (this.isEmpty) return;
          return this.pageNamesCache[this.pageNamesCache.length - 1];
        } catch (_e8) {
          __reportError__(_e8, "get", "");

          throw _e8;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(PageContainer.prototype, "currentPageData", {
      /**
       * 当前显示页面的 vnode
       */
      get: function get() {
        try {
          var pageName = this.currentPageName;
          if (!pageName) return;
          return this.nodeDataCache.get(pageName);
        } catch (_e9) {
          __reportError__(_e9, "get", "");

          throw _e9;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(PageContainer.prototype, "referPageName", {
      /**
       * 当前显示页面的前一页面名称
       */
      get: function get() {
        try {
          if (this.pageNamesCache.length < 2) return;
          return this.pageNamesCache[this.pageNamesCache.length - 2];
        } catch (_e10) {
          __reportError__(_e10, "get", "");

          throw _e10;
        }
      },
      enumerable: false,
      configurable: true
    });
    /**
     * 销毁容器
     */

    PageContainer.prototype.destroy = function () {
      try {
        var name = this.namesCache.pop(); // 从后往前一次处罚所有 页面/modal 的 unmount 事件

        while (name) {
          this.nodeDataCache.get(name).invokeLifeCycle(VNode_1.LifeCycle.widgetDidUnmount);
          name = this.namesCache.pop();
        }

        this.pageNamesCache = [];
        this.modalNamesCache = [];
        this.nodeDataCache.clear();
        this.pagePerformanceInfos.clear();
      } catch (_e11) {
        __reportError__(_e11, "", "");

        throw _e11;
      }
    };
    /**
     * 是否存在某一页面
     * @param pageName 页面名称
     * @param includeModal 是否同时在 modal 中查找，默认只在 page 中查找
     */


    PageContainer.prototype.hasPage = function (pageName, includeModal) {
      try {
        var _context, _context2;

        if (includeModal === void 0) {
          includeModal = false;
        }

        if (!includeModal) return (0, _indexOf["default"])(_context = this.pageNamesCache).call(_context, pageName) > -1;
        return (0, _indexOf["default"])(_context2 = this.namesCache).call(_context2, pageName) > -1;
      } catch (_e12) {
        __reportError__(_e12, "", "");

        throw _e12;
      }
    };
    /**
     * 存入页面
     */


    PageContainer.prototype.pushPage = function (pageName, vnodeTree, createTimestamp) {
      try {
        var _context3;

        if ((0, _includes["default"])(_context3 = this.namesCache).call(_context3, pageName)) throw new Error("Route name \"" + pageName + "\" has already exist!");
        this.namesCache.push(pageName);
        this.pageNamesCache.push(pageName);
        this.nodeDataCache.set(pageName, vnodeTree);
        this.pagePerformanceInfos.set(pageName, {
          hasReported: false,
          createTimestamp: createTimestamp
        });
      } catch (_e13) {
        __reportError__(_e13, "", "");

        throw _e13;
      }
    };
    /**
     * 存入 modal
     */


    PageContainer.prototype.showModal = function (modalName, vnodeTree) {
      try {
        var _context4;

        if ((0, _includes["default"])(_context4 = this.namesCache).call(_context4, modalName)) throw new Error("Route name \"" + modalName + "\" has already exist!");
        this.namesCache.push(modalName);
        this.nodeDataCache.set(modalName, vnodeTree);
        this.modalNamesCache.push(modalName);
      } catch (_e14) {
        __reportError__(_e14, "", "");

        throw _e14;
      }
    };
    /**
     * 移除当前显示的页面或 modal
     */


    PageContainer.prototype.removeCurrentShow = function () {
      try {
        if (this.isEmpty) return;
        var name = this.namesCache.pop();
        if (!PageContainer.pageIsModal(name)) this.pageNamesCache.pop();else this.modalNamesCache.pop();
        this.nodeDataCache["delete"](name);
        this.pagePerformanceInfos["delete"](name);
      } catch (_e15) {
        __reportError__(_e15, "", "");

        throw _e15;
      }
    };
    /**
     * 获取页面或 modal 的 vnode 数据
     * @param pageName 页面名称
     */


    PageContainer.prototype.getPageData = function (pageName) {
      try {
        if (!pageName) return;
        if (this.nodeDataCache.has(pageName)) return this.nodeDataCache.get(pageName);
      } catch (_e16) {
        __reportError__(_e16, "", "");

        throw _e16;
      }
    };
    /**
     * 设置页面渲染数据
     */


    PageContainer.prototype.setPagePerformanceInfo = function (pageName, loadTimestamp) {
      try {
        var currentPerformanceInfo = this.getPagePerformanceInfo(pageName);
        if (!currentPerformanceInfo || currentPerformanceInfo.hasReported || currentPerformanceInfo.loadTimestamp) return;
        currentPerformanceInfo.loadTimestamp = loadTimestamp;
      } catch (_e17) {
        __reportError__(_e17, "", "");

        throw _e17;
      }
    };
    /**
     * 获取页面渲染数据
     */


    PageContainer.prototype.getPagePerformanceInfo = function (pageName) {
      try {
        return this.pagePerformanceInfos.get(pageName || this.currentPageName || '');
      } catch (_e18) {
        __reportError__(_e18, "", "");

        throw _e18;
      }
    };

    return PageContainer;
  } catch (_e19) {
    __reportError__(_e19, "", "");

    throw _e19;
  }
}();

exports["default"] = PageContainer;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(221);

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(222);

module.exports = parent;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var startsWith = __webpack_require__(223);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.startsWith;
  return typeof it === 'string' || it === StringPrototype
    || (it instanceof String && own === StringPrototype.startsWith) ? startsWith : own;
};


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(224);
var entryVirtual = __webpack_require__(156);

module.exports = entryVirtual('String').startsWith;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var getOwnPropertyDescriptor = __webpack_require__(9).f;
var toLength = __webpack_require__(46);
var notARegExp = __webpack_require__(159);
var requireObjectCoercible = __webpack_require__(17);
var correctIsRegExpLogic = __webpack_require__(161);
var IS_PURE = __webpack_require__(34);

var nativeStartsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _assign = _interopRequireDefault(__webpack_require__(199));

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var __assign = void 0 && (void 0).__assign || function () {
  try {
    __assign = _assign["default"] || function (t) {
      try {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      } catch (_e) {
        __reportError__(_e, "", "");

        throw _e;
      }
    };

    return __assign.apply(this, arguments);
  } catch (_e2) {
    __reportError__(_e2, "", "");

    throw _e2;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.DevtoolsManager = exports.SHOW_DIVIDER_KEY = exports.InfoType = void 0;

var MethodChannel_1 = __webpack_require__(145);

var BridgeManager_1 = __webpack_require__(150);

var Util_1 = __webpack_require__(162);

var ThreshApp_1 = __webpack_require__(140);

var InfoType;

(function (InfoType) {
  try {
    InfoType["log"] = "log";
    InfoType["warn"] = "warn";
    InfoType["error"] = "error";
    InfoType["network"] = "network";
    InfoType["bridge"] = "bridge";
    InfoType["event"] = "event";
  } catch (_e3) {
    __reportError__(_e3, "", "");

    throw _e3;
  }
})(InfoType = exports.InfoType || (exports.InfoType = {}));

exports.SHOW_DIVIDER_KEY = '__showDivider__';

var DevtoolsManager =
/** @class */
function () {
  try {
    function DevtoolsManager() {
      try {
        this.pool = {};
      } catch (_e4) {
        __reportError__(_e4, "", "");

        throw _e4;
      }
    }

    DevtoolsManager.prototype.show = function (type, content, title, contextId) {
      try {
        if (!ThreshApp_1["default"] || !ThreshApp_1["default"].debugMode) return;
        MethodChannel_1["default"].call({
          contextId: contextId,
          method: MethodChannel_1.FlutterMethodChannelType.devtools,
          params: {
            type: type,
            title: title,
            content: content
          }
        });
      } catch (_e5) {
        __reportError__(_e5, "", "");

        throw _e5;
      }
    };

    DevtoolsManager.prototype.log = function () {
      try {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        if (!ThreshApp_1["default"] || !ThreshApp_1["default"].debugMode) return;
        this.show(InfoType.log, Util_1["default"].anyToRawString.apply(Util_1["default"], args));
      } catch (_e6) {
        __reportError__(_e6, "", "");

        throw _e6;
      }
    };

    DevtoolsManager.prototype.warn = function () {
      try {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        if (!ThreshApp_1["default"] || !ThreshApp_1["default"].debugMode) return;
        this.show(InfoType.warn, Util_1["default"].anyToRawString.apply(Util_1["default"], args));
      } catch (_e7) {
        __reportError__(_e7, "", "");

        throw _e7;
      }
    };

    DevtoolsManager.prototype.error = function () {
      try {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        if (!ThreshApp_1["default"] || !ThreshApp_1["default"].debugMode) return;
        this.show(InfoType.error, Util_1["default"].anyToRawString.apply(Util_1["default"], args));
      } catch (_e8) {
        __reportError__(_e8, "", "");

        throw _e8;
      }
    };

    DevtoolsManager.prototype.bridge = function (methodId, data, isRequest) {
      try {
        var _a, _b;

        if (isRequest === void 0) {
          isRequest = false;
        }

        if (!ThreshApp_1["default"] || !ThreshApp_1["default"].debugMode) return;
        var bridgeParams;

        if (isRequest) {
          this.pool[methodId] = data;
          bridgeParams = data;
        } else {
          bridgeParams = this.pool[methodId];
          delete this.pool[methodId];
        }

        if (!bridgeParams) return;
        var module = bridgeParams.module,
            business = bridgeParams.business,
            method = bridgeParams.method,
            params = bridgeParams.params;

        if (BridgeManager_1["default"].isNetworkRequest(bridgeParams)) {
          var showInfo = void 0;

          if (isRequest) {
            showInfo = __assign((_a = {
              method: params.method
            }, _a[exports.SHOW_DIVIDER_KEY] = 'params', _a), params.data || params.query || {});
          } else {
            showInfo = __assign((_b = {
              code: data.code,
              reason: data.reason
            }, _b[exports.SHOW_DIVIDER_KEY] = 'data', _b), Util_1["default"].isString(data.data) || Util_1["default"].isNil(data.data) || !Util_1["default"].isObject(data.data) ? {
              data: data.data
            } : data.data);
          }

          this.network(params.url, showInfo, isRequest);
          return;
        }

        if (!ThreshApp_1["default"] || !ThreshApp_1["default"].debugMode) return;
        var logInfos = [isRequest ? 'Request' : 'Response', "Module: " + module];
        if (business) logInfos.push("Business: " + business);
        logInfos.push("Method: " + method);
        logInfos.push("MethodId: " + methodId);
        this.show(InfoType.bridge, Util_1["default"].anyToRawString(data), logInfos.join('\n'));
      } catch (_e9) {
        __reportError__(_e9, "", "");

        throw _e9;
      }
    };

    DevtoolsManager.prototype.network = function (url, params, isRequest) {
      try {
        if (isRequest === void 0) {
          isRequest = false;
        }

        if (!ThreshApp_1["default"] || !ThreshApp_1["default"].debugMode) return;
        this.show(InfoType.network, Util_1["default"].anyToRawString(params), (isRequest ? 'Request' : 'Response') + "\n" + url);
      } catch (_e10) {
        __reportError__(_e10, "", "");

        throw _e10;
      }
    };

    return DevtoolsManager;
  } catch (_e11) {
    __reportError__(_e11, "", "");

    throw _e11;
  }
}();

exports.DevtoolsManager = DevtoolsManager;
var devtools = new DevtoolsManager();
exports["default"] = devtools;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _map = _interopRequireDefault(__webpack_require__(227));

var _indexOf = _interopRequireDefault(__webpack_require__(205));

var _splice = _interopRequireDefault(__webpack_require__(173));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var Util_1 = __webpack_require__(162);
/**
 * 简易实现的事件触发器
 * 仅框架内部使用
 * 未传入name时默认会有自增id作为name
 * 主要为 定时器 bridge 等服务
 */


var Bus =
/** @class */
function () {
  try {
    function Bus() {
      try {
        this._busId = 0;
        this._pool = {};
      } catch (_e) {
        __reportError__(_e, "Bus", "");

        throw _e;
      }
    }

    Bus.prototype.register = function (callback, name) {
      try {
        if (!Util_1["default"].isFunc(callback)) return;
        var busName = name ? name.toString() : (++this._busId).toString();
        if (!this._pool[busName]) this._pool[busName] = [];

        this._pool[busName].push(callback);

        return busName;
      } catch (_e2) {
        __reportError__(_e2, "", "");

        throw _e2;
      }
    };

    Bus.prototype.fire = function (name) {
      try {
        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }

        if (!name) return;
        var callbacks = this._pool[name];
        if (!callbacks || !callbacks.length) return;
        return (0, _map["default"])(callbacks).call(callbacks, function (callback) {
          try {
            return callback.apply(void 0, args);
          } catch (_e3) {
            __reportError__(_e3, "", "");

            throw _e3;
          }
        });
      } catch (_e4) {
        __reportError__(_e4, "", "");

        throw _e4;
      }
    };

    Bus.prototype.has = function (name, callback) {
      try {
        if (!name || !this._pool[name]) return false;
        if (!callback) return true;
        var callbacks = this._pool[name];
        var index = (0, _indexOf["default"])(callbacks).call(callbacks, callback);
        return index > -1;
      } catch (_e5) {
        __reportError__(_e5, "", "");

        throw _e5;
      }
    };

    Bus.prototype.remove = function (name, callback) {
      try {
        if (!name || !this._pool[name]) return;

        if (!callback) {
          delete this._pool[name];
          return;
        }

        var callbacks = this._pool[name];
        var index = (0, _indexOf["default"])(callbacks).call(callbacks, callback);
        if (index > -1) (0, _splice["default"])(callbacks).call(callbacks, index, 1);
      } catch (_e6) {
        __reportError__(_e6, "", "");

        throw _e6;
      }
    };

    Bus.prototype.clear = function () {
      try {
        this._busId = 0;
        this._pool = {};
      } catch (_e7) {
        __reportError__(_e7, "", "");

        throw _e7;
      }
    };

    return Bus;
  } catch (_e8) {
    __reportError__(_e8, "", "");

    throw _e8;
  }
}();

var bus = new Bus();
exports["default"] = bus;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(228);

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(229);

module.exports = parent;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(230);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.map;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.map) ? map : own;
};


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(231);
var entryVirtual = __webpack_require__(156);

module.exports = entryVirtual('Array').map;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var $map = __webpack_require__(114).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(107);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _now = _interopRequireDefault(__webpack_require__(141));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.methodChannel_timer_fire = void 0;

var Util_1 = __webpack_require__(162);

var bus_1 = __webpack_require__(226); // 定时器类型


var TimerType;

(function (TimerType) {
  try {
    TimerType[TimerType["timeout"] = 0] = "timeout";
    TimerType[TimerType["interval"] = 1] = "interval";
  } catch (_e) {
    __reportError__(_e, "", "");

    throw _e;
  }
})(TimerType || (TimerType = {}));

var TimerManager =
/** @class */
function () {
  try {
    function TimerManager() {}
    /**
     * 定时执行器
     */


    TimerManager.setTimeout = function (callback, duration) {
      try {
        if (duration === void 0) {
          duration = 0;
        }

        return TimerManager.registerTimer(TimerType.timeout, callback, duration);
      } catch (_e2) {
        __reportError__(_e2, "", "");

        throw _e2;
      }
    };
    /**
     * 循环定时执行器
     */


    TimerManager.setInterval = function (callback, duration) {
      try {
        if (duration === void 0) {
          duration = 0;
        }

        return TimerManager.registerTimer(TimerType.interval, callback, duration);
      } catch (_e3) {
        __reportError__(_e3, "", "");

        throw _e3;
      }
    };
    /**
     * 清除定时器
     */


    TimerManager.clearTimer = function (timerId) {
      try {
        if (!timerId) return;
        bus_1["default"].remove(timerId);
        methodChannel_timer_operator({
          type: 'clear',
          id: timerId
        });
      } catch (_e4) {
        __reportError__(_e4, "", "");

        throw _e4;
      }
    };
    /**
     * 执行定时器
     */


    TimerManager.fireTimer = function (timerId) {
      try {
        if (!timerId) return;
        bus_1["default"].fire(timerId);
      } catch (_e5) {
        __reportError__(_e5, "", "");

        throw _e5;
      }
    };
    /**
     * 注册定时器
     */


    TimerManager.registerTimer = function (type, callback, duration) {
      try {
        if (!Util_1["default"].isFunc(callback)) return;
        if (!duration || duration < 0) duration = 0;
        var loop = type === TimerType.interval;
        var timerId = bus_1["default"].register(loop ? callback // 如果是单次定时器
        // 执行回调后立刻清除
        : function () {
          try {
            callback();
            bus_1["default"].remove(timerId);
          } catch (_e6) {
            __reportError__(_e6, "", "");

            throw _e6;
          }
        }, this.timerId);
        methodChannel_timer_operator({
          type: 'register',
          id: timerId,
          duration: duration,
          loop: loop
        });
        return timerId;
      } catch (_e7) {
        __reportError__(_e7, "", "");

        throw _e7;
      }
    };

    (0, _defineProperty["default"])(TimerManager, "timerId", {
      get: function get() {
        try {
          return "timer_" + Math.random().toString(16).replace('0', (0, _now["default"])().toString());
        } catch (_e8) {
          __reportError__(_e8, "", "");

          throw _e8;
        }
      },
      enumerable: false,
      configurable: true
    });
    return TimerManager;
  } catch (_e9) {
    __reportError__(_e9, "", "");

    throw _e9;
  }
}();

exports["default"] = TimerManager; // 暴露到全局的 timer 触发方法

function methodChannel_timer_fire(params) {
  try {
    if (!params) return;
    var id = params.id;
    if (!id) return;
    TimerManager.fireTimer(id);
  } catch (_e10) {
    __reportError__(_e10, "methodChannel_timer_fire", "");

    throw _e10;
  }
}

exports.methodChannel_timer_fire = methodChannel_timer_fire;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(2));

var _symbol = _interopRequireDefault(__webpack_require__(100));

var _iterator = _interopRequireDefault(__webpack_require__(132));

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _includes = _interopRequireDefault(__webpack_require__(151));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  try {
    function adopt(value) {
      try {
        return value instanceof P ? value : new P(function (resolve) {
          try {
            resolve(value);
          } catch (_e) {
            __reportError__(_e, "", "");

            throw _e;
          }
        });
      } catch (_e2) {
        __reportError__(_e2, "", "");

        throw _e2;
      }
    }

    return new (P || (P = _promise["default"]))(function (resolve, reject) {
      try {
        function fulfilled(value) {
          try {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          } catch (_e3) {
            __reportError__(_e3, "", "");

            throw _e3;
          }
        }

        function rejected(value) {
          try {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          } catch (_e4) {
            __reportError__(_e4, "", "");

            throw _e4;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e5) {
            __reportError__(_e5, "", "");

            throw _e5;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e6) {
        __reportError__(_e6, "", "");

        throw _e6;
      }
    });
  } catch (_e7) {
    __reportError__(_e7, "", "");

    throw _e7;
  }
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  try {
    var _ = {
      label: 0,
      sent: function sent() {
        try {
          if (t[0] & 1) throw t[1];
          return t[1];
        } catch (_e8) {
          __reportError__(_e8, "sent", "");

          throw _e8;
        }
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof _symbol["default"] === "function" && (g[_iterator["default"]] = function () {
      try {
        return this;
      } catch (_e9) {
        __reportError__(_e9, "", "");

        throw _e9;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e10) {
        __reportError__(_e10, "", "");

        throw _e10;
      }
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  } catch (_e11) {
    __reportError__(_e11, "", "");

    throw _e11;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var MethodChannel_1 = __webpack_require__(145);

var BridgeManager_1 = __webpack_require__(150);

var Util_1 = __webpack_require__(162);

var DevtoolsManager_1 = __webpack_require__(225);
/**
 * 工具方法管理器
 */


var UtilManager =
/** @class */
function () {
  try {
    function UtilManager() {}
    /**
     * 发起网络请求
     * debugMode状态下会通过flutter发起请求
     * 否则通过native bridge发起请求
     */


    UtilManager.request = function (params, module, method) {
      try {
        if (module === void 0) {
          module = 'base';
        }

        if (method === void 0) {
          method = 'request';
        }

        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            if (false) { var _context, _context2; }

            return [2
            /*return*/
            , BridgeManager_1["default"].invoke({
              module: module,
              method: method,
              params: params
            })];
          });
        });
      } catch (_e12) {
        __reportError__(_e12, "", "");

        throw _e12;
      }
    };
    /**
     * 复制到剪贴板
     * @param {any} data
     */


    UtilManager.copy = function (data, showSuccess) {
      try {
        if (showSuccess === void 0) {
          showSuccess = true;
        }

        MethodChannel_1["default"].call({
          method: MethodChannel_1.FlutterMethodChannelType.copy,
          params: {
            data: Util_1["default"].toString(data),
            showSuccess: showSuccess
          }
        });
      } catch (_e13) {
        __reportError__(_e13, "", "");

        throw _e13;
      }
    };
    /**
     * 收起键盘
     */


    UtilManager.blur = function () {
      try {
        MethodChannel_1["default"].call({
          method: MethodChannel_1.FlutterMethodChannelType.blur
        });
      } catch (_e14) {
        __reportError__(_e14, "", "");

        throw _e14;
      }
    };

    UtilManager.log = function () {
      try {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        if (console && console.log) {
          console.log.apply(console, args);
        }

        DevtoolsManager_1["default"].log.apply(DevtoolsManager_1["default"], args);
      } catch (_e15) {
        __reportError__(_e15, "", "");

        throw _e15;
      }
    };

    UtilManager.warn = function () {
      try {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        if (console && console.warn) {
          console.warn.apply(console, args);
        }

        DevtoolsManager_1["default"].warn.apply(DevtoolsManager_1["default"], args);
      } catch (_e16) {
        __reportError__(_e16, "", "");

        throw _e16;
      }
    };

    UtilManager.error = function () {
      try {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        if (console && console.error) {
          console.error.apply(console, args);
        }

        DevtoolsManager_1["default"].error.apply(DevtoolsManager_1["default"], args);
      } catch (_e17) {
        __reportError__(_e17, "", "");

        throw _e17;
      }
    };

    return UtilManager;
  } catch (_e18) {
    __reportError__(_e18, "", "");

    throw _e18;
  }
}();

exports["default"] = UtilManager;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(2));

var _symbol = _interopRequireDefault(__webpack_require__(100));

var _iterator = _interopRequireDefault(__webpack_require__(132));

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _from = _interopRequireDefault(__webpack_require__(235));

var _keys = _interopRequireDefault(__webpack_require__(241));

var _now = _interopRequireDefault(__webpack_require__(141));

var _stringify = _interopRequireDefault(__webpack_require__(146));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  try {
    function adopt(value) {
      try {
        return value instanceof P ? value : new P(function (resolve) {
          try {
            resolve(value);
          } catch (_e) {
            __reportError__(_e, "", "");

            throw _e;
          }
        });
      } catch (_e2) {
        __reportError__(_e2, "", "");

        throw _e2;
      }
    }

    return new (P || (P = _promise["default"]))(function (resolve, reject) {
      try {
        function fulfilled(value) {
          try {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          } catch (_e3) {
            __reportError__(_e3, "", "");

            throw _e3;
          }
        }

        function rejected(value) {
          try {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          } catch (_e4) {
            __reportError__(_e4, "", "");

            throw _e4;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e5) {
            __reportError__(_e5, "", "");

            throw _e5;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e6) {
        __reportError__(_e6, "", "");

        throw _e6;
      }
    });
  } catch (_e7) {
    __reportError__(_e7, "", "");

    throw _e7;
  }
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  try {
    var _ = {
      label: 0,
      sent: function sent() {
        try {
          if (t[0] & 1) throw t[1];
          return t[1];
        } catch (_e8) {
          __reportError__(_e8, "sent", "");

          throw _e8;
        }
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof _symbol["default"] === "function" && (g[_iterator["default"]] = function () {
      try {
        return this;
      } catch (_e9) {
        __reportError__(_e9, "", "");

        throw _e9;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e10) {
        __reportError__(_e10, "", "");

        throw _e10;
      }
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  } catch (_e11) {
    __reportError__(_e11, "", "");

    throw _e11;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var MethodChannel_1 = __webpack_require__(145);

var dispatchMethod_1 = __webpack_require__(245);

var AppContainer_1 = __webpack_require__(210);

var bus_1 = __webpack_require__(226);

var UIManager_1 = __webpack_require__(246);

var basicWidget_1 = __webpack_require__(247);
/**
 * 页面渲染管理器
 */


var RenderManager =
/** @class */
function () {
  try {
    function RenderManager() {}

    (0, _defineProperty["default"])(RenderManager, "currentPage", {
      /**
       * 获取当前页面信息
       */
      get: function get() {
        try {
          if (AppContainer_1["default"].isEmpty) return;
          var pageName = AppContainer_1["default"].currentPageName;
          if (!pageName) return;
          var pageData = AppContainer_1["default"].currentPageData;
          if (!pageData) return;
          var temp = pageName.split('#');
          temp.pop();
          pageName = temp.join('#');
          return {
            pageName: pageName,
            pageData: pageData
          };
        } catch (_e12) {
          __reportError__(_e12, "get", "");

          throw _e12;
        }
      },
      enumerable: false,
      configurable: true
    });
    /**
     * 页面不存在
     */

    RenderManager.pageNotFound = function (nextPath) {
      try {
        var _context;

        var allPaths = (0, _from["default"])((0, _keys["default"])(_context = AppContainer_1["default"].routes).call(_context));
        MethodChannel_1["default"].call({
          method: MethodChannel_1.FlutterMethodChannelType.pageNotFound,
          params: {
            allPath: allPaths.join('\n'),
            nextPath: nextPath,
            prevPath: AppContainer_1["default"].referPageName || ''
          }
        });
      } catch (_e13) {
        __reportError__(_e13, "", "");

        throw _e13;
      }
    };
    /**
     * 建立页面/模态框
     * @param {VNode} renderTree
     * @param {String} pageName
     * @param {number} createTimestamp 页面创建时间
     */


    RenderManager.pushPage = function (renderTree, pageName, createTimestamp) {
      try {
        if (AppContainer_1["default"].isEmpty && (UIManager_1["default"].screenWidth === 0 || UIManager_1["default"].screenHeight === 0)) {
          throw new Error("[UI ERROR] screenWidth: " + UIManager_1["default"].screenWidth + ", screenHeight: " + UIManager_1["default"].screenHeight);
        }

        var contextId = AppContainer_1["default"].contextId;
        if (!AppContainer_1["default"].isEmpty) basicWidget_1.Page.invokePageOnHide(contextId);

        var page = RenderManager._buildPage(renderTree, pageName);

        AppContainer_1["default"].pushPage(page.pageName, renderTree, createTimestamp);
        MethodChannel_1["default"].call({
          method: MethodChannel_1.FlutterMethodChannelType.pushPage,
          params: {
            pageName: page.pageName,
            widgetRenderData: page.pageData
          }
        });
        var pageOnShowEventName = "pageOnShow#" + page.pageName;
        bus_1["default"].register(function () {
          try {
            basicWidget_1.Page.invokePageOnShow(contextId);
            bus_1["default"].remove(pageOnShowEventName);
          } catch (_e14) {
            __reportError__(_e14, "", "");

            throw _e14;
          }
        }, pageOnShowEventName);
      } catch (_e15) {
        __reportError__(_e15, "", "");

        throw _e15;
      }
    };
    /**
     * 推出当前页面
     */


    RenderManager.popPage = function () {
      return __awaiter(this, void 0, void 0, function () {
        var showName, shouldPop, popPageCallback_1;
        return __generator(this, function (_a) {
          try {
            switch (_a.label) {
              case 0:
                showName = AppContainer_1["default"].currentShowName;
                if (!showName) return [2
                /*return*/
                ];
                if (!!AppContainer_1["default"].currentShowIsModal) return [3
                /*break*/
                , 2];
                return [4
                /*yield*/
                , basicWidget_1.Page.invokeBeforePagePop()];

              case 1:
                shouldPop = _a.sent();
                if (!shouldPop) return [2
                /*return*/
                ];
                _a.label = 2;

              case 2:
                // 如果当前页面可执行 popPage 操作
                // 则向 flutter 发出 popPage 消息
                // flutter 完成相关操作后向 js 发出 hasPopPage 消息
                if (AppContainer_1["default"].canPop) {
                  MethodChannel_1["default"].call({
                    method: MethodChannel_1.FlutterMethodChannelType.popPage,
                    params: {
                      pageName: showName
                    }
                  });

                  popPageCallback_1 = function popPageCallback_1(resolve) {
                    try {
                      bus_1["default"].register(function () {
                        try {
                          resolve();
                        } catch (_e16) {
                          __reportError__(_e16, "", "");

                          throw _e16;
                        }
                      }, showName);
                    } catch (_e17) {
                      __reportError__(_e17, "", "");

                      throw _e17;
                    }
                  };

                  return [2
                  /*return*/
                  , new _promise["default"](function (resolve) {
                    try {
                      popPageCallback_1(resolve);
                    } catch (_e18) {
                      __reportError__(_e18, "", "");

                      throw _e18;
                    }
                  })];
                } // 当前页面不可执行 popPage 操作
                // 则直接调用 closeWindow 关闭当前 native 窗口
                // 页面 onHide onShow onDestroy 等操作由 native 来触发
                else {
                    dispatchMethod_1["default"].closeWindow();
                  }

                return [2
                /*return*/
                ];
            }
          } catch (_e19) {
            __reportError__(_e19, "", "");

            throw _e19;
          }
        });
      });
    };
    /**
     * 显示 modal
     */


    RenderManager.showModal = function (modalRenderTree, title, popup) {
      try {
        var modal = RenderManager._buildPage(modalRenderTree, title);

        AppContainer_1["default"].showModal(modal.pageName, modalRenderTree);
        MethodChannel_1["default"].call({
          method: MethodChannel_1.FlutterMethodChannelType.showModal,
          params: {
            modalName: modal.pageName,
            widgetRenderData: modal.pageData,
            popup: popup
          }
        });
      } catch (_e20) {
        __reportError__(_e20, "", "");

        throw _e20;
      }
    };
    /**
     * 隐藏 modal
     */


    RenderManager.hideModal = function () {
      try {
        return RenderManager.popPage();
      } catch (_e21) {
        __reportError__(_e21, "", "");

        throw _e21;
      }
    };
    /**
     * 显示taost
     */


    RenderManager.showToast = function (toastRenderTree, toastInfo) {
      try {
        if (toastInfo === void 0) {
          toastInfo = {};
        }

        var toastRenderData = toastRenderTree.toRenderData('toast#' + (toastInfo.name || (0, _now["default"])()));
        MethodChannel_1["default"].call({
          method: MethodChannel_1.FlutterMethodChannelType.showToast,
          params: {
            toastRenderData: (0, _stringify["default"])(toastRenderData),
            toastInfo: (0, _stringify["default"])(toastInfo)
          }
        });
      } catch (_e22) {
        __reportError__(_e22, "", "");

        throw _e22;
      }
    };
    /**
     * 隐藏taost
     */


    RenderManager.hideToast = function (toastName) {
      try {
        MethodChannel_1["default"].call({
          method: MethodChannel_1.FlutterMethodChannelType.hideToast,
          params: {
            toastName: toastName
          }
        });
      } catch (_e23) {
        __reportError__(_e23, "", "");

        throw _e23;
      }
    };
    /**
     * 更新widget
     * @param {VNode} updateRenderTree
     * @param {String} needUpdateWidgetId
     * @param {String} invokeDidUpdateWidgetId
     * @param {String} pageName
     * @param {bool} setRootBasicStateful 是否设置newWidgetTree的根basic widget为stateful，因为更新时只能拿到render执行结果，无法获取到包裹它的widget是否是stateful的，所以需要手动传入
     */


    RenderManager.updateWidget = function (updateRenderTree, needUpdateWidgetId, invokeDidUpdateWidgetId, pageName) {
      try {
        // 当需要更新 widget 时查看 widget cache 中是否已经存在需要被替换的 widget tree 的根节点标记
        var updateRenderData = updateRenderTree.toRenderData(pageName);
        MethodChannel_1["default"].call({
          method: MethodChannel_1.FlutterMethodChannelType.updateWidget,
          params: {
            pageName: pageName,
            needUpdateWidgetId: needUpdateWidgetId,
            invokeDidUpdateWidgetId: invokeDidUpdateWidgetId,
            widgetUpdateData: (0, _stringify["default"])(updateRenderData)
          },
          contextId: updateRenderTree.contextId
        });
      } catch (_e24) {
        __reportError__(_e24, "", "");

        throw _e24;
      }
    };
    /**
     * 停止 flutter 中永久渲染组件的渲染
     */


    RenderManager.stopAlwaysRender = function (contextId) {
      try {
        MethodChannel_1["default"].call({
          method: MethodChannel_1.FlutterMethodChannelType.stopAlwaysRender,
          contextId: contextId
        });
      } catch (_e25) {
        __reportError__(_e25, "", "");

        throw _e25;
      }
    };
    /**
     * 获取设备媒体信息
     * 由于mediaQuery是threshApp中唯一一个双向的方法
     * 因此在接收到来自flutter的mediaQuery信息时，还会携带上其他的信息
     * 如：debugMode bizName 等
     */


    RenderManager.getMediaQuery = function (jsVersion) {
      try {
        MethodChannel_1["default"].call({
          method: MethodChannel_1.FlutterMethodChannelType.mediaQuery,
          params: {
            jsEnv: 'production',
            jsVersion: jsVersion
          }
        });
      } catch (_e26) {
        __reportError__(_e26, "", "");

        throw _e26;
      }
    };
    /**
     * 构建页面
     * 返回一个可以被flutter解析渲染的 jsonTreeString
     */


    RenderManager._buildPage = function (renderTree, pageName) {
      try {
        if (!pageName) throw new Error('set up page must have a pageName');
        pageName = pageName + "#" + AppContainer_1["default"].pageId;
        var renderData = renderTree.toRenderData(pageName);
        if (!renderTree.fetchRootNode().pageNode && !AppContainer_1["default"].pageIsModal(pageName)) throw new Error('Each page must have one <Page />');
        return {
          pageName: pageName,
          pageData: (0, _stringify["default"])(renderData)
        };
      } catch (_e27) {
        __reportError__(_e27, "", "");

        throw _e27;
      }
    };

    return RenderManager;
  } catch (_e28) {
    __reportError__(_e28, "", "");

    throw _e28;
  }
}();

exports["default"] = RenderManager;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(236);

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(237);

module.exports = parent;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(91);
__webpack_require__(238);
var path = __webpack_require__(24);

module.exports = path.Array.from;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(6);
var from = __webpack_require__(239);
var checkCorrectnessOfIteration = __webpack_require__(76);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(25);
var toObject = __webpack_require__(31);
var callWithSafeIterationClosing = __webpack_require__(240);
var isArrayIteratorMethod = __webpack_require__(54);
var toLength = __webpack_require__(46);
var createProperty = __webpack_require__(105);
var getIteratorMethod = __webpack_require__(62);

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(29);
var iteratorClose = __webpack_require__(65);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(242);

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
var keys = __webpack_require__(243);
var classof = __webpack_require__(63);
var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.keys;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.keys)
    // eslint-disable-next-line no-prototype-builtins -- safe
    || DOMIterables.hasOwnProperty(classof(it)) ? keys : own;
};


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(244);

module.exports = parent;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
var entryVirtual = __webpack_require__(156);

module.exports = entryVirtual('Array').keys;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(2));

var _symbol = _interopRequireDefault(__webpack_require__(100));

var _iterator = _interopRequireDefault(__webpack_require__(132));

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _stringify = _interopRequireDefault(__webpack_require__(146));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  try {
    function adopt(value) {
      try {
        return value instanceof P ? value : new P(function (resolve) {
          try {
            resolve(value);
          } catch (_e) {
            __reportError__(_e, "", "");

            throw _e;
          }
        });
      } catch (_e2) {
        __reportError__(_e2, "", "");

        throw _e2;
      }
    }

    return new (P || (P = _promise["default"]))(function (resolve, reject) {
      try {
        function fulfilled(value) {
          try {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          } catch (_e3) {
            __reportError__(_e3, "", "");

            throw _e3;
          }
        }

        function rejected(value) {
          try {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          } catch (_e4) {
            __reportError__(_e4, "", "");

            throw _e4;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e5) {
            __reportError__(_e5, "", "");

            throw _e5;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e6) {
        __reportError__(_e6, "", "");

        throw _e6;
      }
    });
  } catch (_e7) {
    __reportError__(_e7, "", "");

    throw _e7;
  }
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  try {
    var _ = {
      label: 0,
      sent: function sent() {
        try {
          if (t[0] & 1) throw t[1];
          return t[1];
        } catch (_e8) {
          __reportError__(_e8, "sent", "");

          throw _e8;
        }
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof _symbol["default"] === "function" && (g[_iterator["default"]] = function () {
      try {
        return this;
      } catch (_e9) {
        __reportError__(_e9, "", "");

        throw _e9;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e10) {
        __reportError__(_e10, "", "");

        throw _e10;
      }
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  } catch (_e11) {
    __reportError__(_e11, "", "");

    throw _e11;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.nativeCallJs = exports.flutterCallJs = exports.Dispatcher = void 0;

var __1 = __webpack_require__(139);

var MethodChannel_1 = __webpack_require__(145);

var VNode_1 = __webpack_require__(204);

var AppContainer_1 = __webpack_require__(210);

var UIManager_1 = __webpack_require__(246);

var RenderManager_1 = __webpack_require__(234);

var UtilManager_1 = __webpack_require__(233);

var BridgeManager_1 = __webpack_require__(150);

var bus_1 = __webpack_require__(226);

var Util_1 = __webpack_require__(162);

var basicWidget_1 = __webpack_require__(247);

var DispatcherFromType;

(function (DispatcherFromType) {
  try {
    DispatcherFromType[DispatcherFromType["Flutter"] = 0] = "Flutter";
    DispatcherFromType[DispatcherFromType["Native"] = 1] = "Native";
  } catch (_e12) {
    __reportError__(_e12, "", "");

    throw _e12;
  }
})(DispatcherFromType || (DispatcherFromType = {}));
/**
 * native与flutter调用js后的方法分发器
 */


var Dispatcher =
/** @class */
function () {
  try {
    function Dispatcher() {} // 事件分发中心


    Dispatcher.prototype.dispatch = function (channelParams, from) {
      try {
        var method = channelParams.method,
            params = channelParams.params,
            contextId = channelParams.contextId; // 来自 flutter 的消息是被 stringify 的
        // 需要先解析为 Object

        if (from === DispatcherFromType.Flutter) {
          if (Util_1["default"].isString(params)) {
            try {
              params = JSON.parse(params);
            } catch (e) {
              UtilManager_1["default"].warn(e);
            }
          }
        }

        var fn = this[method];
        if (fn) fn(params, (contextId || '').toString());
      } catch (_e13) {
        __reportError__(_e13, "", "");

        throw _e13;
      }
    };
    /**
     * flutter_call_js
     * flutter 在获取到设备媒介参数后会通过该消息发送给 js
     */


    Dispatcher.prototype[MethodChannel_1.MethodChannelReceiveType.mediaQuery] = function (params) {
      return __awaiter(this, void 0, void 0, function () {
        var _a, debugMode, platform, flutterVersion, _b, width, _c, needJsBundlePath, bundleDir, res;

        return __generator(this, function (_d) {
          try {
            switch (_d.label) {
              case 0:
                // 防止重复获取
                if (__1["default"].envReady) return [2
                /*return*/
                ];
                _a = params.debugMode, debugMode = _a === void 0 ? false : _a, platform = params.platform, flutterVersion = params.flutterVersion, _b = params.width, width = _b === void 0 ? 0 : _b, _c = params.needJsBundlePath, needJsBundlePath = _c === void 0 ? true : _c; // width 不存在时认为该条消息无效

                if (!width) return [2
                /*return*/
                ]; // fix promise bug

                return [4
                /*yield*/
                , Util_1["default"].promiseResolveHackForIos_10_0_x()];

              case 1:
                // fix promise bug
                _d.sent();

                __1["default"].debugMode = !!debugMode;
                __1["default"].platform = platform;
                __1["default"].flutterVersion = flutterVersion;
                __1["default"].envReady = true;
                UIManager_1.mediaQuery.setDeviceInfo(params);
                if (true) return [3
                /*break*/
                , 2];
                bundleDir = 'C:\brproject\WuKong\dist';
                MethodChannel_1["default"].call({
                  method: MethodChannel_1.FlutterMethodChannelType.setBundleDir,
                  params: {
                    bundleDir: bundleDir
                  }
                });
                return [3
                /*break*/
                , 4];

              case 2:
                if (!needJsBundlePath) return [3
                /*break*/
                , 4];
                return [4
                /*yield*/
                , BridgeManager_1["default"].invoke({
                  module: 'thresh',
                  method: 'jsbundlePath',
                  params: {
                    bizName: 'thresh-template'
                  }
                })];

              case 3:
                res = _d.sent();
                bundleDir = res.data || '';
                if (!bundleDir) throw new Error("cannot get thresh js bundle dir: " + (0, _stringify["default"])(res));
                MethodChannel_1["default"].call({
                  method: MethodChannel_1.FlutterMethodChannelType.setBundleDir,
                  params: {
                    bundleDir: bundleDir
                  }
                });
                _d.label = 4;

              case 4:
                Util_1["default"].log('Flutter env is ready');
                return [2
                /*return*/
                ];
            }
          } catch (_e14) {
            __reportError__(_e14, "", "");

            throw _e14;
          }
        });
      });
    };
    /**
     * flutter_call_js
     * flutter 端环境准备完成后发送该消息
     * 该消息可能会携带需要显示的页面数据
     */


    Dispatcher.prototype[MethodChannel_1.MethodChannelReceiveType.ready] = function (params) {
      return __awaiter(this, void 0, void 0, function () {
        var contextId;
        return __generator(this, function (_a) {
          if (!__1["default"].envReady) {
            RenderManager_1["default"].getMediaQuery(__1["default"].jsVersion);
            return [2
            /*return*/
            ];
          }

          contextId = params.jsContextId;
          if (!contextId || AppContainer_1["default"].pageContainerExisted(contextId)) return [2
          /*return*/
          ];

          if (params.pageName) {
            __1["default"].injectRoute(params);
          }

          AppContainer_1["default"].createPageContainer(contextId);

          __1["default"].ready();

          return [2
          /*return*/
          ];
        });
      });
    };
    /**
     * flutter_call_js
     * flutter 通过该消息通知 js 显示某个页面
     */


    Dispatcher.prototype[MethodChannel_1.MethodChannelReceiveType.setupPage] = function (params) {
      try {
        var pageName = params ? params.pageName : void 0;
        var query = params ? params.params || {} : void 0;

        __1["default"].pushPage(pageName, query);
      } catch (_e15) {
        __reportError__(_e15, "", "");

        throw _e15;
      }
    };
    /**
     * flutter_call_js
     * flutter 触发 popPage 时通过该方法将 popPage 的决定权交给 js
     * flutter 本身触发的 popPage 不生效，通过 js 触发的 popPage 才生效
     * 以便执行 popPage 前的一些额外操作
     */


    Dispatcher.prototype[MethodChannel_1.MethodChannelReceiveType.needPopPage] = function () {
      try {
        __1["default"].popPage();
      } catch (_e16) {
        __reportError__(_e16, "", "");

        throw _e16;
      }
    };
    /**
     * flutter_call_js
     * 执行该方法时 flutter 实际 hasPopPage 已完成
     */


    Dispatcher.prototype[MethodChannel_1.MethodChannelReceiveType.hasPopPage] = function (params) {
      try {
        if (params === void 0) {
          params = {};
        }

        var hidePageName = params.pageName; // 获取到当前被退出页面的名字

        if (!hidePageName) hidePageName = AppContainer_1["default"].currentShowName;

        if (AppContainer_1["default"].hasPage(hidePageName, true)) {
          var contextId = AppContainer_1["default"].contextId; // 判断当前被关闭的页面是不是 modal
          // 如果是 modal 页面，将不会触发当前 modal 内部 Page.onHide 以及即将显示的页面的 Page.onShow

          var isModalPage = AppContainer_1["default"].pageIsModal(hidePageName);
          var renderTree = AppContainer_1["default"].getPageDataWithPageName(hidePageName); // popPage 后续流程：
          // 1. 触发 pageOnHide

          if (!isModalPage) basicWidget_1.Page.invokePageOnHide(contextId); // 2. 执行 popPage 结束回调并移除

          bus_1["default"].fire(hidePageName);
          bus_1["default"].remove(hidePageName); // 3. 移除当前显示页面

          AppContainer_1["default"].removeCurrentShow(); // 4. 触发当前显示页面的 didUnmount

          renderTree.invokeLifeCycle(VNode_1.LifeCycle.widgetDidUnmount); // 5. 触发即将显示页面的 onShow 方法

          if (!isModalPage) basicWidget_1.Page.invokePageOnShow(contextId);
        }
      } catch (_e17) {
        __reportError__(_e17, "", "");

        throw _e17;
      }
    };
    /**
     * flutter_call_js
     * 触发组件事件
     */


    Dispatcher.prototype[MethodChannel_1.MethodChannelReceiveType.triggerEvent] = function (params) {
      try {
        if (!params) return;
        var pageName = params.pageName,
            widgetId = params.widgetId,
            eventId = params.eventId,
            eventType = params.eventType,
            args = params.args;
        var pageNode = AppContainer_1["default"].getPageDataWithPageName(pageName);
        if (!pageNode) return;
        pageNode.invokeEvent(widgetId, eventId, eventType, args);
      } catch (_e18) {
        __reportError__(_e18, "", "");

        throw _e18;
      }
    };
    /**
     * flutter_call_js
     * 触发组件生命周期
     */


    Dispatcher.prototype[MethodChannel_1.MethodChannelReceiveType.lifeCycle] = function (params) {
      try {
        if (!params) return;
        var pageName = params.pageName;
        var lifeStep = params.lifeStep;
        var widgetId = params.widgetId;
        var pageNode = AppContainer_1["default"].getPageDataWithPageName(pageName);
        if (!pageName || !pageNode || !lifeStep) return;

        if (!widgetId) {
          pageNode.invokeLifeCycle(lifeStep);
        } else {
          var renderNode = pageNode.fetch(widgetId);
          if (renderNode) renderNode.invokeLifeCycle(lifeStep);
        }

        if (lifeStep === VNode_1.LifeCycle.widgetDidMount) {
          bus_1["default"].fire("pageOnShow#" + pageName);
        }
      } catch (_e19) {
        __reportError__(_e19, "", "");

        throw _e19;
      }
    };
    /**
     * flutter_call_js native_call_js
     * bridge 响应
     */


    Dispatcher.prototype[MethodChannel_1.MethodChannelReceiveType.bridgeResponse] = function (params) {
      try {
        var methodId = params.methodId,
            response = params.response; // response 内部还包装了一层，需要读取内层

        var res = response.data || response;

        try {
          if (res.data && typeof res.data === 'string') {
            res.data = JSON.parse(res.data);
          }
        } catch (e) {}

        BridgeManager_1["default"].response(methodId, res);
      } catch (_e20) {
        __reportError__(_e20, "", "");

        throw _e20;
      }
    };
    /**
     * flutter_call_js
     * 关闭当前 native 窗口
     */


    Dispatcher.prototype[MethodChannel_1.MethodChannelReceiveType.closeWindow] = function () {
      try {
        BridgeManager_1["default"].invoke({
          module: 'base',
          method: 'closeWindow'
        });
      } catch (_e21) {
        __reportError__(_e21, "", "");

        throw _e21;
      }
    };
    /**
     * flutter_call_js
     * flutter 通知 js 当前页面首帧加载已完成
     */


    Dispatcher.prototype[MethodChannel_1.MethodChannelReceiveType.pageDidLoad] = function (params) {
      try {
        var pageName = params.pageName,
            loadTimestamp = params.loadTimestamp;
        AppContainer_1["default"].setPagePerformanceInfo(pageName, loadTimestamp);
      } catch (_e22) {
        __reportError__(_e22, "", "");

        throw _e22;
      }
    };
    /**
     * native_call_js
     * native 通知 js 当前 flutter 容器已销毁
     */


    Dispatcher.prototype[MethodChannel_1.MethodChannelReceiveType.onDestroyed] = function (_, contextId) {
      try {
        // 销毁当前 flutter 容器中的无限渲染组件
        // 如：Spin gif ...
        RenderManager_1["default"].stopAlwaysRender(contextId); // 销毁 flutter thresh 实例

        MethodChannel_1["default"].call({
          method: MethodChannel_1.FlutterMethodChannelType.onDestroyed,
          contextId: contextId
        });
        AppContainer_1["default"].destroyPageContainer(contextId); // 如果当前 app container 中不存在页面
        // 则清空 threshApp 的相关数据

        if (AppContainer_1["default"].isEmpty) __1["default"].clear();
      } catch (_e23) {
        __reportError__(_e23, "", "");

        throw _e23;
      }
    };

    return Dispatcher;
  } catch (_e24) {
    __reportError__(_e24, "", "");

    throw _e24;
  }
}();

exports.Dispatcher = Dispatcher;
var dispatcher = new Dispatcher();
exports["default"] = dispatcher;
/**
 * js 暴露给 flutter 调用的方法
 */

function methodChannel_flutter_call_js(channelParams) {
  try {
    // console.log('methodChannel_flutter_call_js', channelParams)
    dispatcher.dispatch(channelParams, DispatcherFromType.Flutter);
  } catch (_e25) {
    __reportError__(_e25, "", "");

    throw _e25;
  }
}

exports.flutterCallJs = methodChannel_flutter_call_js;
/**
 * js 暴露给 native 调用的方法
 */

function methodChannel_native_call_js(channelParams) {
  try {
    // console.log('methodChannel_native_call_js', channelParams)
    dispatcher.dispatch(channelParams, DispatcherFromType.Native);
  } catch (_e26) {
    __reportError__(_e26, "", "");

    throw _e26;
  }
}

exports.nativeCallJs = methodChannel_native_call_js;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.mediaQuery = void 0;

var MethodChannel_1 = __webpack_require__(145);

var APP_BAR_DEFAULT_HEIGHT = 56;
/**
 * ui管理器
 */

var UIManager =
/** @class */
function () {
  try {
    function UIManager() {}

    UIManager.rpx = function (width) {
      try {
        if (!width) return 0;
        var realWidth = exports.mediaQuery.computeRealWidth(width); // 由于 realWidth 会向下取整，所以 width = 1 时 realWidth = 0 导致不显示
        // 所以给最小值为 width / mediaQuery.devicePixelRatio

        return realWidth ? realWidth : width / exports.mediaQuery.devicePixelRatio;
      } catch (_e) {
        __reportError__(_e, "", "");

        throw _e;
      }
    };

    (0, _defineProperty["default"])(UIManager, "screenWidth", {
      get: function get() {
        try {
          return exports.mediaQuery.screenWidth;
        } catch (_e2) {
          __reportError__(_e2, "", "");

          throw _e2;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(UIManager, "screenHeight", {
      get: function get() {
        try {
          return exports.mediaQuery.screenHeight;
        } catch (_e3) {
          __reportError__(_e3, "", "");

          throw _e3;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(UIManager, "statusBarHeight", {
      get: function get() {
        try {
          return exports.mediaQuery.statusBarHeight;
        } catch (_e4) {
          __reportError__(_e4, "", "");

          throw _e4;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(UIManager, "bottomBarHeight", {
      get: function get() {
        try {
          return exports.mediaQuery.bottomBarHeight;
        } catch (_e5) {
          __reportError__(_e5, "", "");

          throw _e5;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(UIManager, "appbarHeight", {
      get: function get() {
        try {
          return exports.mediaQuery.appBarHeight;
        } catch (_e6) {
          __reportError__(_e6, "", "");

          throw _e6;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(UIManager, "devicePixelRatio", {
      get: function get() {
        try {
          return exports.mediaQuery.devicePixelRatio;
        } catch (_e7) {
          __reportError__(_e7, "", "");

          throw _e7;
        }
      },
      enumerable: false,
      configurable: true
    });

    UIManager.setDeviceInfo = function (info) {
      try {
        if (info === void 0) {
          info = {};
        }

        exports.mediaQuery.setDeviceInfo(info);
      } catch (_e8) {
        __reportError__(_e8, "", "");

        throw _e8;
      }
    };

    UIManager.setDesignInfo = function (width, height) {
      try {
        exports.mediaQuery.setDesignInfo(width, height);
      } catch (_e9) {
        __reportError__(_e9, "", "");

        throw _e9;
      }
    };

    UIManager.setAppBarHeight = function (appBarHeight) {
      try {
        exports.mediaQuery.appBarHeight = appBarHeight;
        MethodChannel_1["default"].call({
          method: MethodChannel_1.FlutterMethodChannelType.setAppBarHeight,
          params: {
            appBarHeight: appBarHeight
          }
        });
      } catch (_e10) {
        __reportError__(_e10, "", "");

        throw _e10;
      }
    };

    return UIManager;
  } catch (_e11) {
    __reportError__(_e11, "", "");

    throw _e11;
  }
}();

exports["default"] = UIManager;

var MediaQuery =
/** @class */
function () {
  try {
    function MediaQuery() {
      try {
        this._screenWidth = 0;
        this._screenHeight = 0;
        this._statusBarHeight = 0;
        this._bottomBarHeight = 0;
        this._appBarHeight = APP_BAR_DEFAULT_HEIGHT;
        this._devicePixelRatio = 1;
        this._designWidth = 750;
        this._designHeight = 1280;
        this._scaleWidth = 1;
        this._scaleHeight = 1;
      } catch (_e12) {
        __reportError__(_e12, "MediaQuery", "");

        throw _e12;
      }
    }

    (0, _defineProperty["default"])(MediaQuery.prototype, "screenWidth", {
      get: function get() {
        try {
          return this._screenWidth;
        } catch (_e13) {
          __reportError__(_e13, "", "");

          throw _e13;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(MediaQuery.prototype, "screenHeight", {
      get: function get() {
        try {
          return this._screenHeight;
        } catch (_e14) {
          __reportError__(_e14, "", "");

          throw _e14;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(MediaQuery.prototype, "statusBarHeight", {
      get: function get() {
        try {
          return this._statusBarHeight;
        } catch (_e15) {
          __reportError__(_e15, "", "");

          throw _e15;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(MediaQuery.prototype, "bottomBarHeight", {
      get: function get() {
        try {
          return this._bottomBarHeight;
        } catch (_e16) {
          __reportError__(_e16, "", "");

          throw _e16;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(MediaQuery.prototype, "appBarHeight", {
      get: function get() {
        try {
          return this._appBarHeight;
        } catch (_e17) {
          __reportError__(_e17, "", "");

          throw _e17;
        }
      },
      set: function set(height) {
        try {
          this._appBarHeight = height || APP_BAR_DEFAULT_HEIGHT;
        } catch (_e18) {
          __reportError__(_e18, "", "");

          throw _e18;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(MediaQuery.prototype, "devicePixelRatio", {
      get: function get() {
        try {
          return this._devicePixelRatio;
        } catch (_e19) {
          __reportError__(_e19, "", "");

          throw _e19;
        }
      },
      enumerable: false,
      configurable: true
    });

    MediaQuery.prototype.setDeviceInfo = function (info) {
      try {
        if (info === void 0) {
          info = {};
        }

        var width = info.width,
            height = info.height,
            statusBarHeight = info.statusBarHeight,
            bottomBarHeight = info.bottomBarHeight,
            appBarHeight = info.appBarHeight,
            devicePixelRatio = info.devicePixelRatio;
        this._screenWidth = width || this._screenWidth;
        this._screenHeight = height || this._screenHeight;
        this._statusBarHeight = statusBarHeight || this._statusBarHeight;
        this._bottomBarHeight = bottomBarHeight || this._bottomBarHeight;
        this._devicePixelRatio = devicePixelRatio || this._devicePixelRatio; // 只有 appBarHeight 为默认高度时才可以被修改

        if (this._appBarHeight === APP_BAR_DEFAULT_HEIGHT) this._appBarHeight = appBarHeight || APP_BAR_DEFAULT_HEIGHT;
        this.setScaleInfo();
      } catch (_e20) {
        __reportError__(_e20, "", "");

        throw _e20;
      }
    };

    MediaQuery.prototype.setDesignInfo = function (designWidth, designHeight) {
      try {
        if (designWidth) this._designWidth = designWidth;
        if (designHeight) this._designHeight = designWidth;
        this.setScaleInfo();
      } catch (_e21) {
        __reportError__(_e21, "", "");

        throw _e21;
      }
    };

    MediaQuery.prototype.setScaleInfo = function () {
      try {
        this._scaleWidth = this._screenWidth / this._designWidth;
        this._designHeight = this._screenHeight / this._designHeight;
      } catch (_e22) {
        __reportError__(_e22, "", "");

        throw _e22;
      }
    };

    MediaQuery.prototype.computeRealWidth = function (width) {
      try {
        return Math.floor(width * this._scaleWidth);
      } catch (_e23) {
        __reportError__(_e23, "", "");

        throw _e23;
      }
    };

    MediaQuery.prototype.computedRealHeight = function (height) {
      try {
        return Math.floor(height * this._scaleHeight);
      } catch (_e24) {
        __reportError__(_e24, "", "");

        throw _e24;
      }
    };

    return MediaQuery;
  } catch (_e25) {
    __reportError__(_e25, "", "");

    throw _e25;
  }
}();

exports.mediaQuery = new MediaQuery();

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _assign = _interopRequireDefault(__webpack_require__(199));

var _promise = _interopRequireDefault(__webpack_require__(2));

var _symbol = _interopRequireDefault(__webpack_require__(100));

var _iterator = _interopRequireDefault(__webpack_require__(132));

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _map = _interopRequireDefault(__webpack_require__(227));

var __extends = void 0 && (void 0).__extends || function () {
  try {
    var _extendStatics = function extendStatics(d, b) {
      try {
        _extendStatics = _setPrototypeOf["default"] || {
          __proto__: []
        } instanceof Array && function (d, b) {
          try {
            d.__proto__ = b;
          } catch (_e) {
            __reportError__(_e, "", "");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "");

        throw _e3;
      }
    };

    return function (d, b) {
      try {
        _extendStatics(d, b);

        function __() {
          try {
            this.constructor = d;
          } catch (_e4) {
            __reportError__(_e4, "", "");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "");

    throw _e6;
  }
}();

var __assign = void 0 && (void 0).__assign || function () {
  try {
    __assign = _assign["default"] || function (t) {
      try {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      } catch (_e7) {
        __reportError__(_e7, "", "");

        throw _e7;
      }
    };

    return __assign.apply(this, arguments);
  } catch (_e8) {
    __reportError__(_e8, "", "");

    throw _e8;
  }
};

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  try {
    function adopt(value) {
      try {
        return value instanceof P ? value : new P(function (resolve) {
          try {
            resolve(value);
          } catch (_e9) {
            __reportError__(_e9, "", "");

            throw _e9;
          }
        });
      } catch (_e10) {
        __reportError__(_e10, "", "");

        throw _e10;
      }
    }

    return new (P || (P = _promise["default"]))(function (resolve, reject) {
      try {
        function fulfilled(value) {
          try {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          } catch (_e11) {
            __reportError__(_e11, "", "");

            throw _e11;
          }
        }

        function rejected(value) {
          try {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          } catch (_e12) {
            __reportError__(_e12, "", "");

            throw _e12;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e13) {
            __reportError__(_e13, "", "");

            throw _e13;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e14) {
        __reportError__(_e14, "", "");

        throw _e14;
      }
    });
  } catch (_e15) {
    __reportError__(_e15, "", "");

    throw _e15;
  }
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  try {
    var _ = {
      label: 0,
      sent: function sent() {
        try {
          if (t[0] & 1) throw t[1];
          return t[1];
        } catch (_e16) {
          __reportError__(_e16, "sent", "");

          throw _e16;
        }
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof _symbol["default"] === "function" && (g[_iterator["default"]] = function () {
      try {
        return this;
      } catch (_e17) {
        __reportError__(_e17, "", "");

        throw _e17;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e18) {
        __reportError__(_e18, "", "");

        throw _e18;
      }
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  } catch (_e19) {
    __reportError__(_e19, "", "");

    throw _e19;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.Picker = exports.Input = exports.Checkbox = exports.Switch = exports.Radio = exports.Button = exports.WebView = exports.RepaintView = exports.NoticeBar = exports.Refresh = exports.Breath = exports.Spin = exports.Text = exports.QrImage = exports.Image = exports.Icon = exports.NativeView = exports.SwiperView = exports.SwipeActionsView = exports.DragableScrollView = exports.DrawerScrollView = exports.NestScrollView = exports.ListView = exports.ScrollView = exports.Container = exports.AppBar = exports.Page = void 0;

var Widget_1 = __webpack_require__(256);

var AppContainer_1 = __webpack_require__(210);

var ChildrenRule_1 = __webpack_require__(271);

var MethodChannel_1 = __webpack_require__(145);

var Util_1 = __webpack_require__(162);
/**
 * 页面布局
 */
// 页面组件


var Page =
/** @class */
function (_super) {
  try {
    __extends(Page, _super);

    function Page() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e20) {
        __reportError__(_e20, "", "");

        throw _e20;
      }
    }

    Page.invokeBeforePagePop = function () {
      return __awaiter(this, void 0, void 0, function () {
        var pageNode, beforePopRes, finalRes;
        return __generator(this, function (_a) {
          try {
            switch (_a.label) {
              case 0:
                pageNode = Page.getPageWithContextId(AppContainer_1["default"].contextId);
                if (!pageNode) return [2
                /*return*/
                , true];
                if (!pageNode.props.beforePop) return [2
                /*return*/
                , true];
                beforePopRes = pageNode.props.beforePop();
                if (beforePopRes === false) return [2
                /*return*/
                , false];
                if (!(beforePopRes instanceof _promise["default"])) return [3
                /*break*/
                , 2];
                return [4
                /*yield*/
                , beforePopRes];

              case 1:
                finalRes = _a.sent();
                if (finalRes === false) return [2
                /*return*/
                , false];
                _a.label = 2;

              case 2:
                return [2
                /*return*/
                , true];
            }
          } catch (_e21) {
            __reportError__(_e21, "", "");

            throw _e21;
          }
        });
      });
    };

    Page.invokePageOnShow = function (contextId) {
      try {
        var pageNode = Page.getPageWithContextId(contextId);
        if (!pageNode) return;
        pageNode.props.onShow && pageNode.props.onShow();
      } catch (_e22) {
        __reportError__(_e22, "", "");

        throw _e22;
      }
    };

    Page.invokePageOnHide = function (contextId) {
      try {
        var pageNode = this.getPageWithContextId(contextId);
        if (!pageNode) return;
        pageNode.props.onHide && pageNode.props.onHide();
      } catch (_e23) {
        __reportError__(_e23, "", "");

        throw _e23;
      }
    };

    Page.getPageWithContextId = function (contextId) {
      try {
        if (AppContainer_1["default"].isEmpty) return;
        var targetPageNode = AppContainer_1["default"].getPageDataWithContextId(contextId);
        if (!targetPageNode) return;
        return targetPageNode.pageNode;
      } catch (_e24) {
        __reportError__(_e24, "", "");

        throw _e24;
      }
    };

    return Page;
  } catch (_e25) {
    __reportError__(_e25, "", "");

    throw _e25;
  }
}(Widget_1.BasicWidget);

exports.Page = Page; // 顶部导航栏组件

var AppBar =
/** @class */
function (_super) {
  try {
    __extends(AppBar, _super);

    function AppBar() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e26) {
        __reportError__(_e26, "", "");

        throw _e26;
      }
    }

    AppBar.prototype.updateTitle = function (title) {
      try {
        var lastTitle = !Util_1["default"].isNil(this.__lastTitle) ? this.__lastTitle : this.props.title || '';
        if (lastTitle === title) return;
        this.__lastTitle = title;

        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.updateTitle, {
          title: title
        });
      } catch (_e27) {
        __reportError__(_e27, "", "");

        throw _e27;
      }
    };

    return AppBar;
  } catch (_e28) {
    __reportError__(_e28, "", "");

    throw _e28;
  }
}(Widget_1.BasicWidget);

exports.AppBar = AppBar; // 容器组件

var Container =
/** @class */
function (_super) {
  try {
    __extends(Container, _super);

    function Container() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e29) {
        __reportError__(_e29, "", "");

        throw _e29;
      }
    }

    return Container;
  } catch (_e30) {
    __reportError__(_e30, "", "");

    throw _e30;
  }
}(Widget_1.BasicWidget);

exports.Container = Container; // 滑动容器组件

var ScrollView =
/** @class */
function (_super) {
  try {
    __extends(ScrollView, _super);

    function ScrollView() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e31) {
        __reportError__(_e31, "", "");

        throw _e31;
      }
    }

    ScrollView.prototype.scrollTo = function (offset, duration) {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.scrollTo, {
          offset: offset,
          duration: duration
        });
      } catch (_e32) {
        __reportError__(_e32, "", "");

        throw _e32;
      }
    };

    return ScrollView;
  } catch (_e33) {
    __reportError__(_e33, "", "");

    throw _e33;
  }
}(Widget_1.BasicWidget);

exports.ScrollView = ScrollView; // 列表容器组件

var ListView =
/** @class */
function (_super) {
  try {
    __extends(ListView, _super);

    function ListView() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e34) {
        __reportError__(_e34, "", "");

        throw _e34;
      }
    }

    ListView.prototype.scrollTo = function (offset, duration) {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.scrollTo, {
          offset: offset,
          duration: duration
        });
      } catch (_e35) {
        __reportError__(_e35, "", "");

        throw _e35;
      }
    };

    ListView.prototype.stopAsyncOperate = function (type) {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.stopAsyncOperate, {
          type: type
        });
      } catch (_e36) {
        __reportError__(_e36, "", "");

        throw _e36;
      }
    };

    return ListView;
  } catch (_e37) {
    __reportError__(_e37, "", "");

    throw _e37;
  }
}(Widget_1.BasicWidget);

exports.ListView = ListView;

var NestScrollView =
/** @class */
function (_super) {
  try {
    __extends(NestScrollView, _super);

    function NestScrollView() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e38) {
        __reportError__(_e38, "", "");

        throw _e38;
      }
    } // scrollTo (offset: number, duration?: number) {
    //   __setNavProps(this, FlutterMethodChannelType.scrollTo, { offset, duration })
    // }
    // 打开ScrollView（上滑）


    NestScrollView.prototype.open = function () {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.setNestScrollViewStatus, {
          isOpened: true
        });
      } catch (_e39) {
        __reportError__(_e39, "", "");

        throw _e39;
      }
    }; // 关闭ScrollView（下滑）


    NestScrollView.prototype.close = function () {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.setNestScrollViewStatus, {
          isOpened: false
        });
      } catch (_e40) {
        __reportError__(_e40, "", "");

        throw _e40;
      }
    };

    return NestScrollView;
  } catch (_e41) {
    __reportError__(_e41, "", "");

    throw _e41;
  }
}(Widget_1.BasicWidget);

exports.NestScrollView = NestScrollView;

var DrawerScrollView =
/** @class */
function (_super) {
  try {
    __extends(DrawerScrollView, _super);

    function DrawerScrollView() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e42) {
        __reportError__(_e42, "", "");

        throw _e42;
      }
    }

    return DrawerScrollView;
  } catch (_e43) {
    __reportError__(_e43, "", "");

    throw _e43;
  }
}(Widget_1.BasicWidget);

exports.DrawerScrollView = DrawerScrollView;

var DragableScrollView =
/** @class */
function (_super) {
  try {
    __extends(DragableScrollView, _super);

    function DragableScrollView() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e44) {
        __reportError__(_e44, "", "");

        throw _e44;
      }
    }

    DragableScrollView.prototype.scrollTo = function (offset, duration) {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.scrollTo, {
          offset: offset,
          duration: duration
        });
      } catch (_e45) {
        __reportError__(_e45, "", "");

        throw _e45;
      }
    };

    DragableScrollView.prototype.dragPositionAnimateTo = function (positionType) {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.dragPositionAnimateTo, {
          positionType: positionType
        });
      } catch (_e46) {
        __reportError__(_e46, "", "");

        throw _e46;
      }
    };

    return DragableScrollView;
  } catch (_e47) {
    __reportError__(_e47, "", "");

    throw _e47;
  }
}(Widget_1.BasicWidget);

exports.DragableScrollView = DragableScrollView;

var SwipeActionsView =
/** @class */
function (_super) {
  try {
    __extends(SwipeActionsView, _super);

    function SwipeActionsView() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e48) {
        __reportError__(_e48, "", "");

        throw _e48;
      }
    }

    SwipeActionsView.prototype.openActions = function () {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.openActions, {});
      } catch (_e49) {
        __reportError__(_e49, "", "");

        throw _e49;
      }
    };

    SwipeActionsView.prototype.closeActions = function () {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.closeActions, {});
      } catch (_e50) {
        __reportError__(_e50, "", "");

        throw _e50;
      }
    };

    return SwipeActionsView;
  } catch (_e51) {
    __reportError__(_e51, "", "");

    throw _e51;
  }
}(Widget_1.BasicWidget);

exports.SwipeActionsView = SwipeActionsView;
SwipeActionsView.childrenRule = new ChildrenRule_1["default"]({
  widgetName: 'SwipeActionsView',
  length: 0
});

var SwiperView =
/** @class */
function (_super) {
  try {
    __extends(SwiperView, _super);

    function SwiperView() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e52) {
        __reportError__(_e52, "", "");

        throw _e52;
      }
    }

    SwiperView.prototype.swipeTo = function (index, duration) {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.swipeTo, {
          index: index,
          duration: duration
        });
      } catch (_e53) {
        __reportError__(_e53, "", "");

        throw _e53;
      }
    };

    return SwiperView;
  } catch (_e54) {
    __reportError__(_e54, "", "");

    throw _e54;
  }
}(Widget_1.BasicWidget);

exports.SwiperView = SwiperView;

var NativeView =
/** @class */
function (_super) {
  try {
    __extends(NativeView, _super);

    function NativeView() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e55) {
        __reportError__(_e55, "", "");

        throw _e55;
      }
    }

    NativeView.prototype.refresh = function (params) {
      try {
        if (params === void 0) {
          params = {};
        }

        this.invokeCustomMethod('refresh', params);
      } catch (_e56) {
        __reportError__(_e56, "", "");

        throw _e56;
      }
    };

    NativeView.prototype.destroy = function (params) {
      try {
        if (params === void 0) {
          params = {};
        }

        this.invokeCustomMethod('destroy', params);
      } catch (_e57) {
        __reportError__(_e57, "", "");

        throw _e57;
      }
    };

    NativeView.prototype.invokeCustomMethod = function (methodName, methodParams) {
      try {
        if (methodParams === void 0) {
          methodParams = {};
        }

        MethodChannel_1["default"].invokeNativeViewMethod({
          methodName: methodName,
          methodParams: methodParams,
          viewType: this.props.type,
          viewParams: this.props.params || {}
        });
      } catch (_e58) {
        __reportError__(_e58, "", "");

        throw _e58;
      }
    };

    return NativeView;
  } catch (_e59) {
    __reportError__(_e59, "", "");

    throw _e59;
  }
}(Widget_1.BasicWidget);

exports.NativeView = NativeView;
/**
 * 数据展示
 */
// 图标组件

var Icon =
/** @class */
function (_super) {
  try {
    __extends(Icon, _super);

    function Icon() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e60) {
        __reportError__(_e60, "", "");

        throw _e60;
      }
    }

    return Icon;
  } catch (_e61) {
    __reportError__(_e61, "", "");

    throw _e61;
  }
}(Widget_1.BasicWidget);

exports.Icon = Icon;
Icon.childrenRule = new ChildrenRule_1["default"]({
  widgetName: 'Icon',
  length: 0
}); // 图片组件

var Image =
/** @class */
function (_super) {
  try {
    __extends(Image, _super);

    function Image() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e62) {
        __reportError__(_e62, "", "");

        throw _e62;
      }
    }

    return Image;
  } catch (_e63) {
    __reportError__(_e63, "", "");

    throw _e63;
  }
}(Widget_1.BasicWidget);

exports.Image = Image;
Image.childrenRule = new ChildrenRule_1["default"]({
  length: 0,
  widgetName: 'Image'
}); // 图片组件

var QrImage =
/** @class */
function (_super) {
  try {
    __extends(QrImage, _super);

    function QrImage() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e64) {
        __reportError__(_e64, "", "");

        throw _e64;
      }
    }

    return QrImage;
  } catch (_e65) {
    __reportError__(_e65, "", "");

    throw _e65;
  }
}(Widget_1.BasicWidget);

exports.QrImage = QrImage;
QrImage.childrenRule = new ChildrenRule_1["default"]({
  length: 0,
  widgetName: 'QrImage'
}); // 文本组件

var Text =
/** @class */
function (_super) {
  try {
    __extends(Text, _super);

    function Text() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e66) {
        __reportError__(_e66, "", "");

        throw _e66;
      }
    }

    return Text;
  } catch (_e67) {
    __reportError__(_e67, "", "");

    throw _e67;
  }
}(Widget_1.BasicWidget);

exports.Text = Text;
Text.childrenRule = new ChildrenRule_1["default"]({
  name: 'text',
  widgetName: 'Text',
  ruleFunc: function ruleFunc(children) {
    try {
      return (0, _map["default"])(children).call(children, function (child) {
        try {
          return child != undefined ? child.toString() : '';
        } catch (_e68) {
          __reportError__(_e68, "", "");

          throw _e68;
        }
      }).join('');
    } catch (_e69) {
      __reportError__(_e69, "", "");

      throw _e69;
    }
  }
}); // 无限旋转组件

var Spin =
/** @class */
function (_super) {
  try {
    __extends(Spin, _super);

    function Spin() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e70) {
        __reportError__(_e70, "", "");

        throw _e70;
      }
    }

    return Spin;
  } catch (_e71) {
    __reportError__(_e71, "", "");

    throw _e71;
  }
}(Widget_1.BasicWidget);

exports.Spin = Spin;
Spin.childrenRule = new ChildrenRule_1["default"]({
  widgetName: 'Spin',
  length: 0
}); // 呼吸组件旋转组件

var Breath =
/** @class */
function (_super) {
  try {
    __extends(Breath, _super);

    function Breath() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e72) {
        __reportError__(_e72, "", "");

        throw _e72;
      }
    }

    return Breath;
  } catch (_e73) {
    __reportError__(_e73, "", "");

    throw _e73;
  }
}(Widget_1.BasicWidget);

exports.Breath = Breath;
Breath.childrenRule = new ChildrenRule_1["default"]({
  widgetName: 'Breath',
  length: 0
}); // 旋转刷新组件

var Refresh =
/** @class */
function (_super) {
  try {
    __extends(Refresh, _super);

    function Refresh() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e74) {
        __reportError__(_e74, "", "");

        throw _e74;
      }
    }

    return Refresh;
  } catch (_e75) {
    __reportError__(_e75, "", "");

    throw _e75;
  }
}(Widget_1.BasicWidget);

exports.Refresh = Refresh;
Refresh.childrenRule = new ChildrenRule_1["default"]({
  widgetName: 'Refresh',
  length: 0
}); // 通知栏组件

var NoticeBar =
/** @class */
function (_super) {
  try {
    __extends(NoticeBar, _super);

    function NoticeBar() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e76) {
        __reportError__(_e76, "", "");

        throw _e76;
      }
    }

    return NoticeBar;
  } catch (_e77) {
    __reportError__(_e77, "", "");

    throw _e77;
  }
}(Widget_1.BasicWidget);

exports.NoticeBar = NoticeBar;
NoticeBar.childrenRule = new ChildrenRule_1["default"]({
  widgetName: 'NoticeBar'
}); // 视图保存组件

var RepaintView =
/** @class */
function (_super) {
  try {
    __extends(RepaintView, _super);

    function RepaintView() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e78) {
        __reportError__(_e78, "", "");

        throw _e78;
      }
    }

    RepaintView.prototype.setValue = function (path, name) {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.saveRepaintView, {
          path: path,
          name: name
        });
      } catch (_e79) {
        __reportError__(_e79, "", "");

        throw _e79;
      }
    };

    return RepaintView;
  } catch (_e80) {
    __reportError__(_e80, "", "");

    throw _e80;
  }
}(Widget_1.BasicWidget);

exports.RepaintView = RepaintView;
RepaintView.childrenRule = new ChildrenRule_1["default"]({
  widgetName: 'RepaitView',
  name: 'child',
  length: 1
}); // 浏览器组件

var WebView =
/** @class */
function (_super) {
  try {
    __extends(WebView, _super);

    function WebView() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e81) {
        __reportError__(_e81, "", "");

        throw _e81;
      }
    }

    return WebView;
  } catch (_e82) {
    __reportError__(_e82, "", "");

    throw _e82;
  }
}(Widget_1.BasicWidget);

exports.WebView = WebView;
WebView.childrenRule = new ChildrenRule_1["default"]({
  widgetName: 'WebView',
  length: 0
});
/**
 * 表单元素
 */
// 按钮组件

var Button =
/** @class */
function (_super) {
  try {
    __extends(Button, _super);

    function Button() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e83) {
        __reportError__(_e83, "", "");

        throw _e83;
      }
    }

    return Button;
  } catch (_e84) {
    __reportError__(_e84, "", "");

    throw _e84;
  }
}(Widget_1.BasicWidget);

exports.Button = Button;
Button.childrenRule = new ChildrenRule_1["default"]({
  widgetName: 'Button',
  name: 'child',
  length: 1
}); // 单选框组件

var Radio =
/** @class */
function (_super) {
  try {
    __extends(Radio, _super);

    function Radio() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e85) {
        __reportError__(_e85, "", "");

        throw _e85;
      }
    }

    return Radio;
  } catch (_e86) {
    __reportError__(_e86, "", "");

    throw _e86;
  }
}(Widget_1.BasicWidget);

exports.Radio = Radio;
Radio.childrenRule = new ChildrenRule_1["default"]({
  length: 1,
  name: 'title',
  widgetName: 'Radio'
}); // 开关组件

var Switch =
/** @class */
function (_super) {
  try {
    __extends(Switch, _super);

    function Switch() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e87) {
        __reportError__(_e87, "", "");

        throw _e87;
      }
    }

    return Switch;
  } catch (_e88) {
    __reportError__(_e88, "", "");

    throw _e88;
  }
}(Widget_1.BasicWidget);

exports.Switch = Switch;
Switch.childrenRule = new ChildrenRule_1["default"]({
  length: 0,
  widgetName: 'Switch'
}); // 复选框组件

var Checkbox =
/** @class */
function (_super) {
  try {
    __extends(Checkbox, _super);

    function Checkbox() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e89) {
        __reportError__(_e89, "", "");

        throw _e89;
      }
    }

    return Checkbox;
  } catch (_e90) {
    __reportError__(_e90, "", "");

    throw _e90;
  }
}(Widget_1.BasicWidget);

exports.Checkbox = Checkbox;
Checkbox.childrenRule = new ChildrenRule_1["default"]({
  length: 1,
  name: 'title',
  widgetName: 'Checkbox'
}); // 输入框组件

var Input =
/** @class */
function (_super) {
  try {
    __extends(Input, _super);

    function Input() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e91) {
        __reportError__(_e91, "", "");

        throw _e91;
      }
    }

    Input.prototype.setValue = function (value) {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.setValue, {
          value: value
        });
      } catch (_e92) {
        __reportError__(_e92, "", "");

        throw _e92;
      }
    };

    return Input;
  } catch (_e93) {
    __reportError__(_e93, "", "");

    throw _e93;
  }
}(Widget_1.BasicWidget);

exports.Input = Input;
Input.childrenRule = new ChildrenRule_1["default"]({
  length: 0,
  widgetName: 'Input'
});

function __setNavProps(widget, method, params) {
  try {
    if (params === void 0) {
      params = {};
    }

    var vNode = widget.__vNode__;
    if (!vNode.isMount) return;
    MethodChannel_1["default"].call({
      method: method,
      params: __assign({
        pageName: vNode.pageName,
        widgetId: vNode.nodeId
      }, params)
    });
  } catch (_e94) {
    __reportError__(_e94, "__setNavProps", "");

    throw _e94;
  }
} // 选择组件


var Picker =
/** @class */
function (_super) {
  try {
    __extends(Picker, _super);

    function Picker() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e95) {
        __reportError__(_e95, "", "");

        throw _e95;
      }
    } // 跳转到指定位置


    Picker.prototype.jumpTo = function (index) {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.jumpTo, {
          index: index
        });
      } catch (_e96) {
        __reportError__(_e96, "", "");

        throw _e96;
      }
    }; // 滚动到指定位置


    Picker.prototype.animateTo = function (index, duration) {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.animateTo, {
          index: index,
          duration: duration
        });
      } catch (_e97) {
        __reportError__(_e97, "", "");

        throw _e97;
      }
    };

    return Picker;
  } catch (_e98) {
    __reportError__(_e98, "", "");

    throw _e98;
  }
}(Widget_1.BasicWidget);

exports.Picker = Picker;
Picker.childrenRule = new ChildrenRule_1["default"]({
  widgetName: 'Picker'
});
exports["default"] = {
  Page: Page,
  AppBar: AppBar,
  Container: Container,
  ScrollView: ScrollView,
  ListView: ListView,
  NestScrollView: NestScrollView,
  DrawerScrollView: DrawerScrollView,
  DragableScrollView: DragableScrollView,
  SwipeActionsView: SwipeActionsView,
  SwiperView: SwiperView,
  NativeView: NativeView,
  Icon: Icon,
  Image: Image,
  QrImage: QrImage,
  Text: Text,
  Spin: Spin,
  Refresh: Refresh,
  NoticeBar: NoticeBar,
  Button: Button,
  Radio: Radio,
  Checkbox: Checkbox,
  Input: Input,
  Switch: Switch,
  Picker: Picker
};

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(249);

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(250);

module.exports = parent;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(251);
var path = __webpack_require__(24);

module.exports = path.Object.setPrototypeOf;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(6);
var setPrototypeOf = __webpack_require__(39);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(253);

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(254);

module.exports = parent;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(255);
var path = __webpack_require__(24);

var Object = path.Object;

module.exports = function create(P, D) {
  return Object.create(P, D);
};


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(10);
var create = __webpack_require__(41);

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _assign = _interopRequireDefault(__webpack_require__(199));

var __extends = void 0 && (void 0).__extends || function () {
  try {
    var _extendStatics = function extendStatics(d, b) {
      try {
        _extendStatics = _setPrototypeOf["default"] || {
          __proto__: []
        } instanceof Array && function (d, b) {
          try {
            d.__proto__ = b;
          } catch (_e) {
            __reportError__(_e, "", "");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "");

        throw _e3;
      }
    };

    return function (d, b) {
      try {
        _extendStatics(d, b);

        function __() {
          try {
            this.constructor = d;
          } catch (_e4) {
            __reportError__(_e4, "", "");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.BasicWidget = void 0;

var __1 = __webpack_require__(139);

var scheduleUpdate_1 = __webpack_require__(257);

var Util_1 = __webpack_require__(162);
/**
 * 校验object是否合法
 * @param {any} object
 */


function checkObjectValid(object, noFunc) {
  try {
    if (noFunc === void 0) {
      noFunc = false;
    }

    if (object === null || object === undefined) return true;

    if (!Util_1["default"].isObject(object)) {
      __1["default"].onError(new Error('props or state must be an object type'));

      return false;
    }

    if (noFunc) {
      for (var key in object) {
        if (Util_1["default"].isFunc(object[key])) {
          __1["default"].onError(new Error("prop " + key + " must not be a function type"));

          return false;
        }
      }
    }

    return true;
  } catch (_e7) {
    __reportError__(_e7, "checkObjectValid", "");

    throw _e7;
  }
}
/**
 * Widget
 */
// interface WidgetProps {
//   key?: any,
//   ref?: RefCallback,
//   children?: ThreshWidget[],
// }


var Widget =
/** @class */
function () {
  try {
    function Widget(props) {
      try {
        if (checkObjectValid(props)) {
          this.props = Util_1["default"].merge(props);
        }
      } catch (_e8) {
        __reportError__(_e8, "", "");

        throw _e8;
      }
    }

    Widget.prototype.widgetDidMount = function () {};

    Widget.prototype.widgetDidUpdate = function () {};

    Widget.prototype.widgetDidUnmount = function () {};
    /**
     * 更新state
     * @param {any} state
     */


    Widget.prototype.setState = function (state) {
      try {
        if (!this.__vNode__.isMount || !checkObjectValid(state)) return;
        if (state) (0, _assign["default"])(this.state, state);
        scheduleUpdate_1["default"](this.__vNode__);
      } catch (_e9) {
        __reportError__(_e9, "", "");

        throw _e9;
      }
    };
    /**
     * 强制更新
     */


    Widget.prototype.forceUpdate = function () {
      try {
        this.setState();
      } catch (_e10) {
        __reportError__(_e10, "", "");

        throw _e10;
      }
    };
    /**
     * 组件渲染方法
     */


    Widget.prototype.render = function () {};

    Widget.defaultProps = {};
    return Widget;
  } catch (_e11) {
    __reportError__(_e11, "", "");

    throw _e11;
  }
}();

exports["default"] = Widget;
/**
 * 基础组件类
 * 继承自Widget
 * 外部不可使用该类
 */

var BasicWidget =
/** @class */
function (_super) {
  try {
    __extends(BasicWidget, _super);

    function BasicWidget() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e12) {
        __reportError__(_e12, "", "");

        throw _e12;
      }
    }

    BasicWidget.prototype.setState = function () {
      try {
        __1["default"].onError(new Error("basic widget cannot call setState()"));
      } catch (_e13) {
        __reportError__(_e13, "", "");

        throw _e13;
      }
    };

    BasicWidget.isBasicWidget = true;
    return BasicWidget;
  } catch (_e14) {
    __reportError__(_e14, "", "");

    throw _e14;
  }
}(Widget);

exports.BasicWidget = BasicWidget;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _includes = _interopRequireDefault(__webpack_require__(151));

var _filter = _interopRequireDefault(__webpack_require__(258));

var _now = _interopRequireDefault(__webpack_require__(141));

var _forEach = _interopRequireDefault(__webpack_require__(182));

var _keys = _interopRequireDefault(__webpack_require__(263));

var _from = _interopRequireDefault(__webpack_require__(235));

var _set = _interopRequireDefault(__webpack_require__(267));

var _isArray = _interopRequireDefault(__webpack_require__(178));

var _splice = _interopRequireDefault(__webpack_require__(173));

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  try {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
      s += arguments[i].length;
    }

    for (var r = Array(s), k = 0, i = 0; i < il; i++) {
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
        r[k] = a[j];
      }
    }

    return r;
  } catch (_e) {
    __reportError__(_e, "", "");

    throw _e;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var VNode_1 = __webpack_require__(204);

var RenderManager_1 = __webpack_require__(234);

var Util_1 = __webpack_require__(162);

var TimerManager_1 = __webpack_require__(232); // 更新队列


var UpdateQueue =
/** @class */
function () {
  try {
    function UpdateQueue() {
      try {
        this.queue = [];
      } catch (_e2) {
        __reportError__(_e2, "", "");

        throw _e2;
      }
    }

    (0, _defineProperty["default"])(UpdateQueue.prototype, "isEmpty", {
      get: function get() {
        try {
          return !this.queue.length;
        } catch (_e3) {
          __reportError__(_e3, "", "");

          throw _e3;
        }
      },
      enumerable: false,
      configurable: true
    }); // 重置队列

    UpdateQueue.prototype.reset = function () {
      try {
        this.queue = [];
      } catch (_e4) {
        __reportError__(_e4, "", "");

        throw _e4;
      }
    }; // 向队尾添加节点


    UpdateQueue.prototype.add = function (node) {
      try {
        var _context;

        if (!(0, _includes["default"])(_context = this.queue).call(_context, node)) {
          this.queue.push(node);
        }
      } catch (_e5) {
        __reportError__(_e5, "", "");

        throw _e5;
      }
    }; // 使队内元素唯一并重置
    // 返回操作后得到的数组
    // 规则：遍历所有节点，每一个节点向上获取其所有父元素，如果其父元素已经存在于队列中，则忽略该节点


    UpdateQueue.prototype.unique = function () {
      try {
        var _context2;

        var uniqued = (0, _filter["default"])(_context2 = this.queue).call(_context2, function (node, index, source) {
          try {
            if (!node.isMount) return false;
            var parent = node.parent;

            while (parent) {
              if ((0, _includes["default"])(source).call(source, parent) || !parent.isMount) return false;
              parent = parent.parent;
            }

            return true;
          } catch (_e6) {
            __reportError__(_e6, "", "");

            throw _e6;
          }
        });
        this.reset();
        return uniqued;
      } catch (_e7) {
        __reportError__(_e7, "", "");

        throw _e7;
      }
    };

    UpdateQueue.lastPrecommitTime = (0, _now["default"])();
    UpdateQueue.commitPendingTime = 16;
    return UpdateQueue;
  } catch (_e8) {
    __reportError__(_e8, "", "");

    throw _e8;
  }
}(); // 待更新队列


var pendingUpdateQueue = new UpdateQueue(); // 最终执行更新的队列

var shouldUpdateQueue = new UpdateQueue(); // 计划更新
// 收集 16ms 内产生的所有更新节点后再更新

function scheduleUpdate(vNode) {
  try {
    var now = (0, _now["default"])();

    if (pendingUpdateQueue.isEmpty || now - UpdateQueue.lastPrecommitTime >= UpdateQueue.commitPendingTime) {
      UpdateQueue.lastPrecommitTime = now;
      TimerManager_1["default"].setTimeout(function () {
        try {
          prepareCommit(pendingUpdateQueue.unique());
        } catch (_e9) {
          __reportError__(_e9, "", "");

          throw _e9;
        }
      }, UpdateQueue.commitPendingTime);
    }

    pendingUpdateQueue.add(vNode);
  } catch (_e10) {
    __reportError__(_e10, "scheduleUpdate", "");

    throw _e10;
  }
}

exports["default"] = scheduleUpdate; // 准备更新
// 对队列中的节点执行更新操作
// 在粗粒度比较每一个用户自定义节点后进行更新

function prepareCommit(pendingUpdateQueue) {
  try {
    (0, _forEach["default"])(pendingUpdateQueue).call(pendingUpdateQueue, function (item) {
      try {
        var newRenderNode = item.doUpdate();
        var oldRenderNode = item.children[0];
        if (!newRenderNode || !oldRenderNode) return;
        compareAndMergeNode(newRenderNode, oldRenderNode);
        var updateNodeId = oldRenderNode.fetchNearlyCanUpdateBasicNode().nodeId;
        newRenderNode.parent = item;
        item.children = [newRenderNode];
        item.updateInfo = {
          updateNodeId: updateNodeId,
          invokeUpdateNodeId: item.nodeId
        };
        shouldUpdateQueue.add(item);
      } catch (_e11) {
        __reportError__(_e11, "", "");

        throw _e11;
      }
    });
    commitUpdate();
  } catch (_e12) {
    __reportError__(_e12, "prepareCommit", "");

    throw _e12;
  }
} // 提交更新


function commitUpdate() {
  try {
    var _context3;

    (0, _forEach["default"])(_context3 = shouldUpdateQueue.unique()).call(_context3, function (updateNode) {
      try {
        if (!updateNode.updateInfo) return;
        var _a = updateNode.updateInfo,
            updateNodeId = _a.updateNodeId,
            invokeUpdateNodeId = _a.invokeUpdateNodeId;
        RenderManager_1["default"].updateWidget(updateNode, updateNodeId, invokeUpdateNodeId, updateNode.fetchNodePageName());
        updateNode.updateInfo = null;
      } catch (_e13) {
        __reportError__(_e13, "", "");

        throw _e13;
      }
    });
  } catch (_e14) {
    __reportError__(_e14, "commitUpdate", "");

    throw _e14;
  }
} // 比较与合并新旧节点


function compareAndMergeNode(newNode, oldNode) {
  try {
    if (!newNode || !oldNode) return;
    if (!(newNode instanceof VNode_1["default"]) || !(oldNode instanceof VNode_1["default"])) return;
    if (newNode === oldNode) return;
    if (!newNode.isSameAs(oldNode)) return;
    newNode.doMerge(oldNode);
    var newNodeIsBasic = newNode.isBasicWidget;
    var oldNodeIsBasic = oldNode.isBasicWidget; // 仅处理 type相同 key相同并且都是自定义组件的节点
    // 使用旧节点的 widget，以新节点的 props 重新渲染
    // 使新的自定义组件具有之前的 state

    if (!newNodeIsBasic && !oldNodeIsBasic) {
      newNode.doRender();
      compareAndMergeNode(newNode.children[0], oldNode.children[0]);
    } // 新旧节点 type相同 key相同并且都是原子节点时
    // 对新旧节点内部的各节点进行 compare and merge


    if (newNodeIsBasic && oldNodeIsBasic) {
      // 对 children 进行比较
      compareNodeInProps(newNode.basicWidgetPropChildren, oldNode.basicWidgetPropChildren);
      compareNodeArray(newNode.children, oldNode.children); // 对 props 中的节点进行比较

      var newKeys = (0, _keys["default"])(newNode.basicWidgetPropChildren);
      var oldKeys = (0, _keys["default"])(oldNode.basicWidgetPropChildren); // 获取 props 中新旧节点 keyName 的并集

      var keys = (0, _from["default"])(new _set["default"](__spreadArrays(newKeys, oldKeys)));

      for (var key in keys) {
        var itemInOld = oldNode[key];
        var itemInNew = newNode[key]; // 新旧节点并不都存在时忽略

        if (!itemInOld || !itemInNew) continue;
        var itemInOldIsArray = (0, _isArray["default"])(itemInOld);
        var itemInNewIsArray = (0, _isArray["default"])(itemInNew); // 新旧节点都不是数组

        if (!itemInOldIsArray && !itemInNewIsArray) {
          compareAndMergeNode(itemInNew, itemInOld);
        } // 新旧节点都是数组


        if (itemInOldIsArray && itemInNewIsArray) {
          compareNodeArray(itemInNew, itemInOld);
        }
      }
    }
  } catch (_e15) {
    __reportError__(_e15, "compareAndMergeNode", "");

    throw _e15;
  }
} // 比较两个节点数组


function compareNodeArray(newNodeArray, oldNodeArray) {
  try {
    var newLength = (newNodeArray || []).length;
    var oldLength = (oldNodeArray || []).length;
    if (!newLength || !oldLength) return;
    var indexInNew = 0;

    while (indexInNew < newLength) {
      var newNode = newNodeArray[indexInNew]; // 旧数组索引

      var indexInOld = 0; // 与新节点相同的旧节点在旧数组中的位置

      var mountIndexInOldArray = void 0;
      var oldNode = oldNodeArray[indexInOld]; // 在旧数组中查找与当前新节点相同的第一个元素的位置

      while (oldNode && Util_1["default"].isNil(mountIndexInOldArray)) {
        if (newNode.isSameAs(oldNode)) mountIndexInOldArray = indexInOld;
        oldNode = oldNodeArray[++indexInOld];
      } // 旧数组中存在与当前新节点相同的元素时
      // 从旧数组中移除并获取该元素，与新节点进行比较


      if (!Util_1["default"].isNil(mountIndexInOldArray)) {
        oldNode = (0, _splice["default"])(oldNodeArray).call(oldNodeArray, mountIndexInOldArray, 1)[0];
        compareAndMergeNode(newNode, oldNode);
      }

      indexInNew++;
    }
  } catch (_e16) {
    __reportError__(_e16, "compareNodeArray", "");

    throw _e16;
  }
} // 比较属性上的节点


function compareNodeInProps(newPropNodes, oldPropsNodes) {
  try {
    for (var key in newPropNodes) {
      if (newPropNodes[key]) {
        compareAndMergeNode(newPropNodes[key], oldPropsNodes[key]);
      }

      if (newPropNodes[key] instanceof Array) {
        compareNodeArray(newPropNodes[key], oldPropsNodes[key]);
      }
    }
  } catch (_e17) {
    __reportError__(_e17, "", "");

    throw _e17;
  }
}

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(259);

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(260);

module.exports = parent;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(261);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.filter) ? filter : own;
};


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(262);
var entryVirtual = __webpack_require__(156);

module.exports = entryVirtual('Array').filter;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var $filter = __webpack_require__(114).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(107);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(264);

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(265);

module.exports = parent;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(266);
var path = __webpack_require__(24);

module.exports = path.Object.keys;


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(6);
var toObject = __webpack_require__(31);
var nativeKeys = __webpack_require__(43);
var fails = __webpack_require__(11);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(268);

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(269);

module.exports = parent;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(270);
__webpack_require__(66);
__webpack_require__(91);
__webpack_require__(96);
var path = __webpack_require__(24);

module.exports = path.Set;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(215);
var collectionStrong = __webpack_require__(218);

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _isArray = _interopRequireDefault(__webpack_require__(178));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var UtilManager_1 = __webpack_require__(233);
/**
 * 组件子元素规则类
 */


var ChildrenRule =
/** @class */
function () {
  try {
    function ChildrenRule(info) {
      try {
        if (info === void 0) {
          info = {
            widgetName: ''
          };
        } // 子元素数量


        this.length = Infinity; // 子元素映射到props中的属性名

        this.name = 'children';
        var length = info.length,
            name = info.name,
            ruleFunc = info.ruleFunc,
            widgetName = info.widgetName;
        if (length === 0 || length === 1) this.length = length;
        if (name) this.name = name;
        if (ruleFunc) this.ruleFunc = ruleFunc;
        if (widgetName) this.widgetName = widgetName;
      } catch (_e) {
        __reportError__(_e, "ChildrenRule", "");

        throw _e;
      }
    }

    ChildrenRule.prototype.mapChildrenToProps = function (children, targetProps) {
      try {
        var length = children.length;
        var aim;

        if (this.length === 0) {
          if (length > 0) {
            UtilManager_1["default"].warn("Widget \"" + this.widgetName + "\" must not have children");
          }
        } else if (this.length === 1) {
          if (length === 0) {
            UtilManager_1["default"].error(new Error("Widget \"" + this.widgetName + "\" must have one child"));
          } else if (length === 1) {
            aim = this.ruleFunc ? this.ruleFunc(children) : children[0];
          } else {
            aim = this.ruleFunc ? this.ruleFunc(children) : children[0];

            if ((0, _isArray["default"])(aim) && aim.length > 1) {
              aim = aim[0];
              UtilManager_1["default"].warn("Widget \"" + this.widgetName + "\" must have only one child");
            }
          }
        } else {
          aim = this.ruleFunc ? this.ruleFunc(children) : children;
        }

        if (aim) {
          targetProps[this.name] = aim;
        }
      } catch (_e2) {
        __reportError__(_e2, "", "");

        throw _e2;
      }
    };

    return ChildrenRule;
  } catch (_e3) {
    __reportError__(_e3, "", "");

    throw _e3;
  }
}();

exports["default"] = ChildrenRule;

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _filter = _interopRequireDefault(__webpack_require__(258));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var Util_1 = __webpack_require__(162);

var VNode_1 = __webpack_require__(204);
/**
 * 组件构造器
 */


function createElement(WidgetBuilder, props) {
  try {
    var children = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      children[_i - 2] = arguments[_i];
    }

    var widgetName = getWidgetName(WidgetBuilder);
    if (!widgetName) return;
    props = Util_1["default"].merge(props);

    if (WidgetBuilder.childrenRule) {
      WidgetBuilder['childrenRule'].mapChildrenToProps(Util_1["default"].toFlatWidgetArray(children), props);
    } else {
      var _context;

      props.children = (0, _filter["default"])(_context = Util_1["default"].toFlatWidgetArray(children)).call(_context, function (child) {
        try {
          return child instanceof VNode_1["default"];
        } catch (_e) {
          __reportError__(_e, "", "");

          throw _e;
        }
      });
    }

    props = Util_1["default"].merge(WidgetBuilder.defaultProps, props);
    var isBasicWidget = WidgetBuilder['isBasicWidget'] === true;
    var key = props.key;
    var ref = props.ref;
    delete props.ref;
    var childrenIsArray = true;
    var childrenMapedName = 'children';

    if (isBasicWidget) {
      if (WidgetBuilder['childrenRule']) {
        childrenIsArray = WidgetBuilder['childrenRule']['length'] > 1;
        childrenMapedName = WidgetBuilder['childrenRule']['name'];
      }
    }

    return new VNode_1["default"]({
      type: widgetName,
      props: props,
      widgetBuilder: WidgetBuilder,
      isBasicWidget: isBasicWidget,
      key: key,
      ref: ref,
      childrenIsArray: childrenIsArray,
      childrenMapedName: childrenMapedName
    });
  } catch (_e2) {
    __reportError__(_e2, "createElement", "");

    throw _e2;
  }
}

exports["default"] = createElement;
var WIDGET_NAME_REG = /^function ([A-Za-z]{2,})\((props){0,1}\)/;

function getWidgetName(widgetBuilder) {
  try {
    var res = widgetBuilder.toString().match(WIDGET_NAME_REG);
    return res ? res[1] : void 0;
  } catch (_e3) {
    __reportError__(_e3, "getWidgetName", "");

    throw _e3;
  }
}

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _typeof2 = _interopRequireDefault(__webpack_require__(163));

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _indexOf = _interopRequireDefault(__webpack_require__(205));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.ThreshAppContext = void 0;

var MethodChannel_1 = __webpack_require__(145);

var dispatchMethod_1 = __webpack_require__(245);

var TimerManager_1 = __webpack_require__(232);

var EventManager_1 = __webpack_require__(274);

var Util_1 = __webpack_require__(162);

var AppContainer_1 = __webpack_require__(210);

var ThreshAppContext =
/** @class */
function () {
  try {
    function ThreshAppContext() {}

    ThreshAppContext.initGlobal = function (threshApp) {
      try {
        ThreshAppContext._global = function () {
          try {
            return this;
          } catch (_e) {
            __reportError__(_e, "", "");

            throw _e;
          }
        }();

        try {
          ThreshAppContext._global = ThreshAppContext._global || new Function("return this")();
        } catch (e) {
          if ((typeof window === "undefined" ? "undefined" : (0, _typeof2["default"])(window)) === "object") ThreshAppContext._global = window;
        }

        ThreshAppContext._initGlobalMethods(threshApp);
      } catch (_e2) {
        __reportError__(_e2, "", "");

        throw _e2;
      }
    };
    /**
     * 向全局添加属性
     * 单 context 环境中，防止重复添加
     * @param prop 属性名
     * @param valueGetter 获取属性值的方法
     */


    ThreshAppContext.addUniquePropToGlobal = function (prop, valueGetter) {
      try {
        var currentValue = ThreshAppContext.getGlobalProp(prop);
        var newValue = valueGetter(currentValue);
        ThreshAppContext.setGlobalProp(prop, newValue);
      } catch (_e3) {
        __reportError__(_e3, "", "");

        throw _e3;
      }
    };

    ThreshAppContext.getGlobalProp = function (prop) {
      try {
        return ThreshAppContext._global[prop];
      } catch (_e4) {
        __reportError__(_e4, "", "");

        throw _e4;
      }
    };

    ThreshAppContext.setGlobalProp = function (prop, value) {
      try {
        ThreshAppContext._global[prop] = value;
      } catch (_e5) {
        __reportError__(_e5, "", "");

        throw _e5;
      }
    };

    ThreshAppContext._initGlobalMethods = function (threshApp) {
      try {
        // 全局添加通信方法
        ThreshAppContext.addUniquePropToGlobal('methodChannel_flutter_call_js', function () {
          try {
            return dispatchMethod_1.flutterCallJs;
          } catch (_e6) {
            __reportError__(_e6, "", "");

            throw _e6;
          }
        });
        ThreshAppContext.addUniquePropToGlobal('methodChannel_native_call_js', function () {
          try {
            return dispatchMethod_1.nativeCallJs;
          } catch (_e7) {
            __reportError__(_e7, "", "");

            throw _e7;
          }
        });
        ThreshAppContext.addUniquePropToGlobal('methodChannel_fire_js_event', function () {
          try {
            return EventManager_1.methodChannel_fire_js_event;
          } catch (_e8) {
            __reportError__(_e8, "", "");

            throw _e8;
          }
        });
        ThreshAppContext.addUniquePropToGlobal('methodChannel_register_js_event', function () {
          try {
            return EventManager_1.methodChannel_register_js_event;
          } catch (_e9) {
            __reportError__(_e9, "", "");

            throw _e9;
          }
        });
        ThreshAppContext.addUniquePropToGlobal('methodChannel_timer_fire', function () {
          try {
            return TimerManager_1.methodChannel_timer_fire;
          } catch (_e10) {
            __reportError__(_e10, "", "");

            throw _e10;
          }
        }); // 全局添加定时器方法

        ThreshAppContext.addUniquePropToGlobal('setTimeout', function () {
          try {
            return TimerManager_1["default"].setTimeout;
          } catch (_e11) {
            __reportError__(_e11, "", "");

            throw _e11;
          }
        });
        ThreshAppContext.addUniquePropToGlobal('setInterval', function () {
          try {
            return TimerManager_1["default"].setInterval;
          } catch (_e12) {
            __reportError__(_e12, "", "");

            throw _e12;
          }
        });
        ThreshAppContext.addUniquePropToGlobal('clearTimeout', function () {
          try {
            return TimerManager_1["default"].clearTimer;
          } catch (_e13) {
            __reportError__(_e13, "", "");

            throw _e13;
          }
        });
        ThreshAppContext.addUniquePropToGlobal('clearInterval', function () {
          try {
            return TimerManager_1["default"].clearTimer;
          } catch (_e14) {
            __reportError__(_e14, "", "");

            throw _e14;
          }
        }); // 全局异常处理方法

        ThreshAppContext.addUniquePropToGlobal('__reportError__', function () {
          try {
            return function (error, functionName, fileName) {
              try {
                var _context, _context2;

                if (Util_1["default"].isNil(error)) return; // 上报时需要排除非 Error 类型
                // 尽量保证上报准确

                if (!error.message) return; // 以下两个类型的 error 为 async 函数中主要 error 伴随产生的 error

                if ((0, _indexOf["default"])(_context = error.message).call(_context, 'result.done') > -1 || (0, _indexOf["default"])(_context2 = error.message).call(_context2, 'op[0]') > -1) return;
                if (console && console.error) console.error(error);
                var messages = [error.message ? error.message : error.toString()];
                if (functionName) messages.push("In function: " + functionName);
                if (fileName) messages.push("In file: " + fileName); // 如果上一个异常与当前异常相同则忽略

                if (ThreshAppContext._lastErrorMessage === messages[0]) return;
                ThreshAppContext._lastErrorMessage = messages[0];
                var message = messages.join('\n'); // 开发模式下向 flutter 发送异常，将会显示在调试面板上

                if (threshApp.debugMode) {
                  MethodChannel_1["default"].call({
                    method: MethodChannel_1.FlutterMethodChannelType.onError,
                    params: {
                      message: message,
                      stack: error.stack || '',
                      pageName: threshApp.pageName || 'unknown',
                      referPageName: threshApp.referPageName || 'unknown'
                    }
                  });
                }

                threshApp.onError({
                  message: message,
                  stack: error.stack || ''
                });
              } catch (_e15) {
                __reportError__(_e15, "", "");

                throw _e15;
              }
            };
          } catch (_e16) {
            __reportError__(_e16, "", "");

            throw _e16;
          }
        });
        ThreshAppContext.addUniquePropToGlobal('debug_get_appContainer', function () {
          try {
            return AppContainer_1["default"];
          } catch (_e17) {
            __reportError__(_e17, "", "");

            throw _e17;
          }
        });
      } catch (_e18) {
        __reportError__(_e18, "", "");

        throw _e18;
      }
    };

    return ThreshAppContext;
  } catch (_e19) {
    __reportError__(_e19, "", "");

    throw _e19;
  }
}();

exports.ThreshAppContext = ThreshAppContext;
exports["default"] = ThreshAppContext;

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {


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

var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _isArray = _interopRequireDefault(__webpack_require__(178));

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  try {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
      s += arguments[i].length;
    }

    for (var r = Array(s), k = 0, i = 0; i < il; i++) {
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
        r[k] = a[j];
      }
    }

    return r;
  } catch (_e) {
    __reportError__(_e, "", "");

    throw _e;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.methodChannel_register_js_event = exports.methodChannel_fire_js_event = exports.BuiltInEventType = void 0;

var bus_1 = __webpack_require__(226);

var Util_1 = __webpack_require__(162);

var DevtoolsManager_1 = __webpack_require__(225);

var basicWidget_1 = __webpack_require__(247); // thresh 内建事件


var BuiltInEventType;

(function (BuiltInEventType) {
  try {
    BuiltInEventType["pageOnShow"] = "pageOnShow";
    BuiltInEventType["pageOnHide"] = "pageOnHide";
  } catch (_e2) {
    __reportError__(_e2, "", "");

    throw _e2;
  }
})(BuiltInEventType = exports.BuiltInEventType || (exports.BuiltInEventType = {}));
/**
 * 事件管理器
 * 暴露给外部使用，可以与 native 之间进行事件通信
 * TODO - 支持单事件多次注册，使用三方库
 */


var EventManager =
/** @class */
function () {
  try {
    function EventManager() {
      try {
        this._hasRegisterBuiltInEvents = false;
      } catch (_e3) {
        __reportError__(_e3, "", "");

        throw _e3;
      }
    }
    /**
     * 注册内建事件
     * 内建事件回调的第一个参数是 contextId
     * contextId 来自 native 触发
     * 如果是内部调用则不存在该参数
     */


    EventManager.prototype.registerBuiltInEvents = function () {
      try {
        if (this._hasRegisterBuiltInEvents) return; // 注册事件 - 页面显示

        this.register(BuiltInEventType.pageOnShow, function (contextId) {
          try {
            basicWidget_1.Page.invokePageOnShow(contextId);
          } catch (_e4) {
            __reportError__(_e4, "", "");

            throw _e4;
          }
        }); // 注册事件 - 页面隐藏

        this.register(BuiltInEventType.pageOnHide, function (contextId) {
          try {
            basicWidget_1.Page.invokePageOnHide(contextId);
          } catch (_e5) {
            __reportError__(_e5, "", "");

            throw _e5;
          }
        });
        this._hasRegisterBuiltInEvents = true;
      } catch (_e6) {
        __reportError__(_e6, "", "");

        throw _e6;
      }
    };

    EventManager.prototype.resetAndRegisterBuiltInEvents = function () {
      try {
        this._hasRegisterBuiltInEvents = false;
        this.registerBuiltInEvents();
      } catch (_e7) {
        __reportError__(_e7, "", "");

        throw _e7;
      }
    };
    /**
     * 注册事件
     * native 可以通过 methodChannel_register_js_event 注册一个 js 事件
     */


    EventManager.prototype.register = function (name, callback) {
      try {
        if (!Util_1["default"].isFunc(callback)) return;
        bus_1["default"].register(callback, name);
        DevtoolsManager_1["default"].show(DevtoolsManager_1.InfoType.event, Util_1["default"].anyToRawString({
          type: 'register',
          name: name
        }), "\u6CE8\u518C\u4E8B\u4EF6\uFF1A" + name);
      } catch (_e8) {
        __reportError__(_e8, "", "");

        throw _e8;
      }
    };
    /**
     * 执行事件
     * js 可以通过 EventManager.fire 执行一个事件
     * native 则使用 methodChannel_fire_js_event
     * 1. 执行事件是会先查询是否已注册
     * 2. 当未在 js 中查询到注册的事件时，会向 native 发送执行事件的通知
     */


    EventManager.prototype.fire = function (name) {
      try {
        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }

        this.fireWithContextId.apply(this, __spreadArrays([name, undefined], args));
      } catch (_e9) {
        __reportError__(_e9, "", "");

        throw _e9;
      }
    };

    EventManager.prototype.fireWithContextId = function (name, contextId) {
      try {
        var args = [];

        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }

        if (typeof name !== 'string') {
          if (!(0, _isArray["default"])(name)) return;
          if (!name.length) return;
          var temp = name.shift();
          args = __spreadArrays(name, args);
          name = temp;
        }

        if (typeof name !== 'string') return;

        if (bus_1["default"].has(name)) {
          DevtoolsManager_1["default"].show(DevtoolsManager_1.InfoType.event, Util_1["default"].anyToRawString({
            type: 'fire',
            contextId: contextId,
            name: name,
            args: args
          }), "\u89E6\u53D1JS\u6CE8\u518C\u4E8B\u4EF6\uFF1A" + name, contextId);
          return contextId ? bus_1["default"].fire.apply(bus_1["default"], __spreadArrays([name, contextId], args)) : bus_1["default"].fire.apply(bus_1["default"], __spreadArrays([name], args));
        } else {// TODO - call native method
          // devtools.show(InfoType.event, Util.anyToRawString({
          //   type: 'fire',
          //   name,
          //   args
          // }), `触发Native注册事件：${name}`)
        }
      } catch (_e10) {
        __reportError__(_e10, "", "");

        throw _e10;
      }
    };
    /**
     * 查询某个事件是否已注册在 js 中
     * 无法查询是否在 native 中注册
     */


    EventManager.prototype.has = function (name, callback) {
      try {
        return bus_1["default"].has(name, callback);
      } catch (_e11) {
        __reportError__(_e11, "", "");

        throw _e11;
      }
    };
    /**
     * 从已注册在 js 的事件中移除某个事件
     * 无法移除 native 中注册的事件
     * @param name
     */


    EventManager.prototype.remove = function (name, callback) {
      try {
        bus_1["default"].remove(name, callback);
        DevtoolsManager_1["default"].show(DevtoolsManager_1.InfoType.event, Util_1["default"].anyToRawString({
          type: 'remove',
          name: name
        }), "\u79FB\u9664\u6CE8\u518C\u4E8B\u4EF6\uFF1A" + name);
      } catch (_e12) {
        __reportError__(_e12, "", "");

        throw _e12;
      }
    };
    /**
     * 判断是否内置事件
     */


    EventManager.prototype.isBuiltInEvent = function (name) {
      try {
        return BuiltInEventType[name] !== undefined;
      } catch (_e13) {
        __reportError__(_e13, "", "");

        throw _e13;
      }
    };

    return EventManager;
  } catch (_e14) {
    __reportError__(_e14, "", "");

    throw _e14;
  }
}();

var eventManager = new EventManager();
exports["default"] = eventManager;

function methodChannel_fire_js_event(name, contextId) {
  try {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    DevtoolsManager_1["default"].show(DevtoolsManager_1.InfoType.event, Util_1["default"].anyToRawString({
      type: 'fire event from native',
      contextId: contextId,
      name: name,
      args: args
    }), "\u6765\u81EANative\u7684\u4E8B\u4EF6\u89E6\u53D1\uFF1A" + name, contextId);
    if (!eventManager.isBuiltInEvent(name)) return eventManager.fire.apply(eventManager, __spreadArrays([name], args));else return eventManager.fireWithContextId.apply(eventManager, __spreadArrays([name, contextId], args));
  } catch (_e15) {
    __reportError__(_e15, "methodChannel_fire_js_event", "");

    throw _e15;
  }
}

exports.methodChannel_fire_js_event = methodChannel_fire_js_event;

function methodChannel_register_js_event(name, contextId, callback) {
  try {
    eventManager.register(name, callback);
  } catch (_e16) {
    __reportError__(_e16, "", "");

    throw _e16;
  }
}

exports.methodChannel_register_js_event = methodChannel_register_js_event;

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _bind = _interopRequireDefault(__webpack_require__(276));

var __extends = void 0 && (void 0).__extends || function () {
  try {
    var _extendStatics = function extendStatics(d, b) {
      try {
        _extendStatics = _setPrototypeOf["default"] || {
          __proto__: []
        } instanceof Array && function (d, b) {
          try {
            d.__proto__ = b;
          } catch (_e) {
            __reportError__(_e, "", "");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "");

        throw _e3;
      }
    };

    return function (d, b) {
      try {
        _extendStatics(d, b);

        function __() {
          try {
            this.constructor = d;
          } catch (_e4) {
            __reportError__(_e4, "", "");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(139);

var basicWidget_1 = __webpack_require__(247);

var config_1 = __webpack_require__(282);

var background_01_png_1 = __webpack_require__(283);

var background_02_png_1 = __webpack_require__(284);

var background_03_png_1 = __webpack_require__(285);

var background_04_png_1 = __webpack_require__(286);

var gift_png_1 = __webpack_require__(287);

var icon_phone_png_1 = __webpack_require__(288);

var icon_wechat_png_1 = __webpack_require__(289);

var signup_png_1 = __webpack_require__(290);

var icon_arrow_up_png_1 = __webpack_require__(291);

var icon_sound_normal_png_1 = __webpack_require__(292);

var icon_sound_disable_png_1 = __webpack_require__(293);

var UtilManager_1 = __webpack_require__(233);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Container = thresh_lib_1.basicWidgets.Container,
    Text = thresh_lib_1.basicWidgets.Text;

var HomePage =
/** @class */
function (_super) {
  try {
    __extends(HomePage, _super);

    function HomePage() {
      try {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          showArrowUp: false,
          palyMusic: true
        };
        return _this;
      } catch (_e7) {
        __reportError__(_e7, "HomePage", "");

        throw _e7;
      }
    }

    HomePage.prototype.widgetDidMount = function () {
      try {
        this.setState({
          showArrowUp: false,
          palyMusic: true
        });
      } catch (_e8) {
        __reportError__(_e8, "", "");

        throw _e8;
      }
    };

    HomePage.prototype.handleScroll = function (e) {
      try {
        UtilManager_1["default"].log(e.offset);

        if (e.offset > thresh_lib_1.ui.rpx(500)) {
          if (!this.state.showArrowUp) this.setState({
            showArrowUp: true
          });
        } else {
          if (this.state.showArrowUp) this.setState({
            showArrowUp: false
          });
        }
      } catch (_e9) {
        __reportError__(_e9, "", "");

        throw _e9;
      }
    };

    HomePage.prototype.render = function () {
      try {
        var _context;

        var _this = this;

        var btnArrowUp = this.state.showArrowUp == true ? thresh_lib_1["default"].createElement(Container, {
          relative: true,
          absolute: {
            bottom: thresh_lib_1.ui.rpx(160),
            right: thresh_lib_1.ui.rpx(30)
          },
          width: thresh_lib_1.ui.rpx(120),
          height: thresh_lib_1.ui.rpx(120),
          onTap: function onTap() {
            try {
              _this.scrollView.scrollTo(.0, 300);
            } catch (_e10) {
              __reportError__(_e10, "", "");

              throw _e10;
            }
          }
        }, thresh_lib_1["default"].createElement(basicWidget_1.Image, {
          src: icon_arrow_up_png_1["default"],
          width: thresh_lib_1.ui.rpx(120),
          height: thresh_lib_1.ui.rpx(120)
        })) : null;
        return thresh_lib_1["default"].createElement(Page, {
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "\u6D3B\u52A8\u8BE6\u60C5",
            titleColor: 0xff000000,
            backgroundColor: 0xffffffff,
            titleWeight: "bold"
          })
        }, thresh_lib_1["default"].createElement(Container, {
          relative: true,
          flex: 1
        }, thresh_lib_1["default"].createElement(basicWidget_1.ScrollView, {
          onScroll: (0, _bind["default"])(_context = this.handleScroll).call(_context, this),
          ref: function ref(_ref) {
            try {
              _this.scrollView = _ref;
            } catch (_e11) {
              __reportError__(_e11, "", "");

              throw _e11;
            }
          }
        }, thresh_lib_1["default"].createElement(Container, null, thresh_lib_1["default"].createElement(basicWidget_1.Image, {
          height: thresh_lib_1.ui.rpx(910),
          width: thresh_lib_1.ui.screenWidth,
          src: background_01_png_1["default"]
        }), thresh_lib_1["default"].createElement(Container, {
          height: thresh_lib_1.ui.rpx(445),
          relative: true
        }, thresh_lib_1["default"].createElement(basicWidget_1.Image, {
          height: thresh_lib_1.ui.rpx(445),
          src: background_02_png_1["default"]
        }), thresh_lib_1["default"].createElement(Container, {
          relative: true,
          absolute: {
            left: thresh_lib_1.ui.rpx(30),
            top: thresh_lib_1.ui.rpx(20)
          },
          width: thresh_lib_1.ui.screenWidth - thresh_lib_1.ui.rpx(60),
          height: thresh_lib_1.ui.rpx(320),
          backgroundColor: 0xcfbee3d5,
          borderRadius: thresh_lib_1.ui.rpx(10),
          padding: thresh_lib_1.ui.rpx(21)
        }, thresh_lib_1["default"].createElement(Container, null, thresh_lib_1["default"].createElement(Text, {
          size: thresh_lib_1.ui.rpx(29),
          weight: "bold"
        }, "\u626C\u6625\u56DB\u6708 \u5E01\u987B\u6709\u4F60"), thresh_lib_1["default"].createElement(Text, {
          margin: {
            top: thresh_lib_1.ui.rpx(10)
          },
          size: thresh_lib_1.ui.rpx(23)
        }, "\u4E2D\u56FD\u4EBA\u5BFF\u91CD\u5E86\u5206\u516C\u53F8")), thresh_lib_1["default"].createElement(basicWidget_1.Button, {
          absolute: {
            right: 0
          },
          width: thresh_lib_1.ui.rpx(120),
          height: thresh_lib_1.ui.rpx(40),
          borderRadius: thresh_lib_1.ui.rpx(20),
          backgroundGradient: {
            colors: [0xfffed233, 0xfff4b428],
            type: "linear",
            begin: "centerLeft",
            end: "centerRight"
          },
          onTap: function onTap() {}
        }, thresh_lib_1["default"].createElement(Text, {
          size: thresh_lib_1.ui.rpx(22),
          color: config_1.Colors.White
        }, "\u5206\u4EAB\u56FE\u7247")), thresh_lib_1["default"].createElement(basicWidget_1.Button, {
          absolute: {
            right: 0,
            top: thresh_lib_1.ui.rpx(59)
          },
          width: thresh_lib_1.ui.rpx(120),
          height: thresh_lib_1.ui.rpx(40),
          borderRadius: thresh_lib_1.ui.rpx(20),
          backgroundGradient: {
            colors: [0xfffed233, 0xfff4b428],
            type: "linear",
            begin: "centerLeft",
            end: "centerRight"
          },
          onTap: function onTap() {}
        }, thresh_lib_1["default"].createElement(Text, {
          size: thresh_lib_1.ui.rpx(22),
          color: config_1.Colors.White
        }, "\u5206\u4EAB\u94FE\u63A5")), thresh_lib_1["default"].createElement(Container, {
          row: true,
          margin: {
            top: thresh_lib_1.ui.rpx(20)
          },
          alignItems: "center"
        }, thresh_lib_1["default"].createElement(basicWidget_1.Image, {
          width: thresh_lib_1.ui.rpx(50),
          height: thresh_lib_1.ui.rpx(60),
          src: gift_png_1["default"]
        }), thresh_lib_1["default"].createElement(Container, {
          row: true,
          alignItems: "center",
          padding: {
            top: thresh_lib_1.ui.rpx(5),
            bottom: thresh_lib_1.ui.rpx(5),
            left: thresh_lib_1.ui.rpx(20),
            right: thresh_lib_1.ui.rpx(20)
          },
          backgroundColor: 0xfff35b4e,
          borderRadius: {
            topRight: thresh_lib_1.ui.rpx(30),
            bottomRight: thresh_lib_1.ui.rpx(30)
          }
        }, thresh_lib_1["default"].createElement(Text, {
          size: thresh_lib_1.ui.rpx(26),
          color: config_1.Colors.White
        }, "\u5DF2\u53C2\u4E0E:"), thresh_lib_1["default"].createElement(Text, {
          size: thresh_lib_1.ui.rpx(40),
          color: config_1.Colors.White
        }, "19999"), thresh_lib_1["default"].createElement(Text, {
          size: thresh_lib_1.ui.rpx(26),
          color: config_1.Colors.White
        }, "\u4EBA"))), thresh_lib_1["default"].createElement(Container, {
          row: true,
          alignItems: "center",
          margin: {
            top: thresh_lib_1.ui.rpx(20)
          }
        }, thresh_lib_1["default"].createElement(basicWidget_1.Image, {
          src: "http://dmimg.5054399.com/allimg/pkm/pk/22.jpg",
          width: thresh_lib_1.ui.rpx(100),
          height: thresh_lib_1.ui.rpx(100)
        }), thresh_lib_1["default"].createElement(Container, {
          margin: {
            left: 10
          }
        }, thresh_lib_1["default"].createElement(Text, {
          size: thresh_lib_1.ui.rpx(30),
          color: config_1.Colors.Black,
          weight: "bolder"
        }, "\u9A6C\u8001\u5E08"), thresh_lib_1["default"].createElement(Container, {
          height: 10
        }), thresh_lib_1["default"].createElement(Text, {
          size: thresh_lib_1.ui.rpx(24),
          color: config_1.Colors.Black,
          weight: "bolder"
        }, "\u4E2D\u56FD\u4EBA\u5BFF\u8BA9\u56FD\u4EBA\u66F4\u5065\u5EB7")), thresh_lib_1["default"].createElement(Container, {
          flex: 1
        }), thresh_lib_1["default"].createElement(basicWidget_1.Image, {
          width: thresh_lib_1.ui.rpx(66),
          height: thresh_lib_1.ui.rpx(66),
          src: icon_phone_png_1["default"]
        }), thresh_lib_1["default"].createElement(basicWidget_1.Image, {
          margin: {
            left: thresh_lib_1.ui.rpx(24)
          },
          width: thresh_lib_1.ui.rpx(66),
          height: thresh_lib_1.ui.rpx(66),
          src: icon_wechat_png_1["default"]
        })))), thresh_lib_1["default"].createElement(basicWidget_1.Image, {
          src: background_03_png_1["default"]
        }), thresh_lib_1["default"].createElement(basicWidget_1.Image, {
          src: background_04_png_1["default"]
        }))), thresh_lib_1["default"].createElement(basicWidget_1.Breath, {
          absolute: {
            bottom: thresh_lib_1.ui.rpx(31)
          },
          duration: 500,
          from: 0.9,
          to: 1.1,
          content: thresh_lib_1["default"].createElement(Container, {
            relative: true,
            width: thresh_lib_1.ui.screenWidth - thresh_lib_1.ui.rpx(30),
            height: thresh_lib_1.ui.rpx(100),
            onTap: function onTap() {
              try {
                thresh_lib_1["default"].pushPage("signupPage");
              } catch (_e12) {
                __reportError__(_e12, "", "");

                throw _e12;
              }
            }
          }, thresh_lib_1["default"].createElement(basicWidget_1.Image, {
            src: signup_png_1["default"],
            width: thresh_lib_1.ui.screenWidth - thresh_lib_1.ui.rpx(30),
            height: thresh_lib_1.ui.rpx(100)
          }), thresh_lib_1["default"].createElement(Container, {
            absolute: {},
            width: thresh_lib_1.ui.screenWidth - thresh_lib_1.ui.rpx(30),
            height: thresh_lib_1.ui.rpx(100),
            justifyContent: "center",
            alignItems: "center"
          }, thresh_lib_1["default"].createElement(Text, {
            size: thresh_lib_1.ui.rpx(38),
            color: 0xffffffff
          }, "\u6211\u8981\u53C2\u4E0E")))
        }), thresh_lib_1["default"].createElement(Container, {
          backgroundColor: config_1.Colors.White,
          absolute: {
            top: thresh_lib_1.ui.rpx(120),
            right: 0
          },
          onTap: function onTap() {
            try {
              thresh_lib_1["default"].pushPage("managePage");
            } catch (_e13) {
              __reportError__(_e13, "", "");

              throw _e13;
            }
          }
        }, thresh_lib_1["default"].createElement(Text, {
          size: thresh_lib_1.ui.rpx(30),
          color: config_1.Colors.Black
        }, "\u5BA2\u6237\u7BA1\u7406")), thresh_lib_1["default"].createElement(Container, {
          backgroundColor: config_1.Colors.White,
          absolute: {
            top: thresh_lib_1.ui.rpx(180),
            right: 0
          },
          onTap: function onTap() {
            try {
              thresh_lib_1["default"].pushPage("webviewPage");
            } catch (_e14) {
              __reportError__(_e14, "", "");

              throw _e14;
            }
          }
        }, thresh_lib_1["default"].createElement(Text, {
          size: thresh_lib_1.ui.rpx(30),
          color: config_1.Colors.Black
        }, "\u5C0F\u6E38\u620F")), thresh_lib_1["default"].createElement(Container, {
          absolute: {
            top: thresh_lib_1.ui.rpx(50),
            right: thresh_lib_1.ui.rpx(30)
          },
          backgroundColor: config_1.Colors.Red,
          borderRadius: thresh_lib_1.ui.rpx(30),
          onTap: function onTap() {
            try {
              _this.setState({
                palyMusic: !_this.state.palyMusic
              });
            } catch (_e15) {
              __reportError__(_e15, "", "");

              throw _e15;
            }
          }
        }, this.state.palyMusic ? thresh_lib_1["default"].createElement(basicWidget_1.Spin, {
          duration: 2000,
          content: thresh_lib_1["default"].createElement(basicWidget_1.Image, {
            src: icon_sound_normal_png_1["default"],
            width: thresh_lib_1.ui.rpx(60),
            height: thresh_lib_1.ui.rpx(60)
          })
        }) : thresh_lib_1["default"].createElement(basicWidget_1.Image, {
          src: icon_sound_disable_png_1["default"],
          width: thresh_lib_1.ui.rpx(60),
          height: thresh_lib_1.ui.rpx(60)
        })), btnArrowUp));
      } catch (_e16) {
        __reportError__(_e16, "", "");

        throw _e16;
      }
    };

    return HomePage;
  } catch (_e17) {
    __reportError__(_e17, "", "");

    throw _e17;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = HomePage;

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(277);

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(278);

module.exports = parent;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(279);

var FunctionPrototype = Function.prototype;

module.exports = function (it) {
  var own = it.bind;
  return it === FunctionPrototype || (it instanceof Function && own === FunctionPrototype.bind) ? bind : own;
};


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(280);
var entryVirtual = __webpack_require__(156);

module.exports = entryVirtual('Function').bind;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(6);
var bind = __webpack_require__(281);

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(26);
var isObject = __webpack_require__(19);

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.Colors = void 0;
exports.Colors = {
  Black: 0xff000000,
  White: 0xffffffff,
  Primary: 0xff323232,
  Red: 0xffff0000,
  Pagebg: 0xfff3f3f3,
  Darkgray: 0xff323232,
  Lightgray: 0xff969696,
  Transparent: 0x00000000,
  Divider: 0xffdedede,
  C_959595: 0xff959595,
  C_e7ab10: 0xffe7ab10,
  C_167946: 0xff167946
};

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('/assets/background_01.png');

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('/assets/background_02.png');

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('/assets/background_03.png');

/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('/assets/background_04.png');

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('/assets/gift.png');

/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('/assets/icon_phone.png');

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('/assets/icon_wechat.png');

/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('/assets/signup.png');

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('/assets/icon_arrow_up.png');

/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('/assets/icon_sound_normal.png');

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('/assets/icon_sound_disable.png');

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _map = _interopRequireDefault(__webpack_require__(227));

var __extends = void 0 && (void 0).__extends || function () {
  try {
    var _extendStatics = function extendStatics(d, b) {
      try {
        _extendStatics = _setPrototypeOf["default"] || {
          __proto__: []
        } instanceof Array && function (d, b) {
          try {
            d.__proto__ = b;
          } catch (_e) {
            __reportError__(_e, "", "");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "");

        throw _e3;
      }
    };

    return function (d, b) {
      try {
        _extendStatics(d, b);

        function __() {
          try {
            this.constructor = d;
          } catch (_e4) {
            __reportError__(_e4, "", "");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(139);

var basicWidget_1 = __webpack_require__(247);

var config_1 = __webpack_require__(282);

var Box_1 = __webpack_require__(295);

var ManagePage =
/** @class */
function (_super) {
  try {
    __extends(ManagePage, _super);

    function ManagePage(props) {
      try {
        var _this = _super.call(this, props) || this;

        _this.tabs = [{
          title: "看过 未报名(6)",
          contents: [{
            time: "2020/3/13 20:05",
            head: "",
            name: "姜子牙",
            phone: "15656565566"
          }]
        }, {
          title: "已报名(4)",
          contents: [{
            time: "2020/3/13 20:05",
            head: "",
            name: "马超",
            phone: "15656565566"
          }, {
            time: "2020/3/13 20:05",
            head: "",
            name: "关羽",
            phone: "15656565566"
          }, {
            time: "2020/3/13 20:05",
            head: "",
            name: "赵云",
            phone: "15656565566"
          }, {
            time: "2020/3/13 20:05",
            head: "",
            name: "黄忠",
            phone: "15656565566"
          }]
        }, {
          title: "面见客户(4)",
          contents: []
        }, {
          title: "签到客户(4)",
          contents: []
        }];
        _this.state = {
          currentIndex: 0
        };
        return _this;
      } catch (_e7) {
        __reportError__(_e7, "ManagePage", "");

        throw _e7;
      }
    }

    ManagePage.prototype.widgetDidMount = function () {
      try {
        this.setState({
          currentIndex: 0
        });
      } catch (_e8) {
        __reportError__(_e8, "", "");

        throw _e8;
      }
    };

    ManagePage.prototype.renderTab = function () {
      try {
        var _context;

        var _this = this;

        return (0, _map["default"])(_context = this.tabs).call(_context, function (item, index) {
          try {
            return thresh_lib_1["default"].createElement(basicWidget_1.Container, {
              backgroundColor: config_1.Colors.White,
              height: thresh_lib_1.ui.rpx(70),
              flex: 1,
              relative: true,
              alignItems: "center",
              justifyContent: "center",
              onTap: function onTap() {
                try {
                  _this.setState({
                    currentIndex: index
                  });
                } catch (_e9) {
                  __reportError__(_e9, "", "");

                  throw _e9;
                }
              }
            }, _this.state.currentIndex == index ? thresh_lib_1["default"].createElement(basicWidget_1.Text, {
              weight: "bold",
              align: 'center',
              color: config_1.Colors.Black,
              size: thresh_lib_1.ui.rpx(28),
              width: thresh_lib_1.ui.screenWidth / _this.tabs.length
            }, item.title) : thresh_lib_1["default"].createElement(basicWidget_1.Text, {
              color: config_1.Colors.Black,
              align: 'center',
              size: thresh_lib_1.ui.rpx(25),
              width: thresh_lib_1.ui.screenWidth / _this.tabs.length
            }, item.title), _this.state.currentIndex == index ? thresh_lib_1["default"].createElement(basicWidget_1.Container, {
              absolute: {
                bottom: 0
              },
              height: 1,
              width: thresh_lib_1.ui.screenWidth / _this.tabs.length,
              backgroundColor: config_1.Colors.Black
            }) : thresh_lib_1["default"].createElement(basicWidget_1.Container, {
              absolute: {
                bottom: 0
              },
              height: 1,
              backgroundColor: config_1.Colors.Transparent
            }));
          } catch (_e10) {
            __reportError__(_e10, "", "");

            throw _e10;
          }
        });
      } catch (_e11) {
        __reportError__(_e11, "", "");

        throw _e11;
      }
    };

    ManagePage.prototype.renderContent = function () {
      try {
        var _this = this;

        var contents = this.tabs[this.state.currentIndex].contents;
        return thresh_lib_1["default"].createElement(basicWidget_1.ListView, null, (0, _map["default"])(contents).call(contents, function (item, index) {
          try {
            return thresh_lib_1["default"].createElement(Box_1["default"], {
              backgroundColor: 0xffffffff,
              borderRadius: thresh_lib_1.ui.rpx(10),
              padding: 10
            }, thresh_lib_1["default"].createElement(basicWidget_1.Container, {
              row: true
            }, thresh_lib_1["default"].createElement(basicWidget_1.Container, {
              row: true,
              alignItems: "center"
            }, thresh_lib_1["default"].createElement(basicWidget_1.Image, {
              src: "http://dmimg.5054399.com/allimg/pkm/pk/22.jpg",
              width: thresh_lib_1.ui.rpx(100),
              height: thresh_lib_1.ui.rpx(100)
            }), thresh_lib_1["default"].createElement(basicWidget_1.Container, {
              margin: {
                left: 10
              }
            }, thresh_lib_1["default"].createElement(basicWidget_1.Text, {
              size: thresh_lib_1.ui.rpx(34),
              color: config_1.Colors.Black,
              weight: "bolder"
            }, item.name), thresh_lib_1["default"].createElement(basicWidget_1.Container, {
              height: 10
            }), thresh_lib_1["default"].createElement(basicWidget_1.Text, {
              size: thresh_lib_1.ui.rpx(28),
              color: config_1.Colors.Lightgray,
              weight: "bolder"
            }, item.phone))), thresh_lib_1["default"].createElement(basicWidget_1.Container, {
              flex: 1
            }), thresh_lib_1["default"].createElement(basicWidget_1.Button, {
              width: 90,
              padding: 7,
              borderRadius: 40,
              border: {
                style: 'solid',
                width: 1,
                color: config_1.Colors.Red
              },
              onTap: function onTap() {
                try {
                  _this.setState({
                    count: _this.state.count - 1
                  });
                } catch (_e12) {
                  __reportError__(_e12, "", "");

                  throw _e12;
                }
              }
            }, thresh_lib_1["default"].createElement(basicWidget_1.Text, {
              color: config_1.Colors.Red
            }, "\u8DDF\u8FDB"))));
          } catch (_e13) {
            __reportError__(_e13, "", "");

            throw _e13;
          }
        }));
      } catch (_e14) {
        __reportError__(_e14, "", "");

        throw _e14;
      }
    };

    ManagePage.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(basicWidget_1.Page, {
          appBar: thresh_lib_1["default"].createElement(basicWidget_1.AppBar, {
            title: "\u6D3B\u52A8\u8BE6\u60C5",
            titleColor: 0xff000000,
            backgroundColor: 0xffffffff,
            titleWeight: "bold"
          })
        }, thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          width: thresh_lib_1.ui.screenWidth,
          margin: {
            top: thresh_lib_1.ui.rpx(20)
          },
          row: true,
          justifyContent: "center"
        }, thresh_lib_1["default"].createElement(basicWidget_1.Button, {
          borderRadius: thresh_lib_1.ui.rpx(50),
          backgroundColor: config_1.Colors.C_167946,
          height: thresh_lib_1.ui.rpx(80),
          width: thresh_lib_1.ui.rpx(300)
        }, thresh_lib_1["default"].createElement(basicWidget_1.Text, {
          size: thresh_lib_1.ui.rpx(24),
          color: config_1.Colors.White
        }, "\u5206\u4EAB\u6D3B\u52A8\u94FE\u63A5")), thresh_lib_1["default"].createElement(basicWidget_1.Button, {
          margin: {
            left: thresh_lib_1.ui.rpx(20)
          },
          borderRadius: thresh_lib_1.ui.rpx(50),
          backgroundColor: config_1.Colors.C_167946,
          height: thresh_lib_1.ui.rpx(80),
          width: thresh_lib_1.ui.rpx(300)
        }, thresh_lib_1["default"].createElement(basicWidget_1.Text, {
          size: thresh_lib_1.ui.rpx(24),
          color: config_1.Colors.White
        }, "\u5206\u4EAB\u6D3B\u52A8\u6D77\u62A5"))), thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          width: thresh_lib_1.ui.screenWidth,
          row: true
        }, this.renderTab()), thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          flex: 1
        }, this.renderContent()));
      } catch (_e15) {
        __reportError__(_e15, "", "");

        throw _e15;
      }
    };

    return ManagePage;
  } catch (_e16) {
    __reportError__(_e16, "", "");

    throw _e16;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = ManagePage;

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var _bind = _interopRequireDefault(__webpack_require__(276));

var __extends = void 0 && (void 0).__extends || function () {
  try {
    var _extendStatics = function extendStatics(d, b) {
      try {
        _extendStatics = _setPrototypeOf["default"] || {
          __proto__: []
        } instanceof Array && function (d, b) {
          try {
            d.__proto__ = b;
          } catch (_e) {
            __reportError__(_e, "", "");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "");

        throw _e3;
      }
    };

    return function (d, b) {
      try {
        _extendStatics(d, b);

        function __() {
          try {
            this.constructor = d;
          } catch (_e4) {
            __reportError__(_e4, "", "");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(139);

var MARGIN = 10;
var Container = thresh_lib_1.basicWidgets.Container;

var Box =
/** @class */
function (_super) {
  try {
    __extends(Box, _super);

    function Box() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e7) {
        __reportError__(_e7, "", "");

        throw _e7;
      }
    }

    (0, _defineProperty["default"])(Box, "width", {
      get: function get() {
        try {
          return thresh_lib_1.ui.screenWidth - 2 * MARGIN;
        } catch (_e8) {
          __reportError__(_e8, "", "");

          throw _e8;
        }
      },
      enumerable: false,
      configurable: true
    });

    Box.prototype.render = function () {
      try {
        var _context;

        return thresh_lib_1["default"].createElement(Container, {
          margin: {
            top: MARGIN / 2,
            bottom: MARGIN / 2,
            left: MARGIN,
            right: MARGIN
          },
          boxShadow: {
            color: 0x20649ef4,
            offsetX: 3,
            offsetY: 3,
            blur: 5
          },
          borderRadius: this.props.borderRadius,
          onTap: this.props.onTap && (0, _bind["default"])(_context = this.props.onTap).call(_context, this)
        }, thresh_lib_1["default"].createElement(Container, {
          width: this.props.contentWidth ? this.props.contentWidth + 40 : Box.width,
          backgroundColor: this.props.backgroundColor,
          borderRadius: this.props.borderRadius,
          padding: this.props.padding
        }, this.props.children));
      } catch (_e9) {
        __reportError__(_e9, "", "");

        throw _e9;
      }
    };

    return Box;
  } catch (_e10) {
    __reportError__(_e10, "", "");

    throw _e10;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = Box;

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var __extends = void 0 && (void 0).__extends || function () {
  try {
    var _extendStatics = function extendStatics(d, b) {
      try {
        _extendStatics = _setPrototypeOf["default"] || {
          __proto__: []
        } instanceof Array && function (d, b) {
          try {
            d.__proto__ = b;
          } catch (_e) {
            __reportError__(_e, "", "");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "");

        throw _e3;
      }
    };

    return function (d, b) {
      try {
        _extendStatics(d, b);

        function __() {
          try {
            this.constructor = d;
          } catch (_e4) {
            __reportError__(_e4, "", "");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(139);

var basicWidget_1 = __webpack_require__(247);

var UtilManager_1 = __webpack_require__(233);

var banner_png_1 = __webpack_require__(297);

var alert_png_1 = __webpack_require__(298);

var icon_close_png_1 = __webpack_require__(299);

var config_1 = __webpack_require__(282);

function buttonStyles() {
  try {
    return {
      width: 200,
      padding: 10,
      borderRadius: 5,
      backgroundColor: config_1.Colors.Primary
    };
  } catch (_e7) {
    __reportError__(_e7, "", "");

    throw _e7;
  }
}

var SignupPage =
/** @class */
function (_super) {
  try {
    __extends(SignupPage, _super);

    function SignupPage() {
      try {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          name: "",
          phone: "",
          code: ""
        };
        return _this;
      } catch (_e8) {
        __reportError__(_e8, "SignupPage", "");

        throw _e8;
      }
    }

    SignupPage.prototype.widgetDidUnmount = function () {
      try {
        this.setState({
          name: "",
          phone: "",
          code: ""
        });
      } catch (_e9) {
        __reportError__(_e9, "", "");

        throw _e9;
      }
    };

    SignupPage.prototype.widgetDidMount = function () {};

    SignupPage.prototype.showSuccessDialog = function () {
      try {
        var _this = this;

        thresh_lib_1["default"].showModal(thresh_lib_1["default"].createElement(basicWidget_1.RepaintView, {
          onLayout: function onLayout() {
            try {
              _this.repaintView.saveRepaintView("share", "share.png");
            } catch (_e10) {
              __reportError__(_e10, "", "");

              throw _e10;
            }
          },
          ref: function ref(_ref) {
            try {
              _this.repaintView = _ref;
            } catch (_e11) {
              __reportError__(_e11, "", "");

              throw _e11;
            }
          }
        }, thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          height: thresh_lib_1.ui.screenHeight,
          width: thresh_lib_1.ui.screenWidth,
          backgroundColor: 0x80000000,
          alignItems: "center",
          justifyContent: "center"
        }, thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          relative: true,
          width: thresh_lib_1.ui.rpx(534),
          height: thresh_lib_1.ui.rpx(54)
        }, thresh_lib_1["default"].createElement(basicWidget_1.Image, {
          absolute: {
            right: 0
          },
          src: icon_close_png_1["default"],
          width: thresh_lib_1.ui.rpx(54),
          height: thresh_lib_1.ui.rpx(54),
          onTap: function onTap() {
            try {
              thresh_lib_1["default"].hideModal();
            } catch (_e12) {
              __reportError__(_e12, "", "");

              throw _e12;
            }
          }
        })), thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          relative: true,
          width: thresh_lib_1.ui.rpx(534),
          height: thresh_lib_1.ui.rpx(658),
          margin: {
            top: thresh_lib_1.ui.rpx(15)
          }
        }, thresh_lib_1["default"].createElement(basicWidget_1.Image, {
          src: alert_png_1["default"],
          width: thresh_lib_1.ui.rpx(534),
          height: thresh_lib_1.ui.rpx(658)
        }), thresh_lib_1["default"].createElement(basicWidget_1.Text, {
          absolute: {
            top: thresh_lib_1.ui.rpx(361)
          },
          width: thresh_lib_1.ui.rpx(534),
          align: "center",
          size: thresh_lib_1.ui.rpx(22),
          color: config_1.Colors.Lightgray
        }, "\u82E5\u6709\u7591\u95EE\uFF0C\u53EF\u4EE5\u8054\u7CFB\u4E0B\u65B9\u56FD\u5BFF\u4E1A\u52A1\u7ECF\u7406"), thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          absolute: {
            top: thresh_lib_1.ui.rpx(403)
          },
          width: thresh_lib_1.ui.rpx(534),
          height: thresh_lib_1.ui.rpx(121),
          row: true,
          alignItems: "center",
          justifyContent: "center"
        }, thresh_lib_1["default"].createElement(basicWidget_1.Image, {
          src: "http://dmimg.5054399.com/allimg/pkm/pk/22.jpg",
          width: thresh_lib_1.ui.rpx(100),
          height: thresh_lib_1.ui.rpx(100)
        }), thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          margin: {
            left: 10
          }
        }, thresh_lib_1["default"].createElement(basicWidget_1.Text, {
          size: thresh_lib_1.ui.rpx(30),
          color: config_1.Colors.Black,
          weight: "bolder"
        }, "\u9A6C\u8001\u5E08"), thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          height: 10
        }), thresh_lib_1["default"].createElement(basicWidget_1.Text, {
          size: thresh_lib_1.ui.rpx(24),
          color: config_1.Colors.Darkgray,
          weight: "bolder"
        }, "\u4E2D\u56FD\u4EBA\u5BFF\u3000\u4E1A\u52A1\u7ECF\u7406"))), thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          width: thresh_lib_1.ui.rpx(534),
          absolute: {
            top: thresh_lib_1.ui.rpx(561)
          },
          row: true,
          justifyContent: "center"
        }, thresh_lib_1["default"].createElement(basicWidget_1.Button, {
          borderRadius: thresh_lib_1.ui.rpx(25),
          backgroundColor: config_1.Colors.C_167946,
          height: thresh_lib_1.ui.rpx(50),
          width: thresh_lib_1.ui.rpx(200)
        }, thresh_lib_1["default"].createElement(basicWidget_1.Text, {
          size: thresh_lib_1.ui.rpx(24),
          color: config_1.Colors.White
        }, "\u6253\u7535\u8BDD")), thresh_lib_1["default"].createElement(basicWidget_1.Button, {
          margin: {
            left: thresh_lib_1.ui.rpx(20)
          },
          borderRadius: thresh_lib_1.ui.rpx(25),
          backgroundColor: config_1.Colors.C_167946,
          height: thresh_lib_1.ui.rpx(50),
          width: thresh_lib_1.ui.rpx(200)
        }, thresh_lib_1["default"].createElement(basicWidget_1.Text, {
          size: thresh_lib_1.ui.rpx(24),
          color: config_1.Colors.White
        }, "\u52A0\u5FAE\u4FE1")))))));
      } catch (_e13) {
        __reportError__(_e13, "", "");

        throw _e13;
      }
    };

    SignupPage.prototype.renderCaptchaButton = function (_a) {
      try {
        var text = _a.text,
            background = _a.background;
        return thresh_lib_1["default"].createElement(basicWidget_1.Button, {
          borderRadius: thresh_lib_1.ui.rpx(12),
          backgroundColor: background,
          height: thresh_lib_1.ui.rpx(44),
          width: thresh_lib_1.ui.rpx(160)
        }, thresh_lib_1["default"].createElement(basicWidget_1.Text, {
          size: thresh_lib_1.ui.rpx(22),
          color: config_1.Colors.White
        }, text));
      } catch (_e14) {
        __reportError__(_e14, "", "");

        throw _e14;
      }
    };

    SignupPage.prototype.renderCompleteButton = function (_a) {
      try {
        var _this = this;

        var clickable = _a.clickable,
            background = _a.background;
        return thresh_lib_1["default"].createElement(basicWidget_1.Button, {
          margin: {
            top: thresh_lib_1.ui.rpx(100)
          },
          borderRadius: thresh_lib_1.ui.rpx(40),
          backgroundColor: background,
          height: thresh_lib_1.ui.rpx(80),
          width: thresh_lib_1.ui.rpx(488),
          onTap: function onTap() {
            try {
              return clickable && _this.showSuccessDialog();
            } catch (_e15) {
              __reportError__(_e15, "", "");

              throw _e15;
            }
          }
        }, thresh_lib_1["default"].createElement(basicWidget_1.Text, {
          size: thresh_lib_1.ui.rpx(32),
          color: config_1.Colors.White
        }, "\u5B8C\u6210"));
      } catch (_e16) {
        __reportError__(_e16, "", "");

        throw _e16;
      }
    };

    SignupPage.prototype.render = function () {
      try {
        var _this = this;

        UtilManager_1["default"].log(this.state);
        var elCodeButton = this.state.phone.length == 11 ? this.renderCaptchaButton({
          text: "获取验证码",
          background: config_1.Colors.C_e7ab10
        }) : this.renderCaptchaButton({
          text: "获取验证码",
          background: config_1.Colors.C_959595
        });
        var completeBotton = this.state.name.length && this.state.phone.length == 11 && this.state.code.length == 4 ? this.renderCompleteButton({
          clickable: true,
          background: config_1.Colors.C_e7ab10
        }) : this.renderCompleteButton({
          clickable: false,
          background: config_1.Colors.C_959595
        });
        return thresh_lib_1["default"].createElement(basicWidget_1.Page, {
          appBar: thresh_lib_1["default"].createElement(basicWidget_1.AppBar, {
            title: "\u6D3B\u52A8\u8BE6\u60C5",
            titleColor: 0xff000000,
            backgroundColor: 0xffffffff,
            titleWeight: "bold"
          })
        }, thresh_lib_1["default"].createElement(basicWidget_1.Image, {
          height: thresh_lib_1.ui.rpx(330),
          width: thresh_lib_1.ui.screenWidth,
          src: banner_png_1["default"]
        }), thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          height: thresh_lib_1.ui.rpx(100),
          row: true,
          margin: {
            left: thresh_lib_1.ui.rpx(30),
            right: thresh_lib_1.ui.rpx(20)
          },
          width: thresh_lib_1.ui.screenWidth,
          alignItems: "center"
        }, thresh_lib_1["default"].createElement(basicWidget_1.Text, {
          size: thresh_lib_1.ui.rpx(28),
          color: config_1.Colors.Primary
        }, "\u59D3\u3000\u540D"), thresh_lib_1["default"].createElement(basicWidget_1.Input, {
          margin: {
            left: thresh_lib_1.ui.rpx(30)
          },
          textStyle: {
            size: thresh_lib_1.ui.rpx(28),
            color: config_1.Colors.Darkgray
          },
          placeholderStyle: {
            size: thresh_lib_1.ui.rpx(24),
            color: config_1.Colors.Lightgray
          },
          flex: 1,
          value: this.state.name,
          maxLines: 1,
          placeholder: "\u586B\u5199\u4F60\u7684\u59D3\u540D",
          onChange: function onChange(_a) {
            try {
              var value = _a.value;

              _this.setState({
                name: value
              });
            } catch (_e17) {
              __reportError__(_e17, "onChange", "");

              throw _e17;
            }
          }
        })), thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          margin: {
            left: thresh_lib_1.ui.rpx(30)
          },
          width: thresh_lib_1.ui.screenWidth,
          height: 0.5,
          backgroundColor: config_1.Colors.Divider
        }), thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          height: thresh_lib_1.ui.rpx(100),
          row: true,
          margin: {
            left: thresh_lib_1.ui.rpx(30),
            right: thresh_lib_1.ui.rpx(20)
          },
          width: thresh_lib_1.ui.screenWidth,
          alignItems: "center"
        }, thresh_lib_1["default"].createElement(basicWidget_1.Text, {
          size: thresh_lib_1.ui.rpx(28),
          color: config_1.Colors.Primary
        }, "\u624B\u673A\u53F7"), thresh_lib_1["default"].createElement(basicWidget_1.Input, {
          margin: {
            left: thresh_lib_1.ui.rpx(30)
          },
          textStyle: {
            size: thresh_lib_1.ui.rpx(28),
            color: config_1.Colors.Darkgray
          },
          keyboardType: "phone",
          maxLength: 11,
          placeholderStyle: {
            size: thresh_lib_1.ui.rpx(24),
            color: config_1.Colors.Lightgray
          },
          flex: 1,
          value: this.state.phone,
          maxLines: 1,
          placeholder: "\u586B\u5199\u4F60\u7684\u624B\u673A\u53F7",
          onChange: function onChange(_a) {
            try {
              var value = _a.value;

              _this.setState({
                phone: value
              });
            } catch (_e18) {
              __reportError__(_e18, "onChange", "");

              throw _e18;
            }
          }
        })), thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          margin: {
            left: thresh_lib_1.ui.rpx(30)
          },
          width: thresh_lib_1.ui.screenWidth,
          height: 0.5,
          backgroundColor: config_1.Colors.Divider
        }), thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          height: thresh_lib_1.ui.rpx(100),
          row: true,
          margin: {
            left: thresh_lib_1.ui.rpx(30),
            right: thresh_lib_1.ui.rpx(20)
          },
          width: thresh_lib_1.ui.screenWidth,
          alignItems: "center"
        }, thresh_lib_1["default"].createElement(basicWidget_1.Text, {
          size: thresh_lib_1.ui.rpx(28),
          color: config_1.Colors.Primary
        }, "\u9A8C\u8BC1\u7801"), thresh_lib_1["default"].createElement(basicWidget_1.Input, {
          margin: {
            left: thresh_lib_1.ui.rpx(30)
          },
          textStyle: {
            size: thresh_lib_1.ui.rpx(28),
            color: config_1.Colors.Darkgray
          },
          keyboardType: "number",
          placeholderStyle: {
            size: thresh_lib_1.ui.rpx(24),
            color: config_1.Colors.Lightgray
          },
          flex: 1,
          value: this.state.code,
          maxLines: 1,
          maxLength: 4,
          onChange: function onChange(_a) {
            try {
              var value = _a.value;

              _this.setState({
                code: value
              });
            } catch (_e19) {
              __reportError__(_e19, "onChange", "");

              throw _e19;
            }
          }
        }), elCodeButton), thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          margin: {
            left: thresh_lib_1.ui.rpx(30)
          },
          width: thresh_lib_1.ui.screenWidth,
          height: 0.5,
          backgroundColor: config_1.Colors.Divider
        }), thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          width: thresh_lib_1.ui.screenWidth,
          alignItems: "center"
        }, completeBotton));
      } catch (_e20) {
        __reportError__(_e20, "", "");

        throw _e20;
      }
    };

    return SignupPage;
  } catch (_e21) {
    __reportError__(_e21, "", "");

    throw _e21;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = SignupPage;

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('/assets/banner.png');

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('/assets/alert.png');

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('/assets/icon_close.png');

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(135));

var __extends = void 0 && (void 0).__extends || function () {
  try {
    var _extendStatics = function extendStatics(d, b) {
      try {
        _extendStatics = _setPrototypeOf["default"] || {
          __proto__: []
        } instanceof Array && function (d, b) {
          try {
            d.__proto__ = b;
          } catch (_e) {
            __reportError__(_e, "", "");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "");

        throw _e3;
      }
    };

    return function (d, b) {
      try {
        _extendStatics(d, b);

        function __() {
          try {
            this.constructor = d;
          } catch (_e4) {
            __reportError__(_e4, "", "");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(139);

var basicWidget_1 = __webpack_require__(247);

var WebviewPage =
/** @class */
function (_super) {
  try {
    __extends(WebviewPage, _super);

    function WebviewPage() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e7) {
        __reportError__(_e7, "", "");

        throw _e7;
      }
    }

    WebviewPage.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(basicWidget_1.Page, {
          appBar: thresh_lib_1["default"].createElement(basicWidget_1.AppBar, {
            title: "\u6D3B\u52A8\u8BE6\u60C5",
            titleColor: 0xff000000,
            backgroundColor: 0xffffffff,
            titleWeight: "bold"
          })
        }, thresh_lib_1["default"].createElement(basicWidget_1.WebView, {
          initialUrl: 'https://health-qa.jxbrty.com/html/chinalife-app/internal/test-game.html'
        }));
      } catch (_e8) {
        __reportError__(_e8, "", "");

        throw _e8;
      }
    };

    return WebviewPage;
  } catch (_e9) {
    __reportError__(_e9, "", "");

    throw _e9;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = WebviewPage;

/***/ })
/******/ ]);