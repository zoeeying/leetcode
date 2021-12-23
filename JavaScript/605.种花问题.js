/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  // 自己的思路：遇到0，且前面后面都是0或者不存在，表示可以种一朵花
  // let num = 0
  // for (let i = 0; i < flowerbed.length; i++) {
  //   if (
  //     (flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined) &&
  //     flowerbed[i] === 0 &&
  //     (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)
  //   ) {
  //     num++
  //     i++
  //   }
  // }
  // return num >= n
  // -----------------------------------------------------------
  // 别人的思路：头尾都加一个0，然后遍历一遍数组，每三个0种一朵花，记录总共能种几朵
  flowerbed.push(0)
  flowerbed.unshift(0)
  let num = 0 // 连续的0的个数
  let flowers = 0 // 花的个数
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      num++
    } else {
      num = 0
    }
    if (num === 3) {
      flowers++
      num = 1
    }
  }
  return flowers >= n
}
// @lc code=end
