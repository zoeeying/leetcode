/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = 0,
    r = 0
  let tMap = {} // t中每个字符的个数
  for (let tt of t) {
    tMap[tt] = (tMap[tt] || 0) + 1
  }
  let winMap = {} // 滑动窗口中每个字符的个数
  let valid = 0 // 对于滑动窗口中的字符，比如c，如果c的个数与子字符串中c的个数相等，那么valid++
  let start = 0,
    len = Number.MAX_SAFE_INTEGER // 子路最小子串的起始位置和长度
  let minLen = Number.MAX_SAFE_INTEGER // 最小子串的长度
  for (; r < s.length; r++) {
    const c = s[r]
    if (tMap[c]) {
      // 遍历到的字符是T中的，更新winMap和valid
      winMap[c] = (winMap[c] || 0) + 1
      if (winMap[c] === tMap[c]) {
        valid++
      }
    }
    // 如果valid等于tMap中key的个数，那么滑动窗口中的字符是包含T中所有字符的
    // 这时候需要收缩滑动窗口，即左指针右移
    while (valid === Object.keys(tMap).length) {
      if (r - l + 1 < len) {
        start = l
        len = r - l + 1
      }
      minLen = Math.min(minLen, r - l + 1)

      const d = s[l]
      if (tMap[d]) {
        if (winMap[d] === tMap[d]) {
          valid--
        }
        winMap[d]--
      }
      l++
    }
  }
  // substr用于截取字符串，第一个参数是起始位置，第二个参数表示截取字符串的长度
  return len === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, len)
}
minWindow('ADOBECODEBANC', 'ABC')
// @lc code=end
