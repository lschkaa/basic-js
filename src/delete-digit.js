const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let str = num.toString();
  let char = 9;
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) <= char) {
      char = str[i]
    } else {
      break;
    }
  }
  return Number(str.replace(char,''));
}

module.exports = {
  deleteDigit
};