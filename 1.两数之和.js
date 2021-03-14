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
  // 方法1：双层循环，耗时比较长
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = nums.length - 1; j >= 0; j--) {
  //     if (nums[i] + nums[j] === target && i !== j) {
  //       return [i, j]
  //     }
  //   }
  // }
  // **************************************************************
  // 方法2：用空间换取时间，使用一层循环
  // 每遍历到一个元素就计算该元素与target之间的差值，然后到HashMap中寻找该差值
  // 如果没有找到，则将当前元素存入HashMap中，key是nums[i]，value是i
  // 如果找到，则返回两个元素在数组nums中的下标
  // const hash = {}
  // for (let i = 0; i < nums.length; i++) {
  //   if (hash[target - nums[i]] !== undefined) {
  //     return [hash[target - nums[i]], i]
  //   } else {
  //     hash[nums[i]] = i
  //   }
  // }
  // ****************************************************************
  // 方法3：跟方法2差不多
  // const result = {}
  // for (let i = 0; i < nums.length; i++) {
  //   if (result[nums[i]] !== undefined) {
  //     return [result[nums[i]], i]
  //   }
  //   result[target - nums[i]] = i
  // }
  // ****************************************************************
  // 题目变化一下：在nums中找出和为target的元素对，结果有且只有一个
  // 考虑对nums进行排序，然后使用左右指针
  // nums.sort((a, b) => a - b)
  // let l = 0,
  //   r = nums.length - 1
  // while (l < r) {
  //   const sum = nums[l] + nums[r]
  //   if (sum > target) {
  //     r--
  //   } else if (sum < target) {
  //     l++
  //   } else {
  //     return [nums[l], nums[r]]
  //   }
  // }
  // return []
  // 题目再变化一下：在nums中找出和为target的所有元素对，且不能重复
  nums.sort((a, b) => a - b)
  let l = 0,
    r = nums.length - 1
  let ans = []
  while (l < r) {
    // 记录左右指针最初对应的元素
    const left = nums[l]
    const right = nums[r]
    const sum = left + right
    if (sum > target) {
      // 优化一下，跳过所有重复的元素
      while (l < r && nums[r] === right) {
        r--
      }
    } else if (sum < target) {
      while (l < r && nums[l] === left) {
        l++
      }
    } else {
      ans.push([nums[l], nums[r]])
      // 如果左右指针只是移动一下，那么对于nums是[1, 1, 1, 2, 2, 3, 3]，肯定会出现重复的结果
      // 应该让左右指针跳过所有重复的元素
      while (l < r && nums[l] === left) {
        l++
      }
      while (l < r && nums[r] === right) {
        r--
      }
    }
  }
  return ans
}
console.log(twoSum([1, 1, 1, 2, 2, 3, 3], 4))
// @lc code=end
