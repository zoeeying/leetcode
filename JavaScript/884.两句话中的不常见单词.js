/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start

/**
 * @param {string[]} arr1
 * @param {string[]} arr2
 * @return {string[]}
 */
// arr1中的元素如果在arr2中有，就删掉，返回新数组，不改变原数组
var deleteRepeat = function (arr1, arr2) {
  let arr = arr1.map(item => item)
  for (let i = arr.length - 1;i >= 0;i--) {
    if (arr2.includes(arr[i]) || arr1.filter(item2 => item2 === arr[i]).length > 1) {
      arr.splice(i, 1)
    }
  }
  return arr
}

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
  const arrA = A.split(' ')
  const arrB = B.split(' ')
  return deleteRepeat(arrA, arrB).concat(deleteRepeat(arrB, arrA))
}
// @lc code=end

