/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  // 自己的方法有问题，用例不能全部通过
  // const transfer = (num1, num2) => {
  //   // 1代表差值是正的，-1代表差值是负的
  //   return num1 >= num2 ? 1 : -1
  // }
  // const len = nums.length
  // if (len < 2) {
  //   return len
  // }
  // let temp = transfer(nums[len - 2], nums[len - 1])
  // for (let i = len - 2; i >= 0; i--) {
  //   if (transfer(nums[i - 1], nums[i]) === temp) {
  //     nums.splice(i - 1, 1)
  //   } else {
  //     temp = transfer(nums[i - 1], nums[i])
  //   }
  // }
  // return nums.length
  // ------------------------------
  // 参考别人的方法
  const len = nums.length
  if (len < 2) {
    return len
  }
  let prevDiff = nums[1] - nums[0]
  let result = prevDiff === 0 ? 1 : 2
  for (let i = 1; i < len; i++) {
    const diff = nums[i] - nums[i - 1]
    // 如果后面有相同的元素，result是不会+1的
    if ((diff > 0 && prevDiff <= 0) || (diff < 0 && prevDiff >= 0)) {
      result++
      prevDiff = diff
    }
  }
  return result
}
wiggleMaxLength([1, 1])
// @lc code=end
