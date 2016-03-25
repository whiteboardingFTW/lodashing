const lodash = require('lodash');

var _ = {};

_.chunk = function (arr, size) {
  if (typeof size === 'undefined') return arr;

  var results = [];
  for (var i = 0; i < arr.length; i += size) {
    results.push(arr.slice(i, i + size));
  }
  return results;
};

console.log(lodash.chunk(['a', 'b', 'c', 'd'], 2));
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));

console.log(lodash.chunk(['a', 'b', 'c', 'd'], 3));
console.log(_.chunk(['a', 'b', 'c', 'd'], 3));
