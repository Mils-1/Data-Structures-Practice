//'aabcccccaaa' => 'a2b1c5a3'
//return whatever is shorter

const stringCompression = str => {
  str = str.toLowerCase();
  let count = 1;
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      newStr += str[i] + count;
      count = 1;
    }
  }
  return str.length < newStr.length ? str : newStr;
};

module.exports = stringCompression;
