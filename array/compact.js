const lodash = require('lodash');

var _ = {};

_.compact = function(arr) {
  return arr.filter(function(el) {
    return Boolean(el);
  });
};

console.log(lodash.compact([0, 1, false, 2, '', 3]));
console.log(_.compact([0, 1, false, 2, '', 3]));
