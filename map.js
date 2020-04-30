const words = ["ground", "control", "to", "major", "tom"];
const words2 = ['emily', 'loves', 'aaron']

// map function will take in two arguments an array and a callback function

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}


const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
//console.log(results1);

//testing with assertArraysEqual

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


assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(results2, [ 'e', 'l', 'a' ])