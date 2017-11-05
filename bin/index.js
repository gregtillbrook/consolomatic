'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = undefined;

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NATIVE_CONSOLE = global.console;

var consoleColorPresets = {
  trace: _colors2.default.dim,
  log: _colors2.default.dim,
  info: _colors2.default.white,
  warn: _colors2.default.yellow,
  error: _colors2.default.red
};

function makeColorWrappedConsoleMethod() {
  var consoleColorPresetToUse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'info';
  var consoleMethodName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var presetColor = consoleColorPresets[consoleColorPresetToUse];
    if (presetColor) {
      //use util.format just as native version https://github.com/nodejs/node/blob/af11867b4180b033320e4f0c7d52c2bcfb957852/lib/console.js
      //we join the formatted into with style strings so console method doesnt insert unwanted spaces
      NATIVE_CONSOLE[consoleMethodName]([presetColor, _util2.default.format.apply(null, args), _colors2.default.reset].join(''));
    } else {
      NATIVE_CONSOLE[consoleMethodName];
    }
  };
}

var consolomatic = Object.create(NATIVE_CONSOLE, {

  log: { value: makeColorWrappedConsoleMethod('log', 'log') },
  info: { value: makeColorWrappedConsoleMethod('info') },
  warn: { value: makeColorWrappedConsoleMethod('warn', 'warn') },
  error: { value: makeColorWrappedConsoleMethod('error', 'error') },

  setColor: {
    value: function value(methodName, newStyle) {
      var oldStyle = consoleColorPresets[methodName];
      consoleColorPresets[methodName] = newStyle;
      return oldStyle;
    }
  },

  addConsoleMethod: {
    value: function value(methodName, color) {
      this.setColor(methodName, color);
      this[methodName] = makeColorWrappedConsoleMethod(methodName);
    }
  },

  overrideGlobal: {
    value: function value() {
      Object.defineProperty(global, 'console', {
        value: consolomatic,
        writable: true
      });
    }
  }

});

exports.colors = _colors2.default;
exports.default = consolomatic;