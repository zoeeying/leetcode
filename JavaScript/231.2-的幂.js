/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	// 方法1
	// for (let i = Math.ceil(Math.sqrt(n)); i >= 0; i--) {
	// 	if (n / 2 ** i === 1) {
	// 		return true
	// 	}
	// }
	// return false

	// 方法2
	// return Number.isInteger(Math.log2(n))

	// 方法3
	while (n > 1) {
		n /= 2
	}
	if (n == 1) {
		return true
	} else {
		return false
	}
}
// @lc code=end
