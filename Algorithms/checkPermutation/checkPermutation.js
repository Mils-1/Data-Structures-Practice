/*
Check Permutation: Given two strings, write a method to decide if one is a permutation of the other
*/

const checkPerm = (str1, str2) => {
  str1 = str1
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  str2 = str2
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  return str1 === str2;
};

// const createHTOfStr = (str) => {
//   return str.split('')
//     .reduce((acc, elem) => {
//       acc[elem] ? acc[elem]++ : acc[elem] = 1;
//       return acc;
//     }, {})
// }
const { createHTOfStr } = require('../utils/util');

const checkPermV2 = (str1, str2) => {
  const obj1 = createHTOfStr(str1);
  const obj2 = createHTOfStr(str2);
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false
  }
  return true;
}

module.exports = checkPerm;
