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

module.exports = checkPerm;
