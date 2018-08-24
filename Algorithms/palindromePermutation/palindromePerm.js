/*
Given a string determine if it is a permutation of a palindrome
*/

const { createHTOfStr } = require('../utils/util');
const isPalindromePerm = (str) => {
  const hashTable = createHTOfStr(str);
  const values = Object.values(hashTable);
  let oddCount = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 !== 0) {
      if (!oddCount) {
        oddCount++;
      } else {
        return false;
      }
    }
  }
  return true;
}

module.exports = isPalindromePerm;

/*
//This solution isnt handling spaces because of the way the hash table is built

'racecar'
{
  r: 2,
  a: 2,
  c: 2,
  e: 1
}
all even counts, at most one odd count
*/

