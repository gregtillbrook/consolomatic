import colors from './colors';
import util from 'util';

const NATIVE_CONSOLE = global.console;

const consoleColorPresets = {
  trace: colors.dim,
  log: colors.dim,
  info: colors.white,
  warn: colors.yellow,
  error: colors.red,
};


function makeColorWrappedConsoleMethod(consoleColorPresetToUse = 'info', consoleMethodName = 'info'){
  return (...args) => {
    const presetColor = consoleColorPresets[consoleColorPresetToUse];
    if(presetColor){
      //use util.format just as native version https://github.com/nodejs/node/blob/af11867b4180b033320e4f0c7d52c2bcfb957852/lib/console.js
      //we Array.join the formatted params with 'colors' so console method doesnt insert unwanted spaces
      NATIVE_CONSOLE[consoleMethodName]([presetColor, util.format.apply(null, args),  colors.reset].join(''));
    }else{
      NATIVE_CONSOLE[consoleMethodName];
    }
  };
}

const consolomatic = Object.create(NATIVE_CONSOLE, {

  log: { value: makeColorWrappedConsoleMethod('log', 'log')},
  info: { value: makeColorWrappedConsoleMethod('info')},
  warn: { value: makeColorWrappedConsoleMethod('warn', 'warn')},
  error: { value: makeColorWrappedConsoleMethod('error', 'error')},

  setColor: {
    value: function(methodName, newStyle){
      var oldStyle = consoleColorPresets[methodName];
      consoleColorPresets[methodName] = newStyle;
      return oldStyle;
    }
  },

  addConsoleMethod: {
    value: function(methodName, color){
      this.setColor(methodName, color);
      this[methodName] = makeColorWrappedConsoleMethod(methodName);
    }
  },

  overrideGlobal: {
    value:()=>{
      Object.defineProperty(global, 'console', {
        value: consolomatic,
        writable: true,
      });
    }
  }

});

export {colors};
export default consolomatic;