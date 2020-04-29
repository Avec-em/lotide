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


const without = function (source, itemsToRemove) {
  let wordsWithout = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      wordsWithout.push(source[i]);
    }
  }
  return wordsWithout
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
