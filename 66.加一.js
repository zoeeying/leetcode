/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 返回末尾9组成的数组/空数组
var ninesArr = function (digits) {
  let arr = []
  for (let i = digits.length - 1;i >= 0;i--) {
    if (digits[i] !== 9) {
      break
    }
    arr.push(9)
  }
  return arr
}

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 数组中最后一个元素加1，返回新数组
var lastPlusOne = function (arr) {
  return arr.map((item, index) => {
    if (index === arr.length - 1) {
      return item + 1
    }
    return item
  })
}

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let arr = JSON.parse(JSON.stringify(digits))
  let nines = ninesArr(digits)
  if (!nines.length) {
    return lastPlusOne(arr)
  }
  arr.length -= nines.length
  arr = !arr.length ? [1] : lastPlusOne(arr)
  for (let i = 0;i < nines.length;i++) {
    arr.push(0)
  }
  return arr
}
// @lc code=end

