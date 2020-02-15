/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */
// @lc code=start

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 6.     312211

// 需要找到连续的字符串
var createRepeatArr = function (str) {
  let arr = []
  while (str) {
    let temp = ''
    for (let i = 0; i < str.length; i++) {
      temp += str[i]
      if (str[i] !== str[i + 1]) {
        str = str.slice(i + 1)
        break
      }
    }
    arr.push(temp)
  }
  return arr
}


// 给定前一个字符串，得到后面的字符串
var createStr = function (str) {
  let result = ''
  const arr = createRepeatArr(str)
  for (let i = 0; i < arr.length; i++) {
    result += `${arr[i].length}` + `${arr[i][0]}`
  }
  return result
}

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let arr = ['1']
  for (let i = 0; i < n; i++) {
    arr.push(createStr(arr[i]))
  }
  return arr[n - 1]
}


// @lc code=end

