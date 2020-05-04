const eqArrays = require('./eqArrays.js')
const assertArraysEqual = require('./assertArraysEqual.js')


const middle = function(arr) {
  let middleArr = [];
  if (arr.length <= 2) {
    return middleArr;
  } else if (arr.length % 2 !== 0) {
    let indexMid = Math.floor(arr.length / 2);
    return [arr[indexMid]]
  } else {
    let indexMid = Math.floor(arr.length / 2);
    middleArr.push(arr[indexMid -1] , arr[indexMid]);
    return middleArr;
  }
};

module.exports = middle;


// test 0-7 arrays for this function
// find a bug? add a test that proves there is a mistake
// 

// The middle.js module should export its middle function
// The test code should be separated into its own file (test/assertArraysEqualTest.js)
// The test code should require the middle and assertArraysEqual modules in order to run its test code