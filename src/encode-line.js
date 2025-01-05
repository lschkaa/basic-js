const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let curent = '';
  let counter = 1;
  for (let i = 0; i < str.length+1; i++) {
    if (curent === str[i]) {
      counter++;
    } else {
      if (counter > 1) {
        result += counter;
      }
      result += curent;
      curent = str[i];
      counter = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};