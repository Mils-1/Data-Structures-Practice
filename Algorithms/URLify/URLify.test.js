const convertToUrl = require('./URLify');

test('It replaces all spaces in a string with %20', () => {
  expect(convertToUrl('Mr John Smith   ')).toBe('Mr%20John%20Smith');
});
