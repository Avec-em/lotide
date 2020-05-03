function eqArrays(obj1,obj2){
  if (obj1.length === obj2.length) {
    for (let i = 0; i < obj1.length; i++) {
      if (obj1[i] !== obj2[i]) {
        return false;
      }
    }
  } else {
    return false;
} return true
};


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



// FUNCTION IMPLEMENTATION
const inspect = require('util').inspect;
const assertObjectsEqual = function(obj1, obj2) {
  if (eqObjects(obj1, obj2) === true) {
    console.log(`👍🏼👍🏼👍🏼 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`☠️ ☠️ ☠️  Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2) // => false


//console.log(`Example label: ${inspect(actual)}`);