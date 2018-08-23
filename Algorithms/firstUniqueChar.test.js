const firstUniqueChar = require('./firstUniqueChar');


test('It returns the first unique character', () => {
  expect(firstUniqueChar('foobar')).toBe('f');
  expect(firstUniqueChar('aabbccdef')).toBe('d');
});

test('It returns false if there are no unique characters', () => {
  expect(firstUniqueChar('okokok')).toBe(false);
});
