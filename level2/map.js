/**
 * Given an array and an item transformation function, processes each item in the array using the given function and creates a new array from the resultant items.
 * For example, if 'array' is an array of numbers, then 'func' is expected to take a single parameter that is a number, and returns a new item. The new item will not always have the same type as the original item.
 * Returns the new array. The original array should remain unchanged.
 *
 * Note: functions like this (functions that take other functions as parameters) are sometimes referred to as higher order functions. This concept originates in functional programming.
 */
function map() {}

describe('map', function() {
  const assert = require('chai').assert;

  it('should leave an empty array alone', function() {
    // (x) => x * 2 is equivalent to function(x) { return x * 2; }
    assert.deepEqual([], map([], (x) => x * 2));
    assert.deepEqual([], map([], (x) => x));
  });

  it('should process each item in the array', function() {
    assert.deepEqual([ 1, 4, 9 ], map([ 1, 2, 3 ], (x) => x * x));
    assert.deepEqual([ 2, 3, 4 ], map([ 1, 2, 3 ], (x) => x + 1));
    assert.deepEqual([ "x+", "y+", "z+" ], map([ "x", "y", "z" ], (x) => x + "+"));
    assert.deepEqual([ 10, 20, 30 ], map([ 10, 20, 30 ], (x) => x));
  });

  it('does not need to preserve the original item type', function() {
    assert.deepEqual([ true, false, true ], map([ 2, -4, 1 ], (x) => x >= 0));
    assert.deepEqual([ "1", "2", "3" ], map([ 1, 2, 3 ], (x) => x.toString()));
  });

  it('should leave the original array alone', function() {
    let array1 = [ 1, 2, 3 ];
    assert.deepEqual([ 10, 20, 30 ], map(array1, (x) => x * 10));
    assert.deepEqual([ 1, 2, 3 ], array1);
  });
});