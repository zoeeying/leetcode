/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 方法一：双层循环，耗时比较长
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = nums.length - 1; j >= 0; j--) {
  //     if (nums[i] + nums[j] === target && i !== j) {
  //       return [i, j]
  //     }
  //   }
  // }
  // ------------------------------------------------------------
  // 方法二：用空间换取时间，使用一层循环
  // 每遍历到一个元素就计算该元素与target之间的差值，然后到HashMap中寻找该差值
  // 如果没有找到，则将当前元素存入HashMap中，key是nums[i]，value是i
  // 如果找到，则返回两个元素在数组nums中的下标
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const differ = target - nums[i]
    if (map.has(differ)) {
      return [map.get(differ), i]
    } else {
      map.set(nums[i], i)
    }
  }
  // ------------------------------------------------------------
  // 方法三：方法二比较直观，方法三是对方法二的改写
  // 用HashMap存储遍历到的当前元素，而不target与当前元素的差值
  // const map = new Map()
  // for (let i = 0; i < nums.length; i++) {
  //   if (map.has(nums[i])) {
  //     return [map.get(nums[i]), i]
  //   } else {
  //     map.set(target - nums[i], i)
  //   }
  // }
}
// @lc code=end
