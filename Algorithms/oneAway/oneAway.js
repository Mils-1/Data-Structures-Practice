/* eslint-disable */
/*
Are two strings equal or 1 edit away?
pale, ple   => true
pales, pale => true
pale, bale  => true
pale, bake  => false
*/
const { createHTOfStr } = require('../utils/util');

const oneAway = (str1, str2) => {
  if (str1 === str2) return true;
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }
  const obj1 = createHTOfStr(str1);
  const obj2 = createHTOfStr(str2);
  let mulligan = false;
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      if (mulligan) {
        return false;
      } else {
        mulligan = true;
      }
    }
  }
  return true;
}

module.exports = oneAway;

/*
{
  p: 1
  a: 1
  l: 1
  e: 1
}
{
  p: 1
  l: 1
  e: 1
}
*/
