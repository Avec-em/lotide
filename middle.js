function eqArrays(arr1,arr2){
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
} return true
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`👍🏼👍🏼👍🏼 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`☠️ ☠️ ☠️  Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const middle = function(arr) {
  let middleArr = [];
  if (arr.length <= 2) {
    return middleArr;
  } else if 
    (arr.length % 2 !== 0) {
      let indexMid = Math.floor(arr.length / 2);
      return [arr[indexMid]]
    } else {
        let indexMid = Math.floor(arr.length / 2);
        middleArr.push(arr[indexMid], arr[indexMid - 1]);
        return middleArr;
      }
    }
assertArraysEqual((middle([1, 2, 3])), [2])


