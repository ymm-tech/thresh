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

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _forEach = _interopRequireDefault(__webpack_require__(30));

var _concat = _interopRequireDefault(__webpack_require__(86));

var _context, _context2;

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var thresh_theme_provider_1 = __webpack_require__(275);

var config_1 = __webpack_require__(284);

var homePage_1 = __webpack_require__(340); // 注册默认页面


thresh_lib_1["default"].registerPage('homePage', function () {
  try {
    return homePage_1["default"];
  } catch (_e) {
    __reportError__(_e, "", "/index.ts");

    throw _e;
  }
}, {
  isDefault: true
}); // 注册其他页面

(0, _forEach["default"])(_context = (0, _concat["default"])(_context2 = config_1.widgetList).call(_context2, config_1.apiList, config_1.extraPages)).call(_context, function (_a) {
  try {
    var pageName = _a.pageName,
        pageBuilder = _a.pageBuilder,
        useInject = _a.useInject;
    thresh_lib_1["default"].registerPage(pageName, pageBuilder);

    if (useInject) {
      thresh_lib_1["default"].injectRoute({
        pageName: pageName
      });
    }
  } catch (_e2) {
    __reportError__(_e2, "", "/index.ts");

    throw _e2;
  }
});
thresh_lib_1["default"].useProviders({
  propsProvider: [thresh_theme_provider_1["default"]]
}); // flutter 环境准备就绪

thresh_lib_1["default"].ready = function () {
  try {
    // threshThemeProvider.loadAndUse('testTheme')
    // 设置 appBar 高度
    // appBar 默认高度 56
    thresh_lib_1.ui.setAppBarHeight(thresh_lib_1.ui.rpx(88)); // 运行程序

    thresh_lib_1["default"].runApp();
  } catch (_e3) {
    __reportError__(_e3, "", "/index.ts");

    throw _e3;
  }
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
var path = __webpack_require__(24);

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;


/***/ }),
/* 5 */
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

module.exports = __webpack_require__(31);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
var forEach = __webpack_require__(77);
var classof = __webpack_require__(72);
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
var DOMIterables = __webpack_require__(76);
var global = __webpack_require__(7);
var classof = __webpack_require__(72);
var createNonEnumerableProperty = __webpack_require__(27);
var Iterators = __webpack_require__(35);
var wellKnownSymbol = __webpack_require__(52);

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(14);
var addToUnscopables = __webpack_require__(34);
var Iterators = __webpack_require__(35);
var InternalStateModule = __webpack_require__(36);
var defineIterator = __webpack_require__(46);

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
/* 34 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(37);
var global = __webpack_require__(7);
var isObject = __webpack_require__(19);
var createNonEnumerableProperty = __webpack_require__(27);
var objectHas = __webpack_require__(20);
var shared = __webpack_require__(39);
var sharedKey = __webpack_require__(41);
var hiddenKeys = __webpack_require__(45);

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var inspectSource = __webpack_require__(38);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(39);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var setGlobal = __webpack_require__(40);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(42);
var uid = __webpack_require__(44);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(43);
var store = __webpack_require__(39);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.9.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var createIteratorConstructor = __webpack_require__(47);
var getPrototypeOf = __webpack_require__(49);
var setPrototypeOf = __webpack_require__(73);
var setToStringTag = __webpack_require__(69);
var createNonEnumerableProperty = __webpack_require__(27);
var redefine = __webpack_require__(75);
var wellKnownSymbol = __webpack_require__(52);
var IS_PURE = __webpack_require__(43);
var Iterators = __webpack_require__(35);
var IteratorsCore = __webpack_require__(48);

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(48).IteratorPrototype;
var create = __webpack_require__(59);
var createPropertyDescriptor = __webpack_require__(13);
var setToStringTag = __webpack_require__(69);
var Iterators = __webpack_require__(35);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(11);
var getPrototypeOf = __webpack_require__(49);
var createNonEnumerableProperty = __webpack_require__(27);
var has = __webpack_require__(20);
var wellKnownSymbol = __webpack_require__(52);
var IS_PURE = __webpack_require__(43);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(20);
var toObject = __webpack_require__(50);
var sharedKey = __webpack_require__(41);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(51);

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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(17);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(11);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var shared = __webpack_require__(42);
var has = __webpack_require__(20);
var uid = __webpack_require__(44);
var NATIVE_SYMBOL = __webpack_require__(53);
var USE_SYMBOL_AS_UID = __webpack_require__(58);

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var IS_NODE = __webpack_require__(54);
var V8_VERSION = __webpack_require__(55);
var fails = __webpack_require__(11);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  /* global Symbol -- required for testing */
  return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);
});


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(16);
var global = __webpack_require__(7);

module.exports = classof(global.process) == 'process';


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var userAgent = __webpack_require__(56);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(57);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 57 */
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(53);

module.exports = NATIVE_SYMBOL
  /* global Symbol -- safe */
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(29);
var defineProperties = __webpack_require__(60);
var enumBugKeys = __webpack_require__(67);
var hiddenKeys = __webpack_require__(45);
var html = __webpack_require__(68);
var documentCreateElement = __webpack_require__(22);
var sharedKey = __webpack_require__(41);

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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(10);
var definePropertyModule = __webpack_require__(28);
var anObject = __webpack_require__(29);
var objectKeys = __webpack_require__(61);

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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(62);
var enumBugKeys = __webpack_require__(67);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(20);
var toIndexedObject = __webpack_require__(14);
var indexOf = __webpack_require__(63).indexOf;
var hiddenKeys = __webpack_require__(45);

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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(14);
var toLength = __webpack_require__(64);
var toAbsoluteIndex = __webpack_require__(66);

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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(65);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(65);

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
/* 67 */
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(57);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(70);
var defineProperty = __webpack_require__(28).f;
var createNonEnumerableProperty = __webpack_require__(27);
var has = __webpack_require__(20);
var toString = __webpack_require__(71);
var wellKnownSymbol = __webpack_require__(52);

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(52);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(70);
var classof = __webpack_require__(72);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(70);
var classofRaw = __webpack_require__(16);
var wellKnownSymbol = __webpack_require__(52);

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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(29);
var aPossiblePrototype = __webpack_require__(74);

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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(27);

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),
/* 76 */
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(78);

module.exports = parent;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79);
var entryVirtual = __webpack_require__(85);

module.exports = entryVirtual('Array').forEach;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var forEach = __webpack_require__(80);

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(81).forEach;
var arrayMethodIsStrict = __webpack_require__(84);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(25);
var IndexedObject = __webpack_require__(15);
var toObject = __webpack_require__(50);
var toLength = __webpack_require__(64);
var arraySpeciesCreate = __webpack_require__(82);

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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
var isArray = __webpack_require__(83);
var wellKnownSymbol = __webpack_require__(52);

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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(16);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 84 */
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(24);

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(88);

module.exports = parent;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var concat = __webpack_require__(89);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.concat;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.concat) ? concat : own;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
var entryVirtual = __webpack_require__(85);

module.exports = entryVirtual('Array').concat;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var fails = __webpack_require__(11);
var isArray = __webpack_require__(83);
var isObject = __webpack_require__(19);
var toObject = __webpack_require__(50);
var toLength = __webpack_require__(64);
var createProperty = __webpack_require__(91);
var arraySpeciesCreate = __webpack_require__(82);
var arrayMethodHasSpeciesSupport = __webpack_require__(92);
var wellKnownSymbol = __webpack_require__(52);
var V8_VERSION = __webpack_require__(55);

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
/* 91 */
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(11);
var wellKnownSymbol = __webpack_require__(52);
var V8_VERSION = __webpack_require__(55);

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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.injectRoute = exports.createElement = exports.basicWidgets = exports.Event = exports.Timer = exports.ui = exports.Bridge = exports.Util = exports.Widget = void 0;

var ThreshApp_1 = __webpack_require__(94);

(0, _defineProperty["default"])(exports, "injectRoute", {
  enumerable: true,
  get: function get() {
    try {
      return ThreshApp_1.injectRoute;
    } catch (_e) {
      __reportError__(_e, "", "/thresh-lib/index.ts");

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

var BridgeManager_1 = __webpack_require__(162);

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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(95));

var _symbol = _interopRequireDefault(__webpack_require__(124));

var _iterator = _interopRequireDefault(__webpack_require__(150));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _now = _interopRequireDefault(__webpack_require__(153));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  try {
    function adopt(value) {
      try {
        return value instanceof P ? value : new P(function (resolve) {
          try {
            resolve(value);
          } catch (_e) {
            __reportError__(_e, "", "/thresh-lib/src/core/ThreshApp.ts");

            throw _e;
          }
        });
      } catch (_e2) {
        __reportError__(_e2, "", "/thresh-lib/src/core/ThreshApp.ts");

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
            __reportError__(_e3, "", "/thresh-lib/src/core/ThreshApp.ts");

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
            __reportError__(_e4, "", "/thresh-lib/src/core/ThreshApp.ts");

            throw _e4;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e5) {
            __reportError__(_e5, "", "/thresh-lib/src/core/ThreshApp.ts");

            throw _e5;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e6) {
        __reportError__(_e6, "", "/thresh-lib/src/core/ThreshApp.ts");

        throw _e6;
      }
    });
  } catch (_e7) {
    __reportError__(_e7, "", "/thresh-lib/src/core/ThreshApp.ts");

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
          __reportError__(_e8, "sent", "/thresh-lib/src/core/ThreshApp.ts");

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
        __reportError__(_e9, "", "/thresh-lib/src/core/ThreshApp.ts");

        throw _e9;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e10) {
        __reportError__(_e10, "", "/thresh-lib/src/core/ThreshApp.ts");

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
    __reportError__(_e11, "", "/thresh-lib/src/core/ThreshApp.ts");

    throw _e11;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.injectRoute = exports.ThreshApp = void 0;

var MethodChannel_1 = __webpack_require__(157);

var RenderManager_1 = __webpack_require__(234);

var createElement_1 = __webpack_require__(272);

var Widget_1 = __webpack_require__(256);

var VNode_1 = __webpack_require__(204);

var AppContainer_1 = __webpack_require__(210);

var ThreshAppContext_1 = __webpack_require__(273);

var Util_1 = __webpack_require__(173);

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
        __reportError__(_e12, "ThreshApp", "/thresh-lib/src/core/ThreshApp.ts");

        throw _e12;
      }
    }

    (0, _defineProperty["default"])(ThreshApp.prototype, "jsVersion", {
      // js version
      get: function get() {
        try {
          return '1.3.0';
        } catch (_e13) {
          __reportError__(_e13, "", "/thresh-lib/src/core/ThreshApp.ts");

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
          __reportError__(_e14, "", "/thresh-lib/src/core/ThreshApp.ts");

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
          __reportError__(_e15, "", "/thresh-lib/src/core/ThreshApp.ts");

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
        __reportError__(_e16, "", "/thresh-lib/src/core/ThreshApp.ts");

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
        __reportError__(_e17, "", "/thresh-lib/src/core/ThreshApp.ts");

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
        __reportError__(_e18, "", "/thresh-lib/src/core/ThreshApp.ts");

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
        __reportError__(_e19, "", "/thresh-lib/src/core/ThreshApp.ts");

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
            __reportError__(_e20, "", "/thresh-lib/src/core/ThreshApp.ts");

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
        __reportError__(_e21, "", "/thresh-lib/src/core/ThreshApp.ts");

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
        __reportError__(_e22, "", "/thresh-lib/src/core/ThreshApp.ts");

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
            __reportError__(_e23, "", "/thresh-lib/src/core/ThreshApp.ts");

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
        __reportError__(_e24, "", "/thresh-lib/src/core/ThreshApp.ts");

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
        __reportError__(_e25, "", "/thresh-lib/src/core/ThreshApp.ts");

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
        __reportError__(_e26, "", "/thresh-lib/src/core/ThreshApp.ts");

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
        __reportError__(_e27, "", "/thresh-lib/src/core/ThreshApp.ts");

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
        __reportError__(_e28, "", "/thresh-lib/src/core/ThreshApp.ts");

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
        __reportError__(_e29, "", "/thresh-lib/src/core/ThreshApp.ts");

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
        __reportError__(_e30, "", "/thresh-lib/src/core/ThreshApp.ts");

        throw _e30;
      }
    };

    return ThreshApp;
  } catch (_e31) {
    __reportError__(_e31, "", "/thresh-lib/src/core/ThreshApp.ts");

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
    __reportError__(_e32, "injectRoute", "/thresh-lib/src/core/ThreshApp.ts");

    throw _e32;
  }
}

exports.injectRoute = injectRoute;
var threshApp = new ThreshApp();
exports["default"] = threshApp;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(96);

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(97);

module.exports = parent;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(98);
__webpack_require__(103);
__webpack_require__(104);
__webpack_require__(119);
__webpack_require__(120);
__webpack_require__(121);
__webpack_require__(122);
__webpack_require__(32);
var path = __webpack_require__(24);

module.exports = path.Promise;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var getPrototypeOf = __webpack_require__(49);
var setPrototypeOf = __webpack_require__(73);
var create = __webpack_require__(59);
var createNonEnumerableProperty = __webpack_require__(27);
var createPropertyDescriptor = __webpack_require__(13);
var iterate = __webpack_require__(99);

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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(29);
var isArrayIteratorMethod = __webpack_require__(100);
var toLength = __webpack_require__(64);
var bind = __webpack_require__(25);
var getIteratorMethod = __webpack_require__(101);
var iteratorClose = __webpack_require__(102);

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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(52);
var Iterators = __webpack_require__(35);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(72);
var Iterators = __webpack_require__(35);
var wellKnownSymbol = __webpack_require__(52);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(29);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),
/* 103 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var IS_PURE = __webpack_require__(43);
var global = __webpack_require__(7);
var getBuiltIn = __webpack_require__(57);
var NativePromise = __webpack_require__(105);
var redefine = __webpack_require__(75);
var redefineAll = __webpack_require__(106);
var setToStringTag = __webpack_require__(69);
var setSpecies = __webpack_require__(107);
var isObject = __webpack_require__(19);
var aFunction = __webpack_require__(26);
var anInstance = __webpack_require__(108);
var inspectSource = __webpack_require__(38);
var iterate = __webpack_require__(99);
var checkCorrectnessOfIteration = __webpack_require__(109);
var speciesConstructor = __webpack_require__(110);
var task = __webpack_require__(111).set;
var microtask = __webpack_require__(113);
var promiseResolve = __webpack_require__(115);
var hostReportErrors = __webpack_require__(117);
var newPromiseCapabilityModule = __webpack_require__(116);
var perform = __webpack_require__(118);
var InternalStateModule = __webpack_require__(36);
var isForced = __webpack_require__(23);
var wellKnownSymbol = __webpack_require__(52);
var IS_NODE = __webpack_require__(54);
var V8_VERSION = __webpack_require__(55);

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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);

module.exports = global.Promise;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(75);

module.exports = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
  } return target;
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(57);
var definePropertyModule = __webpack_require__(28);
var wellKnownSymbol = __webpack_require__(52);
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
/* 108 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(52);

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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(29);
var aFunction = __webpack_require__(26);
var wellKnownSymbol = __webpack_require__(52);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var fails = __webpack_require__(11);
var bind = __webpack_require__(25);
var html = __webpack_require__(68);
var createElement = __webpack_require__(22);
var IS_IOS = __webpack_require__(112);
var IS_NODE = __webpack_require__(54);

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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(56);

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var getOwnPropertyDescriptor = __webpack_require__(9).f;
var macrotask = __webpack_require__(111).set;
var IS_IOS = __webpack_require__(112);
var IS_WEBOS_WEBKIT = __webpack_require__(114);
var IS_NODE = __webpack_require__(54);

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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(56);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(29);
var isObject = __webpack_require__(19);
var newPromiseCapability = __webpack_require__(116);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 116 */
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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var aFunction = __webpack_require__(26);
var newPromiseCapabilityModule = __webpack_require__(116);
var perform = __webpack_require__(118);
var iterate = __webpack_require__(99);

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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var aFunction = __webpack_require__(26);
var getBuiltIn = __webpack_require__(57);
var newPromiseCapabilityModule = __webpack_require__(116);
var perform = __webpack_require__(118);
var iterate = __webpack_require__(99);

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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var IS_PURE = __webpack_require__(43);
var NativePromise = __webpack_require__(105);
var fails = __webpack_require__(11);
var getBuiltIn = __webpack_require__(57);
var speciesConstructor = __webpack_require__(110);
var promiseResolve = __webpack_require__(115);
var redefine = __webpack_require__(75);

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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(123).charAt;
var InternalStateModule = __webpack_require__(36);
var defineIterator = __webpack_require__(46);

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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(65);
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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(125);

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(126);

module.exports = parent;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
__webpack_require__(103);
__webpack_require__(127);
__webpack_require__(133);
__webpack_require__(134);
__webpack_require__(135);
__webpack_require__(136);
__webpack_require__(137);
__webpack_require__(138);
__webpack_require__(139);
__webpack_require__(140);
__webpack_require__(141);
__webpack_require__(142);
__webpack_require__(143);
__webpack_require__(144);
__webpack_require__(145);
__webpack_require__(146);
__webpack_require__(147);
__webpack_require__(148);
__webpack_require__(149);
var path = __webpack_require__(24);

module.exports = path.Symbol;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var global = __webpack_require__(7);
var getBuiltIn = __webpack_require__(57);
var IS_PURE = __webpack_require__(43);
var DESCRIPTORS = __webpack_require__(10);
var NATIVE_SYMBOL = __webpack_require__(53);
var USE_SYMBOL_AS_UID = __webpack_require__(58);
var fails = __webpack_require__(11);
var has = __webpack_require__(20);
var isArray = __webpack_require__(83);
var isObject = __webpack_require__(19);
var anObject = __webpack_require__(29);
var toObject = __webpack_require__(50);
var toIndexedObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(18);
var createPropertyDescriptor = __webpack_require__(13);
var nativeObjectCreate = __webpack_require__(59);
var objectKeys = __webpack_require__(61);
var getOwnPropertyNamesModule = __webpack_require__(128);
var getOwnPropertyNamesExternal = __webpack_require__(129);
var getOwnPropertySymbolsModule = __webpack_require__(130);
var getOwnPropertyDescriptorModule = __webpack_require__(9);
var definePropertyModule = __webpack_require__(28);
var propertyIsEnumerableModule = __webpack_require__(12);
var createNonEnumerableProperty = __webpack_require__(27);
var redefine = __webpack_require__(75);
var shared = __webpack_require__(42);
var sharedKey = __webpack_require__(41);
var hiddenKeys = __webpack_require__(45);
var uid = __webpack_require__(44);
var wellKnownSymbol = __webpack_require__(52);
var wrappedWellKnownSymbolModule = __webpack_require__(131);
var defineWellKnownSymbol = __webpack_require__(132);
var setToStringTag = __webpack_require__(69);
var InternalStateModule = __webpack_require__(36);
var $forEach = __webpack_require__(81).forEach;

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
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(62);
var enumBugKeys = __webpack_require__(67);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(14);
var nativeGetOwnPropertyNames = __webpack_require__(128).f;

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
/* 130 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(52);

exports.f = wellKnownSymbol;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(24);
var has = __webpack_require__(20);
var wrappedWellKnownSymbolModule = __webpack_require__(131);
var defineProperty = __webpack_require__(28).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(132);

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),
/* 134 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(132);

// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(132);

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(132);

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(132);

// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(132);

// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
defineWellKnownSymbol('matchAll');


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(132);

// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(132);

// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(132);

// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(132);

// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(132);

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(132);

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(132);

// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var setToStringTag = __webpack_require__(69);

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 148 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 149 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(151);

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(152);

module.exports = parent;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
__webpack_require__(122);
__webpack_require__(32);
var WrappedWellKnownSymbolModule = __webpack_require__(131);

module.exports = WrappedWellKnownSymbolModule.f('iterator');


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(154);

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(155);

module.exports = parent;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(156);
var path = __webpack_require__(24);

module.exports = path.Date.now;


/***/ }),
/* 156 */
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
/* 157 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _stringify = _interopRequireDefault(__webpack_require__(158));

var _now = _interopRequireDefault(__webpack_require__(153));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.MethodChannelReceiveType = exports.NativeMethodChannelType = exports.FlutterMethodChannelType = void 0;

var BridgeManager_1 = __webpack_require__(162);

var UtilManager_1 = __webpack_require__(233);

var Util_1 = __webpack_require__(173);

var ThreshApp_1 = __webpack_require__(94);

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
  } catch (_e) {
    __reportError__(_e, "", "/thresh-lib/src/channel/MethodChannel.ts");

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
    __reportError__(_e2, "", "/thresh-lib/src/channel/MethodChannel.ts");

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
    __reportError__(_e3, "", "/thresh-lib/src/channel/MethodChannel.ts");

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
    __reportError__(_e4, "methodChannelConsole", "/thresh-lib/src/channel/MethodChannel.ts");

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
    __reportError__(_e5, "", "/thresh-lib/src/channel/MethodChannel.ts");

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
    __reportError__(_e6, "", "/thresh-lib/src/channel/MethodChannel.ts");

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
    __reportError__(_e7, "formatChannelParams", "/thresh-lib/src/channel/MethodChannel.ts");

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
        __reportError__(_e8, "", "/thresh-lib/src/channel/MethodChannel.ts");

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
        __reportError__(_e9, "", "/thresh-lib/src/channel/MethodChannel.ts");

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
        __reportError__(_e10, "", "/thresh-lib/src/channel/MethodChannel.ts");

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
        __reportError__(_e11, "", "/thresh-lib/src/channel/MethodChannel.ts");

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
        __reportError__(_e12, "", "/thresh-lib/src/channel/MethodChannel.ts");

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
        __reportError__(_e13, "", "/thresh-lib/src/channel/MethodChannel.ts");

        throw _e13;
      }
    };

    MethodChannel.MAX_CHUNK_SIZE = 1024 * 10;
    return MethodChannel;
  } catch (_e14) {
    __reportError__(_e14, "", "/thresh-lib/src/channel/MethodChannel.ts");

    throw _e14;
  }
}();

exports["default"] = MethodChannel;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(159);

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(160);

module.exports = parent;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(161);
var core = __webpack_require__(24);

if (!core.JSON) core.JSON = { stringify: JSON.stringify };

// eslint-disable-next-line no-unused-vars -- required for `.length`
module.exports = function stringify(it, replacer, space) {
  return core.JSON.stringify.apply(null, arguments);
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(6);
var getBuiltIn = __webpack_require__(57);
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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(95));

var _symbol = _interopRequireDefault(__webpack_require__(124));

var _iterator = _interopRequireDefault(__webpack_require__(150));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _includes = _interopRequireDefault(__webpack_require__(163));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  try {
    function adopt(value) {
      try {
        return value instanceof P ? value : new P(function (resolve) {
          try {
            resolve(value);
          } catch (_e) {
            __reportError__(_e, "", "/thresh-lib/src/manager/BridgeManager.ts");

            throw _e;
          }
        });
      } catch (_e2) {
        __reportError__(_e2, "", "/thresh-lib/src/manager/BridgeManager.ts");

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
            __reportError__(_e3, "", "/thresh-lib/src/manager/BridgeManager.ts");

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
            __reportError__(_e4, "", "/thresh-lib/src/manager/BridgeManager.ts");

            throw _e4;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e5) {
            __reportError__(_e5, "", "/thresh-lib/src/manager/BridgeManager.ts");

            throw _e5;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e6) {
        __reportError__(_e6, "", "/thresh-lib/src/manager/BridgeManager.ts");

        throw _e6;
      }
    });
  } catch (_e7) {
    __reportError__(_e7, "", "/thresh-lib/src/manager/BridgeManager.ts");

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
          __reportError__(_e8, "sent", "/thresh-lib/src/manager/BridgeManager.ts");

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
        __reportError__(_e9, "", "/thresh-lib/src/manager/BridgeManager.ts");

        throw _e9;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e10) {
        __reportError__(_e10, "", "/thresh-lib/src/manager/BridgeManager.ts");

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
    __reportError__(_e11, "", "/thresh-lib/src/manager/BridgeManager.ts");

    throw _e11;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var MethodChannel_1 = __webpack_require__(157);

var Util_1 = __webpack_require__(173);

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
                    __reportError__(_e12, "", "/thresh-lib/src/manager/BridgeManager.ts");

                    throw _e12;
                  }
                });
              } catch (_e13) {
                __reportError__(_e13, "", "/thresh-lib/src/manager/BridgeManager.ts");

                throw _e13;
              }
            })];
          } catch (_e14) {
            __reportError__(_e14, "", "/thresh-lib/src/manager/BridgeManager.ts");

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
              __reportError__(_e15, "", "/thresh-lib/src/manager/BridgeManager.ts");

              throw _e15;
            }
          }, 500);
        }
      } catch (_e16) {
        __reportError__(_e16, "", "/thresh-lib/src/manager/BridgeManager.ts");

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
        __reportError__(_e17, "", "/thresh-lib/src/manager/BridgeManager.ts");

        throw _e17;
      }
    };

    BridgeManager.isNetworkRequest = function (params) {
      try {
        var _context, _context2;

        return (0, _includes["default"])(_context = BridgeManager.networkModuleNames).call(_context, params.module) && (0, _includes["default"])(_context2 = BridgeManager.networkModuleNames).call(_context2, params.method);
      } catch (_e18) {
        __reportError__(_e18, "", "/thresh-lib/src/manager/BridgeManager.ts");

        throw _e18;
      }
    };

    BridgeManager.isLogRequest = function (params) {
      try {
        return params.module === 'base' && params.method === 'log';
      } catch (_e19) {
        __reportError__(_e19, "", "/thresh-lib/src/manager/BridgeManager.ts");

        throw _e19;
      }
    };

    BridgeManager.networkModuleNames = ['base', 'network', 'netbase', 'request'];
    return BridgeManager;
  } catch (_e20) {
    __reportError__(_e20, "", "/thresh-lib/src/manager/BridgeManager.ts");

    throw _e20;
  }
}();

exports["default"] = BridgeManager;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(164);

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(165);

module.exports = parent;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var arrayIncludes = __webpack_require__(166);
var stringIncludes = __webpack_require__(168);

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
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(167);
var entryVirtual = __webpack_require__(85);

module.exports = entryVirtual('Array').includes;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var $includes = __webpack_require__(63).includes;
var addToUnscopables = __webpack_require__(34);

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
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(169);
var entryVirtual = __webpack_require__(85);

module.exports = entryVirtual('String').includes;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var notARegExp = __webpack_require__(170);
var requireObjectCoercible = __webpack_require__(17);
var correctIsRegExpLogic = __webpack_require__(172);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(171);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
var classof = __webpack_require__(16);
var wellKnownSymbol = __webpack_require__(52);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(52);

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
/* 173 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _typeof2 = _interopRequireDefault(__webpack_require__(174));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _splice = _interopRequireDefault(__webpack_require__(184));

var _includes = _interopRequireDefault(__webpack_require__(163));

var _isArray = _interopRequireDefault(__webpack_require__(189));

var _forEach = _interopRequireDefault(__webpack_require__(30));

var _concat = _interopRequireDefault(__webpack_require__(86));

var _reduce = _interopRequireDefault(__webpack_require__(193));

var _assign = _interopRequireDefault(__webpack_require__(199));

var _stringify = _interopRequireDefault(__webpack_require__(158));

var _now = _interopRequireDefault(__webpack_require__(153));

var _promise = _interopRequireDefault(__webpack_require__(95));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var __1 = __webpack_require__(93);

var VNode_1 = __webpack_require__(204);

var BridgeManager_1 = __webpack_require__(162);

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
          __reportError__(_e, "", "/thresh-lib/src/shared/Util.ts");

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
        __reportError__(_e2, "", "/thresh-lib/src/shared/Util.ts");

        throw _e2;
      }
    };

    Util.randomId = function () {
      try {
        return Math.random().toString(16).replace('0.', '');
      } catch (_e3) {
        __reportError__(_e3, "", "/thresh-lib/src/shared/Util.ts");

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
        __reportError__(_e4, "", "/thresh-lib/src/shared/Util.ts");

        throw _e4;
      }
    };

    Util.isArray = function (value) {
      try {
        return Util.type(value) === '[object Array]';
      } catch (_e5) {
        __reportError__(_e5, "", "/thresh-lib/src/shared/Util.ts");

        throw _e5;
      }
    };

    Util.type = function (value) {
      try {
        return Object.prototype.toString.call(value);
      } catch (_e6) {
        __reportError__(_e6, "", "/thresh-lib/src/shared/Util.ts");

        throw _e6;
      }
    };

    Util.isBaseType = function (value) {
      try {
        var _context3;

        return (0, _includes["default"])(_context3 = ['number', 'string', 'boolean', 'undefined']).call(_context3, (0, _typeof2["default"])(value));
      } catch (_e7) {
        __reportError__(_e7, "", "/thresh-lib/src/shared/Util.ts");

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
              __reportError__(_e8, "", "/thresh-lib/src/shared/Util.ts");

              throw _e8;
            }
          });
        }

        return target;
      } catch (_e9) {
        __reportError__(_e9, "", "/thresh-lib/src/shared/Util.ts");

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
            __reportError__(_e10, "", "/thresh-lib/src/shared/Util.ts");

            throw _e10;
          }
        }, {});
      } catch (_e11) {
        __reportError__(_e11, "", "/thresh-lib/src/shared/Util.ts");

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
        __reportError__(_e12, "", "/thresh-lib/src/shared/Util.ts");

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
        __reportError__(_e13, "", "/thresh-lib/src/shared/Util.ts");

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
            __reportError__(_e14, "", "/thresh-lib/src/shared/Util.ts");

            throw _e14;
          }
        });
        return content;
      } catch (_e15) {
        __reportError__(_e15, "", "/thresh-lib/src/shared/Util.ts");

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
        __reportError__(_e16, "", "/thresh-lib/src/shared/Util.ts");

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
        __reportError__(_e17, "", "/thresh-lib/src/shared/Util.ts");

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
        __reportError__(_e18, "", "/thresh-lib/src/shared/Util.ts");

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
        __reportError__(_e19, "", "/thresh-lib/src/shared/Util.ts");

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
            __reportError__(_e20, "", "/thresh-lib/src/shared/Util.ts");

            throw _e20;
          }
        }
      } catch (_e21) {
        __reportError__(_e21, "", "/thresh-lib/src/shared/Util.ts");

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
            __reportError__(_e22, "", "/thresh-lib/src/shared/Util.ts");

            throw _e22;
          }
        };
      } catch (_e23) {
        __reportError__(_e23, "", "/thresh-lib/src/shared/Util.ts");

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
        __reportError__(_e24, "", "/thresh-lib/src/shared/Util.ts");

        throw _e24;
      }
    }; // ios 10.0.x 版本上 Promise 回调中的 resolve 存在异常
    // 必须先通过 Promise.resolve() 进行一遍类似初始化的操作


    Util.promiseResolveHackForIos_10_0_x = function () {
      try {
        return _promise["default"].resolve();
      } catch (_e25) {
        __reportError__(_e25, "", "/thresh-lib/src/shared/Util.ts");

        throw _e25;
      }
    };

    return Util;
  } catch (_e26) {
    __reportError__(_e26, "", "/thresh-lib/src/shared/Util.ts");

    throw _e26;
  }
}();

exports["default"] = Util;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(175);

var _Symbol$iterator = __webpack_require__(182);

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
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(176);

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(126);
__webpack_require__(177);
__webpack_require__(178);
__webpack_require__(179);
__webpack_require__(180);
// TODO: Remove from `core-js@4`
__webpack_require__(181);

module.exports = parent;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(132);

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('asyncDispose');


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(132);

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('dispose');


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(132);

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol('observable');


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(132);

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('patternMatch');


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__(132);

defineWellKnownSymbol('replaceAll');


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(183);

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(152);

module.exports = parent;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(185);

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(186);

module.exports = parent;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var splice = __webpack_require__(187);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.splice;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.splice) ? splice : own;
};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(188);
var entryVirtual = __webpack_require__(85);

module.exports = entryVirtual('Array').splice;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var toAbsoluteIndex = __webpack_require__(66);
var toInteger = __webpack_require__(65);
var toLength = __webpack_require__(64);
var toObject = __webpack_require__(50);
var arraySpeciesCreate = __webpack_require__(82);
var createProperty = __webpack_require__(91);
var arrayMethodHasSpeciesSupport = __webpack_require__(92);

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

__webpack_require__(192);
var path = __webpack_require__(24);

module.exports = path.Array.isArray;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(6);
var isArray = __webpack_require__(83);

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


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
var entryVirtual = __webpack_require__(85);

module.exports = entryVirtual('Array').reduce;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var $reduce = __webpack_require__(198).left;
var arrayMethodIsStrict = __webpack_require__(84);
var CHROME_VERSION = __webpack_require__(55);
var IS_NODE = __webpack_require__(54);

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
var toObject = __webpack_require__(50);
var IndexedObject = __webpack_require__(15);
var toLength = __webpack_require__(64);

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
var objectKeys = __webpack_require__(61);
var getOwnPropertySymbolsModule = __webpack_require__(130);
var propertyIsEnumerableModule = __webpack_require__(12);
var toObject = __webpack_require__(50);
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



var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(95));

var _symbol = _interopRequireDefault(__webpack_require__(124));

var _iterator = _interopRequireDefault(__webpack_require__(150));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _now = _interopRequireDefault(__webpack_require__(153));

var _isArray = _interopRequireDefault(__webpack_require__(189));

var _forEach = _interopRequireDefault(__webpack_require__(30));

var _includes = _interopRequireDefault(__webpack_require__(163));

var _assign = _interopRequireDefault(__webpack_require__(199));

var _indexOf = _interopRequireDefault(__webpack_require__(205));

var _splice = _interopRequireDefault(__webpack_require__(184));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  try {
    function adopt(value) {
      try {
        return value instanceof P ? value : new P(function (resolve) {
          try {
            resolve(value);
          } catch (_e) {
            __reportError__(_e, "", "/thresh-lib/src/core/VNode.ts");

            throw _e;
          }
        });
      } catch (_e2) {
        __reportError__(_e2, "", "/thresh-lib/src/core/VNode.ts");

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
            __reportError__(_e3, "", "/thresh-lib/src/core/VNode.ts");

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
            __reportError__(_e4, "", "/thresh-lib/src/core/VNode.ts");

            throw _e4;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e5) {
            __reportError__(_e5, "", "/thresh-lib/src/core/VNode.ts");

            throw _e5;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e6) {
        __reportError__(_e6, "", "/thresh-lib/src/core/VNode.ts");

        throw _e6;
      }
    });
  } catch (_e7) {
    __reportError__(_e7, "", "/thresh-lib/src/core/VNode.ts");

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
          __reportError__(_e8, "sent", "/thresh-lib/src/core/VNode.ts");

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
        __reportError__(_e9, "", "/thresh-lib/src/core/VNode.ts");

        throw _e9;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e10) {
        __reportError__(_e10, "", "/thresh-lib/src/core/VNode.ts");

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
    __reportError__(_e11, "", "/thresh-lib/src/core/VNode.ts");

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
    __reportError__(_e12, "", "/thresh-lib/src/core/VNode.ts");

    throw _e12;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.LifeCycle = void 0;

var Util_1 = __webpack_require__(173);

var ThreshApp_1 = __webpack_require__(94);

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
        __reportError__(_e13, "VNode", "/thresh-lib/src/core/VNode.ts");

        throw _e13;
      }
    }

    VNode.getNodeId = function (type) {
      try {
        return type + "#" + ++VNode.nodeIdIndex;
      } catch (_e14) {
        __reportError__(_e14, "", "/thresh-lib/src/core/VNode.ts");

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
                  __reportError__(_e15, "", "/thresh-lib/src/core/VNode.ts");

                  throw _e15;
                }
              });
            }
          } catch (_e16) {
            __reportError__(_e16, "_loop_1", "/thresh-lib/src/core/VNode.ts");

            throw _e16;
          }
        };

        var this_1 = this;

        for (var key in this.props) {
          _loop_1(key);
        }
      } catch (_e17) {
        __reportError__(_e17, "", "/thresh-lib/src/core/VNode.ts");

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
            __reportError__(_e18, "", "/thresh-lib/src/core/VNode.ts");

            throw _e18;
          }
        });
      } catch (_e19) {
        __reportError__(_e19, "", "/thresh-lib/src/core/VNode.ts");

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
        __reportError__(_e20, "", "/thresh-lib/src/core/VNode.ts");

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
        __reportError__(_e21, "", "/thresh-lib/src/core/VNode.ts");

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
        __reportError__(_e22, "", "/thresh-lib/src/core/VNode.ts");

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
              __reportError__(_e23, "", "/thresh-lib/src/core/VNode.ts");

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
        __reportError__(_e24, "", "/thresh-lib/src/core/VNode.ts");

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
        __reportError__(_e25, "", "/thresh-lib/src/core/VNode.ts");

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
            __reportError__(_e26, "", "/thresh-lib/src/core/VNode.ts");

            throw _e26;
          }
        });
        return targetVNode;
      } catch (_e27) {
        __reportError__(_e27, "", "/thresh-lib/src/core/VNode.ts");

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
        __reportError__(_e28, "", "/thresh-lib/src/core/VNode.ts");

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
        __reportError__(_e29, "", "/thresh-lib/src/core/VNode.ts");

        throw _e29;
      }
    }; // 查找距离当前节点向下最近的原子节点


    VNode.prototype.fetchNearlyBasicNode = function () {
      try {
        if (this.isBasicWidget) return this;
        return this.children[0].fetchNearlyBasicNode();
      } catch (_e30) {
        __reportError__(_e30, "", "/thresh-lib/src/core/VNode.ts");

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
        __reportError__(_e31, "", "/thresh-lib/src/core/VNode.ts");

        throw _e31;
      }
    }; // 查找页面名


    VNode.prototype.fetchNodePageName = function () {
      try {
        if (this.pageName) return this.pageName;
        if (this.parent) return this.parent.fetchNodePageName();
        return '';
      } catch (_e32) {
        __reportError__(_e32, "", "/thresh-lib/src/core/VNode.ts");

        throw _e32;
      }
    }; // 毕竟两个节点的 type & key 是否相等


    VNode.prototype.isSameAs = function (otherNode) {
      try {
        return this.type === otherNode.type && this.key === otherNode.key;
      } catch (_e33) {
        __reportError__(_e33, "", "/thresh-lib/src/core/VNode.ts");

        throw _e33;
      }
    };

    VNode.prototype.isPageNode = function () {
      try {
        return this.isBasicWidget && this.type === 'Page';
      } catch (_e34) {
        __reportError__(_e34, "", "/thresh-lib/src/core/VNode.ts");

        throw _e34;
      }
    };

    VNode.prototype.isNativeViewNode = function () {
      try {
        return this.isBasicWidget && this.type === 'NativeView';
      } catch (_e35) {
        __reportError__(_e35, "", "/thresh-lib/src/core/VNode.ts");

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
        __reportError__(_e36, "", "/thresh-lib/src/core/VNode.ts");

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
            __reportError__(_e37, "", "/thresh-lib/src/core/VNode.ts");

            throw _e37;
          }
        });
      } catch (_e38) {
        __reportError__(_e38, "", "/thresh-lib/src/core/VNode.ts");

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
        __reportError__(_e39, "", "/thresh-lib/src/core/VNode.ts");

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
        __reportError__(_e40, "", "/thresh-lib/src/core/VNode.ts");

        throw _e40;
      }
    }; // 向 basicWidgetPropChildren 中的某个数组属性添加子节点


    VNode.prototype.appendChildInArrayProps = function (child, propName) {
      try {
        this.appendChild(child, this.getTargetChildrenArrayInPropChildren(propName));
      } catch (_e41) {
        __reportError__(_e41, "", "/thresh-lib/src/core/VNode.ts");

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
        __reportError__(_e42, "", "/thresh-lib/src/core/VNode.ts");

        throw _e42;
      }
    }; // 获取 basicWidgetPropChildren 中的某个数组属性


    VNode.prototype.getTargetChildrenArrayInPropChildren = function (propName) {
      try {
        if (!this.basicWidgetPropChildren[propName]) this.basicWidgetPropChildren[propName] = [];
        return this.basicWidgetPropChildren[propName];
      } catch (_e43) {
        __reportError__(_e43, "", "/thresh-lib/src/core/VNode.ts");

        throw _e43;
      }
    };

    VNode.nodeIdIndex = 0;
    VNode.asyncEventTypes = ['onRefresh', 'onLoadMore'];
    VNode.eventTypes = __spreadArrays(['onTap', 'onLongTap', 'onPan', 'onScroll', 'onChange', 'onLoad', 'onLayout', 'onFocus', 'onBlur', 'onActionsOpen', 'onActionsClose', 'onDragStatusChange', 'onDragPositionChange', 'onOpen', 'onSubmitted'], VNode.asyncEventTypes);
    VNode.throttledEventTypes = ['onTap'];
    return VNode;
  } catch (_e44) {
    __reportError__(_e44, "", "/thresh-lib/src/core/VNode.ts");

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
        __reportError__(_e45, "", "/thresh-lib/src/core/VNode.ts");

        throw _e45;
      }
    };

    LifeCycle.lifes = ['widgetDidMount', 'widgetDidUpdate', 'widgetDidUnmount'];
    LifeCycle.widgetDidMount = LifeCycle.lifes[0];
    LifeCycle.widgetDidUpdate = LifeCycle.lifes[1];
    LifeCycle.widgetDidUnmount = LifeCycle.lifes[2];
    return LifeCycle;
  } catch (_e46) {
    __reportError__(_e46, "", "/thresh-lib/src/core/VNode.ts");

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
var entryVirtual = __webpack_require__(85);

module.exports = entryVirtual('Array').indexOf;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var $indexOf = __webpack_require__(63).indexOf;
var arrayMethodIsStrict = __webpack_require__(84);

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



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _map = _interopRequireDefault(__webpack_require__(211));

var _indexOf = _interopRequireDefault(__webpack_require__(205));

var _splice = _interopRequireDefault(__webpack_require__(184));

var _includes = _interopRequireDefault(__webpack_require__(163));

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
        __reportError__(_e, "AppContainer", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e2, "", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e3, "", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e4, "", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e5, "", "/thresh-lib/src/core/AppContainer.ts");

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
          __reportError__(_e6, "get", "/thresh-lib/src/core/AppContainer.ts");

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
          __reportError__(_e7, "", "/thresh-lib/src/core/AppContainer.ts");

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
          __reportError__(_e8, "", "/thresh-lib/src/core/AppContainer.ts");

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
          __reportError__(_e9, "get", "/thresh-lib/src/core/AppContainer.ts");

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
          __reportError__(_e10, "", "/thresh-lib/src/core/AppContainer.ts");

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
          __reportError__(_e11, "get", "/thresh-lib/src/core/AppContainer.ts");

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
          __reportError__(_e12, "get", "/thresh-lib/src/core/AppContainer.ts");

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
          __reportError__(_e13, "get", "/thresh-lib/src/core/AppContainer.ts");

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
          __reportError__(_e14, "get", "/thresh-lib/src/core/AppContainer.ts");

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
          __reportError__(_e15, "get", "/thresh-lib/src/core/AppContainer.ts");

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
          __reportError__(_e16, "get", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e17, "", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e18, "", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e19, "", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e20, "", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e21, "", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e22, "", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e23, "", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e24, "", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e25, "", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e26, "", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e27, "", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e28, "", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e29, "", "/thresh-lib/src/core/AppContainer.ts");

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
        __reportError__(_e30, "", "/thresh-lib/src/core/AppContainer.ts");

        throw _e30;
      }
    };

    return AppContainer;
  } catch (_e31) {
    __reportError__(_e31, "", "/thresh-lib/src/core/AppContainer.ts");

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
__webpack_require__(103);
__webpack_require__(122);
__webpack_require__(32);
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
var iterate = __webpack_require__(99);
var anInstance = __webpack_require__(108);
var isObject = __webpack_require__(19);
var setToStringTag = __webpack_require__(69);
var defineProperty = __webpack_require__(28).f;
var forEach = __webpack_require__(81).forEach;
var DESCRIPTORS = __webpack_require__(10);
var InternalStateModule = __webpack_require__(36);

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

var hiddenKeys = __webpack_require__(45);
var isObject = __webpack_require__(19);
var has = __webpack_require__(20);
var defineProperty = __webpack_require__(28).f;
var uid = __webpack_require__(44);
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
var create = __webpack_require__(59);
var redefineAll = __webpack_require__(106);
var bind = __webpack_require__(25);
var anInstance = __webpack_require__(108);
var iterate = __webpack_require__(99);
var defineIterator = __webpack_require__(46);
var setSpecies = __webpack_require__(107);
var DESCRIPTORS = __webpack_require__(10);
var fastKey = __webpack_require__(216).fastKey;
var InternalStateModule = __webpack_require__(36);

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



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _map = _interopRequireDefault(__webpack_require__(211));

var _startsWith = _interopRequireDefault(__webpack_require__(220));

var _now = _interopRequireDefault(__webpack_require__(153));

var _indexOf = _interopRequireDefault(__webpack_require__(205));

var _includes = _interopRequireDefault(__webpack_require__(163));

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
        __reportError__(_e, "PageContainer", "/thresh-lib/src/core/PageContainer.ts");

        throw _e;
      }
    }

    PageContainer.pageIsModal = function (pageName) {
      try {
        return pageName && (0, _startsWith["default"])(pageName).call(pageName, exports.MODAL_TAG);
      } catch (_e2) {
        __reportError__(_e2, "", "/thresh-lib/src/core/PageContainer.ts");

        throw _e2;
      }
    };

    PageContainer.formatModalName = function (modalName) {
      try {
        return "" + exports.MODAL_TAG + (modalName || (0, _now["default"])().toString());
      } catch (_e3) {
        __reportError__(_e3, "", "/thresh-lib/src/core/PageContainer.ts");

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
          __reportError__(_e4, "", "/thresh-lib/src/core/PageContainer.ts");

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
          __reportError__(_e5, "", "/thresh-lib/src/core/PageContainer.ts");

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
          __reportError__(_e6, "get", "/thresh-lib/src/core/PageContainer.ts");

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
          __reportError__(_e7, "get", "/thresh-lib/src/core/PageContainer.ts");

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
          __reportError__(_e8, "get", "/thresh-lib/src/core/PageContainer.ts");

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
          __reportError__(_e9, "get", "/thresh-lib/src/core/PageContainer.ts");

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
          __reportError__(_e10, "get", "/thresh-lib/src/core/PageContainer.ts");

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
        __reportError__(_e11, "", "/thresh-lib/src/core/PageContainer.ts");

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
        __reportError__(_e12, "", "/thresh-lib/src/core/PageContainer.ts");

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
        __reportError__(_e13, "", "/thresh-lib/src/core/PageContainer.ts");

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
        __reportError__(_e14, "", "/thresh-lib/src/core/PageContainer.ts");

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
        __reportError__(_e15, "", "/thresh-lib/src/core/PageContainer.ts");

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
        __reportError__(_e16, "", "/thresh-lib/src/core/PageContainer.ts");

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
        __reportError__(_e17, "", "/thresh-lib/src/core/PageContainer.ts");

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
        __reportError__(_e18, "", "/thresh-lib/src/core/PageContainer.ts");

        throw _e18;
      }
    };

    return PageContainer;
  } catch (_e19) {
    __reportError__(_e19, "", "/thresh-lib/src/core/PageContainer.ts");

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
var entryVirtual = __webpack_require__(85);

module.exports = entryVirtual('String').startsWith;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var getOwnPropertyDescriptor = __webpack_require__(9).f;
var toLength = __webpack_require__(64);
var notARegExp = __webpack_require__(170);
var requireObjectCoercible = __webpack_require__(17);
var correctIsRegExpLogic = __webpack_require__(172);
var IS_PURE = __webpack_require__(43);

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



var _interopRequireDefault = __webpack_require__(1);

var _assign = _interopRequireDefault(__webpack_require__(199));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
        __reportError__(_e, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

        throw _e;
      }
    };

    return __assign.apply(this, arguments);
  } catch (_e2) {
    __reportError__(_e2, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

    throw _e2;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.DevtoolsManager = exports.SHOW_DIVIDER_KEY = exports.InfoType = void 0;

var MethodChannel_1 = __webpack_require__(157);

var BridgeManager_1 = __webpack_require__(162);

var Util_1 = __webpack_require__(173);

var ThreshApp_1 = __webpack_require__(94);

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
    __reportError__(_e3, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

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
        __reportError__(_e4, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

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
        __reportError__(_e5, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

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
        __reportError__(_e6, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

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
        __reportError__(_e7, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

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
        __reportError__(_e8, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

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
        __reportError__(_e9, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

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
        __reportError__(_e10, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

        throw _e10;
      }
    };

    return DevtoolsManager;
  } catch (_e11) {
    __reportError__(_e11, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

    throw _e11;
  }
}();

exports.DevtoolsManager = DevtoolsManager;
var devtools = new DevtoolsManager();
exports["default"] = devtools;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _map = _interopRequireDefault(__webpack_require__(227));

var _indexOf = _interopRequireDefault(__webpack_require__(205));

var _splice = _interopRequireDefault(__webpack_require__(184));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var Util_1 = __webpack_require__(173);
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
        __reportError__(_e, "Bus", "/thresh-lib/src/shared/bus.ts");

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
        __reportError__(_e2, "", "/thresh-lib/src/shared/bus.ts");

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
            __reportError__(_e3, "", "/thresh-lib/src/shared/bus.ts");

            throw _e3;
          }
        });
      } catch (_e4) {
        __reportError__(_e4, "", "/thresh-lib/src/shared/bus.ts");

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
        __reportError__(_e5, "", "/thresh-lib/src/shared/bus.ts");

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
        __reportError__(_e6, "", "/thresh-lib/src/shared/bus.ts");

        throw _e6;
      }
    };

    Bus.prototype.clear = function () {
      try {
        this._busId = 0;
        this._pool = {};
      } catch (_e7) {
        __reportError__(_e7, "", "/thresh-lib/src/shared/bus.ts");

        throw _e7;
      }
    };

    return Bus;
  } catch (_e8) {
    __reportError__(_e8, "", "/thresh-lib/src/shared/bus.ts");

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
var entryVirtual = __webpack_require__(85);

module.exports = entryVirtual('Array').map;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var $map = __webpack_require__(81).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(92);

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



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _now = _interopRequireDefault(__webpack_require__(153));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.methodChannel_timer_fire = void 0;

var Util_1 = __webpack_require__(173);

var bus_1 = __webpack_require__(226); // 定时器类型


var TimerType;

(function (TimerType) {
  try {
    TimerType[TimerType["timeout"] = 0] = "timeout";
    TimerType[TimerType["interval"] = 1] = "interval";
  } catch (_e) {
    __reportError__(_e, "", "/thresh-lib/src/manager/TimerManager.ts");

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
        __reportError__(_e2, "", "/thresh-lib/src/manager/TimerManager.ts");

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
        __reportError__(_e3, "", "/thresh-lib/src/manager/TimerManager.ts");

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
        __reportError__(_e4, "", "/thresh-lib/src/manager/TimerManager.ts");

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
        __reportError__(_e5, "", "/thresh-lib/src/manager/TimerManager.ts");

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
            __reportError__(_e6, "", "/thresh-lib/src/manager/TimerManager.ts");

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
        __reportError__(_e7, "", "/thresh-lib/src/manager/TimerManager.ts");

        throw _e7;
      }
    };

    (0, _defineProperty["default"])(TimerManager, "timerId", {
      get: function get() {
        try {
          return "timer_" + Math.random().toString(16).replace('0', (0, _now["default"])().toString());
        } catch (_e8) {
          __reportError__(_e8, "", "/thresh-lib/src/manager/TimerManager.ts");

          throw _e8;
        }
      },
      enumerable: false,
      configurable: true
    });
    return TimerManager;
  } catch (_e9) {
    __reportError__(_e9, "", "/thresh-lib/src/manager/TimerManager.ts");

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
    __reportError__(_e10, "methodChannel_timer_fire", "/thresh-lib/src/manager/TimerManager.ts");

    throw _e10;
  }
}

exports.methodChannel_timer_fire = methodChannel_timer_fire;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(95));

var _symbol = _interopRequireDefault(__webpack_require__(124));

var _iterator = _interopRequireDefault(__webpack_require__(150));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _includes = _interopRequireDefault(__webpack_require__(163));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  try {
    function adopt(value) {
      try {
        return value instanceof P ? value : new P(function (resolve) {
          try {
            resolve(value);
          } catch (_e) {
            __reportError__(_e, "", "/thresh-lib/src/manager/UtilManager.ts");

            throw _e;
          }
        });
      } catch (_e2) {
        __reportError__(_e2, "", "/thresh-lib/src/manager/UtilManager.ts");

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
            __reportError__(_e3, "", "/thresh-lib/src/manager/UtilManager.ts");

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
            __reportError__(_e4, "", "/thresh-lib/src/manager/UtilManager.ts");

            throw _e4;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e5) {
            __reportError__(_e5, "", "/thresh-lib/src/manager/UtilManager.ts");

            throw _e5;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e6) {
        __reportError__(_e6, "", "/thresh-lib/src/manager/UtilManager.ts");

        throw _e6;
      }
    });
  } catch (_e7) {
    __reportError__(_e7, "", "/thresh-lib/src/manager/UtilManager.ts");

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
          __reportError__(_e8, "sent", "/thresh-lib/src/manager/UtilManager.ts");

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
        __reportError__(_e9, "", "/thresh-lib/src/manager/UtilManager.ts");

        throw _e9;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e10) {
        __reportError__(_e10, "", "/thresh-lib/src/manager/UtilManager.ts");

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
    __reportError__(_e11, "", "/thresh-lib/src/manager/UtilManager.ts");

    throw _e11;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var MethodChannel_1 = __webpack_require__(157);

var BridgeManager_1 = __webpack_require__(162);

var Util_1 = __webpack_require__(173);

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
        __reportError__(_e12, "", "/thresh-lib/src/manager/UtilManager.ts");

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
        __reportError__(_e13, "", "/thresh-lib/src/manager/UtilManager.ts");

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
        __reportError__(_e14, "", "/thresh-lib/src/manager/UtilManager.ts");

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
        __reportError__(_e15, "", "/thresh-lib/src/manager/UtilManager.ts");

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
        __reportError__(_e16, "", "/thresh-lib/src/manager/UtilManager.ts");

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
        __reportError__(_e17, "", "/thresh-lib/src/manager/UtilManager.ts");

        throw _e17;
      }
    };

    return UtilManager;
  } catch (_e18) {
    __reportError__(_e18, "", "/thresh-lib/src/manager/UtilManager.ts");

    throw _e18;
  }
}();

exports["default"] = UtilManager;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(95));

var _symbol = _interopRequireDefault(__webpack_require__(124));

var _iterator = _interopRequireDefault(__webpack_require__(150));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _from = _interopRequireDefault(__webpack_require__(235));

var _keys = _interopRequireDefault(__webpack_require__(241));

var _now = _interopRequireDefault(__webpack_require__(153));

var _stringify = _interopRequireDefault(__webpack_require__(158));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  try {
    function adopt(value) {
      try {
        return value instanceof P ? value : new P(function (resolve) {
          try {
            resolve(value);
          } catch (_e) {
            __reportError__(_e, "", "/thresh-lib/src/manager/RenderManager.ts");

            throw _e;
          }
        });
      } catch (_e2) {
        __reportError__(_e2, "", "/thresh-lib/src/manager/RenderManager.ts");

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
            __reportError__(_e3, "", "/thresh-lib/src/manager/RenderManager.ts");

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
            __reportError__(_e4, "", "/thresh-lib/src/manager/RenderManager.ts");

            throw _e4;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e5) {
            __reportError__(_e5, "", "/thresh-lib/src/manager/RenderManager.ts");

            throw _e5;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e6) {
        __reportError__(_e6, "", "/thresh-lib/src/manager/RenderManager.ts");

        throw _e6;
      }
    });
  } catch (_e7) {
    __reportError__(_e7, "", "/thresh-lib/src/manager/RenderManager.ts");

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
          __reportError__(_e8, "sent", "/thresh-lib/src/manager/RenderManager.ts");

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
        __reportError__(_e9, "", "/thresh-lib/src/manager/RenderManager.ts");

        throw _e9;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e10) {
        __reportError__(_e10, "", "/thresh-lib/src/manager/RenderManager.ts");

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
    __reportError__(_e11, "", "/thresh-lib/src/manager/RenderManager.ts");

    throw _e11;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var MethodChannel_1 = __webpack_require__(157);

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
          __reportError__(_e12, "get", "/thresh-lib/src/manager/RenderManager.ts");

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
        __reportError__(_e13, "", "/thresh-lib/src/manager/RenderManager.ts");

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
            __reportError__(_e14, "", "/thresh-lib/src/manager/RenderManager.ts");

            throw _e14;
          }
        }, pageOnShowEventName);
      } catch (_e15) {
        __reportError__(_e15, "", "/thresh-lib/src/manager/RenderManager.ts");

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
                          __reportError__(_e16, "", "/thresh-lib/src/manager/RenderManager.ts");

                          throw _e16;
                        }
                      }, showName);
                    } catch (_e17) {
                      __reportError__(_e17, "", "/thresh-lib/src/manager/RenderManager.ts");

                      throw _e17;
                    }
                  };

                  return [2
                  /*return*/
                  , new _promise["default"](function (resolve) {
                    try {
                      popPageCallback_1(resolve);
                    } catch (_e18) {
                      __reportError__(_e18, "", "/thresh-lib/src/manager/RenderManager.ts");

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
            __reportError__(_e19, "", "/thresh-lib/src/manager/RenderManager.ts");

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
        __reportError__(_e20, "", "/thresh-lib/src/manager/RenderManager.ts");

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
        __reportError__(_e21, "", "/thresh-lib/src/manager/RenderManager.ts");

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
        __reportError__(_e22, "", "/thresh-lib/src/manager/RenderManager.ts");

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
        __reportError__(_e23, "", "/thresh-lib/src/manager/RenderManager.ts");

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
        __reportError__(_e24, "", "/thresh-lib/src/manager/RenderManager.ts");

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
        __reportError__(_e25, "", "/thresh-lib/src/manager/RenderManager.ts");

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
        __reportError__(_e26, "", "/thresh-lib/src/manager/RenderManager.ts");

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
        __reportError__(_e27, "", "/thresh-lib/src/manager/RenderManager.ts");

        throw _e27;
      }
    };

    return RenderManager;
  } catch (_e28) {
    __reportError__(_e28, "", "/thresh-lib/src/manager/RenderManager.ts");

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

__webpack_require__(122);
__webpack_require__(238);
var path = __webpack_require__(24);

module.exports = path.Array.from;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(6);
var from = __webpack_require__(239);
var checkCorrectnessOfIteration = __webpack_require__(109);

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
var toObject = __webpack_require__(50);
var callWithSafeIterationClosing = __webpack_require__(240);
var isArrayIteratorMethod = __webpack_require__(100);
var toLength = __webpack_require__(64);
var createProperty = __webpack_require__(91);
var getIteratorMethod = __webpack_require__(101);

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
var iteratorClose = __webpack_require__(102);

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

__webpack_require__(32);
var keys = __webpack_require__(243);
var classof = __webpack_require__(72);
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

__webpack_require__(33);
var entryVirtual = __webpack_require__(85);

module.exports = entryVirtual('Array').keys;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(95));

var _symbol = _interopRequireDefault(__webpack_require__(124));

var _iterator = _interopRequireDefault(__webpack_require__(150));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _stringify = _interopRequireDefault(__webpack_require__(158));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  try {
    function adopt(value) {
      try {
        return value instanceof P ? value : new P(function (resolve) {
          try {
            resolve(value);
          } catch (_e) {
            __reportError__(_e, "", "/thresh-lib/src/channel/dispatchMethod.ts");

            throw _e;
          }
        });
      } catch (_e2) {
        __reportError__(_e2, "", "/thresh-lib/src/channel/dispatchMethod.ts");

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
            __reportError__(_e3, "", "/thresh-lib/src/channel/dispatchMethod.ts");

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
            __reportError__(_e4, "", "/thresh-lib/src/channel/dispatchMethod.ts");

            throw _e4;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e5) {
            __reportError__(_e5, "", "/thresh-lib/src/channel/dispatchMethod.ts");

            throw _e5;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e6) {
        __reportError__(_e6, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e6;
      }
    });
  } catch (_e7) {
    __reportError__(_e7, "", "/thresh-lib/src/channel/dispatchMethod.ts");

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
          __reportError__(_e8, "sent", "/thresh-lib/src/channel/dispatchMethod.ts");

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
        __reportError__(_e9, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e9;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e10) {
        __reportError__(_e10, "", "/thresh-lib/src/channel/dispatchMethod.ts");

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
    __reportError__(_e11, "", "/thresh-lib/src/channel/dispatchMethod.ts");

    throw _e11;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.nativeCallJs = exports.flutterCallJs = exports.Dispatcher = void 0;

var __1 = __webpack_require__(93);

var MethodChannel_1 = __webpack_require__(157);

var VNode_1 = __webpack_require__(204);

var AppContainer_1 = __webpack_require__(210);

var UIManager_1 = __webpack_require__(246);

var RenderManager_1 = __webpack_require__(234);

var UtilManager_1 = __webpack_require__(233);

var BridgeManager_1 = __webpack_require__(162);

var bus_1 = __webpack_require__(226);

var Util_1 = __webpack_require__(173);

var basicWidget_1 = __webpack_require__(247);

var DispatcherFromType;

(function (DispatcherFromType) {
  try {
    DispatcherFromType[DispatcherFromType["Flutter"] = 0] = "Flutter";
    DispatcherFromType[DispatcherFromType["Native"] = 1] = "Native";
  } catch (_e12) {
    __reportError__(_e12, "", "/thresh-lib/src/channel/dispatchMethod.ts");

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
        __reportError__(_e13, "", "/thresh-lib/src/channel/dispatchMethod.ts");

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
                bundleDir = '/Users/xuweishun/Documents/YMM/thresh/example/js/dist';
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
                    bizName: 'thresh-demo'
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
            __reportError__(_e14, "", "/thresh-lib/src/channel/dispatchMethod.ts");

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
        __reportError__(_e15, "", "/thresh-lib/src/channel/dispatchMethod.ts");

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
        __reportError__(_e16, "", "/thresh-lib/src/channel/dispatchMethod.ts");

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
        __reportError__(_e17, "", "/thresh-lib/src/channel/dispatchMethod.ts");

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
        __reportError__(_e18, "", "/thresh-lib/src/channel/dispatchMethod.ts");

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
        __reportError__(_e19, "", "/thresh-lib/src/channel/dispatchMethod.ts");

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
        __reportError__(_e20, "", "/thresh-lib/src/channel/dispatchMethod.ts");

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
        __reportError__(_e21, "", "/thresh-lib/src/channel/dispatchMethod.ts");

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
        __reportError__(_e22, "", "/thresh-lib/src/channel/dispatchMethod.ts");

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
        __reportError__(_e23, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e23;
      }
    };

    return Dispatcher;
  } catch (_e24) {
    __reportError__(_e24, "", "/thresh-lib/src/channel/dispatchMethod.ts");

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
    __reportError__(_e25, "", "/thresh-lib/src/channel/dispatchMethod.ts");

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
    __reportError__(_e26, "", "/thresh-lib/src/channel/dispatchMethod.ts");

    throw _e26;
  }
}

exports.nativeCallJs = methodChannel_native_call_js;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.mediaQuery = void 0;

var MethodChannel_1 = __webpack_require__(157);

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
        __reportError__(_e, "", "/thresh-lib/src/manager/UIManager.ts");

        throw _e;
      }
    };

    (0, _defineProperty["default"])(UIManager, "screenWidth", {
      get: function get() {
        try {
          return exports.mediaQuery.screenWidth;
        } catch (_e2) {
          __reportError__(_e2, "", "/thresh-lib/src/manager/UIManager.ts");

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
          __reportError__(_e3, "", "/thresh-lib/src/manager/UIManager.ts");

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
          __reportError__(_e4, "", "/thresh-lib/src/manager/UIManager.ts");

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
          __reportError__(_e5, "", "/thresh-lib/src/manager/UIManager.ts");

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
          __reportError__(_e6, "", "/thresh-lib/src/manager/UIManager.ts");

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
          __reportError__(_e7, "", "/thresh-lib/src/manager/UIManager.ts");

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
        __reportError__(_e8, "", "/thresh-lib/src/manager/UIManager.ts");

        throw _e8;
      }
    };

    UIManager.setDesignInfo = function (width, height) {
      try {
        exports.mediaQuery.setDesignInfo(width, height);
      } catch (_e9) {
        __reportError__(_e9, "", "/thresh-lib/src/manager/UIManager.ts");

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
        __reportError__(_e10, "", "/thresh-lib/src/manager/UIManager.ts");

        throw _e10;
      }
    };

    return UIManager;
  } catch (_e11) {
    __reportError__(_e11, "", "/thresh-lib/src/manager/UIManager.ts");

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
        __reportError__(_e12, "MediaQuery", "/thresh-lib/src/manager/UIManager.ts");

        throw _e12;
      }
    }

    (0, _defineProperty["default"])(MediaQuery.prototype, "screenWidth", {
      get: function get() {
        try {
          return this._screenWidth;
        } catch (_e13) {
          __reportError__(_e13, "", "/thresh-lib/src/manager/UIManager.ts");

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
          __reportError__(_e14, "", "/thresh-lib/src/manager/UIManager.ts");

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
          __reportError__(_e15, "", "/thresh-lib/src/manager/UIManager.ts");

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
          __reportError__(_e16, "", "/thresh-lib/src/manager/UIManager.ts");

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
          __reportError__(_e17, "", "/thresh-lib/src/manager/UIManager.ts");

          throw _e17;
        }
      },
      set: function set(height) {
        try {
          this._appBarHeight = height || APP_BAR_DEFAULT_HEIGHT;
        } catch (_e18) {
          __reportError__(_e18, "", "/thresh-lib/src/manager/UIManager.ts");

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
          __reportError__(_e19, "", "/thresh-lib/src/manager/UIManager.ts");

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
        __reportError__(_e20, "", "/thresh-lib/src/manager/UIManager.ts");

        throw _e20;
      }
    };

    MediaQuery.prototype.setDesignInfo = function (designWidth, designHeight) {
      try {
        if (designWidth) this._designWidth = designWidth;
        if (designHeight) this._designHeight = designWidth;
        this.setScaleInfo();
      } catch (_e21) {
        __reportError__(_e21, "", "/thresh-lib/src/manager/UIManager.ts");

        throw _e21;
      }
    };

    MediaQuery.prototype.setScaleInfo = function () {
      try {
        this._scaleWidth = this._screenWidth / this._designWidth;
        this._designHeight = this._screenHeight / this._designHeight;
      } catch (_e22) {
        __reportError__(_e22, "", "/thresh-lib/src/manager/UIManager.ts");

        throw _e22;
      }
    };

    MediaQuery.prototype.computeRealWidth = function (width) {
      try {
        return Math.floor(width * this._scaleWidth);
      } catch (_e23) {
        __reportError__(_e23, "", "/thresh-lib/src/manager/UIManager.ts");

        throw _e23;
      }
    };

    MediaQuery.prototype.computedRealHeight = function (height) {
      try {
        return Math.floor(height * this._scaleHeight);
      } catch (_e24) {
        __reportError__(_e24, "", "/thresh-lib/src/manager/UIManager.ts");

        throw _e24;
      }
    };

    return MediaQuery;
  } catch (_e25) {
    __reportError__(_e25, "", "/thresh-lib/src/manager/UIManager.ts");

    throw _e25;
  }
}();

exports.mediaQuery = new MediaQuery();

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _assign = _interopRequireDefault(__webpack_require__(199));

var _promise = _interopRequireDefault(__webpack_require__(95));

var _symbol = _interopRequireDefault(__webpack_require__(124));

var _iterator = _interopRequireDefault(__webpack_require__(150));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/thresh-lib/src/core/basicWidget.ts");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/thresh-lib/src/core/basicWidget.ts");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/thresh-lib/src/core/basicWidget.ts");

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
            __reportError__(_e4, "", "/thresh-lib/src/core/basicWidget.ts");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e7, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e7;
      }
    };

    return __assign.apply(this, arguments);
  } catch (_e8) {
    __reportError__(_e8, "", "/thresh-lib/src/core/basicWidget.ts");

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
            __reportError__(_e9, "", "/thresh-lib/src/core/basicWidget.ts");

            throw _e9;
          }
        });
      } catch (_e10) {
        __reportError__(_e10, "", "/thresh-lib/src/core/basicWidget.ts");

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
            __reportError__(_e11, "", "/thresh-lib/src/core/basicWidget.ts");

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
            __reportError__(_e12, "", "/thresh-lib/src/core/basicWidget.ts");

            throw _e12;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e13) {
            __reportError__(_e13, "", "/thresh-lib/src/core/basicWidget.ts");

            throw _e13;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e14) {
        __reportError__(_e14, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e14;
      }
    });
  } catch (_e15) {
    __reportError__(_e15, "", "/thresh-lib/src/core/basicWidget.ts");

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
          __reportError__(_e16, "sent", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e17, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e17;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e18) {
        __reportError__(_e18, "", "/thresh-lib/src/core/basicWidget.ts");

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
    __reportError__(_e19, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e19;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.Picker = exports.Input = exports.Checkbox = exports.Switch = exports.Radio = exports.Button = exports.NoticeBar = exports.Refresh = exports.Spin = exports.Text = exports.QrImage = exports.Image = exports.Icon = exports.NativeView = exports.SwiperView = exports.SwipeActionsView = exports.DragableScrollView = exports.DrawerScrollView = exports.NestScrollView = exports.ListView = exports.ScrollView = exports.Container = exports.AppBar = exports.Page = void 0;

var Widget_1 = __webpack_require__(256);

var AppContainer_1 = __webpack_require__(210);

var ChildrenRule_1 = __webpack_require__(271);

var MethodChannel_1 = __webpack_require__(157);

var Util_1 = __webpack_require__(173);
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
        __reportError__(_e20, "", "/thresh-lib/src/core/basicWidget.ts");

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
            __reportError__(_e21, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e22, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e22;
      }
    };

    Page.invokePageOnHide = function (contextId) {
      try {
        var pageNode = this.getPageWithContextId(contextId);
        if (!pageNode) return;
        pageNode.props.onHide && pageNode.props.onHide();
      } catch (_e23) {
        __reportError__(_e23, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e24, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e24;
      }
    };

    return Page;
  } catch (_e25) {
    __reportError__(_e25, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e26, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e27, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e27;
      }
    };

    return AppBar;
  } catch (_e28) {
    __reportError__(_e28, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e29, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e29;
      }
    }

    return Container;
  } catch (_e30) {
    __reportError__(_e30, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e31, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e32, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e32;
      }
    };

    return ScrollView;
  } catch (_e33) {
    __reportError__(_e33, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e34, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e35, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e35;
      }
    };

    ListView.prototype.stopAsyncOperate = function (type) {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.stopAsyncOperate, {
          type: type
        });
      } catch (_e36) {
        __reportError__(_e36, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e36;
      }
    };

    return ListView;
  } catch (_e37) {
    __reportError__(_e37, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e38, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e39, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e39;
      }
    }; // 关闭ScrollView（下滑）


    NestScrollView.prototype.close = function () {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.setNestScrollViewStatus, {
          isOpened: false
        });
      } catch (_e40) {
        __reportError__(_e40, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e40;
      }
    };

    return NestScrollView;
  } catch (_e41) {
    __reportError__(_e41, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e42, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e42;
      }
    }

    return DrawerScrollView;
  } catch (_e43) {
    __reportError__(_e43, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e44, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e45, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e45;
      }
    };

    DragableScrollView.prototype.dragPositionAnimateTo = function (positionType) {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.dragPositionAnimateTo, {
          positionType: positionType
        });
      } catch (_e46) {
        __reportError__(_e46, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e46;
      }
    };

    return DragableScrollView;
  } catch (_e47) {
    __reportError__(_e47, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e48, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e48;
      }
    }

    SwipeActionsView.prototype.openActions = function () {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.openActions, {});
      } catch (_e49) {
        __reportError__(_e49, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e49;
      }
    };

    SwipeActionsView.prototype.closeActions = function () {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.closeActions, {});
      } catch (_e50) {
        __reportError__(_e50, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e50;
      }
    };

    return SwipeActionsView;
  } catch (_e51) {
    __reportError__(_e51, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e52, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e53, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e53;
      }
    };

    return SwiperView;
  } catch (_e54) {
    __reportError__(_e54, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e55, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e56, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e57, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e58, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e58;
      }
    };

    return NativeView;
  } catch (_e59) {
    __reportError__(_e59, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e60, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e60;
      }
    }

    return Icon;
  } catch (_e61) {
    __reportError__(_e61, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e62, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e62;
      }
    }

    return Image;
  } catch (_e63) {
    __reportError__(_e63, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e64, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e64;
      }
    }

    return QrImage;
  } catch (_e65) {
    __reportError__(_e65, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e66, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e66;
      }
    }

    return Text;
  } catch (_e67) {
    __reportError__(_e67, "", "/thresh-lib/src/core/basicWidget.ts");

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
          __reportError__(_e68, "", "/thresh-lib/src/core/basicWidget.ts");

          throw _e68;
        }
      }).join('');
    } catch (_e69) {
      __reportError__(_e69, "", "/thresh-lib/src/core/basicWidget.ts");

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
        __reportError__(_e70, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e70;
      }
    }

    return Spin;
  } catch (_e71) {
    __reportError__(_e71, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e71;
  }
}(Widget_1.BasicWidget);

exports.Spin = Spin;
Spin.childrenRule = new ChildrenRule_1["default"]({
  widgetName: 'Spin',
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
      } catch (_e72) {
        __reportError__(_e72, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e72;
      }
    }

    return Refresh;
  } catch (_e73) {
    __reportError__(_e73, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e73;
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
      } catch (_e74) {
        __reportError__(_e74, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e74;
      }
    }

    return NoticeBar;
  } catch (_e75) {
    __reportError__(_e75, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e75;
  }
}(Widget_1.BasicWidget);

exports.NoticeBar = NoticeBar;
NoticeBar.childrenRule = new ChildrenRule_1["default"]({
  widgetName: 'NoticeBar'
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
      } catch (_e76) {
        __reportError__(_e76, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e76;
      }
    }

    return Button;
  } catch (_e77) {
    __reportError__(_e77, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e77;
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
      } catch (_e78) {
        __reportError__(_e78, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e78;
      }
    }

    return Radio;
  } catch (_e79) {
    __reportError__(_e79, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e79;
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
      } catch (_e80) {
        __reportError__(_e80, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e80;
      }
    }

    return Switch;
  } catch (_e81) {
    __reportError__(_e81, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e81;
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
      } catch (_e82) {
        __reportError__(_e82, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e82;
      }
    }

    return Checkbox;
  } catch (_e83) {
    __reportError__(_e83, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e83;
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
      } catch (_e84) {
        __reportError__(_e84, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e84;
      }
    }

    Input.prototype.setValue = function (value) {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.setValue, {
          value: value
        });
      } catch (_e85) {
        __reportError__(_e85, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e85;
      }
    };

    return Input;
  } catch (_e86) {
    __reportError__(_e86, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e86;
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
  } catch (_e87) {
    __reportError__(_e87, "__setNavProps", "/thresh-lib/src/core/basicWidget.ts");

    throw _e87;
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
      } catch (_e88) {
        __reportError__(_e88, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e88;
      }
    } // 跳转到指定位置


    Picker.prototype.jumpTo = function (index) {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.jumpTo, {
          index: index
        });
      } catch (_e89) {
        __reportError__(_e89, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e89;
      }
    }; // 滚动到指定位置


    Picker.prototype.animateTo = function (index, duration) {
      try {
        __setNavProps(this, MethodChannel_1.FlutterMethodChannelType.animateTo, {
          index: index,
          duration: duration
        });
      } catch (_e90) {
        __reportError__(_e90, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e90;
      }
    };

    return Picker;
  } catch (_e91) {
    __reportError__(_e91, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e91;
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
var setPrototypeOf = __webpack_require__(73);

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
var create = __webpack_require__(59);

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/thresh-lib/src/core/Widget.ts");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/thresh-lib/src/core/Widget.ts");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/thresh-lib/src/core/Widget.ts");

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
            __reportError__(_e4, "", "/thresh-lib/src/core/Widget.ts");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/thresh-lib/src/core/Widget.ts");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/thresh-lib/src/core/Widget.ts");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.BasicWidget = void 0;

var __1 = __webpack_require__(93);

var scheduleUpdate_1 = __webpack_require__(257);

var Util_1 = __webpack_require__(173);
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
    __reportError__(_e7, "checkObjectValid", "/thresh-lib/src/core/Widget.ts");

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
        __reportError__(_e8, "", "/thresh-lib/src/core/Widget.ts");

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
        __reportError__(_e9, "", "/thresh-lib/src/core/Widget.ts");

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
        __reportError__(_e10, "", "/thresh-lib/src/core/Widget.ts");

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
    __reportError__(_e11, "", "/thresh-lib/src/core/Widget.ts");

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
        __reportError__(_e12, "", "/thresh-lib/src/core/Widget.ts");

        throw _e12;
      }
    }

    BasicWidget.prototype.setState = function () {
      try {
        __1["default"].onError(new Error("basic widget cannot call setState()"));
      } catch (_e13) {
        __reportError__(_e13, "", "/thresh-lib/src/core/Widget.ts");

        throw _e13;
      }
    };

    BasicWidget.isBasicWidget = true;
    return BasicWidget;
  } catch (_e14) {
    __reportError__(_e14, "", "/thresh-lib/src/core/Widget.ts");

    throw _e14;
  }
}(Widget);

exports.BasicWidget = BasicWidget;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _includes = _interopRequireDefault(__webpack_require__(163));

var _filter = _interopRequireDefault(__webpack_require__(258));

var _now = _interopRequireDefault(__webpack_require__(153));

var _forEach = _interopRequireDefault(__webpack_require__(30));

var _keys = _interopRequireDefault(__webpack_require__(263));

var _from = _interopRequireDefault(__webpack_require__(235));

var _set = _interopRequireDefault(__webpack_require__(267));

var _isArray = _interopRequireDefault(__webpack_require__(189));

var _splice = _interopRequireDefault(__webpack_require__(184));

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
    __reportError__(_e, "", "/thresh-lib/src/core/scheduleUpdate.ts");

    throw _e;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var VNode_1 = __webpack_require__(204);

var RenderManager_1 = __webpack_require__(234);

var Util_1 = __webpack_require__(173);

var TimerManager_1 = __webpack_require__(232); // 更新队列


var UpdateQueue =
/** @class */
function () {
  try {
    function UpdateQueue() {
      try {
        this.queue = [];
      } catch (_e2) {
        __reportError__(_e2, "", "/thresh-lib/src/core/scheduleUpdate.ts");

        throw _e2;
      }
    }

    (0, _defineProperty["default"])(UpdateQueue.prototype, "isEmpty", {
      get: function get() {
        try {
          return !this.queue.length;
        } catch (_e3) {
          __reportError__(_e3, "", "/thresh-lib/src/core/scheduleUpdate.ts");

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
        __reportError__(_e4, "", "/thresh-lib/src/core/scheduleUpdate.ts");

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
        __reportError__(_e5, "", "/thresh-lib/src/core/scheduleUpdate.ts");

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
            __reportError__(_e6, "", "/thresh-lib/src/core/scheduleUpdate.ts");

            throw _e6;
          }
        });
        this.reset();
        return uniqued;
      } catch (_e7) {
        __reportError__(_e7, "", "/thresh-lib/src/core/scheduleUpdate.ts");

        throw _e7;
      }
    };

    UpdateQueue.lastPrecommitTime = (0, _now["default"])();
    UpdateQueue.commitPendingTime = 16;
    return UpdateQueue;
  } catch (_e8) {
    __reportError__(_e8, "", "/thresh-lib/src/core/scheduleUpdate.ts");

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
          __reportError__(_e9, "", "/thresh-lib/src/core/scheduleUpdate.ts");

          throw _e9;
        }
      }, UpdateQueue.commitPendingTime);
    }

    pendingUpdateQueue.add(vNode);
  } catch (_e10) {
    __reportError__(_e10, "scheduleUpdate", "/thresh-lib/src/core/scheduleUpdate.ts");

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
        __reportError__(_e11, "", "/thresh-lib/src/core/scheduleUpdate.ts");

        throw _e11;
      }
    });
    commitUpdate();
  } catch (_e12) {
    __reportError__(_e12, "prepareCommit", "/thresh-lib/src/core/scheduleUpdate.ts");

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
        __reportError__(_e13, "", "/thresh-lib/src/core/scheduleUpdate.ts");

        throw _e13;
      }
    });
  } catch (_e14) {
    __reportError__(_e14, "commitUpdate", "/thresh-lib/src/core/scheduleUpdate.ts");

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
    __reportError__(_e15, "compareAndMergeNode", "/thresh-lib/src/core/scheduleUpdate.ts");

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
    __reportError__(_e16, "compareNodeArray", "/thresh-lib/src/core/scheduleUpdate.ts");

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
    __reportError__(_e17, "", "/thresh-lib/src/core/scheduleUpdate.ts");

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
var entryVirtual = __webpack_require__(85);

module.exports = entryVirtual('Array').filter;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var $filter = __webpack_require__(81).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(92);

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
var toObject = __webpack_require__(50);
var nativeKeys = __webpack_require__(61);
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
__webpack_require__(103);
__webpack_require__(122);
__webpack_require__(32);
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



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _isArray = _interopRequireDefault(__webpack_require__(189));

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
        __reportError__(_e, "ChildrenRule", "/thresh-lib/src/core/ChildrenRule.ts");

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
        __reportError__(_e2, "", "/thresh-lib/src/core/ChildrenRule.ts");

        throw _e2;
      }
    };

    return ChildrenRule;
  } catch (_e3) {
    __reportError__(_e3, "", "/thresh-lib/src/core/ChildrenRule.ts");

    throw _e3;
  }
}();

exports["default"] = ChildrenRule;

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _filter = _interopRequireDefault(__webpack_require__(258));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var Util_1 = __webpack_require__(173);

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
          __reportError__(_e, "", "/thresh-lib/src/core/createElement.ts");

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
    __reportError__(_e2, "createElement", "/thresh-lib/src/core/createElement.ts");

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
    __reportError__(_e3, "getWidgetName", "/thresh-lib/src/core/createElement.ts");

    throw _e3;
  }
}

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _typeof2 = _interopRequireDefault(__webpack_require__(174));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _indexOf = _interopRequireDefault(__webpack_require__(205));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.ThreshAppContext = void 0;

var MethodChannel_1 = __webpack_require__(157);

var dispatchMethod_1 = __webpack_require__(245);

var TimerManager_1 = __webpack_require__(232);

var EventManager_1 = __webpack_require__(274);

var Util_1 = __webpack_require__(173);

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
            __reportError__(_e, "", "/thresh-lib/src/core/ThreshAppContext.ts");

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
        __reportError__(_e2, "", "/thresh-lib/src/core/ThreshAppContext.ts");

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
        __reportError__(_e3, "", "/thresh-lib/src/core/ThreshAppContext.ts");

        throw _e3;
      }
    };

    ThreshAppContext.getGlobalProp = function (prop) {
      try {
        return ThreshAppContext._global[prop];
      } catch (_e4) {
        __reportError__(_e4, "", "/thresh-lib/src/core/ThreshAppContext.ts");

        throw _e4;
      }
    };

    ThreshAppContext.setGlobalProp = function (prop, value) {
      try {
        ThreshAppContext._global[prop] = value;
      } catch (_e5) {
        __reportError__(_e5, "", "/thresh-lib/src/core/ThreshAppContext.ts");

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
            __reportError__(_e6, "", "/thresh-lib/src/core/ThreshAppContext.ts");

            throw _e6;
          }
        });
        ThreshAppContext.addUniquePropToGlobal('methodChannel_native_call_js', function () {
          try {
            return dispatchMethod_1.nativeCallJs;
          } catch (_e7) {
            __reportError__(_e7, "", "/thresh-lib/src/core/ThreshAppContext.ts");

            throw _e7;
          }
        });
        ThreshAppContext.addUniquePropToGlobal('methodChannel_fire_js_event', function () {
          try {
            return EventManager_1.methodChannel_fire_js_event;
          } catch (_e8) {
            __reportError__(_e8, "", "/thresh-lib/src/core/ThreshAppContext.ts");

            throw _e8;
          }
        });
        ThreshAppContext.addUniquePropToGlobal('methodChannel_register_js_event', function () {
          try {
            return EventManager_1.methodChannel_register_js_event;
          } catch (_e9) {
            __reportError__(_e9, "", "/thresh-lib/src/core/ThreshAppContext.ts");

            throw _e9;
          }
        });
        ThreshAppContext.addUniquePropToGlobal('methodChannel_timer_fire', function () {
          try {
            return TimerManager_1.methodChannel_timer_fire;
          } catch (_e10) {
            __reportError__(_e10, "", "/thresh-lib/src/core/ThreshAppContext.ts");

            throw _e10;
          }
        }); // 全局添加定时器方法

        ThreshAppContext.addUniquePropToGlobal('setTimeout', function () {
          try {
            return TimerManager_1["default"].setTimeout;
          } catch (_e11) {
            __reportError__(_e11, "", "/thresh-lib/src/core/ThreshAppContext.ts");

            throw _e11;
          }
        });
        ThreshAppContext.addUniquePropToGlobal('setInterval', function () {
          try {
            return TimerManager_1["default"].setInterval;
          } catch (_e12) {
            __reportError__(_e12, "", "/thresh-lib/src/core/ThreshAppContext.ts");

            throw _e12;
          }
        });
        ThreshAppContext.addUniquePropToGlobal('clearTimeout', function () {
          try {
            return TimerManager_1["default"].clearTimer;
          } catch (_e13) {
            __reportError__(_e13, "", "/thresh-lib/src/core/ThreshAppContext.ts");

            throw _e13;
          }
        });
        ThreshAppContext.addUniquePropToGlobal('clearInterval', function () {
          try {
            return TimerManager_1["default"].clearTimer;
          } catch (_e14) {
            __reportError__(_e14, "", "/thresh-lib/src/core/ThreshAppContext.ts");

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
                __reportError__(_e15, "", "/thresh-lib/src/core/ThreshAppContext.ts");

                throw _e15;
              }
            };
          } catch (_e16) {
            __reportError__(_e16, "", "/thresh-lib/src/core/ThreshAppContext.ts");

            throw _e16;
          }
        });
        ThreshAppContext.addUniquePropToGlobal('debug_get_appContainer', function () {
          try {
            return AppContainer_1["default"];
          } catch (_e17) {
            __reportError__(_e17, "", "/thresh-lib/src/core/ThreshAppContext.ts");

            throw _e17;
          }
        });
      } catch (_e18) {
        __reportError__(_e18, "", "/thresh-lib/src/core/ThreshAppContext.ts");

        throw _e18;
      }
    };

    return ThreshAppContext;
  } catch (_e19) {
    __reportError__(_e19, "", "/thresh-lib/src/core/ThreshAppContext.ts");

    throw _e19;
  }
}();

exports.ThreshAppContext = ThreshAppContext;
exports["default"] = ThreshAppContext;

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _isArray = _interopRequireDefault(__webpack_require__(189));

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
    __reportError__(_e, "", "/thresh-lib/src/manager/EventManager.ts");

    throw _e;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.methodChannel_register_js_event = exports.methodChannel_fire_js_event = exports.BuiltInEventType = void 0;

var bus_1 = __webpack_require__(226);

var Util_1 = __webpack_require__(173);

var DevtoolsManager_1 = __webpack_require__(225);

var basicWidget_1 = __webpack_require__(247); // thresh 内建事件


var BuiltInEventType;

(function (BuiltInEventType) {
  try {
    BuiltInEventType["pageOnShow"] = "pageOnShow";
    BuiltInEventType["pageOnHide"] = "pageOnHide";
  } catch (_e2) {
    __reportError__(_e2, "", "/thresh-lib/src/manager/EventManager.ts");

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
        __reportError__(_e3, "", "/thresh-lib/src/manager/EventManager.ts");

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
            __reportError__(_e4, "", "/thresh-lib/src/manager/EventManager.ts");

            throw _e4;
          }
        }); // 注册事件 - 页面隐藏

        this.register(BuiltInEventType.pageOnHide, function (contextId) {
          try {
            basicWidget_1.Page.invokePageOnHide(contextId);
          } catch (_e5) {
            __reportError__(_e5, "", "/thresh-lib/src/manager/EventManager.ts");

            throw _e5;
          }
        });
        this._hasRegisterBuiltInEvents = true;
      } catch (_e6) {
        __reportError__(_e6, "", "/thresh-lib/src/manager/EventManager.ts");

        throw _e6;
      }
    };

    EventManager.prototype.resetAndRegisterBuiltInEvents = function () {
      try {
        this._hasRegisterBuiltInEvents = false;
        this.registerBuiltInEvents();
      } catch (_e7) {
        __reportError__(_e7, "", "/thresh-lib/src/manager/EventManager.ts");

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
        __reportError__(_e8, "", "/thresh-lib/src/manager/EventManager.ts");

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
        __reportError__(_e9, "", "/thresh-lib/src/manager/EventManager.ts");

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
        __reportError__(_e10, "", "/thresh-lib/src/manager/EventManager.ts");

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
        __reportError__(_e11, "", "/thresh-lib/src/manager/EventManager.ts");

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
        __reportError__(_e12, "", "/thresh-lib/src/manager/EventManager.ts");

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
        __reportError__(_e13, "", "/thresh-lib/src/manager/EventManager.ts");

        throw _e13;
      }
    };

    return EventManager;
  } catch (_e14) {
    __reportError__(_e14, "", "/thresh-lib/src/manager/EventManager.ts");

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
    __reportError__(_e15, "methodChannel_fire_js_event", "/thresh-lib/src/manager/EventManager.ts");

    throw _e15;
  }
}

exports.methodChannel_fire_js_event = methodChannel_fire_js_event;

function methodChannel_register_js_event(name, contextId, callback) {
  try {
    eventManager.register(name, callback);
  } catch (_e16) {
    __reportError__(_e16, "", "/thresh-lib/src/manager/EventManager.ts");

    throw _e16;
  }
}

exports.methodChannel_register_js_event = methodChannel_register_js_event;

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(95));

var _symbol = _interopRequireDefault(__webpack_require__(124));

var _iterator = _interopRequireDefault(__webpack_require__(150));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _assign = _interopRequireDefault(__webpack_require__(199));

var _filter = _interopRequireDefault(__webpack_require__(258));

var _map = _interopRequireDefault(__webpack_require__(227));

var _startsWith = _interopRequireDefault(__webpack_require__(220));

var _trim = _interopRequireDefault(__webpack_require__(276));

var _forEach = _interopRequireDefault(__webpack_require__(30));

var _includes = _interopRequireDefault(__webpack_require__(163));

var _concat = _interopRequireDefault(__webpack_require__(86));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  try {
    function adopt(value) {
      try {
        return value instanceof P ? value : new P(function (resolve) {
          try {
            resolve(value);
          } catch (_e) {
            __reportError__(_e, "", "/thresh-theme-provider/index.ts");

            throw _e;
          }
        });
      } catch (_e2) {
        __reportError__(_e2, "", "/thresh-theme-provider/index.ts");

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
            __reportError__(_e3, "", "/thresh-theme-provider/index.ts");

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
            __reportError__(_e4, "", "/thresh-theme-provider/index.ts");

            throw _e4;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e5) {
            __reportError__(_e5, "", "/thresh-theme-provider/index.ts");

            throw _e5;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e6) {
        __reportError__(_e6, "", "/thresh-theme-provider/index.ts");

        throw _e6;
      }
    });
  } catch (_e7) {
    __reportError__(_e7, "", "/thresh-theme-provider/index.ts");

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
          __reportError__(_e8, "sent", "/thresh-theme-provider/index.ts");

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
        __reportError__(_e9, "", "/thresh-theme-provider/index.ts");

        throw _e9;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e10) {
        __reportError__(_e10, "", "/thresh-theme-provider/index.ts");

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
    __reportError__(_e11, "", "/thresh-theme-provider/index.ts");

    throw _e11;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var SETIN_IMAGE_PREFIX = 'mbtp://';
var BASE_THEME_DATA_KEY = 'base_common';
var FONT_TAG_REG_GLOBAL = /<font[^>]*>([^<]*)<\/font>/g;
var FONT_TAG_REG = /<font([^>]*)>([^<]*)<\/font>/;

var ThemeProvider =
/** @class */
function () {
  try {
    function ThemeProvider() {
      try {
        this.currentThemeName = '';
        this.themeFolderRootPath = '';
        this.filePathPrefix = '';
        this.themeBundleCollection = {};
      } catch (_e12) {
        __reportError__(_e12, "ThemeProvider", "/thresh-theme-provider/index.ts");

        throw _e12;
      }
    }

    ThemeProvider.prototype.propsProvider = function (props) {
      try {
        if (!this.currentThemeName) return props;

        var _a = props || {},
            themeKey = _a.themeKey,
            disabled = _a.disabled,
            disable = _a.disable,
            selected = _a.selected;

        if (!themeKey) return;
        var themeStatusType = 'normal';
        if (disabled || disable) themeStatusType = 'disable';else if (selected) themeStatusType = 'selected';
        var themeData = this.getThemeData(themeKey, themeStatusType);
        if (!themeData) return;
        return (0, _assign["default"])(props || {}, themeData);
      } catch (_e13) {
        __reportError__(_e13, "", "/thresh-theme-provider/index.ts");

        throw _e13;
      }
    };

    ThemeProvider.prototype.load = function () {
      return __awaiter(this, void 0, void 0, function () {
        var res, loadedThemeBundleCollection, themeNames, key;
        return __generator(this, function (_a) {
          try {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , thresh_lib_1.Bridge.invoke({
                  module: 'app',
                  business: 'base',
                  method: 'getThemeInfo'
                })];

              case 1:
                res = _a.sent();
                if (!res || res.code !== 0 || !res.data.themes) return [2
                /*return*/
                , false];
                this.themeFolderRootPath = res.data.themeFolderRootPath || '';
                this.filePathPrefix = res.data.filePathPrefix === 'assets' ? 'assets://' : '';
                loadedThemeBundleCollection = res.data.themes; // TODO - mock 数据，发布 npm 前需要注释掉
                // this.themeFolderRootPath = 'assets/xray'
                // const loadedThemeBundleCollection: OriginThemeBundleCollection = mockData

                this.themeBundleCollection = this.transformOriginThemeBundleCollection(loadedThemeBundleCollection);
                this.use('default');

                if (thresh_lib_1["default"].debugMode) {
                  themeNames = [];

                  for (key in this.themeBundleCollection) {
                    themeNames.push(key);
                  }

                  thresh_lib_1.Util.log('===== load theme bundle collection success =====', themeNames.join(', '));
                }

                return [2
                /*return*/
                , true];
            }
          } catch (_e14) {
            __reportError__(_e14, "", "/thresh-theme-provider/index.ts");

            throw _e14;
          }
        });
      });
    };

    ThemeProvider.prototype.loadAndUse = function (themeName) {
      return __awaiter(this, void 0, void 0, function () {
        var loadSuccess, switchSuccess;
        return __generator(this, function (_a) {
          try {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , this.load()];

              case 1:
                loadSuccess = _a.sent();
                if (!loadSuccess) return [2
                /*return*/
                , loadSuccess];
                switchSuccess = this.use(themeName);
                return [2
                /*return*/
                , switchSuccess];
            }
          } catch (_e15) {
            __reportError__(_e15, "", "/thresh-theme-provider/index.ts");

            throw _e15;
          }
        });
      });
    };

    ThemeProvider.prototype.use = function (themeName) {
      try {
        if (!themeName) return false;

        if (this.themeBundleCollection[themeName]) {
          this.currentThemeName = themeName;
          return true;
        }

        return false;
      } catch (_e16) {
        __reportError__(_e16, "", "/thresh-theme-provider/index.ts");

        throw _e16;
      }
    };
    /**
     * 获取当前或指定主题包中的指定主题字段
     */


    ThemeProvider.prototype.getThemeData = function (themeKey, themeStatusType, themeName) {
      try {
        if (themeStatusType === void 0) {
          themeStatusType = 'normal';
        }

        if (!themeName && !this.currentThemeName) return;
        var themeBundle = this.themeBundleCollection[themeName || this.currentThemeName] || {};
        var themeData = themeBundle[themeKey];
        if (!themeData) return;
        return themeData[themeStatusType];
      } catch (_e17) {
        __reportError__(_e17, "", "/thresh-theme-provider/index.ts");

        throw _e17;
      }
    };
    /**
     * 获取当前或指定主题包中的 base_common 内容
     */


    ThemeProvider.prototype.getBaseCommonData = function (themeName) {
      try {
        if (!themeName && !this.currentThemeName) return;
        var themeBundle = this.themeBundleCollection[themeName || this.currentThemeName] || {};
        return themeBundle[BASE_THEME_DATA_KEY] || {};
      } catch (_e18) {
        __reportError__(_e18, "", "/thresh-theme-provider/index.ts");

        throw _e18;
      }
    };
    /**
     * 将原始的主题包集合数据转为可使用的主题包集合数据
     */


    ThemeProvider.prototype.transformOriginThemeBundleCollection = function (originThemeBundleCollection) {
      try {
        var themeBundleCollection = {};

        for (var themeName in originThemeBundleCollection) {
          var originThemeBundle = originThemeBundleCollection[themeName];
          themeBundleCollection[themeName] = this.transformOriginThemeBundle(originThemeBundle, themeName);
        }

        return themeBundleCollection;
      } catch (_e19) {
        __reportError__(_e19, "", "/thresh-theme-provider/index.ts");

        throw _e19;
      }
    };
    /**
     * 将原始的主题包数据转为可使用的主题包数据
     */


    ThemeProvider.prototype.transformOriginThemeBundle = function (originThemeBundle, themeName) {
      try {
        var themeBundle = {};
        themeBundle[BASE_THEME_DATA_KEY] = this.transformOriginBaseThemeData(originThemeBundle[BASE_THEME_DATA_KEY]);

        for (var themeKey in originThemeBundle) {
          if (themeKey === BASE_THEME_DATA_KEY) continue;
          var originThemeData = originThemeBundle[themeKey];
          themeBundle[themeKey] = this.transformOriginThemeStatus(originThemeData, themeName);
        }

        return themeBundle;
      } catch (_e20) {
        __reportError__(_e20, "", "/thresh-theme-provider/index.ts");

        throw _e20;
      }
    };
    /**
     * 将原始的主题状态数据转为可使用的主题状态数据
     */


    ThemeProvider.prototype.transformOriginBaseThemeData = function (originBaseThemeData) {
      try {
        if (!originBaseThemeData) return {};
        var baseThemeData = {};

        for (var baseThemeKey in originBaseThemeData) {
          var value = originBaseThemeData[baseThemeKey]; // 先对 value 进行色值转换
          // 如果不能转换为色值则进行 size 转换
          // 如果不能进行 size 转换则使用原值

          var transformedValue = this.transformColorValue(value);
          if (!transformedValue) transformedValue = this.transformSizeValue(value);
          if (!transformedValue) transformedValue = value;
          baseThemeData[baseThemeKey] = transformedValue;
        }

        return baseThemeData;
      } catch (_e21) {
        __reportError__(_e21, "", "/thresh-theme-provider/index.ts");

        throw _e21;
      }
    };
    /**
     * 将原始的主题状态数据转为可使用的主题状态数据
     */


    ThemeProvider.prototype.transformOriginThemeStatus = function (originThemeData, themeName) {
      try {
        var themeStatus = {};
        themeStatus.normal = this.transformOriginThemeData(originThemeData.normal || originThemeData, themeName);
        themeStatus.disable = this.transformOriginThemeData(originThemeData.disable, themeName);
        themeStatus.selected = this.transformOriginThemeData(originThemeData.selected, themeName);
        return themeStatus;
      } catch (_e22) {
        __reportError__(_e22, "", "/thresh-theme-provider/index.ts");

        throw _e22;
      }
    };
    /**
     * 将原始的主题数据转为可使用的主题数据
     */


    ThemeProvider.prototype.transformOriginThemeData = function (originThemeData, themeName) {
      try {
        var _this = this;

        if (!originThemeData) return {};
        var themeData = {};
        if (originThemeData.backgroundColor) themeData.backgroundColor = this.transformColorValue(originThemeData.backgroundColor);
        if (originThemeData.titleColor) themeData.color = this.transformColorValue(originThemeData.titleColor);
        if (originThemeData.textColor) themeData.color = this.transformColorValue(originThemeData.textColor);
        if (originThemeData.borderColor) themeData.border = this.transformBorderValue(originThemeData.borderColor);
        if (originThemeData.shadowColor) themeData.shadow = this.transformShadowValue(originThemeData.shadowColor);
        if (originThemeData.tintColor) themeData.tintColor = this.transformColorValue(originThemeData.tintColor);
        if (originThemeData.fontSize) themeData.size = this.transformSizeValue(originThemeData.fontSize);
        if (originThemeData.fontWeight) themeData.weight = originThemeData.fontWeight;
        if (originThemeData.image) themeData.src = this.transformImageValue(originThemeData.image, themeName); // 异步解析富文本

        if (originThemeData.attributedText) {
          _promise["default"].resolve().then(function () {
            try {
              themeData.richText = _this.transformAttributedText(originThemeData.attributedText, themeName);
            } catch (_e23) {
              __reportError__(_e23, "", "/thresh-theme-provider/index.ts");

              throw _e23;
            }
          });
        }

        return themeData;
      } catch (_e24) {
        __reportError__(_e24, "", "/thresh-theme-provider/index.ts");

        throw _e24;
      }
    };
    /**
     * 颜色值转换
     */


    ThemeProvider.prototype.transformColorValue = function (colorValue) {
      try {
        if (!colorValue) return;
        colorValue = colorValue.replace('#', '');
        var numberColor;
        if (colorValue.length <= 6) numberColor = Number("0xff" + colorValue);else {
          var rgbColor = colorValue.substr(0, 6);
          var alphaValue = colorValue.substr(6, 2);
          if (alphaValue.length !== 2) alphaValue += 'f';
          numberColor = Number("0x" + alphaValue + rgbColor);
        }
        if (!isNaN(numberColor)) return numberColor;
      } catch (_e25) {
        __reportError__(_e25, "", "/thresh-theme-provider/index.ts");

        throw _e25;
      }
    };
    /**
     * size 值转换
     */


    ThemeProvider.prototype.transformSizeValue = function (sizeValue) {
      try {
        if (typeof sizeValue === 'string') sizeValue = Number(sizeValue);
        if (isNaN(sizeValue) || !sizeValue) return 0;
        return this.getRpx(sizeValue);
      } catch (_e26) {
        __reportError__(_e26, "", "/thresh-theme-provider/index.ts");

        throw _e26;
      }
    };
    /**
     * 富文本转换
     */


    ThemeProvider.prototype.transformAttributedText = function (attributedText, themeName) {
      try {
        var _context;

        var _this = this;

        var textItems = attributedText.match(FONT_TAG_REG_GLOBAL);
        if (!textItems || !textItems.length) return [{
          text: attributedText
        }];
        var splitedAttributedTextItems = [];

        for (var i in textItems) {
          var textItem = textItems[i];
          var temp = attributedText.split(textItem);
          var firstItem = temp.shift();
          attributedText = temp.join('');

          if (firstItem) {
            splitedAttributedTextItems.push({
              text: firstItem,
              isFontTag: false
            });
          }

          splitedAttributedTextItems.push({
            text: textItem,
            isFontTag: true
          });
        }

        var res = (0, _filter["default"])(_context = (0, _map["default"])(splitedAttributedTextItems).call(splitedAttributedTextItems, function (item) {
          try {
            return parseAttributedTextItem(item, themeName || _this.currentThemeName);
          } catch (_e27) {
            __reportError__(_e27, "parseAttributedTextItem", "/thresh-theme-provider/index.ts");

            throw _e27;
          }
        })).call(_context, function (item) {
          try {
            return !!item;
          } catch (_e28) {
            __reportError__(_e28, "", "/thresh-theme-provider/index.ts");

            throw _e28;
          }
        });
        return res;
      } catch (_e29) {
        __reportError__(_e29, "", "/thresh-theme-provider/index.ts");

        throw _e29;
      }
    };
    /**
     * 内置图片转换
     */


    ThemeProvider.prototype.transformImageValue = function (imageValue, themeName) {
      try {
        if (!imageValue) return '';
        if (!(0, _startsWith["default"])(imageValue).call(imageValue, SETIN_IMAGE_PREFIX)) return imageValue;
        return imageValue.replace(SETIN_IMAGE_PREFIX, "" + this.filePathPrefix + this.themeFolderRootPath + "/" + themeName + "/resource/");
      } catch (_e30) {
        __reportError__(_e30, "", "/thresh-theme-provider/index.ts");

        throw _e30;
      }
    };
    /**
     * border 转换
     */


    ThemeProvider.prototype.transformBorderValue = function (borderColor) {
      try {
        var color = this.transformColorValue(borderColor);
        if (!color) return;
        return {
          color: color,
          width: this.getRpx(1)
        };
      } catch (_e31) {
        __reportError__(_e31, "", "/thresh-theme-provider/index.ts");

        throw _e31;
      }
    };
    /**
     * shadow 转换
     */


    ThemeProvider.prototype.transformShadowValue = function (shadowColor) {
      try {
        return (0, _assign["default"])({}, ThemeProvider.defaultShadow, {
          color: this.transformColorValue(shadowColor)
        });
      } catch (_e32) {
        __reportError__(_e32, "", "/thresh-theme-provider/index.ts");

        throw _e32;
      }
    };
    /**
     * 计算 rpx
     */


    ThemeProvider.prototype.getRpx = function (size) {
      try {
        if (!thresh_lib_1.ui.screenWidth) return size;
        return thresh_lib_1.ui.rpx(size);
      } catch (_e33) {
        __reportError__(_e33, "", "/thresh-theme-provider/index.ts");

        throw _e33;
      }
    };

    ThemeProvider.defaultShadow = {
      color: 0xff000000,
      offsetX: 1,
      blur: 2
    };
    return ThemeProvider;
  } catch (_e34) {
    __reportError__(_e34, "", "/thresh-theme-provider/index.ts");

    throw _e34;
  }
}();

function parseAttributedTextItem(attributedTextItem, themeName) {
  try {
    var _context2, _context3;

    var attributedText = attributedTextItem.text;
    if (!attributedTextItem.isFontTag) return {
      text: attributedText
    };
    var matchRes = attributedText.match(FONT_TAG_REG);
    if (!matchRes) return;
    var styles = (0, _trim["default"])(_context2 = matchRes[1]).call(_context2);
    var text = matchRes[2];
    if (!text) return;
    var parseRes = {
      text: text
    };
    if (!styles) return parseRes;
    var styleItems = [];
    (0, _forEach["default"])(_context3 = styles.split(' ')).call(_context3, function (style) {
      try {
        if ((0, _includes["default"])(style).call(style, '=')) {
          styleItems = (0, _concat["default"])(styleItems).call(styleItems, style.split('='));
        }
      } catch (_e35) {
        __reportError__(_e35, "", "/thresh-theme-provider/index.ts");

        throw _e35;
      }
    });
    var color;
    var size;
    var weight;
    var mbColor;
    var item = styleItems.shift();

    while (item) {
      if (item === 'color') {
        var colorValue = styleItems.shift();

        if (colorValue) {
          // 去掉字符串前后引号
          colorValue = removeStartAndEndQuotations(colorValue);
          color = themeProvider.transformColorValue(colorValue);
        }
      }

      if (item === 'size') {
        var sizeValue = styleItems.shift();

        if (sizeValue) {
          // 去掉字符串前后引号
          sizeValue = removeStartAndEndQuotations(sizeValue);
          size = themeProvider.transformSizeValue(sizeValue);
        }
      }

      if (item === 'weight') {
        var weightValue = styleItems.shift();

        if (weightValue) {
          // 去掉字符串前后引号
          weight = removeStartAndEndQuotations(weightValue);
        }
      }

      if (item === 'MBColor' && themeName) {
        var mbColorValue = styleItems.shift();

        if (mbColorValue) {
          // 去掉字符串前后引号
          mbColorValue = removeStartAndEndQuotations(mbColorValue);
          var themeData = themeProvider.getThemeData(mbColorValue, 'normal', themeName);
          if (themeData && themeData.color) mbColor = themeData.color;
        }
      }

      item = styleItems.shift();
    }

    if (size) parseRes.size = size;
    if (color) parseRes.color = color;
    if (weight) parseRes.weight = weight;
    if (mbColor) parseRes.color = mbColor;
    return parseRes;
  } catch (_e36) {
    __reportError__(_e36, "parseAttributedTextItem", "/thresh-theme-provider/index.ts");

    throw _e36;
  }
}

function removeStartAndEndQuotations(targetString) {
  try {
    return targetString.substr(1, targetString.length - 2);
  } catch (_e37) {
    __reportError__(_e37, "", "/thresh-theme-provider/index.ts");

    throw _e37;
  }
}

var themeProvider = new ThemeProvider();
exports["default"] = themeProvider;

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

var trim = __webpack_require__(279);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.trim;
  return typeof it === 'string' || it === StringPrototype
    || (it instanceof String && own === StringPrototype.trim) ? trim : own;
};


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(280);
var entryVirtual = __webpack_require__(85);

module.exports = entryVirtual('String').trim;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var $trim = __webpack_require__(281).trim;
var forcedStringTrimMethod = __webpack_require__(283);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(17);
var whitespaces = __webpack_require__(282);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 282 */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(11);
var whitespaces = __webpack_require__(282);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.extraPages = exports.apiList = exports.widgetList = exports.Colors = void 0;

var PageAppBar_1 = __webpack_require__(285);

var ContainerDemo_1 = __webpack_require__(297);

var TextDemo_1 = __webpack_require__(299);

var ImageDemo_1 = __webpack_require__(300);

var QrImageDemo_1 = __webpack_require__(302);

var IconDemo_1 = __webpack_require__(303);

var ScrollViewDemo_1 = __webpack_require__(304);

var ListViewDemo_1 = __webpack_require__(311);

var SwipeActionsViewDemo_1 = __webpack_require__(320);

var SwiperViewDemo_1 = __webpack_require__(321);

var NativeViewDemo_1 = __webpack_require__(322);

var ButtonDemo_1 = __webpack_require__(323);

var RadioDemo_1 = __webpack_require__(324);

var CheckboxDemo_1 = __webpack_require__(325);

var InputDemo_1 = __webpack_require__(326);

var PageActions_1 = __webpack_require__(327);

var ModalActions_1 = __webpack_require__(328);

var ToastActions_1 = __webpack_require__(331);

var RefreshDemo_1 = __webpack_require__(332);

var NestScrollViewDemo_1 = __webpack_require__(333);

var NoticeBarDemo_1 = __webpack_require__(334);

var ThemeProviderActions_1 = __webpack_require__(335);

var SwitchDemo_1 = __webpack_require__(336);

var PickerDemo_1 = __webpack_require__(337);

var timer_1 = __webpack_require__(338);

var DragableScrollViewDemo_1 = __webpack_require__(339);

exports.Colors = {
  Black: 0xff000000,
  White: 0xffffffff,
  Primary: 0xff649ef4,
  Red: 0xffff0000,
  Pagebg: 0xfff3f3f3,
  Darkgray: 0xff333333,
  Lightgray: 0xff999999
};
exports.widgetList = [{
  title: 'Input',
  desc: '输入框组件',
  // useInject: true,
  pageName: 'widget-input',
  pageBuilder: function pageBuilder() {
    try {
      return InputDemo_1["default"];
    } catch (_e) {
      __reportError__(_e, "", "/config.ts");

      throw _e;
    }
  }
}, {
  title: 'Page & AppBar',
  desc: '页面与导航栏组件',
  pageName: 'widget-page-appbar',
  pageBuilder: function pageBuilder() {
    try {
      return PageAppBar_1["default"];
    } catch (_e2) {
      __reportError__(_e2, "", "/config.ts");

      throw _e2;
    }
  }
}, {
  title: 'Container',
  desc: '基础容器组件',
  pageName: 'widget-container',
  pageBuilder: function pageBuilder() {
    try {
      return ContainerDemo_1["default"];
    } catch (_e3) {
      __reportError__(_e3, "", "/config.ts");

      throw _e3;
    }
  }
}, {
  title: 'Text',
  desc: '文本组件',
  pageName: 'widget-text',
  pageBuilder: function pageBuilder() {
    try {
      return TextDemo_1["default"];
    } catch (_e4) {
      __reportError__(_e4, "", "/config.ts");

      throw _e4;
    }
  }
}, {
  title: 'Image',
  desc: '图片组件',
  pageName: 'widget-image',
  pageBuilder: function pageBuilder() {
    try {
      return ImageDemo_1["default"];
    } catch (_e5) {
      __reportError__(_e5, "", "/config.ts");

      throw _e5;
    }
  }
}, {
  title: 'QrImage',
  desc: '二维码组件',
  pageName: 'widget-qrimage',
  pageBuilder: function pageBuilder() {
    try {
      return QrImageDemo_1["default"];
    } catch (_e6) {
      __reportError__(_e6, "", "/config.ts");

      throw _e6;
    }
  }
}, {
  title: 'Icon',
  desc: '图标组件',
  pageName: 'widget-icon',
  pageBuilder: function pageBuilder() {
    try {
      return IconDemo_1["default"];
    } catch (_e7) {
      __reportError__(_e7, "", "/config.ts");

      throw _e7;
    }
  }
}, {
  title: 'Refresh',
  desc: '刷新指示器组件',
  pageName: 'widget-refresh',
  pageBuilder: function pageBuilder() {
    try {
      return RefreshDemo_1["default"];
    } catch (_e8) {
      __reportError__(_e8, "", "/config.ts");

      throw _e8;
    }
  }
}, {
  title: 'NoticeBar',
  desc: '通知栏组件',
  pageName: 'widget-notice-bar',
  pageBuilder: function pageBuilder() {
    try {
      return NoticeBarDemo_1["default"];
    } catch (_e9) {
      __reportError__(_e9, "", "/config.ts");

      throw _e9;
    }
  }
}, {
  title: 'ScrollView',
  desc: '滚动视图组件',
  pageName: 'widget-scrollview',
  pageBuilder: function pageBuilder() {
    try {
      return ScrollViewDemo_1["default"];
    } catch (_e10) {
      __reportError__(_e10, "", "/config.ts");

      throw _e10;
    }
  }
}, {
  title: 'ListView',
  desc: '列表视图组件',
  pageName: 'widget-listview',
  pageBuilder: function pageBuilder() {
    try {
      return ListViewDemo_1["default"];
    } catch (_e11) {
      __reportError__(_e11, "", "/config.ts");

      throw _e11;
    }
  }
}, {
  title: 'NestScrollView',
  desc: '富交互滚动视图组件',
  pageName: 'widget-nestScrollview',
  pageBuilder: function pageBuilder() {
    try {
      return NestScrollViewDemo_1["default"];
    } catch (_e12) {
      __reportError__(_e12, "", "/config.ts");

      throw _e12;
    }
  }
}, {
  title: 'DragableScrollView',
  desc: '底部拖拽滚动视图组件',
  // useInject: true,
  pageName: 'widget-dragableScrollview',
  pageBuilder: function pageBuilder() {
    try {
      return DragableScrollViewDemo_1["default"];
    } catch (_e13) {
      __reportError__(_e13, "", "/config.ts");

      throw _e13;
    }
  }
}, {
  title: 'SwiperActionsView',
  desc: '侧滑显示按钮组件',
  pageName: 'widget- swiperActionsview',
  pageBuilder: function pageBuilder() {
    try {
      return SwipeActionsViewDemo_1["default"];
    } catch (_e14) {
      __reportError__(_e14, "", "/config.ts");

      throw _e14;
    }
  }
}, {
  title: 'SwiperView',
  desc: '滑动视图组件',
  pageName: 'widget-swiperview',
  pageBuilder: function pageBuilder() {
    try {
      return SwiperViewDemo_1["default"];
    } catch (_e15) {
      __reportError__(_e15, "", "/config.ts");

      throw _e15;
    }
  }
}, {
  title: 'NativeView',
  desc: '原生视图组件',
  pageName: 'widget-nativeview',
  pageBuilder: function pageBuilder() {
    try {
      return NativeViewDemo_1["default"];
    } catch (_e16) {
      __reportError__(_e16, "", "/config.ts");

      throw _e16;
    }
  }
}, {
  title: 'Button',
  desc: '按钮组件',
  pageName: 'widget-button',
  pageBuilder: function pageBuilder() {
    try {
      return ButtonDemo_1["default"];
    } catch (_e17) {
      __reportError__(_e17, "", "/config.ts");

      throw _e17;
    }
  }
}, {
  title: 'Radio',
  desc: '单选框组件',
  pageName: 'widget-radio',
  pageBuilder: function pageBuilder() {
    try {
      return RadioDemo_1["default"];
    } catch (_e18) {
      __reportError__(_e18, "", "/config.ts");

      throw _e18;
    }
  }
}, {
  title: 'Checkbox',
  desc: '多选框组件',
  pageName: 'widget-checkbox',
  pageBuilder: function pageBuilder() {
    try {
      return CheckboxDemo_1["default"];
    } catch (_e19) {
      __reportError__(_e19, "", "/config.ts");

      throw _e19;
    }
  }
}, {
  title: 'Switch',
  desc: '开关组件',
  pageName: 'widget-switch',
  pageBuilder: function pageBuilder() {
    try {
      return SwitchDemo_1["default"];
    } catch (_e20) {
      __reportError__(_e20, "", "/config.ts");

      throw _e20;
    }
  }
}, {
  title: 'Picker',
  desc: '选择组件',
  pageName: 'widget-picker',
  pageBuilder: function pageBuilder() {
    try {
      return PickerDemo_1["default"];
    } catch (_e21) {
      __reportError__(_e21, "", "/config.ts");

      throw _e21;
    }
  }
}];
exports.apiList = [{
  title: 'Page Actions',
  desc: '页面操作',
  pageName: 'api-page-actions',
  pageBuilder: function pageBuilder() {
    try {
      return PageActions_1["default"];
    } catch (_e22) {
      __reportError__(_e22, "", "/config.ts");

      throw _e22;
    }
  }
}, {
  title: 'Modal Actions',
  desc: '模态页面操作',
  useInject: false,
  pageName: 'api-modal-actions',
  pageBuilder: function pageBuilder() {
    try {
      return ModalActions_1["default"];
    } catch (_e23) {
      __reportError__(_e23, "", "/config.ts");

      throw _e23;
    }
  }
}, {
  title: 'Toast Actions',
  desc: '提示框操作',
  pageName: 'api-toast-actions',
  pageBuilder: function pageBuilder() {
    try {
      return ToastActions_1["default"];
    } catch (_e24) {
      __reportError__(_e24, "", "/config.ts");

      throw _e24;
    }
  }
}, {
  title: 'Theme Provider',
  desc: '主题换肤',
  pageName: 'api-theme-provider',
  pageBuilder: function pageBuilder() {
    try {
      return ThemeProviderActions_1["default"];
    } catch (_e25) {
      __reportError__(_e25, "", "/config.ts");

      throw _e25;
    }
  }
}, {
  title: 'Timer Apis',
  desc: '定时器操作',
  pageName: 'api-timers',
  pageBuilder: function pageBuilder() {
    try {
      return timer_1["default"];
    } catch (_e26) {
      __reportError__(_e26, "", "/config.ts");

      throw _e26;
    }
  }
}];
exports.extraPages = [{
  pageName: 'api-page-actions-next',
  pageBuilder: function pageBuilder() {
    try {
      return PageActions_1.NextPage;
    } catch (_e27) {
      __reportError__(_e27, "", "/config.ts");

      throw _e27;
    }
  }
}, {
  pageName: 'api-page-actions-replace',
  pageBuilder: function pageBuilder() {
    try {
      return PageActions_1.ReplacePage;
    } catch (_e28) {
      __reportError__(_e28, "", "/config.ts");

      throw _e28;
    }
  }
}];

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/pages/basic/PageAppBar.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/PageAppBar.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/PageAppBar.tsx");

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
            __reportError__(_e4, "", "/pages/basic/PageAppBar.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/PageAppBar.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/PageAppBar.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Box_1 = __webpack_require__(286);

var Center_1 = __webpack_require__(293);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Container = thresh_lib_1.basicWidgets.Container,
    Text = thresh_lib_1.basicWidgets.Text,
    Icon = thresh_lib_1.basicWidgets.Icon;

var PageAppBar =
/** @class */
function (_super) {
  try {
    __extends(PageAppBar, _super);

    function PageAppBar() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e7) {
        __reportError__(_e7, "", "/pages/basic/PageAppBar.tsx");

        throw _e7;
      }
    }

    PageAppBar.prototype.widgetDidMount = function () {
      try {
        thresh_lib_1["default"].pageDidShow();
      } catch (_e8) {
        __reportError__(_e8, "", "/pages/basic/PageAppBar.tsx");

        throw _e8;
      }
    };

    PageAppBar.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Primary,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "\u81EA\u5B9A\u4E49 AppBar",
            titleColor: config_1.Colors.White,
            titleSize: 18,
            backgroundColor: config_1.Colors.Primary,
            leading: thresh_lib_1["default"].createElement(Center_1["default"], null, thresh_lib_1["default"].createElement(Center_1["default"], {
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: config_1.Colors.White,
              onTap: function onTap() {
                try {
                  thresh_lib_1["default"].popPage();
                } catch (_e9) {
                  __reportError__(_e9, "", "/pages/basic/PageAppBar.tsx");

                  throw _e9;
                }
              }
            }, thresh_lib_1["default"].createElement(Icon, {
              type: "arrow_back",
              color: config_1.Colors.Primary
            }))),
            buttons: [thresh_lib_1["default"].createElement(Text, {
              color: config_1.Colors.White,
              size: 14,
              onTap: function onTap() {
                try {
                  thresh_lib_1["default"].popPage();
                } catch (_e10) {
                  __reportError__(_e10, "", "/pages/basic/PageAppBar.tsx");

                  throw _e10;
                }
              }
            }, "\u8FD4\u56DE"), thresh_lib_1["default"].createElement(Center_1["default"], {
              width: 30,
              height: 30,
              borderRadius: 15,
              margin: {
                left: 10,
                right: 10
              },
              onTap: function onTap() {
                try {
                  thresh_lib_1["default"].popPage();
                } catch (_e11) {
                  __reportError__(_e11, "", "/pages/basic/PageAppBar.tsx");

                  throw _e11;
                }
              }
            }, thresh_lib_1["default"].createElement(Icon, {
              type: "bookmark",
              color: config_1.Colors.White,
              size: 18
            }))]
          })
        }, thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.Darkgray
        }, "\u672C\u9875\u9762\u7684\u6839\u5BB9\u5668\u4E3A Page \u7EC4\u4EF6\u3002")), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.Darkgray
        }, "\u901A\u8FC7\u81EA\u5B9A\u4E49 AppBar \u7EC4\u4EF6\u7684\u6807\u9898\u3001\u8FD4\u56DE\u6309\u94AE\u548C\u53F3\u4FA7\u6309\u94AE\u5217\u8868\uFF0C\u5B9E\u73B0\u4E86\u70B9\u51FB\u8FD4\u56DE\u6309\u94AE\u548C\u53F3\u4FA7\u6309\u94AE\u90FD\u53EF\u4EE5\u8FD4\u56DE\u5230\u4E0A\u7EA7\u9875\u9762\u7684\u529F\u80FD\u3002")));
      } catch (_e12) {
        __reportError__(_e12, "", "/pages/basic/PageAppBar.tsx");

        throw _e12;
      }
    };

    return PageAppBar;
  } catch (_e13) {
    __reportError__(_e13, "", "/pages/basic/PageAppBar.tsx");

    throw _e13;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = PageAppBar;

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _bind = _interopRequireDefault(__webpack_require__(287));

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
            __reportError__(_e, "", "/widgets/Box.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/widgets/Box.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/widgets/Box.tsx");

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
            __reportError__(_e4, "", "/widgets/Box.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/widgets/Box.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/widgets/Box.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

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
        __reportError__(_e7, "", "/widgets/Box.tsx");

        throw _e7;
      }
    }

    (0, _defineProperty["default"])(Box, "width", {
      get: function get() {
        try {
          return thresh_lib_1.ui.screenWidth - 2 * MARGIN;
        } catch (_e8) {
          __reportError__(_e8, "", "/widgets/Box.tsx");

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
          borderRadius: 5,
          onTap: this.props.onTap && (0, _bind["default"])(_context = this.props.onTap).call(_context, this)
        }, thresh_lib_1["default"].createElement(Container, {
          width: this.props.contentWidth ? this.props.contentWidth + 40 : Box.width,
          backgroundColor: config_1.Colors.White,
          borderRadius: 5,
          padding: 20
        }, this.props.children));
      } catch (_e9) {
        __reportError__(_e9, "", "/widgets/Box.tsx");

        throw _e9;
      }
    };

    return Box;
  } catch (_e10) {
    __reportError__(_e10, "", "/widgets/Box.tsx");

    throw _e10;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = Box;

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(288);

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(289);

module.exports = parent;


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(290);

var FunctionPrototype = Function.prototype;

module.exports = function (it) {
  var own = it.bind;
  return it === FunctionPrototype || (it instanceof Function && own === FunctionPrototype.bind) ? bind : own;
};


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(291);
var entryVirtual = __webpack_require__(85);

module.exports = entryVirtual('Function').bind;


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(6);
var bind = __webpack_require__(292);

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),
/* 292 */
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
/* 293 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _assign = _interopRequireDefault(__webpack_require__(199));

var _indexOf = _interopRequireDefault(__webpack_require__(205));

var _getOwnPropertySymbols = _interopRequireDefault(__webpack_require__(294));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/widgets/Center.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/widgets/Center.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/widgets/Center.tsx");

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
            __reportError__(_e4, "", "/widgets/Center.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/widgets/Center.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/widgets/Center.tsx");

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
        __reportError__(_e7, "", "/widgets/Center.tsx");

        throw _e7;
      }
    };

    return __assign.apply(this, arguments);
  } catch (_e8) {
    __reportError__(_e8, "", "/widgets/Center.tsx");

    throw _e8;
  }
};

var __rest = void 0 && (void 0).__rest || function (s, e) {
  try {
    var t = {};

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && (0, _indexOf["default"])(e).call(e, p) < 0) t[p] = s[p];
    }

    if (s != null && typeof _getOwnPropertySymbols["default"] === "function") for (var i = 0, p = (0, _getOwnPropertySymbols["default"])(s); i < p.length; i++) {
      if ((0, _indexOf["default"])(e).call(e, p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  } catch (_e9) {
    __reportError__(_e9, "", "/widgets/Center.tsx");

    throw _e9;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var Container = thresh_lib_1.basicWidgets.Container;

var Center =
/** @class */
function (_super) {
  try {
    __extends(Center, _super);

    function Center() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e10) {
        __reportError__(_e10, "", "/widgets/Center.tsx");

        throw _e10;
      }
    }

    Center.prototype.render = function () {
      try {
        var _a = this.props,
            children = _a.children,
            props = __rest(_a, ["children"]);

        return thresh_lib_1["default"].createElement(Container, __assign({
          justifyContent: "center",
          alignItems: "center"
        }, props), children);
      } catch (_e11) {
        __reportError__(_e11, "", "/widgets/Center.tsx");

        throw _e11;
      }
    };

    return Center;
  } catch (_e12) {
    __reportError__(_e12, "", "/widgets/Center.tsx");

    throw _e12;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = Center;

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(295);

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(296);

module.exports = parent;


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(127);
var path = __webpack_require__(24);

module.exports = path.Object.getOwnPropertySymbols;


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/pages/basic/ContainerDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/ContainerDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/ContainerDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/ContainerDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/ContainerDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/ContainerDemo.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Title_1 = __webpack_require__(298);

var Box_1 = __webpack_require__(286);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Container = thresh_lib_1.basicWidgets.Container,
    ScrollView = thresh_lib_1.basicWidgets.ScrollView;

var ContainerDemo =
/** @class */
function (_super) {
  try {
    __extends(ContainerDemo, _super);

    function ContainerDemo() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e7) {
        __reportError__(_e7, "", "/pages/basic/ContainerDemo.tsx");

        throw _e7;
      }
    }

    ContainerDemo.prototype.widgetDidMount = function () {
      try {
        thresh_lib_1["default"].pageDidShow();
      } catch (_e8) {
        __reportError__(_e8, "", "/pages/basic/ContainerDemo.tsx");

        throw _e8;
      }
    };

    ContainerDemo.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "Container \u57FA\u7840\u5BB9\u5668"
          })
        }, thresh_lib_1["default"].createElement(ScrollView, null, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "Flex \u5E03\u5C40 1"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Container, {
          width: Box_1["default"].width,
          row: true,
          padding: 10
        }, thresh_lib_1["default"].createElement(Container, {
          margin: 5,
          flex: 1,
          height: 50,
          backgroundColor: config_1.Colors.Red,
          borderRadius: 5
        }), thresh_lib_1["default"].createElement(Container, {
          margin: 5,
          flex: 2,
          height: 50,
          backgroundColor: config_1.Colors.Primary,
          borderRadius: 5
        }), thresh_lib_1["default"].createElement(Container, {
          margin: 5,
          flex: 3,
          height: 50,
          backgroundColor: config_1.Colors.Primary,
          borderRadius: 5
        }))), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "Flex \u5E03\u5C40 2"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Container, {
          width: Box_1["default"].width,
          row: true,
          justifyContent: "spaceAround",
          padding: 10
        }, thresh_lib_1["default"].createElement(Container, {
          margin: 5,
          width: 50,
          height: 50,
          backgroundColor: config_1.Colors.Primary,
          borderRadius: 5
        }), thresh_lib_1["default"].createElement(Container, {
          margin: 5,
          width: 50,
          height: 50,
          backgroundColor: config_1.Colors.Primary,
          borderRadius: 5
        }), thresh_lib_1["default"].createElement(Container, {
          margin: 5,
          width: 50,
          height: 50,
          backgroundColor: config_1.Colors.Primary,
          borderRadius: 5
        }))), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "Flex \u5E03\u5C40 3"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Container, {
          width: Box_1["default"].width,
          height: 300,
          justifyContent: "spaceBetween",
          alignItems: "center",
          padding: 10
        }, thresh_lib_1["default"].createElement(Container, {
          margin: 5,
          width: 50,
          height: 50,
          backgroundColor: config_1.Colors.Primary,
          borderRadius: 5
        }), thresh_lib_1["default"].createElement(Container, {
          margin: 5,
          width: 50,
          height: 50,
          backgroundColor: config_1.Colors.Primary,
          borderRadius: 5
        }), thresh_lib_1["default"].createElement(Container, {
          margin: 5,
          width: 50,
          height: 50,
          backgroundColor: config_1.Colors.Primary,
          borderRadius: 5
        })))));
      } catch (_e9) {
        __reportError__(_e9, "", "/pages/basic/ContainerDemo.tsx");

        throw _e9;
      }
    };

    return ContainerDemo;
  } catch (_e10) {
    __reportError__(_e10, "", "/pages/basic/ContainerDemo.tsx");

    throw _e10;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = ContainerDemo;

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/widgets/Title.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/widgets/Title.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/widgets/Title.tsx");

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
            __reportError__(_e4, "", "/widgets/Title.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/widgets/Title.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/widgets/Title.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Text = thresh_lib_1.basicWidgets.Text;

var Title =
/** @class */
function (_super) {
  try {
    __extends(Title, _super);

    function Title() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e7) {
        __reportError__(_e7, "", "/widgets/Title.tsx");

        throw _e7;
      }
    }

    Title.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Text, {
          margin: {
            left: 10,
            top: 10,
            bottom: 5
          },
          padding: {
            left: 10
          },
          border: {
            width: 5,
            color: config_1.Colors.Primary,
            side: ['left']
          },
          color: config_1.Colors.Primary
        }, this.props.title);
      } catch (_e8) {
        __reportError__(_e8, "", "/widgets/Title.tsx");

        throw _e8;
      }
    };

    return Title;
  } catch (_e9) {
    __reportError__(_e9, "", "/widgets/Title.tsx");

    throw _e9;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = Title;

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/pages/basic/TextDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/TextDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/TextDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/TextDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/TextDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/TextDemo.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Title_1 = __webpack_require__(298);

var Box_1 = __webpack_require__(286);

var basicWidget_1 = __webpack_require__(247);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    ScrollView = thresh_lib_1.basicWidgets.ScrollView,
    Text = thresh_lib_1.basicWidgets.Text;

var TextDemo =
/** @class */
function (_super) {
  try {
    __extends(TextDemo, _super);

    function TextDemo() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e7) {
        __reportError__(_e7, "", "/pages/basic/TextDemo.tsx");

        throw _e7;
      }
    }

    TextDemo.prototype.widgetDidMount = function () {
      try {
        thresh_lib_1["default"].pageDidShow();
      } catch (_e8) {
        __reportError__(_e8, "", "/pages/basic/TextDemo.tsx");

        throw _e8;
      }
    };

    TextDemo.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "Text \u6587\u672C\u7EC4\u4EF6"
          })
        }, thresh_lib_1["default"].createElement(ScrollView, null, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u666E\u901A\u6587\u672C"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.Primary,
          size: 20,
          weight: "bolder"
        }, "\u8FD9\u662F\u4E00\u6BB5\u666E\u901A\u6587\u672C\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u6587\u672C\u989C\u8272\u548C\u5B57\u53F7\u3001\u5B57\u91CD\u3002")), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u5BCC\u6587\u672C"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Text, {
          richText: [{
            text: '这是富文本的红色文字，',
            color: 0xffff0000
          }, {
            text: '这是富文本的绿色加粗文字，',
            color: 0xff00ff00,
            weight: 'bolder'
          }, {
            text: '这是富文本的蓝色加粗加大文字。',
            color: 0xff0000ff,
            weight: 'bolder',
            size: 20
          }]
        }, "\u8FD9\u662F\u4E00\u6BB5\u5BCC\u6587\u672C\uFF0C")), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(basicWidget_1.Container, {
          height: 50,
          border: {
            color: config_1.Colors.Primary
          },
          justifyContent: "center",
          alignItems: "center"
        }, thresh_lib_1["default"].createElement(Text, {
          border: {
            color: config_1.Colors.Red
          }
        }, "HFJKHDSJFHJSDHFJKD")))));
      } catch (_e9) {
        __reportError__(_e9, "", "/pages/basic/TextDemo.tsx");

        throw _e9;
      }
    };

    return TextDemo;
  } catch (_e10) {
    __reportError__(_e10, "", "/pages/basic/TextDemo.tsx");

    throw _e10;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = TextDemo;

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/pages/basic/ImageDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/ImageDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/ImageDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/ImageDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/ImageDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/ImageDemo.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Title_1 = __webpack_require__(298);

var Box_1 = __webpack_require__(286);

var test_image_png_1 = __webpack_require__(301);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    ScrollView = thresh_lib_1.basicWidgets.ScrollView,
    Image = thresh_lib_1.basicWidgets.Image;

var ImageDemo =
/** @class */
function (_super) {
  try {
    __extends(ImageDemo, _super);

    function ImageDemo() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e7) {
        __reportError__(_e7, "", "/pages/basic/ImageDemo.tsx");

        throw _e7;
      }
    }

    ImageDemo.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "Image \u56FE\u7247\u7EC4\u4EF6"
          })
        }, thresh_lib_1["default"].createElement(ScrollView, null, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u672C\u5730\u56FE\u7247"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Image, {
          src: test_image_png_1["default"]
        })), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u7F51\u7EDC\u56FE\u7247"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Image, {
          src: "http://dmimg.5054399.com/allimg/pkm/pk/22.jpg"
        })), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u5E26\u5360\u4F4D\u56FE\u7684\u7F51\u7EDC\u56FE\u7247"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Image, {
          placeholder: test_image_png_1["default"],
          src: "https://upload-images.jianshu.io/upload_images/4741933-c8d3183c55365626.jpeg",
          fadeIn: true
        }))));
      } catch (_e8) {
        __reportError__(_e8, "", "/pages/basic/ImageDemo.tsx");

        throw _e8;
      }
    };

    return ImageDemo;
  } catch (_e9) {
    __reportError__(_e9, "", "/pages/basic/ImageDemo.tsx");

    throw _e9;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = ImageDemo;

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('/assets/test_image.png');

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/pages/basic/QrImageDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/QrImageDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/QrImageDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/QrImageDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/QrImageDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/QrImageDemo.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Title_1 = __webpack_require__(298);

var Box_1 = __webpack_require__(286);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    QrImage = thresh_lib_1.basicWidgets.QrImage;

var QrImageDemo =
/** @class */
function (_super) {
  try {
    __extends(QrImageDemo, _super);

    function QrImageDemo() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e7) {
        __reportError__(_e7, "", "/pages/basic/QrImageDemo.tsx");

        throw _e7;
      }
    }

    QrImageDemo.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "QrImage \u4E8C\u7EF4\u7801\u7EC4\u4EF6"
          })
        }, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u4E8C\u7EF4\u7801"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(QrImage, {
          text: "http://dmimg.5054399.com/allimg/pkm/pk/22.jpg",
          backgroundColor: 0xffFFFBF9,
          foregroundColor: 0xffFF5B00
        })));
      } catch (_e8) {
        __reportError__(_e8, "", "/pages/basic/QrImageDemo.tsx");

        throw _e8;
      }
    };

    return QrImageDemo;
  } catch (_e9) {
    __reportError__(_e9, "", "/pages/basic/QrImageDemo.tsx");

    throw _e9;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = QrImageDemo;

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/pages/basic/IconDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/IconDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/IconDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/IconDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/IconDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/IconDemo.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var Center_1 = __webpack_require__(293);

var Title_1 = __webpack_require__(298);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    ScrollView = thresh_lib_1.basicWidgets.ScrollView,
    Container = thresh_lib_1.basicWidgets.Container,
    Text = thresh_lib_1.basicWidgets.Text,
    Icon = thresh_lib_1.basicWidgets.Icon;

var IconDemo =
/** @class */
function (_super) {
  try {
    __extends(IconDemo, _super);

    function IconDemo() {
      try {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.icons = ['loading', 'apps', 'arrow_back', 'arrow_back_ios', 'arrow_downward', 'arrow_drop_down', 'arrow_drop_up', 'arrow_forward', 'arrow_forward_ios', 'arrow_left', 'arrow_right', 'arrow_upward', 'check', 'check_circle', 'check_circle_outline', 'add', 'add_circle', 'add_circle_outline', 'close', 'cancel', 'create', 'chevron_left', 'chevron_right', 'aexpand_lesspps', 'expand_more', 'refresh', 'fullscreen', 'fullscreen_exit', 'more_horiz', 'more_vert', 'unfold_less', 'unfold_more', 'control_point', 'crop', 'adjust', 'camera', 'camera_alt', 'image', 'broken_image', 'phone_iphone', 'phone_android', 'watch', 'tv', 'headset', 'computer', 'cloud_done', 'cloud_download', 'cloud_upload', 'cloud_off', 'folder', 'title', 'insert_link', 'insert_chart', 'format_quote', 'format_list_bulleted', 'format_list_numbered', 'attach_file', 'attach_money', 'access_alarms', 'account_box', 'account_circle', 'bookmark', 'bookmark_border', 'fingerprint', 'gif', 'home', 'info', 'info_outline'];
        return _this;
      } catch (_e7) {
        __reportError__(_e7, "IconDemo", "/pages/basic/IconDemo.tsx");

        throw _e7;
      }
    }

    IconDemo.prototype.render = function () {
      try {
        var _context;

        return thresh_lib_1["default"].createElement(Page, {
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "Icon \u56FE\u6807\u7EC4\u4EF6"
          })
        }, thresh_lib_1["default"].createElement(ScrollView, null, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "Tip: Loading \u56FE\u6807\u4E0D\u652F\u6301\u4FEE\u6539\u989C\u8272!"
        }), thresh_lib_1["default"].createElement(Container, {
          row: true,
          wrap: true,
          width: thresh_lib_1.ui.screenWidth
        }, (0, _map["default"])(_context = this.icons).call(_context, function (icon) {
          try {
            return thresh_lib_1["default"].createElement(Center_1["default"], {
              padding: thresh_lib_1.ui.rpx(20),
              width: thresh_lib_1.ui.screenWidth / 3
            }, thresh_lib_1["default"].createElement(Icon, {
              type: icon,
              size: thresh_lib_1.ui.rpx(40)
            }), thresh_lib_1["default"].createElement(Text, {
              size: thresh_lib_1.ui.rpx(20),
              margin: {
                top: thresh_lib_1.ui.rpx(10)
              }
            }, icon));
          } catch (_e8) {
            __reportError__(_e8, "", "/pages/basic/IconDemo.tsx");

            throw _e8;
          }
        })), thresh_lib_1["default"].createElement(Container, {
          height: thresh_lib_1.ui.bottomBarHeight
        })));
      } catch (_e9) {
        __reportError__(_e9, "", "/pages/basic/IconDemo.tsx");

        throw _e9;
      }
    };

    return IconDemo;
  } catch (_e10) {
    __reportError__(_e10, "", "/pages/basic/IconDemo.tsx");

    throw _e10;
  }
}(thresh_lib_1.Widget);

exports["default"] = IconDemo;

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _map = _interopRequireDefault(__webpack_require__(227));

var _fill = _interopRequireDefault(__webpack_require__(305));

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
            __reportError__(_e, "", "/pages/basic/ScrollViewDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/ScrollViewDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/ScrollViewDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/ScrollViewDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/ScrollViewDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/ScrollViewDemo.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var Box_1 = __webpack_require__(286);

var Title_1 = __webpack_require__(298);

var config_1 = __webpack_require__(284);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    ScrollView = thresh_lib_1.basicWidgets.ScrollView,
    Container = thresh_lib_1.basicWidgets.Container,
    Text = thresh_lib_1.basicWidgets.Text;

var ScrollViewDemo =
/** @class */
function (_super) {
  try {
    __extends(ScrollViewDemo, _super);

    function ScrollViewDemo() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e7) {
        __reportError__(_e7, "", "/pages/basic/ScrollViewDemo.tsx");

        throw _e7;
      }
    }

    ScrollViewDemo.prototype.renderContent = function () {
      try {
        var _context, _context2;

        return (0, _map["default"])(_context = (0, _fill["default"])(_context2 = new Array(20)).call(_context2, 1)).call(_context, function () {
          try {
            return thresh_lib_1["default"].createElement(Container, {
              borderRadius: 5,
              width: 20,
              height: 20,
              backgroundColor: config_1.Colors.Primary,
              margin: 5
            });
          } catch (_e8) {
            __reportError__(_e8, "", "/pages/basic/ScrollViewDemo.tsx");

            throw _e8;
          }
        });
      } catch (_e9) {
        __reportError__(_e9, "", "/pages/basic/ScrollViewDemo.tsx");

        throw _e9;
      }
    };

    ScrollViewDemo.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "ScrollView \u6EDA\u52A8\u7EC4\u4EF6"
          }),
          backgroundColor: config_1.Colors.Pagebg
        }, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u7AD6\u5411\u6EDA\u52A8"
        }), thresh_lib_1["default"].createElement(Box_1["default"], {
          contentWidth: 30
        }, thresh_lib_1["default"].createElement(Container, {
          width: 30,
          height: thresh_lib_1.ui.screenHeight / 3
        }, thresh_lib_1["default"].createElement(ScrollView, null, this.renderContent()))), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u6A2A\u5411\u6EDA\u52A8"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Container, {
          width: Box_1["default"].width,
          height: 30
        }, thresh_lib_1["default"].createElement(ScrollView, {
          direction: "horizontal"
        }, thresh_lib_1["default"].createElement(Container, {
          row: true
        }, this.renderContent())))));
      } catch (_e10) {
        __reportError__(_e10, "", "/pages/basic/ScrollViewDemo.tsx");

        throw _e10;
      }
    };

    return ScrollViewDemo;
  } catch (_e11) {
    __reportError__(_e11, "", "/pages/basic/ScrollViewDemo.tsx");

    throw _e11;
  }
}(thresh_lib_1.Widget);

exports["default"] = ScrollViewDemo;

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(306);

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(307);

module.exports = parent;


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

var fill = __webpack_require__(308);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.fill;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.fill) ? fill : own;
};


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(309);
var entryVirtual = __webpack_require__(85);

module.exports = entryVirtual('Array').fill;


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(6);
var fill = __webpack_require__(310);
var addToUnscopables = __webpack_require__(34);

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(50);
var toAbsoluteIndex = __webpack_require__(66);
var toLength = __webpack_require__(64);

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _assign = _interopRequireDefault(__webpack_require__(199));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _map = _interopRequireDefault(__webpack_require__(227));

var _splice = _interopRequireDefault(__webpack_require__(184));

var _reverse = _interopRequireDefault(__webpack_require__(312));

var _promise = _interopRequireDefault(__webpack_require__(95));

var _setTimeout2 = _interopRequireDefault(__webpack_require__(317));

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
            __reportError__(_e, "", "/pages/basic/ListViewDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/ListViewDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/ListViewDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/ListViewDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/ListViewDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/ListViewDemo.tsx");

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
        __reportError__(_e7, "", "/pages/basic/ListViewDemo.tsx");

        throw _e7;
      }
    };

    return __assign.apply(this, arguments);
  } catch (_e8) {
    __reportError__(_e8, "", "/pages/basic/ListViewDemo.tsx");

    throw _e8;
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
  } catch (_e9) {
    __reportError__(_e9, "", "/pages/basic/ListViewDemo.tsx");

    throw _e9;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    ListView = thresh_lib_1.basicWidgets.ListView,
    SwipeActionsView = thresh_lib_1.basicWidgets.SwipeActionsView,
    Container = thresh_lib_1.basicWidgets.Container,
    Text = thresh_lib_1.basicWidgets.Text,
    Image = thresh_lib_1.basicWidgets.Image,
    Icon = thresh_lib_1.basicWidgets.Icon;

var ListViewDemo =
/** @class */
function (_super) {
  try {
    __extends(ListViewDemo, _super);

    function ListViewDemo(props) {
      try {
        var _this = _super.call(this, props) || this;

        _this.infos = [{
          image: 'https://upload-images.jianshu.io/upload_images/4741933-c8d3183c55365626.jpeg',
          text: '其实对于架上绘画十九世纪四十年代，西方就说已死亡了，但是现实是没有死亡反而大有复兴的趋势。同样作为书法中最传统的楷书，也正在受到大众的喜爱。比如这位女裁缝刘智莉，没有任何背景，靠写小楷上央视当劳模，老百姓就喜欢她的小楷。'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-8d192aa6a46409f1.jpeg',
          text: '尤其让人感动的是，刘智莉把农村老家的房子改成了工会的“刘智莉劳模工作室”和文广局的“文化大院”，离乡不忘本，作为刘智莉给乡亲们解忧帮困的场所。“做好自己的事，只要有利他人和社会的事，就去做。”这是这些年来，刘智莉秉持的做人原则，也是师承恩师宁书纶“书法之道先做人”的教诲。'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-0e60846632d72d64.jpeg',
          text: '刘智莉是天津市静海县杨成庄乡杨成庄村的一位农村女裁缝。三十六年前没考上大学，到一家乡办服装厂做缝纫工。因为喜欢写字，午休时间，她骑自行车到离厂里3里外的乡文化站拜师求教。花了7个月的工资参加书法培训。每到面授的日子，她凌晨4点起床，摸黑骑车往返70公里路，到南开大学上课。'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-2bfeb5575de9aa75.jpeg',
          text: '刘智莉的苦学精神感动到了书法辅导老师、著名书法家宁书纶，并收她为徒。在老师的经心指导下，刘智莉从欧阳询的《九成宫醴泉铭》开始临习，再临《化度寺》《皇甫君碑》，再到王羲之的小楷《洛神赋十三行》以及赵孟、钟绍京等。每年练字的废纸就要堆出4米多高。三十六年来练字的废纸堆要达150米高了。她的小楷越写越好，网友称赞她的小楷堪比王羲之。'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-32f9cb85487712f0.jpeg',
          text: '后来乡办企业不景气，刘智莉就回家自己做裁缝。成家后生活所迫，每年腊月廿至廿九到集市上去卖春联，卖了九年春联，因天津电视台、《天津日报》《今晚报》等媒体的报道，刘智莉成了当地有名的小人物了，不时有附近的乡亲找她帮忙。学书法先学做人，刘智莉时刻牢记老师的教导，她能帮尽力帮，不能帮的她找媒体。二零零二年，刘智莉为了帮助一位单身母亲遇到的困难，写信给央视《半边天》栏目，也就是这一次节目组来采访报道，被刘智莉热衷书法乐于助人，自强不息的精神感动了。节目主持人张越对她说：“你的善良和勤奋，一定会成就你。”'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-7c8a3f303e012c44.jpeg',
          text: '过了一年，《半边天》专程为刘智莉做了一期专访。节目播出后，在全国引起了强烈反响。杭州一位姓梁的老先生很喜欢刘智莉的小楷，辗转找到了她，打电话给她说：“你这双手就应该写字，不应该再做裁缝了”。也从这一年开始，刘智莉给梁先生用小楷抄写东西，梁先生连续两年给她买下了多达几十万的书法作品。'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-aaff222a4d61b9cd.jpeg',
          text: '到了二零零五年，刘智莉在第二届天津书坛新人作品展中获了奖。从此，开始有人来买她的字。随着举办了几场展览和几次获奖，刘智莉的名气越来越大，来买她的字人也多起来了。二零零六年，刘智莉因为乐于帮助乡亲，作为农民界别的优秀代表当选静海县政协委员，并当选了劳模。二零零八年，刘智莉当选天津市劳动模范，二零一二年当选天津市政协委员，因为她的书法成就，成为文艺界别的委员。'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-921dd03ae5716a9e.jpeg',
          text: '就是这样一位从传统书法一步一个脚印，苦学苦练，扎扎实实走出来的女书法家，就因为她写的是楷书，也曾被专家认为没有什么艺术性。相反，很多网友却认为，这是专家对草根高手的羡慕嫉妒恨，以贬低别人来维护自己的那点自尊。不过，现实是最好的证明，如今刘智莉不仅靠写书法，在镇上了买了房子，两个孩子也培养成了大学生。她的书法还从国内走向国外，作品先后被新加坡、美国、加拿大的国际友人及国内朋友收藏。'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-e576a5161f13c2bf.jpeg',
          text: '不知从什么时候起，我们发现走传统的路子，都会被一些专家看不起。比如中国写实画派的领军人物冷军，他的绘画水平绝对是天下无敌，因为走的是传统写实的这条路，所以对他的作品评价总是缺乏公正，说什么超写实就是停留在绘画的技艺上，内容没有现代前卫有创作性，是照片的复制没有多少艺术性。就连很多网友也觉得现在都什么年代了，有高清数码相机，还用得了这么费劲花个一年半载去画吗？'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-8841549061978867.jpeg',
          text: '绘画界如此，书法圈也是，你写个狂草就不得了，写个行书也总有掌声，如果你还是在写楷书，哪怕你的小楷、蝇头小楷写得再好，专家们就会说一句，没有变化，没有艺术性，是“台阁体”“馆阁体”，反而那些搞怪的乱书、吼书、盲书、射书、网书、竹书等丑书却大有市场。'
        }];
        _this.state = {
          page: 1,
          loading: false,
          contents: _this.getMore()
        };
        return _this;
      } catch (_e10) {
        __reportError__(_e10, "ListViewDemo", "/pages/basic/ListViewDemo.tsx");

        throw _e10;
      }
    }

    ListViewDemo.prototype.getMore = function () {
      try {
        var _context;

        return (0, _map["default"])(_context = this.infos).call(_context, function (item) {
          try {
            return __assign(__assign({}, item), {
              id: Math.random(),
              like: false
            });
          } catch (_e11) {
            __reportError__(_e11, "__assign", "/pages/basic/ListViewDemo.tsx");

            throw _e11;
          }
        });
      } catch (_e12) {
        __reportError__(_e12, "", "/pages/basic/ListViewDemo.tsx");

        throw _e12;
      }
    };

    ListViewDemo.prototype.renderList = function () {
      try {
        var _this = this;

        var contents = this.state.contents;
        return (0, _map["default"])(contents).call(contents, function (item, index) {
          try {
            return thresh_lib_1["default"].createElement(ListItem, __assign({
              key: item.id
            }, item, {
              index: index,
              onDelete: function onDelete() {
                try {
                  if (_this.$openedItem) {
                    _this.$openedItem.closeActions();

                    _this.$openedItem = null;
                  }

                  (0, _splice["default"])(contents).call(contents, index, 1);

                  _this.setState({
                    contents: contents
                  });
                } catch (_e13) {
                  __reportError__(_e13, "onDelete", "/pages/basic/ListViewDemo.tsx");

                  throw _e13;
                }
              },
              onOpen: function onOpen(ref) {
                try {
                  if (_this.$openedItem && _this.$openedItem !== ref) _this.$openedItem.closeActions();
                  _this.$openedItem = ref;
                } catch (_e14) {
                  __reportError__(_e14, "onOpen", "/pages/basic/ListViewDemo.tsx");

                  throw _e14;
                }
              }
            }));
          } catch (_e15) {
            __reportError__(_e15, "", "/pages/basic/ListViewDemo.tsx");

            throw _e15;
          }
        });
      } catch (_e16) {
        __reportError__(_e16, "", "/pages/basic/ListViewDemo.tsx");

        throw _e16;
      }
    };

    ListViewDemo.prototype.render = function () {
      try {
        var _this = this;

        return thresh_lib_1["default"].createElement(Page, {
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "ListView \u5217\u8868\u7EC4\u4EF6"
          }),
          backgroundColor: config_1.Colors.Pagebg,
          onShow: function onShow() {
            try {
              var _context2;

              (0, _reverse["default"])(_context2 = _this.infos).call(_context2);

              _this.setState();
            } catch (_e17) {
              __reportError__(_e17, "onShow", "/pages/basic/ListViewDemo.tsx");

              throw _e17;
            }
          }
        }, thresh_lib_1["default"].createElement(ListView, {
          refreshColor: config_1.Colors.White,
          refreshBackgroundColor: config_1.Colors.Primary,
          onRefresh: function onRefresh() {
            try {
              return new _promise["default"](function (resolve) {
                try {
                  (0, _setTimeout2["default"])(function () {
                    try {
                      _this.setState({
                        page: 1,
                        contents: __spreadArrays(_this.getMore())
                      });

                      resolve();
                    } catch (_e18) {
                      __reportError__(_e18, "", "/pages/basic/ListViewDemo.tsx");

                      throw _e18;
                    }
                  }, 3000);
                } catch (_e19) {
                  __reportError__(_e19, "", "/pages/basic/ListViewDemo.tsx");

                  throw _e19;
                }
              });
            } catch (_e20) {
              __reportError__(_e20, "", "/pages/basic/ListViewDemo.tsx");

              throw _e20;
            }
          },
          onLoadMore: function onLoadMore() {
            try {
              var page = _this.state.page; // if (page >= 5) return Promise.resolve()

              _this.setState({
                loading: true
              });

              return new _promise["default"](function (resolve) {
                try {
                  (0, _setTimeout2["default"])(function () {
                    try {
                      var contents = _this.state.contents;

                      _this.setState({
                        page: page + 1,
                        loading: false,
                        contents: __spreadArrays(contents, _this.getMore())
                      });

                      resolve();
                    } catch (_e21) {
                      __reportError__(_e21, "", "/pages/basic/ListViewDemo.tsx");

                      throw _e21;
                    }
                  }, 100);
                } catch (_e22) {
                  __reportError__(_e22, "", "/pages/basic/ListViewDemo.tsx");

                  throw _e22;
                }
              });
            } catch (_e23) {
              __reportError__(_e23, "onLoadMore", "/pages/basic/ListViewDemo.tsx");

              throw _e23;
            }
          }
        }, this.renderList(), thresh_lib_1["default"].createElement(Container, {
          margin: 10,
          alignItems: "center"
        }, this.state.loading ? thresh_lib_1["default"].createElement(Icon, {
          type: "loading"
        }) // : <Text>{this.state.page >= 5 ? '没有更多了' : '上拉加载更多'}</Text>
        : thresh_lib_1["default"].createElement(Text, null, "\u4E0A\u62C9\u52A0\u8F7D\u66F4\u591A"))));
      } catch (_e24) {
        __reportError__(_e24, "", "/pages/basic/ListViewDemo.tsx");

        throw _e24;
      }
    };

    return ListViewDemo;
  } catch (_e25) {
    __reportError__(_e25, "", "/pages/basic/ListViewDemo.tsx");

    throw _e25;
  }
}(thresh_lib_1.Widget);

exports["default"] = ListViewDemo;

var ListItem =
/** @class */
function (_super) {
  try {
    __extends(ListItem, _super);

    function ListItem(props) {
      try {
        var _this = _super.call(this, props) || this;

        _this.state = {
          like: props.like
        };
        return _this;
      } catch (_e26) {
        __reportError__(_e26, "ListItem", "/pages/basic/ListViewDemo.tsx");

        throw _e26;
      }
    }

    ListItem.prototype.getActionsConfig = function () {
      try {
        var _this = this;

        var index = this.props.index;
        if (index % 3 === 0) return {};
        if (index % 3 === 1) return {
          swipeMaxDistance: thresh_lib_1.ui.rpx(100),
          actions: [thresh_lib_1["default"].createElement(Container, {
            width: thresh_lib_1.ui.rpx(100),
            backgroundColor: config_1.Colors.Primary,
            alignItems: "center",
            justifyContent: "center"
          }, thresh_lib_1["default"].createElement(Text, {
            color: config_1.Colors.White
          }, "\u5173\u95ED"))]
        };
        if (index % 3 === 2) return {
          swipeMaxDistance: thresh_lib_1.ui.rpx(200),
          actions: [thresh_lib_1["default"].createElement(Container, {
            width: thresh_lib_1.ui.rpx(100),
            backgroundColor: config_1.Colors.Primary,
            alignItems: "center",
            justifyContent: "center"
          }, thresh_lib_1["default"].createElement(Text, {
            color: config_1.Colors.White
          }, "\u5173\u95ED")), thresh_lib_1["default"].createElement(Container, {
            width: thresh_lib_1.ui.rpx(100),
            backgroundColor: config_1.Colors.Red,
            alignItems: "center",
            justifyContent: "center",
            onTap: function onTap() {
              try {
                _this.props.onDelete();
              } catch (_e27) {
                __reportError__(_e27, "", "/pages/basic/ListViewDemo.tsx");

                throw _e27;
              }
            }
          }, thresh_lib_1["default"].createElement(Text, {
            color: config_1.Colors.White
          }, "\u5220\u9664"))]
        };
      } catch (_e28) {
        __reportError__(_e28, "", "/pages/basic/ListViewDemo.tsx");

        throw _e28;
      }
    };

    ListItem.prototype.render = function () {
      try {
        var _this = this;

        var _a = this.props,
            image = _a.image,
            text = _a.text,
            index = _a.index;
        var like = this.state.like;
        return thresh_lib_1["default"].createElement(SwipeActionsView, __assign({
          ref: function ref(r) {
            try {
              if (!_this.$ref) _this.$ref = r;
            } catch (_e29) {
              __reportError__(_e29, "", "/pages/basic/ListViewDemo.tsx");

              throw _e29;
            }
          },
          margin: 5,
          borderRadius: thresh_lib_1.ui.rpx(20)
        }, this.getActionsConfig(), {
          onActionsOpen: function onActionsOpen() {
            try {
              _this.props.onOpen(_this.$ref);
            } catch (_e30) {
              __reportError__(_e30, "", "/pages/basic/ListViewDemo.tsx");

              throw _e30;
            }
          },
          content: thresh_lib_1["default"].createElement(Container, {
            alignItems: "center",
            row: true,
            backgroundColor: config_1.Colors.White,
            padding: 10
          }, thresh_lib_1["default"].createElement(Image, {
            src: image,
            width: 100,
            height: 100
          }), thresh_lib_1["default"].createElement(Text, {
            width: 30,
            align: "center"
          }, index + 1), thresh_lib_1["default"].createElement(Text, {
            flex: 1,
            lineHeight: 1.5
          }, text), thresh_lib_1["default"].createElement(Icon, {
            type: "bookmark",
            color: like ? config_1.Colors.Primary : config_1.Colors.Lightgray,
            size: 24,
            onTap: function onTap() {
              try {
                _this.setState({
                  like: !like
                });
              } catch (_e31) {
                __reportError__(_e31, "", "/pages/basic/ListViewDemo.tsx");

                throw _e31;
              }
            }
          }))
        }));
      } catch (_e32) {
        __reportError__(_e32, "", "/pages/basic/ListViewDemo.tsx");

        throw _e32;
      }
    };

    return ListItem;
  } catch (_e33) {
    __reportError__(_e33, "", "/pages/basic/ListViewDemo.tsx");

    throw _e33;
  }
}(thresh_lib_1["default"].Widget);

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(313);

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(314);

module.exports = parent;


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var reverse = __webpack_require__(315);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reverse;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.reverse) ? reverse : own;
};


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(316);
var entryVirtual = __webpack_require__(85);

module.exports = entryVirtual('Array').reverse;


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6);
var isArray = __webpack_require__(83);

var nativeReverse = [].reverse;
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(318);

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(319);
var path = __webpack_require__(24);

module.exports = path.setTimeout;


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(6);
var global = __webpack_require__(7);
var userAgent = __webpack_require__(56);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/pages/basic/SwipeActionsViewDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/SwipeActionsViewDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/SwipeActionsViewDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/SwipeActionsViewDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/SwipeActionsViewDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/SwipeActionsViewDemo.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var Box_1 = __webpack_require__(286);

var Title_1 = __webpack_require__(298);

var config_1 = __webpack_require__(284);

var Center_1 = __webpack_require__(293);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    SwipeActionsView = thresh_lib_1.basicWidgets.SwipeActionsView,
    Container = thresh_lib_1.basicWidgets.Container,
    Text = thresh_lib_1.basicWidgets.Text,
    Button = thresh_lib_1.basicWidgets.Button;

var SwipeActionsViewDemo =
/** @class */
function (_super) {
  try {
    __extends(SwipeActionsViewDemo, _super);

    function SwipeActionsViewDemo() {
      try {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          isOpening: false
        };
        return _this;
      } catch (_e7) {
        __reportError__(_e7, "SwipeActionsViewDemo", "/pages/basic/SwipeActionsViewDemo.tsx");

        throw _e7;
      }
    }

    SwipeActionsViewDemo.prototype.render = function () {
      try {
        var _this = this;

        var isOpening = this.state.isOpening;
        return thresh_lib_1["default"].createElement(Page, {
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "SwiperActionsView \u4FA7\u6ED1\u6309\u94AE\u7EC4\u4EF6"
          }),
          backgroundColor: config_1.Colors.Pagebg
        }, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u4FA7\u6ED1\u6309\u94AE\u7EC4\u4EF6\u72B6\u6001: " + (isOpening ? '开启' : '关闭')
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(SwipeActionsView, {
          borderRadius: 5,
          swipeMaxDistance: thresh_lib_1.ui.rpx(100),
          actions: [thresh_lib_1["default"].createElement(Center_1["default"], {
            width: thresh_lib_1.ui.rpx(100),
            backgroundColor: config_1.Colors.Red
          }, thresh_lib_1["default"].createElement(Text, {
            color: config_1.Colors.White
          }, "\u70B9\u51FB"), thresh_lib_1["default"].createElement(Text, {
            color: config_1.Colors.White
          }, "\u5173\u95ED"))],
          content: thresh_lib_1["default"].createElement(Container, {
            width: Box_1["default"].width,
            padding: 30,
            backgroundColor: config_1.Colors.Primary,
            justifyContent: "center"
          }, thresh_lib_1["default"].createElement(Text, {
            color: config_1.Colors.White
          }, "\u5411\u5DE6\u4FA7\u6A2A\u5411\u6ED1\u52A8\u663E\u793A\u6309\u94AE")),
          ref: function ref(_ref) {
            try {
              if (!_this.$actions) _this.$actions = _ref;
            } catch (_e8) {
              __reportError__(_e8, "", "/pages/basic/SwipeActionsViewDemo.tsx");

              throw _e8;
            }
          },
          onActionsOpen: function onActionsOpen() {
            try {
              _this.setState({
                isOpening: true
              });
            } catch (_e9) {
              __reportError__(_e9, "", "/pages/basic/SwipeActionsViewDemo.tsx");

              throw _e9;
            }
          },
          onActionsClose: function onActionsClose() {
            try {
              _this.setState({
                isOpening: false
              });
            } catch (_e10) {
              __reportError__(_e10, "", "/pages/basic/SwipeActionsViewDemo.tsx");

              throw _e10;
            }
          }
        })), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u64CD\u4F5C\u6309\u94AE"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Button, {
          borderRadius: 5,
          backgroundColor: config_1.Colors.Primary,
          height: 40,
          margin: {
            bottom: 10
          },
          onTap: function onTap() {
            try {
              if (_this.$actions) {
                _this.$actions.openActions();
              }
            } catch (_e11) {
              __reportError__(_e11, "", "/pages/basic/SwipeActionsViewDemo.tsx");

              throw _e11;
            }
          }
        }, thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u6253\u5F00\u64CD\u4F5C\u6309\u94AE")), thresh_lib_1["default"].createElement(Button, {
          borderRadius: 5,
          backgroundColor: config_1.Colors.Primary,
          height: 40,
          onTap: function onTap() {
            try {
              if (_this.$actions) {
                _this.$actions.closeActions();
              }
            } catch (_e12) {
              __reportError__(_e12, "", "/pages/basic/SwipeActionsViewDemo.tsx");

              throw _e12;
            }
          }
        }, thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u5173\u95ED\u64CD\u4F5C\u6309\u94AE"))));
      } catch (_e13) {
        __reportError__(_e13, "", "/pages/basic/SwipeActionsViewDemo.tsx");

        throw _e13;
      }
    };

    return SwipeActionsViewDemo;
  } catch (_e14) {
    __reportError__(_e14, "", "/pages/basic/SwipeActionsViewDemo.tsx");

    throw _e14;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = SwipeActionsViewDemo;

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _map = _interopRequireDefault(__webpack_require__(227));

var _fill = _interopRequireDefault(__webpack_require__(305));

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
            __reportError__(_e, "", "/pages/basic/SwiperViewDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/SwiperViewDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/SwiperViewDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/SwiperViewDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/SwiperViewDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/SwiperViewDemo.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var Box_1 = __webpack_require__(286);

var Title_1 = __webpack_require__(298);

var config_1 = __webpack_require__(284);

var Center_1 = __webpack_require__(293);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    SwiperView = thresh_lib_1.basicWidgets.SwiperView,
    Text = thresh_lib_1.basicWidgets.Text;

var SwiperViewDemo =
/** @class */
function (_super) {
  try {
    __extends(SwiperViewDemo, _super);

    function SwiperViewDemo() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e7) {
        __reportError__(_e7, "", "/pages/basic/SwiperViewDemo.tsx");

        throw _e7;
      }
    }

    SwiperViewDemo.prototype.renderContent = function () {
      try {
        var _context, _context2;

        return (0, _map["default"])(_context = (0, _fill["default"])(_context2 = new Array(20)).call(_context2, 1)).call(_context, function (item, index) {
          try {
            return thresh_lib_1["default"].createElement(Center_1["default"], {
              backgroundColor: config_1.Colors.Primary,
              margin: 5
            }, thresh_lib_1["default"].createElement(Text, {
              color: config_1.Colors.White,
              weight: "bolder"
            }, index));
          } catch (_e8) {
            __reportError__(_e8, "", "/pages/basic/SwiperViewDemo.tsx");

            throw _e8;
          }
        });
      } catch (_e9) {
        __reportError__(_e9, "", "/pages/basic/SwiperViewDemo.tsx");

        throw _e9;
      }
    };

    SwiperViewDemo.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "SwiperView \u6ED1\u52A8\u7EC4\u4EF6"
          }),
          backgroundColor: config_1.Colors.Pagebg
        }, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u6A2A\u5411\u6ED1\u52A8"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(SwiperView, {
          width: Box_1["default"].width,
          height: thresh_lib_1.ui.screenHeight / 4,
          viewportFraction: 0.9
        }, this.renderContent())), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u7AD6\u5411\u6ED1\u52A8"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(SwiperView, {
          width: Box_1["default"].width,
          height: thresh_lib_1.ui.screenHeight / 4,
          row: false
        }, this.renderContent())));
      } catch (_e10) {
        __reportError__(_e10, "", "/pages/basic/SwiperViewDemo.tsx");

        throw _e10;
      }
    };

    return SwiperViewDemo;
  } catch (_e11) {
    __reportError__(_e11, "", "/pages/basic/SwiperViewDemo.tsx");

    throw _e11;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = SwiperViewDemo;

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/pages/basic/NativeViewDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/NativeViewDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/NativeViewDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/NativeViewDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/NativeViewDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/NativeViewDemo.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var Box_1 = __webpack_require__(286);

var config_1 = __webpack_require__(284);

var basicWidget_1 = __webpack_require__(247);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Text = thresh_lib_1.basicWidgets.Text;

var NativeViewDemo =
/** @class */
function (_super) {
  try {
    __extends(NativeViewDemo, _super);

    function NativeViewDemo() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e7) {
        __reportError__(_e7, "", "/pages/basic/NativeViewDemo.tsx");

        throw _e7;
      }
    }

    NativeViewDemo.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "NativeView \u539F\u751F\u89C6\u56FE\u7EC4\u4EF6",
            titleColor: config_1.Colors.White,
            backgroundColor: config_1.Colors.Primary
          }),
          backgroundColor: config_1.Colors.Primary
        }, thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(basicWidget_1.NativeView, {
          type: "thresh/native_text_view",
          params: {
            "text": "我是NativeTextView，测试"
          },
          width: thresh_lib_1.ui.screenWidth,
          height: thresh_lib_1.ui.rpx(100),
          backgroundColor: 0xffFFFBF9
        })));
      } catch (_e8) {
        __reportError__(_e8, "", "/pages/basic/NativeViewDemo.tsx");

        throw _e8;
      }
    };

    return NativeViewDemo;
  } catch (_e9) {
    __reportError__(_e9, "", "/pages/basic/NativeViewDemo.tsx");

    throw _e9;
  }
}(thresh_lib_1.Widget);

exports["default"] = NativeViewDemo;

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _assign = _interopRequireDefault(__webpack_require__(199));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/pages/basic/ButtonDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/ButtonDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/ButtonDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/ButtonDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/ButtonDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/ButtonDemo.tsx");

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
        __reportError__(_e7, "", "/pages/basic/ButtonDemo.tsx");

        throw _e7;
      }
    };

    return __assign.apply(this, arguments);
  } catch (_e8) {
    __reportError__(_e8, "", "/pages/basic/ButtonDemo.tsx");

    throw _e8;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Title_1 = __webpack_require__(298);

var Box_1 = __webpack_require__(286);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Container = thresh_lib_1.basicWidgets.Container,
    Button = thresh_lib_1.basicWidgets.Button,
    Text = thresh_lib_1.basicWidgets.Text;

var ButtonDemo =
/** @class */
function (_super) {
  try {
    __extends(ButtonDemo, _super);

    function ButtonDemo() {
      try {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          count: 0
        };
        _this.buttonStyles = {
          width: 100,
          padding: 10,
          borderRadius: 5,
          backgroundColor: config_1.Colors.Primary
        };
        return _this;
      } catch (_e9) {
        __reportError__(_e9, "ButtonDemo", "/pages/basic/ButtonDemo.tsx");

        throw _e9;
      }
    }

    ButtonDemo.prototype.render = function () {
      try {
        var _this = this;

        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "Button \u6309\u94AE\u7EC4\u4EF6"
          })
        }, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: '点击按钮计数: ' + this.state.count
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Container, {
          width: Box_1["default"].width,
          row: true,
          justifyContent: "spaceAround"
        }, thresh_lib_1["default"].createElement(Button, __assign({}, this.buttonStyles, {
          onTap: function onTap() {
            try {
              _this.setState({
                count: _this.state.count - 1
              });
            } catch (_e10) {
              __reportError__(_e10, "", "/pages/basic/ButtonDemo.tsx");

              throw _e10;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u70B9\u51FB-1")), thresh_lib_1["default"].createElement(Button, __assign({}, this.buttonStyles, {
          onTap: function onTap() {
            try {
              _this.setState({
                count: _this.state.count + 1
              });
            } catch (_e11) {
              __reportError__(_e11, "", "/pages/basic/ButtonDemo.tsx");

              throw _e11;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u70B9\u51FB+1")))));
      } catch (_e12) {
        __reportError__(_e12, "", "/pages/basic/ButtonDemo.tsx");

        throw _e12;
      }
    };

    return ButtonDemo;
  } catch (_e13) {
    __reportError__(_e13, "", "/pages/basic/ButtonDemo.tsx");

    throw _e13;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = ButtonDemo;

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/pages/basic/RadioDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/RadioDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/RadioDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/RadioDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/RadioDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/RadioDemo.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Title_1 = __webpack_require__(298);

var Box_1 = __webpack_require__(286);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Radio = thresh_lib_1.basicWidgets.Radio,
    Text = thresh_lib_1.basicWidgets.Text;

var RadioDemo =
/** @class */
function (_super) {
  try {
    __extends(RadioDemo, _super);

    function RadioDemo() {
      try {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          value: void 0
        };
        _this.radioList = ['apple', 'banana', 'orange', 'pear', 'mango'];
        return _this;
      } catch (_e7) {
        __reportError__(_e7, "RadioDemo", "/pages/basic/RadioDemo.tsx");

        throw _e7;
      }
    }

    RadioDemo.prototype.render = function () {
      try {
        var _context;

        var _this = this;

        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "Radio \u5355\u9009\u6846\u7EC4\u4EF6"
          })
        }, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: this.state.value ? '当前选中: ' + this.state.value : '当前未选中'
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, (0, _map["default"])(_context = this.radioList).call(_context, function (item) {
          try {
            return thresh_lib_1["default"].createElement(Radio, {
              height: 30,
              value: item,
              groupValue: _this.state.value,
              activeColor: config_1.Colors.Primary,
              onChange: function onChange(_a) {
                try {
                  var value = _a.value;

                  _this.setState({
                    value: value
                  });
                } catch (_e8) {
                  __reportError__(_e8, "onChange", "/pages/basic/RadioDemo.tsx");

                  throw _e8;
                }
              }
            }, thresh_lib_1["default"].createElement(Text, null, item));
          } catch (_e9) {
            __reportError__(_e9, "", "/pages/basic/RadioDemo.tsx");

            throw _e9;
          }
        })));
      } catch (_e10) {
        __reportError__(_e10, "", "/pages/basic/RadioDemo.tsx");

        throw _e10;
      }
    };

    return RadioDemo;
  } catch (_e11) {
    __reportError__(_e11, "", "/pages/basic/RadioDemo.tsx");

    throw _e11;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = RadioDemo;

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _splice = _interopRequireDefault(__webpack_require__(184));

var _indexOf = _interopRequireDefault(__webpack_require__(205));

var _map = _interopRequireDefault(__webpack_require__(227));

var _bind = _interopRequireDefault(__webpack_require__(287));

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
            __reportError__(_e, "", "/pages/basic/CheckboxDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/CheckboxDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/CheckboxDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/CheckboxDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/CheckboxDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/CheckboxDemo.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Title_1 = __webpack_require__(298);

var Box_1 = __webpack_require__(286);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Checkbox = thresh_lib_1.basicWidgets.Checkbox,
    Text = thresh_lib_1.basicWidgets.Text;

var CheckboxDemo =
/** @class */
function (_super) {
  try {
    __extends(CheckboxDemo, _super);

    function CheckboxDemo() {
      try {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          value: []
        };
        _this.radioList = ['apple', 'banana', 'orange', 'pear', 'mango'];
        return _this;
      } catch (_e7) {
        __reportError__(_e7, "CheckboxDemo", "/pages/basic/CheckboxDemo.tsx");

        throw _e7;
      }
    }

    CheckboxDemo.prototype.onChange = function (item, e) {
      try {
        var value = this.state.value;
        var selected = e.value;
        if (selected) value.push(item);else (0, _splice["default"])(value).call(value, (0, _indexOf["default"])(value).call(value, item), 1);
        this.setState();
      } catch (_e8) {
        __reportError__(_e8, "", "/pages/basic/CheckboxDemo.tsx");

        throw _e8;
      }
    };

    CheckboxDemo.prototype.render = function () {
      try {
        var _context;

        var _this = this;

        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "Checkbox \u591A\u9009\u6846\u7EC4\u4EF6"
          })
        }, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: this.state.value.length ? '当前选中: ' + this.state.value.join(', ') : '当前未选中'
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, (0, _map["default"])(_context = this.radioList).call(_context, function (item) {
          try {
            var _context2, _context3;

            return thresh_lib_1["default"].createElement(Checkbox, {
              height: 30,
              value: (0, _indexOf["default"])(_context2 = _this.state.value).call(_context2, item) > -1,
              activeColor: config_1.Colors.Primary,
              onChange: (0, _bind["default"])(_context3 = _this.onChange).call(_context3, _this, item)
            }, thresh_lib_1["default"].createElement(Text, null, item));
          } catch (_e9) {
            __reportError__(_e9, "", "/pages/basic/CheckboxDemo.tsx");

            throw _e9;
          }
        })));
      } catch (_e10) {
        __reportError__(_e10, "", "/pages/basic/CheckboxDemo.tsx");

        throw _e10;
      }
    };

    return CheckboxDemo;
  } catch (_e11) {
    __reportError__(_e11, "", "/pages/basic/CheckboxDemo.tsx");

    throw _e11;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = CheckboxDemo;

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/pages/basic/InputDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/InputDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/InputDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/InputDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/InputDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/InputDemo.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Title_1 = __webpack_require__(298);

var Box_1 = __webpack_require__(286);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Container = thresh_lib_1.basicWidgets.Container,
    Input = thresh_lib_1.basicWidgets.Input;

var InputDemo =
/** @class */
function (_super) {
  try {
    __extends(InputDemo, _super);

    function InputDemo() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e7) {
        __reportError__(_e7, "", "/pages/basic/InputDemo.tsx");

        throw _e7;
      }
    }

    InputDemo.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "Input \u8F93\u5165\u6846\u7EC4\u4EF6"
          })
        }, thresh_lib_1["default"].createElement(InputDemoBody, null));
      } catch (_e8) {
        __reportError__(_e8, "", "/pages/basic/InputDemo.tsx");

        throw _e8;
      }
    };

    return InputDemo;
  } catch (_e9) {
    __reportError__(_e9, "", "/pages/basic/InputDemo.tsx");

    throw _e9;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = InputDemo;

var InputDemoBody =
/** @class */
function (_super) {
  try {
    __extends(InputDemoBody, _super);

    function InputDemoBody() {
      try {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          value: ''
        };
        return _this;
      } catch (_e10) {
        __reportError__(_e10, "InputDemoBody", "/pages/basic/InputDemo.tsx");

        throw _e10;
      }
    }

    InputDemoBody.prototype.render = function () {
      try {
        var _this = this;

        return thresh_lib_1["default"].createElement(Container, null, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: this.state.value ? "\u5F53\u524D\u8F93\u5165\u5185\u5BB9" + this.state.value.length + ": " + this.state.value : '当前未输入内容'
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Input, {
          padding: 10,
          backgroundColor: config_1.Colors.Pagebg,
          value: this.state.value,
          placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
          maxLength: 10,
          onSubmitted: function onSubmitted(_a) {
            try {
              var value = _a.value;
              thresh_lib_1.Util.log('onSubmitted', value);
            } catch (_e11) {
              __reportError__(_e11, "onSubmitted", "/pages/basic/InputDemo.tsx");

              throw _e11;
            }
          },
          onFocus: function onFocus(_a) {
            try {
              var value = _a.value;
              thresh_lib_1.Util.log('onFocus', value);
            } catch (_e12) {
              __reportError__(_e12, "onFocus", "/pages/basic/InputDemo.tsx");

              throw _e12;
            }
          },
          onBlur: function onBlur(_a) {
            try {
              var value = _a.value;
              thresh_lib_1.Util.log('onBlur', value);
            } catch (_e13) {
              __reportError__(_e13, "onBlur", "/pages/basic/InputDemo.tsx");

              throw _e13;
            }
          },
          onChange: function onChange(_a) {
            try {
              var value = _a.value;
              thresh_lib_1.Util.log('onChange', value);

              _this.setState({
                value: value
              });
            } catch (_e14) {
              __reportError__(_e14, "onChange", "/pages/basic/InputDemo.tsx");

              throw _e14;
            }
          }
        })));
      } catch (_e15) {
        __reportError__(_e15, "", "/pages/basic/InputDemo.tsx");

        throw _e15;
      }
    };

    return InputDemoBody;
  } catch (_e16) {
    __reportError__(_e16, "", "/pages/basic/InputDemo.tsx");

    throw _e16;
  }
}(thresh_lib_1["default"].Widget);

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _assign = _interopRequireDefault(__webpack_require__(199));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/pages/apis/PageActions.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/apis/PageActions.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/apis/PageActions.tsx");

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
            __reportError__(_e4, "", "/pages/apis/PageActions.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/apis/PageActions.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/apis/PageActions.tsx");

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
        __reportError__(_e7, "", "/pages/apis/PageActions.tsx");

        throw _e7;
      }
    };

    return __assign.apply(this, arguments);
  } catch (_e8) {
    __reportError__(_e8, "", "/pages/apis/PageActions.tsx");

    throw _e8;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.ReplacePage = exports.NextPage = void 0;

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Title_1 = __webpack_require__(298);

var Box_1 = __webpack_require__(286);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Button = thresh_lib_1.basicWidgets.Button,
    Text = thresh_lib_1.basicWidgets.Text;

function buttonStyles() {
  try {
    return {
      width: 120,
      padding: 10,
      borderRadius: 5,
      backgroundColor: config_1.Colors.Primary
    };
  } catch (_e9) {
    __reportError__(_e9, "", "/pages/apis/PageActions.tsx");

    throw _e9;
  }
}

var PageActions =
/** @class */
function (_super) {
  try {
    __extends(PageActions, _super);

    function PageActions() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e10) {
        __reportError__(_e10, "", "/pages/apis/PageActions.tsx");

        throw _e10;
      }
    }

    PageActions.prototype.widgetDidMount = function () {
      try {
        thresh_lib_1.Util.log('widgetDidMount');
      } catch (_e11) {
        __reportError__(_e11, "", "/pages/apis/PageActions.tsx");

        throw _e11;
      }
    };

    PageActions.prototype.widgetDidUnmount = function () {
      try {
        thresh_lib_1.Util.log('widgetDidUnmount');
      } catch (_e12) {
        __reportError__(_e12, "", "/pages/apis/PageActions.tsx");

        throw _e12;
      }
    };

    PageActions.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "\u9875\u9762\u64CD\u4F5C - \u4E3B\u9875\u9762"
          }),
          onShow: function onShow() {
            try {
              thresh_lib_1.Util.log('pageOnShow');
            } catch (_e13) {
              __reportError__(_e13, "", "/pages/apis/PageActions.tsx");

              throw _e13;
            }
          },
          onHide: function onHide() {
            try {
              thresh_lib_1.Util.log('pageOnHide');
            } catch (_e14) {
              __reportError__(_e14, "", "/pages/apis/PageActions.tsx");

              throw _e14;
            }
          }
        }, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u70B9\u51FB\u6309\u94AE\u663E\u793A\u4E0B\u7EA7\u9875\u9762"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Button, __assign({}, buttonStyles(), {
          onTap: function onTap() {
            try {
              thresh_lib_1["default"].pushPage('api-page-actions-next');
            } catch (_e15) {
              __reportError__(_e15, "", "/pages/apis/PageActions.tsx");

              throw _e15;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u4E0B\u7EA7\u9875\u9762"))), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u901A\u8FC7 openScheme \u6253\u5F00\u65B0\u9875\u9762"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Button, __assign({}, buttonStyles(), {
          onTap: function onTap() {
            try {
              thresh_lib_1.Bridge.invoke({
                module: 'base',
                method: 'openSchema'
              });
            } catch (_e16) {
              __reportError__(_e16, "", "/pages/apis/PageActions.tsx");

              throw _e16;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "openScheme"))), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u70B9\u51FB\u6309\u94AE\u8FD4\u56DE\u4E0A\u7EA7\u9875\u9762"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Button, __assign({}, buttonStyles(), {
          onTap: function onTap() {
            try {
              thresh_lib_1["default"].popPage();
            } catch (_e17) {
              __reportError__(_e17, "", "/pages/apis/PageActions.tsx");

              throw _e17;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u8FD4\u56DE\u4E0A\u7EA7"))));
      } catch (_e18) {
        __reportError__(_e18, "", "/pages/apis/PageActions.tsx");

        throw _e18;
      }
    };

    return PageActions;
  } catch (_e19) {
    __reportError__(_e19, "", "/pages/apis/PageActions.tsx");

    throw _e19;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = PageActions;

var NextPage =
/** @class */
function (_super) {
  try {
    __extends(NextPage, _super);

    function NextPage() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e20) {
        __reportError__(_e20, "", "/pages/apis/PageActions.tsx");

        throw _e20;
      }
    }

    NextPage.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "\u9875\u9762\u64CD\u4F5C - \u6B21\u7EA7\u9875\u9762"
          })
        }, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u70B9\u51FB\u6309\u94AE\u8FD4\u56DE\u4E0A\u7EA7\u9875\u9762"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Button, __assign({}, buttonStyles(), {
          onTap: function onTap() {
            try {
              thresh_lib_1["default"].popPage();
            } catch (_e21) {
              __reportError__(_e21, "", "/pages/apis/PageActions.tsx");

              throw _e21;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u8FD4\u56DE\u4E0A\u7EA7"))));
      } catch (_e22) {
        __reportError__(_e22, "", "/pages/apis/PageActions.tsx");

        throw _e22;
      }
    };

    return NextPage;
  } catch (_e23) {
    __reportError__(_e23, "", "/pages/apis/PageActions.tsx");

    throw _e23;
  }
}(thresh_lib_1["default"].Widget);

exports.NextPage = NextPage;

var ReplacePage =
/** @class */
function (_super) {
  try {
    __extends(ReplacePage, _super);

    function ReplacePage() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e24) {
        __reportError__(_e24, "", "/pages/apis/PageActions.tsx");

        throw _e24;
      }
    }

    ReplacePage.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "\u9875\u9762\u64CD\u4F5C - \u66FF\u6362\u9875\u9762"
          })
        }, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u70B9\u51FB\u6309\u94AE\u8FD4\u56DE\u4E0A\u7EA7\u9875\u9762 - \u9996\u9875"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Button, __assign({}, buttonStyles(), {
          onTap: function onTap() {
            try {
              thresh_lib_1["default"].popPage();
            } catch (_e25) {
              __reportError__(_e25, "", "/pages/apis/PageActions.tsx");

              throw _e25;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u8FD4\u56DE\u4E0A\u7EA7"))));
      } catch (_e26) {
        __reportError__(_e26, "", "/pages/apis/PageActions.tsx");

        throw _e26;
      }
    };

    return ReplacePage;
  } catch (_e27) {
    __reportError__(_e27, "", "/pages/apis/PageActions.tsx");

    throw _e27;
  }
}(thresh_lib_1["default"].Widget);

exports.ReplacePage = ReplacePage;

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _assign = _interopRequireDefault(__webpack_require__(199));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _setInterval2 = _interopRequireDefault(__webpack_require__(329));

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
            __reportError__(_e, "", "/pages/apis/ModalActions.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/apis/ModalActions.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/apis/ModalActions.tsx");

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
            __reportError__(_e4, "", "/pages/apis/ModalActions.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/apis/ModalActions.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/apis/ModalActions.tsx");

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
        __reportError__(_e7, "", "/pages/apis/ModalActions.tsx");

        throw _e7;
      }
    };

    return __assign.apply(this, arguments);
  } catch (_e8) {
    __reportError__(_e8, "", "/pages/apis/ModalActions.tsx");

    throw _e8;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Title_1 = __webpack_require__(298);

var Box_1 = __webpack_require__(286);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Container = thresh_lib_1.basicWidgets.Container,
    Button = thresh_lib_1.basicWidgets.Button,
    Text = thresh_lib_1.basicWidgets.Text;

function buttonStyles() {
  try {
    return {
      width: 200,
      padding: 10,
      borderRadius: 5,
      backgroundColor: config_1.Colors.Primary
    };
  } catch (_e9) {
    __reportError__(_e9, "", "/pages/apis/ModalActions.tsx");

    throw _e9;
  }
}

var ModalActions =
/** @class */
function (_super) {
  try {
    __extends(ModalActions, _super);

    function ModalActions() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e10) {
        __reportError__(_e10, "", "/pages/apis/ModalActions.tsx");

        throw _e10;
      }
    }

    ModalActions.prototype.showModalScrollView = function (popup) {
      try {
        thresh_lib_1["default"].showModal(thresh_lib_1["default"].createElement(ModalExample, {
          popup: popup
        }), {
          popup: popup
        });
      } catch (_e11) {
        __reportError__(_e11, "", "/pages/apis/ModalActions.tsx");

        throw _e11;
      }
    };

    ModalActions.prototype.render = function () {
      try {
        var _this = this;

        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: 0x0000000,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "\u6A21\u6001\u9875\u9762\u64CD\u4F5C"
          })
        }, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u663E\u793A\u666E\u901A\u6A21\u6001\u9875\u9762"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Button, __assign({}, buttonStyles(), {
          onTap: function onTap() {
            try {
              _this.showModalScrollView(false);
            } catch (_e12) {
              __reportError__(_e12, "", "/pages/apis/ModalActions.tsx");

              throw _e12;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u663E\u793A\u666E\u901A\u6A21\u6001\u9875\u9762"))), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u663E\u793A\u5E95\u90E8\u6ED1\u5165\u6A21\u6001\u9875\u9762"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Button, __assign({}, buttonStyles(), {
          onTap: function onTap() {
            try {
              _this.showModalScrollView(true);
            } catch (_e13) {
              __reportError__(_e13, "", "/pages/apis/ModalActions.tsx");

              throw _e13;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u663E\u793A\u5E95\u90E8\u6ED1\u5165\u6A21\u6001\u9875\u9762"))), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u66F4\u591A\u4F7F\u7528\u65B9\u5F0F"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Text, null, "\u4F60\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49 Modal \u9875\u9762\u7684\u7ED3\u6784\u4E0E\u6837\u5F0F\uFF0C\u5B9E\u73B0\u5BF9\u8BDD\u6846\u3001\u786E\u8BA4\u6846\u7B49\u5B58\u5728\u4EA4\u4E92\u7684\u590D\u6742\u6A21\u6001\u7EC4\u4EF6\u3002")));
      } catch (_e14) {
        __reportError__(_e14, "", "/pages/apis/ModalActions.tsx");

        throw _e14;
      }
    };

    return ModalActions;
  } catch (_e15) {
    __reportError__(_e15, "", "/pages/apis/ModalActions.tsx");

    throw _e15;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = ModalActions;

var ModalExample =
/** @class */
function (_super) {
  try {
    __extends(ModalExample, _super);

    function ModalExample() {
      try {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          counter: 10
        };
        return _this;
      } catch (_e16) {
        __reportError__(_e16, "ModalExample", "/pages/apis/ModalActions.tsx");

        throw _e16;
      }
    }

    ModalExample.prototype.widgetDidMount = function () {
      try {
        var _this = this;

        var t = (0, _setInterval2["default"])(function () {
          try {
            if (_this.state.counter === 0) {
              clearInterval(t);
              return;
            }

            _this.state.counter--;

            _this.setState();
          } catch (_e17) {
            __reportError__(_e17, "", "/pages/apis/ModalActions.tsx");

            throw _e17;
          }
        }, 1000);
      } catch (_e18) {
        __reportError__(_e18, "", "/pages/apis/ModalActions.tsx");

        throw _e18;
      }
    };

    ModalExample.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Container, null, thresh_lib_1["default"].createElement(Container, {
          height: thresh_lib_1.ui.screenHeight * 0.8,
          width: thresh_lib_1.ui.screenWidth,
          backgroundColor: this.props.popup ? 0x00000000 : 0x80000000,
          onTap: function onTap() {
            try {
              thresh_lib_1["default"].hideModal();
            } catch (_e19) {
              __reportError__(_e19, "", "/pages/apis/ModalActions.tsx");

              throw _e19;
            }
          }
        }), thresh_lib_1["default"].createElement(Container, {
          height: thresh_lib_1.ui.screenHeight * 0.2,
          width: thresh_lib_1.ui.screenWidth,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: 0xffffffff
        }, thresh_lib_1["default"].createElement(Button, __assign({}, buttonStyles(), {
          onTap: function onTap() {
            try {
              thresh_lib_1["default"].hideModal();
            } catch (_e20) {
              __reportError__(_e20, "", "/pages/apis/ModalActions.tsx");

              throw _e20;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u5173\u95ED\u6A21\u6001\u9875\u9762 - ", this.state.counter)), thresh_lib_1["default"].createElement(Text, {
          size: thresh_lib_1.ui.rpx(24),
          color: config_1.Colors.Lightgray,
          margin: {
            top: 20
          }
        }, "\u70B9\u51FB\u900F\u660E\u80CC\u666F\u90E8\u5206\u4E5F\u53EF\u4EE5\u5173\u95ED\u6A21\u6001\u9875\u9762")));
      } catch (_e21) {
        __reportError__(_e21, "", "/pages/apis/ModalActions.tsx");

        throw _e21;
      }
    };

    return ModalExample;
  } catch (_e22) {
    __reportError__(_e22, "", "/pages/apis/ModalActions.tsx");

    throw _e22;
  }
}(thresh_lib_1["default"].Widget);

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(330);

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(319);
var path = __webpack_require__(24);

module.exports = path.setInterval;


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _assign = _interopRequireDefault(__webpack_require__(199));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/pages/apis/ToastActions.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/apis/ToastActions.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/apis/ToastActions.tsx");

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
            __reportError__(_e4, "", "/pages/apis/ToastActions.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/apis/ToastActions.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/apis/ToastActions.tsx");

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
        __reportError__(_e7, "", "/pages/apis/ToastActions.tsx");

        throw _e7;
      }
    };

    return __assign.apply(this, arguments);
  } catch (_e8) {
    __reportError__(_e8, "", "/pages/apis/ToastActions.tsx");

    throw _e8;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Title_1 = __webpack_require__(298);

var Box_1 = __webpack_require__(286);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Container = thresh_lib_1.basicWidgets.Container,
    Button = thresh_lib_1.basicWidgets.Button,
    Text = thresh_lib_1.basicWidgets.Text,
    Icon = thresh_lib_1.basicWidgets.Icon;

function buttonStyles() {
  try {
    return {
      width: 200,
      padding: 10,
      borderRadius: 5,
      backgroundColor: config_1.Colors.Primary
    };
  } catch (_e9) {
    __reportError__(_e9, "", "/pages/apis/ToastActions.tsx");

    throw _e9;
  }
}

var ToastActions =
/** @class */
function (_super) {
  try {
    __extends(ToastActions, _super);

    function ToastActions() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e10) {
        __reportError__(_e10, "", "/pages/apis/ToastActions.tsx");

        throw _e10;
      }
    }

    ToastActions.prototype.showAutoHideToast = function () {
      try {
        thresh_lib_1["default"].showToast(thresh_lib_1["default"].createElement(Container, {
          row: true,
          padding: thresh_lib_1.ui.rpx(14),
          borderRadius: thresh_lib_1.ui.rpx(8),
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: 0x80000000
        }, thresh_lib_1["default"].createElement(Icon, {
          type: "info_outline",
          size: 18,
          color: config_1.Colors.White,
          margin: {
            right: 10
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u8FD9\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49 toast")));
      } catch (_e11) {
        __reportError__(_e11, "", "/pages/apis/ToastActions.tsx");

        throw _e11;
      }
    };

    ToastActions.prototype.render = function () {
      try {
        var _this = this;

        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "\u63D0\u793A\u6846\u64CD\u4F5C"
          })
        }, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u663E\u793A 3s \u540E\u81EA\u52A8\u6D88\u5931\u63D0\u793A\u6846"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Button, __assign({}, buttonStyles(), {
          onTap: function onTap() {
            try {
              _this.showAutoHideToast();
            } catch (_e12) {
              __reportError__(_e12, "", "/pages/apis/ToastActions.tsx");

              throw _e12;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u663E\u793A 3s \u540E\u81EA\u52A8\u6D88\u5931\u63D0\u793A\u6846"))), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u66F4\u591A\u4F7F\u7528\u65B9\u5F0F"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Text, null, "\u4F60\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E Thresh.showToast() \u7684\u914D\u7F6E\u9879\uFF0C\u5B9E\u73B0\u4E0D\u4F1A\u81EA\u52A8\u6D88\u5931\u3001\u901A\u8FC7\u4EE3\u7801\u63A7\u5236\u6D88\u5931\u7684 toast.")));
      } catch (_e13) {
        __reportError__(_e13, "", "/pages/apis/ToastActions.tsx");

        throw _e13;
      }
    };

    return ToastActions;
  } catch (_e14) {
    __reportError__(_e14, "", "/pages/apis/ToastActions.tsx");

    throw _e14;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = ToastActions;

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/pages/basic/RefreshDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/RefreshDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/RefreshDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/RefreshDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/RefreshDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/RefreshDemo.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Title_1 = __webpack_require__(298);

var Box_1 = __webpack_require__(286);

var Center_1 = __webpack_require__(293);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Refresh = thresh_lib_1.basicWidgets.Refresh;

var RefreshDemo =
/** @class */
function (_super) {
  try {
    __extends(RefreshDemo, _super);

    function RefreshDemo() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e7) {
        __reportError__(_e7, "", "/pages/basic/RefreshDemo.tsx");

        throw _e7;
      }
    }

    RefreshDemo.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "Refresh \u5C5E\u6027\u6307\u793A\u5668\u7EC4\u4EF6"
          })
        }, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u9ED8\u8BA4\u6837\u5F0F"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Center_1["default"], {
          width: Box_1["default"].width
        }, thresh_lib_1["default"].createElement(Refresh, null))), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u4FEE\u6539\u4E3B\u8272"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Center_1["default"], {
          width: Box_1["default"].width
        }, thresh_lib_1["default"].createElement(Refresh, {
          color: config_1.Colors.Red
        }))), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u6DFB\u52A0\u8F85\u8272"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Center_1["default"], {
          width: Box_1["default"].width
        }, thresh_lib_1["default"].createElement(Refresh, {
          color: config_1.Colors.Red,
          secondColor: config_1.Colors.Pagebg
        }))), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u6539\u53D8\u5927\u5C0F"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Center_1["default"], {
          width: Box_1["default"].width
        }, thresh_lib_1["default"].createElement(Refresh, {
          size: 40
        }))), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u6539\u53D8\u7C97\u7EC6"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Center_1["default"], {
          width: Box_1["default"].width
        }, thresh_lib_1["default"].createElement(Refresh, {
          strokeWidth: 2
        }))));
      } catch (_e8) {
        __reportError__(_e8, "", "/pages/basic/RefreshDemo.tsx");

        throw _e8;
      }
    };

    return RefreshDemo;
  } catch (_e9) {
    __reportError__(_e9, "", "/pages/basic/RefreshDemo.tsx");

    throw _e9;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = RefreshDemo;

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _assign = _interopRequireDefault(__webpack_require__(199));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _setTimeout2 = _interopRequireDefault(__webpack_require__(317));

var _map = _interopRequireDefault(__webpack_require__(227));

var _fill = _interopRequireDefault(__webpack_require__(305));

var _bind = _interopRequireDefault(__webpack_require__(287));

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
            __reportError__(_e, "", "/pages/basic/NestScrollViewDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/NestScrollViewDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/NestScrollViewDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/NestScrollViewDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/NestScrollViewDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/NestScrollViewDemo.tsx");

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
        __reportError__(_e7, "", "/pages/basic/NestScrollViewDemo.tsx");

        throw _e7;
      }
    };

    return __assign.apply(this, arguments);
  } catch (_e8) {
    __reportError__(_e8, "", "/pages/basic/NestScrollViewDemo.tsx");

    throw _e8;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var basicWidget_1 = __webpack_require__(247);

var Center_1 = __webpack_require__(293);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    NestScrollView = thresh_lib_1.basicWidgets.NestScrollView,
    ListView = thresh_lib_1.basicWidgets.ListView,
    NativeView = thresh_lib_1.basicWidgets.NativeView,
    Container = thresh_lib_1.basicWidgets.Container,
    Text = thresh_lib_1.basicWidgets.Text,
    Button = thresh_lib_1.basicWidgets.Button;

var NestScrollViewDemo =
/** @class */
function (_super) {
  try {
    __extends(NestScrollViewDemo, _super);

    function NestScrollViewDemo() {
      try {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          offset: thresh_lib_1.ui.screenHeight - 100,
          type: 'thresh/native_text_view',
          text: '123',
          scrollable: false
        };
        _this.infos = [{
          image: 'https://upload-images.jianshu.io/upload_images/4741933-c8d3183c55365626.jpeg',
          text: '其实对于架上绘画十九世纪四十年代，西方就说已死亡了，但是现实是没有死亡反而大有复兴的趋势。同样作为书法中最传统的楷书，也正在受到大众的喜爱。比如这位女裁缝刘智莉，没有任何背景，靠写小楷上央视当劳模，老百姓就喜欢她的小楷。'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-8d192aa6a46409f1.jpeg',
          text: '尤其让人感动的是，刘智莉把农村老家的房子改成了工会的“刘智莉劳模工作室”和文广局的“文化大院”，离乡不忘本，作为刘智莉给乡亲们解忧帮困的场所。“做好自己的事，只要有利他人和社会的事，就去做。”这是这些年来，刘智莉秉持的做人原则，也是师承恩师宁书纶“书法之道先做人”的教诲。'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-0e60846632d72d64.jpeg',
          text: '刘智莉是天津市静海县杨成庄乡杨成庄村的一位农村女裁缝。三十六年前没考上大学，到一家乡办服装厂做缝纫工。因为喜欢写字，午休时间，她骑自行车到离厂里3里外的乡文化站拜师求教。花了7个月的工资参加书法培训。每到面授的日子，她凌晨4点起床，摸黑骑车往返70公里路，到南开大学上课。'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-2bfeb5575de9aa75.jpeg',
          text: '刘智莉的苦学精神感动到了书法辅导老师、著名书法家宁书纶，并收她为徒。在老师的经心指导下，刘智莉从欧阳询的《九成宫醴泉铭》开始临习，再临《化度寺》《皇甫君碑》，再到王羲之的小楷《洛神赋十三行》以及赵孟、钟绍京等。每年练字的废纸就要堆出4米多高。三十六年来练字的废纸堆要达150米高了。她的小楷越写越好，网友称赞她的小楷堪比王羲之。'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-32f9cb85487712f0.jpeg',
          text: '后来乡办企业不景气，刘智莉就回家自己做裁缝。成家后生活所迫，每年腊月廿至廿九到集市上去卖春联，卖了九年春联，因天津电视台、《天津日报》《今晚报》等媒体的报道，刘智莉成了当地有名的小人物了，不时有附近的乡亲找她帮忙。学书法先学做人，刘智莉时刻牢记老师的教导，她能帮尽力帮，不能帮的她找媒体。二零零二年，刘智莉为了帮助一位单身母亲遇到的困难，写信给央视《半边天》栏目，也就是这一次节目组来采访报道，被刘智莉热衷书法乐于助人，自强不息的精神感动了。节目主持人张越对她说：“你的善良和勤奋，一定会成就你。”'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-7c8a3f303e012c44.jpeg',
          text: '过了一年，《半边天》专程为刘智莉做了一期专访。节目播出后，在全国引起了强烈反响。杭州一位姓梁的老先生很喜欢刘智莉的小楷，辗转找到了她，打电话给她说：“你这双手就应该写字，不应该再做裁缝了”。也从这一年开始，刘智莉给梁先生用小楷抄写东西，梁先生连续两年给她买下了多达几十万的书法作品。'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-aaff222a4d61b9cd.jpeg',
          text: '到了二零零五年，刘智莉在第二届天津书坛新人作品展中获了奖。从此，开始有人来买她的字。随着举办了几场展览和几次获奖，刘智莉的名气越来越大，来买她的字人也多起来了。二零零六年，刘智莉因为乐于帮助乡亲，作为农民界别的优秀代表当选静海县政协委员，并当选了劳模。二零零八年，刘智莉当选天津市劳动模范，二零一二年当选天津市政协委员，因为她的书法成就，成为文艺界别的委员。'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-921dd03ae5716a9e.jpeg',
          text: '就是这样一位从传统书法一步一个脚印，苦学苦练，扎扎实实走出来的女书法家，就因为她写的是楷书，也曾被专家认为没有什么艺术性。相反，很多网友却认为，这是专家对草根高手的羡慕嫉妒恨，以贬低别人来维护自己的那点自尊。不过，现实是最好的证明，如今刘智莉不仅靠写书法，在镇上了买了房子，两个孩子也培养成了大学生。她的书法还从国内走向国外，作品先后被新加坡、美国、加拿大的国际友人及国内朋友收藏。'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-e576a5161f13c2bf.jpeg',
          text: '不知从什么时候起，我们发现走传统的路子，都会被一些专家看不起。比如中国写实画派的领军人物冷军，他的绘画水平绝对是天下无敌，因为走的是传统写实的这条路，所以对他的作品评价总是缺乏公正，说什么超写实就是停留在绘画的技艺上，内容没有现代前卫有创作性，是照片的复制没有多少艺术性。就连很多网友也觉得现在都什么年代了，有高清数码相机，还用得了这么费劲花个一年半载去画吗？'
        }, {
          image: 'https://upload-images.jianshu.io/upload_images/4741933-8841549061978867.jpeg',
          text: '绘画界如此，书法圈也是，你写个狂草就不得了，写个行书也总有掌声，如果你还是在写楷书，哪怕你的小楷、蝇头小楷写得再好，专家们就会说一句，没有变化，没有艺术性，是“台阁体”“馆阁体”，反而那些搞怪的乱书、吼书、盲书、射书、网书、竹书等丑书却大有市场。'
        }];
        _this.buttonStyles = {
          width: 120,
          padding: 10,
          borderRadius: 5,
          backgroundColor: config_1.Colors.Primary
        };
        _this.backgroundGradient = {
          colors: [config_1.Colors.Black, config_1.Colors.Red],
          stops: [0.8, 1.0]
        };
        return _this;
      } catch (_e9) {
        __reportError__(_e9, "NestScrollViewDemo", "/pages/basic/NestScrollViewDemo.tsx");

        throw _e9;
      }
    }

    NestScrollViewDemo.prototype.bindNestScrollView = function (ref) {
      try {
        this.$nestScrollView = ref;
      } catch (_e10) {
        __reportError__(_e10, "", "/pages/basic/NestScrollViewDemo.tsx");

        throw _e10;
      }
    };

    NestScrollViewDemo.prototype.widgetDidMount = function () {
      try {
        var _this = this;

        (0, _setTimeout2["default"])(function () {
          try {
            _this.setState({// offset: ui.screenHeight - 300,
              // text: 'qaz', // {a: '我是NativeText'},
            });
          } catch (_e11) {
            __reportError__(_e11, "", "/pages/basic/NestScrollViewDemo.tsx");

            throw _e11;
          }
        }, 3000);
      } catch (_e12) {
        __reportError__(_e12, "", "/pages/basic/NestScrollViewDemo.tsx");

        throw _e12;
      }
    };

    NestScrollViewDemo.prototype.renderContent = function () {
      try {
        var _context, _context2;

        return (0, _map["default"])(_context = (0, _fill["default"])(_context2 = new Array(20)).call(_context2, 1)).call(_context, function () {
          try {
            return thresh_lib_1["default"].createElement(Container, {
              borderRadius: 5,
              width: 20,
              height: 20,
              backgroundColor: config_1.Colors.Primary,
              margin: 5
            });
          } catch (_e13) {
            __reportError__(_e13, "", "/pages/basic/NestScrollViewDemo.tsx");

            throw _e13;
          }
        });
      } catch (_e14) {
        __reportError__(_e14, "", "/pages/basic/NestScrollViewDemo.tsx");

        throw _e14;
      }
    };

    NestScrollViewDemo.prototype.renderList = function () {
      try {
        var _context3;

        return (0, _map["default"])(_context3 = this.infos).call(_context3, function (item, index) {
          try {
            return thresh_lib_1["default"].createElement(ListItem, __assign({
              key: index
            }, item, {
              index: index
            }));
          } catch (_e15) {
            __reportError__(_e15, "", "/pages/basic/NestScrollViewDemo.tsx");

            throw _e15;
          }
        });
      } catch (_e16) {
        __reportError__(_e16, "", "/pages/basic/NestScrollViewDemo.tsx");

        throw _e16;
      }
    };

    NestScrollViewDemo.prototype.render = function () {
      try {
        var _context4;

        var _this = this;

        return thresh_lib_1["default"].createElement(Page, null, thresh_lib_1["default"].createElement(NestScrollView, {
          ref: (0, _bind["default"])(_context4 = this.bindNestScrollView).call(_context4, this),
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "NestScrollView \u7EC4\u4EF6",
            titleColor: config_1.Colors.White,
            backgroundColor: config_1.Colors.Primary
          }),
          offset: this.state.offset,
          backgroundView: thresh_lib_1["default"].createElement(Center_1["default"], {
            width: thresh_lib_1.ui.screenWidth,
            height: thresh_lib_1.ui.screenHeight,
            backgroundColor: config_1.Colors.Primary
          }, thresh_lib_1["default"].createElement(Text, {
            color: config_1.Colors.White
          }, "\u5411\u4E0A\u62D6\u62FD\u5E95\u90E8\u89C6\u56FE"), thresh_lib_1["default"].createElement(NativeView, {
            type: this.state.type,
            params: {
              text: this.state.text
            },
            width: thresh_lib_1.ui.screenWidth,
            height: thresh_lib_1.ui.rpx(100),
            backgroundColor: 0xffFFFBF9
          }), thresh_lib_1["default"].createElement(Button, __assign({}, this.buttonStyles, {
            onTap: function onTap() {
              try {
                _this.$nestScrollView.open();
              } catch (_e17) {
                __reportError__(_e17, "", "/pages/basic/NestScrollViewDemo.tsx");

                throw _e17;
              }
            }
          }), thresh_lib_1["default"].createElement(Text, {
            color: config_1.Colors.White
          }, "\u6216\u8005\u70B9\u51FB\u4E0A\u6ED1")))
        }, thresh_lib_1["default"].createElement(Container, {
          width: thresh_lib_1.ui.screenWidth,
          height: thresh_lib_1.ui.screenHeight - 100,
          row: false
        }, thresh_lib_1["default"].createElement(Container, {
          margin: {
            top: thresh_lib_1.ui.rpx(20),
            bottom: thresh_lib_1.ui.rpx(20),
            left: (thresh_lib_1.ui.screenWidth - thresh_lib_1.ui.rpx(100)) / 2
          },
          width: thresh_lib_1.ui.rpx(100),
          height: thresh_lib_1.ui.rpx(10),
          borderRadius: thresh_lib_1.ui.rpx(5),
          backgroundColor: config_1.Colors.White,
          flex: 0
        }), thresh_lib_1["default"].createElement(basicWidget_1.Image, {
          flex: 1,
          width: thresh_lib_1.ui.screenWidth,
          src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2438981516,3561412782&fm=26&gp=0.jpg"
        }), thresh_lib_1["default"].createElement(Container, {
          flex: 0,
          backgroundColor: config_1.Colors.Lightgray
        }, thresh_lib_1["default"].createElement(Button, __assign({}, this.buttonStyles, {
          onTap: function onTap() {
            try {
              _this.$nestScrollView.close();
            } catch (_e18) {
              __reportError__(_e18, "", "/pages/basic/NestScrollViewDemo.tsx");

              throw _e18;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u6216\u8005\u70B9\u51FB\u4E0B\u6ED1"))))));
      } catch (_e19) {
        __reportError__(_e19, "", "/pages/basic/NestScrollViewDemo.tsx");

        throw _e19;
      }
    };

    return NestScrollViewDemo;
  } catch (_e20) {
    __reportError__(_e20, "", "/pages/basic/NestScrollViewDemo.tsx");

    throw _e20;
  }
}(thresh_lib_1.Widget);

exports["default"] = NestScrollViewDemo;

var ListItem =
/** @class */
function (_super) {
  try {
    __extends(ListItem, _super);

    function ListItem() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e21) {
        __reportError__(_e21, "", "/pages/basic/NestScrollViewDemo.tsx");

        throw _e21;
      }
    }

    ListItem.prototype.render = function () {
      try {
        var _a = this.props,
            image = _a.image,
            text = _a.text,
            index = _a.index;
        return thresh_lib_1["default"].createElement(Container, {
          alignItems: "center",
          row: true,
          backgroundColor: config_1.Colors.White,
          padding: 10
        }, thresh_lib_1["default"].createElement(basicWidget_1.Image, {
          src: image,
          width: 100,
          height: 100
        }), thresh_lib_1["default"].createElement(Text, {
          width: 30,
          align: "center"
        }, index + 1), thresh_lib_1["default"].createElement(Text, {
          flex: 1,
          lineHeight: 1.5
        }, text));
      } catch (_e22) {
        __reportError__(_e22, "", "/pages/basic/NestScrollViewDemo.tsx");

        throw _e22;
      }
    };

    return ListItem;
  } catch (_e23) {
    __reportError__(_e23, "", "/pages/basic/NestScrollViewDemo.tsx");

    throw _e23;
  }
}(thresh_lib_1["default"].Widget);

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/pages/basic/NoticeBarDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/NoticeBarDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/NoticeBarDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/NoticeBarDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/NoticeBarDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/NoticeBarDemo.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Title_1 = __webpack_require__(298);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    NoticeBar = thresh_lib_1.basicWidgets.NoticeBar,
    Text = thresh_lib_1.basicWidgets.Text,
    Container = thresh_lib_1.basicWidgets.Container,
    Icon = thresh_lib_1.basicWidgets.Icon,
    ScrollView = thresh_lib_1.basicWidgets.ScrollView;

var NoticeBarDemo =
/** @class */
function (_super) {
  try {
    __extends(NoticeBarDemo, _super);

    function NoticeBarDemo() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e7) {
        __reportError__(_e7, "", "/pages/basic/NoticeBarDemo.tsx");

        throw _e7;
      }
    }

    NoticeBarDemo.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "NoticeBar \u901A\u77E5\u680F\u7EC4\u4EF6"
          })
        }, thresh_lib_1["default"].createElement(ScrollView, null, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u9ED8\u8BA4\u6837\u5F0F"
        }), thresh_lib_1["default"].createElement(NoticeBar, {
          padding: 10,
          margin: {
            bottom: 30,
            top: 10
          },
          backgroundColor: config_1.Colors.White
        }, thresh_lib_1["default"].createElement(Text, null, "\u8FD9\u662F\u4E00\u6761\u901A\u77E5\u8FD9\u662F\u4E00\u6761\u901A\u77E5\u8FD9\u662F\u4E00\u6761\u901A\u77E5\u8FD9\u662F\u4E00\u6761\u901A\u77E5\u8FD9\u662F\u4E00\u6761\u901A\u77E5")), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u8C03\u6574\u6EDA\u52A8\u901F\u5EA6"
        }), thresh_lib_1["default"].createElement(NoticeBar, {
          padding: 10,
          margin: {
            bottom: 30,
            top: 10
          },
          backgroundColor: config_1.Colors.White,
          speed: 60
        }, thresh_lib_1["default"].createElement(Text, null, "\u8FD9\u662F\u4E00\u6761\u901A\u77E5\u8FD9\u662F\u4E00\u6761\u901A\u77E5\u8FD9\u662F\u4E00\u6761\u901A\u77E5\u8FD9\u662F\u4E00\u6761\u901A\u77E5\u8FD9\u662F\u4E00\u6761\u901A\u77E5")), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u663E\u793A\u591A\u6761\u901A\u77E5"
        }), thresh_lib_1["default"].createElement(NoticeBar, {
          padding: 10,
          margin: {
            bottom: 30,
            top: 10
          },
          backgroundColor: config_1.Colors.White
        }, thresh_lib_1["default"].createElement(Text, null, "\u8FD9\u662F\u7B2C 1 \u6761\u901A\u77E5\uFF0C\u8FD9\u662F\u7B2C 1 \u6761\u901A\u77E5"), thresh_lib_1["default"].createElement(Text, null, "\u8FD9\u662F\u7B2C 2 \u6761\u901A\u77E5"), thresh_lib_1["default"].createElement(Text, null, "\u8FD9\u662F\u7B2C 3 \u6761\u901A\u77E5\uFF0C\u8FD9\u662F\u7B2C 3 \u6761\u901A\u77E5\uFF0C\u8FD9\u662F\u7B2C 3 \u6761\u901A\u77E5")), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u81EA\u5B9A\u4E49\u591A\u6761\u901A\u77E5\u95F4\u8DDD"
        }), thresh_lib_1["default"].createElement(NoticeBar, {
          padding: 10,
          margin: {
            bottom: 30,
            top: 10
          },
          backgroundColor: config_1.Colors.White,
          gutter: 100
        }, thresh_lib_1["default"].createElement(Text, null, "\u8FD9\u662F\u7B2C 1 \u6761\u901A\u77E5\uFF0C\u8FD9\u662F\u7B2C 1 \u6761\u901A\u77E5"), thresh_lib_1["default"].createElement(Text, null, "\u8FD9\u662F\u7B2C 2 \u6761\u901A\u77E5"), thresh_lib_1["default"].createElement(Text, null, "\u8FD9\u662F\u7B2C 3 \u6761\u901A\u77E5\uFF0C\u8FD9\u662F\u7B2C 3 \u6761\u901A\u77E5\uFF0C\u8FD9\u662F\u7B2C 3 \u6761\u901A\u77E5")), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u5185\u5BB9\u8FC7\u77ED\u65F6\u65E0\u52A8\u753B"
        }), thresh_lib_1["default"].createElement(NoticeBar, {
          padding: 10,
          margin: {
            bottom: 30,
            top: 10
          },
          backgroundColor: config_1.Colors.White
        }, thresh_lib_1["default"].createElement(Text, null, "\u8FD9\u662F\u4E00\u6761\u65E0\u6EDA\u52A8\u901A\u77E5")), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u524D\u7F6E\u7EC4\u4EF6"
        }), thresh_lib_1["default"].createElement(NoticeBar, {
          padding: 10,
          margin: {
            bottom: 30,
            top: 10
          },
          backgroundColor: config_1.Colors.White,
          prefix: thresh_lib_1["default"].createElement(Icon, {
            type: "camera",
            size: 20,
            margin: {
              right: 10
            }
          })
        }, thresh_lib_1["default"].createElement(Text, null, "\u8FD9\u662F\u4E00\u6761\u901A\u77E5\u8FD9\u662F\u4E00\u6761\u901A\u77E5\u8FD9\u662F\u4E00\u6761\u901A\u77E5\u8FD9\u662F\u4E00\u6761\u901A\u77E5\u8FD9\u662F\u4E00\u6761\u901A\u77E5")), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u524D\u7F6E\u7EC4\u4EF6\u4E0E\u540E\u7F6E\u7EC4\u4EF6"
        }), thresh_lib_1["default"].createElement(NoticeBar, {
          padding: 10,
          margin: {
            bottom: 30,
            top: 10
          },
          backgroundColor: config_1.Colors.White,
          prefix: thresh_lib_1["default"].createElement(Icon, {
            type: "camera",
            size: 20,
            margin: {
              right: 10
            }
          }),
          suffix: thresh_lib_1["default"].createElement(Icon, {
            type: "cloud_done",
            size: 20,
            margin: {
              left: 10
            }
          })
        }, thresh_lib_1["default"].createElement(Text, null, "\u8FD9\u662F\u4E00\u6761\u901A\u77E5\u8FD9\u662F\u4E00\u6761\u901A\u77E5\u8FD9\u662F\u4E00\u6761\u901A\u77E5\u8FD9\u662F\u4E00\u6761\u901A\u77E5\u8FD9\u662F\u4E00\u6761\u901A\u77E5"))));
      } catch (_e8) {
        __reportError__(_e8, "", "/pages/basic/NoticeBarDemo.tsx");

        throw _e8;
      }
    };

    return NoticeBarDemo;
  } catch (_e9) {
    __reportError__(_e9, "", "/pages/basic/NoticeBarDemo.tsx");

    throw _e9;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = NoticeBarDemo;

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _setTimeout2 = _interopRequireDefault(__webpack_require__(317));

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
            __reportError__(_e, "", "/pages/apis/ThemeProviderActions.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/apis/ThemeProviderActions.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/apis/ThemeProviderActions.tsx");

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
            __reportError__(_e4, "", "/pages/apis/ThemeProviderActions.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/apis/ThemeProviderActions.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/apis/ThemeProviderActions.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Container = thresh_lib_1.basicWidgets.Container,
    Text = thresh_lib_1.basicWidgets.Text;

var ThemeProviderActions =
/** @class */
function (_super) {
  try {
    __extends(ThemeProviderActions, _super);

    function ThemeProviderActions() {
      try {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          themeKey: 'base_common_btn_main'
        };
        return _this;
      } catch (_e7) {
        __reportError__(_e7, "ThemeProviderActions", "/pages/apis/ThemeProviderActions.tsx");

        throw _e7;
      }
    }

    ThemeProviderActions.prototype.widgetDidMount = function () {
      try {
        var _this = this;

        (0, _setTimeout2["default"])(function () {
          try {
            _this.setState({
              themeKey: 'base_common_btn_border'
            });
          } catch (_e8) {
            __reportError__(_e8, "", "/pages/apis/ThemeProviderActions.tsx");

            throw _e8;
          }
        }, 2000);
      } catch (_e9) {
        __reportError__(_e9, "", "/pages/apis/ThemeProviderActions.tsx");

        throw _e9;
      }
    };

    ThemeProviderActions.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: this.props.title || 'Thresh Provider'
          }),
          backgroundColor: config_1.Colors.Pagebg
        }, thresh_lib_1["default"].createElement(Container, {
          margin: 20
        }, thresh_lib_1["default"].createElement(Text, {
          themeKey: this.state.themeKey
        }, "12345"), thresh_lib_1["default"].createElement(Text, {
          themeKey: "richText"
        })));
      } catch (_e10) {
        __reportError__(_e10, "", "/pages/apis/ThemeProviderActions.tsx");

        throw _e10;
      }
    };

    return ThemeProviderActions;
  } catch (_e11) {
    __reportError__(_e11, "", "/pages/apis/ThemeProviderActions.tsx");

    throw _e11;
  }
}(thresh_lib_1.Widget);

exports["default"] = ThemeProviderActions;

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

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
            __reportError__(_e, "", "/pages/basic/SwitchDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/SwitchDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/SwitchDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/SwitchDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/SwitchDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/SwitchDemo.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Title_1 = __webpack_require__(298);

var Box_1 = __webpack_require__(286);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Switch = thresh_lib_1.basicWidgets.Switch;

var SwitchDemo =
/** @class */
function (_super) {
  try {
    __extends(SwitchDemo, _super);

    function SwitchDemo() {
      try {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          value: true
        };
        return _this;
      } catch (_e7) {
        __reportError__(_e7, "SwitchDemo", "/pages/basic/SwitchDemo.tsx");

        throw _e7;
      }
    }

    SwitchDemo.prototype.render = function () {
      try {
        var _this = this;

        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "Switch \u5F00\u5173\u7EC4\u4EF6"
          })
        }, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: this.state.value ? '当前开关打开' : '当前开关关闭'
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Switch, {
          value: this.state.value,
          activeColor: 0xFFFA871E,
          onChange: function onChange(_a) {
            try {
              var value = _a.value;

              _this.setState({
                value: value
              });
            } catch (_e8) {
              __reportError__(_e8, "onChange", "/pages/basic/SwitchDemo.tsx");

              throw _e8;
            }
          }
        })));
      } catch (_e9) {
        __reportError__(_e9, "", "/pages/basic/SwitchDemo.tsx");

        throw _e9;
      }
    };

    return SwitchDemo;
  } catch (_e10) {
    __reportError__(_e10, "", "/pages/basic/SwitchDemo.tsx");

    throw _e10;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = SwitchDemo;

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _assign = _interopRequireDefault(__webpack_require__(199));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _bind = _interopRequireDefault(__webpack_require__(287));

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
            __reportError__(_e, "", "/pages/basic/PickerDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/PickerDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/PickerDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/PickerDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/PickerDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/PickerDemo.tsx");

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
        __reportError__(_e7, "", "/pages/basic/PickerDemo.tsx");

        throw _e7;
      }
    };

    return __assign.apply(this, arguments);
  } catch (_e8) {
    __reportError__(_e8, "", "/pages/basic/PickerDemo.tsx");

    throw _e8;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var Box_1 = __webpack_require__(286);

var Title_1 = __webpack_require__(298);

var config_1 = __webpack_require__(284);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    ScrollView = thresh_lib_1.basicWidgets.ScrollView,
    Container = thresh_lib_1.basicWidgets.Container,
    Text = thresh_lib_1.basicWidgets.Text,
    Picker = thresh_lib_1.basicWidgets.Picker,
    Button = thresh_lib_1.basicWidgets.Button;

var PickerDemo =
/** @class */
function (_super) {
  try {
    __extends(PickerDemo, _super);

    function PickerDemo() {
      try {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.buttonStyles = {
          width: 150,
          padding: 10,
          borderRadius: 5,
          backgroundColor: config_1.Colors.Primary
        };
        return _this;
      } catch (_e9) {
        __reportError__(_e9, "PickerDemo", "/pages/basic/PickerDemo.tsx");

        throw _e9;
      }
    }

    PickerDemo.prototype.bindPicker = function (ref) {
      try {
        this.$picker = ref;
      } catch (_e10) {
        __reportError__(_e10, "", "/pages/basic/PickerDemo.tsx");

        throw _e10;
      }
    };

    PickerDemo.prototype.render = function () {
      try {
        var _context;

        var _this = this;

        return thresh_lib_1["default"].createElement(Page, {
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "Picker \u9009\u62E9\u7EC4\u4EF6"
          }),
          backgroundColor: config_1.Colors.Pagebg
        }, thresh_lib_1["default"].createElement(ScrollView, null, thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u65E0\u9ED8\u8BA4\u503C\u65F6\uFF0C\u9ED8\u8BA4\u5B9A\u683C\u5728\u7B2C\u4E00\u4E2A\u9009\u9879"
        }), thresh_lib_1["default"].createElement(Container, {
          width: Box_1["default"].width,
          height: 150
        }, thresh_lib_1["default"].createElement(Picker, {
          height: 150,
          itemHeight: 45,
          onChange: function onChange(value) {
            try {
              thresh_lib_1.Util.log(value);
            } catch (_e11) {
              __reportError__(_e11, "", "/pages/basic/PickerDemo.tsx");

              throw _e11;
            }
          },
          backgroundColor: config_1.Colors.Primary
        }, thresh_lib_1["default"].createElement(Text, {
          size: 20
        }, "\u9999\u8549"), thresh_lib_1["default"].createElement(Text, {
          size: 20
        }, "\u82F9\u679C"), thresh_lib_1["default"].createElement(Text, {
          size: 20
        }, "\u68A8\u5B50")))), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u9ED8\u8BA4\u503C\uFF1A\u68A8\u5B50"
        }), thresh_lib_1["default"].createElement(Container, {
          width: Box_1["default"].width,
          height: 200
        }, thresh_lib_1["default"].createElement(Picker, {
          value: 2,
          height: 200,
          itemHeight: 45,
          onChange: function onChange(value) {
            try {
              thresh_lib_1.Util.log(value);
            } catch (_e12) {
              __reportError__(_e12, "", "/pages/basic/PickerDemo.tsx");

              throw _e12;
            }
          },
          backgroundColor: config_1.Colors.Primary
        }, thresh_lib_1["default"].createElement(Text, {
          size: 20
        }, "\u9999\u8549"), thresh_lib_1["default"].createElement(Text, {
          size: 20
        }, "\u82F9\u679C"), thresh_lib_1["default"].createElement(Text, {
          size: 20
        }, "\u68A8\u5B50"), thresh_lib_1["default"].createElement(Text, {
          size: 20
        }, "\u897F\u74DC"), thresh_lib_1["default"].createElement(Text, {
          size: 20
        }, "\u8292\u679C")))), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u6EDA\u52A8\u5230\u6307\u5B9A\u503C"
        }), thresh_lib_1["default"].createElement(Container, {
          width: Box_1["default"].width,
          height: 250
        }, thresh_lib_1["default"].createElement(Picker, {
          ref: (0, _bind["default"])(_context = this.bindPicker).call(_context, this),
          value: 6,
          height: 200,
          itemHeight: 45,
          onChange: function onChange(value) {
            try {
              thresh_lib_1.Util.log(value);
            } catch (_e13) {
              __reportError__(_e13, "", "/pages/basic/PickerDemo.tsx");

              throw _e13;
            }
          },
          backgroundColor: config_1.Colors.Primary
        }, thresh_lib_1["default"].createElement(Text, {
          size: 20
        }, "\u9999\u8549"), thresh_lib_1["default"].createElement(Text, {
          size: 20
        }, "\u82F9\u679C"), thresh_lib_1["default"].createElement(Text, {
          size: 20
        }, "\u68A8\u5B50"), thresh_lib_1["default"].createElement(Text, {
          size: 20
        }, "\u897F\u74DC"), thresh_lib_1["default"].createElement(Text, {
          size: 20
        }, "\u8292\u679C"), thresh_lib_1["default"].createElement(Text, {
          size: 20
        }, "\u8461\u8404"), thresh_lib_1["default"].createElement(Text, {
          size: 20
        }, "\u54C8\u5BC6\u74DC"))), thresh_lib_1["default"].createElement(Container, {
          alignContent: 'center'
        }, thresh_lib_1["default"].createElement(Button, __assign({}, this.buttonStyles, {
          onTap: function onTap() {
            try {
              _this.$picker.animateTo(0, 500);
            } catch (_e14) {
              __reportError__(_e14, "", "/pages/basic/PickerDemo.tsx");

              throw _e14;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u70B9\u51FB\u6EDA\u52A8\u5230\u9999\u8549"))))));
      } catch (_e15) {
        __reportError__(_e15, "", "/pages/basic/PickerDemo.tsx");

        throw _e15;
      }
    };

    return PickerDemo;
  } catch (_e16) {
    __reportError__(_e16, "", "/pages/basic/PickerDemo.tsx");

    throw _e16;
  }
}(thresh_lib_1.Widget);

exports["default"] = PickerDemo;

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _setTimeout2 = _interopRequireDefault(__webpack_require__(317));

var _setInterval2 = _interopRequireDefault(__webpack_require__(329));

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
            __reportError__(_e, "", "/pages/examples/timer.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/examples/timer.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/examples/timer.tsx");

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
            __reportError__(_e4, "", "/pages/examples/timer.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/examples/timer.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/examples/timer.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Text = thresh_lib_1.basicWidgets.Text;

var TimerDemo =
/** @class */
function (_super) {
  try {
    __extends(TimerDemo, _super);

    function TimerDemo(props) {
      try {
        var _this = _super.call(this, props) || this;

        _this.state = {
          timeoutUpdated: false,
          intervalCount: 0
        };
        _this.timeout = (0, _setTimeout2["default"])(function () {
          try {
            _this.setState({
              timeoutUpdated: true
            });
          } catch (_e7) {
            __reportError__(_e7, "", "/pages/examples/timer.tsx");

            throw _e7;
          }
        }, 5000);
        _this.interval = (0, _setInterval2["default"])(function () {
          try {
            if (_this.state.intervalCount >= 10) {
              clearInterval(_this.interval);
              return;
            }

            _this.setState({
              intervalCount: _this.state.intervalCount + 1
            });
          } catch (_e8) {
            __reportError__(_e8, "", "/pages/examples/timer.tsx");

            throw _e8;
          }
        }, 1000);
        return _this;
      } catch (_e9) {
        __reportError__(_e9, "TimerDemo", "/pages/examples/timer.tsx");

        throw _e9;
      }
    }

    TimerDemo.prototype.widgetDidUnmount = function () {
      try {
        clearTimeout(this.timeout);
        clearInterval(this.interval);
      } catch (_e10) {
        __reportError__(_e10, "", "/pages/examples/timer.tsx");

        throw _e10;
      }
    };

    TimerDemo.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "Timer"
          })
        }, thresh_lib_1["default"].createElement(TimerItem, {
          text: "\u666E\u901A\u5B9A\u65F6\u5668-5\u79D2\u66F4\u65B0: " + (this.state.timeoutUpdated ? '已更新' : '未更新')
        }), thresh_lib_1["default"].createElement(TimerItem, {
          text: "\u5FAA\u73AF\u5B9A\u65F6\u5668-10\u79D2\u505C\u6B62: " + this.state.intervalCount + " \u79D2"
        }));
      } catch (_e11) {
        __reportError__(_e11, "", "/pages/examples/timer.tsx");

        throw _e11;
      }
    };

    return TimerDemo;
  } catch (_e12) {
    __reportError__(_e12, "", "/pages/examples/timer.tsx");

    throw _e12;
  }
}(thresh_lib_1.Widget);

exports["default"] = TimerDemo;

var TimerItem =
/** @class */
function (_super) {
  try {
    __extends(TimerItem, _super);

    function TimerItem() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e13) {
        __reportError__(_e13, "", "/pages/examples/timer.tsx");

        throw _e13;
      }
    }

    TimerItem.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Text, {
          margin: 20
        }, this.props.text);
      } catch (_e14) {
        __reportError__(_e14, "", "/pages/examples/timer.tsx");

        throw _e14;
      }
    };

    return TimerItem;
  } catch (_e15) {
    __reportError__(_e15, "", "/pages/examples/timer.tsx");

    throw _e15;
  }
}(thresh_lib_1.Widget);

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _map = _interopRequireDefault(__webpack_require__(227));

var _fill = _interopRequireDefault(__webpack_require__(305));

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
            __reportError__(_e, "", "/pages/basic/DragableScrollViewDemo.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/basic/DragableScrollViewDemo.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/basic/DragableScrollViewDemo.tsx");

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
            __reportError__(_e4, "", "/pages/basic/DragableScrollViewDemo.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/basic/DragableScrollViewDemo.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/basic/DragableScrollViewDemo.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var basicWidget_1 = __webpack_require__(247);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Container = thresh_lib_1.basicWidgets.Container,
    Text = thresh_lib_1.basicWidgets.Text;

var DrawerScrollViewDemo =
/** @class */
function (_super) {
  try {
    __extends(DrawerScrollViewDemo, _super);

    function DrawerScrollViewDemo() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e7) {
        __reportError__(_e7, "", "/pages/basic/DragableScrollViewDemo.tsx");

        throw _e7;
      }
    }

    DrawerScrollViewDemo.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "DragableScrollView"
          }),
          backgroundColor: config_1.Colors.Pagebg
        }, thresh_lib_1["default"].createElement(Container, {
          relative: true
        }, thresh_lib_1["default"].createElement(Container, {
          width: thresh_lib_1.ui.screenWidth,
          height: thresh_lib_1.ui.screenHeight - thresh_lib_1.ui.appbarHeight - thresh_lib_1.ui.statusBarHeight,
          backgroundColor: config_1.Colors.Primary,
          onTap: function onTap() {
            try {
              console.log(123);
            } catch (_e8) {
              __reportError__(_e8, "", "/pages/basic/DragableScrollViewDemo.tsx");

              throw _e8;
            }
          }
        }), thresh_lib_1["default"].createElement(InnerView, null)));
      } catch (_e9) {
        __reportError__(_e9, "", "/pages/basic/DragableScrollViewDemo.tsx");

        throw _e9;
      }
    };

    return DrawerScrollViewDemo;
  } catch (_e10) {
    __reportError__(_e10, "", "/pages/basic/DragableScrollViewDemo.tsx");

    throw _e10;
  }
}(thresh_lib_1.Widget);

exports["default"] = DrawerScrollViewDemo;

var InnerView =
/** @class */
function (_super) {
  try {
    __extends(InnerView, _super);

    function InnerView() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e11) {
        __reportError__(_e11, "", "/pages/basic/DragableScrollViewDemo.tsx");

        throw _e11;
      }
    }

    InnerView.prototype.renderContent = function () {
      try {
        var _context, _context2;

        return (0, _map["default"])(_context = (0, _fill["default"])(_context2 = new Array(50)).call(_context2, 1)).call(_context, function (_, index) {
          try {
            return thresh_lib_1["default"].createElement(Container, {
              backgroundColor: config_1.Colors.White
            }, thresh_lib_1["default"].createElement(Container, {
              borderRadius: 5,
              width: 20,
              height: 20,
              backgroundColor: index ? config_1.Colors.Primary : config_1.Colors.Red,
              margin: 5
            }));
          } catch (_e12) {
            __reportError__(_e12, "", "/pages/basic/DragableScrollViewDemo.tsx");

            throw _e12;
          }
        });
      } catch (_e13) {
        __reportError__(_e13, "", "/pages/basic/DragableScrollViewDemo.tsx");

        throw _e13;
      }
    };

    InnerView.prototype.render = function () {
      try {
        var _this = this;

        return thresh_lib_1["default"].createElement(basicWidget_1.DragableScrollView, {
          ref: function ref(e) {
            try {
              return _this.$view = e;
            } catch (_e14) {
              __reportError__(_e14, "", "/pages/basic/DragableScrollViewDemo.tsx");

              throw _e14;
            }
          },
          initialSize: 0.5,
          minSize: 0.2,
          backgroundColor: config_1.Colors.White,
          borderRadius: {
            topLeft: 10,
            topRight: 10
          },
          onScroll: function onScroll() {},
          onDragPositionChange: function onDragPositionChange(e) {
            try {
              return console.log(e);
            } catch (_e15) {
              __reportError__(_e15, "", "/pages/basic/DragableScrollViewDemo.tsx");

              throw _e15;
            }
          },
          headerView: thresh_lib_1["default"].createElement(Container, {
            alignItems: "center",
            padding: 10,
            backgroundColor: config_1.Colors.White,
            onTap: function onTap() {
              try {
                if (!_this.$view) return;

                _this.$view.dragPositionAnimateTo('initial');
              } catch (_e16) {
                __reportError__(_e16, "onTap", "/pages/basic/DragableScrollViewDemo.tsx");

                throw _e16;
              }
            }
          }, thresh_lib_1["default"].createElement(Container, {
            width: 50,
            height: 6,
            borderRadius: 3,
            backgroundColor: config_1.Colors.Primary
          }))
        }, this.renderContent());
      } catch (_e17) {
        __reportError__(_e17, "", "/pages/basic/DragableScrollViewDemo.tsx");

        throw _e17;
      }
    };

    return InnerView;
  } catch (_e18) {
    __reportError__(_e18, "", "/pages/basic/DragableScrollViewDemo.tsx");

    throw _e18;
  }
}(thresh_lib_1.Widget);

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(248));

var _create = _interopRequireDefault(__webpack_require__(252));

var _defineProperty = _interopRequireDefault(__webpack_require__(2));

var _map = _interopRequireDefault(__webpack_require__(227));

var _bind = _interopRequireDefault(__webpack_require__(287));

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
            __reportError__(_e, "", "/pages/homePage.tsx");

            throw _e;
          }
        } || function (d, b) {
          try {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          } catch (_e2) {
            __reportError__(_e2, "", "/pages/homePage.tsx");

            throw _e2;
          }
        };

        return _extendStatics(d, b);
      } catch (_e3) {
        __reportError__(_e3, "extendStatics", "/pages/homePage.tsx");

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
            __reportError__(_e4, "", "/pages/homePage.tsx");

            throw _e4;
          }
        }

        d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
      } catch (_e5) {
        __reportError__(_e5, "", "/pages/homePage.tsx");

        throw _e5;
      }
    };
  } catch (_e6) {
    __reportError__(_e6, "", "/pages/homePage.tsx");

    throw _e6;
  }
}();

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(284);

var Box_1 = __webpack_require__(286);

var Center_1 = __webpack_require__(293);

var Title_1 = __webpack_require__(298);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Container = thresh_lib_1.basicWidgets.Container,
    Icon = thresh_lib_1.basicWidgets.Icon,
    Text = thresh_lib_1.basicWidgets.Text,
    ScrollView = thresh_lib_1.basicWidgets.ScrollView;

var HomePage =
/** @class */
function (_super) {
  try {
    __extends(HomePage, _super);

    function HomePage() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e7) {
        __reportError__(_e7, "", "/pages/homePage.tsx");

        throw _e7;
      }
    }

    HomePage.prototype.widgetDidMount = function () {
      try {
        thresh_lib_1["default"].pageDidShow();
      } catch (_e8) {
        __reportError__(_e8, "", "/pages/homePage.tsx");

        throw _e8;
      }
    };

    HomePage.prototype.tapListItem = function (pageName) {
      try {
        thresh_lib_1["default"].pushPage(pageName);
      } catch (_e9) {
        __reportError__(_e9, "", "/pages/homePage.tsx");

        throw _e9;
      }
    };

    HomePage.prototype.render = function () {
      try {
        var _context, _context3;

        var _this = this;

        return thresh_lib_1["default"].createElement(Page, {
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: this.props.title || 'Thresh Demos',
            backgroundColor: config_1.Colors.White,
            elevation: true
          }),
          backgroundColor: config_1.Colors.Pagebg
        }, thresh_lib_1["default"].createElement(ScrollView, null, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u57FA\u7840\u7EC4\u4EF6"
        }), (0, _map["default"])(_context = config_1.widgetList).call(_context, function (_a) {
          try {
            var _context2;

            var title = _a.title,
                desc = _a.desc,
                pageName = _a.pageName;
            return thresh_lib_1["default"].createElement(Box_1["default"], {
              onTap: (0, _bind["default"])(_context2 = _this.tapListItem).call(_context2, _this, pageName)
            }, thresh_lib_1["default"].createElement(Container, {
              row: true,
              width: Box_1["default"].width,
              alignItems: "center"
            }, thresh_lib_1["default"].createElement(Container, {
              flex: 1
            }, thresh_lib_1["default"].createElement(Text, {
              color: config_1.Colors.Darkgray
            }, title), thresh_lib_1["default"].createElement(Text, {
              color: config_1.Colors.Lightgray,
              size: 12,
              margin: {
                top: 5
              }
            }, desc)), thresh_lib_1["default"].createElement(Center_1["default"], {
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: config_1.Colors.Primary
            }, thresh_lib_1["default"].createElement(Icon, {
              type: "arrow_forward_ios",
              color: config_1.Colors.White
            }))));
          } catch (_e10) {
            __reportError__(_e10, "", "/pages/homePage.tsx");

            throw _e10;
          }
        }), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "APIS"
        }), (0, _map["default"])(_context3 = config_1.apiList).call(_context3, function (_a) {
          try {
            var _context4;

            var title = _a.title,
                desc = _a.desc,
                pageName = _a.pageName;
            return thresh_lib_1["default"].createElement(Box_1["default"], {
              onTap: (0, _bind["default"])(_context4 = _this.tapListItem).call(_context4, _this, pageName)
            }, thresh_lib_1["default"].createElement(Container, {
              row: true,
              width: Box_1["default"].width,
              alignItems: "center"
            }, thresh_lib_1["default"].createElement(Container, {
              flex: 1
            }, thresh_lib_1["default"].createElement(Text, {
              color: config_1.Colors.Darkgray
            }, title), thresh_lib_1["default"].createElement(Text, {
              color: config_1.Colors.Lightgray,
              size: 12,
              margin: {
                top: 5
              }
            }, desc)), thresh_lib_1["default"].createElement(Center_1["default"], {
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: config_1.Colors.Primary
            }, thresh_lib_1["default"].createElement(Icon, {
              type: "arrow_forward_ios",
              color: config_1.Colors.White
            }))));
          } catch (_e11) {
            __reportError__(_e11, "", "/pages/homePage.tsx");

            throw _e11;
          }
        }), thresh_lib_1["default"].createElement(Container, {
          height: thresh_lib_1.ui.bottomBarHeight
        })));
      } catch (_e12) {
        __reportError__(_e12, "", "/pages/homePage.tsx");

        throw _e12;
      }
    };

    return HomePage;
  } catch (_e13) {
    __reportError__(_e13, "", "/pages/homePage.tsx");

    throw _e13;
  }
}(thresh_lib_1.Widget);

exports["default"] = HomePage;

/***/ })
/******/ ]);