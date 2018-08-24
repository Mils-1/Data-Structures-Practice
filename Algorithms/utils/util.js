const createHTOfStr = (str) => {
  return str.split('')
    .reduce((acc, elem) => {
      acc[elem] ? acc[elem]++ : acc[elem] = 1;
      return acc;
    }, {})
}

module.exports = {
  createHTOfStr
}
