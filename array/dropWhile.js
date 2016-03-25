const lodash = require('lodash');

var _ = {};

_.dropWhile = function(arr, pred) {
  var predFunc;

  switch (typeof pred) {
    case 'function':
      predFunc = pred;
      break;
    case 'object':
      predFunc = (Array.isArray(pred))
        ? lodash.matchesProperty(pred[0], pred[1])
        : lodash.matches(pred);
      break;
    case 'string':
      predFunc = lodash.property(pred);
      break;
    default:
      predFunc = lodash.identity;
  }

  var results = arr.slice(0);
  while (0 < results.length) {
    if (!predFunc(results[0])) {
      return results;
    }
    results.shift();
  }
  return results;
};

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

// predicate is a function
console.log('Function');
console.log('OG', lodash.dropWhile(users, function(o) { return !o.active; }));
console.log('WB', _.dropWhile(users, function(o) { return !o.active; }));
// → objects for ['pebbles']

// predicate is an object
console.log('\nObject');
console.log('OG', lodash.dropWhile(users, { 'user': 'barney', 'active': false }));
console.log('WB', _.dropWhile(users, { 'user': 'barney', 'active': false }));
// → objects for ['fred', 'pebbles']

// predicate is an array
console.log('\nArray');
console.log('OG', lodash.dropWhile(users, ['active', false]));
console.log('WB', _.dropWhile(users, ['active', false]));
// → objects for ['pebbles']

// predicate is a string
console.log('\nString');
console.log('OG', lodash.dropWhile(users, 'active'));
console.log('WB', _.dropWhile(users, 'active'));
// → objects for ['barney', 'fred', 'pebbles']

// predicate is undefined
console.log('\nUndefined');
console.log('OG', lodash.dropWhile(users));
console.log('WB', _.dropWhile(users));
// → []
