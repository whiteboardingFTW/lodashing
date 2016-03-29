const lodash = require('lodash');

var _ = {};

_.fill = function(arr, value, start, end) {
  start = start || 0;
  end = end || arr.length;
  for (var i = start; i < end; i++) {
    arr[i] = value;
  }
  return arr;
}

var array = [1, 2, 3];

_.fill(array, 'a');
console.log(array);  // modifies the original
// → ['a', 'a', 'a']

console.log('OG', lodash.fill(Array(3), 2));
console.log('WB', _.fill(Array(3), 2));
// → [2, 2, 2]

console.log('OG', lodash.fill([4, 6, 8, 10], '*', 1, 3));
console.log('WB', _.fill([4, 6, 8, 10], '*', 1, 3));
// → [4, '*', '*', 10]
