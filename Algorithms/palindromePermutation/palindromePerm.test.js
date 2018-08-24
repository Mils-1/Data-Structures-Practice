const isPalindromePerm = require('./palindromePerm');

test('It returns true if the input string is a permutation of a palindrome.', () => {
  //racecar
  expect(isPalindromePerm('rraacce')).toBe(true);
  //kayak
  expect(isPalindromePerm('ykaka')).toBe(true);
});

test('It returns false if the input string is not a permutation of a palindrome.', () => {
  expect(isPalindromePerm('keysersoze')).toBe(false);
  expect(isPalindromePerm('wepkwasd')).toBe(false);
});
