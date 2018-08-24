const checkPerm = require('./checkPermutation');

test('It returns true if two strings are permutations of each other.', () => {
  expect(checkPerm('abc', 'bca')).toBe(true);
  expect(checkPerm('keys', 'esyk')).toBe(true);
});

test('It returns false if two strings are not permutations of each other', () => {
  expect(checkPerm('hello', 'world')).toBe(false);
  expect(checkPerm('keyser', 'soze')).toBe(false);
});

test('It is case insensitive', () => {
  expect(checkPerm('keys', 'esyK')).toBe(true);
});
