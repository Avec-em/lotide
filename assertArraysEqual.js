const eqArrays = require('./eqArrays.js')

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`👍🏼👍🏼👍🏼 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`☠️ ☠️ ☠️  Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;





// The assertArraysEqual.js module should export its assertArraysEqual function
// The assertArraysEqual.js file should require the eqArrays function instead of it being copied in there
// The test code should be separated into its own file (test/assertArraysEqualTest.js)
// The test code should run successfully