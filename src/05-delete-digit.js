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
function deleteDigit(n) {
  let max = 1;
  const arr = `${n}`.split('');
  let copy = arr.concat();

  for (let i = 0; i < arr.length - 1; i++) {
    copy.splice(i, 1);
    max = Math.max(max, +copy.join(''));
    copy = arr.concat();
  }

  return max;
}

module.exports = deleteDigit;
