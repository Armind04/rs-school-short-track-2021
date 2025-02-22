/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  const res = [];
  let i = 0;

  for (let k = 0; k < arr.length; k++) {
    if (arr[k] !== -1) {
      newArr.push(arr[k]);
    }
  }

  const sortArr = newArr.sort((a, b) => a - b);

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === -1) {
      res.push(-1);
    } else {
      res.push(sortArr[i]);
      i++;
    }
  }

  return res;
}

module.exports = sortByHeight;
