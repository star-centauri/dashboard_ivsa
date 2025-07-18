import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  __esm,
  __export
} from "./chunk-GBTWTWDP.js";

// node_modules/zrender/lib/core/env.js
function detect(ua, env2) {
  var browser = env2.browser;
  var firefox = ua.match(/Firefox\/([\d.]+)/);
  var ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/.+?rv:(([\d.]+))/);
  var edge = ua.match(/Edge?\/([\d.]+)/);
  var weChat = /micromessenger/i.test(ua);
  if (firefox) {
    browser.firefox = true;
    browser.version = firefox[1];
  }
  if (ie) {
    browser.ie = true;
    browser.version = ie[1];
  }
  if (edge) {
    browser.edge = true;
    browser.version = edge[1];
    browser.newEdge = +edge[1].split(".")[0] > 18;
  }
  if (weChat) {
    browser.weChat = true;
  }
  env2.svgSupported = typeof SVGRect !== "undefined";
  env2.touchEventsSupported = "ontouchstart" in window && !browser.ie && !browser.edge;
  env2.pointerEventsSupported = "onpointerdown" in window && (browser.edge || browser.ie && +browser.version >= 11);
  env2.domSupported = typeof document !== "undefined";
  var style = document.documentElement.style;
  env2.transform3dSupported = (browser.ie && "transition" in style || browser.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in style) && !("OTransition" in style);
  env2.transformSupported = env2.transform3dSupported || browser.ie && +browser.version >= 9;
}
var Browser, Env, env, env_default;
var init_env = __esm({
  "node_modules/zrender/lib/core/env.js"() {
    Browser = /* @__PURE__ */ function() {
      function Browser2() {
        this.firefox = false;
        this.ie = false;
        this.edge = false;
        this.newEdge = false;
        this.weChat = false;
      }
      return Browser2;
    }();
    Env = /* @__PURE__ */ function() {
      function Env2() {
        this.browser = new Browser();
        this.node = false;
        this.wxa = false;
        this.worker = false;
        this.svgSupported = false;
        this.touchEventsSupported = false;
        this.pointerEventsSupported = false;
        this.domSupported = false;
        this.transformSupported = false;
        this.transform3dSupported = false;
        this.hasGlobalWindow = typeof window !== "undefined";
      }
      return Env2;
    }();
    env = new Env();
    if (typeof wx === "object" && typeof wx.getSystemInfoSync === "function") {
      env.wxa = true;
      env.touchEventsSupported = true;
    } else if (typeof document === "undefined" && typeof self !== "undefined") {
      env.worker = true;
    } else if (!env.hasGlobalWindow || "Deno" in window) {
      env.node = true;
      env.svgSupported = true;
    } else {
      detect(navigator.userAgent, env);
    }
    env_default = env;
  }
});

// node_modules/zrender/lib/core/platform.js
function getTextWidthMap(mapStr) {
  var map2 = {};
  if (typeof JSON === "undefined") {
    return map2;
  }
  for (var i = 0; i < mapStr.length; i++) {
    var char = String.fromCharCode(i + 32);
    var size = (mapStr.charCodeAt(i) - OFFSET) / SCALE;
    map2[char] = size;
  }
  return map2;
}
function setPlatformAPI(newPlatformApis) {
  for (var key in platformApi) {
    if (newPlatformApis[key]) {
      platformApi[key] = newPlatformApis[key];
    }
  }
}
var DEFAULT_FONT_SIZE, DEFAULT_FONT_FAMILY, DEFAULT_FONT, OFFSET, SCALE, defaultWidthMapStr, DEFAULT_TEXT_WIDTH_MAP, platformApi;
var init_platform = __esm({
  "node_modules/zrender/lib/core/platform.js"() {
    DEFAULT_FONT_SIZE = 12;
    DEFAULT_FONT_FAMILY = "sans-serif";
    DEFAULT_FONT = DEFAULT_FONT_SIZE + "px " + DEFAULT_FONT_FAMILY;
    OFFSET = 20;
    SCALE = 100;
    defaultWidthMapStr = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
    DEFAULT_TEXT_WIDTH_MAP = getTextWidthMap(defaultWidthMapStr);
    platformApi = {
      createCanvas: function() {
        return typeof document !== "undefined" && document.createElement("canvas");
      },
      measureText: /* @__PURE__ */ function() {
        var _ctx;
        var _cachedFont;
        return function(text, font) {
          if (!_ctx) {
            var canvas = platformApi.createCanvas();
            _ctx = canvas && canvas.getContext("2d");
          }
          if (_ctx) {
            if (_cachedFont !== font) {
              _cachedFont = _ctx.font = font || DEFAULT_FONT;
            }
            return _ctx.measureText(text);
          } else {
            text = text || "";
            font = font || DEFAULT_FONT;
            var res = /((?:\d+)?\.?\d*)px/.exec(font);
            var fontSize = res && +res[1] || DEFAULT_FONT_SIZE;
            var width = 0;
            if (font.indexOf("mono") >= 0) {
              width = fontSize * text.length;
            } else {
              for (var i = 0; i < text.length; i++) {
                var preCalcWidth = DEFAULT_TEXT_WIDTH_MAP[text[i]];
                width += preCalcWidth == null ? fontSize : preCalcWidth * fontSize;
              }
            }
            return {
              width
            };
          }
        };
      }(),
      loadImage: function(src, onload, onerror) {
        var image = new Image();
        image.onload = onload;
        image.onerror = onerror;
        image.src = src;
        return image;
      }
    };
  }
});

// node_modules/zrender/lib/core/util.js
var util_exports = {};
__export(util_exports, {
  HashMap: () => HashMap,
  RADIAN_TO_DEGREE: () => RADIAN_TO_DEGREE,
  assert: () => assert,
  bind: () => bind,
  clone: () => clone,
  concatArray: () => concatArray,
  createCanvas: () => createCanvas,
  createHashMap: () => createHashMap,
  createObject: () => createObject,
  curry: () => curry,
  defaults: () => defaults,
  disableUserSelect: () => disableUserSelect,
  each: () => each,
  eqNaN: () => eqNaN,
  extend: () => extend,
  filter: () => filter,
  find: () => find,
  guid: () => guid,
  hasOwn: () => hasOwn,
  indexOf: () => indexOf,
  inherits: () => inherits,
  isArray: () => isArray,
  isArrayLike: () => isArrayLike,
  isBuiltInObject: () => isBuiltInObject,
  isDom: () => isDom,
  isFunction: () => isFunction,
  isGradientObject: () => isGradientObject,
  isImagePatternObject: () => isImagePatternObject,
  isNumber: () => isNumber,
  isObject: () => isObject,
  isPrimitive: () => isPrimitive,
  isRegExp: () => isRegExp,
  isString: () => isString,
  isStringSafe: () => isStringSafe,
  isTypedArray: () => isTypedArray,
  keys: () => keys,
  logError: () => logError,
  map: () => map,
  merge: () => merge,
  mergeAll: () => mergeAll,
  mixin: () => mixin,
  noop: () => noop,
  normalizeCssArray: () => normalizeCssArray,
  reduce: () => reduce,
  retrieve: () => retrieve,
  retrieve2: () => retrieve2,
  retrieve3: () => retrieve3,
  setAsPrimitive: () => setAsPrimitive,
  slice: () => slice,
  trim: () => trim
});
function guid() {
  return idStart++;
}
function logError() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  if (typeof console !== "undefined") {
    console.error.apply(console, args);
  }
}
function clone(source) {
  if (source == null || typeof source !== "object") {
    return source;
  }
  var result = source;
  var typeStr = objToString.call(source);
  if (typeStr === "[object Array]") {
    if (!isPrimitive(source)) {
      result = [];
      for (var i = 0, len2 = source.length; i < len2; i++) {
        result[i] = clone(source[i]);
      }
    }
  } else if (TYPED_ARRAY[typeStr]) {
    if (!isPrimitive(source)) {
      var Ctor = source.constructor;
      if (Ctor.from) {
        result = Ctor.from(source);
      } else {
        result = new Ctor(source.length);
        for (var i = 0, len2 = source.length; i < len2; i++) {
          result[i] = source[i];
        }
      }
    }
  } else if (!BUILTIN_OBJECT[typeStr] && !isPrimitive(source) && !isDom(source)) {
    result = {};
    for (var key in source) {
      if (source.hasOwnProperty(key) && key !== protoKey) {
        result[key] = clone(source[key]);
      }
    }
  }
  return result;
}
function merge(target, source, overwrite) {
  if (!isObject(source) || !isObject(target)) {
    return overwrite ? clone(source) : target;
  }
  for (var key in source) {
    if (source.hasOwnProperty(key) && key !== protoKey) {
      var targetProp = target[key];
      var sourceProp = source[key];
      if (isObject(sourceProp) && isObject(targetProp) && !isArray(sourceProp) && !isArray(targetProp) && !isDom(sourceProp) && !isDom(targetProp) && !isBuiltInObject(sourceProp) && !isBuiltInObject(targetProp) && !isPrimitive(sourceProp) && !isPrimitive(targetProp)) {
        merge(targetProp, sourceProp, overwrite);
      } else if (overwrite || !(key in target)) {
        target[key] = clone(source[key]);
      }
    }
  }
  return target;
}
function mergeAll(targetAndSources, overwrite) {
  var result = targetAndSources[0];
  for (var i = 1, len2 = targetAndSources.length; i < len2; i++) {
    result = merge(result, targetAndSources[i], overwrite);
  }
  return result;
}
function extend(target, source) {
  if (Object.assign) {
    Object.assign(target, source);
  } else {
    for (var key in source) {
      if (source.hasOwnProperty(key) && key !== protoKey) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
function defaults(target, source, overlay) {
  var keysArr = keys(source);
  for (var i = 0, len2 = keysArr.length; i < len2; i++) {
    var key = keysArr[i];
    if (overlay ? source[key] != null : target[key] == null) {
      target[key] = source[key];
    }
  }
  return target;
}
function indexOf(array, value) {
  if (array) {
    if (array.indexOf) {
      return array.indexOf(value);
    }
    for (var i = 0, len2 = array.length; i < len2; i++) {
      if (array[i] === value) {
        return i;
      }
    }
  }
  return -1;
}
function inherits(clazz, baseClazz) {
  var clazzPrototype = clazz.prototype;
  function F() {
  }
  F.prototype = baseClazz.prototype;
  clazz.prototype = new F();
  for (var prop in clazzPrototype) {
    if (clazzPrototype.hasOwnProperty(prop)) {
      clazz.prototype[prop] = clazzPrototype[prop];
    }
  }
  clazz.prototype.constructor = clazz;
  clazz.superClass = baseClazz;
}
function mixin(target, source, override) {
  target = "prototype" in target ? target.prototype : target;
  source = "prototype" in source ? source.prototype : source;
  if (Object.getOwnPropertyNames) {
    var keyList = Object.getOwnPropertyNames(source);
    for (var i = 0; i < keyList.length; i++) {
      var key = keyList[i];
      if (key !== "constructor") {
        if (override ? source[key] != null : target[key] == null) {
          target[key] = source[key];
        }
      }
    }
  } else {
    defaults(target, source, override);
  }
}
function isArrayLike(data) {
  if (!data) {
    return false;
  }
  if (typeof data === "string") {
    return false;
  }
  return typeof data.length === "number";
}
function each(arr, cb, context) {
  if (!(arr && cb)) {
    return;
  }
  if (arr.forEach && arr.forEach === nativeForEach) {
    arr.forEach(cb, context);
  } else if (arr.length === +arr.length) {
    for (var i = 0, len2 = arr.length; i < len2; i++) {
      cb.call(context, arr[i], i, arr);
    }
  } else {
    for (var key in arr) {
      if (arr.hasOwnProperty(key)) {
        cb.call(context, arr[key], key, arr);
      }
    }
  }
}
function map(arr, cb, context) {
  if (!arr) {
    return [];
  }
  if (!cb) {
    return slice(arr);
  }
  if (arr.map && arr.map === nativeMap) {
    return arr.map(cb, context);
  } else {
    var result = [];
    for (var i = 0, len2 = arr.length; i < len2; i++) {
      result.push(cb.call(context, arr[i], i, arr));
    }
    return result;
  }
}
function reduce(arr, cb, memo, context) {
  if (!(arr && cb)) {
    return;
  }
  for (var i = 0, len2 = arr.length; i < len2; i++) {
    memo = cb.call(context, memo, arr[i], i, arr);
  }
  return memo;
}
function filter(arr, cb, context) {
  if (!arr) {
    return [];
  }
  if (!cb) {
    return slice(arr);
  }
  if (arr.filter && arr.filter === nativeFilter) {
    return arr.filter(cb, context);
  } else {
    var result = [];
    for (var i = 0, len2 = arr.length; i < len2; i++) {
      if (cb.call(context, arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
}
function find(arr, cb, context) {
  if (!(arr && cb)) {
    return;
  }
  for (var i = 0, len2 = arr.length; i < len2; i++) {
    if (cb.call(context, arr[i], i, arr)) {
      return arr[i];
    }
  }
}
function keys(obj) {
  if (!obj) {
    return [];
  }
  if (Object.keys) {
    return Object.keys(obj);
  }
  var keyList = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      keyList.push(key);
    }
  }
  return keyList;
}
function bindPolyfill(func, context) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  return function() {
    return func.apply(context, args.concat(nativeSlice.call(arguments)));
  };
}
function curry(func) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  return function() {
    return func.apply(this, args.concat(nativeSlice.call(arguments)));
  };
}
function isArray(value) {
  if (Array.isArray) {
    return Array.isArray(value);
  }
  return objToString.call(value) === "[object Array]";
}
function isFunction(value) {
  return typeof value === "function";
}
function isString(value) {
  return typeof value === "string";
}
function isStringSafe(value) {
  return objToString.call(value) === "[object String]";
}
function isNumber(value) {
  return typeof value === "number";
}
function isObject(value) {
  var type = typeof value;
  return type === "function" || !!value && type === "object";
}
function isBuiltInObject(value) {
  return !!BUILTIN_OBJECT[objToString.call(value)];
}
function isTypedArray(value) {
  return !!TYPED_ARRAY[objToString.call(value)];
}
function isDom(value) {
  return typeof value === "object" && typeof value.nodeType === "number" && typeof value.ownerDocument === "object";
}
function isGradientObject(value) {
  return value.colorStops != null;
}
function isImagePatternObject(value) {
  return value.image != null;
}
function isRegExp(value) {
  return objToString.call(value) === "[object RegExp]";
}
function eqNaN(value) {
  return value !== value;
}
function retrieve() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  for (var i = 0, len2 = args.length; i < len2; i++) {
    if (args[i] != null) {
      return args[i];
    }
  }
}
function retrieve2(value0, value1) {
  return value0 != null ? value0 : value1;
}
function retrieve3(value0, value1, value2) {
  return value0 != null ? value0 : value1 != null ? value1 : value2;
}
function slice(arr) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  return nativeSlice.apply(arr, args);
}
function normalizeCssArray(val) {
  if (typeof val === "number") {
    return [val, val, val, val];
  }
  var len2 = val.length;
  if (len2 === 2) {
    return [val[0], val[1], val[0], val[1]];
  } else if (len2 === 3) {
    return [val[0], val[1], val[2], val[1]];
  }
  return val;
}
function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
function trim(str) {
  if (str == null) {
    return null;
  } else if (typeof str.trim === "function") {
    return str.trim();
  } else {
    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }
}
function setAsPrimitive(obj) {
  obj[primitiveKey] = true;
}
function isPrimitive(obj) {
  return obj[primitiveKey];
}
function maybeNativeMap() {
  return isNativeMapSupported ? /* @__PURE__ */ new Map() : new MapPolyfill();
}
function createHashMap(obj) {
  return new HashMap(obj);
}
function concatArray(a, b) {
  var newArray = new a.constructor(a.length + b.length);
  for (var i = 0; i < a.length; i++) {
    newArray[i] = a[i];
  }
  var offset = a.length;
  for (var i = 0; i < b.length; i++) {
    newArray[i + offset] = b[i];
  }
  return newArray;
}
function createObject(proto, properties) {
  var obj;
  if (Object.create) {
    obj = Object.create(proto);
  } else {
    var StyleCtor = function() {
    };
    StyleCtor.prototype = proto;
    obj = new StyleCtor();
  }
  if (properties) {
    extend(obj, properties);
  }
  return obj;
}
function disableUserSelect(dom) {
  var domStyle = dom.style;
  domStyle.webkitUserSelect = "none";
  domStyle.userSelect = "none";
  domStyle.webkitTapHighlightColor = "rgba(0,0,0,0)";
  domStyle["-webkit-touch-callout"] = "none";
}
function hasOwn(own, prop) {
  return own.hasOwnProperty(prop);
}
function noop() {
}
var BUILTIN_OBJECT, TYPED_ARRAY, objToString, arrayProto, nativeForEach, nativeFilter, nativeSlice, nativeMap, ctorFunction, protoFunction, protoKey, idStart, createCanvas, bind, primitiveKey, MapPolyfill, isNativeMapSupported, HashMap, RADIAN_TO_DEGREE;
var init_util = __esm({
  "node_modules/zrender/lib/core/util.js"() {
    init_platform();
    BUILTIN_OBJECT = reduce(["Function", "RegExp", "Date", "Error", "CanvasGradient", "CanvasPattern", "Image", "Canvas"], function(obj, val) {
      obj["[object " + val + "]"] = true;
      return obj;
    }, {});
    TYPED_ARRAY = reduce(["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64"], function(obj, val) {
      obj["[object " + val + "Array]"] = true;
      return obj;
    }, {});
    objToString = Object.prototype.toString;
    arrayProto = Array.prototype;
    nativeForEach = arrayProto.forEach;
    nativeFilter = arrayProto.filter;
    nativeSlice = arrayProto.slice;
    nativeMap = arrayProto.map;
    ctorFunction = function() {
    }.constructor;
    protoFunction = ctorFunction ? ctorFunction.prototype : null;
    protoKey = "__proto__";
    idStart = 2311;
    createCanvas = platformApi.createCanvas;
    bind = protoFunction && isFunction(protoFunction.bind) ? protoFunction.call.bind(protoFunction.bind) : bindPolyfill;
    primitiveKey = "__ec_primitive__";
    MapPolyfill = function() {
      function MapPolyfill2() {
        this.data = {};
      }
      MapPolyfill2.prototype["delete"] = function(key) {
        var existed = this.has(key);
        if (existed) {
          delete this.data[key];
        }
        return existed;
      };
      MapPolyfill2.prototype.has = function(key) {
        return this.data.hasOwnProperty(key);
      };
      MapPolyfill2.prototype.get = function(key) {
        return this.data[key];
      };
      MapPolyfill2.prototype.set = function(key, value) {
        this.data[key] = value;
        return this;
      };
      MapPolyfill2.prototype.keys = function() {
        return keys(this.data);
      };
      MapPolyfill2.prototype.forEach = function(callback) {
        var data = this.data;
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            callback(data[key], key);
          }
        }
      };
      return MapPolyfill2;
    }();
    isNativeMapSupported = typeof Map === "function";
    HashMap = function() {
      function HashMap2(obj) {
        var isArr = isArray(obj);
        this.data = maybeNativeMap();
        var thisMap = this;
        obj instanceof HashMap2 ? obj.each(visit) : obj && each(obj, visit);
        function visit(value, key) {
          isArr ? thisMap.set(value, key) : thisMap.set(key, value);
        }
      }
      HashMap2.prototype.hasKey = function(key) {
        return this.data.has(key);
      };
      HashMap2.prototype.get = function(key) {
        return this.data.get(key);
      };
      HashMap2.prototype.set = function(key, value) {
        this.data.set(key, value);
        return value;
      };
      HashMap2.prototype.each = function(cb, context) {
        this.data.forEach(function(value, key) {
          cb.call(context, value, key);
        });
      };
      HashMap2.prototype.keys = function() {
        var keys2 = this.data.keys();
        return isNativeMapSupported ? Array.from(keys2) : keys2;
      };
      HashMap2.prototype.removeKey = function(key) {
        this.data["delete"](key);
      };
      return HashMap2;
    }();
    RADIAN_TO_DEGREE = 180 / Math.PI;
  }
});

// node_modules/zrender/lib/core/vector.js
var vector_exports = {};
__export(vector_exports, {
  add: () => add,
  applyTransform: () => applyTransform,
  clone: () => clone2,
  copy: () => copy,
  create: () => create,
  dist: () => dist,
  distSquare: () => distSquare,
  distance: () => distance,
  distanceSquare: () => distanceSquare,
  div: () => div,
  dot: () => dot,
  len: () => len,
  lenSquare: () => lenSquare,
  length: () => length,
  lengthSquare: () => lengthSquare,
  lerp: () => lerp,
  max: () => max,
  min: () => min,
  mul: () => mul,
  negate: () => negate,
  normalize: () => normalize,
  scale: () => scale,
  scaleAndAdd: () => scaleAndAdd,
  set: () => set,
  sub: () => sub
});
function create(x, y) {
  if (x == null) {
    x = 0;
  }
  if (y == null) {
    y = 0;
  }
  return [x, y];
}
function copy(out, v) {
  out[0] = v[0];
  out[1] = v[1];
  return out;
}
function clone2(v) {
  return [v[0], v[1]];
}
function set(out, a, b) {
  out[0] = a;
  out[1] = b;
  return out;
}
function add(out, v1, v2) {
  out[0] = v1[0] + v2[0];
  out[1] = v1[1] + v2[1];
  return out;
}
function scaleAndAdd(out, v1, v2, a) {
  out[0] = v1[0] + v2[0] * a;
  out[1] = v1[1] + v2[1] * a;
  return out;
}
function sub(out, v1, v2) {
  out[0] = v1[0] - v2[0];
  out[1] = v1[1] - v2[1];
  return out;
}
function len(v) {
  return Math.sqrt(lenSquare(v));
}
function lenSquare(v) {
  return v[0] * v[0] + v[1] * v[1];
}
function mul(out, v1, v2) {
  out[0] = v1[0] * v2[0];
  out[1] = v1[1] * v2[1];
  return out;
}
function div(out, v1, v2) {
  out[0] = v1[0] / v2[0];
  out[1] = v1[1] / v2[1];
  return out;
}
function dot(v1, v2) {
  return v1[0] * v2[0] + v1[1] * v2[1];
}
function scale(out, v, s) {
  out[0] = v[0] * s;
  out[1] = v[1] * s;
  return out;
}
function normalize(out, v) {
  var d = len(v);
  if (d === 0) {
    out[0] = 0;
    out[1] = 0;
  } else {
    out[0] = v[0] / d;
    out[1] = v[1] / d;
  }
  return out;
}
function distance(v1, v2) {
  return Math.sqrt((v1[0] - v2[0]) * (v1[0] - v2[0]) + (v1[1] - v2[1]) * (v1[1] - v2[1]));
}
function distanceSquare(v1, v2) {
  return (v1[0] - v2[0]) * (v1[0] - v2[0]) + (v1[1] - v2[1]) * (v1[1] - v2[1]);
}
function negate(out, v) {
  out[0] = -v[0];
  out[1] = -v[1];
  return out;
}
function lerp(out, v1, v2, t) {
  out[0] = v1[0] + t * (v2[0] - v1[0]);
  out[1] = v1[1] + t * (v2[1] - v1[1]);
  return out;
}
function applyTransform(out, v, m) {
  var x = v[0];
  var y = v[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
function min(out, v1, v2) {
  out[0] = Math.min(v1[0], v2[0]);
  out[1] = Math.min(v1[1], v2[1]);
  return out;
}
function max(out, v1, v2) {
  out[0] = Math.max(v1[0], v2[0]);
  out[1] = Math.max(v1[1], v2[1]);
  return out;
}
var length, lengthSquare, dist, distSquare;
var init_vector = __esm({
  "node_modules/zrender/lib/core/vector.js"() {
    length = len;
    lengthSquare = lenSquare;
    dist = distance;
    distSquare = distanceSquare;
  }
});

// node_modules/zrender/lib/core/matrix.js
var matrix_exports = {};
__export(matrix_exports, {
  clone: () => clone3,
  copy: () => copy2,
  create: () => create2,
  identity: () => identity,
  invert: () => invert,
  mul: () => mul2,
  rotate: () => rotate,
  scale: () => scale2,
  translate: () => translate
});
function create2() {
  return [1, 0, 0, 1, 0, 0];
}
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}
function copy2(out, m) {
  out[0] = m[0];
  out[1] = m[1];
  out[2] = m[2];
  out[3] = m[3];
  out[4] = m[4];
  out[5] = m[5];
  return out;
}
function mul2(out, m1, m2) {
  var out0 = m1[0] * m2[0] + m1[2] * m2[1];
  var out1 = m1[1] * m2[0] + m1[3] * m2[1];
  var out2 = m1[0] * m2[2] + m1[2] * m2[3];
  var out3 = m1[1] * m2[2] + m1[3] * m2[3];
  var out4 = m1[0] * m2[4] + m1[2] * m2[5] + m1[4];
  var out5 = m1[1] * m2[4] + m1[3] * m2[5] + m1[5];
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = out3;
  out[4] = out4;
  out[5] = out5;
  return out;
}
function translate(out, a, v) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4] + v[0];
  out[5] = a[5] + v[1];
  return out;
}
function rotate(out, a, rad, pivot) {
  if (pivot === void 0) {
    pivot = [0, 0];
  }
  var aa = a[0];
  var ac = a[2];
  var atx = a[4];
  var ab = a[1];
  var ad = a[3];
  var aty = a[5];
  var st = Math.sin(rad);
  var ct = Math.cos(rad);
  out[0] = aa * ct + ab * st;
  out[1] = -aa * st + ab * ct;
  out[2] = ac * ct + ad * st;
  out[3] = -ac * st + ct * ad;
  out[4] = ct * (atx - pivot[0]) + st * (aty - pivot[1]) + pivot[0];
  out[5] = ct * (aty - pivot[1]) - st * (atx - pivot[0]) + pivot[1];
  return out;
}
function scale2(out, a, v) {
  var vx = v[0];
  var vy = v[1];
  out[0] = a[0] * vx;
  out[1] = a[1] * vy;
  out[2] = a[2] * vx;
  out[3] = a[3] * vy;
  out[4] = a[4] * vx;
  out[5] = a[5] * vy;
  return out;
}
function invert(out, a) {
  var aa = a[0];
  var ac = a[2];
  var atx = a[4];
  var ab = a[1];
  var ad = a[3];
  var aty = a[5];
  var det = aa * ad - ab * ac;
  if (!det) {
    return null;
  }
  det = 1 / det;
  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}
function clone3(a) {
  var b = create2();
  copy2(b, a);
  return b;
}
var init_matrix = __esm({
  "node_modules/zrender/lib/core/matrix.js"() {
  }
});

// node_modules/zrender/lib/core/LRU.js
var Entry, LinkedList, LRU, LRU_default;
var init_LRU = __esm({
  "node_modules/zrender/lib/core/LRU.js"() {
    Entry = /* @__PURE__ */ function() {
      function Entry2(val) {
        this.value = val;
      }
      return Entry2;
    }();
    LinkedList = function() {
      function LinkedList2() {
        this._len = 0;
      }
      LinkedList2.prototype.insert = function(val) {
        var entry = new Entry(val);
        this.insertEntry(entry);
        return entry;
      };
      LinkedList2.prototype.insertEntry = function(entry) {
        if (!this.head) {
          this.head = this.tail = entry;
        } else {
          this.tail.next = entry;
          entry.prev = this.tail;
          entry.next = null;
          this.tail = entry;
        }
        this._len++;
      };
      LinkedList2.prototype.remove = function(entry) {
        var prev = entry.prev;
        var next = entry.next;
        if (prev) {
          prev.next = next;
        } else {
          this.head = next;
        }
        if (next) {
          next.prev = prev;
        } else {
          this.tail = prev;
        }
        entry.next = entry.prev = null;
        this._len--;
      };
      LinkedList2.prototype.len = function() {
        return this._len;
      };
      LinkedList2.prototype.clear = function() {
        this.head = this.tail = null;
        this._len = 0;
      };
      return LinkedList2;
    }();
    LRU = function() {
      function LRU2(maxSize) {
        this._list = new LinkedList();
        this._maxSize = 10;
        this._map = {};
        this._maxSize = maxSize;
      }
      LRU2.prototype.put = function(key, value) {
        var list = this._list;
        var map2 = this._map;
        var removed = null;
        if (map2[key] == null) {
          var len2 = list.len();
          var entry = this._lastRemovedEntry;
          if (len2 >= this._maxSize && len2 > 0) {
            var leastUsedEntry = list.head;
            list.remove(leastUsedEntry);
            delete map2[leastUsedEntry.key];
            removed = leastUsedEntry.value;
            this._lastRemovedEntry = leastUsedEntry;
          }
          if (entry) {
            entry.value = value;
          } else {
            entry = new Entry(value);
          }
          entry.key = key;
          list.insertEntry(entry);
          map2[key] = entry;
        }
        return removed;
      };
      LRU2.prototype.get = function(key) {
        var entry = this._map[key];
        var list = this._list;
        if (entry != null) {
          if (entry !== list.tail) {
            list.remove(entry);
            list.insertEntry(entry);
          }
          return entry.value;
        }
      };
      LRU2.prototype.clear = function() {
        this._list.clear();
        this._map = {};
      };
      LRU2.prototype.len = function() {
        return this._list.len();
      };
      return LRU2;
    }();
    LRU_default = LRU;
  }
});

// node_modules/zrender/lib/tool/color.js
var color_exports = {};
__export(color_exports, {
  fastLerp: () => fastLerp,
  fastMapToColor: () => fastMapToColor,
  lerp: () => lerp2,
  lift: () => lift,
  liftColor: () => liftColor,
  lum: () => lum,
  mapToColor: () => mapToColor,
  modifyAlpha: () => modifyAlpha,
  modifyHSL: () => modifyHSL,
  parse: () => parse,
  random: () => random,
  stringify: () => stringify,
  toHex: () => toHex
});
function clampCssByte(i) {
  i = Math.round(i);
  return i < 0 ? 0 : i > 255 ? 255 : i;
}
function clampCssAngle(i) {
  i = Math.round(i);
  return i < 0 ? 0 : i > 360 ? 360 : i;
}
function clampCssFloat(f) {
  return f < 0 ? 0 : f > 1 ? 1 : f;
}
function parseCssInt(val) {
  var str = val;
  if (str.length && str.charAt(str.length - 1) === "%") {
    return clampCssByte(parseFloat(str) / 100 * 255);
  }
  return clampCssByte(parseInt(str, 10));
}
function parseCssFloat(val) {
  var str = val;
  if (str.length && str.charAt(str.length - 1) === "%") {
    return clampCssFloat(parseFloat(str) / 100);
  }
  return clampCssFloat(parseFloat(str));
}
function cssHueToRgb(m1, m2, h) {
  if (h < 0) {
    h += 1;
  } else if (h > 1) {
    h -= 1;
  }
  if (h * 6 < 1) {
    return m1 + (m2 - m1) * h * 6;
  }
  if (h * 2 < 1) {
    return m2;
  }
  if (h * 3 < 2) {
    return m1 + (m2 - m1) * (2 / 3 - h) * 6;
  }
  return m1;
}
function lerpNumber(a, b, p) {
  return a + (b - a) * p;
}
function setRgba(out, r, g, b, a) {
  out[0] = r;
  out[1] = g;
  out[2] = b;
  out[3] = a;
  return out;
}
function copyRgba(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
function putToCache(colorStr, rgbaArr) {
  if (lastRemovedArr) {
    copyRgba(lastRemovedArr, rgbaArr);
  }
  lastRemovedArr = colorCache.put(colorStr, lastRemovedArr || rgbaArr.slice());
}
function parse(colorStr, rgbaArr) {
  if (!colorStr) {
    return;
  }
  rgbaArr = rgbaArr || [];
  var cached = colorCache.get(colorStr);
  if (cached) {
    return copyRgba(rgbaArr, cached);
  }
  colorStr = colorStr + "";
  var str = colorStr.replace(/ /g, "").toLowerCase();
  if (str in kCSSColorTable) {
    copyRgba(rgbaArr, kCSSColorTable[str]);
    putToCache(colorStr, rgbaArr);
    return rgbaArr;
  }
  var strLen = str.length;
  if (str.charAt(0) === "#") {
    if (strLen === 4 || strLen === 5) {
      var iv = parseInt(str.slice(1, 4), 16);
      if (!(iv >= 0 && iv <= 4095)) {
        setRgba(rgbaArr, 0, 0, 0, 1);
        return;
      }
      setRgba(rgbaArr, (iv & 3840) >> 4 | (iv & 3840) >> 8, iv & 240 | (iv & 240) >> 4, iv & 15 | (iv & 15) << 4, strLen === 5 ? parseInt(str.slice(4), 16) / 15 : 1);
      putToCache(colorStr, rgbaArr);
      return rgbaArr;
    } else if (strLen === 7 || strLen === 9) {
      var iv = parseInt(str.slice(1, 7), 16);
      if (!(iv >= 0 && iv <= 16777215)) {
        setRgba(rgbaArr, 0, 0, 0, 1);
        return;
      }
      setRgba(rgbaArr, (iv & 16711680) >> 16, (iv & 65280) >> 8, iv & 255, strLen === 9 ? parseInt(str.slice(7), 16) / 255 : 1);
      putToCache(colorStr, rgbaArr);
      return rgbaArr;
    }
    return;
  }
  var op = str.indexOf("(");
  var ep = str.indexOf(")");
  if (op !== -1 && ep + 1 === strLen) {
    var fname = str.substr(0, op);
    var params = str.substr(op + 1, ep - (op + 1)).split(",");
    var alpha = 1;
    switch (fname) {
      case "rgba":
        if (params.length !== 4) {
          return params.length === 3 ? setRgba(rgbaArr, +params[0], +params[1], +params[2], 1) : setRgba(rgbaArr, 0, 0, 0, 1);
        }
        alpha = parseCssFloat(params.pop());
      case "rgb":
        if (params.length >= 3) {
          setRgba(rgbaArr, parseCssInt(params[0]), parseCssInt(params[1]), parseCssInt(params[2]), params.length === 3 ? alpha : parseCssFloat(params[3]));
          putToCache(colorStr, rgbaArr);
          return rgbaArr;
        } else {
          setRgba(rgbaArr, 0, 0, 0, 1);
          return;
        }
      case "hsla":
        if (params.length !== 4) {
          setRgba(rgbaArr, 0, 0, 0, 1);
          return;
        }
        params[3] = parseCssFloat(params[3]);
        hsla2rgba(params, rgbaArr);
        putToCache(colorStr, rgbaArr);
        return rgbaArr;
      case "hsl":
        if (params.length !== 3) {
          setRgba(rgbaArr, 0, 0, 0, 1);
          return;
        }
        hsla2rgba(params, rgbaArr);
        putToCache(colorStr, rgbaArr);
        return rgbaArr;
      default:
        return;
    }
  }
  setRgba(rgbaArr, 0, 0, 0, 1);
  return;
}
function hsla2rgba(hsla, rgba) {
  var h = (parseFloat(hsla[0]) % 360 + 360) % 360 / 360;
  var s = parseCssFloat(hsla[1]);
  var l = parseCssFloat(hsla[2]);
  var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
  var m1 = l * 2 - m2;
  rgba = rgba || [];
  setRgba(rgba, clampCssByte(cssHueToRgb(m1, m2, h + 1 / 3) * 255), clampCssByte(cssHueToRgb(m1, m2, h) * 255), clampCssByte(cssHueToRgb(m1, m2, h - 1 / 3) * 255), 1);
  if (hsla.length === 4) {
    rgba[3] = hsla[3];
  }
  return rgba;
}
function rgba2hsla(rgba) {
  if (!rgba) {
    return;
  }
  var R = rgba[0] / 255;
  var G = rgba[1] / 255;
  var B = rgba[2] / 255;
  var vMin = Math.min(R, G, B);
  var vMax = Math.max(R, G, B);
  var delta = vMax - vMin;
  var L = (vMax + vMin) / 2;
  var H;
  var S;
  if (delta === 0) {
    H = 0;
    S = 0;
  } else {
    if (L < 0.5) {
      S = delta / (vMax + vMin);
    } else {
      S = delta / (2 - vMax - vMin);
    }
    var deltaR = ((vMax - R) / 6 + delta / 2) / delta;
    var deltaG = ((vMax - G) / 6 + delta / 2) / delta;
    var deltaB = ((vMax - B) / 6 + delta / 2) / delta;
    if (R === vMax) {
      H = deltaB - deltaG;
    } else if (G === vMax) {
      H = 1 / 3 + deltaR - deltaB;
    } else if (B === vMax) {
      H = 2 / 3 + deltaG - deltaR;
    }
    if (H < 0) {
      H += 1;
    }
    if (H > 1) {
      H -= 1;
    }
  }
  var hsla = [H * 360, S, L];
  if (rgba[3] != null) {
    hsla.push(rgba[3]);
  }
  return hsla;
}
function lift(color, level) {
  var colorArr = parse(color);
  if (colorArr) {
    for (var i = 0; i < 3; i++) {
      if (level < 0) {
        colorArr[i] = colorArr[i] * (1 - level) | 0;
      } else {
        colorArr[i] = (255 - colorArr[i]) * level + colorArr[i] | 0;
      }
      if (colorArr[i] > 255) {
        colorArr[i] = 255;
      } else if (colorArr[i] < 0) {
        colorArr[i] = 0;
      }
    }
    return stringify(colorArr, colorArr.length === 4 ? "rgba" : "rgb");
  }
}
function toHex(color) {
  var colorArr = parse(color);
  if (colorArr) {
    return ((1 << 24) + (colorArr[0] << 16) + (colorArr[1] << 8) + +colorArr[2]).toString(16).slice(1);
  }
}
function fastLerp(normalizedValue, colors, out) {
  if (!(colors && colors.length) || !(normalizedValue >= 0 && normalizedValue <= 1)) {
    return;
  }
  out = out || [];
  var value = normalizedValue * (colors.length - 1);
  var leftIndex = Math.floor(value);
  var rightIndex = Math.ceil(value);
  var leftColor = colors[leftIndex];
  var rightColor = colors[rightIndex];
  var dv = value - leftIndex;
  out[0] = clampCssByte(lerpNumber(leftColor[0], rightColor[0], dv));
  out[1] = clampCssByte(lerpNumber(leftColor[1], rightColor[1], dv));
  out[2] = clampCssByte(lerpNumber(leftColor[2], rightColor[2], dv));
  out[3] = clampCssFloat(lerpNumber(leftColor[3], rightColor[3], dv));
  return out;
}
function lerp2(normalizedValue, colors, fullOutput) {
  if (!(colors && colors.length) || !(normalizedValue >= 0 && normalizedValue <= 1)) {
    return;
  }
  var value = normalizedValue * (colors.length - 1);
  var leftIndex = Math.floor(value);
  var rightIndex = Math.ceil(value);
  var leftColor = parse(colors[leftIndex]);
  var rightColor = parse(colors[rightIndex]);
  var dv = value - leftIndex;
  var color = stringify([clampCssByte(lerpNumber(leftColor[0], rightColor[0], dv)), clampCssByte(lerpNumber(leftColor[1], rightColor[1], dv)), clampCssByte(lerpNumber(leftColor[2], rightColor[2], dv)), clampCssFloat(lerpNumber(leftColor[3], rightColor[3], dv))], "rgba");
  return fullOutput ? {
    color,
    leftIndex,
    rightIndex,
    value
  } : color;
}
function modifyHSL(color, h, s, l) {
  var colorArr = parse(color);
  if (color) {
    colorArr = rgba2hsla(colorArr);
    h != null && (colorArr[0] = clampCssAngle(h));
    s != null && (colorArr[1] = parseCssFloat(s));
    l != null && (colorArr[2] = parseCssFloat(l));
    return stringify(hsla2rgba(colorArr), "rgba");
  }
}
function modifyAlpha(color, alpha) {
  var colorArr = parse(color);
  if (colorArr && alpha != null) {
    colorArr[3] = clampCssFloat(alpha);
    return stringify(colorArr, "rgba");
  }
}
function stringify(arrColor, type) {
  if (!arrColor || !arrColor.length) {
    return;
  }
  var colorStr = arrColor[0] + "," + arrColor[1] + "," + arrColor[2];
  if (type === "rgba" || type === "hsva" || type === "hsla") {
    colorStr += "," + arrColor[3];
  }
  return type + "(" + colorStr + ")";
}
function lum(color, backgroundLum) {
  var arr = parse(color);
  return arr ? (0.299 * arr[0] + 0.587 * arr[1] + 0.114 * arr[2]) * arr[3] / 255 + (1 - arr[3]) * backgroundLum : 0;
}
function random() {
  return stringify([Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)], "rgb");
}
function liftColor(color) {
  if (isString(color)) {
    var liftedColor = liftedColorCache.get(color);
    if (!liftedColor) {
      liftedColor = lift(color, -0.1);
      liftedColorCache.put(color, liftedColor);
    }
    return liftedColor;
  } else if (isGradientObject(color)) {
    var ret = extend({}, color);
    ret.colorStops = map(color.colorStops, function(stop2) {
      return {
        offset: stop2.offset,
        color: lift(stop2.color, -0.1)
      };
    });
    return ret;
  }
  return color;
}
var kCSSColorTable, colorCache, lastRemovedArr, fastMapToColor, mapToColor, liftedColorCache;
var init_color = __esm({
  "node_modules/zrender/lib/tool/color.js"() {
    init_LRU();
    init_util();
    kCSSColorTable = {
      "transparent": [0, 0, 0, 0],
      "aliceblue": [240, 248, 255, 1],
      "antiquewhite": [250, 235, 215, 1],
      "aqua": [0, 255, 255, 1],
      "aquamarine": [127, 255, 212, 1],
      "azure": [240, 255, 255, 1],
      "beige": [245, 245, 220, 1],
      "bisque": [255, 228, 196, 1],
      "black": [0, 0, 0, 1],
      "blanchedalmond": [255, 235, 205, 1],
      "blue": [0, 0, 255, 1],
      "blueviolet": [138, 43, 226, 1],
      "brown": [165, 42, 42, 1],
      "burlywood": [222, 184, 135, 1],
      "cadetblue": [95, 158, 160, 1],
      "chartreuse": [127, 255, 0, 1],
      "chocolate": [210, 105, 30, 1],
      "coral": [255, 127, 80, 1],
      "cornflowerblue": [100, 149, 237, 1],
      "cornsilk": [255, 248, 220, 1],
      "crimson": [220, 20, 60, 1],
      "cyan": [0, 255, 255, 1],
      "darkblue": [0, 0, 139, 1],
      "darkcyan": [0, 139, 139, 1],
      "darkgoldenrod": [184, 134, 11, 1],
      "darkgray": [169, 169, 169, 1],
      "darkgreen": [0, 100, 0, 1],
      "darkgrey": [169, 169, 169, 1],
      "darkkhaki": [189, 183, 107, 1],
      "darkmagenta": [139, 0, 139, 1],
      "darkolivegreen": [85, 107, 47, 1],
      "darkorange": [255, 140, 0, 1],
      "darkorchid": [153, 50, 204, 1],
      "darkred": [139, 0, 0, 1],
      "darksalmon": [233, 150, 122, 1],
      "darkseagreen": [143, 188, 143, 1],
      "darkslateblue": [72, 61, 139, 1],
      "darkslategray": [47, 79, 79, 1],
      "darkslategrey": [47, 79, 79, 1],
      "darkturquoise": [0, 206, 209, 1],
      "darkviolet": [148, 0, 211, 1],
      "deeppink": [255, 20, 147, 1],
      "deepskyblue": [0, 191, 255, 1],
      "dimgray": [105, 105, 105, 1],
      "dimgrey": [105, 105, 105, 1],
      "dodgerblue": [30, 144, 255, 1],
      "firebrick": [178, 34, 34, 1],
      "floralwhite": [255, 250, 240, 1],
      "forestgreen": [34, 139, 34, 1],
      "fuchsia": [255, 0, 255, 1],
      "gainsboro": [220, 220, 220, 1],
      "ghostwhite": [248, 248, 255, 1],
      "gold": [255, 215, 0, 1],
      "goldenrod": [218, 165, 32, 1],
      "gray": [128, 128, 128, 1],
      "green": [0, 128, 0, 1],
      "greenyellow": [173, 255, 47, 1],
      "grey": [128, 128, 128, 1],
      "honeydew": [240, 255, 240, 1],
      "hotpink": [255, 105, 180, 1],
      "indianred": [205, 92, 92, 1],
      "indigo": [75, 0, 130, 1],
      "ivory": [255, 255, 240, 1],
      "khaki": [240, 230, 140, 1],
      "lavender": [230, 230, 250, 1],
      "lavenderblush": [255, 240, 245, 1],
      "lawngreen": [124, 252, 0, 1],
      "lemonchiffon": [255, 250, 205, 1],
      "lightblue": [173, 216, 230, 1],
      "lightcoral": [240, 128, 128, 1],
      "lightcyan": [224, 255, 255, 1],
      "lightgoldenrodyellow": [250, 250, 210, 1],
      "lightgray": [211, 211, 211, 1],
      "lightgreen": [144, 238, 144, 1],
      "lightgrey": [211, 211, 211, 1],
      "lightpink": [255, 182, 193, 1],
      "lightsalmon": [255, 160, 122, 1],
      "lightseagreen": [32, 178, 170, 1],
      "lightskyblue": [135, 206, 250, 1],
      "lightslategray": [119, 136, 153, 1],
      "lightslategrey": [119, 136, 153, 1],
      "lightsteelblue": [176, 196, 222, 1],
      "lightyellow": [255, 255, 224, 1],
      "lime": [0, 255, 0, 1],
      "limegreen": [50, 205, 50, 1],
      "linen": [250, 240, 230, 1],
      "magenta": [255, 0, 255, 1],
      "maroon": [128, 0, 0, 1],
      "mediumaquamarine": [102, 205, 170, 1],
      "mediumblue": [0, 0, 205, 1],
      "mediumorchid": [186, 85, 211, 1],
      "mediumpurple": [147, 112, 219, 1],
      "mediumseagreen": [60, 179, 113, 1],
      "mediumslateblue": [123, 104, 238, 1],
      "mediumspringgreen": [0, 250, 154, 1],
      "mediumturquoise": [72, 209, 204, 1],
      "mediumvioletred": [199, 21, 133, 1],
      "midnightblue": [25, 25, 112, 1],
      "mintcream": [245, 255, 250, 1],
      "mistyrose": [255, 228, 225, 1],
      "moccasin": [255, 228, 181, 1],
      "navajowhite": [255, 222, 173, 1],
      "navy": [0, 0, 128, 1],
      "oldlace": [253, 245, 230, 1],
      "olive": [128, 128, 0, 1],
      "olivedrab": [107, 142, 35, 1],
      "orange": [255, 165, 0, 1],
      "orangered": [255, 69, 0, 1],
      "orchid": [218, 112, 214, 1],
      "palegoldenrod": [238, 232, 170, 1],
      "palegreen": [152, 251, 152, 1],
      "paleturquoise": [175, 238, 238, 1],
      "palevioletred": [219, 112, 147, 1],
      "papayawhip": [255, 239, 213, 1],
      "peachpuff": [255, 218, 185, 1],
      "peru": [205, 133, 63, 1],
      "pink": [255, 192, 203, 1],
      "plum": [221, 160, 221, 1],
      "powderblue": [176, 224, 230, 1],
      "purple": [128, 0, 128, 1],
      "red": [255, 0, 0, 1],
      "rosybrown": [188, 143, 143, 1],
      "royalblue": [65, 105, 225, 1],
      "saddlebrown": [139, 69, 19, 1],
      "salmon": [250, 128, 114, 1],
      "sandybrown": [244, 164, 96, 1],
      "seagreen": [46, 139, 87, 1],
      "seashell": [255, 245, 238, 1],
      "sienna": [160, 82, 45, 1],
      "silver": [192, 192, 192, 1],
      "skyblue": [135, 206, 235, 1],
      "slateblue": [106, 90, 205, 1],
      "slategray": [112, 128, 144, 1],
      "slategrey": [112, 128, 144, 1],
      "snow": [255, 250, 250, 1],
      "springgreen": [0, 255, 127, 1],
      "steelblue": [70, 130, 180, 1],
      "tan": [210, 180, 140, 1],
      "teal": [0, 128, 128, 1],
      "thistle": [216, 191, 216, 1],
      "tomato": [255, 99, 71, 1],
      "turquoise": [64, 224, 208, 1],
      "violet": [238, 130, 238, 1],
      "wheat": [245, 222, 179, 1],
      "white": [255, 255, 255, 1],
      "whitesmoke": [245, 245, 245, 1],
      "yellow": [255, 255, 0, 1],
      "yellowgreen": [154, 205, 50, 1]
    };
    colorCache = new LRU_default(20);
    lastRemovedArr = null;
    fastMapToColor = fastLerp;
    mapToColor = lerp2;
    liftedColorCache = new LRU_default(100);
  }
});

// node_modules/zrender/node_modules/tslib/tslib.es6.js
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var extendStatics;
var init_tslib_es6 = __esm({
  "node_modules/zrender/node_modules/tslib/tslib.es6.js"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
  }
});

// node_modules/zrender/lib/mixin/Draggable.js
var Param, Draggable, Draggable_default;
var init_Draggable = __esm({
  "node_modules/zrender/lib/mixin/Draggable.js"() {
    Param = /* @__PURE__ */ function() {
      function Param2(target, e) {
        this.target = target;
        this.topTarget = e && e.topTarget;
      }
      return Param2;
    }();
    Draggable = function() {
      function Draggable2(handler) {
        this.handler = handler;
        handler.on("mousedown", this._dragStart, this);
        handler.on("mousemove", this._drag, this);
        handler.on("mouseup", this._dragEnd, this);
      }
      Draggable2.prototype._dragStart = function(e) {
        var draggingTarget = e.target;
        while (draggingTarget && !draggingTarget.draggable) {
          draggingTarget = draggingTarget.parent || draggingTarget.__hostTarget;
        }
        if (draggingTarget) {
          this._draggingTarget = draggingTarget;
          draggingTarget.dragging = true;
          this._x = e.offsetX;
          this._y = e.offsetY;
          this.handler.dispatchToElement(new Param(draggingTarget, e), "dragstart", e.event);
        }
      };
      Draggable2.prototype._drag = function(e) {
        var draggingTarget = this._draggingTarget;
        if (draggingTarget) {
          var x = e.offsetX;
          var y = e.offsetY;
          var dx = x - this._x;
          var dy = y - this._y;
          this._x = x;
          this._y = y;
          draggingTarget.drift(dx, dy, e);
          this.handler.dispatchToElement(new Param(draggingTarget, e), "drag", e.event);
          var dropTarget = this.handler.findHover(x, y, draggingTarget).target;
          var lastDropTarget = this._dropTarget;
          this._dropTarget = dropTarget;
          if (draggingTarget !== dropTarget) {
            if (lastDropTarget && dropTarget !== lastDropTarget) {
              this.handler.dispatchToElement(new Param(lastDropTarget, e), "dragleave", e.event);
            }
            if (dropTarget && dropTarget !== lastDropTarget) {
              this.handler.dispatchToElement(new Param(dropTarget, e), "dragenter", e.event);
            }
          }
        }
      };
      Draggable2.prototype._dragEnd = function(e) {
        var draggingTarget = this._draggingTarget;
        if (draggingTarget) {
          draggingTarget.dragging = false;
        }
        this.handler.dispatchToElement(new Param(draggingTarget, e), "dragend", e.event);
        if (this._dropTarget) {
          this.handler.dispatchToElement(new Param(this._dropTarget, e), "drop", e.event);
        }
        this._draggingTarget = null;
        this._dropTarget = null;
      };
      return Draggable2;
    }();
    Draggable_default = Draggable;
  }
});

// node_modules/zrender/lib/core/Eventful.js
var Eventful, Eventful_default;
var init_Eventful = __esm({
  "node_modules/zrender/lib/core/Eventful.js"() {
    Eventful = function() {
      function Eventful2(eventProcessors) {
        if (eventProcessors) {
          this._$eventProcessor = eventProcessors;
        }
      }
      Eventful2.prototype.on = function(event, query, handler, context) {
        if (!this._$handlers) {
          this._$handlers = {};
        }
        var _h = this._$handlers;
        if (typeof query === "function") {
          context = handler;
          handler = query;
          query = null;
        }
        if (!handler || !event) {
          return this;
        }
        var eventProcessor = this._$eventProcessor;
        if (query != null && eventProcessor && eventProcessor.normalizeQuery) {
          query = eventProcessor.normalizeQuery(query);
        }
        if (!_h[event]) {
          _h[event] = [];
        }
        for (var i = 0; i < _h[event].length; i++) {
          if (_h[event][i].h === handler) {
            return this;
          }
        }
        var wrap = {
          h: handler,
          query,
          ctx: context || this,
          callAtLast: handler.zrEventfulCallAtLast
        };
        var lastIndex = _h[event].length - 1;
        var lastWrap = _h[event][lastIndex];
        lastWrap && lastWrap.callAtLast ? _h[event].splice(lastIndex, 0, wrap) : _h[event].push(wrap);
        return this;
      };
      Eventful2.prototype.isSilent = function(eventName) {
        var _h = this._$handlers;
        return !_h || !_h[eventName] || !_h[eventName].length;
      };
      Eventful2.prototype.off = function(eventType, handler) {
        var _h = this._$handlers;
        if (!_h) {
          return this;
        }
        if (!eventType) {
          this._$handlers = {};
          return this;
        }
        if (handler) {
          if (_h[eventType]) {
            var newList = [];
            for (var i = 0, l = _h[eventType].length; i < l; i++) {
              if (_h[eventType][i].h !== handler) {
                newList.push(_h[eventType][i]);
              }
            }
            _h[eventType] = newList;
          }
          if (_h[eventType] && _h[eventType].length === 0) {
            delete _h[eventType];
          }
        } else {
          delete _h[eventType];
        }
        return this;
      };
      Eventful2.prototype.trigger = function(eventType) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        if (!this._$handlers) {
          return this;
        }
        var _h = this._$handlers[eventType];
        var eventProcessor = this._$eventProcessor;
        if (_h) {
          var argLen = args.length;
          var len2 = _h.length;
          for (var i = 0; i < len2; i++) {
            var hItem = _h[i];
            if (eventProcessor && eventProcessor.filter && hItem.query != null && !eventProcessor.filter(eventType, hItem.query)) {
              continue;
            }
            switch (argLen) {
              case 0:
                hItem.h.call(hItem.ctx);
                break;
              case 1:
                hItem.h.call(hItem.ctx, args[0]);
                break;
              case 2:
                hItem.h.call(hItem.ctx, args[0], args[1]);
                break;
              default:
                hItem.h.apply(hItem.ctx, args);
                break;
            }
          }
        }
        eventProcessor && eventProcessor.afterTrigger && eventProcessor.afterTrigger(eventType);
        return this;
      };
      Eventful2.prototype.triggerWithContext = function(type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        if (!this._$handlers) {
          return this;
        }
        var _h = this._$handlers[type];
        var eventProcessor = this._$eventProcessor;
        if (_h) {
          var argLen = args.length;
          var ctx = args[argLen - 1];
          var len2 = _h.length;
          for (var i = 0; i < len2; i++) {
            var hItem = _h[i];
            if (eventProcessor && eventProcessor.filter && hItem.query != null && !eventProcessor.filter(type, hItem.query)) {
              continue;
            }
            switch (argLen) {
              case 0:
                hItem.h.call(ctx);
                break;
              case 1:
                hItem.h.call(ctx, args[0]);
                break;
              case 2:
                hItem.h.call(ctx, args[0], args[1]);
                break;
              default:
                hItem.h.apply(ctx, args.slice(1, argLen - 1));
                break;
            }
          }
        }
        eventProcessor && eventProcessor.afterTrigger && eventProcessor.afterTrigger(type);
        return this;
      };
      return Eventful2;
    }();
    Eventful_default = Eventful;
  }
});

// node_modules/zrender/lib/core/fourPointsTransform.js
function determinant(rows, rank, rowStart, rowMask, colMask, detCache) {
  var cacheKey = rowMask + "-" + colMask;
  var fullRank = rows.length;
  if (detCache.hasOwnProperty(cacheKey)) {
    return detCache[cacheKey];
  }
  if (rank === 1) {
    var colStart = Math.round(Math.log((1 << fullRank) - 1 & ~colMask) / LN2);
    return rows[rowStart][colStart];
  }
  var subRowMask = rowMask | 1 << rowStart;
  var subRowStart = rowStart + 1;
  while (rowMask & 1 << subRowStart) {
    subRowStart++;
  }
  var sum = 0;
  for (var j = 0, colLocalIdx = 0; j < fullRank; j++) {
    var colTag = 1 << j;
    if (!(colTag & colMask)) {
      sum += (colLocalIdx % 2 ? -1 : 1) * rows[rowStart][j] * determinant(rows, rank - 1, subRowStart, subRowMask, colMask | colTag, detCache);
      colLocalIdx++;
    }
  }
  detCache[cacheKey] = sum;
  return sum;
}
function buildTransformer(src, dest) {
  var mA = [[src[0], src[1], 1, 0, 0, 0, -dest[0] * src[0], -dest[0] * src[1]], [0, 0, 0, src[0], src[1], 1, -dest[1] * src[0], -dest[1] * src[1]], [src[2], src[3], 1, 0, 0, 0, -dest[2] * src[2], -dest[2] * src[3]], [0, 0, 0, src[2], src[3], 1, -dest[3] * src[2], -dest[3] * src[3]], [src[4], src[5], 1, 0, 0, 0, -dest[4] * src[4], -dest[4] * src[5]], [0, 0, 0, src[4], src[5], 1, -dest[5] * src[4], -dest[5] * src[5]], [src[6], src[7], 1, 0, 0, 0, -dest[6] * src[6], -dest[6] * src[7]], [0, 0, 0, src[6], src[7], 1, -dest[7] * src[6], -dest[7] * src[7]]];
  var detCache = {};
  var det = determinant(mA, 8, 0, 0, 0, detCache);
  if (det === 0) {
    return;
  }
  var vh = [];
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      vh[j] == null && (vh[j] = 0);
      vh[j] += ((i + j) % 2 ? -1 : 1) * determinant(mA, 7, i === 0 ? 1 : 0, 1 << i, 1 << j, detCache) / det * dest[i];
    }
  }
  return function(out, srcPointX, srcPointY) {
    var pk = srcPointX * vh[6] + srcPointY * vh[7] + 1;
    out[0] = (srcPointX * vh[0] + srcPointY * vh[1] + vh[2]) / pk;
    out[1] = (srcPointX * vh[3] + srcPointY * vh[4] + vh[5]) / pk;
  };
}
var LN2;
var init_fourPointsTransform = __esm({
  "node_modules/zrender/lib/core/fourPointsTransform.js"() {
    LN2 = Math.log(2);
  }
});

// node_modules/zrender/lib/core/dom.js
function transformLocalCoord(out, elFrom, elTarget, inX, inY) {
  return transformCoordWithViewport(_calcOut, elFrom, inX, inY, true) && transformCoordWithViewport(out, elTarget, _calcOut[0], _calcOut[1]);
}
function transformCoordWithViewport(out, el, inX, inY, inverse) {
  if (el.getBoundingClientRect && env_default.domSupported && !isCanvasEl(el)) {
    var saved = el[EVENT_SAVED_PROP] || (el[EVENT_SAVED_PROP] = {});
    var markers = prepareCoordMarkers(el, saved);
    var transformer = preparePointerTransformer(markers, saved, inverse);
    if (transformer) {
      transformer(out, inX, inY);
      return true;
    }
  }
  return false;
}
function prepareCoordMarkers(el, saved) {
  var markers = saved.markers;
  if (markers) {
    return markers;
  }
  markers = saved.markers = [];
  var propLR = ["left", "right"];
  var propTB = ["top", "bottom"];
  for (var i = 0; i < 4; i++) {
    var marker = document.createElement("div");
    var stl = marker.style;
    var idxLR = i % 2;
    var idxTB = (i >> 1) % 2;
    stl.cssText = ["position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", propLR[idxLR] + ":0", propTB[idxTB] + ":0", propLR[1 - idxLR] + ":auto", propTB[1 - idxTB] + ":auto", ""].join("!important;");
    el.appendChild(marker);
    markers.push(marker);
  }
  return markers;
}
function preparePointerTransformer(markers, saved, inverse) {
  var transformerName = inverse ? "invTrans" : "trans";
  var transformer = saved[transformerName];
  var oldSrcCoords = saved.srcCoords;
  var srcCoords = [];
  var destCoords = [];
  var oldCoordTheSame = true;
  for (var i = 0; i < 4; i++) {
    var rect = markers[i].getBoundingClientRect();
    var ii = 2 * i;
    var x = rect.left;
    var y = rect.top;
    srcCoords.push(x, y);
    oldCoordTheSame = oldCoordTheSame && oldSrcCoords && x === oldSrcCoords[ii] && y === oldSrcCoords[ii + 1];
    destCoords.push(markers[i].offsetLeft, markers[i].offsetTop);
  }
  return oldCoordTheSame && transformer ? transformer : (saved.srcCoords = srcCoords, saved[transformerName] = inverse ? buildTransformer(destCoords, srcCoords) : buildTransformer(srcCoords, destCoords));
}
function isCanvasEl(el) {
  return el.nodeName.toUpperCase() === "CANVAS";
}
function encodeHTML(source) {
  return source == null ? "" : (source + "").replace(replaceReg, function(str, c) {
    return replaceMap[c];
  });
}
var EVENT_SAVED_PROP, _calcOut, replaceReg, replaceMap;
var init_dom = __esm({
  "node_modules/zrender/lib/core/dom.js"() {
    init_env();
    init_fourPointsTransform();
    EVENT_SAVED_PROP = "___zrEVENTSAVED";
    _calcOut = [];
    replaceReg = /([&<>"'])/g;
    replaceMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
  }
});

// node_modules/zrender/lib/core/event.js
function clientToLocal(el, e, out, calculate) {
  out = out || {};
  if (calculate) {
    calculateZrXY(el, e, out);
  } else if (firefoxNotSupportOffsetXY && e.layerX != null && e.layerX !== e.offsetX) {
    out.zrX = e.layerX;
    out.zrY = e.layerY;
  } else if (e.offsetX != null) {
    out.zrX = e.offsetX;
    out.zrY = e.offsetY;
  } else {
    calculateZrXY(el, e, out);
  }
  return out;
}
function calculateZrXY(el, e, out) {
  if (env_default.domSupported && el.getBoundingClientRect) {
    var ex = e.clientX;
    var ey = e.clientY;
    if (isCanvasEl(el)) {
      var box = el.getBoundingClientRect();
      out.zrX = ex - box.left;
      out.zrY = ey - box.top;
      return;
    } else {
      if (transformCoordWithViewport(_calcOut2, el, ex, ey)) {
        out.zrX = _calcOut2[0];
        out.zrY = _calcOut2[1];
        return;
      }
    }
  }
  out.zrX = out.zrY = 0;
}
function getNativeEvent(e) {
  return e || window.event;
}
function normalizeEvent(el, e, calculate) {
  e = getNativeEvent(e);
  if (e.zrX != null) {
    return e;
  }
  var eventType = e.type;
  var isTouch = eventType && eventType.indexOf("touch") >= 0;
  if (!isTouch) {
    clientToLocal(el, e, e, calculate);
    var wheelDelta = getWheelDeltaMayPolyfill(e);
    e.zrDelta = wheelDelta ? wheelDelta / 120 : -(e.detail || 0) / 3;
  } else {
    var touch = eventType !== "touchend" ? e.targetTouches[0] : e.changedTouches[0];
    touch && clientToLocal(el, touch, e, calculate);
  }
  var button = e.button;
  if (e.which == null && button !== void 0 && MOUSE_EVENT_REG.test(e.type)) {
    e.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
  }
  return e;
}
function getWheelDeltaMayPolyfill(e) {
  var rawWheelDelta = e.wheelDelta;
  if (rawWheelDelta) {
    return rawWheelDelta;
  }
  var deltaX = e.deltaX;
  var deltaY = e.deltaY;
  if (deltaX == null || deltaY == null) {
    return rawWheelDelta;
  }
  var delta = deltaY !== 0 ? Math.abs(deltaY) : Math.abs(deltaX);
  var sign = deltaY > 0 ? -1 : deltaY < 0 ? 1 : deltaX > 0 ? -1 : 1;
  return 3 * delta * sign;
}
function addEventListener(el, name, handler, opt) {
  el.addEventListener(name, handler, opt);
}
function removeEventListener(el, name, handler, opt) {
  el.removeEventListener(name, handler, opt);
}
function isMiddleOrRightButtonOnMouseUpDown(e) {
  return e.which === 2 || e.which === 3;
}
var MOUSE_EVENT_REG, _calcOut2, firefoxNotSupportOffsetXY, stop;
var init_event = __esm({
  "node_modules/zrender/lib/core/event.js"() {
    init_Eventful();
    init_env();
    init_dom();
    MOUSE_EVENT_REG = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
    _calcOut2 = [];
    firefoxNotSupportOffsetXY = env_default.browser.firefox && +env_default.browser.version.split(".")[0] < 39;
    stop = function(e) {
      e.preventDefault();
      e.stopPropagation();
      e.cancelBubble = true;
    };
  }
});

// node_modules/zrender/lib/core/GestureMgr.js
function dist2(pointPair) {
  var dx = pointPair[1][0] - pointPair[0][0];
  var dy = pointPair[1][1] - pointPair[0][1];
  return Math.sqrt(dx * dx + dy * dy);
}
function center(pointPair) {
  return [(pointPair[0][0] + pointPair[1][0]) / 2, (pointPair[0][1] + pointPair[1][1]) / 2];
}
var GestureMgr, recognizers;
var init_GestureMgr = __esm({
  "node_modules/zrender/lib/core/GestureMgr.js"() {
    init_event();
    GestureMgr = function() {
      function GestureMgr2() {
        this._track = [];
      }
      GestureMgr2.prototype.recognize = function(event, target, root) {
        this._doTrack(event, target, root);
        return this._recognize(event);
      };
      GestureMgr2.prototype.clear = function() {
        this._track.length = 0;
        return this;
      };
      GestureMgr2.prototype._doTrack = function(event, target, root) {
        var touches = event.touches;
        if (!touches) {
          return;
        }
        var trackItem = {
          points: [],
          touches: [],
          target,
          event
        };
        for (var i = 0, len2 = touches.length; i < len2; i++) {
          var touch = touches[i];
          var pos = clientToLocal(root, touch, {});
          trackItem.points.push([pos.zrX, pos.zrY]);
          trackItem.touches.push(touch);
        }
        this._track.push(trackItem);
      };
      GestureMgr2.prototype._recognize = function(event) {
        for (var eventName in recognizers) {
          if (recognizers.hasOwnProperty(eventName)) {
            var gestureInfo = recognizers[eventName](this._track, event);
            if (gestureInfo) {
              return gestureInfo;
            }
          }
        }
      };
      return GestureMgr2;
    }();
    recognizers = {
      pinch: function(tracks, event) {
        var trackLen = tracks.length;
        if (!trackLen) {
          return;
        }
        var pinchEnd = (tracks[trackLen - 1] || {}).points;
        var pinchPre = (tracks[trackLen - 2] || {}).points || pinchEnd;
        if (pinchPre && pinchPre.length > 1 && pinchEnd && pinchEnd.length > 1) {
          var pinchScale = dist2(pinchEnd) / dist2(pinchPre);
          !isFinite(pinchScale) && (pinchScale = 1);
          event.pinchScale = pinchScale;
          var pinchCenter = center(pinchEnd);
          event.pinchX = pinchCenter[0];
          event.pinchY = pinchCenter[1];
          return {
            type: "pinch",
            target: tracks[0].target,
            event
          };
        }
      }
    };
  }
});

// node_modules/zrender/lib/core/Point.js
var Point, Point_default;
var init_Point = __esm({
  "node_modules/zrender/lib/core/Point.js"() {
    Point = function() {
      function Point2(x, y) {
        this.x = x || 0;
        this.y = y || 0;
      }
      Point2.prototype.copy = function(other) {
        this.x = other.x;
        this.y = other.y;
        return this;
      };
      Point2.prototype.clone = function() {
        return new Point2(this.x, this.y);
      };
      Point2.prototype.set = function(x, y) {
        this.x = x;
        this.y = y;
        return this;
      };
      Point2.prototype.equal = function(other) {
        return other.x === this.x && other.y === this.y;
      };
      Point2.prototype.add = function(other) {
        this.x += other.x;
        this.y += other.y;
        return this;
      };
      Point2.prototype.scale = function(scalar) {
        this.x *= scalar;
        this.y *= scalar;
      };
      Point2.prototype.scaleAndAdd = function(other, scalar) {
        this.x += other.x * scalar;
        this.y += other.y * scalar;
      };
      Point2.prototype.sub = function(other) {
        this.x -= other.x;
        this.y -= other.y;
        return this;
      };
      Point2.prototype.dot = function(other) {
        return this.x * other.x + this.y * other.y;
      };
      Point2.prototype.len = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      };
      Point2.prototype.lenSquare = function() {
        return this.x * this.x + this.y * this.y;
      };
      Point2.prototype.normalize = function() {
        var len2 = this.len();
        this.x /= len2;
        this.y /= len2;
        return this;
      };
      Point2.prototype.distance = function(other) {
        var dx = this.x - other.x;
        var dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
      };
      Point2.prototype.distanceSquare = function(other) {
        var dx = this.x - other.x;
        var dy = this.y - other.y;
        return dx * dx + dy * dy;
      };
      Point2.prototype.negate = function() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
      };
      Point2.prototype.transform = function(m) {
        if (!m) {
          return;
        }
        var x = this.x;
        var y = this.y;
        this.x = m[0] * x + m[2] * y + m[4];
        this.y = m[1] * x + m[3] * y + m[5];
        return this;
      };
      Point2.prototype.toArray = function(out) {
        out[0] = this.x;
        out[1] = this.y;
        return out;
      };
      Point2.prototype.fromArray = function(input) {
        this.x = input[0];
        this.y = input[1];
      };
      Point2.set = function(p, x, y) {
        p.x = x;
        p.y = y;
      };
      Point2.copy = function(p, p2) {
        p.x = p2.x;
        p.y = p2.y;
      };
      Point2.len = function(p) {
        return Math.sqrt(p.x * p.x + p.y * p.y);
      };
      Point2.lenSquare = function(p) {
        return p.x * p.x + p.y * p.y;
      };
      Point2.dot = function(p0, p1) {
        return p0.x * p1.x + p0.y * p1.y;
      };
      Point2.add = function(out, p0, p1) {
        out.x = p0.x + p1.x;
        out.y = p0.y + p1.y;
      };
      Point2.sub = function(out, p0, p1) {
        out.x = p0.x - p1.x;
        out.y = p0.y - p1.y;
      };
      Point2.scale = function(out, p0, scalar) {
        out.x = p0.x * scalar;
        out.y = p0.y * scalar;
      };
      Point2.scaleAndAdd = function(out, p0, p1, scalar) {
        out.x = p0.x + p1.x * scalar;
        out.y = p0.y + p1.y * scalar;
      };
      Point2.lerp = function(out, p0, p1, t) {
        var onet = 1 - t;
        out.x = onet * p0.x + t * p1.x;
        out.y = onet * p0.y + t * p1.y;
      };
      return Point2;
    }();
    Point_default = Point;
  }
});

// node_modules/zrender/lib/core/BoundingRect.js
var mathMin, mathMax, lt, rb, lb, rt, minTv, maxTv, BoundingRect, BoundingRect_default;
var init_BoundingRect = __esm({
  "node_modules/zrender/lib/core/BoundingRect.js"() {
    init_matrix();
    init_Point();
    mathMin = Math.min;
    mathMax = Math.max;
    lt = new Point_default();
    rb = new Point_default();
    lb = new Point_default();
    rt = new Point_default();
    minTv = new Point_default();
    maxTv = new Point_default();
    BoundingRect = function() {
      function BoundingRect2(x, y, width, height) {
        if (width < 0) {
          x = x + width;
          width = -width;
        }
        if (height < 0) {
          y = y + height;
          height = -height;
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
      }
      BoundingRect2.prototype.union = function(other) {
        var x = mathMin(other.x, this.x);
        var y = mathMin(other.y, this.y);
        if (isFinite(this.x) && isFinite(this.width)) {
          this.width = mathMax(other.x + other.width, this.x + this.width) - x;
        } else {
          this.width = other.width;
        }
        if (isFinite(this.y) && isFinite(this.height)) {
          this.height = mathMax(other.y + other.height, this.y + this.height) - y;
        } else {
          this.height = other.height;
        }
        this.x = x;
        this.y = y;
      };
      BoundingRect2.prototype.applyTransform = function(m) {
        BoundingRect2.applyTransform(this, this, m);
      };
      BoundingRect2.prototype.calculateTransform = function(b) {
        var a = this;
        var sx = b.width / a.width;
        var sy = b.height / a.height;
        var m = create2();
        translate(m, m, [-a.x, -a.y]);
        scale2(m, m, [sx, sy]);
        translate(m, m, [b.x, b.y]);
        return m;
      };
      BoundingRect2.prototype.intersect = function(b, mtv) {
        if (!b) {
          return false;
        }
        if (!(b instanceof BoundingRect2)) {
          b = BoundingRect2.create(b);
        }
        var a = this;
        var ax0 = a.x;
        var ax1 = a.x + a.width;
        var ay0 = a.y;
        var ay1 = a.y + a.height;
        var bx0 = b.x;
        var bx1 = b.x + b.width;
        var by0 = b.y;
        var by1 = b.y + b.height;
        var overlap = !(ax1 < bx0 || bx1 < ax0 || ay1 < by0 || by1 < ay0);
        if (mtv) {
          var dMin = Infinity;
          var dMax = 0;
          var d0 = Math.abs(ax1 - bx0);
          var d1 = Math.abs(bx1 - ax0);
          var d2 = Math.abs(ay1 - by0);
          var d3 = Math.abs(by1 - ay0);
          var dx = Math.min(d0, d1);
          var dy = Math.min(d2, d3);
          if (ax1 < bx0 || bx1 < ax0) {
            if (dx > dMax) {
              dMax = dx;
              if (d0 < d1) {
                Point_default.set(maxTv, -d0, 0);
              } else {
                Point_default.set(maxTv, d1, 0);
              }
            }
          } else {
            if (dx < dMin) {
              dMin = dx;
              if (d0 < d1) {
                Point_default.set(minTv, d0, 0);
              } else {
                Point_default.set(minTv, -d1, 0);
              }
            }
          }
          if (ay1 < by0 || by1 < ay0) {
            if (dy > dMax) {
              dMax = dy;
              if (d2 < d3) {
                Point_default.set(maxTv, 0, -d2);
              } else {
                Point_default.set(maxTv, 0, d3);
              }
            }
          } else {
            if (dx < dMin) {
              dMin = dx;
              if (d2 < d3) {
                Point_default.set(minTv, 0, d2);
              } else {
                Point_default.set(minTv, 0, -d3);
              }
            }
          }
        }
        if (mtv) {
          Point_default.copy(mtv, overlap ? minTv : maxTv);
        }
        return overlap;
      };
      BoundingRect2.prototype.contain = function(x, y) {
        var rect = this;
        return x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height;
      };
      BoundingRect2.prototype.clone = function() {
        return new BoundingRect2(this.x, this.y, this.width, this.height);
      };
      BoundingRect2.prototype.copy = function(other) {
        BoundingRect2.copy(this, other);
      };
      BoundingRect2.prototype.plain = function() {
        return {
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height
        };
      };
      BoundingRect2.prototype.isFinite = function() {
        return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
      };
      BoundingRect2.prototype.isZero = function() {
        return this.width === 0 || this.height === 0;
      };
      BoundingRect2.create = function(rect) {
        return new BoundingRect2(rect.x, rect.y, rect.width, rect.height);
      };
      BoundingRect2.copy = function(target, source) {
        target.x = source.x;
        target.y = source.y;
        target.width = source.width;
        target.height = source.height;
      };
      BoundingRect2.applyTransform = function(target, source, m) {
        if (!m) {
          if (target !== source) {
            BoundingRect2.copy(target, source);
          }
          return;
        }
        if (m[1] < 1e-5 && m[1] > -1e-5 && m[2] < 1e-5 && m[2] > -1e-5) {
          var sx = m[0];
          var sy = m[3];
          var tx = m[4];
          var ty = m[5];
          target.x = source.x * sx + tx;
          target.y = source.y * sy + ty;
          target.width = source.width * sx;
          target.height = source.height * sy;
          if (target.width < 0) {
            target.x += target.width;
            target.width = -target.width;
          }
          if (target.height < 0) {
            target.y += target.height;
            target.height = -target.height;
          }
          return;
        }
        lt.x = lb.x = source.x;
        lt.y = rt.y = source.y;
        rb.x = rt.x = source.x + source.width;
        rb.y = lb.y = source.y + source.height;
        lt.transform(m);
        rt.transform(m);
        rb.transform(m);
        lb.transform(m);
        target.x = mathMin(lt.x, rb.x, lb.x, rt.x);
        target.y = mathMin(lt.y, rb.y, lb.y, rt.y);
        var maxX = mathMax(lt.x, rb.x, lb.x, rt.x);
        var maxY = mathMax(lt.y, rb.y, lb.y, rt.y);
        target.width = maxX - target.x;
        target.height = maxY - target.y;
      };
      return BoundingRect2;
    }();
    BoundingRect_default = BoundingRect;
  }
});

// node_modules/zrender/lib/Handler.js
function makeEventPacket(eveType, targetInfo, event) {
  return {
    type: eveType,
    event,
    target: targetInfo.target,
    topTarget: targetInfo.topTarget,
    cancelBubble: false,
    offsetX: event.zrX,
    offsetY: event.zrY,
    gestureEvent: event.gestureEvent,
    pinchX: event.pinchX,
    pinchY: event.pinchY,
    pinchScale: event.pinchScale,
    wheelDelta: event.zrDelta,
    zrByTouch: event.zrByTouch,
    which: event.which,
    stop: stopEvent
  };
}
function stopEvent() {
  stop(this.event);
}
function isHover(displayable, x, y) {
  if (displayable[displayable.rectHover ? "rectContain" : "contain"](x, y)) {
    var el = displayable;
    var isSilent = void 0;
    var ignoreClip = false;
    while (el) {
      if (el.ignoreClip) {
        ignoreClip = true;
      }
      if (!ignoreClip) {
        var clipPath = el.getClipPath();
        if (clipPath && !clipPath.contain(x, y)) {
          return false;
        }
      }
      if (el.silent) {
        isSilent = true;
      }
      var hostEl = el.__hostTarget;
      el = hostEl ? hostEl : el.parent;
    }
    return isSilent ? SILENT : true;
  }
  return false;
}
function setHoverTarget(list, out, x, y, exclude) {
  for (var i = list.length - 1; i >= 0; i--) {
    var el = list[i];
    var hoverCheckResult = void 0;
    if (el !== exclude && !el.ignore && (hoverCheckResult = isHover(el, x, y))) {
      !out.topTarget && (out.topTarget = el);
      if (hoverCheckResult !== SILENT) {
        out.target = el;
        break;
      }
    }
  }
}
function isOutsideBoundary(handlerInstance, x, y) {
  var painter = handlerInstance.painter;
  return x < 0 || x > painter.getWidth() || y < 0 || y > painter.getHeight();
}
var SILENT, EmptyProxy, HoveredResult, handlerNames, tmpRect, Handler, Handler_default;
var init_Handler = __esm({
  "node_modules/zrender/lib/Handler.js"() {
    init_tslib_es6();
    init_util();
    init_vector();
    init_Draggable();
    init_Eventful();
    init_event();
    init_GestureMgr();
    init_BoundingRect();
    SILENT = "silent";
    EmptyProxy = function(_super) {
      __extends(EmptyProxy2, _super);
      function EmptyProxy2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handler = null;
        return _this;
      }
      EmptyProxy2.prototype.dispose = function() {
      };
      EmptyProxy2.prototype.setCursor = function() {
      };
      return EmptyProxy2;
    }(Eventful_default);
    HoveredResult = /* @__PURE__ */ function() {
      function HoveredResult2(x, y) {
        this.x = x;
        this.y = y;
      }
      return HoveredResult2;
    }();
    handlerNames = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"];
    tmpRect = new BoundingRect_default(0, 0, 0, 0);
    Handler = function(_super) {
      __extends(Handler2, _super);
      function Handler2(storage, painter, proxy, painterRoot, pointerSize) {
        var _this = _super.call(this) || this;
        _this._hovered = new HoveredResult(0, 0);
        _this.storage = storage;
        _this.painter = painter;
        _this.painterRoot = painterRoot;
        _this._pointerSize = pointerSize;
        proxy = proxy || new EmptyProxy();
        _this.proxy = null;
        _this.setHandlerProxy(proxy);
        _this._draggingMgr = new Draggable_default(_this);
        return _this;
      }
      Handler2.prototype.setHandlerProxy = function(proxy) {
        if (this.proxy) {
          this.proxy.dispose();
        }
        if (proxy) {
          each(handlerNames, function(name) {
            proxy.on && proxy.on(name, this[name], this);
          }, this);
          proxy.handler = this;
        }
        this.proxy = proxy;
      };
      Handler2.prototype.mousemove = function(event) {
        var x = event.zrX;
        var y = event.zrY;
        var isOutside = isOutsideBoundary(this, x, y);
        var lastHovered = this._hovered;
        var lastHoveredTarget = lastHovered.target;
        if (lastHoveredTarget && !lastHoveredTarget.__zr) {
          lastHovered = this.findHover(lastHovered.x, lastHovered.y);
          lastHoveredTarget = lastHovered.target;
        }
        var hovered = this._hovered = isOutside ? new HoveredResult(x, y) : this.findHover(x, y);
        var hoveredTarget = hovered.target;
        var proxy = this.proxy;
        proxy.setCursor && proxy.setCursor(hoveredTarget ? hoveredTarget.cursor : "default");
        if (lastHoveredTarget && hoveredTarget !== lastHoveredTarget) {
          this.dispatchToElement(lastHovered, "mouseout", event);
        }
        this.dispatchToElement(hovered, "mousemove", event);
        if (hoveredTarget && hoveredTarget !== lastHoveredTarget) {
          this.dispatchToElement(hovered, "mouseover", event);
        }
      };
      Handler2.prototype.mouseout = function(event) {
        var eventControl = event.zrEventControl;
        if (eventControl !== "only_globalout") {
          this.dispatchToElement(this._hovered, "mouseout", event);
        }
        if (eventControl !== "no_globalout") {
          this.trigger("globalout", {
            type: "globalout",
            event
          });
        }
      };
      Handler2.prototype.resize = function() {
        this._hovered = new HoveredResult(0, 0);
      };
      Handler2.prototype.dispatch = function(eventName, eventArgs) {
        var handler = this[eventName];
        handler && handler.call(this, eventArgs);
      };
      Handler2.prototype.dispose = function() {
        this.proxy.dispose();
        this.storage = null;
        this.proxy = null;
        this.painter = null;
      };
      Handler2.prototype.setCursorStyle = function(cursorStyle) {
        var proxy = this.proxy;
        proxy.setCursor && proxy.setCursor(cursorStyle);
      };
      Handler2.prototype.dispatchToElement = function(targetInfo, eventName, event) {
        targetInfo = targetInfo || {};
        var el = targetInfo.target;
        if (el && el.silent) {
          return;
        }
        var eventKey = "on" + eventName;
        var eventPacket = makeEventPacket(eventName, targetInfo, event);
        while (el) {
          el[eventKey] && (eventPacket.cancelBubble = !!el[eventKey].call(el, eventPacket));
          el.trigger(eventName, eventPacket);
          el = el.__hostTarget ? el.__hostTarget : el.parent;
          if (eventPacket.cancelBubble) {
            break;
          }
        }
        if (!eventPacket.cancelBubble) {
          this.trigger(eventName, eventPacket);
          if (this.painter && this.painter.eachOtherLayer) {
            this.painter.eachOtherLayer(function(layer) {
              if (typeof layer[eventKey] === "function") {
                layer[eventKey].call(layer, eventPacket);
              }
              if (layer.trigger) {
                layer.trigger(eventName, eventPacket);
              }
            });
          }
        }
      };
      Handler2.prototype.findHover = function(x, y, exclude) {
        var list = this.storage.getDisplayList();
        var out = new HoveredResult(x, y);
        setHoverTarget(list, out, x, y, exclude);
        if (this._pointerSize && !out.target) {
          var candidates = [];
          var pointerSize = this._pointerSize;
          var targetSizeHalf = pointerSize / 2;
          var pointerRect = new BoundingRect_default(x - targetSizeHalf, y - targetSizeHalf, pointerSize, pointerSize);
          for (var i = list.length - 1; i >= 0; i--) {
            var el = list[i];
            if (el !== exclude && !el.ignore && !el.ignoreCoarsePointer && (!el.parent || !el.parent.ignoreCoarsePointer)) {
              tmpRect.copy(el.getBoundingRect());
              if (el.transform) {
                tmpRect.applyTransform(el.transform);
              }
              if (tmpRect.intersect(pointerRect)) {
                candidates.push(el);
              }
            }
          }
          if (candidates.length) {
            var rStep = 4;
            var thetaStep = Math.PI / 12;
            var PI26 = Math.PI * 2;
            for (var r = 0; r < targetSizeHalf; r += rStep) {
              for (var theta = 0; theta < PI26; theta += thetaStep) {
                var x1 = x + r * Math.cos(theta);
                var y1 = y + r * Math.sin(theta);
                setHoverTarget(candidates, out, x1, y1, exclude);
                if (out.target) {
                  return out;
                }
              }
            }
          }
        }
        return out;
      };
      Handler2.prototype.processGesture = function(event, stage) {
        if (!this._gestureMgr) {
          this._gestureMgr = new GestureMgr();
        }
        var gestureMgr = this._gestureMgr;
        stage === "start" && gestureMgr.clear();
        var gestureInfo = gestureMgr.recognize(event, this.findHover(event.zrX, event.zrY, null).target, this.proxy.dom);
        stage === "end" && gestureMgr.clear();
        if (gestureInfo) {
          var type = gestureInfo.type;
          event.gestureEvent = type;
          var res = new HoveredResult();
          res.target = gestureInfo.target;
          this.dispatchToElement(res, type, gestureInfo.event);
        }
      };
      return Handler2;
    }(Eventful_default);
    each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(name) {
      Handler.prototype[name] = function(event) {
        var x = event.zrX;
        var y = event.zrY;
        var isOutside = isOutsideBoundary(this, x, y);
        var hovered;
        var hoveredTarget;
        if (name !== "mouseup" || !isOutside) {
          hovered = this.findHover(x, y);
          hoveredTarget = hovered.target;
        }
        if (name === "mousedown") {
          this._downEl = hoveredTarget;
          this._downPoint = [event.zrX, event.zrY];
          this._upEl = hoveredTarget;
        } else if (name === "mouseup") {
          this._upEl = hoveredTarget;
        } else if (name === "click") {
          if (this._downEl !== this._upEl || !this._downPoint || dist(this._downPoint, [event.zrX, event.zrY]) > 4) {
            return;
          }
          this._downPoint = null;
        }
        this.dispatchToElement(hovered, name, event);
      };
    });
    Handler_default = Handler;
  }
});

// node_modules/zrender/lib/core/timsort.js
function minRunLength(n) {
  var r = 0;
  while (n >= DEFAULT_MIN_MERGE) {
    r |= n & 1;
    n >>= 1;
  }
  return n + r;
}
function makeAscendingRun(array, lo, hi, compare) {
  var runHi = lo + 1;
  if (runHi === hi) {
    return 1;
  }
  if (compare(array[runHi++], array[lo]) < 0) {
    while (runHi < hi && compare(array[runHi], array[runHi - 1]) < 0) {
      runHi++;
    }
    reverseRun(array, lo, runHi);
  } else {
    while (runHi < hi && compare(array[runHi], array[runHi - 1]) >= 0) {
      runHi++;
    }
  }
  return runHi - lo;
}
function reverseRun(array, lo, hi) {
  hi--;
  while (lo < hi) {
    var t = array[lo];
    array[lo++] = array[hi];
    array[hi--] = t;
  }
}
function binaryInsertionSort(array, lo, hi, start2, compare) {
  if (start2 === lo) {
    start2++;
  }
  for (; start2 < hi; start2++) {
    var pivot = array[start2];
    var left = lo;
    var right = start2;
    var mid;
    while (left < right) {
      mid = left + right >>> 1;
      if (compare(pivot, array[mid]) < 0) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    var n = start2 - left;
    switch (n) {
      case 3:
        array[left + 3] = array[left + 2];
      case 2:
        array[left + 2] = array[left + 1];
      case 1:
        array[left + 1] = array[left];
        break;
      default:
        while (n > 0) {
          array[left + n] = array[left + n - 1];
          n--;
        }
    }
    array[left] = pivot;
  }
}
function gallopLeft(value, array, start2, length2, hint, compare) {
  var lastOffset = 0;
  var maxOffset = 0;
  var offset = 1;
  if (compare(value, array[start2 + hint]) > 0) {
    maxOffset = length2 - hint;
    while (offset < maxOffset && compare(value, array[start2 + hint + offset]) > 0) {
      lastOffset = offset;
      offset = (offset << 1) + 1;
      if (offset <= 0) {
        offset = maxOffset;
      }
    }
    if (offset > maxOffset) {
      offset = maxOffset;
    }
    lastOffset += hint;
    offset += hint;
  } else {
    maxOffset = hint + 1;
    while (offset < maxOffset && compare(value, array[start2 + hint - offset]) <= 0) {
      lastOffset = offset;
      offset = (offset << 1) + 1;
      if (offset <= 0) {
        offset = maxOffset;
      }
    }
    if (offset > maxOffset) {
      offset = maxOffset;
    }
    var tmp = lastOffset;
    lastOffset = hint - offset;
    offset = hint - tmp;
  }
  lastOffset++;
  while (lastOffset < offset) {
    var m = lastOffset + (offset - lastOffset >>> 1);
    if (compare(value, array[start2 + m]) > 0) {
      lastOffset = m + 1;
    } else {
      offset = m;
    }
  }
  return offset;
}
function gallopRight(value, array, start2, length2, hint, compare) {
  var lastOffset = 0;
  var maxOffset = 0;
  var offset = 1;
  if (compare(value, array[start2 + hint]) < 0) {
    maxOffset = hint + 1;
    while (offset < maxOffset && compare(value, array[start2 + hint - offset]) < 0) {
      lastOffset = offset;
      offset = (offset << 1) + 1;
      if (offset <= 0) {
        offset = maxOffset;
      }
    }
    if (offset > maxOffset) {
      offset = maxOffset;
    }
    var tmp = lastOffset;
    lastOffset = hint - offset;
    offset = hint - tmp;
  } else {
    maxOffset = length2 - hint;
    while (offset < maxOffset && compare(value, array[start2 + hint + offset]) >= 0) {
      lastOffset = offset;
      offset = (offset << 1) + 1;
      if (offset <= 0) {
        offset = maxOffset;
      }
    }
    if (offset > maxOffset) {
      offset = maxOffset;
    }
    lastOffset += hint;
    offset += hint;
  }
  lastOffset++;
  while (lastOffset < offset) {
    var m = lastOffset + (offset - lastOffset >>> 1);
    if (compare(value, array[start2 + m]) < 0) {
      offset = m;
    } else {
      lastOffset = m + 1;
    }
  }
  return offset;
}
function TimSort(array, compare) {
  var minGallop = DEFAULT_MIN_GALLOPING;
  var runStart;
  var runLength;
  var stackSize = 0;
  var tmp = [];
  runStart = [];
  runLength = [];
  function pushRun(_runStart, _runLength) {
    runStart[stackSize] = _runStart;
    runLength[stackSize] = _runLength;
    stackSize += 1;
  }
  function mergeRuns() {
    while (stackSize > 1) {
      var n = stackSize - 2;
      if (n >= 1 && runLength[n - 1] <= runLength[n] + runLength[n + 1] || n >= 2 && runLength[n - 2] <= runLength[n] + runLength[n - 1]) {
        if (runLength[n - 1] < runLength[n + 1]) {
          n--;
        }
      } else if (runLength[n] > runLength[n + 1]) {
        break;
      }
      mergeAt(n);
    }
  }
  function forceMergeRuns() {
    while (stackSize > 1) {
      var n = stackSize - 2;
      if (n > 0 && runLength[n - 1] < runLength[n + 1]) {
        n--;
      }
      mergeAt(n);
    }
  }
  function mergeAt(i) {
    var start1 = runStart[i];
    var length1 = runLength[i];
    var start2 = runStart[i + 1];
    var length2 = runLength[i + 1];
    runLength[i] = length1 + length2;
    if (i === stackSize - 3) {
      runStart[i + 1] = runStart[i + 2];
      runLength[i + 1] = runLength[i + 2];
    }
    stackSize--;
    var k = gallopRight(array[start2], array, start1, length1, 0, compare);
    start1 += k;
    length1 -= k;
    if (length1 === 0) {
      return;
    }
    length2 = gallopLeft(array[start1 + length1 - 1], array, start2, length2, length2 - 1, compare);
    if (length2 === 0) {
      return;
    }
    if (length1 <= length2) {
      mergeLow(start1, length1, start2, length2);
    } else {
      mergeHigh(start1, length1, start2, length2);
    }
  }
  function mergeLow(start1, length1, start2, length2) {
    var i = 0;
    for (i = 0; i < length1; i++) {
      tmp[i] = array[start1 + i];
    }
    var cursor1 = 0;
    var cursor2 = start2;
    var dest = start1;
    array[dest++] = array[cursor2++];
    if (--length2 === 0) {
      for (i = 0; i < length1; i++) {
        array[dest + i] = tmp[cursor1 + i];
      }
      return;
    }
    if (length1 === 1) {
      for (i = 0; i < length2; i++) {
        array[dest + i] = array[cursor2 + i];
      }
      array[dest + length2] = tmp[cursor1];
      return;
    }
    var _minGallop = minGallop;
    var count1;
    var count2;
    var exit;
    while (1) {
      count1 = 0;
      count2 = 0;
      exit = false;
      do {
        if (compare(array[cursor2], tmp[cursor1]) < 0) {
          array[dest++] = array[cursor2++];
          count2++;
          count1 = 0;
          if (--length2 === 0) {
            exit = true;
            break;
          }
        } else {
          array[dest++] = tmp[cursor1++];
          count1++;
          count2 = 0;
          if (--length1 === 1) {
            exit = true;
            break;
          }
        }
      } while ((count1 | count2) < _minGallop);
      if (exit) {
        break;
      }
      do {
        count1 = gallopRight(array[cursor2], tmp, cursor1, length1, 0, compare);
        if (count1 !== 0) {
          for (i = 0; i < count1; i++) {
            array[dest + i] = tmp[cursor1 + i];
          }
          dest += count1;
          cursor1 += count1;
          length1 -= count1;
          if (length1 <= 1) {
            exit = true;
            break;
          }
        }
        array[dest++] = array[cursor2++];
        if (--length2 === 0) {
          exit = true;
          break;
        }
        count2 = gallopLeft(tmp[cursor1], array, cursor2, length2, 0, compare);
        if (count2 !== 0) {
          for (i = 0; i < count2; i++) {
            array[dest + i] = array[cursor2 + i];
          }
          dest += count2;
          cursor2 += count2;
          length2 -= count2;
          if (length2 === 0) {
            exit = true;
            break;
          }
        }
        array[dest++] = tmp[cursor1++];
        if (--length1 === 1) {
          exit = true;
          break;
        }
        _minGallop--;
      } while (count1 >= DEFAULT_MIN_GALLOPING || count2 >= DEFAULT_MIN_GALLOPING);
      if (exit) {
        break;
      }
      if (_minGallop < 0) {
        _minGallop = 0;
      }
      _minGallop += 2;
    }
    minGallop = _minGallop;
    minGallop < 1 && (minGallop = 1);
    if (length1 === 1) {
      for (i = 0; i < length2; i++) {
        array[dest + i] = array[cursor2 + i];
      }
      array[dest + length2] = tmp[cursor1];
    } else if (length1 === 0) {
      throw new Error();
    } else {
      for (i = 0; i < length1; i++) {
        array[dest + i] = tmp[cursor1 + i];
      }
    }
  }
  function mergeHigh(start1, length1, start2, length2) {
    var i = 0;
    for (i = 0; i < length2; i++) {
      tmp[i] = array[start2 + i];
    }
    var cursor1 = start1 + length1 - 1;
    var cursor2 = length2 - 1;
    var dest = start2 + length2 - 1;
    var customCursor = 0;
    var customDest = 0;
    array[dest--] = array[cursor1--];
    if (--length1 === 0) {
      customCursor = dest - (length2 - 1);
      for (i = 0; i < length2; i++) {
        array[customCursor + i] = tmp[i];
      }
      return;
    }
    if (length2 === 1) {
      dest -= length1;
      cursor1 -= length1;
      customDest = dest + 1;
      customCursor = cursor1 + 1;
      for (i = length1 - 1; i >= 0; i--) {
        array[customDest + i] = array[customCursor + i];
      }
      array[dest] = tmp[cursor2];
      return;
    }
    var _minGallop = minGallop;
    while (true) {
      var count1 = 0;
      var count2 = 0;
      var exit = false;
      do {
        if (compare(tmp[cursor2], array[cursor1]) < 0) {
          array[dest--] = array[cursor1--];
          count1++;
          count2 = 0;
          if (--length1 === 0) {
            exit = true;
            break;
          }
        } else {
          array[dest--] = tmp[cursor2--];
          count2++;
          count1 = 0;
          if (--length2 === 1) {
            exit = true;
            break;
          }
        }
      } while ((count1 | count2) < _minGallop);
      if (exit) {
        break;
      }
      do {
        count1 = length1 - gallopRight(tmp[cursor2], array, start1, length1, length1 - 1, compare);
        if (count1 !== 0) {
          dest -= count1;
          cursor1 -= count1;
          length1 -= count1;
          customDest = dest + 1;
          customCursor = cursor1 + 1;
          for (i = count1 - 1; i >= 0; i--) {
            array[customDest + i] = array[customCursor + i];
          }
          if (length1 === 0) {
            exit = true;
            break;
          }
        }
        array[dest--] = tmp[cursor2--];
        if (--length2 === 1) {
          exit = true;
          break;
        }
        count2 = length2 - gallopLeft(array[cursor1], tmp, 0, length2, length2 - 1, compare);
        if (count2 !== 0) {
          dest -= count2;
          cursor2 -= count2;
          length2 -= count2;
          customDest = dest + 1;
          customCursor = cursor2 + 1;
          for (i = 0; i < count2; i++) {
            array[customDest + i] = tmp[customCursor + i];
          }
          if (length2 <= 1) {
            exit = true;
            break;
          }
        }
        array[dest--] = array[cursor1--];
        if (--length1 === 0) {
          exit = true;
          break;
        }
        _minGallop--;
      } while (count1 >= DEFAULT_MIN_GALLOPING || count2 >= DEFAULT_MIN_GALLOPING);
      if (exit) {
        break;
      }
      if (_minGallop < 0) {
        _minGallop = 0;
      }
      _minGallop += 2;
    }
    minGallop = _minGallop;
    if (minGallop < 1) {
      minGallop = 1;
    }
    if (length2 === 1) {
      dest -= length1;
      cursor1 -= length1;
      customDest = dest + 1;
      customCursor = cursor1 + 1;
      for (i = length1 - 1; i >= 0; i--) {
        array[customDest + i] = array[customCursor + i];
      }
      array[dest] = tmp[cursor2];
    } else if (length2 === 0) {
      throw new Error();
    } else {
      customCursor = dest - (length2 - 1);
      for (i = 0; i < length2; i++) {
        array[customCursor + i] = tmp[i];
      }
    }
  }
  return {
    mergeRuns,
    forceMergeRuns,
    pushRun
  };
}
function sort(array, compare, lo, hi) {
  if (!lo) {
    lo = 0;
  }
  if (!hi) {
    hi = array.length;
  }
  var remaining = hi - lo;
  if (remaining < 2) {
    return;
  }
  var runLength = 0;
  if (remaining < DEFAULT_MIN_MERGE) {
    runLength = makeAscendingRun(array, lo, hi, compare);
    binaryInsertionSort(array, lo, hi, lo + runLength, compare);
    return;
  }
  var ts = TimSort(array, compare);
  var minRun = minRunLength(remaining);
  do {
    runLength = makeAscendingRun(array, lo, hi, compare);
    if (runLength < minRun) {
      var force = remaining;
      if (force > minRun) {
        force = minRun;
      }
      binaryInsertionSort(array, lo, lo + force, lo + runLength, compare);
      runLength = force;
    }
    ts.pushRun(lo, runLength);
    ts.mergeRuns();
    remaining -= runLength;
    lo += runLength;
  } while (remaining !== 0);
  ts.forceMergeRuns();
}
var DEFAULT_MIN_MERGE, DEFAULT_MIN_GALLOPING;
var init_timsort = __esm({
  "node_modules/zrender/lib/core/timsort.js"() {
    DEFAULT_MIN_MERGE = 32;
    DEFAULT_MIN_GALLOPING = 7;
  }
});

// node_modules/zrender/lib/graphic/constants.js
var REDRAW_BIT, STYLE_CHANGED_BIT, SHAPE_CHANGED_BIT;
var init_constants = __esm({
  "node_modules/zrender/lib/graphic/constants.js"() {
    REDRAW_BIT = 1;
    STYLE_CHANGED_BIT = 2;
    SHAPE_CHANGED_BIT = 4;
  }
});

// node_modules/zrender/lib/Storage.js
function logInvalidZError() {
  if (invalidZErrorLogged) {
    return;
  }
  invalidZErrorLogged = true;
  console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors");
}
function shapeCompareFunc(a, b) {
  if (a.zlevel === b.zlevel) {
    if (a.z === b.z) {
      return a.z2 - b.z2;
    }
    return a.z - b.z;
  }
  return a.zlevel - b.zlevel;
}
var invalidZErrorLogged, Storage, Storage_default;
var init_Storage = __esm({
  "node_modules/zrender/lib/Storage.js"() {
    init_util();
    init_timsort();
    init_constants();
    invalidZErrorLogged = false;
    Storage = function() {
      function Storage2() {
        this._roots = [];
        this._displayList = [];
        this._displayListLen = 0;
        this.displayableSortFunc = shapeCompareFunc;
      }
      Storage2.prototype.traverse = function(cb, context) {
        for (var i = 0; i < this._roots.length; i++) {
          this._roots[i].traverse(cb, context);
        }
      };
      Storage2.prototype.getDisplayList = function(update, includeIgnore) {
        includeIgnore = includeIgnore || false;
        var displayList = this._displayList;
        if (update || !displayList.length) {
          this.updateDisplayList(includeIgnore);
        }
        return displayList;
      };
      Storage2.prototype.updateDisplayList = function(includeIgnore) {
        this._displayListLen = 0;
        var roots2 = this._roots;
        var displayList = this._displayList;
        for (var i = 0, len2 = roots2.length; i < len2; i++) {
          this._updateAndAddDisplayable(roots2[i], null, includeIgnore);
        }
        displayList.length = this._displayListLen;
        sort(displayList, shapeCompareFunc);
      };
      Storage2.prototype._updateAndAddDisplayable = function(el, clipPaths, includeIgnore) {
        if (el.ignore && !includeIgnore) {
          return;
        }
        el.beforeUpdate();
        el.update();
        el.afterUpdate();
        var userSetClipPath = el.getClipPath();
        if (el.ignoreClip) {
          clipPaths = null;
        } else if (userSetClipPath) {
          if (clipPaths) {
            clipPaths = clipPaths.slice();
          } else {
            clipPaths = [];
          }
          var currentClipPath = userSetClipPath;
          var parentClipPath = el;
          while (currentClipPath) {
            currentClipPath.parent = parentClipPath;
            currentClipPath.updateTransform();
            clipPaths.push(currentClipPath);
            parentClipPath = currentClipPath;
            currentClipPath = currentClipPath.getClipPath();
          }
        }
        if (el.childrenRef) {
          var children = el.childrenRef();
          for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (el.__dirty) {
              child.__dirty |= REDRAW_BIT;
            }
            this._updateAndAddDisplayable(child, clipPaths, includeIgnore);
          }
          el.__dirty = 0;
        } else {
          var disp = el;
          if (clipPaths && clipPaths.length) {
            disp.__clipPaths = clipPaths;
          } else if (disp.__clipPaths && disp.__clipPaths.length > 0) {
            disp.__clipPaths = [];
          }
          if (isNaN(disp.z)) {
            logInvalidZError();
            disp.z = 0;
          }
          if (isNaN(disp.z2)) {
            logInvalidZError();
            disp.z2 = 0;
          }
          if (isNaN(disp.zlevel)) {
            logInvalidZError();
            disp.zlevel = 0;
          }
          this._displayList[this._displayListLen++] = disp;
        }
        var decalEl = el.getDecalElement && el.getDecalElement();
        if (decalEl) {
          this._updateAndAddDisplayable(decalEl, clipPaths, includeIgnore);
        }
        var textGuide = el.getTextGuideLine();
        if (textGuide) {
          this._updateAndAddDisplayable(textGuide, clipPaths, includeIgnore);
        }
        var textEl = el.getTextContent();
        if (textEl) {
          this._updateAndAddDisplayable(textEl, clipPaths, includeIgnore);
        }
      };
      Storage2.prototype.addRoot = function(el) {
        if (el.__zr && el.__zr.storage === this) {
          return;
        }
        this._roots.push(el);
      };
      Storage2.prototype.delRoot = function(el) {
        if (el instanceof Array) {
          for (var i = 0, l = el.length; i < l; i++) {
            this.delRoot(el[i]);
          }
          return;
        }
        var idx = indexOf(this._roots, el);
        if (idx >= 0) {
          this._roots.splice(idx, 1);
        }
      };
      Storage2.prototype.delAllRoots = function() {
        this._roots = [];
        this._displayList = [];
        this._displayListLen = 0;
        return;
      };
      Storage2.prototype.getRoots = function() {
        return this._roots;
      };
      Storage2.prototype.dispose = function() {
        this._displayList = null;
        this._roots = null;
      };
      return Storage2;
    }();
    Storage_default = Storage;
  }
});

// node_modules/zrender/lib/animation/requestAnimationFrame.js
var requestAnimationFrame, requestAnimationFrame_default;
var init_requestAnimationFrame = __esm({
  "node_modules/zrender/lib/animation/requestAnimationFrame.js"() {
    init_env();
    requestAnimationFrame = env_default.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(func) {
      return setTimeout(func, 16);
    };
    requestAnimationFrame_default = requestAnimationFrame;
  }
});

// node_modules/zrender/lib/animation/easing.js
var easingFuncs, easing_default;
var init_easing = __esm({
  "node_modules/zrender/lib/animation/easing.js"() {
    easingFuncs = {
      linear: function(k) {
        return k;
      },
      quadraticIn: function(k) {
        return k * k;
      },
      quadraticOut: function(k) {
        return k * (2 - k);
      },
      quadraticInOut: function(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k;
        }
        return -0.5 * (--k * (k - 2) - 1);
      },
      cubicIn: function(k) {
        return k * k * k;
      },
      cubicOut: function(k) {
        return --k * k * k + 1;
      },
      cubicInOut: function(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k * k;
        }
        return 0.5 * ((k -= 2) * k * k + 2);
      },
      quarticIn: function(k) {
        return k * k * k * k;
      },
      quarticOut: function(k) {
        return 1 - --k * k * k * k;
      },
      quarticInOut: function(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k * k * k;
        }
        return -0.5 * ((k -= 2) * k * k * k - 2);
      },
      quinticIn: function(k) {
        return k * k * k * k * k;
      },
      quinticOut: function(k) {
        return --k * k * k * k * k + 1;
      },
      quinticInOut: function(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k * k * k * k;
        }
        return 0.5 * ((k -= 2) * k * k * k * k + 2);
      },
      sinusoidalIn: function(k) {
        return 1 - Math.cos(k * Math.PI / 2);
      },
      sinusoidalOut: function(k) {
        return Math.sin(k * Math.PI / 2);
      },
      sinusoidalInOut: function(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      },
      exponentialIn: function(k) {
        return k === 0 ? 0 : Math.pow(1024, k - 1);
      },
      exponentialOut: function(k) {
        return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
      },
      exponentialInOut: function(k) {
        if (k === 0) {
          return 0;
        }
        if (k === 1) {
          return 1;
        }
        if ((k *= 2) < 1) {
          return 0.5 * Math.pow(1024, k - 1);
        }
        return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
      },
      circularIn: function(k) {
        return 1 - Math.sqrt(1 - k * k);
      },
      circularOut: function(k) {
        return Math.sqrt(1 - --k * k);
      },
      circularInOut: function(k) {
        if ((k *= 2) < 1) {
          return -0.5 * (Math.sqrt(1 - k * k) - 1);
        }
        return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
      },
      elasticIn: function(k) {
        var s;
        var a = 0.1;
        var p = 0.4;
        if (k === 0) {
          return 0;
        }
        if (k === 1) {
          return 1;
        }
        if (!a || a < 1) {
          a = 1;
          s = p / 4;
        } else {
          s = p * Math.asin(1 / a) / (2 * Math.PI);
        }
        return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
      },
      elasticOut: function(k) {
        var s;
        var a = 0.1;
        var p = 0.4;
        if (k === 0) {
          return 0;
        }
        if (k === 1) {
          return 1;
        }
        if (!a || a < 1) {
          a = 1;
          s = p / 4;
        } else {
          s = p * Math.asin(1 / a) / (2 * Math.PI);
        }
        return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
      },
      elasticInOut: function(k) {
        var s;
        var a = 0.1;
        var p = 0.4;
        if (k === 0) {
          return 0;
        }
        if (k === 1) {
          return 1;
        }
        if (!a || a < 1) {
          a = 1;
          s = p / 4;
        } else {
          s = p * Math.asin(1 / a) / (2 * Math.PI);
        }
        if ((k *= 2) < 1) {
          return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
        }
        return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
      },
      backIn: function(k) {
        var s = 1.70158;
        return k * k * ((s + 1) * k - s);
      },
      backOut: function(k) {
        var s = 1.70158;
        return --k * k * ((s + 1) * k + s) + 1;
      },
      backInOut: function(k) {
        var s = 1.70158 * 1.525;
        if ((k *= 2) < 1) {
          return 0.5 * (k * k * ((s + 1) * k - s));
        }
        return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
      },
      bounceIn: function(k) {
        return 1 - easingFuncs.bounceOut(1 - k);
      },
      bounceOut: function(k) {
        if (k < 1 / 2.75) {
          return 7.5625 * k * k;
        } else if (k < 2 / 2.75) {
          return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
        } else if (k < 2.5 / 2.75) {
          return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
        } else {
          return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
        }
      },
      bounceInOut: function(k) {
        if (k < 0.5) {
          return easingFuncs.bounceIn(k * 2) * 0.5;
        }
        return easingFuncs.bounceOut(k * 2 - 1) * 0.5 + 0.5;
      }
    };
    easing_default = easingFuncs;
  }
});

// node_modules/zrender/lib/core/curve.js
function isAroundZero(val) {
  return val > -EPSILON && val < EPSILON;
}
function isNotAroundZero(val) {
  return val > EPSILON || val < -EPSILON;
}
function cubicAt(p0, p1, p2, p3, t) {
  var onet = 1 - t;
  return onet * onet * (onet * p0 + 3 * t * p1) + t * t * (t * p3 + 3 * onet * p2);
}
function cubicDerivativeAt(p0, p1, p2, p3, t) {
  var onet = 1 - t;
  return 3 * (((p1 - p0) * onet + 2 * (p2 - p1) * t) * onet + (p3 - p2) * t * t);
}
function cubicRootAt(p0, p1, p2, p3, val, roots2) {
  var a = p3 + 3 * (p1 - p2) - p0;
  var b = 3 * (p2 - p1 * 2 + p0);
  var c = 3 * (p1 - p0);
  var d = p0 - val;
  var A = b * b - 3 * a * c;
  var B = b * c - 9 * a * d;
  var C = c * c - 3 * b * d;
  var n = 0;
  if (isAroundZero(A) && isAroundZero(B)) {
    if (isAroundZero(b)) {
      roots2[0] = 0;
    } else {
      var t1 = -c / b;
      if (t1 >= 0 && t1 <= 1) {
        roots2[n++] = t1;
      }
    }
  } else {
    var disc = B * B - 4 * A * C;
    if (isAroundZero(disc)) {
      var K = B / A;
      var t1 = -b / a + K;
      var t2 = -K / 2;
      if (t1 >= 0 && t1 <= 1) {
        roots2[n++] = t1;
      }
      if (t2 >= 0 && t2 <= 1) {
        roots2[n++] = t2;
      }
    } else if (disc > 0) {
      var discSqrt = mathSqrt(disc);
      var Y1 = A * b + 1.5 * a * (-B + discSqrt);
      var Y2 = A * b + 1.5 * a * (-B - discSqrt);
      if (Y1 < 0) {
        Y1 = -mathPow(-Y1, ONE_THIRD);
      } else {
        Y1 = mathPow(Y1, ONE_THIRD);
      }
      if (Y2 < 0) {
        Y2 = -mathPow(-Y2, ONE_THIRD);
      } else {
        Y2 = mathPow(Y2, ONE_THIRD);
      }
      var t1 = (-b - (Y1 + Y2)) / (3 * a);
      if (t1 >= 0 && t1 <= 1) {
        roots2[n++] = t1;
      }
    } else {
      var T = (2 * A * b - 3 * a * B) / (2 * mathSqrt(A * A * A));
      var theta = Math.acos(T) / 3;
      var ASqrt = mathSqrt(A);
      var tmp = Math.cos(theta);
      var t1 = (-b - 2 * ASqrt * tmp) / (3 * a);
      var t2 = (-b + ASqrt * (tmp + THREE_SQRT * Math.sin(theta))) / (3 * a);
      var t3 = (-b + ASqrt * (tmp - THREE_SQRT * Math.sin(theta))) / (3 * a);
      if (t1 >= 0 && t1 <= 1) {
        roots2[n++] = t1;
      }
      if (t2 >= 0 && t2 <= 1) {
        roots2[n++] = t2;
      }
      if (t3 >= 0 && t3 <= 1) {
        roots2[n++] = t3;
      }
    }
  }
  return n;
}
function cubicExtrema(p0, p1, p2, p3, extrema2) {
  var b = 6 * p2 - 12 * p1 + 6 * p0;
  var a = 9 * p1 + 3 * p3 - 3 * p0 - 9 * p2;
  var c = 3 * p1 - 3 * p0;
  var n = 0;
  if (isAroundZero(a)) {
    if (isNotAroundZero(b)) {
      var t1 = -c / b;
      if (t1 >= 0 && t1 <= 1) {
        extrema2[n++] = t1;
      }
    }
  } else {
    var disc = b * b - 4 * a * c;
    if (isAroundZero(disc)) {
      extrema2[0] = -b / (2 * a);
    } else if (disc > 0) {
      var discSqrt = mathSqrt(disc);
      var t1 = (-b + discSqrt) / (2 * a);
      var t2 = (-b - discSqrt) / (2 * a);
      if (t1 >= 0 && t1 <= 1) {
        extrema2[n++] = t1;
      }
      if (t2 >= 0 && t2 <= 1) {
        extrema2[n++] = t2;
      }
    }
  }
  return n;
}
function cubicSubdivide(p0, p1, p2, p3, t, out) {
  var p01 = (p1 - p0) * t + p0;
  var p12 = (p2 - p1) * t + p1;
  var p23 = (p3 - p2) * t + p2;
  var p012 = (p12 - p01) * t + p01;
  var p123 = (p23 - p12) * t + p12;
  var p0123 = (p123 - p012) * t + p012;
  out[0] = p0;
  out[1] = p01;
  out[2] = p012;
  out[3] = p0123;
  out[4] = p0123;
  out[5] = p123;
  out[6] = p23;
  out[7] = p3;
}
function cubicProjectPoint(x0, y0, x1, y1, x2, y2, x3, y3, x, y, out) {
  var t;
  var interval = 5e-3;
  var d = Infinity;
  var prev;
  var next;
  var d1;
  var d2;
  _v0[0] = x;
  _v0[1] = y;
  for (var _t = 0; _t < 1; _t += 0.05) {
    _v1[0] = cubicAt(x0, x1, x2, x3, _t);
    _v1[1] = cubicAt(y0, y1, y2, y3, _t);
    d1 = distSquare(_v0, _v1);
    if (d1 < d) {
      t = _t;
      d = d1;
    }
  }
  d = Infinity;
  for (var i = 0; i < 32; i++) {
    if (interval < EPSILON_NUMERIC) {
      break;
    }
    prev = t - interval;
    next = t + interval;
    _v1[0] = cubicAt(x0, x1, x2, x3, prev);
    _v1[1] = cubicAt(y0, y1, y2, y3, prev);
    d1 = distSquare(_v1, _v0);
    if (prev >= 0 && d1 < d) {
      t = prev;
      d = d1;
    } else {
      _v2[0] = cubicAt(x0, x1, x2, x3, next);
      _v2[1] = cubicAt(y0, y1, y2, y3, next);
      d2 = distSquare(_v2, _v0);
      if (next <= 1 && d2 < d) {
        t = next;
        d = d2;
      } else {
        interval *= 0.5;
      }
    }
  }
  if (out) {
    out[0] = cubicAt(x0, x1, x2, x3, t);
    out[1] = cubicAt(y0, y1, y2, y3, t);
  }
  return mathSqrt(d);
}
function cubicLength(x0, y0, x1, y1, x2, y2, x3, y3, iteration) {
  var px = x0;
  var py = y0;
  var d = 0;
  var step = 1 / iteration;
  for (var i = 1; i <= iteration; i++) {
    var t = i * step;
    var x = cubicAt(x0, x1, x2, x3, t);
    var y = cubicAt(y0, y1, y2, y3, t);
    var dx = x - px;
    var dy = y - py;
    d += Math.sqrt(dx * dx + dy * dy);
    px = x;
    py = y;
  }
  return d;
}
function quadraticAt(p0, p1, p2, t) {
  var onet = 1 - t;
  return onet * (onet * p0 + 2 * t * p1) + t * t * p2;
}
function quadraticDerivativeAt(p0, p1, p2, t) {
  return 2 * ((1 - t) * (p1 - p0) + t * (p2 - p1));
}
function quadraticRootAt(p0, p1, p2, val, roots2) {
  var a = p0 - 2 * p1 + p2;
  var b = 2 * (p1 - p0);
  var c = p0 - val;
  var n = 0;
  if (isAroundZero(a)) {
    if (isNotAroundZero(b)) {
      var t1 = -c / b;
      if (t1 >= 0 && t1 <= 1) {
        roots2[n++] = t1;
      }
    }
  } else {
    var disc = b * b - 4 * a * c;
    if (isAroundZero(disc)) {
      var t1 = -b / (2 * a);
      if (t1 >= 0 && t1 <= 1) {
        roots2[n++] = t1;
      }
    } else if (disc > 0) {
      var discSqrt = mathSqrt(disc);
      var t1 = (-b + discSqrt) / (2 * a);
      var t2 = (-b - discSqrt) / (2 * a);
      if (t1 >= 0 && t1 <= 1) {
        roots2[n++] = t1;
      }
      if (t2 >= 0 && t2 <= 1) {
        roots2[n++] = t2;
      }
    }
  }
  return n;
}
function quadraticExtremum(p0, p1, p2) {
  var divider = p0 + p2 - 2 * p1;
  if (divider === 0) {
    return 0.5;
  } else {
    return (p0 - p1) / divider;
  }
}
function quadraticSubdivide(p0, p1, p2, t, out) {
  var p01 = (p1 - p0) * t + p0;
  var p12 = (p2 - p1) * t + p1;
  var p012 = (p12 - p01) * t + p01;
  out[0] = p0;
  out[1] = p01;
  out[2] = p012;
  out[3] = p012;
  out[4] = p12;
  out[5] = p2;
}
function quadraticProjectPoint(x0, y0, x1, y1, x2, y2, x, y, out) {
  var t;
  var interval = 5e-3;
  var d = Infinity;
  _v0[0] = x;
  _v0[1] = y;
  for (var _t = 0; _t < 1; _t += 0.05) {
    _v1[0] = quadraticAt(x0, x1, x2, _t);
    _v1[1] = quadraticAt(y0, y1, y2, _t);
    var d1 = distSquare(_v0, _v1);
    if (d1 < d) {
      t = _t;
      d = d1;
    }
  }
  d = Infinity;
  for (var i = 0; i < 32; i++) {
    if (interval < EPSILON_NUMERIC) {
      break;
    }
    var prev = t - interval;
    var next = t + interval;
    _v1[0] = quadraticAt(x0, x1, x2, prev);
    _v1[1] = quadraticAt(y0, y1, y2, prev);
    var d1 = distSquare(_v1, _v0);
    if (prev >= 0 && d1 < d) {
      t = prev;
      d = d1;
    } else {
      _v2[0] = quadraticAt(x0, x1, x2, next);
      _v2[1] = quadraticAt(y0, y1, y2, next);
      var d2 = distSquare(_v2, _v0);
      if (next <= 1 && d2 < d) {
        t = next;
        d = d2;
      } else {
        interval *= 0.5;
      }
    }
  }
  if (out) {
    out[0] = quadraticAt(x0, x1, x2, t);
    out[1] = quadraticAt(y0, y1, y2, t);
  }
  return mathSqrt(d);
}
function quadraticLength(x0, y0, x1, y1, x2, y2, iteration) {
  var px = x0;
  var py = y0;
  var d = 0;
  var step = 1 / iteration;
  for (var i = 1; i <= iteration; i++) {
    var t = i * step;
    var x = quadraticAt(x0, x1, x2, t);
    var y = quadraticAt(y0, y1, y2, t);
    var dx = x - px;
    var dy = y - py;
    d += Math.sqrt(dx * dx + dy * dy);
    px = x;
    py = y;
  }
  return d;
}
var mathPow, mathSqrt, EPSILON, EPSILON_NUMERIC, THREE_SQRT, ONE_THIRD, _v0, _v1, _v2;
var init_curve = __esm({
  "node_modules/zrender/lib/core/curve.js"() {
    init_vector();
    mathPow = Math.pow;
    mathSqrt = Math.sqrt;
    EPSILON = 1e-8;
    EPSILON_NUMERIC = 1e-4;
    THREE_SQRT = mathSqrt(3);
    ONE_THIRD = 1 / 3;
    _v0 = create();
    _v1 = create();
    _v2 = create();
  }
});

// node_modules/zrender/lib/animation/cubicEasing.js
function createCubicEasingFunc(cubicEasingStr) {
  var cubic = cubicEasingStr && regexp.exec(cubicEasingStr);
  if (cubic) {
    var points = cubic[1].split(",");
    var a_1 = +trim(points[0]);
    var b_1 = +trim(points[1]);
    var c_1 = +trim(points[2]);
    var d_1 = +trim(points[3]);
    if (isNaN(a_1 + b_1 + c_1 + d_1)) {
      return;
    }
    var roots_1 = [];
    return function(p) {
      return p <= 0 ? 0 : p >= 1 ? 1 : cubicRootAt(0, a_1, c_1, 1, p, roots_1) && cubicAt(0, b_1, d_1, 1, roots_1[0]);
    };
  }
}
var regexp;
var init_cubicEasing = __esm({
  "node_modules/zrender/lib/animation/cubicEasing.js"() {
    init_curve();
    init_util();
    regexp = /cubic-bezier\(([0-9,\.e ]+)\)/;
  }
});

// node_modules/zrender/lib/animation/Clip.js
var Clip, Clip_default;
var init_Clip = __esm({
  "node_modules/zrender/lib/animation/Clip.js"() {
    init_easing();
    init_util();
    init_cubicEasing();
    Clip = function() {
      function Clip2(opts) {
        this._inited = false;
        this._startTime = 0;
        this._pausedTime = 0;
        this._paused = false;
        this._life = opts.life || 1e3;
        this._delay = opts.delay || 0;
        this.loop = opts.loop || false;
        this.onframe = opts.onframe || noop;
        this.ondestroy = opts.ondestroy || noop;
        this.onrestart = opts.onrestart || noop;
        opts.easing && this.setEasing(opts.easing);
      }
      Clip2.prototype.step = function(globalTime, deltaTime) {
        if (!this._inited) {
          this._startTime = globalTime + this._delay;
          this._inited = true;
        }
        if (this._paused) {
          this._pausedTime += deltaTime;
          return;
        }
        var life = this._life;
        var elapsedTime = globalTime - this._startTime - this._pausedTime;
        var percent = elapsedTime / life;
        if (percent < 0) {
          percent = 0;
        }
        percent = Math.min(percent, 1);
        var easingFunc = this.easingFunc;
        var schedule = easingFunc ? easingFunc(percent) : percent;
        this.onframe(schedule);
        if (percent === 1) {
          if (this.loop) {
            var remainder = elapsedTime % life;
            this._startTime = globalTime - remainder;
            this._pausedTime = 0;
            this.onrestart();
          } else {
            return true;
          }
        }
        return false;
      };
      Clip2.prototype.pause = function() {
        this._paused = true;
      };
      Clip2.prototype.resume = function() {
        this._paused = false;
      };
      Clip2.prototype.setEasing = function(easing) {
        this.easing = easing;
        this.easingFunc = isFunction(easing) ? easing : easing_default[easing] || createCubicEasingFunc(easing);
      };
      return Clip2;
    }();
    Clip_default = Clip;
  }
});

// node_modules/zrender/lib/svg/helper.js
function normalizeColor(color) {
  var opacity;
  if (!color || color === "transparent") {
    color = "none";
  } else if (typeof color === "string" && color.indexOf("rgba") > -1) {
    var arr = parse(color);
    if (arr) {
      color = "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
      opacity = arr[3];
    }
  }
  return {
    color,
    opacity: opacity == null ? 1 : opacity
  };
}
function isAroundZero2(transform) {
  return transform < EPSILON2 && transform > -EPSILON2;
}
function round3(transform) {
  return mathRound(transform * 1e3) / 1e3;
}
function round4(transform) {
  return mathRound(transform * 1e4) / 1e4;
}
function getMatrixStr(m) {
  return "matrix(" + round3(m[0]) + "," + round3(m[1]) + "," + round3(m[2]) + "," + round3(m[3]) + "," + round4(m[4]) + "," + round4(m[5]) + ")";
}
function adjustTextY(y, lineHeight, textBaseline) {
  if (textBaseline === "top") {
    y += lineHeight / 2;
  } else if (textBaseline === "bottom") {
    y -= lineHeight / 2;
  }
  return y;
}
function hasShadow(style) {
  return style && (style.shadowBlur || style.shadowOffsetX || style.shadowOffsetY);
}
function getShadowKey(displayable) {
  var style = displayable.style;
  var globalScale = displayable.getGlobalScale();
  return [style.shadowColor, (style.shadowBlur || 0).toFixed(2), (style.shadowOffsetX || 0).toFixed(2), (style.shadowOffsetY || 0).toFixed(2), globalScale[0], globalScale[1]].join(",");
}
function isImagePattern(val) {
  return val && !!val.image;
}
function isSVGPattern(val) {
  return val && !!val.svgElement;
}
function isPattern(val) {
  return isImagePattern(val) || isSVGPattern(val);
}
function isLinearGradient(val) {
  return val.type === "linear";
}
function isRadialGradient(val) {
  return val.type === "radial";
}
function isGradient(val) {
  return val && (val.type === "linear" || val.type === "radial");
}
function getIdURL(id) {
  return "url(#" + id + ")";
}
function getPathPrecision(el) {
  var scale3 = el.getGlobalScale();
  var size = Math.max(scale3[0], scale3[1]);
  return Math.max(Math.ceil(Math.log(size) / Math.log(10)), 1);
}
function getSRTTransformString(transform) {
  var x = transform.x || 0;
  var y = transform.y || 0;
  var rotation = (transform.rotation || 0) * RADIAN_TO_DEGREE;
  var scaleX = retrieve2(transform.scaleX, 1);
  var scaleY = retrieve2(transform.scaleY, 1);
  var skewX = transform.skewX || 0;
  var skewY = transform.skewY || 0;
  var res = [];
  if (x || y) {
    res.push("translate(" + x + "px," + y + "px)");
  }
  if (rotation) {
    res.push("rotate(" + rotation + ")");
  }
  if (scaleX !== 1 || scaleY !== 1) {
    res.push("scale(" + scaleX + "," + scaleY + ")");
  }
  if (skewX || skewY) {
    res.push("skew(" + mathRound(skewX * RADIAN_TO_DEGREE) + "deg, " + mathRound(skewY * RADIAN_TO_DEGREE) + "deg)");
  }
  return res.join(" ");
}
var mathRound, EPSILON2, TEXT_ALIGN_TO_ANCHOR, encodeBase64;
var init_helper = __esm({
  "node_modules/zrender/lib/svg/helper.js"() {
    init_util();
    init_color();
    init_env();
    mathRound = Math.round;
    EPSILON2 = 1e-4;
    TEXT_ALIGN_TO_ANCHOR = {
      left: "start",
      right: "end",
      center: "middle",
      middle: "middle"
    };
    encodeBase64 = function() {
      if (env_default.hasGlobalWindow && isFunction(window.btoa)) {
        return function(str) {
          return window.btoa(unescape(encodeURIComponent(str)));
        };
      }
      if (typeof Buffer !== "undefined") {
        return function(str) {
          return Buffer.from(str).toString("base64");
        };
      }
      return function(str) {
        if (process.env.NODE_ENV !== "production") {
          logError("Base64 isn't natively supported in the current environment.");
        }
        return null;
      };
    }();
  }
});

// node_modules/zrender/lib/animation/Animator.js
function interpolateNumber(p0, p1, percent) {
  return (p1 - p0) * percent + p0;
}
function interpolate1DArray(out, p0, p1, percent) {
  var len2 = p0.length;
  for (var i = 0; i < len2; i++) {
    out[i] = interpolateNumber(p0[i], p1[i], percent);
  }
  return out;
}
function interpolate2DArray(out, p0, p1, percent) {
  var len2 = p0.length;
  var len22 = len2 && p0[0].length;
  for (var i = 0; i < len2; i++) {
    if (!out[i]) {
      out[i] = [];
    }
    for (var j = 0; j < len22; j++) {
      out[i][j] = interpolateNumber(p0[i][j], p1[i][j], percent);
    }
  }
  return out;
}
function add1DArray(out, p0, p1, sign) {
  var len2 = p0.length;
  for (var i = 0; i < len2; i++) {
    out[i] = p0[i] + p1[i] * sign;
  }
  return out;
}
function add2DArray(out, p0, p1, sign) {
  var len2 = p0.length;
  var len22 = len2 && p0[0].length;
  for (var i = 0; i < len2; i++) {
    if (!out[i]) {
      out[i] = [];
    }
    for (var j = 0; j < len22; j++) {
      out[i][j] = p0[i][j] + p1[i][j] * sign;
    }
  }
  return out;
}
function fillColorStops(val0, val1) {
  var len0 = val0.length;
  var len1 = val1.length;
  var shorterArr = len0 > len1 ? val1 : val0;
  var shorterLen = Math.min(len0, len1);
  var last = shorterArr[shorterLen - 1] || {
    color: [0, 0, 0, 0],
    offset: 0
  };
  for (var i = shorterLen; i < Math.max(len0, len1); i++) {
    shorterArr.push({
      offset: last.offset,
      color: last.color.slice()
    });
  }
}
function fillArray(val0, val1, arrDim) {
  var arr0 = val0;
  var arr1 = val1;
  if (!arr0.push || !arr1.push) {
    return;
  }
  var arr0Len = arr0.length;
  var arr1Len = arr1.length;
  if (arr0Len !== arr1Len) {
    var isPreviousLarger = arr0Len > arr1Len;
    if (isPreviousLarger) {
      arr0.length = arr1Len;
    } else {
      for (var i = arr0Len; i < arr1Len; i++) {
        arr0.push(arrDim === 1 ? arr1[i] : arraySlice.call(arr1[i]));
      }
    }
  }
  var len2 = arr0[0] && arr0[0].length;
  for (var i = 0; i < arr0.length; i++) {
    if (arrDim === 1) {
      if (isNaN(arr0[i])) {
        arr0[i] = arr1[i];
      }
    } else {
      for (var j = 0; j < len2; j++) {
        if (isNaN(arr0[i][j])) {
          arr0[i][j] = arr1[i][j];
        }
      }
    }
  }
}
function cloneValue(value) {
  if (isArrayLike(value)) {
    var len2 = value.length;
    if (isArrayLike(value[0])) {
      var ret = [];
      for (var i = 0; i < len2; i++) {
        ret.push(arraySlice.call(value[i]));
      }
      return ret;
    }
    return arraySlice.call(value);
  }
  return value;
}
function rgba2String(rgba) {
  rgba[0] = Math.floor(rgba[0]) || 0;
  rgba[1] = Math.floor(rgba[1]) || 0;
  rgba[2] = Math.floor(rgba[2]) || 0;
  rgba[3] = rgba[3] == null ? 1 : rgba[3];
  return "rgba(" + rgba.join(",") + ")";
}
function guessArrayDim(value) {
  return isArrayLike(value && value[0]) ? 2 : 1;
}
function isGradientValueType(valType) {
  return valType === VALUE_TYPE_LINEAR_GRADIENT || valType === VALUE_TYPE_RADIAL_GRADIENT;
}
function isArrayValueType(valType) {
  return valType === VALUE_TYPE_1D_ARRAY || valType === VALUE_TYPE_2D_ARRAY;
}
var arraySlice, VALUE_TYPE_NUMBER, VALUE_TYPE_1D_ARRAY, VALUE_TYPE_2D_ARRAY, VALUE_TYPE_COLOR, VALUE_TYPE_LINEAR_GRADIENT, VALUE_TYPE_RADIAL_GRADIENT, VALUE_TYPE_UNKOWN, tmpRgba, Track, Animator, Animator_default;
var init_Animator = __esm({
  "node_modules/zrender/lib/animation/Animator.js"() {
    init_Clip();
    init_color();
    init_util();
    init_easing();
    init_cubicEasing();
    init_helper();
    arraySlice = Array.prototype.slice;
    VALUE_TYPE_NUMBER = 0;
    VALUE_TYPE_1D_ARRAY = 1;
    VALUE_TYPE_2D_ARRAY = 2;
    VALUE_TYPE_COLOR = 3;
    VALUE_TYPE_LINEAR_GRADIENT = 4;
    VALUE_TYPE_RADIAL_GRADIENT = 5;
    VALUE_TYPE_UNKOWN = 6;
    tmpRgba = [0, 0, 0, 0];
    Track = function() {
      function Track2(propName) {
        this.keyframes = [];
        this.discrete = false;
        this._invalid = false;
        this._needsSort = false;
        this._lastFr = 0;
        this._lastFrP = 0;
        this.propName = propName;
      }
      Track2.prototype.isFinished = function() {
        return this._finished;
      };
      Track2.prototype.setFinished = function() {
        this._finished = true;
        if (this._additiveTrack) {
          this._additiveTrack.setFinished();
        }
      };
      Track2.prototype.needsAnimate = function() {
        return this.keyframes.length >= 1;
      };
      Track2.prototype.getAdditiveTrack = function() {
        return this._additiveTrack;
      };
      Track2.prototype.addKeyframe = function(time, rawValue, easing) {
        this._needsSort = true;
        var keyframes = this.keyframes;
        var len2 = keyframes.length;
        var discrete = false;
        var valType = VALUE_TYPE_UNKOWN;
        var value = rawValue;
        if (isArrayLike(rawValue)) {
          var arrayDim = guessArrayDim(rawValue);
          valType = arrayDim;
          if (arrayDim === 1 && !isNumber(rawValue[0]) || arrayDim === 2 && !isNumber(rawValue[0][0])) {
            discrete = true;
          }
        } else {
          if (isNumber(rawValue) && !eqNaN(rawValue)) {
            valType = VALUE_TYPE_NUMBER;
          } else if (isString(rawValue)) {
            if (!isNaN(+rawValue)) {
              valType = VALUE_TYPE_NUMBER;
            } else {
              var colorArray = parse(rawValue);
              if (colorArray) {
                value = colorArray;
                valType = VALUE_TYPE_COLOR;
              }
            }
          } else if (isGradientObject(rawValue)) {
            var parsedGradient = extend({}, value);
            parsedGradient.colorStops = map(rawValue.colorStops, function(colorStop) {
              return {
                offset: colorStop.offset,
                color: parse(colorStop.color)
              };
            });
            if (isLinearGradient(rawValue)) {
              valType = VALUE_TYPE_LINEAR_GRADIENT;
            } else if (isRadialGradient(rawValue)) {
              valType = VALUE_TYPE_RADIAL_GRADIENT;
            }
            value = parsedGradient;
          }
        }
        if (len2 === 0) {
          this.valType = valType;
        } else if (valType !== this.valType || valType === VALUE_TYPE_UNKOWN) {
          discrete = true;
        }
        this.discrete = this.discrete || discrete;
        var kf = {
          time,
          value,
          rawValue,
          percent: 0
        };
        if (easing) {
          kf.easing = easing;
          kf.easingFunc = isFunction(easing) ? easing : easing_default[easing] || createCubicEasingFunc(easing);
        }
        keyframes.push(kf);
        return kf;
      };
      Track2.prototype.prepare = function(maxTime, additiveTrack) {
        var kfs = this.keyframes;
        if (this._needsSort) {
          kfs.sort(function(a, b) {
            return a.time - b.time;
          });
        }
        var valType = this.valType;
        var kfsLen = kfs.length;
        var lastKf = kfs[kfsLen - 1];
        var isDiscrete = this.discrete;
        var isArr = isArrayValueType(valType);
        var isGradient2 = isGradientValueType(valType);
        for (var i = 0; i < kfsLen; i++) {
          var kf = kfs[i];
          var value = kf.value;
          var lastValue = lastKf.value;
          kf.percent = kf.time / maxTime;
          if (!isDiscrete) {
            if (isArr && i !== kfsLen - 1) {
              fillArray(value, lastValue, valType);
            } else if (isGradient2) {
              fillColorStops(value.colorStops, lastValue.colorStops);
            }
          }
        }
        if (!isDiscrete && valType !== VALUE_TYPE_RADIAL_GRADIENT && additiveTrack && this.needsAnimate() && additiveTrack.needsAnimate() && valType === additiveTrack.valType && !additiveTrack._finished) {
          this._additiveTrack = additiveTrack;
          var startValue = kfs[0].value;
          for (var i = 0; i < kfsLen; i++) {
            if (valType === VALUE_TYPE_NUMBER) {
              kfs[i].additiveValue = kfs[i].value - startValue;
            } else if (valType === VALUE_TYPE_COLOR) {
              kfs[i].additiveValue = add1DArray([], kfs[i].value, startValue, -1);
            } else if (isArrayValueType(valType)) {
              kfs[i].additiveValue = valType === VALUE_TYPE_1D_ARRAY ? add1DArray([], kfs[i].value, startValue, -1) : add2DArray([], kfs[i].value, startValue, -1);
            }
          }
        }
      };
      Track2.prototype.step = function(target, percent) {
        if (this._finished) {
          return;
        }
        if (this._additiveTrack && this._additiveTrack._finished) {
          this._additiveTrack = null;
        }
        var isAdditive = this._additiveTrack != null;
        var valueKey = isAdditive ? "additiveValue" : "value";
        var valType = this.valType;
        var keyframes = this.keyframes;
        var kfsNum = keyframes.length;
        var propName = this.propName;
        var isValueColor = valType === VALUE_TYPE_COLOR;
        var frameIdx;
        var lastFrame = this._lastFr;
        var mathMin4 = Math.min;
        var frame;
        var nextFrame;
        if (kfsNum === 1) {
          frame = nextFrame = keyframes[0];
        } else {
          if (percent < 0) {
            frameIdx = 0;
          } else if (percent < this._lastFrP) {
            var start2 = mathMin4(lastFrame + 1, kfsNum - 1);
            for (frameIdx = start2; frameIdx >= 0; frameIdx--) {
              if (keyframes[frameIdx].percent <= percent) {
                break;
              }
            }
            frameIdx = mathMin4(frameIdx, kfsNum - 2);
          } else {
            for (frameIdx = lastFrame; frameIdx < kfsNum; frameIdx++) {
              if (keyframes[frameIdx].percent > percent) {
                break;
              }
            }
            frameIdx = mathMin4(frameIdx - 1, kfsNum - 2);
          }
          nextFrame = keyframes[frameIdx + 1];
          frame = keyframes[frameIdx];
        }
        if (!(frame && nextFrame)) {
          return;
        }
        this._lastFr = frameIdx;
        this._lastFrP = percent;
        var interval = nextFrame.percent - frame.percent;
        var w = interval === 0 ? 1 : mathMin4((percent - frame.percent) / interval, 1);
        if (nextFrame.easingFunc) {
          w = nextFrame.easingFunc(w);
        }
        var targetArr = isAdditive ? this._additiveValue : isValueColor ? tmpRgba : target[propName];
        if ((isArrayValueType(valType) || isValueColor) && !targetArr) {
          targetArr = this._additiveValue = [];
        }
        if (this.discrete) {
          target[propName] = w < 1 ? frame.rawValue : nextFrame.rawValue;
        } else if (isArrayValueType(valType)) {
          valType === VALUE_TYPE_1D_ARRAY ? interpolate1DArray(targetArr, frame[valueKey], nextFrame[valueKey], w) : interpolate2DArray(targetArr, frame[valueKey], nextFrame[valueKey], w);
        } else if (isGradientValueType(valType)) {
          var val = frame[valueKey];
          var nextVal_1 = nextFrame[valueKey];
          var isLinearGradient_1 = valType === VALUE_TYPE_LINEAR_GRADIENT;
          target[propName] = {
            type: isLinearGradient_1 ? "linear" : "radial",
            x: interpolateNumber(val.x, nextVal_1.x, w),
            y: interpolateNumber(val.y, nextVal_1.y, w),
            colorStops: map(val.colorStops, function(colorStop, idx) {
              var nextColorStop = nextVal_1.colorStops[idx];
              return {
                offset: interpolateNumber(colorStop.offset, nextColorStop.offset, w),
                color: rgba2String(interpolate1DArray([], colorStop.color, nextColorStop.color, w))
              };
            }),
            global: nextVal_1.global
          };
          if (isLinearGradient_1) {
            target[propName].x2 = interpolateNumber(val.x2, nextVal_1.x2, w);
            target[propName].y2 = interpolateNumber(val.y2, nextVal_1.y2, w);
          } else {
            target[propName].r = interpolateNumber(val.r, nextVal_1.r, w);
          }
        } else if (isValueColor) {
          interpolate1DArray(targetArr, frame[valueKey], nextFrame[valueKey], w);
          if (!isAdditive) {
            target[propName] = rgba2String(targetArr);
          }
        } else {
          var value = interpolateNumber(frame[valueKey], nextFrame[valueKey], w);
          if (isAdditive) {
            this._additiveValue = value;
          } else {
            target[propName] = value;
          }
        }
        if (isAdditive) {
          this._addToTarget(target);
        }
      };
      Track2.prototype._addToTarget = function(target) {
        var valType = this.valType;
        var propName = this.propName;
        var additiveValue = this._additiveValue;
        if (valType === VALUE_TYPE_NUMBER) {
          target[propName] = target[propName] + additiveValue;
        } else if (valType === VALUE_TYPE_COLOR) {
          parse(target[propName], tmpRgba);
          add1DArray(tmpRgba, tmpRgba, additiveValue, 1);
          target[propName] = rgba2String(tmpRgba);
        } else if (valType === VALUE_TYPE_1D_ARRAY) {
          add1DArray(target[propName], target[propName], additiveValue, 1);
        } else if (valType === VALUE_TYPE_2D_ARRAY) {
          add2DArray(target[propName], target[propName], additiveValue, 1);
        }
      };
      return Track2;
    }();
    Animator = function() {
      function Animator2(target, loop, allowDiscreteAnimation, additiveTo) {
        this._tracks = {};
        this._trackKeys = [];
        this._maxTime = 0;
        this._started = 0;
        this._clip = null;
        this._target = target;
        this._loop = loop;
        if (loop && additiveTo) {
          logError("Can' use additive animation on looped animation.");
          return;
        }
        this._additiveAnimators = additiveTo;
        this._allowDiscrete = allowDiscreteAnimation;
      }
      Animator2.prototype.getMaxTime = function() {
        return this._maxTime;
      };
      Animator2.prototype.getDelay = function() {
        return this._delay;
      };
      Animator2.prototype.getLoop = function() {
        return this._loop;
      };
      Animator2.prototype.getTarget = function() {
        return this._target;
      };
      Animator2.prototype.changeTarget = function(target) {
        this._target = target;
      };
      Animator2.prototype.when = function(time, props, easing) {
        return this.whenWithKeys(time, props, keys(props), easing);
      };
      Animator2.prototype.whenWithKeys = function(time, props, propNames, easing) {
        var tracks = this._tracks;
        for (var i = 0; i < propNames.length; i++) {
          var propName = propNames[i];
          var track = tracks[propName];
          if (!track) {
            track = tracks[propName] = new Track(propName);
            var initialValue = void 0;
            var additiveTrack = this._getAdditiveTrack(propName);
            if (additiveTrack) {
              var addtiveTrackKfs = additiveTrack.keyframes;
              var lastFinalKf = addtiveTrackKfs[addtiveTrackKfs.length - 1];
              initialValue = lastFinalKf && lastFinalKf.value;
              if (additiveTrack.valType === VALUE_TYPE_COLOR && initialValue) {
                initialValue = rgba2String(initialValue);
              }
            } else {
              initialValue = this._target[propName];
            }
            if (initialValue == null) {
              continue;
            }
            if (time > 0) {
              track.addKeyframe(0, cloneValue(initialValue), easing);
            }
            this._trackKeys.push(propName);
          }
          track.addKeyframe(time, cloneValue(props[propName]), easing);
        }
        this._maxTime = Math.max(this._maxTime, time);
        return this;
      };
      Animator2.prototype.pause = function() {
        this._clip.pause();
        this._paused = true;
      };
      Animator2.prototype.resume = function() {
        this._clip.resume();
        this._paused = false;
      };
      Animator2.prototype.isPaused = function() {
        return !!this._paused;
      };
      Animator2.prototype.duration = function(duration) {
        this._maxTime = duration;
        this._force = true;
        return this;
      };
      Animator2.prototype._doneCallback = function() {
        this._setTracksFinished();
        this._clip = null;
        var doneList = this._doneCbs;
        if (doneList) {
          var len2 = doneList.length;
          for (var i = 0; i < len2; i++) {
            doneList[i].call(this);
          }
        }
      };
      Animator2.prototype._abortedCallback = function() {
        this._setTracksFinished();
        var animation = this.animation;
        var abortedList = this._abortedCbs;
        if (animation) {
          animation.removeClip(this._clip);
        }
        this._clip = null;
        if (abortedList) {
          for (var i = 0; i < abortedList.length; i++) {
            abortedList[i].call(this);
          }
        }
      };
      Animator2.prototype._setTracksFinished = function() {
        var tracks = this._tracks;
        var tracksKeys = this._trackKeys;
        for (var i = 0; i < tracksKeys.length; i++) {
          tracks[tracksKeys[i]].setFinished();
        }
      };
      Animator2.prototype._getAdditiveTrack = function(trackName) {
        var additiveTrack;
        var additiveAnimators = this._additiveAnimators;
        if (additiveAnimators) {
          for (var i = 0; i < additiveAnimators.length; i++) {
            var track = additiveAnimators[i].getTrack(trackName);
            if (track) {
              additiveTrack = track;
            }
          }
        }
        return additiveTrack;
      };
      Animator2.prototype.start = function(easing) {
        if (this._started > 0) {
          return;
        }
        this._started = 1;
        var self2 = this;
        var tracks = [];
        var maxTime = this._maxTime || 0;
        for (var i = 0; i < this._trackKeys.length; i++) {
          var propName = this._trackKeys[i];
          var track = this._tracks[propName];
          var additiveTrack = this._getAdditiveTrack(propName);
          var kfs = track.keyframes;
          var kfsNum = kfs.length;
          track.prepare(maxTime, additiveTrack);
          if (track.needsAnimate()) {
            if (!this._allowDiscrete && track.discrete) {
              var lastKf = kfs[kfsNum - 1];
              if (lastKf) {
                self2._target[track.propName] = lastKf.rawValue;
              }
              track.setFinished();
            } else {
              tracks.push(track);
            }
          }
        }
        if (tracks.length || this._force) {
          var clip = new Clip_default({
            life: maxTime,
            loop: this._loop,
            delay: this._delay || 0,
            onframe: function(percent) {
              self2._started = 2;
              var additiveAnimators = self2._additiveAnimators;
              if (additiveAnimators) {
                var stillHasAdditiveAnimator = false;
                for (var i2 = 0; i2 < additiveAnimators.length; i2++) {
                  if (additiveAnimators[i2]._clip) {
                    stillHasAdditiveAnimator = true;
                    break;
                  }
                }
                if (!stillHasAdditiveAnimator) {
                  self2._additiveAnimators = null;
                }
              }
              for (var i2 = 0; i2 < tracks.length; i2++) {
                tracks[i2].step(self2._target, percent);
              }
              var onframeList = self2._onframeCbs;
              if (onframeList) {
                for (var i2 = 0; i2 < onframeList.length; i2++) {
                  onframeList[i2](self2._target, percent);
                }
              }
            },
            ondestroy: function() {
              self2._doneCallback();
            }
          });
          this._clip = clip;
          if (this.animation) {
            this.animation.addClip(clip);
          }
          if (easing) {
            clip.setEasing(easing);
          }
        } else {
          this._doneCallback();
        }
        return this;
      };
      Animator2.prototype.stop = function(forwardToLast) {
        if (!this._clip) {
          return;
        }
        var clip = this._clip;
        if (forwardToLast) {
          clip.onframe(1);
        }
        this._abortedCallback();
      };
      Animator2.prototype.delay = function(time) {
        this._delay = time;
        return this;
      };
      Animator2.prototype.during = function(cb) {
        if (cb) {
          if (!this._onframeCbs) {
            this._onframeCbs = [];
          }
          this._onframeCbs.push(cb);
        }
        return this;
      };
      Animator2.prototype.done = function(cb) {
        if (cb) {
          if (!this._doneCbs) {
            this._doneCbs = [];
          }
          this._doneCbs.push(cb);
        }
        return this;
      };
      Animator2.prototype.aborted = function(cb) {
        if (cb) {
          if (!this._abortedCbs) {
            this._abortedCbs = [];
          }
          this._abortedCbs.push(cb);
        }
        return this;
      };
      Animator2.prototype.getClip = function() {
        return this._clip;
      };
      Animator2.prototype.getTrack = function(propName) {
        return this._tracks[propName];
      };
      Animator2.prototype.getTracks = function() {
        var _this = this;
        return map(this._trackKeys, function(key) {
          return _this._tracks[key];
        });
      };
      Animator2.prototype.stopTracks = function(propNames, forwardToLast) {
        if (!propNames.length || !this._clip) {
          return true;
        }
        var tracks = this._tracks;
        var tracksKeys = this._trackKeys;
        for (var i = 0; i < propNames.length; i++) {
          var track = tracks[propNames[i]];
          if (track && !track.isFinished()) {
            if (forwardToLast) {
              track.step(this._target, 1);
            } else if (this._started === 1) {
              track.step(this._target, 0);
            }
            track.setFinished();
          }
        }
        var allAborted = true;
        for (var i = 0; i < tracksKeys.length; i++) {
          if (!tracks[tracksKeys[i]].isFinished()) {
            allAborted = false;
            break;
          }
        }
        if (allAborted) {
          this._abortedCallback();
        }
        return allAborted;
      };
      Animator2.prototype.saveTo = function(target, trackKeys, firstOrLast) {
        if (!target) {
          return;
        }
        trackKeys = trackKeys || this._trackKeys;
        for (var i = 0; i < trackKeys.length; i++) {
          var propName = trackKeys[i];
          var track = this._tracks[propName];
          if (!track || track.isFinished()) {
            continue;
          }
          var kfs = track.keyframes;
          var kf = kfs[firstOrLast ? 0 : kfs.length - 1];
          if (kf) {
            target[propName] = cloneValue(kf.rawValue);
          }
        }
      };
      Animator2.prototype.__changeFinalValue = function(finalProps, trackKeys) {
        trackKeys = trackKeys || keys(finalProps);
        for (var i = 0; i < trackKeys.length; i++) {
          var propName = trackKeys[i];
          var track = this._tracks[propName];
          if (!track) {
            continue;
          }
          var kfs = track.keyframes;
          if (kfs.length > 1) {
            var lastKf = kfs.pop();
            track.addKeyframe(lastKf.time, finalProps[propName]);
            track.prepare(this._maxTime, track.getAdditiveTrack());
          }
        }
      };
      return Animator2;
    }();
    Animator_default = Animator;
  }
});

// node_modules/zrender/lib/animation/Animation.js
function getTime() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var Animation, Animation_default;
var init_Animation = __esm({
  "node_modules/zrender/lib/animation/Animation.js"() {
    init_tslib_es6();
    init_Eventful();
    init_requestAnimationFrame();
    init_Animator();
    Animation = function(_super) {
      __extends(Animation2, _super);
      function Animation2(opts) {
        var _this = _super.call(this) || this;
        _this._running = false;
        _this._time = 0;
        _this._pausedTime = 0;
        _this._pauseStart = 0;
        _this._paused = false;
        opts = opts || {};
        _this.stage = opts.stage || {};
        return _this;
      }
      Animation2.prototype.addClip = function(clip) {
        if (clip.animation) {
          this.removeClip(clip);
        }
        if (!this._head) {
          this._head = this._tail = clip;
        } else {
          this._tail.next = clip;
          clip.prev = this._tail;
          clip.next = null;
          this._tail = clip;
        }
        clip.animation = this;
      };
      Animation2.prototype.addAnimator = function(animator) {
        animator.animation = this;
        var clip = animator.getClip();
        if (clip) {
          this.addClip(clip);
        }
      };
      Animation2.prototype.removeClip = function(clip) {
        if (!clip.animation) {
          return;
        }
        var prev = clip.prev;
        var next = clip.next;
        if (prev) {
          prev.next = next;
        } else {
          this._head = next;
        }
        if (next) {
          next.prev = prev;
        } else {
          this._tail = prev;
        }
        clip.next = clip.prev = clip.animation = null;
      };
      Animation2.prototype.removeAnimator = function(animator) {
        var clip = animator.getClip();
        if (clip) {
          this.removeClip(clip);
        }
        animator.animation = null;
      };
      Animation2.prototype.update = function(notTriggerFrameAndStageUpdate) {
        var time = getTime() - this._pausedTime;
        var delta = time - this._time;
        var clip = this._head;
        while (clip) {
          var nextClip = clip.next;
          var finished = clip.step(time, delta);
          if (finished) {
            clip.ondestroy();
            this.removeClip(clip);
            clip = nextClip;
          } else {
            clip = nextClip;
          }
        }
        this._time = time;
        if (!notTriggerFrameAndStageUpdate) {
          this.trigger("frame", delta);
          this.stage.update && this.stage.update();
        }
      };
      Animation2.prototype._startLoop = function() {
        var self2 = this;
        this._running = true;
        function step() {
          if (self2._running) {
            requestAnimationFrame_default(step);
            !self2._paused && self2.update();
          }
        }
        requestAnimationFrame_default(step);
      };
      Animation2.prototype.start = function() {
        if (this._running) {
          return;
        }
        this._time = getTime();
        this._pausedTime = 0;
        this._startLoop();
      };
      Animation2.prototype.stop = function() {
        this._running = false;
      };
      Animation2.prototype.pause = function() {
        if (!this._paused) {
          this._pauseStart = getTime();
          this._paused = true;
        }
      };
      Animation2.prototype.resume = function() {
        if (this._paused) {
          this._pausedTime += getTime() - this._pauseStart;
          this._paused = false;
        }
      };
      Animation2.prototype.clear = function() {
        var clip = this._head;
        while (clip) {
          var nextClip = clip.next;
          clip.prev = clip.next = clip.animation = null;
          clip = nextClip;
        }
        this._head = this._tail = null;
      };
      Animation2.prototype.isFinished = function() {
        return this._head == null;
      };
      Animation2.prototype.animate = function(target, options) {
        options = options || {};
        this.start();
        var animator = new Animator_default(target, options.loop);
        this.addAnimator(animator);
        return animator;
      };
      return Animation2;
    }(Eventful_default);
    Animation_default = Animation;
  }
});

// node_modules/zrender/lib/dom/HandlerProxy.js
function isPointerFromTouch(event) {
  var pointerType = event.pointerType;
  return pointerType === "pen" || pointerType === "touch";
}
function setTouchTimer(scope) {
  scope.touching = true;
  if (scope.touchTimer != null) {
    clearTimeout(scope.touchTimer);
    scope.touchTimer = null;
  }
  scope.touchTimer = setTimeout(function() {
    scope.touching = false;
    scope.touchTimer = null;
  }, 700);
}
function markTouch(event) {
  event && (event.zrByTouch = true);
}
function normalizeGlobalEvent(instance, event) {
  return normalizeEvent(instance.dom, new FakeGlobalEvent(instance, event), true);
}
function isLocalEl(instance, el) {
  var elTmp = el;
  var isLocal = false;
  while (elTmp && elTmp.nodeType !== 9 && !(isLocal = elTmp.domBelongToZr || elTmp !== el && elTmp === instance.painterRoot)) {
    elTmp = elTmp.parentNode;
  }
  return isLocal;
}
function mountLocalDOMEventListeners(instance, scope) {
  var domHandlers = scope.domHandlers;
  if (env_default.pointerEventsSupported) {
    each(localNativeListenerNames.pointer, function(nativeEventName) {
      mountSingleDOMEventListener(scope, nativeEventName, function(event) {
        domHandlers[nativeEventName].call(instance, event);
      });
    });
  } else {
    if (env_default.touchEventsSupported) {
      each(localNativeListenerNames.touch, function(nativeEventName) {
        mountSingleDOMEventListener(scope, nativeEventName, function(event) {
          domHandlers[nativeEventName].call(instance, event);
          setTouchTimer(scope);
        });
      });
    }
    each(localNativeListenerNames.mouse, function(nativeEventName) {
      mountSingleDOMEventListener(scope, nativeEventName, function(event) {
        event = getNativeEvent(event);
        if (!scope.touching) {
          domHandlers[nativeEventName].call(instance, event);
        }
      });
    });
  }
}
function mountGlobalDOMEventListeners(instance, scope) {
  if (env_default.pointerEventsSupported) {
    each(globalNativeListenerNames.pointer, mount);
  } else if (!env_default.touchEventsSupported) {
    each(globalNativeListenerNames.mouse, mount);
  }
  function mount(nativeEventName) {
    function nativeEventListener(event) {
      event = getNativeEvent(event);
      if (!isLocalEl(instance, event.target)) {
        event = normalizeGlobalEvent(instance, event);
        scope.domHandlers[nativeEventName].call(instance, event);
      }
    }
    mountSingleDOMEventListener(scope, nativeEventName, nativeEventListener, {
      capture: true
    });
  }
}
function mountSingleDOMEventListener(scope, nativeEventName, listener, opt) {
  scope.mounted[nativeEventName] = listener;
  scope.listenerOpts[nativeEventName] = opt;
  addEventListener(scope.domTarget, nativeEventName, listener, opt);
}
function unmountDOMEventListeners(scope) {
  var mounted = scope.mounted;
  for (var nativeEventName in mounted) {
    if (mounted.hasOwnProperty(nativeEventName)) {
      removeEventListener(scope.domTarget, nativeEventName, mounted[nativeEventName], scope.listenerOpts[nativeEventName]);
    }
  }
  scope.mounted = {};
}
var TOUCH_CLICK_DELAY, globalEventSupported, localNativeListenerNames, globalNativeListenerNames, wheelEventSupported, FakeGlobalEvent, localDOMHandlers, globalDOMHandlers, DOMHandlerScope, HandlerDomProxy, HandlerProxy_default;
var init_HandlerProxy = __esm({
  "node_modules/zrender/lib/dom/HandlerProxy.js"() {
    init_tslib_es6();
    init_event();
    init_util();
    init_Eventful();
    init_env();
    TOUCH_CLICK_DELAY = 300;
    globalEventSupported = env_default.domSupported;
    localNativeListenerNames = function() {
      var mouseHandlerNames = ["click", "dblclick", "mousewheel", "wheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"];
      var touchHandlerNames = ["touchstart", "touchend", "touchmove"];
      var pointerEventNameMap = {
        pointerdown: 1,
        pointerup: 1,
        pointermove: 1,
        pointerout: 1
      };
      var pointerHandlerNames = map(mouseHandlerNames, function(name) {
        var nm = name.replace("mouse", "pointer");
        return pointerEventNameMap.hasOwnProperty(nm) ? nm : name;
      });
      return {
        mouse: mouseHandlerNames,
        touch: touchHandlerNames,
        pointer: pointerHandlerNames
      };
    }();
    globalNativeListenerNames = {
      mouse: ["mousemove", "mouseup"],
      pointer: ["pointermove", "pointerup"]
    };
    wheelEventSupported = false;
    FakeGlobalEvent = /* @__PURE__ */ function() {
      function FakeGlobalEvent2(instance, event) {
        this.stopPropagation = noop;
        this.stopImmediatePropagation = noop;
        this.preventDefault = noop;
        this.type = event.type;
        this.target = this.currentTarget = instance.dom;
        this.pointerType = event.pointerType;
        this.clientX = event.clientX;
        this.clientY = event.clientY;
      }
      return FakeGlobalEvent2;
    }();
    localDOMHandlers = {
      mousedown: function(event) {
        event = normalizeEvent(this.dom, event);
        this.__mayPointerCapture = [event.zrX, event.zrY];
        this.trigger("mousedown", event);
      },
      mousemove: function(event) {
        event = normalizeEvent(this.dom, event);
        var downPoint = this.__mayPointerCapture;
        if (downPoint && (event.zrX !== downPoint[0] || event.zrY !== downPoint[1])) {
          this.__togglePointerCapture(true);
        }
        this.trigger("mousemove", event);
      },
      mouseup: function(event) {
        event = normalizeEvent(this.dom, event);
        this.__togglePointerCapture(false);
        this.trigger("mouseup", event);
      },
      mouseout: function(event) {
        event = normalizeEvent(this.dom, event);
        var element = event.toElement || event.relatedTarget;
        if (!isLocalEl(this, element)) {
          if (this.__pointerCapturing) {
            event.zrEventControl = "no_globalout";
          }
          this.trigger("mouseout", event);
        }
      },
      wheel: function(event) {
        wheelEventSupported = true;
        event = normalizeEvent(this.dom, event);
        this.trigger("mousewheel", event);
      },
      mousewheel: function(event) {
        if (wheelEventSupported) {
          return;
        }
        event = normalizeEvent(this.dom, event);
        this.trigger("mousewheel", event);
      },
      touchstart: function(event) {
        event = normalizeEvent(this.dom, event);
        markTouch(event);
        this.__lastTouchMoment = /* @__PURE__ */ new Date();
        this.handler.processGesture(event, "start");
        localDOMHandlers.mousemove.call(this, event);
        localDOMHandlers.mousedown.call(this, event);
      },
      touchmove: function(event) {
        event = normalizeEvent(this.dom, event);
        markTouch(event);
        this.handler.processGesture(event, "change");
        localDOMHandlers.mousemove.call(this, event);
      },
      touchend: function(event) {
        event = normalizeEvent(this.dom, event);
        markTouch(event);
        this.handler.processGesture(event, "end");
        localDOMHandlers.mouseup.call(this, event);
        if (+/* @__PURE__ */ new Date() - +this.__lastTouchMoment < TOUCH_CLICK_DELAY) {
          localDOMHandlers.click.call(this, event);
        }
      },
      pointerdown: function(event) {
        localDOMHandlers.mousedown.call(this, event);
      },
      pointermove: function(event) {
        if (!isPointerFromTouch(event)) {
          localDOMHandlers.mousemove.call(this, event);
        }
      },
      pointerup: function(event) {
        localDOMHandlers.mouseup.call(this, event);
      },
      pointerout: function(event) {
        if (!isPointerFromTouch(event)) {
          localDOMHandlers.mouseout.call(this, event);
        }
      }
    };
    each(["click", "dblclick", "contextmenu"], function(name) {
      localDOMHandlers[name] = function(event) {
        event = normalizeEvent(this.dom, event);
        this.trigger(name, event);
      };
    });
    globalDOMHandlers = {
      pointermove: function(event) {
        if (!isPointerFromTouch(event)) {
          globalDOMHandlers.mousemove.call(this, event);
        }
      },
      pointerup: function(event) {
        globalDOMHandlers.mouseup.call(this, event);
      },
      mousemove: function(event) {
        this.trigger("mousemove", event);
      },
      mouseup: function(event) {
        var pointerCaptureReleasing = this.__pointerCapturing;
        this.__togglePointerCapture(false);
        this.trigger("mouseup", event);
        if (pointerCaptureReleasing) {
          event.zrEventControl = "only_globalout";
          this.trigger("mouseout", event);
        }
      }
    };
    DOMHandlerScope = /* @__PURE__ */ function() {
      function DOMHandlerScope2(domTarget, domHandlers) {
        this.mounted = {};
        this.listenerOpts = {};
        this.touching = false;
        this.domTarget = domTarget;
        this.domHandlers = domHandlers;
      }
      return DOMHandlerScope2;
    }();
    HandlerDomProxy = function(_super) {
      __extends(HandlerDomProxy2, _super);
      function HandlerDomProxy2(dom, painterRoot) {
        var _this = _super.call(this) || this;
        _this.__pointerCapturing = false;
        _this.dom = dom;
        _this.painterRoot = painterRoot;
        _this._localHandlerScope = new DOMHandlerScope(dom, localDOMHandlers);
        if (globalEventSupported) {
          _this._globalHandlerScope = new DOMHandlerScope(document, globalDOMHandlers);
        }
        mountLocalDOMEventListeners(_this, _this._localHandlerScope);
        return _this;
      }
      HandlerDomProxy2.prototype.dispose = function() {
        unmountDOMEventListeners(this._localHandlerScope);
        if (globalEventSupported) {
          unmountDOMEventListeners(this._globalHandlerScope);
        }
      };
      HandlerDomProxy2.prototype.setCursor = function(cursorStyle) {
        this.dom.style && (this.dom.style.cursor = cursorStyle || "default");
      };
      HandlerDomProxy2.prototype.__togglePointerCapture = function(isPointerCapturing) {
        this.__mayPointerCapture = null;
        if (globalEventSupported && +this.__pointerCapturing ^ +isPointerCapturing) {
          this.__pointerCapturing = isPointerCapturing;
          var globalHandlerScope = this._globalHandlerScope;
          isPointerCapturing ? mountGlobalDOMEventListeners(this, globalHandlerScope) : unmountDOMEventListeners(globalHandlerScope);
        }
      };
      return HandlerDomProxy2;
    }(Eventful_default);
    HandlerProxy_default = HandlerDomProxy;
  }
});

// node_modules/zrender/lib/config.js
var dpr, devicePixelRatio, DARK_MODE_THRESHOLD, DARK_LABEL_COLOR, LIGHT_LABEL_COLOR, LIGHTER_LABEL_COLOR;
var init_config = __esm({
  "node_modules/zrender/lib/config.js"() {
    init_env();
    dpr = 1;
    if (env_default.hasGlobalWindow) {
      dpr = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1);
    }
    devicePixelRatio = dpr;
    DARK_MODE_THRESHOLD = 0.4;
    DARK_LABEL_COLOR = "#333";
    LIGHT_LABEL_COLOR = "#ccc";
    LIGHTER_LABEL_COLOR = "#eee";
  }
});

// node_modules/zrender/lib/core/Transformable.js
function isNotAroundZero2(val) {
  return val > EPSILON3 || val < -EPSILON3;
}
function copyTransform(target, source) {
  for (var i = 0; i < TRANSFORMABLE_PROPS.length; i++) {
    var propName = TRANSFORMABLE_PROPS[i];
    target[propName] = source[propName];
  }
}
var mIdentity, EPSILON3, scaleTmp, tmpTransform, originTransform, abs, Transformable, TRANSFORMABLE_PROPS, Transformable_default;
var init_Transformable = __esm({
  "node_modules/zrender/lib/core/Transformable.js"() {
    init_matrix();
    init_vector();
    mIdentity = identity;
    EPSILON3 = 5e-5;
    scaleTmp = [];
    tmpTransform = [];
    originTransform = create2();
    abs = Math.abs;
    Transformable = function() {
      function Transformable2() {
      }
      Transformable2.prototype.getLocalTransform = function(m) {
        return Transformable2.getLocalTransform(this, m);
      };
      Transformable2.prototype.setPosition = function(arr) {
        this.x = arr[0];
        this.y = arr[1];
      };
      Transformable2.prototype.setScale = function(arr) {
        this.scaleX = arr[0];
        this.scaleY = arr[1];
      };
      Transformable2.prototype.setSkew = function(arr) {
        this.skewX = arr[0];
        this.skewY = arr[1];
      };
      Transformable2.prototype.setOrigin = function(arr) {
        this.originX = arr[0];
        this.originY = arr[1];
      };
      Transformable2.prototype.needLocalTransform = function() {
        return isNotAroundZero2(this.rotation) || isNotAroundZero2(this.x) || isNotAroundZero2(this.y) || isNotAroundZero2(this.scaleX - 1) || isNotAroundZero2(this.scaleY - 1) || isNotAroundZero2(this.skewX) || isNotAroundZero2(this.skewY);
      };
      Transformable2.prototype.updateTransform = function() {
        var parentTransform = this.parent && this.parent.transform;
        var needLocalTransform = this.needLocalTransform();
        var m = this.transform;
        if (!(needLocalTransform || parentTransform)) {
          if (m) {
            mIdentity(m);
            this.invTransform = null;
          }
          return;
        }
        m = m || create2();
        if (needLocalTransform) {
          this.getLocalTransform(m);
        } else {
          mIdentity(m);
        }
        if (parentTransform) {
          if (needLocalTransform) {
            mul2(m, parentTransform, m);
          } else {
            copy2(m, parentTransform);
          }
        }
        this.transform = m;
        this._resolveGlobalScaleRatio(m);
      };
      Transformable2.prototype._resolveGlobalScaleRatio = function(m) {
        var globalScaleRatio = this.globalScaleRatio;
        if (globalScaleRatio != null && globalScaleRatio !== 1) {
          this.getGlobalScale(scaleTmp);
          var relX = scaleTmp[0] < 0 ? -1 : 1;
          var relY = scaleTmp[1] < 0 ? -1 : 1;
          var sx = ((scaleTmp[0] - relX) * globalScaleRatio + relX) / scaleTmp[0] || 0;
          var sy = ((scaleTmp[1] - relY) * globalScaleRatio + relY) / scaleTmp[1] || 0;
          m[0] *= sx;
          m[1] *= sx;
          m[2] *= sy;
          m[3] *= sy;
        }
        this.invTransform = this.invTransform || create2();
        invert(this.invTransform, m);
      };
      Transformable2.prototype.getComputedTransform = function() {
        var transformNode = this;
        var ancestors = [];
        while (transformNode) {
          ancestors.push(transformNode);
          transformNode = transformNode.parent;
        }
        while (transformNode = ancestors.pop()) {
          transformNode.updateTransform();
        }
        return this.transform;
      };
      Transformable2.prototype.setLocalTransform = function(m) {
        if (!m) {
          return;
        }
        var sx = m[0] * m[0] + m[1] * m[1];
        var sy = m[2] * m[2] + m[3] * m[3];
        var rotation = Math.atan2(m[1], m[0]);
        var shearX = Math.PI / 2 + rotation - Math.atan2(m[3], m[2]);
        sy = Math.sqrt(sy) * Math.cos(shearX);
        sx = Math.sqrt(sx);
        this.skewX = shearX;
        this.skewY = 0;
        this.rotation = -rotation;
        this.x = +m[4];
        this.y = +m[5];
        this.scaleX = sx;
        this.scaleY = sy;
        this.originX = 0;
        this.originY = 0;
      };
      Transformable2.prototype.decomposeTransform = function() {
        if (!this.transform) {
          return;
        }
        var parent = this.parent;
        var m = this.transform;
        if (parent && parent.transform) {
          parent.invTransform = parent.invTransform || create2();
          mul2(tmpTransform, parent.invTransform, m);
          m = tmpTransform;
        }
        var ox = this.originX;
        var oy = this.originY;
        if (ox || oy) {
          originTransform[4] = ox;
          originTransform[5] = oy;
          mul2(tmpTransform, m, originTransform);
          tmpTransform[4] -= ox;
          tmpTransform[5] -= oy;
          m = tmpTransform;
        }
        this.setLocalTransform(m);
      };
      Transformable2.prototype.getGlobalScale = function(out) {
        var m = this.transform;
        out = out || [];
        if (!m) {
          out[0] = 1;
          out[1] = 1;
          return out;
        }
        out[0] = Math.sqrt(m[0] * m[0] + m[1] * m[1]);
        out[1] = Math.sqrt(m[2] * m[2] + m[3] * m[3]);
        if (m[0] < 0) {
          out[0] = -out[0];
        }
        if (m[3] < 0) {
          out[1] = -out[1];
        }
        return out;
      };
      Transformable2.prototype.transformCoordToLocal = function(x, y) {
        var v2 = [x, y];
        var invTransform = this.invTransform;
        if (invTransform) {
          applyTransform(v2, v2, invTransform);
        }
        return v2;
      };
      Transformable2.prototype.transformCoordToGlobal = function(x, y) {
        var v2 = [x, y];
        var transform = this.transform;
        if (transform) {
          applyTransform(v2, v2, transform);
        }
        return v2;
      };
      Transformable2.prototype.getLineScale = function() {
        var m = this.transform;
        return m && abs(m[0] - 1) > 1e-10 && abs(m[3] - 1) > 1e-10 ? Math.sqrt(abs(m[0] * m[3] - m[2] * m[1])) : 1;
      };
      Transformable2.prototype.copyTransform = function(source) {
        copyTransform(this, source);
      };
      Transformable2.getLocalTransform = function(target, m) {
        m = m || [];
        var ox = target.originX || 0;
        var oy = target.originY || 0;
        var sx = target.scaleX;
        var sy = target.scaleY;
        var ax = target.anchorX;
        var ay = target.anchorY;
        var rotation = target.rotation || 0;
        var x = target.x;
        var y = target.y;
        var skewX = target.skewX ? Math.tan(target.skewX) : 0;
        var skewY = target.skewY ? Math.tan(-target.skewY) : 0;
        if (ox || oy || ax || ay) {
          var dx = ox + ax;
          var dy = oy + ay;
          m[4] = -dx * sx - skewX * dy * sy;
          m[5] = -dy * sy - skewY * dx * sx;
        } else {
          m[4] = m[5] = 0;
        }
        m[0] = sx;
        m[3] = sy;
        m[1] = skewY * sx;
        m[2] = skewX * sy;
        rotation && rotate(m, m, rotation);
        m[4] += ox + x;
        m[5] += oy + y;
        return m;
      };
      Transformable2.initDefaultProps = function() {
        var proto = Transformable2.prototype;
        proto.scaleX = proto.scaleY = proto.globalScaleRatio = 1;
        proto.x = proto.y = proto.originX = proto.originY = proto.skewX = proto.skewY = proto.rotation = proto.anchorX = proto.anchorY = 0;
      }();
      return Transformable2;
    }();
    TRANSFORMABLE_PROPS = ["x", "y", "originX", "originY", "anchorX", "anchorY", "rotation", "scaleX", "scaleY", "skewX", "skewY"];
    Transformable_default = Transformable;
  }
});

// node_modules/zrender/lib/contain/text.js
function getWidth(text, font) {
  font = font || DEFAULT_FONT;
  var cacheOfFont = textWidthCache[font];
  if (!cacheOfFont) {
    cacheOfFont = textWidthCache[font] = new LRU_default(500);
  }
  var width = cacheOfFont.get(text);
  if (width == null) {
    width = platformApi.measureText(text, font).width;
    cacheOfFont.put(text, width);
  }
  return width;
}
function innerGetBoundingRect(text, font, textAlign, textBaseline) {
  var width = getWidth(text, font);
  var height = getLineHeight(font);
  var x = adjustTextX(0, width, textAlign);
  var y = adjustTextY2(0, height, textBaseline);
  var rect = new BoundingRect_default(x, y, width, height);
  return rect;
}
function getBoundingRect(text, font, textAlign, textBaseline) {
  var textLines = ((text || "") + "").split("\n");
  var len2 = textLines.length;
  if (len2 === 1) {
    return innerGetBoundingRect(textLines[0], font, textAlign, textBaseline);
  } else {
    var uniondRect = new BoundingRect_default(0, 0, 0, 0);
    for (var i = 0; i < textLines.length; i++) {
      var rect = innerGetBoundingRect(textLines[i], font, textAlign, textBaseline);
      i === 0 ? uniondRect.copy(rect) : uniondRect.union(rect);
    }
    return uniondRect;
  }
}
function adjustTextX(x, width, textAlign) {
  if (textAlign === "right") {
    x -= width;
  } else if (textAlign === "center") {
    x -= width / 2;
  }
  return x;
}
function adjustTextY2(y, height, verticalAlign) {
  if (verticalAlign === "middle") {
    y -= height / 2;
  } else if (verticalAlign === "bottom") {
    y -= height;
  }
  return y;
}
function getLineHeight(font) {
  return getWidth("国", font);
}
function parsePercent(value, maxValue) {
  if (typeof value === "string") {
    if (value.lastIndexOf("%") >= 0) {
      return parseFloat(value) / 100 * maxValue;
    }
    return parseFloat(value);
  }
  return value;
}
function calculateTextPosition(out, opts, rect) {
  var textPosition = opts.position || "inside";
  var distance2 = opts.distance != null ? opts.distance : 5;
  var height = rect.height;
  var width = rect.width;
  var halfHeight = height / 2;
  var x = rect.x;
  var y = rect.y;
  var textAlign = "left";
  var textVerticalAlign = "top";
  if (textPosition instanceof Array) {
    x += parsePercent(textPosition[0], rect.width);
    y += parsePercent(textPosition[1], rect.height);
    textAlign = null;
    textVerticalAlign = null;
  } else {
    switch (textPosition) {
      case "left":
        x -= distance2;
        y += halfHeight;
        textAlign = "right";
        textVerticalAlign = "middle";
        break;
      case "right":
        x += distance2 + width;
        y += halfHeight;
        textVerticalAlign = "middle";
        break;
      case "top":
        x += width / 2;
        y -= distance2;
        textAlign = "center";
        textVerticalAlign = "bottom";
        break;
      case "bottom":
        x += width / 2;
        y += height + distance2;
        textAlign = "center";
        break;
      case "inside":
        x += width / 2;
        y += halfHeight;
        textAlign = "center";
        textVerticalAlign = "middle";
        break;
      case "insideLeft":
        x += distance2;
        y += halfHeight;
        textVerticalAlign = "middle";
        break;
      case "insideRight":
        x += width - distance2;
        y += halfHeight;
        textAlign = "right";
        textVerticalAlign = "middle";
        break;
      case "insideTop":
        x += width / 2;
        y += distance2;
        textAlign = "center";
        break;
      case "insideBottom":
        x += width / 2;
        y += height - distance2;
        textAlign = "center";
        textVerticalAlign = "bottom";
        break;
      case "insideTopLeft":
        x += distance2;
        y += distance2;
        break;
      case "insideTopRight":
        x += width - distance2;
        y += distance2;
        textAlign = "right";
        break;
      case "insideBottomLeft":
        x += distance2;
        y += height - distance2;
        textVerticalAlign = "bottom";
        break;
      case "insideBottomRight":
        x += width - distance2;
        y += height - distance2;
        textAlign = "right";
        textVerticalAlign = "bottom";
        break;
    }
  }
  out = out || {};
  out.x = x;
  out.y = y;
  out.align = textAlign;
  out.verticalAlign = textVerticalAlign;
  return out;
}
var textWidthCache;
var init_text = __esm({
  "node_modules/zrender/lib/contain/text.js"() {
    init_BoundingRect();
    init_LRU();
    init_platform();
    textWidthCache = {};
  }
});

// node_modules/zrender/lib/Element.js
function animateTo(animatable, target, cfg, animationProps, reverse) {
  cfg = cfg || {};
  var animators = [];
  animateToShallow(animatable, "", animatable, target, cfg, animationProps, animators, reverse);
  var finishCount = animators.length;
  var doneHappened = false;
  var cfgDone = cfg.done;
  var cfgAborted = cfg.aborted;
  var doneCb = function() {
    doneHappened = true;
    finishCount--;
    if (finishCount <= 0) {
      doneHappened ? cfgDone && cfgDone() : cfgAborted && cfgAborted();
    }
  };
  var abortedCb = function() {
    finishCount--;
    if (finishCount <= 0) {
      doneHappened ? cfgDone && cfgDone() : cfgAborted && cfgAborted();
    }
  };
  if (!finishCount) {
    cfgDone && cfgDone();
  }
  if (animators.length > 0 && cfg.during) {
    animators[0].during(function(target2, percent) {
      cfg.during(percent);
    });
  }
  for (var i = 0; i < animators.length; i++) {
    var animator = animators[i];
    if (doneCb) {
      animator.done(doneCb);
    }
    if (abortedCb) {
      animator.aborted(abortedCb);
    }
    if (cfg.force) {
      animator.duration(cfg.duration);
    }
    animator.start(cfg.easing);
  }
  return animators;
}
function copyArrShallow(source, target, len2) {
  for (var i = 0; i < len2; i++) {
    source[i] = target[i];
  }
}
function is2DArray(value) {
  return isArrayLike(value[0]);
}
function copyValue(target, source, key) {
  if (isArrayLike(source[key])) {
    if (!isArrayLike(target[key])) {
      target[key] = [];
    }
    if (isTypedArray(source[key])) {
      var len2 = source[key].length;
      if (target[key].length !== len2) {
        target[key] = new source[key].constructor(len2);
        copyArrShallow(target[key], source[key], len2);
      }
    } else {
      var sourceArr = source[key];
      var targetArr = target[key];
      var len0 = sourceArr.length;
      if (is2DArray(sourceArr)) {
        var len1 = sourceArr[0].length;
        for (var i = 0; i < len0; i++) {
          if (!targetArr[i]) {
            targetArr[i] = Array.prototype.slice.call(sourceArr[i]);
          } else {
            copyArrShallow(targetArr[i], sourceArr[i], len1);
          }
        }
      } else {
        copyArrShallow(targetArr, sourceArr, len0);
      }
      targetArr.length = sourceArr.length;
    }
  } else {
    target[key] = source[key];
  }
}
function isValueSame(val1, val2) {
  return val1 === val2 || isArrayLike(val1) && isArrayLike(val2) && is1DArraySame(val1, val2);
}
function is1DArraySame(arr0, arr1) {
  var len2 = arr0.length;
  if (len2 !== arr1.length) {
    return false;
  }
  for (var i = 0; i < len2; i++) {
    if (arr0[i] !== arr1[i]) {
      return false;
    }
  }
  return true;
}
function animateToShallow(animatable, topKey, animateObj, target, cfg, animationProps, animators, reverse) {
  var targetKeys = keys(target);
  var duration = cfg.duration;
  var delay = cfg.delay;
  var additive = cfg.additive;
  var setToFinal = cfg.setToFinal;
  var animateAll = !isObject(animationProps);
  var existsAnimators = animatable.animators;
  var animationKeys = [];
  for (var k = 0; k < targetKeys.length; k++) {
    var innerKey = targetKeys[k];
    var targetVal = target[innerKey];
    if (targetVal != null && animateObj[innerKey] != null && (animateAll || animationProps[innerKey])) {
      if (isObject(targetVal) && !isArrayLike(targetVal) && !isGradientObject(targetVal)) {
        if (topKey) {
          if (!reverse) {
            animateObj[innerKey] = targetVal;
            animatable.updateDuringAnimation(topKey);
          }
          continue;
        }
        animateToShallow(animatable, innerKey, animateObj[innerKey], targetVal, cfg, animationProps && animationProps[innerKey], animators, reverse);
      } else {
        animationKeys.push(innerKey);
      }
    } else if (!reverse) {
      animateObj[innerKey] = targetVal;
      animatable.updateDuringAnimation(topKey);
      animationKeys.push(innerKey);
    }
  }
  var keyLen = animationKeys.length;
  if (!additive && keyLen) {
    for (var i = 0; i < existsAnimators.length; i++) {
      var animator = existsAnimators[i];
      if (animator.targetName === topKey) {
        var allAborted = animator.stopTracks(animationKeys);
        if (allAborted) {
          var idx = indexOf(existsAnimators, animator);
          existsAnimators.splice(idx, 1);
        }
      }
    }
  }
  if (!cfg.force) {
    animationKeys = filter(animationKeys, function(key) {
      return !isValueSame(target[key], animateObj[key]);
    });
    keyLen = animationKeys.length;
  }
  if (keyLen > 0 || cfg.force && !animators.length) {
    var revertedSource = void 0;
    var reversedTarget = void 0;
    var sourceClone = void 0;
    if (reverse) {
      reversedTarget = {};
      if (setToFinal) {
        revertedSource = {};
      }
      for (var i = 0; i < keyLen; i++) {
        var innerKey = animationKeys[i];
        reversedTarget[innerKey] = animateObj[innerKey];
        if (setToFinal) {
          revertedSource[innerKey] = target[innerKey];
        } else {
          animateObj[innerKey] = target[innerKey];
        }
      }
    } else if (setToFinal) {
      sourceClone = {};
      for (var i = 0; i < keyLen; i++) {
        var innerKey = animationKeys[i];
        sourceClone[innerKey] = cloneValue(animateObj[innerKey]);
        copyValue(animateObj, target, innerKey);
      }
    }
    var animator = new Animator_default(animateObj, false, false, additive ? filter(existsAnimators, function(animator2) {
      return animator2.targetName === topKey;
    }) : null);
    animator.targetName = topKey;
    if (cfg.scope) {
      animator.scope = cfg.scope;
    }
    if (setToFinal && revertedSource) {
      animator.whenWithKeys(0, revertedSource, animationKeys);
    }
    if (sourceClone) {
      animator.whenWithKeys(0, sourceClone, animationKeys);
    }
    animator.whenWithKeys(duration == null ? 500 : duration, reverse ? reversedTarget : target, animationKeys).delay(delay || 0);
    animatable.addAnimator(animator, topKey);
    animators.push(animator);
  }
}
var PRESERVED_NORMAL_STATE, PRIMARY_STATES_KEYS, DEFAULT_ANIMATABLE_MAP, tmpTextPosCalcRes, tmpBoundingRect, Element, Element_default;
var init_Element = __esm({
  "node_modules/zrender/lib/Element.js"() {
    init_Transformable();
    init_Animator();
    init_BoundingRect();
    init_Eventful();
    init_text();
    init_util();
    init_config();
    init_color();
    init_constants();
    PRESERVED_NORMAL_STATE = "__zr_normal__";
    PRIMARY_STATES_KEYS = TRANSFORMABLE_PROPS.concat(["ignore"]);
    DEFAULT_ANIMATABLE_MAP = reduce(TRANSFORMABLE_PROPS, function(obj, key) {
      obj[key] = true;
      return obj;
    }, {
      ignore: false
    });
    tmpTextPosCalcRes = {};
    tmpBoundingRect = new BoundingRect_default(0, 0, 0, 0);
    Element = function() {
      function Element2(props) {
        this.id = guid();
        this.animators = [];
        this.currentStates = [];
        this.states = {};
        this._init(props);
      }
      Element2.prototype._init = function(props) {
        this.attr(props);
      };
      Element2.prototype.drift = function(dx, dy, e) {
        switch (this.draggable) {
          case "horizontal":
            dy = 0;
            break;
          case "vertical":
            dx = 0;
            break;
        }
        var m = this.transform;
        if (!m) {
          m = this.transform = [1, 0, 0, 1, 0, 0];
        }
        m[4] += dx;
        m[5] += dy;
        this.decomposeTransform();
        this.markRedraw();
      };
      Element2.prototype.beforeUpdate = function() {
      };
      Element2.prototype.afterUpdate = function() {
      };
      Element2.prototype.update = function() {
        this.updateTransform();
        if (this.__dirty) {
          this.updateInnerText();
        }
      };
      Element2.prototype.updateInnerText = function(forceUpdate) {
        var textEl = this._textContent;
        if (textEl && (!textEl.ignore || forceUpdate)) {
          if (!this.textConfig) {
            this.textConfig = {};
          }
          var textConfig = this.textConfig;
          var isLocal = textConfig.local;
          var innerTransformable = textEl.innerTransformable;
          var textAlign = void 0;
          var textVerticalAlign = void 0;
          var textStyleChanged = false;
          innerTransformable.parent = isLocal ? this : null;
          var innerOrigin = false;
          innerTransformable.copyTransform(textEl);
          if (textConfig.position != null) {
            var layoutRect = tmpBoundingRect;
            if (textConfig.layoutRect) {
              layoutRect.copy(textConfig.layoutRect);
            } else {
              layoutRect.copy(this.getBoundingRect());
            }
            if (!isLocal) {
              layoutRect.applyTransform(this.transform);
            }
            if (this.calculateTextPosition) {
              this.calculateTextPosition(tmpTextPosCalcRes, textConfig, layoutRect);
            } else {
              calculateTextPosition(tmpTextPosCalcRes, textConfig, layoutRect);
            }
            innerTransformable.x = tmpTextPosCalcRes.x;
            innerTransformable.y = tmpTextPosCalcRes.y;
            textAlign = tmpTextPosCalcRes.align;
            textVerticalAlign = tmpTextPosCalcRes.verticalAlign;
            var textOrigin = textConfig.origin;
            if (textOrigin && textConfig.rotation != null) {
              var relOriginX = void 0;
              var relOriginY = void 0;
              if (textOrigin === "center") {
                relOriginX = layoutRect.width * 0.5;
                relOriginY = layoutRect.height * 0.5;
              } else {
                relOriginX = parsePercent(textOrigin[0], layoutRect.width);
                relOriginY = parsePercent(textOrigin[1], layoutRect.height);
              }
              innerOrigin = true;
              innerTransformable.originX = -innerTransformable.x + relOriginX + (isLocal ? 0 : layoutRect.x);
              innerTransformable.originY = -innerTransformable.y + relOriginY + (isLocal ? 0 : layoutRect.y);
            }
          }
          if (textConfig.rotation != null) {
            innerTransformable.rotation = textConfig.rotation;
          }
          var textOffset = textConfig.offset;
          if (textOffset) {
            innerTransformable.x += textOffset[0];
            innerTransformable.y += textOffset[1];
            if (!innerOrigin) {
              innerTransformable.originX = -textOffset[0];
              innerTransformable.originY = -textOffset[1];
            }
          }
          var isInside = textConfig.inside == null ? typeof textConfig.position === "string" && textConfig.position.indexOf("inside") >= 0 : textConfig.inside;
          var innerTextDefaultStyle = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {});
          var textFill = void 0;
          var textStroke = void 0;
          var autoStroke = void 0;
          if (isInside && this.canBeInsideText()) {
            textFill = textConfig.insideFill;
            textStroke = textConfig.insideStroke;
            if (textFill == null || textFill === "auto") {
              textFill = this.getInsideTextFill();
            }
            if (textStroke == null || textStroke === "auto") {
              textStroke = this.getInsideTextStroke(textFill);
              autoStroke = true;
            }
          } else {
            textFill = textConfig.outsideFill;
            textStroke = textConfig.outsideStroke;
            if (textFill == null || textFill === "auto") {
              textFill = this.getOutsideFill();
            }
            if (textStroke == null || textStroke === "auto") {
              textStroke = this.getOutsideStroke(textFill);
              autoStroke = true;
            }
          }
          textFill = textFill || "#000";
          if (textFill !== innerTextDefaultStyle.fill || textStroke !== innerTextDefaultStyle.stroke || autoStroke !== innerTextDefaultStyle.autoStroke || textAlign !== innerTextDefaultStyle.align || textVerticalAlign !== innerTextDefaultStyle.verticalAlign) {
            textStyleChanged = true;
            innerTextDefaultStyle.fill = textFill;
            innerTextDefaultStyle.stroke = textStroke;
            innerTextDefaultStyle.autoStroke = autoStroke;
            innerTextDefaultStyle.align = textAlign;
            innerTextDefaultStyle.verticalAlign = textVerticalAlign;
            textEl.setDefaultTextStyle(innerTextDefaultStyle);
          }
          textEl.__dirty |= REDRAW_BIT;
          if (textStyleChanged) {
            textEl.dirtyStyle(true);
          }
        }
      };
      Element2.prototype.canBeInsideText = function() {
        return true;
      };
      Element2.prototype.getInsideTextFill = function() {
        return "#fff";
      };
      Element2.prototype.getInsideTextStroke = function(textFill) {
        return "#000";
      };
      Element2.prototype.getOutsideFill = function() {
        return this.__zr && this.__zr.isDarkMode() ? LIGHT_LABEL_COLOR : DARK_LABEL_COLOR;
      };
      Element2.prototype.getOutsideStroke = function(textFill) {
        var backgroundColor = this.__zr && this.__zr.getBackgroundColor();
        var colorArr = typeof backgroundColor === "string" && parse(backgroundColor);
        if (!colorArr) {
          colorArr = [255, 255, 255, 1];
        }
        var alpha = colorArr[3];
        var isDark = this.__zr.isDarkMode();
        for (var i = 0; i < 3; i++) {
          colorArr[i] = colorArr[i] * alpha + (isDark ? 0 : 255) * (1 - alpha);
        }
        colorArr[3] = 1;
        return stringify(colorArr, "rgba");
      };
      Element2.prototype.traverse = function(cb, context) {
      };
      Element2.prototype.attrKV = function(key, value) {
        if (key === "textConfig") {
          this.setTextConfig(value);
        } else if (key === "textContent") {
          this.setTextContent(value);
        } else if (key === "clipPath") {
          this.setClipPath(value);
        } else if (key === "extra") {
          this.extra = this.extra || {};
          extend(this.extra, value);
        } else {
          this[key] = value;
        }
      };
      Element2.prototype.hide = function() {
        this.ignore = true;
        this.markRedraw();
      };
      Element2.prototype.show = function() {
        this.ignore = false;
        this.markRedraw();
      };
      Element2.prototype.attr = function(keyOrObj, value) {
        if (typeof keyOrObj === "string") {
          this.attrKV(keyOrObj, value);
        } else if (isObject(keyOrObj)) {
          var obj = keyOrObj;
          var keysArr = keys(obj);
          for (var i = 0; i < keysArr.length; i++) {
            var key = keysArr[i];
            this.attrKV(key, keyOrObj[key]);
          }
        }
        this.markRedraw();
        return this;
      };
      Element2.prototype.saveCurrentToNormalState = function(toState) {
        this._innerSaveToNormal(toState);
        var normalState = this._normalState;
        for (var i = 0; i < this.animators.length; i++) {
          var animator = this.animators[i];
          var fromStateTransition = animator.__fromStateTransition;
          if (animator.getLoop() || fromStateTransition && fromStateTransition !== PRESERVED_NORMAL_STATE) {
            continue;
          }
          var targetName = animator.targetName;
          var target = targetName ? normalState[targetName] : normalState;
          animator.saveTo(target);
        }
      };
      Element2.prototype._innerSaveToNormal = function(toState) {
        var normalState = this._normalState;
        if (!normalState) {
          normalState = this._normalState = {};
        }
        if (toState.textConfig && !normalState.textConfig) {
          normalState.textConfig = this.textConfig;
        }
        this._savePrimaryToNormal(toState, normalState, PRIMARY_STATES_KEYS);
      };
      Element2.prototype._savePrimaryToNormal = function(toState, normalState, primaryKeys) {
        for (var i = 0; i < primaryKeys.length; i++) {
          var key = primaryKeys[i];
          if (toState[key] != null && !(key in normalState)) {
            normalState[key] = this[key];
          }
        }
      };
      Element2.prototype.hasState = function() {
        return this.currentStates.length > 0;
      };
      Element2.prototype.getState = function(name) {
        return this.states[name];
      };
      Element2.prototype.ensureState = function(name) {
        var states = this.states;
        if (!states[name]) {
          states[name] = {};
        }
        return states[name];
      };
      Element2.prototype.clearStates = function(noAnimation) {
        this.useState(PRESERVED_NORMAL_STATE, false, noAnimation);
      };
      Element2.prototype.useState = function(stateName, keepCurrentStates, noAnimation, forceUseHoverLayer) {
        var toNormalState = stateName === PRESERVED_NORMAL_STATE;
        var hasStates = this.hasState();
        if (!hasStates && toNormalState) {
          return;
        }
        var currentStates = this.currentStates;
        var animationCfg = this.stateTransition;
        if (indexOf(currentStates, stateName) >= 0 && (keepCurrentStates || currentStates.length === 1)) {
          return;
        }
        var state;
        if (this.stateProxy && !toNormalState) {
          state = this.stateProxy(stateName);
        }
        if (!state) {
          state = this.states && this.states[stateName];
        }
        if (!state && !toNormalState) {
          logError("State " + stateName + " not exists.");
          return;
        }
        if (!toNormalState) {
          this.saveCurrentToNormalState(state);
        }
        var useHoverLayer = !!(state && state.hoverLayer || forceUseHoverLayer);
        if (useHoverLayer) {
          this._toggleHoverLayerFlag(true);
        }
        this._applyStateObj(stateName, state, this._normalState, keepCurrentStates, !noAnimation && !this.__inHover && animationCfg && animationCfg.duration > 0, animationCfg);
        var textContent = this._textContent;
        var textGuide = this._textGuide;
        if (textContent) {
          textContent.useState(stateName, keepCurrentStates, noAnimation, useHoverLayer);
        }
        if (textGuide) {
          textGuide.useState(stateName, keepCurrentStates, noAnimation, useHoverLayer);
        }
        if (toNormalState) {
          this.currentStates = [];
          this._normalState = {};
        } else {
          if (!keepCurrentStates) {
            this.currentStates = [stateName];
          } else {
            this.currentStates.push(stateName);
          }
        }
        this._updateAnimationTargets();
        this.markRedraw();
        if (!useHoverLayer && this.__inHover) {
          this._toggleHoverLayerFlag(false);
          this.__dirty &= ~REDRAW_BIT;
        }
        return state;
      };
      Element2.prototype.useStates = function(states, noAnimation, forceUseHoverLayer) {
        if (!states.length) {
          this.clearStates();
        } else {
          var stateObjects = [];
          var currentStates = this.currentStates;
          var len2 = states.length;
          var notChange = len2 === currentStates.length;
          if (notChange) {
            for (var i = 0; i < len2; i++) {
              if (states[i] !== currentStates[i]) {
                notChange = false;
                break;
              }
            }
          }
          if (notChange) {
            return;
          }
          for (var i = 0; i < len2; i++) {
            var stateName = states[i];
            var stateObj = void 0;
            if (this.stateProxy) {
              stateObj = this.stateProxy(stateName, states);
            }
            if (!stateObj) {
              stateObj = this.states[stateName];
            }
            if (stateObj) {
              stateObjects.push(stateObj);
            }
          }
          var lastStateObj = stateObjects[len2 - 1];
          var useHoverLayer = !!(lastStateObj && lastStateObj.hoverLayer || forceUseHoverLayer);
          if (useHoverLayer) {
            this._toggleHoverLayerFlag(true);
          }
          var mergedState = this._mergeStates(stateObjects);
          var animationCfg = this.stateTransition;
          this.saveCurrentToNormalState(mergedState);
          this._applyStateObj(states.join(","), mergedState, this._normalState, false, !noAnimation && !this.__inHover && animationCfg && animationCfg.duration > 0, animationCfg);
          var textContent = this._textContent;
          var textGuide = this._textGuide;
          if (textContent) {
            textContent.useStates(states, noAnimation, useHoverLayer);
          }
          if (textGuide) {
            textGuide.useStates(states, noAnimation, useHoverLayer);
          }
          this._updateAnimationTargets();
          this.currentStates = states.slice();
          this.markRedraw();
          if (!useHoverLayer && this.__inHover) {
            this._toggleHoverLayerFlag(false);
            this.__dirty &= ~REDRAW_BIT;
          }
        }
      };
      Element2.prototype.isSilent = function() {
        var isSilent = this.silent;
        var ancestor = this.parent;
        while (!isSilent && ancestor) {
          if (ancestor.silent) {
            isSilent = true;
            break;
          }
          ancestor = ancestor.parent;
        }
        return isSilent;
      };
      Element2.prototype._updateAnimationTargets = function() {
        for (var i = 0; i < this.animators.length; i++) {
          var animator = this.animators[i];
          if (animator.targetName) {
            animator.changeTarget(this[animator.targetName]);
          }
        }
      };
      Element2.prototype.removeState = function(state) {
        var idx = indexOf(this.currentStates, state);
        if (idx >= 0) {
          var currentStates = this.currentStates.slice();
          currentStates.splice(idx, 1);
          this.useStates(currentStates);
        }
      };
      Element2.prototype.replaceState = function(oldState, newState, forceAdd) {
        var currentStates = this.currentStates.slice();
        var idx = indexOf(currentStates, oldState);
        var newStateExists = indexOf(currentStates, newState) >= 0;
        if (idx >= 0) {
          if (!newStateExists) {
            currentStates[idx] = newState;
          } else {
            currentStates.splice(idx, 1);
          }
        } else if (forceAdd && !newStateExists) {
          currentStates.push(newState);
        }
        this.useStates(currentStates);
      };
      Element2.prototype.toggleState = function(state, enable) {
        if (enable) {
          this.useState(state, true);
        } else {
          this.removeState(state);
        }
      };
      Element2.prototype._mergeStates = function(states) {
        var mergedState = {};
        var mergedTextConfig;
        for (var i = 0; i < states.length; i++) {
          var state = states[i];
          extend(mergedState, state);
          if (state.textConfig) {
            mergedTextConfig = mergedTextConfig || {};
            extend(mergedTextConfig, state.textConfig);
          }
        }
        if (mergedTextConfig) {
          mergedState.textConfig = mergedTextConfig;
        }
        return mergedState;
      };
      Element2.prototype._applyStateObj = function(stateName, state, normalState, keepCurrentStates, transition, animationCfg) {
        var needsRestoreToNormal = !(state && keepCurrentStates);
        if (state && state.textConfig) {
          this.textConfig = extend({}, keepCurrentStates ? this.textConfig : normalState.textConfig);
          extend(this.textConfig, state.textConfig);
        } else if (needsRestoreToNormal) {
          if (normalState.textConfig) {
            this.textConfig = normalState.textConfig;
          }
        }
        var transitionTarget = {};
        var hasTransition = false;
        for (var i = 0; i < PRIMARY_STATES_KEYS.length; i++) {
          var key = PRIMARY_STATES_KEYS[i];
          var propNeedsTransition = transition && DEFAULT_ANIMATABLE_MAP[key];
          if (state && state[key] != null) {
            if (propNeedsTransition) {
              hasTransition = true;
              transitionTarget[key] = state[key];
            } else {
              this[key] = state[key];
            }
          } else if (needsRestoreToNormal) {
            if (normalState[key] != null) {
              if (propNeedsTransition) {
                hasTransition = true;
                transitionTarget[key] = normalState[key];
              } else {
                this[key] = normalState[key];
              }
            }
          }
        }
        if (!transition) {
          for (var i = 0; i < this.animators.length; i++) {
            var animator = this.animators[i];
            var targetName = animator.targetName;
            if (!animator.getLoop()) {
              animator.__changeFinalValue(targetName ? (state || normalState)[targetName] : state || normalState);
            }
          }
        }
        if (hasTransition) {
          this._transitionState(stateName, transitionTarget, animationCfg);
        }
      };
      Element2.prototype._attachComponent = function(componentEl) {
        if (componentEl.__zr && !componentEl.__hostTarget) {
          if (process.env.NODE_ENV !== "production") {
            throw new Error("Text element has been added to zrender.");
          }
          return;
        }
        if (componentEl === this) {
          if (process.env.NODE_ENV !== "production") {
            throw new Error("Recursive component attachment.");
          }
          return;
        }
        var zr = this.__zr;
        if (zr) {
          componentEl.addSelfToZr(zr);
        }
        componentEl.__zr = zr;
        componentEl.__hostTarget = this;
      };
      Element2.prototype._detachComponent = function(componentEl) {
        if (componentEl.__zr) {
          componentEl.removeSelfFromZr(componentEl.__zr);
        }
        componentEl.__zr = null;
        componentEl.__hostTarget = null;
      };
      Element2.prototype.getClipPath = function() {
        return this._clipPath;
      };
      Element2.prototype.setClipPath = function(clipPath) {
        if (this._clipPath && this._clipPath !== clipPath) {
          this.removeClipPath();
        }
        this._attachComponent(clipPath);
        this._clipPath = clipPath;
        this.markRedraw();
      };
      Element2.prototype.removeClipPath = function() {
        var clipPath = this._clipPath;
        if (clipPath) {
          this._detachComponent(clipPath);
          this._clipPath = null;
          this.markRedraw();
        }
      };
      Element2.prototype.getTextContent = function() {
        return this._textContent;
      };
      Element2.prototype.setTextContent = function(textEl) {
        var previousTextContent = this._textContent;
        if (previousTextContent === textEl) {
          return;
        }
        if (previousTextContent && previousTextContent !== textEl) {
          this.removeTextContent();
        }
        if (process.env.NODE_ENV !== "production") {
          if (textEl.__zr && !textEl.__hostTarget) {
            throw new Error("Text element has been added to zrender.");
          }
        }
        textEl.innerTransformable = new Transformable_default();
        this._attachComponent(textEl);
        this._textContent = textEl;
        this.markRedraw();
      };
      Element2.prototype.setTextConfig = function(cfg) {
        if (!this.textConfig) {
          this.textConfig = {};
        }
        extend(this.textConfig, cfg);
        this.markRedraw();
      };
      Element2.prototype.removeTextConfig = function() {
        this.textConfig = null;
        this.markRedraw();
      };
      Element2.prototype.removeTextContent = function() {
        var textEl = this._textContent;
        if (textEl) {
          textEl.innerTransformable = null;
          this._detachComponent(textEl);
          this._textContent = null;
          this._innerTextDefaultStyle = null;
          this.markRedraw();
        }
      };
      Element2.prototype.getTextGuideLine = function() {
        return this._textGuide;
      };
      Element2.prototype.setTextGuideLine = function(guideLine) {
        if (this._textGuide && this._textGuide !== guideLine) {
          this.removeTextGuideLine();
        }
        this._attachComponent(guideLine);
        this._textGuide = guideLine;
        this.markRedraw();
      };
      Element2.prototype.removeTextGuideLine = function() {
        var textGuide = this._textGuide;
        if (textGuide) {
          this._detachComponent(textGuide);
          this._textGuide = null;
          this.markRedraw();
        }
      };
      Element2.prototype.markRedraw = function() {
        this.__dirty |= REDRAW_BIT;
        var zr = this.__zr;
        if (zr) {
          if (this.__inHover) {
            zr.refreshHover();
          } else {
            zr.refresh();
          }
        }
        if (this.__hostTarget) {
          this.__hostTarget.markRedraw();
        }
      };
      Element2.prototype.dirty = function() {
        this.markRedraw();
      };
      Element2.prototype._toggleHoverLayerFlag = function(inHover) {
        this.__inHover = inHover;
        var textContent = this._textContent;
        var textGuide = this._textGuide;
        if (textContent) {
          textContent.__inHover = inHover;
        }
        if (textGuide) {
          textGuide.__inHover = inHover;
        }
      };
      Element2.prototype.addSelfToZr = function(zr) {
        if (this.__zr === zr) {
          return;
        }
        this.__zr = zr;
        var animators = this.animators;
        if (animators) {
          for (var i = 0; i < animators.length; i++) {
            zr.animation.addAnimator(animators[i]);
          }
        }
        if (this._clipPath) {
          this._clipPath.addSelfToZr(zr);
        }
        if (this._textContent) {
          this._textContent.addSelfToZr(zr);
        }
        if (this._textGuide) {
          this._textGuide.addSelfToZr(zr);
        }
      };
      Element2.prototype.removeSelfFromZr = function(zr) {
        if (!this.__zr) {
          return;
        }
        this.__zr = null;
        var animators = this.animators;
        if (animators) {
          for (var i = 0; i < animators.length; i++) {
            zr.animation.removeAnimator(animators[i]);
          }
        }
        if (this._clipPath) {
          this._clipPath.removeSelfFromZr(zr);
        }
        if (this._textContent) {
          this._textContent.removeSelfFromZr(zr);
        }
        if (this._textGuide) {
          this._textGuide.removeSelfFromZr(zr);
        }
      };
      Element2.prototype.animate = function(key, loop, allowDiscreteAnimation) {
        var target = key ? this[key] : this;
        if (process.env.NODE_ENV !== "production") {
          if (!target) {
            logError('Property "' + key + '" is not existed in element ' + this.id);
            return;
          }
        }
        var animator = new Animator_default(target, loop, allowDiscreteAnimation);
        key && (animator.targetName = key);
        this.addAnimator(animator, key);
        return animator;
      };
      Element2.prototype.addAnimator = function(animator, key) {
        var zr = this.__zr;
        var el = this;
        animator.during(function() {
          el.updateDuringAnimation(key);
        }).done(function() {
          var animators = el.animators;
          var idx = indexOf(animators, animator);
          if (idx >= 0) {
            animators.splice(idx, 1);
          }
        });
        this.animators.push(animator);
        if (zr) {
          zr.animation.addAnimator(animator);
        }
        zr && zr.wakeUp();
      };
      Element2.prototype.updateDuringAnimation = function(key) {
        this.markRedraw();
      };
      Element2.prototype.stopAnimation = function(scope, forwardToLast) {
        var animators = this.animators;
        var len2 = animators.length;
        var leftAnimators = [];
        for (var i = 0; i < len2; i++) {
          var animator = animators[i];
          if (!scope || scope === animator.scope) {
            animator.stop(forwardToLast);
          } else {
            leftAnimators.push(animator);
          }
        }
        this.animators = leftAnimators;
        return this;
      };
      Element2.prototype.animateTo = function(target, cfg, animationProps) {
        animateTo(this, target, cfg, animationProps);
      };
      Element2.prototype.animateFrom = function(target, cfg, animationProps) {
        animateTo(this, target, cfg, animationProps, true);
      };
      Element2.prototype._transitionState = function(stateName, target, cfg, animationProps) {
        var animators = animateTo(this, target, cfg, animationProps);
        for (var i = 0; i < animators.length; i++) {
          animators[i].__fromStateTransition = stateName;
        }
      };
      Element2.prototype.getBoundingRect = function() {
        return null;
      };
      Element2.prototype.getPaintRect = function() {
        return null;
      };
      Element2.initDefaultProps = function() {
        var elProto = Element2.prototype;
        elProto.type = "element";
        elProto.name = "";
        elProto.ignore = elProto.silent = elProto.isGroup = elProto.draggable = elProto.dragging = elProto.ignoreClip = elProto.__inHover = false;
        elProto.__dirty = REDRAW_BIT;
        var logs = {};
        function logDeprecatedError(key, xKey, yKey) {
          if (!logs[key + xKey + yKey]) {
            console.warn("DEPRECATED: '" + key + "' has been deprecated. use '" + xKey + "', '" + yKey + "' instead");
            logs[key + xKey + yKey] = true;
          }
        }
        function createLegacyProperty(key, privateKey, xKey, yKey) {
          Object.defineProperty(elProto, key, {
            get: function() {
              if (process.env.NODE_ENV !== "production") {
                logDeprecatedError(key, xKey, yKey);
              }
              if (!this[privateKey]) {
                var pos = this[privateKey] = [];
                enhanceArray(this, pos);
              }
              return this[privateKey];
            },
            set: function(pos) {
              if (process.env.NODE_ENV !== "production") {
                logDeprecatedError(key, xKey, yKey);
              }
              this[xKey] = pos[0];
              this[yKey] = pos[1];
              this[privateKey] = pos;
              enhanceArray(this, pos);
            }
          });
          function enhanceArray(self2, pos) {
            Object.defineProperty(pos, 0, {
              get: function() {
                return self2[xKey];
              },
              set: function(val) {
                self2[xKey] = val;
              }
            });
            Object.defineProperty(pos, 1, {
              get: function() {
                return self2[yKey];
              },
              set: function(val) {
                self2[yKey] = val;
              }
            });
          }
        }
        if (Object.defineProperty) {
          createLegacyProperty("position", "_legacyPos", "x", "y");
          createLegacyProperty("scale", "_legacyScale", "scaleX", "scaleY");
          createLegacyProperty("origin", "_legacyOrigin", "originX", "originY");
        }
      }();
      return Element2;
    }();
    mixin(Element, Eventful_default);
    mixin(Element, Transformable_default);
    Element_default = Element;
  }
});

// node_modules/zrender/lib/graphic/Group.js
var Group, Group_default;
var init_Group = __esm({
  "node_modules/zrender/lib/graphic/Group.js"() {
    init_tslib_es6();
    init_util();
    init_Element();
    init_BoundingRect();
    Group = function(_super) {
      __extends(Group2, _super);
      function Group2(opts) {
        var _this = _super.call(this) || this;
        _this.isGroup = true;
        _this._children = [];
        _this.attr(opts);
        return _this;
      }
      Group2.prototype.childrenRef = function() {
        return this._children;
      };
      Group2.prototype.children = function() {
        return this._children.slice();
      };
      Group2.prototype.childAt = function(idx) {
        return this._children[idx];
      };
      Group2.prototype.childOfName = function(name) {
        var children = this._children;
        for (var i = 0; i < children.length; i++) {
          if (children[i].name === name) {
            return children[i];
          }
        }
      };
      Group2.prototype.childCount = function() {
        return this._children.length;
      };
      Group2.prototype.add = function(child) {
        if (child) {
          if (child !== this && child.parent !== this) {
            this._children.push(child);
            this._doAdd(child);
          }
          if (process.env.NODE_ENV !== "production") {
            if (child.__hostTarget) {
              throw "This elemenet has been used as an attachment";
            }
          }
        }
        return this;
      };
      Group2.prototype.addBefore = function(child, nextSibling) {
        if (child && child !== this && child.parent !== this && nextSibling && nextSibling.parent === this) {
          var children = this._children;
          var idx = children.indexOf(nextSibling);
          if (idx >= 0) {
            children.splice(idx, 0, child);
            this._doAdd(child);
          }
        }
        return this;
      };
      Group2.prototype.replace = function(oldChild, newChild) {
        var idx = indexOf(this._children, oldChild);
        if (idx >= 0) {
          this.replaceAt(newChild, idx);
        }
        return this;
      };
      Group2.prototype.replaceAt = function(child, index) {
        var children = this._children;
        var old = children[index];
        if (child && child !== this && child.parent !== this && child !== old) {
          children[index] = child;
          old.parent = null;
          var zr = this.__zr;
          if (zr) {
            old.removeSelfFromZr(zr);
          }
          this._doAdd(child);
        }
        return this;
      };
      Group2.prototype._doAdd = function(child) {
        if (child.parent) {
          child.parent.remove(child);
        }
        child.parent = this;
        var zr = this.__zr;
        if (zr && zr !== child.__zr) {
          child.addSelfToZr(zr);
        }
        zr && zr.refresh();
      };
      Group2.prototype.remove = function(child) {
        var zr = this.__zr;
        var children = this._children;
        var idx = indexOf(children, child);
        if (idx < 0) {
          return this;
        }
        children.splice(idx, 1);
        child.parent = null;
        if (zr) {
          child.removeSelfFromZr(zr);
        }
        zr && zr.refresh();
        return this;
      };
      Group2.prototype.removeAll = function() {
        var children = this._children;
        var zr = this.__zr;
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          if (zr) {
            child.removeSelfFromZr(zr);
          }
          child.parent = null;
        }
        children.length = 0;
        return this;
      };
      Group2.prototype.eachChild = function(cb, context) {
        var children = this._children;
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          cb.call(context, child, i);
        }
        return this;
      };
      Group2.prototype.traverse = function(cb, context) {
        for (var i = 0; i < this._children.length; i++) {
          var child = this._children[i];
          var stopped = cb.call(context, child);
          if (child.isGroup && !stopped) {
            child.traverse(cb, context);
          }
        }
        return this;
      };
      Group2.prototype.addSelfToZr = function(zr) {
        _super.prototype.addSelfToZr.call(this, zr);
        for (var i = 0; i < this._children.length; i++) {
          var child = this._children[i];
          child.addSelfToZr(zr);
        }
      };
      Group2.prototype.removeSelfFromZr = function(zr) {
        _super.prototype.removeSelfFromZr.call(this, zr);
        for (var i = 0; i < this._children.length; i++) {
          var child = this._children[i];
          child.removeSelfFromZr(zr);
        }
      };
      Group2.prototype.getBoundingRect = function(includeChildren) {
        var tmpRect3 = new BoundingRect_default(0, 0, 0, 0);
        var children = includeChildren || this._children;
        var tmpMat = [];
        var rect = null;
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          if (child.ignore || child.invisible) {
            continue;
          }
          var childRect = child.getBoundingRect();
          var transform = child.getLocalTransform(tmpMat);
          if (transform) {
            BoundingRect_default.applyTransform(tmpRect3, childRect, transform);
            rect = rect || tmpRect3.clone();
            rect.union(tmpRect3);
          } else {
            rect = rect || childRect.clone();
            rect.union(childRect);
          }
        }
        return rect || tmpRect3;
      };
      return Group2;
    }(Element_default);
    Group.prototype.type = "group";
    Group_default = Group;
  }
});

// node_modules/zrender/lib/zrender.js
var zrender_exports = {};
__export(zrender_exports, {
  dispose: () => dispose,
  disposeAll: () => disposeAll,
  getElementSSRData: () => getElementSSRData,
  getInstance: () => getInstance,
  init: () => init,
  registerPainter: () => registerPainter,
  registerSSRDataGetter: () => registerSSRDataGetter,
  version: () => version
});
function delInstance(id) {
  delete instances[id];
}
function isDarkMode(backgroundColor) {
  if (!backgroundColor) {
    return false;
  }
  if (typeof backgroundColor === "string") {
    return lum(backgroundColor, 1) < DARK_MODE_THRESHOLD;
  } else if (backgroundColor.colorStops) {
    var colorStops = backgroundColor.colorStops;
    var totalLum = 0;
    var len2 = colorStops.length;
    for (var i = 0; i < len2; i++) {
      totalLum += lum(colorStops[i].color, 1);
    }
    totalLum /= len2;
    return totalLum < DARK_MODE_THRESHOLD;
  }
  return false;
}
function init(dom, opts) {
  var zr = new ZRender(guid(), dom, opts);
  instances[zr.id] = zr;
  return zr;
}
function dispose(zr) {
  zr.dispose();
}
function disposeAll() {
  for (var key in instances) {
    if (instances.hasOwnProperty(key)) {
      instances[key].dispose();
    }
  }
  instances = {};
}
function getInstance(id) {
  return instances[id];
}
function registerPainter(name, Ctor) {
  painterCtors[name] = Ctor;
}
function getElementSSRData(el) {
  if (typeof ssrDataGetter === "function") {
    return ssrDataGetter(el);
  }
}
function registerSSRDataGetter(getter) {
  ssrDataGetter = getter;
}
var painterCtors, instances, ZRender, ssrDataGetter, version;
var init_zrender = __esm({
  "node_modules/zrender/lib/zrender.js"() {
    init_env();
    init_util();
    init_Handler();
    init_Storage();
    init_Animation();
    init_HandlerProxy();
    init_color();
    init_config();
    init_Group();
    painterCtors = {};
    instances = {};
    ZRender = function() {
      function ZRender2(id, dom, opts) {
        var _this = this;
        this._sleepAfterStill = 10;
        this._stillFrameAccum = 0;
        this._needsRefresh = true;
        this._needsRefreshHover = true;
        this._darkMode = false;
        opts = opts || {};
        this.dom = dom;
        this.id = id;
        var storage = new Storage_default();
        var rendererType = opts.renderer || "canvas";
        if (!painterCtors[rendererType]) {
          rendererType = keys(painterCtors)[0];
        }
        if (process.env.NODE_ENV !== "production") {
          if (!painterCtors[rendererType]) {
            throw new Error("Renderer '" + rendererType + "' is not imported. Please import it first.");
          }
        }
        opts.useDirtyRect = opts.useDirtyRect == null ? false : opts.useDirtyRect;
        var painter = new painterCtors[rendererType](dom, storage, opts, id);
        var ssrMode = opts.ssr || painter.ssrOnly;
        this.storage = storage;
        this.painter = painter;
        var handlerProxy = !env_default.node && !env_default.worker && !ssrMode ? new HandlerProxy_default(painter.getViewportRoot(), painter.root) : null;
        var useCoarsePointer = opts.useCoarsePointer;
        var usePointerSize = useCoarsePointer == null || useCoarsePointer === "auto" ? env_default.touchEventsSupported : !!useCoarsePointer;
        var defaultPointerSize = 44;
        var pointerSize;
        if (usePointerSize) {
          pointerSize = retrieve2(opts.pointerSize, defaultPointerSize);
        }
        this.handler = new Handler_default(storage, painter, handlerProxy, painter.root, pointerSize);
        this.animation = new Animation_default({
          stage: {
            update: ssrMode ? null : function() {
              return _this._flush(true);
            }
          }
        });
        if (!ssrMode) {
          this.animation.start();
        }
      }
      ZRender2.prototype.add = function(el) {
        if (this._disposed || !el) {
          return;
        }
        this.storage.addRoot(el);
        el.addSelfToZr(this);
        this.refresh();
      };
      ZRender2.prototype.remove = function(el) {
        if (this._disposed || !el) {
          return;
        }
        this.storage.delRoot(el);
        el.removeSelfFromZr(this);
        this.refresh();
      };
      ZRender2.prototype.configLayer = function(zLevel, config) {
        if (this._disposed) {
          return;
        }
        if (this.painter.configLayer) {
          this.painter.configLayer(zLevel, config);
        }
        this.refresh();
      };
      ZRender2.prototype.setBackgroundColor = function(backgroundColor) {
        if (this._disposed) {
          return;
        }
        if (this.painter.setBackgroundColor) {
          this.painter.setBackgroundColor(backgroundColor);
        }
        this.refresh();
        this._backgroundColor = backgroundColor;
        this._darkMode = isDarkMode(backgroundColor);
      };
      ZRender2.prototype.getBackgroundColor = function() {
        return this._backgroundColor;
      };
      ZRender2.prototype.setDarkMode = function(darkMode) {
        this._darkMode = darkMode;
      };
      ZRender2.prototype.isDarkMode = function() {
        return this._darkMode;
      };
      ZRender2.prototype.refreshImmediately = function(fromInside) {
        if (this._disposed) {
          return;
        }
        if (!fromInside) {
          this.animation.update(true);
        }
        this._needsRefresh = false;
        this.painter.refresh();
        this._needsRefresh = false;
      };
      ZRender2.prototype.refresh = function() {
        if (this._disposed) {
          return;
        }
        this._needsRefresh = true;
        this.animation.start();
      };
      ZRender2.prototype.flush = function() {
        if (this._disposed) {
          return;
        }
        this._flush(false);
      };
      ZRender2.prototype._flush = function(fromInside) {
        var triggerRendered;
        var start2 = getTime();
        if (this._needsRefresh) {
          triggerRendered = true;
          this.refreshImmediately(fromInside);
        }
        if (this._needsRefreshHover) {
          triggerRendered = true;
          this.refreshHoverImmediately();
        }
        var end2 = getTime();
        if (triggerRendered) {
          this._stillFrameAccum = 0;
          this.trigger("rendered", {
            elapsedTime: end2 - start2
          });
        } else if (this._sleepAfterStill > 0) {
          this._stillFrameAccum++;
          if (this._stillFrameAccum > this._sleepAfterStill) {
            this.animation.stop();
          }
        }
      };
      ZRender2.prototype.setSleepAfterStill = function(stillFramesCount) {
        this._sleepAfterStill = stillFramesCount;
      };
      ZRender2.prototype.wakeUp = function() {
        if (this._disposed) {
          return;
        }
        this.animation.start();
        this._stillFrameAccum = 0;
      };
      ZRender2.prototype.refreshHover = function() {
        this._needsRefreshHover = true;
      };
      ZRender2.prototype.refreshHoverImmediately = function() {
        if (this._disposed) {
          return;
        }
        this._needsRefreshHover = false;
        if (this.painter.refreshHover && this.painter.getType() === "canvas") {
          this.painter.refreshHover();
        }
      };
      ZRender2.prototype.resize = function(opts) {
        if (this._disposed) {
          return;
        }
        opts = opts || {};
        this.painter.resize(opts.width, opts.height);
        this.handler.resize();
      };
      ZRender2.prototype.clearAnimation = function() {
        if (this._disposed) {
          return;
        }
        this.animation.clear();
      };
      ZRender2.prototype.getWidth = function() {
        if (this._disposed) {
          return;
        }
        return this.painter.getWidth();
      };
      ZRender2.prototype.getHeight = function() {
        if (this._disposed) {
          return;
        }
        return this.painter.getHeight();
      };
      ZRender2.prototype.setCursorStyle = function(cursorStyle) {
        if (this._disposed) {
          return;
        }
        this.handler.setCursorStyle(cursorStyle);
      };
      ZRender2.prototype.findHover = function(x, y) {
        if (this._disposed) {
          return;
        }
        return this.handler.findHover(x, y);
      };
      ZRender2.prototype.on = function(eventName, eventHandler, context) {
        if (!this._disposed) {
          this.handler.on(eventName, eventHandler, context);
        }
        return this;
      };
      ZRender2.prototype.off = function(eventName, eventHandler) {
        if (this._disposed) {
          return;
        }
        this.handler.off(eventName, eventHandler);
      };
      ZRender2.prototype.trigger = function(eventName, event) {
        if (this._disposed) {
          return;
        }
        this.handler.trigger(eventName, event);
      };
      ZRender2.prototype.clear = function() {
        if (this._disposed) {
          return;
        }
        var roots2 = this.storage.getRoots();
        for (var i = 0; i < roots2.length; i++) {
          if (roots2[i] instanceof Group_default) {
            roots2[i].removeSelfFromZr(this);
          }
        }
        this.storage.delAllRoots();
        this.painter.clear();
      };
      ZRender2.prototype.dispose = function() {
        if (this._disposed) {
          return;
        }
        this.animation.stop();
        this.clear();
        this.storage.dispose();
        this.painter.dispose();
        this.handler.dispose();
        this.animation = this.storage = this.painter = this.handler = null;
        this._disposed = true;
        delInstance(this.id);
      };
      return ZRender2;
    }();
    version = "5.6.1";
  }
});

// node_modules/zrender/lib/graphic/Displayable.js
function isDisplayableCulled(el, width, height) {
  tmpRect2.copy(el.getBoundingRect());
  if (el.transform) {
    tmpRect2.applyTransform(el.transform);
  }
  viewRect.width = width;
  viewRect.height = height;
  return !tmpRect2.intersect(viewRect);
}
var STYLE_MAGIC_KEY, DEFAULT_COMMON_STYLE, DEFAULT_COMMON_ANIMATION_PROPS, PRIMARY_STATES_KEYS2, PRIMARY_STATES_KEYS_IN_HOVER_LAYER, Displayable, tmpRect2, viewRect, Displayable_default;
var init_Displayable = __esm({
  "node_modules/zrender/lib/graphic/Displayable.js"() {
    init_tslib_es6();
    init_Element();
    init_BoundingRect();
    init_util();
    init_constants();
    STYLE_MAGIC_KEY = "__zr_style_" + Math.round(Math.random() * 10);
    DEFAULT_COMMON_STYLE = {
      shadowBlur: 0,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowColor: "#000",
      opacity: 1,
      blend: "source-over"
    };
    DEFAULT_COMMON_ANIMATION_PROPS = {
      style: {
        shadowBlur: true,
        shadowOffsetX: true,
        shadowOffsetY: true,
        shadowColor: true,
        opacity: true
      }
    };
    DEFAULT_COMMON_STYLE[STYLE_MAGIC_KEY] = true;
    PRIMARY_STATES_KEYS2 = ["z", "z2", "invisible"];
    PRIMARY_STATES_KEYS_IN_HOVER_LAYER = ["invisible"];
    Displayable = function(_super) {
      __extends(Displayable2, _super);
      function Displayable2(props) {
        return _super.call(this, props) || this;
      }
      Displayable2.prototype._init = function(props) {
        var keysArr = keys(props);
        for (var i = 0; i < keysArr.length; i++) {
          var key = keysArr[i];
          if (key === "style") {
            this.useStyle(props[key]);
          } else {
            _super.prototype.attrKV.call(this, key, props[key]);
          }
        }
        if (!this.style) {
          this.useStyle({});
        }
      };
      Displayable2.prototype.beforeBrush = function() {
      };
      Displayable2.prototype.afterBrush = function() {
      };
      Displayable2.prototype.innerBeforeBrush = function() {
      };
      Displayable2.prototype.innerAfterBrush = function() {
      };
      Displayable2.prototype.shouldBePainted = function(viewWidth, viewHeight, considerClipPath, considerAncestors) {
        var m = this.transform;
        if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && isDisplayableCulled(this, viewWidth, viewHeight) || m && !m[0] && !m[3]) {
          return false;
        }
        if (considerClipPath && this.__clipPaths) {
          for (var i = 0; i < this.__clipPaths.length; ++i) {
            if (this.__clipPaths[i].isZeroArea()) {
              return false;
            }
          }
        }
        if (considerAncestors && this.parent) {
          var parent_1 = this.parent;
          while (parent_1) {
            if (parent_1.ignore) {
              return false;
            }
            parent_1 = parent_1.parent;
          }
        }
        return true;
      };
      Displayable2.prototype.contain = function(x, y) {
        return this.rectContain(x, y);
      };
      Displayable2.prototype.traverse = function(cb, context) {
        cb.call(context, this);
      };
      Displayable2.prototype.rectContain = function(x, y) {
        var coord = this.transformCoordToLocal(x, y);
        var rect = this.getBoundingRect();
        return rect.contain(coord[0], coord[1]);
      };
      Displayable2.prototype.getPaintRect = function() {
        var rect = this._paintRect;
        if (!this._paintRect || this.__dirty) {
          var transform = this.transform;
          var elRect = this.getBoundingRect();
          var style = this.style;
          var shadowSize = style.shadowBlur || 0;
          var shadowOffsetX = style.shadowOffsetX || 0;
          var shadowOffsetY = style.shadowOffsetY || 0;
          rect = this._paintRect || (this._paintRect = new BoundingRect_default(0, 0, 0, 0));
          if (transform) {
            BoundingRect_default.applyTransform(rect, elRect, transform);
          } else {
            rect.copy(elRect);
          }
          if (shadowSize || shadowOffsetX || shadowOffsetY) {
            rect.width += shadowSize * 2 + Math.abs(shadowOffsetX);
            rect.height += shadowSize * 2 + Math.abs(shadowOffsetY);
            rect.x = Math.min(rect.x, rect.x + shadowOffsetX - shadowSize);
            rect.y = Math.min(rect.y, rect.y + shadowOffsetY - shadowSize);
          }
          var tolerance = this.dirtyRectTolerance;
          if (!rect.isZero()) {
            rect.x = Math.floor(rect.x - tolerance);
            rect.y = Math.floor(rect.y - tolerance);
            rect.width = Math.ceil(rect.width + 1 + tolerance * 2);
            rect.height = Math.ceil(rect.height + 1 + tolerance * 2);
          }
        }
        return rect;
      };
      Displayable2.prototype.setPrevPaintRect = function(paintRect) {
        if (paintRect) {
          this._prevPaintRect = this._prevPaintRect || new BoundingRect_default(0, 0, 0, 0);
          this._prevPaintRect.copy(paintRect);
        } else {
          this._prevPaintRect = null;
        }
      };
      Displayable2.prototype.getPrevPaintRect = function() {
        return this._prevPaintRect;
      };
      Displayable2.prototype.animateStyle = function(loop) {
        return this.animate("style", loop);
      };
      Displayable2.prototype.updateDuringAnimation = function(targetKey) {
        if (targetKey === "style") {
          this.dirtyStyle();
        } else {
          this.markRedraw();
        }
      };
      Displayable2.prototype.attrKV = function(key, value) {
        if (key !== "style") {
          _super.prototype.attrKV.call(this, key, value);
        } else {
          if (!this.style) {
            this.useStyle(value);
          } else {
            this.setStyle(value);
          }
        }
      };
      Displayable2.prototype.setStyle = function(keyOrObj, value) {
        if (typeof keyOrObj === "string") {
          this.style[keyOrObj] = value;
        } else {
          extend(this.style, keyOrObj);
        }
        this.dirtyStyle();
        return this;
      };
      Displayable2.prototype.dirtyStyle = function(notRedraw) {
        if (!notRedraw) {
          this.markRedraw();
        }
        this.__dirty |= STYLE_CHANGED_BIT;
        if (this._rect) {
          this._rect = null;
        }
      };
      Displayable2.prototype.dirty = function() {
        this.dirtyStyle();
      };
      Displayable2.prototype.styleChanged = function() {
        return !!(this.__dirty & STYLE_CHANGED_BIT);
      };
      Displayable2.prototype.styleUpdated = function() {
        this.__dirty &= ~STYLE_CHANGED_BIT;
      };
      Displayable2.prototype.createStyle = function(obj) {
        return createObject(DEFAULT_COMMON_STYLE, obj);
      };
      Displayable2.prototype.useStyle = function(obj) {
        if (!obj[STYLE_MAGIC_KEY]) {
          obj = this.createStyle(obj);
        }
        if (this.__inHover) {
          this.__hoverStyle = obj;
        } else {
          this.style = obj;
        }
        this.dirtyStyle();
      };
      Displayable2.prototype.isStyleObject = function(obj) {
        return obj[STYLE_MAGIC_KEY];
      };
      Displayable2.prototype._innerSaveToNormal = function(toState) {
        _super.prototype._innerSaveToNormal.call(this, toState);
        var normalState = this._normalState;
        if (toState.style && !normalState.style) {
          normalState.style = this._mergeStyle(this.createStyle(), this.style);
        }
        this._savePrimaryToNormal(toState, normalState, PRIMARY_STATES_KEYS2);
      };
      Displayable2.prototype._applyStateObj = function(stateName, state, normalState, keepCurrentStates, transition, animationCfg) {
        _super.prototype._applyStateObj.call(this, stateName, state, normalState, keepCurrentStates, transition, animationCfg);
        var needsRestoreToNormal = !(state && keepCurrentStates);
        var targetStyle;
        if (state && state.style) {
          if (transition) {
            if (keepCurrentStates) {
              targetStyle = state.style;
            } else {
              targetStyle = this._mergeStyle(this.createStyle(), normalState.style);
              this._mergeStyle(targetStyle, state.style);
            }
          } else {
            targetStyle = this._mergeStyle(this.createStyle(), keepCurrentStates ? this.style : normalState.style);
            this._mergeStyle(targetStyle, state.style);
          }
        } else if (needsRestoreToNormal) {
          targetStyle = normalState.style;
        }
        if (targetStyle) {
          if (transition) {
            var sourceStyle = this.style;
            this.style = this.createStyle(needsRestoreToNormal ? {} : sourceStyle);
            if (needsRestoreToNormal) {
              var changedKeys = keys(sourceStyle);
              for (var i = 0; i < changedKeys.length; i++) {
                var key = changedKeys[i];
                if (key in targetStyle) {
                  targetStyle[key] = targetStyle[key];
                  this.style[key] = sourceStyle[key];
                }
              }
            }
            var targetKeys = keys(targetStyle);
            for (var i = 0; i < targetKeys.length; i++) {
              var key = targetKeys[i];
              this.style[key] = this.style[key];
            }
            this._transitionState(stateName, {
              style: targetStyle
            }, animationCfg, this.getAnimationStyleProps());
          } else {
            this.useStyle(targetStyle);
          }
        }
        var statesKeys = this.__inHover ? PRIMARY_STATES_KEYS_IN_HOVER_LAYER : PRIMARY_STATES_KEYS2;
        for (var i = 0; i < statesKeys.length; i++) {
          var key = statesKeys[i];
          if (state && state[key] != null) {
            this[key] = state[key];
          } else if (needsRestoreToNormal) {
            if (normalState[key] != null) {
              this[key] = normalState[key];
            }
          }
        }
      };
      Displayable2.prototype._mergeStates = function(states) {
        var mergedState = _super.prototype._mergeStates.call(this, states);
        var mergedStyle;
        for (var i = 0; i < states.length; i++) {
          var state = states[i];
          if (state.style) {
            mergedStyle = mergedStyle || {};
            this._mergeStyle(mergedStyle, state.style);
          }
        }
        if (mergedStyle) {
          mergedState.style = mergedStyle;
        }
        return mergedState;
      };
      Displayable2.prototype._mergeStyle = function(targetStyle, sourceStyle) {
        extend(targetStyle, sourceStyle);
        return targetStyle;
      };
      Displayable2.prototype.getAnimationStyleProps = function() {
        return DEFAULT_COMMON_ANIMATION_PROPS;
      };
      Displayable2.initDefaultProps = function() {
        var dispProto = Displayable2.prototype;
        dispProto.type = "displayable";
        dispProto.invisible = false;
        dispProto.z = 0;
        dispProto.z2 = 0;
        dispProto.zlevel = 0;
        dispProto.culling = false;
        dispProto.cursor = "pointer";
        dispProto.rectHover = false;
        dispProto.incremental = false;
        dispProto._rect = null;
        dispProto.dirtyRectTolerance = 0;
        dispProto.__dirty = REDRAW_BIT | STYLE_CHANGED_BIT;
      }();
      return Displayable2;
    }(Element_default);
    tmpRect2 = new BoundingRect_default(0, 0, 0, 0);
    viewRect = new BoundingRect_default(0, 0, 0, 0);
    Displayable_default = Displayable;
  }
});

// node_modules/zrender/lib/core/bbox.js
function fromPoints(points, min3, max3) {
  if (points.length === 0) {
    return;
  }
  var p = points[0];
  var left = p[0];
  var right = p[0];
  var top = p[1];
  var bottom = p[1];
  for (var i = 1; i < points.length; i++) {
    p = points[i];
    left = mathMin2(left, p[0]);
    right = mathMax2(right, p[0]);
    top = mathMin2(top, p[1]);
    bottom = mathMax2(bottom, p[1]);
  }
  min3[0] = left;
  min3[1] = top;
  max3[0] = right;
  max3[1] = bottom;
}
function fromLine(x0, y0, x1, y1, min3, max3) {
  min3[0] = mathMin2(x0, x1);
  min3[1] = mathMin2(y0, y1);
  max3[0] = mathMax2(x0, x1);
  max3[1] = mathMax2(y0, y1);
}
function fromCubic(x0, y0, x1, y1, x2, y2, x3, y3, min3, max3) {
  var cubicExtrema2 = cubicExtrema;
  var cubicAt2 = cubicAt;
  var n = cubicExtrema2(x0, x1, x2, x3, xDim);
  min3[0] = Infinity;
  min3[1] = Infinity;
  max3[0] = -Infinity;
  max3[1] = -Infinity;
  for (var i = 0; i < n; i++) {
    var x = cubicAt2(x0, x1, x2, x3, xDim[i]);
    min3[0] = mathMin2(x, min3[0]);
    max3[0] = mathMax2(x, max3[0]);
  }
  n = cubicExtrema2(y0, y1, y2, y3, yDim);
  for (var i = 0; i < n; i++) {
    var y = cubicAt2(y0, y1, y2, y3, yDim[i]);
    min3[1] = mathMin2(y, min3[1]);
    max3[1] = mathMax2(y, max3[1]);
  }
  min3[0] = mathMin2(x0, min3[0]);
  max3[0] = mathMax2(x0, max3[0]);
  min3[0] = mathMin2(x3, min3[0]);
  max3[0] = mathMax2(x3, max3[0]);
  min3[1] = mathMin2(y0, min3[1]);
  max3[1] = mathMax2(y0, max3[1]);
  min3[1] = mathMin2(y3, min3[1]);
  max3[1] = mathMax2(y3, max3[1]);
}
function fromQuadratic(x0, y0, x1, y1, x2, y2, min3, max3) {
  var quadraticExtremum2 = quadraticExtremum;
  var quadraticAt2 = quadraticAt;
  var tx = mathMax2(mathMin2(quadraticExtremum2(x0, x1, x2), 1), 0);
  var ty = mathMax2(mathMin2(quadraticExtremum2(y0, y1, y2), 1), 0);
  var x = quadraticAt2(x0, x1, x2, tx);
  var y = quadraticAt2(y0, y1, y2, ty);
  min3[0] = mathMin2(x0, x2, x);
  min3[1] = mathMin2(y0, y2, y);
  max3[0] = mathMax2(x0, x2, x);
  max3[1] = mathMax2(y0, y2, y);
}
function fromArc(x, y, rx, ry, startAngle, endAngle, anticlockwise, min3, max3) {
  var vec2Min = min;
  var vec2Max = max;
  var diff = Math.abs(startAngle - endAngle);
  if (diff % PI2 < 1e-4 && diff > 1e-4) {
    min3[0] = x - rx;
    min3[1] = y - ry;
    max3[0] = x + rx;
    max3[1] = y + ry;
    return;
  }
  start[0] = mathCos(startAngle) * rx + x;
  start[1] = mathSin(startAngle) * ry + y;
  end[0] = mathCos(endAngle) * rx + x;
  end[1] = mathSin(endAngle) * ry + y;
  vec2Min(min3, start, end);
  vec2Max(max3, start, end);
  startAngle = startAngle % PI2;
  if (startAngle < 0) {
    startAngle = startAngle + PI2;
  }
  endAngle = endAngle % PI2;
  if (endAngle < 0) {
    endAngle = endAngle + PI2;
  }
  if (startAngle > endAngle && !anticlockwise) {
    endAngle += PI2;
  } else if (startAngle < endAngle && anticlockwise) {
    startAngle += PI2;
  }
  if (anticlockwise) {
    var tmp = endAngle;
    endAngle = startAngle;
    startAngle = tmp;
  }
  for (var angle = 0; angle < endAngle; angle += Math.PI / 2) {
    if (angle > startAngle) {
      extremity[0] = mathCos(angle) * rx + x;
      extremity[1] = mathSin(angle) * ry + y;
      vec2Min(min3, extremity, min3);
      vec2Max(max3, extremity, max3);
    }
  }
}
var mathMin2, mathMax2, mathSin, mathCos, PI2, start, end, extremity, xDim, yDim;
var init_bbox = __esm({
  "node_modules/zrender/lib/core/bbox.js"() {
    init_vector();
    init_curve();
    mathMin2 = Math.min;
    mathMax2 = Math.max;
    mathSin = Math.sin;
    mathCos = Math.cos;
    PI2 = Math.PI * 2;
    start = create();
    end = create();
    extremity = create();
    xDim = [];
    yDim = [];
  }
});

// node_modules/zrender/lib/core/PathProxy.js
function modPI2(radian) {
  var n = Math.round(radian / PI * 1e8) / 1e8;
  return n % 2 * PI;
}
function normalizeArcAngles(angles, anticlockwise) {
  var newStartAngle = modPI2(angles[0]);
  if (newStartAngle < 0) {
    newStartAngle += PI22;
  }
  var delta = newStartAngle - angles[0];
  var newEndAngle = angles[1];
  newEndAngle += delta;
  if (!anticlockwise && newEndAngle - newStartAngle >= PI22) {
    newEndAngle = newStartAngle + PI22;
  } else if (anticlockwise && newStartAngle - newEndAngle >= PI22) {
    newEndAngle = newStartAngle - PI22;
  } else if (!anticlockwise && newStartAngle > newEndAngle) {
    newEndAngle = newStartAngle + (PI22 - modPI2(newStartAngle - newEndAngle));
  } else if (anticlockwise && newStartAngle < newEndAngle) {
    newEndAngle = newStartAngle - (PI22 - modPI2(newEndAngle - newStartAngle));
  }
  angles[0] = newStartAngle;
  angles[1] = newEndAngle;
}
var CMD, tmpOutX, tmpOutY, min2, max2, min22, max22, mathMin3, mathMax3, mathCos2, mathSin2, mathAbs, PI, PI22, hasTypedArray, tmpAngles, PathProxy, PathProxy_default;
var init_PathProxy = __esm({
  "node_modules/zrender/lib/core/PathProxy.js"() {
    init_vector();
    init_BoundingRect();
    init_config();
    init_bbox();
    init_curve();
    CMD = {
      M: 1,
      L: 2,
      C: 3,
      Q: 4,
      A: 5,
      Z: 6,
      R: 7
    };
    tmpOutX = [];
    tmpOutY = [];
    min2 = [];
    max2 = [];
    min22 = [];
    max22 = [];
    mathMin3 = Math.min;
    mathMax3 = Math.max;
    mathCos2 = Math.cos;
    mathSin2 = Math.sin;
    mathAbs = Math.abs;
    PI = Math.PI;
    PI22 = PI * 2;
    hasTypedArray = typeof Float32Array !== "undefined";
    tmpAngles = [];
    PathProxy = function() {
      function PathProxy2(notSaveData) {
        this.dpr = 1;
        this._xi = 0;
        this._yi = 0;
        this._x0 = 0;
        this._y0 = 0;
        this._len = 0;
        if (notSaveData) {
          this._saveData = false;
        }
        if (this._saveData) {
          this.data = [];
        }
      }
      PathProxy2.prototype.increaseVersion = function() {
        this._version++;
      };
      PathProxy2.prototype.getVersion = function() {
        return this._version;
      };
      PathProxy2.prototype.setScale = function(sx, sy, segmentIgnoreThreshold) {
        segmentIgnoreThreshold = segmentIgnoreThreshold || 0;
        if (segmentIgnoreThreshold > 0) {
          this._ux = mathAbs(segmentIgnoreThreshold / devicePixelRatio / sx) || 0;
          this._uy = mathAbs(segmentIgnoreThreshold / devicePixelRatio / sy) || 0;
        }
      };
      PathProxy2.prototype.setDPR = function(dpr2) {
        this.dpr = dpr2;
      };
      PathProxy2.prototype.setContext = function(ctx) {
        this._ctx = ctx;
      };
      PathProxy2.prototype.getContext = function() {
        return this._ctx;
      };
      PathProxy2.prototype.beginPath = function() {
        this._ctx && this._ctx.beginPath();
        this.reset();
        return this;
      };
      PathProxy2.prototype.reset = function() {
        if (this._saveData) {
          this._len = 0;
        }
        if (this._pathSegLen) {
          this._pathSegLen = null;
          this._pathLen = 0;
        }
        this._version++;
      };
      PathProxy2.prototype.moveTo = function(x, y) {
        this._drawPendingPt();
        this.addData(CMD.M, x, y);
        this._ctx && this._ctx.moveTo(x, y);
        this._x0 = x;
        this._y0 = y;
        this._xi = x;
        this._yi = y;
        return this;
      };
      PathProxy2.prototype.lineTo = function(x, y) {
        var dx = mathAbs(x - this._xi);
        var dy = mathAbs(y - this._yi);
        var exceedUnit = dx > this._ux || dy > this._uy;
        this.addData(CMD.L, x, y);
        if (this._ctx && exceedUnit) {
          this._ctx.lineTo(x, y);
        }
        if (exceedUnit) {
          this._xi = x;
          this._yi = y;
          this._pendingPtDist = 0;
        } else {
          var d2 = dx * dx + dy * dy;
          if (d2 > this._pendingPtDist) {
            this._pendingPtX = x;
            this._pendingPtY = y;
            this._pendingPtDist = d2;
          }
        }
        return this;
      };
      PathProxy2.prototype.bezierCurveTo = function(x1, y1, x2, y2, x3, y3) {
        this._drawPendingPt();
        this.addData(CMD.C, x1, y1, x2, y2, x3, y3);
        if (this._ctx) {
          this._ctx.bezierCurveTo(x1, y1, x2, y2, x3, y3);
        }
        this._xi = x3;
        this._yi = y3;
        return this;
      };
      PathProxy2.prototype.quadraticCurveTo = function(x1, y1, x2, y2) {
        this._drawPendingPt();
        this.addData(CMD.Q, x1, y1, x2, y2);
        if (this._ctx) {
          this._ctx.quadraticCurveTo(x1, y1, x2, y2);
        }
        this._xi = x2;
        this._yi = y2;
        return this;
      };
      PathProxy2.prototype.arc = function(cx, cy, r, startAngle, endAngle, anticlockwise) {
        this._drawPendingPt();
        tmpAngles[0] = startAngle;
        tmpAngles[1] = endAngle;
        normalizeArcAngles(tmpAngles, anticlockwise);
        startAngle = tmpAngles[0];
        endAngle = tmpAngles[1];
        var delta = endAngle - startAngle;
        this.addData(CMD.A, cx, cy, r, r, startAngle, delta, 0, anticlockwise ? 0 : 1);
        this._ctx && this._ctx.arc(cx, cy, r, startAngle, endAngle, anticlockwise);
        this._xi = mathCos2(endAngle) * r + cx;
        this._yi = mathSin2(endAngle) * r + cy;
        return this;
      };
      PathProxy2.prototype.arcTo = function(x1, y1, x2, y2, radius) {
        this._drawPendingPt();
        if (this._ctx) {
          this._ctx.arcTo(x1, y1, x2, y2, radius);
        }
        return this;
      };
      PathProxy2.prototype.rect = function(x, y, w, h) {
        this._drawPendingPt();
        this._ctx && this._ctx.rect(x, y, w, h);
        this.addData(CMD.R, x, y, w, h);
        return this;
      };
      PathProxy2.prototype.closePath = function() {
        this._drawPendingPt();
        this.addData(CMD.Z);
        var ctx = this._ctx;
        var x0 = this._x0;
        var y0 = this._y0;
        if (ctx) {
          ctx.closePath();
        }
        this._xi = x0;
        this._yi = y0;
        return this;
      };
      PathProxy2.prototype.fill = function(ctx) {
        ctx && ctx.fill();
        this.toStatic();
      };
      PathProxy2.prototype.stroke = function(ctx) {
        ctx && ctx.stroke();
        this.toStatic();
      };
      PathProxy2.prototype.len = function() {
        return this._len;
      };
      PathProxy2.prototype.setData = function(data) {
        var len2 = data.length;
        if (!(this.data && this.data.length === len2) && hasTypedArray) {
          this.data = new Float32Array(len2);
        }
        for (var i = 0; i < len2; i++) {
          this.data[i] = data[i];
        }
        this._len = len2;
      };
      PathProxy2.prototype.appendPath = function(path) {
        if (!(path instanceof Array)) {
          path = [path];
        }
        var len2 = path.length;
        var appendSize = 0;
        var offset = this._len;
        for (var i = 0; i < len2; i++) {
          appendSize += path[i].len();
        }
        if (hasTypedArray && this.data instanceof Float32Array) {
          this.data = new Float32Array(offset + appendSize);
        }
        for (var i = 0; i < len2; i++) {
          var appendPathData = path[i].data;
          for (var k = 0; k < appendPathData.length; k++) {
            this.data[offset++] = appendPathData[k];
          }
        }
        this._len = offset;
      };
      PathProxy2.prototype.addData = function(cmd, a, b, c, d, e, f, g, h) {
        if (!this._saveData) {
          return;
        }
        var data = this.data;
        if (this._len + arguments.length > data.length) {
          this._expandData();
          data = this.data;
        }
        for (var i = 0; i < arguments.length; i++) {
          data[this._len++] = arguments[i];
        }
      };
      PathProxy2.prototype._drawPendingPt = function() {
        if (this._pendingPtDist > 0) {
          this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY);
          this._pendingPtDist = 0;
        }
      };
      PathProxy2.prototype._expandData = function() {
        if (!(this.data instanceof Array)) {
          var newData = [];
          for (var i = 0; i < this._len; i++) {
            newData[i] = this.data[i];
          }
          this.data = newData;
        }
      };
      PathProxy2.prototype.toStatic = function() {
        if (!this._saveData) {
          return;
        }
        this._drawPendingPt();
        var data = this.data;
        if (data instanceof Array) {
          data.length = this._len;
          if (hasTypedArray && this._len > 11) {
            this.data = new Float32Array(data);
          }
        }
      };
      PathProxy2.prototype.getBoundingRect = function() {
        min2[0] = min2[1] = min22[0] = min22[1] = Number.MAX_VALUE;
        max2[0] = max2[1] = max22[0] = max22[1] = -Number.MAX_VALUE;
        var data = this.data;
        var xi = 0;
        var yi = 0;
        var x0 = 0;
        var y0 = 0;
        var i;
        for (i = 0; i < this._len; ) {
          var cmd = data[i++];
          var isFirst = i === 1;
          if (isFirst) {
            xi = data[i];
            yi = data[i + 1];
            x0 = xi;
            y0 = yi;
          }
          switch (cmd) {
            case CMD.M:
              xi = x0 = data[i++];
              yi = y0 = data[i++];
              min22[0] = x0;
              min22[1] = y0;
              max22[0] = x0;
              max22[1] = y0;
              break;
            case CMD.L:
              fromLine(xi, yi, data[i], data[i + 1], min22, max22);
              xi = data[i++];
              yi = data[i++];
              break;
            case CMD.C:
              fromCubic(xi, yi, data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1], min22, max22);
              xi = data[i++];
              yi = data[i++];
              break;
            case CMD.Q:
              fromQuadratic(xi, yi, data[i++], data[i++], data[i], data[i + 1], min22, max22);
              xi = data[i++];
              yi = data[i++];
              break;
            case CMD.A:
              var cx = data[i++];
              var cy = data[i++];
              var rx = data[i++];
              var ry = data[i++];
              var startAngle = data[i++];
              var endAngle = data[i++] + startAngle;
              i += 1;
              var anticlockwise = !data[i++];
              if (isFirst) {
                x0 = mathCos2(startAngle) * rx + cx;
                y0 = mathSin2(startAngle) * ry + cy;
              }
              fromArc(cx, cy, rx, ry, startAngle, endAngle, anticlockwise, min22, max22);
              xi = mathCos2(endAngle) * rx + cx;
              yi = mathSin2(endAngle) * ry + cy;
              break;
            case CMD.R:
              x0 = xi = data[i++];
              y0 = yi = data[i++];
              var width = data[i++];
              var height = data[i++];
              fromLine(x0, y0, x0 + width, y0 + height, min22, max22);
              break;
            case CMD.Z:
              xi = x0;
              yi = y0;
              break;
          }
          min(min2, min2, min22);
          max(max2, max2, max22);
        }
        if (i === 0) {
          min2[0] = min2[1] = max2[0] = max2[1] = 0;
        }
        return new BoundingRect_default(min2[0], min2[1], max2[0] - min2[0], max2[1] - min2[1]);
      };
      PathProxy2.prototype._calculateLength = function() {
        var data = this.data;
        var len2 = this._len;
        var ux = this._ux;
        var uy = this._uy;
        var xi = 0;
        var yi = 0;
        var x0 = 0;
        var y0 = 0;
        if (!this._pathSegLen) {
          this._pathSegLen = [];
        }
        var pathSegLen = this._pathSegLen;
        var pathTotalLen = 0;
        var segCount = 0;
        for (var i = 0; i < len2; ) {
          var cmd = data[i++];
          var isFirst = i === 1;
          if (isFirst) {
            xi = data[i];
            yi = data[i + 1];
            x0 = xi;
            y0 = yi;
          }
          var l = -1;
          switch (cmd) {
            case CMD.M:
              xi = x0 = data[i++];
              yi = y0 = data[i++];
              break;
            case CMD.L: {
              var x2 = data[i++];
              var y2 = data[i++];
              var dx = x2 - xi;
              var dy = y2 - yi;
              if (mathAbs(dx) > ux || mathAbs(dy) > uy || i === len2 - 1) {
                l = Math.sqrt(dx * dx + dy * dy);
                xi = x2;
                yi = y2;
              }
              break;
            }
            case CMD.C: {
              var x1 = data[i++];
              var y1 = data[i++];
              var x2 = data[i++];
              var y2 = data[i++];
              var x3 = data[i++];
              var y3 = data[i++];
              l = cubicLength(xi, yi, x1, y1, x2, y2, x3, y3, 10);
              xi = x3;
              yi = y3;
              break;
            }
            case CMD.Q: {
              var x1 = data[i++];
              var y1 = data[i++];
              var x2 = data[i++];
              var y2 = data[i++];
              l = quadraticLength(xi, yi, x1, y1, x2, y2, 10);
              xi = x2;
              yi = y2;
              break;
            }
            case CMD.A:
              var cx = data[i++];
              var cy = data[i++];
              var rx = data[i++];
              var ry = data[i++];
              var startAngle = data[i++];
              var delta = data[i++];
              var endAngle = delta + startAngle;
              i += 1;
              if (isFirst) {
                x0 = mathCos2(startAngle) * rx + cx;
                y0 = mathSin2(startAngle) * ry + cy;
              }
              l = mathMax3(rx, ry) * mathMin3(PI22, Math.abs(delta));
              xi = mathCos2(endAngle) * rx + cx;
              yi = mathSin2(endAngle) * ry + cy;
              break;
            case CMD.R: {
              x0 = xi = data[i++];
              y0 = yi = data[i++];
              var width = data[i++];
              var height = data[i++];
              l = width * 2 + height * 2;
              break;
            }
            case CMD.Z: {
              var dx = x0 - xi;
              var dy = y0 - yi;
              l = Math.sqrt(dx * dx + dy * dy);
              xi = x0;
              yi = y0;
              break;
            }
          }
          if (l >= 0) {
            pathSegLen[segCount++] = l;
            pathTotalLen += l;
          }
        }
        this._pathLen = pathTotalLen;
        return pathTotalLen;
      };
      PathProxy2.prototype.rebuildPath = function(ctx, percent) {
        var d = this.data;
        var ux = this._ux;
        var uy = this._uy;
        var len2 = this._len;
        var x0;
        var y0;
        var xi;
        var yi;
        var x;
        var y;
        var drawPart = percent < 1;
        var pathSegLen;
        var pathTotalLen;
        var accumLength = 0;
        var segCount = 0;
        var displayedLength;
        var pendingPtDist = 0;
        var pendingPtX;
        var pendingPtY;
        if (drawPart) {
          if (!this._pathSegLen) {
            this._calculateLength();
          }
          pathSegLen = this._pathSegLen;
          pathTotalLen = this._pathLen;
          displayedLength = percent * pathTotalLen;
          if (!displayedLength) {
            return;
          }
        }
        lo: for (var i = 0; i < len2; ) {
          var cmd = d[i++];
          var isFirst = i === 1;
          if (isFirst) {
            xi = d[i];
            yi = d[i + 1];
            x0 = xi;
            y0 = yi;
          }
          if (cmd !== CMD.L && pendingPtDist > 0) {
            ctx.lineTo(pendingPtX, pendingPtY);
            pendingPtDist = 0;
          }
          switch (cmd) {
            case CMD.M:
              x0 = xi = d[i++];
              y0 = yi = d[i++];
              ctx.moveTo(xi, yi);
              break;
            case CMD.L: {
              x = d[i++];
              y = d[i++];
              var dx = mathAbs(x - xi);
              var dy = mathAbs(y - yi);
              if (dx > ux || dy > uy) {
                if (drawPart) {
                  var l = pathSegLen[segCount++];
                  if (accumLength + l > displayedLength) {
                    var t = (displayedLength - accumLength) / l;
                    ctx.lineTo(xi * (1 - t) + x * t, yi * (1 - t) + y * t);
                    break lo;
                  }
                  accumLength += l;
                }
                ctx.lineTo(x, y);
                xi = x;
                yi = y;
                pendingPtDist = 0;
              } else {
                var d2 = dx * dx + dy * dy;
                if (d2 > pendingPtDist) {
                  pendingPtX = x;
                  pendingPtY = y;
                  pendingPtDist = d2;
                }
              }
              break;
            }
            case CMD.C: {
              var x1 = d[i++];
              var y1 = d[i++];
              var x2 = d[i++];
              var y2 = d[i++];
              var x3 = d[i++];
              var y3 = d[i++];
              if (drawPart) {
                var l = pathSegLen[segCount++];
                if (accumLength + l > displayedLength) {
                  var t = (displayedLength - accumLength) / l;
                  cubicSubdivide(xi, x1, x2, x3, t, tmpOutX);
                  cubicSubdivide(yi, y1, y2, y3, t, tmpOutY);
                  ctx.bezierCurveTo(tmpOutX[1], tmpOutY[1], tmpOutX[2], tmpOutY[2], tmpOutX[3], tmpOutY[3]);
                  break lo;
                }
                accumLength += l;
              }
              ctx.bezierCurveTo(x1, y1, x2, y2, x3, y3);
              xi = x3;
              yi = y3;
              break;
            }
            case CMD.Q: {
              var x1 = d[i++];
              var y1 = d[i++];
              var x2 = d[i++];
              var y2 = d[i++];
              if (drawPart) {
                var l = pathSegLen[segCount++];
                if (accumLength + l > displayedLength) {
                  var t = (displayedLength - accumLength) / l;
                  quadraticSubdivide(xi, x1, x2, t, tmpOutX);
                  quadraticSubdivide(yi, y1, y2, t, tmpOutY);
                  ctx.quadraticCurveTo(tmpOutX[1], tmpOutY[1], tmpOutX[2], tmpOutY[2]);
                  break lo;
                }
                accumLength += l;
              }
              ctx.quadraticCurveTo(x1, y1, x2, y2);
              xi = x2;
              yi = y2;
              break;
            }
            case CMD.A:
              var cx = d[i++];
              var cy = d[i++];
              var rx = d[i++];
              var ry = d[i++];
              var startAngle = d[i++];
              var delta = d[i++];
              var psi = d[i++];
              var anticlockwise = !d[i++];
              var r = rx > ry ? rx : ry;
              var isEllipse = mathAbs(rx - ry) > 1e-3;
              var endAngle = startAngle + delta;
              var breakBuild = false;
              if (drawPart) {
                var l = pathSegLen[segCount++];
                if (accumLength + l > displayedLength) {
                  endAngle = startAngle + delta * (displayedLength - accumLength) / l;
                  breakBuild = true;
                }
                accumLength += l;
              }
              if (isEllipse && ctx.ellipse) {
                ctx.ellipse(cx, cy, rx, ry, psi, startAngle, endAngle, anticlockwise);
              } else {
                ctx.arc(cx, cy, r, startAngle, endAngle, anticlockwise);
              }
              if (breakBuild) {
                break lo;
              }
              if (isFirst) {
                x0 = mathCos2(startAngle) * rx + cx;
                y0 = mathSin2(startAngle) * ry + cy;
              }
              xi = mathCos2(endAngle) * rx + cx;
              yi = mathSin2(endAngle) * ry + cy;
              break;
            case CMD.R:
              x0 = xi = d[i];
              y0 = yi = d[i + 1];
              x = d[i++];
              y = d[i++];
              var width = d[i++];
              var height = d[i++];
              if (drawPart) {
                var l = pathSegLen[segCount++];
                if (accumLength + l > displayedLength) {
                  var d_1 = displayedLength - accumLength;
                  ctx.moveTo(x, y);
                  ctx.lineTo(x + mathMin3(d_1, width), y);
                  d_1 -= width;
                  if (d_1 > 0) {
                    ctx.lineTo(x + width, y + mathMin3(d_1, height));
                  }
                  d_1 -= height;
                  if (d_1 > 0) {
                    ctx.lineTo(x + mathMax3(width - d_1, 0), y + height);
                  }
                  d_1 -= width;
                  if (d_1 > 0) {
                    ctx.lineTo(x, y + mathMax3(height - d_1, 0));
                  }
                  break lo;
                }
                accumLength += l;
              }
              ctx.rect(x, y, width, height);
              break;
            case CMD.Z:
              if (drawPart) {
                var l = pathSegLen[segCount++];
                if (accumLength + l > displayedLength) {
                  var t = (displayedLength - accumLength) / l;
                  ctx.lineTo(xi * (1 - t) + x0 * t, yi * (1 - t) + y0 * t);
                  break lo;
                }
                accumLength += l;
              }
              ctx.closePath();
              xi = x0;
              yi = y0;
          }
        }
      };
      PathProxy2.prototype.clone = function() {
        var newProxy = new PathProxy2();
        var data = this.data;
        newProxy.data = data.slice ? data.slice() : Array.prototype.slice.call(data);
        newProxy._len = this._len;
        return newProxy;
      };
      PathProxy2.CMD = CMD;
      PathProxy2.initDefaultProps = function() {
        var proto = PathProxy2.prototype;
        proto._saveData = true;
        proto._ux = 0;
        proto._uy = 0;
        proto._pendingPtDist = 0;
        proto._version = 0;
      }();
      return PathProxy2;
    }();
    PathProxy_default = PathProxy;
  }
});

// node_modules/zrender/lib/graphic/helper/image.js
function findExistImage(newImageOrSrc) {
  if (typeof newImageOrSrc === "string") {
    var cachedImgObj = globalImageCache.get(newImageOrSrc);
    return cachedImgObj && cachedImgObj.image;
  } else {
    return newImageOrSrc;
  }
}
function createOrUpdateImage(newImageOrSrc, image, hostEl, onload, cbPayload) {
  if (!newImageOrSrc) {
    return image;
  } else if (typeof newImageOrSrc === "string") {
    if (image && image.__zrImageSrc === newImageOrSrc || !hostEl) {
      return image;
    }
    var cachedImgObj = globalImageCache.get(newImageOrSrc);
    var pendingWrap = {
      hostEl,
      cb: onload,
      cbPayload
    };
    if (cachedImgObj) {
      image = cachedImgObj.image;
      !isImageReady(image) && cachedImgObj.pending.push(pendingWrap);
    } else {
      image = platformApi.loadImage(newImageOrSrc, imageOnLoad, imageOnLoad);
      image.__zrImageSrc = newImageOrSrc;
      globalImageCache.put(newImageOrSrc, image.__cachedImgObj = {
        image,
        pending: [pendingWrap]
      });
    }
    return image;
  } else {
    return newImageOrSrc;
  }
}
function imageOnLoad() {
  var cachedImgObj = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var i = 0; i < cachedImgObj.pending.length; i++) {
    var pendingWrap = cachedImgObj.pending[i];
    var cb = pendingWrap.cb;
    cb && cb(this, pendingWrap.cbPayload);
    pendingWrap.hostEl.dirty();
  }
  cachedImgObj.pending.length = 0;
}
function isImageReady(image) {
  return image && image.width && image.height;
}
var globalImageCache;
var init_image = __esm({
  "node_modules/zrender/lib/graphic/helper/image.js"() {
    init_LRU();
    init_platform();
    globalImageCache = new LRU_default(50);
  }
});

// node_modules/zrender/lib/canvas/helper.js
function isSafeNum(num) {
  return isFinite(num);
}
function createLinearGradient(ctx, obj, rect) {
  var x = obj.x == null ? 0 : obj.x;
  var x2 = obj.x2 == null ? 1 : obj.x2;
  var y = obj.y == null ? 0 : obj.y;
  var y2 = obj.y2 == null ? 0 : obj.y2;
  if (!obj.global) {
    x = x * rect.width + rect.x;
    x2 = x2 * rect.width + rect.x;
    y = y * rect.height + rect.y;
    y2 = y2 * rect.height + rect.y;
  }
  x = isSafeNum(x) ? x : 0;
  x2 = isSafeNum(x2) ? x2 : 1;
  y = isSafeNum(y) ? y : 0;
  y2 = isSafeNum(y2) ? y2 : 0;
  var canvasGradient = ctx.createLinearGradient(x, y, x2, y2);
  return canvasGradient;
}
function createRadialGradient(ctx, obj, rect) {
  var width = rect.width;
  var height = rect.height;
  var min3 = Math.min(width, height);
  var x = obj.x == null ? 0.5 : obj.x;
  var y = obj.y == null ? 0.5 : obj.y;
  var r = obj.r == null ? 0.5 : obj.r;
  if (!obj.global) {
    x = x * width + rect.x;
    y = y * height + rect.y;
    r = r * min3;
  }
  x = isSafeNum(x) ? x : 0.5;
  y = isSafeNum(y) ? y : 0.5;
  r = r >= 0 && isSafeNum(r) ? r : 0.5;
  var canvasGradient = ctx.createRadialGradient(x, y, 0, x, y, r);
  return canvasGradient;
}
function getCanvasGradient(ctx, obj, rect) {
  var canvasGradient = obj.type === "radial" ? createRadialGradient(ctx, obj, rect) : createLinearGradient(ctx, obj, rect);
  var colorStops = obj.colorStops;
  for (var i = 0; i < colorStops.length; i++) {
    canvasGradient.addColorStop(colorStops[i].offset, colorStops[i].color);
  }
  return canvasGradient;
}
function isClipPathChanged(clipPaths, prevClipPaths) {
  if (clipPaths === prevClipPaths || !clipPaths && !prevClipPaths) {
    return false;
  }
  if (!clipPaths || !prevClipPaths || clipPaths.length !== prevClipPaths.length) {
    return true;
  }
  for (var i = 0; i < clipPaths.length; i++) {
    if (clipPaths[i] !== prevClipPaths[i]) {
      return true;
    }
  }
  return false;
}
function parseInt10(val) {
  return parseInt(val, 10);
}
function getSize(root, whIdx, opts) {
  var wh = ["width", "height"][whIdx];
  var cwh = ["clientWidth", "clientHeight"][whIdx];
  var plt = ["paddingLeft", "paddingTop"][whIdx];
  var prb = ["paddingRight", "paddingBottom"][whIdx];
  if (opts[wh] != null && opts[wh] !== "auto") {
    return parseFloat(opts[wh]);
  }
  var stl = document.defaultView.getComputedStyle(root);
  return (root[cwh] || parseInt10(stl[wh]) || parseInt10(root.style[wh])) - (parseInt10(stl[plt]) || 0) - (parseInt10(stl[prb]) || 0) | 0;
}
var init_helper2 = __esm({
  "node_modules/zrender/lib/canvas/helper.js"() {
  }
});

// node_modules/zrender/lib/contain/line.js
function containStroke(x0, y0, x1, y1, lineWidth, x, y) {
  if (lineWidth === 0) {
    return false;
  }
  var _l = lineWidth;
  var _a = 0;
  var _b = x0;
  if (y > y0 + _l && y > y1 + _l || y < y0 - _l && y < y1 - _l || x > x0 + _l && x > x1 + _l || x < x0 - _l && x < x1 - _l) {
    return false;
  }
  if (x0 !== x1) {
    _a = (y0 - y1) / (x0 - x1);
    _b = (x0 * y1 - x1 * y0) / (x0 - x1);
  } else {
    return Math.abs(x - x0) <= _l / 2;
  }
  var tmp = _a * x - y + _b;
  var _s = tmp * tmp / (_a * _a + 1);
  return _s <= _l / 2 * _l / 2;
}
var init_line = __esm({
  "node_modules/zrender/lib/contain/line.js"() {
  }
});

// node_modules/zrender/lib/contain/cubic.js
function containStroke2(x0, y0, x1, y1, x2, y2, x3, y3, lineWidth, x, y) {
  if (lineWidth === 0) {
    return false;
  }
  var _l = lineWidth;
  if (y > y0 + _l && y > y1 + _l && y > y2 + _l && y > y3 + _l || y < y0 - _l && y < y1 - _l && y < y2 - _l && y < y3 - _l || x > x0 + _l && x > x1 + _l && x > x2 + _l && x > x3 + _l || x < x0 - _l && x < x1 - _l && x < x2 - _l && x < x3 - _l) {
    return false;
  }
  var d = cubicProjectPoint(x0, y0, x1, y1, x2, y2, x3, y3, x, y, null);
  return d <= _l / 2;
}
var init_cubic = __esm({
  "node_modules/zrender/lib/contain/cubic.js"() {
    init_curve();
  }
});

// node_modules/zrender/lib/contain/quadratic.js
function containStroke3(x0, y0, x1, y1, x2, y2, lineWidth, x, y) {
  if (lineWidth === 0) {
    return false;
  }
  var _l = lineWidth;
  if (y > y0 + _l && y > y1 + _l && y > y2 + _l || y < y0 - _l && y < y1 - _l && y < y2 - _l || x > x0 + _l && x > x1 + _l && x > x2 + _l || x < x0 - _l && x < x1 - _l && x < x2 - _l) {
    return false;
  }
  var d = quadraticProjectPoint(x0, y0, x1, y1, x2, y2, x, y, null);
  return d <= _l / 2;
}
var init_quadratic = __esm({
  "node_modules/zrender/lib/contain/quadratic.js"() {
    init_curve();
  }
});

// node_modules/zrender/lib/contain/util.js
function normalizeRadian(angle) {
  angle %= PI23;
  if (angle < 0) {
    angle += PI23;
  }
  return angle;
}
var PI23;
var init_util2 = __esm({
  "node_modules/zrender/lib/contain/util.js"() {
    PI23 = Math.PI * 2;
  }
});

// node_modules/zrender/lib/contain/arc.js
function containStroke4(cx, cy, r, startAngle, endAngle, anticlockwise, lineWidth, x, y) {
  if (lineWidth === 0) {
    return false;
  }
  var _l = lineWidth;
  x -= cx;
  y -= cy;
  var d = Math.sqrt(x * x + y * y);
  if (d - _l > r || d + _l < r) {
    return false;
  }
  if (Math.abs(startAngle - endAngle) % PI24 < 1e-4) {
    return true;
  }
  if (anticlockwise) {
    var tmp = startAngle;
    startAngle = normalizeRadian(endAngle);
    endAngle = normalizeRadian(tmp);
  } else {
    startAngle = normalizeRadian(startAngle);
    endAngle = normalizeRadian(endAngle);
  }
  if (startAngle > endAngle) {
    endAngle += PI24;
  }
  var angle = Math.atan2(y, x);
  if (angle < 0) {
    angle += PI24;
  }
  return angle >= startAngle && angle <= endAngle || angle + PI24 >= startAngle && angle + PI24 <= endAngle;
}
var PI24;
var init_arc = __esm({
  "node_modules/zrender/lib/contain/arc.js"() {
    init_util2();
    PI24 = Math.PI * 2;
  }
});

// node_modules/zrender/lib/contain/windingLine.js
function windingLine(x0, y0, x1, y1, x, y) {
  if (y > y0 && y > y1 || y < y0 && y < y1) {
    return 0;
  }
  if (y1 === y0) {
    return 0;
  }
  var t = (y - y0) / (y1 - y0);
  var dir = y1 < y0 ? 1 : -1;
  if (t === 1 || t === 0) {
    dir = y1 < y0 ? 0.5 : -0.5;
  }
  var x_ = t * (x1 - x0) + x0;
  return x_ === x ? Infinity : x_ > x ? dir : 0;
}
var init_windingLine = __esm({
  "node_modules/zrender/lib/contain/windingLine.js"() {
  }
});

// node_modules/zrender/lib/contain/path.js
function isAroundEqual(a, b) {
  return Math.abs(a - b) < EPSILON4;
}
function swapExtrema() {
  var tmp = extrema[0];
  extrema[0] = extrema[1];
  extrema[1] = tmp;
}
function windingCubic(x0, y0, x1, y1, x2, y2, x3, y3, x, y) {
  if (y > y0 && y > y1 && y > y2 && y > y3 || y < y0 && y < y1 && y < y2 && y < y3) {
    return 0;
  }
  var nRoots = cubicRootAt(y0, y1, y2, y3, y, roots);
  if (nRoots === 0) {
    return 0;
  } else {
    var w = 0;
    var nExtrema = -1;
    var y0_ = void 0;
    var y1_ = void 0;
    for (var i = 0; i < nRoots; i++) {
      var t = roots[i];
      var unit = t === 0 || t === 1 ? 0.5 : 1;
      var x_ = cubicAt(x0, x1, x2, x3, t);
      if (x_ < x) {
        continue;
      }
      if (nExtrema < 0) {
        nExtrema = cubicExtrema(y0, y1, y2, y3, extrema);
        if (extrema[1] < extrema[0] && nExtrema > 1) {
          swapExtrema();
        }
        y0_ = cubicAt(y0, y1, y2, y3, extrema[0]);
        if (nExtrema > 1) {
          y1_ = cubicAt(y0, y1, y2, y3, extrema[1]);
        }
      }
      if (nExtrema === 2) {
        if (t < extrema[0]) {
          w += y0_ < y0 ? unit : -unit;
        } else if (t < extrema[1]) {
          w += y1_ < y0_ ? unit : -unit;
        } else {
          w += y3 < y1_ ? unit : -unit;
        }
      } else {
        if (t < extrema[0]) {
          w += y0_ < y0 ? unit : -unit;
        } else {
          w += y3 < y0_ ? unit : -unit;
        }
      }
    }
    return w;
  }
}
function windingQuadratic(x0, y0, x1, y1, x2, y2, x, y) {
  if (y > y0 && y > y1 && y > y2 || y < y0 && y < y1 && y < y2) {
    return 0;
  }
  var nRoots = quadraticRootAt(y0, y1, y2, y, roots);
  if (nRoots === 0) {
    return 0;
  } else {
    var t = quadraticExtremum(y0, y1, y2);
    if (t >= 0 && t <= 1) {
      var w = 0;
      var y_ = quadraticAt(y0, y1, y2, t);
      for (var i = 0; i < nRoots; i++) {
        var unit = roots[i] === 0 || roots[i] === 1 ? 0.5 : 1;
        var x_ = quadraticAt(x0, x1, x2, roots[i]);
        if (x_ < x) {
          continue;
        }
        if (roots[i] < t) {
          w += y_ < y0 ? unit : -unit;
        } else {
          w += y2 < y_ ? unit : -unit;
        }
      }
      return w;
    } else {
      var unit = roots[0] === 0 || roots[0] === 1 ? 0.5 : 1;
      var x_ = quadraticAt(x0, x1, x2, roots[0]);
      if (x_ < x) {
        return 0;
      }
      return y2 < y0 ? unit : -unit;
    }
  }
}
function windingArc(cx, cy, r, startAngle, endAngle, anticlockwise, x, y) {
  y -= cy;
  if (y > r || y < -r) {
    return 0;
  }
  var tmp = Math.sqrt(r * r - y * y);
  roots[0] = -tmp;
  roots[1] = tmp;
  var dTheta = Math.abs(startAngle - endAngle);
  if (dTheta < 1e-4) {
    return 0;
  }
  if (dTheta >= PI25 - 1e-4) {
    startAngle = 0;
    endAngle = PI25;
    var dir = anticlockwise ? 1 : -1;
    if (x >= roots[0] + cx && x <= roots[1] + cx) {
      return dir;
    } else {
      return 0;
    }
  }
  if (startAngle > endAngle) {
    var tmp_1 = startAngle;
    startAngle = endAngle;
    endAngle = tmp_1;
  }
  if (startAngle < 0) {
    startAngle += PI25;
    endAngle += PI25;
  }
  var w = 0;
  for (var i = 0; i < 2; i++) {
    var x_ = roots[i];
    if (x_ + cx > x) {
      var angle = Math.atan2(y, x_);
      var dir = anticlockwise ? 1 : -1;
      if (angle < 0) {
        angle = PI25 + angle;
      }
      if (angle >= startAngle && angle <= endAngle || angle + PI25 >= startAngle && angle + PI25 <= endAngle) {
        if (angle > Math.PI / 2 && angle < Math.PI * 1.5) {
          dir = -dir;
        }
        w += dir;
      }
    }
  }
  return w;
}
function containPath(path, lineWidth, isStroke, x, y) {
  var data = path.data;
  var len2 = path.len();
  var w = 0;
  var xi = 0;
  var yi = 0;
  var x0 = 0;
  var y0 = 0;
  var x1;
  var y1;
  for (var i = 0; i < len2; ) {
    var cmd = data[i++];
    var isFirst = i === 1;
    if (cmd === CMD2.M && i > 1) {
      if (!isStroke) {
        w += windingLine(xi, yi, x0, y0, x, y);
      }
    }
    if (isFirst) {
      xi = data[i];
      yi = data[i + 1];
      x0 = xi;
      y0 = yi;
    }
    switch (cmd) {
      case CMD2.M:
        x0 = data[i++];
        y0 = data[i++];
        xi = x0;
        yi = y0;
        break;
      case CMD2.L:
        if (isStroke) {
          if (containStroke(xi, yi, data[i], data[i + 1], lineWidth, x, y)) {
            return true;
          }
        } else {
          w += windingLine(xi, yi, data[i], data[i + 1], x, y) || 0;
        }
        xi = data[i++];
        yi = data[i++];
        break;
      case CMD2.C:
        if (isStroke) {
          if (containStroke2(xi, yi, data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1], lineWidth, x, y)) {
            return true;
          }
        } else {
          w += windingCubic(xi, yi, data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1], x, y) || 0;
        }
        xi = data[i++];
        yi = data[i++];
        break;
      case CMD2.Q:
        if (isStroke) {
          if (containStroke3(xi, yi, data[i++], data[i++], data[i], data[i + 1], lineWidth, x, y)) {
            return true;
          }
        } else {
          w += windingQuadratic(xi, yi, data[i++], data[i++], data[i], data[i + 1], x, y) || 0;
        }
        xi = data[i++];
        yi = data[i++];
        break;
      case CMD2.A:
        var cx = data[i++];
        var cy = data[i++];
        var rx = data[i++];
        var ry = data[i++];
        var theta = data[i++];
        var dTheta = data[i++];
        i += 1;
        var anticlockwise = !!(1 - data[i++]);
        x1 = Math.cos(theta) * rx + cx;
        y1 = Math.sin(theta) * ry + cy;
        if (!isFirst) {
          w += windingLine(xi, yi, x1, y1, x, y);
        } else {
          x0 = x1;
          y0 = y1;
        }
        var _x = (x - cx) * ry / rx + cx;
        if (isStroke) {
          if (containStroke4(cx, cy, ry, theta, theta + dTheta, anticlockwise, lineWidth, _x, y)) {
            return true;
          }
        } else {
          w += windingArc(cx, cy, ry, theta, theta + dTheta, anticlockwise, _x, y);
        }
        xi = Math.cos(theta + dTheta) * rx + cx;
        yi = Math.sin(theta + dTheta) * ry + cy;
        break;
      case CMD2.R:
        x0 = xi = data[i++];
        y0 = yi = data[i++];
        var width = data[i++];
        var height = data[i++];
        x1 = x0 + width;
        y1 = y0 + height;
        if (isStroke) {
          if (containStroke(x0, y0, x1, y0, lineWidth, x, y) || containStroke(x1, y0, x1, y1, lineWidth, x, y) || containStroke(x1, y1, x0, y1, lineWidth, x, y) || containStroke(x0, y1, x0, y0, lineWidth, x, y)) {
            return true;
          }
        } else {
          w += windingLine(x1, y0, x1, y1, x, y);
          w += windingLine(x0, y1, x0, y0, x, y);
        }
        break;
      case CMD2.Z:
        if (isStroke) {
          if (containStroke(xi, yi, x0, y0, lineWidth, x, y)) {
            return true;
          }
        } else {
          w += windingLine(xi, yi, x0, y0, x, y);
        }
        xi = x0;
        yi = y0;
        break;
    }
  }
  if (!isStroke && !isAroundEqual(yi, y0)) {
    w += windingLine(xi, yi, x0, y0, x, y) || 0;
  }
  return w !== 0;
}
function contain(pathProxy, x, y) {
  return containPath(pathProxy, 0, false, x, y);
}
function containStroke5(pathProxy, lineWidth, x, y) {
  return containPath(pathProxy, lineWidth, true, x, y);
}
var CMD2, PI25, EPSILON4, roots, extrema;
var init_path = __esm({
  "node_modules/zrender/lib/contain/path.js"() {
    init_PathProxy();
    init_line();
    init_cubic();
    init_quadratic();
    init_arc();
    init_curve();
    init_windingLine();
    CMD2 = PathProxy_default.CMD;
    PI25 = Math.PI * 2;
    EPSILON4 = 1e-4;
    roots = [-1, -1, -1];
    extrema = [-1, -1];
  }
});

// node_modules/zrender/lib/graphic/Path.js
var DEFAULT_PATH_STYLE, DEFAULT_PATH_ANIMATION_PROPS, pathCopyParams, Path, Path_default;
var init_Path = __esm({
  "node_modules/zrender/lib/graphic/Path.js"() {
    init_tslib_es6();
    init_Displayable();
    init_PathProxy();
    init_path();
    init_util();
    init_color();
    init_config();
    init_constants();
    init_Transformable();
    DEFAULT_PATH_STYLE = defaults({
      fill: "#000",
      stroke: null,
      strokePercent: 1,
      fillOpacity: 1,
      strokeOpacity: 1,
      lineDashOffset: 0,
      lineWidth: 1,
      lineCap: "butt",
      miterLimit: 10,
      strokeNoScale: false,
      strokeFirst: false
    }, DEFAULT_COMMON_STYLE);
    DEFAULT_PATH_ANIMATION_PROPS = {
      style: defaults({
        fill: true,
        stroke: true,
        strokePercent: true,
        fillOpacity: true,
        strokeOpacity: true,
        lineDashOffset: true,
        lineWidth: true,
        miterLimit: true
      }, DEFAULT_COMMON_ANIMATION_PROPS.style)
    };
    pathCopyParams = TRANSFORMABLE_PROPS.concat(["invisible", "culling", "z", "z2", "zlevel", "parent"]);
    Path = function(_super) {
      __extends(Path2, _super);
      function Path2(opts) {
        return _super.call(this, opts) || this;
      }
      Path2.prototype.update = function() {
        var _this = this;
        _super.prototype.update.call(this);
        var style = this.style;
        if (style.decal) {
          var decalEl = this._decalEl = this._decalEl || new Path2();
          if (decalEl.buildPath === Path2.prototype.buildPath) {
            decalEl.buildPath = function(ctx) {
              _this.buildPath(ctx, _this.shape);
            };
          }
          decalEl.silent = true;
          var decalElStyle = decalEl.style;
          for (var key in style) {
            if (decalElStyle[key] !== style[key]) {
              decalElStyle[key] = style[key];
            }
          }
          decalElStyle.fill = style.fill ? style.decal : null;
          decalElStyle.decal = null;
          decalElStyle.shadowColor = null;
          style.strokeFirst && (decalElStyle.stroke = null);
          for (var i = 0; i < pathCopyParams.length; ++i) {
            decalEl[pathCopyParams[i]] = this[pathCopyParams[i]];
          }
          decalEl.__dirty |= REDRAW_BIT;
        } else if (this._decalEl) {
          this._decalEl = null;
        }
      };
      Path2.prototype.getDecalElement = function() {
        return this._decalEl;
      };
      Path2.prototype._init = function(props) {
        var keysArr = keys(props);
        this.shape = this.getDefaultShape();
        var defaultStyle = this.getDefaultStyle();
        if (defaultStyle) {
          this.useStyle(defaultStyle);
        }
        for (var i = 0; i < keysArr.length; i++) {
          var key = keysArr[i];
          var value = props[key];
          if (key === "style") {
            if (!this.style) {
              this.useStyle(value);
            } else {
              extend(this.style, value);
            }
          } else if (key === "shape") {
            extend(this.shape, value);
          } else {
            _super.prototype.attrKV.call(this, key, value);
          }
        }
        if (!this.style) {
          this.useStyle({});
        }
      };
      Path2.prototype.getDefaultStyle = function() {
        return null;
      };
      Path2.prototype.getDefaultShape = function() {
        return {};
      };
      Path2.prototype.canBeInsideText = function() {
        return this.hasFill();
      };
      Path2.prototype.getInsideTextFill = function() {
        var pathFill = this.style.fill;
        if (pathFill !== "none") {
          if (isString(pathFill)) {
            var fillLum = lum(pathFill, 0);
            if (fillLum > 0.5) {
              return DARK_LABEL_COLOR;
            } else if (fillLum > 0.2) {
              return LIGHTER_LABEL_COLOR;
            }
            return LIGHT_LABEL_COLOR;
          } else if (pathFill) {
            return LIGHT_LABEL_COLOR;
          }
        }
        return DARK_LABEL_COLOR;
      };
      Path2.prototype.getInsideTextStroke = function(textFill) {
        var pathFill = this.style.fill;
        if (isString(pathFill)) {
          var zr = this.__zr;
          var isDarkMode2 = !!(zr && zr.isDarkMode());
          var isDarkLabel = lum(textFill, 0) < DARK_MODE_THRESHOLD;
          if (isDarkMode2 === isDarkLabel) {
            return pathFill;
          }
        }
      };
      Path2.prototype.buildPath = function(ctx, shapeCfg, inBatch) {
      };
      Path2.prototype.pathUpdated = function() {
        this.__dirty &= ~SHAPE_CHANGED_BIT;
      };
      Path2.prototype.getUpdatedPathProxy = function(inBatch) {
        !this.path && this.createPathProxy();
        this.path.beginPath();
        this.buildPath(this.path, this.shape, inBatch);
        return this.path;
      };
      Path2.prototype.createPathProxy = function() {
        this.path = new PathProxy_default(false);
      };
      Path2.prototype.hasStroke = function() {
        var style = this.style;
        var stroke = style.stroke;
        return !(stroke == null || stroke === "none" || !(style.lineWidth > 0));
      };
      Path2.prototype.hasFill = function() {
        var style = this.style;
        var fill = style.fill;
        return fill != null && fill !== "none";
      };
      Path2.prototype.getBoundingRect = function() {
        var rect = this._rect;
        var style = this.style;
        var needsUpdateRect = !rect;
        if (needsUpdateRect) {
          var firstInvoke = false;
          if (!this.path) {
            firstInvoke = true;
            this.createPathProxy();
          }
          var path = this.path;
          if (firstInvoke || this.__dirty & SHAPE_CHANGED_BIT) {
            path.beginPath();
            this.buildPath(path, this.shape, false);
            this.pathUpdated();
          }
          rect = path.getBoundingRect();
        }
        this._rect = rect;
        if (this.hasStroke() && this.path && this.path.len() > 0) {
          var rectStroke = this._rectStroke || (this._rectStroke = rect.clone());
          if (this.__dirty || needsUpdateRect) {
            rectStroke.copy(rect);
            var lineScale = style.strokeNoScale ? this.getLineScale() : 1;
            var w = style.lineWidth;
            if (!this.hasFill()) {
              var strokeContainThreshold = this.strokeContainThreshold;
              w = Math.max(w, strokeContainThreshold == null ? 4 : strokeContainThreshold);
            }
            if (lineScale > 1e-10) {
              rectStroke.width += w / lineScale;
              rectStroke.height += w / lineScale;
              rectStroke.x -= w / lineScale / 2;
              rectStroke.y -= w / lineScale / 2;
            }
          }
          return rectStroke;
        }
        return rect;
      };
      Path2.prototype.contain = function(x, y) {
        var localPos = this.transformCoordToLocal(x, y);
        var rect = this.getBoundingRect();
        var style = this.style;
        x = localPos[0];
        y = localPos[1];
        if (rect.contain(x, y)) {
          var pathProxy = this.path;
          if (this.hasStroke()) {
            var lineWidth = style.lineWidth;
            var lineScale = style.strokeNoScale ? this.getLineScale() : 1;
            if (lineScale > 1e-10) {
              if (!this.hasFill()) {
                lineWidth = Math.max(lineWidth, this.strokeContainThreshold);
              }
              if (containStroke5(pathProxy, lineWidth / lineScale, x, y)) {
                return true;
              }
            }
          }
          if (this.hasFill()) {
            return contain(pathProxy, x, y);
          }
        }
        return false;
      };
      Path2.prototype.dirtyShape = function() {
        this.__dirty |= SHAPE_CHANGED_BIT;
        if (this._rect) {
          this._rect = null;
        }
        if (this._decalEl) {
          this._decalEl.dirtyShape();
        }
        this.markRedraw();
      };
      Path2.prototype.dirty = function() {
        this.dirtyStyle();
        this.dirtyShape();
      };
      Path2.prototype.animateShape = function(loop) {
        return this.animate("shape", loop);
      };
      Path2.prototype.updateDuringAnimation = function(targetKey) {
        if (targetKey === "style") {
          this.dirtyStyle();
        } else if (targetKey === "shape") {
          this.dirtyShape();
        } else {
          this.markRedraw();
        }
      };
      Path2.prototype.attrKV = function(key, value) {
        if (key === "shape") {
          this.setShape(value);
        } else {
          _super.prototype.attrKV.call(this, key, value);
        }
      };
      Path2.prototype.setShape = function(keyOrObj, value) {
        var shape = this.shape;
        if (!shape) {
          shape = this.shape = {};
        }
        if (typeof keyOrObj === "string") {
          shape[keyOrObj] = value;
        } else {
          extend(shape, keyOrObj);
        }
        this.dirtyShape();
        return this;
      };
      Path2.prototype.shapeChanged = function() {
        return !!(this.__dirty & SHAPE_CHANGED_BIT);
      };
      Path2.prototype.createStyle = function(obj) {
        return createObject(DEFAULT_PATH_STYLE, obj);
      };
      Path2.prototype._innerSaveToNormal = function(toState) {
        _super.prototype._innerSaveToNormal.call(this, toState);
        var normalState = this._normalState;
        if (toState.shape && !normalState.shape) {
          normalState.shape = extend({}, this.shape);
        }
      };
      Path2.prototype._applyStateObj = function(stateName, state, normalState, keepCurrentStates, transition, animationCfg) {
        _super.prototype._applyStateObj.call(this, stateName, state, normalState, keepCurrentStates, transition, animationCfg);
        var needsRestoreToNormal = !(state && keepCurrentStates);
        var targetShape;
        if (state && state.shape) {
          if (transition) {
            if (keepCurrentStates) {
              targetShape = state.shape;
            } else {
              targetShape = extend({}, normalState.shape);
              extend(targetShape, state.shape);
            }
          } else {
            targetShape = extend({}, keepCurrentStates ? this.shape : normalState.shape);
            extend(targetShape, state.shape);
          }
        } else if (needsRestoreToNormal) {
          targetShape = normalState.shape;
        }
        if (targetShape) {
          if (transition) {
            this.shape = extend({}, this.shape);
            var targetShapePrimaryProps = {};
            var shapeKeys = keys(targetShape);
            for (var i = 0; i < shapeKeys.length; i++) {
              var key = shapeKeys[i];
              if (typeof targetShape[key] === "object") {
                this.shape[key] = targetShape[key];
              } else {
                targetShapePrimaryProps[key] = targetShape[key];
              }
            }
            this._transitionState(stateName, {
              shape: targetShapePrimaryProps
            }, animationCfg);
          } else {
            this.shape = targetShape;
            this.dirtyShape();
          }
        }
      };
      Path2.prototype._mergeStates = function(states) {
        var mergedState = _super.prototype._mergeStates.call(this, states);
        var mergedShape;
        for (var i = 0; i < states.length; i++) {
          var state = states[i];
          if (state.shape) {
            mergedShape = mergedShape || {};
            this._mergeStyle(mergedShape, state.shape);
          }
        }
        if (mergedShape) {
          mergedState.shape = mergedShape;
        }
        return mergedState;
      };
      Path2.prototype.getAnimationStyleProps = function() {
        return DEFAULT_PATH_ANIMATION_PROPS;
      };
      Path2.prototype.isZeroArea = function() {
        return false;
      };
      Path2.extend = function(defaultProps) {
        var Sub = function(_super2) {
          __extends(Sub2, _super2);
          function Sub2(opts) {
            var _this = _super2.call(this, opts) || this;
            defaultProps.init && defaultProps.init.call(_this, opts);
            return _this;
          }
          Sub2.prototype.getDefaultStyle = function() {
            return clone(defaultProps.style);
          };
          Sub2.prototype.getDefaultShape = function() {
            return clone(defaultProps.shape);
          };
          return Sub2;
        }(Path2);
        for (var key in defaultProps) {
          if (typeof defaultProps[key] === "function") {
            Sub.prototype[key] = defaultProps[key];
          }
        }
        return Sub;
      };
      Path2.initDefaultProps = function() {
        var pathProto = Path2.prototype;
        pathProto.type = "path";
        pathProto.strokeContainThreshold = 5;
        pathProto.segmentIgnoreThreshold = 0;
        pathProto.subPixelOptimize = false;
        pathProto.autoBatch = false;
        pathProto.__dirty = REDRAW_BIT | STYLE_CHANGED_BIT | SHAPE_CHANGED_BIT;
      }();
      return Path2;
    }(Displayable_default);
    Path_default = Path;
  }
});

// node_modules/zrender/lib/graphic/Image.js
function isImageLike(source) {
  return !!(source && typeof source !== "string" && source.width && source.height);
}
var DEFAULT_IMAGE_STYLE, DEFAULT_IMAGE_ANIMATION_PROPS, ZRImage, Image_default;
var init_Image = __esm({
  "node_modules/zrender/lib/graphic/Image.js"() {
    init_tslib_es6();
    init_Displayable();
    init_BoundingRect();
    init_util();
    DEFAULT_IMAGE_STYLE = defaults({
      x: 0,
      y: 0
    }, DEFAULT_COMMON_STYLE);
    DEFAULT_IMAGE_ANIMATION_PROPS = {
      style: defaults({
        x: true,
        y: true,
        width: true,
        height: true,
        sx: true,
        sy: true,
        sWidth: true,
        sHeight: true
      }, DEFAULT_COMMON_ANIMATION_PROPS.style)
    };
    ZRImage = function(_super) {
      __extends(ZRImage2, _super);
      function ZRImage2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      ZRImage2.prototype.createStyle = function(obj) {
        return createObject(DEFAULT_IMAGE_STYLE, obj);
      };
      ZRImage2.prototype._getSize = function(dim) {
        var style = this.style;
        var size = style[dim];
        if (size != null) {
          return size;
        }
        var imageSource = isImageLike(style.image) ? style.image : this.__image;
        if (!imageSource) {
          return 0;
        }
        var otherDim = dim === "width" ? "height" : "width";
        var otherDimSize = style[otherDim];
        if (otherDimSize == null) {
          return imageSource[dim];
        } else {
          return imageSource[dim] / imageSource[otherDim] * otherDimSize;
        }
      };
      ZRImage2.prototype.getWidth = function() {
        return this._getSize("width");
      };
      ZRImage2.prototype.getHeight = function() {
        return this._getSize("height");
      };
      ZRImage2.prototype.getAnimationStyleProps = function() {
        return DEFAULT_IMAGE_ANIMATION_PROPS;
      };
      ZRImage2.prototype.getBoundingRect = function() {
        var style = this.style;
        if (!this._rect) {
          this._rect = new BoundingRect_default(style.x || 0, style.y || 0, this.getWidth(), this.getHeight());
        }
        return this._rect;
      };
      return ZRImage2;
    }(Displayable_default);
    ZRImage.prototype.type = "image";
    Image_default = ZRImage;
  }
});

// node_modules/zrender/lib/graphic/TSpan.js
var DEFAULT_TSPAN_STYLE, TSpan, TSpan_default;
var init_TSpan = __esm({
  "node_modules/zrender/lib/graphic/TSpan.js"() {
    init_tslib_es6();
    init_Displayable();
    init_text();
    init_Path();
    init_util();
    init_platform();
    DEFAULT_TSPAN_STYLE = defaults({
      strokeFirst: true,
      font: DEFAULT_FONT,
      x: 0,
      y: 0,
      textAlign: "left",
      textBaseline: "top",
      miterLimit: 2
    }, DEFAULT_PATH_STYLE);
    TSpan = function(_super) {
      __extends(TSpan2, _super);
      function TSpan2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      TSpan2.prototype.hasStroke = function() {
        var style = this.style;
        var stroke = style.stroke;
        return stroke != null && stroke !== "none" && style.lineWidth > 0;
      };
      TSpan2.prototype.hasFill = function() {
        var style = this.style;
        var fill = style.fill;
        return fill != null && fill !== "none";
      };
      TSpan2.prototype.createStyle = function(obj) {
        return createObject(DEFAULT_TSPAN_STYLE, obj);
      };
      TSpan2.prototype.setBoundingRect = function(rect) {
        this._rect = rect;
      };
      TSpan2.prototype.getBoundingRect = function() {
        var style = this.style;
        if (!this._rect) {
          var text = style.text;
          text != null ? text += "" : text = "";
          var rect = getBoundingRect(text, style.font, style.textAlign, style.textBaseline);
          rect.x += style.x || 0;
          rect.y += style.y || 0;
          if (this.hasStroke()) {
            var w = style.lineWidth;
            rect.x -= w / 2;
            rect.y -= w / 2;
            rect.width += w;
            rect.height += w;
          }
          this._rect = rect;
        }
        return this._rect;
      };
      TSpan2.initDefaultProps = function() {
        var tspanProto = TSpan2.prototype;
        tspanProto.dirtyRectTolerance = 10;
      }();
      return TSpan2;
    }(Displayable_default);
    TSpan.prototype.type = "tspan";
    TSpan_default = TSpan;
  }
});

// node_modules/zrender/lib/canvas/dashStyle.js
function normalizeLineDash(lineType, lineWidth) {
  if (!lineType || lineType === "solid" || !(lineWidth > 0)) {
    return null;
  }
  return lineType === "dashed" ? [4 * lineWidth, 2 * lineWidth] : lineType === "dotted" ? [lineWidth] : isNumber(lineType) ? [lineType] : isArray(lineType) ? lineType : null;
}
function getLineDash(el) {
  var style = el.style;
  var lineDash = style.lineDash && style.lineWidth > 0 && normalizeLineDash(style.lineDash, style.lineWidth);
  var lineDashOffset = style.lineDashOffset;
  if (lineDash) {
    var lineScale_1 = style.strokeNoScale && el.getLineScale ? el.getLineScale() : 1;
    if (lineScale_1 && lineScale_1 !== 1) {
      lineDash = map(lineDash, function(rawVal) {
        return rawVal / lineScale_1;
      });
      lineDashOffset /= lineScale_1;
    }
  }
  return [lineDash, lineDashOffset];
}
var init_dashStyle = __esm({
  "node_modules/zrender/lib/canvas/dashStyle.js"() {
    init_util();
  }
});

// node_modules/zrender/lib/canvas/graphic.js
function styleHasStroke(style) {
  var stroke = style.stroke;
  return !(stroke == null || stroke === "none" || !(style.lineWidth > 0));
}
function isValidStrokeFillStyle(strokeOrFill) {
  return typeof strokeOrFill === "string" && strokeOrFill !== "none";
}
function styleHasFill(style) {
  var fill = style.fill;
  return fill != null && fill !== "none";
}
function doFillPath(ctx, style) {
  if (style.fillOpacity != null && style.fillOpacity !== 1) {
    var originalGlobalAlpha = ctx.globalAlpha;
    ctx.globalAlpha = style.fillOpacity * style.opacity;
    ctx.fill();
    ctx.globalAlpha = originalGlobalAlpha;
  } else {
    ctx.fill();
  }
}
function doStrokePath(ctx, style) {
  if (style.strokeOpacity != null && style.strokeOpacity !== 1) {
    var originalGlobalAlpha = ctx.globalAlpha;
    ctx.globalAlpha = style.strokeOpacity * style.opacity;
    ctx.stroke();
    ctx.globalAlpha = originalGlobalAlpha;
  } else {
    ctx.stroke();
  }
}
function createCanvasPattern(ctx, pattern, el) {
  var image = createOrUpdateImage(pattern.image, pattern.__image, el);
  if (isImageReady(image)) {
    var canvasPattern = ctx.createPattern(image, pattern.repeat || "repeat");
    if (typeof DOMMatrix === "function" && canvasPattern && canvasPattern.setTransform) {
      var matrix = new DOMMatrix();
      matrix.translateSelf(pattern.x || 0, pattern.y || 0);
      matrix.rotateSelf(0, 0, (pattern.rotation || 0) * RADIAN_TO_DEGREE);
      matrix.scaleSelf(pattern.scaleX || 1, pattern.scaleY || 1);
      canvasPattern.setTransform(matrix);
    }
    return canvasPattern;
  }
}
function brushPath(ctx, el, style, inBatch) {
  var _a;
  var hasStroke = styleHasStroke(style);
  var hasFill = styleHasFill(style);
  var strokePercent = style.strokePercent;
  var strokePart = strokePercent < 1;
  var firstDraw = !el.path;
  if ((!el.silent || strokePart) && firstDraw) {
    el.createPathProxy();
  }
  var path = el.path || pathProxyForDraw;
  var dirtyFlag = el.__dirty;
  if (!inBatch) {
    var fill = style.fill;
    var stroke = style.stroke;
    var hasFillGradient = hasFill && !!fill.colorStops;
    var hasStrokeGradient = hasStroke && !!stroke.colorStops;
    var hasFillPattern = hasFill && !!fill.image;
    var hasStrokePattern = hasStroke && !!stroke.image;
    var fillGradient = void 0;
    var strokeGradient = void 0;
    var fillPattern = void 0;
    var strokePattern = void 0;
    var rect = void 0;
    if (hasFillGradient || hasStrokeGradient) {
      rect = el.getBoundingRect();
    }
    if (hasFillGradient) {
      fillGradient = dirtyFlag ? getCanvasGradient(ctx, fill, rect) : el.__canvasFillGradient;
      el.__canvasFillGradient = fillGradient;
    }
    if (hasStrokeGradient) {
      strokeGradient = dirtyFlag ? getCanvasGradient(ctx, stroke, rect) : el.__canvasStrokeGradient;
      el.__canvasStrokeGradient = strokeGradient;
    }
    if (hasFillPattern) {
      fillPattern = dirtyFlag || !el.__canvasFillPattern ? createCanvasPattern(ctx, fill, el) : el.__canvasFillPattern;
      el.__canvasFillPattern = fillPattern;
    }
    if (hasStrokePattern) {
      strokePattern = dirtyFlag || !el.__canvasStrokePattern ? createCanvasPattern(ctx, stroke, el) : el.__canvasStrokePattern;
      el.__canvasStrokePattern = fillPattern;
    }
    if (hasFillGradient) {
      ctx.fillStyle = fillGradient;
    } else if (hasFillPattern) {
      if (fillPattern) {
        ctx.fillStyle = fillPattern;
      } else {
        hasFill = false;
      }
    }
    if (hasStrokeGradient) {
      ctx.strokeStyle = strokeGradient;
    } else if (hasStrokePattern) {
      if (strokePattern) {
        ctx.strokeStyle = strokePattern;
      } else {
        hasStroke = false;
      }
    }
  }
  var scale3 = el.getGlobalScale();
  path.setScale(scale3[0], scale3[1], el.segmentIgnoreThreshold);
  var lineDash;
  var lineDashOffset;
  if (ctx.setLineDash && style.lineDash) {
    _a = getLineDash(el), lineDash = _a[0], lineDashOffset = _a[1];
  }
  var needsRebuild = true;
  if (firstDraw || dirtyFlag & SHAPE_CHANGED_BIT) {
    path.setDPR(ctx.dpr);
    if (strokePart) {
      path.setContext(null);
    } else {
      path.setContext(ctx);
      needsRebuild = false;
    }
    path.reset();
    el.buildPath(path, el.shape, inBatch);
    path.toStatic();
    el.pathUpdated();
  }
  if (needsRebuild) {
    path.rebuildPath(ctx, strokePart ? strokePercent : 1);
  }
  if (lineDash) {
    ctx.setLineDash(lineDash);
    ctx.lineDashOffset = lineDashOffset;
  }
  if (!inBatch) {
    if (style.strokeFirst) {
      if (hasStroke) {
        doStrokePath(ctx, style);
      }
      if (hasFill) {
        doFillPath(ctx, style);
      }
    } else {
      if (hasFill) {
        doFillPath(ctx, style);
      }
      if (hasStroke) {
        doStrokePath(ctx, style);
      }
    }
  }
  if (lineDash) {
    ctx.setLineDash([]);
  }
}
function brushImage(ctx, el, style) {
  var image = el.__image = createOrUpdateImage(style.image, el.__image, el, el.onload);
  if (!image || !isImageReady(image)) {
    return;
  }
  var x = style.x || 0;
  var y = style.y || 0;
  var width = el.getWidth();
  var height = el.getHeight();
  var aspect = image.width / image.height;
  if (width == null && height != null) {
    width = height * aspect;
  } else if (height == null && width != null) {
    height = width / aspect;
  } else if (width == null && height == null) {
    width = image.width;
    height = image.height;
  }
  if (style.sWidth && style.sHeight) {
    var sx = style.sx || 0;
    var sy = style.sy || 0;
    ctx.drawImage(image, sx, sy, style.sWidth, style.sHeight, x, y, width, height);
  } else if (style.sx && style.sy) {
    var sx = style.sx;
    var sy = style.sy;
    var sWidth = width - sx;
    var sHeight = height - sy;
    ctx.drawImage(image, sx, sy, sWidth, sHeight, x, y, width, height);
  } else {
    ctx.drawImage(image, x, y, width, height);
  }
}
function brushText(ctx, el, style) {
  var _a;
  var text = style.text;
  text != null && (text += "");
  if (text) {
    ctx.font = style.font || DEFAULT_FONT;
    ctx.textAlign = style.textAlign;
    ctx.textBaseline = style.textBaseline;
    var lineDash = void 0;
    var lineDashOffset = void 0;
    if (ctx.setLineDash && style.lineDash) {
      _a = getLineDash(el), lineDash = _a[0], lineDashOffset = _a[1];
    }
    if (lineDash) {
      ctx.setLineDash(lineDash);
      ctx.lineDashOffset = lineDashOffset;
    }
    if (style.strokeFirst) {
      if (styleHasStroke(style)) {
        ctx.strokeText(text, style.x, style.y);
      }
      if (styleHasFill(style)) {
        ctx.fillText(text, style.x, style.y);
      }
    } else {
      if (styleHasFill(style)) {
        ctx.fillText(text, style.x, style.y);
      }
      if (styleHasStroke(style)) {
        ctx.strokeText(text, style.x, style.y);
      }
    }
    if (lineDash) {
      ctx.setLineDash([]);
    }
  }
}
function bindCommonProps(ctx, style, prevStyle, forceSetAll, scope) {
  var styleChanged = false;
  if (!forceSetAll) {
    prevStyle = prevStyle || {};
    if (style === prevStyle) {
      return false;
    }
  }
  if (forceSetAll || style.opacity !== prevStyle.opacity) {
    flushPathDrawn(ctx, scope);
    styleChanged = true;
    var opacity = Math.max(Math.min(style.opacity, 1), 0);
    ctx.globalAlpha = isNaN(opacity) ? DEFAULT_COMMON_STYLE.opacity : opacity;
  }
  if (forceSetAll || style.blend !== prevStyle.blend) {
    if (!styleChanged) {
      flushPathDrawn(ctx, scope);
      styleChanged = true;
    }
    ctx.globalCompositeOperation = style.blend || DEFAULT_COMMON_STYLE.blend;
  }
  for (var i = 0; i < SHADOW_NUMBER_PROPS.length; i++) {
    var propName = SHADOW_NUMBER_PROPS[i];
    if (forceSetAll || style[propName] !== prevStyle[propName]) {
      if (!styleChanged) {
        flushPathDrawn(ctx, scope);
        styleChanged = true;
      }
      ctx[propName] = ctx.dpr * (style[propName] || 0);
    }
  }
  if (forceSetAll || style.shadowColor !== prevStyle.shadowColor) {
    if (!styleChanged) {
      flushPathDrawn(ctx, scope);
      styleChanged = true;
    }
    ctx.shadowColor = style.shadowColor || DEFAULT_COMMON_STYLE.shadowColor;
  }
  return styleChanged;
}
function bindPathAndTextCommonStyle(ctx, el, prevEl, forceSetAll, scope) {
  var style = getStyle(el, scope.inHover);
  var prevStyle = forceSetAll ? null : prevEl && getStyle(prevEl, scope.inHover) || {};
  if (style === prevStyle) {
    return false;
  }
  var styleChanged = bindCommonProps(ctx, style, prevStyle, forceSetAll, scope);
  if (forceSetAll || style.fill !== prevStyle.fill) {
    if (!styleChanged) {
      flushPathDrawn(ctx, scope);
      styleChanged = true;
    }
    isValidStrokeFillStyle(style.fill) && (ctx.fillStyle = style.fill);
  }
  if (forceSetAll || style.stroke !== prevStyle.stroke) {
    if (!styleChanged) {
      flushPathDrawn(ctx, scope);
      styleChanged = true;
    }
    isValidStrokeFillStyle(style.stroke) && (ctx.strokeStyle = style.stroke);
  }
  if (forceSetAll || style.opacity !== prevStyle.opacity) {
    if (!styleChanged) {
      flushPathDrawn(ctx, scope);
      styleChanged = true;
    }
    ctx.globalAlpha = style.opacity == null ? 1 : style.opacity;
  }
  if (el.hasStroke()) {
    var lineWidth = style.lineWidth;
    var newLineWidth = lineWidth / (style.strokeNoScale && el.getLineScale ? el.getLineScale() : 1);
    if (ctx.lineWidth !== newLineWidth) {
      if (!styleChanged) {
        flushPathDrawn(ctx, scope);
        styleChanged = true;
      }
      ctx.lineWidth = newLineWidth;
    }
  }
  for (var i = 0; i < STROKE_PROPS.length; i++) {
    var prop = STROKE_PROPS[i];
    var propName = prop[0];
    if (forceSetAll || style[propName] !== prevStyle[propName]) {
      if (!styleChanged) {
        flushPathDrawn(ctx, scope);
        styleChanged = true;
      }
      ctx[propName] = style[propName] || prop[1];
    }
  }
  return styleChanged;
}
function bindImageStyle(ctx, el, prevEl, forceSetAll, scope) {
  return bindCommonProps(ctx, getStyle(el, scope.inHover), prevEl && getStyle(prevEl, scope.inHover), forceSetAll, scope);
}
function setContextTransform(ctx, el) {
  var m = el.transform;
  var dpr2 = ctx.dpr || 1;
  if (m) {
    ctx.setTransform(dpr2 * m[0], dpr2 * m[1], dpr2 * m[2], dpr2 * m[3], dpr2 * m[4], dpr2 * m[5]);
  } else {
    ctx.setTransform(dpr2, 0, 0, dpr2, 0, 0);
  }
}
function updateClipStatus(clipPaths, ctx, scope) {
  var allClipped = false;
  for (var i = 0; i < clipPaths.length; i++) {
    var clipPath = clipPaths[i];
    allClipped = allClipped || clipPath.isZeroArea();
    setContextTransform(ctx, clipPath);
    ctx.beginPath();
    clipPath.buildPath(ctx, clipPath.shape);
    ctx.clip();
  }
  scope.allClipped = allClipped;
}
function isTransformChanged(m0, m1) {
  if (m0 && m1) {
    return m0[0] !== m1[0] || m0[1] !== m1[1] || m0[2] !== m1[2] || m0[3] !== m1[3] || m0[4] !== m1[4] || m0[5] !== m1[5];
  } else if (!m0 && !m1) {
    return false;
  }
  return true;
}
function canPathBatch(style) {
  var hasFill = styleHasFill(style);
  var hasStroke = styleHasStroke(style);
  return !(style.lineDash || !(+hasFill ^ +hasStroke) || hasFill && typeof style.fill !== "string" || hasStroke && typeof style.stroke !== "string" || style.strokePercent < 1 || style.strokeOpacity < 1 || style.fillOpacity < 1);
}
function flushPathDrawn(ctx, scope) {
  scope.batchFill && ctx.fill();
  scope.batchStroke && ctx.stroke();
  scope.batchFill = "";
  scope.batchStroke = "";
}
function getStyle(el, inHover) {
  return inHover ? el.__hoverStyle || el.style : el.style;
}
function brushSingle(ctx, el) {
  brush(ctx, el, {
    inHover: false,
    viewWidth: 0,
    viewHeight: 0
  }, true);
}
function brush(ctx, el, scope, isLast) {
  var m = el.transform;
  if (!el.shouldBePainted(scope.viewWidth, scope.viewHeight, false, false)) {
    el.__dirty &= ~REDRAW_BIT;
    el.__isRendered = false;
    return;
  }
  var clipPaths = el.__clipPaths;
  var prevElClipPaths = scope.prevElClipPaths;
  var forceSetTransform = false;
  var forceSetStyle = false;
  if (!prevElClipPaths || isClipPathChanged(clipPaths, prevElClipPaths)) {
    if (prevElClipPaths && prevElClipPaths.length) {
      flushPathDrawn(ctx, scope);
      ctx.restore();
      forceSetStyle = forceSetTransform = true;
      scope.prevElClipPaths = null;
      scope.allClipped = false;
      scope.prevEl = null;
    }
    if (clipPaths && clipPaths.length) {
      flushPathDrawn(ctx, scope);
      ctx.save();
      updateClipStatus(clipPaths, ctx, scope);
      forceSetTransform = true;
    }
    scope.prevElClipPaths = clipPaths;
  }
  if (scope.allClipped) {
    el.__isRendered = false;
    return;
  }
  el.beforeBrush && el.beforeBrush();
  el.innerBeforeBrush();
  var prevEl = scope.prevEl;
  if (!prevEl) {
    forceSetStyle = forceSetTransform = true;
  }
  var canBatchPath = el instanceof Path_default && el.autoBatch && canPathBatch(el.style);
  if (forceSetTransform || isTransformChanged(m, prevEl.transform)) {
    flushPathDrawn(ctx, scope);
    setContextTransform(ctx, el);
  } else if (!canBatchPath) {
    flushPathDrawn(ctx, scope);
  }
  var style = getStyle(el, scope.inHover);
  if (el instanceof Path_default) {
    if (scope.lastDrawType !== DRAW_TYPE_PATH) {
      forceSetStyle = true;
      scope.lastDrawType = DRAW_TYPE_PATH;
    }
    bindPathAndTextCommonStyle(ctx, el, prevEl, forceSetStyle, scope);
    if (!canBatchPath || !scope.batchFill && !scope.batchStroke) {
      ctx.beginPath();
    }
    brushPath(ctx, el, style, canBatchPath);
    if (canBatchPath) {
      scope.batchFill = style.fill || "";
      scope.batchStroke = style.stroke || "";
    }
  } else {
    if (el instanceof TSpan_default) {
      if (scope.lastDrawType !== DRAW_TYPE_TEXT) {
        forceSetStyle = true;
        scope.lastDrawType = DRAW_TYPE_TEXT;
      }
      bindPathAndTextCommonStyle(ctx, el, prevEl, forceSetStyle, scope);
      brushText(ctx, el, style);
    } else if (el instanceof Image_default) {
      if (scope.lastDrawType !== DRAW_TYPE_IMAGE) {
        forceSetStyle = true;
        scope.lastDrawType = DRAW_TYPE_IMAGE;
      }
      bindImageStyle(ctx, el, prevEl, forceSetStyle, scope);
      brushImage(ctx, el, style);
    } else if (el.getTemporalDisplayables) {
      if (scope.lastDrawType !== DRAW_TYPE_INCREMENTAL) {
        forceSetStyle = true;
        scope.lastDrawType = DRAW_TYPE_INCREMENTAL;
      }
      brushIncremental(ctx, el, scope);
    }
  }
  if (canBatchPath && isLast) {
    flushPathDrawn(ctx, scope);
  }
  el.innerAfterBrush();
  el.afterBrush && el.afterBrush();
  scope.prevEl = el;
  el.__dirty = 0;
  el.__isRendered = true;
}
function brushIncremental(ctx, el, scope) {
  var displayables = el.getDisplayables();
  var temporalDisplayables = el.getTemporalDisplayables();
  ctx.save();
  var innerScope = {
    prevElClipPaths: null,
    prevEl: null,
    allClipped: false,
    viewWidth: scope.viewWidth,
    viewHeight: scope.viewHeight,
    inHover: scope.inHover
  };
  var i;
  var len2;
  for (i = el.getCursor(), len2 = displayables.length; i < len2; i++) {
    var displayable = displayables[i];
    displayable.beforeBrush && displayable.beforeBrush();
    displayable.innerBeforeBrush();
    brush(ctx, displayable, innerScope, i === len2 - 1);
    displayable.innerAfterBrush();
    displayable.afterBrush && displayable.afterBrush();
    innerScope.prevEl = displayable;
  }
  for (var i_1 = 0, len_1 = temporalDisplayables.length; i_1 < len_1; i_1++) {
    var displayable = temporalDisplayables[i_1];
    displayable.beforeBrush && displayable.beforeBrush();
    displayable.innerBeforeBrush();
    brush(ctx, displayable, innerScope, i_1 === len_1 - 1);
    displayable.innerAfterBrush();
    displayable.afterBrush && displayable.afterBrush();
    innerScope.prevEl = displayable;
  }
  el.clearTemporalDisplayables();
  el.notClear = true;
  ctx.restore();
}
var pathProxyForDraw, SHADOW_NUMBER_PROPS, STROKE_PROPS, DRAW_TYPE_PATH, DRAW_TYPE_IMAGE, DRAW_TYPE_TEXT, DRAW_TYPE_INCREMENTAL;
var init_graphic = __esm({
  "node_modules/zrender/lib/canvas/graphic.js"() {
    init_Displayable();
    init_PathProxy();
    init_image();
    init_helper2();
    init_Path();
    init_Image();
    init_TSpan();
    init_util();
    init_dashStyle();
    init_constants();
    init_platform();
    pathProxyForDraw = new PathProxy_default(true);
    SHADOW_NUMBER_PROPS = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"];
    STROKE_PROPS = [["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]];
    DRAW_TYPE_PATH = 1;
    DRAW_TYPE_IMAGE = 2;
    DRAW_TYPE_TEXT = 3;
    DRAW_TYPE_INCREMENTAL = 4;
  }
});

// node_modules/zrender/lib/graphic/helper/parseText.js
function truncateText(text, containerWidth, font, ellipsis, options) {
  var out = {};
  truncateText2(out, text, containerWidth, font, ellipsis, options);
  return out.text;
}
function truncateText2(out, text, containerWidth, font, ellipsis, options) {
  if (!containerWidth) {
    out.text = "";
    out.isTruncated = false;
    return;
  }
  var textLines = (text + "").split("\n");
  options = prepareTruncateOptions(containerWidth, font, ellipsis, options);
  var isTruncated = false;
  var truncateOut = {};
  for (var i = 0, len2 = textLines.length; i < len2; i++) {
    truncateSingleLine(truncateOut, textLines[i], options);
    textLines[i] = truncateOut.textLine;
    isTruncated = isTruncated || truncateOut.isTruncated;
  }
  out.text = textLines.join("\n");
  out.isTruncated = isTruncated;
}
function prepareTruncateOptions(containerWidth, font, ellipsis, options) {
  options = options || {};
  var preparedOpts = extend({}, options);
  preparedOpts.font = font;
  ellipsis = retrieve2(ellipsis, "...");
  preparedOpts.maxIterations = retrieve2(options.maxIterations, 2);
  var minChar = preparedOpts.minChar = retrieve2(options.minChar, 0);
  preparedOpts.cnCharWidth = getWidth("国", font);
  var ascCharWidth = preparedOpts.ascCharWidth = getWidth("a", font);
  preparedOpts.placeholder = retrieve2(options.placeholder, "");
  var contentWidth = containerWidth = Math.max(0, containerWidth - 1);
  for (var i = 0; i < minChar && contentWidth >= ascCharWidth; i++) {
    contentWidth -= ascCharWidth;
  }
  var ellipsisWidth = getWidth(ellipsis, font);
  if (ellipsisWidth > contentWidth) {
    ellipsis = "";
    ellipsisWidth = 0;
  }
  contentWidth = containerWidth - ellipsisWidth;
  preparedOpts.ellipsis = ellipsis;
  preparedOpts.ellipsisWidth = ellipsisWidth;
  preparedOpts.contentWidth = contentWidth;
  preparedOpts.containerWidth = containerWidth;
  return preparedOpts;
}
function truncateSingleLine(out, textLine, options) {
  var containerWidth = options.containerWidth;
  var font = options.font;
  var contentWidth = options.contentWidth;
  if (!containerWidth) {
    out.textLine = "";
    out.isTruncated = false;
    return;
  }
  var lineWidth = getWidth(textLine, font);
  if (lineWidth <= containerWidth) {
    out.textLine = textLine;
    out.isTruncated = false;
    return;
  }
  for (var j = 0; ; j++) {
    if (lineWidth <= contentWidth || j >= options.maxIterations) {
      textLine += options.ellipsis;
      break;
    }
    var subLength = j === 0 ? estimateLength(textLine, contentWidth, options.ascCharWidth, options.cnCharWidth) : lineWidth > 0 ? Math.floor(textLine.length * contentWidth / lineWidth) : 0;
    textLine = textLine.substr(0, subLength);
    lineWidth = getWidth(textLine, font);
  }
  if (textLine === "") {
    textLine = options.placeholder;
  }
  out.textLine = textLine;
  out.isTruncated = true;
}
function estimateLength(text, contentWidth, ascCharWidth, cnCharWidth) {
  var width = 0;
  var i = 0;
  for (var len2 = text.length; i < len2 && width < contentWidth; i++) {
    var charCode = text.charCodeAt(i);
    width += 0 <= charCode && charCode <= 127 ? ascCharWidth : cnCharWidth;
  }
  return i;
}
function parsePlainText(text, style) {
  text != null && (text += "");
  var overflow = style.overflow;
  var padding = style.padding;
  var font = style.font;
  var truncate = overflow === "truncate";
  var calculatedLineHeight = getLineHeight(font);
  var lineHeight = retrieve2(style.lineHeight, calculatedLineHeight);
  var bgColorDrawn = !!style.backgroundColor;
  var truncateLineOverflow = style.lineOverflow === "truncate";
  var isTruncated = false;
  var width = style.width;
  var lines;
  if (width != null && (overflow === "break" || overflow === "breakAll")) {
    lines = text ? wrapText(text, style.font, width, overflow === "breakAll", 0).lines : [];
  } else {
    lines = text ? text.split("\n") : [];
  }
  var contentHeight = lines.length * lineHeight;
  var height = retrieve2(style.height, contentHeight);
  if (contentHeight > height && truncateLineOverflow) {
    var lineCount = Math.floor(height / lineHeight);
    isTruncated = isTruncated || lines.length > lineCount;
    lines = lines.slice(0, lineCount);
  }
  if (text && truncate && width != null) {
    var options = prepareTruncateOptions(width, font, style.ellipsis, {
      minChar: style.truncateMinChar,
      placeholder: style.placeholder
    });
    var singleOut = {};
    for (var i = 0; i < lines.length; i++) {
      truncateSingleLine(singleOut, lines[i], options);
      lines[i] = singleOut.textLine;
      isTruncated = isTruncated || singleOut.isTruncated;
    }
  }
  var outerHeight = height;
  var contentWidth = 0;
  for (var i = 0; i < lines.length; i++) {
    contentWidth = Math.max(getWidth(lines[i], font), contentWidth);
  }
  if (width == null) {
    width = contentWidth;
  }
  var outerWidth = contentWidth;
  if (padding) {
    outerHeight += padding[0] + padding[2];
    outerWidth += padding[1] + padding[3];
    width += padding[1] + padding[3];
  }
  if (bgColorDrawn) {
    outerWidth = width;
  }
  return {
    lines,
    height,
    outerWidth,
    outerHeight,
    lineHeight,
    calculatedLineHeight,
    contentWidth,
    contentHeight,
    width,
    isTruncated
  };
}
function parseRichText(text, style) {
  var contentBlock = new RichTextContentBlock();
  text != null && (text += "");
  if (!text) {
    return contentBlock;
  }
  var topWidth = style.width;
  var topHeight = style.height;
  var overflow = style.overflow;
  var wrapInfo = (overflow === "break" || overflow === "breakAll") && topWidth != null ? {
    width: topWidth,
    accumWidth: 0,
    breakAll: overflow === "breakAll"
  } : null;
  var lastIndex = STYLE_REG.lastIndex = 0;
  var result;
  while ((result = STYLE_REG.exec(text)) != null) {
    var matchedIndex = result.index;
    if (matchedIndex > lastIndex) {
      pushTokens(contentBlock, text.substring(lastIndex, matchedIndex), style, wrapInfo);
    }
    pushTokens(contentBlock, result[2], style, wrapInfo, result[1]);
    lastIndex = STYLE_REG.lastIndex;
  }
  if (lastIndex < text.length) {
    pushTokens(contentBlock, text.substring(lastIndex, text.length), style, wrapInfo);
  }
  var pendingList = [];
  var calculatedHeight = 0;
  var calculatedWidth = 0;
  var stlPadding = style.padding;
  var truncate = overflow === "truncate";
  var truncateLine = style.lineOverflow === "truncate";
  var tmpTruncateOut = {};
  function finishLine(line2, lineWidth2, lineHeight2) {
    line2.width = lineWidth2;
    line2.lineHeight = lineHeight2;
    calculatedHeight += lineHeight2;
    calculatedWidth = Math.max(calculatedWidth, lineWidth2);
  }
  outer: for (var i = 0; i < contentBlock.lines.length; i++) {
    var line = contentBlock.lines[i];
    var lineHeight = 0;
    var lineWidth = 0;
    for (var j = 0; j < line.tokens.length; j++) {
      var token = line.tokens[j];
      var tokenStyle = token.styleName && style.rich[token.styleName] || {};
      var textPadding = token.textPadding = tokenStyle.padding;
      var paddingH = textPadding ? textPadding[1] + textPadding[3] : 0;
      var font = token.font = tokenStyle.font || style.font;
      token.contentHeight = getLineHeight(font);
      var tokenHeight = retrieve2(tokenStyle.height, token.contentHeight);
      token.innerHeight = tokenHeight;
      textPadding && (tokenHeight += textPadding[0] + textPadding[2]);
      token.height = tokenHeight;
      token.lineHeight = retrieve3(tokenStyle.lineHeight, style.lineHeight, tokenHeight);
      token.align = tokenStyle && tokenStyle.align || style.align;
      token.verticalAlign = tokenStyle && tokenStyle.verticalAlign || "middle";
      if (truncateLine && topHeight != null && calculatedHeight + token.lineHeight > topHeight) {
        var originalLength = contentBlock.lines.length;
        if (j > 0) {
          line.tokens = line.tokens.slice(0, j);
          finishLine(line, lineWidth, lineHeight);
          contentBlock.lines = contentBlock.lines.slice(0, i + 1);
        } else {
          contentBlock.lines = contentBlock.lines.slice(0, i);
        }
        contentBlock.isTruncated = contentBlock.isTruncated || contentBlock.lines.length < originalLength;
        break outer;
      }
      var styleTokenWidth = tokenStyle.width;
      var tokenWidthNotSpecified = styleTokenWidth == null || styleTokenWidth === "auto";
      if (typeof styleTokenWidth === "string" && styleTokenWidth.charAt(styleTokenWidth.length - 1) === "%") {
        token.percentWidth = styleTokenWidth;
        pendingList.push(token);
        token.contentWidth = getWidth(token.text, font);
      } else {
        if (tokenWidthNotSpecified) {
          var textBackgroundColor = tokenStyle.backgroundColor;
          var bgImg = textBackgroundColor && textBackgroundColor.image;
          if (bgImg) {
            bgImg = findExistImage(bgImg);
            if (isImageReady(bgImg)) {
              token.width = Math.max(token.width, bgImg.width * tokenHeight / bgImg.height);
            }
          }
        }
        var remainTruncWidth = truncate && topWidth != null ? topWidth - lineWidth : null;
        if (remainTruncWidth != null && remainTruncWidth < token.width) {
          if (!tokenWidthNotSpecified || remainTruncWidth < paddingH) {
            token.text = "";
            token.width = token.contentWidth = 0;
          } else {
            truncateText2(tmpTruncateOut, token.text, remainTruncWidth - paddingH, font, style.ellipsis, {
              minChar: style.truncateMinChar
            });
            token.text = tmpTruncateOut.text;
            contentBlock.isTruncated = contentBlock.isTruncated || tmpTruncateOut.isTruncated;
            token.width = token.contentWidth = getWidth(token.text, font);
          }
        } else {
          token.contentWidth = getWidth(token.text, font);
        }
      }
      token.width += paddingH;
      lineWidth += token.width;
      tokenStyle && (lineHeight = Math.max(lineHeight, token.lineHeight));
    }
    finishLine(line, lineWidth, lineHeight);
  }
  contentBlock.outerWidth = contentBlock.width = retrieve2(topWidth, calculatedWidth);
  contentBlock.outerHeight = contentBlock.height = retrieve2(topHeight, calculatedHeight);
  contentBlock.contentHeight = calculatedHeight;
  contentBlock.contentWidth = calculatedWidth;
  if (stlPadding) {
    contentBlock.outerWidth += stlPadding[1] + stlPadding[3];
    contentBlock.outerHeight += stlPadding[0] + stlPadding[2];
  }
  for (var i = 0; i < pendingList.length; i++) {
    var token = pendingList[i];
    var percentWidth = token.percentWidth;
    token.width = parseInt(percentWidth, 10) / 100 * contentBlock.width;
  }
  return contentBlock;
}
function pushTokens(block, str, style, wrapInfo, styleName) {
  var isEmptyStr = str === "";
  var tokenStyle = styleName && style.rich[styleName] || {};
  var lines = block.lines;
  var font = tokenStyle.font || style.font;
  var newLine = false;
  var strLines;
  var linesWidths;
  if (wrapInfo) {
    var tokenPadding = tokenStyle.padding;
    var tokenPaddingH = tokenPadding ? tokenPadding[1] + tokenPadding[3] : 0;
    if (tokenStyle.width != null && tokenStyle.width !== "auto") {
      var outerWidth_1 = parsePercent(tokenStyle.width, wrapInfo.width) + tokenPaddingH;
      if (lines.length > 0) {
        if (outerWidth_1 + wrapInfo.accumWidth > wrapInfo.width) {
          strLines = str.split("\n");
          newLine = true;
        }
      }
      wrapInfo.accumWidth = outerWidth_1;
    } else {
      var res = wrapText(str, font, wrapInfo.width, wrapInfo.breakAll, wrapInfo.accumWidth);
      wrapInfo.accumWidth = res.accumWidth + tokenPaddingH;
      linesWidths = res.linesWidths;
      strLines = res.lines;
    }
  } else {
    strLines = str.split("\n");
  }
  for (var i = 0; i < strLines.length; i++) {
    var text = strLines[i];
    var token = new RichTextToken();
    token.styleName = styleName;
    token.text = text;
    token.isLineHolder = !text && !isEmptyStr;
    if (typeof tokenStyle.width === "number") {
      token.width = tokenStyle.width;
    } else {
      token.width = linesWidths ? linesWidths[i] : getWidth(text, font);
    }
    if (!i && !newLine) {
      var tokens = (lines[lines.length - 1] || (lines[0] = new RichTextLine())).tokens;
      var tokensLen = tokens.length;
      tokensLen === 1 && tokens[0].isLineHolder ? tokens[0] = token : (text || !tokensLen || isEmptyStr) && tokens.push(token);
    } else {
      lines.push(new RichTextLine([token]));
    }
  }
}
function isAlphabeticLetter(ch) {
  var code = ch.charCodeAt(0);
  return code >= 32 && code <= 591 || code >= 880 && code <= 4351 || code >= 4608 && code <= 5119 || code >= 7680 && code <= 8303;
}
function isWordBreakChar(ch) {
  if (isAlphabeticLetter(ch)) {
    if (breakCharMap[ch]) {
      return true;
    }
    return false;
  }
  return true;
}
function wrapText(text, font, lineWidth, isBreakAll, lastAccumWidth) {
  var lines = [];
  var linesWidths = [];
  var line = "";
  var currentWord = "";
  var currentWordWidth = 0;
  var accumWidth = 0;
  for (var i = 0; i < text.length; i++) {
    var ch = text.charAt(i);
    if (ch === "\n") {
      if (currentWord) {
        line += currentWord;
        accumWidth += currentWordWidth;
      }
      lines.push(line);
      linesWidths.push(accumWidth);
      line = "";
      currentWord = "";
      currentWordWidth = 0;
      accumWidth = 0;
      continue;
    }
    var chWidth = getWidth(ch, font);
    var inWord = isBreakAll ? false : !isWordBreakChar(ch);
    if (!lines.length ? lastAccumWidth + accumWidth + chWidth > lineWidth : accumWidth + chWidth > lineWidth) {
      if (!accumWidth) {
        if (inWord) {
          lines.push(currentWord);
          linesWidths.push(currentWordWidth);
          currentWord = ch;
          currentWordWidth = chWidth;
        } else {
          lines.push(ch);
          linesWidths.push(chWidth);
        }
      } else if (line || currentWord) {
        if (inWord) {
          if (!line) {
            line = currentWord;
            currentWord = "";
            currentWordWidth = 0;
            accumWidth = currentWordWidth;
          }
          lines.push(line);
          linesWidths.push(accumWidth - currentWordWidth);
          currentWord += ch;
          currentWordWidth += chWidth;
          line = "";
          accumWidth = currentWordWidth;
        } else {
          if (currentWord) {
            line += currentWord;
            currentWord = "";
            currentWordWidth = 0;
          }
          lines.push(line);
          linesWidths.push(accumWidth);
          line = ch;
          accumWidth = chWidth;
        }
      }
      continue;
    }
    accumWidth += chWidth;
    if (inWord) {
      currentWord += ch;
      currentWordWidth += chWidth;
    } else {
      if (currentWord) {
        line += currentWord;
        currentWord = "";
        currentWordWidth = 0;
      }
      line += ch;
    }
  }
  if (!lines.length && !line) {
    line = text;
    currentWord = "";
    currentWordWidth = 0;
  }
  if (currentWord) {
    line += currentWord;
  }
  if (line) {
    lines.push(line);
    linesWidths.push(accumWidth);
  }
  if (lines.length === 1) {
    accumWidth += lastAccumWidth;
  }
  return {
    accumWidth,
    lines,
    linesWidths
  };
}
var STYLE_REG, RichTextToken, RichTextLine, RichTextContentBlock, breakCharMap;
var init_parseText = __esm({
  "node_modules/zrender/lib/graphic/helper/parseText.js"() {
    init_image();
    init_util();
    init_text();
    STYLE_REG = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
    RichTextToken = /* @__PURE__ */ function() {
      function RichTextToken2() {
      }
      return RichTextToken2;
    }();
    RichTextLine = /* @__PURE__ */ function() {
      function RichTextLine2(tokens) {
        this.tokens = [];
        if (tokens) {
          this.tokens = tokens;
        }
      }
      return RichTextLine2;
    }();
    RichTextContentBlock = /* @__PURE__ */ function() {
      function RichTextContentBlock2() {
        this.width = 0;
        this.height = 0;
        this.contentWidth = 0;
        this.contentHeight = 0;
        this.outerWidth = 0;
        this.outerHeight = 0;
        this.lines = [];
        this.isTruncated = false;
      }
      return RichTextContentBlock2;
    }();
    breakCharMap = reduce(",&?/;] ".split(""), function(obj, ch) {
      obj[ch] = true;
      return obj;
    }, {});
  }
});

// node_modules/zrender/lib/graphic/helper/roundRect.js
function buildPath(ctx, shape) {
  var x = shape.x;
  var y = shape.y;
  var width = shape.width;
  var height = shape.height;
  var r = shape.r;
  var r1;
  var r2;
  var r3;
  var r4;
  if (width < 0) {
    x = x + width;
    width = -width;
  }
  if (height < 0) {
    y = y + height;
    height = -height;
  }
  if (typeof r === "number") {
    r1 = r2 = r3 = r4 = r;
  } else if (r instanceof Array) {
    if (r.length === 1) {
      r1 = r2 = r3 = r4 = r[0];
    } else if (r.length === 2) {
      r1 = r3 = r[0];
      r2 = r4 = r[1];
    } else if (r.length === 3) {
      r1 = r[0];
      r2 = r4 = r[1];
      r3 = r[2];
    } else {
      r1 = r[0];
      r2 = r[1];
      r3 = r[2];
      r4 = r[3];
    }
  } else {
    r1 = r2 = r3 = r4 = 0;
  }
  var total;
  if (r1 + r2 > width) {
    total = r1 + r2;
    r1 *= width / total;
    r2 *= width / total;
  }
  if (r3 + r4 > width) {
    total = r3 + r4;
    r3 *= width / total;
    r4 *= width / total;
  }
  if (r2 + r3 > height) {
    total = r2 + r3;
    r2 *= height / total;
    r3 *= height / total;
  }
  if (r1 + r4 > height) {
    total = r1 + r4;
    r1 *= height / total;
    r4 *= height / total;
  }
  ctx.moveTo(x + r1, y);
  ctx.lineTo(x + width - r2, y);
  r2 !== 0 && ctx.arc(x + width - r2, y + r2, r2, -Math.PI / 2, 0);
  ctx.lineTo(x + width, y + height - r3);
  r3 !== 0 && ctx.arc(x + width - r3, y + height - r3, r3, 0, Math.PI / 2);
  ctx.lineTo(x + r4, y + height);
  r4 !== 0 && ctx.arc(x + r4, y + height - r4, r4, Math.PI / 2, Math.PI);
  ctx.lineTo(x, y + r1);
  r1 !== 0 && ctx.arc(x + r1, y + r1, r1, Math.PI, Math.PI * 1.5);
}
var init_roundRect = __esm({
  "node_modules/zrender/lib/graphic/helper/roundRect.js"() {
  }
});

// node_modules/zrender/lib/graphic/helper/subPixelOptimize.js
function subPixelOptimizeLine(outputShape, inputShape, style) {
  if (!inputShape) {
    return;
  }
  var x1 = inputShape.x1;
  var x2 = inputShape.x2;
  var y1 = inputShape.y1;
  var y2 = inputShape.y2;
  outputShape.x1 = x1;
  outputShape.x2 = x2;
  outputShape.y1 = y1;
  outputShape.y2 = y2;
  var lineWidth = style && style.lineWidth;
  if (!lineWidth) {
    return outputShape;
  }
  if (round(x1 * 2) === round(x2 * 2)) {
    outputShape.x1 = outputShape.x2 = subPixelOptimize(x1, lineWidth, true);
  }
  if (round(y1 * 2) === round(y2 * 2)) {
    outputShape.y1 = outputShape.y2 = subPixelOptimize(y1, lineWidth, true);
  }
  return outputShape;
}
function subPixelOptimizeRect(outputShape, inputShape, style) {
  if (!inputShape) {
    return;
  }
  var originX = inputShape.x;
  var originY = inputShape.y;
  var originWidth = inputShape.width;
  var originHeight = inputShape.height;
  outputShape.x = originX;
  outputShape.y = originY;
  outputShape.width = originWidth;
  outputShape.height = originHeight;
  var lineWidth = style && style.lineWidth;
  if (!lineWidth) {
    return outputShape;
  }
  outputShape.x = subPixelOptimize(originX, lineWidth, true);
  outputShape.y = subPixelOptimize(originY, lineWidth, true);
  outputShape.width = Math.max(subPixelOptimize(originX + originWidth, lineWidth, false) - outputShape.x, originWidth === 0 ? 0 : 1);
  outputShape.height = Math.max(subPixelOptimize(originY + originHeight, lineWidth, false) - outputShape.y, originHeight === 0 ? 0 : 1);
  return outputShape;
}
function subPixelOptimize(position, lineWidth, positiveOrNegative) {
  if (!lineWidth) {
    return position;
  }
  var doubledPosition = round(position * 2);
  return (doubledPosition + round(lineWidth)) % 2 === 0 ? doubledPosition / 2 : (doubledPosition + (positiveOrNegative ? 1 : -1)) / 2;
}
var round;
var init_subPixelOptimize = __esm({
  "node_modules/zrender/lib/graphic/helper/subPixelOptimize.js"() {
    round = Math.round;
  }
});

// node_modules/zrender/lib/graphic/shape/Rect.js
var RectShape, subPixelOptimizeOutputShape, Rect, Rect_default;
var init_Rect = __esm({
  "node_modules/zrender/lib/graphic/shape/Rect.js"() {
    init_tslib_es6();
    init_Path();
    init_roundRect();
    init_subPixelOptimize();
    RectShape = /* @__PURE__ */ function() {
      function RectShape2() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
      }
      return RectShape2;
    }();
    subPixelOptimizeOutputShape = {};
    Rect = function(_super) {
      __extends(Rect2, _super);
      function Rect2(opts) {
        return _super.call(this, opts) || this;
      }
      Rect2.prototype.getDefaultShape = function() {
        return new RectShape();
      };
      Rect2.prototype.buildPath = function(ctx, shape) {
        var x;
        var y;
        var width;
        var height;
        if (this.subPixelOptimize) {
          var optimizedShape = subPixelOptimizeRect(subPixelOptimizeOutputShape, shape, this.style);
          x = optimizedShape.x;
          y = optimizedShape.y;
          width = optimizedShape.width;
          height = optimizedShape.height;
          optimizedShape.r = shape.r;
          shape = optimizedShape;
        } else {
          x = shape.x;
          y = shape.y;
          width = shape.width;
          height = shape.height;
        }
        if (!shape.r) {
          ctx.rect(x, y, width, height);
        } else {
          buildPath(ctx, shape);
        }
      };
      Rect2.prototype.isZeroArea = function() {
        return !this.shape.width || !this.shape.height;
      };
      return Rect2;
    }(Path_default);
    Rect.prototype.type = "rect";
    Rect_default = Rect;
  }
});

// node_modules/zrender/lib/graphic/Text.js
function parseFontSize(fontSize) {
  if (typeof fontSize === "string" && (fontSize.indexOf("px") !== -1 || fontSize.indexOf("rem") !== -1 || fontSize.indexOf("em") !== -1)) {
    return fontSize;
  } else if (!isNaN(+fontSize)) {
    return fontSize + "px";
  } else {
    return DEFAULT_FONT_SIZE + "px";
  }
}
function setSeparateFont(targetStyle, sourceStyle) {
  for (var i = 0; i < FONT_PARTS.length; i++) {
    var fontProp = FONT_PARTS[i];
    var val = sourceStyle[fontProp];
    if (val != null) {
      targetStyle[fontProp] = val;
    }
  }
}
function hasSeparateFont(style) {
  return style.fontSize != null || style.fontFamily || style.fontWeight;
}
function normalizeTextStyle(style) {
  normalizeStyle(style);
  each(style.rich, normalizeStyle);
  return style;
}
function normalizeStyle(style) {
  if (style) {
    style.font = ZRText.makeFont(style);
    var textAlign = style.align;
    textAlign === "middle" && (textAlign = "center");
    style.align = textAlign == null || VALID_TEXT_ALIGN[textAlign] ? textAlign : "left";
    var verticalAlign = style.verticalAlign;
    verticalAlign === "center" && (verticalAlign = "middle");
    style.verticalAlign = verticalAlign == null || VALID_TEXT_VERTICAL_ALIGN[verticalAlign] ? verticalAlign : "top";
    var textPadding = style.padding;
    if (textPadding) {
      style.padding = normalizeCssArray(style.padding);
    }
  }
}
function getStroke(stroke, lineWidth) {
  return stroke == null || lineWidth <= 0 || stroke === "transparent" || stroke === "none" ? null : stroke.image || stroke.colorStops ? "#000" : stroke;
}
function getFill(fill) {
  return fill == null || fill === "none" ? null : fill.image || fill.colorStops ? "#000" : fill;
}
function getTextXForPadding(x, textAlign, textPadding) {
  return textAlign === "right" ? x - textPadding[1] : textAlign === "center" ? x + textPadding[3] / 2 - textPadding[1] / 2 : x + textPadding[3];
}
function getStyleText(style) {
  var text = style.text;
  text != null && (text += "");
  return text;
}
function needDrawBackground(style) {
  return !!(style.backgroundColor || style.lineHeight || style.borderWidth && style.borderColor);
}
var DEFAULT_RICH_TEXT_COLOR, DEFAULT_STROKE_LINE_WIDTH, DEFAULT_TEXT_ANIMATION_PROPS, ZRText, VALID_TEXT_ALIGN, VALID_TEXT_VERTICAL_ALIGN, FONT_PARTS, Text_default;
var init_Text = __esm({
  "node_modules/zrender/lib/graphic/Text.js"() {
    init_tslib_es6();
    init_parseText();
    init_TSpan();
    init_util();
    init_text();
    init_Image();
    init_Rect();
    init_BoundingRect();
    init_Displayable();
    init_platform();
    DEFAULT_RICH_TEXT_COLOR = {
      fill: "#000"
    };
    DEFAULT_STROKE_LINE_WIDTH = 2;
    DEFAULT_TEXT_ANIMATION_PROPS = {
      style: defaults({
        fill: true,
        stroke: true,
        fillOpacity: true,
        strokeOpacity: true,
        lineWidth: true,
        fontSize: true,
        lineHeight: true,
        width: true,
        height: true,
        textShadowColor: true,
        textShadowBlur: true,
        textShadowOffsetX: true,
        textShadowOffsetY: true,
        backgroundColor: true,
        padding: true,
        borderColor: true,
        borderWidth: true,
        borderRadius: true
      }, DEFAULT_COMMON_ANIMATION_PROPS.style)
    };
    ZRText = function(_super) {
      __extends(ZRText2, _super);
      function ZRText2(opts) {
        var _this = _super.call(this) || this;
        _this.type = "text";
        _this._children = [];
        _this._defaultStyle = DEFAULT_RICH_TEXT_COLOR;
        _this.attr(opts);
        return _this;
      }
      ZRText2.prototype.childrenRef = function() {
        return this._children;
      };
      ZRText2.prototype.update = function() {
        _super.prototype.update.call(this);
        if (this.styleChanged()) {
          this._updateSubTexts();
        }
        for (var i = 0; i < this._children.length; i++) {
          var child = this._children[i];
          child.zlevel = this.zlevel;
          child.z = this.z;
          child.z2 = this.z2;
          child.culling = this.culling;
          child.cursor = this.cursor;
          child.invisible = this.invisible;
        }
      };
      ZRText2.prototype.updateTransform = function() {
        var innerTransformable = this.innerTransformable;
        if (innerTransformable) {
          innerTransformable.updateTransform();
          if (innerTransformable.transform) {
            this.transform = innerTransformable.transform;
          }
        } else {
          _super.prototype.updateTransform.call(this);
        }
      };
      ZRText2.prototype.getLocalTransform = function(m) {
        var innerTransformable = this.innerTransformable;
        return innerTransformable ? innerTransformable.getLocalTransform(m) : _super.prototype.getLocalTransform.call(this, m);
      };
      ZRText2.prototype.getComputedTransform = function() {
        if (this.__hostTarget) {
          this.__hostTarget.getComputedTransform();
          this.__hostTarget.updateInnerText(true);
        }
        return _super.prototype.getComputedTransform.call(this);
      };
      ZRText2.prototype._updateSubTexts = function() {
        this._childCursor = 0;
        normalizeTextStyle(this.style);
        this.style.rich ? this._updateRichTexts() : this._updatePlainTexts();
        this._children.length = this._childCursor;
        this.styleUpdated();
      };
      ZRText2.prototype.addSelfToZr = function(zr) {
        _super.prototype.addSelfToZr.call(this, zr);
        for (var i = 0; i < this._children.length; i++) {
          this._children[i].__zr = zr;
        }
      };
      ZRText2.prototype.removeSelfFromZr = function(zr) {
        _super.prototype.removeSelfFromZr.call(this, zr);
        for (var i = 0; i < this._children.length; i++) {
          this._children[i].__zr = null;
        }
      };
      ZRText2.prototype.getBoundingRect = function() {
        if (this.styleChanged()) {
          this._updateSubTexts();
        }
        if (!this._rect) {
          var tmpRect3 = new BoundingRect_default(0, 0, 0, 0);
          var children = this._children;
          var tmpMat = [];
          var rect = null;
          for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var childRect = child.getBoundingRect();
            var transform = child.getLocalTransform(tmpMat);
            if (transform) {
              tmpRect3.copy(childRect);
              tmpRect3.applyTransform(transform);
              rect = rect || tmpRect3.clone();
              rect.union(tmpRect3);
            } else {
              rect = rect || childRect.clone();
              rect.union(childRect);
            }
          }
          this._rect = rect || tmpRect3;
        }
        return this._rect;
      };
      ZRText2.prototype.setDefaultTextStyle = function(defaultTextStyle) {
        this._defaultStyle = defaultTextStyle || DEFAULT_RICH_TEXT_COLOR;
      };
      ZRText2.prototype.setTextContent = function(textContent) {
        if (process.env.NODE_ENV !== "production") {
          throw new Error("Can't attach text on another text");
        }
      };
      ZRText2.prototype._mergeStyle = function(targetStyle, sourceStyle) {
        if (!sourceStyle) {
          return targetStyle;
        }
        var sourceRich = sourceStyle.rich;
        var targetRich = targetStyle.rich || sourceRich && {};
        extend(targetStyle, sourceStyle);
        if (sourceRich && targetRich) {
          this._mergeRich(targetRich, sourceRich);
          targetStyle.rich = targetRich;
        } else if (targetRich) {
          targetStyle.rich = targetRich;
        }
        return targetStyle;
      };
      ZRText2.prototype._mergeRich = function(targetRich, sourceRich) {
        var richNames = keys(sourceRich);
        for (var i = 0; i < richNames.length; i++) {
          var richName = richNames[i];
          targetRich[richName] = targetRich[richName] || {};
          extend(targetRich[richName], sourceRich[richName]);
        }
      };
      ZRText2.prototype.getAnimationStyleProps = function() {
        return DEFAULT_TEXT_ANIMATION_PROPS;
      };
      ZRText2.prototype._getOrCreateChild = function(Ctor) {
        var child = this._children[this._childCursor];
        if (!child || !(child instanceof Ctor)) {
          child = new Ctor();
        }
        this._children[this._childCursor++] = child;
        child.__zr = this.__zr;
        child.parent = this;
        return child;
      };
      ZRText2.prototype._updatePlainTexts = function() {
        var style = this.style;
        var textFont = style.font || DEFAULT_FONT;
        var textPadding = style.padding;
        var text = getStyleText(style);
        var contentBlock = parsePlainText(text, style);
        var needDrawBg = needDrawBackground(style);
        var bgColorDrawn = !!style.backgroundColor;
        var outerHeight = contentBlock.outerHeight;
        var outerWidth = contentBlock.outerWidth;
        var contentWidth = contentBlock.contentWidth;
        var textLines = contentBlock.lines;
        var lineHeight = contentBlock.lineHeight;
        var defaultStyle = this._defaultStyle;
        this.isTruncated = !!contentBlock.isTruncated;
        var baseX = style.x || 0;
        var baseY = style.y || 0;
        var textAlign = style.align || defaultStyle.align || "left";
        var verticalAlign = style.verticalAlign || defaultStyle.verticalAlign || "top";
        var textX = baseX;
        var textY = adjustTextY2(baseY, contentBlock.contentHeight, verticalAlign);
        if (needDrawBg || textPadding) {
          var boxX = adjustTextX(baseX, outerWidth, textAlign);
          var boxY = adjustTextY2(baseY, outerHeight, verticalAlign);
          needDrawBg && this._renderBackground(style, style, boxX, boxY, outerWidth, outerHeight);
        }
        textY += lineHeight / 2;
        if (textPadding) {
          textX = getTextXForPadding(baseX, textAlign, textPadding);
          if (verticalAlign === "top") {
            textY += textPadding[0];
          } else if (verticalAlign === "bottom") {
            textY -= textPadding[2];
          }
        }
        var defaultLineWidth = 0;
        var useDefaultFill = false;
        var textFill = getFill("fill" in style ? style.fill : (useDefaultFill = true, defaultStyle.fill));
        var textStroke = getStroke("stroke" in style ? style.stroke : !bgColorDrawn && (!defaultStyle.autoStroke || useDefaultFill) ? (defaultLineWidth = DEFAULT_STROKE_LINE_WIDTH, defaultStyle.stroke) : null);
        var hasShadow2 = style.textShadowBlur > 0;
        var fixedBoundingRect = style.width != null && (style.overflow === "truncate" || style.overflow === "break" || style.overflow === "breakAll");
        var calculatedLineHeight = contentBlock.calculatedLineHeight;
        for (var i = 0; i < textLines.length; i++) {
          var el = this._getOrCreateChild(TSpan_default);
          var subElStyle = el.createStyle();
          el.useStyle(subElStyle);
          subElStyle.text = textLines[i];
          subElStyle.x = textX;
          subElStyle.y = textY;
          if (textAlign) {
            subElStyle.textAlign = textAlign;
          }
          subElStyle.textBaseline = "middle";
          subElStyle.opacity = style.opacity;
          subElStyle.strokeFirst = true;
          if (hasShadow2) {
            subElStyle.shadowBlur = style.textShadowBlur || 0;
            subElStyle.shadowColor = style.textShadowColor || "transparent";
            subElStyle.shadowOffsetX = style.textShadowOffsetX || 0;
            subElStyle.shadowOffsetY = style.textShadowOffsetY || 0;
          }
          subElStyle.stroke = textStroke;
          subElStyle.fill = textFill;
          if (textStroke) {
            subElStyle.lineWidth = style.lineWidth || defaultLineWidth;
            subElStyle.lineDash = style.lineDash;
            subElStyle.lineDashOffset = style.lineDashOffset || 0;
          }
          subElStyle.font = textFont;
          setSeparateFont(subElStyle, style);
          textY += lineHeight;
          if (fixedBoundingRect) {
            el.setBoundingRect(new BoundingRect_default(adjustTextX(subElStyle.x, contentWidth, subElStyle.textAlign), adjustTextY2(subElStyle.y, calculatedLineHeight, subElStyle.textBaseline), contentWidth, calculatedLineHeight));
          }
        }
      };
      ZRText2.prototype._updateRichTexts = function() {
        var style = this.style;
        var text = getStyleText(style);
        var contentBlock = parseRichText(text, style);
        var contentWidth = contentBlock.width;
        var outerWidth = contentBlock.outerWidth;
        var outerHeight = contentBlock.outerHeight;
        var textPadding = style.padding;
        var baseX = style.x || 0;
        var baseY = style.y || 0;
        var defaultStyle = this._defaultStyle;
        var textAlign = style.align || defaultStyle.align;
        var verticalAlign = style.verticalAlign || defaultStyle.verticalAlign;
        this.isTruncated = !!contentBlock.isTruncated;
        var boxX = adjustTextX(baseX, outerWidth, textAlign);
        var boxY = adjustTextY2(baseY, outerHeight, verticalAlign);
        var xLeft = boxX;
        var lineTop = boxY;
        if (textPadding) {
          xLeft += textPadding[3];
          lineTop += textPadding[0];
        }
        var xRight = xLeft + contentWidth;
        if (needDrawBackground(style)) {
          this._renderBackground(style, style, boxX, boxY, outerWidth, outerHeight);
        }
        var bgColorDrawn = !!style.backgroundColor;
        for (var i = 0; i < contentBlock.lines.length; i++) {
          var line = contentBlock.lines[i];
          var tokens = line.tokens;
          var tokenCount = tokens.length;
          var lineHeight = line.lineHeight;
          var remainedWidth = line.width;
          var leftIndex = 0;
          var lineXLeft = xLeft;
          var lineXRight = xRight;
          var rightIndex = tokenCount - 1;
          var token = void 0;
          while (leftIndex < tokenCount && (token = tokens[leftIndex], !token.align || token.align === "left")) {
            this._placeToken(token, style, lineHeight, lineTop, lineXLeft, "left", bgColorDrawn);
            remainedWidth -= token.width;
            lineXLeft += token.width;
            leftIndex++;
          }
          while (rightIndex >= 0 && (token = tokens[rightIndex], token.align === "right")) {
            this._placeToken(token, style, lineHeight, lineTop, lineXRight, "right", bgColorDrawn);
            remainedWidth -= token.width;
            lineXRight -= token.width;
            rightIndex--;
          }
          lineXLeft += (contentWidth - (lineXLeft - xLeft) - (xRight - lineXRight) - remainedWidth) / 2;
          while (leftIndex <= rightIndex) {
            token = tokens[leftIndex];
            this._placeToken(token, style, lineHeight, lineTop, lineXLeft + token.width / 2, "center", bgColorDrawn);
            lineXLeft += token.width;
            leftIndex++;
          }
          lineTop += lineHeight;
        }
      };
      ZRText2.prototype._placeToken = function(token, style, lineHeight, lineTop, x, textAlign, parentBgColorDrawn) {
        var tokenStyle = style.rich[token.styleName] || {};
        tokenStyle.text = token.text;
        var verticalAlign = token.verticalAlign;
        var y = lineTop + lineHeight / 2;
        if (verticalAlign === "top") {
          y = lineTop + token.height / 2;
        } else if (verticalAlign === "bottom") {
          y = lineTop + lineHeight - token.height / 2;
        }
        var needDrawBg = !token.isLineHolder && needDrawBackground(tokenStyle);
        needDrawBg && this._renderBackground(tokenStyle, style, textAlign === "right" ? x - token.width : textAlign === "center" ? x - token.width / 2 : x, y - token.height / 2, token.width, token.height);
        var bgColorDrawn = !!tokenStyle.backgroundColor;
        var textPadding = token.textPadding;
        if (textPadding) {
          x = getTextXForPadding(x, textAlign, textPadding);
          y -= token.height / 2 - textPadding[0] - token.innerHeight / 2;
        }
        var el = this._getOrCreateChild(TSpan_default);
        var subElStyle = el.createStyle();
        el.useStyle(subElStyle);
        var defaultStyle = this._defaultStyle;
        var useDefaultFill = false;
        var defaultLineWidth = 0;
        var textFill = getFill("fill" in tokenStyle ? tokenStyle.fill : "fill" in style ? style.fill : (useDefaultFill = true, defaultStyle.fill));
        var textStroke = getStroke("stroke" in tokenStyle ? tokenStyle.stroke : "stroke" in style ? style.stroke : !bgColorDrawn && !parentBgColorDrawn && (!defaultStyle.autoStroke || useDefaultFill) ? (defaultLineWidth = DEFAULT_STROKE_LINE_WIDTH, defaultStyle.stroke) : null);
        var hasShadow2 = tokenStyle.textShadowBlur > 0 || style.textShadowBlur > 0;
        subElStyle.text = token.text;
        subElStyle.x = x;
        subElStyle.y = y;
        if (hasShadow2) {
          subElStyle.shadowBlur = tokenStyle.textShadowBlur || style.textShadowBlur || 0;
          subElStyle.shadowColor = tokenStyle.textShadowColor || style.textShadowColor || "transparent";
          subElStyle.shadowOffsetX = tokenStyle.textShadowOffsetX || style.textShadowOffsetX || 0;
          subElStyle.shadowOffsetY = tokenStyle.textShadowOffsetY || style.textShadowOffsetY || 0;
        }
        subElStyle.textAlign = textAlign;
        subElStyle.textBaseline = "middle";
        subElStyle.font = token.font || DEFAULT_FONT;
        subElStyle.opacity = retrieve3(tokenStyle.opacity, style.opacity, 1);
        setSeparateFont(subElStyle, tokenStyle);
        if (textStroke) {
          subElStyle.lineWidth = retrieve3(tokenStyle.lineWidth, style.lineWidth, defaultLineWidth);
          subElStyle.lineDash = retrieve2(tokenStyle.lineDash, style.lineDash);
          subElStyle.lineDashOffset = style.lineDashOffset || 0;
          subElStyle.stroke = textStroke;
        }
        if (textFill) {
          subElStyle.fill = textFill;
        }
        var textWidth = token.contentWidth;
        var textHeight = token.contentHeight;
        el.setBoundingRect(new BoundingRect_default(adjustTextX(subElStyle.x, textWidth, subElStyle.textAlign), adjustTextY2(subElStyle.y, textHeight, subElStyle.textBaseline), textWidth, textHeight));
      };
      ZRText2.prototype._renderBackground = function(style, topStyle, x, y, width, height) {
        var textBackgroundColor = style.backgroundColor;
        var textBorderWidth = style.borderWidth;
        var textBorderColor = style.borderColor;
        var isImageBg = textBackgroundColor && textBackgroundColor.image;
        var isPlainOrGradientBg = textBackgroundColor && !isImageBg;
        var textBorderRadius = style.borderRadius;
        var self2 = this;
        var rectEl;
        var imgEl;
        if (isPlainOrGradientBg || style.lineHeight || textBorderWidth && textBorderColor) {
          rectEl = this._getOrCreateChild(Rect_default);
          rectEl.useStyle(rectEl.createStyle());
          rectEl.style.fill = null;
          var rectShape = rectEl.shape;
          rectShape.x = x;
          rectShape.y = y;
          rectShape.width = width;
          rectShape.height = height;
          rectShape.r = textBorderRadius;
          rectEl.dirtyShape();
        }
        if (isPlainOrGradientBg) {
          var rectStyle = rectEl.style;
          rectStyle.fill = textBackgroundColor || null;
          rectStyle.fillOpacity = retrieve2(style.fillOpacity, 1);
        } else if (isImageBg) {
          imgEl = this._getOrCreateChild(Image_default);
          imgEl.onload = function() {
            self2.dirtyStyle();
          };
          var imgStyle = imgEl.style;
          imgStyle.image = textBackgroundColor.image;
          imgStyle.x = x;
          imgStyle.y = y;
          imgStyle.width = width;
          imgStyle.height = height;
        }
        if (textBorderWidth && textBorderColor) {
          var rectStyle = rectEl.style;
          rectStyle.lineWidth = textBorderWidth;
          rectStyle.stroke = textBorderColor;
          rectStyle.strokeOpacity = retrieve2(style.strokeOpacity, 1);
          rectStyle.lineDash = style.borderDash;
          rectStyle.lineDashOffset = style.borderDashOffset || 0;
          rectEl.strokeContainThreshold = 0;
          if (rectEl.hasFill() && rectEl.hasStroke()) {
            rectStyle.strokeFirst = true;
            rectStyle.lineWidth *= 2;
          }
        }
        var commonStyle = (rectEl || imgEl).style;
        commonStyle.shadowBlur = style.shadowBlur || 0;
        commonStyle.shadowColor = style.shadowColor || "transparent";
        commonStyle.shadowOffsetX = style.shadowOffsetX || 0;
        commonStyle.shadowOffsetY = style.shadowOffsetY || 0;
        commonStyle.opacity = retrieve3(style.opacity, topStyle.opacity, 1);
      };
      ZRText2.makeFont = function(style) {
        var font = "";
        if (hasSeparateFont(style)) {
          font = [style.fontStyle, style.fontWeight, parseFontSize(style.fontSize), style.fontFamily || "sans-serif"].join(" ");
        }
        return font && trim(font) || style.textFont || style.font;
      };
      return ZRText2;
    }(Displayable_default);
    VALID_TEXT_ALIGN = {
      left: true,
      right: 1,
      center: 1
    };
    VALID_TEXT_VERTICAL_ALIGN = {
      top: 1,
      bottom: 1,
      middle: 1
    };
    FONT_PARTS = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
    Text_default = ZRText;
  }
});

// node_modules/zrender/lib/graphic/CompoundPath.js
var CompoundPath, CompoundPath_default;
var init_CompoundPath = __esm({
  "node_modules/zrender/lib/graphic/CompoundPath.js"() {
    init_tslib_es6();
    init_Path();
    CompoundPath = function(_super) {
      __extends(CompoundPath2, _super);
      function CompoundPath2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "compound";
        return _this;
      }
      CompoundPath2.prototype._updatePathDirty = function() {
        var paths = this.shape.paths;
        var dirtyPath = this.shapeChanged();
        for (var i = 0; i < paths.length; i++) {
          dirtyPath = dirtyPath || paths[i].shapeChanged();
        }
        if (dirtyPath) {
          this.dirtyShape();
        }
      };
      CompoundPath2.prototype.beforeBrush = function() {
        this._updatePathDirty();
        var paths = this.shape.paths || [];
        var scale3 = this.getGlobalScale();
        for (var i = 0; i < paths.length; i++) {
          if (!paths[i].path) {
            paths[i].createPathProxy();
          }
          paths[i].path.setScale(scale3[0], scale3[1], paths[i].segmentIgnoreThreshold);
        }
      };
      CompoundPath2.prototype.buildPath = function(ctx, shape) {
        var paths = shape.paths || [];
        for (var i = 0; i < paths.length; i++) {
          paths[i].buildPath(ctx, paths[i].shape, true);
        }
      };
      CompoundPath2.prototype.afterBrush = function() {
        var paths = this.shape.paths || [];
        for (var i = 0; i < paths.length; i++) {
          paths[i].pathUpdated();
        }
      };
      CompoundPath2.prototype.getBoundingRect = function() {
        this._updatePathDirty.call(this);
        return Path_default.prototype.getBoundingRect.call(this);
      };
      return CompoundPath2;
    }(Path_default);
    CompoundPath_default = CompoundPath;
  }
});

export {
  env_default,
  init_env,
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT,
  platformApi,
  setPlatformAPI,
  init_platform,
  logError,
  clone,
  merge,
  mergeAll,
  extend,
  defaults,
  indexOf,
  inherits,
  mixin,
  isArrayLike,
  each,
  map,
  reduce,
  filter,
  find,
  keys,
  bind,
  curry,
  isArray,
  isFunction,
  isString,
  isStringSafe,
  isNumber,
  isObject,
  isTypedArray,
  isDom,
  isGradientObject,
  isImagePatternObject,
  isRegExp,
  eqNaN,
  retrieve,
  retrieve2,
  retrieve3,
  slice,
  normalizeCssArray,
  assert,
  trim,
  setAsPrimitive,
  createHashMap,
  concatArray,
  disableUserSelect,
  hasOwn,
  noop,
  util_exports,
  init_util,
  __extends,
  init_tslib_es6,
  create,
  copy,
  clone2,
  set,
  add,
  scaleAndAdd,
  sub,
  len,
  scale,
  normalize,
  distance,
  dist,
  distSquare,
  lerp,
  applyTransform,
  min,
  max,
  vector_exports,
  init_vector,
  Eventful_default,
  init_Eventful,
  transformLocalCoord,
  encodeHTML,
  init_dom,
  normalizeEvent,
  addEventListener,
  stop,
  isMiddleOrRightButtonOnMouseUpDown,
  init_event,
  create2,
  identity,
  copy2,
  mul2 as mul,
  translate,
  rotate,
  scale2,
  invert,
  clone3,
  matrix_exports,
  init_matrix,
  Point_default,
  init_Point,
  BoundingRect_default,
  init_BoundingRect,
  sort,
  init_timsort,
  REDRAW_BIT,
  init_constants,
  requestAnimationFrame_default,
  init_requestAnimationFrame,
  cubicAt,
  cubicDerivativeAt,
  cubicRootAt,
  cubicSubdivide,
  cubicProjectPoint,
  quadraticAt,
  quadraticDerivativeAt,
  quadraticSubdivide,
  quadraticProjectPoint,
  init_curve,
  createCubicEasingFunc,
  init_cubicEasing,
  LRU_default,
  init_LRU,
  parse,
  lift,
  fastLerp,
  lerp2,
  modifyHSL,
  modifyAlpha,
  stringify,
  liftColor,
  color_exports,
  init_color,
  normalizeColor,
  isAroundZero2 as isAroundZero,
  round4,
  getMatrixStr,
  TEXT_ALIGN_TO_ANCHOR,
  adjustTextY,
  hasShadow,
  getShadowKey,
  isImagePattern,
  isPattern,
  isLinearGradient,
  isRadialGradient,
  isGradient,
  getIdURL,
  getPathPrecision,
  getSRTTransformString,
  encodeBase64,
  init_helper,
  cloneValue,
  init_Animator,
  devicePixelRatio,
  init_config,
  TRANSFORMABLE_PROPS,
  copyTransform,
  Transformable_default,
  init_Transformable,
  getBoundingRect,
  getLineHeight,
  parsePercent,
  calculateTextPosition,
  init_text,
  Group_default,
  init_Group,
  init,
  registerPainter,
  getElementSSRData,
  registerSSRDataGetter,
  zrender_exports,
  init_zrender,
  createOrUpdateImage,
  init_image,
  truncateText,
  init_parseText,
  Displayable_default,
  init_Displayable,
  fromPoints,
  init_bbox,
  normalizeArcAngles,
  PathProxy_default,
  init_PathProxy,
  containStroke,
  init_line,
  containStroke3 as containStroke2,
  init_quadratic,
  normalizeRadian,
  init_util2,
  windingLine,
  init_windingLine,
  DEFAULT_PATH_STYLE,
  Path_default,
  init_Path,
  TSpan_default,
  init_TSpan,
  Image_default,
  init_Image,
  subPixelOptimizeLine,
  subPixelOptimizeRect,
  subPixelOptimize,
  init_subPixelOptimize,
  Rect_default,
  init_Rect,
  parseFontSize,
  hasSeparateFont,
  Text_default,
  init_Text,
  CompoundPath_default,
  init_CompoundPath,
  getCanvasGradient,
  getSize,
  init_helper2,
  getLineDash,
  init_dashStyle,
  createCanvasPattern,
  brushSingle,
  brush,
  init_graphic
};
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

zrender/lib/zrender.js:
  (*!
  * ZRender, a high performance 2d drawing library.
  *
  * Copyright (c) 2013, Baidu Inc.
  * All rights reserved.
  *
  * LICENSE
  * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
  *)
*/
//# sourceMappingURL=chunk-6UM7DVM4.js.map
