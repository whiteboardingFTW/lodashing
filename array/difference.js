const lodash = require('lodash');

var _ = {};

_.difference = function(arr1, arr2) {
  var res = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) == -1) {
      res.push(arr1[i]);
    }
  }
  return res;
};

console.log('OG', lodash.difference([3, 2, 1], [4, 2]));
console.log('WB', _.difference([3, 2, 1], [4, 2]));

_.differenceBy = function(arr1, arr2, iter) {
  if (typeof iter === 'undefined') return _.difference(arr1, arr2);

  if (typeof iter === 'function') {
    var res = [];
    for (var i = 0; i < arr1.length; i++) {
      if (arr2.map(iter).indexOf(iter(arr1[i])) === -1) {
        res.push(arr1[i]);
      }
    }
    return res;
  }

  if (typeof iter === 'string') {
    var res = [];
    for (var i = 0; i < arr1.length; i++) {
      if (arr2.map(ele => ele[iter]).indexOf(arr1[i][iter]) === -1) {
        res.push(arr1[i]);
      }
    }
    return res;
  }

}

// if iteratee is undefined
console.log('OG', lodash.differenceBy([3, 2, 1], [4, 2]));
console.log('WB', _.differenceBy([3, 2, 1], [4, 2]));
// if iteratee is a function
console.log('OG', lodash.differenceBy([3.1, 2.2, 1.1], [4.3, 2.5], Math.floor));
console.log('WB', _.differenceBy([3.1, 2.2, 1.1], [4.3, 2.5], Math.floor));
// if iteratee is a string
console.log('OG', lodash.differenceBy([{'x': 2}, {'x': 1}], [{'x': 1}], 'x'));
console.log('WB', _.differenceBy([{'x': 2}, {'x': 1}], [{'x': 1}], 'x'));
