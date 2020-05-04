const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏼👍🏼👍🏼 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️ ☠️ ☠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let item of allItems) {
    if (itemsToCount[item] === true) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};

