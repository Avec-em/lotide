const tail = require('../tail');
const assert = require('chai').assert;

// assertEqual(tail(['hello', 'emily', 'hi']).length, 2); // original array should still have 3 elements!
// assertEqual(tail(['hello', 'emily', 'bye', 'see-ya']).length, 3);


describe('tail', () => {
  it ('returns ["emily", "hi"]', () => {
    assert.deepEqual(tail(['hello', 'emily', 'hi']), ['emily', 'hi'])
  });
  it ('returns ["emily", "bye", "see-ya"]', () => {
    assert.deepEqual(tail(['hello', 'emily', 'bye', 'see-ya']), ["emily", "bye", "see-ya"])
  })
});
