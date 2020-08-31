/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start

let hash1 = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}
let hash2 = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0
  // for (let i = s.length - 1; i >= 0; i--) {
  //   let twoLetterNumber = hash2[s.slice(i - 1, i + 1)]
  //   if (twoLetterNumber) {
  //     result += twoLetterNumber
  //     s = s.slice(0, s.length - 2)
  //   }
  //   let oneLetterNumber = hash1[s[i]]
  //   if (oneLetterNumber) {
  //     result += oneLetterNumber
  //     s = s.slice(0, s.length - 1)
  //   }
  // }
  let i = 0
  for (; i < s.length; i++) {
    let twoLetterNumber = hash2[s.slice(i, i + 2)]
    if (twoLetterNumber) {
      result += twoLetterNumber
      i += 1
      continue
    }
    let oneLetterNumber = hash1[s[i]]
    if (oneLetterNumber) {
      result += oneLetterNumber
    }
  }
  return result
}
romanToInt('LVIII')
// @lc code=end
