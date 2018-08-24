const oneAway = require('./oneAway');

test('It returns true if the 2 input strings are equal or 1 edit away', () => {
  expect(oneAway('pale', 'ple')).toBe(true);
  expect(oneAway('pales', 'pale')).toBe(true);
  expect(oneAway('pale', 'bale')).toBe(true);
});

test('It returns false if the 2 input strings are more than 1 edit away.', () => {
  expect(oneAway('hello', 'helloop')).toBe(false);
  expect(oneAway('super', 'ssuperr')).toBe(false);
});
