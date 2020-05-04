const assertEqual = require('../assertEqual');
const tail = require('../tail')

assertEqual(['hello', 'emily', 'hi'].length, 3); // original array should still have 3 elements!
assertEqual(['hello', 'emily', 'bye', 'see-ya'].length, 4);