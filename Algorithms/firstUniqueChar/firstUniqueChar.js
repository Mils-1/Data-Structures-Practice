/*
Find the first unique character in a given string
input: foobar
output: f

input: aabbccdef
output: d

input: aabbcc
output: 'No Unique Character Found'
*/

const firstUniqueChar = (str) => {
  const obj = {}
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    obj[char] ? obj[char]++ : obj[char] = 1;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (obj[char] === 1) return char;
  }
  return false;
}

module.exports = firstUniqueChar;
