/**
 * Given an array of numbers, it checks whether it is sorted (in the ascending order). Returns true or false.
 */

const testArr = [13, 10, 12, 23, 6, 47, 25];
// const sortedArr = [6, 10, 12, 23, 25, 47];
// const descending = [3, 2, 1];

function isSorted(arr) {
    let _arr = [...arr];
    let sorted = (_arr.sort((a, b) => a - b));

    let i = 0;

    while (i < arr.length) {
        if (arr[i] !== sorted[i]) { return false };
        i++;
    }

    return true;
}

/* function isSorted(arr) {
    const sorted = arr;
    let greatest = arr[0];

    for (x of arr) {
        for (y of arr) {
            if (y > x) {
                sorted.push(sorted.shift());
            }
        }
    }

    // return sorted;
    return sorted;
} */

// console.log(isSorted(testArr));
// console.log(isSorted(sortedArr));
// console.log(isSorted(descending));
// console.log(isSorted([92, 12, 0, -50]))
// console.log(isSorted([0, 0, 3, 0]))

describe('isSorted', function() {
    const assert = require('chai').assert;

    it('should consider an empty array sorted', function() {
        assert.isTrue(isSorted([]));
    });

    it('should consider a trivial array sorted', function() {
        assert.isTrue(isSorted([1]));
        assert.isTrue(isSorted([53]));
    });

    it('should accept equal values next to each other', function() {
        assert.isTrue(isSorted([3, 3]));
        assert.isTrue(isSorted([72, 72, 72, 72]));
    });

    it('should detect good order', function() {
        assert.isTrue(isSorted([2, 4, 12]));
        assert.isTrue(isSorted([-1, 0, 1, 90, 122]))
    });

    it('should not accept descending order', function() {
        assert.isFalse(isSorted([3, 2, 1]));
        assert.isFalse(isSorted([92, 12, 0, -50]));
    });

    it('should not choose chaos over order', function() {
        assert.isFalse(isSorted([1, 5, 3]));
        assert.isFalse(isSorted([7, 8, 9, 2]));
        assert.isFalse(isSorted([0, 0, 3, 0]));
    });
});