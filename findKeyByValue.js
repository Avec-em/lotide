const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏼👍🏼👍🏼 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️ ☠️ ☠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value){
 // let foundKey = "";
  for (let i of Object.keys(object)) {
    if (object[i] === value) {
      return i
    }
  }
  return object.i
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi")
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy")