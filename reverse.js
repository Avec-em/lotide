/**
 * forEachInReverse(inputArray, callback)
 * Calls the supplied callback with each item in the input array starting from the last index
 */
const forEachInReverse = function(inputArr, callback) {
  for (let i = inputArr.length - 1; i >= 0; i--) {
    callback(inputArr[i]);
  }
};


 // Test case 1
const input1 = [1, 2, 3];
const logNum = (num) => console.log(num)
forEachInReverse(input1, logNum); // [3, 2, 1]

// Test case 2
forEachInReverse(['yo', 'hey', 'wazaaa'], function(str) {
  console.log(str.length)
}); // [6, 3, 2]
