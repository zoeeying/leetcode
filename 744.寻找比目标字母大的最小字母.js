/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  const len = letters.length

  for (let i = 0; i < len - 1; i++) {
    if (letters[i] <= target && target < letters[i + 1]) {
      return letters[i + 1]
    }
  }
  return letters[0]
}
console.log(nextGreatestLetter(['c', 'f', 'j'], 'k'))
// @lc code=end
