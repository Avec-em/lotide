const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏼👍🏼👍🏼 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️ ☠️ ☠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string){
  let newObj = {};
  let noSpace = string.replace(/\s/g, '')
  for (let letter of noSpace) {
    if (newObj.hasOwnProperty(letter)) {
        newObj[letter]++;
      } else {
        newObj[letter] = 1;
      }
    }
    return newObj;
  }
// take a string and count the letter and then put it in an object
console.log(countLetters("Lighthouse in the house"))

