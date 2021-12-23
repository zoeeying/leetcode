/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 方法1：找到target后，往target前后找左边界和右边界
  // const len = nums.length
  // let l = 0,
  //   r = len - 1
  // let start = -1,
  //   end = -1
  // while (l <= r) {
  //   const mid = Math.floor((r + l) / 2)
  //   if (nums[mid] > target) {
  //     r = mid - 1
  //   } else if (nums[mid] < target) {
  //     l = mid + 1
  //   } else {
  //     start = mid
  //     end = mid
  //     while (nums[start] === target && start >= 0) {
  //       start--
  //     }
  //     while (nums[end] === target && end <= len - 1) {
  //       end++
  //     }
  //     start++
  //     end--
  //     l++
  //     r--
  //   }
  // }
  // return [start, end]
  // ***************************************************
  // 方法2：labuladong解法
  // 找到左边界，搜索区间是闭区间
  const findLeftBoundary = (nums, target) => {
    let l = 0,
      r = nums.length - 1
    while (l <= r) {
      const mid = Math.floor(l + (r - l) / 2)
      if (nums[mid] < target) {
        l = mid + 1
      } else if (nums[mid] > target) {
        r = mid - 1
      } else {
        // 收缩右侧边界，锁定左侧边界
        r = mid - 1
      }
    }
    // 越界情况处理
    if (l >= nums.length || nums[l] !== target) {
      return -1
    }
    return l
  }
  // 找到左侧边界，搜索区间是左闭右开
  // 左侧边界有重要的意义，如果左侧边界是l，那么nums中小于target的元素有l个
  const findLeftBoundary2 = (nums, target) => {
    let l = 0,
      r = nums.length // 注意
    while (l < r) {
      // 注意
      const mid = Math.floor((l + r) / 2)
      if (nums[mid] < target) {
        l = mid + 1
      } else if (nums[mid] > target) {
        r = mid // 注意
      } else {
        r = mid // 注意，收缩右侧边界
      }
    }
    // target比nums中所有元素都大
    if (l === nums.length) {
      return -1
    }
    return nums[l] === target ? l : -1
  }
  // 找到右边界
  const findRightBoundary = (nums, target) => {
    let l = 0,
      r = nums.length - 1
    while (l <= r) {
      const mid = Math.floor(l + (r - l) / 2)
      if (nums[mid] < target) {
        l = mid + 1
      } else if (nums[mid] > target) {
        r = mid - 1
      } else {
        // 收缩左侧边界，锁定右侧边界
        l = mid + 1
      }
    }
    // 越界情况处理
    if (r < 0 || nums[r] !== target) {
      return -1
    }
    return r
  }
  // 找到右侧边界，搜索区间是左闭右开
  const findRightBoundary2 = (nums, target) => {
    let l = 0,
      r = nums.length // 注意
    // 注意
    while (l < r) {
      const mid = Math.floor((l + r) / 2)
      if (nums[mid] > target) {
        r = mid
      } else if (nums[mid] < target) {
        l = mid + 1
      } else {
        l = mid + 1 // 注意，收缩左侧边界
      }
    }
    if (l === 0) return -1
    return nums[l - 1] == target ? l - 1 : -1 // 返回l-1要注意
  }
  // return [findLeftBoundary2(nums, target), findRightBoundary2(nums, target)]
  return [findLeftBoundary(nums, target), findRightBoundary(nums, target)]
}
searchRange([5, 7, 7, 8, 8, 10], 0)
// @lc code=end
