const convertToUrl = (str) => {
  str = str.trim();
  const arr = str.split('');
  arr.forEach((char, index) => {
    if (char === ' ') {
      arr[index] = '%20'
    }
  });
  return arr.join('');
}

module.exports = convertToUrl;
