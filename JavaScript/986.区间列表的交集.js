/*
 * @lc app=leetcode.cn id=986 lang=javascript
 *
 * [986] 区间列表的交集
 */

// @lc code=start
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  const arr = [...firstList]
  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    }
    return a[0] - b[0]
  })
  let end = arr[0][1]
  let ans = []
  for (let i = 1; i < arr.length; i++) {
    const a = arr[i]
    if (a[0] <= end) {
      ans.push([a[0], Math.min(end, a[1])])
    }
    end = a[1]
  }
  console.log(ans)

  return ans
}
intervalIntersection([
  [0, 2],
  [1, 4],
  [1, 6],
])
// @lc code=end
