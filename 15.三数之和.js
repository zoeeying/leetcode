/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start

// 方法1：瞎写的
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (nums) {
//   const result = []
//   const len = nums.length
//   if (len < 3) {
//     return result
//   }
//   for (let i = 0; i < nums.length; i++) {
//     let hash = {}
//     for (let j = 0; j < nums.length && i !== j; j++) {
//       // 找到两数之和等于0-nums[i]
//       const target = 0 - nums[i]
//       if (hash[nums[j]] !== undefined) {
//       }
//       hash[target - nums[j]] = nums[j]
//     }
//   }
//   return result
// }
// **************************************************
// 方法2：labuladong解法，套用两数之和的模板
// 对nums进行升序排序，遍历nums，对于nums[i]，在后面所有元素中找到两个元素，和为target-nums[i]
// 该题中，target为0
// const twoSum = function (nums, start, target) {
//   const ans = []
//   let l = start,
//     r = nums.length - 1
//   while (l < r) {
//     const left = nums[l]
//     const right = nums[r]
//     const sum = left + right
//     if (sum < target) {
//       while (l < r && left === nums[l]) {
//         l++
//       }
//     } else if (sum > target) {
//       while (l < r && right === nums[r]) {
//         r--
//       }
//     } else {
//       ans.push([nums[l], nums[r]])
//       while (l < r && left === nums[l]) {
//         l++
//       }
//       while (l < r && right === nums[r]) {
//         r--
//       }
//     }
//   }
//   return ans
// }
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// const threeSum = function (nums) {
//   nums.sort((a, b) => a - b)
//   let ans = []
//   const len = nums.length
//   for (let i = 0; i < len; i++) {
//     const twoSums = twoSum(nums, i + 1, 0 - nums[i])
//     for (let two of twoSums) {
//       two.unshift(nums[i])
//       ans.push(two)
//     }
//     // 第一个数字可能会重复，会导致重复的结果，所以需要跳过重复
//     while (i < len - 1 && nums[i] === nums[i + 1]) {
//       i++
//     }
//   }
//   return ans
// }
// threeSum([-1, 0, 1, 2, -1, -4])
// ********************************************************
// 方法3：简化labuladong的解法
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// const threeSum = function (nums) {
//   nums.sort((a, b) => a - b)
//   let ans = []
//   const len = nums.length
//   for (let i = 0; i < len; i++) {
//     // 如果当前数字大于0，则三数之和一定大于0，结束循环
//     if (nums[i] > 0) {
//       break
//     }
//     // 第一个元素要去掉重复的
//     if (i >= 1 && nums[i] === nums[i - 1]) {
//       continue
//     }
//     let l = i + 1,
//       r = len - 1
//     while (l < r) {
//       const sum = nums[l] + nums[r]
//       if (sum > 0 - nums[i]) {
//         r--
//       } else if (sum < 0 - nums[i]) {
//         l++
//       } else {
//         ans.push([nums[i], nums[l], nums[r]])
//         while (l < r && nums[l] === nums[l + 1]) {
//           l++
//         }
//         while (l < r && nums[r - 1] === nums[r]) {
//           r--
//         }
//         l++
//         r--
//       }
//     }
//   }
//   return ans
// }
// *************************************************
// 方法4：简化labuladong的解法，参考题解
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  let ans = []
  const len = nums.length
  for (let i = 0; i < len; i++) {
    // 如果当前数字大于0，则三数之和一定大于0，结束循环
    if (nums[i] > 0) {
      break
    }
    // 第一个元素要去掉重复的
    if (i >= 1 && nums[i] === nums[i - 1]) {
      continue
    }
    let l = i + 1,
      r = len - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum < 0) {
        l++
      } else if (sum > 0) {
        r--
      } else {
        ans.push([nums[i], nums[l], nums[r]])
        // 去除重复的元素
        while (l < r && nums[l] === nums[l + 1]) {
          l++
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--
        }
        l++
        r--
      }
    }
  }
  return ans
}

threeSum([-1, 0, 1, 2, -1, -4])
// @lc code=end
