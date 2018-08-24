const stringCompression = require('./stringCompression');

test('It returns a converted string as long as the converted string is shorter than the original', () => {
  expect(stringCompression('aabcccccaaa')).toBe('a2b1c5a3');
});

test('It returns the original string if it is shorter than the converted string', () => {
  expect(stringCompression('ab')).toBe('ab');
});
