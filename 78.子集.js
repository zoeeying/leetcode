/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // 方法一：枚举法
  // 比如nums中有三个元素，那么可以用长度为3的二进制字符串
  // 来表示对应位置的nums中的元素是否在子集中，0表示不在，1表示存在
  // const result = []
  // for (let i = 0, len = nums.length; i <= 2 ** len - 1; i++) {
  //   const binary = i.toString(2).padStart(len, '0')
  //   const temp = []
  //   for (let j = 0; j < binary.length; j++) {
  //     if (binary[j] === '1') {
  //       temp.push(nums[j])
  //     }
  //   }
  //   result.push(temp)
  // }
  // return result
  // ----------------------------------------------------------------
  // 方法二：方法一的改进写法，用位运算符
  // const result = []
  // // 1左移len位就是1后面跟len个零，即2**len
  // for (let i = 0, len = nums.length; i < 1 << len; i++) {
  //   const temp = []
  //   for (let j = 0; j < len; j++) {
  //     // i是十进制，下面的判断表示将i转成二进制之后，从右往左数第j+1位是不是1
  //     if (i & (1 << j)) {
  //       temp.push(nums[j])
  //     }
  //   }
  //   result.push(temp)
  // }
  // return result
  // ------------------------------------------------------------------
  // 方法三：回溯算法
  // const res = []
  // const dfs = (index, list) => {
  //   if (index == nums.length) {
  //     // 指针越界
  //     res.push(list.slice()) // 加入解集
  //     return // 结束当前的递归
  //   }
  //   list.push(nums[index]) // 选择这个元素
  //   dfs(index + 1, list) // 往下递归
  //   list.pop() // 递归结束，撤销选择
  //   dfs(index + 1, list) // 不选这个元素，往下递归
  // }
  // dfs(0, [])
  // return res

  // --------------------------------------------------------
  // 方法三：回溯的第一种解法
  const res = []
  const dfs = (index, list) => {
    res.push(list.slice())
    for (let i = index; i < nums.length; i++) {
      list.push(nums[i])
      dfs(i + 1, list)
      list.pop()
    }
  }
  dfs(0, [])
  return res
}
subsets([1, 2, 3])
// @lc code=end
