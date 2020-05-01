const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏼👍🏼👍🏼 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️ ☠️ ☠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//Returns true if both objects have identical keys with identical values.
//Otherwise you get back a big fat false!


const eqObjects = function (obj1, obj2) {
  let objKey1 = Object.keys(obj1);
  let objKey2 = Object.keys(obj2);
  if (objKey1.length !== objKey2.length) {
    return false;
  } else {
    for (let i of objKey1) {
      if (Array.isArray(obj1[i]) && Array.isArray(obj2[i])) {
        if (eqArrays(obj1[i], obj2[i])) {
        } else {
          return false;
        }
      } else {
        if (obj1[i] !== obj2[i]) {
          return false;
        } else {
        }
      }
    }
    return true;
  }
};

//

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false