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


const letterPositions = function(sentence) {
  const results = {};
 // let noSpace = sentence.replace(/\s/g, '')
  for (let i = 0; i < sentence.length; i++){
    if (sentence[i] !== " ") {
    if (results.hasOwnProperty(sentence[i])) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i]
    }
  }
}
return results;
}
console.log(letterPositions("hello"))


