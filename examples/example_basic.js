/*
  Example code that illustrates typical usage. e.g.
    - import consolomatic into the module you want colored console messages
    - call console methods as documented in readme
*/
import console, {colors}  from 'consolomatic';

console.log('A log message');
console.info('An info message');
console.warn('A warning message');
console.error('An error message');

console.setColor('warn', colors.magenta);
console.warn('All warn messages are now magenta');

console.info(`A message with a ${colors.green}green${colors.reset} word`);