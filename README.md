# Consolomatic
Console logging with colors, done as simply as it gets.

Consolomatic is an extension of the existing node global Console object to allow coloring of console messages. Unlike other console coloring modules you dont need to write your log/info/war/error calls any differently.


# Install

```sh
npm install --save-dev consolomatic
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

### customise message colors
```javascript
import console, {colours} from 'consolomatic';

//customize the color of console methods
console.setColor('warn', colors.Magenta);
console.warn('All warn messages are now magenta');

//Use colors inside template strings to color specific words or parts of messages
console.info(`A message with a ${colors.Green}green${colors.Reset} word`);
```


# API

### All existing console methods
All of the existing console methods (e.g. .count, .time) work as before. Also, the 'colorised' console methods will still format supplied parameters just like the native methods.

### setColor
```javascript
import console, {colours} from 'consolomatic';

//customize the color of console methods
console.setColor('warn', colors.Magenta);
console.warn('All warn messages are now magenta');
```

### addConsoleMethod
```javascript
import console, {colours} from 'consolomatic';
console.addConsoleMethod('green', colors.Green);
console.green('A completely green message');
```

### overrideGlobal
```javascript
import console from 'consolomatic';
console.overrideGlobal();
```
If you want colored console messages in the entire project but dont want to import consolomatic in every file, you can call overrideGlobal to override the global.console. Due to the that imports are evaluated you'll need to make this call from an imported 'setup' file see example in `./examples/example_global_override.js`


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
