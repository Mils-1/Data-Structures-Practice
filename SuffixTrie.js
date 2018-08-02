class SuffixTrie {
  constructor (str) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(str);
  }
  populateSuffixTrieFrom(str) {
    for (let i = 0; i < str.length; i++) {
      let node = this.root;
      for (let j = i; j < str.length; j++) {
        let char = str[j];
        if (!node[char]) {
          node[char] = {};
        }
        node = node[char];
      }
      node[this.endSymbol] = true;
    }
  }
  contains(str) {
    let node = this.root;
    for (const char of str) {
      if (!node[char]) return false;
      node = node[char];
    }
    return this.endSymbol in node;
    //return node[this.endSymbol] ? true : false;
  }
}
