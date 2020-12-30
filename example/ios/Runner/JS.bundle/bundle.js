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

var _concat = _interopRequireDefault(__webpack_require__(2));

var _forEach = _interopRequireDefault(__webpack_require__(50));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _context, _context2;

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(268);

var homePage_1 = __webpack_require__(316); // 注册默认页面


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
        pageBuilder = _a.pageBuilder;
    thresh_lib_1["default"].registerPage(pageName, pageBuilder);
  } catch (_e2) {
    __reportError__(_e2, "", "/index.ts");

    throw _e2;
  }
}); // flutter 环境准备就绪

thresh_lib_1["default"].ready = function () {
  try {
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

var concat = __webpack_require__(5);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.concat;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.concat) ? concat : own;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
var entryVirtual = __webpack_require__(49);

module.exports = entryVirtual('Array').concat;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var fails = __webpack_require__(12);
var isArray = __webpack_require__(31);
var isObject = __webpack_require__(20);
var toObject = __webpack_require__(32);
var toLength = __webpack_require__(33);
var createProperty = __webpack_require__(35);
var arraySpeciesCreate = __webpack_require__(36);
var arrayMethodHasSpeciesSupport = __webpack_require__(45);
var wellKnownSymbol = __webpack_require__(37);
var V8_VERSION = __webpack_require__(46);

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
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(8);
var getOwnPropertyDescriptor = __webpack_require__(10).f;
var isForced = __webpack_require__(24);
var path = __webpack_require__(25);
var bind = __webpack_require__(26);
var createNonEnumerableProperty = __webpack_require__(28);
var has = __webpack_require__(21);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(11);
var propertyIsEnumerableModule = __webpack_require__(13);
var createPropertyDescriptor = __webpack_require__(14);
var toIndexedObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(19);
var has = __webpack_require__(21);
var IE8_DOM_DEFINE = __webpack_require__(22);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(16);
var requireObjectCoercible = __webpack_require__(18);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);
var classof = __webpack_require__(17);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
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
/* 20 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(11);
var fails = __webpack_require__(12);
var createElement = __webpack_require__(23);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var isObject = __webpack_require__(20);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

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
/* 25 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(27);

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
/* 27 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(11);
var definePropertyModule = __webpack_require__(29);
var createPropertyDescriptor = __webpack_require__(14);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(22);
var anObject = __webpack_require__(30);
var toPrimitive = __webpack_require__(19);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(17);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(18);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(19);
var definePropertyModule = __webpack_require__(29);
var createPropertyDescriptor = __webpack_require__(14);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
var isArray = __webpack_require__(31);
var wellKnownSymbol = __webpack_require__(37);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var shared = __webpack_require__(38);
var has = __webpack_require__(21);
var uid = __webpack_require__(42);
var NATIVE_SYMBOL = __webpack_require__(43);
var USE_SYMBOL_AS_UID = __webpack_require__(44);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(39);
var store = __webpack_require__(40);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var setGlobal = __webpack_require__(41);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var createNonEnumerableProperty = __webpack_require__(28);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(43);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);
var wellKnownSymbol = __webpack_require__(37);
var V8_VERSION = __webpack_require__(46);

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var userAgent = __webpack_require__(47);

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(48);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(25);
var global = __webpack_require__(8);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(25);

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
var forEach = __webpack_require__(82);
var classof = __webpack_require__(77);
var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.forEach)
    // eslint-disable-next-line no-prototype-builtins
    || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
var DOMIterables = __webpack_require__(81);
var global = __webpack_require__(8);
var classof = __webpack_require__(77);
var createNonEnumerableProperty = __webpack_require__(28);
var Iterators = __webpack_require__(55);
var wellKnownSymbol = __webpack_require__(37);

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(15);
var addToUnscopables = __webpack_require__(54);
var Iterators = __webpack_require__(55);
var InternalStateModule = __webpack_require__(56);
var defineIterator = __webpack_require__(61);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
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
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(57);
var global = __webpack_require__(8);
var isObject = __webpack_require__(20);
var createNonEnumerableProperty = __webpack_require__(28);
var objectHas = __webpack_require__(21);
var sharedKey = __webpack_require__(59);
var hiddenKeys = __webpack_require__(60);

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
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var inspectSource = __webpack_require__(58);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(40);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(38);
var uid = __webpack_require__(42);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var createIteratorConstructor = __webpack_require__(62);
var getPrototypeOf = __webpack_require__(64);
var setPrototypeOf = __webpack_require__(78);
var setToStringTag = __webpack_require__(74);
var createNonEnumerableProperty = __webpack_require__(28);
var redefine = __webpack_require__(80);
var wellKnownSymbol = __webpack_require__(37);
var IS_PURE = __webpack_require__(39);
var Iterators = __webpack_require__(55);
var IteratorsCore = __webpack_require__(63);

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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(63).IteratorPrototype;
var create = __webpack_require__(66);
var createPropertyDescriptor = __webpack_require__(14);
var setToStringTag = __webpack_require__(74);
var Iterators = __webpack_require__(55);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(64);
var createNonEnumerableProperty = __webpack_require__(28);
var has = __webpack_require__(21);
var wellKnownSymbol = __webpack_require__(37);
var IS_PURE = __webpack_require__(39);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
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

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(21);
var toObject = __webpack_require__(32);
var sharedKey = __webpack_require__(59);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(65);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(30);
var defineProperties = __webpack_require__(67);
var enumBugKeys = __webpack_require__(72);
var hiddenKeys = __webpack_require__(60);
var html = __webpack_require__(73);
var documentCreateElement = __webpack_require__(23);
var sharedKey = __webpack_require__(59);

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
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(11);
var definePropertyModule = __webpack_require__(29);
var anObject = __webpack_require__(30);
var objectKeys = __webpack_require__(68);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(69);
var enumBugKeys = __webpack_require__(72);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(21);
var toIndexedObject = __webpack_require__(15);
var indexOf = __webpack_require__(70).indexOf;
var hiddenKeys = __webpack_require__(60);

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(15);
var toLength = __webpack_require__(33);
var toAbsoluteIndex = __webpack_require__(71);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);

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
/* 72 */
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(48);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(75);
var defineProperty = __webpack_require__(29).f;
var createNonEnumerableProperty = __webpack_require__(28);
var has = __webpack_require__(21);
var toString = __webpack_require__(76);
var wellKnownSymbol = __webpack_require__(37);

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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(37);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(75);
var classof = __webpack_require__(77);

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(75);
var classofRaw = __webpack_require__(17);
var wellKnownSymbol = __webpack_require__(37);

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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(30);
var aPossiblePrototype = __webpack_require__(79);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(28);

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),
/* 81 */
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(83);

module.exports = parent;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(84);
var entryVirtual = __webpack_require__(49);

module.exports = entryVirtual('Array').forEach;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var forEach = __webpack_require__(85);

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(86).forEach;
var arrayMethodIsStrict = __webpack_require__(87);
var arrayMethodUsesToLength = __webpack_require__(88);

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(26);
var IndexedObject = __webpack_require__(16);
var toObject = __webpack_require__(32);
var toLength = __webpack_require__(33);
var arraySpeciesCreate = __webpack_require__(36);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
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
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(12);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(11);
var fails = __webpack_require__(12);
var has = __webpack_require__(21);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(91);

module.exports = parent;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(92);
var path = __webpack_require__(25);

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(11);
var objectDefinePropertyModile = __webpack_require__(29);

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),
/* 93 */
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

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.injectRoute = exports.basicWidgets = exports.createElement = exports.ui = exports.Event = exports.Bridge = exports.Util = exports.Widget = void 0;

var dynamicFlutter_1 = __webpack_require__(94);

(0, _defineProperty["default"])(exports, "injectRoute", {
  enumerable: true,
  get: function get() {
    try {
      return dynamicFlutter_1.injectRoute;
    } catch (_e) {
      __reportError__(_e, "", "/thresh-lib/index.ts");

      throw _e;
    }
  }
});

var Widget_1 = __webpack_require__(251);

exports.Widget = Widget_1["default"];

var createElement_1 = __webpack_require__(267);

exports.createElement = createElement_1["default"];

var basicWidget_1 = __webpack_require__(237);

exports.basicWidgets = basicWidget_1["default"];

var RenderManager_1 = __webpack_require__(203);

var UtilManager_1 = __webpack_require__(202);

exports.Util = UtilManager_1["default"];

var UIManager_1 = __webpack_require__(234);

exports.ui = UIManager_1["default"];

var BridgeManager_1 = __webpack_require__(164);

exports.Bridge = BridgeManager_1["default"];

var EventManager_1 = __webpack_require__(236);

exports.Event = EventManager_1["default"];
var Thresh = dynamicFlutter_1["default"];
RenderManager_1["default"].getMediaQuery(Thresh.jsVersion); // 注册事件 - 页面显示

EventManager_1["default"].register('pageOnShow', function (fromPageName) {
  try {
    basicWidget_1.Page.invokePageOnShow(fromPageName);
  } catch (_e2) {
    __reportError__(_e2, "", "/thresh-lib/index.ts");

    throw _e2;
  }
}); // 注册事件 - 页面隐藏

EventManager_1["default"].register('pageOnHide', function () {
  try {
    basicWidget_1.Page.invokePageOnHide();
  } catch (_e3) {
    __reportError__(_e3, "", "/thresh-lib/index.ts");

    throw _e3;
  }
}); // 注册事件 - 当 native(主要是安卓) 发生按键或手势返回事件时，native 会阻止返回并触发该事件，将返回操作交给 js 控制

EventManager_1["default"].register('nativePop', function () {
  try {
    Thresh.popPage();
  } catch (_e4) {
    __reportError__(_e4, "", "/thresh-lib/index.ts");

    throw _e4;
  }
});
exports["default"] = Thresh;

/***/ }),
/* 94 */
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

var _now = _interopRequireDefault(__webpack_require__(95));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _iterator = _interopRequireDefault(__webpack_require__(99));

var _symbol = _interopRequireDefault(__webpack_require__(107));

var _promise = _interopRequireDefault(__webpack_require__(130));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  try {
    function adopt(value) {
      try {
        return value instanceof P ? value : new P(function (resolve) {
          try {
            resolve(value);
          } catch (_e) {
            __reportError__(_e, "", "/thresh-lib/src/core/dynamicFlutter.ts");

            throw _e;
          }
        });
      } catch (_e2) {
        __reportError__(_e2, "", "/thresh-lib/src/core/dynamicFlutter.ts");

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
            __reportError__(_e3, "", "/thresh-lib/src/core/dynamicFlutter.ts");

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
            __reportError__(_e4, "", "/thresh-lib/src/core/dynamicFlutter.ts");

            throw _e4;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e5) {
            __reportError__(_e5, "", "/thresh-lib/src/core/dynamicFlutter.ts");

            throw _e5;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e6) {
        __reportError__(_e6, "", "/thresh-lib/src/core/dynamicFlutter.ts");

        throw _e6;
      }
    });
  } catch (_e7) {
    __reportError__(_e7, "", "/thresh-lib/src/core/dynamicFlutter.ts");

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
          __reportError__(_e8, "sent", "/thresh-lib/src/core/dynamicFlutter.ts");

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
        __reportError__(_e9, "", "/thresh-lib/src/core/dynamicFlutter.ts");

        throw _e9;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e10) {
        __reportError__(_e10, "", "/thresh-lib/src/core/dynamicFlutter.ts");

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
    __reportError__(_e11, "", "/thresh-lib/src/core/dynamicFlutter.ts");

    throw _e11;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.injectRoute = exports.DynamicFlutter = void 0;

var MethodChannel_1 = __webpack_require__(153);

var RenderManager_1 = __webpack_require__(203);

var UtilManager_1 = __webpack_require__(202);

var createElement_1 = __webpack_require__(267);

var Widget_1 = __webpack_require__(251);

var VNode_1 = __webpack_require__(219);

var AppContainer_1 = __webpack_require__(225);

var initGlobal_1 = __webpack_require__(235);

var Util_1 = __webpack_require__(165);
/**
 * 对外暴露所有接口的DF主类
 */


var DynamicFlutter =
/** @class */
function () {
  try {
    function DynamicFlutter() {
      try {
        // 是否正在关闭 modal
        this._modalOnHiding = false; // 应用是否存活

        this._alive = true; // 是否具有根flutter页面

        this.hasRootFlutterPage = true; // debugMode

        this.debugMode = false; // 外部环境是否准备完成

        this.envReady = false; // 是否已经 run app

        this.hasRunApp = false; // 持有 injectRoute

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

        initGlobal_1["default"](this);
      } catch (_e12) {
        __reportError__(_e12, "DynamicFlutter", "/thresh-lib/src/core/dynamicFlutter.ts");

        throw _e12;
      }
    }

    (0, _defineProperty["default"])(DynamicFlutter.prototype, "jsVersion", {
      // js version
      get: function get() {
        try {
          return '1.0.0';
        } catch (_e13) {
          __reportError__(_e13, "", "/thresh-lib/src/core/dynamicFlutter.ts");

          throw _e13;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(DynamicFlutter.prototype, "pageName", {
      get: function get() {
        try {
          return AppContainer_1["default"].currentPageName || (DF.injectRouteInfo || {
            pageName: ''
          }).pageName;
        } catch (_e14) {
          __reportError__(_e14, "", "/thresh-lib/src/core/dynamicFlutter.ts");

          throw _e14;
        }
      },
      enumerable: false,
      configurable: true
    });
    (0, _defineProperty["default"])(DynamicFlutter.prototype, "referPageName", {
      get: function get() {
        try {
          return AppContainer_1["default"].referPageName || '';
        } catch (_e15) {
          __reportError__(_e15, "", "/thresh-lib/src/core/dynamicFlutter.ts");

          throw _e15;
        }
      },
      enumerable: false,
      configurable: true
    });
    /**
     * 注册页面
     * @param {String} pageName
     * @param {Function} pageBuilder
     * @param {boolean} isDefault
     */

    DynamicFlutter.prototype.registerPage = function (pageName, pageBuilder, config) {
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
      } catch (_e16) {
        __reportError__(_e16, "", "/thresh-lib/src/core/dynamicFlutter.ts");

        throw _e16;
      }
    };
    /**
     * js主动显示页面
     * 存在 injectRouteInfo 时显示 injectRouteInfo 对应的页面
     * 不存在时显示 _defaultPageName 页面
     * 都不存在时不显示
     */


    DynamicFlutter.prototype.runApp = function () {
      try {
        if (!MethodChannel_1["default"].jsRunAppTime) MethodChannel_1["default"].jsRunAppTime = (0, _now["default"])();
        if (!this._alive) return;
        this.pushPage();
      } catch (_e17) {
        __reportError__(_e17, "", "/thresh-lib/src/core/dynamicFlutter.ts");

        throw _e17;
      }
    };
    /**
     * 通知 flutter 进入下一级页面
     * @param {String} pageName
     * @param {Object} params 页面参数
     */


    DynamicFlutter.prototype.pushPage = function (pageName, params) {
      try {
        if (params === void 0) {
          params = {};
        }

        if (!this._alive) return;

        var pageRes = this._findPage(pageName || '', params);

        if (pageRes.pageData) {
          RenderManager_1["default"].pushPage(pageRes.pageData, pageRes.pageName);
        }
      } catch (_e18) {
        __reportError__(_e18, "", "/thresh-lib/src/core/dynamicFlutter.ts");

        throw _e18;
      }
    };
    /**
     * 通知 flutter 替换当前显示的DF页面
     * @param {String} pageName
     * @param {Object} params 页面参数
     */


    DynamicFlutter.prototype.replacePage = function (pageName, params) {
      try {
        if (params === void 0) {
          params = {};
        }

        if (!this._alive) return;

        if (!pageName) {
          UtilManager_1["default"].error(new Error('invoke relpacePage() must have the pageName parameter'));
        }

        if (AppContainer_1["default"].isEmpty) {
          this.pushPage(pageName, params);
          return;
        }

        var pageRes = this._findPage(pageName, params);

        if (pageRes.pageData) {
          RenderManager_1["default"].replacePage(pageRes.pageData, pageRes.pageName);
        }
      } catch (_e19) {
        __reportError__(_e19, "", "/thresh-lib/src/core/dynamicFlutter.ts");

        throw _e19;
      }
    };
    /**
     * 推出页面或关闭当前窗口
     */


    DynamicFlutter.prototype.popPage = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          try {
            switch (_a.label) {
              case 0:
                if (!this._alive) return [2
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
            __reportError__(_e20, "", "/thresh-lib/src/core/dynamicFlutter.ts");

            throw _e20;
          }
        });
      });
    };
    /**
     * 当前页面是否可以pop
     */


    DynamicFlutter.prototype.canPop = function () {
      try {
        if (!this._alive) return false;
        return RenderManager_1["default"].canPop();
      } catch (_e21) {
        __reportError__(_e21, "", "/thresh-lib/src/core/dynamicFlutter.ts");

        throw _e21;
      }
    };
    /**
     * 显示模态框
     * @param {VNode} modal
     * @param {String} title
     * @param {boolean} popup
     */


    DynamicFlutter.prototype.showModal = function (modal, _a) {
      try {
        var _b = _a === void 0 ? {} : _a,
            title = _b.title,
            popup = _b.popup;

        if (!this._alive) return;
        title = "" + AppContainer_1.MODAL_TAG + (title || (0, _now["default"])().toString());

        if (!this._modalOnHiding) {
          RenderManager_1["default"].showModal(modal, title, !!popup);
        }
      } catch (_e22) {
        __reportError__(_e22, "", "/thresh-lib/src/core/dynamicFlutter.ts");

        throw _e22;
      }
    };
    /**
     * 隐藏模态框
     */


    DynamicFlutter.prototype.hideModal = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          try {
            switch (_a.label) {
              case 0:
                if (!this._alive) return [2
                /*return*/
                ];
                this._modalOnHiding = true;
                return [4
                /*yield*/
                , RenderManager_1["default"].hideModal()];

              case 1:
                _a.sent();

                this._modalOnHiding = false;
                return [2
                /*return*/
                ];
            }
          } catch (_e23) {
            __reportError__(_e23, "", "/thresh-lib/src/core/dynamicFlutter.ts");

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


    DynamicFlutter.prototype.showToast = function (toast, info) {
      try {
        if (!this._alive) return;
        RenderManager_1["default"].showToast(toast, info);
      } catch (_e24) {
        __reportError__(_e24, "", "/thresh-lib/src/core/dynamicFlutter.ts");

        throw _e24;
      }
    };
    /**
     * 隐藏 toast
     * @param {String} name
     */


    DynamicFlutter.prototype.hideToast = function (name) {
      try {
        if (!this._alive) return;
        RenderManager_1["default"].hideToast(name);
      } catch (_e25) {
        __reportError__(_e25, "", "/thresh-lib/src/core/dynamicFlutter.ts");

        throw _e25;
      }
    };
    /**
     * 在关闭容器之前
     * 通过该方法可以停止页面上永久渲染组件的渲染，如 Refresh / gif 等
     * 防止关闭容器后因为持续渲染导致 crash
     * PS: 如果通过 DF.popPage() 关闭容器则不需要主动调用该方法，popPage 内部会判断调用时机
     */


    DynamicFlutter.prototype.stopInfinitRender = function () {
      try {
        RenderManager_1["default"].stopAlwaysRender();
      } catch (_e26) {
        __reportError__(_e26, "", "/thresh-lib/src/core/dynamicFlutter.ts");

        throw _e26;
      }
    };
    /**
     * 页面已显示并进行上报
     * @param networkTime 接口耗时
     */


    DynamicFlutter.prototype.pageDidShow = function (networkTime) {
      try {
        if (networkTime === void 0) {
          networkTime = 0;
        }

        MethodChannel_1["default"].pageDidShow(networkTime);
      } catch (_e27) {
        __reportError__(_e27, "", "/thresh-lib/src/core/dynamicFlutter.ts");

        throw _e27;
      }
    };
    /**
     * native 打印方法
     */


    DynamicFlutter.prototype.print = function (args) {
      try {
        MethodChannel_1["default"].print(args);
      } catch (_e28) {
        __reportError__(_e28, "", "/thresh-lib/src/core/dynamicFlutter.ts");

        throw _e28;
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


    DynamicFlutter.prototype._findPage = function (pageName, params) {
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
      } catch (_e29) {
        __reportError__(_e29, "", "/thresh-lib/src/core/dynamicFlutter.ts");

        throw _e29;
      }
    };

    return DynamicFlutter;
  } catch (_e30) {
    __reportError__(_e30, "", "/thresh-lib/src/core/dynamicFlutter.ts");

    throw _e30;
  }
}();

exports.DynamicFlutter = DynamicFlutter;
/**
* 第三方注入路由
* 该方法需要暴露在全局下
* 调试是可以使用该方法快速进入某个页面
* @param {String} pageName
* @param {Object} params
*/

function injectRoute(route) {
  try {
    DF.injectRouteInfo = route;
  } catch (_e31) {
    __reportError__(_e31, "", "/thresh-lib/src/core/dynamicFlutter.ts");

    throw _e31;
  }
}

exports.injectRoute = injectRoute;
var DF = new DynamicFlutter();
exports["default"] = DF;

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
var path = __webpack_require__(25);

module.exports = path.Date.now;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(7);

// `Date.now` method
// https://tc39.github.io/ecma262/#sec-date.now
$({ target: 'Date', stat: true }, {
  now: function now() {
    return new Date().getTime();
  }
});


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(100);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(101);

module.exports = parent;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
__webpack_require__(105);
__webpack_require__(52);
var WrappedWellKnownSymbolModule = __webpack_require__(104);

module.exports = WrappedWellKnownSymbolModule.f('iterator');


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(103);

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(25);
var has = __webpack_require__(21);
var wrappedWellKnownSymbolModule = __webpack_require__(104);
var defineProperty = __webpack_require__(29).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(37);

exports.f = wellKnownSymbol;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(106).charAt;
var InternalStateModule = __webpack_require__(56);
var defineIterator = __webpack_require__(61);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var requireObjectCoercible = __webpack_require__(18);

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
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(108);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(109);

module.exports = parent;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
__webpack_require__(110);
__webpack_require__(111);
__webpack_require__(115);
__webpack_require__(116);
__webpack_require__(117);
__webpack_require__(118);
__webpack_require__(102);
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
var path = __webpack_require__(25);

module.exports = path.Symbol;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var global = __webpack_require__(8);
var getBuiltIn = __webpack_require__(48);
var IS_PURE = __webpack_require__(39);
var DESCRIPTORS = __webpack_require__(11);
var NATIVE_SYMBOL = __webpack_require__(43);
var USE_SYMBOL_AS_UID = __webpack_require__(44);
var fails = __webpack_require__(12);
var has = __webpack_require__(21);
var isArray = __webpack_require__(31);
var isObject = __webpack_require__(20);
var anObject = __webpack_require__(30);
var toObject = __webpack_require__(32);
var toIndexedObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(19);
var createPropertyDescriptor = __webpack_require__(14);
var nativeObjectCreate = __webpack_require__(66);
var objectKeys = __webpack_require__(68);
var getOwnPropertyNamesModule = __webpack_require__(112);
var getOwnPropertyNamesExternal = __webpack_require__(113);
var getOwnPropertySymbolsModule = __webpack_require__(114);
var getOwnPropertyDescriptorModule = __webpack_require__(10);
var definePropertyModule = __webpack_require__(29);
var propertyIsEnumerableModule = __webpack_require__(13);
var createNonEnumerableProperty = __webpack_require__(28);
var redefine = __webpack_require__(80);
var shared = __webpack_require__(38);
var sharedKey = __webpack_require__(59);
var hiddenKeys = __webpack_require__(60);
var uid = __webpack_require__(42);
var wellKnownSymbol = __webpack_require__(37);
var wrappedWellKnownSymbolModule = __webpack_require__(104);
var defineWellKnownSymbol = __webpack_require__(103);
var setToStringTag = __webpack_require__(74);
var InternalStateModule = __webpack_require__(56);
var $forEach = __webpack_require__(86).forEach;

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
// https://tc39.github.io/ecma262/#sec-symbol-constructor
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
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
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
// https://tc39.github.io/ecma262/#sec-json.stringify
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
    // eslint-disable-next-line no-unused-vars
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
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(69);
var enumBugKeys = __webpack_require__(72);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(15);
var nativeGetOwnPropertyNames = __webpack_require__(112).f;

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
/* 114 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(103);

// `Symbol.asyncIterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),
/* 116 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(103);

// `Symbol.hasInstance` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(103);

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(103);

// `Symbol.match` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(103);

// `Symbol.matchAll` well-known symbol
defineWellKnownSymbol('matchAll');


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(103);

// `Symbol.replace` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(103);

// `Symbol.search` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(103);

// `Symbol.species` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(103);

// `Symbol.split` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(103);

// `Symbol.toPrimitive` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(103);

// `Symbol.toStringTag` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(103);

// `Symbol.unscopables` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var setToStringTag = __webpack_require__(74);

// Math[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var setToStringTag = __webpack_require__(74);

// JSON[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(131);

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(132);

module.exports = parent;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(110);
__webpack_require__(105);
__webpack_require__(52);
__webpack_require__(133);
__webpack_require__(151);
__webpack_require__(152);
var path = __webpack_require__(25);

module.exports = path.Promise;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var IS_PURE = __webpack_require__(39);
var global = __webpack_require__(8);
var getBuiltIn = __webpack_require__(48);
var NativePromise = __webpack_require__(134);
var redefine = __webpack_require__(80);
var redefineAll = __webpack_require__(135);
var setToStringTag = __webpack_require__(74);
var setSpecies = __webpack_require__(136);
var isObject = __webpack_require__(20);
var aFunction = __webpack_require__(27);
var anInstance = __webpack_require__(137);
var classof = __webpack_require__(17);
var inspectSource = __webpack_require__(58);
var iterate = __webpack_require__(138);
var checkCorrectnessOfIteration = __webpack_require__(142);
var speciesConstructor = __webpack_require__(143);
var task = __webpack_require__(144).set;
var microtask = __webpack_require__(146);
var promiseResolve = __webpack_require__(147);
var hostReportErrors = __webpack_require__(149);
var newPromiseCapabilityModule = __webpack_require__(148);
var perform = __webpack_require__(150);
var InternalStateModule = __webpack_require__(56);
var isForced = __webpack_require__(24);
var wellKnownSymbol = __webpack_require__(37);
var V8_VERSION = __webpack_require__(46);

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
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
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
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
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

var notify = function (promise, state, isReject) {
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
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
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
    if (isReject && !state.rejection) onUnhandled(promise, state);
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
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
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

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
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
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
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
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
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
      // eslint-disable-next-line no-unused-vars
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
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
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
  // https://tc39.github.io/ecma262/#sec-promise.race
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
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);

module.exports = global.Promise;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(80);

module.exports = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
  } return target;
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(48);
var definePropertyModule = __webpack_require__(29);
var wellKnownSymbol = __webpack_require__(37);
var DESCRIPTORS = __webpack_require__(11);

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
/* 137 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(30);
var isArrayIteratorMethod = __webpack_require__(139);
var toLength = __webpack_require__(33);
var bind = __webpack_require__(26);
var getIteratorMethod = __webpack_require__(140);
var callWithSafeIterationClosing = __webpack_require__(141);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(37);
var Iterators = __webpack_require__(55);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(77);
var Iterators = __webpack_require__(55);
var wellKnownSymbol = __webpack_require__(37);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(30);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(37);

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
  // eslint-disable-next-line no-throw-literal
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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(30);
var aFunction = __webpack_require__(27);
var wellKnownSymbol = __webpack_require__(37);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var fails = __webpack_require__(12);
var classof = __webpack_require__(17);
var bind = __webpack_require__(26);
var html = __webpack_require__(73);
var createElement = __webpack_require__(23);
var IS_IOS = __webpack_require__(145);

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
  // eslint-disable-next-line no-prototype-builtins
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
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
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
    !fails(post) &&
    location.protocol !== 'file:'
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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(47);

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var getOwnPropertyDescriptor = __webpack_require__(10).f;
var classof = __webpack_require__(17);
var macrotask = __webpack_require__(144).set;
var IS_IOS = __webpack_require__(145);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
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

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
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
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(30);
var isObject = __webpack_require__(20);
var newPromiseCapability = __webpack_require__(148);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(27);

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
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var aFunction = __webpack_require__(27);
var newPromiseCapabilityModule = __webpack_require__(148);
var perform = __webpack_require__(150);
var iterate = __webpack_require__(138);

// `Promise.allSettled` method
// https://github.com/tc39/proposal-promise-allSettled
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
        }, function (e) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: e };
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
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var IS_PURE = __webpack_require__(39);
var NativePromise = __webpack_require__(134);
var fails = __webpack_require__(12);
var getBuiltIn = __webpack_require__(48);
var speciesConstructor = __webpack_require__(143);
var promiseResolve = __webpack_require__(147);
var redefine = __webpack_require__(80);

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.finally
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
/* 153 */
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

var _includes = _interopRequireDefault(__webpack_require__(154));

var _now = _interopRequireDefault(__webpack_require__(95));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var __1 = __webpack_require__(93);

var BridgeManager_1 = __webpack_require__(164);

var UtilManager_1 = __webpack_require__(202);

var Util_1 = __webpack_require__(165);
/**
 * 打印method channel方法参数
 */


var methodChannelConsole = function methodChannelConsole(channelParams) {
  try {
    var method = channelParams.method,
        params = channelParams.params;
    console.group('[CHANNEL PRINT] method: ' + method);

    if (params) {
      if (params.widgetRenderData) {
        params.widgetRenderData = JSON.parse(params.widgetRenderData);
      }

      if (params.widgetUpdateData) {
        params.widgetUpdateData = JSON.parse(params.widgetUpdateData);
      }
    }

    console.log('[CHANNEL PRINT] params: ', params);
    console.groupEnd();
  } catch (_e) {
    __reportError__(_e, "methodChannelConsole", "/thresh-lib/src/channel/MethodChannel.ts");

    throw _e;
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
      if (!channelParams.method) return; // reportChannelLog(channelParams, 'Native')

      methodChannel_js_call_native(channelParams);
    } catch (e) {} finally {// if (DF.debugMode && 'production' === 'development') {
      //   methodChannelConsole(channelParams)
      // }
    }
  } catch (_e2) {
    __reportError__(_e2, "", "/thresh-lib/src/channel/MethodChannel.ts");

    throw _e2;
  }
}

function jsCallFlutter(channelParams) {
  try {
    if (__1["default"] && !__1["default"]._alive) return;

    try {
      channelParams = formatChannelParams(channelParams);
      if (!channelParams.method) return; // reportChannelLog(channelParams, 'Flutter')

      methodChannel_js_call_flutter(channelParams);
    } catch (e) {} finally {// if (DF.debugMode && process.env.NODE_ENV === 'development') {
      //   methodChannelConsole(channelParams)
      // }
    }
  } catch (_e3) {
    __reportError__(_e3, "jsCallFlutter", "/thresh-lib/src/channel/MethodChannel.ts");

    throw _e3;
  }
}

function formatChannelParams(channelParams) {
  try {
    var params = channelParams.params;
    if (Util_1["default"].isNil(params)) params = {};

    if (!Util_1["default"].isObject(params)) {
      UtilManager_1["default"].error('Channel params must pass in an object!');
      return {
        method: ''
      };
    }

    if (!Util_1["default"].isNil(params.__channelStartTime__)) {
      UtilManager_1["default"].error('Channel params cannot use "__channelStartTime__" as a key!');
      return {
        method: ''
      };
    }

    params.__channelStartTime__ = (0, _now["default"])();
    channelParams.params = params;
    return channelParams;
  } catch (_e4) {
    __reportError__(_e4, "formatChannelParams", "/thresh-lib/src/channel/MethodChannel.ts");

    throw _e4;
  }
}

var noLogMethods = ['devtools', 'clearTimer', 'setInterval', 'setTimeout', 'print', 'reload', 'bridgeRequest'];

function reportChannelLog(channelParams, callType) {
  try {
    var method = channelParams.method,
        params = channelParams.params;

    if (method && !(0, _includes["default"])(noLogMethods).call(noLogMethods, method)) {
      var content = {
        method: method
      };

      if (method === 'pushPage') {
        content.params = {
          pageName: params.pageName,
          isModal: params.isModal,
          popup: params.popup,
          hasRenderData: !!params.widgetRenderData
        };
      } else if (method === 'replacePage') {
        content.params = {
          pageName: params.pageName,
          hasRenderData: !!params.widgetRenderData
        };
      } else if (method === 'updateWidget') {
        content.params = {
          pageName: params.pageName,
          hasRenderData: !!params.widgetUpdateData,
          needUpdateWidgetId: params.needUpdateWidgetId,
          invokeDidUpdateWidgetId: params.invokeDidUpdateWidgetId
        };
      } else if (method === 'showToast') {
        content.params = {
          hasRenderData: !!params.toastRenderData,
          toastInfo: params.toastInfo
        };
      } else content.params = params; // BridgeManager.invoke({
      //   module: 'base',
      //   method: 'log',
      //   params: {
      //     level: 0,
      //     tag: callType === 'Flutter' ? 'DF_jsCallFlutter' : 'DF_jsCallNative',
      //     content: JSON.stringify(content)
      //   }
      // })

    }
  } catch (_e5) {
    __reportError__(_e5, "reportChannelLog", "/thresh-lib/src/channel/MethodChannel.ts");

    throw _e5;
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


    MethodChannel.call = function (method, params) {
      try {
        if (params === void 0) {
          params = {};
        }

        if (!MethodChannel.jsStartTime) MethodChannel.jsStartTime = (0, _now["default"])();
        jsCallFlutter({
          method: method,
          params: params
        });
      } catch (_e6) {
        __reportError__(_e6, "", "/thresh-lib/src/channel/MethodChannel.ts");

        throw _e6;
      }
    }; // 页面初次渲染完成时通知 native


    MethodChannel.pageDidShow = function (networkTime) {
      try {
        if (networkTime === void 0) {
          networkTime = 0;
        }

        if (MethodChannel.hasCallPageDidShow) return;
        MethodChannel.hasCallPageDidShow = true;
        var pageDidLoadTime = MethodChannel.pageDidLoadTime,
            jsStartTime = MethodChannel.jsStartTime,
            channelFirstSpendTime = MethodChannel.channelFirstSpendTime,
            jsRunAppTime = MethodChannel.jsRunAppTime;
        jsCallNative({
          method: 'pageDidShow',
          params: {
            flutterVersion: __1["default"].flutterVersion,
            jsVersion: __1["default"].jsVersion,
            pageName: __1["default"].pageName || 'unknown',
            networkTime: networkTime,
            pageDidLoad: pageDidLoadTime || (0, _now["default"])() - networkTime,
            jsStartTime: jsStartTime,
            jsRunAppTime: jsRunAppTime,
            channelFirstSpendTime: channelFirstSpendTime,
            pageDidShowTime: (0, _now["default"])()
          }
        });
        UtilManager_1["default"].log({
          networkTime: networkTime,
          jsRenderTime: (0, _now["default"])() - MethodChannel.jsRunAppTime - networkTime,
          jsTotalTime: (0, _now["default"])() - MethodChannel.jsStartTime,
          channelFirstSpendTime: channelFirstSpendTime
        });
      } catch (_e7) {
        __reportError__(_e7, "", "/thresh-lib/src/channel/MethodChannel.ts");

        throw _e7;
      }
    }; // 输出到native


    MethodChannel.print = function (params) {
      try {
        if (params === void 0) {
          params = {};
        }

        jsCallNative({
          method: 'print',
          params: params
        });
      } catch (_e8) {
        __reportError__(_e8, "", "/thresh-lib/src/channel/MethodChannel.ts");

        throw _e8;
      }
    }; // 重载bundle.js


    MethodChannel.reload = function () {
      try {
        jsCallNative({
          method: 'reload',
          params: {}
        });
      } catch (_e9) {
        __reportError__(_e9, "", "/thresh-lib/src/channel/MethodChannel.ts");

        throw _e9;
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
          method: 'invokeNativeViewMethod',
          params: {
            methodName: methodName,
            methodParams: methodParams,
            viewType: viewType,
            viewParams: viewParams
          }
        });
      } catch (_e10) {
        __reportError__(_e10, "", "/thresh-lib/src/channel/MethodChannel.ts");

        throw _e10;
      }
    }; // bridge方法


    MethodChannel.bridge = function (methodId, params) {
      try {
        var channelMethodName = 'bridgeRequest';

        if (!Util_1["default"].isProd && BridgeManager_1["default"].isNetworkRequest(params)) {
          jsCallFlutter({
            method: channelMethodName,
            params: {
              methodId: methodId,
              request: Util_1["default"].toString(params)
            }
          });
          return;
        }

        jsCallNative({
          method: channelMethodName,
          params: {
            methodId: methodId,
            request: params
          }
        });
      } catch (_e11) {
        __reportError__(_e11, "", "/thresh-lib/src/channel/MethodChannel.ts");

        throw _e11;
      }
    }; // 是否已调用 pageDidShow


    MethodChannel.hasCallPageDidShow = false; // js 与 flutter 首次通信时的时间戳

    MethodChannel.jsStartTime = 0; // js -> flutter 首次通信的耗时

    MethodChannel.channelFirstSpendTime = 0; // js runApp 时的时间戳

    MethodChannel.jsRunAppTime = 0;
    return MethodChannel;
  } catch (_e12) {
    __reportError__(_e12, "", "/thresh-lib/src/channel/MethodChannel.ts");

    throw _e12;
  }
}();

exports["default"] = MethodChannel;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(155);

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(156);

module.exports = parent;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var arrayIncludes = __webpack_require__(157);
var stringIncludes = __webpack_require__(159);

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
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(158);
var entryVirtual = __webpack_require__(49);

module.exports = entryVirtual('Array').includes;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var $includes = __webpack_require__(70).includes;
var addToUnscopables = __webpack_require__(54);
var arrayMethodUsesToLength = __webpack_require__(88);

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(160);
var entryVirtual = __webpack_require__(49);

module.exports = entryVirtual('String').includes;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var notARegExp = __webpack_require__(161);
var requireObjectCoercible = __webpack_require__(18);
var correctIsRegExpLogic = __webpack_require__(163);

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(162);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
var classof = __webpack_require__(17);
var wellKnownSymbol = __webpack_require__(37);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(37);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),
/* 164 */
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

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _iterator = _interopRequireDefault(__webpack_require__(99));

var _symbol = _interopRequireDefault(__webpack_require__(107));

var _promise = _interopRequireDefault(__webpack_require__(130));

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

var MethodChannel_1 = __webpack_require__(153);

var Util_1 = __webpack_require__(165);

var bus_1 = __webpack_require__(200);

var DevtoolsManager_1 = __webpack_require__(201);

var UtilManager_1 = __webpack_require__(202);
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
        DevtoolsManager_1["default"].bridge(methodId, params, true);

        if (!Util_1["default"].isProd && !BridgeManager.isNetworkRequest(params)) {
          // 开发模式下，如果长时间未响应某个bridge，则主动mock响应，防止阻塞进程
          UtilManager_1["default"].setTimeout(function () {
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
        return params.module === BridgeManager.DF_BUILT_IN_BRIDGE && params.method === BridgeManager.BRIDGE_METHOD_NET_REQUEST;
      } catch (_e18) {
        __reportError__(_e18, "", "/thresh-lib/src/manager/BridgeManager.ts");

        throw _e18;
      }
    };

    BridgeManager.DF_BUILT_IN_BRIDGE = 'DF_BUILT_IN_BRIDGE';
    BridgeManager.BRIDGE_METHOD_NET_REQUEST = 'BRIDGE_METHOD_NET_REQUEST';
    return BridgeManager;
  } catch (_e19) {
    __reportError__(_e19, "", "/thresh-lib/src/manager/BridgeManager.ts");

    throw _e19;
  }
}();

exports["default"] = BridgeManager;

/***/ }),
/* 165 */
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

var _now = _interopRequireDefault(__webpack_require__(95));

var _stringify = _interopRequireDefault(__webpack_require__(166));

var _assign = _interopRequireDefault(__webpack_require__(170));

var _reduce = _interopRequireDefault(__webpack_require__(175));

var _concat = _interopRequireDefault(__webpack_require__(2));

var _forEach = _interopRequireDefault(__webpack_require__(50));

var _isArray = _interopRequireDefault(__webpack_require__(181));

var _typeof2 = _interopRequireDefault(__webpack_require__(185));

var _includes = _interopRequireDefault(__webpack_require__(154));

var _splice = _interopRequireDefault(__webpack_require__(195));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var __1 = __webpack_require__(93);
/**
 * DF内部工具类
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
        return Math.random().toString(16);
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
        if (showUndefined === void 0) {
          showUndefined = false;
        }

        if (Util.isNil(value)) return !showUndefined ? '' : 'undefined';
        var res;
        if (Util.isString(value)) return value;

        try {
          res = (0, _stringify["default"])(value);
        } catch (e) {
          console.error(e);
          res = value.toString();
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
                if (key !== '__showDivider__') tempArr.push("[" + key + "] - " + Util.toString(value, true));else tempArr.push("-----" + (Util.isString(value) ? value : '') + "-----");
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

    return Util;
  } catch (_e24) {
    __reportError__(_e24, "", "/thresh-lib/src/shared/Util.ts");

    throw _e24;
  }
}();

exports["default"] = Util;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(167);

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(168);

module.exports = parent;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(169);
var core = __webpack_require__(25);

if (!core.JSON) core.JSON = { stringify: JSON.stringify };

// eslint-disable-next-line no-unused-vars
module.exports = function stringify(it, replacer, space) {
  return core.JSON.stringify.apply(null, arguments);
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(7);
var getBuiltIn = __webpack_require__(48);
var fails = __webpack_require__(12);

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
  // https://github.com/tc39/proposal-well-formed-stringify
  $({ target: 'JSON', stat: true, forced: FORCED }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var result = $stringify.apply(null, arguments);
      return typeof result == 'string' ? result.replace(re, fix) : result;
    }
  });
}


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(171);

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(172);

module.exports = parent;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(173);
var path = __webpack_require__(25);

module.exports = path.Object.assign;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(7);
var assign = __webpack_require__(174);

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(11);
var fails = __webpack_require__(12);
var objectKeys = __webpack_require__(68);
var getOwnPropertySymbolsModule = __webpack_require__(114);
var propertyIsEnumerableModule = __webpack_require__(13);
var toObject = __webpack_require__(32);
var IndexedObject = __webpack_require__(16);

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
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
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
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
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(176);

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(177);

module.exports = parent;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var reduce = __webpack_require__(178);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.reduce) ? reduce : own;
};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(179);
var entryVirtual = __webpack_require__(49);

module.exports = entryVirtual('Array').reduce;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var $reduce = __webpack_require__(180).left;
var arrayMethodIsStrict = __webpack_require__(87);
var arrayMethodUsesToLength = __webpack_require__(88);

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(27);
var toObject = __webpack_require__(32);
var IndexedObject = __webpack_require__(16);
var toLength = __webpack_require__(33);

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
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(182);

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(183);

module.exports = parent;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(184);
var path = __webpack_require__(25);

module.exports = path.Array.isArray;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(7);
var isArray = __webpack_require__(31);

// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(186);

var _Symbol = __webpack_require__(188);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(187);

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(101);

module.exports = parent;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(189);

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(109);
__webpack_require__(190);
__webpack_require__(191);
__webpack_require__(192);
__webpack_require__(193);
// TODO: Remove from `core-js@4`
__webpack_require__(194);

module.exports = parent;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(103);

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('asyncDispose');


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(103);

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('dispose');


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(103);

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol('observable');


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(103);

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('patternMatch');


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__(103);

defineWellKnownSymbol('replaceAll');


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(196);

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(197);

module.exports = parent;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var splice = __webpack_require__(198);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.splice;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.splice) ? splice : own;
};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(199);
var entryVirtual = __webpack_require__(49);

module.exports = entryVirtual('Array').splice;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var toAbsoluteIndex = __webpack_require__(71);
var toInteger = __webpack_require__(34);
var toLength = __webpack_require__(33);
var toObject = __webpack_require__(32);
var arraySpeciesCreate = __webpack_require__(36);
var createProperty = __webpack_require__(35);
var arrayMethodHasSpeciesSupport = __webpack_require__(45);
var arrayMethodUsesToLength = __webpack_require__(88);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
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
/* 200 */
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

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var Util_1 = __webpack_require__(165);
/**
 * 简易实现的事件触发器
 * 仅框架内部使用
 * 一个name仅对应一个回调事件
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
        var busName = name ? String(name).toString() : (++this._busId).toString();
        this._pool[busName] = callback;
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
        var cb = this._pool[name];
        cb && cb.apply(void 0, args);
      } catch (_e3) {
        __reportError__(_e3, "", "/thresh-lib/src/shared/bus.ts");

        throw _e3;
      }
    };

    Bus.prototype.has = function (name) {
      try {
        return !!(name && this._pool[name]);
      } catch (_e4) {
        __reportError__(_e4, "", "/thresh-lib/src/shared/bus.ts");

        throw _e4;
      }
    };

    Bus.prototype.remove = function (name) {
      try {
        if (!name) return;
        if (this._pool[name]) delete this._pool[name];
      } catch (_e5) {
        __reportError__(_e5, "", "/thresh-lib/src/shared/bus.ts");

        throw _e5;
      }
    };

    return Bus;
  } catch (_e6) {
    __reportError__(_e6, "", "/thresh-lib/src/shared/bus.ts");

    throw _e6;
  }
}();

exports["default"] = new Bus();

/***/ }),
/* 201 */
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

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _assign = _interopRequireDefault(__webpack_require__(170));

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
exports.InfoType = void 0;

var __1 = __webpack_require__(93);

var MethodChannel_1 = __webpack_require__(153);

var BridgeManager_1 = __webpack_require__(164);

var Util_1 = __webpack_require__(165);

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

var DevtoolsManager =
/** @class */
function () {
  try {
    function DevtoolsManager() {}

    DevtoolsManager.show = function (type, content, title) {
      try {
        if (!__1["default"] || !__1["default"].debugMode) return;
        MethodChannel_1["default"].call('devtools', {
          type: type,
          title: title,
          content: content
        });
      } catch (_e4) {
        __reportError__(_e4, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

        throw _e4;
      }
    };

    DevtoolsManager.log = function () {
      try {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        DevtoolsManager.show(InfoType.log, Util_1["default"].anyToRawString.apply(Util_1["default"], args));
      } catch (_e5) {
        __reportError__(_e5, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

        throw _e5;
      }
    };

    DevtoolsManager.warn = function () {
      try {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        DevtoolsManager.show(InfoType.warn, Util_1["default"].anyToRawString.apply(Util_1["default"], args));
      } catch (_e6) {
        __reportError__(_e6, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

        throw _e6;
      }
    };

    DevtoolsManager.error = function () {
      try {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        DevtoolsManager.show(InfoType.error, Util_1["default"].anyToRawString.apply(Util_1["default"], args));
      } catch (_e7) {
        __reportError__(_e7, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

        throw _e7;
      }
    };

    DevtoolsManager.bridge = function (methodId, data, isRequest) {
      try {
        if (isRequest === void 0) {
          isRequest = false;
        }

        if (!__1["default"] || !__1["default"].debugMode) return;
        var bridgeParams;

        if (isRequest) {
          DevtoolsManager.pool[methodId] = data;
          bridgeParams = data;
        } else {
          bridgeParams = DevtoolsManager.pool[methodId];
          delete DevtoolsManager.pool[methodId];
        }

        if (!bridgeParams) return;
        var module = bridgeParams.module,
            business = bridgeParams.business,
            method = bridgeParams.method,
            params = bridgeParams.params;

        if (BridgeManager_1["default"].isNetworkRequest(bridgeParams)) {
          var showInfo = void 0;

          if (isRequest) {
            showInfo = __assign({
              method: params.method,
              __showDivider__: 'params'
            }, params.data || params.query || {});
          } else {
            showInfo = __assign({
              code: data.code,
              reason: data.reason,
              __showDivider__: 'data'
            }, Util_1["default"].isString(data.data) || Util_1["default"].isNil(data.data) || !Util_1["default"].isObject(data.data) ? {
              data: data.data
            } : data.data);
          }

          DevtoolsManager.network(params.url, showInfo, isRequest);
          return;
        }

        var logInfos = [isRequest ? 'Request' : 'Response', "Module: " + module];
        if (business) logInfos.push("Business: " + business);
        logInfos.push("Method: " + method);
        logInfos.push("MethodId: " + methodId);
        DevtoolsManager.show(InfoType.bridge, Util_1["default"].anyToRawString(data), logInfos.join('\n'));
      } catch (_e8) {
        __reportError__(_e8, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

        throw _e8;
      }
    };

    DevtoolsManager.network = function (url, params, isRequest) {
      try {
        if (isRequest === void 0) {
          isRequest = false;
        }

        DevtoolsManager.show(InfoType.network, Util_1["default"].anyToRawString(params), (isRequest ? 'Request' : 'Response') + "\n" + url);
      } catch (_e9) {
        __reportError__(_e9, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

        throw _e9;
      }
    };

    DevtoolsManager.pool = {};
    return DevtoolsManager;
  } catch (_e10) {
    __reportError__(_e10, "", "/thresh-lib/src/manager/DevtoolsManager.ts");

    throw _e10;
  }
}();

exports["default"] = DevtoolsManager;

/***/ }),
/* 202 */
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

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _iterator = _interopRequireDefault(__webpack_require__(99));

var _symbol = _interopRequireDefault(__webpack_require__(107));

var _promise = _interopRequireDefault(__webpack_require__(130));

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

var MethodChannel_1 = __webpack_require__(153);

var BridgeManager_1 = __webpack_require__(164);

var bus_1 = __webpack_require__(200);

var Util_1 = __webpack_require__(165);

var DevtoolsManager_1 = __webpack_require__(201);
/**
 * 工具方法管理器
 */


var UtilManager =
/** @class */
function () {
  try {
    function UtilManager() {}
    /**
     * 定时执行器
     */


    UtilManager.setTimeout = function (callback, duration) {
      try {
        if (duration === void 0) {
          duration = 16;
        }

        return UtilManager.registerTimer('setTimeout', callback, duration);
      } catch (_e12) {
        __reportError__(_e12, "", "/thresh-lib/src/manager/UtilManager.ts");

        throw _e12;
      }
    };
    /**
     * 循环定时执行器
     */


    UtilManager.setInterval = function (callback, duration) {
      try {
        if (duration === void 0) {
          duration = 16;
        }

        return UtilManager.registerTimer('setInterval', callback, duration);
      } catch (_e13) {
        __reportError__(_e13, "", "/thresh-lib/src/manager/UtilManager.ts");

        throw _e13;
      }
    };
    /**
     * 清除定时器
     */


    UtilManager.clearTimer = function (timerId) {
      try {
        if (!timerId) return;
        if (!bus_1["default"].has(timerId)) return;
        bus_1["default"].remove(timerId);
        MethodChannel_1["default"].call('clearTimer', {
          timerId: timerId
        });
      } catch (_e14) {
        __reportError__(_e14, "", "/thresh-lib/src/manager/UtilManager.ts");

        throw _e14;
      }
    };
    /**
     * 注册定时器
     */


    UtilManager.registerTimer = function (type, callback, duration) {
      try {
        if (!Util_1["default"].isFunc(callback)) return;
        var timerId = bus_1["default"].register(callback);
        MethodChannel_1["default"].call(type, {
          timerId: timerId,
          duration: duration
        });
        return timerId;
      } catch (_e15) {
        __reportError__(_e15, "", "/thresh-lib/src/manager/UtilManager.ts");

        throw _e15;
      }
    };
    /**
     * 发起网络请求
     */


    UtilManager.request = function (params) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          try {
            return [2
            /*return*/
            , BridgeManager_1["default"].invoke({
              module: BridgeManager_1["default"].DF_BUILT_IN_BRIDGE,
              method: BridgeManager_1["default"].BRIDGE_METHOD_NET_REQUEST,
              params: params
            })];
          } catch (_e16) {
            __reportError__(_e16, "", "/thresh-lib/src/manager/UtilManager.ts");

            throw _e16;
          }
        });
      });
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

        MethodChannel_1["default"].call('copy', {
          data: Util_1["default"].toString(data),
          showSuccess: showSuccess
        });
      } catch (_e17) {
        __reportError__(_e17, "", "/thresh-lib/src/manager/UtilManager.ts");

        throw _e17;
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
      } catch (_e18) {
        __reportError__(_e18, "", "/thresh-lib/src/manager/UtilManager.ts");

        throw _e18;
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
      } catch (_e19) {
        __reportError__(_e19, "", "/thresh-lib/src/manager/UtilManager.ts");

        throw _e19;
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
      } catch (_e20) {
        __reportError__(_e20, "", "/thresh-lib/src/manager/UtilManager.ts");

        throw _e20;
      }
    };

    return UtilManager;
  } catch (_e21) {
    __reportError__(_e21, "", "/thresh-lib/src/manager/UtilManager.ts");

    throw _e21;
  }
}();

exports["default"] = UtilManager;

/***/ }),
/* 203 */
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

var _startsWith = _interopRequireDefault(__webpack_require__(204));

var _now = _interopRequireDefault(__webpack_require__(95));

var _keys = _interopRequireDefault(__webpack_require__(209));

var _from = _interopRequireDefault(__webpack_require__(213));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _iterator = _interopRequireDefault(__webpack_require__(99));

var _symbol = _interopRequireDefault(__webpack_require__(107));

var _promise = _interopRequireDefault(__webpack_require__(130));

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

var __1 = __webpack_require__(93);

var MethodChannel_1 = __webpack_require__(153);

var dispatchMethod_1 = __webpack_require__(218);

var AppContainer_1 = __webpack_require__(225);

var Util_1 = __webpack_require__(165);

var bus_1 = __webpack_require__(200);

var EventManager_1 = __webpack_require__(236);

var UIManager_1 = __webpack_require__(234);

var basicWidget_1 = __webpack_require__(237);
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
        MethodChannel_1["default"].call('pageNotFound', {
          allPath: allPaths.join('\n'),
          nextPath: nextPath,
          prevPath: AppContainer_1["default"].referPageName || ''
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
     * @param {Boolean} isModal 是否作为模态框显示
     * @param {Boolean} popup 作为模态框显示时是否从底部弹出
     */


    RenderManager.pushPage = function (renderTree, pageName, isModal, popup) {
      try {
        if (isModal === void 0) {
          isModal = false;
        }

        if (popup === void 0) {
          popup = false;
        }

        if (AppContainer_1["default"].isEmpty && (UIManager_1["default"].screenWidth === 0 || UIManager_1["default"].screenHeight === 0)) {
          throw new Error("[UI ERROR] screenWidth: " + UIManager_1["default"].screenWidth + ", screenHeight: " + UIManager_1["default"].screenHeight);
        }

        if (!AppContainer_1["default"].isEmpty && !isModal) EventManager_1["default"].fire('pageOnHide');

        var page = RenderManager._buildPage(renderTree, pageName);

        AppContainer_1["default"].pushPage(page.pageName, renderTree, isModal);
        if (!isModal) EventManager_1["default"].fire('pageOnShow');
        MethodChannel_1["default"].call('pushPage', {
          widgetRenderData: page.pageData,
          pageName: page.pageName,
          isModal: isModal,
          popup: popup
        });
      } catch (_e14) {
        __reportError__(_e14, "", "/thresh-lib/src/manager/RenderManager.ts");

        throw _e14;
      }
    };
    /**
     * 用一个新的页面替换当前显示的页面
     * @param {VNode} newRenderTree
     * @param {String} newPageName
     */


    RenderManager.replacePage = function (newRenderTree, newPageName) {
      try {
        EventManager_1["default"].fire('pageOnHide');

        var page = RenderManager._buildPage(newRenderTree, newPageName);

        AppContainer_1["default"].replacePage(page.pageName, newRenderTree);
        EventManager_1["default"].fire('pageOnShow');
        MethodChannel_1["default"].call('replacePage', {
          widgetRenderData: page.pageData,
          pageName: page.pageName
        });
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
        var pageName, shouldPop, popPageCallback;
        return __generator(this, function (_a) {
          try {
            switch (_a.label) {
              case 0:
                pageName = AppContainer_1["default"].namesCache[AppContainer_1["default"].namesCache.length - 1];
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
                popPageCallback = function popPageCallback(resolve) {
                  try {
                    bus_1["default"].register(function () {
                      try {
                        resolve();
                      } catch (_e16) {
                        __reportError__(_e16, "", "/thresh-lib/src/manager/RenderManager.ts");

                        throw _e16;
                      }
                    }, pageName);
                  } catch (_e17) {
                    __reportError__(_e17, "", "/thresh-lib/src/manager/RenderManager.ts");

                    throw _e17;
                  }
                };

                if (RenderManager.canPop()) {
                  // 如果当前页面可关闭
                  // 则在向 flutter 发出关闭页面消息并注册关闭回调
                  // 回调将会在 flutter 关闭页面并向 js 发出 popPage 消息后，在 Dispatch.popPage() 中被触发，并同时触发 pageOnHide
                  MethodChannel_1["default"].call('popPage', {
                    pageName: pageName
                  });
                  return [2
                  /*return*/
                  , new _promise["default"](function (resolve) {
                    try {
                      popPageCallback(resolve);
                    } catch (_e18) {
                      __reportError__(_e18, "", "/thresh-lib/src/manager/RenderManager.ts");

                      throw _e18;
                    }
                  })];
                } else {
                  return [2
                  /*return*/
                  , new _promise["default"](function (resolve) {
                    try {
                      popPageCallback(resolve); // 当前页面不可关闭，则手动触发 Dispatch.popPage()

                      dispatchMethod_1["default"].popPage({
                        pageName: pageName
                      });
                    } catch (_e19) {
                      __reportError__(_e19, "", "/thresh-lib/src/manager/RenderManager.ts");

                      throw _e19;
                    }
                  })];
                }

                return [2
                /*return*/
                ];
            }
          } catch (_e20) {
            __reportError__(_e20, "", "/thresh-lib/src/manager/RenderManager.ts");

            throw _e20;
          }
        });
      });
    };
    /**
     * DF当前页面是否可以推出
     */


    RenderManager.canPop = function () {
      try {
        // 存在根flutter页面时一定可以pop
        // 不存在时只有当页面数量大于1时才可以pop
        return __1["default"].hasRootFlutterPage || AppContainer_1["default"].namesCache.length > 1;
      } catch (_e21) {
        __reportError__(_e21, "", "/thresh-lib/src/manager/RenderManager.ts");

        throw _e21;
      }
    };
    /**
     * 显示模态
     */


    RenderManager.showModal = function (modalRenderTree, title, popup) {
      try {
        RenderManager.modalNumber++;
        RenderManager.pushPage(modalRenderTree, title, true, popup);
      } catch (_e22) {
        __reportError__(_e22, "", "/thresh-lib/src/manager/RenderManager.ts");

        throw _e22;
      }
    };
    /**
     * 隐藏模态
     */


    RenderManager.hideModal = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          try {
            switch (_a.label) {
              case 0:
                if (!RenderManager.modalNumber) return [3
                /*break*/
                , 2];
                RenderManager.modalNumber--;
                return [4
                /*yield*/
                , RenderManager.popPage()];

              case 1:
                return [2
                /*return*/
                , _a.sent()];

              case 2:
                return [2
                /*return*/
                ];
            }
          } catch (_e23) {
            __reportError__(_e23, "", "/thresh-lib/src/manager/RenderManager.ts");

            throw _e23;
          }
        });
      });
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
        MethodChannel_1["default"].call('showToast', {
          toastRenderData: Util_1["default"].toString(toastRenderData),
          toastInfo: Util_1["default"].toString(toastInfo)
        });
      } catch (_e24) {
        __reportError__(_e24, "", "/thresh-lib/src/manager/RenderManager.ts");

        throw _e24;
      }
    };
    /**
     * 隐藏taost
     */


    RenderManager.hideToast = function (toastName) {
      try {
        MethodChannel_1["default"].call('hideToast', {
          toastName: toastName
        });
      } catch (_e25) {
        __reportError__(_e25, "", "/thresh-lib/src/manager/RenderManager.ts");

        throw _e25;
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
        MethodChannel_1["default"].call('updateWidget', {
          widgetUpdateData: Util_1["default"].toString(updateRenderData),
          needUpdateWidgetId: needUpdateWidgetId,
          invokeDidUpdateWidgetId: invokeDidUpdateWidgetId,
          pageName: pageName
        });
      } catch (_e26) {
        __reportError__(_e26, "", "/thresh-lib/src/manager/RenderManager.ts");

        throw _e26;
      }
    };
    /**
     * 停止 flutter 中永久渲染组件的渲染
     */


    RenderManager.stopAlwaysRender = function () {
      try {
        MethodChannel_1["default"].call('stopAlwaysRender');
      } catch (_e27) {
        __reportError__(_e27, "", "/thresh-lib/src/manager/RenderManager.ts");

        throw _e27;
      }
    };
    /**
     * 获取设备媒体信息
     * 由于mediaQuery是DF中唯一一个双向的方法
     * 因此在接收到来自flutter的mediaQuery信息时，还会携带上其他的信息
     * 如：debugMode bizName 等
     */


    RenderManager.getMediaQuery = function (jsVersion) {
      try {
        MethodChannel_1["default"].call('mediaQuery', {
          jsEnv: 'production',
          jsVersion: jsVersion
        });
      } catch (_e28) {
        __reportError__(_e28, "", "/thresh-lib/src/manager/RenderManager.ts");

        throw _e28;
      }
    };
    /**
     * 构建页面
     * 返回一个可以被flutter解析渲染的 jsonTreeString
     */


    RenderManager._buildPage = function (renderTree, pageName) {
      try {
        if (!pageName) throw new Error('set up page must has a pageName');
        pageName = pageName + "#" + RenderManager.pageId++;
        var renderData = renderTree.toRenderData(pageName);
        if (!renderTree.fetchRootNode().pageNode && !(0, _startsWith["default"])(pageName).call(pageName, AppContainer_1.MODAL_TAG)) throw new Error('Each page must has one <Page />');
        return {
          pageName: pageName,
          pageData: Util_1["default"].toString(renderData)
        };
      } catch (_e29) {
        __reportError__(_e29, "", "/thresh-lib/src/manager/RenderManager.ts");

        throw _e29;
      }
    };

    RenderManager.pageId = 1;
    RenderManager.modalNumber = 0;
    return RenderManager;
  } catch (_e30) {
    __reportError__(_e30, "", "/thresh-lib/src/manager/RenderManager.ts");

    throw _e30;
  }
}();

exports["default"] = RenderManager;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(205);

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(206);

module.exports = parent;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var startsWith = __webpack_require__(207);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.startsWith;
  return typeof it === 'string' || it === StringPrototype
    || (it instanceof String && own === StringPrototype.startsWith) ? startsWith : own;
};


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(208);
var entryVirtual = __webpack_require__(49);

module.exports = entryVirtual('String').startsWith;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var getOwnPropertyDescriptor = __webpack_require__(10).f;
var toLength = __webpack_require__(33);
var notARegExp = __webpack_require__(161);
var requireObjectCoercible = __webpack_require__(18);
var correctIsRegExpLogic = __webpack_require__(163);
var IS_PURE = __webpack_require__(39);

var nativeStartsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
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
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(210);

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
var keys = __webpack_require__(211);
var classof = __webpack_require__(77);
var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.keys;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.keys)
    // eslint-disable-next-line no-prototype-builtins
    || DOMIterables.hasOwnProperty(classof(it)) ? keys : own;
};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(212);

module.exports = parent;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
var entryVirtual = __webpack_require__(49);

module.exports = entryVirtual('Array').keys;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(214);

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(215);

module.exports = parent;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
__webpack_require__(216);
var path = __webpack_require__(25);

module.exports = path.Array.from;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(7);
var from = __webpack_require__(217);
var checkCorrectnessOfIteration = __webpack_require__(142);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(26);
var toObject = __webpack_require__(32);
var callWithSafeIterationClosing = __webpack_require__(141);
var isArrayIteratorMethod = __webpack_require__(139);
var toLength = __webpack_require__(33);
var createProperty = __webpack_require__(35);
var getIteratorMethod = __webpack_require__(140);

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
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
/* 218 */
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

var _now = _interopRequireDefault(__webpack_require__(95));

var _startsWith = _interopRequireDefault(__webpack_require__(204));

var _stringify = _interopRequireDefault(__webpack_require__(166));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _iterator = _interopRequireDefault(__webpack_require__(99));

var _symbol = _interopRequireDefault(__webpack_require__(107));

var _promise = _interopRequireDefault(__webpack_require__(130));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  try {
    function adopt(value) {
      try {
        return value instanceof P ? value : new P(function (resolve) {
          try {
            resolve(value);
          } catch (_e2) {
            __reportError__(_e2, "", "/thresh-lib/src/channel/dispatchMethod.ts");

            throw _e2;
          }
        });
      } catch (_e3) {
        __reportError__(_e3, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e3;
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
          } catch (_e4) {
            __reportError__(_e4, "", "/thresh-lib/src/channel/dispatchMethod.ts");

            throw _e4;
          }
        }

        function rejected(value) {
          try {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          } catch (_e5) {
            __reportError__(_e5, "", "/thresh-lib/src/channel/dispatchMethod.ts");

            throw _e5;
          }
        }

        function step(result) {
          try {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          } catch (_e6) {
            __reportError__(_e6, "", "/thresh-lib/src/channel/dispatchMethod.ts");

            throw _e6;
          }
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      } catch (_e7) {
        __reportError__(_e7, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e7;
      }
    });
  } catch (_e8) {
    __reportError__(_e8, "", "/thresh-lib/src/channel/dispatchMethod.ts");

    throw _e8;
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
        } catch (_e9) {
          __reportError__(_e9, "sent", "/thresh-lib/src/channel/dispatchMethod.ts");

          throw _e9;
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
      } catch (_e10) {
        __reportError__(_e10, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e10;
      }
    }), g;

    function verb(n) {
      try {
        return function (v) {
          return step([n, v]);
        };
      } catch (_e11) {
        __reportError__(_e11, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e11;
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
  } catch (_e12) {
    __reportError__(_e12, "", "/thresh-lib/src/channel/dispatchMethod.ts");

    throw _e12;
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.nativeCallJs = exports.flutterCallJs = void 0;

var __1 = __webpack_require__(93);

var MethodChannel_1 = __webpack_require__(153);

var VNode_1 = __webpack_require__(219);

var AppContainer_1 = __webpack_require__(225);

var UIManager_1 = __webpack_require__(234);

var RenderManager_1 = __webpack_require__(203);

var UtilManager_1 = __webpack_require__(202);

var BridgeManager_1 = __webpack_require__(164);

var bus_1 = __webpack_require__(200);

var Util_1 = __webpack_require__(165);

var initGlobal_1 = __webpack_require__(235);

var basicWidget_1 = __webpack_require__(237);
/**
 * native与flutter调用js后的方法分发器
 */


var Dispatcher =
/** @class */
function () {
  try {
    function Dispatcher() {}

    Dispatcher.dispatch = function (channelParams, from) {
      try {
        var method = channelParams.method,
            params = channelParams.params;

        if (from === 'Flutter') {
          if (Util_1["default"].isString(params)) {
            try {
              params = JSON.parse(params);
            } catch (e) {
              UtilManager_1["default"].warn(e);
            }
          }
        }

        var fn = Dispatcher[method];
        if (fn) fn(params);
      } catch (_e13) {
        __reportError__(_e13, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e13;
      }
    }; // flutter_call_js


    Dispatcher.mediaQuery = function (params) {
      return __awaiter(this, void 0, void 0, function () {
        var _a, debugMode, platform, flutterVersion, _b, flutterFirstChannelSpend, _c, width, _d, needJsBundlePath, bundleDir, res;

        return __generator(this, function (_e) {
          try {
            switch (_e.label) {
              case 0:
                if (__1["default"].envReady) return [2
                /*return*/
                ];
                _a = params.debugMode, debugMode = _a === void 0 ? false : _a, platform = params.platform, flutterVersion = params.flutterVersion, _b = params.flutterFirstChannelSpend, flutterFirstChannelSpend = _b === void 0 ? 0 : _b, _c = params.width, width = _c === void 0 ? 0 : _c, _d = params.needJsBundlePath, needJsBundlePath = _d === void 0 ? true : _d;
                if (!width) return [2
                /*return*/
                ];
                UIManager_1.mediaQuery.setDeviceInfo(params);
                __1["default"].debugMode = !!debugMode;
                __1["default"].platform = platform;
                __1["default"].flutterVersion = flutterVersion;
                __1["default"].envReady = true;
                if (!MethodChannel_1["default"].channelFirstSpendTime && flutterFirstChannelSpend) MethodChannel_1["default"].channelFirstSpendTime = flutterFirstChannelSpend;
                if (true) return [3
                /*break*/
                , 1];
                bundleDir = '/Users/tangjingdong/Desktop/YMM/DF/thresh/example/js/dist';
                MethodChannel_1["default"].call('setBundleDir', {
                  bundleDir: bundleDir
                });
                return [3
                /*break*/
                , 3];

              case 1:
                if (!needJsBundlePath) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , BridgeManager_1["default"].invoke({
                  module: 'thresh',
                  method: 'jsbundlePath',
                  params: {
                    bizName: 'thresh-demo'
                  }
                })];

              case 2:
                res = _e.sent();
                bundleDir = res.data || '';
                if (!bundleDir) throw new Error("cannot get thresh js bundle dir: " + (0, _stringify["default"])(res));
                MethodChannel_1["default"].call('setBundleDir', {
                  bundleDir: bundleDir
                });
                _e.label = 3;

              case 3:
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
    }; // flutter_call_js


    Dispatcher.ready = function (params) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          try {
            switch (_a.label) {
              case 0:
                if (!__1["default"].envReady) {
                  RenderManager_1["default"].getMediaQuery(__1["default"].jsVersion);
                  return [2
                  /*return*/
                  ];
                }

                if (__1["default"].hasRunApp) return [2
                /*return*/
                ];
                __1["default"].hasRunApp = true;
                __1["default"].hasRootFlutterPage = false;

                if (params) {
                  __1["default"].injectRoute(params);
                }

                return [4
                /*yield*/
                , initGlobal_1.promiseResolveHackForIos_10_0_x()];

              case 1:
                _a.sent();

                __1["default"].ready();

                return [2
                /*return*/
                ];
            }
          } catch (_e15) {
            __reportError__(_e15, "", "/thresh-lib/src/channel/dispatchMethod.ts");

            throw _e15;
          }
        });
      });
    }; // flutter_call_js


    Dispatcher.setupPage = function (params) {
      try {
        var pageName = params ? params.pageName : void 0;
        var query = params ? params.params || {} : void 0;

        var pageRes = __1["default"]['_findPage'](pageName, query);

        if (!pageRes.pageData) return;
        RenderManager_1["default"].pushPage(pageRes.pageData, pageRes.pageName);
      } catch (_e16) {
        __reportError__(_e16, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e16;
      }
    }; // flutter_call_js
    // flutter 触发 pop 时通知 js 执行 popPage
    // 然后回到 flutter 执行实际的 popPage
    // 最后回到 js 执行 popPage 后的工作


    Dispatcher.needPopPage = function (params) {
      try {
        RenderManager_1["default"].popPage();
      } catch (_e17) {
        __reportError__(_e17, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e17;
      }
    }; // flutter_call_js
    // 执行该方法时 flutter 实际 popPage 已完成


    Dispatcher.popPage = function (params) {
      try {
        if (params === void 0) {
          params = {};
        }

        var pageName = params.pageName;
        if (!pageName) pageName = AppContainer_1["default"].namesCache[AppContainer_1["default"].namesCache.length - 1];

        if (AppContainer_1["default"].hasPage(pageName, true)) {
          var renderTree = AppContainer_1["default"].getPageData(pageName); // 页面 pop 流程：
          // 先触发 pageOnHide
          // 再执行 pop 完成回调
          // 移除当前页面缓存或关闭窗口
          // 然后执行组件已卸载操作
          // 如果存在前一个页面还需要触发该页面的 pageOnShow

          basicWidget_1.Page.invokePageOnHide();
          bus_1["default"].fire(pageName);
          bus_1["default"].remove(pageName);

          if (!__1["default"].canPop()) {
            // 关闭容器
            Dispatcher.closeWindow(); // 触发当前页面的 didUnmount 方法

            renderTree.invokeLifeCycle(VNode_1.LifeCycle.widgetDidUnmount);
          } else {
            // 移除当前显示页面
            AppContainer_1["default"].removeCurrentShow(); // 触发当前显示页面的 didUnmount 方法

            renderTree.invokeLifeCycle(VNode_1.LifeCycle.widgetDidUnmount); // 如果当前显示的是弹窗则中断
            // TODO - 弹窗中包含 Page 组件时也需要触发 onShow onHide，目前暂未触发

            if ((0, _startsWith["default"])(pageName).call(pageName, AppContainer_1.MODAL_TAG)) return; // 触发即将显示页面的 onShow 方法

            basicWidget_1.Page.invokePageOnShow(pageName);
          }
        }
      } catch (_e18) {
        __reportError__(_e18, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e18;
      }
    }; // flutter_call_js


    Dispatcher.triggerEvent = function (params) {
      try {
        if (!params) return;
        var pageName = params.pageName,
            widgetId = params.widgetId,
            eventId = params.eventId,
            eventType = params.eventType,
            args = params.args;
        var pageNode = AppContainer_1["default"].getPageData(pageName);
        if (!pageNode) return;
        pageNode.invokeEvent(widgetId, eventId, eventType, args);
      } catch (_e19) {
        __reportError__(_e19, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e19;
      }
    }; // flutter_call_js


    Dispatcher.lifeCycle = function (params) {
      try {
        if (!params) return;
        var pageName = params.pageName;
        var lifeStep = params.lifeStep;
        var widgetId = params.widgetId;
        var pageNode = AppContainer_1["default"].getPageData(pageName);
        if (!pageName || !pageNode || !lifeStep) return;

        if (!widgetId) {
          pageNode.invokeLifeCycle(lifeStep);
        } else {
          var renderNode = pageNode.fetch(widgetId);
          if (renderNode) renderNode.invokeLifeCycle(lifeStep);
        }
      } catch (_e20) {
        __reportError__(_e20, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e20;
      }
    }; // flutter_call_js


    Dispatcher.fireTimer = function (params) {
      try {
        bus_1["default"].fire(params.timerId);
      } catch (_e21) {
        __reportError__(_e21, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e21;
      }
    }; // flutter_call_js


    Dispatcher.clearTimer = function (params) {
      try {
        UtilManager_1["default"].clearTimer(params.timerId);
      } catch (_e22) {
        __reportError__(_e22, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e22;
      }
    }; // flutter_call_js native_call_js


    Dispatcher.bridgeResponse = function (params) {
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
      } catch (_e23) {
        __reportError__(_e23, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e23;
      }
    }; // flutter_call_js


    Dispatcher.closeWindow = function () {
      try {
        RenderManager_1["default"].stopAlwaysRender();
        UtilManager_1["default"].setTimeout(function () {
          try {
            Dispatcher.onDestroyed();
            BridgeManager_1["default"].invoke({
              module: 'base',
              method: 'closeWindow'
            });
          } catch (_e24) {
            __reportError__(_e24, "", "/thresh-lib/src/channel/dispatchMethod.ts");

            throw _e24;
          }
        }, 100);
      } catch (_e25) {
        __reportError__(_e25, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e25;
      }
    }; // flutter_call_js


    Dispatcher.pageDidLoad = function () {
      try {
        MethodChannel_1["default"].pageDidLoadTime = (0, _now["default"])();
      } catch (_e26) {
        __reportError__(_e26, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e26;
      }
    }; // native_call_js


    Dispatcher.onDestroyed = function () {
      try {
        MethodChannel_1["default"].call('onDestroyed', {});
        __1["default"]._alive = false;
      } catch (_e27) {
        __reportError__(_e27, "", "/thresh-lib/src/channel/dispatchMethod.ts");

        throw _e27;
      }
    };

    return Dispatcher;
  } catch (_e28) {
    __reportError__(_e28, "", "/thresh-lib/src/channel/dispatchMethod.ts");

    throw _e28;
  }
}();

exports["default"] = Dispatcher;
/**
 * js 暴露给 flutter 调用的方法
 */

function methodChannel_flutter_call_js(channelParams) {
  try {
    if (!__1["default"]._alive) return;
    Dispatcher.dispatch(channelParams, 'Flutter');
  } catch (_e29) {
    __reportError__(_e29, "methodChannel_flutter_call_js", "/thresh-lib/src/channel/dispatchMethod.ts");

    throw _e29;
  }
}

exports.flutterCallJs = methodChannel_flutter_call_js;
/**
 * js 暴露给 native 调用的方法
 */

function methodChannel_native_call_js(channelParams) {
  try {
    if (!__1["default"]._alive) return;
    Dispatcher.dispatch(channelParams, 'Native');
  } catch (_e30) {
    __reportError__(_e30, "methodChannel_native_call_js", "/thresh-lib/src/channel/dispatchMethod.ts");

    throw _e30;
  }
}

exports.nativeCallJs = methodChannel_native_call_js;

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

var _splice = _interopRequireDefault(__webpack_require__(195));

var _indexOf = _interopRequireDefault(__webpack_require__(220));

var _assign = _interopRequireDefault(__webpack_require__(170));

var _includes = _interopRequireDefault(__webpack_require__(154));

var _forEach = _interopRequireDefault(__webpack_require__(50));

var _isArray = _interopRequireDefault(__webpack_require__(181));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _iterator = _interopRequireDefault(__webpack_require__(99));

var _symbol = _interopRequireDefault(__webpack_require__(107));

var _promise = _interopRequireDefault(__webpack_require__(130));

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

var Util_1 = __webpack_require__(165);

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

        this.isMount = false;
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
        this.isMount = true;
        this.nodeId = oldNode.nodeId;
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

          if (this.type === 'Page') {
            var rootNode = this.fetchRootNode();

            if (rootNode.pageNode) {
              throw new Error('Each page only has one <Page />');
            }

            rootNode.pageNode = this;
          }

          return {
            name: this.type,
            widgetId: this.nodeId,
            isStateful: setStateful,
            pageName: pageName,
            props: (0, _assign["default"])({}, this.props, childrenRenderData_1),
            key: this.key || this.parentKey
          };
        }
      } catch (_e24) {
        __reportError__(_e24, "", "/thresh-lib/src/core/VNode.ts");

        throw _e24;
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
          } catch (_e25) {
            __reportError__(_e25, "", "/thresh-lib/src/core/VNode.ts");

            throw _e25;
          }
        });
        return targetVNode;
      } catch (_e26) {
        __reportError__(_e26, "", "/thresh-lib/src/core/VNode.ts");

        throw _e26;
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
      } catch (_e27) {
        __reportError__(_e27, "", "/thresh-lib/src/core/VNode.ts");

        throw _e27;
      }
    }; // 查找距离当前节点向上最近的非原子节点


    VNode.prototype.fetchNearlyCustomNode = function () {
      try {
        if (!this.isBasicWidget) return this;
        var parent = this.parent;
        if (parent) return parent.fetchNearlyCustomNode();
        return this;
      } catch (_e28) {
        __reportError__(_e28, "", "/thresh-lib/src/core/VNode.ts");

        throw _e28;
      }
    }; // 查找距离当前节点向下最近的原子节点


    VNode.prototype.fetchNearlyBasicNode = function () {
      try {
        if (this.isBasicWidget) return this;
        return this.children[0].fetchNearlyBasicNode();
      } catch (_e29) {
        __reportError__(_e29, "", "/thresh-lib/src/core/VNode.ts");

        throw _e29;
      }
    }; // 查找根节点


    VNode.prototype.fetchRootNode = function () {
      try {
        if (!this.parent) return this;
        var parent = this.parent;
        if (parent) return parent.fetchRootNode();
        return this;
      } catch (_e30) {
        __reportError__(_e30, "", "/thresh-lib/src/core/VNode.ts");

        throw _e30;
      }
    }; // 查找页面名


    VNode.prototype.fetchNodePageName = function () {
      try {
        if (this.pageName) return this.pageName;
        if (this.parent) return this.parent.fetchNodePageName();
        return '';
      } catch (_e31) {
        __reportError__(_e31, "", "/thresh-lib/src/core/VNode.ts");

        throw _e31;
      }
    }; // 毕竟两个节点的 type & key 是否相等


    VNode.prototype.isSameAs = function (otherNode) {
      try {
        return this.type === otherNode.type && this.key === otherNode.key;
      } catch (_e32) {
        __reportError__(_e32, "", "/thresh-lib/src/core/VNode.ts");

        throw _e32;
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
      } catch (_e33) {
        __reportError__(_e33, "", "/thresh-lib/src/core/VNode.ts");

        throw _e33;
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
          } catch (_e34) {
            __reportError__(_e34, "", "/thresh-lib/src/core/VNode.ts");

            throw _e34;
          }
        });
      } catch (_e35) {
        __reportError__(_e35, "", "/thresh-lib/src/core/VNode.ts");

        throw _e35;
      }
    }; // 向数组尾部添加子节点


    VNode.prototype.appendChild = function (child, target) {
      try {
        if (target === void 0) {
          target = this.children;
        }

        if ((0, _includes["default"])(target).call(target, child)) this.removeChild(child);
        target.push(child);
      } catch (_e36) {
        __reportError__(_e36, "", "/thresh-lib/src/core/VNode.ts");

        throw _e36;
      }
    }; // 移除数组中的某个节点


    VNode.prototype.removeChild = function (child, target) {
      try {
        if (target === void 0) {
          target = this.children;
        }

        var removeIndex = (0, _indexOf["default"])(target).call(target, child);
        if (removeIndex > -1) (0, _splice["default"])(target).call(target, removeIndex, 1);
      } catch (_e37) {
        __reportError__(_e37, "", "/thresh-lib/src/core/VNode.ts");

        throw _e37;
      }
    }; // 向 basicWidgetPropChildren 中的某个数组属性添加子节点


    VNode.prototype.appendChildInArrayProps = function (child, propName) {
      try {
        this.appendChild(child, this.getTargetChildrenArrayInPropChildren(propName));
      } catch (_e38) {
        __reportError__(_e38, "", "/thresh-lib/src/core/VNode.ts");

        throw _e38;
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
      } catch (_e39) {
        __reportError__(_e39, "", "/thresh-lib/src/core/VNode.ts");

        throw _e39;
      }
    }; // 获取 basicWidgetPropChildren 中的某个数组属性


    VNode.prototype.getTargetChildrenArrayInPropChildren = function (propName) {
      try {
        if (!this.basicWidgetPropChildren[propName]) this.basicWidgetPropChildren[propName] = [];
        return this.basicWidgetPropChildren[propName];
      } catch (_e40) {
        __reportError__(_e40, "", "/thresh-lib/src/core/VNode.ts");

        throw _e40;
      }
    };

    VNode.nodeIdIndex = 0;
    VNode.asyncEventTypes = ['onRefresh', 'onLoadMore'];
    VNode.eventTypes = __spreadArrays(['onTap', 'onLongTap', 'onPan', 'onScroll', 'onChange', 'onLoad', 'onLayout', 'onFocus', 'onBlur', 'onActionsOpen', 'onActionsClose', 'onDragStatusChange'], VNode.asyncEventTypes);
    VNode.throttledEventTypes = ['onTap'];
    return VNode;
  } catch (_e41) {
    __reportError__(_e41, "", "/thresh-lib/src/core/VNode.ts");

    throw _e41;
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
      } catch (_e42) {
        __reportError__(_e42, "", "/thresh-lib/src/core/VNode.ts");

        throw _e42;
      }
    };

    LifeCycle.lifes = ['widgetDidMount', 'widgetDidUpdate', 'widgetDidUnmount'];
    LifeCycle.widgetDidMount = LifeCycle.lifes[0];
    LifeCycle.widgetDidUpdate = LifeCycle.lifes[1];
    LifeCycle.widgetDidUnmount = LifeCycle.lifes[2];
    return LifeCycle;
  } catch (_e43) {
    __reportError__(_e43, "", "/thresh-lib/src/core/VNode.ts");

    throw _e43;
  }
}();

exports.LifeCycle = LifeCycle;

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

var indexOf = __webpack_require__(223);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.indexOf) ? indexOf : own;
};


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(224);
var entryVirtual = __webpack_require__(49);

module.exports = entryVirtual('Array').indexOf;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var $indexOf = __webpack_require__(70).indexOf;
var arrayMethodIsStrict = __webpack_require__(87);
var arrayMethodUsesToLength = __webpack_require__(88);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
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

var _splice = _interopRequireDefault(__webpack_require__(195));

var _includes = _interopRequireDefault(__webpack_require__(154));

var _indexOf = _interopRequireDefault(__webpack_require__(220));

var _startsWith = _interopRequireDefault(__webpack_require__(204));

var _map = _interopRequireDefault(__webpack_require__(226));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.MODAL_TAG = void 0;
exports.MODAL_TAG = 'modal#';

var AppContainer =
/** @class */
function () {
  try {
    function AppContainer() {
      try {
        // 路由
        this.routes = new _map["default"](); // 所有 page 与 modal name 的缓存

        this.namesCache = []; // page names

        this.pageNamesCache = []; // modal names

        this.modalNamesCache = []; // 所有 page 与 modal 的节点树缓存

        this.pageDataCache = new _map["default"]();
      } catch (_e) {
        __reportError__(_e, "AppContainer", "/thresh-lib/src/core/AppContainer.ts");

        throw _e;
      }
    } // 路由操作


    AppContainer.prototype.addRoute = function (routeName, pageBuilder) {
      try {
        if (this.routes.has(routeName)) throw new Error("Route name \"" + routeName + "\" is already exist!");
        this.routes.set(routeName, pageBuilder);
      } catch (_e2) {
        __reportError__(_e2, "", "/thresh-lib/src/core/AppContainer.ts");

        throw _e2;
      }
    };

    AppContainer.prototype.hasRoute = function (routeName) {
      try {
        return this.routes.has(routeName);
      } catch (_e3) {
        __reportError__(_e3, "", "/thresh-lib/src/core/AppContainer.ts");

        throw _e3;
      }
    };

    AppContainer.prototype.getRoute = function (routeName) {
      try {
        if (!this.hasRoute(routeName)) return;
        return this.routes.get(routeName);
      } catch (_e4) {
        __reportError__(_e4, "", "/thresh-lib/src/core/AppContainer.ts");

        throw _e4;
      }
    };

    (0, _defineProperty["default"])(AppContainer.prototype, "isEmpty", {
      // 页面操作

      /**
       * 当前 container 是否不存在内容
       */
      get: function get() {
        try {
          return this.pageNamesCache.length === 0;
        } catch (_e5) {
          __reportError__(_e5, "", "/thresh-lib/src/core/AppContainer.ts");

          throw _e5;
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
          var _context;

          if (this.isEmpty) return false;
          return (0, _startsWith["default"])(_context = this.namesCache[this.namesCache.length - 1]).call(_context, exports.MODAL_TAG);
        } catch (_e6) {
          __reportError__(_e6, "get", "/thresh-lib/src/core/AppContainer.ts");

          throw _e6;
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
          return this.pageNamesCache[this.pageNamesCache.length - 1];
        } catch (_e7) {
          __reportError__(_e7, "get", "/thresh-lib/src/core/AppContainer.ts");

          throw _e7;
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
          var pageName = this.currentPageName;
          if (!pageName) return;
          return this.pageDataCache.get(pageName);
        } catch (_e8) {
          __reportError__(_e8, "get", "/thresh-lib/src/core/AppContainer.ts");

          throw _e8;
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
          if (this.pageNamesCache.length < 2) return;
          return this.pageNamesCache[this.pageNamesCache.length - 2];
        } catch (_e9) {
          __reportError__(_e9, "get", "/thresh-lib/src/core/AppContainer.ts");

          throw _e9;
        }
      },
      enumerable: false,
      configurable: true
    });
    /**
     * 是否存在某一页面
     * @param pageName 页面名称
     * @param withModal 是否同时在 modal 中查找，默认只在 page 中查找
     */

    AppContainer.prototype.hasPage = function (pageName, withModal) {
      try {
        var _context2, _context3;

        if (withModal === void 0) {
          withModal = false;
        }

        if (!withModal) return (0, _indexOf["default"])(_context2 = this.pageNamesCache).call(_context2, pageName) > -1;
        return (0, _indexOf["default"])(_context3 = this.namesCache).call(_context3, pageName) > -1;
      } catch (_e10) {
        __reportError__(_e10, "", "/thresh-lib/src/core/AppContainer.ts");

        throw _e10;
      }
    };
    /**
     * 存入页面
     * @param pageName 页面名
     * @param vnodeTree 页面 vnode
     * @param isModal 是否为 modal
     */


    AppContainer.prototype.pushPage = function (pageName, vnodeTree, isModal) {
      try {
        var _context4;

        if (isModal === void 0) {
          isModal = false;
        }

        if ((0, _includes["default"])(_context4 = this.namesCache).call(_context4, pageName)) throw new Error("Route name \"" + pageName + "\" is already exist!");
        this.namesCache.push(pageName);
        this.pageDataCache.set(pageName, vnodeTree);
        if (!isModal) this.pageNamesCache.push(pageName);else this.modalNamesCache.push(pageName);
      } catch (_e11) {
        __reportError__(_e11, "", "/thresh-lib/src/core/AppContainer.ts");

        throw _e11;
      }
    };
    /**
     * 替换当前显示的页面
     * @param newPageName 新页面名
     * @param newVNodeTree 新页面 vnode
     */


    AppContainer.prototype.replacePage = function (newPageName, newVNodeTree) {
      try {
        var _context5, _context6;

        var oldPageName = this.pageNamesCache.pop();
        var index = (0, _indexOf["default"])(_context5 = this.namesCache).call(_context5, oldPageName);
        (0, _splice["default"])(_context6 = this.namesCache).call(_context6, index, 1, newPageName);
        this.pageNamesCache.push(newPageName);
        this.pageDataCache.set(newPageName, newVNodeTree);
        this.pageDataCache["delete"](oldPageName);
      } catch (_e12) {
        __reportError__(_e12, "", "/thresh-lib/src/core/AppContainer.ts");

        throw _e12;
      }
    };
    /**
     * 移除当前显示的页面或 modal
     */


    AppContainer.prototype.removeCurrentShow = function () {
      try {
        if (this.isEmpty) return;
        var name = this.namesCache.pop();
        if (!(0, _startsWith["default"])(name).call(name, exports.MODAL_TAG)) this.pageNamesCache.pop();else this.modalNamesCache.pop();
        this.pageDataCache["delete"](name);
      } catch (_e13) {
        __reportError__(_e13, "", "/thresh-lib/src/core/AppContainer.ts");

        throw _e13;
      }
    };
    /**
     * 获取页面或 modal 的 vnode 数据
     * @param pageName 页面名称
     */


    AppContainer.prototype.getPageData = function (pageName) {
      try {
        if (!pageName) return;
        if (this.pageDataCache.has(pageName)) return this.pageDataCache.get(pageName);
      } catch (_e14) {
        __reportError__(_e14, "", "/thresh-lib/src/core/AppContainer.ts");

        throw _e14;
      }
    };

    return AppContainer;
  } catch (_e15) {
    __reportError__(_e15, "", "/thresh-lib/src/core/AppContainer.ts");

    throw _e15;
  }
}();

exports["default"] = new AppContainer();

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(227);

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(228);

module.exports = parent;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(229);
__webpack_require__(110);
__webpack_require__(105);
__webpack_require__(52);
var path = __webpack_require__(25);

module.exports = path.Map;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(230);
var collectionStrong = __webpack_require__(233);

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var global = __webpack_require__(8);
var InternalMetadataModule = __webpack_require__(231);
var fails = __webpack_require__(12);
var createNonEnumerableProperty = __webpack_require__(28);
var iterate = __webpack_require__(138);
var anInstance = __webpack_require__(137);
var isObject = __webpack_require__(20);
var setToStringTag = __webpack_require__(74);
var defineProperty = __webpack_require__(29).f;
var forEach = __webpack_require__(86).forEach;
var DESCRIPTORS = __webpack_require__(11);
var InternalStateModule = __webpack_require__(56);

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
      if (iterable != undefined) iterate(iterable, target[ADDER], target, IS_MAP);
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
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(60);
var isObject = __webpack_require__(20);
var has = __webpack_require__(21);
var defineProperty = __webpack_require__(29).f;
var uid = __webpack_require__(42);
var FREEZING = __webpack_require__(232);

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
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(29).f;
var create = __webpack_require__(66);
var redefineAll = __webpack_require__(135);
var bind = __webpack_require__(26);
var anInstance = __webpack_require__(137);
var iterate = __webpack_require__(138);
var defineIterator = __webpack_require__(61);
var setSpecies = __webpack_require__(136);
var DESCRIPTORS = __webpack_require__(11);
var fastKey = __webpack_require__(231).fastKey;
var InternalStateModule = __webpack_require__(56);

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
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
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

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.mediaQuery = void 0;

var MethodChannel_1 = __webpack_require__(153);

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
        MethodChannel_1["default"].call('setAppBarHeight', {
          appBarHeight: appBarHeight
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
/* 235 */
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

var _promise = _interopRequireDefault(__webpack_require__(130));

var _indexOf = _interopRequireDefault(__webpack_require__(220));

var _typeof2 = _interopRequireDefault(__webpack_require__(185));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.promiseResolveHackForIos_10_0_x = void 0;

var MethodChannel_1 = __webpack_require__(153);

var dispatchMethod_1 = __webpack_require__(218);

var UtilManager_1 = __webpack_require__(202);

var EventManager_1 = __webpack_require__(236);

var Util_1 = __webpack_require__(165); // 记录上一个错误信息，防止误报


var lastErrorMessage;

function initGlobal(DF) {
  try {
    var g;

    g = function () {
      try {
        return this;
      } catch (_e) {
        __reportError__(_e, "", "/thresh-lib/src/shared/initGlobal.ts");

        throw _e;
      }
    }();

    try {
      g = g || new Function("return this")();
    } catch (e) {
      if ((typeof window === "undefined" ? "undefined" : (0, _typeof2["default"])(window)) === "object") g = window;
    }

    g['Thresh'] = DF;
    g['methodChannel_flutter_call_js'] = dispatchMethod_1.flutterCallJs;
    g['methodChannel_native_call_js'] = dispatchMethod_1.nativeCallJs;
    g['methodChannel_fire_js_event'] = EventManager_1.methodChannel_fire_js_event;
    g['methodChannel_register_js_event'] = EventManager_1.methodChannel_register_js_event;

    g['__reportError__'] = function (error, functionName, fileName) {
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

        if (lastErrorMessage === messages[0]) return;
        lastErrorMessage = messages[0];
        var message = messages.join('\n'); // 开发模式下向 flutter 发送异常，将会显示在调试面板上

        if (DF.debugMode) {
          MethodChannel_1["default"].call('onError', {
            message: message,
            stack: error.stack || '',
            pageName: DF.pageName || 'unknown',
            referPageName: DF.referPageName || 'unknown'
          });
        }

        DF.onError({
          message: message,
          stack: error.stack || ''
        });
      } catch (_e2) {
        __reportError__(_e2, "", "/thresh-lib/src/shared/initGlobal.ts");

        throw _e2;
      }
    }; // @ts-ignore


    g['setTimeout'] = UtilManager_1["default"].setTimeout; // @ts-ignore

    g['setInterval'] = UtilManager_1["default"].setInterval; // @ts-ignore

    g['clearTimeout'] = UtilManager_1["default"].clearTimer; // @ts-ignore

    g['clearInterval'] = UtilManager_1["default"].clearTimer;
  } catch (_e3) {
    __reportError__(_e3, "initGlobal", "/thresh-lib/src/shared/initGlobal.ts");

    throw _e3;
  }
}

exports["default"] = initGlobal; // ios 10.0.x 版本上 Promise 回调中的 resolve 存在异常
// 必须先通过 Promise.resolve() 进行一遍类似初始化的操作

function promiseResolveHackForIos_10_0_x() {
  try {
    return _promise["default"].resolve();
  } catch (_e4) {
    __reportError__(_e4, "", "/thresh-lib/src/shared/initGlobal.ts");

    throw _e4;
  }
}

exports.promiseResolveHackForIos_10_0_x = promiseResolveHackForIos_10_0_x;

/***/ }),
/* 236 */
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

var _isArray = _interopRequireDefault(__webpack_require__(181));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

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
exports.methodChannel_register_js_event = exports.methodChannel_fire_js_event = void 0;

var bus_1 = __webpack_require__(200);

var Util_1 = __webpack_require__(165);

var DevtoolsManager_1 = __webpack_require__(201);
/**
 * 事件管理器
 * 暴露给外部使用，可以与 native 之间进行事件通信
 */


var EventManager =
/** @class */
function () {
  try {
    function EventManager() {}
    /**
     * 注册事件
     * native 可以通过 methodChannel_register_js_event 注册一个 js 事件
     */


    EventManager.register = function (name, callback) {
      try {
        if (!Util_1["default"].isFunc(callback)) return;
        bus_1["default"].register(callback, name);
        DevtoolsManager_1["default"].show(DevtoolsManager_1.InfoType.event, Util_1["default"].anyToRawString({
          type: 'register',
          name: name
        }), "\u6CE8\u518C\u4E8B\u4EF6\uFF1A" + name);
      } catch (_e2) {
        __reportError__(_e2, "", "/thresh-lib/src/manager/EventManager.ts");

        throw _e2;
      }
    };
    /**
     * 执行事件
     * js 可以通过 EventManager.fire 执行一个事件
     * native 则使用 methodChannel_fire_js_event
     * 1. 执行事件是会先查询是否已注册
     * 2. 当未在 js 中查询到注册的事件时，会向 native 发送执行事件的通知
     */


    EventManager.fire = function (name) {
      try {
        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
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
          bus_1["default"].fire.apply(bus_1["default"], __spreadArrays([name], args));
          DevtoolsManager_1["default"].show(DevtoolsManager_1.InfoType.event, Util_1["default"].anyToRawString({
            type: 'fire',
            name: name,
            args: args
          }), "\u89E6\u53D1JS\u6CE8\u518C\u4E8B\u4EF6\uFF1A" + name);
        } else {
          // TODO - call native method
          DevtoolsManager_1["default"].show(DevtoolsManager_1.InfoType.event, Util_1["default"].anyToRawString({
            type: 'fire',
            name: name,
            args: args
          }), "\u89E6\u53D1Native\u6CE8\u518C\u4E8B\u4EF6\uFF1A" + name);
        }
      } catch (_e3) {
        __reportError__(_e3, "", "/thresh-lib/src/manager/EventManager.ts");

        throw _e3;
      }
    };
    /**
     * 查询某个事件是否已注册在 js 中
     * 无法查询是否在 native 中注册
     */


    EventManager.has = function (name) {
      try {
        return bus_1["default"].has(name);
      } catch (_e4) {
        __reportError__(_e4, "", "/thresh-lib/src/manager/EventManager.ts");

        throw _e4;
      }
    };
    /**
     * 从已注册在 js 的事件中移除某个事件
     * 无法移除 native 中注册的事件
     * @param name
     */


    EventManager.remove = function (name) {
      try {
        bus_1["default"].remove(name);
        DevtoolsManager_1["default"].show(DevtoolsManager_1.InfoType.event, Util_1["default"].anyToRawString({
          type: 'remove',
          name: name
        }), "\u79FB\u9664\u6CE8\u518C\u4E8B\u4EF6\uFF1A" + name);
      } catch (_e5) {
        __reportError__(_e5, "", "/thresh-lib/src/manager/EventManager.ts");

        throw _e5;
      }
    };

    return EventManager;
  } catch (_e6) {
    __reportError__(_e6, "", "/thresh-lib/src/manager/EventManager.ts");

    throw _e6;
  }
}();

exports["default"] = EventManager;

function methodChannel_fire_js_event(name) {
  try {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    EventManager.fire.apply(EventManager, __spreadArrays([name], args));
  } catch (_e7) {
    __reportError__(_e7, "methodChannel_fire_js_event", "/thresh-lib/src/manager/EventManager.ts");

    throw _e7;
  }
}

exports.methodChannel_fire_js_event = methodChannel_fire_js_event;

function methodChannel_register_js_event(name, callback) {
  try {
    EventManager.register(name, callback);
  } catch (_e8) {
    __reportError__(_e8, "", "/thresh-lib/src/manager/EventManager.ts");

    throw _e8;
  }
}

exports.methodChannel_register_js_event = methodChannel_register_js_event;

/***/ }),
/* 237 */
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

var _map = _interopRequireDefault(__webpack_require__(238));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _iterator = _interopRequireDefault(__webpack_require__(99));

var _symbol = _interopRequireDefault(__webpack_require__(107));

var _promise = _interopRequireDefault(__webpack_require__(130));

var _assign = _interopRequireDefault(__webpack_require__(170));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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
exports.Input = exports.Checkbox = exports.Radio = exports.Button = exports.NoticeBar = exports.Refresh = exports.Spin = exports.Text = exports.Image = exports.Icon = exports.NativeView = exports.SwiperView = exports.SwipeActionsView = exports.NestScrollView = exports.ListView = exports.ScrollView = exports.Container = exports.AppBar = exports.Page = void 0;

var Widget_1 = __webpack_require__(251);

var AppContainer_1 = __webpack_require__(225);

var ChildrenRule_1 = __webpack_require__(266);

var MethodChannel_1 = __webpack_require__(153);

var Util_1 = __webpack_require__(165);
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
                pageNode = Page.getLastInShowPage();
                if (!pageNode) return [2
                /*return*/
                ];
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

    Page.invokePageOnShow = function (fromPageName) {
      try {
        var pageNode = Page.getLastInShowPage();
        if (!pageNode) return;
        pageNode.props.onShow && pageNode.props.onShow({
          fromPageName: typeof fromPageName === 'string' ? fromPageName.split('#')[0] : ''
        });
      } catch (_e22) {
        __reportError__(_e22, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e22;
      }
    };

    Page.invokePageOnHide = function () {
      try {
        var pageNode = this.getLastInShowPage();
        if (!pageNode) return;
        pageNode.props.onHide && pageNode.props.onHide();
      } catch (_e23) {
        __reportError__(_e23, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e23;
      }
    };

    Page.getLastInShowPage = function () {
      try {
        if (AppContainer_1["default"].isEmpty) return;
        var willShowPageNode = AppContainer_1["default"].currentPageData;
        if (!willShowPageNode) return;
        return willShowPageNode.pageNode;
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

        __setNavProps(this, 'updateTitle', {
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
        __setNavProps(this, 'scrollTo', {
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
        __setNavProps(this, 'scrollTo', {
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
        __setNavProps(this, 'stopAsyncOperate', {
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
    }

    return NestScrollView;
  } catch (_e39) {
    __reportError__(_e39, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e39;
  }
}(Widget_1.BasicWidget);

exports.NestScrollView = NestScrollView;

var SwipeActionsView =
/** @class */
function (_super) {
  try {
    __extends(SwipeActionsView, _super);

    function SwipeActionsView() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e40) {
        __reportError__(_e40, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e40;
      }
    }

    SwipeActionsView.prototype.openActions = function () {
      try {
        __setNavProps(this, 'openActions', {});
      } catch (_e41) {
        __reportError__(_e41, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e41;
      }
    };

    SwipeActionsView.prototype.closeActions = function () {
      try {
        __setNavProps(this, 'closeActions', {});
      } catch (_e42) {
        __reportError__(_e42, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e42;
      }
    };

    return SwipeActionsView;
  } catch (_e43) {
    __reportError__(_e43, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e43;
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
      } catch (_e44) {
        __reportError__(_e44, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e44;
      }
    }

    SwiperView.prototype.swipeTo = function (index, duration) {
      try {
        __setNavProps(this, 'swipeTo', {
          index: index,
          duration: duration
        });
      } catch (_e45) {
        __reportError__(_e45, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e45;
      }
    };

    return SwiperView;
  } catch (_e46) {
    __reportError__(_e46, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e46;
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
      } catch (_e47) {
        __reportError__(_e47, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e47;
      }
    }

    NativeView.prototype.refresh = function (params) {
      try {
        if (params === void 0) {
          params = {};
        }

        this.invokeCustomMethod('refresh', params);
      } catch (_e48) {
        __reportError__(_e48, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e48;
      }
    };

    NativeView.prototype.destroy = function (params) {
      try {
        if (params === void 0) {
          params = {};
        }

        this.invokeCustomMethod('destroy', params);
      } catch (_e49) {
        __reportError__(_e49, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e49;
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
      } catch (_e50) {
        __reportError__(_e50, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e50;
      }
    };

    return NativeView;
  } catch (_e51) {
    __reportError__(_e51, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e51;
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
      } catch (_e52) {
        __reportError__(_e52, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e52;
      }
    }

    return Icon;
  } catch (_e53) {
    __reportError__(_e53, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e53;
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
      } catch (_e54) {
        __reportError__(_e54, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e54;
      }
    }

    return Image;
  } catch (_e55) {
    __reportError__(_e55, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e55;
  }
}(Widget_1.BasicWidget);

exports.Image = Image;
Image.childrenRule = new ChildrenRule_1["default"]({
  length: 0,
  widgetName: 'Image'
}); // 文本组件

var Text =
/** @class */
function (_super) {
  try {
    __extends(Text, _super);

    function Text() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e56) {
        __reportError__(_e56, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e56;
      }
    }

    return Text;
  } catch (_e57) {
    __reportError__(_e57, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e57;
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
        } catch (_e58) {
          __reportError__(_e58, "", "/thresh-lib/src/core/basicWidget.ts");

          throw _e58;
        }
      }).join('');
    } catch (_e59) {
      __reportError__(_e59, "", "/thresh-lib/src/core/basicWidget.ts");

      throw _e59;
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
      } catch (_e60) {
        __reportError__(_e60, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e60;
      }
    }

    return Spin;
  } catch (_e61) {
    __reportError__(_e61, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e61;
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
      } catch (_e62) {
        __reportError__(_e62, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e62;
      }
    }

    return Refresh;
  } catch (_e63) {
    __reportError__(_e63, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e63;
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
      } catch (_e64) {
        __reportError__(_e64, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e64;
      }
    }

    return NoticeBar;
  } catch (_e65) {
    __reportError__(_e65, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e65;
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
      } catch (_e66) {
        __reportError__(_e66, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e66;
      }
    }

    return Button;
  } catch (_e67) {
    __reportError__(_e67, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e67;
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
      } catch (_e68) {
        __reportError__(_e68, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e68;
      }
    }

    return Radio;
  } catch (_e69) {
    __reportError__(_e69, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e69;
  }
}(Widget_1.BasicWidget);

exports.Radio = Radio;
Radio.childrenRule = new ChildrenRule_1["default"]({
  length: 1,
  name: 'title',
  widgetName: 'Radio'
}); // 复选框组件

var Checkbox =
/** @class */
function (_super) {
  try {
    __extends(Checkbox, _super);

    function Checkbox() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e70) {
        __reportError__(_e70, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e70;
      }
    }

    return Checkbox;
  } catch (_e71) {
    __reportError__(_e71, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e71;
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
      } catch (_e72) {
        __reportError__(_e72, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e72;
      }
    }

    Input.prototype.setValue = function (value) {
      try {
        __setNavProps(this, 'setValue', {
          value: value
        });
      } catch (_e73) {
        __reportError__(_e73, "", "/thresh-lib/src/core/basicWidget.ts");

        throw _e73;
      }
    };

    return Input;
  } catch (_e74) {
    __reportError__(_e74, "", "/thresh-lib/src/core/basicWidget.ts");

    throw _e74;
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
    MethodChannel_1["default"].call(method, __assign({
      pageName: vNode.pageName,
      widgetId: vNode.nodeId
    }, params));
  } catch (_e75) {
    __reportError__(_e75, "__setNavProps", "/thresh-lib/src/core/basicWidget.ts");

    throw _e75;
  }
}

exports["default"] = {
  Page: Page,
  AppBar: AppBar,
  Container: Container,
  ScrollView: ScrollView,
  ListView: ListView,
  NestScrollView: NestScrollView,
  SwipeActionsView: SwipeActionsView,
  SwiperView: SwiperView,
  NativeView: NativeView,
  Icon: Icon,
  Image: Image,
  Text: Text,
  Spin: Spin,
  Refresh: Refresh,
  NoticeBar: NoticeBar,
  Button: Button,
  Radio: Radio,
  Checkbox: Checkbox,
  Input: Input
};

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(239);

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(240);

module.exports = parent;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(241);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.map;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.map) ? map : own;
};


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(242);
var entryVirtual = __webpack_require__(49);

module.exports = entryVirtual('Array').map;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var $map = __webpack_require__(86).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(45);
var arrayMethodUsesToLength = __webpack_require__(88);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(244);

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(245);

module.exports = parent;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(246);
var path = __webpack_require__(25);

var Object = path.Object;

module.exports = function create(P, D) {
  return Object.create(P, D);
};


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(11);
var create = __webpack_require__(66);

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(248);

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(249);

module.exports = parent;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(250);
var path = __webpack_require__(25);

module.exports = path.Object.setPrototypeOf;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(7);
var setPrototypeOf = __webpack_require__(78);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),
/* 251 */
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

var _assign = _interopRequireDefault(__webpack_require__(170));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var scheduleUpdate_1 = __webpack_require__(252);

var Util_1 = __webpack_require__(165);
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
/* 252 */
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

var _splice = _interopRequireDefault(__webpack_require__(195));

var _isArray = _interopRequireDefault(__webpack_require__(181));

var _set = _interopRequireDefault(__webpack_require__(253));

var _from = _interopRequireDefault(__webpack_require__(213));

var _keys = _interopRequireDefault(__webpack_require__(257));

var _forEach = _interopRequireDefault(__webpack_require__(50));

var _filter = _interopRequireDefault(__webpack_require__(261));

var _includes = _interopRequireDefault(__webpack_require__(154));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

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

var UtilManager_1 = __webpack_require__(202);

var RenderManager_1 = __webpack_require__(203);

var Util_1 = __webpack_require__(165); // 更新队列


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
            var parent = node.parent;

            while (parent) {
              if ((0, _includes["default"])(source).call(source, parent)) return false;
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
    if (pendingUpdateQueue.isEmpty) {
      UtilManager_1["default"].setTimeout(function () {
        try {
          prepareCommit(pendingUpdateQueue.unique());
        } catch (_e9) {
          __reportError__(_e9, "", "/thresh-lib/src/core/scheduleUpdate.ts");

          throw _e9;
        }
      }, 16);
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
    var newLength = newNodeArray.length;
    var oldLength = oldNodeArray.length;
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
}

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(254);

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(255);

module.exports = parent;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(256);
__webpack_require__(110);
__webpack_require__(105);
__webpack_require__(52);
var path = __webpack_require__(25);

module.exports = path.Set;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(230);
var collectionStrong = __webpack_require__(233);

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(258);

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(259);

module.exports = parent;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(260);
var path = __webpack_require__(25);

module.exports = path.Object.keys;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(7);
var toObject = __webpack_require__(32);
var nativeKeys = __webpack_require__(68);
var fails = __webpack_require__(12);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(262);

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(263);

module.exports = parent;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(264);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.filter) ? filter : own;
};


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(265);
var entryVirtual = __webpack_require__(49);

module.exports = entryVirtual('Array').filter;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var $filter = __webpack_require__(86).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(45);
var arrayMethodUsesToLength = __webpack_require__(88);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 266 */
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

var _isArray = _interopRequireDefault(__webpack_require__(181));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var UtilManager_1 = __webpack_require__(202);
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
/* 267 */
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

var _filter = _interopRequireDefault(__webpack_require__(261));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var Util_1 = __webpack_require__(165);

var VNode_1 = __webpack_require__(219);
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
/* 268 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.extraPages = exports.apiList = exports.widgetList = exports.Colors = void 0;

var PageAppBar_1 = __webpack_require__(269);

var ContainerDemo_1 = __webpack_require__(281);

var TextDemo_1 = __webpack_require__(283);

var ImageDemo_1 = __webpack_require__(284);

var IconDemo_1 = __webpack_require__(286);

var ScrollViewDemo_1 = __webpack_require__(287);

var ListViewDemo_1 = __webpack_require__(294);

var SwipeActionsViewDemo_1 = __webpack_require__(303);

var SwiperViewDemo_1 = __webpack_require__(304);

var NativeViewDemo_1 = __webpack_require__(305);

var ButtonDemo_1 = __webpack_require__(306);

var RadioDemo_1 = __webpack_require__(307);

var CheckboxDemo_1 = __webpack_require__(308);

var InputDemo_1 = __webpack_require__(309);

var PageActions_1 = __webpack_require__(310);

var ModalActions_1 = __webpack_require__(311);

var ToastActions_1 = __webpack_require__(312);

var RefreshDemo_1 = __webpack_require__(313);

var NestScrollViewDemo_1 = __webpack_require__(314);

var NoticeBarDemo_1 = __webpack_require__(315);

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
  title: 'Page & AppBar',
  desc: '页面与导航栏组件',
  pageName: 'widget-page-appbar',
  pageBuilder: function pageBuilder() {
    try {
      return PageAppBar_1["default"];
    } catch (_e) {
      __reportError__(_e, "", "/config.ts");

      throw _e;
    }
  }
}, {
  title: 'Container',
  desc: '基础容器组件',
  pageName: 'widget-container',
  pageBuilder: function pageBuilder() {
    try {
      return ContainerDemo_1["default"];
    } catch (_e2) {
      __reportError__(_e2, "", "/config.ts");

      throw _e2;
    }
  }
}, {
  title: 'Text',
  desc: '文本组件',
  pageName: 'widget-text',
  pageBuilder: function pageBuilder() {
    try {
      return TextDemo_1["default"];
    } catch (_e3) {
      __reportError__(_e3, "", "/config.ts");

      throw _e3;
    }
  }
}, {
  title: 'Image',
  desc: '图片组件',
  pageName: 'widget-image',
  pageBuilder: function pageBuilder() {
    try {
      return ImageDemo_1["default"];
    } catch (_e4) {
      __reportError__(_e4, "", "/config.ts");

      throw _e4;
    }
  }
}, {
  title: 'Icon',
  desc: '图标组件',
  pageName: 'widget-icon',
  pageBuilder: function pageBuilder() {
    try {
      return IconDemo_1["default"];
    } catch (_e5) {
      __reportError__(_e5, "", "/config.ts");

      throw _e5;
    }
  }
}, {
  title: 'Refresh',
  desc: '刷新指示器组件',
  pageName: 'widget-refresh',
  pageBuilder: function pageBuilder() {
    try {
      return RefreshDemo_1["default"];
    } catch (_e6) {
      __reportError__(_e6, "", "/config.ts");

      throw _e6;
    }
  }
}, {
  title: 'NoticeBar',
  desc: '通知栏组件',
  pageName: 'widget-notice-bar',
  pageBuilder: function pageBuilder() {
    try {
      return NoticeBarDemo_1["default"];
    } catch (_e7) {
      __reportError__(_e7, "", "/config.ts");

      throw _e7;
    }
  }
}, {
  title: 'ScrollView',
  desc: '滚动视图组件',
  pageName: 'widget-scrollview',
  pageBuilder: function pageBuilder() {
    try {
      return ScrollViewDemo_1["default"];
    } catch (_e8) {
      __reportError__(_e8, "", "/config.ts");

      throw _e8;
    }
  }
}, {
  title: 'ListView',
  desc: '列表视图组件',
  pageName: 'widget-listview',
  pageBuilder: function pageBuilder() {
    try {
      return ListViewDemo_1["default"];
    } catch (_e9) {
      __reportError__(_e9, "", "/config.ts");

      throw _e9;
    }
  }
}, {
  title: 'NestScrollView',
  desc: '富交互滚动视图组件',
  pageName: 'widget-nestScrollview',
  pageBuilder: function pageBuilder() {
    try {
      return NestScrollViewDemo_1["default"];
    } catch (_e10) {
      __reportError__(_e10, "", "/config.ts");

      throw _e10;
    }
  }
}, {
  title: 'SwiperActionsView',
  desc: '侧滑显示按钮组件',
  pageName: 'widget- swiperActionsview',
  pageBuilder: function pageBuilder() {
    try {
      return SwipeActionsViewDemo_1["default"];
    } catch (_e11) {
      __reportError__(_e11, "", "/config.ts");

      throw _e11;
    }
  }
}, {
  title: 'SwiperView',
  desc: '滑动视图组件',
  pageName: 'widget-swiperview',
  pageBuilder: function pageBuilder() {
    try {
      return SwiperViewDemo_1["default"];
    } catch (_e12) {
      __reportError__(_e12, "", "/config.ts");

      throw _e12;
    }
  }
}, {
  title: 'NativeView',
  desc: '原生视图组件',
  pageName: 'widget-nativeview',
  pageBuilder: function pageBuilder() {
    try {
      return NativeViewDemo_1["default"];
    } catch (_e13) {
      __reportError__(_e13, "", "/config.ts");

      throw _e13;
    }
  }
}, {
  title: 'Button',
  desc: '按钮组件',
  pageName: 'widget-button',
  pageBuilder: function pageBuilder() {
    try {
      return ButtonDemo_1["default"];
    } catch (_e14) {
      __reportError__(_e14, "", "/config.ts");

      throw _e14;
    }
  }
}, {
  title: 'Radio',
  desc: '单选框组件',
  pageName: 'widget-radio',
  pageBuilder: function pageBuilder() {
    try {
      return RadioDemo_1["default"];
    } catch (_e15) {
      __reportError__(_e15, "", "/config.ts");

      throw _e15;
    }
  }
}, {
  title: 'Checkbox',
  desc: '多选框组件',
  pageName: 'widget-checkbox',
  pageBuilder: function pageBuilder() {
    try {
      return CheckboxDemo_1["default"];
    } catch (_e16) {
      __reportError__(_e16, "", "/config.ts");

      throw _e16;
    }
  }
}, {
  title: 'Input',
  desc: '输入框组件',
  pageName: 'widget-input',
  pageBuilder: function pageBuilder() {
    try {
      return InputDemo_1["default"];
    } catch (_e17) {
      __reportError__(_e17, "", "/config.ts");

      throw _e17;
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
    } catch (_e18) {
      __reportError__(_e18, "", "/config.ts");

      throw _e18;
    }
  }
}, {
  title: 'Modal Actions',
  desc: '模态页面操作',
  pageName: 'api-modal-actions',
  pageBuilder: function pageBuilder() {
    try {
      return ModalActions_1["default"];
    } catch (_e19) {
      __reportError__(_e19, "", "/config.ts");

      throw _e19;
    }
  }
}, {
  title: 'Toast Actions',
  desc: '提示框操作',
  pageName: 'api-toast-actions',
  pageBuilder: function pageBuilder() {
    try {
      return ToastActions_1["default"];
    } catch (_e20) {
      __reportError__(_e20, "", "/config.ts");

      throw _e20;
    }
  }
}];
exports.extraPages = [{
  pageName: 'api-page-actions-next',
  pageBuilder: function pageBuilder() {
    try {
      return PageActions_1.NextPage;
    } catch (_e21) {
      __reportError__(_e21, "", "/config.ts");

      throw _e21;
    }
  }
}, {
  pageName: 'api-page-actions-replace',
  pageBuilder: function pageBuilder() {
    try {
      return PageActions_1.ReplacePage;
    } catch (_e22) {
      __reportError__(_e22, "", "/config.ts");

      throw _e22;
    }
  }
}];

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var config_1 = __webpack_require__(268);

var Box_1 = __webpack_require__(270);

var Center_1 = __webpack_require__(277);

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
                } catch (_e8) {
                  __reportError__(_e8, "", "/pages/basic/PageAppBar.tsx");

                  throw _e8;
                }
              }
            }, thresh_lib_1["default"].createElement(Icon, {
              type: "arrow_back_ios",
              color: config_1.Colors.Primary
            }))),
            buttons: [thresh_lib_1["default"].createElement(Text, {
              color: config_1.Colors.White,
              size: 14,
              onTap: function onTap() {
                try {
                  thresh_lib_1["default"].popPage();
                } catch (_e9) {
                  __reportError__(_e9, "", "/pages/basic/PageAppBar.tsx");

                  throw _e9;
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
                } catch (_e10) {
                  __reportError__(_e10, "", "/pages/basic/PageAppBar.tsx");

                  throw _e10;
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
      } catch (_e11) {
        __reportError__(_e11, "", "/pages/basic/PageAppBar.tsx");

        throw _e11;
      }
    };

    return PageAppBar;
  } catch (_e12) {
    __reportError__(_e12, "", "/pages/basic/PageAppBar.tsx");

    throw _e12;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = PageAppBar;

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _bind = _interopRequireDefault(__webpack_require__(271));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var config_1 = __webpack_require__(268);

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
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(272);

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(273);

module.exports = parent;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(274);

var FunctionPrototype = Function.prototype;

module.exports = function (it) {
  var own = it.bind;
  return it === FunctionPrototype || (it instanceof Function && own === FunctionPrototype.bind) ? bind : own;
};


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(275);
var entryVirtual = __webpack_require__(49);

module.exports = entryVirtual('Function').bind;


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(7);
var bind = __webpack_require__(276);

// `Function.prototype.bind` method
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(27);
var isObject = __webpack_require__(20);

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
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
/* 277 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _getOwnPropertySymbols = _interopRequireDefault(__webpack_require__(278));

var _indexOf = _interopRequireDefault(__webpack_require__(220));

var _assign = _interopRequireDefault(__webpack_require__(170));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(279);

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(280);

module.exports = parent;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
var path = __webpack_require__(25);

module.exports = path.Object.getOwnPropertySymbols;


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var config_1 = __webpack_require__(268);

var Title_1 = __webpack_require__(282);

var Box_1 = __webpack_require__(270);

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
          backgroundColor: config_1.Colors.Primary,
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
      } catch (_e8) {
        __reportError__(_e8, "", "/pages/basic/ContainerDemo.tsx");

        throw _e8;
      }
    };

    return ContainerDemo;
  } catch (_e9) {
    __reportError__(_e9, "", "/pages/basic/ContainerDemo.tsx");

    throw _e9;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = ContainerDemo;

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var config_1 = __webpack_require__(268);

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
/* 283 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var config_1 = __webpack_require__(268);

var Title_1 = __webpack_require__(282);

var Box_1 = __webpack_require__(270);

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
        }, "\u8FD9\u662F\u4E00\u6BB5\u5BCC\u6587\u672C\uFF0C"))));
      } catch (_e8) {
        __reportError__(_e8, "", "/pages/basic/TextDemo.tsx");

        throw _e8;
      }
    };

    return TextDemo;
  } catch (_e9) {
    __reportError__(_e9, "", "/pages/basic/TextDemo.tsx");

    throw _e9;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = TextDemo;

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var config_1 = __webpack_require__(268);

var Title_1 = __webpack_require__(282);

var Box_1 = __webpack_require__(270);

var test_image_png_1 = __webpack_require__(285);

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
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('/assets/test_image.png');

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _map = _interopRequireDefault(__webpack_require__(238));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var Center_1 = __webpack_require__(277);

var Title_1 = __webpack_require__(282);

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
/* 287 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _fill = _interopRequireDefault(__webpack_require__(288));

var _map = _interopRequireDefault(__webpack_require__(238));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var Box_1 = __webpack_require__(270);

var Title_1 = __webpack_require__(282);

var config_1 = __webpack_require__(268);

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
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(289);

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(290);

module.exports = parent;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var fill = __webpack_require__(291);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.fill;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.fill) ? fill : own;
};


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(292);
var entryVirtual = __webpack_require__(49);

module.exports = entryVirtual('Array').fill;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(7);
var fill = __webpack_require__(293);
var addToUnscopables = __webpack_require__(54);

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(32);
var toAbsoluteIndex = __webpack_require__(71);
var toLength = __webpack_require__(33);

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
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
/* 294 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _setTimeout2 = _interopRequireDefault(__webpack_require__(295));

var _promise = _interopRequireDefault(__webpack_require__(130));

var _reverse = _interopRequireDefault(__webpack_require__(298));

var _splice = _interopRequireDefault(__webpack_require__(195));

var _map = _interopRequireDefault(__webpack_require__(238));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _assign = _interopRequireDefault(__webpack_require__(170));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var config_1 = __webpack_require__(268);

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
              var page = _this.state.page;
              if (page >= 5) return _promise["default"].resolve();

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
        }) : thresh_lib_1["default"].createElement(Text, null, this.state.page >= 5 ? '没有更多了' : '上拉加载更多'))));
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
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(296);

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(297);
var path = __webpack_require__(25);

module.exports = path.setTimeout;


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(7);
var global = __webpack_require__(8);
var userAgent = __webpack_require__(47);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
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
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(299);

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(300);

module.exports = parent;


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var reverse = __webpack_require__(301);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reverse;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.reverse) ? reverse : own;
};


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(302);
var entryVirtual = __webpack_require__(49);

module.exports = entryVirtual('Array').reverse;


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var isArray = __webpack_require__(31);

var nativeReverse = [].reverse;
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var Box_1 = __webpack_require__(270);

var Title_1 = __webpack_require__(282);

var config_1 = __webpack_require__(268);

var Center_1 = __webpack_require__(277);

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
/* 304 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _fill = _interopRequireDefault(__webpack_require__(288));

var _map = _interopRequireDefault(__webpack_require__(238));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var Box_1 = __webpack_require__(270);

var Title_1 = __webpack_require__(282);

var config_1 = __webpack_require__(268);

var Center_1 = __webpack_require__(277);

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
          height: thresh_lib_1.ui.screenHeight / 4
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
/* 305 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var Box_1 = __webpack_require__(270);

var config_1 = __webpack_require__(268);

var basicWidget_1 = __webpack_require__(237);

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
/* 306 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _assign = _interopRequireDefault(__webpack_require__(170));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var config_1 = __webpack_require__(268);

var Title_1 = __webpack_require__(282);

var Box_1 = __webpack_require__(270);

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
/* 307 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _map = _interopRequireDefault(__webpack_require__(238));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var config_1 = __webpack_require__(268);

var Title_1 = __webpack_require__(282);

var Box_1 = __webpack_require__(270);

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
/* 308 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _bind = _interopRequireDefault(__webpack_require__(271));

var _map = _interopRequireDefault(__webpack_require__(238));

var _indexOf = _interopRequireDefault(__webpack_require__(220));

var _splice = _interopRequireDefault(__webpack_require__(195));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var config_1 = __webpack_require__(268);

var Title_1 = __webpack_require__(282);

var Box_1 = __webpack_require__(270);

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
/* 309 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var config_1 = __webpack_require__(268);

var Title_1 = __webpack_require__(282);

var Box_1 = __webpack_require__(270);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Input = thresh_lib_1.basicWidgets.Input;

var InputDemo =
/** @class */
function (_super) {
  try {
    __extends(InputDemo, _super);

    function InputDemo() {
      try {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          value: ''
        };
        return _this;
      } catch (_e7) {
        __reportError__(_e7, "InputDemo", "/pages/basic/InputDemo.tsx");

        throw _e7;
      }
    }

    InputDemo.prototype.render = function () {
      try {
        var _this = this;

        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "Input \u8F93\u5165\u6846\u7EC4\u4EF6"
          })
        }, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: this.state.value ? '当前输入内容: ' + this.state.value : '当前未输入内容'
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Input, {
          value: this.state.value,
          maxLines: 5,
          placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
          onChange: function onChange(_a) {
            try {
              var value = _a.value;

              _this.setState({
                value: value
              });
            } catch (_e8) {
              __reportError__(_e8, "onChange", "/pages/basic/InputDemo.tsx");

              throw _e8;
            }
          }
        })));
      } catch (_e9) {
        __reportError__(_e9, "", "/pages/basic/InputDemo.tsx");

        throw _e9;
      }
    };

    return InputDemo;
  } catch (_e10) {
    __reportError__(_e10, "", "/pages/basic/InputDemo.tsx");

    throw _e10;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = InputDemo;

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _assign = _interopRequireDefault(__webpack_require__(170));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var config_1 = __webpack_require__(268);

var Title_1 = __webpack_require__(282);

var Box_1 = __webpack_require__(270);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    Button = thresh_lib_1.basicWidgets.Button,
    Text = thresh_lib_1.basicWidgets.Text;

function buttonStyles() {
  try {
    return {
      width: 100,
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

    PageActions.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "\u9875\u9762\u64CD\u4F5C - \u4E3B\u9875\u9762"
          })
        }, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u70B9\u51FB\u6309\u94AE\u663E\u793A\u4E0B\u7EA7\u9875\u9762"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Button, __assign({}, buttonStyles(), {
          onTap: function onTap() {
            try {
              thresh_lib_1["default"].pushPage('api-page-actions-next');
            } catch (_e11) {
              __reportError__(_e11, "", "/pages/apis/PageActions.tsx");

              throw _e11;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u4E0B\u7EA7\u9875\u9762"))), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u70B9\u51FB\u6309\u94AE\u66FF\u6362\u5F53\u524D\u9875\u9762"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Button, __assign({}, buttonStyles(), {
          onTap: function onTap() {
            try {
              thresh_lib_1["default"].replacePage('api-page-actions-replace');
            } catch (_e12) {
              __reportError__(_e12, "", "/pages/apis/PageActions.tsx");

              throw _e12;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u66FF\u6362\u9875\u9762"))), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u70B9\u51FB\u6309\u94AE\u8FD4\u56DE\u4E0A\u7EA7\u9875\u9762"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Button, __assign({}, buttonStyles(), {
          onTap: function onTap() {
            try {
              thresh_lib_1["default"].popPage();
            } catch (_e13) {
              __reportError__(_e13, "", "/pages/apis/PageActions.tsx");

              throw _e13;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u8FD4\u56DE\u4E0A\u7EA7"))));
      } catch (_e14) {
        __reportError__(_e14, "", "/pages/apis/PageActions.tsx");

        throw _e14;
      }
    };

    return PageActions;
  } catch (_e15) {
    __reportError__(_e15, "", "/pages/apis/PageActions.tsx");

    throw _e15;
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
      } catch (_e16) {
        __reportError__(_e16, "", "/pages/apis/PageActions.tsx");

        throw _e16;
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

    return NextPage;
  } catch (_e19) {
    __reportError__(_e19, "", "/pages/apis/PageActions.tsx");

    throw _e19;
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
      } catch (_e20) {
        __reportError__(_e20, "", "/pages/apis/PageActions.tsx");

        throw _e20;
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
          title: "\u70B9\u51FB\u6309\u94AE\u66FF\u6362\u56DE\u9875\u9762\u64CD\u4F5C\u4E3B\u9875\u9762"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Button, __assign({}, buttonStyles(), {
          onTap: function onTap() {
            try {
              thresh_lib_1["default"].replacePage('api-page-actions');
            } catch (_e21) {
              __reportError__(_e21, "", "/pages/apis/PageActions.tsx");

              throw _e21;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u56DE\u5230\u539F\u9875\u9762"))), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u70B9\u51FB\u6309\u94AE\u8FD4\u56DE\u4E0A\u7EA7\u9875\u9762 - \u9996\u9875"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Button, __assign({}, buttonStyles(), {
          onTap: function onTap() {
            try {
              thresh_lib_1["default"].popPage();
            } catch (_e22) {
              __reportError__(_e22, "", "/pages/apis/PageActions.tsx");

              throw _e22;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u8FD4\u56DE\u4E0A\u7EA7"))));
      } catch (_e23) {
        __reportError__(_e23, "", "/pages/apis/PageActions.tsx");

        throw _e23;
      }
    };

    return ReplacePage;
  } catch (_e24) {
    __reportError__(_e24, "", "/pages/apis/PageActions.tsx");

    throw _e24;
  }
}(thresh_lib_1["default"].Widget);

exports.ReplacePage = ReplacePage;

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _assign = _interopRequireDefault(__webpack_require__(170));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var config_1 = __webpack_require__(268);

var Title_1 = __webpack_require__(282);

var Box_1 = __webpack_require__(270);

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
        thresh_lib_1["default"].showModal(this.renderModal(popup), {
          popup: popup
        });
      } catch (_e11) {
        __reportError__(_e11, "", "/pages/apis/ModalActions.tsx");

        throw _e11;
      }
    };

    ModalActions.prototype.renderModal = function (popup) {
      try {
        return thresh_lib_1["default"].createElement(Container, null, thresh_lib_1["default"].createElement(Container, {
          height: thresh_lib_1.ui.screenHeight * 0.8,
          width: thresh_lib_1.ui.screenWidth,
          backgroundColor: popup ? 0x00000000 : 0x80000000,
          onTap: function onTap() {
            try {
              thresh_lib_1["default"].hideModal();
            } catch (_e12) {
              __reportError__(_e12, "", "/pages/apis/ModalActions.tsx");

              throw _e12;
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
            } catch (_e13) {
              __reportError__(_e13, "", "/pages/apis/ModalActions.tsx");

              throw _e13;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u5173\u95ED\u6A21\u6001\u9875\u9762")), thresh_lib_1["default"].createElement(Text, {
          size: thresh_lib_1.ui.rpx(24),
          color: config_1.Colors.Lightgray,
          margin: {
            top: 20
          }
        }, "\u70B9\u51FB\u900F\u660E\u80CC\u666F\u90E8\u5206\u4E5F\u53EF\u4EE5\u5173\u95ED\u6A21\u6001\u9875\u9762")));
      } catch (_e14) {
        __reportError__(_e14, "", "/pages/apis/ModalActions.tsx");

        throw _e14;
      }
    };

    ModalActions.prototype.render = function () {
      try {
        var _this = this;

        return thresh_lib_1["default"].createElement(Page, {
          backgroundColor: config_1.Colors.Pagebg,
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "\u6A21\u6001\u9875\u9762\u64CD\u4F5C"
          })
        }, thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u663E\u793A\u666E\u901A\u6A21\u6001\u9875\u9762"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Button, __assign({}, buttonStyles(), {
          onTap: function onTap() {
            try {
              _this.showModalScrollView(false);
            } catch (_e15) {
              __reportError__(_e15, "", "/pages/apis/ModalActions.tsx");

              throw _e15;
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
            } catch (_e16) {
              __reportError__(_e16, "", "/pages/apis/ModalActions.tsx");

              throw _e16;
            }
          }
        }), thresh_lib_1["default"].createElement(Text, {
          color: config_1.Colors.White
        }, "\u663E\u793A\u5E95\u90E8\u6ED1\u5165\u6A21\u6001\u9875\u9762"))), thresh_lib_1["default"].createElement(Title_1["default"], {
          title: "\u66F4\u591A\u4F7F\u7528\u65B9\u5F0F"
        }), thresh_lib_1["default"].createElement(Box_1["default"], null, thresh_lib_1["default"].createElement(Text, null, "\u4F60\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49 Modal \u9875\u9762\u7684\u7ED3\u6784\u4E0E\u6837\u5F0F\uFF0C\u5B9E\u73B0\u5BF9\u8BDD\u6846\u3001\u786E\u8BA4\u6846\u7B49\u5B58\u5728\u4EA4\u4E92\u7684\u590D\u6742\u6A21\u6001\u7EC4\u4EF6\u3002")));
      } catch (_e17) {
        __reportError__(_e17, "", "/pages/apis/ModalActions.tsx");

        throw _e17;
      }
    };

    return ModalActions;
  } catch (_e18) {
    __reportError__(_e18, "", "/pages/apis/ModalActions.tsx");

    throw _e18;
  }
}(thresh_lib_1["default"].Widget);

exports["default"] = ModalActions;

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _assign = _interopRequireDefault(__webpack_require__(170));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var config_1 = __webpack_require__(268);

var Title_1 = __webpack_require__(282);

var Box_1 = __webpack_require__(270);

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
/* 313 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var config_1 = __webpack_require__(268);

var Title_1 = __webpack_require__(282);

var Box_1 = __webpack_require__(270);

var Center_1 = __webpack_require__(277);

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
/* 314 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _fill = _interopRequireDefault(__webpack_require__(288));

var _map = _interopRequireDefault(__webpack_require__(238));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var thresh_lib_1 = __webpack_require__(93);

var config_1 = __webpack_require__(268);

var basicWidget_1 = __webpack_require__(237);

var Center_1 = __webpack_require__(277);

var Page = thresh_lib_1.basicWidgets.Page,
    AppBar = thresh_lib_1.basicWidgets.AppBar,
    NestScrollView = thresh_lib_1.basicWidgets.NestScrollView,
    Container = thresh_lib_1.basicWidgets.Container,
    Text = thresh_lib_1.basicWidgets.Text;

var NestScrollViewDemo =
/** @class */
function (_super) {
  try {
    __extends(NestScrollViewDemo, _super);

    function NestScrollViewDemo() {
      try {
        return _super !== null && _super.apply(this, arguments) || this;
      } catch (_e7) {
        __reportError__(_e7, "", "/pages/basic/NestScrollViewDemo.tsx");

        throw _e7;
      }
    }

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
          } catch (_e8) {
            __reportError__(_e8, "", "/pages/basic/NestScrollViewDemo.tsx");

            throw _e8;
          }
        });
      } catch (_e9) {
        __reportError__(_e9, "", "/pages/basic/NestScrollViewDemo.tsx");

        throw _e9;
      }
    };

    NestScrollViewDemo.prototype.render = function () {
      try {
        return thresh_lib_1["default"].createElement(Page, null, thresh_lib_1["default"].createElement(NestScrollView, {
          appBar: thresh_lib_1["default"].createElement(AppBar, {
            title: "NestScrollView \u7EC4\u4EF6",
            titleColor: config_1.Colors.White,
            backgroundColor: config_1.Colors.Primary
          }),
          offset: thresh_lib_1.ui.screenHeight - 100,
          backgroundView: thresh_lib_1["default"].createElement(Center_1["default"], {
            width: thresh_lib_1.ui.screenWidth,
            height: thresh_lib_1.ui.screenHeight,
            backgroundColor: config_1.Colors.Primary
          }, thresh_lib_1["default"].createElement(Text, {
            color: config_1.Colors.White
          }, "\u5411\u4E0A\u62D6\u62FD\u5E95\u90E8\u89C6\u56FE"))
        }, thresh_lib_1["default"].createElement(Container, {
          width: thresh_lib_1.ui.screenWidth
        }, thresh_lib_1["default"].createElement(Container, {
          margin: {
            top: thresh_lib_1.ui.rpx(20),
            bottom: thresh_lib_1.ui.rpx(20),
            left: (thresh_lib_1.ui.screenWidth - thresh_lib_1.ui.rpx(100)) / 2
          },
          width: thresh_lib_1.ui.rpx(100),
          height: thresh_lib_1.ui.rpx(10),
          borderRadius: thresh_lib_1.ui.rpx(5),
          backgroundColor: config_1.Colors.White
        }), thresh_lib_1["default"].createElement(basicWidget_1.Image, {
          width: thresh_lib_1.ui.screenWidth,
          src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2438981516,3561412782&fm=26&gp=0.jpg"
        }))));
      } catch (_e10) {
        __reportError__(_e10, "", "/pages/basic/NestScrollViewDemo.tsx");

        throw _e10;
      }
    };

    return NestScrollViewDemo;
  } catch (_e11) {
    __reportError__(_e11, "", "/pages/basic/NestScrollViewDemo.tsx");

    throw _e11;
  }
}(thresh_lib_1.Widget);

exports["default"] = NestScrollViewDemo;

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var config_1 = __webpack_require__(268);

var Title_1 = __webpack_require__(282);

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
/* 316 */
/***/ (function(module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(1);

var _bind = _interopRequireDefault(__webpack_require__(271));

var _map = _interopRequireDefault(__webpack_require__(238));

var _defineProperty = _interopRequireDefault(__webpack_require__(89));

var _create = _interopRequireDefault(__webpack_require__(243));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(247));

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

var config_1 = __webpack_require__(268);

var Box_1 = __webpack_require__(270);

var Center_1 = __webpack_require__(277);

var Title_1 = __webpack_require__(282);

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

    HomePage.prototype.tapListItem = function (pageName) {
      try {
        thresh_lib_1["default"].pushPage(pageName);
      } catch (_e8) {
        __reportError__(_e8, "", "/pages/homePage.tsx");

        throw _e8;
      }
    };

    HomePage.prototype.widgetDidMount = function () {
      try {
        thresh_lib_1["default"].pageDidShow();
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
            title: this.props.title || 'Thresh Demos'
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