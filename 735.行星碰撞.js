/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = []
  let ans = []
  for (let ast of asteroids) {
    if (ast > 0) {
      stack.push(ast)
    } else {
      while (stack.length && stack[stack.length - 1] < -ast) {
        stack.pop()
      }
      if (stack.length && stack[stack.length - 1] === -ast) {
        stack.pop()
      } else if (!stack.length) {
        ans.push(ast)
      }
    }
  }
  return [...ans, ...stack]
}
asteroidCollision([4, -2, -1, 6, -6, -4])
asteroidCollision([3, -5, 6, -7, 4, -4])
asteroidCollision([5, 10, -5])
asteroidCollision([10, 2, -5])
// @lc code=end
