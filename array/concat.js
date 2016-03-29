const lodash = require('lodash');

var _ = {};
_.concat = function() {
  var arr = arguments[0].slice();
  for (var i = 1; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      arr.push(arguments[i]);
    }
    else if (typeof arguments[i] === 'object') {  // object or array
      for (var key in arguments[i]) {
        arr.push(arguments[i][key]);
      }
    }
    else {
      console.log('invalid argument type', i);
    }
  }
  return arr;
};

var array = [1];

console.log('OG', lodash.concat(array, 2, [3], [[4]]));  // → [1, 2, 3, [4]]
console.log('OG', array);  // → [1]

console.log('WB', _.concat(array, 2, [3], [[4]]));
console.log('WB', array);  // make sure the original array is not modified
