const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏼👍🏼👍🏼 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️ ☠️ ☠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let z = ""
  for (x = array[1]; x < array.length; x++) {
    z = array[x];
  }
  return z;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];

console.log(tail(words));
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!