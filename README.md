# Consolomatic
Console logging with colors, done as simply as it gets.

Consolomatic is an extension of the existing node global Console object to allow coloring of console messages. Unlike other console coloring modules you dont need to write your log/info/war/error calls any differently.

[![NPM Version][npm-image]][npm-url]
[![Linux CI Build][travis-image]][travis-url]
[![Windows CI Build][appveyor-image]][appveyor-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

# Install

```sh
npm install consolomatic
```


# Usage

```javascript
//import in any file you want colored messages
import console from 'consolomatic'

//use like normal
console.log('A log message');
console.info('An info message');
console.warn('A warning message');
console.error('An error message');
```
![Screenshot showing output for console methods](/docs/basic_messages.png?raw=true)

### customise message colors
```javascript
import console, {colours} from 'consolomatic';

//customize the color of console methods
console.setColor('warn', colors.magenta);
console.warn('All warn messages are now magenta');

//Use colors inside template strings to color specific words or parts of messages
console.info(`A message with a ${colors.green}green${colors.reset} word`);
```
![Screenshot showing output for custom messages](/docs/custom_messages.png?raw=true)

### if not using ES6 and module imports
```javascript
var console = require('consolomatic').default;
var colors = require('consolomatic').colors;
//the rest is the same
console.log('A log message');
```

# API

### All existing console methods
All of the existing console methods (e.g. .count, .time) work as before. Also, the 'colorised' console methods will still format supplied parameters just like the native methods.

### setColor
```javascript
import console, {colours} from 'consolomatic';

//customize the color of console methods
console.setColor('warn', colors.magenta);
console.warn('All warn messages are now magenta');
```

### addConsoleMethod
```javascript
import console, {colours} from 'consolomatic';
console.addConsoleMethod('green', colors.green);
console.green('A completely green message');
```

### overrideGlobal
```javascript
import console from 'consolomatic';
console.overrideGlobal();
```
If you want colored console messages in the entire project but dont want to import consolomatic in every file, you can call overrideGlobal to override the global.console. Due to the way that imports are evaluated (imported module is evaluated before its parent module) you'll need to make this call from an imported 'setup' file see example in [examples/example_global_override.js](examples/example_global_override.js)


# Colors
### text colors
 - black
 - red
 - green
 - yellow
 - blue
 - magenta
 - cyan
 - white

### background colors
 - bgBlack
 - bgRed
 - bgGreen
 - bgYellow
 - bgBlue
 - bgMagenta
 - bgCyan
 - bgWhite

### other styles
support for these varies by platform
 - reset
 - bright
 - dim
 - underscore
 - blink
 - reverse
 - hidden




[npm-image]: https://img.shields.io/npm/v/consolomatic.svg
[npm-url]: https://npmjs.org/package/consolomatic
[travis-image]: https://img.shields.io/travis/gregtillbrook/consolomatic/master.svg?label=Linux%20CI%20Build
[travis-url]: https://travis-ci.org/gregtillbrook/consolomatic
[appveyor-image]: https://img.shields.io/appveyor/ci/gregtillbrook/consolomatic/master.svg?label=Windows%20CI%20Build
[appveyor-url]: https://ci.appveyor.com/project/gregtillbrook/consolomatic
[snyk-image]: https://snyk.io/test/github/gregtillbrook/consolomatic/badge.svg
[snyk-url]: https://snyk.io/test/github/gregtillbrook/consolomatic