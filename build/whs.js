/* WhitestormJS Framework v2.0.0 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three'], factory) :
	(factory((global.WHS = global.WHS || {}),global.THREE));
}(this, (function (exports,three) { 'use strict';

var extend = function extend(object) {
  for (var _len = arguments.length, extensions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    extensions[_key - 1] = arguments[_key];
  }

  // $.extend alternative, ... is the spread operator.
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = extensions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var extension = _step.value;

      // console.log(extension);
      // console.log(typeof extension);

      if (!extension) continue; // Ignore null and undefined objects and parameters.

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.getOwnPropertyNames(extension)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var prop = _step2.value;
          // Do not traverse the prototype chain.
          if (object[prop] !== undefined && object[prop].toString() === '[object Object]' && extension[prop].toString() === '[object Object]') {
            // Goes deep only if object[prop] and extension[prop] are both objects !
            if (extension[prop].uuid) object[prop] = extension[prop];else extend(object[prop], extension[prop]);
          } else object[prop] = typeof object[prop] === 'undefined' ? extension[prop] : object[prop];

          if (typeof object[prop] === 'undefined' && Array.isArray(extension[prop])) object[prop] = extension[prop].slice(); // Add values that do not already exist.
          else if (typeof object[prop] === 'undefined' && Array.isArray(extension[prop])) object[prop] = extension[prop];
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return object;
};

var instruct = function instruct(array, instArray) {
  var tempObject = {};

  for (var i = 0, max = instArray.length; i < max; i++) {
    var guide = instArray[i];

    tempObject[guide] = array[i];
  }

  return tempObject;
};

var transformData = function transformData(object, instructions) {
  for (var key in instructions) {
    if (Array.isArray(object[key])) object[key] = instruct(object[key], instructions[key]);else if (object[key] instanceof Object && !Array.isArray(instructions[key])) object[key] = transformData(object[key], instructions[key]);
  }

  return object;
};

var toArray = function toArray(object, instruction) {
  var tempArray = [];

  for (var i = 0, max = instruction.length; i < max; i++) {
    var guide = instruction[i];

    tempArray[i] = object[guide];
  }

  return tempArray;
};

var minivents_commonjs = function Events(target){
  var events = {}, empty = [];
  target = target || this;
  /**
   *  On: listen to events
   */
  target.on = function(type, func, ctx){
    (events[type] = events[type] || []).push([func, ctx]);
  };
  /**
   *  Off: stop listening to event / specific callback
   */
  target.off = function(type, func){
    type || (events = {});
    var list = events[type] || empty,
        i = list.length = func ? list.length : 0;
    while(i--) func == list[i][0] && list.splice(i,1);
  };
  /** 
   * Emit: send event, callbacks will be triggered
   */
  target.emit = function(type){
    var e = events[type] || empty, list = e.length > 0 ? e.slice(0, e.length) : e, i=0, j;
    while(j=list[i++]) j[0].apply(j[1], empty.slice.call(arguments, 1));
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var CompositionError = function (_Error) {
  inherits(CompositionError, _Error);

  function CompositionError(classInstance, message, component) {
    classCallCheck(this, CompositionError);

    var _this = possibleConstructorReturn(this, (CompositionError.__proto__ || Object.getPrototypeOf(CompositionError)).call(this, '@' + classInstance + ': ' + message));

    var stackArray = _this.stack.split('\n');
    stackArray.splice(1, 2);

    _this.stack = stackArray.join('\n');

    if (!process) console.error('Component:', component);

    _this.name = 'CompositionError';
    return _this;
  }

  return CompositionError;
}(Error);

var DependencyError = function (_Error2) {
  inherits(DependencyError, _Error2);

  function DependencyError(classInstance, message, activeModule) {
    var dependencyModule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    classCallCheck(this, DependencyError);

    var _this2 = possibleConstructorReturn(this, (DependencyError.__proto__ || Object.getPrototypeOf(DependencyError)).call(this, '@' + classInstance + ': ' + message));

    var stackArray = _this2.stack.split('\n');
    stackArray.splice(1, 2);

    _this2.stack = stackArray.join('\n');

    if (!process) console.error('Active module:', activeModule);
    if (!process && dependencyModule) console.error('Dependency published by module:', dependencyModule);

    _this2.name = 'DependencyError';
    return _this2;
  }

  return DependencyError;
}(Error);

var ManagerError = function (_Error3) {
  inherits(ManagerError, _Error3);

  function ManagerError(classInstance, message, component) {
    var activeModule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    classCallCheck(this, ManagerError);

    var _this3 = possibleConstructorReturn(this, (ManagerError.__proto__ || Object.getPrototypeOf(ManagerError)).call(this, '@' + classInstance + ': ' + message));

    var stackArray = _this3.stack.split('\n');
    stackArray.splice(1, 2);

    _this3.stack = stackArray.join('\n');

    if (!process) console.error('Component:', dependencyModule);
    if (!process && activeModule) console.error('Active module:', activeModule);

    _this3.name = 'ManagerError';
    return _this3;
  }

  return ManagerError;
}(Error);

// Check for Three.js
var warnDeps = function warnDeps() {
  throw new Error('WhitestormJS Framework requires Three.js r84. https://threejs.org/');
};

try {
  if (!three.REVISION) warnDeps();
} catch (err) {
  warnDeps();
}

/**
 * @class ModuleSystem
 * @category core
 * @description  Provides API for classes that will use Modules.<br/>
 * This class includes basic event system with those supported methods:
 * <pre>.on()</pre><pre>.off()</pre><pre>.emit()</pre>
 * @extends Events
 * @memberof module:core
 */

var ModuleSystem = function (_Events) {
  inherits(ModuleSystem, _Events);

  function ModuleSystem() {
    classCallCheck(this, ModuleSystem);
    return possibleConstructorReturn(this, (ModuleSystem.__proto__ || Object.getPrototypeOf(ModuleSystem)).apply(this, arguments));
  }

  createClass(ModuleSystem, [{
    key: 'integrateModules',

    // INTEGRATING

    /**
     * @method integrateModules
     * @instance
     * @description This method applies all modules from .modules collection.
     * @param {Object} [source] If source (should be a component) is provided, will replace .modules with source's one before executing modules.
     * @memberof module:core.ModuleSystem
     */
    value: function integrateModules(source) {
      if (source) this.modules = source.modules.slice(0);

      for (var i = 0, max = this.modules.length; i < max; i++) {
        this.applyModule(this.modules[i], false);
      }if (source) this.applyBridge({ onCopy: source });
    }

    // APPLYING MODULE (...and a "bridge" for module)

    /**
     * @method applyBridge
     * @instance
     * @description Makes component-specific API to work with modules.
     * @param {Object} bridgeMap
     * @return {Object} Returns object with modified values.
     * @memberof module:core.ModuleSystem
     */

  }, {
    key: 'applyBridge',
    value: function applyBridge() {
      var bridgeMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var modules = this.modules;

      for (var i = 0, max = modules.length; i < max; i++) {
        for (var key in bridgeMap) {
          if (bridgeMap[key]) {
            var module = modules[i];

            if (module && module.bridge && module.bridge[key]) bridgeMap[key] = module.bridge[key].apply(this, [bridgeMap[key], module]);
          }
        }
      }

      return bridgeMap;
    }

    /**
     * @method applyModule
     * @instance
     * @description .applyModule is also used in .integrateModules() function.
     * It does exactly what its name says (applies module to component or app).
     * @param {Object} module the module to apply
     * @param {Boolean} [push=true]
     * @return {Object} Returns module that was applied.
     * @throws {ManagerError}
     * @memberof module:core.ModuleSystem
     */

  }, {
    key: 'applyModule',
    value: function applyModule(module) {
      var push = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!module) return;
      if (push) this.modules.push(module);

      if (this.manager) this.manager.active(module);

      if (module.manager && this.manager) module.manager(this.manager);else if (module.manager) {
        throw new ManagerError('Component', 'Module requires ModuleManager that is turned off for this component', this, module);
      }

      if (module.integrate) module.integrate.bind(this)(module);

      return module;
    }

    /**
     * @method disposeModules
     * @instance
     * @description Disposes of all modules
     * @memberof module:core.ModuleSystem
     */

  }, {
    key: 'disposeModules',
    value: function disposeModules() {
      while (this.modules.length) {
        this.disposeModule(this.modules[0]);
      }
    }

    /**
     * @method disposeModule
     * @instance
     * @description Disposes of the given module
     * @param {Object} module the module to dispose
     * @return {Module} Returns module that was removed.
     * @memberof module:core.ModuleSystem
     */

  }, {
    key: 'disposeModule',
    value: function disposeModule(module) {
      if (!module) return;

      this.modules.splice(this.modules.indexOf(module), 1);

      if (module.dispose) module.dispose.bind(this)(module);

      return module;
    }

    // PIPED METHOD

    /**
     * @method module
     * @instance
     * @description piped version of .applyModule().
     * @param {Object} module the module to apply
     * @return {this} returns this - app/component
     * @throws {ManagerError}
     * @memberof module:core.ModuleSystem
     * @example <caption>Piped modules</caption>
     * component
     *   .module(new Module1())
     *   .module(new Module2())
     *   .module(new Module3())
     */

  }, {
    key: 'module',
    value: function module(_module) {
      this.applyModule(_module);
      return this;
    }
  }]);
  return ModuleSystem;
}(minivents_commonjs);

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$2.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

/* global window */
var root$2;

if (typeof self !== 'undefined') {
  root$2 = self;
} else if (typeof window !== 'undefined') {
  root$2 = window;
} else if (typeof global !== 'undefined') {
  root$2 = global;
} else if (typeof module !== 'undefined') {
  root$2 = module;
} else {
  root$2 = Function('return this')();
}

var result = symbolObservablePonyfill(root$2);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

/**
 * @class ModuleManager
 * @category core
 * @param {Object} object handler
 * @description  Solves modules dependencies
 * @memberof module:core
 */
var ModuleManager = function () {
  function ModuleManager(object) {
    classCallCheck(this, ModuleManager);

    this.handler = object;
    this.currentModule = null;

    this.store = createStore(function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{}, ''];
      var action = arguments[1];

      state[0][action.key] = action.data;
      state[1] = action.key;

      return state;
    });

    this.modules = {};
  }

  /**
   * @method active
   * @instance
   * @description Sets .currentModule to provided module.
   * @param {Object} module the module to make current
   * @memberof module:core.ModuleManager
   */


  createClass(ModuleManager, [{
    key: 'active',
    value: function active(module) {
      this.currentModule = module;
    }

    /**
     * @method reset
     * @instance
     * @description Set's .currentModule to null.
     * @memberof module:core.ModuleManager
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.currentModule = null;
    }

    /**
     * @method define
     * @instance
     * @description Define the module in manager
     * @param name The module name
     * @memberof module:core.ModuleManager
     */

  }, {
    key: 'define',
    value: function define(name) {
      this.modules[name] = this.currentModule;
    }

    /**
     * @method use
     * @instance
     * @description Get the defined module from manager
     * @param name The module name
     * @memberof module:core.ModuleManager
     */

  }, {
    key: 'use',
    value: function use(name) {
      return this.modules[name];
    }

    /**
     * @method set
     * @instance
     * @description An alias for .add() <br/><br/>
     * Use this method if you know that you will overwrite existing dependency.<br/>
     * Use it in your app, but not in module that you provide to other people.
     * @param {String} key the key of the dependency
     * @param {Object} data the value of the dependency
     * @memberof module:core.ModuleManager
     */

  }, {
    key: 'set',
    value: function set$$1(key, data) {
      this.store.dispatch({
        type: 'ADD',
        key: key,
        data: data
      });
    }

    /**
     * @method get
     * @instance
     * @description Returns dependency in store object, by key.
     * @param {String} key the key of the dependency
     * @memberof module:core.ModuleManager
     * @return {Object|Module}
     * @throws {DependencyError} if dependency is not in the store
     * @example <caption>Get the 'hello' dependency</caption>
     * manager.get('hello'); // -> {world: true}
     */

  }, {
    key: 'get',
    value: function get$$1(key) {
      if (!this.store.getState()[0][key]) {
        throw new DependencyError('ModuleManager', 'Module requires \'' + key + '\' dependency', this.currentModule);
      }

      return this.store.getState()[0][key];
    }

    /**
     * @method has
     * @instance
     * @description Returns whether manager has a dependency with the given key
     * @param {String} key the key of the dependency
     * @memberof module:core.ModuleManager
     * @return {Boolean} Promise that is resolved when all promises completed.
     * @example <caption>Check whether the store has the 'hello' dependency</caption>
     * manager.has('hello'); // -> true
     */

  }, {
    key: 'has',
    value: function has(key) {
      return Boolean(this.store.getState()[0][key]);
    }

    /**
     * @method update
     * @instance
     * @description Updates deps
     * @param {Object} [depsMap={}]
     * @memberof module:core.ModuleManager
     */

  }, {
    key: 'update',
    value: function update() {
      var _this = this;

      var depsMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.store.subscribe(function () {
        var _store$getState = _this.store.getState(),
            _store$getState2 = slicedToArray(_store$getState, 2),
            data = _store$getState2[0],
            changedKey = _store$getState2[1];

        var callback = depsMap[changedKey];

        if (callback) callback(data[changedKey]);
      });
    }

    /**
     * @method add
     * @alias module:core.ModuleManager#set
     * @memberof module:core.ModuleManager
     */

  }, {
    key: 'add',
    value: function add() {
      console.warn('.add() method is deprecated. Use .set() instead');
      return this.set.apply(this, arguments);
    }

    /**
     * @method require
     * @instance
     * @description Require module
     * @param {String} name Defined name
     * @param {Function} moduleExecutor Function that returns applied module
     * @memberof module:core.ModuleManager
     */

  }, {
    key: 'require',
    value: function require(name, moduleExecutor) {
      if (this.use(name) === undefined) this.handler.applyModule(moduleExecutor());
    }
  }]);
  return ModuleManager;
}();

var _class;
var _temp;

/**
 * @class Component
 * @category core
 * @param {Object} [params] - The parameters object.
 * @param {Object} [instructions] - The instructions object.
 * @extends ModuleSystem
 * @memberof module:core
 */
var Component = (_temp = _class = function (_ModuleSystem) {
  inherits(Component, _ModuleSystem);

  // For keeping children components;

  // Collection of promises;

  /**
   * Collection of `modules`.
   * @member {Array} module:core.Component#modules
   * @public
   */


  /**
   * Static instructions
   * @member {Object} module:core.Component#instructions
   * @static
   * @default {}
   */
  function Component() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var defaults$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Component.defaults;
    var instructions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Component.instructions;
    classCallCheck(this, Component);

    // Apply polyfilled parameters to .params;
    var _this = possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this));

    _this._wait = [];
    _this.modules = [];
    _this.children = [];
    _this.params = extend(transformData(params, instructions), defaults$$1);
    if (_this.params.manager) _this.manager = new ModuleManager();

    _this.modules = _this.params.modules;

    _this.integrateModules();
    return _this;
  }

  /**
   * @method wait
   * @instance
   * @description Wait for a promise.
   * @param {Promise} [promise] - The promise that should be added to a queue.
   * @return {Promise} Promise that is resolved when all promises completed.
   * @memberof module:core.Component
   */
  // Collection of modules;

  /**
   * Collection of `child` Components.
   * @member {Array} module:core.Component#children
   * @public
   */


  /**
   * Array of promises that should be resolved before Component is ready.
   * @member {Array} module:core.Component#_wait
   * @private
   */

  /**
   * Default values for parameters
   * @member {Object} module:core.Component#defaults
   * @static
   * @default {
   *   modules: [],
   *   manager: true
   * }
   */


  createClass(Component, [{
    key: 'wait',
    value: function wait(promise) {
      if (promise) this._wait.push(promise);
      return Promise.all(this._wait);
    }

    /**
     * @method defer
     * @instance
     * @description Execute `func` (Callback) when Component is ready.
     * @param {Function} func - Callback.
     * @memberof module:core.Component
     */

  }, {
    key: 'defer',
    value: function defer(func) {
      var _this2 = this;

      if (this.isDeffered) this.wait().then(function () {
        return func(_this2);
      });else func(this);
    }

    // PARAMETERS

    /**
     * @method updateParams
     * @instance
     * @description Updates parameters of the Component.
     * @return {Object} Params of this Component
     * @memberof module:core.Component
     */

  }, {
    key: 'updateParams',
    value: function updateParams() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.params = extend(params, this.params);
      return this.params;
    }

    // COPYING & CLONING

    /**
     * @method clone
     * @instance
     * @description Clone this component
     * @return {object} a cloned component with all its source component' params copied.
     * @memberof module:core.Component
     */

  }, {
    key: 'clone',
    value: function clone() {
      return new this.constructor(this.params).copy(this);
    }

    /**
     * @method copy
     * @instance
     * @description Copy source native and integrate `modules` to it.
     * @param {Component} source - Source component that is used for `copy()` action.
     * @param {Function} [customize] - Callback executed before modules integration process.
     * @return {this} Component
     * @memberof module:core.Component
     */

  }, {
    key: 'copy',
    value: function copy(source, customize) {
      this.params = _extends({}, source.params);

      if (source.native) this.native = source.native.clone(source.params);
      if (customize) customize();
      this.integrateModules(source);

      return this;
    }

    /**
     * @method add
     * @instance
     * @description Add a child `Component`.
     * @param {Component} object - Component that should be added as a `child`.
     * @return {Promise} Resolved when action is done.
     * @memberof module:core.Component
     */

  }, {
    key: 'add',
    value: function add(object) {
      var _this3 = this;

      object.parent = this;

      return new Promise(function (resolve, reject) {
        _this3.defer(function () {
          var native = object.native;

          if (!native) reject();

          var addPromise = _this3.applyBridge({ onAdd: object }).onAdd;

          var resolver = function resolver() {
            _this3.native.add(native);
            _this3.children.push(object);

            resolve(object);
          };

          if (addPromise instanceof Promise) addPromise.then(resolver);else resolver();
        });
      });
    }

    /**
     * @method remove
     * @instance
     * @description Remove a child `Component`.
     * @param {Component} object - Component that should be a **child** of this Component.
     * @memberof module:core.Component
     */

  }, {
    key: 'remove',
    value: function remove(object) {
      object.parent = null;
      this.native.remove(object.native);
    }

    /**
     * @method addTo
     * @instance
     * @description Adds `this` Component to specified `App`/`Component`.
     * @param {Component} object - Component that will be a parent of `this`.
     * @memberof module:core.Component
     */

  }, {
    key: 'addTo',
    value: function addTo(object) {
      return object.add(this);
    }

    /**
     * Returns whether the object is `async` (`wait` promises are more than `0`).
     * @member {Boolean} module:core.Component#isDeffered
     */

  }, {
    key: 'isDeffered',
    get: function get$$1() {
      return this._wait.length > 0;
    }

    /**
     * Returns the `ModuleManager` used for this component.
     * @member {ModuleManager} module:core.Component#manager
     * @throws {ManagerError}
     */

  }, {
    key: 'manager',
    get: function get$$1() {
      if (this._manager) return this._manager;

      throw new ManagerError('Component', 'ModuleManager is not used in this component. \'manager\' parameter should be set as \'true\'', this);
    },
    set: function set$$1(manager) {
      this._manager = manager;
    }

    /**
     * Returns the `native` object used for this component.
     * @member {Object} module:core.Component#native
     */

  }, {
    key: 'native',
    get: function get$$1() {
      return this._native;
    },
    set: function set$$1(mesh) {
      this._native = mesh;
      this._native.component = this;
      return this._native;
    }
  }]);
  return Component;
}(ModuleSystem), _class.defaults = {
  modules: [],
  manager: true
}, _class.instructions = {}, _temp);

function attributes() {
  for (var _len = arguments.length, mappers = Array(_len), _key = 0; _key < _len; _key++) {
    mappers[_key] = arguments[_key];
  }

  return function (target) {
    for (var i = 0; i < mappers.length; i++) {
      var mapper = mappers[i];

      for (var k = 0; k < mapper.map.length; k++) {
        var attribute = mapper.map[k];

        Object.defineProperty(target.prototype, attribute, {
          get: mapper.getter(attribute),
          set: mapper.setter(attribute),
          configurable: mapper.configurable,
          enumerable: mapper.enumerable
        });
      }
    }
  };
}

function copy() {
  for (var _len2 = arguments.length, map = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    map[_key2] = arguments[_key2];
  }

  return {
    map: map,
    getter: function getter(name) {
      return function () {
        return this.native[name];
      };
    },
    setter: function setter(name) {
      return function (value) {
        this.native[name].copy(value);
      };
    },

    configurable: true,
    enumerable: true
  };
}

function mirror() {
  for (var _len3 = arguments.length, map = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    map[_key3] = arguments[_key3];
  }

  return {
    map: map,
    getter: function getter(name) {
      return function () {
        return this.native[name];
      };
    },
    setter: function setter(name) {
      return function (value) {
        this.native[name] = value;
      };
    },

    configurable: true,
    enumerable: true
  };
}

var _dec;
var _class$1;
var _class2;
var _temp$1;

/**
 * @class MeshComponent
 * @category core
 * @param {Object} [params] - The parameters object.
 * @param {Object} [instructions] - The instructions object.
 * @extends module:core.Component
 * @memberof module:core
 */
var MeshComponent = (_dec = attributes(copy('position', 'rotation', 'quaternion', 'scale'), mirror('material', 'geometry')), _dec(_class$1 = (_temp$1 = _class2 = function (_Component) {
  inherits(MeshComponent, _Component);
  createClass(MeshComponent, null, [{
    key: 'custom',


    // CUSTOM GEOMETRY HANDLING

    /**
     * Default values for parameters
     * @member {Object} module:core.MeshComponent#defaults
     * @static
     * @default
     * {
     *   build: true,
     *   geometry: {},
     *   material: false,
     *
     *   shadow: {
     *     cast: true,
     *     receive: true
     *   },
     *
     *   position: {x: 0, y: 0, z: 0},
     *   rotation: {x: 0, y: 0, z: 0},
     *   scale: {x: 1, y: 1, z: 1}
     * }
     */
    value: function custom(geom) {
      var constructor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : three.Mesh;

      return function (_MeshComponent) {
        inherits(_class3, _MeshComponent);

        function _class3() {
          classCallCheck(this, _class3);
          return possibleConstructorReturn(this, (_class3.__proto__ || Object.getPrototypeOf(_class3)).apply(this, arguments));
        }

        createClass(_class3, [{
          key: 'build',
          value: function build() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

            var _applyBridge = this.applyBridge({
              geometry: geom,
              material: params.material
            }),
                geometry = _applyBridge.geometry,
                material = _applyBridge.material;

            return this.applyBridge({ mesh: new constructor(geometry, material) }).mesh;
          }
        }]);
        return _class3;
      }(MeshComponent);
    }

    /**
     * Static instructions
     * @member {Object} module:core.MeshComponent#instructions
     * @static
     * @default
     * {
     *   position: ['x', 'y', 'z'],
     *   rotation: ['x', 'y', 'z'],
     *   scale: ['x', 'y', 'z']
     * }
     */

  }, {
    key: 'create',
    value: function create(geom, params, constructor) {
      return new (MeshComponent.custom(geom, constructor))(params);
    }
  }]);

  function MeshComponent(params) {
    var defaults$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MeshComponent.defaults;
    var instructions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MeshComponent.instructions;
    classCallCheck(this, MeshComponent);

    var _this = possibleConstructorReturn(this, (MeshComponent.__proto__ || Object.getPrototypeOf(MeshComponent)).call(this, params, defaults$$1, instructions));

    if (_this.params.build) {
      var build = _this.build(_this.params);

      if (!build) {
        throw new CompositionError('MeshComponent', '.build() method should return a THREE.Object3D or a Promise resolved with THREE.Object3D.', _this);
      }

      if (build instanceof Promise) {
        build.then(function (native) {
          _this.native = native;
          _this.wrap();
        });
      } else {
        _this.native = build;
        _this.wrap();
      }
    }
    return _this;
  }

  // BUILDING & WRAPPING

  /**
   * @method build
   * @description Build livecycle should return a native object.
   * @throws {CompositionError}
   * @memberof module:core.MeshComponent
   */


  createClass(MeshComponent, [{
    key: 'build',
    value: function build() {
      throw new CompositionError('MeshComponent', 'Instance should have it\'s own .build().', this);
    }

    /**
     * @method wrap
     * @instance
     * @description Wraps transforms (`position` & `rotation`)
     * @return {Promise} Resolved when action is completed
     * @memberof module:core.MeshComponent
     */

  }, {
    key: 'wrap',
    value: function wrap() {
      var _this3 = this;

      return new Promise(function (resolve) {
        // TODO: Fix defer with physics
        // this.defer(() => {
        var _params = _this3.params,
            position = _params.position,
            rotation = _params.rotation,
            scale = _params.scale,
            shadow = _params.shadow;


        _this3.position.set(position.x, position.y, position.z);
        _this3.rotation.set(rotation.x, rotation.y, rotation.z);
        _this3.scale.set(scale.x, scale.y, scale.z);

        _this3.native.castShadow = shadow.cast;
        _this3.native.receiveShadow = shadow.receive;

        _this3.applyBridge({ onWrap: 1 });

        resolve(_this3);
        // });
      });
    }

    // COPYING & CLONING

    /**
     * @method copy
     * @instance
     * @description Copy source transforms & execute `Component.copy()`
     * @return {this} MeshComponent
     * @memberof module:core.MeshComponent
     */

  }, {
    key: 'copy',
    value: function copy$$1(source) {
      var _this4 = this;

      return get(MeshComponent.prototype.__proto__ || Object.getPrototypeOf(MeshComponent.prototype), 'copy', this).call(this, source, function () {
        _this4.position.copy(source.position);
        _this4.rotation.copy(source.rotation);
        _this4.quaternion.copy(source.quaternion);
      });
    }

    /**
     * @method clone
     * @instance
     * @description Make a clone of this MeshComponent using `.copy()`
     * @return {MeshComponent} clone of this object
     * @memberof module:core.MeshComponent
     */

  }, {
    key: 'clone',
    value: function clone(geometry, material) {
      var dest = new this.constructor({ build: false }).copy(this);

      if (geometry) dest.geometry = dest.geometry.clone();
      if (material) dest.material = dest.material.clone();

      return dest;
    }
  }]);
  return MeshComponent;
}(Component), _class2.defaults = _extends({}, Component.defaults, {

  build: true,
  geometry: {},
  material: false,

  shadow: {
    cast: true,
    receive: true
  },

  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 }
}), _class2.instructions = {
  position: ['x', 'y', 'z'],
  rotation: ['x', 'y', 'z'],
  scale: ['x', 'y', 'z']
}, _temp$1)) || _class$1);

var _dec$1;
var _class$2;
var _class2$1;
var _temp$2;

/**
 * @class LightComponent
 * @category core
 * @param {Object} [params] - The parameters object.
 * @param {Object} [instructions] - The instructions object.
 * @extends module:core.Component
 * @memberof module:core
 */
var LightComponent = (_dec$1 = attributes(copy('position', 'rotation', 'quaternion', 'target')), _dec$1(_class$2 = (_temp$2 = _class2$1 = function (_Component) {
  inherits(LightComponent, _Component);

  /**
   * Default values for parameters
   * @member {Object} module:core.LightComponent#defaults
   * @static
   * @default
   * {
   *   build: true,
   *
   *   shadow: {
   *     cast: true,
   *
   *     bias: 0,
   *     radius: 1,
   *
   *     mapSize: {
   *       width: 1024,
   *       height: 1024
   *     },
   *
   *     camera: {
   *       near: true,
   *       far: 400,
   *       fov: 90,
   *
   *       top: 200,
   *       bottom: -200,
   *       left: -200,
   *       right: 200
   *     }
   *   },
   *
   *   position: {x: 0, y: 0, z: 0},
   *   rotation: {x: 0, y: 0, z: 0}
   * }
   */
  function LightComponent(params) {
    var defaults$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LightComponent.defaults;
    var instructions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : LightComponent.instructions;
    classCallCheck(this, LightComponent);

    var _this = possibleConstructorReturn(this, (LightComponent.__proto__ || Object.getPrototypeOf(LightComponent)).call(this, params, defaults$$1, instructions));

    if (_this.params.build) {
      var build = _this.build(_this.params);

      if (!build) {
        throw new CompositionError('LightComponent', '.build() method should return a THREE.Object3D or a Promise resolved with THREE.Object3D.', _this);
      }

      if (build instanceof Promise) {
        build.then(function (native) {
          _this.native = native;
        });
      } else _this.native = build;

      _this.wrap();
    }
    return _this;
  }

  // BUILDING & WRAPPING

  /**
   * @method build
   * @instance
   * @description Build livecycle should return a native object.
   * @throws {CompositionError}
   * @memberof module:core.LightComponent
   */


  /**
   * Static instructions
   * @member {Object} module:core.LightComponent#instructions
   * @static
   * @default
   * {
   *   position: ['x', 'y', 'z'],
   *   rotation: ['x', 'y', 'z']
   * }
   */


  createClass(LightComponent, [{
    key: 'build',
    value: function build() {
      throw new CompositionError('MeshComponent', 'Instance should have it\'s own .build().', this);
    }

    /**
     * @method wrap
     * @instance
     * @description Wraps transforms (`position` & `rotation`)
     * @return {Promise} Resolved when action is completed
     * @memberof module:core.LightComponent
     */

  }, {
    key: 'wrap',
    value: function wrap() {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.defer(function () {
          var _params = _this2.params,
              position = _params.position,
              rotation = _params.rotation;


          _this2.position.set(position.x, position.y, position.z);
          _this2.rotation.set(rotation.x, rotation.y, rotation.z);

          _this2.applyBridge({ onWrap: 1 });

          resolve(_this2);
        });
      });
    }

    /**
     * @method wrapShadow
     * @instance
     * @description Wraps shadow properties
     * @memberof module:core.LightComponent
     */

  }, {
    key: 'wrapShadow',
    value: function wrapShadow() {
      var native = this.native,
          shadow = this.params.shadow;


      native.castShadow = shadow.cast;
      native.shadow.mapSize.width = shadow.mapSize.width;
      native.shadow.mapSize.height = shadow.mapSize.height;
      native.shadow.bias = shadow.bias;
      native.shadow.radius = shadow.radius;

      var shadowCamera = native.shadow.camera;
      var camera = shadow.camera;

      shadowCamera.near = camera.near;
      shadowCamera.far = camera.far;
      shadowCamera.fov = camera.fov;

      shadowCamera.left = camera.left;
      shadowCamera.right = camera.right;
      shadowCamera.top = camera.top;
      shadowCamera.bottom = camera.bottom;
    }

    // COPYING & CLONING

    /**
     * @method copy
     * @instance
     * @description Copy source transforms & execute `Component.copy()`
     * @return {this} LightComponent
     * @memberof module:core.LightComponent
     */

  }, {
    key: 'copy',
    value: function copy$$1(source) {
      var _this3 = this;

      return get(LightComponent.prototype.__proto__ || Object.getPrototypeOf(LightComponent.prototype), 'copy', this).call(this, source, function () {
        if (_this3.target) _this3.target.copy(source.target());

        _this3.position.copy(source.position);
        _this3.rotation.copy(source.rotation);
        _this3.quaternion.copy(source.quaternion);
      });
    }

    /**
     * @method clone
     * @instance
     * @description Make a clone of this LightComponent using `.copy()`
     * @return {LightComponent} clone of this object
     * @memberof module:core.LightComponent
     */

  }, {
    key: 'clone',
    value: function clone() {
      return new this.constructor({ build: false }).copy(this);
    }
  }]);
  return LightComponent;
}(Component), _class2$1.defaults = _extends({}, Component.defaults, {

  build: true,

  shadow: {
    cast: true,

    bias: 0,
    radius: 1,

    mapSize: {
      width: 1024,
      height: 1024
    },

    camera: {
      near: true,
      far: 400,
      fov: 90,

      top: 200,
      bottom: -200,
      left: -200,
      right: 200
    }
  },

  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 }
}), _class2$1.instructions = {
  position: ['x', 'y', 'z'],
  rotation: ['x', 'y', 'z']
}, _temp$2)) || _class$2);

var _dec$2;
var _class$3;
var _class2$2;
var _temp$3;

/**
 * @class CameraComponent
 * @category core
 * @param {Object} [params] - The parameters object.
 * @param {Object} [instructions] - The instructions object.
 * @extends module:core.Component
 * @memberof module:core
 */
var CameraComponent = (_dec$2 = attributes(copy('position', 'rotation', 'quaternion', 'target')), _dec$2(_class$3 = (_temp$3 = _class2$2 = function (_Component) {
  inherits(CameraComponent, _Component);

  /**
   * Default values for parameters
   * @member {Object} module:core.CameraComponent#defaults
   * @static
   * @default
   * {
   *   build: true,
   *
   *   position: {x: 0, y: 0, z: 0},
   *   rotation: {x: 0, y: 0, z: 0}
   * }
   */
  function CameraComponent(params) {
    var defaults$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CameraComponent.defaults;
    var instructions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CameraComponent.instructions;
    classCallCheck(this, CameraComponent);

    var _this = possibleConstructorReturn(this, (CameraComponent.__proto__ || Object.getPrototypeOf(CameraComponent)).call(this, params, defaults$$1, instructions));

    if (_this.params.build) {
      var build = _this.build(_this.params);

      if (!build) {
        throw new CompositionError('CameraComponent', '.build() method should return a THREE.Object3D or a Promise resolved with THREE.Object3D.', _this);
      }

      if (build instanceof Promise) {
        build.then(function (native) {
          _this.native = native;
        });
      } else _this.native = build;

      _this.wrap();
    }
    return _this;
  }

  // BUILDING & WRAPPING

  /**
   * @method build
   * @instance
   * @description Build livecycle should return a native object.
   * @throws {CompositionError}
   * @memberof module:core.CameraComponent
   */


  /**
   * Static instructions
   * @member {Object} module:core.CameraComponent#instructions
   * @static
   * @default
   * {
   *   position: ['x', 'y', 'z'],
   *   rotation: ['x', 'y', 'z'],
   *   scale: ['x', 'y', 'z']
   * }
   */


  createClass(CameraComponent, [{
    key: 'build',
    value: function build() {
      throw new CompositionError('CameraComponent', 'Instance should have it\'s own .build().', this);
    }

    /**
     * @method wrap
     * @instance
     * @description Wraps transforms (`position` & `rotation`)
     * @return {Promise} Resolved when action is completed
     * @memberof module:core.CameraComponent
     */

  }, {
    key: 'wrap',
    value: function wrap() {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.defer(function () {
          _this2.position.set(_this2.params.position.x, _this2.params.position.y, _this2.params.position.z);
          _this2.rotation.set(_this2.params.rotation.x, _this2.params.rotation.y, _this2.params.rotation.z);

          _this2.applyBridge({ onWrap: 1 });

          resolve(_this2);
        });
      });
    }

    /**
     * @method copy
     * @instance
     * @description Copy source transforms & execute `Component.copy()`
     * @return {this} CameraComponent
     * @memberof module:core.CameraComponent
     */

  }, {
    key: 'copy',
    value: function copy$$1(source) {
      var _this3 = this;

      return get(CameraComponent.prototype.__proto__ || Object.getPrototypeOf(CameraComponent.prototype), 'copy', this).call(this, source, function () {
        if (_this3.target) _this3.target.copy(source.target());

        _this3.position.copy(source.position);
        _this3.rotation.copy(source.rotation);
        _this3.quaternion.copy(source.quaternion);
      });
    }

    /**
     * @method clone
     * @instance
     * @description Make a clone of this CameraComponent using `.copy()`
     * @return {CameraComponent} clone of this object
     * @memberof module:core.CameraComponent
     */

  }, {
    key: 'clone',
    value: function clone() {
      return new this.constructor({ build: false }).copy(this);
    }
  }]);
  return CameraComponent;
}(Component), _class2$2.defaults = _extends({}, Component.defaults, {

  build: true,

  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 }
}), _class2$2.instructions = {
  position: ['x', 'y', 'z'],
  rotation: ['x', 'y', 'z'],
  scale: ['x', 'y', 'z']
}, _temp$3)) || _class$3);

const version = "2.0.0";

var presentNode = function () {
  var time = process.hrtime();
  return time[0] * 1e3 + time[1] / 1e6;
};

var system = {
  window: typeof window === 'undefined' ? global : window
};

if (typeof global !== 'undefined') {
  global.performance = {
    now: presentNode
  };
}

/**
 * @class App
 * @category core
 * @description This component is used to prepare a world scene, setup physics, camera, renderer and all other things that you usually do before making meshes.
 * @param {Array} [modules=[]] - Array of Modules
 * @extends ModuleSystem
 * @memberof module:core
 */

var App = function (_ModuleSystem) {
  inherits(App, _ModuleSystem);

  /**
   * @description Defines whether the scene should render or not
   * @member {Boolean} module:core.App#updateEnabled
   * @public
   */
  function App() {
    var modules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    classCallCheck(this, App);

    console.log('WHS.App ' + version);

    var _this = possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.simulate = false;
    _this.updateEnabled = true;
    _this.loops = [];

    _this.manager = new ModuleManager(_this);
    _this.modules = modules;

    _this.integrateModules();
    return _this;
  }

  // CONTROLS & UPDATING

  /**
   * @method start
   * @description Start rendering loop and physics simulation (if you use version with physics).
   * @memberof module:core.App
   */

  /**
   * Loops in this app
   * @description Array of loops that are executed by this app.
   * @member {Array} module:core.App#loops
   * @public
   */

  /**
   * Simulate flag
   * @description Same as .updateEnabled, but for physics. Defines if physics is simulated each frame.
   * @member {Boolean} module:core.App#simulate
   * @public
   */


  createClass(App, [{
    key: 'start',
    value: function start() {
      var requestAnimFrame = function () {
        return system.window.requestAnimationFrame || system.window.webkitRequestAnimationFrame || system.window.mozRequestAnimationFrame || function (callback) {
          system.window.setTimeout(callback, 1000 / 60);
        };
      }();

      var loops = this.loops,
          updateEnabled = this.updateEnabled;


      function process() {
        requestAnimFrame(process);
        if (!updateEnabled) return;

        for (var i = 0, ll = loops.length; i < ll; i++) {
          var e = loops[i];
          if (e.enabled) e.execute(e.clock);
        }
      }

      this.updateEnabled = true;
      process();
    }

    /**
     * @method stop
     * @description Stops rendering loops
     * @memberof module:core.App
     */

  }, {
    key: 'stop',
    value: function stop() {
      this.updateEnabled = false;
    }

    /**
     * @method addLoop
     * @description Adds loop to this app.
     * @param {Object} loop - the loop to add
     * @return {Promise} Promise that is resolved when promises completed.
     * @memberof module:core.App
     * @example <caption>Adding a loop to an app</caption>
     * const loop = new Loop(() => {
     *  // ...
     * });
     *
     * const app = new App();
     *
     * app.addLoop(loop);
     * loop.start();
     */

  }, {
    key: 'addLoop',
    value: function addLoop(loop) {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.loops.push(loop);
        resolve(loop);
      });
    }

    /**
     * @method removeLoop
     * @description Removes loop from this app.
     * @param {Object} loop - the loop to remove
     * @return {Promise} Promise that is resolved when promises completed.
     * @memberof module:core.App
     */

  }, {
    key: 'removeLoop',
    value: function removeLoop(loop) {
      var _this3 = this;

      return new Promise(function (resolve) {
        var index = _this3.loops.indexOf(loop);
        if (index !== -1) _this3.loops.splice(index, 1);

        resolve(loop);
      });
    }
  }, {
    key: 'get',
    value: function get$$1(key) {
      return this.manager.get(key);
    }
  }, {
    key: 'use',
    value: function use(key) {
      return this.manager.use(key);
    }
  }]);
  return App;
}(ModuleSystem);

/**
 * @class Loop
 * @category core
 * @param {Function} func function to execute on each animation frame
 * @param {Boolean} [useClock=true] passes a Clock to the function when called, if true
 * @memberof module:core
 */

var Loop = function () {
  function Loop(func) {
    var useClock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    classCallCheck(this, Loop);

    this.func = func;
    this.clock = useClock ? new three.Clock() : null;
    this.enabled = false;
  }

  // CONTROLS

  /**
   * @method start
   * @instance
   * @description Starts this loop, clock if it has one. Won't do anything if loop enabled already.
   * @param {Component} [world] app to add this loop to, if provided.
   * @memberof module:core.Loop
   */


  createClass(Loop, [{
    key: 'start',
    value: function start(world) {
      if (this.enabled) return;

      if (world) world.addLoop(this);

      if (this.clock) this.clock.start();
      this.enabled = true;
    }

    /**
     * @method stop
     * @instance
     * @description Stops this loop and its clock if it has one, won't do anything if this loop is not enabled)
     * @param {Component} [world] app to remove this loop from, if provided.
     * @memberof module:core.Loop
     */

  }, {
    key: 'stop',
    value: function stop(world) {
      if (!this.enabled) return;

      if (this.clock) this.clock.stop();
      this.enabled = false;

      if (world) world.removeLoop(this);
    }

    // EXECUTION

    /**
     * @method execute
     * @instance
     * @description Executes the function of this loop
     * @memberof module:core.Loop
     * @returns {*} whatever the function of this loop returns
     */

  }, {
    key: 'execute',
    value: function execute() {
      return this.func(this.clock);
    }
  }]);
  return Loop;
}();

/** @module core */

var _class$4;
var _temp$4;

/**
 * @class AmbientLight
 * @category components/lights
 * @description AmbientLight is a simple class, it extends Light and inherits all its methods.
 * AmbientLight creates basic light around all scene, so it doesn't need properties like pos or target.
 * It supports only color and intensity as parameters, which defines the color of the surrounded light and intensity of light.
 * @param {Object} [params={light: {color: 0xffffff, intensity: 1}}] - The params.
 * @extends module:core.LightComponent
 * @memberof module:components/lights
 * @example <caption>Creating an AmbientLight </caption>
 * new AmbientLight({
 *   color: 0xffffff,
 *   intensity: 0.2
 * }).addTo(world);
 */
var AmbientLight$1 = (_temp$4 = _class$4 = function (_LightComponent) {
  inherits(AmbientLight$$1, _LightComponent);

  function AmbientLight$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, AmbientLight$$1);
    return possibleConstructorReturn(this, (AmbientLight$$1.__proto__ || Object.getPrototypeOf(AmbientLight$$1)).call(this, params, AmbientLight$$1.defaults));
  }

  createClass(AmbientLight$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ light: new three.AmbientLight(params.color, params.intensity) }).light;
    }
  }]);
  return AmbientLight$$1;
}(LightComponent), _class$4.defaults = _extends({}, LightComponent.defaults, {

  color: 0xffffff,
  intensity: 1
}), _temp$4);

var _class$5;
var _temp$5;

/**
 * @class DirectionalLight
 * @category components/lights
 * @description DirectinalLight creates a light that shines from a specific direction not from a specific position.<br/><br/>
 * This light will behave as though it is infinitely far away and the rays produced from it are all parallel. <br/><br/>
 * The best analogy would be a light source that acts like the sun: the sun is so far away that all sunlight hitting objects comes from the same angle.<br/><br/>
 * It has the same options as AmbientLight in light paramater, but it also supports pos and target paramaters.
 * @param {Object} [params={light: {color: 0xffffff, intensity: 1}}] - The params.
 * @extends module:core.LightComponent
 * @memberof module:components/lights
 * @example <caption>Creating a DirectionalLight to fall down from vec3(10, 20, 10) to vec3(0, 0, 0)</caption>
 * new DirectionalLight({
 *   color: 0xffffff,
 *   intensity: 0.2,
 *
 *   position: [10, 20, 10]
 * }).addTo(app);
 */
var DirectionalLight$1 = (_temp$5 = _class$5 = function (_LightComponent) {
  inherits(DirectionalLight$$1, _LightComponent);

  function DirectionalLight$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, DirectionalLight$$1);

    var _this = possibleConstructorReturn(this, (DirectionalLight$$1.__proto__ || Object.getPrototypeOf(DirectionalLight$$1)).call(this, params, DirectionalLight$$1.defaults));

    _this.wrapShadow();
    return _this;
  }

  createClass(DirectionalLight$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ light: new three.DirectionalLight(params.color, params.intensity) }).light;
    }
  }]);
  return DirectionalLight$$1;
}(LightComponent), _class$5.defaults = _extends({}, LightComponent.defaults, {

  color: 0xffffff,
  intensity: 1
}), _temp$5);

var _class$6;
var _temp$6;

/**
 * @class HemisphereLight
 * @category components/lights
 * @description HemisphereLight is a light source positioned directly above the scene.<br/>
 * It also doesn't need position and target properties.
 * @classDesc
 * <iframe src="https://threejs.org/examples/webgl_lights_hemisphere.html"></iframe>
 * @param {Object} [params={light: {skyColor: 0xffffff, groundColor: 0xffffff, intensity: 1}}] - The params.
 * @extends module:core.LightComponent
 * @memberof module:components/lights
 * @example <caption>Creating a HemisphereLight</caption>
 * new HemisphereLight({
 *   skyColor: 0xff0000,
 *   groundColor: 0x0000ff,
 *   intensity: 0.2
 * }).addTo(app);
 */
var HemisphereLight$1 = (_temp$6 = _class$6 = function (_LightComponent) {
  inherits(HemisphereLight$$1, _LightComponent);

  function HemisphereLight$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, HemisphereLight$$1);
    return possibleConstructorReturn(this, (HemisphereLight$$1.__proto__ || Object.getPrototypeOf(HemisphereLight$$1)).call(this, params, HemisphereLight$$1.defaults));
  }

  createClass(HemisphereLight$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ light: new three.HemisphereLight(params.skyColor, params.groundColor, params.intensity) }).light;
    }
  }]);
  return HemisphereLight$$1;
}(LightComponent), _class$6.defaults = _extends({}, LightComponent.defaults, {

  skyColor: 0xffffff,
  groundColor: 0xffffff,
  intensity: 1
}), _temp$6);

var _class$7;
var _temp$7;

/**
 * @class PointLight
 * @category components/lights
 * @description PointLight creates a light at a specific position in the scene. The light shines in all directions (roughly similar to a light bulb.)<br/><br/>
 * It has the same options as AmbientLight in light paramater, but it also supports position, distance and decay.<br/>
 * @param {Object} [params={light: {color: 0xffffff, intensity: 1, distance: 100, decay: 1}}] - The params.
 * @extends LightComponent
 * @memberof module:components/lights
 * @example <caption>Creating a PointLight</caption>
 * new PointLight( {
 *   color: 0xff0000,
 *   intensity: 2,
 *   distance: 300
 *
 *   position: [10, 20, 10]
 * }).addTo(app);
 */
var PointLight$1 = (_temp$7 = _class$7 = function (_LightComponent) {
  inherits(PointLight$$1, _LightComponent);

  function PointLight$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, PointLight$$1);

    var _this = possibleConstructorReturn(this, (PointLight$$1.__proto__ || Object.getPrototypeOf(PointLight$$1)).call(this, params, PointLight$$1.defaults));

    _this.wrapShadow();
    return _this;
  }

  createClass(PointLight$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ light: new three.PointLight(params.color, params.intensity, params.distance, params.decay) }).light;
    }
  }]);
  return PointLight$$1;
}(LightComponent), _class$7.defaults = _extends({}, LightComponent.defaults, {

  color: 0xffffff,
  intensity: 1,
  distance: 100,
  decay: 1
}), _temp$7);

var _class$8;
var _temp$8;

/**
 * @class SpotLight
 * @category components/lights
 * @description SpotLight creates spot light that can cast shadow in one direction. <br/><br/>
 * It has the same parameters as AmbientLight in light, but it also supports pos and target. <br/><br/>
 * SpotLight affects meshes with lambert and phong material.
 * @classDesc
 * <iframe src="https://threejs.org/examples/webgl_lights_spotlight.html"></iframe>
 * @param {Object} [params={light: {color: 0xffffff, intensity: 1, distance: 100, angle: Math.PI / 3, exponent: 0, decay: 1}}] - The params.
 * @extends module:core.LightComponent
 * @memberof module:components/lights
 * @example <caption>Creating a SpotLight that falls down from vec3(10, 20, 10) to vec3(0, 0, 0)</caption>
 * new SpotLight({
 *   color: 0x00ff00,
 *   intensity: 3,
 *   distance: 1000
 *
 *   position: [10, 20, 10]
 * }).addTo(app);
 */
var SpotLight$1 = (_temp$8 = _class$8 = function (_LightComponent) {
  inherits(SpotLight$$1, _LightComponent);

  function SpotLight$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, SpotLight$$1);

    var _this = possibleConstructorReturn(this, (SpotLight$$1.__proto__ || Object.getPrototypeOf(SpotLight$$1)).call(this, params, SpotLight$$1.defaults));

    _this.wrapShadow();
    return _this;
  }

  createClass(SpotLight$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ light: new three.SpotLight(params.color, params.intensity, params.distance, params.angle, params.exponent, params.decay) }).light;
    }
  }]);
  return SpotLight$$1;
}(LightComponent), _class$8.defaults = _extends({}, LightComponent.defaults, {

  color: 0xffffff,
  intensity: 1,
  distance: 100,
  angle: Math.PI / 3,
  exponent: 0,
  decay: 1
}), _temp$8);

var _class$9;
var _temp$9;

var AreaLight = (_temp$9 = _class$9 = function (_LightComponent) {
  inherits(AreaLight, _LightComponent);

  function AreaLight() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, AreaLight);
    return possibleConstructorReturn(this, (AreaLight.__proto__ || Object.getPrototypeOf(AreaLight)).call(this, params, AreaLight.defaults));
  }

  createClass(AreaLight, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ light: new three.RectAreaLight(params.color, params.intensity, params.width, params.height) }).light;
    }
  }]);
  return AreaLight;
}(LightComponent), _class$9.defaults = _extends({}, LightComponent.defaults, {

  color: 0xffffff,
  intensity: 1,
  width: 10,
  height: 10
}), _temp$9);

/** @module components/lights */

var _class$10;
var _temp$10;

/**
 * @class CubeCamera
 * @category components/cameras
 * @description Creates 6 cameras that render to a WebGLRenderTargetCube
 * @param {Object} [params] - The parameters object.
 * @memberof module:components/cameras
 * @extends module:core.CameraComponent
 * @example <caption>Creates a CubeCamera and set it as app's camera</caption>
 * const camera = new CubeCamera({
 *   camera: {
 *     cubeResolution: 256
 *   },
 *
 *   position: {
 *     x: 0,
 *     y: 100,
 *     z: 0
 *   }
 * });
 *
 * app.camera = camera;
 */
var CubeCamera$1 = (_temp$10 = _class$10 = function (_CameraComponent) {
  inherits(CubeCamera$$1, _CameraComponent);

  function CubeCamera$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, CubeCamera$$1);
    return possibleConstructorReturn(this, (CubeCamera$$1.__proto__ || Object.getPrototypeOf(CubeCamera$$1)).call(this, params, CubeCamera$$1.defaults));
  }

  /**
   * Default values for parameters
   * @member {Object} module:components/cameras.CubeCamera#defaults
   * @static
   * @default <pre>
   * {
   *   camera: {
   *     near: 1,
   *     far: 1000,
   *     cubeResolution: 128
   *   }
   * }</pre>
   */


  createClass(CubeCamera$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ camera: new three.CubeCamera(params.near, params.far, params.cubeResolution) }).camera;
    }
  }]);
  return CubeCamera$$1;
}(CameraComponent), _class$10.defaults = _extends({}, CameraComponent.defaults, {

  near: 1,
  far: 1000,
  cubeResolution: 128
}), _temp$10);

var _class$11;
var _temp$11;

/**
 * @class OrthographicCamera
 * @category components/cameras
 * @description Camera with orthographic projection.
 * @param {Object} [params] - The parameters object.
 * @memberof module:components/cameras
 * @extends module:core.CameraComponent
 * @example <caption>Create an OrthographicCamera and set it as app's camera</caption>
 * const camera = new OrthographicCamera({
 *   camera: {
 *     far: 10000
 *   },
 *
 *   position: {
 *     y: 50
 *   }
 * });
 *
 * app.camera = camera;
 */
var OrthographicCamera$1 = (_temp$11 = _class$11 = function (_CameraComponent) {
  inherits(OrthographicCamera$$1, _CameraComponent);

  function OrthographicCamera$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, OrthographicCamera$$1);
    return possibleConstructorReturn(this, (OrthographicCamera$$1.__proto__ || Object.getPrototypeOf(OrthographicCamera$$1)).call(this, params, OrthographicCamera$$1.defaults));
  }
  /**
   * Default values for parameters
   * @member {Object} module:components/cameras.OrthographicCamera#defaults
   * @static
   * @default <pre>
   * {
   *   near: 1,
   *   far: 1000,
   *   left: system.window.innerWidth / -2,
   *   right: system.window.innerWidth / 2,
   *   top: system.window.innerHeight / 2,
   *   bottom: system.window.innerHeight / -2
   * }</pre>
   */


  createClass(OrthographicCamera$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ camera: new three.OrthographicCamera(params.left, params.right, params.top, params.bottom, params.near, params.far) }).camera;
    }
  }]);
  return OrthographicCamera$$1;
}(CameraComponent), _class$11.defaults = _extends({}, CameraComponent.defaults, {

  near: 1,
  far: 1000,
  left: system.window.innerWidth / -2,
  right: system.window.innerWidth / 2,
  top: system.window.innerHeight / 2,
  bottom: system.window.innerHeight / -2
}), _temp$11);

var _class$12;
var _temp$12;

/**
 * @class PerspectiveCamera
 * @description Camera with perspective projection.
 * @category components/cameras
 * @param {Object} [params] - The parameters object.
 * @memberof module:components/cameras
 * @extends module:core.CameraComponent
 * @example <caption>Create an PerspectiveCamera and set it as app's camera</caption>
 * const camera = new PerspectiveCamera({
 *   fov: 75,
 *   aspect: window.innerWidth / window.innerHeight,
 *
 *   position: {
 *     x: 0,
 *     y: 100,
 *     z: 0
 *   }
 * });
 *
 * app.camera = camera;
 */
var PerspectiveCamera$1 = (_temp$12 = _class$12 = function (_CameraComponent) {
  inherits(PerspectiveCamera$$1, _CameraComponent);

  function PerspectiveCamera$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, PerspectiveCamera$$1);
    return possibleConstructorReturn(this, (PerspectiveCamera$$1.__proto__ || Object.getPrototypeOf(PerspectiveCamera$$1)).call(this, params, PerspectiveCamera$$1.defaults));
  }
  /**
   * Default values for parameters
   * @member {Object} module:components/cameras.PerspectiveCamera#defaults
   * @static
   * @default <pre>
   * {
   *   near: 1,
   *   far: 1000,
   *   fov: 75,
   *   aspect: system.window.innerWidth / system.window.innerHeight
   * }</pre>
   */


  createClass(PerspectiveCamera$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ camera: new three.PerspectiveCamera(params.fov, params.aspect, params.near, params.far) }).camera;
    }
  }]);
  return PerspectiveCamera$$1;
}(CameraComponent), _class$12.defaults = _extends({}, CameraComponent.defaults, {

  near: 1,
  far: 1000,
  fov: 75,
  aspect: system.window.innerWidth / system.window.innerHeight
}), _temp$12);

/** @module components/cameras */

var _class$13;
var _temp$13;

/**
 * @class Box
 * @category components/meshes
 * @description As told on Component definition, while you can pass any of the inherited params for this component construction, you will need to
 * pass specific parameters to build this mesh as a geometry object.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#BoxGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Box, and adding to app</caption>
 *  new Box({
 *    geometry: {
 *      width: 2,
 *      height: 2,
 *      depth: 2
 *    },
 *
 *    material: new THREE.MeshBasicMaterial({
 *      color: 0xffffff
 *    }),
 *
 *    position: [50, 60, 70]
 * }).addTo(app);
 */
var Box = (_temp$13 = _class$13 = function (_MeshComponent) {
  inherits(Box, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Box#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     width: 1,
   *     height: 1,
   *     depth: 1,
   *     widthSegments: 1,
   *     heightSegments: 1,
   *     depthSegments: 1
   *   }
   * }</pre>
   */
  function Box() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Box);
    return possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this, params, Box.defaults, Box.instructions));
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Box
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Box#instructions
   * @static
   * @default geometry: ['width', 'height', 'depth', 'widthSegments', 'heightSegments', 'depthSegements']
   */


  createClass(Box, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = new (params.buffer ? three.BoxBufferGeometry : three.BoxGeometry)(params.geometry.width, params.geometry.height, params.geometry.depth, params.geometry.widthSegments, params.geometry.heightSegments, params.geometry.depthSegments);

      return geometry;
    }
  }]);
  return Box;
}(MeshComponent), _class$13.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    width: 1,
    height: 1,
    depth: 1,
    widthSegments: 1,
    heightSegments: 1,
    depthSegments: 1
  }
}), _class$13.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['width', 'height', 'depth', 'widthSegments', 'heightSegments', 'depthSegements']
}), _temp$13);

var _class$14;
var _temp$14;

/**
 * @class Circle
 * @category components/meshes
 * @description As told on Component definition, while you can pass any of the inherited params for this component construction, you will need to
 * pass specific parameters to build this mesh as a geometry object.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#CircleGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Circle, and adding to app</caption>
 *  new Circle({
 *    geometry: {
 *      radius: 4,
 *      segments: 16
 *    },
 *
 *    material: new THREE.MeshBasicMaterial({
 *      color: 0xffffff
 *    }),
 *
 *    position: [50, 60, 70]
 * }).addTo(app);
 */
var Circle = (_temp$14 = _class$14 = function (_MeshComponent) {
  inherits(Circle, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Circle#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radius: 50,
   *     segments: 8,
   *     thetaStart: 0,
   *     thetaLength: Math.PI * 2
   *   }
   * }</pre>
   */
  function Circle() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Circle);
    return possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, params, Circle.defaults, Circle.instructions));
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Circle
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Circle#instructions
   * @static
   * @default geometry: ['radius', 'segments', 'thetaStart', 'thetaLength']
   */


  createClass(Circle, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = new (params.buffer ? three.CircleBufferGeometry : three.CircleGeometry)(params.geometry.radius, params.geometry.segments, params.geometry.thetaStart, params.geometry.thetaLength);

      return geometry;
    }
  }]);
  return Circle;
}(MeshComponent), _class$14.defaults = _extends({}, MeshComponent.defaults, {

  geometry: {
    radius: 50,
    segments: 8,
    thetaStart: 0,
    thetaLength: Math.PI * 2
  }
}), _class$14.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radius', 'segments', 'thetaStart', 'thetaLength']
}), _temp$14);

var _class$15;
var _temp$15;

/**
 * @class Cone
 * @category components/meshes
 * @description A cylinder is one of the most basic curvilinear geometric shapes, the surface formed by the points at a fixed distance from a given straight line, the axis of the cylinder. <br/><br/>
 * The solid enclosed by this surface and by two planes perpendicular to the axis is also called a cylinder.<br/>
 * The surface area and the volume of a cylinder have been known since deep antiquity.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#ConeGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Cone, and adding to app</caption>
 * new Cone({
 *   geometry: {
 *     radiusTop: 2,
 *     radiusBottom: 4,
 *     height: 5
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   pos: [0, 100, 0]
 * }).addTo(app);
 */
var Cone = (_temp$15 = _class$15 = function (_MeshComponent) {
  inherits(Cone, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Cone#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radius: 20,
   *     height: 100,
   *     radiusSegments: 32,
   *     heightSegments: 1,
   *     openEnded: false,
   *     thetaStart: 0,
   *     thetaLength: Math.PI * 2
   *   }
   * }</pre>
   */
  function Cone() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Cone);

    var _this = possibleConstructorReturn(this, (Cone.__proto__ || Object.getPrototypeOf(Cone)).call(this, params, Cone.defaults, Cone.instructions));

    if (params.build) {
      _this.build(params);
      get(Cone.prototype.__proto__ || Object.getPrototypeOf(Cone.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Cone
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Cone#instructions
   * @static
   * @default <pre>
   * geometry: [
   *   'radius',
   *   'height',
   *   'radiusSegments',
   *   'heightSegments',
   *   'openEnded',
   *   'thetaStart',
   *   'thetaLength'
   * ]
   * </pre>
   */


  createClass(Cone, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = new (params.buffer ? three.ConeBufferGeometry : three.ConeGeometry)(params.geometry.radius, params.geometry.height, params.geometry.radiusSegments, params.geometry.heightSegments, params.geometry.openEnded, params.geometry.thetaStart, params.geometry.thetaLength);

      return geometry;
    }
  }]);
  return Cone;
}(MeshComponent), _class$15.defaults = _extends({}, MeshComponent.defaults, {

  geometry: {
    radius: 20,
    height: 100,
    radiusSegments: 32,
    heightSegments: 1,
    openEnded: false,
    thetaStart: 0,
    thetaLength: Math.PI * 2
  }
}), _class$15.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radius', 'height', 'radiusSegments', 'heightSegments', 'openEnded', 'thetaStart', 'thetaLength']
}), _temp$15);

var _class$16;
var _temp$16;

/**
 * @class Cylinder
 * @category components/meshes
 * @description A cylinder is one of the most basic curvilinear geometric shapes, the surface formed by the points at a fixed distance from a given straight line, the axis of the cylinder. <br/><br/>
 * The solid enclosed by this surface and by two planes perpendicular to the axis is also called a cylinder.<br/>
 * The surface area and the volume of a cylinder have been known since deep antiquity.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#CylinderGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Cylinder, and adding to app</caption>
 * new Cylinder({
 *   geometry: {
 *     radiusTop: 2,
 *     radiusBottom: 4,
 *     height: 5
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   pos: [0, 100, 0]
 * }).addTo(app);
 */
var Cylinder = (_temp$16 = _class$16 = function (_MeshComponent) {
  inherits(Cylinder, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Cylinder#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radiusTop: 20,
   *     radiusBottom: 20,
   *     height: 100,
   *     radiusSegments: 32,
   *     heightSegments: 1,
   *     openEnded: false,
   *     thetaStart: 0,
   *     thetaLength: Math.PI * 2
   *   }
   * }</pre>
   */
  function Cylinder() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Cylinder);

    var _this = possibleConstructorReturn(this, (Cylinder.__proto__ || Object.getPrototypeOf(Cylinder)).call(this, params, Cylinder.defaults, Cylinder.instructions));

    if (params.build) {
      _this.build(params);
      get(Cylinder.prototype.__proto__ || Object.getPrototypeOf(Cylinder.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Cylinder
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Cylinder#instructions
   * @static
   * @default <pre>
   * geometry: [
   *   'radiusTop',
   *   'radiusBottom',
   *   'height',
   *   'radiusSegments',
   *   'heightSegments',
   *   'openEnded',
   *   'thetaStart',
   *   'thetaLength'
   * ]
   * </pre>
   */


  createClass(Cylinder, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = new (params.buffer ? three.CylinderBufferGeometry : three.CylinderGeometry)(params.geometry.radiusTop, params.geometry.radiusBottom, params.geometry.height, params.geometry.radiusSegments, params.geometry.heightSegments, params.geometry.openEnded, params.geometry.thetaStart, params.geometry.thetaLength);

      return geometry;
    }
  }]);
  return Cylinder;
}(MeshComponent), _class$16.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    radiusTop: 0,
    radiusBottom: 1,
    height: 1,
    radiusSegments: 32,
    heightSegments: 1,
    openEnded: false,
    thetaStart: 0,
    thetaLength: Math.PI * 2
  }
}), _class$16.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radiusTop', 'radiusBottom', 'height', 'radiusSegments', 'heightSegments', 'openEnded', 'thetaStart', 'thetaLength']
}), _temp$16);

var _class$17;
var _temp$17;

/**
 * @class Dodecahedron
 * @category components/meshes
 * @description In geometry, a dodecahedron is any polyhedron with twelve flat faces. <br/><br/>
 * The most familiar dodecahedron is the regular dodecahedron, which is a Platonic solid. <br/>
 * There are also three regular star dodecahedra, which are constructed as stellations of the convex form. <br/>
 * All of these have icosahedral symmetry, order 120.
 * Dodecahedron creates Dodecahedron object by it's radius and detail.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#DodecahedronGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Dodecahedron, and adding to app</caption>
 * new Dodecahedron({
 *   geometry: {
 *     radius: 2
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: {
 *     y: 10
 *   }
  * }).addTo(app);
 */
var Dodecahedron = (_temp$17 = _class$17 = function (_MeshComponent) {
  inherits(Dodecahedron, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Dodecahedron#defaults
   * @static
   * @default <pre>
   * geometry: {
   *   radius: 1,
   *   detail: 0
   * }
   * </pre>
   */
  function Dodecahedron() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Dodecahedron);

    var _this = possibleConstructorReturn(this, (Dodecahedron.__proto__ || Object.getPrototypeOf(Dodecahedron)).call(this, params, Dodecahedron.defaults, Dodecahedron.instructions));

    if (params.build) {
      _this.build(params);
      get(Dodecahedron.prototype.__proto__ || Object.getPrototypeOf(Dodecahedron.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Dodecahedron
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Dodecahedron#instructions
   * @static
   * @default <pre>
   * geometry: ['radius', 'detail']
   * </pre>
   */


  createClass(Dodecahedron, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.DodecahedronBufferGeometry : three.DodecahedronGeometry)(params.geometry.radius, params.geometry.detail);
    }
  }]);
  return Dodecahedron;
}(MeshComponent), _class$17.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    radius: 1,
    detail: 0
  }
}), _class$17.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radius', 'detail']
}), _temp$17);

var _class$18;
var _temp$18;

/**
 * @class Extrude
 * @category components/meshes
 * @description Extrude geometry means that you can create a 3D mesh from any 2D shape using three.js geometry based on <a href='https://threejs.org/docs/#api/math/Vector2'>THREE.Vector2.</a> <br/>
 * Such implementation will help you to make volumed shapes that have their own depth and can be seen from all angels.<br/><br/>
 * You can also find some interesting examples made using <a href='threejs.org'>three.js</a> which is a core of whs.js, such as:
 * - <a href='http://threejs.org/examples/webgl_geometry_extrude_shapes.html'>Webgl geometry extrude</a>
 * - <a href='http://threejs.org/examples/webgl_geometry_extrude_shapes2.html'>Extrude shapes from geodata</a>
 * - <a href='http://threejs.org/examples/webgl_geometry_extrude_splines.html'>Extrude splines</a>
 *
 * Such examples can be easily implemented using whitestorm.js or it's plugins. Use `Extrude` class with <a href='https://threejs.org/docs/#api/extras/core/Shape'>THREE.Shape</a> to get extrude effect of shape defined by 2D vectors.
 * This class is similar to <a href='https://threejs.org/docs/#api/geometries/ExtrudeGeometry'>THREE.ExtrudeGeometry</a>,
 * but it also contains all properties, applied by `Shape`, such as material, mass and vectors like position (pos) and rotation (rot).
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#ExtrudeGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a shape, then an Extrude from it</caption>
 * const shape = new THREE.Shape([
 *   new THREE.Vector2(-4,-4),
 *   new THREE.Vector2(-2,0),
 *   new THREE.Vector2(-4,4),
 *   new THREE.Vector2(0,2),
 *   new THREE.Vector2(4,4),
 *   new THREE.Vector2(2,0),
 *   new THREE.Vector2(4,-4),
 *   new THREE.Vector2(0,-2)
 * ]);
 *
 * const extrude = new Extrude({
 *   geometry: {
 *     shapes: shape,
 *     options: {
 *       bevelEnabled: false,
 *       bevelSize: 0,
 *       amount: 2
 *     }
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: [0, 100, 0]
 * });
 *
 * extrude.addTo(app);
 */
var Extrude = (_temp$18 = _class$18 = function (_MeshComponent) {
  inherits(Extrude, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Extrude#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     shapes: [],
   *     options: {}
   *   }
   * }
   * </pre>
   */
  function Extrude() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Extrude);

    var _this = possibleConstructorReturn(this, (Extrude.__proto__ || Object.getPrototypeOf(Extrude)).call(this, params, Extrude.defaults, Extrude.instructions));

    if (params.build) {
      _this.build(params);
      get(Extrude.prototype.__proto__ || Object.getPrototypeOf(Extrude.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Extrude
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Extrude#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: ['shapes', 'options']
   * }
   * </pre>
   */


  createClass(Extrude, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = new three.ExtrudeGeometry(params.geometry.shapes, params.geometry.options);

      return params.buffer ? new three.BufferGeometry().fromGeometry(geometry) : geometry;
    }
  }]);
  return Extrude;
}(MeshComponent), _class$18.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    shapes: [],
    options: {}
  }
}), _class$18.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['shapes', 'options']
}), _temp$18);

var _class$19;
var _temp$19;

/**
 * @class Icosahedron
 * @category components/meshes
 * @description In geometry, an icosahedron is a polyhedron with 20 faces.<br/>
 * There are many kinds of icosahedra, with some being more symmetrical than others. The most well known is the Platonic, convex regular icosahedron.<br/>
 * `Icosahedron` creates an Icosahedron object by its radius and detail.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#IcosahedronGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Icosahedron, and adding to app</caption>
 * new Icosahedron({
 *   geometry: {
 *     radius: 2,
 *     detail: 1
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: [0, 100, 0]
 * }).addTo(app);
 */
var Icosahedron = (_temp$19 = _class$19 = function (_MeshComponent) {
  inherits(Icosahedron, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Icosahedron#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radius: 1,
   *     detail: 0
   *   }
   * }</pre>
   */
  function Icosahedron() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Icosahedron);

    var _this = possibleConstructorReturn(this, (Icosahedron.__proto__ || Object.getPrototypeOf(Icosahedron)).call(this, params, Icosahedron.defaults, Icosahedron.instructions));

    if (params.build) {
      _this.build(params);
      get(Icosahedron.prototype.__proto__ || Object.getPrototypeOf(Icosahedron.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Icosahedron
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Icosahedron#instructions
   * @static
   * @default {geometry: ['radius', 'detail']}
   */


  createClass(Icosahedron, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.IcosahedronBufferGeometry : three.IcosahedronGeometry)(params.geometry.radius, params.geometry.detail);
    }
  }]);
  return Icosahedron;
}(MeshComponent), _class$19.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    radius: 1,
    detail: 0
  }
}), _class$19.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radius', 'detail']
}), _temp$19);

var _class$20;
var _temp$20;

/**
 * @class Lathe
 * @category components/meshes
 * @description A `LatheGeometry` allows you to create shapes from a smooth curve.
 * This curve is defined by a number of points (also called knots) and is most often called a spline. This spline is rotated around a fixed point and results in vase- and bell-like shapes.<br/><br/>
 * In 3D computer graphics, a lathed object is a 3D model whose vertex geometry is produced by rotating the points of a spline or other point set around a fixed axis.
 * The lathing may be partial; the amount of rotation is not necessarily a full 360 degrees.
 * The point set providing the initial source data can be thought of as a cross section through the object along a plane containing its axis of radial symmetry. <br/><br/>
 * The <a href='http://threejs.org/docs/scenes/geometry-browser.html#LatheGeometry'>following example</a> shows a geometry which can be generated using `Lathe` class.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#LatheGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Lath, and adding to app</caption>
 * const points = [];
 *
 * for (let i = 0; i < 10; i++) {
 *   points.push(
 *     new THREE.Vector2(
 *       (Math.sin(i * 0.7) * 15 + 50) / 10,
 *       (i - 5) * 0.2
 *     )
 *   );
 * }
 *
 * const lathe = new Lathe({
 *   geometry: {
 *     points: points
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: [0, 50, 10]
 * }).addTo(app);
 */
var Lathe = (_temp$20 = _class$20 = function (_MeshComponent) {
  inherits(Lathe, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Lathe#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     points: []
   *   }
   * }
   * </pre>
   */
  function Lathe() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Lathe);

    var _this = possibleConstructorReturn(this, (Lathe.__proto__ || Object.getPrototypeOf(Lathe)).call(this, params, Lathe.defaults, Lathe.instructions));

    if (params.build) {
      _this.build(params);
      get(Lathe.prototype.__proto__ || Object.getPrototypeOf(Lathe.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Lathe
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Lathe#instructions
   * @static
   * @default <pre>{
   *   geometry: ['points']
   * }
   * </pre>
   */


  createClass(Lathe, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.LatheBufferGeometry : three.LatheGeometry)(params.geometry.points);
    }
  }]);
  return Lathe;
}(MeshComponent), _class$20.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    points: []
  }
}), _class$20.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['points']
}), _temp$20);

var _class$21;
var _temp$21;

/**
 * @class Line
 * @category components/meshes
 * @description Line component is generated from a curve/line and amount of vectors that should be used (points).
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Line, and adding to app</caption>
 * new Line({
 *   geometry: {
 *     curve: new THREE.LineCurve3(new THREE.Vector3(10, 10, 0), new THREE.Vector3(10, 30, 0))
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   })
 * }).addTo(app);
 */
var Line$1 = (_temp$21 = _class$21 = function (_MeshComponent) {
  inherits(Line$$1, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Line#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     curve: new LineCurve3(new Vector3(0, 0, 0), new Vector3(10, 0, 0)),
   *     points: 50
   *   }
   * }
   * </pre>
   */
  function Line$$1(params) {
    classCallCheck(this, Line$$1);
    return possibleConstructorReturn(this, (Line$$1.__proto__ || Object.getPrototypeOf(Line$$1)).call(this, params, Line$$1.defaults, Line$$1.instructions));
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Line
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Line#instructions
   * @static
   * @default <pre>{
   *   geometry: ['curve', 'points']
   * }
   * </pre>
   */


  createClass(Line$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Line(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = params.buffer ? new three.BufferGeometry() : new three.Geometry();

      if (params.buffer) {
        var pp = params.geometry.curve.getPoints(params.geometry.points);
        var verts = new Float32Array(pp.length * 3);

        for (var i = 0, max = pp.length; i < max; i++) {
          var i3 = i * 3;

          verts[i3] = pp[i].x;
          verts[i3 + 1] = pp[i].y;
          verts[i3 + 2] = pp[i].z;
        }

        geometry.addAttribute('position', new three.BufferAttribute(verts, 3));
      } else geometry.vertices = params.geometry.curve.getPoints(params.geometry.points);

      return geometry;
    }
  }]);
  return Line$$1;
}(MeshComponent), _class$21.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    curve: new three.LineCurve3(new three.Vector3(0, 0, 0), new three.Vector3(10, 0, 0)),
    points: 50
  }
}), _class$21.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['curve', 'points']
}), _temp$21);

var _class$22;
var _temp$22;

/**
 * @class Importer
 * @category components/meshes
 * @description Importer is a loader for meshes and any other data to your scene
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Importer, and adding to app</caption>
 * new Importer({
 *   loader: new THREE.OBJLoader(),
 *
 *   parser(geometry, material) { // data from loader
 *     return new THREE.Mesh(geometry, material); // should return your .native (mesh in this case)
 *   },
 *
 *   position: [0, 100, 0]
 * }).addTo(app);
 */
var Importer = (_temp$22 = _class$22 = function (_MeshComponent) {
  inherits(Importer, _MeshComponent);
  createClass(Importer, null, [{
    key: 'filter',


    /**
     * @method filter
     * @description Default values for parameters
     * @static
     * @param {THREE.Mesh} object Instance for iterating through it's children.
     * @param {Function} filter Function with child as argument, should return a boolean whether include the child or not.
     * @return {THREE.Mesh} object with children
     * @memberof module:components/meshes.Importer
     * @example <caption>Removing unnecessary lights from children</caption>
     * new Icosahedron({
     *   loader: new THREE.OBJLoader(),
     *
     *   parse(group) { // data from loader
     *     return Importer.filter(group, child => !child.isLight); // remove lights
     *   },
     *
     *   position: [0, 100, 0]
     * }).addTo(app);
     */


    /**
     * Default values for parameters
     * @member {Object} module:components/meshes.Importer#defaults
     * @static
     * @default <pre>
     * {
     *   url: '',
     *   loader: new JSONLoader(),
     *
     *   onLoad() {},
     *   onProgress() {},
     *   onError() {},
     *
     *   texturePath: null,
     *   useCustomMaterial: false,
     *
     *   parser(geometry, materials) {
     *     return new Mesh(geometry, materials);
     *   }
     * }</pre>
     */
    value: function filter(object, _filter) {
      var processFilter = function processFilter(object) {
        object.children.forEach(function (el, index) {
          if (el.children) processFilter(el);
          if (!_filter(el)) object.children.splice(index, 1);
        });

        return object;
      };

      return processFilter(object);
    }
  }]);

  function Importer() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Importer);
    return possibleConstructorReturn(this, (Importer.__proto__ || Object.getPrototypeOf(Importer)).call(this, params, Importer.defaults, Importer.instructions, false));
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Importer
   */


  createClass(Importer, [{
    key: 'build',
    value: function build() {
      var _this2 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var promise = new Promise(function (resolve) {
        if (params.texturePath) params.laoder.setTexturePath(params.texturePath);

        params.loader.load(params.url, function () {
          // geometry, materials
          params.onLoad.apply(params, arguments);

          var object = _this2.applyBridge({ mesh: params.parser.apply(params, arguments) }).mesh;

          var _applyBridge = _this2.applyBridge({
            geometry: object.geometry,
            material: params.useCustomMaterial ? params.material : object.material
          }),
              geom = _applyBridge.geometry,
              mat = _applyBridge.material;

          if (object.geometry) object.geometry = geom;
          if (object.material) object.material = mat;

          resolve(object);
        }, params.onProgress, params.onError);
      });

      get(Importer.prototype.__proto__ || Object.getPrototypeOf(Importer.prototype), 'wait', this).call(this, promise);

      return promise;
    }
  }]);
  return Importer;
}(MeshComponent), _class$22.defaults = _extends({}, MeshComponent.defaults, {

  url: '',
  loader: new three.JSONLoader(),

  onLoad: function onLoad() {},
  onProgress: function onProgress() {},
  onError: function onError() {},


  texturePath: null,
  useCustomMaterial: false,

  parser: function parser(geometry, materials) {
    return new three.Mesh(geometry, materials);
  }
}), _class$22.instructions = _extends({}, MeshComponent.instructions), _temp$22);

var _class$23;
var _temp$23;

/**
 * @class Octahedron
 * @category components/meshes
 * @description In geometry, an octahedron is a polyhedron with eight faces.
 * A regular octahedron is a Platonic solid composed of eight equilateral triangles, four of which meet at each vertex.
 * <br/><br/>
 * `Octahedron` creates an Octahedron object by its `radius` and `detail`.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#OctahedronGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating an Octahedron, and adding to app</caption>
 * new Octahedron({
 *   geometry: {
 *     radius: 2,
 *     detail: 1
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: [0, 100, 0]
 * }).addTo(app);
 */
var Octahedron = (_temp$23 = _class$23 = function (_MeshComponent) {
  inherits(Octahedron, _MeshComponent);

  function Octahedron() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Octahedron);

    var _this = possibleConstructorReturn(this, (Octahedron.__proto__ || Object.getPrototypeOf(Octahedron)).call(this, params, Octahedron.defaults, Octahedron.instructions));

    if (params.build) {
      _this.build(params);
      get(Octahedron.prototype.__proto__ || Object.getPrototypeOf(Octahedron.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Octahedron
   */

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Octahedron#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radius: 1,
   *     detail: 0
   *   }
   * }
   * </pre>
   */


  createClass(Octahedron, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.OctahedronBufferGeometry : three.OctahedronGeometry)(params.geometry.radius, params.geometry.detail);
    }
  }]);
  return Octahedron;
}(MeshComponent), _class$23.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    radius: 1,
    detail: 0
  }
}), _temp$23);

var _class$24;
var _temp$24;

/**
 * @class Parametric
 * @category components/meshes
 * @description `Parametric` generates a geometry representing a <a href='https://en.wikipedia.org/wiki/Parametric_surface'>Parametric surface</a>
 * <br/><br/>
 * It is usually used to develop different kinds of highfields or visualize a <a href='https://stemkoski.github.io/Three.js/Graphulus-Function.html'>math function</a>.
 * <br/>
 * - <a href='http://math.hws.edu/graphicsbook/source/threejs/curves-and-surfaces.html'>Parametric surface</a>
 * - <a href='https://stemkoski.github.io/Three.js/Graphulus-Surface.html'>"Graphulus"</a>
 * <br/><br/>
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#ParametricGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Example creating an heightfield-like geometry. `u` and `v` are like `x` and `y` in shape, but their values are always from `0` to `1`.
 * We use them in `THREE.Vector3` like `x` and `z` and `Math.random() * 5` for `y`.</caption>
 * const createParametric = (u, v) => {
 *   return new THREE.Vector3(u * 30, Math.random() * 5, v * 30);
 * }
 *
 * new Parametric({
 *   geometry: {
 *     func: createParametric
 *   },
 *
 *   material: new THREE.MeshLambertMaterial({
 *     color: 0xffffff,
 *     side: THREE.DoubleSide
 *   }),
 *
 *   position: [0, 100, -100]
 * }).addTo(app);
 */
var Parametric = (_temp$24 = _class$24 = function (_MeshComponent) {
  inherits(Parametric, _MeshComponent);

  function Parametric() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Parametric);
    return possibleConstructorReturn(this, (Parametric.__proto__ || Object.getPrototypeOf(Parametric)).call(this, params, Parametric.defaults, Parametric.instructions));
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Parametric
   */

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Parametric#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     func: (u, v) => new Vector3(u, v, 0),
   *     slices: 10,
   *     tacks: 10
   *   }
   * }
   * </pre>
   */


  createClass(Parametric, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.ParametricBufferGeometry : three.ParametricGeometry)(params.geometry.func, params.geometry.slices, params.geometry.stacks);
    }
  }]);
  return Parametric;
}(MeshComponent), _class$24.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    func: function func(u, v) {
      return new three.Vector3(u, v, 0);
    },
    slices: 10,
    stacks: 10
  }
}), _temp$24);

var _class$25;
var _temp$25;

/**
 * @class Plane
 * @category components/meshes
 * @description `Plane` is used for creating planes given some `width` and `height`.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#PlaneGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Plane, and adding to app</caption>
 * new Plane({
 *   geometry: {
 *     width: 20,
 *     height: 30
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   })
 * }).addTo(app);
 */
var Plane$1 = (_temp$25 = _class$25 = function (_MeshComponent) {
  inherits(Plane$$1, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Plane#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     width: 10,
   *     height: 10,
   *     wSegments: 1,
   *     hSegments: 1
   *   }
   * }
   * </pre>
   */
  function Plane$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Plane$$1);

    var _this = possibleConstructorReturn(this, (Plane$$1.__proto__ || Object.getPrototypeOf(Plane$$1)).call(this, params, Plane$$1.defaults, Plane$$1.instructions));

    if (params.build) {
      _this.build(params);
      get(Plane$$1.prototype.__proto__ || Object.getPrototypeOf(Plane$$1.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Plane
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Plane#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: ['width', 'height', 'wSegments', 'hSegments']
   * }
   * </pre>
   */


  createClass(Plane$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = new (params.buffer ? three.PlaneBufferGeometry : three.PlaneGeometry)(params.geometry.width, params.geometry.height, params.geometry.wSegments, params.geometry.hSegments);

      return geometry;
    }
  }]);
  return Plane$$1;
}(MeshComponent), _class$25.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    width: 10,
    height: 10,
    wSegments: 1,
    hSegments: 1
  }
}), _class$25.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['width', 'height', 'wSegments', 'hSegments']
}), _temp$25);

var _class$26;
var _temp$26;

var verticesOfCube = [-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1];
var indicesOfFaces = [2, 1, 0, 0, 3, 2, 0, 4, 7, 7, 3, 0, 0, 1, 5, 5, 4, 0, 1, 2, 6, 6, 5, 1, 2, 3, 7, 7, 6, 2, 4, 5, 6, 6, 7, 4];

/**
 * @class Polyhedron
 * @category components/meshes
 * @description In elementary geometry, a polyhedron is a solid in three dimensions with flat polygonal faces, straight edges and sharp corners or vertices.
 * <br/><br/>
 * `Polyhedron` creates a Polyhedron by its `radius` and `detail`.
 * <br/><br/>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating an Polyhedron, and adding to app</caption>
 * new Polyhedron({
 *   geometry: {
 *     radius: 2,
 *     detail: 1
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: [0, 100, 0]
 * }).addTo(app);
 */

var Polyhedron = (_temp$26 = _class$26 = function (_MeshComponent) {
  inherits(Polyhedron, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Polyhedron#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     verticesOfCube: [
   *       -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,
   *       -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1
   *     ],
   *
   *     indicesOfFaces: [
   *       2, 1, 0, 0, 3, 2,
   *       0, 4, 7, 7, 3, 0,
   *       0, 1, 5, 5, 4, 0,
   *       1, 2, 6, 6, 5, 1,
   *       2, 3, 7, 7, 6, 2,
   *       4, 5, 6, 6, 7, 4
   *     ],
   *
   *     radius: 6,
   *     detail: 2
   *   }
   * }
   * </pre>
   */
  function Polyhedron() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Polyhedron);

    var _this = possibleConstructorReturn(this, (Polyhedron.__proto__ || Object.getPrototypeOf(Polyhedron)).call(this, params, Polyhedron.defaults, Polyhedron.instructions));

    if (params.build) {
      _this.build(params);
      get(Polyhedron.prototype.__proto__ || Object.getPrototypeOf(Polyhedron.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Polyhedron
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Polyhedron#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: ['verticesOfCube', 'indicesOfFaces', 'radius', 'detail']
   * }
   * </pre>
   */


  createClass(Polyhedron, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.PolyhedronBufferGeometry : three.PolyhedronGeometry)(params.geometry.verticesOfCube, params.geometry.indicesOfFaces, params.geometry.radius, params.geometry.detail);
    }
  }]);
  return Polyhedron;
}(MeshComponent), _class$26.verticesOfCube = verticesOfCube, _class$26.indicesOfFaces = indicesOfFaces, _class$26.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    verticesOfCube: verticesOfCube,
    indicesOfFaces: indicesOfFaces,
    radius: 6,
    detail: 2
  }
}), _class$26.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['verticesOfCube', 'indicesOfFaces', 'radius', 'detail']
}), _temp$26);

var _class$27;
var _temp$27;

/**
 * @class Ring
 * @category components/meshes
 * @description Ring class creates a circle or just 2D Torus. Does not support physics.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#RingGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Ring, and adding to app</caption>
 * new Ring({
 *   geometry: {
 *     innerRadius: 5,
 *     outerRadius: 2
 *   },
 *
 *   material: new THREE.MeshLambertMaterial({
 *     color: 0xffffff,
 *     side THREE.DoubleSide
 *   }),
 *
 *   position: [0, 8, 0],
 *
 *   rotation: {
 *     x: Math.PI/4
 *   }
 * }).addTo(app);
 */
var Ring = (_temp$27 = _class$27 = function (_MeshComponent) {
  inherits(Ring, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Ring#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     innerRadius: 0,
   *     outerRadius: 50,
   *     thetaSegments: 8,
   *     phiSegments: 8,
   *     thetaStart: 0,
   *     thetaLength: Math.PI * 2
   *   }
   * }
   * </pre>
   */
  function Ring() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Ring);

    var _this = possibleConstructorReturn(this, (Ring.__proto__ || Object.getPrototypeOf(Ring)).call(this, params, Ring.defaults, Ring.instructions));

    if (params.build) {
      _this.build(params);
      get(Ring.prototype.__proto__ || Object.getPrototypeOf(Ring.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Ring
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Ring#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: [
   *     'innerRadius',
   *     'outerRadius',
   *     'thetaSegments',
   *     'phiSegments',
   *     'thetaStart',
   *     'thetaLength'
   *   ]
   * }
   * </pre>
   */


  createClass(Ring, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.RingBufferGeometry : three.RingGeometry)(params.geometry.innerRadius, params.geometry.outerRadius, params.geometry.thetaSegments, params.geometry.phiSegments, params.geometry.thetaStart, params.geometry.thetaLength);
    }
  }]);
  return Ring;
}(MeshComponent), _class$27.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    innerRadius: 0,
    outerRadius: 50,
    thetaSegments: 8,
    phiSegments: 8,
    thetaStart: 0,
    thetaLength: Math.PI * 2
  }
}), _class$27.instructions = _extends({}, MeshComponent.defaults, {
  geometry: ['innerRadius', 'outerRadius', 'thetaSegments', 'phiSegments', 'thetaStart', 'thetaLength']
}), _temp$27);

var _class$28;
var _temp$28;

/**
 * @class Shape
 * @category components/meshes
 * @description Shape is a universal class. It allows you to create different 2D shapes in 3D scene.<br/>
 * Unfortunately, not all of them support physics, an alternative is to make a similar 3D object and scale its width down to near zero.
 * <br/><br/>
 * `Shape` consists of shapes that are in its shapes parameter.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#ShapeGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a plane looking Shape from a THREE.Shape, and adding it to app</caption>
 * const rectWidth = 10,
 * rectLength = 5;
 *
 * const rectShape = new THREE.Shape();
 * rectShape.moveTo(0,0);
 * rectShape.lineTo(0, rectWidth);
 * rectShape.lineTo(rectLength, rectWidth);
 * rectShape.lineTo(rectLength, 0);
 * rectShape.lineTo(0, 0);
 *
 * const plane = new Shape({
 *   geometry: {
 *     shape: rectShape
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   })
 * }).addTo(app);
 */
var Shape = (_temp$28 = _class$28 = function (_MeshComponent) {
  inherits(Shape, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Shape#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     shapes: []
   * }
   * </pre>
   */
  function Shape() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Shape);

    var _this = possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).call(this, params, Shape.defaults, Shape.instructions));

    if (params.build) {
      _this.build(params);
      get(Shape.prototype.__proto__ || Object.getPrototypeOf(Shape.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Shape
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Shape#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: ['shapes']
   * }
   * </pre>
   */


  createClass(Shape, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.ShapeBufferGeometry : three.ShapeGeometry)(params.geometry.shapes);
    }
  }]);
  return Shape;
}(MeshComponent), _class$28.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    shapes: []
  }
}), _class$28.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['shapes']
}), _temp$28);

var _class$29;
var _temp$29;

/**
 * @class Sphere
 * @category components/meshes
 * @description Sphere class is used to create sphere objects by its radius property and other values that determines its detality.
 * <br/><br/>
 * It is similar to THREE.SphereGeometry, but it also contains all `Shape` properties, such as material, mass and vectors like position (pos) and rotation (rot).
 * <br/><br/>
 * Then it creates an `Three.js mesh` or a `Physijs mesh`, that is similar to `Three.js mesh`, but it also take into consideration collision calculations.
 * This mesh is a combination of `Three.js geometry` and `Physijs material` (The same as in three.js, but with friction and restitution).
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#SphereGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Sphere, and adding it to app</caption>
 * new Sphere({
 *   geometry: {
 *     radius: 2
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: {
 *     y: 100
 *   }
 * }).addTo(app);
 */
var Sphere = (_temp$29 = _class$29 = function (_MeshComponent) {
  inherits(Sphere, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Sphere#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radius: 1,
   *     widthSegments: 8,
   *     heightSegments: 6
   * }
   * </pre>
   */
  function Sphere() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Sphere);
    return possibleConstructorReturn(this, (Sphere.__proto__ || Object.getPrototypeOf(Sphere)).call(this, params, Sphere.defaults, Sphere.instructions));
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Sphere
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Sphere#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: ['radius', 'widthSegments', 'heightSegments']
   * }
   * </pre>
   */


  createClass(Sphere, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = new (params.buffer ? three.SphereBufferGeometry : three.SphereGeometry)(params.geometry.radius, params.geometry.widthSegments, params.geometry.heightSegments);

      return geometry;
    }
  }]);
  return Sphere;
}(MeshComponent), _class$29.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    radius: 1,
    widthSegments: 8,
    heightSegments: 6
  }
}), _class$29.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radius', 'widthSegments', 'heightSegments']
}), _temp$29);

var _class$30;
var _temp$30;

/**
 * @class Tetrahedron
 * @category components/meshes
 * @description In geometry, a tetrahedron is a polyhedron composed of four triangular faces, six straight edges, and four vertex corners.
 * The tetrahedron is the simplest of all the ordinary convex polyhedra and the only one that has fewer than 5 faces.
 * <br/><br/>
 * `Tetrahedron` creates a Tetrahedron object by its `radius` and `detail`
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#TetrahedronGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Tetrahedron, and adding it to app</caption>
 * new Tetrahedron({
 *   geometry: {
 *     radius: 2,
 *     detail: 1
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: {
 *     x: 0,
 *     y: 100,
 *     z: 0
 *   }
 * }).addTo(app);
 */
var Tetrahedron = (_temp$30 = _class$30 = function (_MeshComponent) {
  inherits(Tetrahedron, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Tetrahedron#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radius: 1,
   *     detail: 0
   * }
   * </pre>
   */
  function Tetrahedron() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Tetrahedron);

    var _this = possibleConstructorReturn(this, (Tetrahedron.__proto__ || Object.getPrototypeOf(Tetrahedron)).call(this, params, Tetrahedron.defaults, Tetrahedron.instructions));

    if (params.build) {
      _this.build(params);
      get(Tetrahedron.prototype.__proto__ || Object.getPrototypeOf(Tetrahedron.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Tetrahedron
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Tetrahedron#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: ['radius', 'detail']
   * }
   * </pre>
   */


  createClass(Tetrahedron, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.TetrahedronBufferGeometry : three.TetrahedronGeometry)(params.geometry.radius, params.geometry.detail);
    }
  }]);
  return Tetrahedron;
}(MeshComponent), _class$30.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    radius: 1,
    detail: 0
  }
}), _class$30.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radius', 'detail']
}), _temp$30);

var _class$31;
var _temp$31;

/**
 * @class Text
 * @category components/meshes
 * @description Text class is made for creating 3D text objects.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#TextGeometry"></iframe>
 * <br/><br/>
 * Physics text object can be convex or concave. By default it's convex but you can also switch to concave.
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Text, and adding it to app</caption>
 * new Text({
 *   geometry: {
 *     text: 'hello world',
 *     parameters: {
 *       font: 'path/to/font.typeface.js',
 *       size: 20,
 *       height: 5,
 *       curveSegments: 6
 *     }
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: {
 *     x: -40,
 *     y: 20,
 *     z: 0
 *   }
 * }).addTo(app);
 */
var Text = (_temp$31 = _class$31 = function (_MeshComponent) {
  inherits(Text, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Text#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     text: 'Hello World!',
   *     loader: new FontLoader(),
   *
   *     parameters: {
   *       size: 12,
   *       height: 50,
   *       curveSegments: 12,
   *       font: new Font(),
   *       bevelEnabled: false,
   *       bevelThickness: 10,
   *       bevelSize: 8
   *     }
   *   }
   * }
   * </pre>
   */
  function Text() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Text);

    var _this = possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, params, Text.defaults, Text.instructions));

    if (params.build) {
      _this.build(params);
      get(Text.prototype.__proto__ || Object.getPrototypeOf(Text.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Text
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Text#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: ['text', 'loader', 'parameters']
   * }
   * </pre>
   */


  createClass(Text, [{
    key: 'build',
    value: function build() {
      var _this2 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var promise = new Promise(function (resolve) {
        three.FontLoader.load(params.geometry.parameters.font, function (font) {
          params.geometry.parameters.font = font;

          var _applyBridge = _this2.applyBridge({
            geometry: new three.TextGeometry(params.geometry.text, params.geometry.parameters),

            material: params.material
          }),
              geometry = _applyBridge.geometry,
              material = _applyBridge.material;

          resolve(_this2.applyBridge({
            mesh: new three.Mesh(geometry, material)
          }).mesh);
        });
      });

      get(Text.prototype.__proto__ || Object.getPrototypeOf(Text.prototype), 'wait', this).call(this, promise);

      return promise;
    }
  }]);
  return Text;
}(MeshComponent), _class$31.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    text: 'Hello World!',
    loader: new three.FontLoader(),

    parameters: {
      size: 12,
      height: 50,
      curveSegments: 12,
      font: new three.Font(),
      bevelEnabled: false,
      bevelThickness: 10,
      bevelSize: 8
    }
  }
}), _class$31.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['text', 'loader', 'parameters']
}), _temp$31);

var _class$32;
var _temp$32;

/**
 * @class Torus
 * @category components/meshes
 * @description Torus class makes a torus figure. A donut is a torus.
 * @classDesc
 * <iframe src="https://threejs.org/docs/index.html#api/geometries/TorusGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Torus, and adding it to app</caption>
 * new Torus({
 *   geometry: {
 *     radius: 5,
 *     tube: 2
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: {
 *     y: 35
 *   }
 * }).addTo(app);
 */
var Torus = (_temp$32 = _class$32 = function (_MeshComponent) {
  inherits(Torus, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Torus#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radius: 100,
   *     tube: 40,
   *     radialSegments: 8,
   *     tubularSegments: 6,
   *     arc: Math.PI * 2
   *   }
   * }
   * </pre>
   */
  function Torus() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Torus);

    var _this = possibleConstructorReturn(this, (Torus.__proto__ || Object.getPrototypeOf(Torus)).call(this, params, Torus.defaults, Torus.instructions));

    if (params.build) {
      _this.build(params);
      get(Torus.prototype.__proto__ || Object.getPrototypeOf(Torus.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Torus
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Torus#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: [
   *     'radius',
   *     'tube',
   *     'radialSegments',
   *     'tubularSegments',
   *     'arc'
   *   ]
   * }
   * </pre>
   */


  createClass(Torus, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new three.TorusGeometry(params.geometry.radius, params.geometry.tube, params.geometry.radialSegments, params.geometry.tubularSegments, params.geometry.arc);
    }
  }]);
  return Torus;
}(MeshComponent), _class$32.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    radius: 100,
    tube: 40,
    radialSegments: 8,
    tubularSegments: 6,
    arc: Math.PI * 2
  }
}), _class$32.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radius', 'tube', 'radialSegments', 'tubularSegments', 'arc']
}), _temp$32);

var _class$33;
var _temp$33;

/**
 * @class Torusknot
 * @category components/meshes
 * @description Torusknot class makes a torusknot figure. It's like a crooked donut, very crooked.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#TorusKnotGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Torusknot, and adding it to app</caption>
 * new Torusknot({
 *   geometry: {
 *     radius:5,
 *     tube: 2
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   pos: {
 *     y: 100
 *   }
 * }).addTo(app);
 */
var Torusknot = (_temp$33 = _class$33 = function (_MeshComponent) {
  inherits(Torusknot, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Torusknot#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radius: 100,
   *     tube: 40,
   *     radialSegments: 64,
   *     tubularSegments: 8,
   *     p: 2,
   *     q: 3
   *   }
   * }
   * </pre>
   */
  function Torusknot() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Torusknot);

    var _this = possibleConstructorReturn(this, (Torusknot.__proto__ || Object.getPrototypeOf(Torusknot)).call(this, params, Torusknot.defaults, Torusknot.instructions));

    if (params.build) {
      _this.build(params);
      get(Torusknot.prototype.__proto__ || Object.getPrototypeOf(Torusknot.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Torusknot
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Torusknot#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: [
   *     'radius',
   *     'tube',
   *     'radialSegments',
   *     'tubularSegments',
   *     'p',
   *     'q'
   *   ]
   * }
   * </pre>
   */


  createClass(Torusknot, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var GConstruct = params.buffer ? three.TorusKnotBufferGeometry : three.TorusKnotGeometry;

      return new GConstruct(params.geometry.radius, params.geometry.tube, params.geometry.radialSegments, params.geometry.tubularSegments, params.geometry.p, params.geometry.q);
    }
  }]);
  return Torusknot;
}(MeshComponent), _class$33.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    radius: 100,
    tube: 40,
    radialSegments: 64,
    tubularSegments: 8,
    p: 2,
    q: 3
  }
}), _class$33.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radius', 'tube', 'radialSegments', 'tubularSegments', 'p', 'q']
}), _temp$33);

var _class$34;
var _temp$34;

/**
 * @class Tube
 * @category components/meshes
 * @description Tube class makes a tube that extrudes along a 3d curve.
 * @classDesc
 * <iframe src="https://threejs.org/docs/index.html#api/geometries/TubeGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Tube from a three.js Curve, and adding it to app</caption>
 * const CustomSinCurve = THREE.Curve.create(
 *   function (scale) { // custom curve constructor
 *     this.scale = (scale === undefined) ? 1 : scale;
 *   },
 *
 *   function (t) { // getPoint: t is between 0-1
 *     const tx = t * 3 - 1.5,
 *     ty = Math.sin( 2 * Math.PI * t ),
 *     tz = 0;
 *
 *     return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
 *   }
 * );
 *
 * const path = new CustomSinCurve(10);
 *
 * new Tube({
 *   geometry: {
 *     path: path
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   })
 * }).addTo(app);
 */
var Tube = (_temp$34 = _class$34 = function (_MeshComponent) {
  inherits(Tube, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Tube#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     path: new THREE.LineCurve3(new Vector3(0, 0, 0), new Vector3(0, 0, 1)),
   *     segments: 20,
   *     radius: 2,
   *     radiusSegments: 8,
   *     closed: false
   *   }
   * }
   * </pre>
   */
  function Tube() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Tube);

    var _this = possibleConstructorReturn(this, (Tube.__proto__ || Object.getPrototypeOf(Tube)).call(this, params, Tube.defaults, Tube.instructions));

    if (params.build) {
      _this.build(params);
      get(Tube.prototype.__proto__ || Object.getPrototypeOf(Tube.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Tube
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Tube#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: [
   *     'path',
   *     'segments',
   *     'radius',
   *     'radiusSegments',
   *     'closed'
   *   ]
   * }
   * </pre>
   */


  createClass(Tube, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = new (params.buffer ? three.TubeBufferGeometry : three.TubeGeometry)(params.geometry.path, params.geometry.segments, params.geometry.radius, params.geometry.radiusSegments, params.geometry.closed);

      return geometry;
    }
  }]);
  return Tube;
}(MeshComponent), _class$34.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    path: new three.LineCurve3(new three.Vector3(0, 0, 0), new three.Vector3(0, 0, 1)),
    segments: 20,
    radius: 2,
    radiusSegments: 8,
    closed: false
  }
}), _class$34.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['path', 'segments', 'radius', 'radiusSegments', 'closed']
}), _temp$34);

/**
 * @class Group
 * @category components/meshes
 * @description Sometimes you need to make groups of objects (it's not conveniently to apply transforms to each object when can make just one to a group).<br/>
 * In Three.js you make it using `THREE.Object3D` and it's children. <br/><br/>
 * In whs.js we have `Group`
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Approach 2 - Adding objects to an empty group</caption>
 * const sphere = new Sphere();
 * const box = new Box();
 * const group = new Group();
 *
 * sphere.addTo(group);
 * box.addTo(group);
* @example <caption>Approach 2 - Making a group from objects</caption>
 * const sphere = new Sphere();
 * const box = new Box();
 * const group = new Group(box, sphere);
 * // OR: const group = new Group([box, sphere]);
 */

var Group = function (_MeshComponent) {
  inherits(Group, _MeshComponent);

  function Group() {
    classCallCheck(this, Group);

    var _this = possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, {}));

    for (var _len = arguments.length, objects = Array(_len), _key = 0; _key < _len; _key++) {
      objects[_key] = arguments[_key];
    }

    for (var i = 0; i < objects.length; i++) {
      var obj = objects[i];

      if (obj instanceof Component) obj.addTo(_this);else if (obj instanceof three.Object3D) _this.native.add(obj);
    }
    return _this;
  }

  createClass(Group, [{
    key: 'build',
    value: function build() {
      return new three.Object3D();
    }
  }]);
  return Group;
}(MeshComponent);

/** @module components/meshes */

/**
 * @class ElementModule
 * @category modules/app
 * @param {Object} [container=document.body] container is the DOM object to which application's canvas will be added to.
 * @memberof module:modules/app
 * @example <caption>Creating an element module, passing it to the App</caption>
 * new App([
 *   new ElementModule(document.getElementById('app'))
 * ]);
 */
var ElementModule = function () {
  function ElementModule() {
    var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
    classCallCheck(this, ElementModule);

    if (container.container) {
      console.warn('ElementModule now accepts only argument which is a DOM object, not a params object.');
      this.container = container.container;
    } else this.container = container;

    this.createElement();
  }

  /**
   * @method createElement
   * @instance
   * @description Creates a canvas element.
   * @memberof module:modules/app.ResizeModule
   */


  createClass(ElementModule, [{
    key: 'createElement',
    value: function createElement() {
      this.element = window.document.createElement('div');

      this.element.className = 'whs-app';
      this.element.style.width = 'inherit';
      this.element.style.height = 'inherit';
      this.element.style.position = 'relative';
    }
  }, {
    key: 'manager',
    value: function manager(_manager) {
      _manager.set('element', this.element);
      _manager.set('container', this.container);
    }
  }, {
    key: 'integrate',
    value: function integrate(self) {
      self.container.appendChild(self.element);
    }
  }]);
  return ElementModule;
}();

var _class$35;
var _temp$35;
var _initialiseProps;

/**
 * @class RenderingModule
 * @category modules/app
 * @param {Object} [params]
 * @memberof module:modules/app
 * @example <caption> Creating a rendering module and passing it to App's modules</caption>
 * new App([
 *   new ElementModule(),
 *   new SceneModule(),
 *   new CameraModule({
 *     position: new THREE.Vector3(0, 6, 18),
 *     far: 10000
 *   }),
 *   new RenderingModule({
 *     bgColor: 0x162129,
 *
 *     renderer: {
 *       antialias: true,
 *       shadowmap: {
 *         type: THREE.PCFSoftShadowMap
 *       }
 *     }
 *   }, {shadow: true})
 * ]);
 */
var RenderingModule = (_temp$35 = _class$35 = function () {
  function RenderingModule() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { shadow: false },
        isShadow = _ref.shadow;

    classCallCheck(this, RenderingModule);

    _initialiseProps.call(this);

    this.params = Object.assign({
      width: window.innerWidth,
      height: window.innerHeight,

      resolution: new three.Vector2(1, 1),
      pixelRatio: window.devicePixelRatio,

      bgColor: 0x000000,
      bgOpacity: 1,

      renderer: {}
    }, params);

    var _params = this.params,
        bgColor = _params.bgColor,
        bgOpacity = _params.bgOpacity,
        renderer = _params.renderer,
        pixelRatio = _params.pixelRatio,
        width = _params.width,
        height = _params.height,
        resolution = _params.resolution;


    this.renderer = new three.WebGLRenderer(renderer);
    this.effects = [];
    this.applyAdditional('shadow', isShadow);

    this.renderer.setClearColor(bgColor, bgOpacity);

    if (pixelRatio) this.renderer.setPixelRatio(pixelRatio);

    this.setSize(Number(width * resolution.x).toFixed(), Number(height * resolution.y).toFixed());
  }

  createClass(RenderingModule, [{
    key: 'applyAdditional',
    value: function applyAdditional(name) {
      var isApplied = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!isApplied) return;
      RenderingModule.additional[name].apply(this, [this.renderer]);
    }
  }, {
    key: 'integrateRenderer',
    value: function integrateRenderer(element, scene, camera) {
      var _this = this;

      this.scene = scene;
      this.camera = camera;
      this.renderLoop = new Loop(function () {
        return _this.renderer.render(_this.scene, _this.camera);
      });
      this.attachToCanvas(element);

      return this.renderLoop;
    }
  }, {
    key: 'effect',
    value: function effect(_effect, cb) {
      var _this2 = this;

      this.defer.then(function () {
        _this2.renderLoop.stop();

        var size = _this2.renderer.getSize();
        _effect.setSize(size.width, size.height);

        var loop = new Loop(cb ? cb : function () {
          _effect.render(_this2.scene, _this2.camera);
        });

        _this2.effects.push(loop);
        if (_this2.enabled) loop.start(_this2.app);
      });
    }

    /**
     * @method setSize
     * @description Update render target width and height.
     * @param {Number} width
     * @param {Number} height
     * @memberof module:modules/app.RenderingModule
     */

  }, {
    key: 'setSize',
    value: function setSize(width, height) {
      if (this.renderer) this.renderer.setSize(width, height);
    }
  }, {
    key: 'attachToCanvas',
    value: function attachToCanvas(element) {
      var canvas = this.renderer.domElement;

      // attach to new parent world dom
      element.appendChild(canvas);
      canvas.style.width = '100%';
      canvas.style.height = '100%';
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.enabled = false;
      this.renderLoop.stop();
      this.effects.forEach(function (loop) {
        return loop.stop();
      });
    }
  }, {
    key: 'play',
    value: function play() {
      this.renderLoop.start();
      this.effects.forEach(function (loop) {
        return loop.start();
      });
    }
  }, {
    key: 'manager',
    value: function manager(_manager) {
      var _this3 = this;

      _manager.define('rendering');
      _manager.set('renderer', this.renderer);

      this.app = _manager.handler;

      this.renderLoop = this.integrateRenderer(_manager.get('element'), _manager.get('scene'), _manager.get('camera').native);

      _manager.update({
        element: function element(_element) {
          _this3.attachToCanvas(_element);
        },
        scene: function scene(_scene) {
          _this3.scene = _scene;
        },
        camera: function camera(_camera) {
          _this3.camera = _camera.native;
        }
      });

      this.resolve();
    }
  }, {
    key: 'integrate',
    value: function integrate(self) {
      var _this4 = this;

      self.renderLoop.start(this);
      self.effects.forEach(function (loop) {
        return loop.start(_this4);
      });
    }
  }, {
    key: 'dispose',
    value: function dispose(self) {
      var _this5 = this;

      self.renderLoop.stop(this);
      self.effects.forEach(function (loop) {
        return loop.stop(_this5);
      });
      self.renderer.forceContextLoss();
    }
  }]);
  return RenderingModule;
}(), _class$35.additional = {
  shadow: function shadow(renderer) {
    renderer.shadowMap.enabled = true;
  }
}, _initialiseProps = function _initialiseProps() {
  var _this6 = this;

  this.enabled = true;
  this.defer = new Promise(function (resolve) {
    _this6.resolve = resolve;
  });
}, _temp$35);

/**
 * @class SceneModule
 * @category modules/app
 * @param {Boolean} [willSceneBeReplaced=false] willSceneBeReplaced should be true only if you are going to overwrite scene dependency even without the use of default one.
 * @memberof module:modules/app
 */

var SceneModule = function () {
  function SceneModule() {
    var willSceneBeReplaced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    classCallCheck(this, SceneModule);

    this.scene = willSceneBeReplaced ? null : new three.Scene();
  }

  createClass(SceneModule, [{
    key: 'manager',
    value: function manager(_manager) {
      _manager.set('scene', this.scene);
    }
  }, {
    key: 'integrate',
    value: function integrate(self) {
      this.children = [];

      this.add = function (object) {
        var _this = this;

        object.parent = this;

        return new Promise(function (resolve, reject) {
          object.defer(function () {
            var native = object.native;

            if (!native) reject();

            var addPromise = _this.applyBridge({ onAdd: object }).onAdd;

            var resolver = function resolver() {
              self.scene.add(native);
              _this.children.push(object);

              resolve(object);
            };

            if (addPromise instanceof Promise) addPromise.then(resolver);else resolver();
          });
        });
      };

      this.remove = function (object) {
        object.parent = null;
        self.scene.remove(object.native);
      };

      this.setScene = function (scene) {
        self.scene = scene;
        this.manager.set('scene', scene);
      };
    }
  }]);
  return SceneModule;
}();

// import {addResizeListener} from 'detect-element-resize';

/**
 * @class ResizeModule
 * @category modules/app
 * @param {Object} [params={auto: true}] - If auto is set to true - resize will be triggered when container resizes
 * @memberof module:modules/app
 */
var ResizeModule = function () {
  function ResizeModule() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, ResizeModule);

    this.params = Object.assign({
      auto: true
    }, params);

    this.callbacks = [this.setSize.bind(this)];
  }

  /**
   * @function setSize
   * @instance
   * @description This function sets the provided width & height to the renderer object.
   * @param {Number} [width=1] - The promise that should be added to a queue.
   * @param {Number} [height=1] - that is resolved when all promises completed.
   * @memberof module:modules/app.ResizeModule
   */


  createClass(ResizeModule, [{
    key: 'setSize',
    value: function setSize() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      this.camera.native.aspect = width / height;
      this.camera.native.updateProjectionMatrix();

      if (this.rendering) this.rendering.setSize(width, height);
    }

    /**
     * @method trigger
     * @instance
     * @description Triggers resize when called. width & height are determined automatically
     * This invokes each callbacks with the new width and height as params
     * @memberof module:modules/app.ResizeModule
     */

  }, {
    key: 'trigger',
    value: function trigger() {
      var _container = this.container,
          offsetWidth = _container.offsetWidth,
          offsetHeight = _container.offsetHeight,
          resolution = this.resolution;


      var width = Number(offsetWidth * resolution.x).toFixed();
      var height = Number(offsetHeight * resolution.y).toFixed();

      this.callbacks.forEach(function (cb) {
        cb(width, height);
      });
    }

    /**
     * @method addAutoresize
     * @instance
     * @description Sets module to autoresize, this adds an event listene on window resize to trigger the resize
     * @memberof module:modules/app.ResizeModule
     */

  }, {
    key: 'addAutoresize',
    value: function addAutoresize() {
      this.container = this.getContainer();
      this.resolution = this.getResolution();

      if (this.params.auto) window.addEventListener('resize', this.trigger.bind(this));
    }

    /**
     * @method addCallback
     * @instance
     * @description Adds a call back function to the existing callbacks list.
     * @param {Function} func - The callback function to add
     * @memberof module:modules/app.ResizeModule
     */

  }, {
    key: 'addCallback',
    value: function addCallback(func) {
      this.callbacks.push(func);
    }
  }, {
    key: 'manager',
    value: function manager(_manager) {
      _manager.define('resize');

      this.rendering = _manager.get('renderer');
      this.camera = _manager.get('camera');

      this.getResolution = function () {
        return _manager.use('rendering').params.resolution;
      };
      this.getContainer = function () {
        return _manager.get('container');
      };

      this.addAutoresize();
    }
  }]);
  return ResizeModule;
}();

/**
 * An adaptive luminosity shader material.
 */

/**
 * Depth of Field shader (Bokeh).
 *
 * Original shader code by Martins Upitis:
 *  http://artmartinsh.blogspot.com/2010/02/glsl-lens-blur-filter-with-bokeh.html
 */

/**
 * Depth of Field shader version 2.4.
 *
 * Original shader code by Martins Upitis:
 *  http://blenderartists.org/forum/showthread.php?237488-GLSL-depth-of-field-with-bokeh-v2-4-(update)
 */

/**
 * A material for combining two textures.
 *
 * This material supports the two blend modes Add and Screen.
 *
 * In Screen mode, the two textures are effectively projected on a white screen
 * simultaneously. In Add mode, the textures are simply added together which
 * often produces undesired, washed out results.
 */

/**
 * An optimised convolution shader material.
 *
 * Based on the GDC2003 Presentation by Masaki Kawase, Bunkasha Games:
 *  Frame Buffer Postprocessing Effects in DOUBLE-S.T.E.A.L (Wreckless)
 * and an article by Filip Strugar, Intel:
 *  An investigation of fast real-time GPU-based image blur algorithms
 *
 * Further modified according to Apple's
 * [Best Practices for Shaders](https://goo.gl/lmRoM5).
 */



/**
 * A kernel size enumeration.
 *
 * @type {Object}
 * @property {Number} VERY_SMALL - A very small kernel that matches a 7x7 Gauss blur kernel.
 * @property {Number} SMALL - A small kernel that matches a 15x15 Gauss blur kernel.
 * @property {Number} MEDIUM - A medium sized kernel that matches a 23x23 Gauss blur kernel.
 * @property {Number} LARGE - A large kernel that matches a 35x35 Gauss blur kernel.
 * @property {Number} VERY_LARGE - A very large kernel that matches a 63x63 Gauss blur kernel.
 * @property {Number} HUGE - A huge kernel that matches a 127x127 Gauss blur kernel.
 */

const fragment$5 = "uniform sampler2D tDiffuse;\r\nuniform float opacity;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texel = texture2D(tDiffuse, vUv);\r\n\tgl_FragColor = opacity * texel;\r\n\r\n}\r\n";
const vertex$5 = "varying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\tvUv = uv;\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r\n\r\n}\r\n";

/**
 * A simple copy shader material.
 */

class CopyMaterial extends three.ShaderMaterial {

	/**
	 * Constructs a new copy material.
	 */

	constructor() {

		super({

			type: "CopyMaterial",

			uniforms: {

				tDiffuse: new three.Uniform(null),
				opacity: new three.Uniform(1.0)

			},

			fragmentShader: fragment$5,
			vertexShader: vertex$5,

			depthWrite: false,
			depthTest: false

		});

	}

}

/**
 * A depth shader material.
 */

/**
 * A dot screen shader material.
 */

/**
 * A cinematic shader that provides the following effects:
 *  - Film Grain
 *  - Scanlines
 *  - Vignette
 *  - Greyscale
 *  - Sepia
 *
 * Original scanlines algorithm by Pat "Hawthorne" Shearon.
 *  http://www.truevision3d.com/forums/showcase/staticnoise_colorblackwhite_scanline_shaders-t18698.0.html
 *
 * Optimised scanlines and noise with intensity scaling by Georg "Leviathan"
 * Steinrohder. This version was provided under a Creative Commons Attribution
 * 3.0 License: http://creativecommons.org/licenses/by/3.0.
 *
 * The sepia effect is based on:
 *  https://github.com/evanw/glfx.js
 *
 * The vignette code is based on PaintEffect postprocess from ro.me:
 *  http://code.google.com/p/3-dreams-of-black/source/browse/deploy/js/effects/PaintEffect.js
 */

/**
 * A glitch shader material.
 *
 * Reference:
 *  https://github.com/staffantan/unityglitch
 */

/**
 * A crepuscular rays shader material.
 *
 * References:
 *
 * Thibaut Despoulain, 2012:
 *  [(WebGL) Volumetric Light Approximation in Three.js](
 *  http://bkcore.com/blog/3d/webgl-three-js-volumetric-light-godrays.html)
 *
 * Nvidia, GPU Gems 3, 2008:
 *  [Chapter 13. Volumetric Light Scattering as a Post-Process](
 *  https://developer.nvidia.com/gpugems/GPUGems3/gpugems3_ch13.html)
 */

/**
 * A luminosity shader material.
 *
 * This shader produces a greyscale luminance map. It can also be configured to
 * output colours that are scaled with their respective luminance value.
 * Additionally, a range may be provided to mask out undesired texels.
 *
 * The alpha channel will remain unaffected in all cases.
 *
 * Luminance range reference:
 *  https://cycling74.com/2007/05/23/your-first-shader/#.Vty9FfkrL4Z
 */

/**
 * A pixelation shader material.
 *
 * Original shader code by Robert Casanova:
 *  https://github.com/robertcasanova/pixelate-shader
 */

/**
 * A shock wave shader material.
 *
 * Based on a Gist by Jean-Philippe Sarda:
 *  https://gist.github.com/jpsarda/33cea67a9f2ecb0a0eda
 */

/**
 * Subpixel Morphological Antialiasing.
 *
 * This material is used to render the final antialiasing.
 */

/**
 * Subpixel Morphological Antialiasing.
 *
 * This material detects edges in a color texture.
 */

/**
 * Subpixel Morphological Antialiasing.
 *
 * This material computes weights for detected edges.
 */

/**
 * Full-screen tone-mapping shader material.
 *
 * Reference:
 *  http://www.cis.rit.edu/people/faculty/ferwerda/publications/sig02_paper.pdf
 */

/**
 * A collection of shader materials that are used in the post processing passes.
 *
 * @module postprocessing/materials
 */

/**
 * An abstract pass.
 *
 * Passes that do not rely on the depth buffer should explicitly disable the
 * depth test and depth write in their respective shader materials.
 *
 * This class implements a {@link Pass#dispose} method that frees memory on
 * demand.
 */

class Pass {

	/**
	 * Constructs a new pass.
	 *
	 * @param {Scene} [scene] - The scene to render.
	 * @param {Camera} [camera] - The camera.
	 * @param {Mesh} [quad] - A quad that fills the screen to render 2D filter effects. Set this to null, if you don't need it (see {@link RenderPass}).
	 */

	constructor(
		scene = new three.Scene(),
		camera = new three.OrthographicCamera(-1, 1, 1, -1, 0, 1),
		quad = new three.Mesh(new three.PlaneBufferGeometry(2, 2), null)
	) {

		/**
		 * The name of this pass.
		 *
		 * @type {String}
		 */

		this.name = "Pass";

		/**
		 * The scene to render.
		 *
		 * @type {Scene}
		 * @protected
		 * @default new Scene()
		 */

		this.scene = scene;

		/**
		 * The camera.
		 *
		 * @type {Camera}
		 * @protected
		 * @default new OrthographicCamera(-1, 1, 1, -1, 0, 1)
		 */

		this.camera = camera;

		/**
		 * A quad mesh that fills the screen.
		 *
		 * Assign your shader material to this mesh!
		 *
		 * @type {Mesh}
		 * @protected
		 * @default new Mesh(new PlaneBufferGeometry(2, 2), null)
		 * @example this.quad.material = this.myMaterial;
		 */

		this.quad = quad;

		if(this.quad !== null) {

			this.quad.frustumCulled = false;

			if(this.scene !== null) {

				this.scene.add(this.quad);

			}

		}

		/**
		 * Indicates whether the read and write buffers should be swapped after this
		 * pass has finished rendering.
		 *
		 * Set this to true if this pass renders to the write buffer so that a
		 * following pass can find the result in the read buffer.
		 *
		 * @type {Boolean}
		 * @default false
		 */

		this.needsSwap = false;

		/**
		 * Enabled flag.
		 *
		 * @type {Boolean}
		 * @default true
		 */

		this.enabled = true;

		/**
		 * Render to screen flag.
		 *
		 * @type {Boolean}
		 * @default false
		 */

		this.renderToScreen = false;

	}

	/**
	 * Renders the effect.
	 *
	 * This is an abstract method that must be overridden.
	 *
	 * @abstract
	 * @throws {Error} An error is thrown if the method is not overridden.
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} readBuffer - A read buffer. Contains the result of the previous pass.
	 * @param {WebGLRenderTarget} writeBuffer - A write buffer. Normally used as the render target when the read buffer is used as input.
	 * @param {Number} [delta] - The delta time.
	 * @param {Boolean} [maskActive] - Indicates whether a stencil test mask is active or not.
	 */

	render(renderer, readBuffer, writeBuffer, delta, maskActive) {

		throw new Error("Render method not implemented!");

	}

	/**
	 * Updates this pass with the renderer's size.
	 *
	 * You may override this method in case you want to be informed about the main
	 * render size.
	 *
	 * The {@link EffectComposer} calls this method before this pass is
	 * initialised and every time its own size is updated.
	 *
	 * @param {Number} width - The renderer's width.
	 * @param {Number} height - The renderer's height.
	 * @example this.myRenderTarget.setSize(width, height);
	 */

	setSize(width, height) {}

	/**
	 * Performs initialisation tasks.
	 *
	 * By overriding this method you gain access to the renderer. You'll also be
	 * able to configure your custom render targets to use the appropriate format
	 * (RGB or RGBA).
	 *
	 * The provided renderer can be used to warm up special off-screen render
	 * targets by performing a preliminary render operation.
	 *
	 * The {@link EffectComposer} calls this method when this pass is added to its
	 * queue.
	 *
	 * @method initialise
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
	 * @example if(!alpha) { this.myRenderTarget.texture.format = RGBFormat; }
	 */

	initialise(renderer, alpha) {}

	/**
	 * Performs a shallow search for properties that define a dispose method and
	 * deletes them. The pass will be inoperative after this method was called!
	 *
	 * Disposable objects:
	 *  - render targets
	 *  - materials
	 *  - textures
	 *
	 * The {@link EffectComposer} calls this method when it is being destroyed.
	 * You may, however, use it independently to free memory when you are certain
	 * that you don't need this pass anymore.
	 */

	dispose() {

		const keys = Object.keys(this);

		let key;

		for(key of keys) {

			if(this[key] !== null && typeof this[key].dispose === "function") {

				this[key].dispose();
				this[key] = null;

			}

		}

	}

}

/**
 * A blur pass.
 */

/**
 * A bloom pass.
 *
 * This pass renders a scene with superimposed blur by utilising the fast Kawase
 * convolution approach.
 */

/**
 * A Depth of Field (DoF) pass using a bokeh shader.
 *
 * This pass requires a {@link EffectComposer#depthTexture}.
 */

/**
 * An advanced Depth of Field (DoF) pass.
 *
 * Yields more realistic results but is also more demanding.
 *
 * This pass requires a {@link EffectComposer#depthTexture}.
 */

/**
 * Used for saving the original clear color of the renderer.
 *
 * @type Color
 * @private
 * @static
 */

const color = new three.Color();

/**
 * A clear pass.
 *
 * You can prevent specific buffers from being cleared by setting either the
 * autoClearColor, autoClearStencil or autoClearDepth properties of the renderer
 * to false.
 */

class ClearPass extends Pass {

	/**
	 * Constructs a new clear pass.
	 *
	 * @param {Object} [options] - Additional options.
	 * @param {Color} [options.clearColor=null] - An override clear color.
	 * @param {Number} [options.clearAlpha=0.0] - An override clear alpha.
	 */

	constructor(options = {}) {

		super(null, null, null);

		/**
		 * The name of this pass.
		 */

		this.name = "ClearPass";

		/**
		 * Clear color.
		 *
		 * @type {Color}
		 * @default null
		 */

		this.clearColor = (options.clearColor !== undefined) ? options.clearColor : null;

		/**
		 * Clear alpha.
		 *
		 * @type {Number}
		 * @default 0.0
		 */

		this.clearAlpha = (options.clearAlpha !== undefined) ? options.clearAlpha : 0.0;

	}

	/**
	 * Clears the read buffer or the screen.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} readBuffer - The read buffer.
	 */

	render(renderer, readBuffer) {

		const clearColor = this.clearColor;

		let clearAlpha;

		if(clearColor !== null) {

			color.copy(renderer.getClearColor());
			clearAlpha = renderer.getClearAlpha();
			renderer.setClearColor(clearColor, this.clearAlpha);

		}

		renderer.setRenderTarget(this.renderToScreen ? null : readBuffer);
		renderer.clear();

		if(clearColor !== null) {

			renderer.setClearColor(color, clearAlpha);

		}

	}

}

/**
 * A pass that disables the stencil mask.
 */

class ClearMaskPass extends Pass {

	/**
	 * Constructs a new clear mask pass.
	 */

	constructor() {

		super(null, null, null);

		/**
		 * The name of this pass.
		 */

		this.name = "ClearMaskPass";

	}

	/**
	 * Disables the stencil test.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 */

	render(renderer) {

		renderer.state.buffers.stencil.setTest(false);

	}

}

/**
 * A dot screen pass.
 */

/**
 * A depth pass.
 *
 * Reads the depth from a depth texture and renders it.
 *
 * This pass requires a {@link EffectComposer#depthTexture}.
 */

/**
 * A film pass.
 *
 * Provides various cinematic effects.
 */

/**
 * Returns a random integer in the specified range.
 *
 * @private
 * @static
 * @param {Number} low - The lowest possible value.
 * @param {Number} high - The highest possible value.
 * @return {Number} The random value.
 */

function randomInt(low, high) {

	return low + Math.floor(Math.random() * (high - low + 1));

}

/**
 * Returns a random float in the specified range.
 *
 * @private
 * @static
 * @param {Number} low - The lowest possible value.
 * @param {Number} high - The highest possible value.
 * @return {Number} The random value.
 */

function randomFloat(low, high) {

	return low + Math.random() * (high - low);

}

/**
 * A glitch pass.
 */



/**
 * A glitch mode enumeration.
 *
 * @type {Object}
 * @property {Number} SPORADIC - Sporadic glitches.
 * @property {Number} CONSTANT_MILD - Constant mild glitches.
 * @property {Number} CONSTANT_WILD - Constant wild glitches.
 */

const GlitchMode = {

	SPORADIC: 0,
	CONSTANT_MILD: 1,
	CONSTANT_WILD: 2

};

/**
 * A pass that renders a given scene directly on screen or into the read buffer
 * for further processing.
 */

class RenderPass extends Pass {

	/**
	 * Constructs a new render pass.
	 *
	 * @param {Scene} scene - The scene to render.
	 * @param {Camera} camera - The camera to use to render the scene.
	 * @param {Object} [options] - Additional options.
	 * @param {Material} [options.overrideMaterial=null] - An override material for the scene.
	 * @param {Color} [options.clearColor=null] - An override clear color.
	 * @param {Number} [options.clearAlpha=1.0] - An override clear alpha.
	 * @param {Boolean} [options.clearDepth=false] - Whether depth should be cleared explicitly.
	 * @param {Boolean} [options.clear=true] - Whether all buffers should be cleared.
	 */

	constructor(scene, camera, options = {}) {

		super(scene, camera, null);

		/**
		 * The name of this pass.
		 */

		this.name = "RenderPass";

		/**
		 * A clear pass.
		 *
		 * @type {ClearPass}
		 */

		this.clearPass = new ClearPass(options);

		/**
		 * An override material.
		 *
		 * @type {Material}
		 * @default null
		 */

		this.overrideMaterial = (options.overrideMaterial !== undefined) ? options.overrideMaterial : null;

		/**
		 * Indicates whether the depth buffer should be cleared explicitly.
		 *
		 * @type {Boolean}
		 * @default false
		 */

		this.clearDepth = (options.clearDepth !== undefined) ? options.clearDepth : false;

		/**
		 * Indicates whether the color, depth and stencil buffers should be cleared.
		 *
		 * Even with clear set to true you can prevent specific buffers from being
		 * cleared by setting either the autoClearColor, autoClearStencil or
		 * autoClearDepth properties of the renderer to false.
		 *
		 * @type {Boolean}
		 * @default true
		 */

		this.clear = (options.clear !== undefined) ? options.clear : true;

	}

	/**
	 * Renders the scene.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} readBuffer - The read buffer.
	 */

	render(renderer, readBuffer) {

		const scene = this.scene;
		const target = this.renderToScreen ? null : readBuffer;

		if(this.clear) {

			this.clearPass.render(renderer, target);

		} else if(this.clearDepth) {

			renderer.setRenderTarget(target);
			renderer.clearDepth();

		}

		scene.overrideMaterial = this.overrideMaterial;
		renderer.render(scene, this.camera, target);
		scene.overrideMaterial = null;

	}

}

/**
 * A crepuscular rays pass.
 */

/**
 * A mask pass.
 */

class MaskPass extends Pass {

	/**
	 * Constructs a new mask pass.
	 *
	 * @param {Scene} scene - The scene to render.
	 * @param {Camera} camera - The camera to use.
	 */

	constructor(scene, camera) {

		super(scene, camera, null);

		/**
		 * The name of this pass.
		 */

		this.name = "MaskPass";

		/**
		 * Inverse flag.
		 *
		 * @type {Boolean}
		 * @default false
		 */

		this.inverse = false;

		/**
		 * Stencil buffer clear flag.
		 *
		 * @type {Boolean}
		 * @default true
		 */

		this.clearStencil = true;

	}

	/**
	 * Creates a stencil bit mask.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} readBuffer - The read buffer.
	 * @param {WebGLRenderTarget} writeBuffer - The write buffer.
	 */

	render(renderer, readBuffer, writeBuffer) {

		const context = renderer.context;
		const state = renderer.state;

		const scene = this.scene;
		const camera = this.camera;

		const writeValue = this.inverse ? 0 : 1;
		const clearValue = 1 - writeValue;

		// Don't update color or depth.
		state.buffers.color.setMask(false);
		state.buffers.depth.setMask(false);

		// Lock the buffers.
		state.buffers.color.setLocked(true);
		state.buffers.depth.setLocked(true);

		// Configure the stencil.
		state.buffers.stencil.setTest(true);
		state.buffers.stencil.setOp(context.REPLACE, context.REPLACE, context.REPLACE);
		state.buffers.stencil.setFunc(context.ALWAYS, writeValue, 0xffffffff);
		state.buffers.stencil.setClear(clearValue);

		// Clear the stencil.
		if(this.clearStencil) {

			renderer.setRenderTarget(readBuffer);
			renderer.clearStencil();

			renderer.setRenderTarget(writeBuffer);
			renderer.clearStencil();

		}

		// Draw the mask into both buffers.
		renderer.render(scene, camera, readBuffer);
		renderer.render(scene, camera, writeBuffer);

		// Unlock the buffers.
		state.buffers.color.setLocked(false);
		state.buffers.depth.setLocked(false);

		// Only render where the stencil is set to 1.
		state.buffers.stencil.setFunc(context.EQUAL, 1, 0xffffffff);
		state.buffers.stencil.setOp(context.KEEP, context.KEEP, context.KEEP);

	}

}

/**
 * A pixelation pass.
 */

/**
 * A pass that renders the result from a previous pass to another render target.
 */

/**
 * A shader pass.
 *
 * Used to render any shader material as a 2D filter.
 */

class ShaderPass extends Pass {

	/**
	 * Constructs a new shader pass.
	 *
	 * @param {ShaderMaterial} material - The shader material to use.
	 * @param {String} [textureID="tDiffuse"] - The texture uniform identifier.
	 */

	constructor(material, textureID = "tDiffuse") {

		super();

		/**
		 * The name of this pass.
		 */

		this.name = "ShaderPass";

		/**
		 * This pass renders to the write buffer.
		 */

		this.needsSwap = true;

		/**
		 * The shader material to use for rendering.
		 *
		 * @type {ShaderMaterial}
		 */

		this.material = material;

		this.quad.material = this.material;

		/**
		 * The name of the color sampler uniform of the given material.
		 *
		 * @type {String}
		 * @default "tDiffuse"
		 */

		this.textureID = textureID;

	}

	/**
	 * Renders the effect.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} readBuffer - The read buffer.
	 * @param {WebGLRenderTarget} writeBuffer - The write buffer.
	 */

	render(renderer, readBuffer, writeBuffer) {

		if(this.material.uniforms[this.textureID] !== undefined) {

			this.material.uniforms[this.textureID].value = readBuffer.texture;

		}

		renderer.render(this.scene, this.camera, this.renderToScreen ? null : writeBuffer);

	}

}

/**
 * A vector.
 *
 * @type {Vector3}
 * @private
 * @static
 * @final
 */

const v = new three.Vector3();

/**
 * A vector.
 *
 * @type {Vector3}
 * @private
 * @static
 * @final
 */

const ab = new three.Vector3();

/**
 * A shock wave pass.
 */

/**
 * Subpixel Morphological Antialiasing (SMAA) v2.8.
 *
 * Preset: SMAA 1x Medium (with color edge detection).
 *  https://github.com/iryoku/smaa/releases/tag/v2.8
 */

/**
 * A pass that renders a given texture.
 */

/**
 * A tone mapping pass that supports adaptive luminosity.
 *
 * If adaptivity is enabled, this pass generates a texture that represents the
 * luminosity of the current scene and adjusts it over time to simulate the
 * optic nerve responding to the amount of light it is receiving.
 *
 * Reference:
 *  GDC2007 - Wolfgang Engel, Post-Processing Pipeline
 *  http://perso.univ-lyon1.fr/jean-claude.iehl/Public/educ/GAMA/2007/gdc07/Post-Processing_Pipeline.pdf
 */

/**
 * A compilation of the post processing passes.
 *
 * @module postprocessing/passes
 */

/**
 * The EffectComposer may be used in place of a normal WebGLRenderer.
 *
 * The auto clear behaviour of the provided renderer will be disabled to prevent
 * unnecessary clear operations.
 *
 * It is common practice to use a {@link RenderPass} as the first pass to
 * automatically clear the screen and render the scene to a texture for further
 * processing.
 */

class EffectComposer {

	/**
	 * Constructs a new effect composer.
	 *
	 * @param {WebGLRenderer} [renderer] - The renderer that should be used.
	 * @param {Object} [options] - The options.
	 * @param {Boolean} [options.depthBuffer=true] - Whether the main render targets should have a depth buffer.
	 * @param {Boolean} [options.stencilBuffer=false] - Whether the main render targets should have a stencil buffer.
	 * @param {Boolean} [options.depthTexture=false] - Set to true if one of your passes relies on a depth texture.
	 */

	constructor(renderer = null, options = {}) {

		/**
		 * The renderer.
		 *
		 * You may replace the renderer at any time by using
		 * {@link EffectComposer#replaceRenderer}.
		 *
		 * @type {WebGLRenderer}
		 */

		this.renderer = renderer;

		/**
		 * The read buffer.
		 *
		 * Reading from and writing to the same render target should be avoided.
		 * Therefore, two seperate yet identical buffers are used.
		 *
		 * @type {WebGLRenderTarget}
		 * @private
		 */

		this.readBuffer = null;

		/**
		 * The write buffer.
		 *
		 * @type {WebGLRenderTarget}
		 * @private
		 */

		this.writeBuffer = null;

		if(this.renderer !== null) {

			this.renderer.autoClear = false;

			this.readBuffer = this.createBuffer(
				(options.depthBuffer !== undefined) ? options.depthBuffer : true,
				(options.stencilBuffer !== undefined) ? options.stencilBuffer : false,
				(options.depthTexture !== undefined) ? options.depthTexture : false
			);

			this.writeBuffer = this.readBuffer.clone();

		}

		/**
		 * A copy pass used for copying masked scenes.
		 *
		 * @type {ShaderPass}
		 * @private
		 */

		this.copyPass = new ShaderPass(new CopyMaterial());

		/**
		 * The passes.
		 *
		 * @type {Pass[]}
		 * @private
		 */

		this.passes = [];

	}

	/**
	 * The depth texture of the read and write buffers.
	 *
	 * @type {DepthTexture}
	 * @default null
	 */

	get depthTexture() { return this.readBuffer.depthTexture; }

	/**
	 * The read and write buffers share a single depth texture. Depth will be
	 * written to this texture when something is rendered into one of the buffers
	 * and the involved materials have depth write enabled.
	 *
	 * You may enable this mechanism during the instantiation of the composer or
	 * by assigning a DepthTexture instance later on. You may also disable it by
	 * assigning null.
	 *
	 * @type {DepthTexture}
	 */

	set depthTexture(x) {

		this.readBuffer.depthTexture = x;
		this.writeBuffer.depthTexture = x;

	}

	/**
	 * Replaces the current renderer with the given one. The DOM element of the
	 * current renderer will automatically be removed from its parent node and the
	 * DOM element of the new renderer will take its place.
	 *
	 * The auto clear mechanism of the provided renderer will be disabled.
	 *
	 * Switching between renderers allows you to dynamically enable or disable
	 * antialiasing.
	 *
	 * @param {WebGLRenderer} renderer - The new renderer.
	 * @return {WebGLRenderer} The old renderer.
	 */

	replaceRenderer(renderer) {

		const oldRenderer = this.renderer;

		let parent, oldSize, newSize;

		if(oldRenderer !== null && oldRenderer !== renderer) {

			this.renderer = renderer;
			this.renderer.autoClear = false;

			parent = oldRenderer.domElement.parentNode;
			oldSize = oldRenderer.getSize();
			newSize = renderer.getSize();

			if(parent !== null) {

				parent.removeChild(oldRenderer.domElement);
				parent.appendChild(renderer.domElement);

			}

			if(oldSize.width !== newSize.width || oldSize.height !== newSize.height) {

				this.setSize();

			}

		}

		return oldRenderer;

	}

	/**
	 * Creates a new render target by replicating the renderer's canvas.
	 *
	 * The created render target uses a linear filter for texel minification and
	 * magnification. Its render texture format depends on whether the renderer
	 * uses the alpha channel. Mipmaps are disabled.
	 *
	 * @param {Boolean} depthBuffer - Whether the render target should have a depth buffer.
	 * @param {Boolean} stencilBuffer - Whether the render target should have a stencil buffer.
	 * @param {Boolean} depthTexture - Whether the render target should have a depth texture.
	 * @return {WebGLRenderTarget} A new render target that equals the renderer's canvas.
	 */

	createBuffer(depthBuffer, stencilBuffer, depthTexture) {

		const size = this.renderer.getSize();
		const pixelRatio = this.renderer.getPixelRatio();
		const alpha = this.renderer.context.getContextAttributes().alpha;

		const renderTarget = new three.WebGLRenderTarget(size.width * pixelRatio, size.height * pixelRatio, {
			minFilter: three.LinearFilter,
			magFilter: three.LinearFilter,
			format: alpha ? three.RGBAFormat : three.RGBFormat,
			depthBuffer: depthBuffer,
			stencilBuffer: stencilBuffer,
			depthTexture: depthTexture ? new three.DepthTexture() : null
		});

		if(depthTexture && stencilBuffer) {

			renderTarget.depthTexture.format = three.DepthStencilFormat;
			renderTarget.depthTexture.type = three.UnsignedInt248Type;

		}

		renderTarget.texture.name = "EffectComposer.Buffer";
		renderTarget.texture.generateMipmaps = false;

		return renderTarget;

	}

	/**
	 * Adds a pass, optionally at a specific index.
	 *
	 * @param {Pass} pass - A new pass.
	 * @param {Number} [index] - An index at which the pass should be inserted.
	 */

	addPass(pass, index) {

		const renderer = this.renderer;
		const size = renderer.getSize();
		const pixelRatio = renderer.getPixelRatio();

		pass.setSize(size.width * pixelRatio, size.height * pixelRatio);
		pass.initialise(renderer, renderer.context.getContextAttributes().alpha);

		if(index !== undefined) {

			this.passes.splice(index, 0, pass);

		} else {

			this.passes.push(pass);

		}

	}

	/**
	 * Removes a pass.
	 *
	 * @param {Pass} pass - The pass.
	 */

	removePass(pass) {

		this.passes.splice(this.passes.indexOf(pass), 1);

	}

	/**
	 * Renders all enabled passes in the order in which they were added.
	 *
	 * @param {Number} delta - The time between the last frame and the current one in seconds.
	 */

	render(delta) {

		const passes = this.passes;
		const renderer = this.renderer;
		const copyPass = this.copyPass;

		let readBuffer = this.readBuffer;
		let writeBuffer = this.writeBuffer;

		let maskActive = false;
		let pass, context, buffer;
		let i, l;

		for(i = 0, l = passes.length; i < l; ++i) {

			pass = passes[i];

			if(pass.enabled) {

				pass.render(renderer, readBuffer, writeBuffer, delta, maskActive);

				if(pass.needsSwap) {

					if(maskActive) {

						context = renderer.context;
						context.stencilFunc(context.NOTEQUAL, 1, 0xffffffff);
						copyPass.render(renderer, readBuffer, writeBuffer);
						context.stencilFunc(context.EQUAL, 1, 0xffffffff);

					}

					buffer = readBuffer;
					readBuffer = writeBuffer;
					writeBuffer = buffer;

				}

				if(pass instanceof MaskPass) {

					maskActive = true;

				} else if(pass instanceof ClearMaskPass) {

					maskActive = false;

				}

			}

		}

	}

	/**
	 * Sets the size of the buffers and the renderer's output canvas.
	 *
	 * Every pass will be informed of the new size. It's up to each pass how that
	 * information is used.
	 *
	 * If no width or height is specified, the render targets and passes will be
	 * updated with the current size of the renderer.
	 *
	 * @param {Number} [width] - The width.
	 * @param {Number} [height] - The height.
	 */

	setSize(width, height) {

		const passes = this.passes;
		const size = this.renderer.getSize();
		const pixelRatio = this.renderer.getPixelRatio();

		let i, l;

		if(width === undefined || height === undefined) {

			width = size.width;
			height = size.height;

		}

		this.renderer.setSize(width, height);

		width *= pixelRatio;
		height *= pixelRatio;

		this.readBuffer.setSize(width, height);
		this.writeBuffer.setSize(width, height);

		for(i = 0, l = passes.length; i < l; ++i) {

			passes[i].setSize(width, height);

		}

	}

	/**
	 * Resets this composer by deleting all passes and creating new buffers.
	 *
	 * @param {WebGLRenderTarget} [renderTarget] - A new render target. If none is provided, the settings of the renderer will be used.
	 */

	reset(renderTarget) {

		const depthBuffer = this.readBuffer.depthBuffer;
		const stencilBuffer = this.readBuffer.stencilBuffer;
		const depthTexture = (this.readBuffer.depthTexture !== null);

		this.dispose((renderTarget === undefined) ?
			this.createBuffer(depthBuffer, stencilBuffer, depthTexture) :
			renderTarget
		);

	}

	/**
	 * Destroys all passes and render targets.
	 *
	 * This method deallocates all render targets, textures and materials created
	 * by the passes. It also deletes this composer's frame buffers.
	 *
	 * @param {WebGLRenderTarget} [renderTarget] - A new render target. If none is provided, the composer will become inoperative.
	 */

	dispose(renderTarget) {

		const passes = this.passes;

		if(this.readBuffer !== null && this.writeBuffer !== null) {

			this.readBuffer.dispose();
			this.writeBuffer.dispose();

			this.readBuffer = null;
			this.writeBuffer = null;

		}

		while(passes.length > 0) {

			passes.pop().dispose();

		}

		if(renderTarget !== undefined) {

			// Reanimate.
			this.readBuffer = renderTarget;
			this.writeBuffer = this.readBuffer.clone();

		} else {

			this.copyPass.dispose();

		}

	}

}

/**
 * Core components.
 *
 * @module postprocessing/core
 */

/**
 * Exposure of the library components.
 *
 * @module postprocessing
 */

var polyfill = function polyfill(object, method) {
  var showWarn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (object[method]) return;
  if (showWarn) console.warn('@PostProcessorModule: pass.' + method + '() was not found.', object);
  object[method] = function () {};
};

var PostProcessorModule = function () {
  function PostProcessorModule() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { debug: true },
        debug = _ref.debug;

    classCallCheck(this, PostProcessorModule);
    this.currentPass = null;
    this.defer = new Promise(function (resolve) {
      _this.resolve = resolve;
    });

    this.debug = debug;
  }

  createClass(PostProcessorModule, [{
    key: 'manager',
    value: function manager(_manager) {
      var _this2 = this;

      _manager.define('postprocessor');

      this.effects = _manager.use('rendering').effects;
      this.renderer = _manager.get('renderer');
      this.scene = _manager.get('scene');
      this.camera = _manager.get('camera');

      this.composer = new EffectComposer(this.renderer);

      _manager.use('rendering').stop();

      var composer = this.composer;
      this.renderLoop = new Loop(function (clock) {
        return composer.render(clock.getDelta());
      }).start(_manager.handler);

      _manager.update({
        renderer: function renderer(_renderer) {
          _this2.composer.replaceRenderer(_renderer);
        },

        scene: function scene(_scene) {
          _this2.scene = _scene;
        },

        camera: function camera(_camera) {
          _this2.camera = _camera;
        }
      });

      this.resolve();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      this.defer.then(function () {
        var pass = new RenderPass(_this3.scene, _this3.camera.native);

        // TODO: Support for effects.

        _this3.composer.addPass(pass);
        _this3.currentPass = pass;
      });

      return this;
    }

    // API

  }, {
    key: 'pass',
    value: function pass(_pass) {
      var _this4 = this;

      this.defer.then(function () {
        polyfill(_pass, 'setSize', _this4.debug);
        polyfill(_pass, 'initialise', _this4.debug);

        _this4.composer.addPass(_pass);
        _this4.currentPass = _pass;
      });

      return this;
    }
  }, {
    key: 'shader',
    value: function shader(material) {
      var _this5 = this;

      var textureID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'readBuffer';

      this.defer.then(function () {
        if (!material.uniforms[textureID]) material.uniforms[textureID] = { value: null };

        var pass = new ShaderPass(material, textureID);
        _this5.composer.addPass(pass);
        _this5.currentPass = pass;
      });

      return this;
    }

    // Pass API

  }, {
    key: 'get',
    value: function get$$1(name) {
      return name ? this.composer.passes.filter(function (pass) {
        return pass.name === name;
      })[0] : this.currentPass;
    }
  }, {
    key: 'to',
    value: function to(name) {
      this.currentPass = name;
    }
  }, {
    key: 'renderToScreen',
    value: function renderToScreen() {
      var _this6 = this;

      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.defer.then(function () {
        _this6.currentPass.renderToScreen = bool;
      });

      return this;
    }
  }, {
    key: 'name',
    value: function name(_name) {
      var _this7 = this;

      this.defer.then(function () {
        _this7.currentPass.name = _name;
      });

      return this;
    }
  }]);
  return PostProcessorModule;
}();

var EventsPatchModule = function () {
  function EventsPatchModule() {
    classCallCheck(this, EventsPatchModule);
  }

  createClass(EventsPatchModule, [{
    key: 'manager',
    value: function manager(_manager) {
      _manager.define('events');
      this.element = _manager.get('renderer').domElement;
    }
  }, {
    key: 'patchEvents',
    value: function patchEvents(originObject, destObject) {
      var events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      events.forEach(function (event) {
        return originObject.addEventListener(event, function (e) {
          return destObject.emit(event, e);
        });
      });
    }
  }, {
    key: 'integrate',
    value: function integrate(self) {
      var element = self.element,
          patchEvents = self.patchEvents;


      patchEvents(element, this, ['mousemove', 'mouseup', 'contextmenu', 'mousedown', 'click', 'wheel', 'touchstart', 'touchend', 'touchmove', 'keydown']);

      patchEvents(element, this, ['keydown', 'keyup', 'keypress']);
    }
  }]);
  return EventsPatchModule;
}();

/**
 * @class VirtualMouseModule
 * @category modules/app
 * @param {Boolean} [globalMovement=false]
 * @memberof module:modules/app
 * @extends Events
 */

var VirtualMouseModule = function (_Events) {
  inherits(VirtualMouseModule, _Events);

  function VirtualMouseModule() {
    var globalMovement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    classCallCheck(this, VirtualMouseModule);

    var _this = possibleConstructorReturn(this, (VirtualMouseModule.__proto__ || Object.getPrototypeOf(VirtualMouseModule)).call(this));

    _this.mouse = new three.Vector2();
    _this.raycaster = new three.Raycaster();
    _this.world = null;
    _this.canvas = null;
    _this.projectionPlane = new three.Plane(new three.Vector3(0, 0, 1), 0);

    _this.globalMovement = globalMovement;
    return _this;
  }

  createClass(VirtualMouseModule, [{
    key: 'update',
    value: function update(e, customX, customY) {
      var rect = this.canvas.getBoundingClientRect();

      var x = customX || e.clientX;
      var y = customY || e.clientY;

      this.mouse.x = (x - rect.left) / (rect.right - rect.left) * 2 - 1;
      this.mouse.y = -((y - rect.top) / (rect.bottom - rect.top)) * 2 + 1;

      this.projectionPlane.normal.copy(this.camera.getWorldDirection());

      this.raycaster.setFromCamera(this.mouse, this.camera);
      this.emit('move');
    }
  }, {
    key: 'manager',
    value: function manager(_manager) {
      _manager.define('mouse');
      _manager.require('events', function () {
        return new EventsPatchModule();
      });

      this.canvas = _manager.get('renderer').domElement;
      this.camera = _manager.get('camera').native;
    }
  }, {
    key: 'integrate',
    value: function integrate(self) {
      var _this2 = this;

      ['click', 'mousedown', 'mouseup', 'mousemove'].forEach(function (ev) {
        return _this2.on(ev, function (e) {
          return self.emit(ev, e);
        });
      });

      self.globalX = 0;
      self.globalY = 0;

      this.on('mousemove', function (e) {
        if (document.pointerLockElement !== null) {
          self.globalX += e.movementX;
          self.globalY += e.movementY;

          self.update(e, self.globalX, self.globalY);
        } else self.update(e);
      });
    }
  }, {
    key: 'track',
    value: function track(component) {
      var _this3 = this;

      var isHovered = false;

      this.on('move', function () {
        if (_this3.hovers(component)) {
          if (isHovered) component.emit('mousemove');else {
            component.emit('mouseover');
            isHovered = true;
          }
        } else if (isHovered) {
          component.emit('mouseout');
          isHovered = false;
        }
      });

      this.on('click', function () {
        if (isHovered) component.emit('click');else component.emit('offClick');
      });

      this.on('mousedown', function () {
        if (isHovered) component.emit('mousedown');
      });

      this.on('mouseup', function () {
        if (isHovered) component.emit('mouseup');
      });
    }
  }, {
    key: 'intersection',
    value: function intersection(component) {
      return this.raycaster.intersectObject(component.native);
    }
  }, {
    key: 'project',
    value: function project() {
      var plane = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.projectionPlane;

      return this.raycaster.ray.intersectPlane(plane);
    }
  }, {
    key: 'hovers',
    value: function hovers(component) {
      var intersection = this.intersection(component)[0];
      return intersection ? intersection.object === component.native : false;
    }
  }, {
    key: 'ray',
    get: function get$$1() {
      return this.raycaster.ray;
    }
  }, {
    key: 'x',
    get: function get$$1() {
      return this.mouse.x;
    }
  }, {
    key: 'y',
    get: function get$$1() {
      return this.mouse.y;
    }
  }]);
  return VirtualMouseModule;
}(minivents_commonjs);

var ControlsModule = function () {
  createClass(ControlsModule, null, [{
    key: 'from',
    value: function from(controls) {
      return new ControlsModule({ controls: controls });
    }
  }]);

  function ControlsModule() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, ControlsModule);

    this.params = Object.assign({
      controls: false,
      fix: function fix(controls) {
        return controls;
      },

      update: function update(c) {
        this.controls.update(c.getDelta());
      }
    }, params);

    this.controls = this.params.controls;
    this.update = this.params.update;
  }

  createClass(ControlsModule, [{
    key: 'manager',
    value: function manager(_manager) {
      _manager.require('events', function () {
        return new EventsPatchModule();
      });
    }
  }, {
    key: 'setControls',
    value: function setControls(controls) {
      this.controls = controls;
      return this;
    }
  }, {
    key: 'setUpdate',
    value: function setUpdate(update) {
      this.update = update;
      return this;
    }
  }, {
    key: 'integrate',
    value: function integrate(self) {
      self.updateLoop = new Loop(self.update.bind(self));
      self.updateLoop.start(this);
    }
  }]);
  return ControlsModule;
}();

/**
 * @class FogModule
 * @category modules/app
 * @param {Object} [params={color: 0xefd1b5, density: 0.020, near: 10, far: 1000}] - The parameters object.
 * @param {String} [type=exp2] - The type of fog - exp2 or linear
 * @memberof module:modules/app
 * @example <caption>How to create and apply a FogModule</caption>
 * const fogModule = new FogModule({
 *    color: 0xffffff,
 *    density: 0.03,
 *    near: 20,
 *    far: 200
 *  }, 'exp2');
 *
 * new App([
 *  ...,
 *  fogModule
 * ]);
 */

var FogModule = function () {
  function FogModule() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var type = arguments[1];
    classCallCheck(this, FogModule);

    this.params = Object.assign({
      color: 0xefd1b5,
      density: 0.020,
      near: 10,
      far: 1000
    }, params);
    if (!type || type === 'exp2') this.fog = new three.FogExp2(this.params.color, this.params.density);else if (type === 'linear') this.fog = new three.Fog(this.params.color, this.params.near, this.params.far);
  }

  createClass(FogModule, [{
    key: 'manager',
    value: function manager(_manager) {
      _manager.set('fog', this.fog);
      _manager.get('scene').fog = this.fog;
    }
  }]);
  return FogModule;
}();

var isEqualDefault = function isEqualDefault(a, b) {
  if (a === b) return true;else if (a && a.equals && a.equals(b)) return true;

  return false;
};

/**
 * @class StateModule
 * @description `StateModule` is useful for apps, where you need state manipulation.
 * This can be: _transitions between screens, games, development moments_.
 * You can check [basic/state](https://whs-dev.surge.sh/examples/?basic/state) example.
 * @category modules/app
 * @param {Object} [params]
 * @memberof module:modules/app
 * @example <caption> Creating a state module</caption>
 * new App([
 *   // ...
 *   new StateModule().default({
 *     sphereColor: 0xff0000
 *   })
 * ]);
 */

var StateModule = function () {
  createClass(StateModule, null, [{
    key: 'actionGenerate',
    value: function actionGenerate(isEqual) {
      return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{}, ''];
        var _ref = arguments[1];
        var key = _ref.key,
            data = _ref.data;

        if (isEqual(state[0][key], data)) return state;

        state[0][key] = data;
        state[1] = key;

        return state;
      };
    }
  }]);

  function StateModule() {
    var equalCheck = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : isEqualDefault;
    classCallCheck(this, StateModule);

    this.store = createStore(StateModule.actionGenerate(equalCheck));

    this.configuration = {};
    this.currentConfig = 'default';
    this.prevConfig = 'default';
  }

  /**
   * @method default
   * @description Add default configuration.
   * @param {Object} data Configuration setup
   * @memberof module:modules/app.StateModule
   * @example
   * new WHS.StateModule().default({
   *   sphereColor: UTILS.$colors.mesh,
   *   planeColor: 0x447F8B
   * })
   */


  createClass(StateModule, [{
    key: 'default',
    value: function _default(data) {
      this.config({ default: data });
      return this;
    }

    /**
     * @method setEqualCheck
     * @description Sets an equalCheck function
     * @param {Object} data Configuration setup
     * @memberof module:modules/app.StateModule
     */

  }, {
    key: 'setEqualCheck',
    value: function setEqualCheck(func) {
      this.store.replaceReducer(StateModule.actionGenerate(func));
    }
  }, {
    key: 'manager',
    value: function manager(_manager) {
      _manager.define('state');
    }

    /**
     * @method config
     * @description Load configurations from object.
     * @param {Object} configs Configuration data
     * @memberof module:modules/app.StateModule
     * @example <caption> Adding `green` configuration</caption>
     * state.config({
     *   green: {
     *     sphereColor: 0x00ff00,
     *     planeColor: 0x00ff00
     *   }
     * });
     */

  }, {
    key: 'config',
    value: function config(configs) {
      for (var key in configs) {
        if (key) {
          this.configuration[key] = key === 'default' ? configs[key] : Object.assign({}, this.configuration.default, configs[key]);
        }
      }
    }

    /**
     * @method update
     * @description Load updates from object.
     * @param {Object} updates Updates data
     * @memberof module:modules/app.StateModule
     * @example <caption> Update callback for `sphereColor`</caption>
     * state.update({
     *   sphereColor: color => sphere.material.color.setHex(color)
     * });
     */

  }, {
    key: 'update',
    value: function update() {
      var _this = this;

      var updates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.store.subscribe(function () {
        var _store$getState = _this.store.getState(),
            _store$getState2 = slicedToArray(_store$getState, 2),
            data = _store$getState2[0],
            changedKey = _store$getState2[1];

        var callback = updates[changedKey];

        if (callback) callback(data[changedKey]);
      });
    }

    /**
     * @method to
     * @description Switch to configuration.
     * @param {String} configName Configuration name.
     * @memberof module:modules/app.StateModule
     * @example <caption> Changes configuration to `green`</caption>
     * state.to('green');
     */

  }, {
    key: 'to',
    value: function to(configName) {
      this.prevConfig = this.currentConfig;
      this.currentConfig = configName;

      var config = this.configuration[configName] ? this.configuration[configName] : this.configuration.default;

      this.set(config);
    }

    /**
     * @method set
     * @description Set current parameters.
     * @param {Object} data Configuration parameters.
     * @memberof module:modules/app.StateModule
     * @example
     * state.set({
     *   sphereColor: 0x00ff00
     * });
     */

  }, {
    key: 'set',
    value: function set$$1(data) {
      for (var key in data) {
        if (key) this.store.dispatch({ type: 'ADD', key: key, data: data[key] });
      }
    }

    /**
     * @method get
     * @description Return data of parameter.
     * @param {String} key Parameter name.
     * @memberof module:modules/app.StateModule
     * @example
     * state.get('sphereColor'); // 0x00ff00
     */

  }, {
    key: 'get',
    value: function get$$1(key) {
      return this.store.getState()[0][key];
    }

    /**
     * @method prev
     * @description Return `trueVal` if `config` match previous configuration, in other case - return `falseVal`.
     * @param {String} config Configuration name.
     * @param {Any} trueVal Value returned if condition is truthy.
     * @param {Any} falseVal CValue returned if condition is falsy.
     * @memberof module:modules/app.StateModule
     */

  }, {
    key: 'prev',
    value: function prev(config, trueVal, falseVal) {
      return this.prevConfig === config ? trueVal : falseVal;
    }

    /**
     * @method current
     * @description Return `trueVal` if `config` match current configuration, in other case - return `falseVal`.
     * @param {String} config Configuration name.
     * @param {Any} trueVal Value returned if condition is truthy.
     * @param {Any} falseVal CValue returned if condition is falsy.
     * @memberof module:modules/app.StateModule
     */

  }, {
    key: 'current',
    value: function current(config, trueVal, falseVal) {
      return this.currentConfig === config ? trueVal : falseVal;
    }
  }]);
  return StateModule;
}();

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finter swipe

var ThreeOrbitControls = function (_EventDispatcher) {
  inherits(ThreeOrbitControls, _EventDispatcher);

  function ThreeOrbitControls(object, domElement, eventHandler) {
    classCallCheck(this, ThreeOrbitControls);

    var _this = possibleConstructorReturn(this, (ThreeOrbitControls.__proto__ || Object.getPrototypeOf(ThreeOrbitControls)).call(this));

    _this.object = object;

    _this.domElement = domElement === undefined ? document : domElement;
    _this.eventHandler = eventHandler;

    // Set to false to disable this control
    _this.enabled = true;

    // "target" sets the location of focus, where the object orbits around
    _this.target = new three.Vector3();

    // How far you can dolly in and out ( PerspectiveCamera only )
    _this.minDistance = 0;
    _this.maxDistance = Infinity;

    // How far you can zoom in and out ( OrthographicCamera only )
    _this.minZoom = 0;
    _this.maxZoom = Infinity;

    // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.
    _this.minPolarAngle = 0; // radians
    _this.maxPolarAngle = Math.PI; // radians

    // How far you can orbit horizontally, upper and lower limits.
    // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
    _this.minAzimuthAngle = -Infinity; // radians
    _this.maxAzimuthAngle = Infinity; // radians

    // Set to true to enable damping (inertia)
    // If damping is enabled, you must call controls.update() in your animation loop
    _this.enableDamping = false;
    _this.dampingFactor = 0.25;

    // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
    // Set to false to disable zooming
    _this.enableZoom = true;
    _this.zoomSpeed = 1.0;

    // Set to false to disable rotating
    _this.enableRotate = true;
    _this.rotateSpeed = 1.0;

    // Set to false to disable panning
    _this.enablePan = true;
    _this.keyPanSpeed = 7.0; // pixels moved per arrow key push

    // Set to true to automatically rotate around the target
    // If auto-rotate is enabled, you must call controls.update() in your animation loop
    _this.autoRotate = false;
    _this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

    // Set to false to disable use of the keys
    _this.enableKeys = true;

    // The four arrow keys
    _this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

    // Mouse buttons
    _this.mouseButtons = { ORBIT: three.MOUSE.LEFT, ZOOM: three.MOUSE.MIDDLE, PAN: three.MOUSE.RIGHT };

    // for reset
    _this.target0 = _this.target.clone();
    _this.position0 = _this.object.position.clone();
    _this.zoom0 = _this.object.zoom;

    //
    // public methods
    //

    _this.getPolarAngle = function () {
      return spherical.phi;
    };

    _this.getAzimuthalAngle = function () {
      return spherical.theta;
    };

    _this.reset = function () {
      _this.target.copy(_this.target0);
      _this.object.position.copy(_this.position0);
      _this.object.zoom = _this.zoom0;

      _this.object.updateProjectionMatrix();
      _this.dispatchEvent(changeEvent);

      _this.update();

      state = STATE.NONE;
    };

    // this method is exposed, but perhaps it would be better if we can make it private...
    _this.update = function () {
      var offset = new three.Vector3();

      // so camera.up is the orbit axis
      var quat = new three.Quaternion().setFromUnitVectors(object.up, new three.Vector3(0, 1, 0));
      var quatInverse = quat.clone().inverse();

      var lastPosition = new three.Vector3();
      var lastQuaternion = new three.Quaternion();

      return function () {
        var position = _this.object.position;

        offset.copy(position).sub(_this.target);

        // rotate offset to "y-axis-is-up" space
        offset.applyQuaternion(quat);

        // angle from z-axis around y-axis
        spherical.setFromVector3(offset);

        if (_this.autoRotate && state === STATE.NONE) rotateLeft(getAutoRotationAngle());

        spherical.theta += sphericalDelta.theta;
        spherical.phi += sphericalDelta.phi;

        // restrict theta to be between desired limits
        spherical.theta = Math.max(_this.minAzimuthAngle, Math.min(_this.maxAzimuthAngle, spherical.theta));

        // restrict phi to be between desired limits
        spherical.phi = Math.max(_this.minPolarAngle, Math.min(_this.maxPolarAngle, spherical.phi));

        spherical.makeSafe();

        spherical.radius *= scale;

        // restrict radius to be between desired limits
        spherical.radius = Math.max(_this.minDistance, Math.min(_this.maxDistance, spherical.radius));

        // move target to panned location
        _this.target.add(panOffset);

        offset.setFromSpherical(spherical);

        // rotate offset back to "camera-up-vector-is-up" space
        offset.applyQuaternion(quatInverse);

        position.copy(_this.target).add(offset);

        _this.object.lookAt(_this.target);

        if (_this.enableDamping === true) {
          sphericalDelta.theta *= 1 - _this.dampingFactor;
          sphericalDelta.phi *= 1 - _this.dampingFactor;
        } else sphericalDelta.set(0, 0, 0);

        scale = 1;
        panOffset.set(0, 0, 0);

        // update condition is:
        // min(camera displacement, camera rotation in radians)^2 > EPS
        // using small-angle approximation cos(x/2) = 1 - x^2 / 8

        if (zoomChanged || lastPosition.distanceToSquared(_this.object.position) > EPS || 8 * (1 - lastQuaternion.dot(_this.object.quaternion)) > EPS) {
          _this.dispatchEvent(changeEvent);

          lastPosition.copy(_this.object.position);
          lastQuaternion.copy(_this.object.quaternion);
          zoomChanged = false;

          return true;
        }

        return false;
      }();
    };

    _this.dispose = function () {
      _this.domElement.removeEventListener('contextmenu', onContextMenu, false);
      _this.domElement.removeEventListener('mousedown', onMouseDown, false);
      _this.domElement.removeEventListener('wheel', onMouseWheel, false);

      _this.domElement.removeEventListener('touchstart', onTouchStart, false);
      _this.domElement.removeEventListener('touchend', onTouchEnd, false);
      _this.domElement.removeEventListener('touchmove', onTouchMove, false);

      document.removeEventListener('mousemove', onMouseMove, false);
      document.removeEventListener('mouseup', onMouseUp, false);

      window.removeEventListener('keydown', onKeyDown, false);

      // this.dispatchEvent( { type: 'dispose' } ); // should this be added here?
    };

    //
    // internals
    //

    var changeEvent = { type: 'change' };
    var startEvent = { type: 'start' };
    var endEvent = { type: 'end' };

    var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

    var state = STATE.NONE;

    var EPS = 0.000001;

    // current position in spherical coordinates
    var spherical = new three.Spherical();
    var sphericalDelta = new three.Spherical();

    var scale = 1;
    var panOffset = new three.Vector3();
    var zoomChanged = false;

    var rotateStart = new three.Vector2();
    var rotateEnd = new three.Vector2();
    var rotateDelta = new three.Vector2();

    var panStart = new three.Vector2();
    var panEnd = new three.Vector2();
    var panDelta = new three.Vector2();

    var dollyStart = new three.Vector2();
    var dollyEnd = new three.Vector2();
    var dollyDelta = new three.Vector2();

    var getAutoRotationAngle = function getAutoRotationAngle() {
      return 2 * Math.PI / 60 / 60 * _this.autoRotateSpeed;
    };

    var getZoomScale = function getZoomScale() {
      return Math.pow(0.95, _this.zoomSpeed);
    };

    var rotateLeft = function rotateLeft(angle) {
      sphericalDelta.theta -= angle;
    };

    var rotateUp = function rotateUp(angle) {
      sphericalDelta.phi -= angle;
    };

    var panLeft = function () {
      var v = new three.Vector3();

      return function (distance, objectMatrix) {
        v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
        v.multiplyScalar(-distance);
        panOffset.add(v);
      };
    }();

    var panUp = function () {
      var v = new three.Vector3();

      return function (distance, objectMatrix) {
        v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
        v.multiplyScalar(distance);
        panOffset.add(v);
      };
    }();

    // deltaX and deltaY are in pixels; right and down are positive
    var pan = function () {
      var offset = new three.Vector3();

      return function (deltaX, deltaY) {
        var element = _this.domElement === document ? _this.domElement.body : _this.domElement;

        if (_this.object instanceof three.PerspectiveCamera) {
          // perspective
          var position = _this.object.position;
          offset.copy(position).sub(_this.target);
          var targetDistance = offset.length();

          // half of the fov is center to top of screen
          targetDistance *= Math.tan(_this.object.fov / 2 * Math.PI / 180.0);

          // we actually don't use screenWidth, since perspective camera is fixed to screen height
          panLeft(2 * deltaX * targetDistance / element.clientHeight, _this.object.matrix);
          panUp(2 * deltaY * targetDistance / element.clientHeight, _this.object.matrix);
        } else if (_this.object instanceof three.OrthographicCamera) {
          // orthographic
          panLeft(deltaX * (_this.object.right - _this.object.left) / _this.object.zoom / element.clientWidth, _this.object.matrix);
          panUp(deltaY * (_this.object.top - _this.object.bottom) / _this.object.zoom / element.clientHeight, _this.object.matrix);
        } else {
          // camera neither orthographic nor perspective
          console.warn('WARNING: OrbitControlsModule.js encountered an unknown camera type - pan disabled.');
          _this.enablePan = false;
        }
      };
    }();

    var dollyIn = function dollyIn(dollyScale) {
      if (_this.object instanceof three.PerspectiveCamera) scale /= dollyScale;else if (_this.object instanceof three.OrthographicCamera) {
        _this.object.zoom = Math.max(_this.minZoom, Math.min(_this.maxZoom, _this.object.zoom * dollyScale));
        _this.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn('WARNING: OrbitControlsModule.js encountered an unknown camera type - dolly/zoom disabled.');
        _this.enableZoom = false;
      }
    };

    var dollyOut = function dollyOut(dollyScale) {
      if (_this.object instanceof three.PerspectiveCamera) scale *= dollyScale;else if (_this.object instanceof three.OrthographicCamera) {
        _this.object.zoom = Math.max(_this.minZoom, Math.min(_this.maxZoom, _this.object.zoom / dollyScale));
        _this.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn('WARNING: OrbitControlsModule.js encountered an unknown camera type - dolly/zoom disabled.');
        _this.enableZoom = false;
      }
    };

    //
    // event callbacks - update the object state
    //

    var handleMouseDownRotate = function handleMouseDownRotate(event) {
      // console.log( 'handleMouseDownRotate' );

      rotateStart.set(event.clientX, event.clientY);
    };

    var handleMouseDownDolly = function handleMouseDownDolly(event) {
      // console.log( 'handleMouseDownDolly' );

      dollyStart.set(event.clientX, event.clientY);
    };

    var handleMouseDownPan = function handleMouseDownPan(event) {
      // console.log( 'handleMouseDownPan' );

      panStart.set(event.clientX, event.clientY);
    };

    var handleMouseMoveRotate = function handleMouseMoveRotate(event) {
      // console.log( 'handleMouseMoveRotate' );

      rotateEnd.set(event.clientX, event.clientY);
      rotateDelta.subVectors(rotateEnd, rotateStart);

      var element = _this.domElement === document ? _this.domElement.body : _this.domElement;

      // rotating across whole screen goes 360 degrees around
      rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * _this.rotateSpeed);

      // rotating up and down along whole screen attempts to go 360, but limited to 180
      rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * _this.rotateSpeed);

      rotateStart.copy(rotateEnd);

      _this.update();
    };

    var handleMouseMoveDolly = function handleMouseMoveDolly(event) {
      // console.log( 'handleMouseMoveDolly' );

      dollyEnd.set(event.clientX, event.clientY);

      dollyDelta.subVectors(dollyEnd, dollyStart);

      if (dollyDelta.y > 0) dollyIn(getZoomScale());else if (dollyDelta.y < 0) dollyOut(getZoomScale());

      dollyStart.copy(dollyEnd);

      _this.update();
    };

    var handleMouseMovePan = function handleMouseMovePan(event) {
      // console.log( 'handleMouseMovePan' );

      panEnd.set(event.clientX, event.clientY);

      panDelta.subVectors(panEnd, panStart);

      pan(panDelta.x, panDelta.y);

      panStart.copy(panEnd);

      _this.update();
    };

    var handleMouseUp = function handleMouseUp(event) {
      // console.log( 'handleMouseUp' );
    };

    var handleMouseWheel = function handleMouseWheel(event) {
      // console.log( 'handleMouseWheel' );

      if (event.deltaY < 0) dollyOut(getZoomScale());else if (event.deltaY > 0) dollyIn(getZoomScale());

      _this.update();
    };

    var handleKeyDown = function handleKeyDown(event) {
      // console.log( 'handleKeyDown' );

      switch (event.keyCode) {
        case _this.keys.UP:
          pan(0, _this.keyPanSpeed);
          _this.update();
          break;

        case _this.keys.BOTTOM:
          pan(0, -_this.keyPanSpeed);
          _this.update();
          break;

        case _this.keys.LEFT:
          pan(_this.keyPanSpeed, 0);
          _this.update();
          break;

        case _this.keys.RIGHT:
          pan(-_this.keyPanSpeed, 0);
          _this.update();
          break;

      }
    };

    var handleTouchStartRotate = function handleTouchStartRotate(event) {
      // console.log( 'handleTouchStartRotate' );

      rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
    };

    var handleTouchStartDolly = function handleTouchStartDolly(event) {
      // console.log( 'handleTouchStartDolly' );

      var dx = event.touches[0].pageX - event.touches[1].pageX;
      var dy = event.touches[0].pageY - event.touches[1].pageY;

      var distance = Math.sqrt(dx * dx + dy * dy);

      dollyStart.set(0, distance);
    };

    var handleTouchStartPan = function handleTouchStartPan(event) {
      // console.log( 'handleTouchStartPan' );

      panStart.set(event.touches[0].pageX, event.touches[0].pageY);
    };

    var handleTouchMoveRotate = function handleTouchMoveRotate(event) {
      // console.log( 'handleTouchMoveRotate' );

      rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
      rotateDelta.subVectors(rotateEnd, rotateStart);

      var element = _this.domElement === document ? _this.domElement.body : _this.domElement;

      // rotating across whole screen goes 360 degrees around
      rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * _this.rotateSpeed);

      // rotating up and down along whole screen attempts to go 360, but limited to 180
      rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * _this.rotateSpeed);

      rotateStart.copy(rotateEnd);

      _this.update();
    };

    var handleTouchMoveDolly = function handleTouchMoveDolly(event) {
      // console.log( 'handleTouchMoveDolly' );

      var dx = event.touches[0].pageX - event.touches[1].pageX;
      var dy = event.touches[0].pageY - event.touches[1].pageY;

      var distance = Math.sqrt(dx * dx + dy * dy);

      dollyEnd.set(0, distance);

      dollyDelta.subVectors(dollyEnd, dollyStart);

      if (dollyDelta.y > 0) dollyOut(getZoomScale());else if (dollyDelta.y < 0) dollyIn(getZoomScale());

      dollyStart.copy(dollyEnd);

      _this.update();
    };

    var handleTouchMovePan = function handleTouchMovePan(event) {
      // console.log( 'handleTouchMovePan' );

      panEnd.set(event.touches[0].pageX, event.touches[0].pageY);

      panDelta.subVectors(panEnd, panStart);

      pan(panDelta.x, panDelta.y);

      panStart.copy(panEnd);

      _this.update();
    };

    var handleTouchEnd = function handleTouchEnd() {
      // console.log( 'handleTouchEnd' );
    };

    //
    // event handlers - FSM: listen for events and reset state
    //

    var onMouseDown = function onMouseDown(event) {
      if (_this.enabled === false) return;

      event.preventDefault();

      if (event.button === _this.mouseButtons.ORBIT) {
        if (_this.enableRotate === false) return;

        handleMouseDownRotate(event);

        state = STATE.ROTATE;
      } else if (event.button === _this.mouseButtons.ZOOM) {
        if (_this.enableZoom === false) return;

        handleMouseDownDolly(event);

        state = STATE.DOLLY;
      } else if (event.button === _this.mouseButtons.PAN) {
        if (_this.enablePan === false) return;

        handleMouseDownPan(event);

        state = STATE.PAN;
      }

      if (state !== STATE.NONE) {
        _this.eventHandler.on('mousemove', onMouseMove, false);
        _this.eventHandler.on('mouseup', onMouseUp, false);

        _this.dispatchEvent(startEvent);
      }
    };

    var onMouseMove = function onMouseMove(event) {
      if (_this.enabled === false) return;

      event.preventDefault();

      if (state === STATE.ROTATE) {
        if (_this.enableRotate === false) return;

        handleMouseMoveRotate(event);
      } else if (state === STATE.DOLLY) {
        if (_this.enableZoom === false) return;

        handleMouseMoveDolly(event);
      } else if (state === STATE.PAN) {
        if (_this.enablePan === false) return;

        handleMouseMovePan(event);
      }
    };

    var onMouseUp = function onMouseUp(event) {
      if (_this.enabled === false) return;

      handleMouseUp(event);

      document.removeEventListener('mousemove', onMouseMove, false);
      document.removeEventListener('mouseup', onMouseUp, false);

      _this.dispatchEvent(endEvent);

      state = STATE.NONE;
    };

    var onMouseWheel = function onMouseWheel(event) {
      if (_this.enabled === false || _this.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;

      event.preventDefault();
      event.stopPropagation();

      handleMouseWheel(event);

      _this.dispatchEvent(startEvent); // not sure why these are here...
      _this.dispatchEvent(endEvent);
    };

    var onKeyDown = function onKeyDown(event) {
      if (_this.enabled === false || _this.enableKeys === false || _this.enablePan === false) return;

      handleKeyDown(event);
    };

    var onTouchStart = function onTouchStart(event) {
      if (_this.enabled === false) return;

      switch (event.touches.length) {
        case 1:
          // one-fingered touch: rotate

          if (_this.enableRotate === false) return;

          handleTouchStartRotate(event);

          state = STATE.TOUCH_ROTATE;

          break;

        case 2:
          // two-fingered touch: dolly

          if (_this.enableZoom === false) return;

          handleTouchStartDolly(event);

          state = STATE.TOUCH_DOLLY;

          break;

        case 3:
          // three-fingered touch: pan

          if (_this.enablePan === false) return;

          handleTouchStartPan(event);

          state = STATE.TOUCH_PAN;

          break;

        default:

          state = STATE.NONE;

      }

      if (state !== STATE.NONE) _this.dispatchEvent(startEvent);
    };

    var onTouchMove = function onTouchMove(event) {
      if (_this.enabled === false) return;

      event.preventDefault();
      event.stopPropagation();

      switch (event.touches.length) {
        case 1:
          // one-fingered touch: rotate

          if (_this.enableRotate === false) return;
          if (state !== STATE.TOUCH_ROTATE) return; // is this needed?...

          handleTouchMoveRotate(event);

          break;

        case 2:
          // two-fingered touch: dolly

          if (_this.enableZoom === false) return;
          if (state !== STATE.TOUCH_DOLLY) return; // is this needed?...

          handleTouchMoveDolly(event);

          break;

        case 3:
          // three-fingered touch: pan

          if (_this.enablePan === false) return;
          if (state !== STATE.TOUCH_PAN) return; // is this needed?...

          handleTouchMovePan(event);

          break;

        default:

          state = STATE.NONE;

      }
    };

    var onTouchEnd = function onTouchEnd(event) {
      if (_this.enabled === false) return;

      handleTouchEnd(event);

      _this.dispatchEvent(endEvent);

      state = STATE.NONE;
    };

    var onContextMenu = function onContextMenu(event) {
      event.preventDefault();
    };

    //

    _this.eventHandler.on('contextmenu', onContextMenu, false);

    _this.eventHandler.on('mousedown', onMouseDown, false);
    _this.eventHandler.on('wheel', onMouseWheel, false);

    _this.eventHandler.on('touchstart', onTouchStart, false);
    _this.eventHandler.on('touchend', onTouchEnd, false);
    _this.eventHandler.on('touchmove', onTouchMove, false);

    _this.eventHandler.on('keydown', onKeyDown, false);

    // force an update at start

    _this.update();
    return _this;
  }

  createClass(ThreeOrbitControls, [{
    key: 'center',
    get: function get$$1() {
      console.warn('OrbitControls: .center has been renamed to .target');
      return this.target;
    }
  }, {
    key: 'noZoom',
    get: function get$$1() {
      console.warn('OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
      return !this.enableZoom;
    },
    set: function set$$1(value) {
      console.warn('OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
      this.enableZoom = !value;
    }
  }, {
    key: 'noRotate',
    get: function get$$1() {
      console.warn('OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
      return !this.enableRotate;
    },
    set: function set$$1(value) {
      console.warn('OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
      this.enableRotate = !value;
    }
  }, {
    key: 'noPan',
    get: function get$$1() {
      console.warn('OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
      return !this.enablePan;
    },
    set: function set$$1(value) {
      console.warn('OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
      this.enablePan = !value;
    }
  }, {
    key: 'noKeys',
    get: function get$$1() {
      console.warn('OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
      return !this.enableKeys;
    },
    set: function set$$1(value) {
      console.warn('OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
      this.enableKeys = !value;
    }
  }, {
    key: 'staticMoving',
    get: function get$$1() {
      console.warn('OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
      return !this.enableDamping;
    },
    set: function set$$1(value) {
      console.warn('OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
      this.enableDamping = !value;
    }
  }, {
    key: 'dynamicDampingFactor',
    get: function get$$1() {
      console.warn('OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
      return this.dampingFactor;
    },
    set: function set$$1(value) {
      console.warn('OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
      this.dampingFactor = value;
    }
  }]);
  return ThreeOrbitControls;
}(three.EventDispatcher);

var OrbitControlsModule = function (_ControlsModule) {
  inherits(OrbitControlsModule, _ControlsModule);

  function OrbitControlsModule() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, OrbitControlsModule);

    var _this = possibleConstructorReturn(this, (OrbitControlsModule.__proto__ || Object.getPrototypeOf(OrbitControlsModule)).call(this, params));

    _this.params = Object.assign({
      follow: false,
      object: null,
      target: new three.Vector3(0, 0, 0)
    }, params);
    return _this;
  }

  createClass(OrbitControlsModule, [{
    key: 'manager',
    value: function manager(_manager) {
      get(OrbitControlsModule.prototype.__proto__ || Object.getPrototypeOf(OrbitControlsModule.prototype), 'manager', this).call(this, _manager);

      var _params = this.params,
          obj = _params.object,
          follow = _params.follow,
          target = _params.target;

      var object = obj ? obj.native : _manager.get('camera').native;

      var controls = new ThreeOrbitControls(object, _manager.get('element'), _manager.handler);

      var updateProcessor = follow ? function (c) {
        controls.update(c.getDelta());
        controls.target.copy(target);
      } : function (c) {
        controls.update(c.getDelta());
      };

      this.setControls(controls);
      this.setUpdate(updateProcessor);

      _manager.update({
        camera: function camera(_camera) {
          if (obj) return;
          controls.object = _camera.native;
        }
      });

      controls.target.copy(target);
    }
  }]);
  return OrbitControlsModule;
}(ControlsModule);

/** @module modules/app/controls */

/** @module modules/app */

/**
 * @class DynamicGeometryModule
 * @category modules/mesh
 * @param {Object} [params={attributes: false}] - params
 * @param {Boolean} [patchEvents=true]
 * @memberof module:modules/mesh
 */
var DynamicGeometryModule = function () {
  function DynamicGeometryModule() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, DynamicGeometryModule);

    this.params = Object.assign({
      attributes: false
    }, params);
  }

  createClass(DynamicGeometryModule, [{
    key: "integrate",
    value: function integrate(self) {
      var _this = this;

      var params = self.params;

      this.g_ = function () {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (this.buildGeometry) {
          this.native.geometry = this.buildGeometry(this.updateParams({ geometry: params }));
        }
      };

      if (params.attributes) {
        var _loop = function _loop(key) {
          if (key) {
            Object.defineProperty(_this, "g_" + key, {
              get: function get$$1() {
                return this.native.geometry.parameters[key];
              },
              set: function set$$1(value) {
                this.native.geometry = this.buildGeometry(this.updateParams({ geometry: defineProperty({}, key, value) }));
              },

              configurable: true,
              enumerable: true
            });
          }
        };

        for (var key in this.params.geometry) {
          _loop(key);
        }
      }
    }
  }]);
  return DynamicGeometryModule;
}();

var loader = new three.TextureLoader();

/**
 * @class TextureModule
 * @category modules/mesh
 * @description A TextureModule can be applied to any Mesh or Model.
 * @param {Array} [textures] - array of texture objects
 * @memberof module:modules/mesh
 * @example <caption>Creating an instance. url takes a path, or a data object.</caption>
 * var woodTexture = new TextureModule({
 *   url: `${process.assetsPath}/textures/wood.jpg`
 * });
 * @example <caption>More comprehensive example, wood texture applied to a Box.</caption>
 * new Box({
 *   geometry: {
 *     width: 2,
 *     height: 2,
 *     depth: 2
 *   },
 *   modules: [
 *     new TextureModule({
 *       url: `path/to/texture.jpg`,
 *       repeat: new THREE.Vector2(1, 1) // optional
 *     })
 *   ],
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *   position: [50, 60, 70]
 * }).addTo(app);
 */
var TextureModule = function () {
  createClass(TextureModule, null, [{
    key: 'load',
    value: function load(url) {
      return new TextureModule({ url: url }).textures[0][1];
    }
  }]);

  function TextureModule() {
    var _this = this;

    classCallCheck(this, TextureModule);
    this.textures = [];
    this.bridge = {
      material: function material(_material, self) {
        self.textures.forEach(function (texture) {
          _material[texture[0]] = texture[1];
        });

        return _material;
      }
    };

    for (var _len = arguments.length, textures = Array(_len), _key = 0; _key < _len; _key++) {
      textures[_key] = arguments[_key];
    }

    textures.forEach(function (_ref) {
      var url = _ref.url,
          _ref$type = _ref.type,
          type = _ref$type === undefined ? 'map' : _ref$type,
          _ref$offset = _ref.offset,
          offset = _ref$offset === undefined ? new three.Vector2(0, 0) : _ref$offset,
          _ref$repeat = _ref.repeat,
          repeat = _ref$repeat === undefined ? new three.Vector2(1, 1) : _ref$repeat,
          _ref$wrap = _ref.wrap,
          wrap = _ref$wrap === undefined ? three.RepeatWrapping : _ref$wrap,
          _ref$mapping = _ref.mapping,
          mapping = _ref$mapping === undefined ? three.UVMapping : _ref$mapping,
          _ref$fix = _ref.fix,
          fix = _ref$fix === undefined ? function (tex) {
        return tex;
      } : _ref$fix;

      var texture = loader.load(url);

      if (wrap.length > 0) {
        texture.wrapS = wrap[0];
        texture.wrapT = wrap[1];
      } else texture.wrapS = texture.wrapT = wrap;

      texture.mapping = mapping;

      texture.offset.copy(offset);
      texture.repeat.copy(repeat);

      texture.magFilter = three.NearestFilter;
      texture.minFilter = three.LinearMipMapLinearFilter;

      _this.textures.push([type, fix(texture)]);
    });
  }

  return TextureModule;
}();

/**
 * @class AnimationModule
 * @category modules/mesh
 * @description Convenience module that wraps the <a href='https://threejs.org/docs/#manual/introduction/Animation-system'>three.js animation system</a>
 * @param {App} app - the app
 * @param {Boolean} [isDeferred=false] - set to true if animation should not start automatically
 * @param {Object} [params={speed: 1}] - the params
 * @memberof module:modules/mesh
 * @example <caption>Create animation module and play a given clip of an imported model</caption>
 * const animationModule = new AnimationModule(app, false, {
 *   speed: 1.2 // speed up animation by 20%
 * });
 *
 * new Importer({
 *   parser(geometry, materials) {
 *     // Override parse to generate a skinnedMesh, needed for skinned models
 *     return new THREE.SkinnedMesh(geometry, materials);
 *   },
 *
 *   url: `path/to/model.json`,
 *   useCustomMaterial: true,
 *
 *   material: new THREE.MeshStandardMaterial({
 *     skinning: true
 *   }),
 *
 *   modules: [animationModule]
 * }).addTo(app).then(() => {
 *   // adding model to app returns a promise, so pipe the function to kick off the animation clip
 *   animationModule.play('clipName');
 * });
 */

var AnimationModule = function () {
  function AnimationModule(app, isDeferred) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, AnimationModule);
    this.bridge = {
      mesh: function mesh(_mesh, self) {
        _mesh.geometry.skeleton = _mesh.skeleton;

        self.mixer = new three.AnimationMixer(_mesh.geometry);
        self.clips = _mesh.geometry.animations;

        return _mesh;
      }
    };

    this.params = Object.assign({
      speed: 1
    }, params);
    this.clock = new three.Clock();

    this.app = app;
    this.isDeferred = isDeferred;
  }

  /**
   * @method play
   * @instance
   * @description Plays the given clip name
   * @param {String} clipName - the clip to play
   * @memberof module:modules/mesh.AnimationModule
   */


  createClass(AnimationModule, [{
    key: 'play',
    value: function play(clipName) {
      var clip = three.AnimationClip.findByName(this.clips, clipName);
      var action = this.mixer.clipAction(clip);

      action.play();
    }

    /**
     * @method update
     * @instance
     * @description Update the mixer (being called on frame animation loop)
     * @memberof module:modules/mesh.AnimationModule
     */

  }, {
    key: 'update',
    value: function update() {
      if (this.mixer) this.mixer.update(this.clock.getDelta() * this.params.speed);
    }
  }, {
    key: 'integrate',
    value: function integrate(self) {
      self.loop = new Loop(function () {
        self.update();
      });

      if (!self.isDeferred) self.loop.start(self.app);
    }
  }, {
    key: 'manager',
    value: function manager(_manager) {
      _manager.define('animation');
    }
  }]);
  return AnimationModule;
}();

/** @module modules/mesh */

/**
 * @class DefineModule
 * @category modules
 * @param {String} name
 * @param {Object} data
 * @memberof module:modules
 * @example <caption> Creating a DefineModule with PerspectiveCamera as camera module and passing it to App's modules</caption>
 * new App([
 *   // ...
 *   new DefineModule('camera', new PerspectiveCamera())
 * ]);
 */
var DefineModule = function () {
  function DefineModule(name, data) {
    classCallCheck(this, DefineModule);

    this.name = name;
    this.data = data;
  }

  createClass(DefineModule, [{
    key: "manager",
    value: function manager(_manager) {
      _manager.set(this.name, this.data);
    }
  }]);
  return DefineModule;
}();

/** @module modules */

var Model = function (_Importer) {
  inherits(Model, _Importer);

  function Model(params) {
    var _ref;

    classCallCheck(this, Model);

    console.warn('Model is deprecated. Use Importer instead.');

    if (params.geometry) {
      params.url = params.geometry.path;
      params.loader = params.geometry.loader;
    }

    for (var _len = arguments.length, additional = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      additional[_key - 1] = arguments[_key];
    }

    return possibleConstructorReturn(this, (_ref = Model.__proto__ || Object.getPrototypeOf(Model)).call.apply(_ref, [this, params].concat(additional)));
  }

  return Model;
}(Importer);

var CameraModule = function () {
  function CameraModule() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, CameraModule);

    console.warn('CameraModule is deprecated. Use DefineModule instead.');
    this.camera = new PerspectiveCamera$1(params);
  }

  createClass(CameraModule, [{
    key: 'integrate',
    value: function integrate(self) {
      this.add(self.camera);
    }
  }, {
    key: 'manager',
    value: function manager(_manager) {
      _manager.set('camera', this.camera);
    }
  }]);
  return CameraModule;
}();

/**
 * Namespace containing all classes from all modules. Used as global in UMD pattern.
 * @namespace WHS
 * @example <caption>The use of WHS namespace.</caption>
 * new WHS.App() // core
 * new WHS.PerspectiveCamera() // components
 * new WHS.ResizeModule() // modules
 * WHS.extend() // utils
 */

exports.Component = Component;
exports.MeshComponent = MeshComponent;
exports.LightComponent = LightComponent;
exports.CameraComponent = CameraComponent;
exports.App = App;
exports.Loop = Loop;
exports.ModuleManager = ModuleManager;
exports.AmbientLight = AmbientLight$1;
exports.DirectionalLight = DirectionalLight$1;
exports.HemisphereLight = HemisphereLight$1;
exports.PointLight = PointLight$1;
exports.SpotLight = SpotLight$1;
exports.AreaLight = AreaLight;
exports.CubeCamera = CubeCamera$1;
exports.OrthographicCamera = OrthographicCamera$1;
exports.PerspectiveCamera = PerspectiveCamera$1;
exports.Box = Box;
exports.Circle = Circle;
exports.Cone = Cone;
exports.Cylinder = Cylinder;
exports.Dodecahedron = Dodecahedron;
exports.Extrude = Extrude;
exports.Icosahedron = Icosahedron;
exports.Lathe = Lathe;
exports.Line = Line$1;
exports.Importer = Importer;
exports.Octahedron = Octahedron;
exports.Parametric = Parametric;
exports.Plane = Plane$1;
exports.Polyhedron = Polyhedron;
exports.Ring = Ring;
exports.Shape = Shape;
exports.Sphere = Sphere;
exports.Tetrahedron = Tetrahedron;
exports.Text = Text;
exports.Torus = Torus;
exports.Torusknot = Torusknot;
exports.Tube = Tube;
exports.Group = Group;
exports.extend = extend;
exports.instruct = instruct;
exports.transformData = transformData;
exports.toArray = toArray;
exports.ElementModule = ElementModule;
exports.RenderingModule = RenderingModule;
exports.SceneModule = SceneModule;
exports.ResizeModule = ResizeModule;
exports.PostProcessorModule = PostProcessorModule;
exports.VirtualMouseModule = VirtualMouseModule;
exports.EventsPatchModule = EventsPatchModule;
exports.ControlsModule = ControlsModule;
exports.FogModule = FogModule;
exports.StateModule = StateModule;
exports.OrbitControlsModule = OrbitControlsModule;
exports.DynamicGeometryModule = DynamicGeometryModule;
exports.TextureModule = TextureModule;
exports.AnimationModule = AnimationModule;
exports.DefineModule = DefineModule;
exports.Model = Model;
exports.CameraModule = CameraModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hzLmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvZXh0ZW5kLmpzIiwiLi4vc3JjL3V0aWxzL3RyYW5zZm9ybURhdGEuanMiLCIuLi9ub2RlX21vZHVsZXMvbWluaXZlbnRzL2Rpc3QvbWluaXZlbnRzLmNvbW1vbmpzLmpzIiwiLi4vc3JjL2NvcmUvZXJyb3JzLmpzIiwiLi4vc3JjL2NvcmUvTW9kdWxlU3lzdGVtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZnJlZUdsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3Jvb3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TeW1ib2wuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRSYXdUYWcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vdmVyQXJnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UHJvdG90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdExpa2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvcG9ueWZpbGwuanMiLCIuLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY3JlYXRlU3RvcmUuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9jb21wb3NlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2luZGV4LmpzIiwiLi4vc3JjL2NvcmUvTW9kdWxlTWFuYWdlci5qcyIsIi4uL3NyYy9jb3JlL0NvbXBvbmVudC5qcyIsIi4uL3NyYy9jb3JlL3Byb3RvdHlwZS9hdHRyaWJ1dGVzLmpzIiwiLi4vc3JjL2NvcmUvTWVzaENvbXBvbmVudC5qcyIsIi4uL3NyYy9jb3JlL0xpZ2h0Q29tcG9uZW50LmpzIiwiLi4vc3JjL2NvcmUvQ2FtZXJhQ29tcG9uZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZXNlbnQvbGliL3ByZXNlbnQtbm9kZS5qcyIsIi4uL3NyYy9wb2x5ZmlsbC5qcyIsIi4uL3NyYy9jb3JlL0FwcC5qcyIsIi4uL3NyYy9jb3JlL0xvb3AuanMiLCIuLi9zcmMvY29yZS9pbmRleC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL2xpZ2h0cy9BbWJpZW50TGlnaHQuanMiLCIuLi9zcmMvY29tcG9uZW50cy9saWdodHMvRGlyZWN0aW9uYWxMaWdodC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL2xpZ2h0cy9IZW1pc3BoZXJlTGlnaHQuanMiLCIuLi9zcmMvY29tcG9uZW50cy9saWdodHMvUG9pbnRMaWdodC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL2xpZ2h0cy9TcG90TGlnaHQuanMiLCIuLi9zcmMvY29tcG9uZW50cy9saWdodHMvQXJlYUxpZ2h0LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbGlnaHRzL2luZGV4LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvY2FtZXJhcy9DdWJlQ2FtZXJhLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvY2FtZXJhcy9PcnRob2dyYXBoaWNDYW1lcmEuanMiLCIuLi9zcmMvY29tcG9uZW50cy9jYW1lcmFzL1BlcnNwZWN0aXZlQ2FtZXJhLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvY2FtZXJhcy9pbmRleC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL21lc2hlcy9Cb3guanMiLCIuLi9zcmMvY29tcG9uZW50cy9tZXNoZXMvQ2lyY2xlLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbWVzaGVzL0NvbmUuanMiLCIuLi9zcmMvY29tcG9uZW50cy9tZXNoZXMvQ3lsaW5kZXIuanMiLCIuLi9zcmMvY29tcG9uZW50cy9tZXNoZXMvRG9kZWNhaGVkcm9uLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbWVzaGVzL0V4dHJ1ZGUuanMiLCIuLi9zcmMvY29tcG9uZW50cy9tZXNoZXMvSWNvc2FoZWRyb24uanMiLCIuLi9zcmMvY29tcG9uZW50cy9tZXNoZXMvTGF0aGUuanMiLCIuLi9zcmMvY29tcG9uZW50cy9tZXNoZXMvTGluZS5qcyIsIi4uL3NyYy9jb21wb25lbnRzL21lc2hlcy9JbXBvcnRlci5qcyIsIi4uL3NyYy9jb21wb25lbnRzL21lc2hlcy9PY3RhaGVkcm9uLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbWVzaGVzL1BhcmFtZXRyaWMuanMiLCIuLi9zcmMvY29tcG9uZW50cy9tZXNoZXMvUGxhbmUuanMiLCIuLi9zcmMvY29tcG9uZW50cy9tZXNoZXMvUG9seWhlZHJvbi5qcyIsIi4uL3NyYy9jb21wb25lbnRzL21lc2hlcy9SaW5nLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbWVzaGVzL1NoYXBlLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbWVzaGVzL1NwaGVyZS5qcyIsIi4uL3NyYy9jb21wb25lbnRzL21lc2hlcy9UZXRyYWhlZHJvbi5qcyIsIi4uL3NyYy9jb21wb25lbnRzL21lc2hlcy9UZXh0LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbWVzaGVzL1RvcnVzLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbWVzaGVzL1RvcnVza25vdC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL21lc2hlcy9UdWJlLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbWVzaGVzL0dyb3VwLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbWVzaGVzL2luZGV4LmpzIiwiLi4vc3JjL21vZHVsZXMvYXBwL0VsZW1lbnRNb2R1bGUuanMiLCIuLi9zcmMvbW9kdWxlcy9hcHAvUmVuZGVyaW5nTW9kdWxlLmpzIiwiLi4vc3JjL21vZHVsZXMvYXBwL1NjZW5lTW9kdWxlLmpzIiwiLi4vc3JjL21vZHVsZXMvYXBwL1Jlc2l6ZU1vZHVsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvbWF0ZXJpYWxzL2FkYXB0aXZlLWx1bWlub3NpdHkuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL21hdGVyaWFscy9ib2tlaC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvbWF0ZXJpYWxzL2Jva2VoMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvbWF0ZXJpYWxzL2NvbWJpbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL21hdGVyaWFscy9jb252b2x1dGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvbWF0ZXJpYWxzL2NvcHkuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL21hdGVyaWFscy9kZXB0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvbWF0ZXJpYWxzL2RvdC1zY3JlZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL21hdGVyaWFscy9maWxtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9tYXRlcmlhbHMvZ2xpdGNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9tYXRlcmlhbHMvZ29kLXJheXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL21hdGVyaWFscy9sdW1pbm9zaXR5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9tYXRlcmlhbHMvcGl4ZWxhdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvbWF0ZXJpYWxzL3Nob2NrLXdhdmUuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL21hdGVyaWFscy9zbWFhLWJsZW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9tYXRlcmlhbHMvc21hYS1jb2xvci1lZGdlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvbWF0ZXJpYWxzL3NtYWEtd2VpZ2h0cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvbWF0ZXJpYWxzL3RvbmUtbWFwcGluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvbWF0ZXJpYWxzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvcGFzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvcGFzc2VzL2JsdXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL3Bhc3Nlcy9ibG9vbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvcGFzc2VzL2Jva2VoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvYm9rZWgyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvY2xlYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL3Bhc3Nlcy9jbGVhci1tYXNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvZG90LXNjcmVlbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvcGFzc2VzL2RlcHRoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvZmlsbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvcGFzc2VzL2dsaXRjaC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvcGFzc2VzL3JlbmRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvcGFzc2VzL2dvZC1yYXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvbWFzay5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvcGFzc2VzL3BpeGVsYXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL3Bhc3Nlcy9zYXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvc2hhZGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvc2hvY2std2F2ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvcGFzc2VzL3NtYWEuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL3Bhc3Nlcy90ZXh0dXJlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvdG9uZS1tYXBwaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL2NvcmUvZWZmZWN0LWNvbXBvc2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9jb3JlL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9pbmRleC5qcyIsIi4uL3NyYy9tb2R1bGVzL2FwcC9Qb3N0UHJvY2Vzc29yTW9kdWxlLmpzIiwiLi4vc3JjL21vZHVsZXMvYXBwL0V2ZW50c1BhdGNoTW9kdWxlLmpzIiwiLi4vc3JjL21vZHVsZXMvYXBwL1ZpcnR1YWxNb3VzZU1vZHVsZS5qcyIsIi4uL3NyYy9tb2R1bGVzL2FwcC9Db250cm9sc01vZHVsZS5qcyIsIi4uL3NyYy9tb2R1bGVzL2FwcC9Gb2dNb2R1bGUuanMiLCIuLi9zcmMvbW9kdWxlcy9hcHAvU3RhdGVNb2R1bGUuanMiLCIuLi9zcmMvbW9kdWxlcy9hcHAvY29udHJvbHMvbGliL1RocmVlT3JiaXRDb250cm9scy5qcyIsIi4uL3NyYy9tb2R1bGVzL2FwcC9jb250cm9scy9PcmJpdENvbnRyb2xzTW9kdWxlLmpzIiwiLi4vc3JjL21vZHVsZXMvYXBwL2NvbnRyb2xzL2luZGV4LmpzIiwiLi4vc3JjL21vZHVsZXMvYXBwL2luZGV4LmpzIiwiLi4vc3JjL21vZHVsZXMvbWVzaC9EeW5hbWljR2VvbWV0cnlNb2R1bGUuanMiLCIuLi9zcmMvbW9kdWxlcy9tZXNoL1RleHR1cmVNb2R1bGUuanMiLCIuLi9zcmMvbW9kdWxlcy9tZXNoL0FuaW1hdGlvbk1vZHVsZS5qcyIsIi4uL3NyYy9tb2R1bGVzL21lc2gvaW5kZXguanMiLCIuLi9zcmMvbW9kdWxlcy9EZWZpbmVNb2R1bGUuanMiLCIuLi9zcmMvbW9kdWxlcy9pbmRleC5qcyIsIi4uL3NyYy9kZXByZWNhdGlvbi5qcyIsIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZXh0ZW5kID0gKG9iamVjdCwgLi4uZXh0ZW5zaW9ucykgPT4geyAvLyAkLmV4dGVuZCBhbHRlcm5hdGl2ZSwgLi4uIGlzIHRoZSBzcHJlYWQgb3BlcmF0b3IuXG4gIGZvciAoY29uc3QgZXh0ZW5zaW9uIG9mIGV4dGVuc2lvbnMpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhleHRlbnNpb24pO1xuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiBleHRlbnNpb24pO1xuXG4gICAgaWYgKCFleHRlbnNpb24pXG4gICAgICBjb250aW51ZTsgLy8gSWdub3JlIG51bGwgYW5kIHVuZGVmaW5lZCBvYmplY3RzIGFuZCBwYXJhbWV0ZXJzLlxuXG4gICAgZm9yIChjb25zdCBwcm9wIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGV4dGVuc2lvbikpIHsgLy8gRG8gbm90IHRyYXZlcnNlIHRoZSBwcm90b3R5cGUgY2hhaW4uXG4gICAgICBpZiAob2JqZWN0W3Byb3BdICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgb2JqZWN0W3Byb3BdLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IE9iamVjdF0nXG4gICAgICAgICYmIGV4dGVuc2lvbltwcm9wXS50b1N0cmluZygpID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICAvLyBHb2VzIGRlZXAgb25seSBpZiBvYmplY3RbcHJvcF0gYW5kIGV4dGVuc2lvbltwcm9wXSBhcmUgYm90aCBvYmplY3RzICFcbiAgICAgICAgaWYgKGV4dGVuc2lvbltwcm9wXS51dWlkKSBvYmplY3RbcHJvcF0gPSBleHRlbnNpb25bcHJvcF07XG4gICAgICAgIGVsc2UgZXh0ZW5kKG9iamVjdFtwcm9wXSwgZXh0ZW5zaW9uW3Byb3BdKTtcbiAgICAgIH0gZWxzZVxuICAgICAgICBvYmplY3RbcHJvcF0gPSB0eXBlb2Ygb2JqZWN0W3Byb3BdID09PSAndW5kZWZpbmVkJyA/IGV4dGVuc2lvbltwcm9wXSA6IG9iamVjdFtwcm9wXTtcblxuICAgICAgaWYgKHR5cGVvZiBvYmplY3RbcHJvcF0gPT09ICd1bmRlZmluZWQnICYmIEFycmF5LmlzQXJyYXkoZXh0ZW5zaW9uW3Byb3BdKSkgb2JqZWN0W3Byb3BdID0gZXh0ZW5zaW9uW3Byb3BdLnNsaWNlKCk7IC8vIEFkZCB2YWx1ZXMgdGhhdCBkbyBub3QgYWxyZWFkeSBleGlzdC5cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBvYmplY3RbcHJvcF0gPT09ICd1bmRlZmluZWQnICYmIEFycmF5LmlzQXJyYXkoZXh0ZW5zaW9uW3Byb3BdKSkgb2JqZWN0W3Byb3BdID0gZXh0ZW5zaW9uW3Byb3BdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGluc3RydWN0ID0gKGFycmF5LCBpbnN0QXJyYXkpID0+IHtcbiAgY29uc3QgdGVtcE9iamVjdCA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwLCBtYXggPSBpbnN0QXJyYXkubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICBjb25zdCBndWlkZSA9IGluc3RBcnJheVtpXTtcblxuICAgIHRlbXBPYmplY3RbZ3VpZGVdID0gYXJyYXlbaV07XG4gIH1cblxuICByZXR1cm4gdGVtcE9iamVjdDtcbn07XG5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1EYXRhID0gKG9iamVjdCwgaW5zdHJ1Y3Rpb25zKSA9PiB7XG4gIGZvciAoY29uc3Qga2V5IGluIGluc3RydWN0aW9ucykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdFtrZXldKSlcbiAgICAgIG9iamVjdFtrZXldID0gaW5zdHJ1Y3Qob2JqZWN0W2tleV0sIGluc3RydWN0aW9uc1trZXldKTtcbiAgICBlbHNlIGlmIChvYmplY3Rba2V5XSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKEFycmF5LmlzQXJyYXkoaW5zdHJ1Y3Rpb25zW2tleV0pKSlcbiAgICAgIG9iamVjdFtrZXldID0gdHJhbnNmb3JtRGF0YShvYmplY3Rba2V5XSwgaW5zdHJ1Y3Rpb25zW2tleV0pO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cbmV4cG9ydCBjb25zdCB0b0FycmF5ID0gKG9iamVjdCwgaW5zdHJ1Y3Rpb24pID0+IHtcbiAgY29uc3QgdGVtcEFycmF5ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIG1heCA9IGluc3RydWN0aW9uLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG4gICAgY29uc3QgZ3VpZGUgPSBpbnN0cnVjdGlvbltpXTtcblxuICAgIHRlbXBBcnJheVtpXSA9IG9iamVjdFtndWlkZV07XG4gIH1cblxuICByZXR1cm4gdGVtcEFycmF5O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gRXZlbnRzKHRhcmdldCl7XG4gIHZhciBldmVudHMgPSB7fSwgZW1wdHkgPSBbXTtcbiAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHRoaXNcbiAgLyoqXG4gICAqICBPbjogbGlzdGVuIHRvIGV2ZW50c1xuICAgKi9cbiAgdGFyZ2V0Lm9uID0gZnVuY3Rpb24odHlwZSwgZnVuYywgY3R4KXtcbiAgICAoZXZlbnRzW3R5cGVdID0gZXZlbnRzW3R5cGVdIHx8IFtdKS5wdXNoKFtmdW5jLCBjdHhdKVxuICB9XG4gIC8qKlxuICAgKiAgT2ZmOiBzdG9wIGxpc3RlbmluZyB0byBldmVudCAvIHNwZWNpZmljIGNhbGxiYWNrXG4gICAqL1xuICB0YXJnZXQub2ZmID0gZnVuY3Rpb24odHlwZSwgZnVuYyl7XG4gICAgdHlwZSB8fCAoZXZlbnRzID0ge30pXG4gICAgdmFyIGxpc3QgPSBldmVudHNbdHlwZV0gfHwgZW1wdHksXG4gICAgICAgIGkgPSBsaXN0Lmxlbmd0aCA9IGZ1bmMgPyBsaXN0Lmxlbmd0aCA6IDA7XG4gICAgd2hpbGUoaS0tKSBmdW5jID09IGxpc3RbaV1bMF0gJiYgbGlzdC5zcGxpY2UoaSwxKVxuICB9XG4gIC8qKiBcbiAgICogRW1pdDogc2VuZCBldmVudCwgY2FsbGJhY2tzIHdpbGwgYmUgdHJpZ2dlcmVkXG4gICAqL1xuICB0YXJnZXQuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpe1xuICAgIHZhciBlID0gZXZlbnRzW3R5cGVdIHx8IGVtcHR5LCBsaXN0ID0gZS5sZW5ndGggPiAwID8gZS5zbGljZSgwLCBlLmxlbmd0aCkgOiBlLCBpPTAsIGo7XG4gICAgd2hpbGUoaj1saXN0W2krK10pIGpbMF0uYXBwbHkoalsxXSwgZW1wdHkuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKVxuICB9O1xufTsiLCJleHBvcnQgY2xhc3MgQ29tcG9zaXRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoY2xhc3NJbnN0YW5jZSwgbWVzc2FnZSwgY29tcG9uZW50KSB7XG4gICAgc3VwZXIoYEAke2NsYXNzSW5zdGFuY2V9OiAke21lc3NhZ2V9YCk7XG5cbiAgICBjb25zdCBzdGFja0FycmF5ID0gdGhpcy5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgc3RhY2tBcnJheS5zcGxpY2UoMSwgMik7XG5cbiAgICB0aGlzLnN0YWNrID0gc3RhY2tBcnJheS5qb2luKCdcXG4nKTtcblxuICAgIGlmICghcHJvY2VzcykgY29uc29sZS5lcnJvcignQ29tcG9uZW50OicsIGNvbXBvbmVudCk7XG5cbiAgICB0aGlzLm5hbWUgPSAnQ29tcG9zaXRpb25FcnJvcic7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3lFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoY2xhc3NJbnN0YW5jZSwgbWVzc2FnZSwgYWN0aXZlTW9kdWxlLCBkZXBlbmRlbmN5TW9kdWxlID0gZmFsc2UpIHtcbiAgICBzdXBlcihgQCR7Y2xhc3NJbnN0YW5jZX06ICR7bWVzc2FnZX1gKTtcblxuICAgIGNvbnN0IHN0YWNrQXJyYXkgPSB0aGlzLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICBzdGFja0FycmF5LnNwbGljZSgxLCAyKTtcblxuICAgIHRoaXMuc3RhY2sgPSBzdGFja0FycmF5LmpvaW4oJ1xcbicpO1xuXG4gICAgaWYgKCFwcm9jZXNzKSBjb25zb2xlLmVycm9yKCdBY3RpdmUgbW9kdWxlOicsIGFjdGl2ZU1vZHVsZSk7XG4gICAgaWYgKCFwcm9jZXNzICYmIGRlcGVuZGVuY3lNb2R1bGUpIGNvbnNvbGUuZXJyb3IoJ0RlcGVuZGVuY3kgcHVibGlzaGVkIGJ5IG1vZHVsZTonLCBkZXBlbmRlbmN5TW9kdWxlKTtcblxuICAgIHRoaXMubmFtZSA9ICdEZXBlbmRlbmN5RXJyb3InO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYW5hZ2VyRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGNsYXNzSW5zdGFuY2UsIG1lc3NhZ2UsIGNvbXBvbmVudCwgYWN0aXZlTW9kdWxlID0gZmFsc2UpIHtcbiAgICBzdXBlcihgQCR7Y2xhc3NJbnN0YW5jZX06ICR7bWVzc2FnZX1gKTtcblxuICAgIGNvbnN0IHN0YWNrQXJyYXkgPSB0aGlzLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICBzdGFja0FycmF5LnNwbGljZSgxLCAyKTtcblxuICAgIHRoaXMuc3RhY2sgPSBzdGFja0FycmF5LmpvaW4oJ1xcbicpO1xuXG4gICAgaWYgKCFwcm9jZXNzKSBjb25zb2xlLmVycm9yKCdDb21wb25lbnQ6JywgZGVwZW5kZW5jeU1vZHVsZSk7XG4gICAgaWYgKCFwcm9jZXNzICYmIGFjdGl2ZU1vZHVsZSkgY29uc29sZS5lcnJvcignQWN0aXZlIG1vZHVsZTonLCBhY3RpdmVNb2R1bGUpO1xuXG4gICAgdGhpcy5uYW1lID0gJ01hbmFnZXJFcnJvcic7XG4gIH1cbn1cbiIsImltcG9ydCB7UkVWSVNJT059IGZyb20gJ3RocmVlJztcbmltcG9ydCBFdmVudHMgZnJvbSAnbWluaXZlbnRzJztcbmltcG9ydCB7TWFuYWdlckVycm9yfSBmcm9tICcuL2Vycm9ycyc7XG5cbi8vIENoZWNrIGZvciBUaHJlZS5qc1xuY29uc3Qgd2FybkRlcHMgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcignV2hpdGVzdG9ybUpTIEZyYW1ld29yayByZXF1aXJlcyBUaHJlZS5qcyByODQuIGh0dHBzOi8vdGhyZWVqcy5vcmcvJyk7XG59O1xuXG50cnkge1xuICBpZiAoIVJFVklTSU9OKSB3YXJuRGVwcygpO1xufSBjYXRjaCAoZXJyKSB7XG4gIHdhcm5EZXBzKCk7XG59XG5cbi8qKlxuICogQGNsYXNzIE1vZHVsZVN5c3RlbVxuICogQGNhdGVnb3J5IGNvcmVcbiAqIEBkZXNjcmlwdGlvbiAgUHJvdmlkZXMgQVBJIGZvciBjbGFzc2VzIHRoYXQgd2lsbCB1c2UgTW9kdWxlcy48YnIvPlxuICogVGhpcyBjbGFzcyBpbmNsdWRlcyBiYXNpYyBldmVudCBzeXN0ZW0gd2l0aCB0aG9zZSBzdXBwb3J0ZWQgbWV0aG9kczpcbiAqIDxwcmU+Lm9uKCk8L3ByZT48cHJlPi5vZmYoKTwvcHJlPjxwcmU+LmVtaXQoKTwvcHJlPlxuICogQGV4dGVuZHMgRXZlbnRzXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqL1xuZXhwb3J0IGNsYXNzIE1vZHVsZVN5c3RlbSBleHRlbmRzIEV2ZW50cyB7XG4gIC8vIElOVEVHUkFUSU5HXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgaW50ZWdyYXRlTW9kdWxlc1xuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgbWV0aG9kIGFwcGxpZXMgYWxsIG1vZHVsZXMgZnJvbSAubW9kdWxlcyBjb2xsZWN0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW3NvdXJjZV0gSWYgc291cmNlIChzaG91bGQgYmUgYSBjb21wb25lbnQpIGlzIHByb3ZpZGVkLCB3aWxsIHJlcGxhY2UgLm1vZHVsZXMgd2l0aCBzb3VyY2UncyBvbmUgYmVmb3JlIGV4ZWN1dGluZyBtb2R1bGVzLlxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTW9kdWxlU3lzdGVtXG4gICAqL1xuICBpbnRlZ3JhdGVNb2R1bGVzKHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2UpIHRoaXMubW9kdWxlcyA9IHNvdXJjZS5tb2R1bGVzLnNsaWNlKDApO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIG1heCA9IHRoaXMubW9kdWxlcy5sZW5ndGg7IGkgPCBtYXg7IGkrKylcbiAgICAgIHRoaXMuYXBwbHlNb2R1bGUodGhpcy5tb2R1bGVzW2ldLCBmYWxzZSk7XG5cbiAgICBpZiAoc291cmNlKSB0aGlzLmFwcGx5QnJpZGdlKHtvbkNvcHk6IHNvdXJjZX0pO1xuICB9XG5cbiAgLy8gQVBQTFlJTkcgTU9EVUxFICguLi5hbmQgYSBcImJyaWRnZVwiIGZvciBtb2R1bGUpXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYXBwbHlCcmlkZ2VcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBNYWtlcyBjb21wb25lbnQtc3BlY2lmaWMgQVBJIHRvIHdvcmsgd2l0aCBtb2R1bGVzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gYnJpZGdlTWFwXG4gICAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyBvYmplY3Qgd2l0aCBtb2RpZmllZCB2YWx1ZXMuXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Nb2R1bGVTeXN0ZW1cbiAgICovXG4gIGFwcGx5QnJpZGdlKGJyaWRnZU1hcCA9IHt9KSB7XG4gICAgY29uc3QgbW9kdWxlcyA9IHRoaXMubW9kdWxlcztcblxuICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBtb2R1bGVzLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBicmlkZ2VNYXApIHtcbiAgICAgICAgaWYgKGJyaWRnZU1hcFtrZXldKSB7XG4gICAgICAgICAgY29uc3QgbW9kdWxlID0gbW9kdWxlc1tpXTtcblxuICAgICAgICAgIGlmIChtb2R1bGUgJiYgbW9kdWxlLmJyaWRnZSAmJiBtb2R1bGUuYnJpZGdlW2tleV0pXG4gICAgICAgICAgICBicmlkZ2VNYXBba2V5XSA9IG1vZHVsZS5icmlkZ2Vba2V5XS5hcHBseSh0aGlzLCBbYnJpZGdlTWFwW2tleV0sIG1vZHVsZV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJyaWRnZU1hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGFwcGx5TW9kdWxlXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gLmFwcGx5TW9kdWxlIGlzIGFsc28gdXNlZCBpbiAuaW50ZWdyYXRlTW9kdWxlcygpIGZ1bmN0aW9uLlxuICAgKiBJdCBkb2VzIGV4YWN0bHkgd2hhdCBpdHMgbmFtZSBzYXlzIChhcHBsaWVzIG1vZHVsZSB0byBjb21wb25lbnQgb3IgYXBwKS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG1vZHVsZSB0aGUgbW9kdWxlIHRvIGFwcGx5XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3B1c2g9dHJ1ZV1cbiAgICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIG1vZHVsZSB0aGF0IHdhcyBhcHBsaWVkLlxuICAgKiBAdGhyb3dzIHtNYW5hZ2VyRXJyb3J9XG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Nb2R1bGVTeXN0ZW1cbiAgICovXG4gIGFwcGx5TW9kdWxlKG1vZHVsZSwgcHVzaCA9IHRydWUpIHtcbiAgICBpZiAoIW1vZHVsZSkgcmV0dXJuO1xuICAgIGlmIChwdXNoKSB0aGlzLm1vZHVsZXMucHVzaChtb2R1bGUpO1xuXG4gICAgaWYgKHRoaXMubWFuYWdlcikgdGhpcy5tYW5hZ2VyLmFjdGl2ZShtb2R1bGUpO1xuXG4gICAgaWYgKG1vZHVsZS5tYW5hZ2VyICYmIHRoaXMubWFuYWdlcikgbW9kdWxlLm1hbmFnZXIodGhpcy5tYW5hZ2VyKTtcbiAgICBlbHNlIGlmIChtb2R1bGUubWFuYWdlcikge1xuICAgICAgdGhyb3cgbmV3IE1hbmFnZXJFcnJvcihcbiAgICAgICAgJ0NvbXBvbmVudCcsXG4gICAgICAgIGBNb2R1bGUgcmVxdWlyZXMgTW9kdWxlTWFuYWdlciB0aGF0IGlzIHR1cm5lZCBvZmYgZm9yIHRoaXMgY29tcG9uZW50YCxcbiAgICAgICAgdGhpcywgbW9kdWxlXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChtb2R1bGUuaW50ZWdyYXRlKSBtb2R1bGUuaW50ZWdyYXRlLmJpbmQodGhpcykobW9kdWxlKTtcblxuICAgIHJldHVybiBtb2R1bGU7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBkaXNwb3NlTW9kdWxlc1xuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIERpc3Bvc2VzIG9mIGFsbCBtb2R1bGVzXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Nb2R1bGVTeXN0ZW1cbiAgICovXG4gIGRpc3Bvc2VNb2R1bGVzKCkge1xuICAgIHdoaWxlICh0aGlzLm1vZHVsZXMubGVuZ3RoKVxuICAgICAgdGhpcy5kaXNwb3NlTW9kdWxlKHRoaXMubW9kdWxlc1swXSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBkaXNwb3NlTW9kdWxlXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gRGlzcG9zZXMgb2YgdGhlIGdpdmVuIG1vZHVsZVxuICAgKiBAcGFyYW0ge09iamVjdH0gbW9kdWxlIHRoZSBtb2R1bGUgdG8gZGlzcG9zZVxuICAgKiBAcmV0dXJuIHtNb2R1bGV9IFJldHVybnMgbW9kdWxlIHRoYXQgd2FzIHJlbW92ZWQuXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Nb2R1bGVTeXN0ZW1cbiAgICovXG4gIGRpc3Bvc2VNb2R1bGUobW9kdWxlKSB7XG4gICAgaWYgKCFtb2R1bGUpIHJldHVybjtcblxuICAgIHRoaXMubW9kdWxlcy5zcGxpY2UodGhpcy5tb2R1bGVzLmluZGV4T2YobW9kdWxlKSwgMSk7XG5cbiAgICBpZiAobW9kdWxlLmRpc3Bvc2UpIG1vZHVsZS5kaXNwb3NlLmJpbmQodGhpcykobW9kdWxlKTtcblxuICAgIHJldHVybiBtb2R1bGU7XG4gIH1cblxuICAvLyBQSVBFRCBNRVRIT0RcblxuICAvKipcbiAgICogQG1ldGhvZCBtb2R1bGVcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBwaXBlZCB2ZXJzaW9uIG9mIC5hcHBseU1vZHVsZSgpLlxuICAgKiBAcGFyYW0ge09iamVjdH0gbW9kdWxlIHRoZSBtb2R1bGUgdG8gYXBwbHlcbiAgICogQHJldHVybiB7dGhpc30gcmV0dXJucyB0aGlzIC0gYXBwL2NvbXBvbmVudFxuICAgKiBAdGhyb3dzIHtNYW5hZ2VyRXJyb3J9XG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Nb2R1bGVTeXN0ZW1cbiAgICogQGV4YW1wbGUgPGNhcHRpb24+UGlwZWQgbW9kdWxlczwvY2FwdGlvbj5cbiAgICogY29tcG9uZW50XG4gICAqICAgLm1vZHVsZShuZXcgTW9kdWxlMSgpKVxuICAgKiAgIC5tb2R1bGUobmV3IE1vZHVsZTIoKSlcbiAgICogICAubW9kdWxlKG5ldyBNb2R1bGUzKCkpXG4gICAqL1xuICBtb2R1bGUobW9kdWxlKSB7XG4gICAgdGhpcy5hcHBseU1vZHVsZShtb2R1bGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5leHBvcnQgZGVmYXVsdCBmcmVlR2xvYmFsO1xuIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdDtcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuZXhwb3J0IGRlZmF1bHQgU3ltYm9sO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvYmplY3RUb1N0cmluZztcbiIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcbmltcG9ydCBnZXRSYXdUYWcgZnJvbSAnLi9fZ2V0UmF3VGFnLmpzJztcbmltcG9ydCBvYmplY3RUb1N0cmluZyBmcm9tICcuL19vYmplY3RUb1N0cmluZy5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG92ZXJBcmc7XG4iLCJpbXBvcnQgb3ZlckFyZyBmcm9tICcuL19vdmVyQXJnLmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFByb3RvdHlwZTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdExpa2U7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBnZXRQcm90b3R5cGUgZnJvbSAnLi9fZ2V0UHJvdG90eXBlLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzUGxhaW5PYmplY3Q7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2woJ29ic2VydmFibGUnKTtcblx0XHRcdFN5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IHBvbnlmaWxsIGZyb20gJy4vcG9ueWZpbGwnO1xuXG52YXIgcm9vdDtcblxuaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gc2VsZjtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IG1vZHVsZTtcbn0gZWxzZSB7XG4gIHJvb3QgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xufVxuXG52YXIgcmVzdWx0ID0gcG9ueWZpbGwocm9vdCk7XG5leHBvcnQgZGVmYXVsdCByZXN1bHQ7XG4iLCJpbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gtZXMvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgJCRvYnNlcnZhYmxlIGZyb20gJ3N5bWJvbC1vYnNlcnZhYmxlJztcblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbmV4cG9ydCB2YXIgQWN0aW9uVHlwZXMgPSB7XG4gIElOSVQ6ICdAQHJlZHV4L0lOSVQnXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBSZWR1eCBzdG9yZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSB0cmVlLlxuICAgKiBUaGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBkYXRhIGluIHRoZSBzdG9yZSBpcyB0byBjYWxsIGBkaXNwYXRjaCgpYCBvbiBpdC5cbiAgICpcbiAgICogVGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgc3RvcmUgaW4geW91ciBhcHAuIFRvIHNwZWNpZnkgaG93IGRpZmZlcmVudFxuICAgKiBwYXJ0cyBvZiB0aGUgc3RhdGUgdHJlZSByZXNwb25kIHRvIGFjdGlvbnMsIHlvdSBtYXkgY29tYmluZSBzZXZlcmFsIHJlZHVjZXJzXG4gICAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbmV4dCBzdGF0ZSB0cmVlLCBnaXZlblxuICAgKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IFtwcmVsb2FkZWRTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gICAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gICAqIHByZXZpb3VzbHkgc2VyaWFsaXplZCB1c2VyIHNlc3Npb24uXG4gICAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAgICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2VuaGFuY2VyXSBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gICAqIHRvIGVuaGFuY2UgdGhlIHN0b3JlIHdpdGggdGhpcmQtcGFydHkgY2FwYWJpbGl0aWVzIHN1Y2ggYXMgbWlkZGxld2FyZSxcbiAgICogdGltZSB0cmF2ZWwsIHBlcnNpc3RlbmNlLCBldGMuIFRoZSBvbmx5IHN0b3JlIGVuaGFuY2VyIHRoYXQgc2hpcHMgd2l0aCBSZWR1eFxuICAgKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICAgKlxuICAgKiBAcmV0dXJucyB7U3RvcmV9IEEgUmVkdXggc3RvcmUgdGhhdCBsZXRzIHlvdSByZWFkIHRoZSBzdGF0ZSwgZGlzcGF0Y2ggYWN0aW9uc1xuICAgKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gICAqL1xufTtleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgdmFyIF9yZWYyO1xuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIGVuaGFuY2VyID0gcHJlbG9hZGVkU3RhdGU7XG4gICAgcHJlbG9hZGVkU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGVuaGFuY2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSByZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgY3VycmVudFJlZHVjZXIgPSByZWR1Y2VyO1xuICB2YXIgY3VycmVudFN0YXRlID0gcHJlbG9hZGVkU3RhdGU7XG4gIHZhciBjdXJyZW50TGlzdGVuZXJzID0gW107XG4gIHZhciBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycztcbiAgdmFyIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHJldHVybnMge2FueX0gVGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hhbmdlIGxpc3RlbmVyLiBJdCB3aWxsIGJlIGNhbGxlZCBhbnkgdGltZSBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCxcbiAgICogYW5kIHNvbWUgcGFydCBvZiB0aGUgc3RhdGUgdHJlZSBtYXkgcG90ZW50aWFsbHkgaGF2ZSBjaGFuZ2VkLiBZb3UgbWF5IHRoZW5cbiAgICogY2FsbCBgZ2V0U3RhdGUoKWAgdG8gcmVhZCB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGluc2lkZSB0aGUgY2FsbGJhY2suXG4gICAqXG4gICAqIFlvdSBtYXkgY2FsbCBgZGlzcGF0Y2goKWAgZnJvbSBhIGNoYW5nZSBsaXN0ZW5lciwgd2l0aCB0aGUgZm9sbG93aW5nXG4gICAqIGNhdmVhdHM6XG4gICAqXG4gICAqIDEuIFRoZSBzdWJzY3JpcHRpb25zIGFyZSBzbmFwc2hvdHRlZCBqdXN0IGJlZm9yZSBldmVyeSBgZGlzcGF0Y2goKWAgY2FsbC5cbiAgICogSWYgeW91IHN1YnNjcmliZSBvciB1bnN1YnNjcmliZSB3aGlsZSB0aGUgbGlzdGVuZXJzIGFyZSBiZWluZyBpbnZva2VkLCB0aGlzXG4gICAqIHdpbGwgbm90IGhhdmUgYW55IGVmZmVjdCBvbiB0aGUgYGRpc3BhdGNoKClgIHRoYXQgaXMgY3VycmVudGx5IGluIHByb2dyZXNzLlxuICAgKiBIb3dldmVyLCB0aGUgbmV4dCBgZGlzcGF0Y2goKWAgY2FsbCwgd2hldGhlciBuZXN0ZWQgb3Igbm90LCB3aWxsIHVzZSBhIG1vcmVcbiAgICogcmVjZW50IHNuYXBzaG90IG9mIHRoZSBzdWJzY3JpcHRpb24gbGlzdC5cbiAgICpcbiAgICogMi4gVGhlIGxpc3RlbmVyIHNob3VsZCBub3QgZXhwZWN0IHRvIHNlZSBhbGwgc3RhdGUgY2hhbmdlcywgYXMgdGhlIHN0YXRlXG4gICAqIG1pZ2h0IGhhdmUgYmVlbiB1cGRhdGVkIG11bHRpcGxlIHRpbWVzIGR1cmluZyBhIG5lc3RlZCBgZGlzcGF0Y2goKWAgYmVmb3JlXG4gICAqIHRoZSBsaXN0ZW5lciBpcyBjYWxsZWQuIEl0IGlzLCBob3dldmVyLCBndWFyYW50ZWVkIHRoYXQgYWxsIHN1YnNjcmliZXJzXG4gICAqIHJlZ2lzdGVyZWQgYmVmb3JlIHRoZSBgZGlzcGF0Y2goKWAgc3RhcnRlZCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBsYXRlc3RcbiAgICogc3RhdGUgYnkgdGhlIHRpbWUgaXQgZXhpdHMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBvbiBldmVyeSBkaXNwYXRjaC5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGlzIGNoYW5nZSBsaXN0ZW5lci5cbiAgICovXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICB2YXIgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcblxuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcblxuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICpcbiAgICogVGhlIGByZWR1Y2VyYCBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIHN0b3JlLCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAqIGJlIGNvbnNpZGVyZWQgdGhlICoqbmV4dCoqIHN0YXRlIG9mIHRoZSB0cmVlLCBhbmQgdGhlIGNoYW5nZSBsaXN0ZW5lcnNcbiAgICogd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb25seSBzdXBwb3J0cyBwbGFpbiBvYmplY3QgYWN0aW9ucy4gSWYgeW91IHdhbnQgdG9cbiAgICogZGlzcGF0Y2ggYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLCBhIHRodW5rLCBvciBzb21ldGhpbmcgZWxzZSwgeW91IG5lZWQgdG9cbiAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAqIGV4YW1wbGUsIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGByZWR1eC10aHVua2AgcGFja2FnZS4gRXZlbiB0aGVcbiAgICogbWlkZGxld2FyZSB3aWxsIGV2ZW50dWFsbHkgZGlzcGF0Y2ggcGxhaW4gb2JqZWN0IGFjdGlvbnMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gQSBwbGFpbiBvYmplY3QgcmVwcmVzZW50aW5nIOKAnHdoYXQgY2hhbmdlZOKAnS4gSXQgaXNcbiAgICogYSBnb29kIGlkZWEgdG8ga2VlcCBhY3Rpb25zIHNlcmlhbGl6YWJsZSBzbyB5b3UgY2FuIHJlY29yZCBhbmQgcmVwbGF5IHVzZXJcbiAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICogYSBgdHlwZWAgcHJvcGVydHkgd2hpY2ggbWF5IG5vdCBiZSBgdW5kZWZpbmVkYC4gSXQgaXMgYSBnb29kIGlkZWEgdG8gdXNlXG4gICAqIHN0cmluZyBjb25zdGFudHMgZm9yIGFjdGlvbiB0eXBlcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gRm9yIGNvbnZlbmllbmNlLCB0aGUgc2FtZSBhY3Rpb24gb2JqZWN0IHlvdSBkaXNwYXRjaGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAqIHJldHVybiBzb21ldGhpbmcgZWxzZSAoZm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB5b3UgY2FuIGF3YWl0KS5cbiAgICovXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIGlmICghaXNQbGFpbk9iamVjdChhY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiAnICsgJ1VzZSBjdXN0b20gbWlkZGxld2FyZSBmb3IgYXN5bmMgYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuICcgKyAnSGF2ZSB5b3UgbWlzc3BlbGxlZCBhIGNvbnN0YW50PycpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50UmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgY3VycmVudFJlZHVjZXIgPSBuZXh0UmVkdWNlcjtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJvcGVyYWJpbGl0eSBwb2ludCBmb3Igb2JzZXJ2YWJsZS9yZWFjdGl2ZSBsaWJyYXJpZXMuXG4gICAqIEByZXR1cm5zIHtvYnNlcnZhYmxlfSBBIG1pbmltYWwgb2JzZXJ2YWJsZSBvZiBzdGF0ZSBjaGFuZ2VzLlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBvYnNlcnZhYmxlIHByb3Bvc2FsOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYnNlcnZhYmxlXG4gICAqL1xuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHsgdW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlIH07XG4gICAgICB9XG4gICAgfSwgX3JlZlskJG9ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgX3JlZjtcbiAgfVxuXG4gIC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyWyQkb2JzZXJ2YWJsZV0gPSBvYnNlcnZhYmxlLCBfcmVmMjtcbn0iLCIvKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xufSIsIi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhKGIuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcbn0iLCJpbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi9jcmVhdGVTdG9yZSc7XG5pbXBvcnQgY29tYmluZVJlZHVjZXJzIGZyb20gJy4vY29tYmluZVJlZHVjZXJzJztcbmltcG9ydCBiaW5kQWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9iaW5kQWN0aW9uQ3JlYXRvcnMnO1xuaW1wb3J0IGFwcGx5TWlkZGxld2FyZSBmcm9tICcuL2FwcGx5TWlkZGxld2FyZSc7XG5pbXBvcnQgY29tcG9zZSBmcm9tICcuL2NvbXBvc2UnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi91dGlscy93YXJuaW5nJztcblxuLypcbiogVGhpcyBpcyBhIGR1bW15IGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBmdW5jdGlvbiBuYW1lIGhhcyBiZWVuIGFsdGVyZWQgYnkgbWluaWZpY2F0aW9uLlxuKiBJZiB0aGUgZnVuY3Rpb24gaGFzIGJlZW4gbWluaWZpZWQgYW5kIE5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsIHdhcm4gdGhlIHVzZXIuXG4qL1xuZnVuY3Rpb24gaXNDcnVzaGVkKCkge31cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGlzQ3J1c2hlZC5uYW1lID09PSAnc3RyaW5nJyAmJiBpc0NydXNoZWQubmFtZSAhPT0gJ2lzQ3J1c2hlZCcpIHtcbiAgd2FybmluZygnWW91IGFyZSBjdXJyZW50bHkgdXNpbmcgbWluaWZpZWQgY29kZSBvdXRzaWRlIG9mIE5PREVfRU5WID09PSBcXCdwcm9kdWN0aW9uXFwnLiAnICsgJ1RoaXMgbWVhbnMgdGhhdCB5b3UgYXJlIHJ1bm5pbmcgYSBzbG93ZXIgZGV2ZWxvcG1lbnQgYnVpbGQgb2YgUmVkdXguICcgKyAnWW91IGNhbiB1c2UgbG9vc2UtZW52aWZ5IChodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9sb29zZS1lbnZpZnkpIGZvciBicm93c2VyaWZ5ICcgKyAnb3IgRGVmaW5lUGx1Z2luIGZvciB3ZWJwYWNrIChodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMwMDMwMDMxKSAnICsgJ3RvIGVuc3VyZSB5b3UgaGF2ZSB0aGUgY29ycmVjdCBjb2RlIGZvciB5b3VyIHByb2R1Y3Rpb24gYnVpbGQuJyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGJpbmRBY3Rpb25DcmVhdG9ycywgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH07IiwiaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHtEZXBlbmRlbmN5RXJyb3J9IGZyb20gJy4vZXJyb3JzJztcblxuLyoqXG4gKiBAY2xhc3MgTW9kdWxlTWFuYWdlclxuICogQGNhdGVnb3J5IGNvcmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgaGFuZGxlclxuICogQGRlc2NyaXB0aW9uICBTb2x2ZXMgbW9kdWxlcyBkZXBlbmRlbmNpZXNcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICovXG5leHBvcnQgY2xhc3MgTW9kdWxlTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgIHRoaXMuaGFuZGxlciA9IG9iamVjdDtcbiAgICB0aGlzLmN1cnJlbnRNb2R1bGUgPSBudWxsO1xuXG4gICAgdGhpcy5zdG9yZSA9IGNyZWF0ZVN0b3JlKChzdGF0ZSA9IFt7fSwgJyddLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlWzBdW2FjdGlvbi5rZXldID0gYWN0aW9uLmRhdGE7XG4gICAgICBzdGF0ZVsxXSA9IGFjdGlvbi5rZXk7XG5cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9KTtcblxuICAgIHRoaXMubW9kdWxlcyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYWN0aXZlXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gU2V0cyAuY3VycmVudE1vZHVsZSB0byBwcm92aWRlZCBtb2R1bGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBtb2R1bGUgdGhlIG1vZHVsZSB0byBtYWtlIGN1cnJlbnRcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLk1vZHVsZU1hbmFnZXJcbiAgICovXG4gIGFjdGl2ZShtb2R1bGUpIHtcbiAgICB0aGlzLmN1cnJlbnRNb2R1bGUgPSBtb2R1bGU7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCByZXNldFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFNldCdzIC5jdXJyZW50TW9kdWxlIHRvIG51bGwuXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Nb2R1bGVNYW5hZ2VyXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLmN1cnJlbnRNb2R1bGUgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZGVmaW5lXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gRGVmaW5lIHRoZSBtb2R1bGUgaW4gbWFuYWdlclxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbW9kdWxlIG5hbWVcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLk1vZHVsZU1hbmFnZXJcbiAgICovXG4gIGRlZmluZShuYW1lKSB7XG4gICAgdGhpcy5tb2R1bGVzW25hbWVdID0gdGhpcy5jdXJyZW50TW9kdWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdXNlXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBkZWZpbmVkIG1vZHVsZSBmcm9tIG1hbmFnZXJcbiAgICogQHBhcmFtIG5hbWUgVGhlIG1vZHVsZSBuYW1lXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Nb2R1bGVNYW5hZ2VyXG4gICAqL1xuICB1c2UobmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1vZHVsZXNbbmFtZV07XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBzZXRcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBBbiBhbGlhcyBmb3IgLmFkZCgpIDxici8+PGJyLz5cbiAgICogVXNlIHRoaXMgbWV0aG9kIGlmIHlvdSBrbm93IHRoYXQgeW91IHdpbGwgb3ZlcndyaXRlIGV4aXN0aW5nIGRlcGVuZGVuY3kuPGJyLz5cbiAgICogVXNlIGl0IGluIHlvdXIgYXBwLCBidXQgbm90IGluIG1vZHVsZSB0aGF0IHlvdSBwcm92aWRlIHRvIG90aGVyIHBlb3BsZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleSB0aGUga2V5IG9mIHRoZSBkZXBlbmRlbmN5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIHRoZSB2YWx1ZSBvZiB0aGUgZGVwZW5kZW5jeVxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTW9kdWxlTWFuYWdlclxuICAgKi9cbiAgc2V0KGtleSwgZGF0YSkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0FERCcsXG4gICAgICBrZXksXG4gICAgICBkYXRhXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBnZXRcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGRlcGVuZGVuY3kgaW4gc3RvcmUgb2JqZWN0LCBieSBrZXkuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgdGhlIGtleSBvZiB0aGUgZGVwZW5kZW5jeVxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTW9kdWxlTWFuYWdlclxuICAgKiBAcmV0dXJuIHtPYmplY3R8TW9kdWxlfVxuICAgKiBAdGhyb3dzIHtEZXBlbmRlbmN5RXJyb3J9IGlmIGRlcGVuZGVuY3kgaXMgbm90IGluIHRoZSBzdG9yZVxuICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5HZXQgdGhlICdoZWxsbycgZGVwZW5kZW5jeTwvY2FwdGlvbj5cbiAgICogbWFuYWdlci5nZXQoJ2hlbGxvJyk7IC8vIC0+IHt3b3JsZDogdHJ1ZX1cbiAgICovXG4gIGdldChrZXkpIHtcbiAgICBpZiAoIXRoaXMuc3RvcmUuZ2V0U3RhdGUoKVswXVtrZXldKSB7XG4gICAgICB0aHJvdyBuZXcgRGVwZW5kZW5jeUVycm9yKFxuICAgICAgICAnTW9kdWxlTWFuYWdlcicsXG4gICAgICAgIGBNb2R1bGUgcmVxdWlyZXMgJyR7a2V5fScgZGVwZW5kZW5jeWAsXG4gICAgICAgIHRoaXMuY3VycmVudE1vZHVsZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpWzBdW2tleV07XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBoYXNcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHdoZXRoZXIgbWFuYWdlciBoYXMgYSBkZXBlbmRlbmN5IHdpdGggdGhlIGdpdmVuIGtleVxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IHRoZSBrZXkgb2YgdGhlIGRlcGVuZGVuY3lcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLk1vZHVsZU1hbmFnZXJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gUHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIHdoZW4gYWxsIHByb21pc2VzIGNvbXBsZXRlZC5cbiAgICogQGV4YW1wbGUgPGNhcHRpb24+Q2hlY2sgd2hldGhlciB0aGUgc3RvcmUgaGFzIHRoZSAnaGVsbG8nIGRlcGVuZGVuY3k8L2NhcHRpb24+XG4gICAqIG1hbmFnZXIuaGFzKCdoZWxsbycpOyAvLyAtPiB0cnVlXG4gICAqL1xuICBoYXMoa2V5KSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5zdG9yZS5nZXRTdGF0ZSgpWzBdW2tleV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdXBkYXRlXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gVXBkYXRlcyBkZXBzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbZGVwc01hcD17fV1cbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLk1vZHVsZU1hbmFnZXJcbiAgICovXG4gIHVwZGF0ZShkZXBzTWFwID0ge30pIHtcbiAgICB0aGlzLnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCBbZGF0YSwgY2hhbmdlZEtleV0gPSB0aGlzLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGRlcHNNYXBbY2hhbmdlZEtleV07XG5cbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZGF0YVtjaGFuZ2VkS2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBhZGRcbiAgICogQGFsaWFzIG1vZHVsZTpjb3JlLk1vZHVsZU1hbmFnZXIjc2V0XG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Nb2R1bGVNYW5hZ2VyXG4gICAqL1xuICBhZGQoLi4uZGF0YSkge1xuICAgIGNvbnNvbGUud2FybignLmFkZCgpIG1ldGhvZCBpcyBkZXByZWNhdGVkLiBVc2UgLnNldCgpIGluc3RlYWQnKTtcbiAgICByZXR1cm4gdGhpcy5zZXQoLi4uZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCByZXF1aXJlXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gUmVxdWlyZSBtb2R1bGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgRGVmaW5lZCBuYW1lXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG1vZHVsZUV4ZWN1dG9yIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhcHBsaWVkIG1vZHVsZVxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTW9kdWxlTWFuYWdlclxuICAgKi9cbiAgcmVxdWlyZShuYW1lLCBtb2R1bGVFeGVjdXRvcikge1xuICAgIGlmICh0aGlzLnVzZShuYW1lKSA9PT0gdW5kZWZpbmVkKSB0aGlzLmhhbmRsZXIuYXBwbHlNb2R1bGUobW9kdWxlRXhlY3V0b3IoKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7ZXh0ZW5kLCB0cmFuc2Zvcm1EYXRhfSBmcm9tICcuLi91dGlscy9pbmRleCc7XG5pbXBvcnQge01vZHVsZVN5c3RlbX0gZnJvbSAnLi9Nb2R1bGVTeXN0ZW0nO1xuaW1wb3J0IHtNb2R1bGVNYW5hZ2VyfSBmcm9tICcuL01vZHVsZU1hbmFnZXInO1xuaW1wb3J0IHtNYW5hZ2VyRXJyb3J9IGZyb20gJy4vZXJyb3JzJztcblxuLyoqXG4gKiBAY2xhc3MgQ29tcG9uZW50XG4gKiBAY2F0ZWdvcnkgY29yZVxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gVGhlIHBhcmFtZXRlcnMgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtpbnN0cnVjdGlvbnNdIC0gVGhlIGluc3RydWN0aW9ucyBvYmplY3QuXG4gKiBAZXh0ZW5kcyBNb2R1bGVTeXN0ZW1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICovXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBNb2R1bGVTeXN0ZW0ge1xuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29yZS5Db21wb25lbnQjZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCB7XG4gICAqICAgbW9kdWxlczogW10sXG4gICAqICAgbWFuYWdlcjogdHJ1ZVxuICAgKiB9XG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdHMgPSB7XG4gICAgbW9kdWxlczogW10sXG4gICAgbWFuYWdlcjogdHJ1ZVxuICB9O1xuXG4gIC8qKlxuICAgKiBTdGF0aWMgaW5zdHJ1Y3Rpb25zXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvcmUuQ29tcG9uZW50I2luc3RydWN0aW9uc1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IHt9XG4gICAqL1xuICBzdGF0aWMgaW5zdHJ1Y3Rpb25zID0ge307XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIHByb21pc2VzIHRoYXQgc2hvdWxkIGJlIHJlc29sdmVkIGJlZm9yZSBDb21wb25lbnQgaXMgcmVhZHkuXG4gICAqIEBtZW1iZXIge0FycmF5fSBtb2R1bGU6Y29yZS5Db21wb25lbnQjX3dhaXRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF93YWl0ID0gW107IC8vIENvbGxlY3Rpb24gb2YgcHJvbWlzZXM7XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgYG1vZHVsZXNgLlxuICAgKiBAbWVtYmVyIHtBcnJheX0gbW9kdWxlOmNvcmUuQ29tcG9uZW50I21vZHVsZXNcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgbW9kdWxlcyA9IFtdOyAvLyBDb2xsZWN0aW9uIG9mIG1vZHVsZXM7XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgYGNoaWxkYCBDb21wb25lbnRzLlxuICAgKiBAbWVtYmVyIHtBcnJheX0gbW9kdWxlOmNvcmUuQ29tcG9uZW50I2NoaWxkcmVuXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNoaWxkcmVuID0gW107IC8vIEZvciBrZWVwaW5nIGNoaWxkcmVuIGNvbXBvbmVudHM7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30sIGRlZmF1bHRzID0gQ29tcG9uZW50LmRlZmF1bHRzLCBpbnN0cnVjdGlvbnMgPSBDb21wb25lbnQuaW5zdHJ1Y3Rpb25zKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIEFwcGx5IHBvbHlmaWxsZWQgcGFyYW1ldGVycyB0byAucGFyYW1zO1xuICAgIHRoaXMucGFyYW1zID0gZXh0ZW5kKHRyYW5zZm9ybURhdGEocGFyYW1zLCBpbnN0cnVjdGlvbnMpLCBkZWZhdWx0cyk7XG4gICAgaWYgKHRoaXMucGFyYW1zLm1hbmFnZXIpIHRoaXMubWFuYWdlciA9IG5ldyBNb2R1bGVNYW5hZ2VyKCk7XG5cbiAgICB0aGlzLm1vZHVsZXMgPSB0aGlzLnBhcmFtcy5tb2R1bGVzO1xuXG4gICAgdGhpcy5pbnRlZ3JhdGVNb2R1bGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB3YWl0XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gV2FpdCBmb3IgYSBwcm9taXNlLlxuICAgKiBAcGFyYW0ge1Byb21pc2V9IFtwcm9taXNlXSAtIFRoZSBwcm9taXNlIHRoYXQgc2hvdWxkIGJlIGFkZGVkIHRvIGEgcXVldWUuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aGVuIGFsbCBwcm9taXNlcyBjb21wbGV0ZWQuXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Db21wb25lbnRcbiAgICovXG4gIHdhaXQocHJvbWlzZSkge1xuICAgIGlmIChwcm9taXNlKSB0aGlzLl93YWl0LnB1c2gocHJvbWlzZSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuX3dhaXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZGVmZXJcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBFeGVjdXRlIGBmdW5jYCAoQ2FsbGJhY2spIHdoZW4gQ29tcG9uZW50IGlzIHJlYWR5LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIC0gQ2FsbGJhY2suXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Db21wb25lbnRcbiAgICovXG4gIGRlZmVyKGZ1bmMpIHtcbiAgICBpZiAodGhpcy5pc0RlZmZlcmVkKSB0aGlzLndhaXQoKS50aGVuKCgpID0+IGZ1bmModGhpcykpO1xuICAgIGVsc2UgZnVuYyh0aGlzKTtcbiAgfVxuXG4gIC8vIFBBUkFNRVRFUlNcblxuICAvKipcbiAgICogQG1ldGhvZCB1cGRhdGVQYXJhbXNcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIHBhcmFtZXRlcnMgb2YgdGhlIENvbXBvbmVudC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBQYXJhbXMgb2YgdGhpcyBDb21wb25lbnRcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLkNvbXBvbmVudFxuICAgKi9cbiAgdXBkYXRlUGFyYW1zKHBhcmFtcyA9IHt9KSB7XG4gICAgdGhpcy5wYXJhbXMgPSBleHRlbmQocGFyYW1zLCB0aGlzLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICB9XG5cbiAgLy8gQ09QWUlORyAmIENMT05JTkdcblxuICAvKipcbiAgICogQG1ldGhvZCBjbG9uZVxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIENsb25lIHRoaXMgY29tcG9uZW50XG4gICAqIEByZXR1cm4ge29iamVjdH0gYSBjbG9uZWQgY29tcG9uZW50IHdpdGggYWxsIGl0cyBzb3VyY2UgY29tcG9uZW50JyBwYXJhbXMgY29waWVkLlxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuQ29tcG9uZW50XG4gICAqL1xuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy5wYXJhbXMpLmNvcHkodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBjb3B5XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gQ29weSBzb3VyY2UgbmF0aXZlIGFuZCBpbnRlZ3JhdGUgYG1vZHVsZXNgIHRvIGl0LlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gc291cmNlIC0gU291cmNlIGNvbXBvbmVudCB0aGF0IGlzIHVzZWQgZm9yIGBjb3B5KClgIGFjdGlvbi5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZV0gLSBDYWxsYmFjayBleGVjdXRlZCBiZWZvcmUgbW9kdWxlcyBpbnRlZ3JhdGlvbiBwcm9jZXNzLlxuICAgKiBAcmV0dXJuIHt0aGlzfSBDb21wb25lbnRcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLkNvbXBvbmVudFxuICAgKi9cbiAgY29weShzb3VyY2UsIGN1c3RvbWl6ZSkge1xuICAgIHRoaXMucGFyYW1zID0gey4uLnNvdXJjZS5wYXJhbXN9O1xuXG4gICAgaWYgKHNvdXJjZS5uYXRpdmUpIHRoaXMubmF0aXZlID0gc291cmNlLm5hdGl2ZS5jbG9uZShzb3VyY2UucGFyYW1zKTtcbiAgICBpZiAoY3VzdG9taXplKSBjdXN0b21pemUoKTtcbiAgICB0aGlzLmludGVncmF0ZU1vZHVsZXMoc291cmNlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYWRkXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gQWRkIGEgY2hpbGQgYENvbXBvbmVudGAuXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBvYmplY3QgLSBDb21wb25lbnQgdGhhdCBzaG91bGQgYmUgYWRkZWQgYXMgYSBgY2hpbGRgLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlZCB3aGVuIGFjdGlvbiBpcyBkb25lLlxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuQ29tcG9uZW50XG4gICAqL1xuICBhZGQob2JqZWN0KSB7XG4gICAgb2JqZWN0LnBhcmVudCA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5kZWZlcigoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtuYXRpdmV9ID0gb2JqZWN0O1xuICAgICAgICBpZiAoIW5hdGl2ZSkgcmVqZWN0KCk7XG5cbiAgICAgICAgY29uc3QgYWRkUHJvbWlzZSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe29uQWRkOiBvYmplY3R9KS5vbkFkZDtcblxuICAgICAgICBjb25zdCByZXNvbHZlciA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm5hdGl2ZS5hZGQobmF0aXZlKTtcbiAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2gob2JqZWN0KTtcblxuICAgICAgICAgIHJlc29sdmUob2JqZWN0KTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoYWRkUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIGFkZFByb21pc2UudGhlbihyZXNvbHZlcik7XG4gICAgICAgIGVsc2UgcmVzb2x2ZXIoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcmVtb3ZlXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGEgY2hpbGQgYENvbXBvbmVudGAuXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBvYmplY3QgLSBDb21wb25lbnQgdGhhdCBzaG91bGQgYmUgYSAqKmNoaWxkKiogb2YgdGhpcyBDb21wb25lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Db21wb25lbnRcbiAgICovXG4gIHJlbW92ZShvYmplY3QpIHtcbiAgICBvYmplY3QucGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLm5hdGl2ZS5yZW1vdmUob2JqZWN0Lm5hdGl2ZSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBhZGRUb1xuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIEFkZHMgYHRoaXNgIENvbXBvbmVudCB0byBzcGVjaWZpZWQgYEFwcGAvYENvbXBvbmVudGAuXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBvYmplY3QgLSBDb21wb25lbnQgdGhhdCB3aWxsIGJlIGEgcGFyZW50IG9mIGB0aGlzYC5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLkNvbXBvbmVudFxuICAgKi9cbiAgYWRkVG8ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdC5hZGQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBvYmplY3QgaXMgYGFzeW5jYCAoYHdhaXRgIHByb21pc2VzIGFyZSBtb3JlIHRoYW4gYDBgKS5cbiAgICogQG1lbWJlciB7Qm9vbGVhbn0gbW9kdWxlOmNvcmUuQ29tcG9uZW50I2lzRGVmZmVyZWRcbiAgICovXG4gIGdldCBpc0RlZmZlcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl93YWl0Lmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYE1vZHVsZU1hbmFnZXJgIHVzZWQgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKiBAbWVtYmVyIHtNb2R1bGVNYW5hZ2VyfSBtb2R1bGU6Y29yZS5Db21wb25lbnQjbWFuYWdlclxuICAgKiBAdGhyb3dzIHtNYW5hZ2VyRXJyb3J9XG4gICAqL1xuICBnZXQgbWFuYWdlcigpIHtcbiAgICBpZiAodGhpcy5fbWFuYWdlcikgcmV0dXJuIHRoaXMuX21hbmFnZXI7XG5cbiAgICB0aHJvdyBuZXcgTWFuYWdlckVycm9yKFxuICAgICAgJ0NvbXBvbmVudCcsXG4gICAgICBgTW9kdWxlTWFuYWdlciBpcyBub3QgdXNlZCBpbiB0aGlzIGNvbXBvbmVudC4gJ21hbmFnZXInIHBhcmFtZXRlciBzaG91bGQgYmUgc2V0IGFzICd0cnVlJ2AsXG4gICAgICB0aGlzXG4gICAgKTtcbiAgfVxuXG4gIHNldCBtYW5hZ2VyKG1hbmFnZXIpIHtcbiAgICB0aGlzLl9tYW5hZ2VyID0gbWFuYWdlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBgbmF0aXZlYCBvYmplY3QgdXNlZCBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvcmUuQ29tcG9uZW50I25hdGl2ZVxuICAgKi9cbiAgZ2V0IG5hdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmF0aXZlO1xuICB9XG5cbiAgc2V0IG5hdGl2ZShtZXNoKSB7XG4gICAgdGhpcy5fbmF0aXZlID0gbWVzaDtcbiAgICB0aGlzLl9uYXRpdmUuY29tcG9uZW50ID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy5fbmF0aXZlO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIENvbXBvbmVudFxufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBhdHRyaWJ1dGVzKC4uLm1hcHBlcnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcHBlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG1hcHBlciA9IG1hcHBlcnNbaV07XG5cbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbWFwcGVyLm1hcC5sZW5ndGg7IGsrKykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBtYXBwZXIubWFwW2tdO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQucHJvdG90eXBlLCBhdHRyaWJ1dGUsIHtcbiAgICAgICAgICBnZXQ6IG1hcHBlci5nZXR0ZXIoYXR0cmlidXRlKSxcbiAgICAgICAgICBzZXQ6IG1hcHBlci5zZXR0ZXIoYXR0cmlidXRlKSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IG1hcHBlci5jb25maWd1cmFibGUsXG4gICAgICAgICAgZW51bWVyYWJsZTogbWFwcGVyLmVudW1lcmFibGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weSguLi5tYXApIHtcbiAgcmV0dXJuIHtcbiAgICBtYXAsXG4gICAgZ2V0dGVyKG5hbWUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hdGl2ZVtuYW1lXTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXR0ZXIobmFtZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLm5hdGl2ZVtuYW1lXS5jb3B5KHZhbHVlKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWlycm9yKC4uLm1hcCkge1xuICByZXR1cm4ge1xuICAgIG1hcCxcbiAgICBnZXR0ZXIobmFtZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlW25hbWVdO1xuICAgICAgfTtcbiAgICB9LFxuICAgIHNldHRlcihuYW1lKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubmF0aXZlW25hbWVdID0gdmFsdWU7XG4gICAgICB9O1xuICAgIH0sXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfTtcbn1cbiIsImltcG9ydCB7TWVzaH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4vQ29tcG9uZW50JztcblxuaW1wb3J0IHthdHRyaWJ1dGVzLCBjb3B5LCBtaXJyb3J9IGZyb20gJy4vcHJvdG90eXBlL2F0dHJpYnV0ZXMnO1xuaW1wb3J0IHtDb21wb3NpdGlvbkVycm9yfSBmcm9tICcuL2Vycm9ycyc7XG5cbkBhdHRyaWJ1dGVzKFxuICBjb3B5KCdwb3NpdGlvbicsICdyb3RhdGlvbicsICdxdWF0ZXJuaW9uJywgJ3NjYWxlJyksXG4gIG1pcnJvcignbWF0ZXJpYWwnLCAnZ2VvbWV0cnknKVxuKVxuLyoqXG4gKiBAY2xhc3MgTWVzaENvbXBvbmVudFxuICogQGNhdGVnb3J5IGNvcmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbWV0ZXJzIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbaW5zdHJ1Y3Rpb25zXSAtIFRoZSBpbnN0cnVjdGlvbnMgb2JqZWN0LlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqL1xuY2xhc3MgTWVzaENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnQjZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdFxuICAgKiB7XG4gICAqICAgYnVpbGQ6IHRydWUsXG4gICAqICAgZ2VvbWV0cnk6IHt9LFxuICAgKiAgIG1hdGVyaWFsOiBmYWxzZSxcbiAgICpcbiAgICogICBzaGFkb3c6IHtcbiAgICogICAgIGNhc3Q6IHRydWUsXG4gICAqICAgICByZWNlaXZlOiB0cnVlXG4gICAqICAgfSxcbiAgICpcbiAgICogICBwb3NpdGlvbjoge3g6IDAsIHk6IDAsIHo6IDB9LFxuICAgKiAgIHJvdGF0aW9uOiB7eDogMCwgeTogMCwgejogMH0sXG4gICAqICAgc2NhbGU6IHt4OiAxLCB5OiAxLCB6OiAxfVxuICAgKiB9XG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdHMgPSB7XG4gICAgLi4uQ29tcG9uZW50LmRlZmF1bHRzLFxuXG4gICAgYnVpbGQ6IHRydWUsXG4gICAgZ2VvbWV0cnk6IHt9LFxuICAgIG1hdGVyaWFsOiBmYWxzZSxcblxuICAgIHNoYWRvdzoge1xuICAgICAgY2FzdDogdHJ1ZSxcbiAgICAgIHJlY2VpdmU6IHRydWVcbiAgICB9LFxuXG4gICAgcG9zaXRpb246IHt4OiAwLCB5OiAwLCB6OiAwfSxcbiAgICByb3RhdGlvbjoge3g6IDAsIHk6IDAsIHo6IDB9LFxuICAgIHNjYWxlOiB7eDogMSwgeTogMSwgejogMX1cbiAgfTtcblxuICAvKipcbiAgICogU3RhdGljIGluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnQjaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHRcbiAgICoge1xuICAgKiAgIHBvc2l0aW9uOiBbJ3gnLCAneScsICd6J10sXG4gICAqICAgcm90YXRpb246IFsneCcsICd5JywgJ3onXSxcbiAgICogICBzY2FsZTogWyd4JywgJ3knLCAneiddXG4gICAqIH1cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgcG9zaXRpb246IFsneCcsICd5JywgJ3onXSxcbiAgICByb3RhdGlvbjogWyd4JywgJ3knLCAneiddLFxuICAgIHNjYWxlOiBbJ3gnLCAneScsICd6J11cbiAgfTtcblxuICAvLyBDVVNUT00gR0VPTUVUUlkgSEFORExJTkdcblxuICBzdGF0aWMgY3VzdG9tKGdlb20sIGNvbnN0cnVjdG9yID0gTWVzaCkge1xuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIE1lc2hDb21wb25lbnQge1xuICAgICAgYnVpbGQocGFyYW1zID0gdGhpcy5wYXJhbXMpIHtcbiAgICAgICAgY29uc3Qge2dlb21ldHJ5LCBtYXRlcmlhbH0gPSB0aGlzLmFwcGx5QnJpZGdlKHtcbiAgICAgICAgICBnZW9tZXRyeTogZ2VvbSxcbiAgICAgICAgICBtYXRlcmlhbDogcGFyYW1zLm1hdGVyaWFsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHttZXNoOiBuZXcgY29uc3RydWN0b3IoZ2VvbWV0cnksIG1hdGVyaWFsKX0pLm1lc2g7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoZ2VvbSwgcGFyYW1zLCBjb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBuZXcgKE1lc2hDb21wb25lbnQuY3VzdG9tKGdlb20sIGNvbnN0cnVjdG9yKSkocGFyYW1zKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcywgZGVmYXVsdHMgPSBNZXNoQ29tcG9uZW50LmRlZmF1bHRzLCBpbnN0cnVjdGlvbnMgPSBNZXNoQ29tcG9uZW50Lmluc3RydWN0aW9ucykge1xuICAgIHN1cGVyKHBhcmFtcywgZGVmYXVsdHMsIGluc3RydWN0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5wYXJhbXMuYnVpbGQpIHtcbiAgICAgIGNvbnN0IGJ1aWxkID0gdGhpcy5idWlsZCh0aGlzLnBhcmFtcyk7XG5cbiAgICAgIGlmICghYnVpbGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IENvbXBvc2l0aW9uRXJyb3IoXG4gICAgICAgICAgJ01lc2hDb21wb25lbnQnLFxuICAgICAgICAgICcuYnVpbGQoKSBtZXRob2Qgc2hvdWxkIHJldHVybiBhIFRIUkVFLk9iamVjdDNEIG9yIGEgUHJvbWlzZSByZXNvbHZlZCB3aXRoIFRIUkVFLk9iamVjdDNELicsXG4gICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoYnVpbGQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIGJ1aWxkLnRoZW4obmF0aXZlID0+IHtcbiAgICAgICAgICB0aGlzLm5hdGl2ZSA9IG5hdGl2ZTtcbiAgICAgICAgICB0aGlzLndyYXAoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5hdGl2ZSA9IGJ1aWxkO1xuICAgICAgICB0aGlzLndyYXAoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBCVUlMRElORyAmIFdSQVBQSU5HXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYnVpbGRcbiAgICogQGRlc2NyaXB0aW9uIEJ1aWxkIGxpdmVjeWNsZSBzaG91bGQgcmV0dXJuIGEgbmF0aXZlIG9iamVjdC5cbiAgICogQHRocm93cyB7Q29tcG9zaXRpb25FcnJvcn1cbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnRcbiAgICovXG4gIGJ1aWxkKCkge1xuICAgIHRocm93IG5ldyBDb21wb3NpdGlvbkVycm9yKFxuICAgICAgJ01lc2hDb21wb25lbnQnLFxuICAgICAgJ0luc3RhbmNlIHNob3VsZCBoYXZlIGl0XFwncyBvd24gLmJ1aWxkKCkuJyxcbiAgICAgIHRoaXNcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgd3JhcFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFdyYXBzIHRyYW5zZm9ybXMgKGBwb3NpdGlvbmAgJiBgcm90YXRpb25gKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlZCB3aGVuIGFjdGlvbiBpcyBjb21wbGV0ZWRcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnRcbiAgICovXG4gIHdyYXAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgLy8gVE9ETzogRml4IGRlZmVyIHdpdGggcGh5c2ljc1xuICAgICAgLy8gdGhpcy5kZWZlcigoKSA9PiB7XG4gICAgICBjb25zdCB7cG9zaXRpb24sIHJvdGF0aW9uLCBzY2FsZSwgc2hhZG93fSA9IHRoaXMucGFyYW1zO1xuXG4gICAgICB0aGlzLnBvc2l0aW9uLnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBwb3NpdGlvbi56KTtcbiAgICAgIHRoaXMucm90YXRpb24uc2V0KHJvdGF0aW9uLngsIHJvdGF0aW9uLnksIHJvdGF0aW9uLnopO1xuICAgICAgdGhpcy5zY2FsZS5zZXQoc2NhbGUueCwgc2NhbGUueSwgc2NhbGUueik7XG5cbiAgICAgIHRoaXMubmF0aXZlLmNhc3RTaGFkb3cgPSBzaGFkb3cuY2FzdDtcbiAgICAgIHRoaXMubmF0aXZlLnJlY2VpdmVTaGFkb3cgPSBzaGFkb3cucmVjZWl2ZTtcblxuICAgICAgdGhpcy5hcHBseUJyaWRnZSh7b25XcmFwOiAxfSk7XG5cbiAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICAvLyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENPUFlJTkcgJiBDTE9OSU5HXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY29weVxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIENvcHkgc291cmNlIHRyYW5zZm9ybXMgJiBleGVjdXRlIGBDb21wb25lbnQuY29weSgpYFxuICAgKiBAcmV0dXJuIHt0aGlzfSBNZXNoQ29tcG9uZW50XG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gICAqL1xuICBjb3B5KHNvdXJjZSkge1xuICAgIHJldHVybiBzdXBlci5jb3B5KHNvdXJjZSwgKCkgPT4ge1xuICAgICAgdGhpcy5wb3NpdGlvbi5jb3B5KHNvdXJjZS5wb3NpdGlvbik7XG4gICAgICB0aGlzLnJvdGF0aW9uLmNvcHkoc291cmNlLnJvdGF0aW9uKTtcbiAgICAgIHRoaXMucXVhdGVybmlvbi5jb3B5KHNvdXJjZS5xdWF0ZXJuaW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGNsb25lXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gTWFrZSBhIGNsb25lIG9mIHRoaXMgTWVzaENvbXBvbmVudCB1c2luZyBgLmNvcHkoKWBcbiAgICogQHJldHVybiB7TWVzaENvbXBvbmVudH0gY2xvbmUgb2YgdGhpcyBvYmplY3RcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnRcbiAgICovXG4gIGNsb25lKGdlb21ldHJ5LCBtYXRlcmlhbCkge1xuICAgIGNvbnN0IGRlc3QgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih7YnVpbGQ6IGZhbHNlfSkuY29weSh0aGlzKTtcblxuICAgIGlmIChnZW9tZXRyeSkgZGVzdC5nZW9tZXRyeSA9IGRlc3QuZ2VvbWV0cnkuY2xvbmUoKTtcbiAgICBpZiAobWF0ZXJpYWwpIGRlc3QubWF0ZXJpYWwgPSBkZXN0Lm1hdGVyaWFsLmNsb25lKCk7XG5cbiAgICByZXR1cm4gZGVzdDtcbiAgfVxufVxuXG5leHBvcnQge1xuICBNZXNoQ29tcG9uZW50XG59O1xuIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4vQ29tcG9uZW50JztcblxuaW1wb3J0IHthdHRyaWJ1dGVzLCBjb3B5fSBmcm9tICcuL3Byb3RvdHlwZS9hdHRyaWJ1dGVzJztcbmltcG9ydCB7Q29tcG9zaXRpb25FcnJvcn0gZnJvbSAnLi9lcnJvcnMnO1xuXG5AYXR0cmlidXRlcyhcbiAgY29weSgncG9zaXRpb24nLCAncm90YXRpb24nLCAncXVhdGVybmlvbicsICd0YXJnZXQnKVxuKVxuLyoqXG4gKiBAY2xhc3MgTGlnaHRDb21wb25lbnRcbiAqIEBjYXRlZ29yeSBjb3JlXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBUaGUgcGFyYW1ldGVycyBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW2luc3RydWN0aW9uc10gLSBUaGUgaW5zdHJ1Y3Rpb25zIG9iamVjdC5cbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLkNvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKi9cbmNsYXNzIExpZ2h0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvcmUuTGlnaHRDb21wb25lbnQjZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdFxuICAgKiB7XG4gICAqICAgYnVpbGQ6IHRydWUsXG4gICAqXG4gICAqICAgc2hhZG93OiB7XG4gICAqICAgICBjYXN0OiB0cnVlLFxuICAgKlxuICAgKiAgICAgYmlhczogMCxcbiAgICogICAgIHJhZGl1czogMSxcbiAgICpcbiAgICogICAgIG1hcFNpemU6IHtcbiAgICogICAgICAgd2lkdGg6IDEwMjQsXG4gICAqICAgICAgIGhlaWdodDogMTAyNFxuICAgKiAgICAgfSxcbiAgICpcbiAgICogICAgIGNhbWVyYToge1xuICAgKiAgICAgICBuZWFyOiB0cnVlLFxuICAgKiAgICAgICBmYXI6IDQwMCxcbiAgICogICAgICAgZm92OiA5MCxcbiAgICpcbiAgICogICAgICAgdG9wOiAyMDAsXG4gICAqICAgICAgIGJvdHRvbTogLTIwMCxcbiAgICogICAgICAgbGVmdDogLTIwMCxcbiAgICogICAgICAgcmlnaHQ6IDIwMFxuICAgKiAgICAgfVxuICAgKiAgIH0sXG4gICAqXG4gICAqICAgcG9zaXRpb246IHt4OiAwLCB5OiAwLCB6OiAwfSxcbiAgICogICByb3RhdGlvbjoge3g6IDAsIHk6IDAsIHo6IDB9XG4gICAqIH1cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5Db21wb25lbnQuZGVmYXVsdHMsXG5cbiAgICBidWlsZDogdHJ1ZSxcblxuICAgIHNoYWRvdzoge1xuICAgICAgY2FzdDogdHJ1ZSxcblxuICAgICAgYmlhczogMCxcbiAgICAgIHJhZGl1czogMSxcblxuICAgICAgbWFwU2l6ZToge1xuICAgICAgICB3aWR0aDogMTAyNCxcbiAgICAgICAgaGVpZ2h0OiAxMDI0XG4gICAgICB9LFxuXG4gICAgICBjYW1lcmE6IHtcbiAgICAgICAgbmVhcjogdHJ1ZSxcbiAgICAgICAgZmFyOiA0MDAsXG4gICAgICAgIGZvdjogOTAsXG5cbiAgICAgICAgdG9wOiAyMDAsXG4gICAgICAgIGJvdHRvbTogLTIwMCxcbiAgICAgICAgbGVmdDogLTIwMCxcbiAgICAgICAgcmlnaHQ6IDIwMFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBwb3NpdGlvbjoge3g6IDAsIHk6IDAsIHo6IDB9LFxuICAgIHJvdGF0aW9uOiB7eDogMCwgeTogMCwgejogMH1cbiAgfTtcblxuICAvKipcbiAgICogU3RhdGljIGluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb3JlLkxpZ2h0Q29tcG9uZW50I2luc3RydWN0aW9uc1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0XG4gICAqIHtcbiAgICogICBwb3NpdGlvbjogWyd4JywgJ3knLCAneiddLFxuICAgKiAgIHJvdGF0aW9uOiBbJ3gnLCAneScsICd6J11cbiAgICogfVxuICAgKi9cbiAgc3RhdGljIGluc3RydWN0aW9ucyA9IHtcbiAgICBwb3NpdGlvbjogWyd4JywgJ3knLCAneiddLFxuICAgIHJvdGF0aW9uOiBbJ3gnLCAneScsICd6J11cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMsIGRlZmF1bHRzID0gTGlnaHRDb21wb25lbnQuZGVmYXVsdHMsIGluc3RydWN0aW9ucyA9IExpZ2h0Q29tcG9uZW50Lmluc3RydWN0aW9ucykge1xuICAgIHN1cGVyKHBhcmFtcywgZGVmYXVsdHMsIGluc3RydWN0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5wYXJhbXMuYnVpbGQpIHtcbiAgICAgIGNvbnN0IGJ1aWxkID0gdGhpcy5idWlsZCh0aGlzLnBhcmFtcyk7XG5cbiAgICAgIGlmICghYnVpbGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IENvbXBvc2l0aW9uRXJyb3IoXG4gICAgICAgICAgJ0xpZ2h0Q29tcG9uZW50JyxcbiAgICAgICAgICAnLmJ1aWxkKCkgbWV0aG9kIHNob3VsZCByZXR1cm4gYSBUSFJFRS5PYmplY3QzRCBvciBhIFByb21pc2UgcmVzb2x2ZWQgd2l0aCBUSFJFRS5PYmplY3QzRC4nLFxuICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJ1aWxkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBidWlsZC50aGVuKG5hdGl2ZSA9PiB7XG4gICAgICAgICAgdGhpcy5uYXRpdmUgPSBuYXRpdmU7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHRoaXMubmF0aXZlID0gYnVpbGQ7XG5cbiAgICAgIHRoaXMud3JhcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEJVSUxESU5HICYgV1JBUFBJTkdcblxuICAvKipcbiAgICogQG1ldGhvZCBidWlsZFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIEJ1aWxkIGxpdmVjeWNsZSBzaG91bGQgcmV0dXJuIGEgbmF0aXZlIG9iamVjdC5cbiAgICogQHRocm93cyB7Q29tcG9zaXRpb25FcnJvcn1cbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLkxpZ2h0Q29tcG9uZW50XG4gICAqL1xuICBidWlsZCgpIHtcbiAgICB0aHJvdyBuZXcgQ29tcG9zaXRpb25FcnJvcihcbiAgICAgICdNZXNoQ29tcG9uZW50JyxcbiAgICAgICdJbnN0YW5jZSBzaG91bGQgaGF2ZSBpdFxcJ3Mgb3duIC5idWlsZCgpLicsXG4gICAgICB0aGlzXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHdyYXBcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBXcmFwcyB0cmFuc2Zvcm1zIChgcG9zaXRpb25gICYgYHJvdGF0aW9uYClcbiAgICogQHJldHVybiB7UHJvbWlzZX0gUmVzb2x2ZWQgd2hlbiBhY3Rpb24gaXMgY29tcGxldGVkXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5MaWdodENvbXBvbmVudFxuICAgKi9cbiAgd3JhcCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmRlZmVyKCgpID0+IHtcbiAgICAgICAgY29uc3Qge3Bvc2l0aW9uLCByb3RhdGlvbn0gPSB0aGlzLnBhcmFtcztcblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBwb3NpdGlvbi56KTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5zZXQocm90YXRpb24ueCwgcm90YXRpb24ueSwgcm90YXRpb24ueik7XG5cbiAgICAgICAgdGhpcy5hcHBseUJyaWRnZSh7b25XcmFwOiAxfSk7XG5cbiAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgd3JhcFNoYWRvd1xuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFdyYXBzIHNoYWRvdyBwcm9wZXJ0aWVzXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5MaWdodENvbXBvbmVudFxuICAgKi9cbiAgd3JhcFNoYWRvdygpIHtcbiAgICBjb25zdCB7bmF0aXZlLCBwYXJhbXM6IHtzaGFkb3d9fSA9IHRoaXM7XG5cbiAgICBuYXRpdmUuY2FzdFNoYWRvdyA9IHNoYWRvdy5jYXN0O1xuICAgIG5hdGl2ZS5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IHNoYWRvdy5tYXBTaXplLndpZHRoO1xuICAgIG5hdGl2ZS5zaGFkb3cubWFwU2l6ZS5oZWlnaHQgPSBzaGFkb3cubWFwU2l6ZS5oZWlnaHQ7XG4gICAgbmF0aXZlLnNoYWRvdy5iaWFzID0gc2hhZG93LmJpYXM7XG4gICAgbmF0aXZlLnNoYWRvdy5yYWRpdXMgPSBzaGFkb3cucmFkaXVzO1xuXG4gICAgY29uc3Qgc2hhZG93Q2FtZXJhID0gbmF0aXZlLnNoYWRvdy5jYW1lcmE7XG4gICAgY29uc3QgY2FtZXJhID0gc2hhZG93LmNhbWVyYTtcblxuICAgIHNoYWRvd0NhbWVyYS5uZWFyID0gY2FtZXJhLm5lYXI7XG4gICAgc2hhZG93Q2FtZXJhLmZhciA9IGNhbWVyYS5mYXI7XG4gICAgc2hhZG93Q2FtZXJhLmZvdiA9IGNhbWVyYS5mb3Y7XG5cbiAgICBzaGFkb3dDYW1lcmEubGVmdCA9IGNhbWVyYS5sZWZ0O1xuICAgIHNoYWRvd0NhbWVyYS5yaWdodCA9IGNhbWVyYS5yaWdodDtcbiAgICBzaGFkb3dDYW1lcmEudG9wID0gY2FtZXJhLnRvcDtcbiAgICBzaGFkb3dDYW1lcmEuYm90dG9tID0gY2FtZXJhLmJvdHRvbTtcbiAgfVxuXG4gIC8vIENPUFlJTkcgJiBDTE9OSU5HXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY29weVxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIENvcHkgc291cmNlIHRyYW5zZm9ybXMgJiBleGVjdXRlIGBDb21wb25lbnQuY29weSgpYFxuICAgKiBAcmV0dXJuIHt0aGlzfSBMaWdodENvbXBvbmVudFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTGlnaHRDb21wb25lbnRcbiAgICovXG4gIGNvcHkoc291cmNlKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNvcHkoc291cmNlLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy50YXJnZXQpIHRoaXMudGFyZ2V0LmNvcHkoc291cmNlLnRhcmdldCgpKTtcblxuICAgICAgdGhpcy5wb3NpdGlvbi5jb3B5KHNvdXJjZS5wb3NpdGlvbik7XG4gICAgICB0aGlzLnJvdGF0aW9uLmNvcHkoc291cmNlLnJvdGF0aW9uKTtcbiAgICAgIHRoaXMucXVhdGVybmlvbi5jb3B5KHNvdXJjZS5xdWF0ZXJuaW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGNsb25lXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gTWFrZSBhIGNsb25lIG9mIHRoaXMgTGlnaHRDb21wb25lbnQgdXNpbmcgYC5jb3B5KClgXG4gICAqIEByZXR1cm4ge0xpZ2h0Q29tcG9uZW50fSBjbG9uZSBvZiB0aGlzIG9iamVjdFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTGlnaHRDb21wb25lbnRcbiAgICovXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih7YnVpbGQ6IGZhbHNlfSkuY29weSh0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBMaWdodENvbXBvbmVudFxufTtcbiIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmltcG9ydCB7YXR0cmlidXRlcywgY29weX0gZnJvbSAnLi9wcm90b3R5cGUvYXR0cmlidXRlcyc7XG5pbXBvcnQge0NvbXBvc2l0aW9uRXJyb3J9IGZyb20gJy4vZXJyb3JzJztcblxuQGF0dHJpYnV0ZXMoXG4gIGNvcHkoJ3Bvc2l0aW9uJywgJ3JvdGF0aW9uJywgJ3F1YXRlcm5pb24nLCAndGFyZ2V0Jylcbilcbi8qKlxuICogQGNsYXNzIENhbWVyYUNvbXBvbmVudFxuICogQGNhdGVnb3J5IGNvcmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbWV0ZXJzIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbaW5zdHJ1Y3Rpb25zXSAtIFRoZSBpbnN0cnVjdGlvbnMgb2JqZWN0LlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqL1xuY2xhc3MgQ2FtZXJhQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvcmUuQ2FtZXJhQ29tcG9uZW50I2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHRcbiAgICoge1xuICAgKiAgIGJ1aWxkOiB0cnVlLFxuICAgKlxuICAgKiAgIHBvc2l0aW9uOiB7eDogMCwgeTogMCwgejogMH0sXG4gICAqICAgcm90YXRpb246IHt4OiAwLCB5OiAwLCB6OiAwfVxuICAgKiB9XG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdHMgPSB7XG4gICAgLi4uQ29tcG9uZW50LmRlZmF1bHRzLFxuXG4gICAgYnVpbGQ6IHRydWUsXG5cbiAgICBwb3NpdGlvbjoge3g6IDAsIHk6IDAsIHo6IDB9LFxuICAgIHJvdGF0aW9uOiB7eDogMCwgeTogMCwgejogMH1cbiAgfTtcblxuICAvKipcbiAgICogU3RhdGljIGluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb3JlLkNhbWVyYUNvbXBvbmVudCNpbnN0cnVjdGlvbnNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdFxuICAgKiB7XG4gICAqICAgcG9zaXRpb246IFsneCcsICd5JywgJ3onXSxcbiAgICogICByb3RhdGlvbjogWyd4JywgJ3knLCAneiddLFxuICAgKiAgIHNjYWxlOiBbJ3gnLCAneScsICd6J11cbiAgICogfVxuICAgKi9cbiAgc3RhdGljIGluc3RydWN0aW9ucyA9IHtcbiAgICBwb3NpdGlvbjogWyd4JywgJ3knLCAneiddLFxuICAgIHJvdGF0aW9uOiBbJ3gnLCAneScsICd6J10sXG4gICAgc2NhbGU6IFsneCcsICd5JywgJ3onXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcywgZGVmYXVsdHMgPSBDYW1lcmFDb21wb25lbnQuZGVmYXVsdHMsIGluc3RydWN0aW9ucyA9IENhbWVyYUNvbXBvbmVudC5pbnN0cnVjdGlvbnMpIHtcbiAgICBzdXBlcihwYXJhbXMsIGRlZmF1bHRzLCBpbnN0cnVjdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMucGFyYW1zLmJ1aWxkKSB7XG4gICAgICBjb25zdCBidWlsZCA9IHRoaXMuYnVpbGQodGhpcy5wYXJhbXMpO1xuXG4gICAgICBpZiAoIWJ1aWxkKSB7XG4gICAgICAgIHRocm93IG5ldyBDb21wb3NpdGlvbkVycm9yKFxuICAgICAgICAgICdDYW1lcmFDb21wb25lbnQnLFxuICAgICAgICAgICcuYnVpbGQoKSBtZXRob2Qgc2hvdWxkIHJldHVybiBhIFRIUkVFLk9iamVjdDNEIG9yIGEgUHJvbWlzZSByZXNvbHZlZCB3aXRoIFRIUkVFLk9iamVjdDNELicsXG4gICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoYnVpbGQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIGJ1aWxkLnRoZW4obmF0aXZlID0+IHtcbiAgICAgICAgICB0aGlzLm5hdGl2ZSA9IG5hdGl2ZTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgdGhpcy5uYXRpdmUgPSBidWlsZDtcblxuICAgICAgdGhpcy53cmFwKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQlVJTERJTkcgJiBXUkFQUElOR1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gQnVpbGQgbGl2ZWN5Y2xlIHNob3VsZCByZXR1cm4gYSBuYXRpdmUgb2JqZWN0LlxuICAgKiBAdGhyb3dzIHtDb21wb3NpdGlvbkVycm9yfVxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuQ2FtZXJhQ29tcG9uZW50XG4gICAqL1xuICBidWlsZCgpIHtcbiAgICB0aHJvdyBuZXcgQ29tcG9zaXRpb25FcnJvcihcbiAgICAgICdDYW1lcmFDb21wb25lbnQnLFxuICAgICAgJ0luc3RhbmNlIHNob3VsZCBoYXZlIGl0XFwncyBvd24gLmJ1aWxkKCkuJyxcbiAgICAgIHRoaXNcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgd3JhcFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFdyYXBzIHRyYW5zZm9ybXMgKGBwb3NpdGlvbmAgJiBgcm90YXRpb25gKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlZCB3aGVuIGFjdGlvbiBpcyBjb21wbGV0ZWRcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLkNhbWVyYUNvbXBvbmVudFxuICAgKi9cbiAgd3JhcCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmRlZmVyKCgpID0+IHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQodGhpcy5wYXJhbXMucG9zaXRpb24ueCwgdGhpcy5wYXJhbXMucG9zaXRpb24ueSwgdGhpcy5wYXJhbXMucG9zaXRpb24ueik7XG4gICAgICAgIHRoaXMucm90YXRpb24uc2V0KHRoaXMucGFyYW1zLnJvdGF0aW9uLngsIHRoaXMucGFyYW1zLnJvdGF0aW9uLnksIHRoaXMucGFyYW1zLnJvdGF0aW9uLnopO1xuXG4gICAgICAgIHRoaXMuYXBwbHlCcmlkZ2Uoe29uV3JhcDogMX0pO1xuXG4gICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGNvcHlcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBDb3B5IHNvdXJjZSB0cmFuc2Zvcm1zICYgZXhlY3V0ZSBgQ29tcG9uZW50LmNvcHkoKWBcbiAgICogQHJldHVybiB7dGhpc30gQ2FtZXJhQ29tcG9uZW50XG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5DYW1lcmFDb21wb25lbnRcbiAgICovXG4gIGNvcHkoc291cmNlKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNvcHkoc291cmNlLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy50YXJnZXQpIHRoaXMudGFyZ2V0LmNvcHkoc291cmNlLnRhcmdldCgpKTtcblxuICAgICAgdGhpcy5wb3NpdGlvbi5jb3B5KHNvdXJjZS5wb3NpdGlvbik7XG4gICAgICB0aGlzLnJvdGF0aW9uLmNvcHkoc291cmNlLnJvdGF0aW9uKTtcbiAgICAgIHRoaXMucXVhdGVybmlvbi5jb3B5KHNvdXJjZS5xdWF0ZXJuaW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGNsb25lXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gTWFrZSBhIGNsb25lIG9mIHRoaXMgQ2FtZXJhQ29tcG9uZW50IHVzaW5nIGAuY29weSgpYFxuICAgKiBAcmV0dXJuIHtDYW1lcmFDb21wb25lbnR9IGNsb25lIG9mIHRoaXMgb2JqZWN0XG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5DYW1lcmFDb21wb25lbnRcbiAgICovXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih7YnVpbGQ6IGZhbHNlfSkuY29weSh0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBDYW1lcmFDb21wb25lbnRcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRpbWUgPSBwcm9jZXNzLmhydGltZSgpO1xuICByZXR1cm4gdGltZVswXSAqIDFlMyArIHRpbWVbMV0gLyAxZTY7XG59O1xuIiwiaW1wb3J0IHByZXNlbnQgZnJvbSAncHJlc2VudCc7XG5cbmV4cG9ydCBjb25zdCBzeXN0ZW0gPSB7XG4gIHdpbmRvdzogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3dcbn07XG5cbmlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICBnbG9iYWwucGVyZm9ybWFuY2UgPSB7XG4gICAgbm93OiBwcmVzZW50XG4gIH07XG59XG4iLCJpbXBvcnQge3ZlcnNpb259IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQge3N5c3RlbX0gZnJvbSAnLi4vcG9seWZpbGwnO1xuaW1wb3J0IHtNb2R1bGVTeXN0ZW19IGZyb20gJy4vTW9kdWxlU3lzdGVtJztcbmltcG9ydCB7TW9kdWxlTWFuYWdlcn0gZnJvbSAnLi9Nb2R1bGVNYW5hZ2VyJztcblxuLyoqXG4gKiBAY2xhc3MgQXBwXG4gKiBAY2F0ZWdvcnkgY29yZVxuICogQGRlc2NyaXB0aW9uIFRoaXMgY29tcG9uZW50IGlzIHVzZWQgdG8gcHJlcGFyZSBhIHdvcmxkIHNjZW5lLCBzZXR1cCBwaHlzaWNzLCBjYW1lcmEsIHJlbmRlcmVyIGFuZCBhbGwgb3RoZXIgdGhpbmdzIHRoYXQgeW91IHVzdWFsbHkgZG8gYmVmb3JlIG1ha2luZyBtZXNoZXMuXG4gKiBAcGFyYW0ge0FycmF5fSBbbW9kdWxlcz1bXV0gLSBBcnJheSBvZiBNb2R1bGVzXG4gKiBAZXh0ZW5kcyBNb2R1bGVTeXN0ZW1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICovXG5jbGFzcyBBcHAgZXh0ZW5kcyBNb2R1bGVTeXN0ZW0ge1xuICAvKipcbiAgICogU2ltdWxhdGUgZmxhZ1xuICAgKiBAZGVzY3JpcHRpb24gU2FtZSBhcyAudXBkYXRlRW5hYmxlZCwgYnV0IGZvciBwaHlzaWNzLiBEZWZpbmVzIGlmIHBoeXNpY3MgaXMgc2ltdWxhdGVkIGVhY2ggZnJhbWUuXG4gICAqIEBtZW1iZXIge0Jvb2xlYW59IG1vZHVsZTpjb3JlLkFwcCNzaW11bGF0ZVxuICAgKiBAcHVibGljXG4gICAqL1xuICBzaW11bGF0ZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRGVmaW5lcyB3aGV0aGVyIHRoZSBzY2VuZSBzaG91bGQgcmVuZGVyIG9yIG5vdFxuICAgKiBAbWVtYmVyIHtCb29sZWFufSBtb2R1bGU6Y29yZS5BcHAjdXBkYXRlRW5hYmxlZFxuICAgKiBAcHVibGljXG4gICAqL1xuICB1cGRhdGVFbmFibGVkID0gdHJ1ZTtcbiAgLyoqXG4gICAqIExvb3BzIGluIHRoaXMgYXBwXG4gICAqIEBkZXNjcmlwdGlvbiBBcnJheSBvZiBsb29wcyB0aGF0IGFyZSBleGVjdXRlZCBieSB0aGlzIGFwcC5cbiAgICogQG1lbWJlciB7QXJyYXl9IG1vZHVsZTpjb3JlLkFwcCNsb29wc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBsb29wcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKG1vZHVsZXMgPSBbXSkge1xuICAgIGNvbnNvbGUubG9nKGBXSFMuQXBwICR7dmVyc2lvbn1gKTtcblxuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tYW5hZ2VyID0gbmV3IE1vZHVsZU1hbmFnZXIodGhpcyk7XG4gICAgdGhpcy5tb2R1bGVzID0gbW9kdWxlcztcblxuICAgIHRoaXMuaW50ZWdyYXRlTW9kdWxlcygpO1xuICB9XG5cbiAgLy8gQ09OVFJPTFMgJiBVUERBVElOR1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHN0YXJ0XG4gICAqIEBkZXNjcmlwdGlvbiBTdGFydCByZW5kZXJpbmcgbG9vcCBhbmQgcGh5c2ljcyBzaW11bGF0aW9uIChpZiB5b3UgdXNlIHZlcnNpb24gd2l0aCBwaHlzaWNzKS5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLkFwcFxuICAgKi9cbiAgc3RhcnQoKSB7XG4gICAgY29uc3QgcmVxdWVzdEFuaW1GcmFtZSA9ICgoKSA9PiB7XG4gICAgICByZXR1cm4gc3lzdGVtLndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgfHwgc3lzdGVtLndpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgfHwgc3lzdGVtLndpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgfHwgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgc3lzdGVtLndpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCB7bG9vcHMsIHVwZGF0ZUVuYWJsZWR9ID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIHByb2Nlc3MoKSB7XG4gICAgICByZXF1ZXN0QW5pbUZyYW1lKHByb2Nlc3MpO1xuICAgICAgaWYgKCF1cGRhdGVFbmFibGVkKSByZXR1cm47XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsbCA9IGxvb3BzLmxlbmd0aDsgaSA8IGxsOyBpKyspIHtcbiAgICAgICAgY29uc3QgZSA9IGxvb3BzW2ldO1xuICAgICAgICBpZiAoZS5lbmFibGVkKSBlLmV4ZWN1dGUoZS5jbG9jayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVFbmFibGVkID0gdHJ1ZTtcbiAgICBwcm9jZXNzKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBzdG9wXG4gICAqIEBkZXNjcmlwdGlvbiBTdG9wcyByZW5kZXJpbmcgbG9vcHNcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLkFwcFxuICAgKi9cbiAgc3RvcCgpIHtcbiAgICB0aGlzLnVwZGF0ZUVuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGFkZExvb3BcbiAgICogQGRlc2NyaXB0aW9uIEFkZHMgbG9vcCB0byB0aGlzIGFwcC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGxvb3AgLSB0aGUgbG9vcCB0byBhZGRcbiAgICogQHJldHVybiB7UHJvbWlzZX0gUHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIHdoZW4gcHJvbWlzZXMgY29tcGxldGVkLlxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuQXBwXG4gICAqIEBleGFtcGxlIDxjYXB0aW9uPkFkZGluZyBhIGxvb3AgdG8gYW4gYXBwPC9jYXB0aW9uPlxuICAgKiBjb25zdCBsb29wID0gbmV3IExvb3AoKCkgPT4ge1xuICAgKiAgLy8gLi4uXG4gICAqIH0pO1xuICAgKlxuICAgKiBjb25zdCBhcHAgPSBuZXcgQXBwKCk7XG4gICAqXG4gICAqIGFwcC5hZGRMb29wKGxvb3ApO1xuICAgKiBsb29wLnN0YXJ0KCk7XG4gICAqL1xuICBhZGRMb29wKGxvb3ApIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmxvb3BzLnB1c2gobG9vcCk7XG4gICAgICByZXNvbHZlKGxvb3ApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcmVtb3ZlTG9vcFxuICAgKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBsb29wIGZyb20gdGhpcyBhcHAuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBsb29wIC0gdGhlIGxvb3AgdG8gcmVtb3ZlXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aGVuIHByb21pc2VzIGNvbXBsZXRlZC5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLkFwcFxuICAgKi9cbiAgcmVtb3ZlTG9vcChsb29wKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxvb3BzLmluZGV4T2YobG9vcCk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB0aGlzLmxvb3BzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgIHJlc29sdmUobG9vcCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMubWFuYWdlci5nZXQoa2V5KTtcbiAgfVxuXG4gIHVzZShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLnVzZShrZXkpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIEFwcFxufTtcbiIsImltcG9ydCB7Q2xvY2t9IGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3MgTG9vcFxuICogQGNhdGVnb3J5IGNvcmVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgZnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBlYWNoIGFuaW1hdGlvbiBmcmFtZVxuICogQHBhcmFtIHtCb29sZWFufSBbdXNlQ2xvY2s9dHJ1ZV0gcGFzc2VzIGEgQ2xvY2sgdG8gdGhlIGZ1bmN0aW9uIHdoZW4gY2FsbGVkLCBpZiB0cnVlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqL1xuY2xhc3MgTG9vcCB7XG4gIGNvbnN0cnVjdG9yKGZ1bmMsIHVzZUNsb2NrID0gdHJ1ZSkge1xuICAgIHRoaXMuZnVuYyA9IGZ1bmM7XG4gICAgdGhpcy5jbG9jayA9IHVzZUNsb2NrID8gbmV3IENsb2NrKCkgOiBudWxsO1xuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gQ09OVFJPTFNcblxuICAvKipcbiAgICogQG1ldGhvZCBzdGFydFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFN0YXJ0cyB0aGlzIGxvb3AsIGNsb2NrIGlmIGl0IGhhcyBvbmUuIFdvbid0IGRvIGFueXRoaW5nIGlmIGxvb3AgZW5hYmxlZCBhbHJlYWR5LlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gW3dvcmxkXSBhcHAgdG8gYWRkIHRoaXMgbG9vcCB0bywgaWYgcHJvdmlkZWQuXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Mb29wXG4gICAqL1xuICBzdGFydCh3b3JsZCkge1xuICAgIGlmICh0aGlzLmVuYWJsZWQpIHJldHVybjtcblxuICAgIGlmICh3b3JsZCkgd29ybGQuYWRkTG9vcCh0aGlzKTtcblxuICAgIGlmICh0aGlzLmNsb2NrKSB0aGlzLmNsb2NrLnN0YXJ0KCk7XG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHN0b3BcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBTdG9wcyB0aGlzIGxvb3AgYW5kIGl0cyBjbG9jayBpZiBpdCBoYXMgb25lLCB3b24ndCBkbyBhbnl0aGluZyBpZiB0aGlzIGxvb3AgaXMgbm90IGVuYWJsZWQpXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBbd29ybGRdIGFwcCB0byByZW1vdmUgdGhpcyBsb29wIGZyb20sIGlmIHByb3ZpZGVkLlxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTG9vcFxuICAgKi9cbiAgc3RvcCh3b3JsZCkge1xuICAgIGlmICghdGhpcy5lbmFibGVkKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5jbG9jaykgdGhpcy5jbG9jay5zdG9wKCk7XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG5cbiAgICBpZiAod29ybGQpIHdvcmxkLnJlbW92ZUxvb3AodGhpcyk7XG4gIH1cblxuICAvLyBFWEVDVVRJT05cblxuICAvKipcbiAgICogQG1ldGhvZCBleGVjdXRlXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gRXhlY3V0ZXMgdGhlIGZ1bmN0aW9uIG9mIHRoaXMgbG9vcFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTG9vcFxuICAgKiBAcmV0dXJucyB7Kn0gd2hhdGV2ZXIgdGhlIGZ1bmN0aW9uIG9mIHRoaXMgbG9vcCByZXR1cm5zXG4gICAqL1xuICBleGVjdXRlKCkge1xuICAgIHJldHVybiB0aGlzLmZ1bmModGhpcy5jbG9jayk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgTG9vcFxufTtcbiIsIi8qKiBAbW9kdWxlIGNvcmUgKi9cbmV4cG9ydCAqIGZyb20gJy4vQ29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vTWVzaENvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL0xpZ2h0Q29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vQ2FtZXJhQ29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vQXBwJztcbmV4cG9ydCAqIGZyb20gJy4vTG9vcCc7XG5leHBvcnQgKiBmcm9tICcuL01vZHVsZU1hbmFnZXInO1xuIiwiaW1wb3J0IHtBbWJpZW50TGlnaHQgYXMgQW1iaWVudExpZ2h0TmF0aXZlfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQge0xpZ2h0Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL0xpZ2h0Q29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgQW1iaWVudExpZ2h0XG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9saWdodHNcbiAqIEBkZXNjcmlwdGlvbiBBbWJpZW50TGlnaHQgaXMgYSBzaW1wbGUgY2xhc3MsIGl0IGV4dGVuZHMgTGlnaHQgYW5kIGluaGVyaXRzIGFsbCBpdHMgbWV0aG9kcy5cbiAqIEFtYmllbnRMaWdodCBjcmVhdGVzIGJhc2ljIGxpZ2h0IGFyb3VuZCBhbGwgc2NlbmUsIHNvIGl0IGRvZXNuJ3QgbmVlZCBwcm9wZXJ0aWVzIGxpa2UgcG9zIG9yIHRhcmdldC5cbiAqIEl0IHN1cHBvcnRzIG9ubHkgY29sb3IgYW5kIGludGVuc2l0eSBhcyBwYXJhbWV0ZXJzLCB3aGljaCBkZWZpbmVzIHRoZSBjb2xvciBvZiB0aGUgc3Vycm91bmRlZCBsaWdodCBhbmQgaW50ZW5zaXR5IG9mIGxpZ2h0LlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXM9e2xpZ2h0OiB7Y29sb3I6IDB4ZmZmZmZmLCBpbnRlbnNpdHk6IDF9fV0gLSBUaGUgcGFyYW1zLlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuTGlnaHRDb21wb25lbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9saWdodHNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0aW5nIGFuIEFtYmllbnRMaWdodCA8L2NhcHRpb24+XG4gKiBuZXcgQW1iaWVudExpZ2h0KHtcbiAqICAgY29sb3I6IDB4ZmZmZmZmLFxuICogICBpbnRlbnNpdHk6IDAuMlxuICogfSkuYWRkVG8od29ybGQpO1xuICovXG5jbGFzcyBBbWJpZW50TGlnaHQgZXh0ZW5kcyBMaWdodENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5MaWdodENvbXBvbmVudC5kZWZhdWx0cyxcblxuICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICBpbnRlbnNpdHk6IDFcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgQW1iaWVudExpZ2h0LmRlZmF1bHRzKTtcbiAgfVxuXG4gIGJ1aWxkKHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe2xpZ2h0OiBuZXcgQW1iaWVudExpZ2h0TmF0aXZlKFxuICAgICAgcGFyYW1zLmNvbG9yLFxuICAgICAgcGFyYW1zLmludGVuc2l0eVxuICAgICl9KS5saWdodDtcbiAgfVxufVxuXG5leHBvcnQge1xuICBBbWJpZW50TGlnaHRcbn07XG4iLCJpbXBvcnQge0RpcmVjdGlvbmFsTGlnaHQgYXMgRGlyZWN0aW9uYWxMaWdodE5hdGl2ZSwgRGlyZWN0aW9uYWxMaWdodEhlbHBlcn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHtMaWdodENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9MaWdodENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIERpcmVjdGlvbmFsTGlnaHRcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL2xpZ2h0c1xuICogQGRlc2NyaXB0aW9uIERpcmVjdGluYWxMaWdodCBjcmVhdGVzIGEgbGlnaHQgdGhhdCBzaGluZXMgZnJvbSBhIHNwZWNpZmljIGRpcmVjdGlvbiBub3QgZnJvbSBhIHNwZWNpZmljIHBvc2l0aW9uLjxici8+PGJyLz5cbiAqIFRoaXMgbGlnaHQgd2lsbCBiZWhhdmUgYXMgdGhvdWdoIGl0IGlzIGluZmluaXRlbHkgZmFyIGF3YXkgYW5kIHRoZSByYXlzIHByb2R1Y2VkIGZyb20gaXQgYXJlIGFsbCBwYXJhbGxlbC4gPGJyLz48YnIvPlxuICogVGhlIGJlc3QgYW5hbG9neSB3b3VsZCBiZSBhIGxpZ2h0IHNvdXJjZSB0aGF0IGFjdHMgbGlrZSB0aGUgc3VuOiB0aGUgc3VuIGlzIHNvIGZhciBhd2F5IHRoYXQgYWxsIHN1bmxpZ2h0IGhpdHRpbmcgb2JqZWN0cyBjb21lcyBmcm9tIHRoZSBzYW1lIGFuZ2xlLjxici8+PGJyLz5cbiAqIEl0IGhhcyB0aGUgc2FtZSBvcHRpb25zIGFzIEFtYmllbnRMaWdodCBpbiBsaWdodCBwYXJhbWF0ZXIsIGJ1dCBpdCBhbHNvIHN1cHBvcnRzIHBvcyBhbmQgdGFyZ2V0IHBhcmFtYXRlcnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtcz17bGlnaHQ6IHtjb2xvcjogMHhmZmZmZmYsIGludGVuc2l0eTogMX19XSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5MaWdodENvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL2xpZ2h0c1xuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRpbmcgYSBEaXJlY3Rpb25hbExpZ2h0IHRvIGZhbGwgZG93biBmcm9tIHZlYzMoMTAsIDIwLCAxMCkgdG8gdmVjMygwLCAwLCAwKTwvY2FwdGlvbj5cbiAqIG5ldyBEaXJlY3Rpb25hbExpZ2h0KHtcbiAqICAgY29sb3I6IDB4ZmZmZmZmLFxuICogICBpbnRlbnNpdHk6IDAuMixcbiAqXG4gKiAgIHBvc2l0aW9uOiBbMTAsIDIwLCAxMF1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIERpcmVjdGlvbmFsTGlnaHQgZXh0ZW5kcyBMaWdodENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5MaWdodENvbXBvbmVudC5kZWZhdWx0cyxcblxuICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICBpbnRlbnNpdHk6IDFcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgRGlyZWN0aW9uYWxMaWdodC5kZWZhdWx0cyk7XG4gICAgdGhpcy53cmFwU2hhZG93KCk7XG4gIH1cblxuICBidWlsZChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHtsaWdodDogbmV3IERpcmVjdGlvbmFsTGlnaHROYXRpdmUoXG4gICAgICBwYXJhbXMuY29sb3IsXG4gICAgICBwYXJhbXMuaW50ZW5zaXR5XG4gICAgKX0pLmxpZ2h0O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIERpcmVjdGlvbmFsTGlnaHRcbn07XG4iLCJpbXBvcnQge0hlbWlzcGhlcmVMaWdodCBhcyBIZW1pc3BoZXJlTGlnaHROYXRpdmUsIEhlbWlzcGhlcmVMaWdodEhlbHBlcn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHtMaWdodENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9MaWdodENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIEhlbWlzcGhlcmVMaWdodFxuICogQGNhdGVnb3J5IGNvbXBvbmVudHMvbGlnaHRzXG4gKiBAZGVzY3JpcHRpb24gSGVtaXNwaGVyZUxpZ2h0IGlzIGEgbGlnaHQgc291cmNlIHBvc2l0aW9uZWQgZGlyZWN0bHkgYWJvdmUgdGhlIHNjZW5lLjxici8+XG4gKiBJdCBhbHNvIGRvZXNuJ3QgbmVlZCBwb3NpdGlvbiBhbmQgdGFyZ2V0IHByb3BlcnRpZXMuXG4gKiBAY2xhc3NEZXNjXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vdGhyZWVqcy5vcmcvZXhhbXBsZXMvd2ViZ2xfbGlnaHRzX2hlbWlzcGhlcmUuaHRtbFwiPjwvaWZyYW1lPlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXM9e2xpZ2h0OiB7c2t5Q29sb3I6IDB4ZmZmZmZmLCBncm91bmRDb2xvcjogMHhmZmZmZmYsIGludGVuc2l0eTogMX19XSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5MaWdodENvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL2xpZ2h0c1xuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRpbmcgYSBIZW1pc3BoZXJlTGlnaHQ8L2NhcHRpb24+XG4gKiBuZXcgSGVtaXNwaGVyZUxpZ2h0KHtcbiAqICAgc2t5Q29sb3I6IDB4ZmYwMDAwLFxuICogICBncm91bmRDb2xvcjogMHgwMDAwZmYsXG4gKiAgIGludGVuc2l0eTogMC4yXG4gKiB9KS5hZGRUbyhhcHApO1xuICovXG5jbGFzcyBIZW1pc3BoZXJlTGlnaHQgZXh0ZW5kcyBMaWdodENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5MaWdodENvbXBvbmVudC5kZWZhdWx0cyxcblxuICAgIHNreUNvbG9yOiAweGZmZmZmZixcbiAgICBncm91bmRDb2xvcjogMHhmZmZmZmYsXG4gICAgaW50ZW5zaXR5OiAxXG4gIH1cblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgSGVtaXNwaGVyZUxpZ2h0LmRlZmF1bHRzKTtcbiAgfVxuXG4gIGJ1aWxkKHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe2xpZ2h0OiBuZXcgSGVtaXNwaGVyZUxpZ2h0TmF0aXZlKFxuICAgICAgcGFyYW1zLnNreUNvbG9yLFxuICAgICAgcGFyYW1zLmdyb3VuZENvbG9yLFxuICAgICAgcGFyYW1zLmludGVuc2l0eVxuICAgICl9KS5saWdodDtcbiAgfVxufVxuXG5leHBvcnQge1xuICBIZW1pc3BoZXJlTGlnaHRcbn07XG4iLCJpbXBvcnQge1BvaW50TGlnaHQgYXMgUG9pbnRMaWdodE5hdGl2ZSwgUG9pbnRMaWdodEhlbHBlcn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHtMaWdodENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9MaWdodENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIFBvaW50TGlnaHRcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL2xpZ2h0c1xuICogQGRlc2NyaXB0aW9uIFBvaW50TGlnaHQgY3JlYXRlcyBhIGxpZ2h0IGF0IGEgc3BlY2lmaWMgcG9zaXRpb24gaW4gdGhlIHNjZW5lLiBUaGUgbGlnaHQgc2hpbmVzIGluIGFsbCBkaXJlY3Rpb25zIChyb3VnaGx5IHNpbWlsYXIgdG8gYSBsaWdodCBidWxiLik8YnIvPjxici8+XG4gKiBJdCBoYXMgdGhlIHNhbWUgb3B0aW9ucyBhcyBBbWJpZW50TGlnaHQgaW4gbGlnaHQgcGFyYW1hdGVyLCBidXQgaXQgYWxzbyBzdXBwb3J0cyBwb3NpdGlvbiwgZGlzdGFuY2UgYW5kIGRlY2F5Ljxici8+XG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtcz17bGlnaHQ6IHtjb2xvcjogMHhmZmZmZmYsIGludGVuc2l0eTogMSwgZGlzdGFuY2U6IDEwMCwgZGVjYXk6IDF9fV0gLSBUaGUgcGFyYW1zLlxuICogQGV4dGVuZHMgTGlnaHRDb21wb25lbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9saWdodHNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0aW5nIGEgUG9pbnRMaWdodDwvY2FwdGlvbj5cbiAqIG5ldyBQb2ludExpZ2h0KCB7XG4gKiAgIGNvbG9yOiAweGZmMDAwMCxcbiAqICAgaW50ZW5zaXR5OiAyLFxuICogICBkaXN0YW5jZTogMzAwXG4gKlxuICogICBwb3NpdGlvbjogWzEwLCAyMCwgMTBdXG4gKiB9KS5hZGRUbyhhcHApO1xuICovXG5jbGFzcyBQb2ludExpZ2h0IGV4dGVuZHMgTGlnaHRDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdHM9IHtcbiAgICAuLi5MaWdodENvbXBvbmVudC5kZWZhdWx0cyxcblxuICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICBpbnRlbnNpdHk6IDEsXG4gICAgZGlzdGFuY2U6IDEwMCxcbiAgICBkZWNheTogMVxuICB9XG5cbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcbiAgICBzdXBlcihwYXJhbXMsIFBvaW50TGlnaHQuZGVmYXVsdHMpO1xuICAgIHRoaXMud3JhcFNoYWRvdygpO1xuICB9XG5cbiAgYnVpbGQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bGlnaHQ6IG5ldyBQb2ludExpZ2h0TmF0aXZlKFxuICAgICAgcGFyYW1zLmNvbG9yLFxuICAgICAgcGFyYW1zLmludGVuc2l0eSxcbiAgICAgIHBhcmFtcy5kaXN0YW5jZSxcbiAgICAgIHBhcmFtcy5kZWNheVxuICAgICl9KS5saWdodDtcbiAgfVxufVxuXG5leHBvcnQge1xuICBQb2ludExpZ2h0XG59O1xuIiwiaW1wb3J0IHtTcG90TGlnaHQgYXMgU3BvdExpZ2h0TmF0aXZlfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQge0xpZ2h0Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL0xpZ2h0Q29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgU3BvdExpZ2h0XG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9saWdodHNcbiAqIEBkZXNjcmlwdGlvbiBTcG90TGlnaHQgY3JlYXRlcyBzcG90IGxpZ2h0IHRoYXQgY2FuIGNhc3Qgc2hhZG93IGluIG9uZSBkaXJlY3Rpb24uIDxici8+PGJyLz5cbiAqIEl0IGhhcyB0aGUgc2FtZSBwYXJhbWV0ZXJzIGFzIEFtYmllbnRMaWdodCBpbiBsaWdodCwgYnV0IGl0IGFsc28gc3VwcG9ydHMgcG9zIGFuZCB0YXJnZXQuIDxici8+PGJyLz5cbiAqIFNwb3RMaWdodCBhZmZlY3RzIG1lc2hlcyB3aXRoIGxhbWJlcnQgYW5kIHBob25nIG1hdGVyaWFsLlxuICogQGNsYXNzRGVzY1xuICogPGlmcmFtZSBzcmM9XCJodHRwczovL3RocmVlanMub3JnL2V4YW1wbGVzL3dlYmdsX2xpZ2h0c19zcG90bGlnaHQuaHRtbFwiPjwvaWZyYW1lPlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXM9e2xpZ2h0OiB7Y29sb3I6IDB4ZmZmZmZmLCBpbnRlbnNpdHk6IDEsIGRpc3RhbmNlOiAxMDAsIGFuZ2xlOiBNYXRoLlBJIC8gMywgZXhwb25lbnQ6IDAsIGRlY2F5OiAxfX1dIC0gVGhlIHBhcmFtcy5cbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLkxpZ2h0Q29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbGlnaHRzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIFNwb3RMaWdodCB0aGF0IGZhbGxzIGRvd24gZnJvbSB2ZWMzKDEwLCAyMCwgMTApIHRvIHZlYzMoMCwgMCwgMCk8L2NhcHRpb24+XG4gKiBuZXcgU3BvdExpZ2h0KHtcbiAqICAgY29sb3I6IDB4MDBmZjAwLFxuICogICBpbnRlbnNpdHk6IDMsXG4gKiAgIGRpc3RhbmNlOiAxMDAwXG4gKlxuICogICBwb3NpdGlvbjogWzEwLCAyMCwgMTBdXG4gKiB9KS5hZGRUbyhhcHApO1xuICovXG5jbGFzcyBTcG90TGlnaHQgZXh0ZW5kcyBMaWdodENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5MaWdodENvbXBvbmVudC5kZWZhdWx0cyxcblxuICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICBpbnRlbnNpdHk6IDEsXG4gICAgZGlzdGFuY2U6IDEwMCxcbiAgICBhbmdsZTogTWF0aC5QSSAvIDMsXG4gICAgZXhwb25lbnQ6IDAsXG4gICAgZGVjYXk6IDFcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgU3BvdExpZ2h0LmRlZmF1bHRzKTtcbiAgICB0aGlzLndyYXBTaGFkb3coKTtcbiAgfVxuXG4gIGJ1aWxkKHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe2xpZ2h0OiBuZXcgU3BvdExpZ2h0TmF0aXZlKFxuICAgICAgcGFyYW1zLmNvbG9yLFxuICAgICAgcGFyYW1zLmludGVuc2l0eSxcbiAgICAgIHBhcmFtcy5kaXN0YW5jZSxcbiAgICAgIHBhcmFtcy5hbmdsZSxcbiAgICAgIHBhcmFtcy5leHBvbmVudCxcbiAgICAgIHBhcmFtcy5kZWNheVxuICAgICl9KS5saWdodDtcbiAgfVxufVxuXG5leHBvcnQge1xuICBTcG90TGlnaHRcbn07XG4iLCJpbXBvcnQge1JlY3RBcmVhTGlnaHQgYXMgUmVjdEFyZWFMaWdodE5hdGl2ZX0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHtMaWdodENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9MaWdodENvbXBvbmVudCc7XG5cbmNsYXNzIEFyZWFMaWdodCBleHRlbmRzIExpZ2h0Q29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLkxpZ2h0Q29tcG9uZW50LmRlZmF1bHRzLFxuXG4gICAgY29sb3I6IDB4ZmZmZmZmLFxuICAgIGludGVuc2l0eTogMSxcbiAgICB3aWR0aDogMTAsXG4gICAgaGVpZ2h0OiAxMFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBBcmVhTGlnaHQuZGVmYXVsdHMpO1xuICB9XG5cbiAgYnVpbGQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bGlnaHQ6IG5ldyBSZWN0QXJlYUxpZ2h0TmF0aXZlKFxuICAgICAgcGFyYW1zLmNvbG9yLFxuICAgICAgcGFyYW1zLmludGVuc2l0eSxcbiAgICAgIHBhcmFtcy53aWR0aCxcbiAgICAgIHBhcmFtcy5oZWlnaHRcbiAgICApfSkubGlnaHQ7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgQXJlYUxpZ2h0XG59O1xuIiwiLyoqIEBtb2R1bGUgY29tcG9uZW50cy9saWdodHMgKi9cbmV4cG9ydCAqIGZyb20gJy4vQW1iaWVudExpZ2h0JztcbmV4cG9ydCAqIGZyb20gJy4vRGlyZWN0aW9uYWxMaWdodCc7XG5leHBvcnQgKiBmcm9tICcuL0hlbWlzcGhlcmVMaWdodCc7XG5leHBvcnQgKiBmcm9tICcuL1BvaW50TGlnaHQnO1xuZXhwb3J0ICogZnJvbSAnLi9TcG90TGlnaHQnO1xuZXhwb3J0ICogZnJvbSAnLi9BcmVhTGlnaHQnO1xuIiwiaW1wb3J0IHtDdWJlQ2FtZXJhIGFzIEN1YmVDYW1lcmFOYXRpdmV9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7Q2FtZXJhQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL0NhbWVyYUNvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIEN1YmVDYW1lcmFcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL2NhbWVyYXNcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIDYgY2FtZXJhcyB0aGF0IHJlbmRlciB0byBhIFdlYkdMUmVuZGVyVGFyZ2V0Q3ViZVxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gVGhlIHBhcmFtZXRlcnMgb2JqZWN0LlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL2NhbWVyYXNcbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLkNhbWVyYUNvbXBvbmVudFxuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRlcyBhIEN1YmVDYW1lcmEgYW5kIHNldCBpdCBhcyBhcHAncyBjYW1lcmE8L2NhcHRpb24+XG4gKiBjb25zdCBjYW1lcmEgPSBuZXcgQ3ViZUNhbWVyYSh7XG4gKiAgIGNhbWVyYToge1xuICogICAgIGN1YmVSZXNvbHV0aW9uOiAyNTZcbiAqICAgfSxcbiAqXG4gKiAgIHBvc2l0aW9uOiB7XG4gKiAgICAgeDogMCxcbiAqICAgICB5OiAxMDAsXG4gKiAgICAgejogMFxuICogICB9XG4gKiB9KTtcbiAqXG4gKiBhcHAuY2FtZXJhID0gY2FtZXJhO1xuICovXG5jbGFzcyBDdWJlQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9jYW1lcmFzLkN1YmVDYW1lcmEjZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgY2FtZXJhOiB7XG4gICAqICAgICBuZWFyOiAxLFxuICAgKiAgICAgZmFyOiAxMDAwLFxuICAgKiAgICAgY3ViZVJlc29sdXRpb246IDEyOFxuICAgKiAgIH1cbiAgICogfTwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLkNhbWVyYUNvbXBvbmVudC5kZWZhdWx0cyxcblxuICAgIG5lYXI6IDEsXG4gICAgZmFyOiAxMDAwLFxuICAgIGN1YmVSZXNvbHV0aW9uOiAxMjhcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgQ3ViZUNhbWVyYS5kZWZhdWx0cyk7XG4gIH1cblxuICBidWlsZChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHtjYW1lcmE6IG5ldyBDdWJlQ2FtZXJhTmF0aXZlKFxuICAgICAgcGFyYW1zLm5lYXIsXG4gICAgICBwYXJhbXMuZmFyLFxuICAgICAgcGFyYW1zLmN1YmVSZXNvbHV0aW9uXG4gICAgKX0pLmNhbWVyYTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBDdWJlQ2FtZXJhXG59O1xuIiwiaW1wb3J0IHtPcnRob2dyYXBoaWNDYW1lcmEgYXMgT3J0aG9ncmFwaGljQ2FtZXJhTmF0aXZlfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQge0NhbWVyYUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9DYW1lcmFDb21wb25lbnQnO1xuaW1wb3J0IHtzeXN0ZW19IGZyb20gJy4uLy4uL3BvbHlmaWxsJztcblxuLyoqXG4gKiBAY2xhc3MgT3J0aG9ncmFwaGljQ2FtZXJhXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9jYW1lcmFzXG4gKiBAZGVzY3JpcHRpb24gQ2FtZXJhIHdpdGggb3J0aG9ncmFwaGljIHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBUaGUgcGFyYW1ldGVycyBvYmplY3QuXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvY2FtZXJhc1xuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuQ2FtZXJhQ29tcG9uZW50XG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGUgYW4gT3J0aG9ncmFwaGljQ2FtZXJhIGFuZCBzZXQgaXQgYXMgYXBwJ3MgY2FtZXJhPC9jYXB0aW9uPlxuICogY29uc3QgY2FtZXJhID0gbmV3IE9ydGhvZ3JhcGhpY0NhbWVyYSh7XG4gKiAgIGNhbWVyYToge1xuICogICAgIGZhcjogMTAwMDBcbiAqICAgfSxcbiAqXG4gKiAgIHBvc2l0aW9uOiB7XG4gKiAgICAgeTogNTBcbiAqICAgfVxuICogfSk7XG4gKlxuICogYXBwLmNhbWVyYSA9IGNhbWVyYTtcbiAqL1xuY2xhc3MgT3J0aG9ncmFwaGljQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvY2FtZXJhcy5PcnRob2dyYXBoaWNDYW1lcmEjZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgbmVhcjogMSxcbiAgICogICBmYXI6IDEwMDAsXG4gICAqICAgbGVmdDogc3lzdGVtLndpbmRvdy5pbm5lcldpZHRoIC8gLTIsXG4gICAqICAgcmlnaHQ6IHN5c3RlbS53aW5kb3cuaW5uZXJXaWR0aCAvIDIsXG4gICAqICAgdG9wOiBzeXN0ZW0ud2luZG93LmlubmVySGVpZ2h0IC8gMixcbiAgICogICBib3R0b206IHN5c3RlbS53aW5kb3cuaW5uZXJIZWlnaHQgLyAtMlxuICAgKiB9PC9wcmU+XG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdHMgPSB7XG4gICAgLi4uQ2FtZXJhQ29tcG9uZW50LmRlZmF1bHRzLFxuXG4gICAgbmVhcjogMSxcbiAgICBmYXI6IDEwMDAsXG4gICAgbGVmdDogc3lzdGVtLndpbmRvdy5pbm5lcldpZHRoIC8gLTIsXG4gICAgcmlnaHQ6IHN5c3RlbS53aW5kb3cuaW5uZXJXaWR0aCAvIDIsXG4gICAgdG9wOiBzeXN0ZW0ud2luZG93LmlubmVySGVpZ2h0IC8gMixcbiAgICBib3R0b206IHN5c3RlbS53aW5kb3cuaW5uZXJIZWlnaHQgLyAtMlxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBPcnRob2dyYXBoaWNDYW1lcmEuZGVmYXVsdHMpO1xuICB9XG5cbiAgYnVpbGQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7Y2FtZXJhOiBuZXcgT3J0aG9ncmFwaGljQ2FtZXJhTmF0aXZlKFxuICAgICAgcGFyYW1zLmxlZnQsXG4gICAgICBwYXJhbXMucmlnaHQsXG4gICAgICBwYXJhbXMudG9wLFxuICAgICAgcGFyYW1zLmJvdHRvbSxcbiAgICAgIHBhcmFtcy5uZWFyLFxuICAgICAgcGFyYW1zLmZhclxuICAgICl9KS5jYW1lcmE7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgT3J0aG9ncmFwaGljQ2FtZXJhXG59O1xuIiwiaW1wb3J0IHtQZXJzcGVjdGl2ZUNhbWVyYSBhcyBQZXJzcGVjdGl2ZUNhbWVyYU5hdGl2ZX0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHtDYW1lcmFDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvcmUvQ2FtZXJhQ29tcG9uZW50JztcbmltcG9ydCB7c3lzdGVtfSBmcm9tICcuLi8uLi9wb2x5ZmlsbCc7XG5cbi8qKlxuICogQGNsYXNzIFBlcnNwZWN0aXZlQ2FtZXJhXG4gKiBAZGVzY3JpcHRpb24gQ2FtZXJhIHdpdGggcGVyc3BlY3RpdmUgcHJvamVjdGlvbi5cbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL2NhbWVyYXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbWV0ZXJzIG9iamVjdC5cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9jYW1lcmFzXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5DYW1lcmFDb21wb25lbnRcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0ZSBhbiBQZXJzcGVjdGl2ZUNhbWVyYSBhbmQgc2V0IGl0IGFzIGFwcCdzIGNhbWVyYTwvY2FwdGlvbj5cbiAqIGNvbnN0IGNhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYSh7XG4gKiAgIGZvdjogNzUsXG4gKiAgIGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gKlxuICogICBwb3NpdGlvbjoge1xuICogICAgIHg6IDAsXG4gKiAgICAgeTogMTAwLFxuICogICAgIHo6IDBcbiAqICAgfVxuICogfSk7XG4gKlxuICogYXBwLmNhbWVyYSA9IGNhbWVyYTtcbiAqL1xuY2xhc3MgUGVyc3BlY3RpdmVDYW1lcmEgZXh0ZW5kcyBDYW1lcmFDb21wb25lbnQge1xuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9jYW1lcmFzLlBlcnNwZWN0aXZlQ2FtZXJhI2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIG5lYXI6IDEsXG4gICAqICAgZmFyOiAxMDAwLFxuICAgKiAgIGZvdjogNzUsXG4gICAqICAgYXNwZWN0OiBzeXN0ZW0ud2luZG93LmlubmVyV2lkdGggLyBzeXN0ZW0ud2luZG93LmlubmVySGVpZ2h0XG4gICAqIH08L3ByZT5cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5DYW1lcmFDb21wb25lbnQuZGVmYXVsdHMsXG5cbiAgICBuZWFyOiAxLFxuICAgIGZhcjogMTAwMCxcbiAgICBmb3Y6IDc1LFxuICAgIGFzcGVjdDogc3lzdGVtLndpbmRvdy5pbm5lcldpZHRoIC8gc3lzdGVtLndpbmRvdy5pbm5lckhlaWdodFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBQZXJzcGVjdGl2ZUNhbWVyYS5kZWZhdWx0cyk7XG4gIH1cblxuICBidWlsZChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHtjYW1lcmE6IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYU5hdGl2ZShcbiAgICAgIHBhcmFtcy5mb3YsXG4gICAgICBwYXJhbXMuYXNwZWN0LFxuICAgICAgcGFyYW1zLm5lYXIsXG4gICAgICBwYXJhbXMuZmFyXG4gICAgKX0pLmNhbWVyYTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBQZXJzcGVjdGl2ZUNhbWVyYVxufTtcbiIsIi8qKiBAbW9kdWxlIGNvbXBvbmVudHMvY2FtZXJhcyAqL1xuZXhwb3J0ICogZnJvbSAnLi9DdWJlQ2FtZXJhJztcbmV4cG9ydCAqIGZyb20gJy4vT3J0aG9ncmFwaGljQ2FtZXJhJztcbmV4cG9ydCAqIGZyb20gJy4vUGVyc3BlY3RpdmVDYW1lcmEnO1xuIiwiaW1wb3J0IHtcbiAgTWVzaCxcbiAgQm94QnVmZmVyR2VvbWV0cnksXG4gIEJveEdlb21ldHJ5XG59IGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHtNZXNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL01lc2hDb21wb25lbnQnO1xuXG4vKipcbiAqIEBjbGFzcyBCb3hcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIEFzIHRvbGQgb24gQ29tcG9uZW50IGRlZmluaXRpb24sIHdoaWxlIHlvdSBjYW4gcGFzcyBhbnkgb2YgdGhlIGluaGVyaXRlZCBwYXJhbXMgZm9yIHRoaXMgY29tcG9uZW50IGNvbnN0cnVjdGlvbiwgeW91IHdpbGwgbmVlZCB0b1xuICogcGFzcyBzcGVjaWZpYyBwYXJhbWV0ZXJzIHRvIGJ1aWxkIHRoaXMgbWVzaCBhcyBhIGdlb21ldHJ5IG9iamVjdC5cbiAqIEBjbGFzc0Rlc2NcbiAqIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzL3NjZW5lcy9nZW9tZXRyeS1icm93c2VyLmh0bWwjQm94R2VvbWV0cnlcIj48L2lmcmFtZT5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIEJveCwgYW5kIGFkZGluZyB0byBhcHA8L2NhcHRpb24+XG4gKiAgbmV3IEJveCh7XG4gKiAgICBnZW9tZXRyeToge1xuICogICAgICB3aWR0aDogMixcbiAqICAgICAgaGVpZ2h0OiAyLFxuICogICAgICBkZXB0aDogMlxuICogICAgfSxcbiAqXG4gKiAgICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAqICAgICAgY29sb3I6IDB4ZmZmZmZmXG4gKiAgICB9KSxcbiAqXG4gKiAgICBwb3NpdGlvbjogWzUwLCA2MCwgNzBdXG4gKiB9KS5hZGRUbyhhcHApO1xuICovXG5jbGFzcyBCb3ggZXh0ZW5kcyBNZXNoQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuQm94I2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiB7XG4gICAqICAgICB3aWR0aDogMSxcbiAgICogICAgIGhlaWdodDogMSxcbiAgICogICAgIGRlcHRoOiAxLFxuICAgKiAgICAgd2lkdGhTZWdtZW50czogMSxcbiAgICogICAgIGhlaWdodFNlZ21lbnRzOiAxLFxuICAgKiAgICAgZGVwdGhTZWdtZW50czogMVxuICAgKiAgIH1cbiAgICogfTwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgaGVpZ2h0OiAxLFxuICAgICAgZGVwdGg6IDEsXG4gICAgICB3aWR0aFNlZ21lbnRzOiAxLFxuICAgICAgaGVpZ2h0U2VnbWVudHM6IDEsXG4gICAgICBkZXB0aFNlZ21lbnRzOiAxXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJbnN0cnVjdGlvbnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuQm94I2luc3RydWN0aW9uc1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IGdlb21ldHJ5OiBbJ3dpZHRoJywgJ2hlaWdodCcsICdkZXB0aCcsICd3aWR0aFNlZ21lbnRzJywgJ2hlaWdodFNlZ21lbnRzJywgJ2RlcHRoU2VnZW1lbnRzJ11cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMsXG4gICAgZ2VvbWV0cnk6IFsnd2lkdGgnLCAnaGVpZ2h0JywgJ2RlcHRoJywgJ3dpZHRoU2VnbWVudHMnLCAnaGVpZ2h0U2VnbWVudHMnLCAnZGVwdGhTZWdlbWVudHMnXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBCb3guZGVmYXVsdHMsIEJveC5pbnN0cnVjdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYnVpbGRcbiAgICogQGRlc2NyaXB0aW9uIEJ1aWxkIGxpdmVjeWNsZSBjcmVhdGVzIGEgbWVzaCB1c2luZyBpbnB1dCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgQ29tcG9uZW50IHBhcmFtZXRlcnMuXG4gICAqIEByZXR1cm4ge1RIUkVFLk1lc2h9IEJ1aWx0IG1lc2hcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5Cb3hcbiAgICovXG4gIGJ1aWxkKHBhcmFtcyA9IHRoaXMucGFyYW1zKSB7XG4gICAgY29uc3Qge2dlb21ldHJ5LCBtYXRlcmlhbH0gPSB0aGlzLmFwcGx5QnJpZGdlKHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmJ1aWxkR2VvbWV0cnkocGFyYW1zKSxcbiAgICAgIG1hdGVyaWFsOiBwYXJhbXMubWF0ZXJpYWxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHttZXNoOiBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpfSkubWVzaDtcbiAgfVxuXG4gIGJ1aWxkR2VvbWV0cnkocGFyYW1zID0ge30pIHtcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyAocGFyYW1zLmJ1ZmZlciA/IEJveEJ1ZmZlckdlb21ldHJ5IDogQm94R2VvbWV0cnkpKFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LndpZHRoLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmhlaWdodCxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5kZXB0aCxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS53aWR0aFNlZ21lbnRzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmhlaWdodFNlZ21lbnRzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmRlcHRoU2VnbWVudHNcbiAgICApO1xuXG4gICAgcmV0dXJuIGdlb21ldHJ5O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIEJveFxufTtcbiIsImltcG9ydCB7XG4gIE1lc2gsXG4gIENpcmNsZUJ1ZmZlckdlb21ldHJ5LFxuICBDaXJjbGVHZW9tZXRyeVxufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgQ2lyY2xlXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBBcyB0b2xkIG9uIENvbXBvbmVudCBkZWZpbml0aW9uLCB3aGlsZSB5b3UgY2FuIHBhc3MgYW55IG9mIHRoZSBpbmhlcml0ZWQgcGFyYW1zIGZvciB0aGlzIGNvbXBvbmVudCBjb25zdHJ1Y3Rpb24sIHlvdSB3aWxsIG5lZWQgdG9cbiAqIHBhc3Mgc3BlY2lmaWMgcGFyYW1ldGVycyB0byBidWlsZCB0aGlzIG1lc2ggYXMgYSBnZW9tZXRyeSBvYmplY3QuXG4gKiBAY2xhc3NEZXNjXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy9zY2VuZXMvZ2VvbWV0cnktYnJvd3Nlci5odG1sI0NpcmNsZUdlb21ldHJ5XCI+PC9pZnJhbWU+XG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBUaGUgcGFyYW1zLlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuTWVzaENvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlc1xuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRpbmcgYSBDaXJjbGUsIGFuZCBhZGRpbmcgdG8gYXBwPC9jYXB0aW9uPlxuICogIG5ldyBDaXJjbGUoe1xuICogICAgZ2VvbWV0cnk6IHtcbiAqICAgICAgcmFkaXVzOiA0LFxuICogICAgICBzZWdtZW50czogMTZcbiAqICAgIH0sXG4gKlxuICogICAgbWF0ZXJpYWw6IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gKiAgICAgIGNvbG9yOiAweGZmZmZmZlxuICogICAgfSksXG4gKlxuICogICAgcG9zaXRpb246IFs1MCwgNjAsIDcwXVxuICogfSkuYWRkVG8oYXBwKTtcbiAqL1xuY2xhc3MgQ2lyY2xlIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLkNpcmNsZSNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeToge1xuICAgKiAgICAgcmFkaXVzOiA1MCxcbiAgICogICAgIHNlZ21lbnRzOiA4LFxuICAgKiAgICAgdGhldGFTdGFydDogMCxcbiAgICogICAgIHRoZXRhTGVuZ3RoOiBNYXRoLlBJICogMlxuICAgKiAgIH1cbiAgICogfTwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG5cbiAgICBnZW9tZXRyeToge1xuICAgICAgcmFkaXVzOiA1MCxcbiAgICAgIHNlZ21lbnRzOiA4LFxuICAgICAgdGhldGFTdGFydDogMCxcbiAgICAgIHRoZXRhTGVuZ3RoOiBNYXRoLlBJICogMlxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSW5zdHJ1Y3Rpb25zXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLkNpcmNsZSNpbnN0cnVjdGlvbnNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCBnZW9tZXRyeTogWydyYWRpdXMnLCAnc2VnbWVudHMnLCAndGhldGFTdGFydCcsICd0aGV0YUxlbmd0aCddXG4gICAqL1xuICBzdGF0aWMgaW5zdHJ1Y3Rpb25zID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuaW5zdHJ1Y3Rpb25zLFxuICAgIGdlb21ldHJ5OiBbJ3JhZGl1cycsICdzZWdtZW50cycsICd0aGV0YVN0YXJ0JywgJ3RoZXRhTGVuZ3RoJ11cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgQ2lyY2xlLmRlZmF1bHRzLCBDaXJjbGUuaW5zdHJ1Y3Rpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgY3JlYXRlcyBhIG1lc2ggdXNpbmcgaW5wdXQgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIENvbXBvbmVudCBwYXJhbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBCdWlsdCBtZXNoXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuQ2lyY2xlXG4gICAqL1xuICBidWlsZChwYXJhbXMgPSB0aGlzLnBhcmFtcykge1xuICAgIGNvbnN0IHtnZW9tZXRyeSwgbWF0ZXJpYWx9ID0gdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICBnZW9tZXRyeTogdGhpcy5idWlsZEdlb21ldHJ5KHBhcmFtcyksXG4gICAgICBtYXRlcmlhbDogcGFyYW1zLm1hdGVyaWFsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bWVzaDogbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKX0pLm1lc2g7XG4gIH1cblxuICBidWlsZEdlb21ldHJ5KHBhcmFtcyA9IHt9KSB7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgKHBhcmFtcy5idWZmZXIgPyBDaXJjbGVCdWZmZXJHZW9tZXRyeSA6IENpcmNsZUdlb21ldHJ5KShcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5yYWRpdXMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuc2VnbWVudHMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkudGhldGFTdGFydCxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS50aGV0YUxlbmd0aFxuICAgICk7XG5cbiAgICByZXR1cm4gZ2VvbWV0cnk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgQ2lyY2xlXG59O1xuIiwiaW1wb3J0IHtcbiAgTWVzaCxcbiAgQ29uZUJ1ZmZlckdlb21ldHJ5LFxuICBDb25lR2VvbWV0cnlcbn0gZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQge01lc2hDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvcmUvTWVzaENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIENvbmVcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIEEgY3lsaW5kZXIgaXMgb25lIG9mIHRoZSBtb3N0IGJhc2ljIGN1cnZpbGluZWFyIGdlb21ldHJpYyBzaGFwZXMsIHRoZSBzdXJmYWNlIGZvcm1lZCBieSB0aGUgcG9pbnRzIGF0IGEgZml4ZWQgZGlzdGFuY2UgZnJvbSBhIGdpdmVuIHN0cmFpZ2h0IGxpbmUsIHRoZSBheGlzIG9mIHRoZSBjeWxpbmRlci4gPGJyLz48YnIvPlxuICogVGhlIHNvbGlkIGVuY2xvc2VkIGJ5IHRoaXMgc3VyZmFjZSBhbmQgYnkgdHdvIHBsYW5lcyBwZXJwZW5kaWN1bGFyIHRvIHRoZSBheGlzIGlzIGFsc28gY2FsbGVkIGEgY3lsaW5kZXIuPGJyLz5cbiAqIFRoZSBzdXJmYWNlIGFyZWEgYW5kIHRoZSB2b2x1bWUgb2YgYSBjeWxpbmRlciBoYXZlIGJlZW4ga25vd24gc2luY2UgZGVlcCBhbnRpcXVpdHkuXG4gKiBAY2xhc3NEZXNjXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy9zY2VuZXMvZ2VvbWV0cnktYnJvd3Nlci5odG1sI0NvbmVHZW9tZXRyeVwiPjwvaWZyYW1lPlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gVGhlIHBhcmFtcy5cbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0aW5nIGEgQ29uZSwgYW5kIGFkZGluZyB0byBhcHA8L2NhcHRpb24+XG4gKiBuZXcgQ29uZSh7XG4gKiAgIGdlb21ldHJ5OiB7XG4gKiAgICAgcmFkaXVzVG9wOiAyLFxuICogICAgIHJhZGl1c0JvdHRvbTogNCxcbiAqICAgICBoZWlnaHQ6IDVcbiAqICAgfSxcbiAqXG4gKiAgIG1hdGVyaWFsOiBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICogICAgIGNvbG9yOiAweGZmZmZmZlxuICogICB9KSxcbiAqXG4gKiAgIHBvczogWzAsIDEwMCwgMF1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIENvbmUgZXh0ZW5kcyBNZXNoQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuQ29uZSNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeToge1xuICAgKiAgICAgcmFkaXVzOiAyMCxcbiAgICogICAgIGhlaWdodDogMTAwLFxuICAgKiAgICAgcmFkaXVzU2VnbWVudHM6IDMyLFxuICAgKiAgICAgaGVpZ2h0U2VnbWVudHM6IDEsXG4gICAqICAgICBvcGVuRW5kZWQ6IGZhbHNlLFxuICAgKiAgICAgdGhldGFTdGFydDogMCxcbiAgICogICAgIHRoZXRhTGVuZ3RoOiBNYXRoLlBJICogMlxuICAgKiAgIH1cbiAgICogfTwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG5cbiAgICBnZW9tZXRyeToge1xuICAgICAgcmFkaXVzOiAyMCxcbiAgICAgIGhlaWdodDogMTAwLFxuICAgICAgcmFkaXVzU2VnbWVudHM6IDMyLFxuICAgICAgaGVpZ2h0U2VnbWVudHM6IDEsXG4gICAgICBvcGVuRW5kZWQ6IGZhbHNlLFxuICAgICAgdGhldGFTdGFydDogMCxcbiAgICAgIHRoZXRhTGVuZ3RoOiBNYXRoLlBJICogMlxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSW5zdHJ1Y3Rpb25zXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLkNvbmUjaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICogZ2VvbWV0cnk6IFtcbiAgICogICAncmFkaXVzJyxcbiAgICogICAnaGVpZ2h0JyxcbiAgICogICAncmFkaXVzU2VnbWVudHMnLFxuICAgKiAgICdoZWlnaHRTZWdtZW50cycsXG4gICAqICAgJ29wZW5FbmRlZCcsXG4gICAqICAgJ3RoZXRhU3RhcnQnLFxuICAgKiAgICd0aGV0YUxlbmd0aCdcbiAgICogXVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMsXG4gICAgZ2VvbWV0cnk6IFtcbiAgICAgICdyYWRpdXMnLFxuICAgICAgJ2hlaWdodCcsXG4gICAgICAncmFkaXVzU2VnbWVudHMnLFxuICAgICAgJ2hlaWdodFNlZ21lbnRzJyxcbiAgICAgICdvcGVuRW5kZWQnLFxuICAgICAgJ3RoZXRhU3RhcnQnLFxuICAgICAgJ3RoZXRhTGVuZ3RoJ1xuICAgIF1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgQ29uZS5kZWZhdWx0cywgQ29uZS5pbnN0cnVjdGlvbnMpO1xuXG4gICAgaWYgKHBhcmFtcy5idWlsZCkge1xuICAgICAgdGhpcy5idWlsZChwYXJhbXMpO1xuICAgICAgc3VwZXIud3JhcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgY3JlYXRlcyBhIG1lc2ggdXNpbmcgaW5wdXQgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIENvbXBvbmVudCBwYXJhbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBCdWlsdCBtZXNoXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuQ29uZVxuICAgKi9cbiAgYnVpbGQocGFyYW1zID0gdGhpcy5wYXJhbXMpIHtcbiAgICBjb25zdCB7Z2VvbWV0cnksIG1hdGVyaWFsfSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuYnVpbGRHZW9tZXRyeShwYXJhbXMpLFxuICAgICAgbWF0ZXJpYWw6IHBhcmFtcy5tYXRlcmlhbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe21lc2g6IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCl9KS5tZXNoO1xuICB9XG5cbiAgYnVpbGRHZW9tZXRyeShwYXJhbXMgPSB7fSkge1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IChwYXJhbXMuYnVmZmVyID8gQ29uZUJ1ZmZlckdlb21ldHJ5IDogQ29uZUdlb21ldHJ5KShcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5yYWRpdXMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuaGVpZ2h0LFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnJhZGl1c1NlZ21lbnRzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmhlaWdodFNlZ21lbnRzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5Lm9wZW5FbmRlZCxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS50aGV0YVN0YXJ0LFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnRoZXRhTGVuZ3RoXG4gICAgKTtcblxuICAgIHJldHVybiBnZW9tZXRyeTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBDb25lXG59O1xuIiwiaW1wb3J0IHtcbiAgTWVzaCxcbiAgQ3lsaW5kZXJCdWZmZXJHZW9tZXRyeSxcbiAgQ3lsaW5kZXJHZW9tZXRyeVxufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgQ3lsaW5kZXJcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIEEgY3lsaW5kZXIgaXMgb25lIG9mIHRoZSBtb3N0IGJhc2ljIGN1cnZpbGluZWFyIGdlb21ldHJpYyBzaGFwZXMsIHRoZSBzdXJmYWNlIGZvcm1lZCBieSB0aGUgcG9pbnRzIGF0IGEgZml4ZWQgZGlzdGFuY2UgZnJvbSBhIGdpdmVuIHN0cmFpZ2h0IGxpbmUsIHRoZSBheGlzIG9mIHRoZSBjeWxpbmRlci4gPGJyLz48YnIvPlxuICogVGhlIHNvbGlkIGVuY2xvc2VkIGJ5IHRoaXMgc3VyZmFjZSBhbmQgYnkgdHdvIHBsYW5lcyBwZXJwZW5kaWN1bGFyIHRvIHRoZSBheGlzIGlzIGFsc28gY2FsbGVkIGEgY3lsaW5kZXIuPGJyLz5cbiAqIFRoZSBzdXJmYWNlIGFyZWEgYW5kIHRoZSB2b2x1bWUgb2YgYSBjeWxpbmRlciBoYXZlIGJlZW4ga25vd24gc2luY2UgZGVlcCBhbnRpcXVpdHkuXG4gKiBAY2xhc3NEZXNjXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy9zY2VuZXMvZ2VvbWV0cnktYnJvd3Nlci5odG1sI0N5bGluZGVyR2VvbWV0cnlcIj48L2lmcmFtZT5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIEN5bGluZGVyLCBhbmQgYWRkaW5nIHRvIGFwcDwvY2FwdGlvbj5cbiAqIG5ldyBDeWxpbmRlcih7XG4gKiAgIGdlb21ldHJ5OiB7XG4gKiAgICAgcmFkaXVzVG9wOiAyLFxuICogICAgIHJhZGl1c0JvdHRvbTogNCxcbiAqICAgICBoZWlnaHQ6IDVcbiAqICAgfSxcbiAqXG4gKiAgIG1hdGVyaWFsOiBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICogICAgIGNvbG9yOiAweGZmZmZmZlxuICogICB9KSxcbiAqXG4gKiAgIHBvczogWzAsIDEwMCwgMF1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIEN5bGluZGVyIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLkN5bGluZGVyI2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiB7XG4gICAqICAgICByYWRpdXNUb3A6IDIwLFxuICAgKiAgICAgcmFkaXVzQm90dG9tOiAyMCxcbiAgICogICAgIGhlaWdodDogMTAwLFxuICAgKiAgICAgcmFkaXVzU2VnbWVudHM6IDMyLFxuICAgKiAgICAgaGVpZ2h0U2VnbWVudHM6IDEsXG4gICAqICAgICBvcGVuRW5kZWQ6IGZhbHNlLFxuICAgKiAgICAgdGhldGFTdGFydDogMCxcbiAgICogICAgIHRoZXRhTGVuZ3RoOiBNYXRoLlBJICogMlxuICAgKiAgIH1cbiAgICogfTwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHJhZGl1c1RvcDogMCxcbiAgICAgIHJhZGl1c0JvdHRvbTogMSxcbiAgICAgIGhlaWdodDogMSxcbiAgICAgIHJhZGl1c1NlZ21lbnRzOiAzMixcbiAgICAgIGhlaWdodFNlZ21lbnRzOiAxLFxuICAgICAgb3BlbkVuZGVkOiBmYWxzZSxcbiAgICAgIHRoZXRhU3RhcnQ6IDAsXG4gICAgICB0aGV0YUxlbmd0aDogTWF0aC5QSSAqIDJcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5DeWxpbmRlciNpbnN0cnVjdGlvbnNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiBnZW9tZXRyeTogW1xuICAgKiAgICdyYWRpdXNUb3AnLFxuICAgKiAgICdyYWRpdXNCb3R0b20nLFxuICAgKiAgICdoZWlnaHQnLFxuICAgKiAgICdyYWRpdXNTZWdtZW50cycsXG4gICAqICAgJ2hlaWdodFNlZ21lbnRzJyxcbiAgICogICAnb3BlbkVuZGVkJyxcbiAgICogICAndGhldGFTdGFydCcsXG4gICAqICAgJ3RoZXRhTGVuZ3RoJ1xuICAgKiBdXG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGluc3RydWN0aW9ucyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50Lmluc3RydWN0aW9ucyxcbiAgICBnZW9tZXRyeTogW1xuICAgICAgJ3JhZGl1c1RvcCcsXG4gICAgICAncmFkaXVzQm90dG9tJyxcbiAgICAgICdoZWlnaHQnLFxuICAgICAgJ3JhZGl1c1NlZ21lbnRzJyxcbiAgICAgICdoZWlnaHRTZWdtZW50cycsXG4gICAgICAnb3BlbkVuZGVkJyxcbiAgICAgICd0aGV0YVN0YXJ0JyxcbiAgICAgICd0aGV0YUxlbmd0aCdcbiAgICBdXG4gIH07XG5cbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcbiAgICBzdXBlcihwYXJhbXMsIEN5bGluZGVyLmRlZmF1bHRzLCBDeWxpbmRlci5pbnN0cnVjdGlvbnMpO1xuXG4gICAgaWYgKHBhcmFtcy5idWlsZCkge1xuICAgICAgdGhpcy5idWlsZChwYXJhbXMpO1xuICAgICAgc3VwZXIud3JhcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgY3JlYXRlcyBhIG1lc2ggdXNpbmcgaW5wdXQgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIENvbXBvbmVudCBwYXJhbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBCdWlsdCBtZXNoXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuQ3lsaW5kZXJcbiAgICovXG4gIGJ1aWxkKHBhcmFtcyA9IHRoaXMucGFyYW1zKSB7XG4gICAgY29uc3Qge2dlb21ldHJ5LCBtYXRlcmlhbH0gPSB0aGlzLmFwcGx5QnJpZGdlKHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmJ1aWxkR2VvbWV0cnkocGFyYW1zKSxcbiAgICAgIG1hdGVyaWFsOiBwYXJhbXMubWF0ZXJpYWxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHttZXNoOiBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpfSkubWVzaDtcbiAgfVxuXG4gIGJ1aWxkR2VvbWV0cnkocGFyYW1zID0ge30pIHtcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyAocGFyYW1zLmJ1ZmZlciA/IEN5bGluZGVyQnVmZmVyR2VvbWV0cnkgOiBDeWxpbmRlckdlb21ldHJ5KShcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5yYWRpdXNUb3AsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkucmFkaXVzQm90dG9tLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmhlaWdodCxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5yYWRpdXNTZWdtZW50cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5oZWlnaHRTZWdtZW50cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5vcGVuRW5kZWQsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkudGhldGFTdGFydCxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS50aGV0YUxlbmd0aFxuICAgICk7XG5cbiAgICByZXR1cm4gZ2VvbWV0cnk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgQ3lsaW5kZXJcbn07XG4iLCJpbXBvcnQge1xuICBNZXNoLFxuICBEb2RlY2FoZWRyb25CdWZmZXJHZW9tZXRyeSxcbiAgRG9kZWNhaGVkcm9uR2VvbWV0cnlcbn0gZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQge01lc2hDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvcmUvTWVzaENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIERvZGVjYWhlZHJvblxuICogQGNhdGVnb3J5IGNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZGVzY3JpcHRpb24gSW4gZ2VvbWV0cnksIGEgZG9kZWNhaGVkcm9uIGlzIGFueSBwb2x5aGVkcm9uIHdpdGggdHdlbHZlIGZsYXQgZmFjZXMuIDxici8+PGJyLz5cbiAqIFRoZSBtb3N0IGZhbWlsaWFyIGRvZGVjYWhlZHJvbiBpcyB0aGUgcmVndWxhciBkb2RlY2FoZWRyb24sIHdoaWNoIGlzIGEgUGxhdG9uaWMgc29saWQuIDxici8+XG4gKiBUaGVyZSBhcmUgYWxzbyB0aHJlZSByZWd1bGFyIHN0YXIgZG9kZWNhaGVkcmEsIHdoaWNoIGFyZSBjb25zdHJ1Y3RlZCBhcyBzdGVsbGF0aW9ucyBvZiB0aGUgY29udmV4IGZvcm0uIDxici8+XG4gKiBBbGwgb2YgdGhlc2UgaGF2ZSBpY29zYWhlZHJhbCBzeW1tZXRyeSwgb3JkZXIgMTIwLlxuICogRG9kZWNhaGVkcm9uIGNyZWF0ZXMgRG9kZWNhaGVkcm9uIG9iamVjdCBieSBpdCdzIHJhZGl1cyBhbmQgZGV0YWlsLlxuICogQGNsYXNzRGVzY1xuICogPGlmcmFtZSBzcmM9XCJodHRwczovL3RocmVlanMub3JnL2RvY3Mvc2NlbmVzL2dlb21ldHJ5LWJyb3dzZXIuaHRtbCNEb2RlY2FoZWRyb25HZW9tZXRyeVwiPjwvaWZyYW1lPlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gVGhlIHBhcmFtcy5cbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0aW5nIGEgRG9kZWNhaGVkcm9uLCBhbmQgYWRkaW5nIHRvIGFwcDwvY2FwdGlvbj5cbiAqIG5ldyBEb2RlY2FoZWRyb24oe1xuICogICBnZW9tZXRyeToge1xuICogICAgIHJhZGl1czogMlxuICogICB9LFxuICpcbiAqICAgbWF0ZXJpYWw6IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gKiAgICAgY29sb3I6IDB4ZmZmZmZmXG4gKiAgIH0pLFxuICpcbiAqICAgcG9zaXRpb246IHtcbiAqICAgICB5OiAxMFxuICogICB9XG4gICogfSkuYWRkVG8oYXBwKTtcbiAqL1xuY2xhc3MgRG9kZWNhaGVkcm9uIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5Eb2RlY2FoZWRyb24jZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiBnZW9tZXRyeToge1xuICAgKiAgIHJhZGl1czogMSxcbiAgICogICBkZXRhaWw6IDBcbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50LmRlZmF1bHRzLFxuICAgIGdlb21ldHJ5OiB7XG4gICAgICByYWRpdXM6IDEsXG4gICAgICBkZXRhaWw6IDBcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5Eb2RlY2FoZWRyb24jaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICogZ2VvbWV0cnk6IFsncmFkaXVzJywgJ2RldGFpbCddXG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGluc3RydWN0aW9ucyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50Lmluc3RydWN0aW9ucyxcbiAgICBnZW9tZXRyeTogWydyYWRpdXMnLCAnZGV0YWlsJ11cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgRG9kZWNhaGVkcm9uLmRlZmF1bHRzLCBEb2RlY2FoZWRyb24uaW5zdHJ1Y3Rpb25zKTtcblxuICAgIGlmIChwYXJhbXMuYnVpbGQpIHtcbiAgICAgIHRoaXMuYnVpbGQocGFyYW1zKTtcbiAgICAgIHN1cGVyLndyYXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBidWlsZFxuICAgKiBAZGVzY3JpcHRpb24gQnVpbGQgbGl2ZWN5Y2xlIGNyZWF0ZXMgYSBtZXNoIHVzaW5nIGlucHV0IHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBDb21wb25lbnQgcGFyYW1ldGVycy5cbiAgICogQHJldHVybiB7VEhSRUUuTWVzaH0gQnVpbHQgbWVzaFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLkRvZGVjYWhlZHJvblxuICAgKi9cbiAgYnVpbGQocGFyYW1zID0gdGhpcy5wYXJhbXMpIHtcbiAgICBjb25zdCB7Z2VvbWV0cnksIG1hdGVyaWFsfSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuYnVpbGRHZW9tZXRyeShwYXJhbXMpLFxuICAgICAgbWF0ZXJpYWw6IHBhcmFtcy5tYXRlcmlhbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe21lc2g6IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCl9KS5tZXNoO1xuICB9XG5cbiAgYnVpbGRHZW9tZXRyeShwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgKHBhcmFtcy5idWZmZXIgPyBEb2RlY2FoZWRyb25CdWZmZXJHZW9tZXRyeSA6IERvZGVjYWhlZHJvbkdlb21ldHJ5KShcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5yYWRpdXMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuZGV0YWlsXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBEb2RlY2FoZWRyb25cbn07XG4iLCJpbXBvcnQge1xuICBNZXNoLFxuICBCdWZmZXJHZW9tZXRyeSxcbiAgRXh0cnVkZUdlb21ldHJ5XG59IGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHtNZXNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL01lc2hDb21wb25lbnQnO1xuXG4vKipcbiAqIEBjbGFzcyBFeHRydWRlXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBFeHRydWRlIGdlb21ldHJ5IG1lYW5zIHRoYXQgeW91IGNhbiBjcmVhdGUgYSAzRCBtZXNoIGZyb20gYW55IDJEIHNoYXBlIHVzaW5nIHRocmVlLmpzIGdlb21ldHJ5IGJhc2VkIG9uIDxhIGhyZWY9J2h0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy8jYXBpL21hdGgvVmVjdG9yMic+VEhSRUUuVmVjdG9yMi48L2E+IDxici8+XG4gKiBTdWNoIGltcGxlbWVudGF0aW9uIHdpbGwgaGVscCB5b3UgdG8gbWFrZSB2b2x1bWVkIHNoYXBlcyB0aGF0IGhhdmUgdGhlaXIgb3duIGRlcHRoIGFuZCBjYW4gYmUgc2VlbiBmcm9tIGFsbCBhbmdlbHMuPGJyLz48YnIvPlxuICogWW91IGNhbiBhbHNvIGZpbmQgc29tZSBpbnRlcmVzdGluZyBleGFtcGxlcyBtYWRlIHVzaW5nIDxhIGhyZWY9J3RocmVlanMub3JnJz50aHJlZS5qczwvYT4gd2hpY2ggaXMgYSBjb3JlIG9mIHdocy5qcywgc3VjaCBhczpcbiAqIC0gPGEgaHJlZj0naHR0cDovL3RocmVlanMub3JnL2V4YW1wbGVzL3dlYmdsX2dlb21ldHJ5X2V4dHJ1ZGVfc2hhcGVzLmh0bWwnPldlYmdsIGdlb21ldHJ5IGV4dHJ1ZGU8L2E+XG4gKiAtIDxhIGhyZWY9J2h0dHA6Ly90aHJlZWpzLm9yZy9leGFtcGxlcy93ZWJnbF9nZW9tZXRyeV9leHRydWRlX3NoYXBlczIuaHRtbCc+RXh0cnVkZSBzaGFwZXMgZnJvbSBnZW9kYXRhPC9hPlxuICogLSA8YSBocmVmPSdodHRwOi8vdGhyZWVqcy5vcmcvZXhhbXBsZXMvd2ViZ2xfZ2VvbWV0cnlfZXh0cnVkZV9zcGxpbmVzLmh0bWwnPkV4dHJ1ZGUgc3BsaW5lczwvYT5cbiAqXG4gKiBTdWNoIGV4YW1wbGVzIGNhbiBiZSBlYXNpbHkgaW1wbGVtZW50ZWQgdXNpbmcgd2hpdGVzdG9ybS5qcyBvciBpdCdzIHBsdWdpbnMuIFVzZSBgRXh0cnVkZWAgY2xhc3Mgd2l0aCA8YSBocmVmPSdodHRwczovL3RocmVlanMub3JnL2RvY3MvI2FwaS9leHRyYXMvY29yZS9TaGFwZSc+VEhSRUUuU2hhcGU8L2E+IHRvIGdldCBleHRydWRlIGVmZmVjdCBvZiBzaGFwZSBkZWZpbmVkIGJ5IDJEIHZlY3RvcnMuXG4gKiBUaGlzIGNsYXNzIGlzIHNpbWlsYXIgdG8gPGEgaHJlZj0naHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzLyNhcGkvZ2VvbWV0cmllcy9FeHRydWRlR2VvbWV0cnknPlRIUkVFLkV4dHJ1ZGVHZW9tZXRyeTwvYT4sXG4gKiBidXQgaXQgYWxzbyBjb250YWlucyBhbGwgcHJvcGVydGllcywgYXBwbGllZCBieSBgU2hhcGVgLCBzdWNoIGFzIG1hdGVyaWFsLCBtYXNzIGFuZCB2ZWN0b3JzIGxpa2UgcG9zaXRpb24gKHBvcykgYW5kIHJvdGF0aW9uIChyb3QpLlxuICogQGNsYXNzRGVzY1xuICogPGlmcmFtZSBzcmM9XCJodHRwczovL3RocmVlanMub3JnL2RvY3Mvc2NlbmVzL2dlb21ldHJ5LWJyb3dzZXIuaHRtbCNFeHRydWRlR2VvbWV0cnlcIj48L2lmcmFtZT5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIHNoYXBlLCB0aGVuIGFuIEV4dHJ1ZGUgZnJvbSBpdDwvY2FwdGlvbj5cbiAqIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKFtcbiAqICAgbmV3IFRIUkVFLlZlY3RvcjIoLTQsLTQpLFxuICogICBuZXcgVEhSRUUuVmVjdG9yMigtMiwwKSxcbiAqICAgbmV3IFRIUkVFLlZlY3RvcjIoLTQsNCksXG4gKiAgIG5ldyBUSFJFRS5WZWN0b3IyKDAsMiksXG4gKiAgIG5ldyBUSFJFRS5WZWN0b3IyKDQsNCksXG4gKiAgIG5ldyBUSFJFRS5WZWN0b3IyKDIsMCksXG4gKiAgIG5ldyBUSFJFRS5WZWN0b3IyKDQsLTQpLFxuICogICBuZXcgVEhSRUUuVmVjdG9yMigwLC0yKVxuICogXSk7XG4gKlxuICogY29uc3QgZXh0cnVkZSA9IG5ldyBFeHRydWRlKHtcbiAqICAgZ2VvbWV0cnk6IHtcbiAqICAgICBzaGFwZXM6IHNoYXBlLFxuICogICAgIG9wdGlvbnM6IHtcbiAqICAgICAgIGJldmVsRW5hYmxlZDogZmFsc2UsXG4gKiAgICAgICBiZXZlbFNpemU6IDAsXG4gKiAgICAgICBhbW91bnQ6IDJcbiAqICAgICB9XG4gKiAgIH0sXG4gKlxuICogICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAqICAgICBjb2xvcjogMHhmZmZmZmZcbiAqICAgfSksXG4gKlxuICogICBwb3NpdGlvbjogWzAsIDEwMCwgMF1cbiAqIH0pO1xuICpcbiAqIGV4dHJ1ZGUuYWRkVG8oYXBwKTtcbiAqL1xuY2xhc3MgRXh0cnVkZSBleHRlbmRzIE1lc2hDb21wb25lbnQge1xuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuRXh0cnVkZSNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeToge1xuICAgKiAgICAgc2hhcGVzOiBbXSxcbiAgICogICAgIG9wdGlvbnM6IHt9XG4gICAqICAgfVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHNoYXBlczogW10sXG4gICAgICBvcHRpb25zOiB7fVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSW5zdHJ1Y3Rpb25zXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLkV4dHJ1ZGUjaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiBbJ3NoYXBlcycsICdvcHRpb25zJ11cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMsXG4gICAgZ2VvbWV0cnk6IFsnc2hhcGVzJywgJ29wdGlvbnMnXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBFeHRydWRlLmRlZmF1bHRzLCBFeHRydWRlLmluc3RydWN0aW9ucyk7XG5cbiAgICBpZiAocGFyYW1zLmJ1aWxkKSB7XG4gICAgICB0aGlzLmJ1aWxkKHBhcmFtcyk7XG4gICAgICBzdXBlci53cmFwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYnVpbGRcbiAgICogQGRlc2NyaXB0aW9uIEJ1aWxkIGxpdmVjeWNsZSBjcmVhdGVzIGEgbWVzaCB1c2luZyBpbnB1dCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgQ29tcG9uZW50IHBhcmFtZXRlcnMuXG4gICAqIEByZXR1cm4ge1RIUkVFLk1lc2h9IEJ1aWx0IG1lc2hcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5FeHRydWRlXG4gICAqL1xuICBidWlsZChwYXJhbXMgPSB0aGlzLnBhcmFtcykge1xuICAgIGNvbnN0IHtnZW9tZXRyeSwgbWF0ZXJpYWx9ID0gdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICBnZW9tZXRyeTogdGhpcy5idWlsZEdlb21ldHJ5KHBhcmFtcyksXG4gICAgICBtYXRlcmlhbDogcGFyYW1zLm1hdGVyaWFsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bWVzaDogbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKX0pLm1lc2g7XG4gIH1cblxuICBidWlsZEdlb21ldHJ5KHBhcmFtcyA9IHt9KSB7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgRXh0cnVkZUdlb21ldHJ5KFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnNoYXBlcyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5vcHRpb25zXG4gICAgKTtcblxuICAgIHJldHVybiBwYXJhbXMuYnVmZmVyID8gbmV3IEJ1ZmZlckdlb21ldHJ5KCkuZnJvbUdlb21ldHJ5KGdlb21ldHJ5KSA6IGdlb21ldHJ5O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIEV4dHJ1ZGVcbn07XG4iLCJpbXBvcnQge1xuICBNZXNoLFxuICBJY29zYWhlZHJvbkJ1ZmZlckdlb21ldHJ5LFxuICBJY29zYWhlZHJvbkdlb21ldHJ5XG59IGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHtNZXNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL01lc2hDb21wb25lbnQnO1xuXG4vKipcbiAqIEBjbGFzcyBJY29zYWhlZHJvblxuICogQGNhdGVnb3J5IGNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZGVzY3JpcHRpb24gSW4gZ2VvbWV0cnksIGFuIGljb3NhaGVkcm9uIGlzIGEgcG9seWhlZHJvbiB3aXRoIDIwIGZhY2VzLjxici8+XG4gKiBUaGVyZSBhcmUgbWFueSBraW5kcyBvZiBpY29zYWhlZHJhLCB3aXRoIHNvbWUgYmVpbmcgbW9yZSBzeW1tZXRyaWNhbCB0aGFuIG90aGVycy4gVGhlIG1vc3Qgd2VsbCBrbm93biBpcyB0aGUgUGxhdG9uaWMsIGNvbnZleCByZWd1bGFyIGljb3NhaGVkcm9uLjxici8+XG4gKiBgSWNvc2FoZWRyb25gIGNyZWF0ZXMgYW4gSWNvc2FoZWRyb24gb2JqZWN0IGJ5IGl0cyByYWRpdXMgYW5kIGRldGFpbC5cbiAqIEBjbGFzc0Rlc2NcbiAqIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzL3NjZW5lcy9nZW9tZXRyeS1icm93c2VyLmh0bWwjSWNvc2FoZWRyb25HZW9tZXRyeVwiPjwvaWZyYW1lPlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gVGhlIHBhcmFtcy5cbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0aW5nIGEgSWNvc2FoZWRyb24sIGFuZCBhZGRpbmcgdG8gYXBwPC9jYXB0aW9uPlxuICogbmV3IEljb3NhaGVkcm9uKHtcbiAqICAgZ2VvbWV0cnk6IHtcbiAqICAgICByYWRpdXM6IDIsXG4gKiAgICAgZGV0YWlsOiAxXG4gKiAgIH0sXG4gKlxuICogICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAqICAgICBjb2xvcjogMHhmZmZmZmZcbiAqICAgfSksXG4gKlxuICogICBwb3NpdGlvbjogWzAsIDEwMCwgMF1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIEljb3NhaGVkcm9uIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5JY29zYWhlZHJvbiNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeToge1xuICAgKiAgICAgcmFkaXVzOiAxLFxuICAgKiAgICAgZGV0YWlsOiAwXG4gICAqICAgfVxuICAgKiB9PC9wcmU+XG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdHMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5kZWZhdWx0cyxcbiAgICBnZW9tZXRyeToge1xuICAgICAgcmFkaXVzOiAxLFxuICAgICAgZGV0YWlsOiAwXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJbnN0cnVjdGlvbnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuSWNvc2FoZWRyb24jaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQge2dlb21ldHJ5OiBbJ3JhZGl1cycsICdkZXRhaWwnXX1cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMsXG4gICAgZ2VvbWV0cnk6IFsncmFkaXVzJywgJ2RldGFpbCddXG4gIH07XG5cbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcbiAgICBzdXBlcihwYXJhbXMsIEljb3NhaGVkcm9uLmRlZmF1bHRzLCBJY29zYWhlZHJvbi5pbnN0cnVjdGlvbnMpO1xuXG4gICAgaWYgKHBhcmFtcy5idWlsZCkge1xuICAgICAgdGhpcy5idWlsZChwYXJhbXMpO1xuICAgICAgc3VwZXIud3JhcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgY3JlYXRlcyBhIG1lc2ggdXNpbmcgaW5wdXQgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIENvbXBvbmVudCBwYXJhbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBCdWlsdCBtZXNoXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuSWNvc2FoZWRyb25cbiAgICovXG4gIGJ1aWxkKHBhcmFtcyA9IHRoaXMucGFyYW1zKSB7XG4gICAgY29uc3Qge2dlb21ldHJ5LCBtYXRlcmlhbH0gPSB0aGlzLmFwcGx5QnJpZGdlKHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmJ1aWxkR2VvbWV0cnkocGFyYW1zKSxcbiAgICAgIG1hdGVyaWFsOiBwYXJhbXMubWF0ZXJpYWxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHttZXNoOiBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpfSkubWVzaDtcbiAgfVxuXG4gIGJ1aWxkR2VvbWV0cnkocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gbmV3IChwYXJhbXMuYnVmZmVyID8gSWNvc2FoZWRyb25CdWZmZXJHZW9tZXRyeSA6IEljb3NhaGVkcm9uR2VvbWV0cnkpKFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnJhZGl1cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5kZXRhaWxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIEljb3NhaGVkcm9uXG59O1xuIiwiaW1wb3J0IHtcbiAgTWVzaCxcbiAgTGF0aGVCdWZmZXJHZW9tZXRyeSxcbiAgTGF0aGVHZW9tZXRyeVxufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgTGF0aGVcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIEEgYExhdGhlR2VvbWV0cnlgIGFsbG93cyB5b3UgdG8gY3JlYXRlIHNoYXBlcyBmcm9tIGEgc21vb3RoIGN1cnZlLlxuICogVGhpcyBjdXJ2ZSBpcyBkZWZpbmVkIGJ5IGEgbnVtYmVyIG9mIHBvaW50cyAoYWxzbyBjYWxsZWQga25vdHMpIGFuZCBpcyBtb3N0IG9mdGVuIGNhbGxlZCBhIHNwbGluZS4gVGhpcyBzcGxpbmUgaXMgcm90YXRlZCBhcm91bmQgYSBmaXhlZCBwb2ludCBhbmQgcmVzdWx0cyBpbiB2YXNlLSBhbmQgYmVsbC1saWtlIHNoYXBlcy48YnIvPjxici8+XG4gKiBJbiAzRCBjb21wdXRlciBncmFwaGljcywgYSBsYXRoZWQgb2JqZWN0IGlzIGEgM0QgbW9kZWwgd2hvc2UgdmVydGV4IGdlb21ldHJ5IGlzIHByb2R1Y2VkIGJ5IHJvdGF0aW5nIHRoZSBwb2ludHMgb2YgYSBzcGxpbmUgb3Igb3RoZXIgcG9pbnQgc2V0IGFyb3VuZCBhIGZpeGVkIGF4aXMuXG4gKiBUaGUgbGF0aGluZyBtYXkgYmUgcGFydGlhbDsgdGhlIGFtb3VudCBvZiByb3RhdGlvbiBpcyBub3QgbmVjZXNzYXJpbHkgYSBmdWxsIDM2MCBkZWdyZWVzLlxuICogVGhlIHBvaW50IHNldCBwcm92aWRpbmcgdGhlIGluaXRpYWwgc291cmNlIGRhdGEgY2FuIGJlIHRob3VnaHQgb2YgYXMgYSBjcm9zcyBzZWN0aW9uIHRocm91Z2ggdGhlIG9iamVjdCBhbG9uZyBhIHBsYW5lIGNvbnRhaW5pbmcgaXRzIGF4aXMgb2YgcmFkaWFsIHN5bW1ldHJ5LiA8YnIvPjxici8+XG4gKiBUaGUgPGEgaHJlZj0naHR0cDovL3RocmVlanMub3JnL2RvY3Mvc2NlbmVzL2dlb21ldHJ5LWJyb3dzZXIuaHRtbCNMYXRoZUdlb21ldHJ5Jz5mb2xsb3dpbmcgZXhhbXBsZTwvYT4gc2hvd3MgYSBnZW9tZXRyeSB3aGljaCBjYW4gYmUgZ2VuZXJhdGVkIHVzaW5nIGBMYXRoZWAgY2xhc3MuXG4gKiBAY2xhc3NEZXNjXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy9zY2VuZXMvZ2VvbWV0cnktYnJvd3Nlci5odG1sI0xhdGhlR2VvbWV0cnlcIj48L2lmcmFtZT5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIExhdGgsIGFuZCBhZGRpbmcgdG8gYXBwPC9jYXB0aW9uPlxuICogY29uc3QgcG9pbnRzID0gW107XG4gKlxuICogZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gKiAgIHBvaW50cy5wdXNoKFxuICogICAgIG5ldyBUSFJFRS5WZWN0b3IyKFxuICogICAgICAgKE1hdGguc2luKGkgKiAwLjcpICogMTUgKyA1MCkgLyAxMCxcbiAqICAgICAgIChpIC0gNSkgKiAwLjJcbiAqICAgICApXG4gKiAgICk7XG4gKiB9XG4gKlxuICogY29uc3QgbGF0aGUgPSBuZXcgTGF0aGUoe1xuICogICBnZW9tZXRyeToge1xuICogICAgIHBvaW50czogcG9pbnRzXG4gKiAgIH0sXG4gKlxuICogICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAqICAgICBjb2xvcjogMHhmZmZmZmZcbiAqICAgfSksXG4gKlxuICogICBwb3NpdGlvbjogWzAsIDUwLCAxMF1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIExhdGhlIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5MYXRoZSNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeToge1xuICAgKiAgICAgcG9pbnRzOiBbXVxuICAgKiAgIH1cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50LmRlZmF1bHRzLFxuICAgIGdlb21ldHJ5OiB7XG4gICAgICBwb2ludHM6IFtdXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJbnN0cnVjdGlvbnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuTGF0aGUjaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT57XG4gICAqICAgZ2VvbWV0cnk6IFsncG9pbnRzJ11cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMsXG4gICAgZ2VvbWV0cnk6IFsncG9pbnRzJ11cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgTGF0aGUuZGVmYXVsdHMsIExhdGhlLmluc3RydWN0aW9ucyk7XG5cbiAgICBpZiAocGFyYW1zLmJ1aWxkKSB7XG4gICAgICB0aGlzLmJ1aWxkKHBhcmFtcyk7XG4gICAgICBzdXBlci53cmFwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYnVpbGRcbiAgICogQGRlc2NyaXB0aW9uIEJ1aWxkIGxpdmVjeWNsZSBjcmVhdGVzIGEgbWVzaCB1c2luZyBpbnB1dCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgQ29tcG9uZW50IHBhcmFtZXRlcnMuXG4gICAqIEByZXR1cm4ge1RIUkVFLk1lc2h9IEJ1aWx0IG1lc2hcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5MYXRoZVxuICAgKi9cbiAgYnVpbGQocGFyYW1zID0gdGhpcy5wYXJhbXMpIHtcbiAgICBjb25zdCB7Z2VvbWV0cnksIG1hdGVyaWFsfSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuYnVpbGRHZW9tZXRyeShwYXJhbXMpLFxuICAgICAgbWF0ZXJpYWw6IHBhcmFtcy5tYXRlcmlhbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe21lc2g6IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCl9KS5tZXNoO1xuICB9XG5cbiAgYnVpbGRHZW9tZXRyeShwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgKHBhcmFtcy5idWZmZXIgPyBMYXRoZUJ1ZmZlckdlb21ldHJ5IDogTGF0aGVHZW9tZXRyeSkoXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkucG9pbnRzXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBMYXRoZVxufTtcbiIsImltcG9ydCB7XG4gIExpbmUgYXMgTGluZU5hdGl2ZSxcbiAgQnVmZmVyR2VvbWV0cnksXG4gIEdlb21ldHJ5LFxuICBCdWZmZXJBdHRyaWJ1dGUsXG4gIExpbmVDdXJ2ZTMsXG4gIFZlY3RvcjNcbn0gZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQge01lc2hDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvcmUvTWVzaENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIExpbmVcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIExpbmUgY29tcG9uZW50IGlzIGdlbmVyYXRlZCBmcm9tIGEgY3VydmUvbGluZSBhbmQgYW1vdW50IG9mIHZlY3RvcnMgdGhhdCBzaG91bGQgYmUgdXNlZCAocG9pbnRzKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIExpbmUsIGFuZCBhZGRpbmcgdG8gYXBwPC9jYXB0aW9uPlxuICogbmV3IExpbmUoe1xuICogICBnZW9tZXRyeToge1xuICogICAgIGN1cnZlOiBuZXcgVEhSRUUuTGluZUN1cnZlMyhuZXcgVEhSRUUuVmVjdG9yMygxMCwgMTAsIDApLCBuZXcgVEhSRUUuVmVjdG9yMygxMCwgMzAsIDApKVxuICogICB9LFxuICpcbiAqICAgbWF0ZXJpYWw6IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gKiAgICAgY29sb3I6IDB4ZmZmZmZmXG4gKiAgIH0pXG4gKiB9KS5hZGRUbyhhcHApO1xuICovXG5jbGFzcyBMaW5lIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5MaW5lI2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiB7XG4gICAqICAgICBjdXJ2ZTogbmV3IExpbmVDdXJ2ZTMobmV3IFZlY3RvcjMoMCwgMCwgMCksIG5ldyBWZWN0b3IzKDEwLCAwLCAwKSksXG4gICAqICAgICBwb2ludHM6IDUwXG4gICAqICAgfVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIGN1cnZlOiBuZXcgTGluZUN1cnZlMyhuZXcgVmVjdG9yMygwLCAwLCAwKSwgbmV3IFZlY3RvcjMoMTAsIDAsIDApKSxcbiAgICAgIHBvaW50czogNTBcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5MaW5lI2luc3RydWN0aW9uc1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+e1xuICAgKiAgIGdlb21ldHJ5OiBbJ2N1cnZlJywgJ3BvaW50cyddXG4gICAqIH1cbiAgICogPC9wcmU+XG4gICAqL1xuICBzdGF0aWMgaW5zdHJ1Y3Rpb25zID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuaW5zdHJ1Y3Rpb25zLFxuICAgIGdlb21ldHJ5OiBbJ2N1cnZlJywgJ3BvaW50cyddXG4gIH07XG5cbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgc3VwZXIocGFyYW1zLCBMaW5lLmRlZmF1bHRzLCBMaW5lLmluc3RydWN0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBidWlsZFxuICAgKiBAZGVzY3JpcHRpb24gQnVpbGQgbGl2ZWN5Y2xlIGNyZWF0ZXMgYSBtZXNoIHVzaW5nIGlucHV0IHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBDb21wb25lbnQgcGFyYW1ldGVycy5cbiAgICogQHJldHVybiB7VEhSRUUuTWVzaH0gQnVpbHQgbWVzaFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLkxpbmVcbiAgICovXG4gIGJ1aWxkKHBhcmFtcyA9IHRoaXMucGFyYW1zKSB7XG4gICAgY29uc3Qge2dlb21ldHJ5LCBtYXRlcmlhbH0gPSB0aGlzLmFwcGx5QnJpZGdlKHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmJ1aWxkR2VvbWV0cnkocGFyYW1zKSxcbiAgICAgIG1hdGVyaWFsOiBwYXJhbXMubWF0ZXJpYWxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHttZXNoOiBuZXcgTGluZU5hdGl2ZShnZW9tZXRyeSwgbWF0ZXJpYWwpfSkubWVzaDtcbiAgfVxuXG4gIGJ1aWxkR2VvbWV0cnkocGFyYW1zID0ge30pIHtcbiAgICBjb25zdCBnZW9tZXRyeSA9IHBhcmFtcy5idWZmZXIgPyBuZXcgQnVmZmVyR2VvbWV0cnkoKSA6IG5ldyBHZW9tZXRyeSgpO1xuXG4gICAgaWYgKHBhcmFtcy5idWZmZXIpIHtcbiAgICAgIGNvbnN0IHBwID0gcGFyYW1zLmdlb21ldHJ5LmN1cnZlLmdldFBvaW50cyhwYXJhbXMuZ2VvbWV0cnkucG9pbnRzKTtcbiAgICAgIGNvbnN0IHZlcnRzID0gbmV3IEZsb2F0MzJBcnJheShwcC5sZW5ndGggKiAzKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIG1heCA9IHBwLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGkzID0gaSAqIDM7XG5cbiAgICAgICAgdmVydHNbaTNdID0gcHBbaV0ueDtcbiAgICAgICAgdmVydHNbaTMgKyAxXSA9IHBwW2ldLnk7XG4gICAgICAgIHZlcnRzW2kzICsgMl0gPSBwcFtpXS56O1xuICAgICAgfVxuXG4gICAgICBnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZSh2ZXJ0cywgMykpO1xuICAgIH0gZWxzZSBnZW9tZXRyeS52ZXJ0aWNlcyA9IHBhcmFtcy5nZW9tZXRyeS5jdXJ2ZS5nZXRQb2ludHMocGFyYW1zLmdlb21ldHJ5LnBvaW50cyk7XG5cbiAgICByZXR1cm4gZ2VvbWV0cnk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgTGluZVxufTtcbiIsImltcG9ydCB7XG4gIE1lc2gsXG4gIEpTT05Mb2FkZXJcbn0gZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQge01lc2hDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvcmUvTWVzaENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIEltcG9ydGVyXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBJbXBvcnRlciBpcyBhIGxvYWRlciBmb3IgbWVzaGVzIGFuZCBhbnkgb3RoZXIgZGF0YSB0byB5b3VyIHNjZW5lXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBUaGUgcGFyYW1zLlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuTWVzaENvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlc1xuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRpbmcgYSBJbXBvcnRlciwgYW5kIGFkZGluZyB0byBhcHA8L2NhcHRpb24+XG4gKiBuZXcgSW1wb3J0ZXIoe1xuICogICBsb2FkZXI6IG5ldyBUSFJFRS5PQkpMb2FkZXIoKSxcbiAqXG4gKiAgIHBhcnNlcihnZW9tZXRyeSwgbWF0ZXJpYWwpIHsgLy8gZGF0YSBmcm9tIGxvYWRlclxuICogICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpOyAvLyBzaG91bGQgcmV0dXJuIHlvdXIgLm5hdGl2ZSAobWVzaCBpbiB0aGlzIGNhc2UpXG4gKiAgIH0sXG4gKlxuICogICBwb3NpdGlvbjogWzAsIDEwMCwgMF1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIEltcG9ydGVyIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLkltcG9ydGVyI2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIHVybDogJycsXG4gICAqICAgbG9hZGVyOiBuZXcgSlNPTkxvYWRlcigpLFxuICAgKlxuICAgKiAgIG9uTG9hZCgpIHt9LFxuICAgKiAgIG9uUHJvZ3Jlc3MoKSB7fSxcbiAgICogICBvbkVycm9yKCkge30sXG4gICAqXG4gICAqICAgdGV4dHVyZVBhdGg6IG51bGwsXG4gICAqICAgdXNlQ3VzdG9tTWF0ZXJpYWw6IGZhbHNlLFxuICAgKlxuICAgKiAgIHBhcnNlcihnZW9tZXRyeSwgbWF0ZXJpYWxzKSB7XG4gICAqICAgICByZXR1cm4gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFscyk7XG4gICAqICAgfVxuICAgKiB9PC9wcmU+XG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdHMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5kZWZhdWx0cyxcblxuICAgIHVybDogJycsXG4gICAgbG9hZGVyOiBuZXcgSlNPTkxvYWRlcigpLFxuXG4gICAgb25Mb2FkKCkge30sXG4gICAgb25Qcm9ncmVzcygpIHt9LFxuICAgIG9uRXJyb3IoKSB7fSxcblxuICAgIHRleHR1cmVQYXRoOiBudWxsLFxuICAgIHVzZUN1c3RvbU1hdGVyaWFsOiBmYWxzZSxcblxuICAgIHBhcnNlcihnZW9tZXRyeSwgbWF0ZXJpYWxzKSB7XG4gICAgICByZXR1cm4gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFscyk7XG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnNcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBmaWx0ZXJcbiAgICogQGRlc2NyaXB0aW9uIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBzdGF0aWNcbiAgICogQHBhcmFtIHtUSFJFRS5NZXNofSBvYmplY3QgSW5zdGFuY2UgZm9yIGl0ZXJhdGluZyB0aHJvdWdoIGl0J3MgY2hpbGRyZW4uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZpbHRlciBGdW5jdGlvbiB3aXRoIGNoaWxkIGFzIGFyZ3VtZW50LCBzaG91bGQgcmV0dXJuIGEgYm9vbGVhbiB3aGV0aGVyIGluY2x1ZGUgdGhlIGNoaWxkIG9yIG5vdC5cbiAgICogQHJldHVybiB7VEhSRUUuTWVzaH0gb2JqZWN0IHdpdGggY2hpbGRyZW5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5JbXBvcnRlclxuICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5SZW1vdmluZyB1bm5lY2Vzc2FyeSBsaWdodHMgZnJvbSBjaGlsZHJlbjwvY2FwdGlvbj5cbiAgICogbmV3IEljb3NhaGVkcm9uKHtcbiAgICogICBsb2FkZXI6IG5ldyBUSFJFRS5PQkpMb2FkZXIoKSxcbiAgICpcbiAgICogICBwYXJzZShncm91cCkgeyAvLyBkYXRhIGZyb20gbG9hZGVyXG4gICAqICAgICByZXR1cm4gSW1wb3J0ZXIuZmlsdGVyKGdyb3VwLCBjaGlsZCA9PiAhY2hpbGQuaXNMaWdodCk7IC8vIHJlbW92ZSBsaWdodHNcbiAgICogICB9LFxuICAgKlxuICAgKiAgIHBvc2l0aW9uOiBbMCwgMTAwLCAwXVxuICAgKiB9KS5hZGRUbyhhcHApO1xuICAgKi9cbiAgc3RhdGljIGZpbHRlcihvYmplY3QsIGZpbHRlcikge1xuICAgIGNvbnN0IHByb2Nlc3NGaWx0ZXIgPSBvYmplY3QgPT4ge1xuICAgICAgb2JqZWN0LmNoaWxkcmVuLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoZWwuY2hpbGRyZW4pIHByb2Nlc3NGaWx0ZXIoZWwpO1xuICAgICAgICBpZiAoIWZpbHRlcihlbCkpIG9iamVjdC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfTtcblxuICAgIHJldHVybiBwcm9jZXNzRmlsdGVyKG9iamVjdCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgSW1wb3J0ZXIuZGVmYXVsdHMsIEltcG9ydGVyLmluc3RydWN0aW9ucywgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYnVpbGRcbiAgICogQGRlc2NyaXB0aW9uIEJ1aWxkIGxpdmVjeWNsZSBjcmVhdGVzIGEgbWVzaCB1c2luZyBpbnB1dCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgQ29tcG9uZW50IHBhcmFtZXRlcnMuXG4gICAqIEByZXR1cm4ge1RIUkVFLk1lc2h9IEJ1aWx0IG1lc2hcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5JbXBvcnRlclxuICAgKi9cbiAgYnVpbGQocGFyYW1zID0ge30pIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAocGFyYW1zLnRleHR1cmVQYXRoKSBwYXJhbXMubGFvZGVyLnNldFRleHR1cmVQYXRoKHBhcmFtcy50ZXh0dXJlUGF0aCk7XG5cbiAgICAgIHBhcmFtcy5sb2FkZXIubG9hZChwYXJhbXMudXJsLCAoLi4uZGF0YSkgPT4geyAvLyBnZW9tZXRyeSwgbWF0ZXJpYWxzXG4gICAgICAgIHBhcmFtcy5vbkxvYWQoLi4uZGF0YSk7XG5cbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gdGhpcy5hcHBseUJyaWRnZSh7bWVzaDogcGFyYW1zLnBhcnNlciguLi5kYXRhKX0pLm1lc2g7XG5cbiAgICAgICAgY29uc3Qge2dlb21ldHJ5OiBnZW9tLCBtYXRlcmlhbDogbWF0fSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe1xuICAgICAgICAgIGdlb21ldHJ5OiBvYmplY3QuZ2VvbWV0cnksXG4gICAgICAgICAgbWF0ZXJpYWw6IHBhcmFtcy51c2VDdXN0b21NYXRlcmlhbCA/IHBhcmFtcy5tYXRlcmlhbCA6IG9iamVjdC5tYXRlcmlhbFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob2JqZWN0Lmdlb21ldHJ5KSBvYmplY3QuZ2VvbWV0cnkgPSBnZW9tO1xuICAgICAgICBpZiAob2JqZWN0Lm1hdGVyaWFsKSBvYmplY3QubWF0ZXJpYWwgPSBtYXQ7XG5cbiAgICAgICAgcmVzb2x2ZShvYmplY3QpO1xuICAgICAgfSwgcGFyYW1zLm9uUHJvZ3Jlc3MsIHBhcmFtcy5vbkVycm9yKTtcbiAgICB9KTtcblxuICAgIHN1cGVyLndhaXQocHJvbWlzZSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBJbXBvcnRlclxufTtcbiIsImltcG9ydCB7XG4gIE1lc2gsXG4gIE9jdGFoZWRyb25CdWZmZXJHZW9tZXRyeSxcbiAgT2N0YWhlZHJvbkdlb21ldHJ5XG59IGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHtNZXNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL01lc2hDb21wb25lbnQnO1xuXG4vKipcbiAqIEBjbGFzcyBPY3RhaGVkcm9uXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBJbiBnZW9tZXRyeSwgYW4gb2N0YWhlZHJvbiBpcyBhIHBvbHloZWRyb24gd2l0aCBlaWdodCBmYWNlcy5cbiAqIEEgcmVndWxhciBvY3RhaGVkcm9uIGlzIGEgUGxhdG9uaWMgc29saWQgY29tcG9zZWQgb2YgZWlnaHQgZXF1aWxhdGVyYWwgdHJpYW5nbGVzLCBmb3VyIG9mIHdoaWNoIG1lZXQgYXQgZWFjaCB2ZXJ0ZXguXG4gKiA8YnIvPjxici8+XG4gKiBgT2N0YWhlZHJvbmAgY3JlYXRlcyBhbiBPY3RhaGVkcm9uIG9iamVjdCBieSBpdHMgYHJhZGl1c2AgYW5kIGBkZXRhaWxgLlxuICogQGNsYXNzRGVzY1xuICogPGlmcmFtZSBzcmM9XCJodHRwczovL3RocmVlanMub3JnL2RvY3Mvc2NlbmVzL2dlb21ldHJ5LWJyb3dzZXIuaHRtbCNPY3RhaGVkcm9uR2VvbWV0cnlcIj48L2lmcmFtZT5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhbiBPY3RhaGVkcm9uLCBhbmQgYWRkaW5nIHRvIGFwcDwvY2FwdGlvbj5cbiAqIG5ldyBPY3RhaGVkcm9uKHtcbiAqICAgZ2VvbWV0cnk6IHtcbiAqICAgICByYWRpdXM6IDIsXG4gKiAgICAgZGV0YWlsOiAxXG4gKiAgIH0sXG4gKlxuICogICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAqICAgICBjb2xvcjogMHhmZmZmZmZcbiAqICAgfSksXG4gKlxuICogICBwb3NpdGlvbjogWzAsIDEwMCwgMF1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIE9jdGFoZWRyb24gZXh0ZW5kcyBNZXNoQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLk9jdGFoZWRyb24jZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgZ2VvbWV0cnk6IHtcbiAgICogICAgIHJhZGl1czogMSxcbiAgICogICAgIGRldGFpbDogMFxuICAgKiAgIH1cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50LmRlZmF1bHRzLFxuICAgIGdlb21ldHJ5OiB7XG4gICAgICByYWRpdXM6IDEsXG4gICAgICBkZXRhaWw6IDBcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgT2N0YWhlZHJvbi5kZWZhdWx0cywgT2N0YWhlZHJvbi5pbnN0cnVjdGlvbnMpO1xuXG4gICAgaWYgKHBhcmFtcy5idWlsZCkge1xuICAgICAgdGhpcy5idWlsZChwYXJhbXMpO1xuICAgICAgc3VwZXIud3JhcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgY3JlYXRlcyBhIG1lc2ggdXNpbmcgaW5wdXQgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIENvbXBvbmVudCBwYXJhbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBCdWlsdCBtZXNoXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuT2N0YWhlZHJvblxuICAgKi9cbiAgYnVpbGQocGFyYW1zID0gdGhpcy5wYXJhbXMpIHtcbiAgICBjb25zdCB7Z2VvbWV0cnksIG1hdGVyaWFsfSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuYnVpbGRHZW9tZXRyeShwYXJhbXMpLFxuICAgICAgbWF0ZXJpYWw6IHBhcmFtcy5tYXRlcmlhbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe21lc2g6IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCl9KS5tZXNoO1xuICB9XG5cbiAgYnVpbGRHZW9tZXRyeShwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgKHBhcmFtcy5idWZmZXIgPyBPY3RhaGVkcm9uQnVmZmVyR2VvbWV0cnkgOiBPY3RhaGVkcm9uR2VvbWV0cnkpKFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnJhZGl1cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5kZXRhaWxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIE9jdGFoZWRyb25cbn07XG4iLCJpbXBvcnQge1xuICBNZXNoLFxuICBQYXJhbWV0cmljQnVmZmVyR2VvbWV0cnksXG4gIFBhcmFtZXRyaWNHZW9tZXRyeSxcbiAgVmVjdG9yM1xufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgUGFyYW1ldHJpY1xuICogQGNhdGVnb3J5IGNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZGVzY3JpcHRpb24gYFBhcmFtZXRyaWNgIGdlbmVyYXRlcyBhIGdlb21ldHJ5IHJlcHJlc2VudGluZyBhIDxhIGhyZWY9J2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1BhcmFtZXRyaWNfc3VyZmFjZSc+UGFyYW1ldHJpYyBzdXJmYWNlPC9hPlxuICogPGJyLz48YnIvPlxuICogSXQgaXMgdXN1YWxseSB1c2VkIHRvIGRldmVsb3AgZGlmZmVyZW50IGtpbmRzIG9mIGhpZ2hmaWVsZHMgb3IgdmlzdWFsaXplIGEgPGEgaHJlZj0naHR0cHM6Ly9zdGVta29za2kuZ2l0aHViLmlvL1RocmVlLmpzL0dyYXBodWx1cy1GdW5jdGlvbi5odG1sJz5tYXRoIGZ1bmN0aW9uPC9hPi5cbiAqIDxici8+XG4gKiAtIDxhIGhyZWY9J2h0dHA6Ly9tYXRoLmh3cy5lZHUvZ3JhcGhpY3Nib29rL3NvdXJjZS90aHJlZWpzL2N1cnZlcy1hbmQtc3VyZmFjZXMuaHRtbCc+UGFyYW1ldHJpYyBzdXJmYWNlPC9hPlxuICogLSA8YSBocmVmPSdodHRwczovL3N0ZW1rb3NraS5naXRodWIuaW8vVGhyZWUuanMvR3JhcGh1bHVzLVN1cmZhY2UuaHRtbCc+XCJHcmFwaHVsdXNcIjwvYT5cbiAqIDxici8+PGJyLz5cbiAqIEBjbGFzc0Rlc2NcbiAqIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzL3NjZW5lcy9nZW9tZXRyeS1icm93c2VyLmh0bWwjUGFyYW1ldHJpY0dlb21ldHJ5XCI+PC9pZnJhbWU+XG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBUaGUgcGFyYW1zLlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuTWVzaENvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlc1xuICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSBjcmVhdGluZyBhbiBoZWlnaHRmaWVsZC1saWtlIGdlb21ldHJ5LiBgdWAgYW5kIGB2YCBhcmUgbGlrZSBgeGAgYW5kIGB5YCBpbiBzaGFwZSwgYnV0IHRoZWlyIHZhbHVlcyBhcmUgYWx3YXlzIGZyb20gYDBgIHRvIGAxYC5cbiAqIFdlIHVzZSB0aGVtIGluIGBUSFJFRS5WZWN0b3IzYCBsaWtlIGB4YCBhbmQgYHpgIGFuZCBgTWF0aC5yYW5kb20oKSAqIDVgIGZvciBgeWAuPC9jYXB0aW9uPlxuICogY29uc3QgY3JlYXRlUGFyYW1ldHJpYyA9ICh1LCB2KSA9PiB7XG4gKiAgIHJldHVybiBuZXcgVEhSRUUuVmVjdG9yMyh1ICogMzAsIE1hdGgucmFuZG9tKCkgKiA1LCB2ICogMzApO1xuICogfVxuICpcbiAqIG5ldyBQYXJhbWV0cmljKHtcbiAqICAgZ2VvbWV0cnk6IHtcbiAqICAgICBmdW5jOiBjcmVhdGVQYXJhbWV0cmljXG4gKiAgIH0sXG4gKlxuICogICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xuICogICAgIGNvbG9yOiAweGZmZmZmZixcbiAqICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlXG4gKiAgIH0pLFxuICpcbiAqICAgcG9zaXRpb246IFswLCAxMDAsIC0xMDBdXG4gKiB9KS5hZGRUbyhhcHApO1xuICovXG5jbGFzcyBQYXJhbWV0cmljIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5QYXJhbWV0cmljI2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiB7XG4gICAqICAgICBmdW5jOiAodSwgdikgPT4gbmV3IFZlY3RvcjModSwgdiwgMCksXG4gICAqICAgICBzbGljZXM6IDEwLFxuICAgKiAgICAgdGFja3M6IDEwXG4gICAqICAgfVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIGZ1bmM6ICh1LCB2KSA9PiBuZXcgVmVjdG9yMyh1LCB2LCAwKSxcbiAgICAgIHNsaWNlczogMTAsXG4gICAgICBzdGFja3M6IDEwXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcbiAgICBzdXBlcihwYXJhbXMsIFBhcmFtZXRyaWMuZGVmYXVsdHMsIFBhcmFtZXRyaWMuaW5zdHJ1Y3Rpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgY3JlYXRlcyBhIG1lc2ggdXNpbmcgaW5wdXQgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIENvbXBvbmVudCBwYXJhbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBCdWlsdCBtZXNoXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuUGFyYW1ldHJpY1xuICAgKi9cbiAgYnVpbGQocGFyYW1zID0gdGhpcy5wYXJhbXMpIHtcbiAgICBjb25zdCB7Z2VvbWV0cnksIG1hdGVyaWFsfSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuYnVpbGRHZW9tZXRyeShwYXJhbXMpLFxuICAgICAgbWF0ZXJpYWw6IHBhcmFtcy5tYXRlcmlhbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe21lc2g6IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCl9KS5tZXNoO1xuICB9XG5cbiAgYnVpbGRHZW9tZXRyeShwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgKHBhcmFtcy5idWZmZXIgPyBQYXJhbWV0cmljQnVmZmVyR2VvbWV0cnkgOiBQYXJhbWV0cmljR2VvbWV0cnkpKFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmZ1bmMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuc2xpY2VzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnN0YWNrc1xuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgUGFyYW1ldHJpY1xufTtcbiIsImltcG9ydCB7XG4gIE1lc2gsXG4gIFBsYW5lQnVmZmVyR2VvbWV0cnksXG4gIFBsYW5lR2VvbWV0cnlcbn0gZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQge01lc2hDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvcmUvTWVzaENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIFBsYW5lXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBgUGxhbmVgIGlzIHVzZWQgZm9yIGNyZWF0aW5nIHBsYW5lcyBnaXZlbiBzb21lIGB3aWR0aGAgYW5kIGBoZWlnaHRgLlxuICogQGNsYXNzRGVzY1xuICogPGlmcmFtZSBzcmM9XCJodHRwczovL3RocmVlanMub3JnL2RvY3Mvc2NlbmVzL2dlb21ldHJ5LWJyb3dzZXIuaHRtbCNQbGFuZUdlb21ldHJ5XCI+PC9pZnJhbWU+XG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBUaGUgcGFyYW1zLlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuTWVzaENvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlc1xuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRpbmcgYSBQbGFuZSwgYW5kIGFkZGluZyB0byBhcHA8L2NhcHRpb24+XG4gKiBuZXcgUGxhbmUoe1xuICogICBnZW9tZXRyeToge1xuICogICAgIHdpZHRoOiAyMCxcbiAqICAgICBoZWlnaHQ6IDMwXG4gKiAgIH0sXG4gKlxuICogICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAqICAgICBjb2xvcjogMHhmZmZmZmZcbiAqICAgfSlcbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIFBsYW5lIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5QbGFuZSNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeToge1xuICAgKiAgICAgd2lkdGg6IDEwLFxuICAgKiAgICAgaGVpZ2h0OiAxMCxcbiAgICogICAgIHdTZWdtZW50czogMSxcbiAgICogICAgIGhTZWdtZW50czogMVxuICAgKiAgIH1cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50LmRlZmF1bHRzLFxuICAgIGdlb21ldHJ5OiB7XG4gICAgICB3aWR0aDogMTAsXG4gICAgICBoZWlnaHQ6IDEwLFxuICAgICAgd1NlZ21lbnRzOiAxLFxuICAgICAgaFNlZ21lbnRzOiAxXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJbnN0cnVjdGlvbnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuUGxhbmUjaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiBbJ3dpZHRoJywgJ2hlaWdodCcsICd3U2VnbWVudHMnLCAnaFNlZ21lbnRzJ11cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMsXG4gICAgZ2VvbWV0cnk6IFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3dTZWdtZW50cycsICdoU2VnbWVudHMnXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBQbGFuZS5kZWZhdWx0cywgUGxhbmUuaW5zdHJ1Y3Rpb25zKTtcblxuICAgIGlmIChwYXJhbXMuYnVpbGQpIHtcbiAgICAgIHRoaXMuYnVpbGQocGFyYW1zKTtcbiAgICAgIHN1cGVyLndyYXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBidWlsZFxuICAgKiBAZGVzY3JpcHRpb24gQnVpbGQgbGl2ZWN5Y2xlIGNyZWF0ZXMgYSBtZXNoIHVzaW5nIGlucHV0IHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBDb21wb25lbnQgcGFyYW1ldGVycy5cbiAgICogQHJldHVybiB7VEhSRUUuTWVzaH0gQnVpbHQgbWVzaFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlBsYW5lXG4gICAqL1xuICBidWlsZChwYXJhbXMgPSB0aGlzLnBhcmFtcykge1xuICAgIGNvbnN0IHtnZW9tZXRyeSwgbWF0ZXJpYWx9ID0gdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICBnZW9tZXRyeTogdGhpcy5idWlsZEdlb21ldHJ5KHBhcmFtcyksXG4gICAgICBtYXRlcmlhbDogcGFyYW1zLm1hdGVyaWFsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bWVzaDogbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKX0pLm1lc2g7XG4gIH1cblxuICBidWlsZEdlb21ldHJ5KHBhcmFtcyA9IHt9KSB7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgKHBhcmFtcy5idWZmZXIgPyBQbGFuZUJ1ZmZlckdlb21ldHJ5IDogUGxhbmVHZW9tZXRyeSkoXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkud2lkdGgsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuaGVpZ2h0LFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LndTZWdtZW50cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5oU2VnbWVudHNcbiAgICApO1xuXG4gICAgcmV0dXJuIGdlb21ldHJ5O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIFBsYW5lXG59O1xuIiwiaW1wb3J0IHtcbiAgTWVzaCxcbiAgUG9seWhlZHJvbkJ1ZmZlckdlb21ldHJ5LFxuICBQb2x5aGVkcm9uR2VvbWV0cnlcbn0gZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQge01lc2hDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvcmUvTWVzaENvbXBvbmVudCc7XG5cbmNvbnN0IFt2ZXJ0aWNlc09mQ3ViZSwgaW5kaWNlc09mRmFjZXNdID0gW1xuICBbXG4gICAgLTEsIC0xLCAtMSwgMSwgLTEsIC0xLCAxLCAxLCAtMSwgLTEsIDEsIC0xLFxuICAgIC0xLCAtMSwgMSwgMSwgLTEsIDEsIDEsIDEsIDEsIC0xLCAxLCAxXG4gIF0sXG4gIFtcbiAgICAyLCAxLCAwLCAwLCAzLCAyLFxuICAgIDAsIDQsIDcsIDcsIDMsIDAsXG4gICAgMCwgMSwgNSwgNSwgNCwgMCxcbiAgICAxLCAyLCA2LCA2LCA1LCAxLFxuICAgIDIsIDMsIDcsIDcsIDYsIDIsXG4gICAgNCwgNSwgNiwgNiwgNywgNFxuICBdXG5dO1xuXG4vKipcbiAqIEBjbGFzcyBQb2x5aGVkcm9uXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBJbiBlbGVtZW50YXJ5IGdlb21ldHJ5LCBhIHBvbHloZWRyb24gaXMgYSBzb2xpZCBpbiB0aHJlZSBkaW1lbnNpb25zIHdpdGggZmxhdCBwb2x5Z29uYWwgZmFjZXMsIHN0cmFpZ2h0IGVkZ2VzIGFuZCBzaGFycCBjb3JuZXJzIG9yIHZlcnRpY2VzLlxuICogPGJyLz48YnIvPlxuICogYFBvbHloZWRyb25gIGNyZWF0ZXMgYSBQb2x5aGVkcm9uIGJ5IGl0cyBgcmFkaXVzYCBhbmQgYGRldGFpbGAuXG4gKiA8YnIvPjxici8+XG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBUaGUgcGFyYW1zLlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuTWVzaENvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlc1xuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRpbmcgYW4gUG9seWhlZHJvbiwgYW5kIGFkZGluZyB0byBhcHA8L2NhcHRpb24+XG4gKiBuZXcgUG9seWhlZHJvbih7XG4gKiAgIGdlb21ldHJ5OiB7XG4gKiAgICAgcmFkaXVzOiAyLFxuICogICAgIGRldGFpbDogMVxuICogICB9LFxuICpcbiAqICAgbWF0ZXJpYWw6IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gKiAgICAgY29sb3I6IDB4ZmZmZmZmXG4gKiAgIH0pLFxuICpcbiAqICAgcG9zaXRpb246IFswLCAxMDAsIDBdXG4gKiB9KS5hZGRUbyhhcHApO1xuICovXG5jbGFzcyBQb2x5aGVkcm9uIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG4gIHN0YXRpYyB2ZXJ0aWNlc09mQ3ViZSA9IHZlcnRpY2VzT2ZDdWJlO1xuICBzdGF0aWMgaW5kaWNlc09mRmFjZXMgPSBpbmRpY2VzT2ZGYWNlcztcblxuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuUG9seWhlZHJvbiNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeToge1xuICAgKiAgICAgdmVydGljZXNPZkN1YmU6IFtcbiAgICogICAgICAgLTEsIC0xLCAtMSwgMSwgLTEsIC0xLCAxLCAxLCAtMSwgLTEsIDEsIC0xLFxuICAgKiAgICAgICAtMSwgLTEsIDEsIDEsIC0xLCAxLCAxLCAxLCAxLCAtMSwgMSwgMVxuICAgKiAgICAgXSxcbiAgICpcbiAgICogICAgIGluZGljZXNPZkZhY2VzOiBbXG4gICAqICAgICAgIDIsIDEsIDAsIDAsIDMsIDIsXG4gICAqICAgICAgIDAsIDQsIDcsIDcsIDMsIDAsXG4gICAqICAgICAgIDAsIDEsIDUsIDUsIDQsIDAsXG4gICAqICAgICAgIDEsIDIsIDYsIDYsIDUsIDEsXG4gICAqICAgICAgIDIsIDMsIDcsIDcsIDYsIDIsXG4gICAqICAgICAgIDQsIDUsIDYsIDYsIDcsIDRcbiAgICogICAgIF0sXG4gICAqXG4gICAqICAgICByYWRpdXM6IDYsXG4gICAqICAgICBkZXRhaWw6IDJcbiAgICogICB9XG4gICAqIH1cbiAgICogPC9wcmU+XG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdHMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5kZWZhdWx0cyxcbiAgICBnZW9tZXRyeToge1xuICAgICAgdmVydGljZXNPZkN1YmUsXG4gICAgICBpbmRpY2VzT2ZGYWNlcyxcbiAgICAgIHJhZGl1czogNixcbiAgICAgIGRldGFpbDogMlxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSW5zdHJ1Y3Rpb25zXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlBvbHloZWRyb24jaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiBbJ3ZlcnRpY2VzT2ZDdWJlJywgJ2luZGljZXNPZkZhY2VzJywgJ3JhZGl1cycsICdkZXRhaWwnXVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGluc3RydWN0aW9ucyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50Lmluc3RydWN0aW9ucyxcbiAgICBnZW9tZXRyeTogWyd2ZXJ0aWNlc09mQ3ViZScsICdpbmRpY2VzT2ZGYWNlcycsICdyYWRpdXMnLCAnZGV0YWlsJ11cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgUG9seWhlZHJvbi5kZWZhdWx0cywgUG9seWhlZHJvbi5pbnN0cnVjdGlvbnMpO1xuXG4gICAgaWYgKHBhcmFtcy5idWlsZCkge1xuICAgICAgdGhpcy5idWlsZChwYXJhbXMpO1xuICAgICAgc3VwZXIud3JhcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgY3JlYXRlcyBhIG1lc2ggdXNpbmcgaW5wdXQgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIENvbXBvbmVudCBwYXJhbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBCdWlsdCBtZXNoXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuUG9seWhlZHJvblxuICAgKi9cbiAgYnVpbGQocGFyYW1zID0gdGhpcy5wYXJhbXMpIHtcbiAgICBjb25zdCB7Z2VvbWV0cnksIG1hdGVyaWFsfSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuYnVpbGRHZW9tZXRyeShwYXJhbXMpLFxuICAgICAgbWF0ZXJpYWw6IHBhcmFtcy5tYXRlcmlhbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe21lc2g6IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCl9KS5tZXNoO1xuICB9XG5cbiAgYnVpbGRHZW9tZXRyeShwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgKHBhcmFtcy5idWZmZXIgPyBQb2x5aGVkcm9uQnVmZmVyR2VvbWV0cnkgOiBQb2x5aGVkcm9uR2VvbWV0cnkpKFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnZlcnRpY2VzT2ZDdWJlLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmluZGljZXNPZkZhY2VzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnJhZGl1cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5kZXRhaWxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIFBvbHloZWRyb25cbn07XG4iLCJpbXBvcnQge1xuICBNZXNoLFxuICBSaW5nR2VvbWV0cnksXG4gIFJpbmdCdWZmZXJHZW9tZXRyeVxufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgUmluZ1xuICogQGNhdGVnb3J5IGNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZGVzY3JpcHRpb24gUmluZyBjbGFzcyBjcmVhdGVzIGEgY2lyY2xlIG9yIGp1c3QgMkQgVG9ydXMuIERvZXMgbm90IHN1cHBvcnQgcGh5c2ljcy5cbiAqIEBjbGFzc0Rlc2NcbiAqIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzL3NjZW5lcy9nZW9tZXRyeS1icm93c2VyLmh0bWwjUmluZ0dlb21ldHJ5XCI+PC9pZnJhbWU+XG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBUaGUgcGFyYW1zLlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuTWVzaENvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlc1xuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRpbmcgYSBSaW5nLCBhbmQgYWRkaW5nIHRvIGFwcDwvY2FwdGlvbj5cbiAqIG5ldyBSaW5nKHtcbiAqICAgZ2VvbWV0cnk6IHtcbiAqICAgICBpbm5lclJhZGl1czogNSxcbiAqICAgICBvdXRlclJhZGl1czogMlxuICogICB9LFxuICpcbiAqICAgbWF0ZXJpYWw6IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcbiAqICAgICBjb2xvcjogMHhmZmZmZmYsXG4gKiAgICAgc2lkZSBUSFJFRS5Eb3VibGVTaWRlXG4gKiAgIH0pLFxuICpcbiAqICAgcG9zaXRpb246IFswLCA4LCAwXSxcbiAqXG4gKiAgIHJvdGF0aW9uOiB7XG4gKiAgICAgeDogTWF0aC5QSS80XG4gKiAgIH1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIFJpbmcgZXh0ZW5kcyBNZXNoQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlJpbmcjZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgZ2VvbWV0cnk6IHtcbiAgICogICAgIGlubmVyUmFkaXVzOiAwLFxuICAgKiAgICAgb3V0ZXJSYWRpdXM6IDUwLFxuICAgKiAgICAgdGhldGFTZWdtZW50czogOCxcbiAgICogICAgIHBoaVNlZ21lbnRzOiA4LFxuICAgKiAgICAgdGhldGFTdGFydDogMCxcbiAgICogICAgIHRoZXRhTGVuZ3RoOiBNYXRoLlBJICogMlxuICAgKiAgIH1cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50LmRlZmF1bHRzLFxuICAgIGdlb21ldHJ5OiB7XG4gICAgICBpbm5lclJhZGl1czogMCxcbiAgICAgIG91dGVyUmFkaXVzOiA1MCxcbiAgICAgIHRoZXRhU2VnbWVudHM6IDgsXG4gICAgICBwaGlTZWdtZW50czogOCxcbiAgICAgIHRoZXRhU3RhcnQ6IDAsXG4gICAgICB0aGV0YUxlbmd0aDogTWF0aC5QSSAqIDJcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5SaW5nI2luc3RydWN0aW9uc1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeTogW1xuICAgKiAgICAgJ2lubmVyUmFkaXVzJyxcbiAgICogICAgICdvdXRlclJhZGl1cycsXG4gICAqICAgICAndGhldGFTZWdtZW50cycsXG4gICAqICAgICAncGhpU2VnbWVudHMnLFxuICAgKiAgICAgJ3RoZXRhU3RhcnQnLFxuICAgKiAgICAgJ3RoZXRhTGVuZ3RoJ1xuICAgKiAgIF1cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5kZWZhdWx0cyxcbiAgICBnZW9tZXRyeTogW1xuICAgICAgJ2lubmVyUmFkaXVzJyxcbiAgICAgICdvdXRlclJhZGl1cycsXG4gICAgICAndGhldGFTZWdtZW50cycsXG4gICAgICAncGhpU2VnbWVudHMnLFxuICAgICAgJ3RoZXRhU3RhcnQnLFxuICAgICAgJ3RoZXRhTGVuZ3RoJ1xuICAgIF1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgUmluZy5kZWZhdWx0cywgUmluZy5pbnN0cnVjdGlvbnMpO1xuXG4gICAgaWYgKHBhcmFtcy5idWlsZCkge1xuICAgICAgdGhpcy5idWlsZChwYXJhbXMpO1xuICAgICAgc3VwZXIud3JhcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgY3JlYXRlcyBhIG1lc2ggdXNpbmcgaW5wdXQgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIENvbXBvbmVudCBwYXJhbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBCdWlsdCBtZXNoXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuUmluZ1xuICAgKi9cbiAgYnVpbGQocGFyYW1zID0gdGhpcy5wYXJhbXMpIHtcbiAgICBjb25zdCB7Z2VvbWV0cnksIG1hdGVyaWFsfSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuYnVpbGRHZW9tZXRyeShwYXJhbXMpLFxuICAgICAgbWF0ZXJpYWw6IHBhcmFtcy5tYXRlcmlhbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe21lc2g6IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCl9KS5tZXNoO1xuICB9XG5cbiAgYnVpbGRHZW9tZXRyeShwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgKHBhcmFtcy5idWZmZXIgPyBSaW5nQnVmZmVyR2VvbWV0cnkgOiBSaW5nR2VvbWV0cnkpKFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmlubmVyUmFkaXVzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5Lm91dGVyUmFkaXVzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnRoZXRhU2VnbWVudHMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkucGhpU2VnbWVudHMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkudGhldGFTdGFydCxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS50aGV0YUxlbmd0aFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgUmluZ1xufTtcbiIsImltcG9ydCB7XG4gIE1lc2gsXG4gIFNoYXBlQnVmZmVyR2VvbWV0cnksXG4gIFNoYXBlR2VvbWV0cnlcbn0gZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQge01lc2hDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvcmUvTWVzaENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXBlXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBTaGFwZSBpcyBhIHVuaXZlcnNhbCBjbGFzcy4gSXQgYWxsb3dzIHlvdSB0byBjcmVhdGUgZGlmZmVyZW50IDJEIHNoYXBlcyBpbiAzRCBzY2VuZS48YnIvPlxuICogVW5mb3J0dW5hdGVseSwgbm90IGFsbCBvZiB0aGVtIHN1cHBvcnQgcGh5c2ljcywgYW4gYWx0ZXJuYXRpdmUgaXMgdG8gbWFrZSBhIHNpbWlsYXIgM0Qgb2JqZWN0IGFuZCBzY2FsZSBpdHMgd2lkdGggZG93biB0byBuZWFyIHplcm8uXG4gKiA8YnIvPjxici8+XG4gKiBgU2hhcGVgIGNvbnNpc3RzIG9mIHNoYXBlcyB0aGF0IGFyZSBpbiBpdHMgc2hhcGVzIHBhcmFtZXRlci5cbiAqIEBjbGFzc0Rlc2NcbiAqIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzL3NjZW5lcy9nZW9tZXRyeS1icm93c2VyLmh0bWwjU2hhcGVHZW9tZXRyeVwiPjwvaWZyYW1lPlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gVGhlIHBhcmFtcy5cbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0aW5nIGEgcGxhbmUgbG9va2luZyBTaGFwZSBmcm9tIGEgVEhSRUUuU2hhcGUsIGFuZCBhZGRpbmcgaXQgdG8gYXBwPC9jYXB0aW9uPlxuICogY29uc3QgcmVjdFdpZHRoID0gMTAsXG4gKiByZWN0TGVuZ3RoID0gNTtcbiAqXG4gKiBjb25zdCByZWN0U2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAqIHJlY3RTaGFwZS5tb3ZlVG8oMCwwKTtcbiAqIHJlY3RTaGFwZS5saW5lVG8oMCwgcmVjdFdpZHRoKTtcbiAqIHJlY3RTaGFwZS5saW5lVG8ocmVjdExlbmd0aCwgcmVjdFdpZHRoKTtcbiAqIHJlY3RTaGFwZS5saW5lVG8ocmVjdExlbmd0aCwgMCk7XG4gKiByZWN0U2hhcGUubGluZVRvKDAsIDApO1xuICpcbiAqIGNvbnN0IHBsYW5lID0gbmV3IFNoYXBlKHtcbiAqICAgZ2VvbWV0cnk6IHtcbiAqICAgICBzaGFwZTogcmVjdFNoYXBlXG4gKiAgIH0sXG4gKlxuICogICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAqICAgICBjb2xvcjogMHhmZmZmZmZcbiAqICAgfSlcbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIFNoYXBlIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5TaGFwZSNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeToge1xuICAgKiAgICAgc2hhcGVzOiBbXVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHNoYXBlczogW11cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5TaGFwZSNpbnN0cnVjdGlvbnNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgZ2VvbWV0cnk6IFsnc2hhcGVzJ11cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMsXG4gICAgZ2VvbWV0cnk6IFsnc2hhcGVzJ11cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgU2hhcGUuZGVmYXVsdHMsIFNoYXBlLmluc3RydWN0aW9ucyk7XG5cbiAgICBpZiAocGFyYW1zLmJ1aWxkKSB7XG4gICAgICB0aGlzLmJ1aWxkKHBhcmFtcyk7XG4gICAgICBzdXBlci53cmFwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYnVpbGRcbiAgICogQGRlc2NyaXB0aW9uIEJ1aWxkIGxpdmVjeWNsZSBjcmVhdGVzIGEgbWVzaCB1c2luZyBpbnB1dCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgQ29tcG9uZW50IHBhcmFtZXRlcnMuXG4gICAqIEByZXR1cm4ge1RIUkVFLk1lc2h9IEJ1aWx0IG1lc2hcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5TaGFwZVxuICAgKi9cbiAgYnVpbGQocGFyYW1zID0gdGhpcy5wYXJhbXMpIHtcbiAgICBjb25zdCB7Z2VvbWV0cnksIG1hdGVyaWFsfSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuYnVpbGRHZW9tZXRyeShwYXJhbXMpLFxuICAgICAgbWF0ZXJpYWw6IHBhcmFtcy5tYXRlcmlhbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe21lc2g6IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCl9KS5tZXNoO1xuICB9XG5cbiAgYnVpbGRHZW9tZXRyeShwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgKHBhcmFtcy5idWZmZXIgPyBTaGFwZUJ1ZmZlckdlb21ldHJ5IDogU2hhcGVHZW9tZXRyeSkoXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuc2hhcGVzXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBTaGFwZVxufTtcbiIsImltcG9ydCB7XG4gIE1lc2gsXG4gIFNwaGVyZUJ1ZmZlckdlb21ldHJ5LFxuICBTcGhlcmVHZW9tZXRyeVxufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgU3BoZXJlXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBTcGhlcmUgY2xhc3MgaXMgdXNlZCB0byBjcmVhdGUgc3BoZXJlIG9iamVjdHMgYnkgaXRzIHJhZGl1cyBwcm9wZXJ0eSBhbmQgb3RoZXIgdmFsdWVzIHRoYXQgZGV0ZXJtaW5lcyBpdHMgZGV0YWxpdHkuXG4gKiA8YnIvPjxici8+XG4gKiBJdCBpcyBzaW1pbGFyIHRvIFRIUkVFLlNwaGVyZUdlb21ldHJ5LCBidXQgaXQgYWxzbyBjb250YWlucyBhbGwgYFNoYXBlYCBwcm9wZXJ0aWVzLCBzdWNoIGFzIG1hdGVyaWFsLCBtYXNzIGFuZCB2ZWN0b3JzIGxpa2UgcG9zaXRpb24gKHBvcykgYW5kIHJvdGF0aW9uIChyb3QpLlxuICogPGJyLz48YnIvPlxuICogVGhlbiBpdCBjcmVhdGVzIGFuIGBUaHJlZS5qcyBtZXNoYCBvciBhIGBQaHlzaWpzIG1lc2hgLCB0aGF0IGlzIHNpbWlsYXIgdG8gYFRocmVlLmpzIG1lc2hgLCBidXQgaXQgYWxzbyB0YWtlIGludG8gY29uc2lkZXJhdGlvbiBjb2xsaXNpb24gY2FsY3VsYXRpb25zLlxuICogVGhpcyBtZXNoIGlzIGEgY29tYmluYXRpb24gb2YgYFRocmVlLmpzIGdlb21ldHJ5YCBhbmQgYFBoeXNpanMgbWF0ZXJpYWxgIChUaGUgc2FtZSBhcyBpbiB0aHJlZS5qcywgYnV0IHdpdGggZnJpY3Rpb24gYW5kIHJlc3RpdHV0aW9uKS5cbiAqIEBjbGFzc0Rlc2NcbiAqIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzL3NjZW5lcy9nZW9tZXRyeS1icm93c2VyLmh0bWwjU3BoZXJlR2VvbWV0cnlcIj48L2lmcmFtZT5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIFNwaGVyZSwgYW5kIGFkZGluZyBpdCB0byBhcHA8L2NhcHRpb24+XG4gKiBuZXcgU3BoZXJlKHtcbiAqICAgZ2VvbWV0cnk6IHtcbiAqICAgICByYWRpdXM6IDJcbiAqICAgfSxcbiAqXG4gKiAgIG1hdGVyaWFsOiBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICogICAgIGNvbG9yOiAweGZmZmZmZlxuICogICB9KSxcbiAqXG4gKiAgIHBvc2l0aW9uOiB7XG4gKiAgICAgeTogMTAwXG4gKiAgIH1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIFNwaGVyZSBleHRlbmRzIE1lc2hDb21wb25lbnQge1xuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuU3BoZXJlI2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiB7XG4gICAqICAgICByYWRpdXM6IDEsXG4gICAqICAgICB3aWR0aFNlZ21lbnRzOiA4LFxuICAgKiAgICAgaGVpZ2h0U2VnbWVudHM6IDZcbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50LmRlZmF1bHRzLFxuICAgIGdlb21ldHJ5OiB7XG4gICAgICByYWRpdXM6IDEsXG4gICAgICB3aWR0aFNlZ21lbnRzOiA4LFxuICAgICAgaGVpZ2h0U2VnbWVudHM6IDZcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5TcGhlcmUjaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiBbJ3JhZGl1cycsICd3aWR0aFNlZ21lbnRzJywgJ2hlaWdodFNlZ21lbnRzJ11cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMsXG4gICAgZ2VvbWV0cnk6IFsncmFkaXVzJywgJ3dpZHRoU2VnbWVudHMnLCAnaGVpZ2h0U2VnbWVudHMnXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBTcGhlcmUuZGVmYXVsdHMsIFNwaGVyZS5pbnN0cnVjdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYnVpbGRcbiAgICogQGRlc2NyaXB0aW9uIEJ1aWxkIGxpdmVjeWNsZSBjcmVhdGVzIGEgbWVzaCB1c2luZyBpbnB1dCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgQ29tcG9uZW50IHBhcmFtZXRlcnMuXG4gICAqIEByZXR1cm4ge1RIUkVFLk1lc2h9IEJ1aWx0IG1lc2hcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5TcGhlcmVcbiAgICovXG4gIGJ1aWxkKHBhcmFtcyA9IHRoaXMucGFyYW1zKSB7XG4gICAgY29uc3Qge2dlb21ldHJ5LCBtYXRlcmlhbH0gPSB0aGlzLmFwcGx5QnJpZGdlKHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmJ1aWxkR2VvbWV0cnkocGFyYW1zKSxcbiAgICAgIG1hdGVyaWFsOiBwYXJhbXMubWF0ZXJpYWxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHttZXNoOiBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpfSkubWVzaDtcbiAgfVxuXG4gIGJ1aWxkR2VvbWV0cnkocGFyYW1zID0ge30pIHtcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyAocGFyYW1zLmJ1ZmZlciA/IFNwaGVyZUJ1ZmZlckdlb21ldHJ5IDogU3BoZXJlR2VvbWV0cnkpKFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnJhZGl1cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS53aWR0aFNlZ21lbnRzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmhlaWdodFNlZ21lbnRzXG4gICAgKTtcblxuICAgIHJldHVybiBnZW9tZXRyeTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBTcGhlcmVcbn07XG4iLCJpbXBvcnQge1xuICBNZXNoLFxuICBUZXRyYWhlZHJvbkJ1ZmZlckdlb21ldHJ5LFxuICBUZXRyYWhlZHJvbkdlb21ldHJ5XG59IGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHtNZXNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL01lc2hDb21wb25lbnQnO1xuXG4vKipcbiAqIEBjbGFzcyBUZXRyYWhlZHJvblxuICogQGNhdGVnb3J5IGNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZGVzY3JpcHRpb24gSW4gZ2VvbWV0cnksIGEgdGV0cmFoZWRyb24gaXMgYSBwb2x5aGVkcm9uIGNvbXBvc2VkIG9mIGZvdXIgdHJpYW5ndWxhciBmYWNlcywgc2l4IHN0cmFpZ2h0IGVkZ2VzLCBhbmQgZm91ciB2ZXJ0ZXggY29ybmVycy5cbiAqIFRoZSB0ZXRyYWhlZHJvbiBpcyB0aGUgc2ltcGxlc3Qgb2YgYWxsIHRoZSBvcmRpbmFyeSBjb252ZXggcG9seWhlZHJhIGFuZCB0aGUgb25seSBvbmUgdGhhdCBoYXMgZmV3ZXIgdGhhbiA1IGZhY2VzLlxuICogPGJyLz48YnIvPlxuICogYFRldHJhaGVkcm9uYCBjcmVhdGVzIGEgVGV0cmFoZWRyb24gb2JqZWN0IGJ5IGl0cyBgcmFkaXVzYCBhbmQgYGRldGFpbGBcbiAqIEBjbGFzc0Rlc2NcbiAqIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzL3NjZW5lcy9nZW9tZXRyeS1icm93c2VyLmh0bWwjVGV0cmFoZWRyb25HZW9tZXRyeVwiPjwvaWZyYW1lPlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gVGhlIHBhcmFtcy5cbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0aW5nIGEgVGV0cmFoZWRyb24sIGFuZCBhZGRpbmcgaXQgdG8gYXBwPC9jYXB0aW9uPlxuICogbmV3IFRldHJhaGVkcm9uKHtcbiAqICAgZ2VvbWV0cnk6IHtcbiAqICAgICByYWRpdXM6IDIsXG4gKiAgICAgZGV0YWlsOiAxXG4gKiAgIH0sXG4gKlxuICogICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAqICAgICBjb2xvcjogMHhmZmZmZmZcbiAqICAgfSksXG4gKlxuICogICBwb3NpdGlvbjoge1xuICogICAgIHg6IDAsXG4gKiAgICAgeTogMTAwLFxuICogICAgIHo6IDBcbiAqICAgfVxuICogfSkuYWRkVG8oYXBwKTtcbiAqL1xuY2xhc3MgVGV0cmFoZWRyb24gZXh0ZW5kcyBNZXNoQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlRldHJhaGVkcm9uI2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiB7XG4gICAqICAgICByYWRpdXM6IDEsXG4gICAqICAgICBkZXRhaWw6IDBcbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50LmRlZmF1bHRzLFxuICAgIGdlb21ldHJ5OiB7XG4gICAgICByYWRpdXM6IDEsXG4gICAgICBkZXRhaWw6IDBcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5UZXRyYWhlZHJvbiNpbnN0cnVjdGlvbnNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgZ2VvbWV0cnk6IFsncmFkaXVzJywgJ2RldGFpbCddXG4gICAqIH1cbiAgICogPC9wcmU+XG4gICAqL1xuICBzdGF0aWMgaW5zdHJ1Y3Rpb25zID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuaW5zdHJ1Y3Rpb25zLFxuICAgIGdlb21ldHJ5OiBbJ3JhZGl1cycsICdkZXRhaWwnXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBUZXRyYWhlZHJvbi5kZWZhdWx0cywgVGV0cmFoZWRyb24uaW5zdHJ1Y3Rpb25zKTtcblxuICAgIGlmIChwYXJhbXMuYnVpbGQpIHtcbiAgICAgIHRoaXMuYnVpbGQocGFyYW1zKTtcbiAgICAgIHN1cGVyLndyYXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBidWlsZFxuICAgKiBAZGVzY3JpcHRpb24gQnVpbGQgbGl2ZWN5Y2xlIGNyZWF0ZXMgYSBtZXNoIHVzaW5nIGlucHV0IHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBDb21wb25lbnQgcGFyYW1ldGVycy5cbiAgICogQHJldHVybiB7VEhSRUUuTWVzaH0gQnVpbHQgbWVzaFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlRldHJhaGVkcm9uXG4gICAqL1xuICBidWlsZChwYXJhbXMgPSB0aGlzLnBhcmFtcykge1xuICAgIGNvbnN0IHtnZW9tZXRyeSwgbWF0ZXJpYWx9ID0gdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICBnZW9tZXRyeTogdGhpcy5idWlsZEdlb21ldHJ5KHBhcmFtcyksXG4gICAgICBtYXRlcmlhbDogcGFyYW1zLm1hdGVyaWFsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bWVzaDogbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKX0pLm1lc2g7XG4gIH1cblxuICBidWlsZEdlb21ldHJ5KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyAocGFyYW1zLmJ1ZmZlciA/IFRldHJhaGVkcm9uQnVmZmVyR2VvbWV0cnkgOiBUZXRyYWhlZHJvbkdlb21ldHJ5KShcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5yYWRpdXMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuZGV0YWlsXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBUZXRyYWhlZHJvblxufTtcbiIsImltcG9ydCB7XG4gIEZvbnQsXG4gIE1lc2gsXG4gIFRleHRHZW9tZXRyeSxcbiAgRm9udExvYWRlclxufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgVGV4dFxuICogQGNhdGVnb3J5IGNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZGVzY3JpcHRpb24gVGV4dCBjbGFzcyBpcyBtYWRlIGZvciBjcmVhdGluZyAzRCB0ZXh0IG9iamVjdHMuXG4gKiBAY2xhc3NEZXNjXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy9zY2VuZXMvZ2VvbWV0cnktYnJvd3Nlci5odG1sI1RleHRHZW9tZXRyeVwiPjwvaWZyYW1lPlxuICogPGJyLz48YnIvPlxuICogUGh5c2ljcyB0ZXh0IG9iamVjdCBjYW4gYmUgY29udmV4IG9yIGNvbmNhdmUuIEJ5IGRlZmF1bHQgaXQncyBjb252ZXggYnV0IHlvdSBjYW4gYWxzbyBzd2l0Y2ggdG8gY29uY2F2ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIFRleHQsIGFuZCBhZGRpbmcgaXQgdG8gYXBwPC9jYXB0aW9uPlxuICogbmV3IFRleHQoe1xuICogICBnZW9tZXRyeToge1xuICogICAgIHRleHQ6ICdoZWxsbyB3b3JsZCcsXG4gKiAgICAgcGFyYW1ldGVyczoge1xuICogICAgICAgZm9udDogJ3BhdGgvdG8vZm9udC50eXBlZmFjZS5qcycsXG4gKiAgICAgICBzaXplOiAyMCxcbiAqICAgICAgIGhlaWdodDogNSxcbiAqICAgICAgIGN1cnZlU2VnbWVudHM6IDZcbiAqICAgICB9XG4gKiAgIH0sXG4gKlxuICogICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAqICAgICBjb2xvcjogMHhmZmZmZmZcbiAqICAgfSksXG4gKlxuICogICBwb3NpdGlvbjoge1xuICogICAgIHg6IC00MCxcbiAqICAgICB5OiAyMCxcbiAqICAgICB6OiAwXG4gKiAgIH1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIFRleHQgZXh0ZW5kcyBNZXNoQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlRleHQjZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgZ2VvbWV0cnk6IHtcbiAgICogICAgIHRleHQ6ICdIZWxsbyBXb3JsZCEnLFxuICAgKiAgICAgbG9hZGVyOiBuZXcgRm9udExvYWRlcigpLFxuICAgKlxuICAgKiAgICAgcGFyYW1ldGVyczoge1xuICAgKiAgICAgICBzaXplOiAxMixcbiAgICogICAgICAgaGVpZ2h0OiA1MCxcbiAgICogICAgICAgY3VydmVTZWdtZW50czogMTIsXG4gICAqICAgICAgIGZvbnQ6IG5ldyBGb250KCksXG4gICAqICAgICAgIGJldmVsRW5hYmxlZDogZmFsc2UsXG4gICAqICAgICAgIGJldmVsVGhpY2tuZXNzOiAxMCxcbiAgICogICAgICAgYmV2ZWxTaXplOiA4XG4gICAqICAgICB9XG4gICAqICAgfVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHRleHQ6ICdIZWxsbyBXb3JsZCEnLFxuICAgICAgbG9hZGVyOiBuZXcgRm9udExvYWRlcigpLFxuXG4gICAgICBwYXJhbWV0ZXJzOiB7XG4gICAgICAgIHNpemU6IDEyLFxuICAgICAgICBoZWlnaHQ6IDUwLFxuICAgICAgICBjdXJ2ZVNlZ21lbnRzOiAxMixcbiAgICAgICAgZm9udDogbmV3IEZvbnQoKSxcbiAgICAgICAgYmV2ZWxFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgYmV2ZWxUaGlja25lc3M6IDEwLFxuICAgICAgICBiZXZlbFNpemU6IDhcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5UZXh0I2luc3RydWN0aW9uc1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeTogWyd0ZXh0JywgJ2xvYWRlcicsICdwYXJhbWV0ZXJzJ11cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMsXG4gICAgZ2VvbWV0cnk6IFsndGV4dCcsICdsb2FkZXInLCAncGFyYW1ldGVycyddXG4gIH1cblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgVGV4dC5kZWZhdWx0cywgVGV4dC5pbnN0cnVjdGlvbnMpO1xuXG4gICAgaWYgKHBhcmFtcy5idWlsZCkge1xuICAgICAgdGhpcy5idWlsZChwYXJhbXMpO1xuICAgICAgc3VwZXIud3JhcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgY3JlYXRlcyBhIG1lc2ggdXNpbmcgaW5wdXQgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIENvbXBvbmVudCBwYXJhbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBCdWlsdCBtZXNoXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuVGV4dFxuICAgKi9cbiAgYnVpbGQocGFyYW1zID0ge30pIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBGb250TG9hZGVyLmxvYWQocGFyYW1zLmdlb21ldHJ5LnBhcmFtZXRlcnMuZm9udCwgZm9udCA9PiB7XG4gICAgICAgIHBhcmFtcy5nZW9tZXRyeS5wYXJhbWV0ZXJzLmZvbnQgPSBmb250O1xuXG4gICAgICAgIGNvbnN0IHtnZW9tZXRyeSwgbWF0ZXJpYWx9ID0gdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZXh0R2VvbWV0cnkoXG4gICAgICAgICAgICBwYXJhbXMuZ2VvbWV0cnkudGV4dCxcbiAgICAgICAgICAgIHBhcmFtcy5nZW9tZXRyeS5wYXJhbWV0ZXJzXG4gICAgICAgICAgKSxcblxuICAgICAgICAgIG1hdGVyaWFsOiBwYXJhbXMubWF0ZXJpYWxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmFwcGx5QnJpZGdlKHtcbiAgICAgICAgICAgIG1lc2g6IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbClcbiAgICAgICAgICB9KS5tZXNoXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHN1cGVyLndhaXQocHJvbWlzZSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBUZXh0XG59O1xuIiwiaW1wb3J0IHtcbiAgTWVzaCxcbiAgVG9ydXNHZW9tZXRyeVxufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgVG9ydXNcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIFRvcnVzIGNsYXNzIG1ha2VzIGEgdG9ydXMgZmlndXJlLiBBIGRvbnV0IGlzIGEgdG9ydXMuXG4gKiBAY2xhc3NEZXNjXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy9pbmRleC5odG1sI2FwaS9nZW9tZXRyaWVzL1RvcnVzR2VvbWV0cnlcIj48L2lmcmFtZT5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIFRvcnVzLCBhbmQgYWRkaW5nIGl0IHRvIGFwcDwvY2FwdGlvbj5cbiAqIG5ldyBUb3J1cyh7XG4gKiAgIGdlb21ldHJ5OiB7XG4gKiAgICAgcmFkaXVzOiA1LFxuICogICAgIHR1YmU6IDJcbiAqICAgfSxcbiAqXG4gKiAgIG1hdGVyaWFsOiBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICogICAgIGNvbG9yOiAweGZmZmZmZlxuICogICB9KSxcbiAqXG4gKiAgIHBvc2l0aW9uOiB7XG4gKiAgICAgeTogMzVcbiAqICAgfVxuICogfSkuYWRkVG8oYXBwKTtcbiAqL1xuY2xhc3MgVG9ydXMgZXh0ZW5kcyBNZXNoQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlRvcnVzI2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiB7XG4gICAqICAgICByYWRpdXM6IDEwMCxcbiAgICogICAgIHR1YmU6IDQwLFxuICAgKiAgICAgcmFkaWFsU2VnbWVudHM6IDgsXG4gICAqICAgICB0dWJ1bGFyU2VnbWVudHM6IDYsXG4gICAqICAgICBhcmM6IE1hdGguUEkgKiAyXG4gICAqICAgfVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHJhZGl1czogMTAwLFxuICAgICAgdHViZTogNDAsXG4gICAgICByYWRpYWxTZWdtZW50czogOCxcbiAgICAgIHR1YnVsYXJTZWdtZW50czogNixcbiAgICAgIGFyYzogTWF0aC5QSSAqIDJcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5Ub3J1cyNpbnN0cnVjdGlvbnNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgZ2VvbWV0cnk6IFtcbiAgICogICAgICdyYWRpdXMnLFxuICAgKiAgICAgJ3R1YmUnLFxuICAgKiAgICAgJ3JhZGlhbFNlZ21lbnRzJyxcbiAgICogICAgICd0dWJ1bGFyU2VnbWVudHMnLFxuICAgKiAgICAgJ2FyYydcbiAgICogICBdXG4gICAqIH1cbiAgICogPC9wcmU+XG4gICAqL1xuICBzdGF0aWMgaW5zdHJ1Y3Rpb25zID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuaW5zdHJ1Y3Rpb25zLFxuICAgIGdlb21ldHJ5OiBbXG4gICAgICAncmFkaXVzJyxcbiAgICAgICd0dWJlJyxcbiAgICAgICdyYWRpYWxTZWdtZW50cycsXG4gICAgICAndHVidWxhclNlZ21lbnRzJyxcbiAgICAgICdhcmMnXG4gICAgXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBUb3J1cy5kZWZhdWx0cywgVG9ydXMuaW5zdHJ1Y3Rpb25zKTtcblxuICAgIGlmIChwYXJhbXMuYnVpbGQpIHtcbiAgICAgIHRoaXMuYnVpbGQocGFyYW1zKTtcbiAgICAgIHN1cGVyLndyYXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBidWlsZFxuICAgKiBAZGVzY3JpcHRpb24gQnVpbGQgbGl2ZWN5Y2xlIGNyZWF0ZXMgYSBtZXNoIHVzaW5nIGlucHV0IHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBDb21wb25lbnQgcGFyYW1ldGVycy5cbiAgICogQHJldHVybiB7VEhSRUUuTWVzaH0gQnVpbHQgbWVzaFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlRvcnVzXG4gICAqL1xuICBidWlsZChwYXJhbXMgPSB0aGlzLnBhcmFtcykge1xuICAgIGNvbnN0IHtnZW9tZXRyeSwgbWF0ZXJpYWx9ID0gdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICBnZW9tZXRyeTogdGhpcy5idWlsZEdlb21ldHJ5KHBhcmFtcyksXG4gICAgICBtYXRlcmlhbDogcGFyYW1zLm1hdGVyaWFsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bWVzaDogbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKX0pLm1lc2g7XG4gIH1cblxuICBidWlsZEdlb21ldHJ5KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyBUb3J1c0dlb21ldHJ5KFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnJhZGl1cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS50dWJlLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnJhZGlhbFNlZ21lbnRzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnR1YnVsYXJTZWdtZW50cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5hcmNcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIFRvcnVzXG59O1xuIiwiaW1wb3J0IHtcbiAgTWVzaCxcbiAgVG9ydXNLbm90QnVmZmVyR2VvbWV0cnksXG4gIFRvcnVzS25vdEdlb21ldHJ5XG59IGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHtNZXNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL01lc2hDb21wb25lbnQnO1xuXG4vKipcbiAqIEBjbGFzcyBUb3J1c2tub3RcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIFRvcnVza25vdCBjbGFzcyBtYWtlcyBhIHRvcnVza25vdCBmaWd1cmUuIEl0J3MgbGlrZSBhIGNyb29rZWQgZG9udXQsIHZlcnkgY3Jvb2tlZC5cbiAqIEBjbGFzc0Rlc2NcbiAqIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzL3NjZW5lcy9nZW9tZXRyeS1icm93c2VyLmh0bWwjVG9ydXNLbm90R2VvbWV0cnlcIj48L2lmcmFtZT5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIFRvcnVza25vdCwgYW5kIGFkZGluZyBpdCB0byBhcHA8L2NhcHRpb24+XG4gKiBuZXcgVG9ydXNrbm90KHtcbiAqICAgZ2VvbWV0cnk6IHtcbiAqICAgICByYWRpdXM6NSxcbiAqICAgICB0dWJlOiAyXG4gKiAgIH0sXG4gKlxuICogICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAqICAgICBjb2xvcjogMHhmZmZmZmZcbiAqICAgfSksXG4gKlxuICogICBwb3M6IHtcbiAqICAgICB5OiAxMDBcbiAqICAgfVxuICogfSkuYWRkVG8oYXBwKTtcbiAqL1xuY2xhc3MgVG9ydXNrbm90IGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5Ub3J1c2tub3QjZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgZ2VvbWV0cnk6IHtcbiAgICogICAgIHJhZGl1czogMTAwLFxuICAgKiAgICAgdHViZTogNDAsXG4gICAqICAgICByYWRpYWxTZWdtZW50czogNjQsXG4gICAqICAgICB0dWJ1bGFyU2VnbWVudHM6IDgsXG4gICAqICAgICBwOiAyLFxuICAgKiAgICAgcTogM1xuICAgKiAgIH1cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50LmRlZmF1bHRzLFxuICAgIGdlb21ldHJ5OiB7XG4gICAgICByYWRpdXM6IDEwMCxcbiAgICAgIHR1YmU6IDQwLFxuICAgICAgcmFkaWFsU2VnbWVudHM6IDY0LFxuICAgICAgdHVidWxhclNlZ21lbnRzOiA4LFxuICAgICAgcDogMixcbiAgICAgIHE6IDNcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5Ub3J1c2tub3QjaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiBbXG4gICAqICAgICAncmFkaXVzJyxcbiAgICogICAgICd0dWJlJyxcbiAgICogICAgICdyYWRpYWxTZWdtZW50cycsXG4gICAqICAgICAndHVidWxhclNlZ21lbnRzJyxcbiAgICogICAgICdwJyxcbiAgICogICAgICdxJ1xuICAgKiAgIF1cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMsXG4gICAgZ2VvbWV0cnk6IFtcbiAgICAgICdyYWRpdXMnLFxuICAgICAgJ3R1YmUnLFxuICAgICAgJ3JhZGlhbFNlZ21lbnRzJyxcbiAgICAgICd0dWJ1bGFyU2VnbWVudHMnLFxuICAgICAgJ3AnLFxuICAgICAgJ3EnXG4gICAgXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBUb3J1c2tub3QuZGVmYXVsdHMsIFRvcnVza25vdC5pbnN0cnVjdGlvbnMpO1xuXG4gICAgaWYgKHBhcmFtcy5idWlsZCkge1xuICAgICAgdGhpcy5idWlsZChwYXJhbXMpO1xuICAgICAgc3VwZXIud3JhcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgY3JlYXRlcyBhIG1lc2ggdXNpbmcgaW5wdXQgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIENvbXBvbmVudCBwYXJhbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBCdWlsdCBtZXNoXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuVG9ydXNrbm90XG4gICAqL1xuICBidWlsZChwYXJhbXMgPSB0aGlzLnBhcmFtcykge1xuICAgIGNvbnN0IHtnZW9tZXRyeSwgbWF0ZXJpYWx9ID0gdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICBnZW9tZXRyeTogdGhpcy5idWlsZEdlb21ldHJ5KHBhcmFtcyksXG4gICAgICBtYXRlcmlhbDogcGFyYW1zLm1hdGVyaWFsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bWVzaDogbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKX0pLm1lc2g7XG4gIH1cblxuICBidWlsZEdlb21ldHJ5KHBhcmFtcyA9IHt9KSB7XG4gICAgY29uc3QgR0NvbnN0cnVjdCA9IHBhcmFtcy5idWZmZXIgPyBUb3J1c0tub3RCdWZmZXJHZW9tZXRyeSA6IFRvcnVzS25vdEdlb21ldHJ5O1xuXG4gICAgcmV0dXJuIG5ldyBHQ29uc3RydWN0KFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnJhZGl1cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS50dWJlLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnJhZGlhbFNlZ21lbnRzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnR1YnVsYXJTZWdtZW50cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5wLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnFcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIFRvcnVza25vdFxufTtcbiIsImltcG9ydCB7XG4gIE1lc2gsXG4gIExpbmVDdXJ2ZTMsXG4gIFZlY3RvcjMsXG4gIFR1YmVCdWZmZXJHZW9tZXRyeSxcbiAgVHViZUdlb21ldHJ5XG59IGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHtNZXNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL01lc2hDb21wb25lbnQnO1xuXG4vKipcbiAqIEBjbGFzcyBUdWJlXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBUdWJlIGNsYXNzIG1ha2VzIGEgdHViZSB0aGF0IGV4dHJ1ZGVzIGFsb25nIGEgM2QgY3VydmUuXG4gKiBAY2xhc3NEZXNjXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy9pbmRleC5odG1sI2FwaS9nZW9tZXRyaWVzL1R1YmVHZW9tZXRyeVwiPjwvaWZyYW1lPlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gVGhlIHBhcmFtcy5cbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0aW5nIGEgVHViZSBmcm9tIGEgdGhyZWUuanMgQ3VydmUsIGFuZCBhZGRpbmcgaXQgdG8gYXBwPC9jYXB0aW9uPlxuICogY29uc3QgQ3VzdG9tU2luQ3VydmUgPSBUSFJFRS5DdXJ2ZS5jcmVhdGUoXG4gKiAgIGZ1bmN0aW9uIChzY2FsZSkgeyAvLyBjdXN0b20gY3VydmUgY29uc3RydWN0b3JcbiAqICAgICB0aGlzLnNjYWxlID0gKHNjYWxlID09PSB1bmRlZmluZWQpID8gMSA6IHNjYWxlO1xuICogICB9LFxuICpcbiAqICAgZnVuY3Rpb24gKHQpIHsgLy8gZ2V0UG9pbnQ6IHQgaXMgYmV0d2VlbiAwLTFcbiAqICAgICBjb25zdCB0eCA9IHQgKiAzIC0gMS41LFxuICogICAgIHR5ID0gTWF0aC5zaW4oIDIgKiBNYXRoLlBJICogdCApLFxuICogICAgIHR6ID0gMDtcbiAqXG4gKiAgICAgcmV0dXJuIG5ldyBUSFJFRS5WZWN0b3IzKHR4LCB0eSwgdHopLm11bHRpcGx5U2NhbGFyKHRoaXMuc2NhbGUpO1xuICogICB9XG4gKiApO1xuICpcbiAqIGNvbnN0IHBhdGggPSBuZXcgQ3VzdG9tU2luQ3VydmUoMTApO1xuICpcbiAqIG5ldyBUdWJlKHtcbiAqICAgZ2VvbWV0cnk6IHtcbiAqICAgICBwYXRoOiBwYXRoXG4gKiAgIH0sXG4gKlxuICogICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAqICAgICBjb2xvcjogMHhmZmZmZmZcbiAqICAgfSlcbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIFR1YmUgZXh0ZW5kcyBNZXNoQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlR1YmUjZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgZ2VvbWV0cnk6IHtcbiAgICogICAgIHBhdGg6IG5ldyBUSFJFRS5MaW5lQ3VydmUzKG5ldyBWZWN0b3IzKDAsIDAsIDApLCBuZXcgVmVjdG9yMygwLCAwLCAxKSksXG4gICAqICAgICBzZWdtZW50czogMjAsXG4gICAqICAgICByYWRpdXM6IDIsXG4gICAqICAgICByYWRpdXNTZWdtZW50czogOCxcbiAgICogICAgIGNsb3NlZDogZmFsc2VcbiAgICogICB9XG4gICAqIH1cbiAgICogPC9wcmU+XG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdHMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5kZWZhdWx0cyxcbiAgICBnZW9tZXRyeToge1xuICAgICAgcGF0aDogbmV3IExpbmVDdXJ2ZTMobmV3IFZlY3RvcjMoMCwgMCwgMCksIG5ldyBWZWN0b3IzKDAsIDAsIDEpKSxcbiAgICAgIHNlZ21lbnRzOiAyMCxcbiAgICAgIHJhZGl1czogMixcbiAgICAgIHJhZGl1c1NlZ21lbnRzOiA4LFxuICAgICAgY2xvc2VkOiBmYWxzZVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSW5zdHJ1Y3Rpb25zXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlR1YmUjaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiBbXG4gICAqICAgICAncGF0aCcsXG4gICAqICAgICAnc2VnbWVudHMnLFxuICAgKiAgICAgJ3JhZGl1cycsXG4gICAqICAgICAncmFkaXVzU2VnbWVudHMnLFxuICAgKiAgICAgJ2Nsb3NlZCdcbiAgICogICBdXG4gICAqIH1cbiAgICogPC9wcmU+XG4gICAqL1xuICBzdGF0aWMgaW5zdHJ1Y3Rpb25zID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuaW5zdHJ1Y3Rpb25zLFxuICAgIGdlb21ldHJ5OiBbXG4gICAgICAncGF0aCcsXG4gICAgICAnc2VnbWVudHMnLFxuICAgICAgJ3JhZGl1cycsXG4gICAgICAncmFkaXVzU2VnbWVudHMnLFxuICAgICAgJ2Nsb3NlZCdcbiAgICBdXG4gIH07XG5cbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcbiAgICBzdXBlcihwYXJhbXMsIFR1YmUuZGVmYXVsdHMsIFR1YmUuaW5zdHJ1Y3Rpb25zKTtcblxuICAgIGlmIChwYXJhbXMuYnVpbGQpIHtcbiAgICAgIHRoaXMuYnVpbGQocGFyYW1zKTtcbiAgICAgIHN1cGVyLndyYXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBidWlsZFxuICAgKiBAZGVzY3JpcHRpb24gQnVpbGQgbGl2ZWN5Y2xlIGNyZWF0ZXMgYSBtZXNoIHVzaW5nIGlucHV0IHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBDb21wb25lbnQgcGFyYW1ldGVycy5cbiAgICogQHJldHVybiB7VEhSRUUuTWVzaH0gQnVpbHQgbWVzaFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlR1YmVcbiAgICovXG4gIGJ1aWxkKHBhcmFtcyA9IHRoaXMucGFyYW1zKSB7XG4gICAgY29uc3Qge2dlb21ldHJ5LCBtYXRlcmlhbH0gPSB0aGlzLmFwcGx5QnJpZGdlKHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmJ1aWxkR2VvbWV0cnkocGFyYW1zKSxcbiAgICAgIG1hdGVyaWFsOiBwYXJhbXMubWF0ZXJpYWxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHttZXNoOiBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpfSkubWVzaDtcbiAgfVxuXG4gIGJ1aWxkR2VvbWV0cnkocGFyYW1zID0ge30pIHtcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyAocGFyYW1zLmJ1ZmZlciA/IFR1YmVCdWZmZXJHZW9tZXRyeSA6IFR1YmVHZW9tZXRyeSkoXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkucGF0aCxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5zZWdtZW50cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5yYWRpdXMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkucmFkaXVzU2VnbWVudHMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuY2xvc2VkXG4gICAgKTtcblxuICAgIHJldHVybiBnZW9tZXRyeTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBUdWJlXG59O1xuIiwiaW1wb3J0IHtPYmplY3QzRH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHtNZXNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL01lc2hDb21wb25lbnQnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvcmUvQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgR3JvdXBcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIFNvbWV0aW1lcyB5b3UgbmVlZCB0byBtYWtlIGdyb3VwcyBvZiBvYmplY3RzIChpdCdzIG5vdCBjb252ZW5pZW50bHkgdG8gYXBwbHkgdHJhbnNmb3JtcyB0byBlYWNoIG9iamVjdCB3aGVuIGNhbiBtYWtlIGp1c3Qgb25lIHRvIGEgZ3JvdXApLjxici8+XG4gKiBJbiBUaHJlZS5qcyB5b3UgbWFrZSBpdCB1c2luZyBgVEhSRUUuT2JqZWN0M0RgIGFuZCBpdCdzIGNoaWxkcmVuLiA8YnIvPjxici8+XG4gKiBJbiB3aHMuanMgd2UgaGF2ZSBgR3JvdXBgXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5BcHByb2FjaCAyIC0gQWRkaW5nIG9iamVjdHMgdG8gYW4gZW1wdHkgZ3JvdXA8L2NhcHRpb24+XG4gKiBjb25zdCBzcGhlcmUgPSBuZXcgU3BoZXJlKCk7XG4gKiBjb25zdCBib3ggPSBuZXcgQm94KCk7XG4gKiBjb25zdCBncm91cCA9IG5ldyBHcm91cCgpO1xuICpcbiAqIHNwaGVyZS5hZGRUbyhncm91cCk7XG4gKiBib3guYWRkVG8oZ3JvdXApO1xuKiBAZXhhbXBsZSA8Y2FwdGlvbj5BcHByb2FjaCAyIC0gTWFraW5nIGEgZ3JvdXAgZnJvbSBvYmplY3RzPC9jYXB0aW9uPlxuICogY29uc3Qgc3BoZXJlID0gbmV3IFNwaGVyZSgpO1xuICogY29uc3QgYm94ID0gbmV3IEJveCgpO1xuICogY29uc3QgZ3JvdXAgPSBuZXcgR3JvdXAoYm94LCBzcGhlcmUpO1xuICogLy8gT1I6IGNvbnN0IGdyb3VwID0gbmV3IEdyb3VwKFtib3gsIHNwaGVyZV0pO1xuICovXG5jbGFzcyBHcm91cCBleHRlbmRzIE1lc2hDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5vYmplY3RzKSB7XG4gICAgc3VwZXIoe30pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBvYmogPSBvYmplY3RzW2ldO1xuXG4gICAgICBpZiAob2JqIGluc3RhbmNlb2YgQ29tcG9uZW50KSBvYmouYWRkVG8odGhpcyk7XG4gICAgICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBPYmplY3QzRCkgdGhpcy5uYXRpdmUuYWRkKG9iaik7XG4gICAgfVxuICB9XG5cbiAgYnVpbGQoKSB7XG4gICAgcmV0dXJuIG5ldyBPYmplY3QzRCgpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIEdyb3VwXG59O1xuIiwiLyoqIEBtb2R1bGUgY29tcG9uZW50cy9tZXNoZXMgKi9cbmV4cG9ydCAqIGZyb20gJy4vQm94JztcbmV4cG9ydCAqIGZyb20gJy4vQ2lyY2xlJztcbmV4cG9ydCAqIGZyb20gJy4vQ29uZSc7XG5leHBvcnQgKiBmcm9tICcuL0N5bGluZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vRG9kZWNhaGVkcm9uJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0cnVkZSc7XG5leHBvcnQgKiBmcm9tICcuL0ljb3NhaGVkcm9uJztcbmV4cG9ydCAqIGZyb20gJy4vTGF0aGUnO1xuZXhwb3J0ICogZnJvbSAnLi9MaW5lJztcbmV4cG9ydCAqIGZyb20gJy4vSW1wb3J0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9PY3RhaGVkcm9uJztcbmV4cG9ydCAqIGZyb20gJy4vUGFyYW1ldHJpYyc7XG5leHBvcnQgKiBmcm9tICcuL1BsYW5lJztcbmV4cG9ydCAqIGZyb20gJy4vUG9seWhlZHJvbic7XG5leHBvcnQgKiBmcm9tICcuL1JpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9TaGFwZSc7XG5leHBvcnQgKiBmcm9tICcuL1NwaGVyZSc7XG5leHBvcnQgKiBmcm9tICcuL1RldHJhaGVkcm9uJztcbmV4cG9ydCAqIGZyb20gJy4vVGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL1RvcnVzJztcbmV4cG9ydCAqIGZyb20gJy4vVG9ydXNrbm90JztcbmV4cG9ydCAqIGZyb20gJy4vVHViZSc7XG5leHBvcnQgKiBmcm9tICcuL0dyb3VwJztcbiIsIi8qKlxuICogQGNsYXNzIEVsZW1lbnRNb2R1bGVcbiAqIEBjYXRlZ29yeSBtb2R1bGVzL2FwcFxuICogQHBhcmFtIHtPYmplY3R9IFtjb250YWluZXI9ZG9jdW1lbnQuYm9keV0gY29udGFpbmVyIGlzIHRoZSBET00gb2JqZWN0IHRvIHdoaWNoIGFwcGxpY2F0aW9uJ3MgY2FudmFzIHdpbGwgYmUgYWRkZWQgdG8uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm1vZHVsZXMvYXBwXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhbiBlbGVtZW50IG1vZHVsZSwgcGFzc2luZyBpdCB0byB0aGUgQXBwPC9jYXB0aW9uPlxuICogbmV3IEFwcChbXG4gKiAgIG5ldyBFbGVtZW50TW9kdWxlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcbiAqIF0pO1xuICovXG5leHBvcnQgY2xhc3MgRWxlbWVudE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkpIHtcbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5lcikge1xuICAgICAgY29uc29sZS53YXJuKCdFbGVtZW50TW9kdWxlIG5vdyBhY2NlcHRzIG9ubHkgYXJndW1lbnQgd2hpY2ggaXMgYSBET00gb2JqZWN0LCBub3QgYSBwYXJhbXMgb2JqZWN0LicpO1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXIuY29udGFpbmVyO1xuICAgIH0gZWxzZSB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY3JlYXRlRWxlbWVudFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYSBjYW52YXMgZWxlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcC5SZXNpemVNb2R1bGVcbiAgICovXG4gIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICd3aHMtYXBwJztcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSAnaW5oZXJpdCc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9ICdpbmhlcml0JztcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICB9XG5cbiAgbWFuYWdlcihtYW5hZ2VyKSB7XG4gICAgbWFuYWdlci5zZXQoJ2VsZW1lbnQnLCB0aGlzLmVsZW1lbnQpO1xuICAgIG1hbmFnZXIuc2V0KCdjb250YWluZXInLCB0aGlzLmNvbnRhaW5lcik7XG4gIH1cblxuICBpbnRlZ3JhdGUoc2VsZikge1xuICAgIHNlbGYuY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGYuZWxlbWVudCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFdlYkdMUmVuZGVyZXIsXG4gIFZlY3RvcjJcbn0gZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQge0xvb3B9IGZyb20gJy4uLy4uL2NvcmUvTG9vcCc7XG5cbi8qKlxuICogQGNsYXNzIFJlbmRlcmluZ01vZHVsZVxuICogQGNhdGVnb3J5IG1vZHVsZXMvYXBwXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc11cbiAqIEBtZW1iZXJvZiBtb2R1bGU6bW9kdWxlcy9hcHBcbiAqIEBleGFtcGxlIDxjYXB0aW9uPiBDcmVhdGluZyBhIHJlbmRlcmluZyBtb2R1bGUgYW5kIHBhc3NpbmcgaXQgdG8gQXBwJ3MgbW9kdWxlczwvY2FwdGlvbj5cbiAqIG5ldyBBcHAoW1xuICogICBuZXcgRWxlbWVudE1vZHVsZSgpLFxuICogICBuZXcgU2NlbmVNb2R1bGUoKSxcbiAqICAgbmV3IENhbWVyYU1vZHVsZSh7XG4gKiAgICAgcG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDYsIDE4KSxcbiAqICAgICBmYXI6IDEwMDAwXG4gKiAgIH0pLFxuICogICBuZXcgUmVuZGVyaW5nTW9kdWxlKHtcbiAqICAgICBiZ0NvbG9yOiAweDE2MjEyOSxcbiAqXG4gKiAgICAgcmVuZGVyZXI6IHtcbiAqICAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAqICAgICAgIHNoYWRvd21hcDoge1xuICogICAgICAgICB0eXBlOiBUSFJFRS5QQ0ZTb2Z0U2hhZG93TWFwXG4gKiAgICAgICB9XG4gKiAgICAgfVxuICogICB9LCB7c2hhZG93OiB0cnVlfSlcbiAqIF0pO1xuICovXG5leHBvcnQgY2xhc3MgUmVuZGVyaW5nTW9kdWxlIHtcbiAgc3RhdGljIGFkZGl0aW9uYWwgPSB7XG4gICAgc2hhZG93KHJlbmRlcmVyKSB7XG4gICAgICByZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZW5hYmxlZCA9IHRydWU7XG5cbiAgZGVmZXIgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICB9KTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSwge3NoYWRvdzogaXNTaGFkb3d9ID0ge3NoYWRvdzogZmFsc2V9KSB7XG4gICAgdGhpcy5wYXJhbXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuXG4gICAgICByZXNvbHV0aW9uOiBuZXcgVmVjdG9yMigxLCAxKSxcbiAgICAgIHBpeGVsUmF0aW86IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLFxuXG4gICAgICBiZ0NvbG9yOiAweDAwMDAwMCxcbiAgICAgIGJnT3BhY2l0eTogMSxcblxuICAgICAgcmVuZGVyZXI6IHt9XG4gICAgfSwgcGFyYW1zKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIGJnQ29sb3IsXG4gICAgICBiZ09wYWNpdHksXG4gICAgICByZW5kZXJlcixcbiAgICAgIHBpeGVsUmF0aW8sXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHJlc29sdXRpb25cbiAgICB9ID0gdGhpcy5wYXJhbXM7XG5cbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFdlYkdMUmVuZGVyZXIocmVuZGVyZXIpO1xuICAgIHRoaXMuZWZmZWN0cyA9IFtdO1xuICAgIHRoaXMuYXBwbHlBZGRpdGlvbmFsKCdzaGFkb3cnLCBpc1NoYWRvdyk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoXG4gICAgICBiZ0NvbG9yLFxuICAgICAgYmdPcGFjaXR5XG4gICAgKTtcblxuICAgIGlmIChwaXhlbFJhdGlvKSB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8ocGl4ZWxSYXRpbyk7XG5cbiAgICB0aGlzLnNldFNpemUoXG4gICAgICBOdW1iZXIod2lkdGggKiByZXNvbHV0aW9uLngpLnRvRml4ZWQoKSxcbiAgICAgIE51bWJlcihoZWlnaHQgKiByZXNvbHV0aW9uLnkpLnRvRml4ZWQoKVxuICAgICk7XG4gIH1cblxuICBhcHBseUFkZGl0aW9uYWwobmFtZSwgaXNBcHBsaWVkID0gZmFsc2UpIHtcbiAgICBpZiAoIWlzQXBwbGllZCkgcmV0dXJuO1xuICAgIFJlbmRlcmluZ01vZHVsZS5hZGRpdGlvbmFsW25hbWVdLmFwcGx5KHRoaXMsIFt0aGlzLnJlbmRlcmVyXSk7XG4gIH1cblxuICBpbnRlZ3JhdGVSZW5kZXJlcihlbGVtZW50LCBzY2VuZSwgY2FtZXJhKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgIHRoaXMucmVuZGVyTG9vcCA9IG5ldyBMb29wKCgpID0+IHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKSk7XG4gICAgdGhpcy5hdHRhY2hUb0NhbnZhcyhlbGVtZW50KTtcblxuICAgIHJldHVybiB0aGlzLnJlbmRlckxvb3A7XG4gIH1cblxuICBlZmZlY3QoZWZmZWN0LCBjYikge1xuICAgIHRoaXMuZGVmZXIudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlckxvb3Auc3RvcCgpO1xuXG4gICAgICBjb25zdCBzaXplID0gdGhpcy5yZW5kZXJlci5nZXRTaXplKCk7XG4gICAgICBlZmZlY3Quc2V0U2l6ZShzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG5cbiAgICAgIGNvbnN0IGxvb3AgPSBuZXcgTG9vcChjYiA/IGNiIDogKCkgPT4ge1xuICAgICAgICBlZmZlY3QucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmVmZmVjdHMucHVzaChsb29wKTtcbiAgICAgIGlmICh0aGlzLmVuYWJsZWQpIGxvb3Auc3RhcnQodGhpcy5hcHApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgc2V0U2l6ZVxuICAgKiBAZGVzY3JpcHRpb24gVXBkYXRlIHJlbmRlciB0YXJnZXQgd2lkdGggYW5kIGhlaWdodC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAgICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcC5SZW5kZXJpbmdNb2R1bGVcbiAgICovXG4gIHNldFNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB0aGlzLnJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBhdHRhY2hUb0NhbnZhcyhlbGVtZW50KSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5yZW5kZXJlci5kb21FbGVtZW50O1xuXG4gICAgLy8gYXR0YWNoIHRvIG5ldyBwYXJlbnQgd29ybGQgZG9tXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlckxvb3Auc3RvcCgpO1xuICAgIHRoaXMuZWZmZWN0cy5mb3JFYWNoKGxvb3AgPT4gbG9vcC5zdG9wKCkpO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICB0aGlzLnJlbmRlckxvb3Auc3RhcnQoKTtcbiAgICB0aGlzLmVmZmVjdHMuZm9yRWFjaChsb29wID0+IGxvb3Auc3RhcnQoKSk7XG4gIH1cblxuICBtYW5hZ2VyKG1hbmFnZXIpIHtcbiAgICBtYW5hZ2VyLmRlZmluZSgncmVuZGVyaW5nJyk7XG4gICAgbWFuYWdlci5zZXQoJ3JlbmRlcmVyJywgdGhpcy5yZW5kZXJlcik7XG5cbiAgICB0aGlzLmFwcCA9IG1hbmFnZXIuaGFuZGxlcjtcblxuICAgIHRoaXMucmVuZGVyTG9vcCA9IHRoaXMuaW50ZWdyYXRlUmVuZGVyZXIoXG4gICAgICBtYW5hZ2VyLmdldCgnZWxlbWVudCcpLFxuICAgICAgbWFuYWdlci5nZXQoJ3NjZW5lJyksXG4gICAgICBtYW5hZ2VyLmdldCgnY2FtZXJhJykubmF0aXZlXG4gICAgKTtcblxuICAgIG1hbmFnZXIudXBkYXRlKHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQgPT4ge1xuICAgICAgICB0aGlzLmF0dGFjaFRvQ2FudmFzKGVsZW1lbnQpO1xuICAgICAgfSxcbiAgICAgIHNjZW5lOiBzY2VuZSA9PiB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICAgIH0sXG4gICAgICBjYW1lcmE6IGNhbWVyYSA9PiB7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhLm5hdGl2ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucmVzb2x2ZSgpO1xuICB9XG5cbiAgaW50ZWdyYXRlKHNlbGYpIHtcbiAgICBzZWxmLnJlbmRlckxvb3Auc3RhcnQodGhpcyk7XG4gICAgc2VsZi5lZmZlY3RzLmZvckVhY2gobG9vcCA9PiBsb29wLnN0YXJ0KHRoaXMpKTtcbiAgfVxuXG4gIGRpc3Bvc2Uoc2VsZikge1xuICAgIHNlbGYucmVuZGVyTG9vcC5zdG9wKHRoaXMpO1xuICAgIHNlbGYuZWZmZWN0cy5mb3JFYWNoKGxvb3AgPT4gbG9vcC5zdG9wKHRoaXMpKTtcbiAgICBzZWxmLnJlbmRlcmVyLmZvcmNlQ29udGV4dExvc3MoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgU2NlbmVcbn0gZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzcyBTY2VuZU1vZHVsZVxuICogQGNhdGVnb3J5IG1vZHVsZXMvYXBwXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt3aWxsU2NlbmVCZVJlcGxhY2VkPWZhbHNlXSB3aWxsU2NlbmVCZVJlcGxhY2VkIHNob3VsZCBiZSB0cnVlIG9ubHkgaWYgeW91IGFyZSBnb2luZyB0byBvdmVyd3JpdGUgc2NlbmUgZGVwZW5kZW5jeSBldmVuIHdpdGhvdXQgdGhlIHVzZSBvZiBkZWZhdWx0IG9uZS5cbiAqIEBtZW1iZXJvZiBtb2R1bGU6bW9kdWxlcy9hcHBcbiAqL1xuZXhwb3J0IGNsYXNzIFNjZW5lTW9kdWxlIHtcbiAgY29uc3RydWN0b3Iod2lsbFNjZW5lQmVSZXBsYWNlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5zY2VuZSA9IHdpbGxTY2VuZUJlUmVwbGFjZWQgPyBudWxsIDogbmV3IFNjZW5lKCk7XG4gIH1cblxuICBtYW5hZ2VyKG1hbmFnZXIpIHtcbiAgICBtYW5hZ2VyLnNldCgnc2NlbmUnLCB0aGlzLnNjZW5lKTtcbiAgfVxuXG4gIGludGVncmF0ZShzZWxmKSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXG4gICAgdGhpcy5hZGQgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICBvYmplY3QucGFyZW50ID0gdGhpcztcblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgb2JqZWN0LmRlZmVyKCgpID0+IHtcbiAgICAgICAgICBjb25zdCB7bmF0aXZlfSA9IG9iamVjdDtcbiAgICAgICAgICBpZiAoIW5hdGl2ZSkgcmVqZWN0KCk7XG5cbiAgICAgICAgICBjb25zdCBhZGRQcm9taXNlID0gdGhpcy5hcHBseUJyaWRnZSh7b25BZGQ6IG9iamVjdH0pLm9uQWRkO1xuXG4gICAgICAgICAgY29uc3QgcmVzb2x2ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnNjZW5lLmFkZChuYXRpdmUpO1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKG9iamVjdCk7XG5cbiAgICAgICAgICAgIHJlc29sdmUob2JqZWN0KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGFkZFByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKVxuICAgICAgICAgICAgYWRkUHJvbWlzZS50aGVuKHJlc29sdmVyKTtcbiAgICAgICAgICBlbHNlIHJlc29sdmVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMucmVtb3ZlID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgb2JqZWN0LnBhcmVudCA9IG51bGw7XG4gICAgICBzZWxmLnNjZW5lLnJlbW92ZShvYmplY3QubmF0aXZlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRTY2VuZSA9IGZ1bmN0aW9uIChzY2VuZSkge1xuICAgICAgc2VsZi5zY2VuZSA9IHNjZW5lO1xuICAgICAgdGhpcy5tYW5hZ2VyLnNldCgnc2NlbmUnLCBzY2VuZSk7XG4gICAgfTtcbiAgfVxufVxuIiwiLy8gaW1wb3J0IHthZGRSZXNpemVMaXN0ZW5lcn0gZnJvbSAnZGV0ZWN0LWVsZW1lbnQtcmVzaXplJztcblxuLyoqXG4gKiBAY2xhc3MgUmVzaXplTW9kdWxlXG4gKiBAY2F0ZWdvcnkgbW9kdWxlcy9hcHBcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zPXthdXRvOiB0cnVlfV0gLSBJZiBhdXRvIGlzIHNldCB0byB0cnVlIC0gcmVzaXplIHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gY29udGFpbmVyIHJlc2l6ZXNcbiAqIEBtZW1iZXJvZiBtb2R1bGU6bW9kdWxlcy9hcHBcbiAqL1xuZXhwb3J0IGNsYXNzIFJlc2l6ZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgdGhpcy5wYXJhbXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGF1dG86IHRydWVcbiAgICB9LCBwYXJhbXMpO1xuXG4gICAgdGhpcy5jYWxsYmFja3MgPSBbdGhpcy5zZXRTaXplLmJpbmQodGhpcyldO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBzZXRTaXplXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzZXRzIHRoZSBwcm92aWRlZCB3aWR0aCAmIGhlaWdodCB0byB0aGUgcmVuZGVyZXIgb2JqZWN0LlxuICAgKiBAcGFyYW0ge051bWJlcn0gW3dpZHRoPTFdIC0gVGhlIHByb21pc2UgdGhhdCBzaG91bGQgYmUgYWRkZWQgdG8gYSBxdWV1ZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtoZWlnaHQ9MV0gLSB0aGF0IGlzIHJlc29sdmVkIHdoZW4gYWxsIHByb21pc2VzIGNvbXBsZXRlZC5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcC5SZXNpemVNb2R1bGVcbiAgICovXG4gIHNldFNpemUod2lkdGggPSAxLCBoZWlnaHQgPSAxKSB7XG4gICAgdGhpcy5jYW1lcmEubmF0aXZlLmFzcGVjdCA9IHdpZHRoIC8gaGVpZ2h0O1xuICAgIHRoaXMuY2FtZXJhLm5hdGl2ZS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICBpZiAodGhpcy5yZW5kZXJpbmcpIHRoaXMucmVuZGVyaW5nLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB0cmlnZ2VyXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gVHJpZ2dlcnMgcmVzaXplIHdoZW4gY2FsbGVkLiB3aWR0aCAmIGhlaWdodCBhcmUgZGV0ZXJtaW5lZCBhdXRvbWF0aWNhbGx5XG4gICAqIFRoaXMgaW52b2tlcyBlYWNoIGNhbGxiYWNrcyB3aXRoIHRoZSBuZXcgd2lkdGggYW5kIGhlaWdodCBhcyBwYXJhbXNcbiAgICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcC5SZXNpemVNb2R1bGVcbiAgICovXG4gIHRyaWdnZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgIG9mZnNldFdpZHRoLFxuICAgICAgICBvZmZzZXRIZWlnaHRcbiAgICAgIH0sXG4gICAgICByZXNvbHV0aW9uXG4gICAgfSA9IHRoaXM7XG5cbiAgICBjb25zdCB3aWR0aCA9IE51bWJlcihvZmZzZXRXaWR0aCAqIHJlc29sdXRpb24ueCkudG9GaXhlZCgpO1xuICAgIGNvbnN0IGhlaWdodCA9IE51bWJlcihvZmZzZXRIZWlnaHQgKiByZXNvbHV0aW9uLnkpLnRvRml4ZWQoKTtcblxuICAgIHRoaXMuY2FsbGJhY2tzLmZvckVhY2goY2IgPT4ge1xuICAgICAgY2Iod2lkdGgsIGhlaWdodCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBhZGRBdXRvcmVzaXplXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gU2V0cyBtb2R1bGUgdG8gYXV0b3Jlc2l6ZSwgdGhpcyBhZGRzIGFuIGV2ZW50IGxpc3RlbmUgb24gd2luZG93IHJlc2l6ZSB0byB0cmlnZ2VyIHRoZSByZXNpemVcbiAgICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcC5SZXNpemVNb2R1bGVcbiAgICovXG4gIGFkZEF1dG9yZXNpemUoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmdldENvbnRhaW5lcigpO1xuICAgIHRoaXMucmVzb2x1dGlvbiA9IHRoaXMuZ2V0UmVzb2x1dGlvbigpO1xuXG4gICAgaWYgKHRoaXMucGFyYW1zLmF1dG8pIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnRyaWdnZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBhZGRDYWxsYmFja1xuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIEFkZHMgYSBjYWxsIGJhY2sgZnVuY3Rpb24gdG8gdGhlIGV4aXN0aW5nIGNhbGxiYWNrcyBsaXN0LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGFkZFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOm1vZHVsZXMvYXBwLlJlc2l6ZU1vZHVsZVxuICAgKi9cbiAgYWRkQ2FsbGJhY2soZnVuYykge1xuICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goZnVuYyk7XG4gIH1cblxuICBtYW5hZ2VyKG1hbmFnZXIpIHtcbiAgICBtYW5hZ2VyLmRlZmluZSgncmVzaXplJyk7XG5cbiAgICB0aGlzLnJlbmRlcmluZyA9IG1hbmFnZXIuZ2V0KCdyZW5kZXJlcicpO1xuICAgIHRoaXMuY2FtZXJhID0gbWFuYWdlci5nZXQoJ2NhbWVyYScpO1xuXG4gICAgdGhpcy5nZXRSZXNvbHV0aW9uID0gKCkgPT4gbWFuYWdlci51c2UoJ3JlbmRlcmluZycpLnBhcmFtcy5yZXNvbHV0aW9uO1xuICAgIHRoaXMuZ2V0Q29udGFpbmVyID0gKCkgPT4gbWFuYWdlci5nZXQoJ2NvbnRhaW5lcicpO1xuXG4gICAgdGhpcy5hZGRBdXRvcmVzaXplKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNoYWRlck1hdGVyaWFsLCBVbmlmb3JtIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBmcmFnbWVudCA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdFByZXZpb3VzTHVtO1xcclxcbnVuaWZvcm0gc2FtcGxlcjJEIHRDdXJyZW50THVtO1xcclxcbnVuaWZvcm0gZmxvYXQgbWluTHVtaW5hbmNlO1xcclxcbnVuaWZvcm0gZmxvYXQgZGVsdGE7XFxyXFxudW5pZm9ybSBmbG9hdCB0YXU7XFxyXFxuXFxyXFxudmFyeWluZyB2ZWMyIHZVdjtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0ZmxvYXQgcHJldmlvdXNMdW0gPSB0ZXh0dXJlMkQodFByZXZpb3VzTHVtLCB2VXYsIE1JUF9MRVZFTF8xWDEpLnI7XFxyXFxuXFx0ZmxvYXQgY3VycmVudEx1bSA9IHRleHR1cmUyRCh0Q3VycmVudEx1bSwgdlV2LCBNSVBfTEVWRUxfMVgxKS5yO1xcclxcblxcclxcblxcdHByZXZpb3VzTHVtID0gbWF4KG1pbkx1bWluYW5jZSwgcHJldmlvdXNMdW0pO1xcclxcblxcdGN1cnJlbnRMdW0gPSBtYXgobWluTHVtaW5hbmNlLCBjdXJyZW50THVtKTtcXHJcXG5cXHJcXG5cXHQvLyBBZGFwdCB0aGUgbHVtaW5hbmNlIHVzaW5nIFBhdHRhbmFpaydzIHRlY2huaXF1ZS5cXHJcXG5cXHRmbG9hdCBhZGFwdGVkTHVtID0gcHJldmlvdXNMdW0gKyAoY3VycmVudEx1bSAtIHByZXZpb3VzTHVtKSAqICgxLjAgLSBleHAoLWRlbHRhICogdGF1KSk7XFxyXFxuXFxyXFxuXFx0Z2xfRnJhZ0NvbG9yLnIgPSBhZGFwdGVkTHVtO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuY29uc3QgdmVydGV4ID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2VXYgPSB1djtcXHJcXG5cXHRnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuXHJcbi8qKlxyXG4gKiBBbiBhZGFwdGl2ZSBsdW1pbm9zaXR5IHNoYWRlciBtYXRlcmlhbC5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgQWRhcHRpdmVMdW1pbm9zaXR5TWF0ZXJpYWwgZXh0ZW5kcyBTaGFkZXJNYXRlcmlhbCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgYWRhcHRpdmUgbHVtaW5vc2l0eSBtYXRlcmlhbC5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0c3VwZXIoe1xyXG5cclxuXHRcdFx0dHlwZTogXCJBZGFwdGl2ZUx1bWlub3NpdHlNYXRlcmlhbFwiLFxyXG5cclxuXHRcdFx0ZGVmaW5lczoge1xyXG5cclxuXHRcdFx0XHRNSVBfTEVWRUxfMVgxOiBcIjAuMFwiXHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFx0dFByZXZpb3VzTHVtOiBuZXcgVW5pZm9ybShudWxsKSxcclxuXHRcdFx0XHR0Q3VycmVudEx1bTogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0bWluTHVtaW5hbmNlOiBuZXcgVW5pZm9ybSgwLjAxKSxcclxuXHRcdFx0XHRkZWx0YTogbmV3IFVuaWZvcm0oMC4wKSxcclxuXHRcdFx0XHR0YXU6IG5ldyBVbmlmb3JtKDEuMClcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogZnJhZ21lbnQsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogdmVydGV4LFxyXG5cclxuXHRcdFx0ZGVwdGhXcml0ZTogZmFsc2UsXHJcblx0XHRcdGRlcHRoVGVzdDogZmFsc2VcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgVW5pZm9ybSB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgZnJhZ21lbnQgPSBcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcclxcbnVuaWZvcm0gc2FtcGxlcjJEIHREZXB0aDtcXHJcXG5cXHJcXG51bmlmb3JtIGZsb2F0IGZvY3VzO1xcclxcbnVuaWZvcm0gZmxvYXQgYXNwZWN0O1xcclxcbnVuaWZvcm0gZmxvYXQgYXBlcnR1cmU7XFxyXFxudW5pZm9ybSBmbG9hdCBtYXhCbHVyO1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxuI2lmbmRlZiBVU0VfTE9HREVQVEhCVUZcXHJcXG5cXHJcXG5cXHQjaW5jbHVkZSA8cGFja2luZz5cXHJcXG5cXHJcXG5cXHR1bmlmb3JtIGZsb2F0IGNhbWVyYU5lYXI7XFxyXFxuXFx0dW5pZm9ybSBmbG9hdCBjYW1lcmFGYXI7XFxyXFxuXFxyXFxuXFx0ZmxvYXQgcmVhZERlcHRoKHNhbXBsZXIyRCBkZXB0aFNhbXBsZXIsIHZlYzIgY29vcmQpIHtcXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBmcmFnQ29vcmRaID0gdGV4dHVyZTJEKGRlcHRoU2FtcGxlciwgY29vcmQpLng7XFxyXFxuXFx0XFx0ZmxvYXQgdmlld1ogPSBwZXJzcGVjdGl2ZURlcHRoVG9WaWV3WihmcmFnQ29vcmRaLCBjYW1lcmFOZWFyLCBjYW1lcmFGYXIpO1xcclxcblxcclxcblxcdFxcdHJldHVybiB2aWV3WlRvT3J0aG9ncmFwaGljRGVwdGgodmlld1osIGNhbWVyYU5lYXIsIGNhbWVyYUZhcik7XFxyXFxuXFxyXFxuXFx0fVxcclxcblxcclxcbiNlbmRpZlxcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2ZWMyIGFzcGVjdENvcnJlY3Rpb24gPSB2ZWMyKDEuMCwgYXNwZWN0KTtcXHJcXG5cXHJcXG5cXHQjaWZkZWYgVVNFX0xPR0RFUFRIQlVGXFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgZGVwdGggPSB0ZXh0dXJlMkQodERlcHRoLCB2VXYpLng7XFxyXFxuXFxyXFxuXFx0I2Vsc2VcXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBkZXB0aCA9IHJlYWREZXB0aCh0RGVwdGgsIHZVdik7XFxyXFxuXFxyXFxuXFx0I2VuZGlmXFxyXFxuXFxyXFxuXFx0ZmxvYXQgZmFjdG9yID0gZGVwdGggLSBmb2N1cztcXHJcXG5cXHJcXG5cXHR2ZWMyIGRvZkJsdXIgPSB2ZWMyKGNsYW1wKGZhY3RvciAqIGFwZXJ0dXJlLCAtbWF4Qmx1ciwgbWF4Qmx1cikpO1xcclxcblxcclxcblxcdHZlYzIgZG9mYmx1cjkgPSBkb2ZCbHVyICogMC45O1xcclxcblxcdHZlYzIgZG9mYmx1cjcgPSBkb2ZCbHVyICogMC43O1xcclxcblxcdHZlYzIgZG9mYmx1cjQgPSBkb2ZCbHVyICogMC40O1xcclxcblxcclxcblxcdHZlYzQgY29sb3IgPSB2ZWM0KDAuMCk7XFxyXFxuXFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuMCwgICAwLjQgKSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mQmx1cik7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC4xNSwgIDAuMzcpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZCbHVyKTtcXHJcXG5cXHRjb2xvciArPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdiArICh2ZWMyKCAwLjI5LCAgMC4yOSkgKiBhc3BlY3RDb3JyZWN0aW9uKSAqIGRvZkJsdXIpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoLTAuMzcsICAwLjE1KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mQmx1cik7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC40MCwgIDAuMCApICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZCbHVyKTtcXHJcXG5cXHRjb2xvciArPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdiArICh2ZWMyKCAwLjM3LCAtMC4xNSkgKiBhc3BlY3RDb3JyZWN0aW9uKSAqIGRvZkJsdXIpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuMjksIC0wLjI5KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mQmx1cik7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMigtMC4xNSwgLTAuMzcpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZCbHVyKTtcXHJcXG5cXHRjb2xvciArPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdiArICh2ZWMyKCAwLjAsICAtMC40ICkgKiBhc3BlY3RDb3JyZWN0aW9uKSAqIGRvZkJsdXIpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoLTAuMTUsICAwLjM3KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mQmx1cik7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMigtMC4yOSwgIDAuMjkpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZCbHVyKTtcXHJcXG5cXHRjb2xvciArPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdiArICh2ZWMyKCAwLjM3LCAgMC4xNSkgKiBhc3BlY3RDb3JyZWN0aW9uKSAqIGRvZkJsdXIpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoLTAuNCwgICAwLjAgKSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mQmx1cik7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMigtMC4zNywgLTAuMTUpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZCbHVyKTtcXHJcXG5cXHRjb2xvciArPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdiArICh2ZWMyKC0wLjI5LCAtMC4yOSkgKiBhc3BlY3RDb3JyZWN0aW9uKSAqIGRvZkJsdXIpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuMTUsIC0wLjM3KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mQmx1cik7XFxyXFxuXFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC4xNSwgIDAuMzcpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyOSk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMigtMC4zNywgIDAuMTUpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyOSk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC4zNywgLTAuMTUpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyOSk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMigtMC4xNSwgLTAuMzcpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyOSk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMigtMC4xNSwgIDAuMzcpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyOSk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC4zNywgIDAuMTUpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyOSk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMigtMC4zNywgLTAuMTUpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyOSk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC4xNSwgLTAuMzcpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyOSk7XFxyXFxuXFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC4yOSwgIDAuMjkpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyNyk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC40MCwgIDAuMCApICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyNyk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC4yOSwgLTAuMjkpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyNyk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC4wLCAgLTAuNCApICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyNyk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMigtMC4yOSwgIDAuMjkpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyNyk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMigtMC40LCAgIDAuMCApICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyNyk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMigtMC4yOSwgLTAuMjkpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyNyk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC4wLCAgIDAuNCApICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyNyk7XFxyXFxuXFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC4yOSwgIDAuMjkpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyNCk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC40LCAgIDAuMCApICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyNCk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC4yOSwgLTAuMjkpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyNCk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC4wLCAgLTAuNCApICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyNCk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMigtMC4yOSwgIDAuMjkpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyNCk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMigtMC40LCAgIDAuMCApICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyNCk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMigtMC4yOSwgLTAuMjkpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyNCk7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC4wLCAgIDAuNCApICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZibHVyNCk7XFxyXFxuXFxyXFxuXFx0Z2xfRnJhZ0NvbG9yID0gY29sb3IgLyA0MS4wO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuY29uc3QgdmVydGV4ID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2VXYgPSB1djtcXHJcXG5cXHRnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuXHJcbi8qKlxyXG4gKiBEZXB0aCBvZiBGaWVsZCBzaGFkZXIgKEJva2VoKS5cclxuICpcclxuICogT3JpZ2luYWwgc2hhZGVyIGNvZGUgYnkgTWFydGlucyBVcGl0aXM6XHJcbiAqICBodHRwOi8vYXJ0bWFydGluc2guYmxvZ3Nwb3QuY29tLzIwMTAvMDIvZ2xzbC1sZW5zLWJsdXItZmlsdGVyLXdpdGgtYm9rZWguaHRtbFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBCb2tlaE1hdGVyaWFsIGV4dGVuZHMgU2hhZGVyTWF0ZXJpYWwge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGJva2VoIG1hdGVyaWFsLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQZXJzcGVjdGl2ZUNhbWVyYX0gW2NhbWVyYV0gLSBBIGNhbWVyYS5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gVGhlIG9wdGlvbnMuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZvY3VzPTEuMF0gLSBGb2N1cyBkaXN0YW5jZS5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuYXBlcnR1cmU9MC4wMjVdIC0gQ2FtZXJhIGFwZXJ0dXJlIHNjYWxlLiBCaWdnZXIgdmFsdWVzIGZvciBzaGFsbG93ZXIgZGVwdGggb2YgZmllbGQuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm1heEJsdXI9MS4wXSAtIE1heGltdW0gYmx1ciBzdHJlbmd0aC5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3IoY2FtZXJhID0gbnVsbCwgb3B0aW9ucyA9IHt9KSB7XHJcblxyXG5cdFx0aWYob3B0aW9ucy5mb2N1cyA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMuZm9jdXMgPSAxLjA7IH1cclxuXHRcdGlmKG9wdGlvbnMuYXBlcnR1cmUgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLmFwZXJ0dXJlID0gMC4wMjU7IH1cclxuXHRcdGlmKG9wdGlvbnMubWF4Qmx1ciA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMubWF4Qmx1ciA9IDEuMDsgfVxyXG5cclxuXHRcdHN1cGVyKHtcclxuXHJcblx0XHRcdHR5cGU6IFwiQm9rZWhNYXRlcmlhbFwiLFxyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFx0Y2FtZXJhTmVhcjogbmV3IFVuaWZvcm0oMC4xKSxcclxuXHRcdFx0XHRjYW1lcmFGYXI6IG5ldyBVbmlmb3JtKDIwMDApLFxyXG5cdFx0XHRcdGFzcGVjdDogbmV3IFVuaWZvcm0oMS4wKSxcclxuXHJcblx0XHRcdFx0dERpZmZ1c2U6IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cdFx0XHRcdHREZXB0aDogbmV3IFVuaWZvcm0obnVsbCksXHJcblxyXG5cdFx0XHRcdGZvY3VzOiBuZXcgVW5pZm9ybShvcHRpb25zLmZvY3VzKSxcclxuXHRcdFx0XHRhcGVydHVyZTogbmV3IFVuaWZvcm0ob3B0aW9ucy5hcGVydHVyZSksXHJcblx0XHRcdFx0bWF4Qmx1cjogbmV3IFVuaWZvcm0ob3B0aW9ucy5tYXhCbHVyKVxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudCxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiB2ZXJ0ZXgsXHJcblxyXG5cdFx0XHRkZXB0aFdyaXRlOiBmYWxzZSxcclxuXHRcdFx0ZGVwdGhUZXN0OiBmYWxzZVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmKGNhbWVyYSAhPT0gbnVsbCkgeyB0aGlzLmFkb3B0Q2FtZXJhU2V0dGluZ3MoY2FtZXJhKTsgfVxyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkb3B0cyB0aGUgc2V0dGluZ3Mgb2YgdGhlIGdpdmVuIGNhbWVyYS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UGVyc3BlY3RpdmVDYW1lcmF9IGNhbWVyYSAtIEEgY2FtZXJhLlxyXG5cdCAqL1xyXG5cclxuXHRhZG9wdENhbWVyYVNldHRpbmdzKGNhbWVyYSkge1xyXG5cclxuXHRcdHRoaXMudW5pZm9ybXMuY2FtZXJhTmVhci52YWx1ZSA9IGNhbWVyYS5uZWFyO1xyXG5cdFx0dGhpcy51bmlmb3Jtcy5jYW1lcmFGYXIudmFsdWUgPSBjYW1lcmEuZmFyO1xyXG5cdFx0dGhpcy51bmlmb3Jtcy5hc3BlY3QudmFsdWUgPSBjYW1lcmEuYXNwZWN0O1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlck1hdGVyaWFsLCBVbmlmb3JtLCBWZWN0b3IyIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBmcmFnbWVudCA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XFxyXFxudW5pZm9ybSBzYW1wbGVyMkQgdERlcHRoO1xcclxcblxcclxcbnVuaWZvcm0gdmVjMiB0ZXhlbFNpemU7XFxyXFxudW5pZm9ybSB2ZWMyIGhhbGZUZXhlbFNpemU7XFxyXFxuXFxyXFxudW5pZm9ybSBmbG9hdCBjYW1lcmFOZWFyO1xcclxcbnVuaWZvcm0gZmxvYXQgY2FtZXJhRmFyO1xcclxcblxcclxcbnVuaWZvcm0gZmxvYXQgZm9jYWxMZW5ndGg7XFxyXFxudW5pZm9ybSBmbG9hdCBmb2NhbFN0b3A7XFxyXFxuXFxyXFxudW5pZm9ybSBmbG9hdCBtYXhCbHVyO1xcclxcbnVuaWZvcm0gZmxvYXQgbHVtaW5hbmNlVGhyZXNob2xkO1xcclxcbnVuaWZvcm0gZmxvYXQgbHVtaW5hbmNlR2FpbjtcXHJcXG51bmlmb3JtIGZsb2F0IGJpYXM7XFxyXFxudW5pZm9ybSBmbG9hdCBmcmluZ2U7XFxyXFxudW5pZm9ybSBmbG9hdCBkaXRoZXJTdHJlbmd0aDtcXHJcXG5cXHJcXG4jaWZkZWYgU0hBREVSX0ZPQ1VTXFxyXFxuXFxyXFxuXFx0dW5pZm9ybSB2ZWMyIGZvY3VzQ29vcmRzO1xcclxcblxcclxcbiNlbHNlXFxyXFxuXFxyXFxuXFx0dW5pZm9ybSBmbG9hdCBmb2NhbERlcHRoO1xcclxcblxcclxcbiNlbmRpZlxcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxuI2lmbmRlZiBVU0VfTE9HREVQVEhCVUZcXHJcXG5cXHJcXG5cXHQjaW5jbHVkZSA8cGFja2luZz5cXHJcXG5cXHJcXG5cXHRmbG9hdCByZWFkRGVwdGgoc2FtcGxlcjJEIGRlcHRoU2FtcGxlciwgdmVjMiBjb29yZCkge1xcclxcblxcclxcblxcdFxcdGZsb2F0IGZyYWdDb29yZFogPSB0ZXh0dXJlMkQoZGVwdGhTYW1wbGVyLCBjb29yZCkueDtcXHJcXG5cXHRcXHRmbG9hdCB2aWV3WiA9IHBlcnNwZWN0aXZlRGVwdGhUb1ZpZXdaKGZyYWdDb29yZFosIGNhbWVyYU5lYXIsIGNhbWVyYUZhcik7XFxyXFxuXFxyXFxuXFx0XFx0cmV0dXJuIHZpZXdaVG9PcnRob2dyYXBoaWNEZXB0aCh2aWV3WiwgY2FtZXJhTmVhciwgY2FtZXJhRmFyKTtcXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxuI2lmZGVmIFBFTlRBR09OXFxyXFxuXFxyXFxuXFx0ZmxvYXQgcGVudGEodmVjMiBjb29yZHMpIHtcXHJcXG5cXHJcXG5cXHRcXHRjb25zdCB2ZWM0IEhTMCA9IHZlYzQoIDEuMCwgICAgICAgICAgMC4wLCAgICAgICAgIDAuMCwgMS4wKTtcXHJcXG5cXHRcXHRjb25zdCB2ZWM0IEhTMSA9IHZlYzQoIDAuMzA5MDE2OTk0LCAgMC45NTEwNTY1MTYsIDAuMCwgMS4wKTtcXHJcXG5cXHRcXHRjb25zdCB2ZWM0IEhTMiA9IHZlYzQoLTAuODA5MDE2OTk0LCAgMC41ODc3ODUyNTIsIDAuMCwgMS4wKTtcXHJcXG5cXHRcXHRjb25zdCB2ZWM0IEhTMyA9IHZlYzQoLTAuODA5MDE2OTk0LCAtMC41ODc3ODUyNTIsIDAuMCwgMS4wKTtcXHJcXG5cXHRcXHRjb25zdCB2ZWM0IEhTNCA9IHZlYzQoIDAuMzA5MDE2OTk0LCAtMC45NTEwNTY1MTYsIDAuMCwgMS4wKTtcXHJcXG5cXHRcXHRjb25zdCB2ZWM0IEhTNSA9IHZlYzQoIDAuMCwgICAgICAgICAgMC4wLCAgICAgICAgIDEuMCwgMS4wKTtcXHJcXG5cXHJcXG5cXHRcXHRjb25zdCB2ZWM0IE9ORSA9IHZlYzQoMS4wKTtcXHJcXG5cXHJcXG5cXHRcXHRjb25zdCBmbG9hdCBQX0ZFQVRIRVIgPSAwLjQ7XFxyXFxuXFx0XFx0Y29uc3QgZmxvYXQgTl9GRUFUSEVSID0gLVBfRkVBVEhFUjtcXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBpbk9yT3V0ID0gLTQuMDtcXHJcXG5cXHJcXG5cXHRcXHR2ZWM0IFAgPSB2ZWM0KGNvb3JkcywgdmVjMihSSU5HU19GTE9BVCAtIDEuMykpO1xcclxcblxcclxcblxcdFxcdHZlYzQgZGlzdCA9IHZlYzQoXFxyXFxuXFx0XFx0XFx0ZG90KFAsIEhTMCksXFxyXFxuXFx0XFx0XFx0ZG90KFAsIEhTMSksXFxyXFxuXFx0XFx0XFx0ZG90KFAsIEhTMiksXFxyXFxuXFx0XFx0XFx0ZG90KFAsIEhTMylcXHJcXG5cXHRcXHQpO1xcclxcblxcclxcblxcdFxcdGRpc3QgPSBzbW9vdGhzdGVwKE5fRkVBVEhFUiwgUF9GRUFUSEVSLCBkaXN0KTtcXHJcXG5cXHJcXG5cXHRcXHRpbk9yT3V0ICs9IGRvdChkaXN0LCBPTkUpO1xcclxcblxcclxcblxcdFxcdGRpc3QueCA9IGRvdChQLCBIUzQpO1xcclxcblxcdFxcdGRpc3QueSA9IEhTNS53IC0gYWJzKFAueik7XFxyXFxuXFxyXFxuXFx0XFx0ZGlzdCA9IHNtb290aHN0ZXAoTl9GRUFUSEVSLCBQX0ZFQVRIRVIsIGRpc3QpO1xcclxcblxcdFxcdGluT3JPdXQgKz0gZGlzdC54O1xcclxcblxcclxcblxcdFxcdHJldHVybiBjbGFtcChpbk9yT3V0LCAwLjAsIDEuMCk7XFxyXFxuXFxyXFxuXFx0fVxcclxcblxcclxcbiNlbmRpZlxcclxcblxcclxcbiNpZmRlZiBTSE9XX0ZPQ1VTXFxyXFxuXFxyXFxuXFx0dmVjMyBkZWJ1Z0ZvY3VzKHZlYzMgYywgZmxvYXQgYmx1ciwgZmxvYXQgZGVwdGgpIHtcXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBlZGdlID0gMC4wMDIgKiBkZXB0aDtcXHJcXG5cXHRcXHRmbG9hdCBtID0gY2xhbXAoc21vb3Roc3RlcCgwLjAsIGVkZ2UsIGJsdXIpLCAwLjAsIDEuMCk7XFxyXFxuXFx0XFx0ZmxvYXQgZSA9IGNsYW1wKHNtb290aHN0ZXAoMS4wIC0gZWRnZSwgMS4wLCBibHVyKSwgMC4wLCAxLjApO1xcclxcblxcclxcblxcdFxcdGMgPSBtaXgoYywgdmVjMygxLjAsIDAuNSwgMC4wKSwgKDEuMCAtIG0pICogMC42KTtcXHJcXG5cXHRcXHRjID0gbWl4KGMsIHZlYzMoMC4wLCAwLjUsIDEuMCksICgoMS4wIC0gZSkgLSAoMS4wIC0gbSkpICogMC4yKTtcXHJcXG5cXHJcXG5cXHRcXHRyZXR1cm4gYztcXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxuI2lmZGVmIFZJR05FVFRFXFxyXFxuXFxyXFxuXFx0ZmxvYXQgdmlnbmV0dGUoKSB7XFxyXFxuXFxyXFxuXFx0XFx0Y29uc3QgdmVjMiBDRU5URVIgPSB2ZWMyKDAuNSk7XFxyXFxuXFxyXFxuXFx0XFx0Y29uc3QgZmxvYXQgVklHTkVUVEVfT1VUID0gMS4zO1xcclxcblxcdFxcdGNvbnN0IGZsb2F0IFZJR05FVFRFX0lOID0gMC4wO1xcclxcblxcdFxcdGNvbnN0IGZsb2F0IFZJR05FVFRFX0ZBREUgPSAyMi4wOyBcXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBkID0gZGlzdGFuY2UodlV2LCBDRU5URVIpO1xcclxcblxcdFxcdGQgPSBzbW9vdGhzdGVwKFZJR05FVFRFX09VVCArIChmb2NhbFN0b3AgLyBWSUdORVRURV9GQURFKSwgVklHTkVUVEVfSU4gKyAoZm9jYWxTdG9wIC8gVklHTkVUVEVfRkFERSksIGQpO1xcclxcblxcclxcblxcdFxcdHJldHVybiBjbGFtcChkLCAwLjAsIDEuMCk7XFxyXFxuXFxyXFxuXFx0fVxcclxcblxcclxcbiNlbmRpZlxcclxcblxcclxcbnZlYzIgcmFuZCh2ZWMyIGNvb3JkKSB7XFxyXFxuXFxyXFxuXFx0dmVjMiBub2lzZTtcXHJcXG5cXHJcXG5cXHQjaWZkZWYgTk9JU0VcXHJcXG5cXHJcXG5cXHRcXHRjb25zdCBmbG9hdCBhID0gMTIuOTg5ODtcXHJcXG5cXHRcXHRjb25zdCBmbG9hdCBiID0gNzguMjMzO1xcclxcblxcdFxcdGNvbnN0IGZsb2F0IGMgPSA0Mzc1OC41NDUzO1xcclxcblxcclxcblxcdFxcdG5vaXNlLnggPSBjbGFtcChmcmFjdChzaW4obW9kKGRvdChjb29yZCwgdmVjMihhLCBiKSksIDMuMTQpKSAqIGMpLCAwLjAsIDEuMCkgKiAyLjAgLSAxLjA7XFxyXFxuXFx0XFx0bm9pc2UueSA9IGNsYW1wKGZyYWN0KHNpbihtb2QoZG90KGNvb3JkLCB2ZWMyKGEsIGIpICogMi4wKSwgMy4xNCkpICogYyksIDAuMCwgMS4wKSAqIDIuMCAtIDEuMDtcXHJcXG5cXHJcXG5cXHQjZWxzZVxcclxcblxcclxcblxcdFxcdG5vaXNlLnggPSAoKGZyYWN0KDEuMCAtIGNvb3JkLnMgKiBoYWxmVGV4ZWxTaXplLngpICogMC4yNSkgKyAoZnJhY3QoY29vcmQudCAqIGhhbGZUZXhlbFNpemUueSkgKiAwLjc1KSkgKiAyLjAgLSAxLjA7XFxyXFxuXFx0XFx0bm9pc2UueSA9ICgoZnJhY3QoMS4wIC0gY29vcmQucyAqIGhhbGZUZXhlbFNpemUueCkgKiAwLjc1KSArIChmcmFjdChjb29yZC50ICogaGFsZlRleGVsU2l6ZS55KSAqIDAuMjUpKSAqIDIuMCAtIDEuMDtcXHJcXG5cXHJcXG5cXHQjZW5kaWZcXHJcXG5cXHJcXG5cXHRyZXR1cm4gbm9pc2U7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbnZlYzMgcHJvY2Vzc1RleGVsKHZlYzIgY29vcmRzLCBmbG9hdCBibHVyKSB7XFxyXFxuXFxyXFxuXFx0Y29uc3QgdmVjMyBMVU1fQ09FRkYgPSB2ZWMzKDAuMjk5LCAwLjU4NywgMC4xMTQpO1xcclxcblxcclxcblxcdHZlYzMgYztcXHJcXG5cXHRjLnIgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIGNvb3JkcyArIHZlYzIoMC4wLCAxLjApICogdGV4ZWxTaXplICogZnJpbmdlICogYmx1cikucjtcXHJcXG5cXHRjLmcgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIGNvb3JkcyArIHZlYzIoLTAuODY2LCAtMC41KSAqIHRleGVsU2l6ZSAqIGZyaW5nZSAqIGJsdXIpLmc7XFxyXFxuXFx0Yy5iID0gdGV4dHVyZTJEKHREaWZmdXNlLCBjb29yZHMgKyB2ZWMyKDAuODY2LCAtMC41KSAqIHRleGVsU2l6ZSAqIGZyaW5nZSAqIGJsdXIpLmI7XFxyXFxuXFxyXFxuXFx0Ly8gQ2FsY3VsYXRlIHRoZSBsdW1pbmFuY2Ugb2YgdGhlIGNvbnN0cnVjdGVkIGNvbG91ci5cXHJcXG5cXHRmbG9hdCBsdW1pbmFuY2UgPSBkb3QoYy5yZ2IsIExVTV9DT0VGRik7XFxyXFxuXFx0ZmxvYXQgdGhyZXNob2xkID0gbWF4KChsdW1pbmFuY2UgLSBsdW1pbmFuY2VUaHJlc2hvbGQpICogbHVtaW5hbmNlR2FpbiwgMC4wKTtcXHJcXG5cXHJcXG5cXHRyZXR1cm4gYyArIG1peCh2ZWMzKDAuMCksIGMsIHRocmVzaG9sZCAqIGJsdXIpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCBsaW5lYXJpemUoZmxvYXQgZGVwdGgpIHtcXHJcXG5cXHJcXG5cXHRyZXR1cm4gLWNhbWVyYUZhciAqIGNhbWVyYU5lYXIgLyAoZGVwdGggKiAoY2FtZXJhRmFyIC0gY2FtZXJhTmVhcikgLSBjYW1lcmFGYXIpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCBnYXRoZXIoZmxvYXQgaSwgZmxvYXQgaiwgZmxvYXQgcmluZ1NhbXBsZXMsIGlub3V0IHZlYzMgY29sb3IsIGZsb2F0IHcsIGZsb2F0IGgsIGZsb2F0IGJsdXIpIHtcXHJcXG5cXHJcXG5cXHRjb25zdCBmbG9hdCBUV09fUEkgPSA2LjI4MzE4NTMxO1xcclxcblxcclxcblxcdGZsb2F0IHN0ZXAgPSBUV09fUEkgLyByaW5nU2FtcGxlcztcXHJcXG5cXHRmbG9hdCBwdyA9IGNvcyhqICogc3RlcCkgKiBpO1xcclxcblxcdGZsb2F0IHBoID0gc2luKGogKiBzdGVwKSAqIGk7XFxyXFxuXFxyXFxuXFx0I2lmZGVmIFBFTlRBR09OXFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgcCA9IHBlbnRhKHZlYzIocHcsIHBoKSk7XFxyXFxuXFxyXFxuXFx0I2Vsc2VcXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBwID0gMS4wO1xcclxcblxcclxcblxcdCNlbmRpZlxcclxcblxcclxcblxcdGNvbG9yICs9IHByb2Nlc3NUZXhlbCh2VXYgKyB2ZWMyKHB3ICogdywgcGggKiBoKSwgYmx1cikgKiBtaXgoMS4wLCBpIC8gUklOR1NfRkxPQVQsIGJpYXMpICogcDtcXHJcXG5cXHJcXG5cXHRyZXR1cm4gbWl4KDEuMCwgaSAvIFJJTkdTX0ZMT0FULCBiaWFzKSAqIHA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHQjaWZkZWYgVVNFX0xPR0RFUFRIQlVGXFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgZGVwdGggPSBsaW5lYXJpemUodGV4dHVyZTJEKHREZXB0aCwgdlV2KS54KTtcXHJcXG5cXHJcXG5cXHQjZWxzZVxcclxcblxcclxcblxcdFxcdGZsb2F0IGRlcHRoID0gbGluZWFyaXplKHJlYWREZXB0aCh0RGVwdGgsIHZVdikpO1xcclxcblxcclxcblxcdCNlbmRpZlxcclxcblxcclxcblxcdCNpZmRlZiBTSEFERVJfRk9DVVNcXHJcXG5cXHJcXG5cXHRcXHQjaWZkZWYgVVNFX0xPR0RFUFRIQlVGXFxyXFxuXFxyXFxuXFx0XFx0XFx0ZmxvYXQgZkRlcHRoID0gbGluZWFyaXplKHRleHR1cmUyRCh0RGVwdGgsIGZvY3VzQ29vcmRzKS54KTtcXHJcXG5cXHJcXG5cXHRcXHQjZWxzZVxcclxcblxcclxcblxcdFxcdFxcdGZsb2F0IGZEZXB0aCA9IGxpbmVhcml6ZShyZWFkRGVwdGgodERlcHRoLCBmb2N1c0Nvb3JkcykpO1xcclxcblxcclxcblxcdFxcdCNlbmRpZlxcclxcblxcclxcblxcdCNlbHNlXFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgZkRlcHRoID0gZm9jYWxEZXB0aDtcXHJcXG5cXHJcXG5cXHQjZW5kaWZcXHJcXG5cXHJcXG5cXHQjaWZkZWYgTUFOVUFMX0RPRlxcclxcblxcclxcblxcdFxcdGNvbnN0IGZsb2F0IG5Eb0ZTdGFydCA9IDEuMDsgXFxyXFxuXFx0XFx0Y29uc3QgZmxvYXQgbkRvRkRpc3QgPSAyLjA7XFxyXFxuXFx0XFx0Y29uc3QgZmxvYXQgZkRvRlN0YXJ0ID0gMS4wO1xcclxcblxcdFxcdGNvbnN0IGZsb2F0IGZEb0ZEaXN0ID0gMy4wO1xcclxcblxcclxcblxcdFxcdGZsb2F0IGZvY2FsUGxhbmUgPSBkZXB0aCAtIGZEZXB0aDtcXHJcXG5cXHRcXHRmbG9hdCBmYXJEb0YgPSAoZm9jYWxQbGFuZSAtIGZEb0ZTdGFydCkgLyBmRG9GRGlzdDtcXHJcXG5cXHRcXHRmbG9hdCBuZWFyRG9GID0gKC1mb2NhbFBsYW5lIC0gbkRvRlN0YXJ0KSAvIG5Eb0ZEaXN0O1xcclxcblxcclxcblxcdFxcdGZsb2F0IGJsdXIgPSAoZm9jYWxQbGFuZSA+IDAuMCkgPyBmYXJEb0YgOiBuZWFyRG9GO1xcclxcblxcclxcblxcdCNlbHNlXFxyXFxuXFxyXFxuXFx0XFx0Y29uc3QgZmxvYXQgQ0lSQ0xFX09GX0NPTkZVU0lPTiA9IDAuMDM7IC8vIDM1bW0gZmlsbSA9IDAuMDNtbSBDb0MuXFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgZm9jYWxQbGFuZU1NID0gZkRlcHRoICogMTAwMC4wO1xcclxcblxcdFxcdGZsb2F0IGRlcHRoTU0gPSBkZXB0aCAqIDEwMDAuMDtcXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBmb2NhbFBsYW5lID0gKGRlcHRoTU0gKiBmb2NhbExlbmd0aCkgLyAoZGVwdGhNTSAtIGZvY2FsTGVuZ3RoKTtcXHJcXG5cXHRcXHRmbG9hdCBmYXJEb0YgPSAoZm9jYWxQbGFuZU1NICogZm9jYWxMZW5ndGgpIC8gKGZvY2FsUGxhbmVNTSAtIGZvY2FsTGVuZ3RoKTtcXHJcXG5cXHRcXHRmbG9hdCBuZWFyRG9GID0gKGZvY2FsUGxhbmVNTSAtIGZvY2FsTGVuZ3RoKSAvIChmb2NhbFBsYW5lTU0gKiBmb2NhbFN0b3AgKiBDSVJDTEVfT0ZfQ09ORlVTSU9OKTtcXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBibHVyID0gYWJzKGZvY2FsUGxhbmUgLSBmYXJEb0YpICogbmVhckRvRjtcXHJcXG5cXHJcXG5cXHQjZW5kaWZcXHJcXG5cXHJcXG5cXHRibHVyID0gY2xhbXAoYmx1ciwgMC4wLCAxLjApO1xcclxcblxcclxcblxcdC8vIERpdGhlcmluZy5cXHJcXG5cXHR2ZWMyIG5vaXNlID0gcmFuZCh2VXYpICogZGl0aGVyU3RyZW5ndGggKiBibHVyO1xcclxcblxcclxcblxcdGZsb2F0IGJsdXJGYWN0b3JYID0gdGV4ZWxTaXplLnggKiBibHVyICogbWF4Qmx1ciArIG5vaXNlLng7XFxyXFxuXFx0ZmxvYXQgYmx1ckZhY3RvclkgPSB0ZXhlbFNpemUueSAqIGJsdXIgKiBtYXhCbHVyICsgbm9pc2UueTtcXHJcXG5cXHJcXG5cXHRjb25zdCBpbnQgTUFYX1JJTkdfU0FNUExFUyA9IFJJTkdTX0lOVCAqIFNBTVBMRVNfSU5UO1xcclxcblxcclxcblxcdC8vIENhbGN1bGF0aW9uIG9mIGZpbmFsIGNvbG9yLlxcclxcblxcdHZlYzQgY29sb3I7XFxyXFxuXFxyXFxuXFx0aWYoYmx1ciA8IDAuMDUpIHtcXHJcXG5cXHJcXG5cXHRcXHRjb2xvciA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KTtcXHJcXG5cXHJcXG5cXHR9IGVsc2Uge1xcclxcblxcclxcblxcdFxcdGNvbG9yID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpO1xcclxcblxcclxcblxcdFxcdGZsb2F0IHMgPSAxLjA7XFxyXFxuXFx0XFx0aW50IHJpbmdTYW1wbGVzO1xcclxcblxcclxcblxcdFxcdGZvcihpbnQgaSA9IDE7IGkgPD0gUklOR1NfSU5UOyArK2kpIHtcXHJcXG5cXHJcXG5cXHRcXHRcXHRyaW5nU2FtcGxlcyA9IGkgKiBTQU1QTEVTX0lOVDtcXHJcXG5cXHJcXG5cXHRcXHRcXHQvLyBDb25zdGFudCBsb29wLlxcclxcblxcdFxcdFxcdGZvcihpbnQgaiA9IDA7IGogPCBNQVhfUklOR19TQU1QTEVTOyArK2opIHtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQvLyBCcmVhayBlYXJsaWVyLlxcclxcblxcdFxcdFxcdFxcdGlmKGogPj0gcmluZ1NhbXBsZXMpIHsgYnJlYWs7IH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRzICs9IGdhdGhlcihmbG9hdChpKSwgZmxvYXQoaiksIGZsb2F0KHJpbmdTYW1wbGVzKSwgY29sb3IucmdiLCBibHVyRmFjdG9yWCwgYmx1ckZhY3RvclksIGJsdXIpO1xcclxcblxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Y29sb3IucmdiIC89IHM7IC8vIERpdmlkZSBieSBzYW1wbGUgY291bnQuXFxyXFxuXFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNpZmRlZiBTSE9XX0ZPQ1VTXFxyXFxuXFxyXFxuXFx0XFx0Y29sb3IucmdiID0gZGVidWdGb2N1cyhjb2xvci5yZ2IsIGJsdXIsIGRlcHRoKTtcXHJcXG5cXHJcXG5cXHQjZW5kaWZcXHJcXG5cXHJcXG5cXHQjaWZkZWYgVklHTkVUVEVcXHJcXG5cXHJcXG5cXHRcXHRjb2xvci5yZ2IgKj0gdmlnbmV0dGUoKTtcXHJcXG5cXHJcXG5cXHQjZW5kaWZcXHJcXG5cXHJcXG5cXHRnbF9GcmFnQ29sb3IgPSBjb2xvcjtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcbmNvbnN0IHZlcnRleCA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dlV2ID0gdXY7XFxyXFxuXFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcblxyXG4vKipcclxuICogRGVwdGggb2YgRmllbGQgc2hhZGVyIHZlcnNpb24gMi40LlxyXG4gKlxyXG4gKiBPcmlnaW5hbCBzaGFkZXIgY29kZSBieSBNYXJ0aW5zIFVwaXRpczpcclxuICogIGh0dHA6Ly9ibGVuZGVyYXJ0aXN0cy5vcmcvZm9ydW0vc2hvd3RocmVhZC5waHA/MjM3NDg4LUdMU0wtZGVwdGgtb2YtZmllbGQtd2l0aC1ib2tlaC12Mi00LSh1cGRhdGUpXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIEJva2VoMk1hdGVyaWFsIGV4dGVuZHMgU2hhZGVyTWF0ZXJpYWwge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGJva2VoMiBtYXRlcmlhbC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UGVyc3BlY3RpdmVDYW1lcmF9IFtjYW1lcmFdIC0gVGhlIG1haW4gY2FtZXJhLlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBBZGRpdGlvbmFsIG9wdGlvbnMuXHJcblx0ICogQHBhcmFtIHtWZWN0b3IyfSBbb3B0aW9ucy50ZXhlbFNpemVdIC0gVGhlIGFic29sdXRlIHNjcmVlbiB0ZXhlbCBzaXplLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuc2hvd0ZvY3VzPWZhbHNlXSAtIFdoZXRoZXIgdGhlIGZvY3VzIHBvaW50IHNob3VsZCBiZSBoaWdobGlnaHRlZC5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm1hbnVhbERvRj1mYWxzZV0gLSBFbmFibGVzIG1hbnVhbCBkZXB0aCBvZiBmaWVsZCBibHVyLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudmlnbmV0dGU9ZmFsc2VdIC0gRW5hYmxlcyBhIHZpZ25ldHRlIGVmZmVjdC5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnBlbnRhZ29uPWZhbHNlXSAtIEVuYWJsZSB0byB1c2UgYSBwZW50YWdvbmFsIHNoYXBlIHRvIHNjYWxlIGdhdGhlcmVkIHRleGVscy5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnNoYWRlckZvY3VzPXRydWVdIC0gRGlzYWJsZSBpZiB5b3UgY29tcHV0ZSB5b3VyIG93biBmb2NhbERlcHRoIChpbiBtZXRyZXMhKS5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm5vaXNlPXRydWVdIC0gRGlzYWJsZSBpZiB5b3UgZG9uJ3Qgd2FudCBub2lzZSBwYXR0ZXJucyBmb3IgZGl0aGVyaW5nLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjYW1lcmEgPSBudWxsLCBvcHRpb25zID0ge30pIHtcclxuXHJcblx0XHRpZihvcHRpb25zLnJpbmdzID09PSB1bmRlZmluZWQpIHsgb3B0aW9ucy5yaW5ncyA9IDM7IH1cclxuXHRcdGlmKG9wdGlvbnMuc2FtcGxlcyA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMuc2FtcGxlcyA9IDI7IH1cclxuXHRcdGlmKG9wdGlvbnMuc2hvd0ZvY3VzID09PSB1bmRlZmluZWQpIHsgb3B0aW9ucy5zaG93Rm9jdXMgPSBmYWxzZTsgfVxyXG5cdFx0aWYob3B0aW9ucy5zaG93Rm9jdXMgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLnNob3dGb2N1cyA9IGZhbHNlOyB9XHJcblx0XHRpZihvcHRpb25zLm1hbnVhbERvRiA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMubWFudWFsRG9GID0gZmFsc2U7IH1cclxuXHRcdGlmKG9wdGlvbnMudmlnbmV0dGUgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLnZpZ25ldHRlID0gZmFsc2U7IH1cclxuXHRcdGlmKG9wdGlvbnMucGVudGFnb24gPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLnBlbnRhZ29uID0gZmFsc2U7IH1cclxuXHRcdGlmKG9wdGlvbnMuc2hhZGVyRm9jdXMgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLnNoYWRlckZvY3VzID0gdHJ1ZTsgfVxyXG5cdFx0aWYob3B0aW9ucy5ub2lzZSA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMubm9pc2UgPSB0cnVlOyB9XHJcblxyXG5cdFx0c3VwZXIoe1xyXG5cclxuXHRcdFx0dHlwZTogXCJCb2tlaDJNYXRlcmlhbFwiLFxyXG5cclxuXHRcdFx0ZGVmaW5lczoge1xyXG5cclxuXHRcdFx0XHRSSU5HU19JTlQ6IG9wdGlvbnMucmluZ3MudG9GaXhlZCgwKSxcclxuXHRcdFx0XHRSSU5HU19GTE9BVDogb3B0aW9ucy5yaW5ncy50b0ZpeGVkKDEpLFxyXG5cdFx0XHRcdFNBTVBMRVNfSU5UOiBvcHRpb25zLnNhbXBsZXMudG9GaXhlZCgwKSxcclxuXHRcdFx0XHRTQU1QTEVTX0ZMT0FUOiBvcHRpb25zLnNhbXBsZXMudG9GaXhlZCgxKVxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHVuaWZvcm1zOiB7XHJcblxyXG5cdFx0XHRcdHREaWZmdXNlOiBuZXcgVW5pZm9ybShudWxsKSxcclxuXHRcdFx0XHR0RGVwdGg6IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cclxuXHRcdFx0XHR0ZXhlbFNpemU6IG5ldyBVbmlmb3JtKG5ldyBWZWN0b3IyKCkpLFxyXG5cdFx0XHRcdGhhbGZUZXhlbFNpemU6IG5ldyBVbmlmb3JtKG5ldyBWZWN0b3IyKCkpLFxyXG5cclxuXHRcdFx0XHRjYW1lcmFOZWFyOiBuZXcgVW5pZm9ybSgwLjEpLFxyXG5cdFx0XHRcdGNhbWVyYUZhcjogbmV3IFVuaWZvcm0oMjAwMCksXHJcblxyXG5cdFx0XHRcdGZvY2FsTGVuZ3RoOiBuZXcgVW5pZm9ybSgyNC4wKSxcclxuXHRcdFx0XHRmb2NhbFN0b3A6IG5ldyBVbmlmb3JtKDAuOSksXHJcblxyXG5cdFx0XHRcdG1heEJsdXI6IG5ldyBVbmlmb3JtKDEuMCksXHJcblx0XHRcdFx0bHVtaW5hbmNlVGhyZXNob2xkOiBuZXcgVW5pZm9ybSgwLjUpLFxyXG5cdFx0XHRcdGx1bWluYW5jZUdhaW46IG5ldyBVbmlmb3JtKDIuMCksXHJcblx0XHRcdFx0YmlhczogbmV3IFVuaWZvcm0oMC41KSxcclxuXHRcdFx0XHRmcmluZ2U6IG5ldyBVbmlmb3JtKDAuNyksXHJcblx0XHRcdFx0ZGl0aGVyU3RyZW5ndGg6IG5ldyBVbmlmb3JtKDAuMDAwMSksXHJcblxyXG5cdFx0XHRcdGZvY3VzQ29vcmRzOiBuZXcgVW5pZm9ybShuZXcgVmVjdG9yMigwLjUsIDAuNSkpLFxyXG5cdFx0XHRcdGZvY2FsRGVwdGg6IG5ldyBVbmlmb3JtKDEuMClcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogZnJhZ21lbnQsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogdmVydGV4LFxyXG5cclxuXHRcdFx0ZGVwdGhXcml0ZTogZmFsc2UsXHJcblx0XHRcdGRlcHRoVGVzdDogZmFsc2VcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZihvcHRpb25zLnNob3dGb2N1cykgeyB0aGlzLmRlZmluZXMuU0hPV19GT0NVUyA9IFwiMVwiOyB9XHJcblx0XHRpZihvcHRpb25zLm1hbnVhbERvRikgeyB0aGlzLmRlZmluZXMuTUFOVUFMX0RPRiA9IFwiMVwiOyB9XHJcblx0XHRpZihvcHRpb25zLnZpZ25ldHRlKSB7IHRoaXMuZGVmaW5lcy5WSUdORVRURSA9IFwiMVwiOyB9XHJcblx0XHRpZihvcHRpb25zLnBlbnRhZ29uKSB7IHRoaXMuZGVmaW5lcy5QRU5UQUdPTiA9IFwiMVwiOyB9XHJcblx0XHRpZihvcHRpb25zLnNoYWRlckZvY3VzKSB7IHRoaXMuZGVmaW5lcy5TSEFERVJfRk9DVVMgPSBcIjFcIjsgfVxyXG5cdFx0aWYob3B0aW9ucy5ub2lzZSkgeyB0aGlzLmRlZmluZXMuTk9JU0UgPSBcIjFcIjsgfVxyXG5cclxuXHRcdGlmKG9wdGlvbnMudGV4ZWxTaXplICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zZXRUZXhlbFNpemUob3B0aW9ucy50ZXhlbFNpemUueCwgb3B0aW9ucy50ZXhlbFNpemUueSk7IH1cclxuXHRcdGlmKGNhbWVyYSAhPT0gbnVsbCkgeyB0aGlzLmFkb3B0Q2FtZXJhU2V0dGluZ3MoY2FtZXJhKTsgfVxyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIHRleGVsIHNpemUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0geCAtIFRoZSB0ZXhlbCB3aWR0aC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0geSAtIFRoZSB0ZXhlbCBoZWlnaHQuXHJcblx0ICovXHJcblxyXG5cdHNldFRleGVsU2l6ZSh4LCB5KSB7XHJcblxyXG5cdFx0dGhpcy51bmlmb3Jtcy50ZXhlbFNpemUudmFsdWUuc2V0KHgsIHkpO1xyXG5cdFx0dGhpcy51bmlmb3Jtcy5oYWxmVGV4ZWxTaXplLnZhbHVlLnNldCh4LCB5KS5tdWx0aXBseVNjYWxhcigwLjUpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkb3B0cyB0aGUgbmVhciBhbmQgZmFyIHBsYW5lIGFuZCB0aGUgZm9jYWwgbGVuZ3RoIG9mIHRoZSBnaXZlbiBjYW1lcmEuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1BlcnNwZWN0aXZlQ2FtZXJhfSBjYW1lcmEgLSBUaGUgbWFpbiBjYW1lcmEuXHJcblx0ICovXHJcblxyXG5cdGFkb3B0Q2FtZXJhU2V0dGluZ3MoY2FtZXJhKSB7XHJcblxyXG5cdFx0dGhpcy51bmlmb3Jtcy5jYW1lcmFOZWFyLnZhbHVlID0gY2FtZXJhLm5lYXI7XHJcblx0XHR0aGlzLnVuaWZvcm1zLmNhbWVyYUZhci52YWx1ZSA9IGNhbWVyYS5mYXI7XHJcblx0XHR0aGlzLnVuaWZvcm1zLmZvY2FsTGVuZ3RoLnZhbHVlID0gY2FtZXJhLmdldEZvY2FsTGVuZ3RoKCk7IC8vIHVuaXQ6IG1tLlxyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlck1hdGVyaWFsLCBVbmlmb3JtIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBmcmFnbWVudCA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTE7XFxyXFxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTI7XFxyXFxuXFxyXFxudW5pZm9ybSBmbG9hdCBvcGFjaXR5MTtcXHJcXG51bmlmb3JtIGZsb2F0IG9wYWNpdHkyO1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZlYzQgdGV4ZWwxID0gb3BhY2l0eTEgKiB0ZXh0dXJlMkQodGV4dHVyZTEsIHZVdik7XFxyXFxuXFx0dmVjNCB0ZXhlbDIgPSBvcGFjaXR5MiAqIHRleHR1cmUyRCh0ZXh0dXJlMiwgdlV2KTtcXHJcXG5cXHJcXG5cXHQjaWZkZWYgU0NSRUVOX01PREVcXHJcXG5cXHJcXG5cXHRcXHR2ZWMzIGludlRleGVsMSA9IHZlYzMoMS4wKSAtIHRleGVsMS5yZ2I7XFxyXFxuXFx0XFx0dmVjMyBpbnZUZXhlbDIgPSB2ZWMzKDEuMCkgLSB0ZXhlbDIucmdiO1xcclxcblxcclxcblxcdFxcdHZlYzQgY29sb3IgPSB2ZWM0KFxcclxcblxcdFxcdFxcdHZlYzMoMS4wKSAtIGludlRleGVsMSAqIGludlRleGVsMixcXHJcXG5cXHRcXHRcXHR0ZXhlbDEuYSArIHRleGVsMi5hXFxyXFxuXFx0XFx0KTtcXHJcXG5cXHJcXG5cXHQjZWxzZVxcclxcblxcclxcblxcdFxcdHZlYzQgY29sb3IgPSB0ZXhlbDEgKyB0ZXhlbDI7XFxyXFxuXFxyXFxuXFx0I2VuZGlmXFxyXFxuXFxyXFxuXFx0Z2xfRnJhZ0NvbG9yID0gY29sb3I7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5jb25zdCB2ZXJ0ZXggPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZVdiA9IHV2O1xcclxcblxcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5cclxuLyoqXHJcbiAqIEEgbWF0ZXJpYWwgZm9yIGNvbWJpbmluZyB0d28gdGV4dHVyZXMuXHJcbiAqXHJcbiAqIFRoaXMgbWF0ZXJpYWwgc3VwcG9ydHMgdGhlIHR3byBibGVuZCBtb2RlcyBBZGQgYW5kIFNjcmVlbi5cclxuICpcclxuICogSW4gU2NyZWVuIG1vZGUsIHRoZSB0d28gdGV4dHVyZXMgYXJlIGVmZmVjdGl2ZWx5IHByb2plY3RlZCBvbiBhIHdoaXRlIHNjcmVlblxyXG4gKiBzaW11bHRhbmVvdXNseS4gSW4gQWRkIG1vZGUsIHRoZSB0ZXh0dXJlcyBhcmUgc2ltcGx5IGFkZGVkIHRvZ2V0aGVyIHdoaWNoXHJcbiAqIG9mdGVuIHByb2R1Y2VzIHVuZGVzaXJlZCwgd2FzaGVkIG91dCByZXN1bHRzLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21iaW5lTWF0ZXJpYWwgZXh0ZW5kcyBTaGFkZXJNYXRlcmlhbCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgY29tYmluZSBtYXRlcmlhbC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NjcmVlbk1vZGU9ZmFsc2VdIC0gV2hldGhlciB0aGUgc2NyZWVuIGJsZW5kIG1vZGUgc2hvdWxkIGJlIHVzZWQuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjcmVlbk1vZGUgPSBmYWxzZSkge1xyXG5cclxuXHRcdHN1cGVyKHtcclxuXHJcblx0XHRcdHR5cGU6IFwiQ29tYmluZU1hdGVyaWFsXCIsXHJcblxyXG5cdFx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XHR0ZXh0dXJlMTogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0dGV4dHVyZTI6IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cclxuXHRcdFx0XHRvcGFjaXR5MTogbmV3IFVuaWZvcm0oMS4wKSxcclxuXHRcdFx0XHRvcGFjaXR5MjogbmV3IFVuaWZvcm0oMS4wKVxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudCxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiB2ZXJ0ZXgsXHJcblxyXG5cdFx0XHRkZXB0aFdyaXRlOiBmYWxzZSxcclxuXHRcdFx0ZGVwdGhUZXN0OiBmYWxzZVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmKHNjcmVlbk1vZGUpIHsgdGhpcy5kZWZpbmVzLlNDUkVFTl9NT0RFID0gXCIxXCI7IH1cclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgVW5pZm9ybSwgVmVjdG9yMiB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgZnJhZ21lbnQgPSBcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXYwO1xcclxcbnZhcnlpbmcgdmVjMiB2VXYxO1xcclxcbnZhcnlpbmcgdmVjMiB2VXYyO1xcclxcbnZhcnlpbmcgdmVjMiB2VXYzO1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHQvLyBTYW1wbGUgdG9wIGxlZnQgdGV4ZWwuXFxyXFxuXFx0dmVjNCBzdW0gPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdjApO1xcclxcblxcclxcblxcdC8vIFNhbXBsZSB0b3AgcmlnaHQgdGV4ZWwuXFxyXFxuXFx0c3VtICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2MSk7XFxyXFxuXFxyXFxuXFx0Ly8gU2FtcGxlIGJvdHRvbSByaWdodCB0ZXhlbC5cXHJcXG5cXHRzdW0gKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYyKTtcXHJcXG5cXHJcXG5cXHQvLyBTYW1wbGUgYm90dG9tIGxlZnQgdGV4ZWwuXFxyXFxuXFx0c3VtICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2Myk7XFxyXFxuXFxyXFxuXFx0Ly8gQ29tcHV0ZSB0aGUgYXZlcmFnZS5cXHJcXG5cXHRnbF9GcmFnQ29sb3IgPSBzdW0gKiAwLjI1O1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuY29uc3QgdmVydGV4ID0gXCJ1bmlmb3JtIHZlYzIgdGV4ZWxTaXplO1xcclxcbnVuaWZvcm0gdmVjMiBoYWxmVGV4ZWxTaXplO1xcclxcbnVuaWZvcm0gZmxvYXQga2VybmVsO1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXYwO1xcclxcbnZhcnlpbmcgdmVjMiB2VXYxO1xcclxcbnZhcnlpbmcgdmVjMiB2VXYyO1xcclxcbnZhcnlpbmcgdmVjMiB2VXYzO1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2ZWMyIGRVdiA9ICh0ZXhlbFNpemUgKiB2ZWMyKGtlcm5lbCkpICsgaGFsZlRleGVsU2l6ZTtcXHJcXG5cXHJcXG5cXHR2VXYwID0gdmVjMih1di54IC0gZFV2LngsIHV2LnkgKyBkVXYueSk7XFxyXFxuXFx0dlV2MSA9IHZlYzIodXYueCArIGRVdi54LCB1di55ICsgZFV2LnkpO1xcclxcblxcdHZVdjIgPSB2ZWMyKHV2LnggKyBkVXYueCwgdXYueSAtIGRVdi55KTtcXHJcXG5cXHR2VXYzID0gdmVjMih1di54IC0gZFV2LngsIHV2LnkgLSBkVXYueSk7XFxyXFxuXFxyXFxuXFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcblxyXG4vKipcclxuICogQW4gb3B0aW1pc2VkIGNvbnZvbHV0aW9uIHNoYWRlciBtYXRlcmlhbC5cclxuICpcclxuICogQmFzZWQgb24gdGhlIEdEQzIwMDMgUHJlc2VudGF0aW9uIGJ5IE1hc2FraSBLYXdhc2UsIEJ1bmthc2hhIEdhbWVzOlxyXG4gKiAgRnJhbWUgQnVmZmVyIFBvc3Rwcm9jZXNzaW5nIEVmZmVjdHMgaW4gRE9VQkxFLVMuVC5FLkEuTCAoV3JlY2tsZXNzKVxyXG4gKiBhbmQgYW4gYXJ0aWNsZSBieSBGaWxpcCBTdHJ1Z2FyLCBJbnRlbDpcclxuICogIEFuIGludmVzdGlnYXRpb24gb2YgZmFzdCByZWFsLXRpbWUgR1BVLWJhc2VkIGltYWdlIGJsdXIgYWxnb3JpdGhtc1xyXG4gKlxyXG4gKiBGdXJ0aGVyIG1vZGlmaWVkIGFjY29yZGluZyB0byBBcHBsZSdzXHJcbiAqIFtCZXN0IFByYWN0aWNlcyBmb3IgU2hhZGVyc10oaHR0cHM6Ly9nb28uZ2wvbG1Sb001KS5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udm9sdXRpb25NYXRlcmlhbCBleHRlbmRzIFNoYWRlck1hdGVyaWFsIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBjb252b2x1dGlvbiBtYXRlcmlhbC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7VmVjdG9yMn0gW3RleGVsU2l6ZV0gLSBUaGUgYWJzb2x1dGUgc2NyZWVuIHRleGVsIHNpemUuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKHRleGVsU2l6ZSA9IG5ldyBWZWN0b3IyKCkpIHtcclxuXHJcblx0XHRzdXBlcih7XHJcblxyXG5cdFx0XHR0eXBlOiBcIkNvbnZvbHV0aW9uTWF0ZXJpYWxcIixcclxuXHJcblx0XHRcdHVuaWZvcm1zOiB7XHJcblxyXG5cdFx0XHRcdHREaWZmdXNlOiBuZXcgVW5pZm9ybShudWxsKSxcclxuXHRcdFx0XHR0ZXhlbFNpemU6IG5ldyBVbmlmb3JtKG5ldyBWZWN0b3IyKCkpLFxyXG5cdFx0XHRcdGhhbGZUZXhlbFNpemU6IG5ldyBVbmlmb3JtKG5ldyBWZWN0b3IyKCkpLFxyXG5cdFx0XHRcdGtlcm5lbDogbmV3IFVuaWZvcm0oMC4wKVxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudCxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiB2ZXJ0ZXgsXHJcblxyXG5cdFx0XHRkZXB0aFdyaXRlOiBmYWxzZSxcclxuXHRcdFx0ZGVwdGhUZXN0OiBmYWxzZVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuc2V0VGV4ZWxTaXplKHRleGVsU2l6ZS54LCB0ZXhlbFNpemUueSk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgY3VycmVudCBrZXJuZWwgc2l6ZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7S2VybmVsU2l6ZX1cclxuXHRcdCAqIEBkZWZhdWx0IEtlcm5lbFNpemUuTEFSR0VcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMua2VybmVsU2l6ZSA9IEtlcm5lbFNpemUuTEFSR0U7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUga2VybmVsLlxyXG5cdCAqXHJcblx0ICogQHJldHVybiB7RmxvYXQzMkFycmF5fSBUaGUga2VybmVsLlxyXG5cdCAqL1xyXG5cclxuXHRnZXRLZXJuZWwoKSB7IHJldHVybiBrZXJuZWxQcmVzZXRzW3RoaXMua2VybmVsU2l6ZV07IH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgdGV4ZWwgc2l6ZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB4IC0gVGhlIHRleGVsIHdpZHRoLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB5IC0gVGhlIHRleGVsIGhlaWdodC5cclxuXHQgKi9cclxuXHJcblx0c2V0VGV4ZWxTaXplKHgsIHkpIHtcclxuXHJcblx0XHR0aGlzLnVuaWZvcm1zLnRleGVsU2l6ZS52YWx1ZS5zZXQoeCwgeSk7XHJcblx0XHR0aGlzLnVuaWZvcm1zLmhhbGZUZXhlbFNpemUudmFsdWUuc2V0KHgsIHkpLm11bHRpcGx5U2NhbGFyKDAuNSk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgS2F3YXNlIGJsdXIga2VybmVsIHByZXNldHMuXHJcbiAqXHJcbiAqIEB0eXBlIHtGbG9hdDMyQXJyYXlbXX1cclxuICogQHByaXZhdGVcclxuICovXHJcblxyXG5jb25zdCBrZXJuZWxQcmVzZXRzID0gW1xyXG5cdG5ldyBGbG9hdDMyQXJyYXkoWzAuMCwgMC4wXSksXHJcblx0bmV3IEZsb2F0MzJBcnJheShbMC4wLCAxLjAsIDEuMF0pLFxyXG5cdG5ldyBGbG9hdDMyQXJyYXkoWzAuMCwgMS4wLCAxLjAsIDIuMF0pLFxyXG5cdG5ldyBGbG9hdDMyQXJyYXkoWzAuMCwgMS4wLCAyLjAsIDIuMCwgMy4wXSksXHJcblx0bmV3IEZsb2F0MzJBcnJheShbMC4wLCAxLjAsIDIuMCwgMy4wLCA0LjAsIDQuMCwgNS4wXSksXHJcblx0bmV3IEZsb2F0MzJBcnJheShbMC4wLCAxLjAsIDIuMCwgMy4wLCA0LjAsIDUuMCwgNy4wLCA4LjAsIDkuMCwgMTAuMF0pXHJcbl07XHJcblxyXG4vKipcclxuICogQSBrZXJuZWwgc2l6ZSBlbnVtZXJhdGlvbi5cclxuICpcclxuICogQHR5cGUge09iamVjdH1cclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFZFUllfU01BTEwgLSBBIHZlcnkgc21hbGwga2VybmVsIHRoYXQgbWF0Y2hlcyBhIDd4NyBHYXVzcyBibHVyIGtlcm5lbC5cclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFNNQUxMIC0gQSBzbWFsbCBrZXJuZWwgdGhhdCBtYXRjaGVzIGEgMTV4MTUgR2F1c3MgYmx1ciBrZXJuZWwuXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBNRURJVU0gLSBBIG1lZGl1bSBzaXplZCBrZXJuZWwgdGhhdCBtYXRjaGVzIGEgMjN4MjMgR2F1c3MgYmx1ciBrZXJuZWwuXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBMQVJHRSAtIEEgbGFyZ2Uga2VybmVsIHRoYXQgbWF0Y2hlcyBhIDM1eDM1IEdhdXNzIGJsdXIga2VybmVsLlxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gVkVSWV9MQVJHRSAtIEEgdmVyeSBsYXJnZSBrZXJuZWwgdGhhdCBtYXRjaGVzIGEgNjN4NjMgR2F1c3MgYmx1ciBrZXJuZWwuXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBIVUdFIC0gQSBodWdlIGtlcm5lbCB0aGF0IG1hdGNoZXMgYSAxMjd4MTI3IEdhdXNzIGJsdXIga2VybmVsLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBLZXJuZWxTaXplID0ge1xyXG5cclxuXHRWRVJZX1NNQUxMOiAwLFxyXG5cdFNNQUxMOiAxLFxyXG5cdE1FRElVTTogMixcclxuXHRMQVJHRTogMyxcclxuXHRWRVJZX0xBUkdFOiA0LFxyXG5cdEhVR0U6IDVcclxuXHJcbn07XHJcbiIsImltcG9ydCB7IFNoYWRlck1hdGVyaWFsLCBVbmlmb3JtIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBmcmFnbWVudCA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XFxyXFxudW5pZm9ybSBmbG9hdCBvcGFjaXR5O1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZlYzQgdGV4ZWwgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdik7XFxyXFxuXFx0Z2xfRnJhZ0NvbG9yID0gb3BhY2l0eSAqIHRleGVsO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuY29uc3QgdmVydGV4ID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2VXYgPSB1djtcXHJcXG5cXHRnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuXHJcbi8qKlxyXG4gKiBBIHNpbXBsZSBjb3B5IHNoYWRlciBtYXRlcmlhbC5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgQ29weU1hdGVyaWFsIGV4dGVuZHMgU2hhZGVyTWF0ZXJpYWwge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGNvcHkgbWF0ZXJpYWwuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHN1cGVyKHtcclxuXHJcblx0XHRcdHR5cGU6IFwiQ29weU1hdGVyaWFsXCIsXHJcblxyXG5cdFx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XHR0RGlmZnVzZTogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0b3BhY2l0eTogbmV3IFVuaWZvcm0oMS4wKVxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudCxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiB2ZXJ0ZXgsXHJcblxyXG5cdFx0XHRkZXB0aFdyaXRlOiBmYWxzZSxcclxuXHRcdFx0ZGVwdGhUZXN0OiBmYWxzZVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlck1hdGVyaWFsLCBVbmlmb3JtIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBmcmFnbWVudCA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdERlcHRoO1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxuI2lmbmRlZiBVU0VfTE9HREVQVEhCVUZcXHJcXG5cXHJcXG5cXHQjaW5jbHVkZSA8cGFja2luZz5cXHJcXG5cXHJcXG5cXHR1bmlmb3JtIGZsb2F0IGNhbWVyYU5lYXI7XFxyXFxuXFx0dW5pZm9ybSBmbG9hdCBjYW1lcmFGYXI7XFxyXFxuXFxyXFxuXFx0ZmxvYXQgcmVhZERlcHRoKHNhbXBsZXIyRCBkZXB0aFNhbXBsZXIsIHZlYzIgY29vcmQpIHtcXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBmcmFnQ29vcmRaID0gdGV4dHVyZTJEKGRlcHRoU2FtcGxlciwgY29vcmQpLng7XFxyXFxuXFx0XFx0ZmxvYXQgdmlld1ogPSBwZXJzcGVjdGl2ZURlcHRoVG9WaWV3WihmcmFnQ29vcmRaLCBjYW1lcmFOZWFyLCBjYW1lcmFGYXIpO1xcclxcblxcclxcblxcdFxcdHJldHVybiB2aWV3WlRvT3J0aG9ncmFwaGljRGVwdGgodmlld1osIGNhbWVyYU5lYXIsIGNhbWVyYUZhcik7XFxyXFxuXFxyXFxuXFx0fVxcclxcblxcclxcbiNlbmRpZlxcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHQjaWZkZWYgVVNFX0xPR0RFUFRIQlVGXFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgZGVwdGggPSB0ZXh0dXJlMkQodERlcHRoLCB2VXYpLng7XFxyXFxuXFxyXFxuXFx0I2Vsc2VcXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBkZXB0aCA9IHJlYWREZXB0aCh0RGVwdGgsIHZVdik7XFxyXFxuXFxyXFxuXFx0I2VuZGlmXFxyXFxuXFxyXFxuXFx0Z2xfRnJhZ0NvbG9yID0gdmVjNChkZXB0aCwgZGVwdGgsIGRlcHRoLCAxLjApO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuY29uc3QgdmVydGV4ID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2VXYgPSB1djtcXHJcXG5cXHRnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuXHJcbi8qKlxyXG4gKiBBIGRlcHRoIHNoYWRlciBtYXRlcmlhbC5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgRGVwdGhNYXRlcmlhbCBleHRlbmRzIFNoYWRlck1hdGVyaWFsIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBkZXB0aCBtYXRlcmlhbC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UGVyc3BlY3RpdmVDYW1lcmF9IFtjYW1lcmFdIC0gQSBjYW1lcmEuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbWVyYSA9IG51bGwpIHtcclxuXHJcblx0XHRzdXBlcih7XHJcblxyXG5cdFx0XHR0eXBlOiBcIkRlcHRoTWF0ZXJpYWxcIixcclxuXHJcblx0XHRcdHVuaWZvcm1zOiB7XHJcblxyXG5cdFx0XHRcdGNhbWVyYU5lYXI6IG5ldyBVbmlmb3JtKDAuMSksXHJcblx0XHRcdFx0Y2FtZXJhRmFyOiBuZXcgVW5pZm9ybSgyMDAwKSxcclxuXHJcblx0XHRcdFx0dERlcHRoOiBuZXcgVW5pZm9ybShudWxsKVxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudCxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiB2ZXJ0ZXgsXHJcblxyXG5cdFx0XHRkZXB0aFdyaXRlOiBmYWxzZSxcclxuXHRcdFx0ZGVwdGhUZXN0OiBmYWxzZVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmKGNhbWVyYSAhPT0gbnVsbCkgeyB0aGlzLmFkb3B0Q2FtZXJhU2V0dGluZ3MoY2FtZXJhKTsgfVxyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkb3B0cyB0aGUgc2V0dGluZ3Mgb2YgdGhlIGdpdmVuIGNhbWVyYS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UGVyc3BlY3RpdmVDYW1lcmF9IGNhbWVyYSAtIEEgY2FtZXJhLlxyXG5cdCAqL1xyXG5cclxuXHRhZG9wdENhbWVyYVNldHRpbmdzKGNhbWVyYSkge1xyXG5cclxuXHRcdHRoaXMudW5pZm9ybXMuY2FtZXJhTmVhci52YWx1ZSA9IGNhbWVyYS5uZWFyO1xyXG5cdFx0dGhpcy51bmlmb3Jtcy5jYW1lcmFGYXIudmFsdWUgPSBjYW1lcmEuZmFyO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlck1hdGVyaWFsLCBVbmlmb3JtLCBWZWN0b3I0IH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBmcmFnbWVudCA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XFxyXFxuXFxyXFxudW5pZm9ybSBmbG9hdCBhbmdsZTtcXHJcXG51bmlmb3JtIGZsb2F0IHNjYWxlO1xcclxcbnVuaWZvcm0gZmxvYXQgaW50ZW5zaXR5O1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxudmFyeWluZyB2ZWMyIHZVdlBhdHRlcm47XFxyXFxuXFxyXFxuZmxvYXQgcGF0dGVybigpIHtcXHJcXG5cXHJcXG5cXHRmbG9hdCBzID0gc2luKGFuZ2xlKTtcXHJcXG5cXHRmbG9hdCBjID0gY29zKGFuZ2xlKTtcXHJcXG5cXHJcXG5cXHR2ZWMyIHBvaW50ID0gdmVjMihjICogdlV2UGF0dGVybi54IC0gcyAqIHZVdlBhdHRlcm4ueSwgcyAqIHZVdlBhdHRlcm4ueCArIGMgKiB2VXZQYXR0ZXJuLnkpICogc2NhbGU7XFxyXFxuXFxyXFxuXFx0cmV0dXJuIChzaW4ocG9pbnQueCkgKiBzaW4ocG9pbnQueSkpICogNC4wO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dmVjNCB0ZXhlbCA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KTtcXHJcXG5cXHR2ZWMzIGNvbG9yID0gdGV4ZWwucmdiO1xcclxcblxcclxcblxcdCNpZmRlZiBBVkVSQUdFXFxyXFxuXFxyXFxuXFx0XFx0Y29sb3IgPSB2ZWMzKChjb2xvci5yICsgY29sb3IuZyArIGNvbG9yLmIpIC8gMy4wKTtcXHJcXG5cXHJcXG5cXHQjZW5kaWZcXHJcXG5cXHJcXG5cXHRjb2xvciA9IHZlYzMoY29sb3IgKiAxMC4wIC0gNS4wICsgcGF0dGVybigpKTtcXHJcXG5cXHRjb2xvciA9IHRleGVsLnJnYiArIChjb2xvciAtIHRleGVsLnJnYikgKiBpbnRlbnNpdHk7XFxyXFxuXFxyXFxuXFx0Z2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvciwgdGV4ZWwuYSk7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5jb25zdCB2ZXJ0ZXggPSBcInVuaWZvcm0gdmVjNCBvZmZzZXRSZXBlYXQ7XFxyXFxuXFxyXFxudmFyeWluZyB2ZWMyIHZVdjtcXHJcXG52YXJ5aW5nIHZlYzIgdlV2UGF0dGVybjtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dlV2ID0gdXY7XFxyXFxuXFx0dlV2UGF0dGVybiA9IHV2ICogb2Zmc2V0UmVwZWF0Lnp3ICsgb2Zmc2V0UmVwZWF0Lnh5O1xcclxcblxcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5cclxuLyoqXHJcbiAqIEEgZG90IHNjcmVlbiBzaGFkZXIgbWF0ZXJpYWwuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIERvdFNjcmVlbk1hdGVyaWFsIGV4dGVuZHMgU2hhZGVyTWF0ZXJpYWwge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGRvdCBzY3JlZW4gbWF0ZXJpYWwuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFthdmVyYWdlPWZhbHNlXSAtIFdoZXRoZXIgdGhlIHNoYWRlciBzaG91bGQgb3V0cHV0IHRoZSBjb2xvdXIgYXZlcmFnZSAoYmxhY2sgYW5kIHdoaXRlKS5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3IoYXZlcmFnZSA9IGZhbHNlKSB7XHJcblxyXG5cdFx0c3VwZXIoe1xyXG5cclxuXHRcdFx0dHlwZTogXCJEb3RTY3JlZW5NYXRlcmlhbFwiLFxyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFx0dERpZmZ1c2U6IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cclxuXHRcdFx0XHRhbmdsZTogbmV3IFVuaWZvcm0oMS41NyksXHJcblx0XHRcdFx0c2NhbGU6IG5ldyBVbmlmb3JtKDEuMCksXHJcblx0XHRcdFx0aW50ZW5zaXR5OiBuZXcgVW5pZm9ybSgxLjApLFxyXG5cclxuXHRcdFx0XHRvZmZzZXRSZXBlYXQ6IG5ldyBVbmlmb3JtKG5ldyBWZWN0b3I0KDAuNSwgMC41LCAxLjAsIDEuMCkpXHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50LFxyXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHZlcnRleCxcclxuXHJcblx0XHRcdGRlcHRoV3JpdGU6IGZhbHNlLFxyXG5cdFx0XHRkZXB0aFRlc3Q6IGZhbHNlXHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYoYXZlcmFnZSkgeyB0aGlzLmRlZmluZXMuQVZFUkFHRSA9IFwiMVwiOyB9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyTWF0ZXJpYWwsIFVuaWZvcm0gfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IGZyYWdtZW50ID0gXCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcXHJcXG51bmlmb3JtIGZsb2F0IHRpbWU7XFxyXFxuXFxyXFxudmFyeWluZyB2ZWMyIHZVdjtcXHJcXG5cXHJcXG4jaWZkZWYgTk9JU0VcXHJcXG5cXHJcXG5cXHR1bmlmb3JtIGZsb2F0IG5vaXNlSW50ZW5zaXR5O1xcclxcblxcclxcbiNlbmRpZlxcclxcblxcclxcbiNpZmRlZiBTQ0FOTElORVNcXHJcXG5cXHJcXG5cXHR1bmlmb3JtIGZsb2F0IHNjYW5saW5lSW50ZW5zaXR5O1xcclxcblxcdHVuaWZvcm0gZmxvYXQgc2NhbmxpbmVDb3VudDtcXHJcXG5cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG4jaWZkZWYgR1JFWVNDQUxFXFxyXFxuXFxyXFxuXFx0dW5pZm9ybSBmbG9hdCBncmV5c2NhbGVJbnRlbnNpdHk7XFxyXFxuXFxyXFxuXFx0Y29uc3QgdmVjMyBMVU1fQ09FRkYgPSB2ZWMzKDAuMjk5LCAwLjU4NywgMC4xMTQpO1xcclxcblxcclxcbiNlbGlmIGRlZmluZWQoU0VQSUEpXFxyXFxuXFxyXFxuXFx0dW5pZm9ybSBmbG9hdCBzZXBpYUludGVuc2l0eTtcXHJcXG5cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG4jaWZkZWYgVklHTkVUVEVcXHJcXG5cXHJcXG5cXHR1bmlmb3JtIGZsb2F0IHZpZ25ldHRlT2Zmc2V0O1xcclxcblxcdHVuaWZvcm0gZmxvYXQgdmlnbmV0dGVEYXJrbmVzcztcXHJcXG5cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dmVjNCB0ZXhlbCA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KTtcXHJcXG5cXHR2ZWMzIGNvbG9yID0gdGV4ZWwucmdiO1xcclxcblxcclxcblxcdCNpZmRlZiBTQ1JFRU5fTU9ERVxcclxcblxcclxcblxcdFxcdHZlYzMgaW52Q29sb3I7XFxyXFxuXFxyXFxuXFx0I2VuZGlmXFxyXFxuXFxyXFxuXFx0I2lmZGVmIE5PSVNFXFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgeCA9IHZVdi54ICogdlV2LnkgKiB0aW1lICogMTAwMC4wO1xcclxcblxcdFxcdHggPSBtb2QoeCwgMTMuMCkgKiBtb2QoeCwgMTIzLjApO1xcclxcblxcdFxcdHggPSBtb2QoeCwgMC4wMSk7XFxyXFxuXFxyXFxuXFx0XFx0dmVjMyBub2lzZSA9IHRleGVsLnJnYiAqIGNsYW1wKDAuMSArIHggKiAxMDAuMCwgMC4wLCAxLjApICogbm9pc2VJbnRlbnNpdHk7XFxyXFxuXFxyXFxuXFx0XFx0I2lmZGVmIFNDUkVFTl9NT0RFXFxyXFxuXFxyXFxuXFx0XFx0XFx0aW52Q29sb3IgPSB2ZWMzKDEuMCkgLSBjb2xvcjtcXHJcXG5cXHRcXHRcXHR2ZWMzIGludk5vaXNlID0gdmVjMygxLjApIC0gbm9pc2U7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Y29sb3IgPSB2ZWMzKDEuMCkgLSBpbnZDb2xvciAqIGludk5vaXNlO1xcclxcblxcclxcblxcdFxcdCNlbHNlXFxyXFxuXFxyXFxuXFx0XFx0XFx0Y29sb3IgKz0gbm9pc2U7XFxyXFxuXFxyXFxuXFx0XFx0I2VuZGlmXFxyXFxuXFxyXFxuXFx0I2VuZGlmXFxyXFxuXFxyXFxuXFx0I2lmZGVmIFNDQU5MSU5FU1xcclxcblxcclxcblxcdFxcdHZlYzIgc2wgPSB2ZWMyKHNpbih2VXYueSAqIHNjYW5saW5lQ291bnQpLCBjb3ModlV2LnkgKiBzY2FubGluZUNvdW50KSk7XFxyXFxuXFx0XFx0dmVjMyBzY2FubGluZXMgPSB0ZXhlbC5yZ2IgKiB2ZWMzKHNsLngsIHNsLnksIHNsLngpICogc2NhbmxpbmVJbnRlbnNpdHk7XFxyXFxuXFxyXFxuXFx0XFx0I2lmZGVmIFNDUkVFTl9NT0RFXFxyXFxuXFxyXFxuXFx0XFx0XFx0aW52Q29sb3IgPSB2ZWMzKDEuMCkgLSBjb2xvcjtcXHJcXG5cXHRcXHRcXHR2ZWMzIGludlNjYW5saW5lcyA9IHZlYzMoMS4wKSAtIHNjYW5saW5lcztcXHJcXG5cXHJcXG5cXHRcXHRcXHRjb2xvciA9IHZlYzMoMS4wKSAtIGludkNvbG9yICogaW52U2NhbmxpbmVzO1xcclxcblxcclxcblxcdFxcdCNlbHNlXFxyXFxuXFxyXFxuXFx0XFx0XFx0Y29sb3IgKz0gc2NhbmxpbmVzO1xcclxcblxcclxcblxcdFxcdCNlbmRpZlxcclxcblxcclxcblxcdCNlbmRpZlxcclxcblxcclxcblxcdCNpZmRlZiBHUkVZU0NBTEVcXHJcXG5cXHJcXG5cXHRcXHRjb2xvciA9IG1peChjb2xvciwgdmVjMyhkb3QoY29sb3IsIExVTV9DT0VGRikpLCBncmV5c2NhbGVJbnRlbnNpdHkpO1xcclxcblxcclxcblxcdCNlbGlmIGRlZmluZWQoU0VQSUEpXFxyXFxuXFxyXFxuXFx0XFx0dmVjMyBjID0gY29sb3IucmdiO1xcclxcblxcclxcblxcdFxcdGNvbG9yLnIgPSBkb3QoYywgdmVjMygxLjAgLSAwLjYwNyAqIHNlcGlhSW50ZW5zaXR5LCAwLjc2OSAqIHNlcGlhSW50ZW5zaXR5LCAwLjE4OSAqIHNlcGlhSW50ZW5zaXR5KSk7XFxyXFxuXFx0XFx0Y29sb3IuZyA9IGRvdChjLCB2ZWMzKDAuMzQ5ICogc2VwaWFJbnRlbnNpdHksIDEuMCAtIDAuMzE0ICogc2VwaWFJbnRlbnNpdHksIDAuMTY4ICogc2VwaWFJbnRlbnNpdHkpKTtcXHJcXG5cXHRcXHRjb2xvci5iID0gZG90KGMsIHZlYzMoMC4yNzIgKiBzZXBpYUludGVuc2l0eSwgMC41MzQgKiBzZXBpYUludGVuc2l0eSwgMS4wIC0gMC44NjkgKiBzZXBpYUludGVuc2l0eSkpO1xcclxcblxcclxcblxcdCNlbmRpZlxcclxcblxcclxcblxcdCNpZmRlZiBWSUdORVRURVxcclxcblxcclxcblxcdFxcdGNvbnN0IHZlYzIgQ0VOVEVSID0gdmVjMigwLjUpO1xcclxcblxcclxcblxcdFxcdCNpZmRlZiBFU0tJTFxcclxcblxcclxcblxcdFxcdFxcdHZlYzIgdXYgPSAodlV2IC0gQ0VOVEVSKSAqIHZlYzIodmlnbmV0dGVPZmZzZXQpO1xcclxcblxcdFxcdFxcdGNvbG9yID0gbWl4KGNvbG9yLnJnYiwgdmVjMygxLjAgLSB2aWduZXR0ZURhcmtuZXNzKSwgZG90KHV2LCB1dikpO1xcclxcblxcclxcblxcdFxcdCNlbHNlXFxyXFxuXFxyXFxuXFx0XFx0XFx0ZmxvYXQgZGlzdCA9IGRpc3RhbmNlKHZVdiwgQ0VOVEVSKTtcXHJcXG5cXHRcXHRcXHRjb2xvciAqPSBzbW9vdGhzdGVwKDAuOCwgdmlnbmV0dGVPZmZzZXQgKiAwLjc5OSwgZGlzdCAqICh2aWduZXR0ZURhcmtuZXNzICsgdmlnbmV0dGVPZmZzZXQpKTtcXHJcXG5cXHJcXG5cXHRcXHQjZW5kaWZcXHRcXHRcXHJcXG5cXHJcXG5cXHQjZW5kaWZcXHJcXG5cXHJcXG5cXHRnbF9GcmFnQ29sb3IgPSB2ZWM0KGNsYW1wKGNvbG9yLCAwLjAsIDEuMCksIHRleGVsLmEpO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuY29uc3QgdmVydGV4ID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2VXYgPSB1djtcXHJcXG5cXHRnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuXHJcbi8qKlxyXG4gKiBBIGNpbmVtYXRpYyBzaGFkZXIgdGhhdCBwcm92aWRlcyB0aGUgZm9sbG93aW5nIGVmZmVjdHM6XHJcbiAqICAtIEZpbG0gR3JhaW5cclxuICogIC0gU2NhbmxpbmVzXHJcbiAqICAtIFZpZ25ldHRlXHJcbiAqICAtIEdyZXlzY2FsZVxyXG4gKiAgLSBTZXBpYVxyXG4gKlxyXG4gKiBPcmlnaW5hbCBzY2FubGluZXMgYWxnb3JpdGhtIGJ5IFBhdCBcIkhhd3Rob3JuZVwiIFNoZWFyb24uXHJcbiAqICBodHRwOi8vd3d3LnRydWV2aXNpb24zZC5jb20vZm9ydW1zL3Nob3djYXNlL3N0YXRpY25vaXNlX2NvbG9yYmxhY2t3aGl0ZV9zY2FubGluZV9zaGFkZXJzLXQxODY5OC4wLmh0bWxcclxuICpcclxuICogT3B0aW1pc2VkIHNjYW5saW5lcyBhbmQgbm9pc2Ugd2l0aCBpbnRlbnNpdHkgc2NhbGluZyBieSBHZW9yZyBcIkxldmlhdGhhblwiXHJcbiAqIFN0ZWlucm9oZGVyLiBUaGlzIHZlcnNpb24gd2FzIHByb3ZpZGVkIHVuZGVyIGEgQ3JlYXRpdmUgQ29tbW9ucyBBdHRyaWJ1dGlvblxyXG4gKiAzLjAgTGljZW5zZTogaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvMy4wLlxyXG4gKlxyXG4gKiBUaGUgc2VwaWEgZWZmZWN0IGlzIGJhc2VkIG9uOlxyXG4gKiAgaHR0cHM6Ly9naXRodWIuY29tL2V2YW53L2dsZnguanNcclxuICpcclxuICogVGhlIHZpZ25ldHRlIGNvZGUgaXMgYmFzZWQgb24gUGFpbnRFZmZlY3QgcG9zdHByb2Nlc3MgZnJvbSByby5tZTpcclxuICogIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC8zLWRyZWFtcy1vZi1ibGFjay9zb3VyY2UvYnJvd3NlL2RlcGxveS9qcy9lZmZlY3RzL1BhaW50RWZmZWN0LmpzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbG1NYXRlcmlhbCBleHRlbmRzIFNoYWRlck1hdGVyaWFsIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBmaWxtIG1hdGVyaWFsLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zLiBEaXNhYmxlZCBlZmZlY3RzIHdpbGwgbm90IGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCBzaGFkZXIgYW5kIGhhdmUgbm8gbmVnYXRpdmUgaW1wYWN0IG9uIHBlcmZvcm1hbmNlLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZ3JleXNjYWxlPWZhbHNlXSAtIEVuYWJsZSBncmV5c2NhbGUgZWZmZWN0LiBHcmV5c2NhbGUgYW5kIHNlcGlhIGFyZSBtdXR1YWxseSBleGNsdXNpdmUuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5zZXBpYT1mYWxzZV0gLSBFbmFibGUgc2VwaWEgZWZmZWN0LiBHcmV5c2NhbGUgYW5kIHNlcGlhIGFyZSBtdXR1YWxseSBleGNsdXNpdmUuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy52aWduZXR0ZT1mYWxzZV0gLSBBcHBseSB2aWduZXR0ZSBlZmZlY3QuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5lc2tpbD1mYWxzZV0gLSBVc2UgRXNraWwncyB2aWduZXR0ZSBhcHByb2FjaC4gVGhlIGRlZmF1bHQgbG9va3MgZHVzdHkgd2hpbGUgRXNraWwgbG9va3MgYnVybmVkIG91dC5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnNjcmVlbk1vZGU9dHJ1ZV0gLSBXaGV0aGVyIHRoZSBzY3JlZW4gYmxlbmQgbW9kZSBzaG91bGQgYmUgdXNlZCBmb3Igbm9pc2UgYW5kIHNjYW5saW5lcy4gQm90aCBvZiB0aGVzZSBlZmZlY3RzIGFyZSBjb21wdXRlZCBpbmRlcGVuZGVudGx5LlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubm9pc2U9dHJ1ZV0gLSBTaG93IG5vaXNlLWJhc2VkIGZpbG0gZ3JhaW4uXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5zY2FubGluZXM9dHJ1ZV0gLSBTaG93IHNjYW5saW5lcy5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMubm9pc2VJbnRlbnNpdHk9MC41XSAtIFRoZSBub2lzZSBpbnRlbnNpdHkuIDAuMCB0byAxLjAuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnNjYW5saW5lSW50ZW5zaXR5PTAuMDVdIC0gVGhlIHNjYW5saW5lIGludGVuc2l0eS4gMC4wIHRvIDEuMC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZ3JleXNjYWxlSW50ZW5zaXR5PTEuMF0gLSBUaGUgaW50ZW5zaXR5IG9mIHRoZSBncmV5c2NhbGUgZWZmZWN0LlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5zZXBpYUludGVuc2l0eT0xLjBdIC0gVGhlIGludGVuc2l0eSBvZiB0aGUgc2VwaWEgZWZmZWN0LlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy52aWduZXR0ZU9mZnNldD0xLjBdIC0gVGhlIG9mZnNldCBvZiB0aGUgdmlnbmV0dGUgZWZmZWN0LlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy52aWduZXR0ZURhcmtuZXNzPTEuMF0gLSBUaGUgZGFya25lc3Mgb2YgdGhlIHZpZ25ldHRlIGVmZmVjdC5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XHJcblxyXG5cdFx0aWYob3B0aW9ucy5zY3JlZW5Nb2RlID09PSB1bmRlZmluZWQpIHsgb3B0aW9ucy5zY3JlZW5Nb2RlID0gdHJ1ZTsgfVxyXG5cdFx0aWYob3B0aW9ucy5ub2lzZSA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMubm9pc2UgPSB0cnVlOyB9XHJcblx0XHRpZihvcHRpb25zLnNjYW5saW5lcyA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMuc2NhbmxpbmVzID0gdHJ1ZTsgfVxyXG5cclxuXHRcdGlmKG9wdGlvbnMuZ3JleXNjYWxlID09PSB1bmRlZmluZWQpIHsgb3B0aW9ucy5ncmV5c2NhbGUgPSBmYWxzZTsgfVxyXG5cdFx0aWYob3B0aW9ucy5zZXBpYSA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMuc2VwaWEgPSBmYWxzZTsgfVxyXG5cdFx0aWYob3B0aW9ucy52aWduZXR0ZSA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMudmlnbmV0dGUgPSBmYWxzZTsgfVxyXG5cdFx0aWYob3B0aW9ucy5lc2tpbCA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMuZXNraWwgPSBmYWxzZTsgfVxyXG5cclxuXHRcdGlmKG9wdGlvbnMubm9pc2VJbnRlbnNpdHkgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLm5vaXNlSW50ZW5zaXR5ID0gMC41OyB9XHJcblx0XHRpZihvcHRpb25zLnNjYW5saW5lSW50ZW5zaXR5ID09PSB1bmRlZmluZWQpIHsgb3B0aW9ucy5zY2FubGluZUludGVuc2l0eSA9IDAuMDU7IH1cclxuXHRcdGlmKG9wdGlvbnMuZ3JleXNjYWxlSW50ZW5zaXR5ID09PSB1bmRlZmluZWQpIHsgb3B0aW9ucy5ncmV5c2NhbGVJbnRlbnNpdHkgPSAxLjA7IH1cclxuXHRcdGlmKG9wdGlvbnMuc2VwaWFJbnRlbnNpdHkgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLnNlcGlhSW50ZW5zaXR5ID0gMS4wOyB9XHJcblxyXG5cdFx0aWYob3B0aW9ucy52aWduZXR0ZU9mZnNldCA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMudmlnbmV0dGVPZmZzZXQgPSAxLjA7IH1cclxuXHRcdGlmKG9wdGlvbnMudmlnbmV0dGVEYXJrbmVzcyA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMudmlnbmV0dGVEYXJrbmVzcyA9IDEuMDsgfVxyXG5cclxuXHRcdHN1cGVyKHtcclxuXHJcblx0XHRcdHR5cGU6IFwiRmlsbU1hdGVyaWFsXCIsXHJcblxyXG5cdFx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XHR0RGlmZnVzZTogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0dGltZTogbmV3IFVuaWZvcm0oMC4wKSxcclxuXHJcblx0XHRcdFx0bm9pc2VJbnRlbnNpdHk6IG5ldyBVbmlmb3JtKG9wdGlvbnMubm9pc2VJbnRlbnNpdHkpLFxyXG5cdFx0XHRcdHNjYW5saW5lSW50ZW5zaXR5OiBuZXcgVW5pZm9ybShvcHRpb25zLnNjYW5saW5lSW50ZW5zaXR5KSxcclxuXHRcdFx0XHRzY2FubGluZUNvdW50OiBuZXcgVW5pZm9ybSgwLjApLFxyXG5cclxuXHRcdFx0XHRncmV5c2NhbGVJbnRlbnNpdHk6IG5ldyBVbmlmb3JtKG9wdGlvbnMuZ3JleXNjYWxlSW50ZW5zaXR5KSxcclxuXHRcdFx0XHRzZXBpYUludGVuc2l0eTogbmV3IFVuaWZvcm0ob3B0aW9ucy5zZXBpYUludGVuc2l0eSksXHJcblxyXG5cdFx0XHRcdHZpZ25ldHRlT2Zmc2V0OiBuZXcgVW5pZm9ybShvcHRpb25zLnZpZ25ldHRlT2Zmc2V0KSxcclxuXHRcdFx0XHR2aWduZXR0ZURhcmtuZXNzOiBuZXcgVW5pZm9ybShvcHRpb25zLnZpZ25ldHRlRGFya25lc3MpXHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50LFxyXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHZlcnRleCxcclxuXHJcblx0XHRcdGRlcHRoV3JpdGU6IGZhbHNlLFxyXG5cdFx0XHRkZXB0aFRlc3Q6IGZhbHNlXHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYob3B0aW9ucy5ncmV5c2NhbGUpIHsgdGhpcy5kZWZpbmVzLkdSRVlTQ0FMRSA9IFwiMVwiOyB9XHJcblx0XHRpZihvcHRpb25zLnNlcGlhKSB7IHRoaXMuZGVmaW5lcy5TRVBJQSA9IFwiMVwiOyB9XHJcblx0XHRpZihvcHRpb25zLnZpZ25ldHRlKSB7IHRoaXMuZGVmaW5lcy5WSUdORVRURSA9IFwiMVwiOyB9XHJcblx0XHRpZihvcHRpb25zLmVza2lsKSB7IHRoaXMuZGVmaW5lcy5FU0tJTCA9IFwiMVwiOyB9XHJcblxyXG5cdFx0aWYob3B0aW9ucy5zY3JlZW5Nb2RlKSB7IHRoaXMuZGVmaW5lcy5TQ1JFRU5fTU9ERSA9IFwiMVwiOyB9XHJcblx0XHRpZihvcHRpb25zLm5vaXNlKSB7IHRoaXMuZGVmaW5lcy5OT0lTRSA9IFwiMVwiOyB9XHJcblx0XHRpZihvcHRpb25zLnNjYW5saW5lcykgeyB0aGlzLmRlZmluZXMuU0NBTkxJTkVTID0gXCIxXCI7IH1cclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgVW5pZm9ybSB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgZnJhZ21lbnQgPSBcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcclxcbnVuaWZvcm0gc2FtcGxlcjJEIHRQZXJ0dXJiO1xcclxcblxcclxcbnVuaWZvcm0gYm9vbCBhY3RpdmU7XFxyXFxuXFxyXFxudW5pZm9ybSBmbG9hdCBhbW91bnQ7XFxyXFxudW5pZm9ybSBmbG9hdCBhbmdsZTtcXHJcXG51bmlmb3JtIGZsb2F0IHNlZWQ7XFxyXFxudW5pZm9ybSBmbG9hdCBzZWVkWDtcXHJcXG51bmlmb3JtIGZsb2F0IHNlZWRZO1xcclxcbnVuaWZvcm0gZmxvYXQgZGlzdG9ydGlvblg7XFxyXFxudW5pZm9ybSBmbG9hdCBkaXN0b3J0aW9uWTtcXHJcXG51bmlmb3JtIGZsb2F0IGNvbFM7XFxyXFxuXFxyXFxudmFyeWluZyB2ZWMyIHZVdjtcXHJcXG5cXHJcXG5mbG9hdCByYW5kKHZlYzIgdGMpIHtcXHJcXG5cXHJcXG5cXHRjb25zdCBmbG9hdCBhID0gMTIuOTg5ODtcXHJcXG5cXHRjb25zdCBmbG9hdCBiID0gNzguMjMzO1xcclxcblxcdGNvbnN0IGZsb2F0IGMgPSA0Mzc1OC41NDUzO1xcclxcblxcclxcblxcdGZsb2F0IGR0ID0gZG90KHRjLCB2ZWMyKGEsIGIpKTtcXHJcXG5cXHRmbG9hdCBzbiA9IG1vZChkdCwgMy4xNCk7XFxyXFxuXFxyXFxuXFx0cmV0dXJuIGZyYWN0KHNpbihzbikgKiBjKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZlYzIgY29vcmQgPSB2VXY7XFxyXFxuXFxyXFxuXFx0ZmxvYXQgeHMsIHlzO1xcclxcblxcdHZlYzQgbm9ybWFsO1xcclxcblxcclxcblxcdHZlYzIgb2Zmc2V0O1xcclxcblxcdHZlYzQgY3IsIGNnYSwgY2I7XFxyXFxuXFx0dmVjNCBzbm93LCBjb2xvcjtcXHJcXG5cXHJcXG5cXHRmbG9hdCBzeCwgc3k7XFxyXFxuXFxyXFxuXFx0aWYoYWN0aXZlKSB7XFxyXFxuXFxyXFxuXFx0XFx0eHMgPSBmbG9vcihnbF9GcmFnQ29vcmQueCAvIDAuNSk7XFxyXFxuXFx0XFx0eXMgPSBmbG9vcihnbF9GcmFnQ29vcmQueSAvIDAuNSk7XFxyXFxuXFxyXFxuXFx0XFx0bm9ybWFsID0gdGV4dHVyZTJEKHRQZXJ0dXJiLCBjb29yZCAqIHNlZWQgKiBzZWVkKTtcXHJcXG5cXHJcXG5cXHRcXHRpZihjb29yZC55IDwgZGlzdG9ydGlvblggKyBjb2xTICYmIGNvb3JkLnkgPiBkaXN0b3J0aW9uWCAtIGNvbFMgKiBzZWVkKSB7XFxyXFxuXFxyXFxuXFx0XFx0XFx0c3ggPSBjbGFtcChjZWlsKHNlZWRYKSwgMC4wLCAxLjApO1xcclxcblxcdFxcdFxcdGNvb3JkLnkgPSBzeCAqICgxLjAgLSAoY29vcmQueSArIGRpc3RvcnRpb25ZKSkgKyAoMS4wIC0gc3gpICogZGlzdG9ydGlvblk7XFxyXFxuXFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGlmKGNvb3JkLnggPCBkaXN0b3J0aW9uWSArIGNvbFMgJiYgY29vcmQueCA+IGRpc3RvcnRpb25ZIC0gY29sUyAqIHNlZWQpIHtcXHJcXG5cXHJcXG5cXHRcXHRcXHRzeSA9IGNsYW1wKGNlaWwoc2VlZFkpLCAwLjAsIDEuMCk7XFxyXFxuXFx0XFx0XFx0Y29vcmQueCA9IHN5ICogZGlzdG9ydGlvblggKyAoMS4wIC0gc3kpICogKDEuMCAtIChjb29yZC54ICsgZGlzdG9ydGlvblgpKTtcXHJcXG5cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Y29vcmQueCArPSBub3JtYWwueCAqIHNlZWRYICogKHNlZWQgLyA1LjApO1xcclxcblxcdFxcdGNvb3JkLnkgKz0gbm9ybWFsLnkgKiBzZWVkWSAqIChzZWVkIC8gNS4wKTtcXHJcXG5cXHJcXG5cXHRcXHRvZmZzZXQgPSBhbW91bnQgKiB2ZWMyKGNvcyhhbmdsZSksIHNpbihhbmdsZSkpO1xcclxcblxcclxcblxcdFxcdGNyID0gdGV4dHVyZTJEKHREaWZmdXNlLCBjb29yZCArIG9mZnNldCk7XFxyXFxuXFx0XFx0Y2dhID0gdGV4dHVyZTJEKHREaWZmdXNlLCBjb29yZCk7XFxyXFxuXFx0XFx0Y2IgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIGNvb3JkIC0gb2Zmc2V0KTtcXHJcXG5cXHJcXG5cXHRcXHRjb2xvciA9IHZlYzQoY3IuciwgY2dhLmcsIGNiLmIsIGNnYS5hKTtcXHJcXG5cXHRcXHRzbm93ID0gMjAwLjAgKiBhbW91bnQgKiB2ZWM0KHJhbmQodmVjMih4cyAqIHNlZWQsIHlzICogc2VlZCAqIDUwLjApKSAqIDAuMik7XFxyXFxuXFx0XFx0Y29sb3IgKz0gc25vdztcXHJcXG5cXHJcXG5cXHR9IGVsc2Uge1xcclxcblxcclxcblxcdFxcdGNvbG9yID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpO1xcclxcblxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRnbF9GcmFnQ29sb3IgPSBjb2xvcjtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcbmNvbnN0IHZlcnRleCA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dlV2ID0gdXY7XFxyXFxuXFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcblxyXG4vKipcclxuICogQSBnbGl0Y2ggc2hhZGVyIG1hdGVyaWFsLlxyXG4gKlxyXG4gKiBSZWZlcmVuY2U6XHJcbiAqICBodHRwczovL2dpdGh1Yi5jb20vc3RhZmZhbnRhbi91bml0eWdsaXRjaFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBHbGl0Y2hNYXRlcmlhbCBleHRlbmRzIFNoYWRlck1hdGVyaWFsIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBnbGl0Y2ggbWF0ZXJpYWwuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHN1cGVyKHtcclxuXHJcblx0XHRcdHR5cGU6IFwiR2xpdGNoTWF0ZXJpYWxcIixcclxuXHJcblx0XHRcdHVuaWZvcm1zOiB7XHJcblxyXG5cdFx0XHRcdHREaWZmdXNlOiBuZXcgVW5pZm9ybShudWxsKSxcclxuXHRcdFx0XHR0UGVydHVyYjogbmV3IFVuaWZvcm0obnVsbCksXHJcblxyXG5cdFx0XHRcdGFjdGl2ZTogbmV3IFVuaWZvcm0oMSksXHJcblxyXG5cdFx0XHRcdGFtb3VudDogbmV3IFVuaWZvcm0oMC44KSxcclxuXHRcdFx0XHRhbmdsZTogbmV3IFVuaWZvcm0oMC4wMiksXHJcblx0XHRcdFx0c2VlZDogbmV3IFVuaWZvcm0oMC4wMiksXHJcblx0XHRcdFx0c2VlZFg6IG5ldyBVbmlmb3JtKDAuMDIpLFxyXG5cdFx0XHRcdHNlZWRZOiBuZXcgVW5pZm9ybSgwLjAyKSxcclxuXHRcdFx0XHRkaXN0b3J0aW9uWDogbmV3IFVuaWZvcm0oMC41KSxcclxuXHRcdFx0XHRkaXN0b3J0aW9uWTogbmV3IFVuaWZvcm0oMC42KSxcclxuXHRcdFx0XHRjb2xTOiBuZXcgVW5pZm9ybSgwLjA1KVxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudCxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiB2ZXJ0ZXgsXHJcblxyXG5cdFx0XHRkZXB0aFdyaXRlOiBmYWxzZSxcclxuXHRcdFx0ZGVwdGhUZXN0OiBmYWxzZVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlck1hdGVyaWFsLCBVbmlmb3JtIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBmcmFnbWVudCA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XFxyXFxudW5pZm9ybSB2ZWMzIGxpZ2h0UG9zaXRpb247XFxyXFxuXFxyXFxudW5pZm9ybSBmbG9hdCBleHBvc3VyZTtcXHJcXG51bmlmb3JtIGZsb2F0IGRlY2F5O1xcclxcbnVuaWZvcm0gZmxvYXQgZGVuc2l0eTtcXHJcXG51bmlmb3JtIGZsb2F0IHdlaWdodDtcXHJcXG51bmlmb3JtIGZsb2F0IGNsYW1wTWF4O1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZlYzIgdGV4Q29vcmQgPSB2VXY7XFxyXFxuXFxyXFxuXFx0Ly8gQ2FsY3VsYXRlIHZlY3RvciBmcm9tIHBpeGVsIHRvIGxpZ2h0IHNvdXJjZSBpbiBzY3JlZW4gc3BhY2UuXFxyXFxuXFx0dmVjMiBkZWx0YVRleENvb3JkID0gdGV4Q29vcmQgLSBsaWdodFBvc2l0aW9uLnN0O1xcclxcblxcdGRlbHRhVGV4Q29vcmQgKj0gMS4wIC8gTlVNX1NBTVBMRVNfRkxPQVQgKiBkZW5zaXR5O1xcclxcblxcclxcblxcdC8vIEEgZGVjcmVhc2luZyBpbGx1bWluYXRpb24gZmFjdG9yLlxcclxcblxcdGZsb2F0IGlsbHVtaW5hdGlvbkRlY2F5ID0gMS4wO1xcclxcblxcclxcblxcdHZlYzQgc2FtcGxlO1xcclxcblxcdHZlYzQgY29sb3IgPSB2ZWM0KDAuMCk7XFxyXFxuXFxyXFxuXFx0Ly8gRXN0aW1hdGUgdGhlIHByb2JhYmlsaXR5IG9mIG9jY2x1c2lvbiBhdCBlYWNoIHBpeGVsIGJ5IHN1bW1pbmcgc2FtcGxlcyBhbG9uZyBhIHJheSB0byB0aGUgbGlnaHQgc291cmNlLlxcclxcblxcdGZvcihpbnQgaSA9IDA7IGkgPCBOVU1fU0FNUExFU19JTlQ7ICsraSkge1xcclxcblxcclxcblxcdFxcdHRleENvb3JkIC09IGRlbHRhVGV4Q29vcmQ7XFxyXFxuXFx0XFx0c2FtcGxlID0gdGV4dHVyZTJEKHREaWZmdXNlLCB0ZXhDb29yZCk7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gQXBwbHkgc2FtcGxlIGF0dGVudWF0aW9uIHNjYWxlL2RlY2F5IGZhY3RvcnMuXFxyXFxuXFx0XFx0c2FtcGxlICo9IGlsbHVtaW5hdGlvbkRlY2F5ICogd2VpZ2h0O1xcclxcblxcclxcblxcdFxcdGNvbG9yICs9IHNhbXBsZTtcXHJcXG5cXHJcXG5cXHRcXHQvLyBVcGRhdGUgZXhwb25lbnRpYWwgZGVjYXkgZmFjdG9yLlxcclxcblxcdFxcdGlsbHVtaW5hdGlvbkRlY2F5ICo9IGRlY2F5O1xcclxcblxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRnbF9GcmFnQ29sb3IgPSBjbGFtcChjb2xvciAqIGV4cG9zdXJlLCAwLjAsIGNsYW1wTWF4KTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcbmNvbnN0IHZlcnRleCA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dlV2ID0gdXY7XFxyXFxuXFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcblxyXG4vKipcclxuICogQSBjcmVwdXNjdWxhciByYXlzIHNoYWRlciBtYXRlcmlhbC5cclxuICpcclxuICogUmVmZXJlbmNlczpcclxuICpcclxuICogVGhpYmF1dCBEZXNwb3VsYWluLCAyMDEyOlxyXG4gKiAgWyhXZWJHTCkgVm9sdW1ldHJpYyBMaWdodCBBcHByb3hpbWF0aW9uIGluIFRocmVlLmpzXShcclxuICogIGh0dHA6Ly9ia2NvcmUuY29tL2Jsb2cvM2Qvd2ViZ2wtdGhyZWUtanMtdm9sdW1ldHJpYy1saWdodC1nb2RyYXlzLmh0bWwpXHJcbiAqXHJcbiAqIE52aWRpYSwgR1BVIEdlbXMgMywgMjAwODpcclxuICogIFtDaGFwdGVyIDEzLiBWb2x1bWV0cmljIExpZ2h0IFNjYXR0ZXJpbmcgYXMgYSBQb3N0LVByb2Nlc3NdKFxyXG4gKiAgaHR0cHM6Ly9kZXZlbG9wZXIubnZpZGlhLmNvbS9ncHVnZW1zL0dQVUdlbXMzL2dwdWdlbXMzX2NoMTMuaHRtbClcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgR29kUmF5c01hdGVyaWFsIGV4dGVuZHMgU2hhZGVyTWF0ZXJpYWwge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGdvZCByYXlzIG1hdGVyaWFsLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHRzdXBlcih7XHJcblxyXG5cdFx0XHR0eXBlOiBcIkdvZFJheXNNYXRlcmlhbFwiLFxyXG5cclxuXHRcdFx0ZGVmaW5lczoge1xyXG5cclxuXHRcdFx0XHROVU1fU0FNUExFU19GTE9BVDogXCI2MC4wXCIsXHJcblx0XHRcdFx0TlVNX1NBTVBMRVNfSU5UOiBcIjYwXCJcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XHR0RGlmZnVzZTogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0bGlnaHRQb3NpdGlvbjogbmV3IFVuaWZvcm0obnVsbCksXHJcblxyXG5cdFx0XHRcdGV4cG9zdXJlOiBuZXcgVW5pZm9ybSgwLjYpLFxyXG5cdFx0XHRcdGRlY2F5OiBuZXcgVW5pZm9ybSgwLjkzKSxcclxuXHRcdFx0XHRkZW5zaXR5OiBuZXcgVW5pZm9ybSgwLjk2KSxcclxuXHRcdFx0XHR3ZWlnaHQ6IG5ldyBVbmlmb3JtKDAuNCksXHJcblx0XHRcdFx0Y2xhbXBNYXg6IG5ldyBVbmlmb3JtKDEuMClcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogZnJhZ21lbnQsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogdmVydGV4LFxyXG5cclxuXHRcdFx0ZGVwdGhXcml0ZTogZmFsc2UsXHJcblx0XHRcdGRlcHRoVGVzdDogZmFsc2VcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgVW5pZm9ybSwgVmVjdG9yMiB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgZnJhZ21lbnQgPSBcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcclxcbnVuaWZvcm0gZmxvYXQgZGlzdGluY3Rpb247XFxyXFxudW5pZm9ybSB2ZWMyIHJhbmdlO1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdGNvbnN0IHZlYzQgTFVNX0NPRUZGID0gdmVjNCgwLjI5OSwgMC41ODcsIDAuMTE0LCAwLjApO1xcclxcblxcclxcblxcdHZlYzQgdGV4ZWwgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdik7XFxyXFxuXFx0ZmxvYXQgdiA9IGRvdCh0ZXhlbCwgTFVNX0NPRUZGKTtcXHJcXG5cXHJcXG5cXHQjaWZkZWYgUkFOR0VcXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBsb3cgPSBzdGVwKHJhbmdlLngsIHYpO1xcclxcblxcdFxcdGZsb2F0IGhpZ2ggPSBzdGVwKHYsIHJhbmdlLnkpO1xcclxcblxcclxcblxcdFxcdC8vIEFwcGx5IHRoZSBtYXNrLlxcclxcblxcdFxcdHYgKj0gbG93ICogaGlnaDtcXHJcXG5cXHJcXG5cXHQjZW5kaWZcXHJcXG5cXHJcXG5cXHR2ID0gcG93KGFicyh2KSwgZGlzdGluY3Rpb24pO1xcclxcblxcclxcblxcdCNpZmRlZiBDT0xPUlxcclxcblxcclxcblxcdFxcdGdsX0ZyYWdDb2xvciA9IHZlYzQodGV4ZWwucmdiICogdiwgdGV4ZWwuYSk7XFxyXFxuXFxyXFxuXFx0I2Vsc2VcXHJcXG5cXHJcXG5cXHRcXHRnbF9GcmFnQ29sb3IgPSB2ZWM0KHYsIHYsIHYsIHRleGVsLmEpO1xcclxcblxcclxcblxcdCNlbmRpZlxcclxcblxcclxcbn1cXHJcXG5cIjtcclxuY29uc3QgdmVydGV4ID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2VXYgPSB1djtcXHJcXG5cXHRnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuXHJcbi8qKlxyXG4gKiBBIGx1bWlub3NpdHkgc2hhZGVyIG1hdGVyaWFsLlxyXG4gKlxyXG4gKiBUaGlzIHNoYWRlciBwcm9kdWNlcyBhIGdyZXlzY2FsZSBsdW1pbmFuY2UgbWFwLiBJdCBjYW4gYWxzbyBiZSBjb25maWd1cmVkIHRvXHJcbiAqIG91dHB1dCBjb2xvdXJzIHRoYXQgYXJlIHNjYWxlZCB3aXRoIHRoZWlyIHJlc3BlY3RpdmUgbHVtaW5hbmNlIHZhbHVlLlxyXG4gKiBBZGRpdGlvbmFsbHksIGEgcmFuZ2UgbWF5IGJlIHByb3ZpZGVkIHRvIG1hc2sgb3V0IHVuZGVzaXJlZCB0ZXhlbHMuXHJcbiAqXHJcbiAqIFRoZSBhbHBoYSBjaGFubmVsIHdpbGwgcmVtYWluIHVuYWZmZWN0ZWQgaW4gYWxsIGNhc2VzLlxyXG4gKlxyXG4gKiBMdW1pbmFuY2UgcmFuZ2UgcmVmZXJlbmNlOlxyXG4gKiAgaHR0cHM6Ly9jeWNsaW5nNzQuY29tLzIwMDcvMDUvMjMveW91ci1maXJzdC1zaGFkZXIvIy5WdHk5RmZrckw0WlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBMdW1pbm9zaXR5TWF0ZXJpYWwgZXh0ZW5kcyBTaGFkZXJNYXRlcmlhbCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgbHVtaW5vc2l0eSBtYXRlcmlhbC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NvbG9yPWZhbHNlXSAtIERlZmluZXMgd2hldGhlciB0aGUgc2hhZGVyIHNob3VsZCBvdXRwdXQgY29sb3VycyBzY2FsZWQgd2l0aCB0aGVpciBsdW1pbmFuY2UgdmFsdWUuXHJcblx0ICogQHBhcmFtIHtWZWN0b3IyfSBbcmFuZ2VdIC0gSWYgcHJvdmlkZWQsIHRoZSBzaGFkZXIgd2lsbCBtYXNrIG91dCB0ZXhlbHMgdGhhdCBhcmVuJ3QgaW4gdGhlIHNwZWNpZmllZCBsdW1pbmFuY2UgcmFuZ2UuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKGNvbG9yID0gZmFsc2UsIHJhbmdlID0gbnVsbCkge1xyXG5cclxuXHRcdHN1cGVyKHtcclxuXHJcblx0XHRcdHR5cGU6IFwiTHVtaW5vc2l0eU1hdGVyaWFsXCIsXHJcblxyXG5cdFx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XHR0RGlmZnVzZTogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0ZGlzdGluY3Rpb246IG5ldyBVbmlmb3JtKDEuMCksXHJcblx0XHRcdFx0cmFuZ2U6IG5ldyBVbmlmb3JtKChyYW5nZSAhPT0gbnVsbCkgPyByYW5nZSA6IG5ldyBWZWN0b3IyKCkpXHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50LFxyXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHZlcnRleFxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmKGNvbG9yKSB7IHRoaXMuZGVmaW5lcy5DT0xPUiA9IFwiMVwiOyB9XHJcblx0XHRpZihyYW5nZSAhPT0gbnVsbCkgeyB0aGlzLmRlZmluZXMuUkFOR0UgPSBcIjFcIjsgfVxyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlck1hdGVyaWFsLCBVbmlmb3JtLCBWZWN0b3IyIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBmcmFnbWVudCA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XFxyXFxudW5pZm9ybSBmbG9hdCBncmFudWxhcml0eTtcXHJcXG51bmlmb3JtIGZsb2F0IGR4O1xcclxcbnVuaWZvcm0gZmxvYXQgZHk7XFxyXFxuXFxyXFxudmFyeWluZyB2ZWMyIHZVdjtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dmVjNCB0ZXhlbDtcXHJcXG5cXHJcXG5cXHRpZihncmFudWxhcml0eSA+IDAuMCkge1xcclxcblxcclxcblxcdFxcdHZlYzIgY29vcmQgPSB2ZWMyKFxcclxcblxcdFxcdFxcdGR4ICogKGZsb29yKHZVdi54IC8gZHgpICsgMC41KSxcXHJcXG5cXHRcXHRcXHRkeSAqIChmbG9vcih2VXYueSAvIGR5KSArIDAuNSlcXHJcXG5cXHRcXHQpO1xcclxcblxcclxcblxcdFxcdHRleGVsID0gdGV4dHVyZTJEKHREaWZmdXNlLCBjb29yZCk7XFxyXFxuXFxyXFxuXFx0fSBlbHNlIHtcXHJcXG5cXHJcXG5cXHRcXHR0ZXhlbCA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KTtcXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Z2xfRnJhZ0NvbG9yID0gdGV4ZWw7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5jb25zdCB2ZXJ0ZXggPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZVdiA9IHV2O1xcclxcblxcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5cclxuLyoqXHJcbiAqIEEgcGl4ZWxhdGlvbiBzaGFkZXIgbWF0ZXJpYWwuXHJcbiAqXHJcbiAqIE9yaWdpbmFsIHNoYWRlciBjb2RlIGJ5IFJvYmVydCBDYXNhbm92YTpcclxuICogIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2JlcnRjYXNhbm92YS9waXhlbGF0ZS1zaGFkZXJcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgUGl4ZWxhdGlvbk1hdGVyaWFsIGV4dGVuZHMgU2hhZGVyTWF0ZXJpYWwge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IHBpeGVsYXRpb24gbWF0ZXJpYWwuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHN1cGVyKHtcclxuXHJcblx0XHRcdHR5cGU6IFwiUGl4ZWxhdGlvbk1hdGVyaWFsXCIsXHJcblxyXG5cdFx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XHR0RGlmZnVzZTogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0Z3JhbnVsYXJpdHk6IG5ldyBVbmlmb3JtKDEuMCksXHJcblx0XHRcdFx0cmVzb2x1dGlvbjogbmV3IFVuaWZvcm0obmV3IFZlY3RvcjIoMS4wLCAxLjApKSxcclxuXHRcdFx0XHRkeDogbmV3IFVuaWZvcm0oMS4wKSxcclxuXHRcdFx0XHRkeTogbmV3IFVuaWZvcm0oMS4wKVxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudCxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiB2ZXJ0ZXgsXHJcblxyXG5cdFx0XHRkZXB0aFdyaXRlOiBmYWxzZSxcclxuXHRcdFx0ZGVwdGhUZXN0OiBmYWxzZVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBwaXhlbCBncmFudWxhcml0eS5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0ICovXHJcblxyXG5cdGdldCBncmFudWxhcml0eSgpIHsgcmV0dXJuIHRoaXMudW5pZm9ybXMuZ3JhbnVsYXJpdHkudmFsdWU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogQSBoaWdoZXIgdmFsdWUgeWllbGRzIGNvYXJzZXIgdmlzdWFscy5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0ICovXHJcblxyXG5cdHNldCBncmFudWxhcml0eSh4KSB7XHJcblxyXG5cdFx0Y29uc3QgdW5pZm9ybXMgPSB0aGlzLnVuaWZvcm1zO1xyXG5cdFx0Y29uc3QgcmVzb2x1dGlvbiA9IHVuaWZvcm1zLnJlc29sdXRpb24udmFsdWU7XHJcblxyXG5cdFx0dW5pZm9ybXMuZ3JhbnVsYXJpdHkudmFsdWUgPSB4O1xyXG5cdFx0dW5pZm9ybXMuZHgudmFsdWUgPSB4IC8gcmVzb2x1dGlvbi54O1xyXG5cdFx0dW5pZm9ybXMuZHkudmFsdWUgPSB4IC8gcmVzb2x1dGlvbi55O1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIHJlc29sdXRpb24uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gd2lkdGggLSBUaGUgd2lkdGguXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCAtIFRoZSBoZWlnaHQuXHJcblx0ICovXHJcblxyXG5cdHNldFJlc29sdXRpb24od2lkdGgsIGhlaWdodCkge1xyXG5cclxuXHRcdHRoaXMudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQod2lkdGgsIGhlaWdodCk7XHJcblx0XHR0aGlzLmdyYW51bGFyaXR5ID0gdGhpcy5ncmFudWxhcml0eTtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgVW5pZm9ybSwgVmVjdG9yMiB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgZnJhZ21lbnQgPSBcIiNpbmNsdWRlIDxjb21tb24+XFxyXFxuXFxyXFxudW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XFxyXFxudW5pZm9ybSB2ZWMyIGNlbnRlcjtcXHJcXG51bmlmb3JtIGZsb2F0IGFzcGVjdDtcXHJcXG51bmlmb3JtIGZsb2F0IHdhdmVTaXplO1xcclxcbnVuaWZvcm0gZmxvYXQgcmFkaXVzO1xcclxcbnVuaWZvcm0gZmxvYXQgbWF4UmFkaXVzO1xcclxcbnVuaWZvcm0gZmxvYXQgYW1wbGl0dWRlO1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxudmFyeWluZyBmbG9hdCB2U2l6ZTtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dmVjMiBhc3BlY3RDb3JyZWN0aW9uID0gdmVjMihhc3BlY3QsIDEuMCk7XFxyXFxuXFxyXFxuXFx0dmVjMiBkaWZmZXJlbmNlID0gdlV2ICogYXNwZWN0Q29ycmVjdGlvbiAtIGNlbnRlciAqIGFzcGVjdENvcnJlY3Rpb247XFxyXFxuXFx0ZmxvYXQgZGlzdGFuY2UgPSBzcXJ0KGRvdChkaWZmZXJlbmNlLCBkaWZmZXJlbmNlKSkgKiB2U2l6ZTtcXHJcXG5cXHJcXG5cXHR2ZWMyIGRpc3BsYWNlbWVudCA9IHZlYzIoMC4wKTtcXHJcXG5cXHJcXG5cXHRpZihkaXN0YW5jZSA+IHJhZGl1cykge1xcclxcblxcclxcblxcdFxcdGlmKGRpc3RhbmNlIDwgcmFkaXVzICsgd2F2ZVNpemUpIHtcXHJcXG5cXHJcXG5cXHRcXHRcXHRmbG9hdCBhbmdsZSA9IChkaXN0YW5jZSAtIHJhZGl1cykgKiBQSTIgLyB3YXZlU2l6ZTtcXHJcXG5cXHRcXHRcXHRmbG9hdCBjb3NTaW4gPSAoMS4wIC0gY29zKGFuZ2xlKSkgKiAwLjU7XFxyXFxuXFxyXFxuXFx0XFx0XFx0ZmxvYXQgZXh0ZW50ID0gbWF4UmFkaXVzICsgd2F2ZVNpemU7XFxyXFxuXFx0XFx0XFx0ZmxvYXQgZGVjYXkgPSBtYXgoZXh0ZW50IC0gZGlzdGFuY2UgKiBkaXN0YW5jZSwgMC4wKSAvIGV4dGVudDtcXHJcXG5cXHJcXG5cXHRcXHRcXHRkaXNwbGFjZW1lbnQgPSAoKGNvc1NpbiAqIGFtcGxpdHVkZSAqIGRpZmZlcmVuY2UpIC8gZGlzdGFuY2UpICogZGVjYXk7XFxyXFxuXFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdiAtIGRpc3BsYWNlbWVudCk7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5jb25zdCB2ZXJ0ZXggPSBcInVuaWZvcm0gZmxvYXQgc2l6ZTtcXHJcXG51bmlmb3JtIGZsb2F0IHNjYWxlO1xcclxcbnVuaWZvcm0gZmxvYXQgY2FtZXJhRGlzdGFuY2U7XFxyXFxuXFxyXFxudmFyeWluZyB2ZWMyIHZVdjtcXHJcXG52YXJ5aW5nIGZsb2F0IHZTaXplO1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2VXYgPSB1djtcXHJcXG5cXHR2U2l6ZSA9ICgwLjEgKiBjYW1lcmFEaXN0YW5jZSkgLyBzaXplO1xcclxcblxcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5cclxuLyoqXHJcbiAqIEEgc2hvY2sgd2F2ZSBzaGFkZXIgbWF0ZXJpYWwuXHJcbiAqXHJcbiAqIEJhc2VkIG9uIGEgR2lzdCBieSBKZWFuLVBoaWxpcHBlIFNhcmRhOlxyXG4gKiAgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vanBzYXJkYS8zM2NlYTY3YTlmMmVjYjBhMGVkYVxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBTaG9ja1dhdmVNYXRlcmlhbCBleHRlbmRzIFNoYWRlck1hdGVyaWFsIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBzaG9jayB3YXZlIG1hdGVyaWFsLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy53YXZlU2l6ZT0wLjJdIC0gVGhlIHdhdmUgc2l6ZS5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuYW1wbGl0dWRlPTAuMDVdIC0gVGhlIGRpc3RvcnRpb24gYW1wbGl0dWRlLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcclxuXHJcblx0XHRpZihvcHRpb25zLm1heFJhZGl1cyA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMubWF4UmFkaXVzID0gMS4wOyB9XHJcblx0XHRpZihvcHRpb25zLndhdmVTaXplID09PSB1bmRlZmluZWQpIHsgb3B0aW9ucy53YXZlU2l6ZSA9IDAuMjsgfVxyXG5cdFx0aWYob3B0aW9ucy5hbXBsaXR1ZGUgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLmFtcGxpdHVkZSA9IDAuMDU7IH1cclxuXHJcblx0XHRzdXBlcih7XHJcblxyXG5cdFx0XHR0eXBlOiBcIlNob2NrV2F2ZU1hdGVyaWFsXCIsXHJcblxyXG5cdFx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XHR0RGlmZnVzZTogbmV3IFVuaWZvcm0obnVsbCksXHJcblxyXG5cdFx0XHRcdGNlbnRlcjogbmV3IFVuaWZvcm0obmV3IFZlY3RvcjIoMC41LCAwLjUpKSxcclxuXHRcdFx0XHRhc3BlY3Q6IG5ldyBVbmlmb3JtKDEuMCksXHJcblx0XHRcdFx0Y2FtZXJhRGlzdGFuY2U6IG5ldyBVbmlmb3JtKDEuMCksXHJcblxyXG5cdFx0XHRcdHNpemU6IG5ldyBVbmlmb3JtKDEuMCksXHJcblx0XHRcdFx0cmFkaXVzOiBuZXcgVW5pZm9ybSgtb3B0aW9ucy53YXZlU2l6ZSksXHJcblx0XHRcdFx0bWF4UmFkaXVzOiBuZXcgVW5pZm9ybShvcHRpb25zLm1heFJhZGl1cyksXHJcblx0XHRcdFx0d2F2ZVNpemU6IG5ldyBVbmlmb3JtKG9wdGlvbnMud2F2ZVNpemUpLFxyXG5cdFx0XHRcdGFtcGxpdHVkZTogbmV3IFVuaWZvcm0ob3B0aW9ucy5hbXBsaXR1ZGUpXHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50LFxyXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHZlcnRleCxcclxuXHJcblx0XHRcdGRlcHRoV3JpdGU6IGZhbHNlLFxyXG5cdFx0XHRkZXB0aFRlc3Q6IGZhbHNlXHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyTWF0ZXJpYWwsIFVuaWZvcm0sIFZlY3RvcjIgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IGZyYWdtZW50ID0gXCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB0V2VpZ2h0cztcXHJcXG5cXHJcXG51bmlmb3JtIHZlYzIgdGV4ZWxTaXplO1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxudmFyeWluZyB2ZWM0IHZPZmZzZXQ7XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdC8vIEZldGNoIHRoZSBibGVuZGluZyB3ZWlnaHRzIGZvciBjdXJyZW50IHBpeGVsLlxcclxcblxcdHZlYzQgYTtcXHJcXG5cXHRhLnh6ID0gdGV4dHVyZTJEKHRXZWlnaHRzLCB2VXYpLnh6O1xcclxcblxcdGEueSA9IHRleHR1cmUyRCh0V2VpZ2h0cywgdk9mZnNldC56dykuZztcXHJcXG5cXHRhLncgPSB0ZXh0dXJlMkQodFdlaWdodHMsIHZPZmZzZXQueHkpLmE7XFxyXFxuXFxyXFxuXFx0dmVjNCBjb2xvcjtcXHJcXG5cXHJcXG5cXHQvLyBDaGVjayBpZiB0aGVyZSBpcyBhbnkgYmxlbmRpbmcgd2VpZ2h0IHdpdGggYSB2YWx1ZSBncmVhdGVyIHRoYW4gMC4wLlxcclxcblxcdGlmKGRvdChhLCB2ZWM0KDEuMCkpIDwgMWUtNSkge1xcclxcblxcclxcblxcdFxcdGNvbG9yID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYsIDAuMCk7XFxyXFxuXFxyXFxuXFx0fSBlbHNlIHtcXHJcXG5cXHJcXG5cXHRcXHQvKiBVcCB0byBmb3VyIGxpbmVzIGNhbiBiZSBjcm9zc2luZyBhIHBpeGVsIChvbmUgdGhyb3VnaCBlYWNoIGVkZ2UpLiBXZSBmYXZvclxcclxcblxcdFxcdCAqIGJsZW5kaW5nIGJ5IGNob29zaW5nIHRoZSBsaW5lIHdpdGggdGhlIG1heGltdW0gd2VpZ2h0IGZvciBlYWNoIGRpcmVjdGlvbi5cXHJcXG5cXHRcXHQgKi9cXHJcXG5cXHJcXG5cXHRcXHR2ZWMyIG9mZnNldDtcXHJcXG5cXHRcXHRvZmZzZXQueCA9IGEuYSA+IGEuYiA/IGEuYSA6IC1hLmI7IC8vIExlZnQgdnMuIHJpZ2h0LlxcclxcblxcdFxcdG9mZnNldC55ID0gYS5nID4gYS5yID8gLWEuZyA6IGEucjsgLy8gVG9wIHZzLiBib3R0b20gKGNoYW5nZWQgc2lnbnMpLlxcclxcblxcclxcblxcdFxcdC8vIFRoZW4gd2UgZ28gaW4gdGhlIGRpcmVjdGlvbiB0aGF0IGhhcyB0aGUgbWF4aW11bSB3ZWlnaHQgKGhvcml6b250YWwgdnMuIHZlcnRpY2FsKS5cXHJcXG5cXHRcXHRpZihhYnMob2Zmc2V0LngpID4gYWJzKG9mZnNldC55KSkge1xcclxcblxcclxcblxcdFxcdFxcdG9mZnNldC55ID0gMC4wO1xcclxcblxcclxcblxcdFxcdH0gZWxzZSB7XFxyXFxuXFxyXFxuXFx0XFx0XFx0b2Zmc2V0LnggPSAwLjA7XFxyXFxuXFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC8vIEZldGNoIHRoZSBvcHBvc2l0ZSBjb2xvciBhbmQgbGVycCBieSBoYW5kLlxcclxcblxcdFxcdGNvbG9yID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYsIDAuMCk7XFxyXFxuXFx0XFx0dmVjMiBjb29yZCA9IHZVdiArIHNpZ24ob2Zmc2V0KSAqIHRleGVsU2l6ZTtcXHJcXG5cXHRcXHR2ZWM0IG9wcG9zaXRlQ29sb3IgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIGNvb3JkLCAwLjApO1xcclxcblxcdFxcdGZsb2F0IHMgPSBhYnMob2Zmc2V0LngpID4gYWJzKG9mZnNldC55KSA/IGFicyhvZmZzZXQueCkgOiBhYnMob2Zmc2V0LnkpO1xcclxcblxcclxcblxcdFxcdC8vIEdhbW1hIGNvcnJlY3Rpb24uXFxyXFxuXFx0XFx0Y29sb3IucmdiID0gcG93KGFicyhjb2xvci5yZ2IpLCB2ZWMzKDIuMikpO1xcclxcblxcdFxcdG9wcG9zaXRlQ29sb3IucmdiID0gcG93KGFicyhvcHBvc2l0ZUNvbG9yLnJnYiksIHZlYzMoMi4yKSk7XFxyXFxuXFx0XFx0Y29sb3IgPSBtaXgoY29sb3IsIG9wcG9zaXRlQ29sb3IsIHMpO1xcclxcblxcdFxcdGNvbG9yLnJnYiA9IHBvdyhhYnMoY29sb3IucmdiKSwgdmVjMygxLjAgLyAyLjIpKTtcXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Z2xfRnJhZ0NvbG9yID0gY29sb3I7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5jb25zdCB2ZXJ0ZXggPSBcInVuaWZvcm0gdmVjMiB0ZXhlbFNpemU7XFxyXFxuXFxyXFxudmFyeWluZyB2ZWMyIHZVdjtcXHJcXG52YXJ5aW5nIHZlYzQgdk9mZnNldDtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dlV2ID0gdXY7XFxyXFxuXFxyXFxuXFx0dk9mZnNldCA9IHV2Lnh5eHkgKyB0ZXhlbFNpemUueHl4eSAqIHZlYzQoMS4wLCAwLjAsIDAuMCwgLTEuMCk7IC8vIENoYW5nZWQgc2lnbiBpbiBXIGNvbXBvbmVudC5cXHJcXG5cXHJcXG5cXHRnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuXHJcbi8qKlxyXG4gKiBTdWJwaXhlbCBNb3JwaG9sb2dpY2FsIEFudGlhbGlhc2luZy5cclxuICpcclxuICogVGhpcyBtYXRlcmlhbCBpcyB1c2VkIHRvIHJlbmRlciB0aGUgZmluYWwgYW50aWFsaWFzaW5nLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBTTUFBQmxlbmRNYXRlcmlhbCBleHRlbmRzIFNoYWRlck1hdGVyaWFsIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBTTUFBIGJsZW5kIG1hdGVyaWFsLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtWZWN0b3IyfSBbdGV4ZWxTaXplXSAtIFRoZSBhYnNvbHV0ZSBzY3JlZW4gdGV4ZWwgc2l6ZS5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3IodGV4ZWxTaXplID0gbmV3IFZlY3RvcjIoKSkge1xyXG5cclxuXHRcdHN1cGVyKHtcclxuXHJcblx0XHRcdHR5cGU6IFwiU01BQUJsZW5kTWF0ZXJpYWxcIixcclxuXHJcblx0XHRcdHVuaWZvcm1zOiB7XHJcblxyXG5cdFx0XHRcdHREaWZmdXNlOiBuZXcgVW5pZm9ybShudWxsKSxcclxuXHRcdFx0XHR0V2VpZ2h0czogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0dGV4ZWxTaXplOiBuZXcgVW5pZm9ybSh0ZXhlbFNpemUpXHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50LFxyXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHZlcnRleCxcclxuXHJcblx0XHRcdGRlcHRoV3JpdGU6IGZhbHNlLFxyXG5cdFx0XHRkZXB0aFRlc3Q6IGZhbHNlXHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyTWF0ZXJpYWwsIFVuaWZvcm0sIFZlY3RvcjIgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IGZyYWdtZW50ID0gXCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzIgdlV2O1xcclxcbnZhcnlpbmcgdmVjNCB2T2Zmc2V0WzNdO1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHRjb25zdCB2ZWMyIFRIUkVTSE9MRCA9IHZlYzIoRURHRV9USFJFU0hPTEQpO1xcclxcblxcclxcblxcdC8vIENhbGN1bGF0ZSBjb2xvciBkZWx0YXMuXFxyXFxuXFx0dmVjNCBkZWx0YTtcXHJcXG5cXHR2ZWMzIGMgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdikucmdiO1xcclxcblxcclxcblxcdHZlYzMgY0xlZnQgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZPZmZzZXRbMF0ueHkpLnJnYjtcXHJcXG5cXHR2ZWMzIHQgPSBhYnMoYyAtIGNMZWZ0KTtcXHJcXG5cXHRkZWx0YS54ID0gbWF4KG1heCh0LnIsIHQuZyksIHQuYik7XFxyXFxuXFxyXFxuXFx0dmVjMyBjVG9wID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2T2Zmc2V0WzBdLnp3KS5yZ2I7XFxyXFxuXFx0dCA9IGFicyhjIC0gY1RvcCk7XFxyXFxuXFx0ZGVsdGEueSA9IG1heChtYXgodC5yLCB0LmcpLCB0LmIpO1xcclxcblxcclxcblxcdC8vIFdlIGRvIHRoZSB1c3VhbCB0aHJlc2hvbGQuXFxyXFxuXFx0dmVjMiBlZGdlcyA9IHN0ZXAoVEhSRVNIT0xELCBkZWx0YS54eSk7XFxyXFxuXFxyXFxuXFx0Ly8gVGhlbiBkaXNjYXJkIGlmIHRoZXJlIGlzIG5vIGVkZ2UuXFxyXFxuXFx0aWYoZG90KGVkZ2VzLCB2ZWMyKDEuMCkpID09IDAuMCkge1xcclxcblxcclxcblxcdFxcdGRpc2NhcmQ7XFxyXFxuXFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vIENhbGN1bGF0ZSByaWdodCBhbmQgYm90dG9tIGRlbHRhcy5cXHJcXG5cXHR2ZWMzIGNSaWdodCA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdk9mZnNldFsxXS54eSkucmdiO1xcclxcblxcdHQgPSBhYnMoYyAtIGNSaWdodCk7XFxyXFxuXFx0ZGVsdGEueiA9IG1heChtYXgodC5yLCB0LmcpLCB0LmIpO1xcclxcblxcclxcblxcdHZlYzMgY0JvdHRvbSAgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZPZmZzZXRbMV0uencpLnJnYjtcXHJcXG5cXHR0ID0gYWJzKGMgLSBjQm90dG9tKTtcXHJcXG5cXHRkZWx0YS53ID0gbWF4KG1heCh0LnIsIHQuZyksIHQuYik7XFxyXFxuXFxyXFxuXFx0Ly8gQ2FsY3VsYXRlIHRoZSBtYXhpbXVtIGRlbHRhIGluIHRoZSBkaXJlY3QgbmVpZ2hib3Job29kLlxcclxcblxcdGZsb2F0IG1heERlbHRhID0gbWF4KG1heChtYXgoZGVsdGEueCwgZGVsdGEueSksIGRlbHRhLnopLCBkZWx0YS53KTtcXHJcXG5cXHJcXG5cXHQvLyBDYWxjdWxhdGUgbGVmdC1sZWZ0IGFuZCB0b3AtdG9wIGRlbHRhcy5cXHJcXG5cXHR2ZWMzIGNMZWZ0TGVmdCAgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZPZmZzZXRbMl0ueHkpLnJnYjtcXHJcXG5cXHR0ID0gYWJzKGMgLSBjTGVmdExlZnQpO1xcclxcblxcdGRlbHRhLnogPSBtYXgobWF4KHQuciwgdC5nKSwgdC5iKTtcXHJcXG5cXHJcXG5cXHR2ZWMzIGNUb3BUb3AgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZPZmZzZXRbMl0uencpLnJnYjtcXHJcXG5cXHR0ID0gYWJzKGMgLSBjVG9wVG9wKTtcXHJcXG5cXHRkZWx0YS53ID0gbWF4KG1heCh0LnIsIHQuZyksIHQuYik7XFxyXFxuXFxyXFxuXFx0Ly8gQ2FsY3VsYXRlIHRoZSBmaW5hbCBtYXhpbXVtIGRlbHRhLlxcclxcblxcdG1heERlbHRhID0gbWF4KG1heChtYXhEZWx0YSwgZGVsdGEueiksIGRlbHRhLncpO1xcclxcblxcclxcblxcdC8vIExvY2FsIGNvbnRyYXN0IGFkYXB0YXRpb24gaW4gYWN0aW9uLlxcclxcblxcdGVkZ2VzLnh5ICo9IHN0ZXAoMC41ICogbWF4RGVsdGEsIGRlbHRhLnh5KTtcXHJcXG5cXHJcXG5cXHRnbF9GcmFnQ29sb3IgPSB2ZWM0KGVkZ2VzLCAwLjAsIDAuMCk7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5jb25zdCB2ZXJ0ZXggPSBcInVuaWZvcm0gdmVjMiB0ZXhlbFNpemU7XFxyXFxuXFxyXFxudmFyeWluZyB2ZWMyIHZVdjtcXHJcXG52YXJ5aW5nIHZlYzQgdk9mZnNldFszXTtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dlV2ID0gdXY7XFxyXFxuXFxyXFxuXFx0dk9mZnNldFswXSA9IHV2Lnh5eHkgKyB0ZXhlbFNpemUueHl4eSAqIHZlYzQoLTEuMCwgMC4wLCAwLjAsIDEuMCk7IC8vIENoYW5nZWQgc2lnbiBpbiBXIGNvbXBvbmVudC5cXHJcXG5cXHR2T2Zmc2V0WzFdID0gdXYueHl4eSArIHRleGVsU2l6ZS54eXh5ICogdmVjNCgxLjAsIDAuMCwgMC4wLCAtMS4wKTsgLy8gQ2hhbmdlZCBzaWduIGluIFcgY29tcG9uZW50LlxcclxcblxcdHZPZmZzZXRbMl0gPSB1di54eXh5ICsgdGV4ZWxTaXplLnh5eHkgKiB2ZWM0KC0yLjAsIDAuMCwgMC4wLCAyLjApOyAvLyBDaGFuZ2VkIHNpZ24gaW4gVyBjb21wb25lbnQuXFxyXFxuXFxyXFxuXFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcblxyXG4vKipcclxuICogU3VicGl4ZWwgTW9ycGhvbG9naWNhbCBBbnRpYWxpYXNpbmcuXHJcbiAqXHJcbiAqIFRoaXMgbWF0ZXJpYWwgZGV0ZWN0cyBlZGdlcyBpbiBhIGNvbG9yIHRleHR1cmUuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFNNQUFDb2xvckVkZ2VzTWF0ZXJpYWwgZXh0ZW5kcyBTaGFkZXJNYXRlcmlhbCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgU01BQSBjb2xvciBlZGdlcyBtYXRlcmlhbC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7VmVjdG9yMn0gW3RleGVsU2l6ZV0gLSBUaGUgYWJzb2x1dGUgc2NyZWVuIHRleGVsIHNpemUuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKHRleGVsU2l6ZSA9IG5ldyBWZWN0b3IyKCkpIHtcclxuXHJcblx0XHRzdXBlcih7XHJcblxyXG5cdFx0XHR0eXBlOiBcIlNNQUFDb2xvckVkZ2VzTWF0ZXJpYWxcIixcclxuXHJcblx0XHRcdGRlZmluZXM6IHtcclxuXHJcblx0XHRcdFx0RURHRV9USFJFU0hPTEQ6IFwiMC4xXCJcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XHR0RGlmZnVzZTogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0dGV4ZWxTaXplOiBuZXcgVW5pZm9ybSh0ZXhlbFNpemUpXHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50LFxyXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHZlcnRleCxcclxuXHJcblx0XHRcdGRlcHRoV3JpdGU6IGZhbHNlLFxyXG5cdFx0XHRkZXB0aFRlc3Q6IGZhbHNlXHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyTWF0ZXJpYWwsIFVuaWZvcm0sIFZlY3RvcjIgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCBhcmVhSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL3NtYWEvYXJlYS1pbWFnZS5qc1wiO1xyXG5pbXBvcnQgc2VhcmNoSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL3NtYWEvc2VhcmNoLWltYWdlLmpzXCI7XHJcblxyXG5jb25zdCBmcmFnbWVudCA9IFwiI2RlZmluZSBzYW1wbGVMZXZlbFplcm9PZmZzZXQodCwgY29vcmQsIG9mZnNldCkgdGV4dHVyZTJEKHQsIGNvb3JkICsgZmxvYXQob2Zmc2V0KSAqIHRleGVsU2l6ZSwgMC4wKVxcclxcblxcclxcbnVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcclxcbnVuaWZvcm0gc2FtcGxlcjJEIHRBcmVhO1xcclxcbnVuaWZvcm0gc2FtcGxlcjJEIHRTZWFyY2g7XFxyXFxuXFxyXFxudW5pZm9ybSB2ZWMyIHRleGVsU2l6ZTtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzIgdlV2O1xcclxcbnZhcnlpbmcgdmVjNCB2T2Zmc2V0WzNdO1xcclxcbnZhcnlpbmcgdmVjMiB2UGl4Q29vcmQ7XFxyXFxuXFxyXFxudmVjMiByb3VuZCh2ZWMyIHgpIHtcXHJcXG5cXHJcXG5cXHRyZXR1cm4gc2lnbih4KSAqIGZsb29yKGFicyh4KSArIDAuNSk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmZsb2F0IHNlYXJjaExlbmd0aCh2ZWMyIGUsIGZsb2F0IGJpYXMsIGZsb2F0IHNjYWxlKSB7XFxyXFxuXFxyXFxuXFx0Ly8gTm90IHJlcXVpcmVkIGlmIHRTZWFyY2ggYWNjZXNzZXMgYXJlIHNldCB0byBwb2ludC5cXHJcXG5cXHQvLyBjb25zdCB2ZWMyIFNFQVJDSF9URVhfUElYRUxfU0laRSA9IDEuMCAvIHZlYzIoNjYuMCwgMzMuMCk7XFxyXFxuXFx0Ly8gZSA9IHZlYzIoYmlhcywgMC4wKSArIDAuNSAqIFNFQVJDSF9URVhfUElYRUxfU0laRSArIGUgKiB2ZWMyKHNjYWxlLCAxLjApICogdmVjMig2NC4wLCAzMi4wKSAqIFNFQVJDSF9URVhfUElYRUxfU0laRTtcXHJcXG5cXHJcXG5cXHRlLnIgPSBiaWFzICsgZS5yICogc2NhbGU7XFxyXFxuXFxyXFxuXFx0cmV0dXJuIDI1NS4wICogdGV4dHVyZTJEKHRTZWFyY2gsIGUsIDAuMCkucjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgc2VhcmNoWExlZnQodmVjMiB0ZXhDb29yZCwgZmxvYXQgZW5kKSB7XFxyXFxuXFxyXFxuXFx0LyogQFBTRVVET19HQVRIRVI0XFxyXFxuXFx0ICogVGhpcyB0ZXhDb29yZCBoYXMgYmVlbiBvZmZzZXQgYnkgKC0wLjI1LCAtMC4xMjUpIGluIHRoZSB2ZXJ0ZXggc2hhZGVyIHRvXFxyXFxuXFx0ICogc2FtcGxlIGJldHdlZW4gZWRnZSwgdGh1cyBmZXRjaGluZyBmb3VyIGVkZ2VzIGluIGEgcm93LlxcclxcblxcdCAqIFNhbXBsaW5nIHdpdGggZGlmZmVyZW50IG9mZnNldHMgaW4gZWFjaCBkaXJlY3Rpb24gYWxsb3dzIHRvIGRpc2FtYmlndWF0ZVxcclxcblxcdCAqIHdoaWNoIGVkZ2VzIGFyZSBhY3RpdmUgZnJvbSB0aGUgZm91ciBmZXRjaGVkIG9uZXMuXFxyXFxuXFx0ICovXFxyXFxuXFxyXFxuXFx0dmVjMiBlID0gdmVjMigwLjAsIDEuMCk7XFxyXFxuXFxyXFxuXFx0Zm9yKGludCBpID0gMDsgaSA8IFNNQUFfTUFYX1NFQVJDSF9TVEVQU19JTlQ7ICsraSkge1xcclxcblxcclxcblxcdFxcdGUgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHRleENvb3JkLCAwLjApLnJnO1xcclxcblxcdFxcdHRleENvb3JkIC09IHZlYzIoMi4wLCAwLjApICogdGV4ZWxTaXplO1xcclxcblxcclxcblxcdFxcdGlmKCEodGV4Q29vcmQueCA+IGVuZCAmJiBlLmcgPiAwLjgyODEgJiYgZS5yID09IDAuMCkpIHsgYnJlYWs7IH1cXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8gQ29ycmVjdCB0aGUgcHJldmlvdXNseSBhcHBsaWVkIG9mZnNldCAoLTAuMjUsIC0wLjEyNSkuXFxyXFxuXFx0dGV4Q29vcmQueCArPSAwLjI1ICogdGV4ZWxTaXplLng7XFxyXFxuXFxyXFxuXFx0Ly8gVGhlIHNlYXJjaGVzIGFyZSBiaWFzZWQgYnkgMSwgc28gYWRqdXN0IHRoZSBjb29yZHMgYWNjb3JkaW5nbHkuXFxyXFxuXFx0dGV4Q29vcmQueCArPSB0ZXhlbFNpemUueDtcXHJcXG5cXHJcXG5cXHQvLyBEaXNhbWJpZ3VhdGUgdGhlIGxlbmd0aCBhZGRlZCBieSB0aGUgbGFzdCBzdGVwLlxcclxcblxcdHRleENvb3JkLnggKz0gMi4wICogdGV4ZWxTaXplLng7IC8vIFVuZG8gbGFzdCBzdGVwLlxcclxcblxcdHRleENvb3JkLnggLT0gdGV4ZWxTaXplLnggKiBzZWFyY2hMZW5ndGgoZSwgMC4wLCAwLjUpO1xcclxcblxcclxcblxcdHJldHVybiB0ZXhDb29yZC54O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCBzZWFyY2hYUmlnaHQodmVjMiB0ZXhDb29yZCwgZmxvYXQgZW5kKSB7XFxyXFxuXFxyXFxuXFx0dmVjMiBlID0gdmVjMigwLjAsIDEuMCk7XFxyXFxuXFxyXFxuXFx0Zm9yKGludCBpID0gMDsgaSA8IFNNQUFfTUFYX1NFQVJDSF9TVEVQU19JTlQ7ICsraSkge1xcclxcblxcclxcblxcdFxcdGUgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHRleENvb3JkLCAwLjApLnJnO1xcclxcblxcdFxcdHRleENvb3JkICs9IHZlYzIoMi4wLCAwLjApICogdGV4ZWxTaXplO1xcclxcblxcclxcblxcdFxcdGlmKCEodGV4Q29vcmQueCA8IGVuZCAmJiBlLmcgPiAwLjgyODEgJiYgZS5yID09IDAuMCkpIHsgYnJlYWs7IH1cXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0dGV4Q29vcmQueCAtPSAwLjI1ICogdGV4ZWxTaXplLng7XFxyXFxuXFx0dGV4Q29vcmQueCAtPSB0ZXhlbFNpemUueDtcXHJcXG5cXHR0ZXhDb29yZC54IC09IDIuMCAqIHRleGVsU2l6ZS54O1xcclxcblxcdHRleENvb3JkLnggKz0gdGV4ZWxTaXplLnggKiBzZWFyY2hMZW5ndGgoZSwgMC41LCAwLjUpO1xcclxcblxcclxcblxcdHJldHVybiB0ZXhDb29yZC54O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCBzZWFyY2hZVXAodmVjMiB0ZXhDb29yZCwgZmxvYXQgZW5kKSB7XFxyXFxuXFxyXFxuXFx0dmVjMiBlID0gdmVjMigxLjAsIDAuMCk7XFxyXFxuXFxyXFxuXFx0Zm9yKGludCBpID0gMDsgaSA8IFNNQUFfTUFYX1NFQVJDSF9TVEVQU19JTlQ7ICsraSkge1xcclxcblxcclxcblxcdFxcdGUgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHRleENvb3JkLCAwLjApLnJnO1xcclxcblxcdFxcdHRleENvb3JkICs9IHZlYzIoMC4wLCAyLjApICogdGV4ZWxTaXplOyAvLyBDaGFuZ2VkIHNpZ24uXFxyXFxuXFxyXFxuXFx0XFx0aWYoISh0ZXhDb29yZC55ID4gZW5kICYmIGUuciA+IDAuODI4MSAmJiBlLmcgPT0gMC4wKSkgeyBicmVhazsgfVxcclxcblxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHR0ZXhDb29yZC55IC09IDAuMjUgKiB0ZXhlbFNpemUueTsgLy8gQ2hhbmdlZCBzaWduLlxcclxcblxcdHRleENvb3JkLnkgLT0gdGV4ZWxTaXplLnk7IC8vIENoYW5nZWQgc2lnbi5cXHJcXG5cXHR0ZXhDb29yZC55IC09IDIuMCAqIHRleGVsU2l6ZS55OyAvLyBDaGFuZ2VkIHNpZ24uXFxyXFxuXFx0dGV4Q29vcmQueSArPSB0ZXhlbFNpemUueSAqIHNlYXJjaExlbmd0aChlLmdyLCAwLjAsIDAuNSk7IC8vIENoYW5nZWQgc2lnbi5cXHJcXG5cXHJcXG5cXHRyZXR1cm4gdGV4Q29vcmQueTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgc2VhcmNoWURvd24odmVjMiB0ZXhDb29yZCwgZmxvYXQgZW5kKSB7XFxyXFxuXFxyXFxuXFx0dmVjMiBlID0gdmVjMigxLjAsIDAuMCk7XFxyXFxuXFxyXFxuXFx0Zm9yKGludCBpID0gMDsgaSA8IFNNQUFfTUFYX1NFQVJDSF9TVEVQU19JTlQ7ICsraSApIHtcXHJcXG5cXHJcXG5cXHRcXHRlID0gdGV4dHVyZTJEKHREaWZmdXNlLCB0ZXhDb29yZCwgMC4wKS5yZztcXHJcXG5cXHRcXHR0ZXhDb29yZCAtPSB2ZWMyKDAuMCwgMi4wKSAqIHRleGVsU2l6ZTsgLy8gQ2hhbmdlZCBzaWduLlxcclxcblxcclxcblxcdFxcdGlmKCEodGV4Q29vcmQueSA8IGVuZCAmJiBlLnIgPiAwLjgyODEgJiYgZS5nID09IDAuMCkpIHsgYnJlYWs7IH1cXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0dGV4Q29vcmQueSArPSAwLjI1ICogdGV4ZWxTaXplLnk7IC8vIENoYW5nZWQgc2lnbi5cXHJcXG5cXHR0ZXhDb29yZC55ICs9IHRleGVsU2l6ZS55OyAvLyBDaGFuZ2VkIHNpZ24uXFxyXFxuXFx0dGV4Q29vcmQueSArPSAyLjAgKiB0ZXhlbFNpemUueTsgLy8gQ2hhbmdlZCBzaWduLlxcclxcblxcdHRleENvb3JkLnkgLT0gdGV4ZWxTaXplLnkgKiBzZWFyY2hMZW5ndGgoZS5nciwgMC41LCAwLjUpOyAvLyBDaGFuZ2VkIHNpZ24uXFxyXFxuXFxyXFxuXFx0cmV0dXJuIHRleENvb3JkLnk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbnZlYzIgYXJlYSh2ZWMyIGRpc3QsIGZsb2F0IGUxLCBmbG9hdCBlMiwgZmxvYXQgb2Zmc2V0KSB7XFxyXFxuXFxyXFxuXFx0Ly8gUm91bmRpbmcgcHJldmVudHMgcHJlY2lzaW9uIGVycm9ycyBvZiBiaWxpbmVhciBmaWx0ZXJpbmcuXFxyXFxuXFx0dmVjMiB0ZXhDb29yZCA9IFNNQUFfQVJFQVRFWF9NQVhfRElTVEFOQ0UgKiByb3VuZCg0LjAgKiB2ZWMyKGUxLCBlMikpICsgZGlzdDtcXHJcXG5cXHJcXG5cXHQvLyBTY2FsZSBhbmQgYmlhcyBmb3IgdGV4ZWwgc3BhY2UgdHJhbnNsYXRpb24uXFxyXFxuXFx0dGV4Q29vcmQgPSBTTUFBX0FSRUFURVhfUElYRUxfU0laRSAqIHRleENvb3JkICsgKDAuNSAqIFNNQUFfQVJFQVRFWF9QSVhFTF9TSVpFKTtcXHJcXG5cXHJcXG5cXHQvLyBNb3ZlIHRvIHByb3BlciBwbGFjZSwgYWNjb3JkaW5nIHRvIHRoZSBzdWJwaXhlbCBvZmZzZXQuXFxyXFxuXFx0dGV4Q29vcmQueSArPSBTTUFBX0FSRUFURVhfU1VCVEVYX1NJWkUgKiBvZmZzZXQ7XFxyXFxuXFxyXFxuXFx0cmV0dXJuIHRleHR1cmUyRCh0QXJlYSwgdGV4Q29vcmQsIDAuMCkucmc7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2ZWM0IHdlaWdodHMgPSB2ZWM0KDAuMCk7XFxyXFxuXFx0dmVjNCBzdWJzYW1wbGVJbmRpY2VzID0gdmVjNCgwLjApO1xcclxcblxcdHZlYzIgZSA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KS5yZztcXHJcXG5cXHJcXG5cXHRpZihlLmcgPiAwLjApIHtcXHJcXG5cXHJcXG5cXHRcXHQvLyBFZGdlIGF0IG5vcnRoLlxcclxcblxcdFxcdHZlYzIgZDtcXHJcXG5cXHJcXG5cXHRcXHQvLyBGaW5kIHRoZSBkaXN0YW5jZSB0byB0aGUgbGVmdC5cXHJcXG5cXHRcXHR2ZWMyIGNvb3JkcztcXHJcXG5cXHRcXHRjb29yZHMueCA9IHNlYXJjaFhMZWZ0KHZPZmZzZXRbMF0ueHksIHZPZmZzZXRbMl0ueCk7XFxyXFxuXFx0XFx0Y29vcmRzLnkgPSB2T2Zmc2V0WzFdLnk7IC8vIHZPZmZzZXRbMV0ueSA9IHZVdi55IC0gMC4yNSAqIHRleGVsU2l6ZS55IChAQ1JPU1NJTkdfT0ZGU0VUKVxcclxcblxcdFxcdGQueCA9IGNvb3Jkcy54O1xcclxcblxcclxcblxcdFxcdC8qIE5vdyBmZXRjaCB0aGUgbGVmdCBjcm9zc2luZyBlZGdlcywgdHdvIGF0IGEgdGltZSB1c2luZyBiaWxpbmVhciBmaWx0ZXJpbmcuXFxyXFxuXFx0XFx0ICogU2FtcGxpbmcgYXQgLTAuMjUgKHNlZSBAQ1JPU1NJTkdfT0ZGU0VUKSBlbmFibGVzIHRvIGRpc2Nlcm4gd2hhdCB2YWx1ZSBlYWNoIGVkZ2UgaGFzLlxcclxcblxcdFxcdCAqL1xcclxcblxcclxcblxcdFxcdGZsb2F0IGUxID0gdGV4dHVyZTJEKHREaWZmdXNlLCBjb29yZHMsIDAuMCkucjtcXHJcXG5cXHJcXG5cXHRcXHQvLyBGaW5kIHRoZSBkaXN0YW5jZSB0byB0aGUgcmlnaHQuXFxyXFxuXFx0XFx0Y29vcmRzLnggPSBzZWFyY2hYUmlnaHQodk9mZnNldFswXS56dywgdk9mZnNldFsyXS55KTtcXHJcXG5cXHRcXHRkLnkgPSBjb29yZHMueDtcXHJcXG5cXHJcXG5cXHRcXHQvLyBUcmFuc2xhdGUgZGlzdGFuY2VzIHRvIHBpeGVsIHVuaXRzIGZvciBiZXR0ZXIgaW50ZXJsZWF2ZSBhcml0aG1ldGljIGFuZCBtZW1vcnkgYWNjZXNzZXMuXFxyXFxuXFx0XFx0ZCA9IGQgLyB0ZXhlbFNpemUueCAtIHZQaXhDb29yZC54O1xcclxcblxcclxcblxcdFxcdC8vIFRoZSBhcmVhIGJlbG93IG5lZWRzIGEgc3FydCwgYXMgdGhlIGFyZWFzIHRleHR1cmUgaXMgY29tcHJlc3NlZCBxdWFkcmF0aWNhbGx5LlxcclxcblxcdFxcdHZlYzIgc3FydEQgPSBzcXJ0KGFicyhkKSk7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gRmV0Y2ggdGhlIHJpZ2h0IGNyb3NzaW5nIGVkZ2VzLlxcclxcblxcdFxcdGNvb3Jkcy55IC09IHRleGVsU2l6ZS55OyAvLyBXZWJHTCBwb3J0IG5vdGU6IEFkZGVkLlxcclxcblxcdFxcdGZsb2F0IGUyID0gc2FtcGxlTGV2ZWxaZXJvT2Zmc2V0KHREaWZmdXNlLCBjb29yZHMsIGl2ZWMyKDEsIDApKS5yO1xcclxcblxcclxcblxcdFxcdC8vIFBhdHRlcm4gcmVjb2duaXNlZCwgbm93IGdldCB0aGUgYWN0dWFsIGFyZWEuXFxyXFxuXFx0XFx0d2VpZ2h0cy5yZyA9IGFyZWEoc3FydEQsIGUxLCBlMiwgc3Vic2FtcGxlSW5kaWNlcy55KTtcXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0aWYoZS5yID4gMC4wKSB7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gRWRnZSBhdCB3ZXN0LlxcclxcblxcdFxcdHZlYzIgZDtcXHJcXG5cXHJcXG5cXHRcXHQvLyBGaW5kIHRoZSBkaXN0YW5jZSB0byB0aGUgdG9wLlxcclxcblxcdFxcdHZlYzIgY29vcmRzO1xcclxcblxcclxcblxcdFxcdGNvb3Jkcy55ID0gc2VhcmNoWVVwKHZPZmZzZXRbMV0ueHksIHZPZmZzZXRbMl0ueik7XFxyXFxuXFx0XFx0Y29vcmRzLnggPSB2T2Zmc2V0WzBdLng7IC8vIHZPZmZzZXRbMV0ueCA9IHZVdi54IC0gMC4yNSAqIHRleGVsU2l6ZS54O1xcclxcblxcdFxcdGQueCA9IGNvb3Jkcy55O1xcclxcblxcclxcblxcdFxcdC8vIEZldGNoIHRoZSB0b3AgY3Jvc3NpbmcgZWRnZXMuXFxyXFxuXFx0XFx0ZmxvYXQgZTEgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIGNvb3JkcywgMC4wKS5nO1xcclxcblxcclxcblxcdFxcdC8vIEZpbmQgdGhlIGRpc3RhbmNlIHRvIHRoZSBib3R0b20uXFxyXFxuXFx0XFx0Y29vcmRzLnkgPSBzZWFyY2hZRG93bih2T2Zmc2V0WzFdLnp3LCB2T2Zmc2V0WzJdLncpO1xcclxcblxcdFxcdGQueSA9IGNvb3Jkcy55O1xcclxcblxcclxcblxcdFxcdC8vIERpc3RhbmNlcyBpbiBwaXhlbCB1bml0cy5cXHJcXG5cXHRcXHRkID0gZCAvIHRleGVsU2l6ZS55IC0gdlBpeENvb3JkLnk7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gVGhlIGFyZWEgYmVsb3cgbmVlZHMgYSBzcXJ0LCBhcyB0aGUgYXJlYXMgdGV4dHVyZSBpcyBjb21wcmVzc2VkIHF1YWRyYXRpY2FsbHkuXFxyXFxuXFx0XFx0dmVjMiBzcXJ0RCA9IHNxcnQoYWJzKGQpKTtcXHJcXG5cXHJcXG5cXHRcXHQvLyBGZXRjaCB0aGUgYm90dG9tIGNyb3NzaW5nIGVkZ2VzLlxcclxcblxcdFxcdGNvb3Jkcy55IC09IHRleGVsU2l6ZS55OyAvLyBXZWJHTCBwb3J0IG5vdGU6IEFkZGVkLlxcclxcblxcdFxcdGZsb2F0IGUyID0gc2FtcGxlTGV2ZWxaZXJvT2Zmc2V0KHREaWZmdXNlLCBjb29yZHMsIGl2ZWMyKDAsIDEpKS5nO1xcclxcblxcclxcblxcdFxcdC8vIEdldCB0aGUgYXJlYSBmb3IgdGhpcyBkaXJlY3Rpb24uXFxyXFxuXFx0XFx0d2VpZ2h0cy5iYSA9IGFyZWEoc3FydEQsIGUxLCBlMiwgc3Vic2FtcGxlSW5kaWNlcy54KTtcXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Z2xfRnJhZ0NvbG9yID0gd2VpZ2h0cztcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcbmNvbnN0IHZlcnRleCA9IFwidW5pZm9ybSB2ZWMyIHRleGVsU2l6ZTtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzIgdlV2O1xcclxcbnZhcnlpbmcgdmVjNCB2T2Zmc2V0WzNdO1xcclxcbnZhcnlpbmcgdmVjMiB2UGl4Q29vcmQ7XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZVdiA9IHV2O1xcclxcblxcclxcblxcdHZQaXhDb29yZCA9IHV2IC8gdGV4ZWxTaXplO1xcclxcblxcclxcblxcdC8vIE9mZnNldHMgZm9yIHRoZSBzZWFyY2hlcyAoc2VlIEBQU0VVRE9fR0FUSEVSNCkuXFxyXFxuXFx0dk9mZnNldFswXSA9IHV2Lnh5eHkgKyB0ZXhlbFNpemUueHl4eSAqIHZlYzQoLTAuMjUsIDAuMTI1LCAxLjI1LCAwLjEyNSk7IC8vIENoYW5nZWQgc2lnbiBpbiBZIGFuZCBXIGNvbXBvbmVudHMuXFxyXFxuXFx0dk9mZnNldFsxXSA9IHV2Lnh5eHkgKyB0ZXhlbFNpemUueHl4eSAqIHZlYzQoLTAuMTI1LCAwLjI1LCAtMC4xMjUsIC0xLjI1KTsgLy9DaGFuZ2VkIHNpZ24gaW4gWSBhbmQgVyBjb21wb25lbnRzLlxcclxcblxcclxcblxcdC8vIFRoaXMgaW5kaWNhdGVzIHRoZSBlbmRzIG9mIHRoZSBsb29wcy5cXHJcXG5cXHR2T2Zmc2V0WzJdID0gdmVjNCh2T2Zmc2V0WzBdLnh6LCB2T2Zmc2V0WzFdLnl3KSArIHZlYzQoLTIuMCwgMi4wLCAtMi4wLCAyLjApICogdGV4ZWxTaXplLnh4eXkgKiBTTUFBX01BWF9TRUFSQ0hfU1RFUFNfRkxPQVQ7XFxyXFxuXFxyXFxuXFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcblxyXG4vKipcclxuICogU3VicGl4ZWwgTW9ycGhvbG9naWNhbCBBbnRpYWxpYXNpbmcuXHJcbiAqXHJcbiAqIFRoaXMgbWF0ZXJpYWwgY29tcHV0ZXMgd2VpZ2h0cyBmb3IgZGV0ZWN0ZWQgZWRnZXMuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFNNQUFXZWlnaHRzTWF0ZXJpYWwgZXh0ZW5kcyBTaGFkZXJNYXRlcmlhbCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgU01BQSB3ZWlnaHRzIG1hdGVyaWFsLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtWZWN0b3IyfSBbdGV4ZWxTaXplXSAtIFRoZSBhYnNvbHV0ZSBzY3JlZW4gdGV4ZWwgc2l6ZS5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3IodGV4ZWxTaXplID0gbmV3IFZlY3RvcjIoKSkge1xyXG5cclxuXHRcdHN1cGVyKHtcclxuXHJcblx0XHRcdHR5cGU6IFwiU01BQVdlaWdodHNNYXRlcmlhbFwiLFxyXG5cclxuXHRcdFx0ZGVmaW5lczoge1xyXG5cclxuXHRcdFx0XHRTTUFBX01BWF9TRUFSQ0hfU1RFUFNfSU5UOiBcIjhcIixcclxuXHRcdFx0XHRTTUFBX01BWF9TRUFSQ0hfU1RFUFNfRkxPQVQ6IFwiOC4wXCIsXHJcblxyXG5cdFx0XHRcdFNNQUFfQVJFQVRFWF9NQVhfRElTVEFOQ0U6IFwiMTYuMFwiLFxyXG5cclxuXHRcdFx0XHRTTUFBX0FSRUFURVhfUElYRUxfU0laRTogXCIoMS4wIC8gdmVjMigxNjAuMCwgNTYwLjApKVwiLFxyXG5cdFx0XHRcdFNNQUFfQVJFQVRFWF9TVUJURVhfU0laRTogXCIoMS4wIC8gNy4wKVwiXHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFx0dERpZmZ1c2U6IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cdFx0XHRcdHRBcmVhOiBuZXcgVW5pZm9ybShudWxsKSxcclxuXHRcdFx0XHR0U2VhcmNoOiBuZXcgVW5pZm9ybShudWxsKSxcclxuXHRcdFx0XHR0ZXhlbFNpemU6IG5ldyBVbmlmb3JtKHRleGVsU2l6ZSlcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogZnJhZ21lbnQsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogdmVydGV4LFxyXG5cclxuXHRcdFx0ZGVwdGhXcml0ZTogZmFsc2UsXHJcblx0XHRcdGRlcHRoVGVzdDogZmFsc2VcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBhcmVhIHBhdHRlcm4gcmVjb2duaXRpb24gaW1hZ2UuIEVuY29kZWQgYXMgYmFzZTY0LlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtTdHJpbmd9XHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmFyZWFJbWFnZSA9IGFyZWFJbWFnZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBzZWFyY2ggaW1hZ2UuIEVuY29kZWQgYXMgYmFzZTY0LlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtTdHJpbmd9XHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnNlYXJjaEltYWdlID0gc2VhcmNoSW1hZ2U7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyTWF0ZXJpYWwsIFVuaWZvcm0gfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IGZyYWdtZW50ID0gXCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcXHJcXG51bmlmb3JtIGZsb2F0IG1pZGRsZUdyZXk7XFxyXFxudW5pZm9ybSBmbG9hdCBtYXhMdW1pbmFuY2U7XFxyXFxuXFxyXFxuI2lmZGVmIEFEQVBURURfTFVNSU5BTkNFXFxyXFxuXFxyXFxuXFx0dW5pZm9ybSBzYW1wbGVyMkQgbHVtaW5hbmNlTWFwO1xcclxcblxcclxcbiNlbHNlXFxyXFxuXFxyXFxuXFx0dW5pZm9ybSBmbG9hdCBhdmVyYWdlTHVtaW5hbmNlO1xcclxcblxcclxcbiNlbmRpZlxcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxuY29uc3QgdmVjMyBMVU1fQ09FRkYgPSB2ZWMzKDAuMjk5LCAwLjU4NywgMC4xMTQpO1xcclxcbmNvbnN0IHZlYzIgQ0VOVEVSID0gdmVjMigwLjUsIDAuNSk7XFxyXFxuXFxyXFxudmVjMyB0b25lTWFwKHZlYzMgYykge1xcclxcblxcclxcblxcdCNpZmRlZiBBREFQVEVEX0xVTUlOQU5DRVxcclxcblxcclxcblxcdFxcdC8vIEdldCB0aGUgY2FsY3VsYXRlZCBhdmVyYWdlIGx1bWluYW5jZS5cXHJcXG5cXHRcXHRmbG9hdCBsdW1BdmcgPSB0ZXh0dXJlMkQobHVtaW5hbmNlTWFwLCBDRU5URVIpLnI7XFxyXFxuXFxyXFxuXFx0I2Vsc2VcXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBsdW1BdmcgPSBhdmVyYWdlTHVtaW5hbmNlO1xcclxcblxcclxcblxcdCNlbmRpZlxcclxcblxcclxcblxcdC8vIENhbGN1bGF0ZSB0aGUgbHVtaW5hbmNlIG9mIHRoZSBjdXJyZW50IHBpeGVsLlxcclxcblxcdGZsb2F0IGx1bVBpeGVsID0gZG90KGMsIExVTV9DT0VGRik7XFxyXFxuXFxyXFxuXFx0Ly8gQXBwbHkgdGhlIG1vZGlmaWVkIG9wZXJhdG9yIChSZWluaGFyZCBFcS4gNCkuXFxyXFxuXFx0ZmxvYXQgbHVtU2NhbGVkID0gKGx1bVBpeGVsICogbWlkZGxlR3JleSkgLyBsdW1Bdmc7XFxyXFxuXFxyXFxuXFx0ZmxvYXQgbHVtQ29tcHJlc3NlZCA9IChsdW1TY2FsZWQgKiAoMS4wICsgKGx1bVNjYWxlZCAvIChtYXhMdW1pbmFuY2UgKiBtYXhMdW1pbmFuY2UpKSkpIC8gKDEuMCArIGx1bVNjYWxlZCk7XFxyXFxuXFxyXFxuXFx0cmV0dXJuIGx1bUNvbXByZXNzZWQgKiBjO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dmVjNCB0ZXhlbCA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KTtcXHJcXG5cXHRnbF9GcmFnQ29sb3IgPSB2ZWM0KHRvbmVNYXAodGV4ZWwucmdiKSwgdGV4ZWwuYSk7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5jb25zdCB2ZXJ0ZXggPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZVdiA9IHV2O1xcclxcblxcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5cclxuLyoqXHJcbiAqIEZ1bGwtc2NyZWVuIHRvbmUtbWFwcGluZyBzaGFkZXIgbWF0ZXJpYWwuXHJcbiAqXHJcbiAqIFJlZmVyZW5jZTpcclxuICogIGh0dHA6Ly93d3cuY2lzLnJpdC5lZHUvcGVvcGxlL2ZhY3VsdHkvZmVyd2VyZGEvcHVibGljYXRpb25zL3NpZzAyX3BhcGVyLnBkZlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBUb25lTWFwcGluZ01hdGVyaWFsIGV4dGVuZHMgU2hhZGVyTWF0ZXJpYWwge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IHRvbmUgbWFwcGluZyBtYXRlcmlhbC5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0c3VwZXIoe1xyXG5cclxuXHRcdFx0dHlwZTogXCJUb25lTWFwcGluZ01hdGVyaWFsXCIsXHJcblxyXG5cdFx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XHR0RGlmZnVzZTogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0bHVtaW5hbmNlTWFwOiBuZXcgVW5pZm9ybShudWxsKSxcclxuXHRcdFx0XHRhdmVyYWdlTHVtaW5hbmNlOiBuZXcgVW5pZm9ybSgxLjApLFxyXG5cdFx0XHRcdG1heEx1bWluYW5jZTogbmV3IFVuaWZvcm0oMTYuMCksXHJcblx0XHRcdFx0bWlkZGxlR3JleTogbmV3IFVuaWZvcm0oMC42KVxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudCxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiB2ZXJ0ZXgsXHJcblxyXG5cdFx0XHRkZXB0aFdyaXRlOiBmYWxzZSxcclxuXHRcdFx0ZGVwdGhUZXN0OiBmYWxzZVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsIi8qKlxyXG4gKiBBIGNvbGxlY3Rpb24gb2Ygc2hhZGVyIG1hdGVyaWFscyB0aGF0IGFyZSB1c2VkIGluIHRoZSBwb3N0IHByb2Nlc3NpbmcgcGFzc2VzLlxyXG4gKlxyXG4gKiBAbW9kdWxlIHBvc3Rwcm9jZXNzaW5nL21hdGVyaWFsc1xyXG4gKi9cclxuXHJcbmV4cG9ydCB7IEFkYXB0aXZlTHVtaW5vc2l0eU1hdGVyaWFsIH0gZnJvbSBcIi4vYWRhcHRpdmUtbHVtaW5vc2l0eS5qc1wiO1xyXG5leHBvcnQgeyBCb2tlaE1hdGVyaWFsIH0gZnJvbSBcIi4vYm9rZWguanNcIjtcclxuZXhwb3J0IHsgQm9rZWgyTWF0ZXJpYWwgfSBmcm9tIFwiLi9ib2tlaDIuanNcIjtcclxuZXhwb3J0IHsgQ29tYmluZU1hdGVyaWFsIH0gZnJvbSBcIi4vY29tYmluZS5qc1wiO1xyXG5leHBvcnQgeyBDb252b2x1dGlvbk1hdGVyaWFsLCBLZXJuZWxTaXplIH0gZnJvbSBcIi4vY29udm9sdXRpb24uanNcIjtcclxuZXhwb3J0IHsgQ29weU1hdGVyaWFsIH0gZnJvbSBcIi4vY29weS5qc1wiO1xyXG5leHBvcnQgeyBEZXB0aE1hdGVyaWFsIH0gZnJvbSBcIi4vZGVwdGguanNcIjtcclxuZXhwb3J0IHsgRG90U2NyZWVuTWF0ZXJpYWwgfSBmcm9tIFwiLi9kb3Qtc2NyZWVuLmpzXCI7XHJcbmV4cG9ydCB7IEZpbG1NYXRlcmlhbCB9IGZyb20gXCIuL2ZpbG0uanNcIjtcclxuZXhwb3J0IHsgR2xpdGNoTWF0ZXJpYWwgfSBmcm9tIFwiLi9nbGl0Y2guanNcIjtcclxuZXhwb3J0IHsgR29kUmF5c01hdGVyaWFsIH0gZnJvbSBcIi4vZ29kLXJheXMuanNcIjtcclxuZXhwb3J0IHsgTHVtaW5vc2l0eU1hdGVyaWFsIH0gZnJvbSBcIi4vbHVtaW5vc2l0eS5qc1wiO1xyXG5leHBvcnQgeyBQaXhlbGF0aW9uTWF0ZXJpYWwgfSBmcm9tIFwiLi9waXhlbGF0aW9uLmpzXCI7XHJcbmV4cG9ydCB7IFNob2NrV2F2ZU1hdGVyaWFsIH0gZnJvbSBcIi4vc2hvY2std2F2ZS5qc1wiO1xyXG5leHBvcnQgeyBTTUFBQmxlbmRNYXRlcmlhbCB9IGZyb20gXCIuL3NtYWEtYmxlbmQuanNcIjtcclxuZXhwb3J0IHsgU01BQUNvbG9yRWRnZXNNYXRlcmlhbCB9IGZyb20gXCIuL3NtYWEtY29sb3ItZWRnZXMuanNcIjtcclxuZXhwb3J0IHsgU01BQVdlaWdodHNNYXRlcmlhbCB9IGZyb20gXCIuL3NtYWEtd2VpZ2h0cy5qc1wiO1xyXG5leHBvcnQgeyBUb25lTWFwcGluZ01hdGVyaWFsIH0gZnJvbSBcIi4vdG9uZS1tYXBwaW5nLmpzXCI7XHJcbiIsImltcG9ydCB7IFNjZW5lLCBNZXNoLCBPcnRob2dyYXBoaWNDYW1lcmEsIFBsYW5lQnVmZmVyR2VvbWV0cnkgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbi8qKlxyXG4gKiBBbiBhYnN0cmFjdCBwYXNzLlxyXG4gKlxyXG4gKiBQYXNzZXMgdGhhdCBkbyBub3QgcmVseSBvbiB0aGUgZGVwdGggYnVmZmVyIHNob3VsZCBleHBsaWNpdGx5IGRpc2FibGUgdGhlXHJcbiAqIGRlcHRoIHRlc3QgYW5kIGRlcHRoIHdyaXRlIGluIHRoZWlyIHJlc3BlY3RpdmUgc2hhZGVyIG1hdGVyaWFscy5cclxuICpcclxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGEge0BsaW5rIFBhc3MjZGlzcG9zZX0gbWV0aG9kIHRoYXQgZnJlZXMgbWVtb3J5IG9uXHJcbiAqIGRlbWFuZC5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgUGFzcyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgcGFzcy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7U2NlbmV9IFtzY2VuZV0gLSBUaGUgc2NlbmUgdG8gcmVuZGVyLlxyXG5cdCAqIEBwYXJhbSB7Q2FtZXJhfSBbY2FtZXJhXSAtIFRoZSBjYW1lcmEuXHJcblx0ICogQHBhcmFtIHtNZXNofSBbcXVhZF0gLSBBIHF1YWQgdGhhdCBmaWxscyB0aGUgc2NyZWVuIHRvIHJlbmRlciAyRCBmaWx0ZXIgZWZmZWN0cy4gU2V0IHRoaXMgdG8gbnVsbCwgaWYgeW91IGRvbid0IG5lZWQgaXQgKHNlZSB7QGxpbmsgUmVuZGVyUGFzc30pLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHNjZW5lID0gbmV3IFNjZW5lKCksXHJcblx0XHRjYW1lcmEgPSBuZXcgT3J0aG9ncmFwaGljQ2FtZXJhKC0xLCAxLCAxLCAtMSwgMCwgMSksXHJcblx0XHRxdWFkID0gbmV3IE1lc2gobmV3IFBsYW5lQnVmZmVyR2VvbWV0cnkoMiwgMiksIG51bGwpXHJcblx0KSB7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgbmFtZSBvZiB0aGlzIHBhc3MuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1N0cmluZ31cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiUGFzc1wiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIHNjZW5lIHRvIHJlbmRlci5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7U2NlbmV9XHJcblx0XHQgKiBAcHJvdGVjdGVkXHJcblx0XHQgKiBAZGVmYXVsdCBuZXcgU2NlbmUoKVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIGNhbWVyYS5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Q2FtZXJhfVxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICogQGRlZmF1bHQgbmV3IE9ydGhvZ3JhcGhpY0NhbWVyYSgtMSwgMSwgMSwgLTEsIDAsIDEpXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgcXVhZCBtZXNoIHRoYXQgZmlsbHMgdGhlIHNjcmVlbi5cclxuXHRcdCAqXHJcblx0XHQgKiBBc3NpZ24geW91ciBzaGFkZXIgbWF0ZXJpYWwgdG8gdGhpcyBtZXNoIVxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtNZXNofVxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICogQGRlZmF1bHQgbmV3IE1lc2gobmV3IFBsYW5lQnVmZmVyR2VvbWV0cnkoMiwgMiksIG51bGwpXHJcblx0XHQgKiBAZXhhbXBsZSB0aGlzLnF1YWQubWF0ZXJpYWwgPSB0aGlzLm15TWF0ZXJpYWw7XHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnF1YWQgPSBxdWFkO1xyXG5cclxuXHRcdGlmKHRoaXMucXVhZCAhPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0dGhpcy5xdWFkLmZydXN0dW1DdWxsZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdGlmKHRoaXMuc2NlbmUgIT09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5xdWFkKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgcmVhZCBhbmQgd3JpdGUgYnVmZmVycyBzaG91bGQgYmUgc3dhcHBlZCBhZnRlciB0aGlzXHJcblx0XHQgKiBwYXNzIGhhcyBmaW5pc2hlZCByZW5kZXJpbmcuXHJcblx0XHQgKlxyXG5cdFx0ICogU2V0IHRoaXMgdG8gdHJ1ZSBpZiB0aGlzIHBhc3MgcmVuZGVycyB0byB0aGUgd3JpdGUgYnVmZmVyIHNvIHRoYXQgYVxyXG5cdFx0ICogZm9sbG93aW5nIHBhc3MgY2FuIGZpbmQgdGhlIHJlc3VsdCBpbiB0aGUgcmVhZCBidWZmZXIuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XHJcblx0XHQgKiBAZGVmYXVsdCBmYWxzZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSBmYWxzZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEVuYWJsZWQgZmxhZy5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Qm9vbGVhbn1cclxuXHRcdCAqIEBkZWZhdWx0IHRydWVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZW5kZXIgdG8gc2NyZWVuIGZsYWcuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XHJcblx0XHQgKiBAZGVmYXVsdCBmYWxzZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUb1NjcmVlbiA9IGZhbHNlO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIGVmZmVjdC5cclxuXHQgKlxyXG5cdCAqIFRoaXMgaXMgYW4gYWJzdHJhY3QgbWV0aG9kIHRoYXQgbXVzdCBiZSBvdmVycmlkZGVuLlxyXG5cdCAqXHJcblx0ICogQGFic3RyYWN0XHJcblx0ICogQHRocm93cyB7RXJyb3J9IEFuIGVycm9yIGlzIHRocm93biBpZiB0aGUgbWV0aG9kIGlzIG5vdCBvdmVycmlkZGVuLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gcmVhZEJ1ZmZlciAtIEEgcmVhZCBidWZmZXIuIENvbnRhaW5zIHRoZSByZXN1bHQgb2YgdGhlIHByZXZpb3VzIHBhc3MuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gd3JpdGVCdWZmZXIgLSBBIHdyaXRlIGJ1ZmZlci4gTm9ybWFsbHkgdXNlZCBhcyB0aGUgcmVuZGVyIHRhcmdldCB3aGVuIHRoZSByZWFkIGJ1ZmZlciBpcyB1c2VkIGFzIGlucHV0LlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbZGVsdGFdIC0gVGhlIGRlbHRhIHRpbWUuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbbWFza0FjdGl2ZV0gLSBJbmRpY2F0ZXMgd2hldGhlciBhIHN0ZW5jaWwgdGVzdCBtYXNrIGlzIGFjdGl2ZSBvciBub3QuXHJcblx0ICovXHJcblxyXG5cdHJlbmRlcihyZW5kZXJlciwgcmVhZEJ1ZmZlciwgd3JpdGVCdWZmZXIsIGRlbHRhLCBtYXNrQWN0aXZlKSB7XHJcblxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUmVuZGVyIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQhXCIpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZXMgdGhpcyBwYXNzIHdpdGggdGhlIHJlbmRlcmVyJ3Mgc2l6ZS5cclxuXHQgKlxyXG5cdCAqIFlvdSBtYXkgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaW4gY2FzZSB5b3Ugd2FudCB0byBiZSBpbmZvcm1lZCBhYm91dCB0aGUgbWFpblxyXG5cdCAqIHJlbmRlciBzaXplLlxyXG5cdCAqXHJcblx0ICogVGhlIHtAbGluayBFZmZlY3RDb21wb3Nlcn0gY2FsbHMgdGhpcyBtZXRob2QgYmVmb3JlIHRoaXMgcGFzcyBpc1xyXG5cdCAqIGluaXRpYWxpc2VkIGFuZCBldmVyeSB0aW1lIGl0cyBvd24gc2l6ZSBpcyB1cGRhdGVkLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIC0gVGhlIHJlbmRlcmVyJ3Mgd2lkdGguXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCAtIFRoZSByZW5kZXJlcidzIGhlaWdodC5cclxuXHQgKiBAZXhhbXBsZSB0aGlzLm15UmVuZGVyVGFyZ2V0LnNldFNpemUod2lkdGgsIGhlaWdodCk7XHJcblx0ICovXHJcblxyXG5cdHNldFNpemUod2lkdGgsIGhlaWdodCkge31cclxuXHJcblx0LyoqXHJcblx0ICogUGVyZm9ybXMgaW5pdGlhbGlzYXRpb24gdGFza3MuXHJcblx0ICpcclxuXHQgKiBCeSBvdmVycmlkaW5nIHRoaXMgbWV0aG9kIHlvdSBnYWluIGFjY2VzcyB0byB0aGUgcmVuZGVyZXIuIFlvdSdsbCBhbHNvIGJlXHJcblx0ICogYWJsZSB0byBjb25maWd1cmUgeW91ciBjdXN0b20gcmVuZGVyIHRhcmdldHMgdG8gdXNlIHRoZSBhcHByb3ByaWF0ZSBmb3JtYXRcclxuXHQgKiAoUkdCIG9yIFJHQkEpLlxyXG5cdCAqXHJcblx0ICogVGhlIHByb3ZpZGVkIHJlbmRlcmVyIGNhbiBiZSB1c2VkIHRvIHdhcm0gdXAgc3BlY2lhbCBvZmYtc2NyZWVuIHJlbmRlclxyXG5cdCAqIHRhcmdldHMgYnkgcGVyZm9ybWluZyBhIHByZWxpbWluYXJ5IHJlbmRlciBvcGVyYXRpb24uXHJcblx0ICpcclxuXHQgKiBUaGUge0BsaW5rIEVmZmVjdENvbXBvc2VyfSBjYWxscyB0aGlzIG1ldGhvZCB3aGVuIHRoaXMgcGFzcyBpcyBhZGRlZCB0byBpdHNcclxuXHQgKiBxdWV1ZS5cclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgaW5pdGlhbGlzZVxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBhbHBoYSAtIFdoZXRoZXIgdGhlIHJlbmRlcmVyIHVzZXMgdGhlIGFscGhhIGNoYW5uZWwgb3Igbm90LlxyXG5cdCAqIEBleGFtcGxlIGlmKCFhbHBoYSkgeyB0aGlzLm15UmVuZGVyVGFyZ2V0LnRleHR1cmUuZm9ybWF0ID0gUkdCRm9ybWF0OyB9XHJcblx0ICovXHJcblxyXG5cdGluaXRpYWxpc2UocmVuZGVyZXIsIGFscGhhKSB7fVxyXG5cclxuXHQvKipcclxuXHQgKiBQZXJmb3JtcyBhIHNoYWxsb3cgc2VhcmNoIGZvciBwcm9wZXJ0aWVzIHRoYXQgZGVmaW5lIGEgZGlzcG9zZSBtZXRob2QgYW5kXHJcblx0ICogZGVsZXRlcyB0aGVtLiBUaGUgcGFzcyB3aWxsIGJlIGlub3BlcmF0aXZlIGFmdGVyIHRoaXMgbWV0aG9kIHdhcyBjYWxsZWQhXHJcblx0ICpcclxuXHQgKiBEaXNwb3NhYmxlIG9iamVjdHM6XHJcblx0ICogIC0gcmVuZGVyIHRhcmdldHNcclxuXHQgKiAgLSBtYXRlcmlhbHNcclxuXHQgKiAgLSB0ZXh0dXJlc1xyXG5cdCAqXHJcblx0ICogVGhlIHtAbGluayBFZmZlY3RDb21wb3Nlcn0gY2FsbHMgdGhpcyBtZXRob2Qgd2hlbiBpdCBpcyBiZWluZyBkZXN0cm95ZWQuXHJcblx0ICogWW91IG1heSwgaG93ZXZlciwgdXNlIGl0IGluZGVwZW5kZW50bHkgdG8gZnJlZSBtZW1vcnkgd2hlbiB5b3UgYXJlIGNlcnRhaW5cclxuXHQgKiB0aGF0IHlvdSBkb24ndCBuZWVkIHRoaXMgcGFzcyBhbnltb3JlLlxyXG5cdCAqL1xyXG5cclxuXHRkaXNwb3NlKCkge1xyXG5cclxuXHRcdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcclxuXHJcblx0XHRsZXQga2V5O1xyXG5cclxuXHRcdGZvcihrZXkgb2Yga2V5cykge1xyXG5cclxuXHRcdFx0aWYodGhpc1trZXldICE9PSBudWxsICYmIHR5cGVvZiB0aGlzW2tleV0uZGlzcG9zZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblxyXG5cdFx0XHRcdHRoaXNba2V5XS5kaXNwb3NlKCk7XHJcblx0XHRcdFx0dGhpc1trZXldID0gbnVsbDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTGluZWFyRmlsdGVyLCBSR0JGb3JtYXQsIFdlYkdMUmVuZGVyVGFyZ2V0IH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IENvbnZvbHV0aW9uTWF0ZXJpYWwsIEtlcm5lbFNpemUgfSBmcm9tIFwiLi4vbWF0ZXJpYWxzXCI7XHJcbmltcG9ydCB7IFBhc3MgfSBmcm9tIFwiLi9wYXNzLmpzXCI7XHJcblxyXG4vKipcclxuICogQSBibHVyIHBhc3MuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsdXJQYXNzIGV4dGVuZHMgUGFzcyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgYmx1ciBwYXNzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yZXNvbHV0aW9uU2NhbGU9MC41XSAtIFRoZSByZW5kZXIgdGV4dHVyZSByZXNvbHV0aW9uIHNjYWxlLCByZWxhdGl2ZSB0byB0aGUgc2NyZWVuIHJlbmRlciBzaXplLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5rZXJuZWxTaXplPUtlcm5lbFNpemUuTEFSR0VdIC0gVGhlIGJsdXIga2VybmVsIHNpemUuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xyXG5cclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgbmFtZSBvZiB0aGlzIHBhc3MuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5hbWUgPSBcIkJsdXJQYXNzXCI7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGlzIHBhc3MgcmVuZGVycyB0byB0aGUgd3JpdGUgYnVmZmVyLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSB0cnVlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSByZW5kZXIgdGFyZ2V0LlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtXZWJHTFJlbmRlclRhcmdldH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldFggPSBuZXcgV2ViR0xSZW5kZXJUYXJnZXQoMSwgMSwge1xyXG5cdFx0XHRtaW5GaWx0ZXI6IExpbmVhckZpbHRlcixcclxuXHRcdFx0bWFnRmlsdGVyOiBMaW5lYXJGaWx0ZXIsXHJcblx0XHRcdHN0ZW5jaWxCdWZmZXI6IGZhbHNlLFxyXG5cdFx0XHRkZXB0aEJ1ZmZlcjogZmFsc2VcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0WC50ZXh0dXJlLm5hbWUgPSBcIkJsdXIuVGFyZ2V0WFwiO1xyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRYLnRleHR1cmUuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIHNlY29uZCByZW5kZXIgdGFyZ2V0LlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtXZWJHTFJlbmRlclRhcmdldH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldFkgPSB0aGlzLnJlbmRlclRhcmdldFguY2xvbmUoKTtcclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldFkudGV4dHVyZS5uYW1lID0gXCJCbHVyLlRhcmdldFlcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSByZXNvbHV0aW9uIHNjYWxlLlxyXG5cdFx0ICpcclxuXHRcdCAqIFlvdSBuZWVkIHRvIGNhbGwge0BsaW5rIEVmZmVjdENvbXBvc2VyI3NldFNpemV9IGFmdGVyIGNoYW5naW5nIHRoaXNcclxuXHRcdCAqIHZhbHVlLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0XHQgKiBAZGVmYXVsdCAwLjVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMucmVzb2x1dGlvblNjYWxlID0gKG9wdGlvbnMucmVzb2x1dGlvblNjYWxlICE9PSB1bmRlZmluZWQpID8gb3B0aW9ucy5yZXNvbHV0aW9uU2NhbGUgOiAwLjU7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIGNvbnZvbHV0aW9uIHNoYWRlciBtYXRlcmlhbC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Q29udm9sdXRpb25NYXRlcmlhbH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmNvbnZvbHV0aW9uTWF0ZXJpYWwgPSBuZXcgQ29udm9sdXRpb25NYXRlcmlhbCgpO1xyXG5cclxuXHRcdHRoaXMua2VybmVsU2l6ZSA9IG9wdGlvbnMua2VybmVsU2l6ZTtcclxuXHJcblx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSB0aGlzLmNvbnZvbHV0aW9uTWF0ZXJpYWw7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIGFic29sdXRlIHdpZHRoIG9mIHRoZSBpbnRlcm5hbCByZW5kZXIgdGFyZ2V0cy5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0ICovXHJcblxyXG5cdGdldCB3aWR0aCgpIHsgcmV0dXJuIHRoaXMucmVuZGVyVGFyZ2V0WC53aWR0aDsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgYWJzb2x1dGUgaGVpZ2h0IG9mIHRoZSBpbnRlcm5hbCByZW5kZXIgdGFyZ2V0cy5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0ICovXHJcblxyXG5cdGdldCBoZWlnaHQoKSB7IHJldHVybiB0aGlzLnJlbmRlclRhcmdldFguaGVpZ2h0OyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBrZXJuZWwgc2l6ZS5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtLZXJuZWxTaXplfVxyXG5cdCAqIEBkZWZhdWx0IEtlcm5lbFNpemUuTEFSR0VcclxuXHQgKi9cclxuXHJcblx0Z2V0IGtlcm5lbFNpemUoKSB7IHJldHVybiB0aGlzLmNvbnZvbHV0aW9uTWF0ZXJpYWwua2VybmVsU2l6ZTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7S2VybmVsU2l6ZX1cclxuXHQgKi9cclxuXHJcblx0c2V0IGtlcm5lbFNpemUoeCA9IEtlcm5lbFNpemUuTEFSR0UpIHsgdGhpcy5jb252b2x1dGlvbk1hdGVyaWFsLmtlcm5lbFNpemUgPSB4OyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEJsdXJzIHRoZSByZWFkIGJ1ZmZlci5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gcmVhZEJ1ZmZlciAtIFRoZSByZWFkIGJ1ZmZlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSB3cml0ZUJ1ZmZlciAtIFRoZSB3cml0ZSBidWZmZXIuXHJcblx0ICovXHJcblxyXG5cdHJlbmRlcihyZW5kZXJlciwgcmVhZEJ1ZmZlciwgd3JpdGVCdWZmZXIpIHtcclxuXHJcblx0XHRjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmU7XHJcblx0XHRjb25zdCBjYW1lcmEgPSB0aGlzLmNhbWVyYTtcclxuXHJcblx0XHRjb25zdCByZW5kZXJUYXJnZXRYID0gdGhpcy5yZW5kZXJUYXJnZXRYO1xyXG5cdFx0Y29uc3QgcmVuZGVyVGFyZ2V0WSA9IHRoaXMucmVuZGVyVGFyZ2V0WTtcclxuXHJcblx0XHRjb25zdCBtYXRlcmlhbCA9IHRoaXMuY29udm9sdXRpb25NYXRlcmlhbDtcclxuXHRcdGNvbnN0IHVuaWZvcm1zID0gbWF0ZXJpYWwudW5pZm9ybXM7XHJcblx0XHRjb25zdCBrZXJuZWwgPSBtYXRlcmlhbC5nZXRLZXJuZWwoKTtcclxuXHJcblx0XHRsZXQgbGFzdFJUID0gcmVhZEJ1ZmZlcjtcclxuXHRcdGxldCBkZXN0UlQ7XHJcblx0XHRsZXQgaSwgbDtcclxuXHJcblx0XHQvLyBBcHBseSB0aGUgbXVsdGktcGFzcyBibHVyLlxyXG5cdFx0Zm9yKGkgPSAwLCBsID0ga2VybmVsLmxlbmd0aCAtIDE7IGkgPCBsOyArK2kpIHtcclxuXHJcblx0XHRcdC8vIEFsdGVybmF0ZSBiZXR3ZWVuIHRhcmdldHMuXHJcblx0XHRcdGRlc3RSVCA9ICgoaSAlIDIpID09PSAwKSA/IHJlbmRlclRhcmdldFggOiByZW5kZXJUYXJnZXRZO1xyXG5cclxuXHRcdFx0dW5pZm9ybXMua2VybmVsLnZhbHVlID0ga2VybmVsW2ldO1xyXG5cdFx0XHR1bmlmb3Jtcy50RGlmZnVzZS52YWx1ZSA9IGxhc3RSVC50ZXh0dXJlO1xyXG5cdFx0XHRyZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSwgZGVzdFJUKTtcclxuXHJcblx0XHRcdGxhc3RSVCA9IGRlc3RSVDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dW5pZm9ybXMua2VybmVsLnZhbHVlID0ga2VybmVsW2ldO1xyXG5cdFx0dW5pZm9ybXMudERpZmZ1c2UudmFsdWUgPSBsYXN0UlQudGV4dHVyZTtcclxuXHRcdHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhLCB0aGlzLnJlbmRlclRvU2NyZWVuID8gbnVsbCA6IHdyaXRlQnVmZmVyKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGp1c3RzIHRoZSBmb3JtYXQgb2YgdGhlIHJlbmRlciB0YXJnZXRzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSByZW5kZXJlciAtIFRoZSByZW5kZXJlci5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGFscGhhIC0gV2hldGhlciB0aGUgcmVuZGVyZXIgdXNlcyB0aGUgYWxwaGEgY2hhbm5lbCBvciBub3QuXHJcblx0ICovXHJcblxyXG5cdGluaXRpYWxpc2UocmVuZGVyZXIsIGFscGhhKSB7XHJcblxyXG5cdFx0aWYoIWFscGhhKSB7XHJcblxyXG5cdFx0XHR0aGlzLnJlbmRlclRhcmdldFgudGV4dHVyZS5mb3JtYXQgPSBSR0JGb3JtYXQ7XHJcblx0XHRcdHRoaXMucmVuZGVyVGFyZ2V0WS50ZXh0dXJlLmZvcm1hdCA9IFJHQkZvcm1hdDtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlcyB0aGlzIHBhc3Mgd2l0aCB0aGUgcmVuZGVyZXIncyBzaXplLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIC0gVGhlIHdpZHRoLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgLSBUaGUgaGVpZ2h0LlxyXG5cdCAqL1xyXG5cclxuXHRzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuXHJcblx0XHR3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3Iod2lkdGggKiB0aGlzLnJlc29sdXRpb25TY2FsZSkpO1xyXG5cdFx0aGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihoZWlnaHQgKiB0aGlzLnJlc29sdXRpb25TY2FsZSkpO1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0WC5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRZLnNldFNpemUod2lkdGgsIGhlaWdodCk7XHJcblxyXG5cdFx0dGhpcy5jb252b2x1dGlvbk1hdGVyaWFsLnNldFRleGVsU2l6ZSgxLjAgLyB3aWR0aCwgMS4wIC8gaGVpZ2h0KTtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBMaW5lYXJGaWx0ZXIsIFJHQkZvcm1hdCwgV2ViR0xSZW5kZXJUYXJnZXQgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgQ29tYmluZU1hdGVyaWFsLCBLZXJuZWxTaXplLCBMdW1pbm9zaXR5TWF0ZXJpYWwgfSBmcm9tIFwiLi4vbWF0ZXJpYWxzXCI7XHJcbmltcG9ydCB7IEJsdXJQYXNzIH0gZnJvbSBcIi4vYmx1ci5qc1wiO1xyXG5pbXBvcnQgeyBQYXNzIH0gZnJvbSBcIi4vcGFzcy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEEgYmxvb20gcGFzcy5cclxuICpcclxuICogVGhpcyBwYXNzIHJlbmRlcnMgYSBzY2VuZSB3aXRoIHN1cGVyaW1wb3NlZCBibHVyIGJ5IHV0aWxpc2luZyB0aGUgZmFzdCBLYXdhc2VcclxuICogY29udm9sdXRpb24gYXBwcm9hY2guXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsb29tUGFzcyBleHRlbmRzIFBhc3Mge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGJsb29tIHBhc3MuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gVGhlIG9wdGlvbnMuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJlc29sdXRpb25TY2FsZT0wLjVdIC0gVGhlIHJlbmRlciB0ZXh0dXJlIHJlc29sdXRpb24gc2NhbGUsIHJlbGF0aXZlIHRvIHRoZSBzY3JlZW4gcmVuZGVyIHNpemUuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmtlcm5lbFNpemU9S2VybmVsU2l6ZS5MQVJHRV0gLSBUaGUgYmx1ciBrZXJuZWwgc2l6ZS5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuaW50ZW5zaXR5PTEuMF0gLSBUaGUgc3RyZW5ndGggb2YgdGhlIGJsb29tIGVmZmVjdC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZGlzdGluY3Rpb249MS4wXSAtIFRoZSBsdW1pbmFuY2UgZGlzdGluY3Rpb24gZmFjdG9yLiBSYWlzZSB0aGlzIHZhbHVlIHRvIGJyaW5nIG91dCB0aGUgYnJpZ2h0ZXIgZWxlbWVudHMgaW4gdGhlIHNjZW5lLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5zY3JlZW5Nb2RlPXRydWVdIC0gV2hldGhlciB0aGUgc2NyZWVuIGJsZW5kIG1vZGUgc2hvdWxkIGJlIHVzZWQgZm9yIGNvbWJpbmluZyB0aGUgYmxvb20gdGV4dHVyZSB3aXRoIHRoZSBzY2VuZSBjb2xvcnMuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xyXG5cclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgbmFtZSBvZiB0aGlzIHBhc3MuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5hbWUgPSBcIkJsb29tUGFzc1wiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhpcyBwYXNzIHJlbmRlcnMgdG8gdGhlIHdyaXRlIGJ1ZmZlci5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgYmx1ciBwYXNzLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtCbHVyUGFzc31cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmJsdXJQYXNzID0gbmV3IEJsdXJQYXNzKG9wdGlvbnMpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSByZW5kZXIgdGFyZ2V0LlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtXZWJHTFJlbmRlclRhcmdldH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldCA9IG5ldyBXZWJHTFJlbmRlclRhcmdldCgxLCAxLCB7XHJcblx0XHRcdG1pbkZpbHRlcjogTGluZWFyRmlsdGVyLFxyXG5cdFx0XHRtYWdGaWx0ZXI6IExpbmVhckZpbHRlcixcclxuXHRcdFx0c3RlbmNpbEJ1ZmZlcjogZmFsc2UsXHJcblx0XHRcdGRlcHRoQnVmZmVyOiBmYWxzZVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXQudGV4dHVyZS5uYW1lID0gXCJCbG9vbS5UYXJnZXRcIjtcclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0LnRleHR1cmUuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIGNvbWJpbmUgc2hhZGVyIG1hdGVyaWFsLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtDb21iaW5lTWF0ZXJpYWx9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5jb21iaW5lTWF0ZXJpYWwgPSBuZXcgQ29tYmluZU1hdGVyaWFsKChvcHRpb25zLnNjcmVlbk1vZGUgIT09IHVuZGVmaW5lZCkgPyBvcHRpb25zLnNjcmVlbk1vZGUgOiB0cnVlKTtcclxuXHJcblx0XHR0aGlzLmludGVuc2l0eSA9IG9wdGlvbnMuaW50ZW5zaXR5O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBsdW1pbm9zaXR5IHNoYWRlciBtYXRlcmlhbC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7THVtaW5vc2l0eU1hdGVyaWFsfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubHVtaW5vc2l0eU1hdGVyaWFsID0gbmV3IEx1bWlub3NpdHlNYXRlcmlhbCh0cnVlKTtcclxuXHJcblx0XHR0aGlzLmRpc3RpbmN0aW9uID0gb3B0aW9ucy5kaXN0aW5jdGlvbjtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgcmVzb2x1dGlvbiBzY2FsZS5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0ICogQGRlZmF1bHQgMC41XHJcblx0ICovXHJcblxyXG5cdGdldCByZXNvbHV0aW9uU2NhbGUoKSB7IHJldHVybiB0aGlzLmJsdXJQYXNzLnJlc29sdXRpb25TY2FsZTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBZb3UgbmVlZCB0byBjYWxsIHtAbGluayBFZmZlY3RDb21wb3NlciNzZXRTaXplfSBhZnRlciBjaGFuZ2luZyB0aGlzIHZhbHVlLlxyXG5cdCAqXHJcblx0ICogQHR5cGUge051bWJlcn1cclxuXHQgKi9cclxuXHJcblx0c2V0IHJlc29sdXRpb25TY2FsZSh4ID0gMC41KSB7IHRoaXMuYmx1clBhc3MucmVzb2x1dGlvblNjYWxlID0geDsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgYmx1ciBrZXJuZWwgc2l6ZS5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtLZXJuZWxTaXplfVxyXG5cdCAqIEBkZWZhdWx0IEtlcm5lbFNpemUuTEFSR0VcclxuXHQgKi9cclxuXHJcblx0Z2V0IGtlcm5lbFNpemUoKSB7IHJldHVybiB0aGlzLmJsdXJQYXNzLmtlcm5lbFNpemU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0tlcm5lbFNpemV9XHJcblx0ICovXHJcblxyXG5cdHNldCBrZXJuZWxTaXplKHggPSBLZXJuZWxTaXplLkxBUkdFKSB7IHRoaXMuYmx1clBhc3Mua2VybmVsU2l6ZSA9IHg7IH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIG92ZXJhbGwgaW50ZW5zaXR5IG9mIHRoZSBlZmZlY3QuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdCAqIEBkZWZhdWx0IDEuMFxyXG5cdCAqL1xyXG5cclxuXHRnZXQgaW50ZW5zaXR5KCkgeyByZXR1cm4gdGhpcy5jb21iaW5lTWF0ZXJpYWwudW5pZm9ybXMub3BhY2l0eTIudmFsdWU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge051bWJlcn1cclxuXHQgKi9cclxuXHJcblx0c2V0IGludGVuc2l0eSh4ID0gMS4wKSB7IHRoaXMuY29tYmluZU1hdGVyaWFsLnVuaWZvcm1zLm9wYWNpdHkyLnZhbHVlID0geDsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbHVtaW5hbmNlIGRpc3RpbmN0aW9uIGZhY3Rvci5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0ICogQGRlZmF1bHQgMS4wXHJcblx0ICovXHJcblxyXG5cdGdldCBkaXN0aW5jdGlvbigpIHsgcmV0dXJuIHRoaXMubHVtaW5vc2l0eU1hdGVyaWFsLnVuaWZvcm1zLmRpc3RpbmN0aW9uLnZhbHVlOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0ICovXHJcblxyXG5cdHNldCBkaXN0aW5jdGlvbih4ID0gMS4wKSB7IHRoaXMubHVtaW5vc2l0eU1hdGVyaWFsLnVuaWZvcm1zLmRpc3RpbmN0aW9uLnZhbHVlID0geDsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBlZmZlY3QuXHJcblx0ICpcclxuXHQgKiBFeHRyYWN0cyBhIGx1bWluYW5jZSBtYXAgZnJvbSB0aGUgcmVhZCBidWZmZXIsIGJsdXJzIGl0IGFuZCBjb21iaW5lcyBpdFxyXG5cdCAqIHdpdGggdGhlIHJlYWQgYnVmZmVyLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSByZW5kZXJlciAtIFRoZSByZW5kZXJlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSByZWFkQnVmZmVyIC0gVGhlIHJlYWQgYnVmZmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHdyaXRlQnVmZmVyIC0gVGhlIHdyaXRlIGJ1ZmZlci5cclxuXHQgKi9cclxuXHJcblx0cmVuZGVyKHJlbmRlcmVyLCByZWFkQnVmZmVyLCB3cml0ZUJ1ZmZlcikge1xyXG5cclxuXHRcdGNvbnN0IHF1YWQgPSB0aGlzLnF1YWQ7XHJcblx0XHRjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmU7XHJcblx0XHRjb25zdCBjYW1lcmEgPSB0aGlzLmNhbWVyYTtcclxuXHRcdGNvbnN0IGJsdXJQYXNzID0gdGhpcy5ibHVyUGFzcztcclxuXHJcblx0XHRjb25zdCBsdW1pbm9zaXR5TWF0ZXJpYWwgPSB0aGlzLmx1bWlub3NpdHlNYXRlcmlhbDtcclxuXHRcdGNvbnN0IGNvbWJpbmVNYXRlcmlhbCA9IHRoaXMuY29tYmluZU1hdGVyaWFsO1xyXG5cdFx0Y29uc3QgcmVuZGVyVGFyZ2V0ID0gdGhpcy5yZW5kZXJUYXJnZXQ7XHJcblxyXG5cdFx0Ly8gTHVtaW5hbmNlIGZpbHRlci5cclxuXHRcdHF1YWQubWF0ZXJpYWwgPSBsdW1pbm9zaXR5TWF0ZXJpYWw7XHJcblx0XHRsdW1pbm9zaXR5TWF0ZXJpYWwudW5pZm9ybXMudERpZmZ1c2UudmFsdWUgPSByZWFkQnVmZmVyLnRleHR1cmU7XHJcblx0XHRyZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSwgcmVuZGVyVGFyZ2V0KTtcclxuXHJcblx0XHQvLyBDb252b2x1dGlvbiBwaGFzZS5cclxuXHRcdGJsdXJQYXNzLnJlbmRlcihyZW5kZXJlciwgcmVuZGVyVGFyZ2V0LCByZW5kZXJUYXJnZXQpO1xyXG5cclxuXHRcdC8vIFJlbmRlciB0aGUgb3JpZ2luYWwgc2NlbmUgd2l0aCBzdXBlcmltcG9zZWQgYmx1ci5cclxuXHRcdHF1YWQubWF0ZXJpYWwgPSBjb21iaW5lTWF0ZXJpYWw7XHJcblx0XHRjb21iaW5lTWF0ZXJpYWwudW5pZm9ybXMudGV4dHVyZTEudmFsdWUgPSByZWFkQnVmZmVyLnRleHR1cmU7XHJcblx0XHRjb21iaW5lTWF0ZXJpYWwudW5pZm9ybXMudGV4dHVyZTIudmFsdWUgPSByZW5kZXJUYXJnZXQudGV4dHVyZTtcclxuXHJcblx0XHRyZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSwgdGhpcy5yZW5kZXJUb1NjcmVlbiA/IG51bGwgOiB3cml0ZUJ1ZmZlcik7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRqdXN0cyB0aGUgZm9ybWF0IG9mIHRoZSByZW5kZXIgdGFyZ2V0cy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBhbHBoYSAtIFdoZXRoZXIgdGhlIHJlbmRlcmVyIHVzZXMgdGhlIGFscGhhIGNoYW5uZWwgb3Igbm90LlxyXG5cdCAqL1xyXG5cclxuXHRpbml0aWFsaXNlKHJlbmRlcmVyLCBhbHBoYSkge1xyXG5cclxuXHRcdHRoaXMuYmx1clBhc3MuaW5pdGlhbGlzZShyZW5kZXJlciwgYWxwaGEpO1xyXG5cclxuXHRcdGlmKCFhbHBoYSkgeyB0aGlzLnJlbmRlclRhcmdldC50ZXh0dXJlLmZvcm1hdCA9IFJHQkZvcm1hdDsgfVxyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZXMgdGhpcyBwYXNzIHdpdGggdGhlIHJlbmRlcmVyJ3Mgc2l6ZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCAtIFRoZSB3aWR0aC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0IC0gVGhlIGhlaWdodC5cclxuXHQgKi9cclxuXHJcblx0c2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcblxyXG5cdFx0dGhpcy5ibHVyUGFzcy5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuXHRcdHdpZHRoID0gdGhpcy5ibHVyUGFzcy53aWR0aDtcclxuXHRcdGhlaWdodCA9IHRoaXMuYmx1clBhc3MuaGVpZ2h0O1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0LnNldFNpemUod2lkdGgsIGhlaWdodCk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQm9rZWhNYXRlcmlhbCB9IGZyb20gXCIuLi9tYXRlcmlhbHNcIjtcclxuaW1wb3J0IHsgUGFzcyB9IGZyb20gXCIuL3Bhc3MuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBBIERlcHRoIG9mIEZpZWxkIChEb0YpIHBhc3MgdXNpbmcgYSBib2tlaCBzaGFkZXIuXHJcbiAqXHJcbiAqIFRoaXMgcGFzcyByZXF1aXJlcyBhIHtAbGluayBFZmZlY3RDb21wb3NlciNkZXB0aFRleHR1cmV9LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBCb2tlaFBhc3MgZXh0ZW5kcyBQYXNzIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBib2tlaCBwYXNzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQZXJzcGVjdGl2ZUNhbWVyYX0gY2FtZXJhIC0gVGhlIG1haW4gY2FtZXJhLiBVc2VkIHRvIG9idGFpbiB0aGUgYXNwZWN0IHJhdGlvIGFuZCB0aGUgbmVhciBhbmQgZmFyIHBsYW5lIHNldHRpbmdzLlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBBZGRpdGlvbmFsIHBhcmFtZXRlcnMuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZvY3VzPTEuMF0gLSBGb2N1cyBkaXN0YW5jZS5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuYXBlcnR1cmU9MC4wMjVdIC0gQ2FtZXJhIGFwZXJ0dXJlIHNjYWxlLiBCaWdnZXIgdmFsdWVzIGZvciBzaGFsbG93ZXIgZGVwdGggb2YgZmllbGQuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm1heEJsdXI9MS4wXSAtIE1heGltdW0gYmx1ciBzdHJlbmd0aC5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3IoY2FtZXJhLCBvcHRpb25zID0ge30pIHtcclxuXHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG5hbWUgb2YgdGhpcyBwYXNzLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uYW1lID0gXCJCb2tlaFBhc3NcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoaXMgcGFzcyByZW5kZXJzIHRvIHRoZSB3cml0ZSBidWZmZXIuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IHRydWU7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIGJva2VoIHNoYWRlciBtYXRlcmlhbC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Qm9rZWhNYXRlcmlhbH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmJva2VoTWF0ZXJpYWwgPSBuZXcgQm9rZWhNYXRlcmlhbChjYW1lcmEsIG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMucXVhZC5tYXRlcmlhbCA9IHRoaXMuYm9rZWhNYXRlcmlhbDtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBlZmZlY3QuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHJlYWRCdWZmZXIgLSBUaGUgcmVhZCBidWZmZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gd3JpdGVCdWZmZXIgLSBUaGUgd3JpdGUgYnVmZmVyLlxyXG5cdCAqL1xyXG5cclxuXHRyZW5kZXIocmVuZGVyZXIsIHJlYWRCdWZmZXIsIHdyaXRlQnVmZmVyKSB7XHJcblxyXG5cdFx0dGhpcy5ib2tlaE1hdGVyaWFsLnVuaWZvcm1zLnREaWZmdXNlLnZhbHVlID0gcmVhZEJ1ZmZlci50ZXh0dXJlO1xyXG5cdFx0dGhpcy5ib2tlaE1hdGVyaWFsLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IHJlYWRCdWZmZXIuZGVwdGhUZXh0dXJlO1xyXG5cclxuXHRcdHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgdGhpcy5yZW5kZXJUb1NjcmVlbiA/IG51bGwgOiB3cml0ZUJ1ZmZlcik7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlcyB0aGlzIHBhc3Mgd2l0aCB0aGUgcmVuZGVyZXIncyBzaXplLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIC0gVGhlIHdpZHRoLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgLSBUaGUgaGVpZ2h0LlxyXG5cdCAqL1xyXG5cclxuXHRzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuXHJcblx0XHR0aGlzLmJva2VoTWF0ZXJpYWwudW5pZm9ybXMuYXNwZWN0LnZhbHVlID0gd2lkdGggLyBoZWlnaHQ7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQm9rZWgyTWF0ZXJpYWwgfSBmcm9tIFwiLi4vbWF0ZXJpYWxzXCI7XHJcbmltcG9ydCB7IFBhc3MgfSBmcm9tIFwiLi9wYXNzLmpzXCI7XHJcblxyXG4vKipcclxuICogQW4gYWR2YW5jZWQgRGVwdGggb2YgRmllbGQgKERvRikgcGFzcy5cclxuICpcclxuICogWWllbGRzIG1vcmUgcmVhbGlzdGljIHJlc3VsdHMgYnV0IGlzIGFsc28gbW9yZSBkZW1hbmRpbmcuXHJcbiAqXHJcbiAqIFRoaXMgcGFzcyByZXF1aXJlcyBhIHtAbGluayBFZmZlY3RDb21wb3NlciNkZXB0aFRleHR1cmV9LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBCb2tlaDJQYXNzIGV4dGVuZHMgUGFzcyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgYm9rZWgyIHBhc3MuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1BlcnNwZWN0aXZlQ2FtZXJhfSBjYW1lcmEgLSBUaGUgbWFpbiBjYW1lcmEuIFVzZWQgdG8gb2J0YWluIHRoZSBmb2NhbCBsZW5ndGggYW5kIHRoZSBuZWFyIGFuZCBmYXIgcGxhbmUgc2V0dGluZ3MuXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIEFkZGl0aW9uYWwgcGFyYW1ldGVycy5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmluZ3M9M10gLSBUaGUgYW1vdW50IG9mIGJsdXIgcmluZ3MuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnNhbXBsZXM9NF0gLSBUaGUgYW1vdW50IG9mIHNhbXBsZXMgcGVyIHJpbmcuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5zaG93Rm9jdXM9ZmFsc2VdIC0gV2hldGhlciB0aGUgZm9jdXMgcG9pbnQgc2hvdWxkIGJlIGhpZ2hsaWdodGVkLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWFudWFsRG9GPWZhbHNlXSAtIEVuYWJsZXMgbWFudWFsIGRlcHRoIG9mIGZpZWxkIGJsdXIuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy52aWduZXR0ZT1mYWxzZV0gLSBFbmFibGVzIGEgdmlnbmV0dGUgZWZmZWN0LlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMucGVudGFnb249ZmFsc2VdIC0gRW5hYmxlIHRvIHVzZSBhIHBlbnRhZ29uYWwgc2hhcGUgdG8gc2NhbGUgZ2F0aGVyZWQgdGV4ZWxzLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuc2hhZGVyRm9jdXM9dHJ1ZV0gLSBEaXNhYmxlIGlmIHlvdSBjb21wdXRlIHlvdXIgb3duIGZvY2FsRGVwdGggKGluIG1ldHJlcyEpLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubm9pc2U9dHJ1ZV0gLSBEaXNhYmxlIGlmIHlvdSBkb24ndCB3YW50IG5vaXNlIHBhdHRlcm5zIGZvciBkaXRoZXJpbmcuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbWVyYSwgb3B0aW9ucyA9IHt9KSB7XHJcblxyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBuYW1lIG9mIHRoaXMgcGFzcy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiQm9rZWgyUGFzc1wiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhpcyBwYXNzIHJlbmRlcnMgdG8gdGhlIHdyaXRlIGJ1ZmZlci5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgYm9rZWggc2hhZGVyIG1hdGVyaWFsLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtCb2tlaE1hdGVyaWFsfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuYm9rZWhNYXRlcmlhbCA9IG5ldyBCb2tlaDJNYXRlcmlhbChjYW1lcmEsIG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMucXVhZC5tYXRlcmlhbCA9IHRoaXMuYm9rZWhNYXRlcmlhbDtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBlZmZlY3QuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHJlYWRCdWZmZXIgLSBUaGUgcmVhZCBidWZmZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gd3JpdGVCdWZmZXIgLSBUaGUgd3JpdGUgYnVmZmVyLlxyXG5cdCAqL1xyXG5cclxuXHRyZW5kZXIocmVuZGVyZXIsIHJlYWRCdWZmZXIsIHdyaXRlQnVmZmVyKSB7XHJcblxyXG5cdFx0dGhpcy5ib2tlaE1hdGVyaWFsLnVuaWZvcm1zLnREaWZmdXNlLnZhbHVlID0gcmVhZEJ1ZmZlci50ZXh0dXJlO1xyXG5cdFx0dGhpcy5ib2tlaE1hdGVyaWFsLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IHJlYWRCdWZmZXIuZGVwdGhUZXh0dXJlO1xyXG5cclxuXHRcdHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgdGhpcy5yZW5kZXJUb1NjcmVlbiA/IG51bGwgOiB3cml0ZUJ1ZmZlcik7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlcyB0aGlzIHBhc3Mgd2l0aCB0aGUgcmVuZGVyZXIncyBzaXplLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIC0gVGhlIHdpZHRoLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgLSBUaGUgaGVpZ2h0LlxyXG5cdCAqL1xyXG5cclxuXHRzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuXHJcblx0XHR0aGlzLmJva2VoTWF0ZXJpYWwuc2V0VGV4ZWxTaXplKDEuMCAvIHdpZHRoLCAxLjAgLyBoZWlnaHQpO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IFBhc3MgfSBmcm9tIFwiLi9wYXNzLmpzXCI7XHJcblxyXG4vKipcclxuICogVXNlZCBmb3Igc2F2aW5nIHRoZSBvcmlnaW5hbCBjbGVhciBjb2xvciBvZiB0aGUgcmVuZGVyZXIuXHJcbiAqXHJcbiAqIEB0eXBlIENvbG9yXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBzdGF0aWNcclxuICovXHJcblxyXG5jb25zdCBjb2xvciA9IG5ldyBDb2xvcigpO1xyXG5cclxuLyoqXHJcbiAqIEEgY2xlYXIgcGFzcy5cclxuICpcclxuICogWW91IGNhbiBwcmV2ZW50IHNwZWNpZmljIGJ1ZmZlcnMgZnJvbSBiZWluZyBjbGVhcmVkIGJ5IHNldHRpbmcgZWl0aGVyIHRoZVxyXG4gKiBhdXRvQ2xlYXJDb2xvciwgYXV0b0NsZWFyU3RlbmNpbCBvciBhdXRvQ2xlYXJEZXB0aCBwcm9wZXJ0aWVzIG9mIHRoZSByZW5kZXJlclxyXG4gKiB0byBmYWxzZS5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xlYXJQYXNzIGV4dGVuZHMgUGFzcyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgY2xlYXIgcGFzcy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBBZGRpdGlvbmFsIG9wdGlvbnMuXHJcblx0ICogQHBhcmFtIHtDb2xvcn0gW29wdGlvbnMuY2xlYXJDb2xvcj1udWxsXSAtIEFuIG92ZXJyaWRlIGNsZWFyIGNvbG9yLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5jbGVhckFscGhhPTAuMF0gLSBBbiBvdmVycmlkZSBjbGVhciBhbHBoYS5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XHJcblxyXG5cdFx0c3VwZXIobnVsbCwgbnVsbCwgbnVsbCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgbmFtZSBvZiB0aGlzIHBhc3MuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5hbWUgPSBcIkNsZWFyUGFzc1wiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ2xlYXIgY29sb3IuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0NvbG9yfVxyXG5cdFx0ICogQGRlZmF1bHQgbnVsbFxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5jbGVhckNvbG9yID0gKG9wdGlvbnMuY2xlYXJDb2xvciAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMuY2xlYXJDb2xvciA6IG51bGw7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDbGVhciBhbHBoYS5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdFx0ICogQGRlZmF1bHQgMC4wXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmNsZWFyQWxwaGEgPSAob3B0aW9ucy5jbGVhckFscGhhICE9PSB1bmRlZmluZWQpID8gb3B0aW9ucy5jbGVhckFscGhhIDogMC4wO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENsZWFycyB0aGUgcmVhZCBidWZmZXIgb3IgdGhlIHNjcmVlbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gcmVhZEJ1ZmZlciAtIFRoZSByZWFkIGJ1ZmZlci5cclxuXHQgKi9cclxuXHJcblx0cmVuZGVyKHJlbmRlcmVyLCByZWFkQnVmZmVyKSB7XHJcblxyXG5cdFx0Y29uc3QgY2xlYXJDb2xvciA9IHRoaXMuY2xlYXJDb2xvcjtcclxuXHJcblx0XHRsZXQgY2xlYXJBbHBoYTtcclxuXHJcblx0XHRpZihjbGVhckNvbG9yICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHRjb2xvci5jb3B5KHJlbmRlcmVyLmdldENsZWFyQ29sb3IoKSk7XHJcblx0XHRcdGNsZWFyQWxwaGEgPSByZW5kZXJlci5nZXRDbGVhckFscGhhKCk7XHJcblx0XHRcdHJlbmRlcmVyLnNldENsZWFyQ29sb3IoY2xlYXJDb2xvciwgdGhpcy5jbGVhckFscGhhKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmVuZGVyZXIuc2V0UmVuZGVyVGFyZ2V0KHRoaXMucmVuZGVyVG9TY3JlZW4gPyBudWxsIDogcmVhZEJ1ZmZlcik7XHJcblx0XHRyZW5kZXJlci5jbGVhcigpO1xyXG5cclxuXHRcdGlmKGNsZWFyQ29sb3IgIT09IG51bGwpIHtcclxuXHJcblx0XHRcdHJlbmRlcmVyLnNldENsZWFyQ29sb3IoY29sb3IsIGNsZWFyQWxwaGEpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBQYXNzIH0gZnJvbSBcIi4vcGFzcy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEEgcGFzcyB0aGF0IGRpc2FibGVzIHRoZSBzdGVuY2lsIG1hc2suXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIENsZWFyTWFza1Bhc3MgZXh0ZW5kcyBQYXNzIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBjbGVhciBtYXNrIHBhc3MuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHN1cGVyKG51bGwsIG51bGwsIG51bGwpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG5hbWUgb2YgdGhpcyBwYXNzLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uYW1lID0gXCJDbGVhck1hc2tQYXNzXCI7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRGlzYWJsZXMgdGhlIHN0ZW5jaWwgdGVzdC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICovXHJcblxyXG5cdHJlbmRlcihyZW5kZXJlcikge1xyXG5cclxuXHRcdHJlbmRlcmVyLnN0YXRlLmJ1ZmZlcnMuc3RlbmNpbC5zZXRUZXN0KGZhbHNlKTtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBEb3RTY3JlZW5NYXRlcmlhbCB9IGZyb20gXCIuLi9tYXRlcmlhbHNcIjtcclxuaW1wb3J0IHsgUGFzcyB9IGZyb20gXCIuL3Bhc3MuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGRvdCBzY3JlZW4gcGFzcy5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgRG90U2NyZWVuUGFzcyBleHRlbmRzIFBhc3Mge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGRvdCBzY3JlZW4gcGFzcy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBUaGUgb3B0aW9ucy5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuYW5nbGU9MS41N10gLSBUaGUgYW5nbGUgb2YgdGhlIHBhdHRlcm4uXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnNjYWxlPTEuMF0gLSBUaGUgc2NhbGUgb2YgdGhlIG92ZXJhbGwgZWZmZWN0LlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5pbnRlbnNpdHk9MS4wXSAtIFRoZSBpbnRlbnNpdHkgb2YgdGhlIGVmZmVjdC5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmF2ZXJhZ2U9ZmFsc2VdIC0gV2hldGhlciB0aGUgc2hhZGVyIHNob3VsZCBvdXRwdXQgYSBjb2xvdXIgYXZlcmFnZSAoYmxhY2sgYW5kIHdoaXRlKS5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XHJcblxyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBuYW1lIG9mIHRoaXMgcGFzcy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiRG90U2NyZWVuUGFzc1wiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhpcyBwYXNzIHJlbmRlcnMgdG8gdGhlIHdyaXRlIGJ1ZmZlci5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgZG90IHNjcmVlbiBzaGFkZXIgbWF0ZXJpYWwuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0RvdFNjcmVlbk1hdGVyaWFsfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubWF0ZXJpYWwgPSBuZXcgRG90U2NyZWVuTWF0ZXJpYWwob3B0aW9ucy5hdmVyYWdlKTtcclxuXHJcblx0XHRpZihvcHRpb25zLmFuZ2xlICE9PSB1bmRlZmluZWQpIHsgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5hbmdsZS52YWx1ZSA9IG9wdGlvbnMuYW5nbGU7IH1cclxuXHRcdGlmKG9wdGlvbnMuc2NhbGUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnNjYWxlLnZhbHVlID0gb3B0aW9ucy5zY2FsZTsgfVxyXG5cdFx0aWYob3B0aW9ucy5pbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgeyB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLmludGVuc2l0eS52YWx1ZSA9IG9wdGlvbnMuaW50ZW5zaXR5OyB9XHJcblxyXG5cdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBlZmZlY3QuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHJlYWRCdWZmZXIgLSBUaGUgcmVhZCBidWZmZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gd3JpdGVCdWZmZXIgLSBUaGUgd3JpdGUgYnVmZmVyLlxyXG5cdCAqL1xyXG5cclxuXHRyZW5kZXIocmVuZGVyZXIsIHJlYWRCdWZmZXIsIHdyaXRlQnVmZmVyKSB7XHJcblxyXG5cdFx0dGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50RGlmZnVzZS52YWx1ZSA9IHJlYWRCdWZmZXIudGV4dHVyZTtcclxuXHJcblx0XHRyZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyVG9TY3JlZW4gPyBudWxsIDogd3JpdGVCdWZmZXIpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZXMgdGhpcyBwYXNzIHdpdGggdGhlIHJlbmRlcmVyJ3Mgc2l6ZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCAtIFRoZSB3aWR0aC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gaGVnaHQgLSBUaGUgaGVpZ2h0LlxyXG5cdCAqL1xyXG5cclxuXHRzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuXHJcblx0XHR3aWR0aCA9IE1hdGgubWF4KDEsIHdpZHRoKTtcclxuXHRcdGhlaWdodCA9IE1hdGgubWF4KDEsIGhlaWdodCk7XHJcblxyXG5cdFx0dGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5vZmZzZXRSZXBlYXQudmFsdWUueiA9IHdpZHRoO1xyXG5cdFx0dGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5vZmZzZXRSZXBlYXQudmFsdWUudyA9IGhlaWdodDtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBEZXB0aE1hdGVyaWFsIH0gZnJvbSBcIi4uL21hdGVyaWFsc1wiO1xyXG5pbXBvcnQgeyBQYXNzIH0gZnJvbSBcIi4vcGFzcy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEEgZGVwdGggcGFzcy5cclxuICpcclxuICogUmVhZHMgdGhlIGRlcHRoIGZyb20gYSBkZXB0aCB0ZXh0dXJlIGFuZCByZW5kZXJzIGl0LlxyXG4gKlxyXG4gKiBUaGlzIHBhc3MgcmVxdWlyZXMgYSB7QGxpbmsgRWZmZWN0Q29tcG9zZXIjZGVwdGhUZXh0dXJlfS5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgRGVwdGhQYXNzIGV4dGVuZHMgUGFzcyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgZGVwdGggcGFzcy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UGVyc3BlY3RpdmVDYW1lcmF9IGNhbWVyYSAtIFRoZSBtYWluIGNhbWVyYS4gVXNlZCB0byBvYnRhaW4gdGhlIG5lYXIgYW5kIGZhciBwbGFuZSBzZXR0aW5ncy5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3IoY2FtZXJhKSB7XHJcblxyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBuYW1lIG9mIHRoaXMgcGFzcy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiRGVwdGhQYXNzXCI7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGlzIHBhc3MgcmVuZGVycyB0byB0aGUgd3JpdGUgYnVmZmVyLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSB0cnVlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBkZXB0aCBzaGFkZXIgbWF0ZXJpYWwuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0RlcHRoTWF0ZXJpYWx9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5kZXB0aE1hdGVyaWFsID0gbmV3IERlcHRoTWF0ZXJpYWwoY2FtZXJhKTtcclxuXHJcblx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSB0aGlzLmRlcHRoTWF0ZXJpYWw7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgZWZmZWN0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSByZW5kZXJlciAtIFRoZSByZW5kZXJlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSByZWFkQnVmZmVyIC0gVGhlIHJlYWQgYnVmZmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHdyaXRlQnVmZmVyIC0gVGhlIHdyaXRlIGJ1ZmZlci5cclxuXHQgKi9cclxuXHJcblx0cmVuZGVyKHJlbmRlcmVyLCByZWFkQnVmZmVyLCB3cml0ZUJ1ZmZlcikge1xyXG5cclxuXHRcdHRoaXMuZGVwdGhNYXRlcmlhbC51bmlmb3Jtcy50RGVwdGgudmFsdWUgPSByZWFkQnVmZmVyLmRlcHRoVGV4dHVyZTtcclxuXHJcblx0XHRyZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyVG9TY3JlZW4gPyBudWxsIDogd3JpdGVCdWZmZXIpO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEZpbG1NYXRlcmlhbCB9IGZyb20gXCIuLi9tYXRlcmlhbHNcIjtcclxuaW1wb3J0IHsgUGFzcyB9IGZyb20gXCIuL3Bhc3MuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGZpbG0gcGFzcy5cclxuICpcclxuICogUHJvdmlkZXMgdmFyaW91cyBjaW5lbWF0aWMgZWZmZWN0cy5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgRmlsbVBhc3MgZXh0ZW5kcyBQYXNzIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBmaWxtIHBhc3MuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gVGhlIG9wdGlvbnMuIERpc2FibGVkIGVmZmVjdHMgaGF2ZSBubyBuZWdhdGl2ZSBpbXBhY3Qgb24gcGVyZm9ybWFuY2UuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5ncmV5c2NhbGU9ZmFsc2VdIC0gRW5hYmxlIGdyZXlzY2FsZSBlZmZlY3QuIEdyZXlzY2FsZSBhbmQgc2VwaWEgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZS5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnNlcGlhPWZhbHNlXSAtIEVuYWJsZSBzZXBpYSBlZmZlY3QuIEdyZXlzY2FsZSBhbmQgc2VwaWEgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZS5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnZpZ25ldHRlPWZhbHNlXSAtIEFwcGx5IHZpZ25ldHRlIGVmZmVjdC5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmVza2lsPWZhbHNlXSAtIFVzZSBFc2tpbCdzIHZpZ25ldHRlIGFwcHJvYWNoLiBUaGUgZGVmYXVsdCBsb29rcyBkdXN0eSB3aGlsZSBFc2tpbCBsb29rcyBtb3JlIGJ1cm5lZCBvdXQuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5zY3JlZW5Nb2RlPXRydWVdIC0gV2hldGhlciB0aGUgc2NyZWVuIGJsZW5kIG1vZGUgc2hvdWxkIGJlIHVzZWQgZm9yIG5vaXNlIGFuZCBzY2FubGluZXMuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5zY2FubGluZXM9dHJ1ZV0gLSBTaG93IHNjYW5saW5lcy5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm5vaXNlPXRydWVdIC0gU2hvdyBub2lzZS1iYXNlZCBmaWxtIGdyYWluLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5ub2lzZUludGVuc2l0eT0wLjVdIC0gVGhlIG5vaXNlIGludGVuc2l0eS4gMC4wIHRvIDEuMC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuc2NhbmxpbmVJbnRlbnNpdHk9MC4wNV0gLSBUaGUgc2NhbmxpbmUgaW50ZW5zaXR5LiAwLjAgdG8gMS4wLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5zY2FubGluZURlbnNpdHk9MS4wXSAtIFRoZSBudW1iZXIgb2Ygc2NhbmxpbmVzIGluIHBlcmNlbnQsIHJlbGF0aXZlIHRvIHRoZSBzY3JlZW4gaGVpZ2h0LlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5ncmV5c2NhbGVJbnRlbnNpdHk9MS4wXSAtIFRoZSBpbnRlbnNpdHkgb2YgdGhlIGdyZXlzY2FsZSBlZmZlY3QuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnNlcGlhSW50ZW5zaXR5PTEuMF0gLSBUaGUgaW50ZW5zaXR5IG9mIHRoZSBzZXBpYSBlZmZlY3QuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnZpZ25ldHRlT2Zmc2V0PTEuMF0gLSBUaGUgb2Zmc2V0IG9mIHRoZSB2aWduZXR0ZSBlZmZlY3QuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnZpZ25ldHRlRGFya25lc3M9MS4wXSAtIFRoZSBkYXJrbmVzcyBvZiB0aGUgdmlnbmV0dGUgZWZmZWN0LlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcclxuXHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG5hbWUgb2YgdGhpcyBwYXNzLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uYW1lID0gXCJGaWxtUGFzc1wiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhpcyBwYXNzIHJlbmRlcnMgdG8gdGhlIHdyaXRlIGJ1ZmZlci5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEZpbG0gc2hhZGVyIG1hdGVyaWFsLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtGaWxtTWF0ZXJpYWx9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5tYXRlcmlhbCA9IG5ldyBGaWxtTWF0ZXJpYWwob3B0aW9ucyk7XHJcblxyXG5cdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBhbW91bnQgb2Ygc2NhbmxpbmVzIGluIHBlcmNlbnQsIHJlbGF0aXZlIHRvIHRoZSBzY3JlZW4gaGVpZ2h0LlxyXG5cdFx0ICpcclxuXHRcdCAqIFlvdSBuZWVkIHRvIGNhbGwge0BsaW5rIEVmZmVjdENvbXBvc2VyI3NldFNpemV9IGFmdGVyIGNoYW5naW5nIHRoaXNcclxuXHRcdCAqIHZhbHVlLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0XHQgKiBAZGVmYXVsdCAxLjI1XHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnNjYW5saW5lRGVuc2l0eSA9IChvcHRpb25zLnNjYW5saW5lRGVuc2l0eSA9PT0gdW5kZWZpbmVkKSA/IDEuMjUgOiBvcHRpb25zLnNjYW5saW5lRGVuc2l0eTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBlZmZlY3QuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHJlYWRCdWZmZXIgLSBUaGUgcmVhZCBidWZmZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gd3JpdGVCdWZmZXIgLSBUaGUgd3JpdGUgYnVmZmVyLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBkZWx0YSAtIFRoZSByZW5kZXIgZGVsdGEgdGltZS5cclxuXHQgKi9cclxuXHJcblx0cmVuZGVyKHJlbmRlcmVyLCByZWFkQnVmZmVyLCB3cml0ZUJ1ZmZlciwgZGVsdGEpIHtcclxuXHJcblx0XHR0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnREaWZmdXNlLnZhbHVlID0gcmVhZEJ1ZmZlci50ZXh0dXJlO1xyXG5cdFx0dGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50aW1lLnZhbHVlICs9IGRlbHRhO1xyXG5cclxuXHRcdHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgdGhpcy5yZW5kZXJUb1NjcmVlbiA/IG51bGwgOiB3cml0ZUJ1ZmZlcik7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRqdXN0cyB0aGUgc2NhbmxpbmUgY291bnQgdXNpbmcgdGhlIHJlbmRlcmVyJ3MgaGVpZ2h0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIC0gVGhlIHdpZHRoLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgLSBUaGUgaGVpZ2h0LlxyXG5cdCAqL1xyXG5cclxuXHRzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuXHJcblx0XHR0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnNjYW5saW5lQ291bnQudmFsdWUgPSBNYXRoLnJvdW5kKGhlaWdodCAqIHRoaXMuc2NhbmxpbmVEZW5zaXR5KTtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhVGV4dHVyZSwgUkdCRm9ybWF0LCBGbG9hdFR5cGUgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgR2xpdGNoTWF0ZXJpYWwgfSBmcm9tIFwiLi4vbWF0ZXJpYWxzXCI7XHJcbmltcG9ydCB7IFBhc3MgfSBmcm9tIFwiLi9wYXNzLmpzXCI7XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBzcGVjaWZpZWQgcmFuZ2UuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBzdGF0aWNcclxuICogQHBhcmFtIHtOdW1iZXJ9IGxvdyAtIFRoZSBsb3dlc3QgcG9zc2libGUgdmFsdWUuXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBoaWdoIC0gVGhlIGhpZ2hlc3QgcG9zc2libGUgdmFsdWUuXHJcbiAqIEByZXR1cm4ge051bWJlcn0gVGhlIHJhbmRvbSB2YWx1ZS5cclxuICovXHJcblxyXG5mdW5jdGlvbiByYW5kb21JbnQobG93LCBoaWdoKSB7XHJcblxyXG5cdHJldHVybiBsb3cgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaGlnaCAtIGxvdyArIDEpKTtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgcmFuZG9tIGZsb2F0IGluIHRoZSBzcGVjaWZpZWQgcmFuZ2UuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBzdGF0aWNcclxuICogQHBhcmFtIHtOdW1iZXJ9IGxvdyAtIFRoZSBsb3dlc3QgcG9zc2libGUgdmFsdWUuXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBoaWdoIC0gVGhlIGhpZ2hlc3QgcG9zc2libGUgdmFsdWUuXHJcbiAqIEByZXR1cm4ge051bWJlcn0gVGhlIHJhbmRvbSB2YWx1ZS5cclxuICovXHJcblxyXG5mdW5jdGlvbiByYW5kb21GbG9hdChsb3csIGhpZ2gpIHtcclxuXHJcblx0cmV0dXJuIGxvdyArIE1hdGgucmFuZG9tKCkgKiAoaGlnaCAtIGxvdyk7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQSBnbGl0Y2ggcGFzcy5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgR2xpdGNoUGFzcyBleHRlbmRzIFBhc3Mge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGdsaXRjaCBwYXNzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zLlxyXG5cdCAqIEBwYXJhbSB7VGV4dHVyZX0gW29wdGlvbnMucGVydHVyYk1hcF0gLSBBIHBlcnR1cmJhdGlvbiBtYXAuIElmIG5vbmUgaXMgcHJvdmlkZWQsIGEgbm9pc2UgdGV4dHVyZSB3aWxsIGJlIGNyZWF0ZWQuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmR0U2l6ZT02NF0gLSBUaGUgc2l6ZSBvZiB0aGUgZ2VuZXJhdGVkIG5vaXNlIG1hcC4gV2lsbCBiZSBpZ25vcmVkIGlmIGEgcGVydHVyYmF0aW9uIG1hcCBpcyBwcm92aWRlZC5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XHJcblxyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBuYW1lIG9mIHRoaXMgcGFzcy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiR2xpdGNoUGFzc1wiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhpcyBwYXNzIHJlbmRlcnMgdG8gdGhlIHdyaXRlIGJ1ZmZlci5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEdsaXRjaCBzaGFkZXIgbWF0ZXJpYWwuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0dsaXRjaE1hdGVyaWFsfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubWF0ZXJpYWwgPSBuZXcgR2xpdGNoTWF0ZXJpYWwoKTtcclxuXHJcblx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBwZXJ0dXJiYXRpb24gbWFwLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtUZXh0dXJlfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMudGV4dHVyZSA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5wZXJ0dXJiTWFwID0gKG9wdGlvbnMucGVydHVyYk1hcCAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMucGVydHVyYk1hcCA6IHRoaXMuZ2VuZXJhdGVQZXJ0dXJiTWFwKG9wdGlvbnMuZHRTaXplKTtcclxuXHRcdHRoaXMucGVydHVyYk1hcC5uYW1lID0gXCJHbGl0Y2guUGVydHVyYmF0aW9uXCI7XHJcblx0XHR0aGlzLnBlcnR1cmJNYXAuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgZWZmZWN0IG1vZGUuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0dsaXRjaE1vZGV9XHJcblx0XHQgKiBAZGVmYXVsdCBHbGl0Y2hNb2RlLlNQT1JBRElDXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm1vZGUgPSBHbGl0Y2hNb2RlLlNQT1JBRElDO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ291bnRlciBmb3IgZ2xpdGNoIGFjdGl2YXRpb24gYW5kIGRlYWN0aXZhdGlvbi5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuY291bnRlciA9IDA7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIHJhbmRvbSBicmVhayBwb2ludCBmb3IgdGhlIHNwb3JhZGljIGdsaXRjaCBhY3RpdmF0aW9uLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5icmVha1BvaW50ID0gcmFuZG9tSW50KDEyMCwgMjQwKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgY3VycmVudCBwZXJ0dXJiYXRpb24gbWFwLlxyXG5cdCAqXHJcblx0ICogQHR5cGUge1RleHR1cmV9XHJcblx0ICovXHJcblxyXG5cdGdldCBwZXJ0dXJiTWFwKCkgeyByZXR1cm4gdGhpcy50ZXh0dXJlOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFzc2lnbmluZyBhIG5ldyBwZXJ0dXJiYXRpb24gbWFwIGRvZXMgbm90IGRlc3Ryb3kgdGhlIGN1cnJlbnQgb25lIVxyXG5cdCAqXHJcblx0ICogQHR5cGUge1RleHR1cmV9XHJcblx0ICovXHJcblxyXG5cdHNldCBwZXJ0dXJiTWFwKHgpIHtcclxuXHJcblx0XHR0aGlzLnRleHR1cmUgPSB4O1xyXG5cdFx0dGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50UGVydHVyYi52YWx1ZSA9IHg7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRGVzdHJveXMgdGhlIGN1cnJlbnQgcGVydHVyYmF0aW9uIG1hcCBhbmQgcmVwbGFjZXMgaXQgd2l0aCBhIG5ldyBvbmUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NpemU9NjRdIC0gVGhlIHRleHR1cmUgc2l6ZS5cclxuXHQgKiBAcmV0dXJuIHtEYXRhVGV4dHVyZX0gVGhlIHBlcnR1cmJhdGlvbiB0ZXh0dXJlLlxyXG5cdCAqL1xyXG5cclxuXHRnZW5lcmF0ZVBlcnR1cmJNYXAoc2l6ZSA9IDY0KSB7XHJcblxyXG5cdFx0Y29uc3QgcGl4ZWxzID0gc2l6ZSAqIHNpemU7XHJcblx0XHRjb25zdCBkYXRhID0gbmV3IEZsb2F0MzJBcnJheShwaXhlbHMgKiAzKTtcclxuXHJcblx0XHRsZXQgZHQgPSB0aGlzLnBlcnR1cmJNYXA7XHJcblx0XHRsZXQgaSwgeDtcclxuXHJcblx0XHRmb3IoaSA9IDA7IGkgPCBwaXhlbHM7ICsraSkge1xyXG5cclxuXHRcdFx0eCA9IE1hdGgucmFuZG9tKCk7XHJcblxyXG5cdFx0XHRkYXRhW2kgKiAzXSA9IHg7XHJcblx0XHRcdGRhdGFbaSAqIDMgKyAxXSA9IHg7XHJcblx0XHRcdGRhdGFbaSAqIDMgKyAyXSA9IHg7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGR0ICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHRkdC5kaXNwb3NlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGR0ID0gbmV3IERhdGFUZXh0dXJlKGRhdGEsIHNpemUsIHNpemUsIFJHQkZvcm1hdCwgRmxvYXRUeXBlKTtcclxuXHRcdGR0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHR0aGlzLnBlcnR1cmJNYXAgPSBkdDtcclxuXHJcblx0XHRyZXR1cm4gZHQ7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgZWZmZWN0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSByZW5kZXJlciAtIFRoZSByZW5kZXJlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSByZWFkQnVmZmVyIC0gVGhlIHJlYWQgYnVmZmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHdyaXRlQnVmZmVyIC0gVGhlIHdyaXRlIGJ1ZmZlci5cclxuXHQgKi9cclxuXHJcblx0cmVuZGVyKHJlbmRlcmVyLCByZWFkQnVmZmVyLCB3cml0ZUJ1ZmZlcikge1xyXG5cclxuXHRcdGNvbnN0IG1vZGUgPSB0aGlzLm1vZGU7XHJcblx0XHRjb25zdCBjb3VudGVyID0gdGhpcy5jb3VudGVyO1xyXG5cdFx0Y29uc3QgYnJlYWtQb2ludCA9IHRoaXMuYnJlYWtQb2ludDtcclxuXHRcdGNvbnN0IHVuaWZvcm1zID0gdGhpcy5tYXRlcmlhbC51bmlmb3JtcztcclxuXHJcblx0XHR1bmlmb3Jtcy50RGlmZnVzZS52YWx1ZSA9IHJlYWRCdWZmZXIudGV4dHVyZTtcclxuXHRcdHVuaWZvcm1zLnNlZWQudmFsdWUgPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0dW5pZm9ybXMuYWN0aXZlLnZhbHVlID0gdHJ1ZTtcclxuXHJcblx0XHRpZihjb3VudGVyICUgYnJlYWtQb2ludCA9PT0gMCB8fCBtb2RlID09PSBHbGl0Y2hNb2RlLkNPTlNUQU5UX1dJTEQpIHtcclxuXHJcblx0XHRcdHVuaWZvcm1zLmFtb3VudC52YWx1ZSA9IE1hdGgucmFuZG9tKCkgLyAzMC4wO1xyXG5cdFx0XHR1bmlmb3Jtcy5hbmdsZS52YWx1ZSA9IHJhbmRvbUZsb2F0KC1NYXRoLlBJLCBNYXRoLlBJKTtcclxuXHRcdFx0dW5pZm9ybXMuc2VlZFgudmFsdWUgPSByYW5kb21GbG9hdCgtMS4wLCAxLjApO1xyXG5cdFx0XHR1bmlmb3Jtcy5zZWVkWS52YWx1ZSA9IHJhbmRvbUZsb2F0KC0xLjAsIDEuMCk7XHJcblx0XHRcdHVuaWZvcm1zLmRpc3RvcnRpb25YLnZhbHVlID0gcmFuZG9tRmxvYXQoMC4wLCAxLjApO1xyXG5cdFx0XHR1bmlmb3Jtcy5kaXN0b3J0aW9uWS52YWx1ZSA9IHJhbmRvbUZsb2F0KDAuMCwgMS4wKTtcclxuXHJcblx0XHRcdHRoaXMuYnJlYWtQb2ludCA9IHJhbmRvbUludCgxMjAsIDI0MCk7XHJcblx0XHRcdHRoaXMuY291bnRlciA9IDA7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGlmKGNvdW50ZXIgJSBicmVha1BvaW50IDwgYnJlYWtQb2ludCAvIDUgfHwgbW9kZSA9PT0gR2xpdGNoTW9kZS5DT05TVEFOVF9NSUxEKSB7XHJcblxyXG5cdFx0XHRcdHVuaWZvcm1zLmFtb3VudC52YWx1ZSA9IE1hdGgucmFuZG9tKCkgLyA5MC4wO1xyXG5cdFx0XHRcdHVuaWZvcm1zLmFuZ2xlLnZhbHVlID0gcmFuZG9tRmxvYXQoLU1hdGguUEksIE1hdGguUEkpO1xyXG5cdFx0XHRcdHVuaWZvcm1zLmRpc3RvcnRpb25YLnZhbHVlID0gcmFuZG9tRmxvYXQoMC4wLCAxLjApO1xyXG5cdFx0XHRcdHVuaWZvcm1zLmRpc3RvcnRpb25ZLnZhbHVlID0gcmFuZG9tRmxvYXQoMC4wLCAxLjApO1xyXG5cdFx0XHRcdHVuaWZvcm1zLnNlZWRYLnZhbHVlID0gcmFuZG9tRmxvYXQoLTAuMywgMC4zKTtcclxuXHRcdFx0XHR1bmlmb3Jtcy5zZWVkWS52YWx1ZSA9IHJhbmRvbUZsb2F0KC0wLjMsIDAuMyk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHQvLyBTcG9yYWRpYy5cclxuXHRcdFx0XHR1bmlmb3Jtcy5hY3RpdmUudmFsdWUgPSBmYWxzZTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Kyt0aGlzLmNvdW50ZXI7XHJcblxyXG5cdFx0cmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlclRvU2NyZWVuID8gbnVsbCA6IHdyaXRlQnVmZmVyKTtcclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEEgZ2xpdGNoIG1vZGUgZW51bWVyYXRpb24uXHJcbiAqXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBTUE9SQURJQyAtIFNwb3JhZGljIGdsaXRjaGVzLlxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gQ09OU1RBTlRfTUlMRCAtIENvbnN0YW50IG1pbGQgZ2xpdGNoZXMuXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBDT05TVEFOVF9XSUxEIC0gQ29uc3RhbnQgd2lsZCBnbGl0Y2hlcy5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgR2xpdGNoTW9kZSA9IHtcclxuXHJcblx0U1BPUkFESUM6IDAsXHJcblx0Q09OU1RBTlRfTUlMRDogMSxcclxuXHRDT05TVEFOVF9XSUxEOiAyXHJcblxyXG59O1xyXG4iLCJpbXBvcnQgeyBDbGVhclBhc3MgfSBmcm9tIFwiLi9jbGVhci5qc1wiO1xyXG5pbXBvcnQgeyBQYXNzIH0gZnJvbSBcIi4vcGFzcy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEEgcGFzcyB0aGF0IHJlbmRlcnMgYSBnaXZlbiBzY2VuZSBkaXJlY3RseSBvbiBzY3JlZW4gb3IgaW50byB0aGUgcmVhZCBidWZmZXJcclxuICogZm9yIGZ1cnRoZXIgcHJvY2Vzc2luZy5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyUGFzcyBleHRlbmRzIFBhc3Mge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IHJlbmRlciBwYXNzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtTY2VuZX0gc2NlbmUgLSBUaGUgc2NlbmUgdG8gcmVuZGVyLlxyXG5cdCAqIEBwYXJhbSB7Q2FtZXJhfSBjYW1lcmEgLSBUaGUgY2FtZXJhIHRvIHVzZSB0byByZW5kZXIgdGhlIHNjZW5lLlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBBZGRpdGlvbmFsIG9wdGlvbnMuXHJcblx0ICogQHBhcmFtIHtNYXRlcmlhbH0gW29wdGlvbnMub3ZlcnJpZGVNYXRlcmlhbD1udWxsXSAtIEFuIG92ZXJyaWRlIG1hdGVyaWFsIGZvciB0aGUgc2NlbmUuXHJcblx0ICogQHBhcmFtIHtDb2xvcn0gW29wdGlvbnMuY2xlYXJDb2xvcj1udWxsXSAtIEFuIG92ZXJyaWRlIGNsZWFyIGNvbG9yLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5jbGVhckFscGhhPTEuMF0gLSBBbiBvdmVycmlkZSBjbGVhciBhbHBoYS5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmNsZWFyRGVwdGg9ZmFsc2VdIC0gV2hldGhlciBkZXB0aCBzaG91bGQgYmUgY2xlYXJlZCBleHBsaWNpdGx5LlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuY2xlYXI9dHJ1ZV0gLSBXaGV0aGVyIGFsbCBidWZmZXJzIHNob3VsZCBiZSBjbGVhcmVkLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSwgY2FtZXJhLCBvcHRpb25zID0ge30pIHtcclxuXHJcblx0XHRzdXBlcihzY2VuZSwgY2FtZXJhLCBudWxsKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBuYW1lIG9mIHRoaXMgcGFzcy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiUmVuZGVyUGFzc1wiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBjbGVhciBwYXNzLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtDbGVhclBhc3N9XHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmNsZWFyUGFzcyA9IG5ldyBDbGVhclBhc3Mob3B0aW9ucyk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBbiBvdmVycmlkZSBtYXRlcmlhbC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7TWF0ZXJpYWx9XHJcblx0XHQgKiBAZGVmYXVsdCBudWxsXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm92ZXJyaWRlTWF0ZXJpYWwgPSAob3B0aW9ucy5vdmVycmlkZU1hdGVyaWFsICE9PSB1bmRlZmluZWQpID8gb3B0aW9ucy5vdmVycmlkZU1hdGVyaWFsIDogbnVsbDtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBkZXB0aCBidWZmZXIgc2hvdWxkIGJlIGNsZWFyZWQgZXhwbGljaXRseS5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Qm9vbGVhbn1cclxuXHRcdCAqIEBkZWZhdWx0IGZhbHNlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmNsZWFyRGVwdGggPSAob3B0aW9ucy5jbGVhckRlcHRoICE9PSB1bmRlZmluZWQpID8gb3B0aW9ucy5jbGVhckRlcHRoIDogZmFsc2U7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY29sb3IsIGRlcHRoIGFuZCBzdGVuY2lsIGJ1ZmZlcnMgc2hvdWxkIGJlIGNsZWFyZWQuXHJcblx0XHQgKlxyXG5cdFx0ICogRXZlbiB3aXRoIGNsZWFyIHNldCB0byB0cnVlIHlvdSBjYW4gcHJldmVudCBzcGVjaWZpYyBidWZmZXJzIGZyb20gYmVpbmdcclxuXHRcdCAqIGNsZWFyZWQgYnkgc2V0dGluZyBlaXRoZXIgdGhlIGF1dG9DbGVhckNvbG9yLCBhdXRvQ2xlYXJTdGVuY2lsIG9yXHJcblx0XHQgKiBhdXRvQ2xlYXJEZXB0aCBwcm9wZXJ0aWVzIG9mIHRoZSByZW5kZXJlciB0byBmYWxzZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Qm9vbGVhbn1cclxuXHRcdCAqIEBkZWZhdWx0IHRydWVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuY2xlYXIgPSAob3B0aW9ucy5jbGVhciAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMuY2xlYXIgOiB0cnVlO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIHNjZW5lLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSByZW5kZXJlciAtIFRoZSByZW5kZXJlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSByZWFkQnVmZmVyIC0gVGhlIHJlYWQgYnVmZmVyLlxyXG5cdCAqL1xyXG5cclxuXHRyZW5kZXIocmVuZGVyZXIsIHJlYWRCdWZmZXIpIHtcclxuXHJcblx0XHRjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmU7XHJcblx0XHRjb25zdCB0YXJnZXQgPSB0aGlzLnJlbmRlclRvU2NyZWVuID8gbnVsbCA6IHJlYWRCdWZmZXI7XHJcblxyXG5cdFx0aWYodGhpcy5jbGVhcikge1xyXG5cclxuXHRcdFx0dGhpcy5jbGVhclBhc3MucmVuZGVyKHJlbmRlcmVyLCB0YXJnZXQpO1xyXG5cclxuXHRcdH0gZWxzZSBpZih0aGlzLmNsZWFyRGVwdGgpIHtcclxuXHJcblx0XHRcdHJlbmRlcmVyLnNldFJlbmRlclRhcmdldCh0YXJnZXQpO1xyXG5cdFx0XHRyZW5kZXJlci5jbGVhckRlcHRoKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSB0aGlzLm92ZXJyaWRlTWF0ZXJpYWw7XHJcblx0XHRyZW5kZXJlci5yZW5kZXIoc2NlbmUsIHRoaXMuY2FtZXJhLCB0YXJnZXQpO1xyXG5cdFx0c2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IG51bGw7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb2xvcixcclxuXHRMaW5lYXJGaWx0ZXIsXHJcblx0TWVzaEJhc2ljTWF0ZXJpYWwsXHJcblx0UkdCRm9ybWF0LFxyXG5cdFNjZW5lLFxyXG5cdFZlY3RvcjMsXHJcblx0V2ViR0xSZW5kZXJUYXJnZXRcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCB7IENvbWJpbmVNYXRlcmlhbCwgR29kUmF5c01hdGVyaWFsLCBLZXJuZWxTaXplIH0gZnJvbSBcIi4uL21hdGVyaWFsc1wiO1xyXG5pbXBvcnQgeyBSZW5kZXJQYXNzIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XHJcbmltcG9ydCB7IEJsdXJQYXNzIH0gZnJvbSBcIi4vYmx1ci5qc1wiO1xyXG5pbXBvcnQgeyBQYXNzIH0gZnJvbSBcIi4vcGFzcy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIENsYW1wcyBhIGdpdmVuIHZhbHVlLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAc3RhdGljXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjbGFtcC5cclxuICogQHBhcmFtIHtOdW1iZXJ9IG1pbiAtIFRoZSBsb3dlc3QgcG9zc2libGUgdmFsdWUuXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXggLSBUaGUgaGlnaGVzdCBwb3NzaWJsZSB2YWx1ZS5cclxuICogQHJldHVybiB7TnVtYmVyfSBUaGUgY2xhbXBlZCB2YWx1ZS5cclxuICovXHJcblxyXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcclxuXHJcblx0cmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWx1ZSkpO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEEgY3JlcHVzY3VsYXIgcmF5cyBwYXNzLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBHb2RSYXlzUGFzcyBleHRlbmRzIFBhc3Mge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGdvZCByYXlzIHBhc3MuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1NjZW5lfSBzY2VuZSAtIFRoZSBtYWluIHNjZW5lLlxyXG5cdCAqIEBwYXJhbSB7Q2FtZXJhfSBjYW1lcmEgLSBUaGUgbWFpbiBjYW1lcmEuXHJcblx0ICogQHBhcmFtIHtPYmplY3QzRH0gbGlnaHRTb3VyY2UgLSBUaGUgbWFpbiBsaWdodCBzb3VyY2UuXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kZW5zaXR5PTAuOTZdIC0gVGhlIGRlbnNpdHkgb2YgdGhlIGxpZ2h0IHJheXMuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRlY2F5PTAuOTNdIC0gQW4gaWxsdW1pbmF0aW9uIGRlY2F5IGZhY3Rvci5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMud2VpZ2h0PTAuNF0gLSBBIGxpZ2h0IHJheSB3ZWlnaHQgZmFjdG9yLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5leHBvc3VyZT0wLjZdIC0gQSBjb25zdGFudCBhdHRlbnVhdGlvbiBjb2VmZmljaWVudC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuY2xhbXBNYXg9MS4wXSAtIEFuIHVwcGVyIGJvdW5kIGZvciB0aGUgc2F0dXJhdGlvbiBvZiB0aGUgb3ZlcmFsbCBlZmZlY3QuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmludGVuc2l0eT0xLjBdIC0gQSBjb25zdGFudCBmYWN0b3IgZm9yIGFkZGl0aXZlIGJsZW5kaW5nLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yZXNvbHV0aW9uU2NhbGU9MC41XSAtIFRoZSByZW5kZXIgdGV4dHVyZSByZXNvbHV0aW9uIHNjYWxlLCByZWxhdGl2ZSB0byB0aGUgc2NyZWVuIHJlbmRlciBzaXplLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5rZXJuZWxTaXplPUtlcm5lbFNpemUuTEFSR0VdIC0gVGhlIGJsdXIga2VybmVsIHNpemUuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnNhbXBsZXM9NjBdIC0gVGhlIG51bWJlciBvZiBzYW1wbGVzIHBlciBwaXhlbC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuc2NyZWVuTW9kZT10cnVlXSAtIFdoZXRoZXIgdGhlIHNjcmVlbiBibGVuZCBtb2RlIHNob3VsZCBiZSB1c2VkIGZvciBjb21iaW5pbmcgdGhlIGdvZCByYXlzIHRleHR1cmUgd2l0aCB0aGUgc2NlbmUgY29sb3JzLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSwgY2FtZXJhLCBsaWdodFNvdXJjZSwgb3B0aW9ucyA9IHt9KSB7XHJcblxyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBuYW1lIG9mIHRoaXMgcGFzcy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiR29kUmF5c1Bhc3NcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoaXMgcGFzcyByZW5kZXJzIHRvIHRoZSB3cml0ZSBidWZmZXIuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IHRydWU7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIHNjZW5lIHRoYXQgb25seSBjb250YWlucyB0aGUgbGlnaHQgc291cmNlLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtTY2VuZX1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmxpZ2h0U2NlbmUgPSBuZXcgU2NlbmUoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBtYWluIHNjZW5lLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtTY2VuZX1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm1haW5TY2VuZSA9IHNjZW5lO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG1haW4gY2FtZXJhLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtDYW1lcmF9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5tYWluQ2FtZXJhID0gY2FtZXJhO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBwYXNzIHRoYXQgb25seSByZW5kZXJzIHRoZSBsaWdodCBzb3VyY2UuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1JlbmRlclBhc3N9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5yZW5kZXJQYXNzTGlnaHQgPSBuZXcgUmVuZGVyUGFzcyh0aGlzLmxpZ2h0U2NlbmUsIHRoaXMubWFpbkNhbWVyYSk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIHBhc3MgdGhhdCByZW5kZXJzIHRoZSBtYXNrZWQgc2NlbmUgb3ZlciB0aGUgbGlnaHQuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1JlbmRlclBhc3N9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5yZW5kZXJQYXNzTWFzayA9IG5ldyBSZW5kZXJQYXNzKHRoaXMubWFpblNjZW5lLCB0aGlzLm1haW5DYW1lcmEsIHtcclxuXHRcdFx0b3ZlcnJpZGVNYXRlcmlhbDogbmV3IE1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4MDAwMDAwIH0pLFxyXG5cdFx0XHRjbGVhckNvbG9yOiBuZXcgQ29sb3IoMHgwMDAwMDApXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnJlbmRlclBhc3NNYXNrLmNsZWFyID0gZmFsc2U7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIGJsdXIgcGFzcy5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Qmx1clBhc3N9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5ibHVyUGFzcyA9IG5ldyBCbHVyUGFzcyhvcHRpb25zKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgcmVuZGVyIHRhcmdldC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7V2ViR0xSZW5kZXJUYXJnZXR9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRYID0gbmV3IFdlYkdMUmVuZGVyVGFyZ2V0KDEsIDEsIHtcclxuXHRcdFx0bWluRmlsdGVyOiBMaW5lYXJGaWx0ZXIsXHJcblx0XHRcdG1hZ0ZpbHRlcjogTGluZWFyRmlsdGVyLFxyXG5cdFx0XHRzdGVuY2lsQnVmZmVyOiBmYWxzZSxcclxuXHRcdFx0ZGVwdGhCdWZmZXI6IGZhbHNlXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldFgudGV4dHVyZS5uYW1lID0gXCJHb2RSYXlzLlRhcmdldFhcIjtcclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0WC50ZXh0dXJlLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBzZWNvbmQgcmVuZGVyIHRhcmdldC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7V2ViR0xSZW5kZXJUYXJnZXR9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRZID0gdGhpcy5yZW5kZXJUYXJnZXRYLmNsb25lKCk7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRZLnRleHR1cmUubmFtZSA9IFwiR29kUmF5cy5UYXJnZXRZXCI7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIHJlbmRlciB0YXJnZXQgZm9yIHRoZSBtYXNrZWQgbGlnaHQgc2NlbmUuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1dlYkdMUmVuZGVyVGFyZ2V0fVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0TWFzayA9IG5ldyBXZWJHTFJlbmRlclRhcmdldCgxLCAxLCB7XHJcblx0XHRcdG1pbkZpbHRlcjogTGluZWFyRmlsdGVyLFxyXG5cdFx0XHRtYWdGaWx0ZXI6IExpbmVhckZpbHRlclxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRNYXNrLnRleHR1cmUubmFtZSA9IFwiR29kUmF5cy5NYXNrXCI7XHJcblx0XHR0aGlzLnJlbmRlclRhcmdldE1hc2sudGV4dHVyZS5nZW5lcmF0ZU1pcG1hcHMgPSBmYWxzZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBsaWdodCBzb3VyY2UuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge09iamVjdDNEfVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5saWdodFNvdXJjZSA9IGxpZ2h0U291cmNlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIGxpZ2h0IHBvc2l0aW9uIGluIHNjcmVlbiBzcGFjZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7VmVjdG9yM31cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnNjcmVlblBvc2l0aW9uID0gbmV3IFZlY3RvcjMoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgZ29kIHJheXMgc2hhZGVyIG1hdGVyaWFsLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtHb2RSYXlzTWF0ZXJpYWx9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5nb2RSYXlzTWF0ZXJpYWwgPSBuZXcgR29kUmF5c01hdGVyaWFsKCk7XHJcblx0XHR0aGlzLmdvZFJheXNNYXRlcmlhbC51bmlmb3Jtcy5saWdodFBvc2l0aW9uLnZhbHVlID0gdGhpcy5zY3JlZW5Qb3NpdGlvbjtcclxuXHJcblx0XHRpZihvcHRpb25zLmV4cG9zdXJlICE9PSB1bmRlZmluZWQpIHsgdGhpcy5nb2RSYXlzTWF0ZXJpYWwudW5pZm9ybXMuZXhwb3N1cmUudmFsdWUgPSBvcHRpb25zLmV4cG9zdXJlOyB9XHJcblx0XHRpZihvcHRpb25zLmRlbnNpdHkgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmdvZFJheXNNYXRlcmlhbC51bmlmb3Jtcy5kZW5zaXR5LnZhbHVlID0gb3B0aW9ucy5kZW5zaXR5OyB9XHJcblx0XHRpZihvcHRpb25zLmRlY2F5ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5nb2RSYXlzTWF0ZXJpYWwudW5pZm9ybXMuZGVjYXkudmFsdWUgPSBvcHRpb25zLmRlY2F5OyB9XHJcblx0XHRpZihvcHRpb25zLndlaWdodCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZ29kUmF5c01hdGVyaWFsLnVuaWZvcm1zLndlaWdodC52YWx1ZSA9IG9wdGlvbnMud2VpZ2h0OyB9XHJcblx0XHRpZihvcHRpb25zLmNsYW1wTWF4ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5nb2RSYXlzTWF0ZXJpYWwudW5pZm9ybXMuY2xhbXBNYXgudmFsdWUgPSBvcHRpb25zLmNsYW1wTWF4OyB9XHJcblxyXG5cdFx0dGhpcy5zYW1wbGVzID0gb3B0aW9ucy5zYW1wbGVzO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBjb21iaW5lIHNoYWRlciBtYXRlcmlhbC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Q29tYmluZU1hdGVyaWFsfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuY29tYmluZU1hdGVyaWFsID0gbmV3IENvbWJpbmVNYXRlcmlhbCgob3B0aW9ucy5zY3JlZW5Nb2RlICE9PSB1bmRlZmluZWQpID8gb3B0aW9ucy5zY3JlZW5Nb2RlIDogdHJ1ZSk7XHJcblxyXG5cdFx0dGhpcy5pbnRlbnNpdHkgPSBvcHRpb25zLmludGVuc2l0eTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgcmVzb2x1dGlvbiBzY2FsZS5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0ICogQGRlZmF1bHQgMC41XHJcblx0ICovXHJcblxyXG5cdGdldCByZXNvbHV0aW9uU2NhbGUoKSB7IHJldHVybiB0aGlzLmJsdXJQYXNzLnJlc29sdXRpb25TY2FsZTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBZb3UgbmVlZCB0byBjYWxsIHtAbGluayBFZmZlY3RDb21wb3NlciNzZXRTaXplfSBhZnRlciBjaGFuZ2luZyB0aGlzIHZhbHVlLlxyXG5cdCAqXHJcblx0ICogQHR5cGUge051bWJlcn1cclxuXHQgKi9cclxuXHJcblx0c2V0IHJlc29sdXRpb25TY2FsZSh4ID0gMC41KSB7IHRoaXMuYmx1clBhc3MucmVzb2x1dGlvblNjYWxlID0geDsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgYmx1ciBrZXJuZWwgc2l6ZS5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtLZXJuZWxTaXplfVxyXG5cdCAqIEBkZWZhdWx0IEtlcm5lbFNpemUuTEFSR0VcclxuXHQgKi9cclxuXHJcblx0Z2V0IGtlcm5lbFNpemUoKSB7IHJldHVybiB0aGlzLmJsdXJQYXNzLmtlcm5lbFNpemU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0tlcm5lbFNpemV9XHJcblx0ICovXHJcblxyXG5cdHNldCBrZXJuZWxTaXplKHggPSBLZXJuZWxTaXplLkxBUkdFKSB7IHRoaXMuYmx1clBhc3Mua2VybmVsU2l6ZSA9IHg7IH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIG92ZXJhbGwgaW50ZW5zaXR5IG9mIHRoZSBlZmZlY3QuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdCAqIEBkZWZhdWx0IDEuMFxyXG5cdCAqL1xyXG5cclxuXHRnZXQgaW50ZW5zaXR5KCkgeyByZXR1cm4gdGhpcy5jb21iaW5lTWF0ZXJpYWwudW5pZm9ybXMub3BhY2l0eTIudmFsdWU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge051bWJlcn1cclxuXHQgKi9cclxuXHJcblx0c2V0IGludGVuc2l0eSh4ID0gMS4wKSB7IHRoaXMuY29tYmluZU1hdGVyaWFsLnVuaWZvcm1zLm9wYWNpdHkyLnZhbHVlID0geDsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbnVtYmVyIG9mIHNhbXBsZXMgcGVyIHBpeGVsLlxyXG5cdCAqXHJcblx0ICogQHR5cGUge051bWJlcn1cclxuXHQgKiBAZGVmYXVsdCA2MFxyXG5cdCAqL1xyXG5cclxuXHRnZXQgc2FtcGxlcygpIHsgcmV0dXJuIE51bWJlci5wYXJzZUludCh0aGlzLmdvZFJheXNNYXRlcmlhbC5kZWZpbmVzLk5VTV9TQU1QTEVTX0lOVCk7IH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyB2YWx1ZSBtdXN0IGJlIGNhcmVmdWxseSBjaG9zZW4uIEEgaGlnaGVyIHZhbHVlIGRpcmVjdGx5IGluY3JlYXNlcyB0aGVcclxuXHQgKiBHUFUgbG9hZC5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0ICovXHJcblxyXG5cdHNldCBzYW1wbGVzKHggPSA2MCkge1xyXG5cclxuXHRcdHggPSBNYXRoLmZsb29yKHgpO1xyXG5cclxuXHRcdHRoaXMuZ29kUmF5c01hdGVyaWFsLmRlZmluZXMuTlVNX1NBTVBMRVNfRkxPQVQgPSB4LnRvRml4ZWQoMSk7XHJcblx0XHR0aGlzLmdvZFJheXNNYXRlcmlhbC5kZWZpbmVzLk5VTV9TQU1QTEVTX0lOVCA9IHgudG9GaXhlZCgwKTtcclxuXHRcdHRoaXMuZ29kUmF5c01hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBzY2VuZS5cclxuXHQgKlxyXG5cdCAqIFRoZSBnb2QgcmF5cyBwYXNzIGhhcyBmb3VyIHBoYXNlczpcclxuXHQgKlxyXG5cdCAqIE1hc2sgUGhhc2U6XHJcblx0ICogIEZpcnN0LCB0aGUgbGlnaHQgc291cmNlIGlzIHJlbmRlcmVkLiBUaGVuIHRoZSBzY2VuZSBpcyByZW5kZXJlZCBpbnRvIHRoZVxyXG5cdCAqICBzYW1lIGJ1ZmZlciB1c2luZyBhIG1hc2sgb3ZlcnJpZGUgbWF0ZXJpYWwgd2l0aCBkZXB0aCB0ZXN0IGVuYWJsZWQuXHJcblx0ICpcclxuXHQgKiBQcmVsaW1pbmFyeSBCbHVyIFBoYXNlOlxyXG5cdCAqICBUaGUgbWFza2VkIHNjZW5lIGlzIGJsdXJyZWQuXHJcblx0ICpcclxuXHQgKiBHb2QgUmF5cyBQaGFzZTpcclxuXHQgKiAgVGhlIGJsdXJyZWQgc2NlbmUgaXMgYmx1cnJlZCBhZ2FpbiwgYnV0IHRoaXMgdGltZSBhbG9uZyByYWRpYWwgbGluZXNcclxuXHQgKiAgdG93YXJkcyB0aGUgbGlnaHQgc291cmNlLlxyXG5cdCAqXHJcblx0ICogQ29tcG9zaXRlIFBoYXNlOlxyXG5cdCAqICBUaGUgZmluYWwgcmVzdWx0IGlzIGNvbWJpbmVkIHdpdGggdGhlIHJlYWQgYnVmZmVyLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSByZW5kZXJlciAtIFRoZSByZW5kZXJlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSByZWFkQnVmZmVyIC0gVGhlIHJlYWQgYnVmZmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHdyaXRlQnVmZmVyIC0gVGhlIHdyaXRlIGJ1ZmZlci5cclxuXHQgKi9cclxuXHJcblx0cmVuZGVyKHJlbmRlcmVyLCByZWFkQnVmZmVyLCB3cml0ZUJ1ZmZlcikge1xyXG5cclxuXHRcdGNvbnN0IHF1YWQgPSB0aGlzLnF1YWQ7XHJcblx0XHRjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmU7XHJcblx0XHRjb25zdCBjYW1lcmEgPSB0aGlzLmNhbWVyYTtcclxuXHRcdGNvbnN0IG1haW5TY2VuZSA9IHRoaXMubWFpblNjZW5lO1xyXG5cclxuXHRcdGNvbnN0IGxpZ2h0U291cmNlID0gdGhpcy5saWdodFNvdXJjZTtcclxuXHRcdGNvbnN0IHNjcmVlblBvc2l0aW9uID0gdGhpcy5zY3JlZW5Qb3NpdGlvbjtcclxuXHJcblx0XHRjb25zdCBnb2RSYXlzTWF0ZXJpYWwgPSB0aGlzLmdvZFJheXNNYXRlcmlhbDtcclxuXHRcdGNvbnN0IGNvbWJpbmVNYXRlcmlhbCA9IHRoaXMuY29tYmluZU1hdGVyaWFsO1xyXG5cclxuXHRcdGNvbnN0IHJlbmRlclRhcmdldE1hc2sgPSB0aGlzLnJlbmRlclRhcmdldE1hc2s7XHJcblx0XHRjb25zdCByZW5kZXJUYXJnZXRYID0gdGhpcy5yZW5kZXJUYXJnZXRYO1xyXG5cdFx0Y29uc3QgcmVuZGVyVGFyZ2V0WSA9IHRoaXMucmVuZGVyVGFyZ2V0WTtcclxuXHJcblx0XHRsZXQgYmFja2dyb3VuZCwgcGFyZW50O1xyXG5cclxuXHRcdC8vIENvbXB1dGUgdGhlIHNjcmVlbiBsaWdodCBwb3NpdGlvbiBhbmQgdHJhbnNsYXRlIGl0IHRvIFswLCAxXS5cclxuXHRcdHNjcmVlblBvc2l0aW9uLmNvcHkobGlnaHRTb3VyY2UucG9zaXRpb24pLnByb2plY3QodGhpcy5tYWluQ2FtZXJhKTtcclxuXHRcdHNjcmVlblBvc2l0aW9uLnggPSBjbGFtcCgoc2NyZWVuUG9zaXRpb24ueCArIDEuMCkgKiAwLjUsIDAuMCwgMS4wKTtcclxuXHRcdHNjcmVlblBvc2l0aW9uLnkgPSBjbGFtcCgoc2NyZWVuUG9zaXRpb24ueSArIDEuMCkgKiAwLjUsIDAuMCwgMS4wKTtcclxuXHJcblx0XHQvLyBSZW5kZXIgdGhlIG1hc2tlZCBzY2VuZS5cclxuXHRcdHBhcmVudCA9IGxpZ2h0U291cmNlLnBhcmVudDtcclxuXHRcdGJhY2tncm91bmQgPSBtYWluU2NlbmUuYmFja2dyb3VuZDtcclxuXHRcdG1haW5TY2VuZS5iYWNrZ3JvdW5kID0gbnVsbDtcclxuXHRcdHRoaXMubGlnaHRTY2VuZS5hZGQobGlnaHRTb3VyY2UpO1xyXG5cclxuXHRcdHRoaXMucmVuZGVyUGFzc0xpZ2h0LnJlbmRlcihyZW5kZXJlciwgcmVuZGVyVGFyZ2V0TWFzayk7XHJcblx0XHR0aGlzLnJlbmRlclBhc3NNYXNrLnJlbmRlcihyZW5kZXJlciwgcmVuZGVyVGFyZ2V0TWFzayk7XHJcblxyXG5cdFx0aWYocGFyZW50ICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHRwYXJlbnQuYWRkKGxpZ2h0U291cmNlKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bWFpblNjZW5lLmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xyXG5cclxuXHRcdC8vIENvbnZvbHV0aW9uIHBoYXNlLlxyXG5cdFx0dGhpcy5ibHVyUGFzcy5yZW5kZXIocmVuZGVyZXIsIHJlbmRlclRhcmdldE1hc2ssIHJlbmRlclRhcmdldFgpO1xyXG5cclxuXHRcdC8vIEdvZCByYXlzIHBhc3MuXHJcblx0XHRxdWFkLm1hdGVyaWFsID0gZ29kUmF5c01hdGVyaWFsO1xyXG5cdFx0Z29kUmF5c01hdGVyaWFsLnVuaWZvcm1zLnREaWZmdXNlLnZhbHVlID0gcmVuZGVyVGFyZ2V0WC50ZXh0dXJlO1xyXG5cdFx0cmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEsIHJlbmRlclRhcmdldFkpO1xyXG5cclxuXHRcdC8vIEZpbmFsIHBhc3MgLSBjb21wb3NpdGUgZ29kIHJheXMgb250byBjb2xvdXJzLlxyXG5cdFx0cXVhZC5tYXRlcmlhbCA9IGNvbWJpbmVNYXRlcmlhbDtcclxuXHRcdGNvbWJpbmVNYXRlcmlhbC51bmlmb3Jtcy50ZXh0dXJlMS52YWx1ZSA9IHJlYWRCdWZmZXIudGV4dHVyZTtcclxuXHRcdGNvbWJpbmVNYXRlcmlhbC51bmlmb3Jtcy50ZXh0dXJlMi52YWx1ZSA9IHJlbmRlclRhcmdldFkudGV4dHVyZTtcclxuXHJcblx0XHRyZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSwgdGhpcy5yZW5kZXJUb1NjcmVlbiA/IG51bGwgOiB3cml0ZUJ1ZmZlcik7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRqdXN0cyB0aGUgZm9ybWF0IG9mIHRoZSByZW5kZXIgdGFyZ2V0cy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBhbHBoYSAtIFdoZXRoZXIgdGhlIHJlbmRlcmVyIHVzZXMgdGhlIGFscGhhIGNoYW5uZWwgb3Igbm90LlxyXG5cdCAqL1xyXG5cclxuXHRpbml0aWFsaXNlKHJlbmRlcmVyLCBhbHBoYSkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyUGFzc0xpZ2h0LmluaXRpYWxpc2UocmVuZGVyZXIsIGFscGhhKTtcclxuXHRcdHRoaXMucmVuZGVyUGFzc01hc2suaW5pdGlhbGlzZShyZW5kZXJlciwgYWxwaGEpO1xyXG5cdFx0dGhpcy5ibHVyUGFzcy5pbml0aWFsaXNlKHJlbmRlcmVyLCBhbHBoYSk7XHJcblxyXG5cdFx0aWYoIWFscGhhKSB7XHJcblxyXG5cdFx0XHR0aGlzLnJlbmRlclRhcmdldE1hc2sudGV4dHVyZS5mb3JtYXQgPSBSR0JGb3JtYXQ7XHJcblx0XHRcdHRoaXMucmVuZGVyVGFyZ2V0WC50ZXh0dXJlLmZvcm1hdCA9IFJHQkZvcm1hdDtcclxuXHRcdFx0dGhpcy5yZW5kZXJUYXJnZXRZLnRleHR1cmUuZm9ybWF0ID0gUkdCRm9ybWF0O1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGVzIHRoaXMgcGFzcyB3aXRoIHRoZSByZW5kZXJlcidzIHNpemUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gd2lkdGggLSBUaGUgd2lkdGguXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCAtIFRoZSBoZWlnaHQuXHJcblx0ICovXHJcblxyXG5cdHNldFNpemUod2lkdGgsIGhlaWdodCkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyUGFzc0xpZ2h0LnNldFNpemUod2lkdGgsIGhlaWdodCk7XHJcblx0XHR0aGlzLnJlbmRlclBhc3NNYXNrLnNldFNpemUod2lkdGgsIGhlaWdodCk7XHJcblx0XHR0aGlzLmJsdXJQYXNzLnNldFNpemUod2lkdGgsIGhlaWdodCk7XHJcblxyXG5cdFx0d2lkdGggPSB0aGlzLmJsdXJQYXNzLndpZHRoO1xyXG5cdFx0aGVpZ2h0ID0gdGhpcy5ibHVyUGFzcy5oZWlnaHQ7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRNYXNrLnNldFNpemUod2lkdGgsIGhlaWdodCk7XHJcblx0XHR0aGlzLnJlbmRlclRhcmdldFguc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0WS5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFBhc3MgfSBmcm9tIFwiLi9wYXNzLmpzXCI7XHJcblxyXG4vKipcclxuICogQSBtYXNrIHBhc3MuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hc2tQYXNzIGV4dGVuZHMgUGFzcyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgbWFzayBwYXNzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtTY2VuZX0gc2NlbmUgLSBUaGUgc2NlbmUgdG8gcmVuZGVyLlxyXG5cdCAqIEBwYXJhbSB7Q2FtZXJhfSBjYW1lcmEgLSBUaGUgY2FtZXJhIHRvIHVzZS5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIGNhbWVyYSkge1xyXG5cclxuXHRcdHN1cGVyKHNjZW5lLCBjYW1lcmEsIG51bGwpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG5hbWUgb2YgdGhpcyBwYXNzLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uYW1lID0gXCJNYXNrUGFzc1wiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSW52ZXJzZSBmbGFnLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtCb29sZWFufVxyXG5cdFx0ICogQGRlZmF1bHQgZmFsc2VcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuaW52ZXJzZSA9IGZhbHNlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU3RlbmNpbCBidWZmZXIgY2xlYXIgZmxhZy5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Qm9vbGVhbn1cclxuXHRcdCAqIEBkZWZhdWx0IHRydWVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuY2xlYXJTdGVuY2lsID0gdHJ1ZTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgc3RlbmNpbCBiaXQgbWFzay5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gcmVhZEJ1ZmZlciAtIFRoZSByZWFkIGJ1ZmZlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSB3cml0ZUJ1ZmZlciAtIFRoZSB3cml0ZSBidWZmZXIuXHJcblx0ICovXHJcblxyXG5cdHJlbmRlcihyZW5kZXJlciwgcmVhZEJ1ZmZlciwgd3JpdGVCdWZmZXIpIHtcclxuXHJcblx0XHRjb25zdCBjb250ZXh0ID0gcmVuZGVyZXIuY29udGV4dDtcclxuXHRcdGNvbnN0IHN0YXRlID0gcmVuZGVyZXIuc3RhdGU7XHJcblxyXG5cdFx0Y29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lO1xyXG5cdFx0Y29uc3QgY2FtZXJhID0gdGhpcy5jYW1lcmE7XHJcblxyXG5cdFx0Y29uc3Qgd3JpdGVWYWx1ZSA9IHRoaXMuaW52ZXJzZSA/IDAgOiAxO1xyXG5cdFx0Y29uc3QgY2xlYXJWYWx1ZSA9IDEgLSB3cml0ZVZhbHVlO1xyXG5cclxuXHRcdC8vIERvbid0IHVwZGF0ZSBjb2xvciBvciBkZXB0aC5cclxuXHRcdHN0YXRlLmJ1ZmZlcnMuY29sb3Iuc2V0TWFzayhmYWxzZSk7XHJcblx0XHRzdGF0ZS5idWZmZXJzLmRlcHRoLnNldE1hc2soZmFsc2UpO1xyXG5cclxuXHRcdC8vIExvY2sgdGhlIGJ1ZmZlcnMuXHJcblx0XHRzdGF0ZS5idWZmZXJzLmNvbG9yLnNldExvY2tlZCh0cnVlKTtcclxuXHRcdHN0YXRlLmJ1ZmZlcnMuZGVwdGguc2V0TG9ja2VkKHRydWUpO1xyXG5cclxuXHRcdC8vIENvbmZpZ3VyZSB0aGUgc3RlbmNpbC5cclxuXHRcdHN0YXRlLmJ1ZmZlcnMuc3RlbmNpbC5zZXRUZXN0KHRydWUpO1xyXG5cdFx0c3RhdGUuYnVmZmVycy5zdGVuY2lsLnNldE9wKGNvbnRleHQuUkVQTEFDRSwgY29udGV4dC5SRVBMQUNFLCBjb250ZXh0LlJFUExBQ0UpO1xyXG5cdFx0c3RhdGUuYnVmZmVycy5zdGVuY2lsLnNldEZ1bmMoY29udGV4dC5BTFdBWVMsIHdyaXRlVmFsdWUsIDB4ZmZmZmZmZmYpO1xyXG5cdFx0c3RhdGUuYnVmZmVycy5zdGVuY2lsLnNldENsZWFyKGNsZWFyVmFsdWUpO1xyXG5cclxuXHRcdC8vIENsZWFyIHRoZSBzdGVuY2lsLlxyXG5cdFx0aWYodGhpcy5jbGVhclN0ZW5jaWwpIHtcclxuXHJcblx0XHRcdHJlbmRlcmVyLnNldFJlbmRlclRhcmdldChyZWFkQnVmZmVyKTtcclxuXHRcdFx0cmVuZGVyZXIuY2xlYXJTdGVuY2lsKCk7XHJcblxyXG5cdFx0XHRyZW5kZXJlci5zZXRSZW5kZXJUYXJnZXQod3JpdGVCdWZmZXIpO1xyXG5cdFx0XHRyZW5kZXJlci5jbGVhclN0ZW5jaWwoKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gRHJhdyB0aGUgbWFzayBpbnRvIGJvdGggYnVmZmVycy5cclxuXHRcdHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhLCByZWFkQnVmZmVyKTtcclxuXHRcdHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhLCB3cml0ZUJ1ZmZlcik7XHJcblxyXG5cdFx0Ly8gVW5sb2NrIHRoZSBidWZmZXJzLlxyXG5cdFx0c3RhdGUuYnVmZmVycy5jb2xvci5zZXRMb2NrZWQoZmFsc2UpO1xyXG5cdFx0c3RhdGUuYnVmZmVycy5kZXB0aC5zZXRMb2NrZWQoZmFsc2UpO1xyXG5cclxuXHRcdC8vIE9ubHkgcmVuZGVyIHdoZXJlIHRoZSBzdGVuY2lsIGlzIHNldCB0byAxLlxyXG5cdFx0c3RhdGUuYnVmZmVycy5zdGVuY2lsLnNldEZ1bmMoY29udGV4dC5FUVVBTCwgMSwgMHhmZmZmZmZmZik7XHJcblx0XHRzdGF0ZS5idWZmZXJzLnN0ZW5jaWwuc2V0T3AoY29udGV4dC5LRUVQLCBjb250ZXh0LktFRVAsIGNvbnRleHQuS0VFUCk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgUGl4ZWxhdGlvbk1hdGVyaWFsIH0gZnJvbSBcIi4uL21hdGVyaWFsc1wiO1xyXG5pbXBvcnQgeyBQYXNzIH0gZnJvbSBcIi4vcGFzcy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEEgcGl4ZWxhdGlvbiBwYXNzLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBQaXhlbGF0aW9uUGFzcyBleHRlbmRzIFBhc3Mge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IHBpeGVsYXRpb24gcGFzcy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbZ3JhbnVsYXJpdHk9MzAuMF0gLSBUaGUgaW50ZW5zaXR5IG9mIHRoZSBlZmZlY3QuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKGdyYW51bGFyaXR5ID0gMzAuMCkge1xyXG5cclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgbmFtZSBvZiB0aGlzIHBhc3MuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5hbWUgPSBcIlBpeGVsYXRpb25QYXNzXCI7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGlzIHBhc3MgcmVuZGVycyB0byB0aGUgd3JpdGUgYnVmZmVyLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSB0cnVlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBwaXhlbGF0aW9uIHNoYWRlciBtYXRlcmlhbC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7UGl4ZWxhdGlvbk1hdGVyaWFsfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMucGl4ZWxhdGlvbk1hdGVyaWFsID0gbmV3IFBpeGVsYXRpb25NYXRlcmlhbCgpO1xyXG5cclxuXHRcdHRoaXMuZ3JhbnVsYXJpdHkgPSBncmFudWxhcml0eTtcclxuXHJcblx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSB0aGlzLnBpeGVsYXRpb25NYXRlcmlhbDtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgcGl4ZWwgZ3JhbnVsYXJpdHkuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdCAqIEBkZWZhdWx0IDMwLjBcclxuXHQgKi9cclxuXHJcblx0Z2V0IGdyYW51bGFyaXR5KCkgeyByZXR1cm4gdGhpcy5waXhlbGF0aW9uTWF0ZXJpYWwuZ3JhbnVsYXJpdHk7IH1cclxuXHJcblx0LyoqXHJcblx0ICogQSBoaWdoZXIgdmFsdWUgeWllbGRzIGNvYXJzZXIgdmlzdWFscy5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0ICovXHJcblxyXG5cdHNldCBncmFudWxhcml0eSh4ID0gMzApIHtcclxuXHJcblx0XHR4ID0gTWF0aC5mbG9vcih4KTtcclxuXHJcblx0XHRpZih4ICUgMiA+IDApIHtcclxuXHJcblx0XHRcdHggKz0gMTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5waXhlbGF0aW9uTWF0ZXJpYWwuZ3JhbnVsYXJpdHkgPSB4O1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIGVmZmVjdC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gcmVhZEJ1ZmZlciAtIFRoZSByZWFkIGJ1ZmZlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSB3cml0ZUJ1ZmZlciAtIFRoZSB3cml0ZSBidWZmZXIuXHJcblx0ICovXHJcblxyXG5cdHJlbmRlcihyZW5kZXJlciwgcmVhZEJ1ZmZlciwgd3JpdGVCdWZmZXIpIHtcclxuXHJcblx0XHR0aGlzLnBpeGVsYXRpb25NYXRlcmlhbC51bmlmb3Jtcy50RGlmZnVzZS52YWx1ZSA9IHJlYWRCdWZmZXIudGV4dHVyZTtcclxuXHJcblx0XHRyZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyVG9TY3JlZW4gPyBudWxsIDogd3JpdGVCdWZmZXIpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZXMgdGhpcyBwYXNzIHdpdGggdGhlIHJlbmRlcmVyJ3Mgc2l6ZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCAtIFRoZSB3aWR0aC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0IC0gVGhlIGhlaWdodC5cclxuXHQgKi9cclxuXHJcblx0c2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcblxyXG5cdFx0dGhpcy5waXhlbGF0aW9uTWF0ZXJpYWwuc2V0UmVzb2x1dGlvbih3aWR0aCwgaGVpZ2h0KTtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBMaW5lYXJGaWx0ZXIsIFJHQkZvcm1hdCwgV2ViR0xSZW5kZXJUYXJnZXQgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgQ29weU1hdGVyaWFsIH0gZnJvbSBcIi4uL21hdGVyaWFsc1wiO1xyXG5pbXBvcnQgeyBQYXNzIH0gZnJvbSBcIi4vcGFzcy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEEgcGFzcyB0aGF0IHJlbmRlcnMgdGhlIHJlc3VsdCBmcm9tIGEgcHJldmlvdXMgcGFzcyB0byBhbm90aGVyIHJlbmRlciB0YXJnZXQuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFNhdmVQYXNzIGV4dGVuZHMgUGFzcyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgc2F2ZSBwYXNzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gW3JlbmRlclRhcmdldF0gLSBUaGUgcmVuZGVyIHRhcmdldCB0byB1c2UgZm9yIHNhdmluZyB0aGUgcmVhZCBidWZmZXIuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbcmVzaXplPXRydWVdIC0gV2hldGhlciB0aGUgcmVuZGVyIHRhcmdldCBzaG91bGQgYWRqdXN0IHRvIHRoZSBzaXplIG9mIHRoZSByZWFkL3dyaXRlIGJ1ZmZlci5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3IocmVuZGVyVGFyZ2V0LCByZXNpemUgPSB0cnVlKSB7XHJcblxyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBuYW1lIG9mIHRoaXMgcGFzcy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiU2F2ZVBhc3NcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENvcHkgc2hhZGVyIG1hdGVyaWFsLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtDb3B5TWF0ZXJpYWx9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5tYXRlcmlhbCA9IG5ldyBDb3B5TWF0ZXJpYWwoKTtcclxuXHJcblx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIHJlbmRlciB0YXJnZXQuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1dlYkdMUmVuZGVyVGFyZ2V0fVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXQgPSAocmVuZGVyVGFyZ2V0ICE9PSB1bmRlZmluZWQpID8gcmVuZGVyVGFyZ2V0IDogbmV3IFdlYkdMUmVuZGVyVGFyZ2V0KDEsIDEsIHtcclxuXHRcdFx0bWluRmlsdGVyOiBMaW5lYXJGaWx0ZXIsXHJcblx0XHRcdG1hZ0ZpbHRlcjogTGluZWFyRmlsdGVyLFxyXG5cdFx0XHRzdGVuY2lsQnVmZmVyOiBmYWxzZSxcclxuXHRcdFx0ZGVwdGhCdWZmZXI6IGZhbHNlXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldC50ZXh0dXJlLm5hbWUgPSBcIlNhdmUuVGFyZ2V0XCI7XHJcblx0XHR0aGlzLnJlbmRlclRhcmdldC50ZXh0dXJlLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHJlbmRlciB0YXJnZXQgc2hvdWxkIGJlIHJlc2l6ZWQgd2hlbiB0aGUgc2l6ZSBvZlxyXG5cdFx0ICogdGhlIGNvbXBvc2VyJ3MgcmVhZC93cml0ZSBidWZmZXIgY2hhbmdlcy5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Qm9vbGVhbn1cclxuXHRcdCAqIEBkZWZhdWx0IHRydWVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMucmVzaXplID0gcmVzaXplO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNhdmVzIHRoZSByZWFkIGJ1ZmZlci5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gcmVhZEJ1ZmZlciAtIFRoZSByZWFkIGJ1ZmZlci5cclxuXHQgKi9cclxuXHJcblx0cmVuZGVyKHJlbmRlcmVyLCByZWFkQnVmZmVyKSB7XHJcblxyXG5cdFx0dGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50RGlmZnVzZS52YWx1ZSA9IHJlYWRCdWZmZXIudGV4dHVyZTtcclxuXHJcblx0XHRyZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyVGFyZ2V0KTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGp1c3RzIHRoZSBmb3JtYXQgb2YgdGhlIHJlbmRlciB0YXJnZXQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxwaGEgLSBXaGV0aGVyIHRoZSByZW5kZXJlciB1c2VzIHRoZSBhbHBoYSBjaGFubmVsIG9yIG5vdC5cclxuXHQgKi9cclxuXHJcblx0aW5pdGlhbGlzZShyZW5kZXJlciwgYWxwaGEpIHtcclxuXHJcblx0XHRpZighYWxwaGEpIHtcclxuXHJcblx0XHRcdHRoaXMucmVuZGVyVGFyZ2V0LnRleHR1cmUuZm9ybWF0ID0gUkdCRm9ybWF0O1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGVzIHRoaXMgcGFzcyB3aXRoIHRoZSByZW5kZXJlcidzIHNpemUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gd2lkdGggLSBUaGUgd2lkdGguXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCAtIFRoZSBoZWlnaHQuXHJcblx0ICovXHJcblxyXG5cdHNldFNpemUod2lkdGgsIGhlaWdodCkge1xyXG5cclxuXHRcdGlmKHRoaXMucmVzaXplKSB7XHJcblxyXG5cdFx0XHR3aWR0aCA9IE1hdGgubWF4KDEsIHdpZHRoKTtcclxuXHRcdFx0aGVpZ2h0ID0gTWF0aC5tYXgoMSwgaGVpZ2h0KTtcclxuXHJcblx0XHRcdHRoaXMucmVuZGVyVGFyZ2V0LnNldFNpemUod2lkdGgsIGhlaWdodCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFBhc3MgfSBmcm9tIFwiLi9wYXNzLmpzXCI7XHJcblxyXG4vKipcclxuICogQSBzaGFkZXIgcGFzcy5cclxuICpcclxuICogVXNlZCB0byByZW5kZXIgYW55IHNoYWRlciBtYXRlcmlhbCBhcyBhIDJEIGZpbHRlci5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgU2hhZGVyUGFzcyBleHRlbmRzIFBhc3Mge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IHNoYWRlciBwYXNzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtTaGFkZXJNYXRlcmlhbH0gbWF0ZXJpYWwgLSBUaGUgc2hhZGVyIG1hdGVyaWFsIHRvIHVzZS5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW3RleHR1cmVJRD1cInREaWZmdXNlXCJdIC0gVGhlIHRleHR1cmUgdW5pZm9ybSBpZGVudGlmaWVyLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcihtYXRlcmlhbCwgdGV4dHVyZUlEID0gXCJ0RGlmZnVzZVwiKSB7XHJcblxyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBuYW1lIG9mIHRoaXMgcGFzcy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiU2hhZGVyUGFzc1wiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhpcyBwYXNzIHJlbmRlcnMgdG8gdGhlIHdyaXRlIGJ1ZmZlci5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBzaGFkZXIgbWF0ZXJpYWwgdG8gdXNlIGZvciByZW5kZXJpbmcuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1NoYWRlck1hdGVyaWFsfVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG5cclxuXHRcdHRoaXMucXVhZC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgbmFtZSBvZiB0aGUgY29sb3Igc2FtcGxlciB1bmlmb3JtIG9mIHRoZSBnaXZlbiBtYXRlcmlhbC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7U3RyaW5nfVxyXG5cdFx0ICogQGRlZmF1bHQgXCJ0RGlmZnVzZVwiXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnRleHR1cmVJRCA9IHRleHR1cmVJRDtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBlZmZlY3QuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHJlYWRCdWZmZXIgLSBUaGUgcmVhZCBidWZmZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gd3JpdGVCdWZmZXIgLSBUaGUgd3JpdGUgYnVmZmVyLlxyXG5cdCAqL1xyXG5cclxuXHRyZW5kZXIocmVuZGVyZXIsIHJlYWRCdWZmZXIsIHdyaXRlQnVmZmVyKSB7XHJcblxyXG5cdFx0aWYodGhpcy5tYXRlcmlhbC51bmlmb3Jtc1t0aGlzLnRleHR1cmVJRF0gIT09IHVuZGVmaW5lZCkge1xyXG5cclxuXHRcdFx0dGhpcy5tYXRlcmlhbC51bmlmb3Jtc1t0aGlzLnRleHR1cmVJRF0udmFsdWUgPSByZWFkQnVmZmVyLnRleHR1cmU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgdGhpcy5yZW5kZXJUb1NjcmVlbiA/IG51bGwgOiB3cml0ZUJ1ZmZlcik7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBDb3B5TWF0ZXJpYWwsIFNob2NrV2F2ZU1hdGVyaWFsIH0gZnJvbSBcIi4uL21hdGVyaWFsc1wiO1xyXG5pbXBvcnQgeyBQYXNzIH0gZnJvbSBcIi4vcGFzcy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEhhbGYgUEkuXHJcbiAqXHJcbiAqIEB0eXBlIHtOdW1iZXJ9XHJcbiAqIEBwcml2YXRlXHJcbiAqIEBzdGF0aWNcclxuICogQGZpbmFsXHJcbiAqL1xyXG5cclxuY29uc3QgSEFMRl9QSSA9IE1hdGguUEkgKiAwLjU7XHJcblxyXG4vKipcclxuICogQSB2ZWN0b3IuXHJcbiAqXHJcbiAqIEB0eXBlIHtWZWN0b3IzfVxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAc3RhdGljXHJcbiAqIEBmaW5hbFxyXG4gKi9cclxuXHJcbmNvbnN0IHYgPSBuZXcgVmVjdG9yMygpO1xyXG5cclxuLyoqXHJcbiAqIEEgdmVjdG9yLlxyXG4gKlxyXG4gKiBAdHlwZSB7VmVjdG9yM31cclxuICogQHByaXZhdGVcclxuICogQHN0YXRpY1xyXG4gKiBAZmluYWxcclxuICovXHJcblxyXG5jb25zdCBhYiA9IG5ldyBWZWN0b3IzKCk7XHJcblxyXG4vKipcclxuICogQSBzaG9jayB3YXZlIHBhc3MuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFNob2NrV2F2ZVBhc3MgZXh0ZW5kcyBQYXNzIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBzaG9jayB3YXZlIHBhc3MuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge0NhbWVyYX0gY2FtZXJhIC0gVGhlIG1haW4gY2FtZXJhLlxyXG5cdCAqIEBwYXJhbSB7VmVjdG9yM30gW2VwaWNlbnRlcl0gLSBUaGUgd29ybGQgcG9zaXRpb24gb2YgdGhlIHNob2NrIHdhdmUgZXBpY2VudGVyLlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBUaGUgb3B0aW9ucy5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuc3BlZWQ9MS4wXSAtIFRoZSBhbmltYXRpb24gc3BlZWQuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm1heFJhZGl1cz0xLjBdIC0gVGhlIGV4dGVudCBvZiB0aGUgc2hvY2sgd2F2ZS5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMud2F2ZVNpemU9MC4yXSAtIFRoZSB3YXZlIHNpemUuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmFtcGxpdHVkZT0wLjA1XSAtIFRoZSBkaXN0b3J0aW9uIGFtcGxpdHVkZS5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3IoY2FtZXJhLCBlcGljZW50ZXIgPSBuZXcgVmVjdG9yMygpLCBvcHRpb25zID0ge30pIHtcclxuXHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG5hbWUgb2YgdGhpcyBwYXNzLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uYW1lID0gXCJTaG9ja1dhdmVQYXNzXCI7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGlzIHBhc3MgcmVuZGVycyB0byB0aGUgd3JpdGUgYnVmZmVyLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSB0cnVlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG1haW4gY2FtZXJhLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtPYmplY3QzRH1cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubWFpbkNhbWVyYSA9IGNhbWVyYTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBlcGljZW50ZXIuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1ZlY3RvcjN9XHJcblx0XHQgKiBAZXhhbXBsZSBzaG9ja1dhdmVQYXNzLmVwaWNlbnRlciA9IG15TWVzaC5wb3NpdGlvbjtcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuZXBpY2VudGVyID0gZXBpY2VudGVyO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG9iamVjdCBwb3NpdGlvbiBpbiBzY3JlZW4gc3BhY2UuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1ZlY3RvcjN9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5zY3JlZW5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgc3BlZWQgb2YgdGhlIHNob2NrIHdhdmUgYW5pbWF0aW9uLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0XHQgKiBAZGVmYXVsdCAyLjBcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuc3BlZWQgPSAob3B0aW9ucy5zcGVlZCAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMuc3BlZWQgOiAyLjA7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIHRpbWUgYWNjdW11bGF0b3IuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge051bWJlcn1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnRpbWUgPSAwLjA7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc2hvY2sgd2F2ZSBhbmltYXRpb24gaXMgYWN0aXZlLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtCb29sZWFufVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIHNob2NrIHdhdmUgc2hhZGVyIG1hdGVyaWFsLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtTaG9ja1dhdmVNYXRlcmlhbH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnNob2NrV2F2ZU1hdGVyaWFsID0gbmV3IFNob2NrV2F2ZU1hdGVyaWFsKG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMuc2hvY2tXYXZlTWF0ZXJpYWwudW5pZm9ybXMuY2VudGVyLnZhbHVlID0gdGhpcy5zY3JlZW5Qb3NpdGlvbjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgY29weSBzaGFkZXIgbWF0ZXJpYWwuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0NvcHlNYXRlcmlhbH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmNvcHlNYXRlcmlhbCA9IG5ldyBDb3B5TWF0ZXJpYWwoKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBFbWl0cyB0aGUgc2hvY2sgd2F2ZS5cclxuXHQgKi9cclxuXHJcblx0ZXhwbG9kZSgpIHtcclxuXHJcblx0XHR0aGlzLnRpbWUgPSAwLjA7XHJcblx0XHR0aGlzLmFjdGl2ZSA9IHRydWU7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgZWZmZWN0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSByZW5kZXJlciAtIFRoZSByZW5kZXJlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSByZWFkQnVmZmVyIC0gVGhlIHJlYWQgYnVmZmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHdyaXRlQnVmZmVyIC0gVGhlIHdyaXRlIGJ1ZmZlci5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gZGVsdGEgLSBUaGUgcmVuZGVyIGRlbHRhIHRpbWUuXHJcblx0ICovXHJcblxyXG5cdHJlbmRlcihyZW5kZXJlciwgcmVhZEJ1ZmZlciwgd3JpdGVCdWZmZXIsIGRlbHRhKSB7XHJcblxyXG5cdFx0Y29uc3QgZXBpY2VudGVyID0gdGhpcy5lcGljZW50ZXI7XHJcblx0XHRjb25zdCBtYWluQ2FtZXJhID0gdGhpcy5tYWluQ2FtZXJhO1xyXG5cdFx0Y29uc3Qgc2NyZWVuUG9zaXRpb24gPSB0aGlzLnNjcmVlblBvc2l0aW9uO1xyXG5cclxuXHRcdGNvbnN0IHNob2NrV2F2ZU1hdGVyaWFsID0gdGhpcy5zaG9ja1dhdmVNYXRlcmlhbDtcclxuXHRcdGNvbnN0IHVuaWZvcm1zID0gc2hvY2tXYXZlTWF0ZXJpYWwudW5pZm9ybXM7XHJcblx0XHRjb25zdCBjZW50ZXIgPSB1bmlmb3Jtcy5jZW50ZXI7XHJcblx0XHRjb25zdCByYWRpdXMgPSB1bmlmb3Jtcy5yYWRpdXM7XHJcblx0XHRjb25zdCBtYXhSYWRpdXMgPSB1bmlmb3Jtcy5tYXhSYWRpdXM7XHJcblx0XHRjb25zdCB3YXZlU2l6ZSA9IHVuaWZvcm1zLndhdmVTaXplO1xyXG5cclxuXHRcdHRoaXMuY29weU1hdGVyaWFsLnVuaWZvcm1zLnREaWZmdXNlLnZhbHVlID0gcmVhZEJ1ZmZlci50ZXh0dXJlO1xyXG5cdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gdGhpcy5jb3B5TWF0ZXJpYWw7XHJcblxyXG5cdFx0aWYodGhpcy5hY3RpdmUpIHtcclxuXHJcblx0XHRcdC8vIENhbGN1bGF0ZSBkaXJlY3Rpb24gdmVjdG9ycy5cclxuXHRcdFx0bWFpbkNhbWVyYS5nZXRXb3JsZERpcmVjdGlvbih2KTtcclxuXHRcdFx0YWIuY29weShtYWluQ2FtZXJhLnBvc2l0aW9uKS5zdWIoZXBpY2VudGVyKTtcclxuXHJcblx0XHRcdC8vIERvbid0IHJlbmRlciB0aGUgZWZmZWN0IGlmIHRoZSBvYmplY3QgaXMgYmVoaW5kIHRoZSBjYW1lcmEuXHJcblx0XHRcdGlmKHYuYW5nbGVUbyhhYikgPiBIQUxGX1BJKSB7XHJcblxyXG5cdFx0XHRcdC8vIFNjYWxlIHRoZSBlZmZlY3QgYmFzZWQgb24gZGlzdGFuY2UgdG8gdGhlIG9iamVjdC5cclxuXHRcdFx0XHR1bmlmb3Jtcy5jYW1lcmFEaXN0YW5jZS52YWx1ZSA9IG1haW5DYW1lcmEucG9zaXRpb24uZGlzdGFuY2VUbyhlcGljZW50ZXIpO1xyXG5cclxuXHRcdFx0XHQvLyBDYWxjdWxhdGUgdGhlIHNjcmVlbiBwb3NpdGlvbiBvZiB0aGUgZXBpY2VudGVyLlxyXG5cdFx0XHRcdHNjcmVlblBvc2l0aW9uLmNvcHkoZXBpY2VudGVyKS5wcm9qZWN0KG1haW5DYW1lcmEpO1xyXG5cdFx0XHRcdGNlbnRlci52YWx1ZS54ID0gKHNjcmVlblBvc2l0aW9uLnggKyAxLjApICogMC41O1xyXG5cdFx0XHRcdGNlbnRlci52YWx1ZS55ID0gKHNjcmVlblBvc2l0aW9uLnkgKyAxLjApICogMC41O1xyXG5cclxuXHRcdFx0XHR1bmlmb3Jtcy50RGlmZnVzZS52YWx1ZSA9IHJlYWRCdWZmZXIudGV4dHVyZTtcclxuXHRcdFx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSBzaG9ja1dhdmVNYXRlcmlhbDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFVwZGF0ZSB0aGUgc2hvY2sgd2F2ZSByYWRpdXMgYmFzZWQgb24gdGltZS5cclxuXHRcdFx0dGhpcy50aW1lICs9IGRlbHRhO1xyXG5cdFx0XHRyYWRpdXMudmFsdWUgPSB0aGlzLnRpbWUgKiB0aGlzLnNwZWVkIC0gd2F2ZVNpemUudmFsdWU7XHJcblxyXG5cdFx0XHRpZihyYWRpdXMudmFsdWUgPj0gKG1heFJhZGl1cy52YWx1ZSArIHdhdmVTaXplLnZhbHVlKSAqIDIpIHtcclxuXHJcblx0XHRcdFx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlclRvU2NyZWVuID8gbnVsbCA6IHdyaXRlQnVmZmVyKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGVzIHRoaXMgcGFzcyB3aXRoIHRoZSByZW5kZXJlcidzIHNpemUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gd2lkdGggLSBUaGUgd2lkdGguXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCAtIFRoZSBoZWlnaHQuXHJcblx0ICovXHJcblxyXG5cdHNldFNpemUod2lkdGgsIGhlaWdodCkge1xyXG5cclxuXHRcdHRoaXMuc2hvY2tXYXZlTWF0ZXJpYWwudW5pZm9ybXMuYXNwZWN0LnZhbHVlID0gd2lkdGggLyBoZWlnaHQ7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRMaW5lYXJGaWx0ZXIsXHJcblx0TmVhcmVzdEZpbHRlcixcclxuXHRSR0JBRm9ybWF0LFxyXG5cdFJHQkZvcm1hdCxcclxuXHRUZXh0dXJlLFxyXG5cdFdlYkdMUmVuZGVyVGFyZ2V0XHJcbn0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5pbXBvcnQgeyBTTUFBQmxlbmRNYXRlcmlhbCwgU01BQUNvbG9yRWRnZXNNYXRlcmlhbCwgU01BQVdlaWdodHNNYXRlcmlhbCB9IGZyb20gXCIuLi9tYXRlcmlhbHNcIjtcclxuaW1wb3J0IHsgUGFzcyB9IGZyb20gXCIuL3Bhc3MuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBTdWJwaXhlbCBNb3JwaG9sb2dpY2FsIEFudGlhbGlhc2luZyAoU01BQSkgdjIuOC5cclxuICpcclxuICogUHJlc2V0OiBTTUFBIDF4IE1lZGl1bSAod2l0aCBjb2xvciBlZGdlIGRldGVjdGlvbikuXHJcbiAqICBodHRwczovL2dpdGh1Yi5jb20vaXJ5b2t1L3NtYWEvcmVsZWFzZXMvdGFnL3YyLjhcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgU01BQVBhc3MgZXh0ZW5kcyBQYXNzIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBTTUFBIHBhc3MuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge0ltYWdlfSBJbWFnZSAtIFRoaXMgcGFzcyByZXF1aXJlcyBhbiBJbWFnZSBjbGFzcyB0byBjcmVhdGUgaW50ZXJuYWwgdGV4dHVyZXMuIFByb3ZpZGUgd2luZG93LkltYWdlIGluIGEgYnJvd3NlciBlbnZpcm9ubWVudC5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3IoSW1hZ2UpIHtcclxuXHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG5hbWUgb2YgdGhpcyBwYXNzLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uYW1lID0gXCJTTUFBUGFzc1wiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhpcyBwYXNzIHJlbmRlcnMgdG8gdGhlIHdyaXRlIGJ1ZmZlci5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgcmVuZGVyIHRhcmdldCBmb3IgdGhlIGNvbG9yIGVkZ2UgZGV0ZWN0aW9uLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtXZWJHTFJlbmRlclRhcmdldH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldENvbG9yRWRnZXMgPSBuZXcgV2ViR0xSZW5kZXJUYXJnZXQoMSwgMSwge1xyXG5cdFx0XHRtaW5GaWx0ZXI6IExpbmVhckZpbHRlcixcclxuXHRcdFx0Zm9ybWF0OiBSR0JGb3JtYXQsXHJcblx0XHRcdHN0ZW5jaWxCdWZmZXI6IGZhbHNlLFxyXG5cdFx0XHRkZXB0aEJ1ZmZlcjogZmFsc2VcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0Q29sb3JFZGdlcy50ZXh0dXJlLm5hbWUgPSBcIlNNQUEuQ29sb3JFZGdlc1wiO1xyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRDb2xvckVkZ2VzLnRleHR1cmUuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIHJlbmRlciB0YXJnZXQgZm9yIHRoZSBTTUFBIHdlaWdodHMuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1dlYkdMUmVuZGVyVGFyZ2V0fVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0V2VpZ2h0cyA9IHRoaXMucmVuZGVyVGFyZ2V0Q29sb3JFZGdlcy5jbG9uZSgpO1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0V2VpZ2h0cy50ZXh0dXJlLm5hbWUgPSBcIlNNQUEuV2VpZ2h0c1wiO1xyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRXZWlnaHRzLnRleHR1cmUuZm9ybWF0ID0gUkdCQUZvcm1hdDtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNNQUEgY29sb3IgZWRnZSBkZXRlY3Rpb24gc2hhZGVyIG1hdGVyaWFsLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtTTUFBQ29sb3JFZGdlc01hdGVyaWFsfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuY29sb3JFZGdlc01hdGVyaWFsID0gbmV3IFNNQUFDb2xvckVkZ2VzTWF0ZXJpYWwoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNNQUEgd2VpZ2h0cyBzaGFkZXIgbWF0ZXJpYWwuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1NNQUFXZWlnaHRzTWF0ZXJpYWx9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy53ZWlnaHRzTWF0ZXJpYWwgPSBuZXcgU01BQVdlaWdodHNNYXRlcmlhbCgpO1xyXG5cclxuXHRcdGNvbnN0IGFyZWFJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0YXJlYUltYWdlLnNyYyA9IHRoaXMud2VpZ2h0c01hdGVyaWFsLmFyZWFJbWFnZTtcclxuXHJcblx0XHRjb25zdCBhcmVhVGV4dHVyZSA9IG5ldyBUZXh0dXJlKCk7XHJcblx0XHRhcmVhVGV4dHVyZS5pbWFnZSA9IGFyZWFJbWFnZTtcclxuXHRcdGFyZWFUZXh0dXJlLm5hbWUgPSBcIlNNQUEuQXJlYVwiO1xyXG5cdFx0YXJlYVRleHR1cmUubWluRmlsdGVyID0gTGluZWFyRmlsdGVyO1xyXG5cdFx0YXJlYVRleHR1cmUuZm9ybWF0ID0gUkdCRm9ybWF0O1xyXG5cdFx0YXJlYVRleHR1cmUuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XHJcblx0XHRhcmVhVGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRhcmVhVGV4dHVyZS5mbGlwWSA9IGZhbHNlO1xyXG5cclxuXHRcdGNvbnN0IHNlYXJjaEltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0XHRzZWFyY2hJbWFnZS5zcmMgPSB0aGlzLndlaWdodHNNYXRlcmlhbC5zZWFyY2hJbWFnZTtcclxuXHJcblx0XHRjb25zdCBzZWFyY2hUZXh0dXJlID0gbmV3IFRleHR1cmUoKTtcclxuXHRcdHNlYXJjaFRleHR1cmUuaW1hZ2UgPSBzZWFyY2hJbWFnZTtcclxuXHRcdHNlYXJjaFRleHR1cmUubmFtZSA9IFwiU01BQS5TZWFyY2hcIjtcclxuXHRcdHNlYXJjaFRleHR1cmUubWFnRmlsdGVyID0gTmVhcmVzdEZpbHRlcjtcclxuXHRcdHNlYXJjaFRleHR1cmUubWluRmlsdGVyID0gTmVhcmVzdEZpbHRlcjtcclxuXHRcdHNlYXJjaFRleHR1cmUuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XHJcblx0XHRzZWFyY2hUZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdHNlYXJjaFRleHR1cmUuZmxpcFkgPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLndlaWdodHNNYXRlcmlhbC51bmlmb3Jtcy50RGlmZnVzZS52YWx1ZSA9IHRoaXMucmVuZGVyVGFyZ2V0Q29sb3JFZGdlcy50ZXh0dXJlO1xyXG5cdFx0dGhpcy53ZWlnaHRzTWF0ZXJpYWwudW5pZm9ybXMudEFyZWEudmFsdWUgPSBhcmVhVGV4dHVyZTtcclxuXHRcdHRoaXMud2VpZ2h0c01hdGVyaWFsLnVuaWZvcm1zLnRTZWFyY2gudmFsdWUgPSBzZWFyY2hUZXh0dXJlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU01BQSBibGVuZCBzaGFkZXIgbWF0ZXJpYWwuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1NNQUFCbGVuZE1hdGVyaWFsfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuYmxlbmRNYXRlcmlhbCA9IG5ldyBTTUFBQmxlbmRNYXRlcmlhbCgpO1xyXG5cclxuXHRcdHRoaXMuYmxlbmRNYXRlcmlhbC51bmlmb3Jtcy50V2VpZ2h0cy52YWx1ZSA9IHRoaXMucmVuZGVyVGFyZ2V0V2VpZ2h0cy50ZXh0dXJlO1xyXG5cclxuXHRcdHRoaXMucXVhZC5tYXRlcmlhbCA9IHRoaXMuYmxlbmRNYXRlcmlhbDtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBbnRpYWxpYXNlcyB0aGUgc2NlbmUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHJlYWRCdWZmZXIgLSBUaGUgcmVhZCBidWZmZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gd3JpdGVCdWZmZXIgLSBUaGUgd3JpdGUgYnVmZmVyLlxyXG5cdCAqL1xyXG5cclxuXHRyZW5kZXIocmVuZGVyZXIsIHJlYWRCdWZmZXIsIHdyaXRlQnVmZmVyKSB7XHJcblxyXG5cdFx0Ly8gRGV0ZWN0IGNvbG9yIGVkZ2VzLlxyXG5cdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gdGhpcy5jb2xvckVkZ2VzTWF0ZXJpYWw7XHJcblx0XHR0aGlzLmNvbG9yRWRnZXNNYXRlcmlhbC51bmlmb3Jtcy50RGlmZnVzZS52YWx1ZSA9IHJlYWRCdWZmZXIudGV4dHVyZTtcclxuXHRcdHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgdGhpcy5yZW5kZXJUYXJnZXRDb2xvckVkZ2VzLCB0cnVlKTtcclxuXHJcblx0XHQvLyBDb21wdXRlIGVkZ2Ugd2VpZ2h0cy5cclxuXHRcdHRoaXMucXVhZC5tYXRlcmlhbCA9IHRoaXMud2VpZ2h0c01hdGVyaWFsO1xyXG5cdFx0cmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlclRhcmdldFdlaWdodHMsIGZhbHNlKTtcclxuXHJcblx0XHQvLyBBcHBseSB0aGUgYW50aWFsaWFzaW5nIGZpbHRlciB0byB0aGUgY29sb3JzLlxyXG5cdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gdGhpcy5ibGVuZE1hdGVyaWFsO1xyXG5cdFx0dGhpcy5ibGVuZE1hdGVyaWFsLnVuaWZvcm1zLnREaWZmdXNlLnZhbHVlID0gcmVhZEJ1ZmZlci50ZXh0dXJlO1xyXG5cclxuXHRcdHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgdGhpcy5yZW5kZXJUb1NjcmVlbiA/IG51bGwgOiB3cml0ZUJ1ZmZlcik7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlcyB0aGlzIHBhc3Mgd2l0aCB0aGUgcmVuZGVyZXIncyBzaXplLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIC0gVGhlIHdpZHRoLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgLSBUaGUgaGVpZ2h0LlxyXG5cdCAqL1xyXG5cclxuXHRzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldENvbG9yRWRnZXMuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0V2VpZ2h0cy5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuXHRcdHRoaXMuY29sb3JFZGdlc01hdGVyaWFsLnVuaWZvcm1zLnRleGVsU2l6ZS52YWx1ZS5jb3B5KFxyXG5cdFx0XHR0aGlzLndlaWdodHNNYXRlcmlhbC51bmlmb3Jtcy50ZXhlbFNpemUudmFsdWUuY29weShcclxuXHRcdFx0XHR0aGlzLmJsZW5kTWF0ZXJpYWwudW5pZm9ybXMudGV4ZWxTaXplLnZhbHVlLnNldChcclxuXHRcdFx0XHRcdDEuMCAvIHdpZHRoLCAxLjAgLyBoZWlnaHRcclxuXHRcdCkpKTtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBBZGRpdGl2ZUJsZW5kaW5nIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IENvcHlNYXRlcmlhbCB9IGZyb20gXCIuLi9tYXRlcmlhbHNcIjtcclxuaW1wb3J0IHsgUGFzcyB9IGZyb20gXCIuL3Bhc3MuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBBIHBhc3MgdGhhdCByZW5kZXJzIGEgZ2l2ZW4gdGV4dHVyZS5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dHVyZVBhc3MgZXh0ZW5kcyBQYXNzIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyB0ZXh0dXJlIHBhc3MuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1RleHR1cmV9IHRleHR1cmUgLSBUaGUgdGV4dHVyZS5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wYWNpdHk9MS4wXSAtIFRoZSB0ZXh0dXJlIG9wYWNpdHkuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKHRleHR1cmUsIG9wYWNpdHkgPSAxLjApIHtcclxuXHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG5hbWUgb2YgdGhpcyBwYXNzLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uYW1lID0gXCJUZXh0dXJlUGFzc1wiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBjb3B5IHNoYWRlciBtYXRlcmlhbCB1c2VkIGZvciByZW5kZXJpbmcgdG8gdGV4dHVyZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Q29weU1hdGVyaWFsfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuY29weU1hdGVyaWFsID0gbmV3IENvcHlNYXRlcmlhbCgpO1xyXG5cdFx0dGhpcy5jb3B5TWF0ZXJpYWwuYmxlbmRpbmcgPSBBZGRpdGl2ZUJsZW5kaW5nO1xyXG5cdFx0dGhpcy5jb3B5TWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlO1xyXG5cclxuXHRcdHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XHJcblx0XHR0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG5cclxuXHRcdHRoaXMucXVhZC5tYXRlcmlhbCA9IHRoaXMuY29weU1hdGVyaWFsO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSB0ZXh0dXJlLlxyXG5cdCAqXHJcblx0ICogQHR5cGUge1RleHR1cmV9XHJcblx0ICovXHJcblxyXG5cdGdldCB0ZXh0dXJlKCkgeyByZXR1cm4gdGhpcy5jb3B5TWF0ZXJpYWwudW5pZm9ybXMudERpZmZ1c2UudmFsdWU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge1RleHR1cmV9XHJcblx0ICovXHJcblxyXG5cdHNldCB0ZXh0dXJlKHgpIHsgdGhpcy5jb3B5TWF0ZXJpYWwudW5pZm9ybXMudERpZmZ1c2UudmFsdWUgPSB4OyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBvcGFjaXR5LlxyXG5cdCAqXHJcblx0ICogQHR5cGUge051bWJlcn1cclxuXHQgKiBAZGVmYXVsdCAxLjBcclxuXHQgKi9cclxuXHJcblx0Z2V0IG9wYWNpdHkoKSB7IHJldHVybiB0aGlzLmNvcHlNYXRlcmlhbC51bmlmb3Jtcy5vcGFjaXR5LnZhbHVlOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0ICovXHJcblxyXG5cdHNldCBvcGFjaXR5KHggPSAxLjApIHsgdGhpcy5jb3B5TWF0ZXJpYWwudW5pZm9ybXMub3BhY2l0eS52YWx1ZSA9IHg7IH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgZWZmZWN0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSByZW5kZXJlciAtIFRoZSByZW5kZXJlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSByZWFkQnVmZmVyIC0gVGhlIHJlYWQgYnVmZmVyLlxyXG5cdCAqL1xyXG5cclxuXHRyZW5kZXIocmVuZGVyZXIsIHJlYWRCdWZmZXIpIHtcclxuXHJcblx0XHRyZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyVG9TY3JlZW4gPyBudWxsIDogcmVhZEJ1ZmZlcik7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRMaW5lYXJGaWx0ZXIsXHJcblx0TGluZWFyTWlwTWFwTGluZWFyRmlsdGVyLFxyXG5cdE1lc2hCYXNpY01hdGVyaWFsLFxyXG5cdFJHQkZvcm1hdCxcclxuXHRXZWJHTFJlbmRlclRhcmdldFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRBZGFwdGl2ZUx1bWlub3NpdHlNYXRlcmlhbCxcclxuXHRDb3B5TWF0ZXJpYWwsXHJcblx0THVtaW5vc2l0eU1hdGVyaWFsLFxyXG5cdFRvbmVNYXBwaW5nTWF0ZXJpYWxcclxufSBmcm9tIFwiLi4vbWF0ZXJpYWxzXCI7XHJcblxyXG5pbXBvcnQgeyBQYXNzIH0gZnJvbSBcIi4vcGFzcy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIFJvdW5kcyB0aGUgZ2l2ZW4gbnVtYmVyIHVwIHRvIHRoZSBuZXh0IHBvd2VyIG9mIHR3by5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHN0YXRpY1xyXG4gKiBAcGFyYW0ge051bWJlcn0gbiAtIEEgbnVtYmVyLlxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSBuZXh0IHBvd2VyIG9mIHR3by5cclxuICovXHJcblxyXG5mdW5jdGlvbiBjZWlsMihuKSB7IHJldHVybiBNYXRoLnBvdygyLCBNYXRoLm1heCgwLCBNYXRoLmNlaWwoTWF0aC5sb2cyKG4pKSkpOyB9XHJcblxyXG4vKipcclxuICogQSB0b25lIG1hcHBpbmcgcGFzcyB0aGF0IHN1cHBvcnRzIGFkYXB0aXZlIGx1bWlub3NpdHkuXHJcbiAqXHJcbiAqIElmIGFkYXB0aXZpdHkgaXMgZW5hYmxlZCwgdGhpcyBwYXNzIGdlbmVyYXRlcyBhIHRleHR1cmUgdGhhdCByZXByZXNlbnRzIHRoZVxyXG4gKiBsdW1pbm9zaXR5IG9mIHRoZSBjdXJyZW50IHNjZW5lIGFuZCBhZGp1c3RzIGl0IG92ZXIgdGltZSB0byBzaW11bGF0ZSB0aGVcclxuICogb3B0aWMgbmVydmUgcmVzcG9uZGluZyB0byB0aGUgYW1vdW50IG9mIGxpZ2h0IGl0IGlzIHJlY2VpdmluZy5cclxuICpcclxuICogUmVmZXJlbmNlOlxyXG4gKiAgR0RDMjAwNyAtIFdvbGZnYW5nIEVuZ2VsLCBQb3N0LVByb2Nlc3NpbmcgUGlwZWxpbmVcclxuICogIGh0dHA6Ly9wZXJzby51bml2LWx5b24xLmZyL2plYW4tY2xhdWRlLmllaGwvUHVibGljL2VkdWMvR0FNQS8yMDA3L2dkYzA3L1Bvc3QtUHJvY2Vzc2luZ19QaXBlbGluZS5wZGZcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgVG9uZU1hcHBpbmdQYXNzIGV4dGVuZHMgUGFzcyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgdG9uZSBtYXBwaW5nIHBhc3MuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gVGhlIG9wdGlvbnMuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGFwdGl2ZT10cnVlXSAtIFdoZXRoZXIgdGhlIHRvbmUgbWFwcGluZyBzaG91bGQgdXNlIGFuIGFkYXB0aXZlIGx1bWluYW5jZSBtYXAuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJlc29sdXRpb249MjU2XSAtIFRoZSByZW5kZXIgdGV4dHVyZSByZXNvbHV0aW9uLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kaXN0aW5jdGlvbj0xLjBdIC0gQSBsdW1pbmFuY2UgZGlzdGluY3Rpb24gZmFjdG9yLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcclxuXHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG5hbWUgb2YgdGhpcyBwYXNzLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uYW1lID0gXCJUb25lTWFwcGluZ1Bhc3NcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoaXMgcGFzcyByZW5kZXJzIHRvIHRoZSB3cml0ZSBidWZmZXIuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IHRydWU7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgcmVuZGVyIHRhcmdldCBmb3IgdGhlIGN1cnJlbnQgbHVtaW5vc2l0eS5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7V2ViR0xSZW5kZXJUYXJnZXR9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHRvZG8gVXNlIFJFRCBmb3JtYXQgaW4gV2ViR0wgMi4wLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRMdW1pbm9zaXR5ID0gbmV3IFdlYkdMUmVuZGVyVGFyZ2V0KDEsIDEsIHtcclxuXHRcdFx0bWluRmlsdGVyOiBMaW5lYXJNaXBNYXBMaW5lYXJGaWx0ZXIsXHJcblx0XHRcdG1hZ0ZpbHRlcjogTGluZWFyRmlsdGVyLFxyXG5cdFx0XHRmb3JtYXQ6IFJHQkZvcm1hdCxcclxuXHRcdFx0c3RlbmNpbEJ1ZmZlcjogZmFsc2UsXHJcblx0XHRcdGRlcHRoQnVmZmVyOiBmYWxzZVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRMdW1pbm9zaXR5LnRleHR1cmUubmFtZSA9IFwiVG9uZU1hcHBpbmcuTHVtaW5vc2l0eVwiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIHJlbmRlciB0YXJnZXQgZm9yIGFkYXB0ZWQgbHVtaW5vc2l0eS5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7V2ViR0xSZW5kZXJUYXJnZXR9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRBZGFwdGVkID0gdGhpcy5yZW5kZXJUYXJnZXRMdW1pbm9zaXR5LmNsb25lKCk7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRBZGFwdGVkLnRleHR1cmUubmFtZSA9IFwiVG9uZU1hcHBpbmcuQWRhcHRlZEx1bWlub3NpdHlcIjtcclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0QWRhcHRlZC50ZXh0dXJlLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRBZGFwdGVkLnRleHR1cmUubWluRmlsdGVyID0gTGluZWFyRmlsdGVyO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSByZW5kZXIgdGFyZ2V0IHRoYXQgaG9sZHMgYSBjb3B5IG9mIHRoZSBhZGFwdGVkIGxpbW9ub3NpdHkuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1dlYkdMUmVuZGVyVGFyZ2V0fVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0UHJldmlvdXMgPSB0aGlzLnJlbmRlclRhcmdldEFkYXB0ZWQuY2xvbmUoKTtcclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldFByZXZpb3VzLnRleHR1cmUubmFtZSA9IFwiVG9uZU1hcHBpbmcuUHJldmlvdXNMdW1pbm9zaXR5XCI7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDb3B5IHNoYWRlciBtYXRlcmlhbCB1c2VkIGZvciBzYXZpbmcgdGhlIGx1bWluYW5jZSBtYXAuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0NvcHlNYXRlcmlhbH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmNvcHlNYXRlcmlhbCA9IG5ldyBDb3B5TWF0ZXJpYWwoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgbHVtaW5vc2l0eSBzaGFkZXIgbWF0ZXJpYWwuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0x1bWlub3NpdHlNYXRlcmlhbH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmx1bWlub3NpdHlNYXRlcmlhbCA9IG5ldyBMdW1pbm9zaXR5TWF0ZXJpYWwoKTtcclxuXHJcblx0XHR0aGlzLmx1bWlub3NpdHlNYXRlcmlhbC51bmlmb3Jtcy5kaXN0aW5jdGlvbi52YWx1ZSA9IChvcHRpb25zLmRpc3RpbmN0aW9uICE9PSB1bmRlZmluZWQpID8gb3B0aW9ucy5kaXN0aW5jdGlvbiA6IDEuMDtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEFuIGFkYXB0aXZlIGx1bWluYW5jZSBzaGFkZXIgbWF0ZXJpYWwuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0FkYXB0aXZlTHVtaW5vc2l0eU1hdGVyaWFsfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuYWRhcHRpdmVMdW1pbm9zaXR5TWF0ZXJpYWwgPSBuZXcgQWRhcHRpdmVMdW1pbm9zaXR5TWF0ZXJpYWwoKTtcclxuXHJcblx0XHR0aGlzLnJlc29sdXRpb24gPSBvcHRpb25zLnJlc29sdXRpb247XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIHRvbmUgbWFwcGluZyBzaGFkZXIgbWF0ZXJpYWwuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1RvbmVNYXBwaW5nTWF0ZXJpYWx9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy50b25lTWFwcGluZ01hdGVyaWFsID0gbmV3IFRvbmVNYXBwaW5nTWF0ZXJpYWwoKTtcclxuXHJcblx0XHR0aGlzLmFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgcmVzb2x1dGlvbiBvZiB0aGUgcmVuZGVyIHRhcmdldHMuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdCAqIEBkZWZhdWx0IDI1NlxyXG5cdCAqL1xyXG5cclxuXHRnZXQgcmVzb2x1dGlvbigpIHsgcmV0dXJuIHRoaXMucmVuZGVyVGFyZ2V0THVtaW5vc2l0eS53aWR0aDsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgcmVzb2x1dGlvbiBvZiB0aGUgcmVuZGVyIHRhcmdldHMuIE11c3QgYmUgYSBwb3dlciBvZiB0d28gZm9yIG1pcG1hcHMuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdCAqL1xyXG5cclxuXHRzZXQgcmVzb2x1dGlvbih4ID0gMjU2KSB7XHJcblxyXG5cdFx0eCA9IGNlaWwyKHgpO1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0THVtaW5vc2l0eS5zZXRTaXplKHgsIHgpO1xyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRQcmV2aW91cy5zZXRTaXplKHgsIHgpO1xyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRBZGFwdGVkLnNldFNpemUoeCwgeCk7XHJcblxyXG5cdFx0dGhpcy5hZGFwdGl2ZUx1bWlub3NpdHlNYXRlcmlhbC5kZWZpbmVzLk1JUF9MRVZFTF8xWDEgPSAoTWF0aC5yb3VuZChNYXRoLmxvZyh4KSkgLyBNYXRoLmxvZygyKSkudG9GaXhlZCgxKTtcclxuXHRcdHRoaXMuYWRhcHRpdmVMdW1pbm9zaXR5TWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFdoZXRoZXIgdGhpcyBwYXNzIHVzZXMgYWRhcHRpdmUgbHVtaW5vc2l0eS5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtCb29sZWFufVxyXG5cdCAqIEBkZWZhdWx0IHRydWVcclxuXHQgKi9cclxuXHJcblx0Z2V0IGFkYXB0aXZlKCkgeyByZXR1cm4gKHRoaXMudG9uZU1hcHBpbmdNYXRlcmlhbC5kZWZpbmVzLkFEQVBURURfTFVNSU5BTkNFICE9PSB1bmRlZmluZWQpOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFdoZXRoZXIgdGhpcyBwYXNzIHNob3VsZCB1c2UgYWRhcHRpdmUgbHVtaW5vc2l0eS5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtCb29sZWFufVxyXG5cdCAqL1xyXG5cclxuXHRzZXQgYWRhcHRpdmUoeCA9IHRydWUpIHtcclxuXHJcblx0XHRpZih4KSB7XHJcblxyXG5cdFx0XHR0aGlzLnRvbmVNYXBwaW5nTWF0ZXJpYWwuZGVmaW5lcy5BREFQVEVEX0xVTUlOQU5DRSA9IFwiMVwiO1xyXG5cdFx0XHR0aGlzLnRvbmVNYXBwaW5nTWF0ZXJpYWwudW5pZm9ybXMubHVtaW5hbmNlTWFwLnZhbHVlID0gdGhpcy5yZW5kZXJUYXJnZXRBZGFwdGVkLnRleHR1cmU7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGRlbGV0ZSB0aGlzLnRvbmVNYXBwaW5nTWF0ZXJpYWwuZGVmaW5lcy5BREFQVEVEX0xVTUlOQU5DRTtcclxuXHRcdFx0dGhpcy50b25lTWFwcGluZ01hdGVyaWFsLnVuaWZvcm1zLmx1bWluYW5jZU1hcC52YWx1ZSA9IG51bGw7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudG9uZU1hcHBpbmdNYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgZWZmZWN0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSByZW5kZXJlciAtIFRoZSByZW5kZXJlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSByZWFkQnVmZmVyIC0gVGhlIHJlYWQgYnVmZmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHdyaXRlQnVmZmVyIC0gVGhlIHdyaXRlIGJ1ZmZlci5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gZGVsdGEgLSBUaGUgcmVuZGVyIGRlbHRhIHRpbWUuXHJcblx0ICovXHJcblxyXG5cdHJlbmRlcihyZW5kZXJlciwgcmVhZEJ1ZmZlciwgd3JpdGVCdWZmZXIsIGRlbHRhKSB7XHJcblxyXG5cdFx0Y29uc3QgcXVhZCA9IHRoaXMucXVhZDtcclxuXHRcdGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZTtcclxuXHRcdGNvbnN0IGNhbWVyYSA9IHRoaXMuY2FtZXJhO1xyXG5cclxuXHRcdGNvbnN0IGFkYXB0aXZlTHVtaW5vc2l0eU1hdGVyaWFsID0gdGhpcy5hZGFwdGl2ZUx1bWlub3NpdHlNYXRlcmlhbDtcclxuXHRcdGNvbnN0IGx1bWlub3NpdHlNYXRlcmlhbCA9IHRoaXMubHVtaW5vc2l0eU1hdGVyaWFsO1xyXG5cdFx0Y29uc3QgdG9uZU1hcHBpbmdNYXRlcmlhbCA9IHRoaXMudG9uZU1hcHBpbmdNYXRlcmlhbDtcclxuXHRcdGNvbnN0IGNvcHlNYXRlcmlhbCA9IHRoaXMuY29weU1hdGVyaWFsO1xyXG5cclxuXHRcdGNvbnN0IHJlbmRlclRhcmdldFByZXZpb3VzID0gdGhpcy5yZW5kZXJUYXJnZXRQcmV2aW91cztcclxuXHRcdGNvbnN0IHJlbmRlclRhcmdldEx1bWlub3NpdHkgPSB0aGlzLnJlbmRlclRhcmdldEx1bWlub3NpdHk7XHJcblx0XHRjb25zdCByZW5kZXJUYXJnZXRBZGFwdGVkID0gdGhpcy5yZW5kZXJUYXJnZXRBZGFwdGVkO1xyXG5cclxuXHRcdGlmKHRoaXMuYWRhcHRpdmUpIHtcclxuXHJcblx0XHRcdC8vIFJlbmRlciB0aGUgbHVtaW5hbmNlIG9mIHRoZSBjdXJyZW50IHNjZW5lIGludG8gYSByZW5kZXIgdGFyZ2V0IHdpdGggbWlwbWFwcGluZyBlbmFibGVkLlxyXG5cdFx0XHRxdWFkLm1hdGVyaWFsID0gbHVtaW5vc2l0eU1hdGVyaWFsO1xyXG5cdFx0XHRsdW1pbm9zaXR5TWF0ZXJpYWwudW5pZm9ybXMudERpZmZ1c2UudmFsdWUgPSByZWFkQnVmZmVyLnRleHR1cmU7XHJcblx0XHRcdHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhLCByZW5kZXJUYXJnZXRMdW1pbm9zaXR5KTtcclxuXHJcblx0XHRcdC8vIFVzZSB0aGUgbmV3IGx1bWluYW5jZSB2YWx1ZXMsIHRoZSBwcmV2aW91cyBsdW1pbmFuY2UgYW5kIHRoZSBmcmFtZSBkZWx0YSB0byBhZGFwdCB0aGUgbHVtaW5hbmNlIG92ZXIgdGltZS5cclxuXHRcdFx0cXVhZC5tYXRlcmlhbCA9IGFkYXB0aXZlTHVtaW5vc2l0eU1hdGVyaWFsO1xyXG5cdFx0XHRhZGFwdGl2ZUx1bWlub3NpdHlNYXRlcmlhbC51bmlmb3Jtcy5kZWx0YS52YWx1ZSA9IGRlbHRhO1xyXG5cdFx0XHRhZGFwdGl2ZUx1bWlub3NpdHlNYXRlcmlhbC51bmlmb3Jtcy50UHJldmlvdXNMdW0udmFsdWUgPSByZW5kZXJUYXJnZXRQcmV2aW91cy50ZXh0dXJlO1xyXG5cdFx0XHRhZGFwdGl2ZUx1bWlub3NpdHlNYXRlcmlhbC51bmlmb3Jtcy50Q3VycmVudEx1bS52YWx1ZSA9IHJlbmRlclRhcmdldEx1bWlub3NpdHkudGV4dHVyZTtcclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEsIHJlbmRlclRhcmdldEFkYXB0ZWQpO1xyXG5cclxuXHRcdFx0Ly8gQ29weSB0aGUgbmV3IGFkYXB0ZWQgbHVtaW5hbmNlIHZhbHVlIHNvIHRoYXQgaXQgY2FuIGJlIHVzZWQgYnkgdGhlIG5leHQgZnJhbWUuXHJcblx0XHRcdHF1YWQubWF0ZXJpYWwgPSBjb3B5TWF0ZXJpYWw7XHJcblx0XHRcdGNvcHlNYXRlcmlhbC51bmlmb3Jtcy50RGlmZnVzZS52YWx1ZSA9IHJlbmRlclRhcmdldEFkYXB0ZWQudGV4dHVyZTtcclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEsIHJlbmRlclRhcmdldFByZXZpb3VzKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQXBwbHkgdGhlIHRvbmUgbWFwcGluZyB0byB0aGUgY29sb3Vycy5cclxuXHRcdHF1YWQubWF0ZXJpYWwgPSB0b25lTWFwcGluZ01hdGVyaWFsO1xyXG5cdFx0dG9uZU1hcHBpbmdNYXRlcmlhbC51bmlmb3Jtcy50RGlmZnVzZS52YWx1ZSA9IHJlYWRCdWZmZXIudGV4dHVyZTtcclxuXHJcblx0XHRyZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyVG9TY3JlZW4gPyBudWxsIDogd3JpdGVCdWZmZXIpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgc29tZXRoaW5nIGludG8gdGhlIHByZXZpb3VzIGx1bWlub3NpdHkgdGV4dHVyZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICovXHJcblxyXG5cdGluaXRpYWxpc2UocmVuZGVyZXIpIHtcclxuXHJcblx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSBuZXcgTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHg3ZmZmZmYgfSk7XHJcblx0XHRyZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyVGFyZ2V0UHJldmlvdXMpO1xyXG5cdFx0dGhpcy5xdWFkLm1hdGVyaWFsLmRpc3Bvc2UoKTtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCIvKipcclxuICogQSBjb21waWxhdGlvbiBvZiB0aGUgcG9zdCBwcm9jZXNzaW5nIHBhc3Nlcy5cclxuICpcclxuICogQG1vZHVsZSBwb3N0cHJvY2Vzc2luZy9wYXNzZXNcclxuICovXHJcblxyXG5leHBvcnQgeyBCbG9vbVBhc3MgfSBmcm9tIFwiLi9ibG9vbS5qc1wiO1xyXG5leHBvcnQgeyBCbHVyUGFzcyB9IGZyb20gXCIuL2JsdXIuanNcIjtcclxuZXhwb3J0IHsgQm9rZWhQYXNzIH0gZnJvbSBcIi4vYm9rZWguanNcIjtcclxuZXhwb3J0IHsgQm9rZWgyUGFzcyB9IGZyb20gXCIuL2Jva2VoMi5qc1wiO1xyXG5leHBvcnQgeyBDbGVhclBhc3MgfSBmcm9tIFwiLi9jbGVhci5qc1wiO1xyXG5leHBvcnQgeyBDbGVhck1hc2tQYXNzIH0gZnJvbSBcIi4vY2xlYXItbWFzay5qc1wiO1xyXG5leHBvcnQgeyBEb3RTY3JlZW5QYXNzIH0gZnJvbSBcIi4vZG90LXNjcmVlbi5qc1wiO1xyXG5leHBvcnQgeyBEZXB0aFBhc3MgfSBmcm9tIFwiLi9kZXB0aC5qc1wiO1xyXG5leHBvcnQgeyBGaWxtUGFzcyB9IGZyb20gXCIuL2ZpbG0uanNcIjtcclxuZXhwb3J0IHsgR2xpdGNoTW9kZSwgR2xpdGNoUGFzcyB9IGZyb20gXCIuL2dsaXRjaC5qc1wiO1xyXG5leHBvcnQgeyBHb2RSYXlzUGFzcyB9IGZyb20gXCIuL2dvZC1yYXlzLmpzXCI7XHJcbmV4cG9ydCB7IE1hc2tQYXNzIH0gZnJvbSBcIi4vbWFzay5qc1wiO1xyXG5leHBvcnQgeyBQYXNzIH0gZnJvbSBcIi4vcGFzcy5qc1wiO1xyXG5leHBvcnQgeyBQaXhlbGF0aW9uUGFzcyB9IGZyb20gXCIuL3BpeGVsYXRpb24uanNcIjtcclxuZXhwb3J0IHsgUmVuZGVyUGFzcyB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xyXG5leHBvcnQgeyBTYXZlUGFzcyB9IGZyb20gXCIuL3NhdmUuanNcIjtcclxuZXhwb3J0IHsgU2hhZGVyUGFzcyB9IGZyb20gXCIuL3NoYWRlci5qc1wiO1xyXG5leHBvcnQgeyBTaG9ja1dhdmVQYXNzIH0gZnJvbSBcIi4vc2hvY2std2F2ZS5qc1wiO1xyXG5leHBvcnQgeyBTTUFBUGFzcyB9IGZyb20gXCIuL3NtYWEuanNcIjtcclxuZXhwb3J0IHsgVGV4dHVyZVBhc3MgfSBmcm9tIFwiLi90ZXh0dXJlLmpzXCI7XHJcbmV4cG9ydCB7IFRvbmVNYXBwaW5nUGFzcyB9IGZyb20gXCIuL3RvbmUtbWFwcGluZy5qc1wiO1xyXG4iLCJpbXBvcnQge1xyXG5cdERlcHRoU3RlbmNpbEZvcm1hdCxcclxuXHREZXB0aFRleHR1cmUsXHJcblx0TGluZWFyRmlsdGVyLFxyXG5cdFJHQkFGb3JtYXQsXHJcblx0UkdCRm9ybWF0LFxyXG5cdFVuc2lnbmVkSW50MjQ4VHlwZSxcclxuXHRXZWJHTFJlbmRlclRhcmdldFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IHsgQ2xlYXJNYXNrUGFzcywgTWFza1Bhc3MsIFNoYWRlclBhc3MgfSBmcm9tIFwiLi4vcGFzc2VzXCI7XHJcbmltcG9ydCB7IENvcHlNYXRlcmlhbCB9IGZyb20gXCIuLi9tYXRlcmlhbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgRWZmZWN0Q29tcG9zZXIgbWF5IGJlIHVzZWQgaW4gcGxhY2Ugb2YgYSBub3JtYWwgV2ViR0xSZW5kZXJlci5cclxuICpcclxuICogVGhlIGF1dG8gY2xlYXIgYmVoYXZpb3VyIG9mIHRoZSBwcm92aWRlZCByZW5kZXJlciB3aWxsIGJlIGRpc2FibGVkIHRvIHByZXZlbnRcclxuICogdW5uZWNlc3NhcnkgY2xlYXIgb3BlcmF0aW9ucy5cclxuICpcclxuICogSXQgaXMgY29tbW9uIHByYWN0aWNlIHRvIHVzZSBhIHtAbGluayBSZW5kZXJQYXNzfSBhcyB0aGUgZmlyc3QgcGFzcyB0b1xyXG4gKiBhdXRvbWF0aWNhbGx5IGNsZWFyIHRoZSBzY3JlZW4gYW5kIHJlbmRlciB0aGUgc2NlbmUgdG8gYSB0ZXh0dXJlIGZvciBmdXJ0aGVyXHJcbiAqIHByb2Nlc3NpbmcuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIEVmZmVjdENvbXBvc2VyIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBlZmZlY3QgY29tcG9zZXIuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IFtyZW5kZXJlcl0gLSBUaGUgcmVuZGVyZXIgdGhhdCBzaG91bGQgYmUgdXNlZC5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gVGhlIG9wdGlvbnMuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5kZXB0aEJ1ZmZlcj10cnVlXSAtIFdoZXRoZXIgdGhlIG1haW4gcmVuZGVyIHRhcmdldHMgc2hvdWxkIGhhdmUgYSBkZXB0aCBidWZmZXIuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5zdGVuY2lsQnVmZmVyPWZhbHNlXSAtIFdoZXRoZXIgdGhlIG1haW4gcmVuZGVyIHRhcmdldHMgc2hvdWxkIGhhdmUgYSBzdGVuY2lsIGJ1ZmZlci5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRlcHRoVGV4dHVyZT1mYWxzZV0gLSBTZXQgdG8gdHJ1ZSBpZiBvbmUgb2YgeW91ciBwYXNzZXMgcmVsaWVzIG9uIGEgZGVwdGggdGV4dHVyZS5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3IocmVuZGVyZXIgPSBudWxsLCBvcHRpb25zID0ge30pIHtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSByZW5kZXJlci5cclxuXHRcdCAqXHJcblx0XHQgKiBZb3UgbWF5IHJlcGxhY2UgdGhlIHJlbmRlcmVyIGF0IGFueSB0aW1lIGJ5IHVzaW5nXHJcblx0XHQgKiB7QGxpbmsgRWZmZWN0Q29tcG9zZXIjcmVwbGFjZVJlbmRlcmVyfS5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7V2ViR0xSZW5kZXJlcn1cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSByZWFkIGJ1ZmZlci5cclxuXHRcdCAqXHJcblx0XHQgKiBSZWFkaW5nIGZyb20gYW5kIHdyaXRpbmcgdG8gdGhlIHNhbWUgcmVuZGVyIHRhcmdldCBzaG91bGQgYmUgYXZvaWRlZC5cclxuXHRcdCAqIFRoZXJlZm9yZSwgdHdvIHNlcGVyYXRlIHlldCBpZGVudGljYWwgYnVmZmVycyBhcmUgdXNlZC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7V2ViR0xSZW5kZXJUYXJnZXR9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5yZWFkQnVmZmVyID0gbnVsbDtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSB3cml0ZSBidWZmZXIuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1dlYkdMUmVuZGVyVGFyZ2V0fVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMud3JpdGVCdWZmZXIgPSBudWxsO1xyXG5cclxuXHRcdGlmKHRoaXMucmVuZGVyZXIgIT09IG51bGwpIHtcclxuXHJcblx0XHRcdHRoaXMucmVuZGVyZXIuYXV0b0NsZWFyID0gZmFsc2U7XHJcblxyXG5cdFx0XHR0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLmNyZWF0ZUJ1ZmZlcihcclxuXHRcdFx0XHQob3B0aW9ucy5kZXB0aEJ1ZmZlciAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMuZGVwdGhCdWZmZXIgOiB0cnVlLFxyXG5cdFx0XHRcdChvcHRpb25zLnN0ZW5jaWxCdWZmZXIgIT09IHVuZGVmaW5lZCkgPyBvcHRpb25zLnN0ZW5jaWxCdWZmZXIgOiBmYWxzZSxcclxuXHRcdFx0XHQob3B0aW9ucy5kZXB0aFRleHR1cmUgIT09IHVuZGVmaW5lZCkgPyBvcHRpb25zLmRlcHRoVGV4dHVyZSA6IGZhbHNlXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHR0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZWFkQnVmZmVyLmNsb25lKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBjb3B5IHBhc3MgdXNlZCBmb3IgY29weWluZyBtYXNrZWQgc2NlbmVzLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtTaGFkZXJQYXNzfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuY29weVBhc3MgPSBuZXcgU2hhZGVyUGFzcyhuZXcgQ29weU1hdGVyaWFsKCkpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIHBhc3Nlcy5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7UGFzc1tdfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMucGFzc2VzID0gW107XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIGRlcHRoIHRleHR1cmUgb2YgdGhlIHJlYWQgYW5kIHdyaXRlIGJ1ZmZlcnMuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7RGVwdGhUZXh0dXJlfVxyXG5cdCAqIEBkZWZhdWx0IG51bGxcclxuXHQgKi9cclxuXHJcblx0Z2V0IGRlcHRoVGV4dHVyZSgpIHsgcmV0dXJuIHRoaXMucmVhZEJ1ZmZlci5kZXB0aFRleHR1cmU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIHJlYWQgYW5kIHdyaXRlIGJ1ZmZlcnMgc2hhcmUgYSBzaW5nbGUgZGVwdGggdGV4dHVyZS4gRGVwdGggd2lsbCBiZVxyXG5cdCAqIHdyaXR0ZW4gdG8gdGhpcyB0ZXh0dXJlIHdoZW4gc29tZXRoaW5nIGlzIHJlbmRlcmVkIGludG8gb25lIG9mIHRoZSBidWZmZXJzXHJcblx0ICogYW5kIHRoZSBpbnZvbHZlZCBtYXRlcmlhbHMgaGF2ZSBkZXB0aCB3cml0ZSBlbmFibGVkLlxyXG5cdCAqXHJcblx0ICogWW91IG1heSBlbmFibGUgdGhpcyBtZWNoYW5pc20gZHVyaW5nIHRoZSBpbnN0YW50aWF0aW9uIG9mIHRoZSBjb21wb3NlciBvclxyXG5cdCAqIGJ5IGFzc2lnbmluZyBhIERlcHRoVGV4dHVyZSBpbnN0YW5jZSBsYXRlciBvbi4gWW91IG1heSBhbHNvIGRpc2FibGUgaXQgYnlcclxuXHQgKiBhc3NpZ25pbmcgbnVsbC5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtEZXB0aFRleHR1cmV9XHJcblx0ICovXHJcblxyXG5cdHNldCBkZXB0aFRleHR1cmUoeCkge1xyXG5cclxuXHRcdHRoaXMucmVhZEJ1ZmZlci5kZXB0aFRleHR1cmUgPSB4O1xyXG5cdFx0dGhpcy53cml0ZUJ1ZmZlci5kZXB0aFRleHR1cmUgPSB4O1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlcGxhY2VzIHRoZSBjdXJyZW50IHJlbmRlcmVyIHdpdGggdGhlIGdpdmVuIG9uZS4gVGhlIERPTSBlbGVtZW50IG9mIHRoZVxyXG5cdCAqIGN1cnJlbnQgcmVuZGVyZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHJlbW92ZWQgZnJvbSBpdHMgcGFyZW50IG5vZGUgYW5kIHRoZVxyXG5cdCAqIERPTSBlbGVtZW50IG9mIHRoZSBuZXcgcmVuZGVyZXIgd2lsbCB0YWtlIGl0cyBwbGFjZS5cclxuXHQgKlxyXG5cdCAqIFRoZSBhdXRvIGNsZWFyIG1lY2hhbmlzbSBvZiB0aGUgcHJvdmlkZWQgcmVuZGVyZXIgd2lsbCBiZSBkaXNhYmxlZC5cclxuXHQgKlxyXG5cdCAqIFN3aXRjaGluZyBiZXR3ZWVuIHJlbmRlcmVycyBhbGxvd3MgeW91IHRvIGR5bmFtaWNhbGx5IGVuYWJsZSBvciBkaXNhYmxlXHJcblx0ICogYW50aWFsaWFzaW5nLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSByZW5kZXJlciAtIFRoZSBuZXcgcmVuZGVyZXIuXHJcblx0ICogQHJldHVybiB7V2ViR0xSZW5kZXJlcn0gVGhlIG9sZCByZW5kZXJlci5cclxuXHQgKi9cclxuXHJcblx0cmVwbGFjZVJlbmRlcmVyKHJlbmRlcmVyKSB7XHJcblxyXG5cdFx0Y29uc3Qgb2xkUmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyO1xyXG5cclxuXHRcdGxldCBwYXJlbnQsIG9sZFNpemUsIG5ld1NpemU7XHJcblxyXG5cdFx0aWYob2xkUmVuZGVyZXIgIT09IG51bGwgJiYgb2xkUmVuZGVyZXIgIT09IHJlbmRlcmVyKSB7XHJcblxyXG5cdFx0XHR0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XHJcblx0XHRcdHRoaXMucmVuZGVyZXIuYXV0b0NsZWFyID0gZmFsc2U7XHJcblxyXG5cdFx0XHRwYXJlbnQgPSBvbGRSZW5kZXJlci5kb21FbGVtZW50LnBhcmVudE5vZGU7XHJcblx0XHRcdG9sZFNpemUgPSBvbGRSZW5kZXJlci5nZXRTaXplKCk7XHJcblx0XHRcdG5ld1NpemUgPSByZW5kZXJlci5nZXRTaXplKCk7XHJcblxyXG5cdFx0XHRpZihwYXJlbnQgIT09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKG9sZFJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cdFx0XHRcdHBhcmVudC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKG9sZFNpemUud2lkdGggIT09IG5ld1NpemUud2lkdGggfHwgb2xkU2l6ZS5oZWlnaHQgIT09IG5ld1NpemUuaGVpZ2h0KSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0U2l6ZSgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gb2xkUmVuZGVyZXI7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIG5ldyByZW5kZXIgdGFyZ2V0IGJ5IHJlcGxpY2F0aW5nIHRoZSByZW5kZXJlcidzIGNhbnZhcy5cclxuXHQgKlxyXG5cdCAqIFRoZSBjcmVhdGVkIHJlbmRlciB0YXJnZXQgdXNlcyBhIGxpbmVhciBmaWx0ZXIgZm9yIHRleGVsIG1pbmlmaWNhdGlvbiBhbmRcclxuXHQgKiBtYWduaWZpY2F0aW9uLiBJdHMgcmVuZGVyIHRleHR1cmUgZm9ybWF0IGRlcGVuZHMgb24gd2hldGhlciB0aGUgcmVuZGVyZXJcclxuXHQgKiB1c2VzIHRoZSBhbHBoYSBjaGFubmVsLiBNaXBtYXBzIGFyZSBkaXNhYmxlZC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gZGVwdGhCdWZmZXIgLSBXaGV0aGVyIHRoZSByZW5kZXIgdGFyZ2V0IHNob3VsZCBoYXZlIGEgZGVwdGggYnVmZmVyLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gc3RlbmNpbEJ1ZmZlciAtIFdoZXRoZXIgdGhlIHJlbmRlciB0YXJnZXQgc2hvdWxkIGhhdmUgYSBzdGVuY2lsIGJ1ZmZlci5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGRlcHRoVGV4dHVyZSAtIFdoZXRoZXIgdGhlIHJlbmRlciB0YXJnZXQgc2hvdWxkIGhhdmUgYSBkZXB0aCB0ZXh0dXJlLlxyXG5cdCAqIEByZXR1cm4ge1dlYkdMUmVuZGVyVGFyZ2V0fSBBIG5ldyByZW5kZXIgdGFyZ2V0IHRoYXQgZXF1YWxzIHRoZSByZW5kZXJlcidzIGNhbnZhcy5cclxuXHQgKi9cclxuXHJcblx0Y3JlYXRlQnVmZmVyKGRlcHRoQnVmZmVyLCBzdGVuY2lsQnVmZmVyLCBkZXB0aFRleHR1cmUpIHtcclxuXHJcblx0XHRjb25zdCBzaXplID0gdGhpcy5yZW5kZXJlci5nZXRTaXplKCk7XHJcblx0XHRjb25zdCBwaXhlbFJhdGlvID0gdGhpcy5yZW5kZXJlci5nZXRQaXhlbFJhdGlvKCk7XHJcblx0XHRjb25zdCBhbHBoYSA9IHRoaXMucmVuZGVyZXIuY29udGV4dC5nZXRDb250ZXh0QXR0cmlidXRlcygpLmFscGhhO1xyXG5cclxuXHRcdGNvbnN0IHJlbmRlclRhcmdldCA9IG5ldyBXZWJHTFJlbmRlclRhcmdldChzaXplLndpZHRoICogcGl4ZWxSYXRpbywgc2l6ZS5oZWlnaHQgKiBwaXhlbFJhdGlvLCB7XHJcblx0XHRcdG1pbkZpbHRlcjogTGluZWFyRmlsdGVyLFxyXG5cdFx0XHRtYWdGaWx0ZXI6IExpbmVhckZpbHRlcixcclxuXHRcdFx0Zm9ybWF0OiBhbHBoYSA/IFJHQkFGb3JtYXQgOiBSR0JGb3JtYXQsXHJcblx0XHRcdGRlcHRoQnVmZmVyOiBkZXB0aEJ1ZmZlcixcclxuXHRcdFx0c3RlbmNpbEJ1ZmZlcjogc3RlbmNpbEJ1ZmZlcixcclxuXHRcdFx0ZGVwdGhUZXh0dXJlOiBkZXB0aFRleHR1cmUgPyBuZXcgRGVwdGhUZXh0dXJlKCkgOiBudWxsXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZihkZXB0aFRleHR1cmUgJiYgc3RlbmNpbEJ1ZmZlcikge1xyXG5cclxuXHRcdFx0cmVuZGVyVGFyZ2V0LmRlcHRoVGV4dHVyZS5mb3JtYXQgPSBEZXB0aFN0ZW5jaWxGb3JtYXQ7XHJcblx0XHRcdHJlbmRlclRhcmdldC5kZXB0aFRleHR1cmUudHlwZSA9IFVuc2lnbmVkSW50MjQ4VHlwZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmVuZGVyVGFyZ2V0LnRleHR1cmUubmFtZSA9IFwiRWZmZWN0Q29tcG9zZXIuQnVmZmVyXCI7XHJcblx0XHRyZW5kZXJUYXJnZXQudGV4dHVyZS5nZW5lcmF0ZU1pcG1hcHMgPSBmYWxzZTtcclxuXHJcblx0XHRyZXR1cm4gcmVuZGVyVGFyZ2V0O1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgYSBwYXNzLCBvcHRpb25hbGx5IGF0IGEgc3BlY2lmaWMgaW5kZXguXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Bhc3N9IHBhc3MgLSBBIG5ldyBwYXNzLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbaW5kZXhdIC0gQW4gaW5kZXggYXQgd2hpY2ggdGhlIHBhc3Mgc2hvdWxkIGJlIGluc2VydGVkLlxyXG5cdCAqL1xyXG5cclxuXHRhZGRQYXNzKHBhc3MsIGluZGV4KSB7XHJcblxyXG5cdFx0Y29uc3QgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyO1xyXG5cdFx0Y29uc3Qgc2l6ZSA9IHJlbmRlcmVyLmdldFNpemUoKTtcclxuXHRcdGNvbnN0IHBpeGVsUmF0aW8gPSByZW5kZXJlci5nZXRQaXhlbFJhdGlvKCk7XHJcblxyXG5cdFx0cGFzcy5zZXRTaXplKHNpemUud2lkdGggKiBwaXhlbFJhdGlvLCBzaXplLmhlaWdodCAqIHBpeGVsUmF0aW8pO1xyXG5cdFx0cGFzcy5pbml0aWFsaXNlKHJlbmRlcmVyLCByZW5kZXJlci5jb250ZXh0LmdldENvbnRleHRBdHRyaWJ1dGVzKCkuYWxwaGEpO1xyXG5cclxuXHRcdGlmKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuXHJcblx0XHRcdHRoaXMucGFzc2VzLnNwbGljZShpbmRleCwgMCwgcGFzcyk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdHRoaXMucGFzc2VzLnB1c2gocGFzcyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbW92ZXMgYSBwYXNzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQYXNzfSBwYXNzIC0gVGhlIHBhc3MuXHJcblx0ICovXHJcblxyXG5cdHJlbW92ZVBhc3MocGFzcykge1xyXG5cclxuXHRcdHRoaXMucGFzc2VzLnNwbGljZSh0aGlzLnBhc3Nlcy5pbmRleE9mKHBhc3MpLCAxKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIGFsbCBlbmFibGVkIHBhc3NlcyBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGRlbHRhIC0gVGhlIHRpbWUgYmV0d2VlbiB0aGUgbGFzdCBmcmFtZSBhbmQgdGhlIGN1cnJlbnQgb25lIGluIHNlY29uZHMuXHJcblx0ICovXHJcblxyXG5cdHJlbmRlcihkZWx0YSkge1xyXG5cclxuXHRcdGNvbnN0IHBhc3NlcyA9IHRoaXMucGFzc2VzO1xyXG5cdFx0Y29uc3QgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyO1xyXG5cdFx0Y29uc3QgY29weVBhc3MgPSB0aGlzLmNvcHlQYXNzO1xyXG5cclxuXHRcdGxldCByZWFkQnVmZmVyID0gdGhpcy5yZWFkQnVmZmVyO1xyXG5cdFx0bGV0IHdyaXRlQnVmZmVyID0gdGhpcy53cml0ZUJ1ZmZlcjtcclxuXHJcblx0XHRsZXQgbWFza0FjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0bGV0IHBhc3MsIGNvbnRleHQsIGJ1ZmZlcjtcclxuXHRcdGxldCBpLCBsO1xyXG5cclxuXHRcdGZvcihpID0gMCwgbCA9IHBhc3Nlcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuXHJcblx0XHRcdHBhc3MgPSBwYXNzZXNbaV07XHJcblxyXG5cdFx0XHRpZihwYXNzLmVuYWJsZWQpIHtcclxuXHJcblx0XHRcdFx0cGFzcy5yZW5kZXIocmVuZGVyZXIsIHJlYWRCdWZmZXIsIHdyaXRlQnVmZmVyLCBkZWx0YSwgbWFza0FjdGl2ZSk7XHJcblxyXG5cdFx0XHRcdGlmKHBhc3MubmVlZHNTd2FwKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYobWFza0FjdGl2ZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0Y29udGV4dCA9IHJlbmRlcmVyLmNvbnRleHQ7XHJcblx0XHRcdFx0XHRcdGNvbnRleHQuc3RlbmNpbEZ1bmMoY29udGV4dC5OT1RFUVVBTCwgMSwgMHhmZmZmZmZmZik7XHJcblx0XHRcdFx0XHRcdGNvcHlQYXNzLnJlbmRlcihyZW5kZXJlciwgcmVhZEJ1ZmZlciwgd3JpdGVCdWZmZXIpO1xyXG5cdFx0XHRcdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKGNvbnRleHQuRVFVQUwsIDEsIDB4ZmZmZmZmZmYpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRidWZmZXIgPSByZWFkQnVmZmVyO1xyXG5cdFx0XHRcdFx0cmVhZEJ1ZmZlciA9IHdyaXRlQnVmZmVyO1xyXG5cdFx0XHRcdFx0d3JpdGVCdWZmZXIgPSBidWZmZXI7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYocGFzcyBpbnN0YW5jZW9mIE1hc2tQYXNzKSB7XHJcblxyXG5cdFx0XHRcdFx0bWFza0FjdGl2ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZihwYXNzIGluc3RhbmNlb2YgQ2xlYXJNYXNrUGFzcykge1xyXG5cclxuXHRcdFx0XHRcdG1hc2tBY3RpdmUgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBzaXplIG9mIHRoZSBidWZmZXJzIGFuZCB0aGUgcmVuZGVyZXIncyBvdXRwdXQgY2FudmFzLlxyXG5cdCAqXHJcblx0ICogRXZlcnkgcGFzcyB3aWxsIGJlIGluZm9ybWVkIG9mIHRoZSBuZXcgc2l6ZS4gSXQncyB1cCB0byBlYWNoIHBhc3MgaG93IHRoYXRcclxuXHQgKiBpbmZvcm1hdGlvbiBpcyB1c2VkLlxyXG5cdCAqXHJcblx0ICogSWYgbm8gd2lkdGggb3IgaGVpZ2h0IGlzIHNwZWNpZmllZCwgdGhlIHJlbmRlciB0YXJnZXRzIGFuZCBwYXNzZXMgd2lsbCBiZVxyXG5cdCAqIHVwZGF0ZWQgd2l0aCB0aGUgY3VycmVudCBzaXplIG9mIHRoZSByZW5kZXJlci5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbd2lkdGhdIC0gVGhlIHdpZHRoLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbaGVpZ2h0XSAtIFRoZSBoZWlnaHQuXHJcblx0ICovXHJcblxyXG5cdHNldFNpemUod2lkdGgsIGhlaWdodCkge1xyXG5cclxuXHRcdGNvbnN0IHBhc3NlcyA9IHRoaXMucGFzc2VzO1xyXG5cdFx0Y29uc3Qgc2l6ZSA9IHRoaXMucmVuZGVyZXIuZ2V0U2l6ZSgpO1xyXG5cdFx0Y29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMucmVuZGVyZXIuZ2V0UGl4ZWxSYXRpbygpO1xyXG5cclxuXHRcdGxldCBpLCBsO1xyXG5cclxuXHRcdGlmKHdpZHRoID09PSB1bmRlZmluZWQgfHwgaGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcclxuXHJcblx0XHRcdHdpZHRoID0gc2l6ZS53aWR0aDtcclxuXHRcdFx0aGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuXHJcblx0XHR3aWR0aCAqPSBwaXhlbFJhdGlvO1xyXG5cdFx0aGVpZ2h0ICo9IHBpeGVsUmF0aW87XHJcblxyXG5cdFx0dGhpcy5yZWFkQnVmZmVyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XHJcblx0XHR0aGlzLndyaXRlQnVmZmVyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XHJcblxyXG5cdFx0Zm9yKGkgPSAwLCBsID0gcGFzc2VzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG5cclxuXHRcdFx0cGFzc2VzW2ldLnNldFNpemUod2lkdGgsIGhlaWdodCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0cyB0aGlzIGNvbXBvc2VyIGJ5IGRlbGV0aW5nIGFsbCBwYXNzZXMgYW5kIGNyZWF0aW5nIG5ldyBidWZmZXJzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gW3JlbmRlclRhcmdldF0gLSBBIG5ldyByZW5kZXIgdGFyZ2V0LiBJZiBub25lIGlzIHByb3ZpZGVkLCB0aGUgc2V0dGluZ3Mgb2YgdGhlIHJlbmRlcmVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHJcblx0cmVzZXQocmVuZGVyVGFyZ2V0KSB7XHJcblxyXG5cdFx0Y29uc3QgZGVwdGhCdWZmZXIgPSB0aGlzLnJlYWRCdWZmZXIuZGVwdGhCdWZmZXI7XHJcblx0XHRjb25zdCBzdGVuY2lsQnVmZmVyID0gdGhpcy5yZWFkQnVmZmVyLnN0ZW5jaWxCdWZmZXI7XHJcblx0XHRjb25zdCBkZXB0aFRleHR1cmUgPSAodGhpcy5yZWFkQnVmZmVyLmRlcHRoVGV4dHVyZSAhPT0gbnVsbCk7XHJcblxyXG5cdFx0dGhpcy5kaXNwb3NlKChyZW5kZXJUYXJnZXQgPT09IHVuZGVmaW5lZCkgP1xyXG5cdFx0XHR0aGlzLmNyZWF0ZUJ1ZmZlcihkZXB0aEJ1ZmZlciwgc3RlbmNpbEJ1ZmZlciwgZGVwdGhUZXh0dXJlKSA6XHJcblx0XHRcdHJlbmRlclRhcmdldFxyXG5cdFx0KTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBEZXN0cm95cyBhbGwgcGFzc2VzIGFuZCByZW5kZXIgdGFyZ2V0cy5cclxuXHQgKlxyXG5cdCAqIFRoaXMgbWV0aG9kIGRlYWxsb2NhdGVzIGFsbCByZW5kZXIgdGFyZ2V0cywgdGV4dHVyZXMgYW5kIG1hdGVyaWFscyBjcmVhdGVkXHJcblx0ICogYnkgdGhlIHBhc3Nlcy4gSXQgYWxzbyBkZWxldGVzIHRoaXMgY29tcG9zZXIncyBmcmFtZSBidWZmZXJzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gW3JlbmRlclRhcmdldF0gLSBBIG5ldyByZW5kZXIgdGFyZ2V0LiBJZiBub25lIGlzIHByb3ZpZGVkLCB0aGUgY29tcG9zZXIgd2lsbCBiZWNvbWUgaW5vcGVyYXRpdmUuXHJcblx0ICovXHJcblxyXG5cdGRpc3Bvc2UocmVuZGVyVGFyZ2V0KSB7XHJcblxyXG5cdFx0Y29uc3QgcGFzc2VzID0gdGhpcy5wYXNzZXM7XHJcblxyXG5cdFx0aWYodGhpcy5yZWFkQnVmZmVyICE9PSBudWxsICYmIHRoaXMud3JpdGVCdWZmZXIgIT09IG51bGwpIHtcclxuXHJcblx0XHRcdHRoaXMucmVhZEJ1ZmZlci5kaXNwb3NlKCk7XHJcblx0XHRcdHRoaXMud3JpdGVCdWZmZXIuZGlzcG9zZSgpO1xyXG5cclxuXHRcdFx0dGhpcy5yZWFkQnVmZmVyID0gbnVsbDtcclxuXHRcdFx0dGhpcy53cml0ZUJ1ZmZlciA9IG51bGw7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHdoaWxlKHBhc3Nlcy5sZW5ndGggPiAwKSB7XHJcblxyXG5cdFx0XHRwYXNzZXMucG9wKCkuZGlzcG9zZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZihyZW5kZXJUYXJnZXQgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuXHRcdFx0Ly8gUmVhbmltYXRlLlxyXG5cdFx0XHR0aGlzLnJlYWRCdWZmZXIgPSByZW5kZXJUYXJnZXQ7XHJcblx0XHRcdHRoaXMud3JpdGVCdWZmZXIgPSB0aGlzLnJlYWRCdWZmZXIuY2xvbmUoKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0dGhpcy5jb3B5UGFzcy5kaXNwb3NlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsIi8qKlxyXG4gKiBDb3JlIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEBtb2R1bGUgcG9zdHByb2Nlc3NpbmcvY29yZVxyXG4gKi9cclxuXHJcbmV4cG9ydCB7IEVmZmVjdENvbXBvc2VyIH0gZnJvbSBcIi4vZWZmZWN0LWNvbXBvc2VyLmpzXCI7XHJcbiIsIi8qKlxyXG4gKiBFeHBvc3VyZSBvZiB0aGUgbGlicmFyeSBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAbW9kdWxlIHBvc3Rwcm9jZXNzaW5nXHJcbiAqL1xyXG5cclxuZXhwb3J0IHsgRWZmZWN0Q29tcG9zZXIgfSBmcm9tIFwiLi9jb3JlXCI7XHJcblxyXG5leHBvcnQge1xyXG5cdEJsb29tUGFzcyxcclxuXHRCbHVyUGFzcyxcclxuXHRCb2tlaFBhc3MsXHJcblx0Qm9rZWgyUGFzcyxcclxuXHRDbGVhclBhc3MsXHJcblx0Q2xlYXJNYXNrUGFzcyxcclxuXHREZXB0aFBhc3MsXHJcblx0RG90U2NyZWVuUGFzcyxcclxuXHRGaWxtUGFzcyxcclxuXHRHbGl0Y2hNb2RlLFxyXG5cdEdsaXRjaFBhc3MsXHJcblx0R29kUmF5c1Bhc3MsXHJcblx0TWFza1Bhc3MsXHJcblx0UGFzcyxcclxuXHRQaXhlbGF0aW9uUGFzcyxcclxuXHRSZW5kZXJQYXNzLFxyXG5cdFNhdmVQYXNzLFxyXG5cdFNoYWRlclBhc3MsXHJcblx0U2hvY2tXYXZlUGFzcyxcclxuXHRTTUFBUGFzcyxcclxuXHRUZXh0dXJlUGFzcyxcclxuXHRUb25lTWFwcGluZ1Bhc3NcclxufSBmcm9tIFwiLi9wYXNzZXNcIjtcclxuXHJcbmV4cG9ydCB7XHJcblx0QWRhcHRpdmVMdW1pbm9zaXR5TWF0ZXJpYWwsXHJcblx0Qm9rZWhNYXRlcmlhbCxcclxuXHRCb2tlaDJNYXRlcmlhbCxcclxuXHRDb21iaW5lTWF0ZXJpYWwsXHJcblx0Q29udm9sdXRpb25NYXRlcmlhbCxcclxuXHRDb3B5TWF0ZXJpYWwsXHJcblx0RGVwdGhNYXRlcmlhbCxcclxuXHREb3RTY3JlZW5NYXRlcmlhbCxcclxuXHRGaWxtTWF0ZXJpYWwsXHJcblx0R2xpdGNoTWF0ZXJpYWwsXHJcblx0R29kUmF5c01hdGVyaWFsLFxyXG5cdEtlcm5lbFNpemUsXHJcblx0THVtaW5vc2l0eU1hdGVyaWFsLFxyXG5cdFBpeGVsYXRpb25NYXRlcmlhbCxcclxuXHRTaG9ja1dhdmVNYXRlcmlhbCxcclxuXHRTTUFBQmxlbmRNYXRlcmlhbCxcclxuXHRTTUFBQ29sb3JFZGdlc01hdGVyaWFsLFxyXG5cdFNNQUFXZWlnaHRzTWF0ZXJpYWwsXHJcblx0VG9uZU1hcHBpbmdNYXRlcmlhbFxyXG59IGZyb20gXCIuL21hdGVyaWFsc1wiO1xyXG4iLCJpbXBvcnQge1xuICBFZmZlY3RDb21wb3NlcixcbiAgUmVuZGVyUGFzcyxcbiAgU2hhZGVyUGFzc1xufSBmcm9tICdwb3N0cHJvY2Vzc2luZyc7XG5cbmltcG9ydCB7TG9vcH0gZnJvbSAnLi4vLi4vY29yZS9Mb29wJztcblxuY29uc3QgcG9seWZpbGwgPSAob2JqZWN0LCBtZXRob2QsIHNob3dXYXJuID0gdHJ1ZSkgPT4ge1xuICBpZiAob2JqZWN0W21ldGhvZF0pIHJldHVybjtcbiAgaWYgKHNob3dXYXJuKSBjb25zb2xlLndhcm4oYEBQb3N0UHJvY2Vzc29yTW9kdWxlOiBwYXNzLiR7bWV0aG9kfSgpIHdhcyBub3QgZm91bmQuYCwgb2JqZWN0KTtcbiAgb2JqZWN0W21ldGhvZF0gPSAoKSA9PiB7fTtcbn07XG5cbmV4cG9ydCBjbGFzcyBQb3N0UHJvY2Vzc29yTW9kdWxlIHtcbiAgY3VycmVudFBhc3MgPSBudWxsO1xuXG4gIGRlZmVyID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgY29uc3RydWN0b3Ioe2RlYnVnfSA9IHtkZWJ1ZzogdHJ1ZX0pIHtcbiAgICB0aGlzLmRlYnVnID0gZGVidWc7XG4gIH1cblxuICBtYW5hZ2VyKG1hbmFnZXIpIHtcbiAgICBtYW5hZ2VyLmRlZmluZSgncG9zdHByb2Nlc3NvcicpO1xuXG4gICAgdGhpcy5lZmZlY3RzID0gbWFuYWdlci51c2UoJ3JlbmRlcmluZycpLmVmZmVjdHM7XG4gICAgdGhpcy5yZW5kZXJlciA9IG1hbmFnZXIuZ2V0KCdyZW5kZXJlcicpO1xuICAgIHRoaXMuc2NlbmUgPSBtYW5hZ2VyLmdldCgnc2NlbmUnKTtcbiAgICB0aGlzLmNhbWVyYSA9IG1hbmFnZXIuZ2V0KCdjYW1lcmEnKTtcblxuICAgIHRoaXMuY29tcG9zZXIgPSBuZXcgRWZmZWN0Q29tcG9zZXIodGhpcy5yZW5kZXJlcik7XG5cbiAgICBtYW5hZ2VyLnVzZSgncmVuZGVyaW5nJykuc3RvcCgpO1xuXG4gICAgY29uc3QgY29tcG9zZXIgPSB0aGlzLmNvbXBvc2VyO1xuICAgIHRoaXMucmVuZGVyTG9vcCA9IG5ldyBMb29wKGNsb2NrID0+IGNvbXBvc2VyLnJlbmRlcihjbG9jay5nZXREZWx0YSgpKSkuc3RhcnQobWFuYWdlci5oYW5kbGVyKTtcblxuICAgIG1hbmFnZXIudXBkYXRlKHtcbiAgICAgIHJlbmRlcmVyOiByZW5kZXJlciA9PiB7XG4gICAgICAgIHRoaXMuY29tcG9zZXIucmVwbGFjZVJlbmRlcmVyKHJlbmRlcmVyKTtcbiAgICAgIH0sXG5cbiAgICAgIHNjZW5lOiBzY2VuZSA9PiB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICAgIH0sXG5cbiAgICAgIGNhbWVyYTogY2FtZXJhID0+IHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlc29sdmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmRlZmVyLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgcGFzcyA9IG5ldyBSZW5kZXJQYXNzKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLm5hdGl2ZSk7XG5cbiAgICAgIC8vIFRPRE86IFN1cHBvcnQgZm9yIGVmZmVjdHMuXG5cbiAgICAgIHRoaXMuY29tcG9zZXIuYWRkUGFzcyhwYXNzKTtcbiAgICAgIHRoaXMuY3VycmVudFBhc3MgPSBwYXNzO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBBUElcblxuICBwYXNzKHBhc3MpIHtcbiAgICB0aGlzLmRlZmVyLnRoZW4oKCkgPT4ge1xuICAgICAgcG9seWZpbGwocGFzcywgJ3NldFNpemUnLCB0aGlzLmRlYnVnKTtcbiAgICAgIHBvbHlmaWxsKHBhc3MsICdpbml0aWFsaXNlJywgdGhpcy5kZWJ1Zyk7XG5cbiAgICAgIHRoaXMuY29tcG9zZXIuYWRkUGFzcyhwYXNzKTtcbiAgICAgIHRoaXMuY3VycmVudFBhc3MgPSBwYXNzO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzaGFkZXIobWF0ZXJpYWwsIHRleHR1cmVJRCA9ICdyZWFkQnVmZmVyJykge1xuICAgIHRoaXMuZGVmZXIudGhlbigoKSA9PiB7XG4gICAgICBpZiAoIW1hdGVyaWFsLnVuaWZvcm1zW3RleHR1cmVJRF0pXG4gICAgICAgIG1hdGVyaWFsLnVuaWZvcm1zW3RleHR1cmVJRF0gPSB7dmFsdWU6IG51bGx9O1xuXG4gICAgICBjb25zdCBwYXNzID0gbmV3IFNoYWRlclBhc3MobWF0ZXJpYWwsIHRleHR1cmVJRCk7XG4gICAgICB0aGlzLmNvbXBvc2VyLmFkZFBhc3MocGFzcyk7XG4gICAgICB0aGlzLmN1cnJlbnRQYXNzID0gcGFzcztcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gUGFzcyBBUElcblxuICBnZXQobmFtZSkge1xuICAgIHJldHVybiBuYW1lXG4gICAgICA/IHRoaXMuY29tcG9zZXIucGFzc2VzLmZpbHRlcihwYXNzID0+IHBhc3MubmFtZSA9PT0gbmFtZSlbMF1cbiAgICAgIDogdGhpcy5jdXJyZW50UGFzcztcbiAgfVxuXG4gIHRvKG5hbWUpIHtcbiAgICB0aGlzLmN1cnJlbnRQYXNzID0gbmFtZTtcbiAgfVxuXG4gIHJlbmRlclRvU2NyZWVuKGJvb2wgPSB0cnVlKSB7XG4gICAgdGhpcy5kZWZlci50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudFBhc3MucmVuZGVyVG9TY3JlZW4gPSBib29sO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBuYW1lKG5hbWUpIHtcbiAgICB0aGlzLmRlZmVyLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50UGFzcy5uYW1lID0gbmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRXZlbnRzUGF0Y2hNb2R1bGUge1xuICBtYW5hZ2VyKG1hbmFnZXIpIHtcbiAgICBtYW5hZ2VyLmRlZmluZSgnZXZlbnRzJyk7XG4gICAgdGhpcy5lbGVtZW50ID0gbWFuYWdlci5nZXQoJ3JlbmRlcmVyJykuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHBhdGNoRXZlbnRzKG9yaWdpbk9iamVjdCwgZGVzdE9iamVjdCwgZXZlbnRzID0gW10pIHtcbiAgICBldmVudHMuZm9yRWFjaChldmVudCA9PlxuICAgICAgb3JpZ2luT2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGUgPT4gZGVzdE9iamVjdC5lbWl0KGV2ZW50LCBlKSlcbiAgICApO1xuICB9XG5cbiAgaW50ZWdyYXRlKHNlbGYpIHtcbiAgICBjb25zdCB7ZWxlbWVudCwgcGF0Y2hFdmVudHN9ID0gc2VsZjtcblxuICAgIHBhdGNoRXZlbnRzKGVsZW1lbnQsIHRoaXMsIFtcbiAgICAgICdtb3VzZW1vdmUnLFxuICAgICAgJ21vdXNldXAnLFxuICAgICAgJ2NvbnRleHRtZW51JyxcbiAgICAgICdtb3VzZWRvd24nLFxuICAgICAgJ2NsaWNrJyxcbiAgICAgICd3aGVlbCcsXG4gICAgICAndG91Y2hzdGFydCcsXG4gICAgICAndG91Y2hlbmQnLFxuICAgICAgJ3RvdWNobW92ZScsXG4gICAgICAna2V5ZG93bidcbiAgICBdKTtcblxuICAgIHBhdGNoRXZlbnRzKGVsZW1lbnQsIHRoaXMsIFtcbiAgICAgICdrZXlkb3duJyxcbiAgICAgICdrZXl1cCcsXG4gICAgICAna2V5cHJlc3MnXG4gICAgXSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFZlY3RvcjIsXG4gIFJheWNhc3RlcixcbiAgUGxhbmUsXG4gIFZlY3RvcjNcbn0gZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQgRXZlbnRzIGZyb20gJ21pbml2ZW50cyc7XG5pbXBvcnQge0V2ZW50c1BhdGNoTW9kdWxlfSBmcm9tICcuL0V2ZW50c1BhdGNoTW9kdWxlJztcblxuLyoqXG4gKiBAY2xhc3MgVmlydHVhbE1vdXNlTW9kdWxlXG4gKiBAY2F0ZWdvcnkgbW9kdWxlcy9hcHBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2dsb2JhbE1vdmVtZW50PWZhbHNlXVxuICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcFxuICogQGV4dGVuZHMgRXZlbnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBWaXJ0dWFsTW91c2VNb2R1bGUgZXh0ZW5kcyBFdmVudHMge1xuICBtb3VzZSA9IG5ldyBWZWN0b3IyKCk7XG4gIHJheWNhc3RlciA9IG5ldyBSYXljYXN0ZXIoKTtcbiAgd29ybGQgPSBudWxsO1xuICBjYW52YXMgPSBudWxsO1xuICBwcm9qZWN0aW9uUGxhbmUgPSBuZXcgUGxhbmUobmV3IFZlY3RvcjMoMCwgMCwgMSksIDApO1xuXG4gIGNvbnN0cnVjdG9yKGdsb2JhbE1vdmVtZW50ID0gZmFsc2UpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZ2xvYmFsTW92ZW1lbnQgPSBnbG9iYWxNb3ZlbWVudDtcbiAgfVxuXG4gIHVwZGF0ZShlLCBjdXN0b21YLCBjdXN0b21ZKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY29uc3QgeCA9IGN1c3RvbVggfHwgZS5jbGllbnRYO1xuICAgIGNvbnN0IHkgPSBjdXN0b21ZIHx8IGUuY2xpZW50WTtcblxuICAgIHRoaXMubW91c2UueCA9ICgoeCAtIHJlY3QubGVmdCkgLyAocmVjdC5yaWdodCAtIHJlY3QubGVmdCkpICogMiAtIDE7XG4gICAgdGhpcy5tb3VzZS55ID0gLSgoeSAtIHJlY3QudG9wKSAvIChyZWN0LmJvdHRvbSAtIHJlY3QudG9wKSkgKiAyICsgMTtcblxuICAgIHRoaXMucHJvamVjdGlvblBsYW5lLm5vcm1hbC5jb3B5KHRoaXMuY2FtZXJhLmdldFdvcmxkRGlyZWN0aW9uKCkpO1xuXG4gICAgdGhpcy5yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYSh0aGlzLm1vdXNlLCB0aGlzLmNhbWVyYSk7XG4gICAgdGhpcy5lbWl0KCdtb3ZlJyk7XG4gIH1cblxuICBtYW5hZ2VyKG1hbmFnZXIpIHtcbiAgICBtYW5hZ2VyLmRlZmluZSgnbW91c2UnKTtcbiAgICBtYW5hZ2VyLnJlcXVpcmUoJ2V2ZW50cycsICgpID0+IG5ldyBFdmVudHNQYXRjaE1vZHVsZSgpKTtcblxuICAgIHRoaXMuY2FudmFzID0gbWFuYWdlci5nZXQoJ3JlbmRlcmVyJykuZG9tRWxlbWVudDtcbiAgICB0aGlzLmNhbWVyYSA9IG1hbmFnZXIuZ2V0KCdjYW1lcmEnKS5uYXRpdmU7XG4gIH1cblxuICBpbnRlZ3JhdGUoc2VsZikge1xuICAgIFtcbiAgICAgICdjbGljaycsXG4gICAgICAnbW91c2Vkb3duJyxcbiAgICAgICdtb3VzZXVwJyxcbiAgICAgICdtb3VzZW1vdmUnXG4gICAgXS5mb3JFYWNoKGV2ID0+IHRoaXMub24oZXYsIGUgPT4gc2VsZi5lbWl0KGV2LCBlKSkpO1xuXG4gICAgc2VsZi5nbG9iYWxYID0gMDtcbiAgICBzZWxmLmdsb2JhbFkgPSAwO1xuXG4gICAgdGhpcy5vbignbW91c2Vtb3ZlJywgZSA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQucG9pbnRlckxvY2tFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHNlbGYuZ2xvYmFsWCArPSBlLm1vdmVtZW50WDtcbiAgICAgICAgc2VsZi5nbG9iYWxZICs9IGUubW92ZW1lbnRZO1xuXG4gICAgICAgIHNlbGYudXBkYXRlKGUsIHNlbGYuZ2xvYmFsWCwgc2VsZi5nbG9iYWxZKTtcbiAgICAgIH0gZWxzZSBzZWxmLnVwZGF0ZShlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRyYWNrKGNvbXBvbmVudCkge1xuICAgIGxldCBpc0hvdmVyZWQgPSBmYWxzZTtcblxuICAgIHRoaXMub24oJ21vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5ob3ZlcnMoY29tcG9uZW50KSkge1xuICAgICAgICBpZiAoaXNIb3ZlcmVkKSBjb21wb25lbnQuZW1pdCgnbW91c2Vtb3ZlJyk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbXBvbmVudC5lbWl0KCdtb3VzZW92ZXInKTtcbiAgICAgICAgICBpc0hvdmVyZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzSG92ZXJlZCkge1xuICAgICAgICBjb21wb25lbnQuZW1pdCgnbW91c2VvdXQnKTtcbiAgICAgICAgaXNIb3ZlcmVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChpc0hvdmVyZWQpIGNvbXBvbmVudC5lbWl0KCdjbGljaycpO1xuICAgICAgZWxzZSBjb21wb25lbnQuZW1pdCgnb2ZmQ2xpY2snKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgIGlmIChpc0hvdmVyZWQpIGNvbXBvbmVudC5lbWl0KCdtb3VzZWRvd24nKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICBpZiAoaXNIb3ZlcmVkKSBjb21wb25lbnQuZW1pdCgnbW91c2V1cCcpO1xuICAgIH0pO1xuICB9XG5cbiAgaW50ZXJzZWN0aW9uKGNvbXBvbmVudCkge1xuICAgIHJldHVybiB0aGlzLnJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3QoY29tcG9uZW50Lm5hdGl2ZSk7XG4gIH1cblxuICBwcm9qZWN0KHBsYW5lID0gdGhpcy5wcm9qZWN0aW9uUGxhbmUpIHtcbiAgICByZXR1cm4gdGhpcy5yYXljYXN0ZXIucmF5LmludGVyc2VjdFBsYW5lKHBsYW5lKTtcbiAgfVxuXG4gIGhvdmVycyhjb21wb25lbnQpIHtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSB0aGlzLmludGVyc2VjdGlvbihjb21wb25lbnQpWzBdO1xuICAgIHJldHVybiBpbnRlcnNlY3Rpb24gPyBpbnRlcnNlY3Rpb24ub2JqZWN0ID09PSBjb21wb25lbnQubmF0aXZlIDogZmFsc2U7XG4gIH1cblxuICBnZXQgcmF5KCkge1xuICAgIHJldHVybiB0aGlzLnJheWNhc3Rlci5yYXk7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VzZS54O1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2UueTtcbiAgfVxufVxuIiwiaW1wb3J0IHtMb29wfSBmcm9tICcuLi8uLi9jb3JlL0xvb3AnO1xuaW1wb3J0IHtFdmVudHNQYXRjaE1vZHVsZX0gZnJvbSAnLi9FdmVudHNQYXRjaE1vZHVsZSc7XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sc01vZHVsZSB7XG4gIHN0YXRpYyBmcm9tKGNvbnRyb2xzKSB7XG4gICAgcmV0dXJuIG5ldyBDb250cm9sc01vZHVsZSh7Y29udHJvbHN9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgdGhpcy5wYXJhbXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRyb2xzOiBmYWxzZSxcbiAgICAgIGZpeDogY29udHJvbHMgPT4gY29udHJvbHMsXG5cbiAgICAgIHVwZGF0ZShjKSB7XG4gICAgICAgIHRoaXMuY29udHJvbHMudXBkYXRlKGMuZ2V0RGVsdGEoKSk7XG4gICAgICB9XG4gICAgfSwgcGFyYW1zKTtcblxuICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLnBhcmFtcy5jb250cm9scztcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMucGFyYW1zLnVwZGF0ZTtcbiAgfVxuXG4gIG1hbmFnZXIobWFuYWdlcikge1xuICAgIG1hbmFnZXIucmVxdWlyZSgnZXZlbnRzJywgKCkgPT4gbmV3IEV2ZW50c1BhdGNoTW9kdWxlKCkpO1xuICB9XG5cbiAgc2V0Q29udHJvbHMoY29udHJvbHMpIHtcbiAgICB0aGlzLmNvbnRyb2xzID0gY29udHJvbHM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRVcGRhdGUodXBkYXRlKSB7XG4gICAgdGhpcy51cGRhdGUgPSB1cGRhdGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbnRlZ3JhdGUoc2VsZikge1xuICAgIHNlbGYudXBkYXRlTG9vcCA9IG5ldyBMb29wKHNlbGYudXBkYXRlLmJpbmQoc2VsZikpO1xuICAgIHNlbGYudXBkYXRlTG9vcC5zdGFydCh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRm9nRXhwMixcbiAgRm9nXG59IGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3MgRm9nTW9kdWxlXG4gKiBAY2F0ZWdvcnkgbW9kdWxlcy9hcHBcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zPXtjb2xvcjogMHhlZmQxYjUsIGRlbnNpdHk6IDAuMDIwLCBuZWFyOiAxMCwgZmFyOiAxMDAwfV0gLSBUaGUgcGFyYW1ldGVycyBvYmplY3QuXG4gKiBAcGFyYW0ge1N0cmluZ30gW3R5cGU9ZXhwMl0gLSBUaGUgdHlwZSBvZiBmb2cgLSBleHAyIG9yIGxpbmVhclxuICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcFxuICogQGV4YW1wbGUgPGNhcHRpb24+SG93IHRvIGNyZWF0ZSBhbmQgYXBwbHkgYSBGb2dNb2R1bGU8L2NhcHRpb24+XG4gKiBjb25zdCBmb2dNb2R1bGUgPSBuZXcgRm9nTW9kdWxlKHtcbiAqICAgIGNvbG9yOiAweGZmZmZmZixcbiAqICAgIGRlbnNpdHk6IDAuMDMsXG4gKiAgICBuZWFyOiAyMCxcbiAqICAgIGZhcjogMjAwXG4gKiAgfSwgJ2V4cDInKTtcbiAqXG4gKiBuZXcgQXBwKFtcbiAqICAuLi4sXG4gKiAgZm9nTW9kdWxlXG4gKiBdKTtcbiAqL1xuZXhwb3J0IGNsYXNzIEZvZ01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9LCB0eXBlKSB7XG4gICAgdGhpcy5wYXJhbXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbG9yOiAweGVmZDFiNSxcbiAgICAgIGRlbnNpdHk6IDAuMDIwLFxuICAgICAgbmVhcjogMTAsXG4gICAgICBmYXI6IDEwMDBcbiAgICB9LCBwYXJhbXMpO1xuICAgIGlmICghdHlwZSB8fCB0eXBlID09PSAnZXhwMicpIHRoaXMuZm9nID0gbmV3IEZvZ0V4cDIodGhpcy5wYXJhbXMuY29sb3IsIHRoaXMucGFyYW1zLmRlbnNpdHkpO1xuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdsaW5lYXInKSB0aGlzLmZvZyA9IG5ldyBGb2codGhpcy5wYXJhbXMuY29sb3IsIHRoaXMucGFyYW1zLm5lYXIsIHRoaXMucGFyYW1zLmZhcik7XG4gIH1cblxuICBtYW5hZ2VyKG1hbmFnZXIpIHtcbiAgICBtYW5hZ2VyLnNldCgnZm9nJywgdGhpcy5mb2cpO1xuICAgIG1hbmFnZXIuZ2V0KCdzY2VuZScpLmZvZyA9IHRoaXMuZm9nO1xuICB9XG59XG4iLCJpbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XG5cbmNvbnN0IGlzRXF1YWxEZWZhdWx0ID0gKGEsIGIpID0+IHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuICBlbHNlIGlmIChhICYmIGEuZXF1YWxzICYmIGEuZXF1YWxzKGIpKSByZXR1cm4gdHJ1ZTtcblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEBjbGFzcyBTdGF0ZU1vZHVsZVxuICogQGRlc2NyaXB0aW9uIGBTdGF0ZU1vZHVsZWAgaXMgdXNlZnVsIGZvciBhcHBzLCB3aGVyZSB5b3UgbmVlZCBzdGF0ZSBtYW5pcHVsYXRpb24uXG4gKiBUaGlzIGNhbiBiZTogX3RyYW5zaXRpb25zIGJldHdlZW4gc2NyZWVucywgZ2FtZXMsIGRldmVsb3BtZW50IG1vbWVudHNfLlxuICogWW91IGNhbiBjaGVjayBbYmFzaWMvc3RhdGVdKGh0dHBzOi8vd2hzLWRldi5zdXJnZS5zaC9leGFtcGxlcy8/YmFzaWMvc3RhdGUpIGV4YW1wbGUuXG4gKiBAY2F0ZWdvcnkgbW9kdWxlcy9hcHBcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXVxuICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcFxuICogQGV4YW1wbGUgPGNhcHRpb24+IENyZWF0aW5nIGEgc3RhdGUgbW9kdWxlPC9jYXB0aW9uPlxuICogbmV3IEFwcChbXG4gKiAgIC8vIC4uLlxuICogICBuZXcgU3RhdGVNb2R1bGUoKS5kZWZhdWx0KHtcbiAqICAgICBzcGhlcmVDb2xvcjogMHhmZjAwMDBcbiAqICAgfSlcbiAqIF0pO1xuICovXG5leHBvcnQgY2xhc3MgU3RhdGVNb2R1bGUge1xuICBzdGF0aWMgYWN0aW9uR2VuZXJhdGUoaXNFcXVhbCkge1xuICAgIHJldHVybiAoc3RhdGUgPSBbe30sICcnXSwge2tleSwgZGF0YX0pID0+IHtcbiAgICAgIGlmIChpc0VxdWFsKHN0YXRlWzBdW2tleV0sIGRhdGEpKSByZXR1cm4gc3RhdGU7XG5cbiAgICAgIHN0YXRlWzBdW2tleV0gPSBkYXRhO1xuICAgICAgc3RhdGVbMV0gPSBrZXk7XG5cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoZXF1YWxDaGVjayA9IGlzRXF1YWxEZWZhdWx0KSB7XG4gICAgdGhpcy5zdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgICAgU3RhdGVNb2R1bGUuYWN0aW9uR2VuZXJhdGUoZXF1YWxDaGVjaylcbiAgICApO1xuXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0ge307XG4gICAgdGhpcy5jdXJyZW50Q29uZmlnID0gJ2RlZmF1bHQnO1xuICAgIHRoaXMucHJldkNvbmZpZyA9ICdkZWZhdWx0JztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGRlZmF1bHRcbiAgICogQGRlc2NyaXB0aW9uIEFkZCBkZWZhdWx0IGNvbmZpZ3VyYXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIENvbmZpZ3VyYXRpb24gc2V0dXBcbiAgICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcC5TdGF0ZU1vZHVsZVxuICAgKiBAZXhhbXBsZVxuICAgKiBuZXcgV0hTLlN0YXRlTW9kdWxlKCkuZGVmYXVsdCh7XG4gICAqICAgc3BoZXJlQ29sb3I6IFVUSUxTLiRjb2xvcnMubWVzaCxcbiAgICogICBwbGFuZUNvbG9yOiAweDQ0N0Y4QlxuICAgKiB9KVxuICAgKi9cbiAgZGVmYXVsdChkYXRhKSB7XG4gICAgdGhpcy5jb25maWcoe2RlZmF1bHQ6IGRhdGF9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNldEVxdWFsQ2hlY2tcbiAgICogQGRlc2NyaXB0aW9uIFNldHMgYW4gZXF1YWxDaGVjayBmdW5jdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBDb25maWd1cmF0aW9uIHNldHVwXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6bW9kdWxlcy9hcHAuU3RhdGVNb2R1bGVcbiAgICovXG4gIHNldEVxdWFsQ2hlY2soZnVuYykge1xuICAgIHRoaXMuc3RvcmUucmVwbGFjZVJlZHVjZXIoXG4gICAgICBTdGF0ZU1vZHVsZS5hY3Rpb25HZW5lcmF0ZShmdW5jKVxuICAgICk7XG4gIH1cblxuICBtYW5hZ2VyKG1hbmFnZXIpIHtcbiAgICBtYW5hZ2VyLmRlZmluZSgnc3RhdGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGNvbmZpZ1xuICAgKiBAZGVzY3JpcHRpb24gTG9hZCBjb25maWd1cmF0aW9ucyBmcm9tIG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3MgQ29uZmlndXJhdGlvbiBkYXRhXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6bW9kdWxlcy9hcHAuU3RhdGVNb2R1bGVcbiAgICogQGV4YW1wbGUgPGNhcHRpb24+IEFkZGluZyBgZ3JlZW5gIGNvbmZpZ3VyYXRpb248L2NhcHRpb24+XG4gICAqIHN0YXRlLmNvbmZpZyh7XG4gICAqICAgZ3JlZW46IHtcbiAgICogICAgIHNwaGVyZUNvbG9yOiAweDAwZmYwMCxcbiAgICogICAgIHBsYW5lQ29sb3I6IDB4MDBmZjAwXG4gICAqICAgfVxuICAgKiB9KTtcbiAgICovXG4gIGNvbmZpZyhjb25maWdzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY29uZmlncykge1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25ba2V5XSA9IGtleSA9PT0gJ2RlZmF1bHQnXG4gICAgICAgICAgPyBjb25maWdzW2tleV1cbiAgICAgICAgICA6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZmlndXJhdGlvbi5kZWZhdWx0LCBjb25maWdzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gTG9hZCB1cGRhdGVzIGZyb20gb2JqZWN0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlcyBVcGRhdGVzIGRhdGFcbiAgICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcC5TdGF0ZU1vZHVsZVxuICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj4gVXBkYXRlIGNhbGxiYWNrIGZvciBgc3BoZXJlQ29sb3JgPC9jYXB0aW9uPlxuICAgKiBzdGF0ZS51cGRhdGUoe1xuICAgKiAgIHNwaGVyZUNvbG9yOiBjb2xvciA9PiBzcGhlcmUubWF0ZXJpYWwuY29sb3Iuc2V0SGV4KGNvbG9yKVxuICAgKiB9KTtcbiAgICovXG4gIHVwZGF0ZSh1cGRhdGVzID0ge30pIHtcbiAgICB0aGlzLnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCBbZGF0YSwgY2hhbmdlZEtleV0gPSB0aGlzLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IHVwZGF0ZXNbY2hhbmdlZEtleV07XG5cbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZGF0YVtjaGFuZ2VkS2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB0b1xuICAgKiBAZGVzY3JpcHRpb24gU3dpdGNoIHRvIGNvbmZpZ3VyYXRpb24uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWdOYW1lIENvbmZpZ3VyYXRpb24gbmFtZS5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcC5TdGF0ZU1vZHVsZVxuICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj4gQ2hhbmdlcyBjb25maWd1cmF0aW9uIHRvIGBncmVlbmA8L2NhcHRpb24+XG4gICAqIHN0YXRlLnRvKCdncmVlbicpO1xuICAgKi9cbiAgdG8oY29uZmlnTmFtZSkge1xuICAgIHRoaXMucHJldkNvbmZpZyA9IHRoaXMuY3VycmVudENvbmZpZztcbiAgICB0aGlzLmN1cnJlbnRDb25maWcgPSBjb25maWdOYW1lO1xuXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uW2NvbmZpZ05hbWVdXG4gICAgICA/IHRoaXMuY29uZmlndXJhdGlvbltjb25maWdOYW1lXVxuICAgICAgOiB0aGlzLmNvbmZpZ3VyYXRpb24uZGVmYXVsdDtcblxuICAgIHRoaXMuc2V0KGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBzZXRcbiAgICogQGRlc2NyaXB0aW9uIFNldCBjdXJyZW50IHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIENvbmZpZ3VyYXRpb24gcGFyYW1ldGVycy5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcC5TdGF0ZU1vZHVsZVxuICAgKiBAZXhhbXBsZVxuICAgKiBzdGF0ZS5zZXQoe1xuICAgKiAgIHNwaGVyZUNvbG9yOiAweDAwZmYwMFxuICAgKiB9KTtcbiAgICovXG4gIHNldChkYXRhKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSlcbiAgICAgIGlmIChrZXkpIHRoaXMuc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdBREQnLCBrZXksIGRhdGE6IGRhdGFba2V5XX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZ2V0XG4gICAqIEBkZXNjcmlwdGlvbiBSZXR1cm4gZGF0YSBvZiBwYXJhbWV0ZXIuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgUGFyYW1ldGVyIG5hbWUuXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6bW9kdWxlcy9hcHAuU3RhdGVNb2R1bGVcbiAgICogQGV4YW1wbGVcbiAgICogc3RhdGUuZ2V0KCdzcGhlcmVDb2xvcicpOyAvLyAweDAwZmYwMFxuICAgKi9cbiAgZ2V0KGtleSkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKClbMF1ba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHByZXZcbiAgICogQGRlc2NyaXB0aW9uIFJldHVybiBgdHJ1ZVZhbGAgaWYgYGNvbmZpZ2AgbWF0Y2ggcHJldmlvdXMgY29uZmlndXJhdGlvbiwgaW4gb3RoZXIgY2FzZSAtIHJldHVybiBgZmFsc2VWYWxgLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnIENvbmZpZ3VyYXRpb24gbmFtZS5cbiAgICogQHBhcmFtIHtBbnl9IHRydWVWYWwgVmFsdWUgcmV0dXJuZWQgaWYgY29uZGl0aW9uIGlzIHRydXRoeS5cbiAgICogQHBhcmFtIHtBbnl9IGZhbHNlVmFsIENWYWx1ZSByZXR1cm5lZCBpZiBjb25kaXRpb24gaXMgZmFsc3kuXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6bW9kdWxlcy9hcHAuU3RhdGVNb2R1bGVcbiAgICovXG4gIHByZXYoY29uZmlnLCB0cnVlVmFsLCBmYWxzZVZhbCkge1xuICAgIHJldHVybiB0aGlzLnByZXZDb25maWcgPT09IGNvbmZpZyA/IHRydWVWYWwgOiBmYWxzZVZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGN1cnJlbnRcbiAgICogQGRlc2NyaXB0aW9uIFJldHVybiBgdHJ1ZVZhbGAgaWYgYGNvbmZpZ2AgbWF0Y2ggY3VycmVudCBjb25maWd1cmF0aW9uLCBpbiBvdGhlciBjYXNlIC0gcmV0dXJuIGBmYWxzZVZhbGAuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcgQ29uZmlndXJhdGlvbiBuYW1lLlxuICAgKiBAcGFyYW0ge0FueX0gdHJ1ZVZhbCBWYWx1ZSByZXR1cm5lZCBpZiBjb25kaXRpb24gaXMgdHJ1dGh5LlxuICAgKiBAcGFyYW0ge0FueX0gZmFsc2VWYWwgQ1ZhbHVlIHJldHVybmVkIGlmIGNvbmRpdGlvbiBpcyBmYWxzeS5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcC5TdGF0ZU1vZHVsZVxuICAgKi9cbiAgY3VycmVudChjb25maWcsIHRydWVWYWwsIGZhbHNlVmFsKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudENvbmZpZyA9PT0gY29uZmlnID8gdHJ1ZVZhbCA6IGZhbHNlVmFsO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBNT1VTRSxcbiAgUXVhdGVybmlvbixcbiAgU3BoZXJpY2FsLFxuICBWZWN0b3IyLFxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcbiAgT3J0aG9ncmFwaGljQ2FtZXJhLFxuICBFdmVudERpc3BhdGNoZXIsXG4gIFZlY3RvcjNcbn0gZnJvbSAndGhyZWUnO1xuXG4vLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy5cbi8vIFVubGlrZSBUcmFja2JhbGxDb250cm9scywgaXQgbWFpbnRhaW5zIHRoZSBcInVwXCIgZGlyZWN0aW9uIG9iamVjdC51cCAoK1kgYnkgZGVmYXVsdCkuXG4vL1xuLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxuLy8gICAgWm9vbSAtIG1pZGRsZSBtb3VzZSwgb3IgbW91c2V3aGVlbCAvIHRvdWNoOiB0d28gZmluZ2VyIHNwcmVhZCBvciBzcXVpc2hcbi8vICAgIFBhbiAtIHJpZ2h0IG1vdXNlLCBvciBhcnJvdyBrZXlzIC8gdG91Y2g6IHRocmVlIGZpbnRlciBzd2lwZVxuXG5leHBvcnQgY2xhc3MgVGhyZWVPcmJpdENvbnRyb2xzIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3Iob2JqZWN0LCBkb21FbGVtZW50LCBldmVudEhhbmRsZXIpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSAoZG9tRWxlbWVudCA9PT0gdW5kZWZpbmVkKSA/IGRvY3VtZW50IDogZG9tRWxlbWVudDtcbiAgICB0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlcjtcblxuICAgIC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgb2JqZWN0IG9yYml0cyBhcm91bmRcbiAgICB0aGlzLnRhcmdldCA9IG5ldyBWZWN0b3IzKCk7XG5cbiAgICAvLyBIb3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dCAoIFBlcnNwZWN0aXZlQ2FtZXJhIG9ubHkgKVxuICAgIHRoaXMubWluRGlzdGFuY2UgPSAwO1xuICAgIHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblxuICAgIC8vIEhvdyBmYXIgeW91IGNhbiB6b29tIGluIGFuZCBvdXQgKCBPcnRob2dyYXBoaWNDYW1lcmEgb25seSApXG4gICAgdGhpcy5taW5ab29tID0gMDtcbiAgICB0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcblxuICAgIC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuICAgIC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuICAgIHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcbiAgICB0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cbiAgICAvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuICAgIC8vIElmIHNldCwgbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiB0aGUgaW50ZXJ2YWwgWyAtIE1hdGguUEksIE1hdGguUEkgXS5cbiAgICB0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC1JbmZpbml0eTsgLy8gcmFkaWFuc1xuICAgIHRoaXMubWF4QXppbXV0aEFuZ2xlID0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblxuICAgIC8vIFNldCB0byB0cnVlIHRvIGVuYWJsZSBkYW1waW5nIChpbmVydGlhKVxuICAgIC8vIElmIGRhbXBpbmcgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG4gICAgdGhpcy5lbmFibGVEYW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5kYW1waW5nRmFjdG9yID0gMC4yNTtcblxuICAgIC8vIFRoaXMgb3B0aW9uIGFjdHVhbGx5IGVuYWJsZXMgZG9sbHlpbmcgaW4gYW5kIG91dDsgbGVmdCBhcyBcInpvb21cIiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAgLy8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgem9vbWluZ1xuICAgIHRoaXMuZW5hYmxlWm9vbSA9IHRydWU7XG4gICAgdGhpcy56b29tU3BlZWQgPSAxLjA7XG5cbiAgICAvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSByb3RhdGluZ1xuICAgIHRoaXMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcbiAgICB0aGlzLnJvdGF0ZVNwZWVkID0gMS4wO1xuXG4gICAgLy8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcGFubmluZ1xuICAgIHRoaXMuZW5hYmxlUGFuID0gdHJ1ZTtcbiAgICB0aGlzLmtleVBhblNwZWVkID0gNy4wOyAvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cbiAgICAvLyBTZXQgdG8gdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IHJvdGF0ZSBhcm91bmQgdGhlIHRhcmdldFxuICAgIC8vIElmIGF1dG8tcm90YXRlIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuICAgIHRoaXMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciByb3VuZCB3aGVuIGZwcyBpcyA2MFxuXG4gICAgLy8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdXNlIG9mIHRoZSBrZXlzXG4gICAgdGhpcy5lbmFibGVLZXlzID0gdHJ1ZTtcblxuICAgIC8vIFRoZSBmb3VyIGFycm93IGtleXNcbiAgICB0aGlzLmtleXMgPSB7TEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwfTtcblxuICAgIC8vIE1vdXNlIGJ1dHRvbnNcbiAgICB0aGlzLm1vdXNlQnV0dG9ucyA9IHtPUkJJVDogTU9VU0UuTEVGVCwgWk9PTTogTU9VU0UuTUlERExFLCBQQU46IE1PVVNFLlJJR0hUfTtcblxuICAgIC8vIGZvciByZXNldFxuICAgIHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XG4gICAgdGhpcy5wb3NpdGlvbjAgPSB0aGlzLm9iamVjdC5wb3NpdGlvbi5jbG9uZSgpO1xuICAgIHRoaXMuem9vbTAgPSB0aGlzLm9iamVjdC56b29tO1xuXG4gICAgLy9cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIC8vXG5cbiAgICB0aGlzLmdldFBvbGFyQW5nbGUgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gc3BoZXJpY2FsLnBoaTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRBemltdXRoYWxBbmdsZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBzcGhlcmljYWwudGhldGE7XG4gICAgfTtcblxuICAgIHRoaXMucmVzZXQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRhcmdldC5jb3B5KHRoaXMudGFyZ2V0MCk7XG4gICAgICB0aGlzLm9iamVjdC5wb3NpdGlvbi5jb3B5KHRoaXMucG9zaXRpb24wKTtcbiAgICAgIHRoaXMub2JqZWN0Lnpvb20gPSB0aGlzLnpvb20wO1xuXG4gICAgICB0aGlzLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG4gICAgfTtcblxuICAgIC8vIHRoaXMgbWV0aG9kIGlzIGV4cG9zZWQsIGJ1dCBwZXJoYXBzIGl0IHdvdWxkIGJlIGJldHRlciBpZiB3ZSBjYW4gbWFrZSBpdCBwcml2YXRlLi4uXG4gICAgdGhpcy51cGRhdGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBuZXcgVmVjdG9yMygpO1xuXG4gICAgICAvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcbiAgICAgIGNvbnN0IHF1YXQgPSBuZXcgUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhvYmplY3QudXAsIG5ldyBWZWN0b3IzKDAsIDEsIDApKTtcbiAgICAgIGNvbnN0IHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVyc2UoKTtcblxuICAgICAgY29uc3QgbGFzdFBvc2l0aW9uID0gbmV3IFZlY3RvcjMoKTtcbiAgICAgIGNvbnN0IGxhc3RRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcblxuICAgICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5vYmplY3QucG9zaXRpb247XG5cbiAgICAgICAgb2Zmc2V0LmNvcHkocG9zaXRpb24pLnN1Yih0aGlzLnRhcmdldCk7XG5cbiAgICAgICAgLy8gcm90YXRlIG9mZnNldCB0byBcInktYXhpcy1pcy11cFwiIHNwYWNlXG4gICAgICAgIG9mZnNldC5hcHBseVF1YXRlcm5pb24ocXVhdCk7XG5cbiAgICAgICAgLy8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuICAgICAgICBzcGhlcmljYWwuc2V0RnJvbVZlY3RvcjMob2Zmc2V0KTtcblxuICAgICAgICBpZiAodGhpcy5hdXRvUm90YXRlICYmIHN0YXRlID09PSBTVEFURS5OT05FKVxuICAgICAgICAgIHJvdGF0ZUxlZnQoZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSk7XG5cbiAgICAgICAgc3BoZXJpY2FsLnRoZXRhICs9IHNwaGVyaWNhbERlbHRhLnRoZXRhO1xuICAgICAgICBzcGhlcmljYWwucGhpICs9IHNwaGVyaWNhbERlbHRhLnBoaTtcblxuICAgICAgICAvLyByZXN0cmljdCB0aGV0YSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG4gICAgICAgIHNwaGVyaWNhbC50aGV0YSA9IE1hdGgubWF4KHRoaXMubWluQXppbXV0aEFuZ2xlLCBNYXRoLm1pbih0aGlzLm1heEF6aW11dGhBbmdsZSwgc3BoZXJpY2FsLnRoZXRhKSk7XG5cbiAgICAgICAgLy8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcbiAgICAgICAgc3BoZXJpY2FsLnBoaSA9IE1hdGgubWF4KHRoaXMubWluUG9sYXJBbmdsZSwgTWF0aC5taW4odGhpcy5tYXhQb2xhckFuZ2xlLCBzcGhlcmljYWwucGhpKSk7XG5cbiAgICAgICAgc3BoZXJpY2FsLm1ha2VTYWZlKCk7XG5cbiAgICAgICAgc3BoZXJpY2FsLnJhZGl1cyAqPSBzY2FsZTtcblxuICAgICAgICAvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuICAgICAgICBzcGhlcmljYWwucmFkaXVzID0gTWF0aC5tYXgodGhpcy5taW5EaXN0YW5jZSwgTWF0aC5taW4odGhpcy5tYXhEaXN0YW5jZSwgc3BoZXJpY2FsLnJhZGl1cykpO1xuXG4gICAgICAgIC8vIG1vdmUgdGFyZ2V0IHRvIHBhbm5lZCBsb2NhdGlvblxuICAgICAgICB0aGlzLnRhcmdldC5hZGQocGFuT2Zmc2V0KTtcblxuICAgICAgICBvZmZzZXQuc2V0RnJvbVNwaGVyaWNhbChzcGhlcmljYWwpO1xuXG4gICAgICAgIC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxuICAgICAgICBvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKHF1YXRJbnZlcnNlKTtcblxuICAgICAgICBwb3NpdGlvbi5jb3B5KHRoaXMudGFyZ2V0KS5hZGQob2Zmc2V0KTtcblxuICAgICAgICB0aGlzLm9iamVjdC5sb29rQXQodGhpcy50YXJnZXQpO1xuXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZURhbXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICBzcGhlcmljYWxEZWx0YS50aGV0YSAqPSAoMSAtIHRoaXMuZGFtcGluZ0ZhY3Rvcik7XG4gICAgICAgICAgc3BoZXJpY2FsRGVsdGEucGhpICo9ICgxIC0gdGhpcy5kYW1waW5nRmFjdG9yKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgc3BoZXJpY2FsRGVsdGEuc2V0KDAsIDAsIDApO1xuXG4gICAgICAgIHNjYWxlID0gMTtcbiAgICAgICAgcGFuT2Zmc2V0LnNldCgwLCAwLCAwKTtcblxuICAgICAgICAvLyB1cGRhdGUgY29uZGl0aW9uIGlzOlxuICAgICAgICAvLyBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcbiAgICAgICAgLy8gdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XG5cbiAgICAgICAgaWYgKHpvb21DaGFuZ2VkXG4gICAgICAgICAgfHwgbGFzdFBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKHRoaXMub2JqZWN0LnBvc2l0aW9uKSA+IEVQU1xuICAgICAgICAgIHx8IDggKiAoMSAtIGxhc3RRdWF0ZXJuaW9uLmRvdCh0aGlzLm9iamVjdC5xdWF0ZXJuaW9uKSkgPiBFUFMpIHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuXG4gICAgICAgICAgbGFzdFBvc2l0aW9uLmNvcHkodGhpcy5vYmplY3QucG9zaXRpb24pO1xuICAgICAgICAgIGxhc3RRdWF0ZXJuaW9uLmNvcHkodGhpcy5vYmplY3QucXVhdGVybmlvbik7XG4gICAgICAgICAgem9vbUNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSkoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5kaXNwb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UpO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSk7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlKTtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UpO1xuXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UpO1xuXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UpO1xuXG4gICAgICAvLyB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Rpc3Bvc2UnIH0gKTsgLy8gc2hvdWxkIHRoaXMgYmUgYWRkZWQgaGVyZT9cbiAgICB9O1xuXG4gICAgLy9cbiAgICAvLyBpbnRlcm5hbHNcbiAgICAvL1xuXG4gICAgY29uc3QgY2hhbmdlRXZlbnQgPSB7dHlwZTogJ2NoYW5nZSd9O1xuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSB7dHlwZTogJ3N0YXJ0J307XG4gICAgY29uc3QgZW5kRXZlbnQgPSB7dHlwZTogJ2VuZCd9O1xuXG4gICAgY29uc3QgU1RBVEUgPSB7Tk9ORTogLTEsIFJPVEFURTogMCwgRE9MTFk6IDEsIFBBTjogMiwgVE9VQ0hfUk9UQVRFOiAzLCBUT1VDSF9ET0xMWTogNCwgVE9VQ0hfUEFOOiA1fTtcblxuICAgIGxldCBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICBjb25zdCBFUFMgPSAwLjAwMDAwMTtcblxuICAgIC8vIGN1cnJlbnQgcG9zaXRpb24gaW4gc3BoZXJpY2FsIGNvb3JkaW5hdGVzXG4gICAgY29uc3Qgc3BoZXJpY2FsID0gbmV3IFNwaGVyaWNhbCgpO1xuICAgIGNvbnN0IHNwaGVyaWNhbERlbHRhID0gbmV3IFNwaGVyaWNhbCgpO1xuXG4gICAgbGV0IHNjYWxlID0gMTtcbiAgICBjb25zdCBwYW5PZmZzZXQgPSBuZXcgVmVjdG9yMygpO1xuICAgIGxldCB6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgcm90YXRlU3RhcnQgPSBuZXcgVmVjdG9yMigpO1xuICAgIGNvbnN0IHJvdGF0ZUVuZCA9IG5ldyBWZWN0b3IyKCk7XG4gICAgY29uc3Qgcm90YXRlRGVsdGEgPSBuZXcgVmVjdG9yMigpO1xuXG4gICAgY29uc3QgcGFuU3RhcnQgPSBuZXcgVmVjdG9yMigpO1xuICAgIGNvbnN0IHBhbkVuZCA9IG5ldyBWZWN0b3IyKCk7XG4gICAgY29uc3QgcGFuRGVsdGEgPSBuZXcgVmVjdG9yMigpO1xuXG4gICAgY29uc3QgZG9sbHlTdGFydCA9IG5ldyBWZWN0b3IyKCk7XG4gICAgY29uc3QgZG9sbHlFbmQgPSBuZXcgVmVjdG9yMigpO1xuICAgIGNvbnN0IGRvbGx5RGVsdGEgPSBuZXcgVmVjdG9yMigpO1xuXG4gICAgY29uc3QgZ2V0QXV0b1JvdGF0aW9uQW5nbGUgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogdGhpcy5hdXRvUm90YXRlU3BlZWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFpvb21TY2FsZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBNYXRoLnBvdygwLjk1LCB0aGlzLnpvb21TcGVlZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJvdGF0ZUxlZnQgPSBhbmdsZSA9PiB7XG4gICAgICBzcGhlcmljYWxEZWx0YS50aGV0YSAtPSBhbmdsZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgcm90YXRlVXAgPSBhbmdsZSA9PiB7XG4gICAgICBzcGhlcmljYWxEZWx0YS5waGkgLT0gYW5nbGU7XG4gICAgfTtcblxuICAgIGNvbnN0IHBhbkxlZnQgPSAoKCkgPT4ge1xuICAgICAgY29uc3QgdiA9IG5ldyBWZWN0b3IzKCk7XG5cbiAgICAgIHJldHVybiAoZGlzdGFuY2UsIG9iamVjdE1hdHJpeCkgPT4ge1xuICAgICAgICB2LnNldEZyb21NYXRyaXhDb2x1bW4ob2JqZWN0TWF0cml4LCAwKTsgLy8gZ2V0IFggY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuICAgICAgICB2Lm11bHRpcGx5U2NhbGFyKC1kaXN0YW5jZSk7XG4gICAgICAgIHBhbk9mZnNldC5hZGQodik7XG4gICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBwYW5VcCA9ICgoKSA9PiB7XG4gICAgICBjb25zdCB2ID0gbmV3IFZlY3RvcjMoKTtcblxuICAgICAgcmV0dXJuIChkaXN0YW5jZSwgb2JqZWN0TWF0cml4KSA9PiB7XG4gICAgICAgIHYuc2V0RnJvbU1hdHJpeENvbHVtbihvYmplY3RNYXRyaXgsIDEpOyAvLyBnZXQgWSBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG4gICAgICAgIHYubXVsdGlwbHlTY2FsYXIoZGlzdGFuY2UpO1xuICAgICAgICBwYW5PZmZzZXQuYWRkKHYpO1xuICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgLy8gZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGluIHBpeGVsczsgcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXG4gICAgY29uc3QgcGFuID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IG5ldyBWZWN0b3IzKCk7XG5cbiAgICAgIHJldHVybiAoZGVsdGFYLCBkZWx0YVkpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyB0aGlzLmRvbUVsZW1lbnQuYm9keSA6IHRoaXMuZG9tRWxlbWVudDtcblxuICAgICAgICBpZiAodGhpcy5vYmplY3QgaW5zdGFuY2VvZiBQZXJzcGVjdGl2ZUNhbWVyYSkge1xuICAgICAgICAgIC8vIHBlcnNwZWN0aXZlXG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLm9iamVjdC5wb3NpdGlvbjtcbiAgICAgICAgICBvZmZzZXQuY29weShwb3NpdGlvbikuc3ViKHRoaXMudGFyZ2V0KTtcbiAgICAgICAgICBsZXQgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XG5cbiAgICAgICAgICAvLyBoYWxmIG9mIHRoZSBmb3YgaXMgY2VudGVyIHRvIHRvcCBvZiBzY3JlZW5cbiAgICAgICAgICB0YXJnZXREaXN0YW5jZSAqPSBNYXRoLnRhbigodGhpcy5vYmplY3QuZm92IC8gMikgKiBNYXRoLlBJIC8gMTgwLjApO1xuXG4gICAgICAgICAgLy8gd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIHNjcmVlbldpZHRoLCBzaW5jZSBwZXJzcGVjdGl2ZSBjYW1lcmEgaXMgZml4ZWQgdG8gc2NyZWVuIGhlaWdodFxuICAgICAgICAgIHBhbkxlZnQoMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHRoaXMub2JqZWN0Lm1hdHJpeCk7XG4gICAgICAgICAgcGFuVXAoMiAqIGRlbHRhWSAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHRoaXMub2JqZWN0Lm1hdHJpeCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vYmplY3QgaW5zdGFuY2VvZiBPcnRob2dyYXBoaWNDYW1lcmEpIHtcbiAgICAgICAgICAvLyBvcnRob2dyYXBoaWNcbiAgICAgICAgICBwYW5MZWZ0KGRlbHRhWCAqICh0aGlzLm9iamVjdC5yaWdodCAtIHRoaXMub2JqZWN0LmxlZnQpIC8gdGhpcy5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50V2lkdGgsIHRoaXMub2JqZWN0Lm1hdHJpeCk7XG4gICAgICAgICAgcGFuVXAoZGVsdGFZICogKHRoaXMub2JqZWN0LnRvcCAtIHRoaXMub2JqZWN0LmJvdHRvbSkgLyB0aGlzLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHRoaXMub2JqZWN0Lm1hdHJpeCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2FtZXJhIG5laXRoZXIgb3J0aG9ncmFwaGljIG5vciBwZXJzcGVjdGl2ZVxuICAgICAgICAgIGNvbnNvbGUud2FybignV0FSTklORzogT3JiaXRDb250cm9sc01vZHVsZS5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicpO1xuICAgICAgICAgIHRoaXMuZW5hYmxlUGFuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGRvbGx5SW4gPSBkb2xseVNjYWxlID0+IHtcbiAgICAgIGlmICh0aGlzLm9iamVjdCBpbnN0YW5jZW9mIFBlcnNwZWN0aXZlQ2FtZXJhKVxuICAgICAgICBzY2FsZSAvPSBkb2xseVNjYWxlO1xuXG4gICAgICBlbHNlIGlmICh0aGlzLm9iamVjdCBpbnN0YW5jZW9mIE9ydGhvZ3JhcGhpY0NhbWVyYSkge1xuICAgICAgICB0aGlzLm9iamVjdC56b29tID0gTWF0aC5tYXgodGhpcy5taW5ab29tLCBNYXRoLm1pbih0aGlzLm1heFpvb20sIHRoaXMub2JqZWN0Lnpvb20gKiBkb2xseVNjYWxlKSk7XG4gICAgICAgIHRoaXMub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgem9vbUNoYW5nZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBPcmJpdENvbnRyb2xzTW9kdWxlLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicpO1xuICAgICAgICB0aGlzLmVuYWJsZVpvb20gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZG9sbHlPdXQgPSBkb2xseVNjYWxlID0+IHtcbiAgICAgIGlmICh0aGlzLm9iamVjdCBpbnN0YW5jZW9mIFBlcnNwZWN0aXZlQ2FtZXJhKVxuICAgICAgICBzY2FsZSAqPSBkb2xseVNjYWxlO1xuXG4gICAgICBlbHNlIGlmICh0aGlzLm9iamVjdCBpbnN0YW5jZW9mIE9ydGhvZ3JhcGhpY0NhbWVyYSkge1xuICAgICAgICB0aGlzLm9iamVjdC56b29tID0gTWF0aC5tYXgodGhpcy5taW5ab29tLCBNYXRoLm1pbih0aGlzLm1heFpvb20sIHRoaXMub2JqZWN0Lnpvb20gLyBkb2xseVNjYWxlKSk7XG4gICAgICAgIHRoaXMub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgem9vbUNoYW5nZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBPcmJpdENvbnRyb2xzTW9kdWxlLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicpO1xuICAgICAgICB0aGlzLmVuYWJsZVpvb20gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9cbiAgICAvLyBldmVudCBjYWxsYmFja3MgLSB1cGRhdGUgdGhlIG9iamVjdCBzdGF0ZVxuICAgIC8vXG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZURvd25Sb3RhdGUgPSBldmVudCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blJvdGF0ZScgKTtcblxuICAgICAgcm90YXRlU3RhcnQuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZURvd25Eb2xseSA9IGV2ZW50ID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duRG9sbHknICk7XG5cbiAgICAgIGRvbGx5U3RhcnQuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZURvd25QYW4gPSBldmVudCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blBhbicgKTtcblxuICAgICAgcGFuU3RhcnQuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmVSb3RhdGUgPSBldmVudCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVJvdGF0ZScgKTtcblxuICAgICAgcm90YXRlRW5kLnNldChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgIHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMocm90YXRlRW5kLCByb3RhdGVTdGFydCk7XG5cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gdGhpcy5kb21FbGVtZW50LmJvZHkgOiB0aGlzLmRvbUVsZW1lbnQ7XG5cbiAgICAgIC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcbiAgICAgIHJvdGF0ZUxlZnQoMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHRoaXMucm90YXRlU3BlZWQpO1xuXG4gICAgICAvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcbiAgICAgIHJvdGF0ZVVwKDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogdGhpcy5yb3RhdGVTcGVlZCk7XG5cbiAgICAgIHJvdGF0ZVN0YXJ0LmNvcHkocm90YXRlRW5kKTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlRG9sbHkgPSBldmVudCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZURvbGx5JyApO1xuXG4gICAgICBkb2xseUVuZC5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG5cbiAgICAgIGRvbGx5RGVsdGEuc3ViVmVjdG9ycyhkb2xseUVuZCwgZG9sbHlTdGFydCk7XG5cbiAgICAgIGlmIChkb2xseURlbHRhLnkgPiAwKVxuICAgICAgICBkb2xseUluKGdldFpvb21TY2FsZSgpKTtcblxuICAgICAgZWxzZSBpZiAoZG9sbHlEZWx0YS55IDwgMClcbiAgICAgICAgZG9sbHlPdXQoZ2V0Wm9vbVNjYWxlKCkpO1xuXG4gICAgICBkb2xseVN0YXJ0LmNvcHkoZG9sbHlFbmQpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmVQYW4gPSBldmVudCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVBhbicgKTtcblxuICAgICAgcGFuRW5kLnNldChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcblxuICAgICAgcGFuRGVsdGEuc3ViVmVjdG9ycyhwYW5FbmQsIHBhblN0YXJ0KTtcblxuICAgICAgcGFuKHBhbkRlbHRhLngsIHBhbkRlbHRhLnkpO1xuXG4gICAgICBwYW5TdGFydC5jb3B5KHBhbkVuZCk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSBldmVudCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlVXAnICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlV2hlZWwgPSBldmVudCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlV2hlZWwnICk7XG5cbiAgICAgIGlmIChldmVudC5kZWx0YVkgPCAwKVxuICAgICAgICBkb2xseU91dChnZXRab29tU2NhbGUoKSk7XG5cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmRlbHRhWSA+IDApXG4gICAgICAgIGRvbGx5SW4oZ2V0Wm9vbVNjYWxlKCkpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gZXZlbnQgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coICdoYW5kbGVLZXlEb3duJyApO1xuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuVVA6XG4gICAgICAgICAgcGFuKDAsIHRoaXMua2V5UGFuU3BlZWQpO1xuICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSB0aGlzLmtleXMuQk9UVE9NOlxuICAgICAgICAgIHBhbigwLCAtdGhpcy5rZXlQYW5TcGVlZCk7XG4gICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHRoaXMua2V5cy5MRUZUOlxuICAgICAgICAgIHBhbih0aGlzLmtleVBhblNwZWVkLCAwKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLlJJR0hUOlxuICAgICAgICAgIHBhbigtdGhpcy5rZXlQYW5TcGVlZCwgMCk7XG4gICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVUb3VjaFN0YXJ0Um90YXRlID0gZXZlbnQgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0Um90YXRlJyApO1xuXG4gICAgICByb3RhdGVTdGFydC5zZXQoZXZlbnQudG91Y2hlc1swXS5wYWdlWCwgZXZlbnQudG91Y2hlc1swXS5wYWdlWSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRvdWNoU3RhcnREb2xseSA9IGV2ZW50ID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydERvbGx5JyApO1xuXG4gICAgICBjb25zdCBkeCA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVggLSBldmVudC50b3VjaGVzWzFdLnBhZ2VYO1xuICAgICAgY29uc3QgZHkgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sxXS5wYWdlWTtcblxuICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgICBkb2xseVN0YXJ0LnNldCgwLCBkaXN0YW5jZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRvdWNoU3RhcnRQYW4gPSBldmVudCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRQYW4nICk7XG5cbiAgICAgIHBhblN0YXJ0LnNldChldmVudC50b3VjaGVzWzBdLnBhZ2VYLCBldmVudC50b3VjaGVzWzBdLnBhZ2VZKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlVG91Y2hNb3ZlUm90YXRlID0gZXZlbnQgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVSb3RhdGUnICk7XG5cbiAgICAgIHJvdGF0ZUVuZC5zZXQoZXZlbnQudG91Y2hlc1swXS5wYWdlWCwgZXZlbnQudG91Y2hlc1swXS5wYWdlWSk7XG4gICAgICByb3RhdGVEZWx0YS5zdWJWZWN0b3JzKHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQpO1xuXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHRoaXMuZG9tRWxlbWVudC5ib2R5IDogdGhpcy5kb21FbGVtZW50O1xuXG4gICAgICAvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG4gICAgICByb3RhdGVMZWZ0KDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiB0aGlzLnJvdGF0ZVNwZWVkKTtcblxuICAgICAgLy8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG4gICAgICByb3RhdGVVcCgyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHRoaXMucm90YXRlU3BlZWQpO1xuXG4gICAgICByb3RhdGVTdGFydC5jb3B5KHJvdGF0ZUVuZCk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRvdWNoTW92ZURvbGx5ID0gZXZlbnQgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVEb2xseScgKTtcblxuICAgICAgY29uc3QgZHggPSBldmVudC50b3VjaGVzWzBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sxXS5wYWdlWDtcbiAgICAgIGNvbnN0IGR5ID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbMV0ucGFnZVk7XG5cbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICAgICAgZG9sbHlFbmQuc2V0KDAsIGRpc3RhbmNlKTtcblxuICAgICAgZG9sbHlEZWx0YS5zdWJWZWN0b3JzKGRvbGx5RW5kLCBkb2xseVN0YXJ0KTtcblxuICAgICAgaWYgKGRvbGx5RGVsdGEueSA+IDApXG4gICAgICAgIGRvbGx5T3V0KGdldFpvb21TY2FsZSgpKTtcblxuICAgICAgZWxzZSBpZiAoZG9sbHlEZWx0YS55IDwgMClcbiAgICAgICAgZG9sbHlJbihnZXRab29tU2NhbGUoKSk7XG5cbiAgICAgIGRvbGx5U3RhcnQuY29weShkb2xseUVuZCk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRvdWNoTW92ZVBhbiA9IGV2ZW50ID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUGFuJyApO1xuXG4gICAgICBwYW5FbmQuc2V0KGV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkpO1xuXG4gICAgICBwYW5EZWx0YS5zdWJWZWN0b3JzKHBhbkVuZCwgcGFuU3RhcnQpO1xuXG4gICAgICBwYW4ocGFuRGVsdGEueCwgcGFuRGVsdGEueSk7XG5cbiAgICAgIHBhblN0YXJ0LmNvcHkocGFuRW5kKTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlVG91Y2hFbmQgPSAoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoRW5kJyApO1xuICAgIH07XG5cbiAgICAvL1xuICAgIC8vIGV2ZW50IGhhbmRsZXJzIC0gRlNNOiBsaXN0ZW4gZm9yIGV2ZW50cyBhbmQgcmVzZXQgc3RhdGVcbiAgICAvL1xuXG4gICAgY29uc3Qgb25Nb3VzZURvd24gPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5lbmFibGVkID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSB0aGlzLm1vdXNlQnV0dG9ucy5PUkJJVCkge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVSb3RhdGUgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgaGFuZGxlTW91c2VEb3duUm90YXRlKGV2ZW50KTtcblxuICAgICAgICBzdGF0ZSA9IFNUQVRFLlJPVEFURTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYnV0dG9uID09PSB0aGlzLm1vdXNlQnV0dG9ucy5aT09NKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZVpvb20gPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgaGFuZGxlTW91c2VEb3duRG9sbHkoZXZlbnQpO1xuXG4gICAgICAgIHN0YXRlID0gU1RBVEUuRE9MTFk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gdGhpcy5tb3VzZUJ1dHRvbnMuUEFOKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZVBhbiA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICBoYW5kbGVNb3VzZURvd25QYW4oZXZlbnQpO1xuXG4gICAgICAgIHN0YXRlID0gU1RBVEUuUEFOO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgIT09IFNUQVRFLk5PTkUpIHtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIub24oJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLm9uKCdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHN0YXJ0RXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvbk1vdXNlTW92ZSA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gU1RBVEUuUk9UQVRFKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICBoYW5kbGVNb3VzZU1vdmVSb3RhdGUoZXZlbnQpO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gU1RBVEUuRE9MTFkpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlWm9vbSA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICBoYW5kbGVNb3VzZU1vdmVEb2xseShldmVudCk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBTVEFURS5QQU4pIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlUGFuID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgIGhhbmRsZU1vdXNlTW92ZVBhbihldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG9uTW91c2VVcCA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgIGhhbmRsZU1vdXNlVXAoZXZlbnQpO1xuXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UpO1xuXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZW5kRXZlbnQpO1xuXG4gICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uTW91c2VXaGVlbCA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IGZhbHNlIHx8IHRoaXMuZW5hYmxlWm9vbSA9PT0gZmFsc2UgfHwgKHN0YXRlICE9PSBTVEFURS5OT05FICYmIHN0YXRlICE9PSBTVEFURS5ST1RBVEUpKSByZXR1cm47XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgaGFuZGxlTW91c2VXaGVlbChldmVudCk7XG5cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChzdGFydEV2ZW50KTsgLy8gbm90IHN1cmUgd2h5IHRoZXNlIGFyZSBoZXJlLi4uXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZW5kRXZlbnQpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbktleURvd24gPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5lbmFibGVkID09PSBmYWxzZSB8fCB0aGlzLmVuYWJsZUtleXMgPT09IGZhbHNlIHx8IHRoaXMuZW5hYmxlUGFuID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICBoYW5kbGVLZXlEb3duKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25Ub3VjaFN0YXJ0ID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuZW5hYmxlZCA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgc3dpdGNoIChldmVudC50b3VjaGVzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cbiAgICAgICAgICBpZiAodGhpcy5lbmFibGVSb3RhdGUgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgICBoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKGV2ZW50KTtcblxuICAgICAgICAgIHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cbiAgICAgICAgICBpZiAodGhpcy5lbmFibGVab29tID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgICAgaGFuZGxlVG91Y2hTdGFydERvbGx5KGV2ZW50KTtcblxuICAgICAgICAgIHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuICAgICAgICAgIGlmICh0aGlzLmVuYWJsZVBhbiA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICAgIGhhbmRsZVRvdWNoU3RhcnRQYW4oZXZlbnQpO1xuXG4gICAgICAgICAgc3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSAhPT0gU1RBVEUuTk9ORSlcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHN0YXJ0RXZlbnQpO1xuICAgIH07XG5cbiAgICBjb25zdCBvblRvdWNoTW92ZSA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgc3dpdGNoIChldmVudC50b3VjaGVzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cbiAgICAgICAgICBpZiAodGhpcy5lbmFibGVSb3RhdGUgPT09IGZhbHNlKSByZXR1cm47XG4gICAgICAgICAgaWYgKHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUpIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cbiAgICAgICAgICBoYW5kbGVUb3VjaE1vdmVSb3RhdGUoZXZlbnQpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cbiAgICAgICAgICBpZiAodGhpcy5lbmFibGVab29tID09PSBmYWxzZSkgcmV0dXJuO1xuICAgICAgICAgIGlmIChzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkpIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cbiAgICAgICAgICBoYW5kbGVUb3VjaE1vdmVEb2xseShldmVudCk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuICAgICAgICAgIGlmICh0aGlzLmVuYWJsZVBhbiA9PT0gZmFsc2UpIHJldHVybjtcbiAgICAgICAgICBpZiAoc3RhdGUgIT09IFNUQVRFLlRPVUNIX1BBTikgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuICAgICAgICAgIGhhbmRsZVRvdWNoTW92ZVBhbihldmVudCk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG9uVG91Y2hFbmQgPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5lbmFibGVkID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICBoYW5kbGVUb3VjaEVuZChldmVudCk7XG5cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChlbmRFdmVudCk7XG5cbiAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25Db250ZXh0TWVudSA9IGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIC8vXG5cbiAgICB0aGlzLmV2ZW50SGFuZGxlci5vbignY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSk7XG5cbiAgICB0aGlzLmV2ZW50SGFuZGxlci5vbignbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlKTtcbiAgICB0aGlzLmV2ZW50SGFuZGxlci5vbignd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlKTtcblxuICAgIHRoaXMuZXZlbnRIYW5kbGVyLm9uKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgdGhpcy5ldmVudEhhbmRsZXIub24oJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgIHRoaXMuZXZlbnRIYW5kbGVyLm9uKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UpO1xuXG4gICAgdGhpcy5ldmVudEhhbmRsZXIub24oJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlKTtcblxuICAgIC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGdldCBjZW50ZXIoKSB7XG4gICAgY29uc29sZS53YXJuKCdPcmJpdENvbnRyb2xzOiAuY2VudGVyIGhhcyBiZWVuIHJlbmFtZWQgdG8gLnRhcmdldCcpO1xuICAgIHJldHVybiB0aGlzLnRhcmdldDtcbiAgfVxuXG4gIGdldCBub1pvb20oKSB7XG4gICAgY29uc29sZS53YXJuKCdPcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicpO1xuICAgIHJldHVybiAhdGhpcy5lbmFibGVab29tO1xuICB9XG5cbiAgc2V0IG5vWm9vbSh2YWx1ZSkge1xuICAgIGNvbnNvbGUud2FybignT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nKTtcbiAgICB0aGlzLmVuYWJsZVpvb20gPSAhdmFsdWU7XG4gIH1cblxuICBnZXQgbm9Sb3RhdGUoKSB7XG4gICAgY29uc29sZS53YXJuKCdPcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nKTtcbiAgICByZXR1cm4gIXRoaXMuZW5hYmxlUm90YXRlO1xuICB9XG5cbiAgc2V0IG5vUm90YXRlKHZhbHVlKSB7XG4gICAgY29uc29sZS53YXJuKCdPcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nKTtcbiAgICB0aGlzLmVuYWJsZVJvdGF0ZSA9ICF2YWx1ZTtcbiAgfVxuXG4gIGdldCBub1BhbigpIHtcbiAgICBjb25zb2xlLndhcm4oJ09yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicpO1xuICAgIHJldHVybiAhdGhpcy5lbmFibGVQYW47XG4gIH1cblxuICBzZXQgbm9QYW4odmFsdWUpIHtcbiAgICBjb25zb2xlLndhcm4oJ09yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicpO1xuICAgIHRoaXMuZW5hYmxlUGFuID0gIXZhbHVlO1xuICB9XG5cbiAgZ2V0IG5vS2V5cygpIHtcbiAgICBjb25zb2xlLndhcm4oJ09yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyk7XG4gICAgcmV0dXJuICF0aGlzLmVuYWJsZUtleXM7XG4gIH1cblxuICBzZXQgbm9LZXlzKHZhbHVlKSB7XG4gICAgY29uc29sZS53YXJuKCdPcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicpO1xuICAgIHRoaXMuZW5hYmxlS2V5cyA9ICF2YWx1ZTtcbiAgfVxuXG4gIGdldCBzdGF0aWNNb3ZpbmcoKSB7XG4gICAgY29uc29sZS53YXJuKCdPcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicpO1xuICAgIHJldHVybiAhdGhpcy5lbmFibGVEYW1waW5nO1xuICB9XG5cbiAgc2V0IHN0YXRpY01vdmluZyh2YWx1ZSkge1xuICAgIGNvbnNvbGUud2FybignT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nKTtcbiAgICB0aGlzLmVuYWJsZURhbXBpbmcgPSAhdmFsdWU7XG4gIH1cblxuICBnZXQgZHluYW1pY0RhbXBpbmdGYWN0b3IoKSB7XG4gICAgY29uc29sZS53YXJuKCdPcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyk7XG4gICAgcmV0dXJuIHRoaXMuZGFtcGluZ0ZhY3RvcjtcbiAgfVxuXG4gIHNldCBkeW5hbWljRGFtcGluZ0ZhY3Rvcih2YWx1ZSkge1xuICAgIGNvbnNvbGUud2FybignT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicpO1xuICAgIHRoaXMuZGFtcGluZ0ZhY3RvciA9IHZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQge1ZlY3RvcjN9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7Q29udHJvbHNNb2R1bGV9IGZyb20gJy4uL0NvbnRyb2xzTW9kdWxlJztcblxuaW1wb3J0IHtUaHJlZU9yYml0Q29udHJvbHN9IGZyb20gJy4vbGliL1RocmVlT3JiaXRDb250cm9scyc7XG5cbmV4cG9ydCBjbGFzcyBPcmJpdENvbnRyb2xzTW9kdWxlIGV4dGVuZHMgQ29udHJvbHNNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG5cbiAgICB0aGlzLnBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgZm9sbG93OiBmYWxzZSxcbiAgICAgIG9iamVjdDogbnVsbCxcbiAgICAgIHRhcmdldDogbmV3IFZlY3RvcjMoMCwgMCwgMClcbiAgICB9LCBwYXJhbXMpO1xuICB9XG5cbiAgbWFuYWdlcihtYW5hZ2VyKSB7XG4gICAgc3VwZXIubWFuYWdlcihtYW5hZ2VyKTtcblxuICAgIGNvbnN0IHtvYmplY3Q6IG9iaiwgZm9sbG93LCB0YXJnZXR9ID0gdGhpcy5wYXJhbXM7XG4gICAgY29uc3Qgb2JqZWN0ID0gb2JqID8gb2JqLm5hdGl2ZSA6IG1hbmFnZXIuZ2V0KCdjYW1lcmEnKS5uYXRpdmU7XG5cbiAgICBjb25zdCBjb250cm9scyA9IG5ldyBUaHJlZU9yYml0Q29udHJvbHMoXG4gICAgICBvYmplY3QsXG4gICAgICBtYW5hZ2VyLmdldCgnZWxlbWVudCcpLFxuICAgICAgbWFuYWdlci5oYW5kbGVyXG4gICAgKTtcblxuICAgIGNvbnN0IHVwZGF0ZVByb2Nlc3NvciA9IGZvbGxvdyA/IGMgPT4ge1xuICAgICAgY29udHJvbHMudXBkYXRlKGMuZ2V0RGVsdGEoKSk7XG4gICAgICBjb250cm9scy50YXJnZXQuY29weSh0YXJnZXQpO1xuICAgIH0gOiBjID0+IHtcbiAgICAgIGNvbnRyb2xzLnVwZGF0ZShjLmdldERlbHRhKCkpO1xuICAgIH07XG5cbiAgICB0aGlzLnNldENvbnRyb2xzKGNvbnRyb2xzKTtcbiAgICB0aGlzLnNldFVwZGF0ZSh1cGRhdGVQcm9jZXNzb3IpO1xuXG4gICAgbWFuYWdlci51cGRhdGUoe1xuICAgICAgY2FtZXJhOiBjYW1lcmEgPT4ge1xuICAgICAgICBpZiAob2JqKSByZXR1cm47XG4gICAgICAgIGNvbnRyb2xzLm9iamVjdCA9IGNhbWVyYS5uYXRpdmU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250cm9scy50YXJnZXQuY29weSh0YXJnZXQpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBtb2R1bGVzL2FwcC9jb250cm9scyAqL1xuZXhwb3J0ICogZnJvbSAnLi9PcmJpdENvbnRyb2xzTW9kdWxlJztcbiIsIi8qKiBAbW9kdWxlIG1vZHVsZXMvYXBwICovXG5leHBvcnQgKiBmcm9tICcuL0VsZW1lbnRNb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9SZW5kZXJpbmdNb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9TY2VuZU1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL1Jlc2l6ZU1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL1Bvc3RQcm9jZXNzb3JNb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9WaXJ0dWFsTW91c2VNb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9FdmVudHNQYXRjaE1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL0NvbnRyb2xzTW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vRm9nTW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vU3RhdGVNb2R1bGUnO1xuXG4vLyBjb250cm9sc1xuZXhwb3J0ICogZnJvbSAnLi9jb250cm9scy9pbmRleCc7XG4iLCIvKipcbiAqIEBjbGFzcyBEeW5hbWljR2VvbWV0cnlNb2R1bGVcbiAqIEBjYXRlZ29yeSBtb2R1bGVzL21lc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zPXthdHRyaWJ1dGVzOiBmYWxzZX1dIC0gcGFyYW1zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtwYXRjaEV2ZW50cz10cnVlXVxuICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL21lc2hcbiAqL1xuZXhwb3J0IGNsYXNzIER5bmFtaWNHZW9tZXRyeU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgdGhpcy5wYXJhbXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlXG4gICAgfSwgcGFyYW1zKTtcbiAgfVxuXG4gIGludGVncmF0ZShzZWxmKSB7XG4gICAgY29uc3QgcGFyYW1zID0gc2VsZi5wYXJhbXM7XG5cbiAgICB0aGlzLmdfID0gZnVuY3Rpb24gKHBhcmFtcyA9IHt9KSB7XG4gICAgICBpZiAodGhpcy5idWlsZEdlb21ldHJ5KSB7XG4gICAgICAgIHRoaXMubmF0aXZlLmdlb21ldHJ5ID0gdGhpcy5idWlsZEdlb21ldHJ5KFxuICAgICAgICAgIHRoaXMudXBkYXRlUGFyYW1zKHtnZW9tZXRyeTogcGFyYW1zfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHBhcmFtcy5hdHRyaWJ1dGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnBhcmFtcy5nZW9tZXRyeSkge1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGBnXyR7a2V5fWAsIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlLmdlb21ldHJ5LnBhcmFtZXRlcnNba2V5XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5uYXRpdmUuZ2VvbWV0cnkgPSB0aGlzLmJ1aWxkR2VvbWV0cnkodGhpcy51cGRhdGVQYXJhbXMoe2dlb21ldHJ5OiB7W2tleV06IHZhbHVlfX0pKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFJlcGVhdFdyYXBwaW5nLFxuICBVVk1hcHBpbmcsXG4gIE5lYXJlc3RGaWx0ZXIsXG4gIExpbmVhck1pcE1hcExpbmVhckZpbHRlcixcbiAgVGV4dHVyZUxvYWRlcixcbiAgVmVjdG9yMlxufSBmcm9tICd0aHJlZSc7XG5cbmNvbnN0IGxvYWRlciA9IG5ldyBUZXh0dXJlTG9hZGVyKCk7XG5cbi8qKlxuICogQGNsYXNzIFRleHR1cmVNb2R1bGVcbiAqIEBjYXRlZ29yeSBtb2R1bGVzL21lc2hcbiAqIEBkZXNjcmlwdGlvbiBBIFRleHR1cmVNb2R1bGUgY2FuIGJlIGFwcGxpZWQgdG8gYW55IE1lc2ggb3IgTW9kZWwuXG4gKiBAcGFyYW0ge0FycmF5fSBbdGV4dHVyZXNdIC0gYXJyYXkgb2YgdGV4dHVyZSBvYmplY3RzXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm1vZHVsZXMvbWVzaFxuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRpbmcgYW4gaW5zdGFuY2UuIHVybCB0YWtlcyBhIHBhdGgsIG9yIGEgZGF0YSBvYmplY3QuPC9jYXB0aW9uPlxuICogdmFyIHdvb2RUZXh0dXJlID0gbmV3IFRleHR1cmVNb2R1bGUoe1xuICogICB1cmw6IGAke3Byb2Nlc3MuYXNzZXRzUGF0aH0vdGV4dHVyZXMvd29vZC5qcGdgXG4gKiB9KTtcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk1vcmUgY29tcHJlaGVuc2l2ZSBleGFtcGxlLCB3b29kIHRleHR1cmUgYXBwbGllZCB0byBhIEJveC48L2NhcHRpb24+XG4gKiBuZXcgQm94KHtcbiAqICAgZ2VvbWV0cnk6IHtcbiAqICAgICB3aWR0aDogMixcbiAqICAgICBoZWlnaHQ6IDIsXG4gKiAgICAgZGVwdGg6IDJcbiAqICAgfSxcbiAqICAgbW9kdWxlczogW1xuICogICAgIG5ldyBUZXh0dXJlTW9kdWxlKHtcbiAqICAgICAgIHVybDogYHBhdGgvdG8vdGV4dHVyZS5qcGdgLFxuICogICAgICAgcmVwZWF0OiBuZXcgVEhSRUUuVmVjdG9yMigxLCAxKSAvLyBvcHRpb25hbFxuICogICAgIH0pXG4gKiAgIF0sXG4gKiAgIG1hdGVyaWFsOiBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICogICAgIGNvbG9yOiAweGZmZmZmZlxuICogICB9KSxcbiAqICAgcG9zaXRpb246IFs1MCwgNjAsIDcwXVxuICogfSkuYWRkVG8oYXBwKTtcbiAqL1xuZXhwb3J0IGNsYXNzIFRleHR1cmVNb2R1bGUge1xuICBzdGF0aWMgbG9hZCh1cmwpIHtcbiAgICByZXR1cm4gbmV3IFRleHR1cmVNb2R1bGUoe3VybH0pLnRleHR1cmVzWzBdWzFdO1xuICB9XG5cbiAgdGV4dHVyZXMgPSBbXTtcblxuICBjb25zdHJ1Y3RvciguLi50ZXh0dXJlcykge1xuICAgIHRleHR1cmVzLmZvckVhY2goKHtcbiAgICAgIHVybCxcbiAgICAgIHR5cGUgPSAnbWFwJyxcbiAgICAgIG9mZnNldCA9IG5ldyBWZWN0b3IyKDAsIDApLFxuICAgICAgcmVwZWF0ID0gbmV3IFZlY3RvcjIoMSwgMSksXG4gICAgICB3cmFwID0gUmVwZWF0V3JhcHBpbmcsXG4gICAgICBtYXBwaW5nID0gVVZNYXBwaW5nLFxuICAgICAgZml4ID0gdGV4ID0+IHRleFxuICAgIH0pID0+IHtcbiAgICAgIGNvbnN0IHRleHR1cmUgPSBsb2FkZXIubG9hZCh1cmwpO1xuXG4gICAgICBpZiAod3JhcC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRleHR1cmUud3JhcFMgPSB3cmFwWzBdO1xuICAgICAgICB0ZXh0dXJlLndyYXBUID0gd3JhcFsxXTtcbiAgICAgIH0gZWxzZVxuICAgICAgICB0ZXh0dXJlLndyYXBTID0gdGV4dHVyZS53cmFwVCA9IHdyYXA7XG5cbiAgICAgIHRleHR1cmUubWFwcGluZyA9IG1hcHBpbmc7XG5cbiAgICAgIHRleHR1cmUub2Zmc2V0LmNvcHkob2Zmc2V0KTtcbiAgICAgIHRleHR1cmUucmVwZWF0LmNvcHkocmVwZWF0KTtcblxuICAgICAgdGV4dHVyZS5tYWdGaWx0ZXIgPSBOZWFyZXN0RmlsdGVyO1xuICAgICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBMaW5lYXJNaXBNYXBMaW5lYXJGaWx0ZXI7XG5cbiAgICAgIHRoaXMudGV4dHVyZXMucHVzaChbdHlwZSwgZml4KHRleHR1cmUpXSk7XG4gICAgfSk7XG4gIH1cblxuICBicmlkZ2UgPSB7XG4gICAgbWF0ZXJpYWwobWF0ZXJpYWwsIHNlbGYpIHtcbiAgICAgIHNlbGYudGV4dHVyZXMuZm9yRWFjaCh0ZXh0dXJlID0+IHtcbiAgICAgICAgbWF0ZXJpYWxbdGV4dHVyZVswXV0gPSB0ZXh0dXJlWzFdO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBtYXRlcmlhbDtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEFuaW1hdGlvbk1peGVyLFxuICBBbmltYXRpb25DbGlwLFxuICBDbG9ja1xufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TG9vcH0gZnJvbSAnLi4vLi4vY29yZS9Mb29wJztcblxuLyoqXG4gKiBAY2xhc3MgQW5pbWF0aW9uTW9kdWxlXG4gKiBAY2F0ZWdvcnkgbW9kdWxlcy9tZXNoXG4gKiBAZGVzY3JpcHRpb24gQ29udmVuaWVuY2UgbW9kdWxlIHRoYXQgd3JhcHMgdGhlIDxhIGhyZWY9J2h0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy8jbWFudWFsL2ludHJvZHVjdGlvbi9BbmltYXRpb24tc3lzdGVtJz50aHJlZS5qcyBhbmltYXRpb24gc3lzdGVtPC9hPlxuICogQHBhcmFtIHtBcHB9IGFwcCAtIHRoZSBhcHBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2lzRGVmZXJyZWQ9ZmFsc2VdIC0gc2V0IHRvIHRydWUgaWYgYW5pbWF0aW9uIHNob3VsZCBub3Qgc3RhcnQgYXV0b21hdGljYWxseVxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXM9e3NwZWVkOiAxfV0gLSB0aGUgcGFyYW1zXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm1vZHVsZXMvbWVzaFxuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRlIGFuaW1hdGlvbiBtb2R1bGUgYW5kIHBsYXkgYSBnaXZlbiBjbGlwIG9mIGFuIGltcG9ydGVkIG1vZGVsPC9jYXB0aW9uPlxuICogY29uc3QgYW5pbWF0aW9uTW9kdWxlID0gbmV3IEFuaW1hdGlvbk1vZHVsZShhcHAsIGZhbHNlLCB7XG4gKiAgIHNwZWVkOiAxLjIgLy8gc3BlZWQgdXAgYW5pbWF0aW9uIGJ5IDIwJVxuICogfSk7XG4gKlxuICogbmV3IEltcG9ydGVyKHtcbiAqICAgcGFyc2VyKGdlb21ldHJ5LCBtYXRlcmlhbHMpIHtcbiAqICAgICAvLyBPdmVycmlkZSBwYXJzZSB0byBnZW5lcmF0ZSBhIHNraW5uZWRNZXNoLCBuZWVkZWQgZm9yIHNraW5uZWQgbW9kZWxzXG4gKiAgICAgcmV0dXJuIG5ldyBUSFJFRS5Ta2lubmVkTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWxzKTtcbiAqICAgfSxcbiAqXG4gKiAgIHVybDogYHBhdGgvdG8vbW9kZWwuanNvbmAsXG4gKiAgIHVzZUN1c3RvbU1hdGVyaWFsOiB0cnVlLFxuICpcbiAqICAgbWF0ZXJpYWw6IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gKiAgICAgc2tpbm5pbmc6IHRydWVcbiAqICAgfSksXG4gKlxuICogICBtb2R1bGVzOiBbYW5pbWF0aW9uTW9kdWxlXVxuICogfSkuYWRkVG8oYXBwKS50aGVuKCgpID0+IHtcbiAqICAgLy8gYWRkaW5nIG1vZGVsIHRvIGFwcCByZXR1cm5zIGEgcHJvbWlzZSwgc28gcGlwZSB0aGUgZnVuY3Rpb24gdG8ga2ljayBvZmYgdGhlIGFuaW1hdGlvbiBjbGlwXG4gKiAgIGFuaW1hdGlvbk1vZHVsZS5wbGF5KCdjbGlwTmFtZScpO1xuICogfSk7XG4gKi9cbmV4cG9ydCBjbGFzcyBBbmltYXRpb25Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcihhcHAsIGlzRGVmZXJyZWQsIHBhcmFtcyA9IHt9KSB7XG4gICAgdGhpcy5wYXJhbXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHNwZWVkOiAxXG4gICAgfSwgcGFyYW1zKTtcbiAgICB0aGlzLmNsb2NrID0gbmV3IENsb2NrKCk7XG5cbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICB0aGlzLmlzRGVmZXJyZWQgPSBpc0RlZmVycmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcGxheVxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFBsYXlzIHRoZSBnaXZlbiBjbGlwIG5hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsaXBOYW1lIC0gdGhlIGNsaXAgdG8gcGxheVxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOm1vZHVsZXMvbWVzaC5BbmltYXRpb25Nb2R1bGVcbiAgICovXG4gIHBsYXkoY2xpcE5hbWUpIHtcbiAgICBjb25zdCBjbGlwID0gQW5pbWF0aW9uQ2xpcC5maW5kQnlOYW1lKHRoaXMuY2xpcHMsIGNsaXBOYW1lKTtcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLm1peGVyLmNsaXBBY3Rpb24oY2xpcCk7XG5cbiAgICBhY3Rpb24ucGxheSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdXBkYXRlXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gVXBkYXRlIHRoZSBtaXhlciAoYmVpbmcgY2FsbGVkIG9uIGZyYW1lIGFuaW1hdGlvbiBsb29wKVxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOm1vZHVsZXMvbWVzaC5BbmltYXRpb25Nb2R1bGVcbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5taXhlcikgdGhpcy5taXhlci51cGRhdGUodGhpcy5jbG9jay5nZXREZWx0YSgpICogdGhpcy5wYXJhbXMuc3BlZWQpO1xuICB9XG5cbiAgaW50ZWdyYXRlKHNlbGYpIHtcbiAgICBzZWxmLmxvb3AgPSBuZXcgTG9vcCgoKSA9PiB7XG4gICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFzZWxmLmlzRGVmZXJyZWQpIHNlbGYubG9vcC5zdGFydChzZWxmLmFwcCk7XG4gIH1cblxuICBtYW5hZ2VyKG1hbmFnZXIpIHtcbiAgICBtYW5hZ2VyLmRlZmluZSgnYW5pbWF0aW9uJyk7XG4gIH1cblxuICBicmlkZ2UgPSB7XG4gICAgbWVzaChtZXNoLCBzZWxmKSB7XG4gICAgICBtZXNoLmdlb21ldHJ5LnNrZWxldG9uID0gbWVzaC5za2VsZXRvbjtcblxuICAgICAgc2VsZi5taXhlciA9IG5ldyBBbmltYXRpb25NaXhlcihtZXNoLmdlb21ldHJ5KTtcbiAgICAgIHNlbGYuY2xpcHMgPSBtZXNoLmdlb21ldHJ5LmFuaW1hdGlvbnM7XG5cbiAgICAgIHJldHVybiBtZXNoO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgbW9kdWxlcy9tZXNoICovXG5leHBvcnQgKiBmcm9tICcuL0R5bmFtaWNHZW9tZXRyeU1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL1RleHR1cmVNb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9BbmltYXRpb25Nb2R1bGUnO1xuIiwiLyoqXG4gKiBAY2xhc3MgRGVmaW5lTW9kdWxlXG4gKiBAY2F0ZWdvcnkgbW9kdWxlc1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm1vZHVsZXNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPiBDcmVhdGluZyBhIERlZmluZU1vZHVsZSB3aXRoIFBlcnNwZWN0aXZlQ2FtZXJhIGFzIGNhbWVyYSBtb2R1bGUgYW5kIHBhc3NpbmcgaXQgdG8gQXBwJ3MgbW9kdWxlczwvY2FwdGlvbj5cbiAqIG5ldyBBcHAoW1xuICogICAvLyAuLi5cbiAqICAgbmV3IERlZmluZU1vZHVsZSgnY2FtZXJhJywgbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKCkpXG4gKiBdKTtcbiAqL1xuZXhwb3J0IGNsYXNzIERlZmluZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGEpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBtYW5hZ2VyKG1hbmFnZXIpIHtcbiAgICBtYW5hZ2VyLnNldCh0aGlzLm5hbWUsIHRoaXMuZGF0YSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIG1vZHVsZXMgKi9cblxuZXhwb3J0ICogZnJvbSAnLi9hcHAvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNoL2luZGV4JztcblxuLy8gbW9kdWxlc1xuZXhwb3J0ICogZnJvbSAnLi9EZWZpbmVNb2R1bGUnO1xuIiwiaW1wb3J0IHtJbXBvcnRlcn0gZnJvbSAnLi9jb21wb25lbnRzL21lc2hlcy9JbXBvcnRlcic7XG5pbXBvcnQge1BlcnNwZWN0aXZlQ2FtZXJhfSBmcm9tICcuL2NvbXBvbmVudHMvY2FtZXJhcy9QZXJzcGVjdGl2ZUNhbWVyYSc7XG5cbmV4cG9ydCBjbGFzcyBNb2RlbCBleHRlbmRzIEltcG9ydGVyIHtcbiAgY29uc3RydWN0b3IocGFyYW1zLCAuLi5hZGRpdGlvbmFsKSB7XG4gICAgY29uc29sZS53YXJuKCdNb2RlbCBpcyBkZXByZWNhdGVkLiBVc2UgSW1wb3J0ZXIgaW5zdGVhZC4nKTtcblxuICAgIGlmIChwYXJhbXMuZ2VvbWV0cnkpIHtcbiAgICAgIHBhcmFtcy51cmwgPSBwYXJhbXMuZ2VvbWV0cnkucGF0aDtcbiAgICAgIHBhcmFtcy5sb2FkZXIgPSBwYXJhbXMuZ2VvbWV0cnkubG9hZGVyO1xuICAgIH1cblxuICAgIHN1cGVyKHBhcmFtcywgLi4uYWRkaXRpb25hbCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbWVyYU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgY29uc29sZS53YXJuKCdDYW1lcmFNb2R1bGUgaXMgZGVwcmVjYXRlZC4gVXNlIERlZmluZU1vZHVsZSBpbnN0ZWFkLicpO1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKHBhcmFtcyk7XG4gIH1cblxuICBpbnRlZ3JhdGUoc2VsZikge1xuICAgIHRoaXMuYWRkKHNlbGYuY2FtZXJhKTtcbiAgfVxuXG4gIG1hbmFnZXIobWFuYWdlcikge1xuICAgIG1hbmFnZXIuc2V0KCdjYW1lcmEnLCB0aGlzLmNhbWVyYSk7XG4gIH1cbn1cbiIsIi8qKlxuICogTmFtZXNwYWNlIGNvbnRhaW5pbmcgYWxsIGNsYXNzZXMgZnJvbSBhbGwgbW9kdWxlcy4gVXNlZCBhcyBnbG9iYWwgaW4gVU1EIHBhdHRlcm4uXG4gKiBAbmFtZXNwYWNlIFdIU1xuICogQGV4YW1wbGUgPGNhcHRpb24+VGhlIHVzZSBvZiBXSFMgbmFtZXNwYWNlLjwvY2FwdGlvbj5cbiAqIG5ldyBXSFMuQXBwKCkgLy8gY29yZVxuICogbmV3IFdIUy5QZXJzcGVjdGl2ZUNhbWVyYSgpIC8vIGNvbXBvbmVudHNcbiAqIG5ldyBXSFMuUmVzaXplTW9kdWxlKCkgLy8gbW9kdWxlc1xuICogV0hTLmV4dGVuZCgpIC8vIHV0aWxzXG4gKi9cblxuXG5leHBvcnQgKiBmcm9tICcuL2NvcmUvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2xpZ2h0cy9pbmRleCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY2FtZXJhcy9pbmRleCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvbWVzaGVzL2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2R1bGVzL2luZGV4JztcblxuLy8gREVQUkVDQVRJT05cbmV4cG9ydCAqIGZyb20gJy4vZGVwcmVjYXRpb24nO1xuIl0sIm5hbWVzIjpbImV4dGVuZCIsIm9iamVjdCIsImV4dGVuc2lvbnMiLCJleHRlbnNpb24iLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwicHJvcCIsInVuZGVmaW5lZCIsInRvU3RyaW5nIiwidXVpZCIsIkFycmF5IiwiaXNBcnJheSIsInNsaWNlIiwiaW5zdHJ1Y3QiLCJhcnJheSIsImluc3RBcnJheSIsInRlbXBPYmplY3QiLCJpIiwibWF4IiwibGVuZ3RoIiwiZ3VpZGUiLCJ0cmFuc2Zvcm1EYXRhIiwiaW5zdHJ1Y3Rpb25zIiwia2V5IiwidG9BcnJheSIsImluc3RydWN0aW9uIiwidGVtcEFycmF5IiwiQ29tcG9zaXRpb25FcnJvciIsImNsYXNzSW5zdGFuY2UiLCJtZXNzYWdlIiwiY29tcG9uZW50Iiwic3RhY2tBcnJheSIsInN0YWNrIiwic3BsaXQiLCJzcGxpY2UiLCJqb2luIiwicHJvY2VzcyIsImNvbnNvbGUiLCJlcnJvciIsIm5hbWUiLCJFcnJvciIsIkRlcGVuZGVuY3lFcnJvciIsImFjdGl2ZU1vZHVsZSIsImRlcGVuZGVuY3lNb2R1bGUiLCJNYW5hZ2VyRXJyb3IiLCJ3YXJuRGVwcyIsIlJFVklTSU9OIiwiZXJyIiwiTW9kdWxlU3lzdGVtIiwic291cmNlIiwibW9kdWxlcyIsImFwcGx5TW9kdWxlIiwiYXBwbHlCcmlkZ2UiLCJvbkNvcHkiLCJicmlkZ2VNYXAiLCJtb2R1bGUiLCJicmlkZ2UiLCJhcHBseSIsInB1c2giLCJtYW5hZ2VyIiwiYWN0aXZlIiwiaW50ZWdyYXRlIiwiYmluZCIsImRpc3Bvc2VNb2R1bGUiLCJpbmRleE9mIiwiZGlzcG9zZSIsIkV2ZW50cyIsIlN5bWJvbCIsIm9iamVjdFByb3RvIiwiaGFzT3duUHJvcGVydHkiLCJzeW1Ub1N0cmluZ1RhZyIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwicm9vdCIsInBvbnlmaWxsIiwiJCRvYnNlcnZhYmxlIiwiTW9kdWxlTWFuYWdlciIsImhhbmRsZXIiLCJjdXJyZW50TW9kdWxlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInN0YXRlIiwiYWN0aW9uIiwiZGF0YSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJCb29sZWFuIiwiZGVwc01hcCIsInN1YnNjcmliZSIsImNoYW5nZWRLZXkiLCJjYWxsYmFjayIsIndhcm4iLCJzZXQiLCJtb2R1bGVFeGVjdXRvciIsInVzZSIsIkNvbXBvbmVudCIsInBhcmFtcyIsImRlZmF1bHRzIiwiX3dhaXQiLCJjaGlsZHJlbiIsImludGVncmF0ZU1vZHVsZXMiLCJwcm9taXNlIiwiUHJvbWlzZSIsImFsbCIsImZ1bmMiLCJpc0RlZmZlcmVkIiwid2FpdCIsInRoZW4iLCJjb25zdHJ1Y3RvciIsImNvcHkiLCJjdXN0b21pemUiLCJuYXRpdmUiLCJjbG9uZSIsInBhcmVudCIsInJlc29sdmUiLCJyZWplY3QiLCJkZWZlciIsImFkZFByb21pc2UiLCJvbkFkZCIsInJlc29sdmVyIiwiYWRkIiwicmVtb3ZlIiwiX21hbmFnZXIiLCJfbmF0aXZlIiwibWVzaCIsImF0dHJpYnV0ZXMiLCJtYXBwZXJzIiwidGFyZ2V0IiwibWFwcGVyIiwiayIsIm1hcCIsImF0dHJpYnV0ZSIsImRlZmluZVByb3BlcnR5IiwicHJvdG90eXBlIiwiZ2V0dGVyIiwic2V0dGVyIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsInZhbHVlIiwibWlycm9yIiwiTWVzaENvbXBvbmVudCIsImdlb20iLCJNZXNoIiwibWF0ZXJpYWwiLCJnZW9tZXRyeSIsImN1c3RvbSIsImJ1aWxkIiwid3JhcCIsInBvc2l0aW9uIiwicm90YXRpb24iLCJzY2FsZSIsInNoYWRvdyIsIngiLCJ5IiwieiIsImNhc3RTaGFkb3ciLCJjYXN0IiwicmVjZWl2ZVNoYWRvdyIsInJlY2VpdmUiLCJvbldyYXAiLCJxdWF0ZXJuaW9uIiwiZGVzdCIsIkxpZ2h0Q29tcG9uZW50IiwibWFwU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmlhcyIsInJhZGl1cyIsInNoYWRvd0NhbWVyYSIsImNhbWVyYSIsIm5lYXIiLCJmYXIiLCJmb3YiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJDYW1lcmFDb21wb25lbnQiLCJzeXN0ZW0iLCJ3aW5kb3ciLCJnbG9iYWwiLCJwZXJmb3JtYW5jZSIsInByZXNlbnQiLCJBcHAiLCJsb2ciLCJ2ZXJzaW9uIiwic2ltdWxhdGUiLCJ1cGRhdGVFbmFibGVkIiwibG9vcHMiLCJyZXF1ZXN0QW5pbUZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsImxsIiwiZSIsImVuYWJsZWQiLCJleGVjdXRlIiwiY2xvY2siLCJsb29wIiwiaW5kZXgiLCJnZXQiLCJMb29wIiwidXNlQ2xvY2siLCJDbG9jayIsIndvcmxkIiwiYWRkTG9vcCIsInN0YXJ0Iiwic3RvcCIsInJlbW92ZUxvb3AiLCJBbWJpZW50TGlnaHQiLCJsaWdodCIsIkFtYmllbnRMaWdodE5hdGl2ZSIsImNvbG9yIiwiaW50ZW5zaXR5IiwiRGlyZWN0aW9uYWxMaWdodCIsIndyYXBTaGFkb3ciLCJEaXJlY3Rpb25hbExpZ2h0TmF0aXZlIiwiSGVtaXNwaGVyZUxpZ2h0IiwiSGVtaXNwaGVyZUxpZ2h0TmF0aXZlIiwic2t5Q29sb3IiLCJncm91bmRDb2xvciIsIlBvaW50TGlnaHQiLCJQb2ludExpZ2h0TmF0aXZlIiwiZGlzdGFuY2UiLCJkZWNheSIsIlNwb3RMaWdodCIsIlNwb3RMaWdodE5hdGl2ZSIsImFuZ2xlIiwiZXhwb25lbnQiLCJNYXRoIiwiUEkiLCJBcmVhTGlnaHQiLCJSZWN0QXJlYUxpZ2h0TmF0aXZlIiwiQ3ViZUNhbWVyYSIsIkN1YmVDYW1lcmFOYXRpdmUiLCJjdWJlUmVzb2x1dGlvbiIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYU5hdGl2ZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmFOYXRpdmUiLCJhc3BlY3QiLCJCb3giLCJidWlsZEdlb21ldHJ5IiwiYnVmZmVyIiwiQm94QnVmZmVyR2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsImRlcHRoIiwid2lkdGhTZWdtZW50cyIsImhlaWdodFNlZ21lbnRzIiwiZGVwdGhTZWdtZW50cyIsIkNpcmNsZSIsIkNpcmNsZUJ1ZmZlckdlb21ldHJ5IiwiQ2lyY2xlR2VvbWV0cnkiLCJzZWdtZW50cyIsInRoZXRhU3RhcnQiLCJ0aGV0YUxlbmd0aCIsIkNvbmUiLCJDb25lQnVmZmVyR2VvbWV0cnkiLCJDb25lR2VvbWV0cnkiLCJyYWRpdXNTZWdtZW50cyIsIm9wZW5FbmRlZCIsIkN5bGluZGVyIiwiQ3lsaW5kZXJCdWZmZXJHZW9tZXRyeSIsIkN5bGluZGVyR2VvbWV0cnkiLCJyYWRpdXNUb3AiLCJyYWRpdXNCb3R0b20iLCJEb2RlY2FoZWRyb24iLCJEb2RlY2FoZWRyb25CdWZmZXJHZW9tZXRyeSIsIkRvZGVjYWhlZHJvbkdlb21ldHJ5IiwiZGV0YWlsIiwiRXh0cnVkZSIsIkV4dHJ1ZGVHZW9tZXRyeSIsInNoYXBlcyIsIm9wdGlvbnMiLCJCdWZmZXJHZW9tZXRyeSIsImZyb21HZW9tZXRyeSIsIkljb3NhaGVkcm9uIiwiSWNvc2FoZWRyb25CdWZmZXJHZW9tZXRyeSIsIkljb3NhaGVkcm9uR2VvbWV0cnkiLCJMYXRoZSIsIkxhdGhlQnVmZmVyR2VvbWV0cnkiLCJMYXRoZUdlb21ldHJ5IiwicG9pbnRzIiwiTGluZSIsIkxpbmVOYXRpdmUiLCJHZW9tZXRyeSIsInBwIiwiY3VydmUiLCJnZXRQb2ludHMiLCJ2ZXJ0cyIsIkZsb2F0MzJBcnJheSIsImkzIiwiYWRkQXR0cmlidXRlIiwiQnVmZmVyQXR0cmlidXRlIiwidmVydGljZXMiLCJMaW5lQ3VydmUzIiwiVmVjdG9yMyIsIkltcG9ydGVyIiwiZmlsdGVyIiwicHJvY2Vzc0ZpbHRlciIsImZvckVhY2giLCJlbCIsInRleHR1cmVQYXRoIiwibGFvZGVyIiwic2V0VGV4dHVyZVBhdGgiLCJsb2FkZXIiLCJsb2FkIiwidXJsIiwib25Mb2FkIiwicGFyc2VyIiwidXNlQ3VzdG9tTWF0ZXJpYWwiLCJtYXQiLCJvblByb2dyZXNzIiwib25FcnJvciIsIkpTT05Mb2FkZXIiLCJtYXRlcmlhbHMiLCJPY3RhaGVkcm9uIiwiT2N0YWhlZHJvbkJ1ZmZlckdlb21ldHJ5IiwiT2N0YWhlZHJvbkdlb21ldHJ5IiwiUGFyYW1ldHJpYyIsIlBhcmFtZXRyaWNCdWZmZXJHZW9tZXRyeSIsIlBhcmFtZXRyaWNHZW9tZXRyeSIsInNsaWNlcyIsInN0YWNrcyIsInUiLCJ2IiwiUGxhbmUiLCJQbGFuZUJ1ZmZlckdlb21ldHJ5IiwiUGxhbmVHZW9tZXRyeSIsIndTZWdtZW50cyIsImhTZWdtZW50cyIsInZlcnRpY2VzT2ZDdWJlIiwiaW5kaWNlc09mRmFjZXMiLCJQb2x5aGVkcm9uIiwiUG9seWhlZHJvbkJ1ZmZlckdlb21ldHJ5IiwiUG9seWhlZHJvbkdlb21ldHJ5IiwiUmluZyIsIlJpbmdCdWZmZXJHZW9tZXRyeSIsIlJpbmdHZW9tZXRyeSIsImlubmVyUmFkaXVzIiwib3V0ZXJSYWRpdXMiLCJ0aGV0YVNlZ21lbnRzIiwicGhpU2VnbWVudHMiLCJTaGFwZSIsIlNoYXBlQnVmZmVyR2VvbWV0cnkiLCJTaGFwZUdlb21ldHJ5IiwiU3BoZXJlIiwiU3BoZXJlQnVmZmVyR2VvbWV0cnkiLCJTcGhlcmVHZW9tZXRyeSIsIlRldHJhaGVkcm9uIiwiVGV0cmFoZWRyb25CdWZmZXJHZW9tZXRyeSIsIlRldHJhaGVkcm9uR2VvbWV0cnkiLCJUZXh0IiwicGFyYW1ldGVycyIsImZvbnQiLCJUZXh0R2VvbWV0cnkiLCJ0ZXh0IiwiRm9udExvYWRlciIsIkZvbnQiLCJUb3J1cyIsIlRvcnVzR2VvbWV0cnkiLCJ0dWJlIiwicmFkaWFsU2VnbWVudHMiLCJ0dWJ1bGFyU2VnbWVudHMiLCJhcmMiLCJUb3J1c2tub3QiLCJHQ29uc3RydWN0IiwiVG9ydXNLbm90QnVmZmVyR2VvbWV0cnkiLCJUb3J1c0tub3RHZW9tZXRyeSIsInAiLCJxIiwiVHViZSIsIlR1YmVCdWZmZXJHZW9tZXRyeSIsIlR1YmVHZW9tZXRyeSIsInBhdGgiLCJjbG9zZWQiLCJHcm91cCIsIm9iamVjdHMiLCJvYmoiLCJhZGRUbyIsIk9iamVjdDNEIiwiRWxlbWVudE1vZHVsZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiYm9keSIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJzZWxmIiwiYXBwZW5kQ2hpbGQiLCJSZW5kZXJpbmdNb2R1bGUiLCJpc1NoYWRvdyIsImFzc2lnbiIsIlZlY3RvcjIiLCJkZXZpY2VQaXhlbFJhdGlvIiwiYmdDb2xvciIsImJnT3BhY2l0eSIsInJlbmRlcmVyIiwicGl4ZWxSYXRpbyIsInJlc29sdXRpb24iLCJXZWJHTFJlbmRlcmVyIiwiZWZmZWN0cyIsImFwcGx5QWRkaXRpb25hbCIsInNldENsZWFyQ29sb3IiLCJzZXRQaXhlbFJhdGlvIiwic2V0U2l6ZSIsIk51bWJlciIsInRvRml4ZWQiLCJpc0FwcGxpZWQiLCJhZGRpdGlvbmFsIiwic2NlbmUiLCJyZW5kZXJMb29wIiwicmVuZGVyIiwiYXR0YWNoVG9DYW52YXMiLCJlZmZlY3QiLCJjYiIsInNpemUiLCJnZXRTaXplIiwiYXBwIiwiY2FudmFzIiwiZG9tRWxlbWVudCIsImRlZmluZSIsImludGVncmF0ZVJlbmRlcmVyIiwidXBkYXRlIiwiZm9yY2VDb250ZXh0TG9zcyIsInNoYWRvd01hcCIsIlNjZW5lTW9kdWxlIiwid2lsbFNjZW5lQmVSZXBsYWNlZCIsIlNjZW5lIiwic2V0U2NlbmUiLCJSZXNpemVNb2R1bGUiLCJjYWxsYmFja3MiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwicmVuZGVyaW5nIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJnZXRDb250YWluZXIiLCJnZXRSZXNvbHV0aW9uIiwiYXV0byIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0cmlnZ2VyIiwiYWRkQXV0b3Jlc2l6ZSIsImZyYWdtZW50IiwidmVydGV4IiwiU2hhZGVyTWF0ZXJpYWwiLCJVbmlmb3JtIiwiQ29sb3IiLCJXZWJHTFJlbmRlclRhcmdldCIsIkxpbmVhckZpbHRlciIsIlJHQkFGb3JtYXQiLCJSR0JGb3JtYXQiLCJEZXB0aFRleHR1cmUiLCJEZXB0aFN0ZW5jaWxGb3JtYXQiLCJVbnNpZ25lZEludDI0OFR5cGUiLCJwb2x5ZmlsbCIsIm1ldGhvZCIsInNob3dXYXJuIiwiUG9zdFByb2Nlc3Nvck1vZHVsZSIsImRlYnVnIiwiY3VycmVudFBhc3MiLCJjb21wb3NlciIsIkVmZmVjdENvbXBvc2VyIiwiZ2V0RGVsdGEiLCJyZXBsYWNlUmVuZGVyZXIiLCJwYXNzIiwiUmVuZGVyUGFzcyIsImFkZFBhc3MiLCJ0ZXh0dXJlSUQiLCJ1bmlmb3JtcyIsIlNoYWRlclBhc3MiLCJwYXNzZXMiLCJib29sIiwicmVuZGVyVG9TY3JlZW4iLCJFdmVudHNQYXRjaE1vZHVsZSIsIm9yaWdpbk9iamVjdCIsImRlc3RPYmplY3QiLCJldmVudHMiLCJldmVudCIsImVtaXQiLCJwYXRjaEV2ZW50cyIsIlZpcnR1YWxNb3VzZU1vZHVsZSIsImdsb2JhbE1vdmVtZW50IiwibW91c2UiLCJyYXljYXN0ZXIiLCJSYXljYXN0ZXIiLCJwcm9qZWN0aW9uUGxhbmUiLCJjdXN0b21YIiwiY3VzdG9tWSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwiY2xpZW50WSIsIm5vcm1hbCIsImdldFdvcmxkRGlyZWN0aW9uIiwic2V0RnJvbUNhbWVyYSIsInJlcXVpcmUiLCJvbiIsImV2IiwiZ2xvYmFsWCIsImdsb2JhbFkiLCJwb2ludGVyTG9ja0VsZW1lbnQiLCJtb3ZlbWVudFgiLCJtb3ZlbWVudFkiLCJpc0hvdmVyZWQiLCJob3ZlcnMiLCJpbnRlcnNlY3RPYmplY3QiLCJwbGFuZSIsInJheSIsImludGVyc2VjdFBsYW5lIiwiaW50ZXJzZWN0aW9uIiwiQ29udHJvbHNNb2R1bGUiLCJjb250cm9scyIsImMiLCJ1cGRhdGVMb29wIiwiRm9nTW9kdWxlIiwidHlwZSIsImZvZyIsIkZvZ0V4cDIiLCJkZW5zaXR5IiwiRm9nIiwiaXNFcXVhbERlZmF1bHQiLCJhIiwiYiIsImVxdWFscyIsIlN0YXRlTW9kdWxlIiwiaXNFcXVhbCIsImVxdWFsQ2hlY2siLCJhY3Rpb25HZW5lcmF0ZSIsImNvbmZpZ3VyYXRpb24iLCJjdXJyZW50Q29uZmlnIiwicHJldkNvbmZpZyIsImNvbmZpZyIsImRlZmF1bHQiLCJyZXBsYWNlUmVkdWNlciIsImNvbmZpZ3MiLCJ1cGRhdGVzIiwiY29uZmlnTmFtZSIsInRydWVWYWwiLCJmYWxzZVZhbCIsIlRocmVlT3JiaXRDb250cm9scyIsImV2ZW50SGFuZGxlciIsIm1pbkRpc3RhbmNlIiwibWF4RGlzdGFuY2UiLCJJbmZpbml0eSIsIm1pblpvb20iLCJtYXhab29tIiwibWluUG9sYXJBbmdsZSIsIm1heFBvbGFyQW5nbGUiLCJtaW5BemltdXRoQW5nbGUiLCJtYXhBemltdXRoQW5nbGUiLCJlbmFibGVEYW1waW5nIiwiZGFtcGluZ0ZhY3RvciIsImVuYWJsZVpvb20iLCJ6b29tU3BlZWQiLCJlbmFibGVSb3RhdGUiLCJyb3RhdGVTcGVlZCIsImVuYWJsZVBhbiIsImtleVBhblNwZWVkIiwiYXV0b1JvdGF0ZSIsImF1dG9Sb3RhdGVTcGVlZCIsImVuYWJsZUtleXMiLCJrZXlzIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJCT1RUT00iLCJtb3VzZUJ1dHRvbnMiLCJPUkJJVCIsIk1PVVNFIiwiWk9PTSIsIk1JRERMRSIsIlBBTiIsInRhcmdldDAiLCJwb3NpdGlvbjAiLCJ6b29tMCIsInpvb20iLCJnZXRQb2xhckFuZ2xlIiwic3BoZXJpY2FsIiwicGhpIiwiZ2V0QXppbXV0aGFsQW5nbGUiLCJ0aGV0YSIsInJlc2V0IiwiZGlzcGF0Y2hFdmVudCIsImNoYW5nZUV2ZW50IiwiU1RBVEUiLCJOT05FIiwib2Zmc2V0IiwicXVhdCIsIlF1YXRlcm5pb24iLCJzZXRGcm9tVW5pdFZlY3RvcnMiLCJ1cCIsInF1YXRJbnZlcnNlIiwiaW52ZXJzZSIsImxhc3RQb3NpdGlvbiIsImxhc3RRdWF0ZXJuaW9uIiwic3ViIiwiYXBwbHlRdWF0ZXJuaW9uIiwic2V0RnJvbVZlY3RvcjMiLCJyb3RhdGVMZWZ0IiwiZ2V0QXV0b1JvdGF0aW9uQW5nbGUiLCJzcGhlcmljYWxEZWx0YSIsIm1pbiIsIm1ha2VTYWZlIiwicGFuT2Zmc2V0Iiwic2V0RnJvbVNwaGVyaWNhbCIsImxvb2tBdCIsInpvb21DaGFuZ2VkIiwiZGlzdGFuY2VUb1NxdWFyZWQiLCJFUFMiLCJkb3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25Db250ZXh0TWVudSIsIm9uTW91c2VEb3duIiwib25Nb3VzZVdoZWVsIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsIm9uVG91Y2hNb3ZlIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJvbktleURvd24iLCJzdGFydEV2ZW50IiwiZW5kRXZlbnQiLCJST1RBVEUiLCJET0xMWSIsIlRPVUNIX1JPVEFURSIsIlRPVUNIX0RPTExZIiwiVE9VQ0hfUEFOIiwiU3BoZXJpY2FsIiwicm90YXRlU3RhcnQiLCJyb3RhdGVFbmQiLCJyb3RhdGVEZWx0YSIsInBhblN0YXJ0IiwicGFuRW5kIiwicGFuRGVsdGEiLCJkb2xseVN0YXJ0IiwiZG9sbHlFbmQiLCJkb2xseURlbHRhIiwiZ2V0Wm9vbVNjYWxlIiwicG93Iiwicm90YXRlVXAiLCJwYW5MZWZ0Iiwib2JqZWN0TWF0cml4Iiwic2V0RnJvbU1hdHJpeENvbHVtbiIsIm11bHRpcGx5U2NhbGFyIiwicGFuVXAiLCJwYW4iLCJkZWx0YVgiLCJkZWx0YVkiLCJ0YXJnZXREaXN0YW5jZSIsInRhbiIsImNsaWVudEhlaWdodCIsIm1hdHJpeCIsImNsaWVudFdpZHRoIiwiZG9sbHlJbiIsImRvbGx5U2NhbGUiLCJkb2xseU91dCIsImhhbmRsZU1vdXNlRG93blJvdGF0ZSIsImhhbmRsZU1vdXNlRG93bkRvbGx5IiwiaGFuZGxlTW91c2VEb3duUGFuIiwiaGFuZGxlTW91c2VNb3ZlUm90YXRlIiwic3ViVmVjdG9ycyIsImhhbmRsZU1vdXNlTW92ZURvbGx5IiwiaGFuZGxlTW91c2VNb3ZlUGFuIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZU1vdXNlV2hlZWwiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsImhhbmRsZVRvdWNoU3RhcnRSb3RhdGUiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImhhbmRsZVRvdWNoU3RhcnREb2xseSIsImR4IiwiZHkiLCJzcXJ0IiwiaGFuZGxlVG91Y2hTdGFydFBhbiIsImhhbmRsZVRvdWNoTW92ZVJvdGF0ZSIsImhhbmRsZVRvdWNoTW92ZURvbGx5IiwiaGFuZGxlVG91Y2hNb3ZlUGFuIiwiaGFuZGxlVG91Y2hFbmQiLCJwcmV2ZW50RGVmYXVsdCIsImJ1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsIkV2ZW50RGlzcGF0Y2hlciIsIk9yYml0Q29udHJvbHNNb2R1bGUiLCJmb2xsb3ciLCJ1cGRhdGVQcm9jZXNzb3IiLCJzZXRDb250cm9scyIsInNldFVwZGF0ZSIsIkR5bmFtaWNHZW9tZXRyeU1vZHVsZSIsImdfIiwidXBkYXRlUGFyYW1zIiwiVGV4dHVyZUxvYWRlciIsIlRleHR1cmVNb2R1bGUiLCJ0ZXh0dXJlcyIsInRleHR1cmUiLCJyZXBlYXQiLCJSZXBlYXRXcmFwcGluZyIsIm1hcHBpbmciLCJVVk1hcHBpbmciLCJmaXgiLCJ0ZXgiLCJ3cmFwUyIsIndyYXBUIiwibWFnRmlsdGVyIiwiTmVhcmVzdEZpbHRlciIsIm1pbkZpbHRlciIsIkxpbmVhck1pcE1hcExpbmVhckZpbHRlciIsIkFuaW1hdGlvbk1vZHVsZSIsImlzRGVmZXJyZWQiLCJza2VsZXRvbiIsIm1peGVyIiwiQW5pbWF0aW9uTWl4ZXIiLCJjbGlwcyIsImFuaW1hdGlvbnMiLCJjbGlwTmFtZSIsImNsaXAiLCJBbmltYXRpb25DbGlwIiwiZmluZEJ5TmFtZSIsImNsaXBBY3Rpb24iLCJwbGF5Iiwic3BlZWQiLCJEZWZpbmVNb2R1bGUiLCJNb2RlbCIsIkNhbWVyYU1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxNQUFELEVBQTJCO29DQUFmQyxVQUFlO2NBQUE7Ozs7Ozs7Ozt5QkFDdkJBLFVBQXhCLDhIQUFvQztVQUF6QkMsU0FBeUI7Ozs7O1VBSTlCLENBQUNBLFNBQUwsRUFDRSxTQUxnQzs7Ozs7Ozs4QkFPZkMsT0FBT0MsbUJBQVAs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LElBQUksRUFBRSxHQUFHLENBQUM7SUFDbkMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUM7SUFDdEQ7Ozs7RUFJRCxNQUFNLENBQUMsR0FBRyxHQUFHLFNBQVMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUMvQixJQUFJLEtBQUssTUFBTSxHQUFHLEVBQUUsRUFBQztJQUNyQixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSztRQUM1QixDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDN0MsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztJQUNsRDs7OztFQUlELE1BQU0sQ0FBQyxJQUFJLEdBQUcsU0FBUyxJQUFJLENBQUM7SUFDMUIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0RixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUM7R0FDcEUsQ0FBQztDQUNIOzs7Ozs7Ozs7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
