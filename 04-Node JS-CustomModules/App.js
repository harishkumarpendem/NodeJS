const util = require('./util/utility');

//cal a function
util.greet('harish');

let message = 'hello';
let revString = util.convertString(message);
console.log(`${message} -> ${revString}`);