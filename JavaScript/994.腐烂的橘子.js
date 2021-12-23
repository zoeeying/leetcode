/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

// 返回每次感染的橘子的个数
const infectOthers = (grid, i, j, q) => {
  let infect = 0
  if (i > 0 && grid[i - 1][j] === 1) {
    grid[i - 1][j]++
    infect++
    q.push([i - 1, j])
  }
  if (j > 0 && grid[i][j - 1] === 1) {
    grid[i][j - 1]++
    infect++
    q.push([i, j - 1])
  }
  if (i < grid.length - 1 && grid[i + 1][j] === 1) {
    grid[i + 1][j]++
    infect++
    q.push([i + 1, j])
  }
  if (j < grid[0].length - 1 && grid[i][j + 1] === 1) {
    grid[i][j + 1]++
    infect++
    q.push([i, j + 1])
  }
  return infect
}

var orangesRotting = function (grid) {
  // 别人的思路，使用广搜+队列
  // 自己尝试了深搜，不可以
  let q = [] // 用来放烂橘子的坐标
  let minutes = 0
  let fresh = 0 // 新鲜橘子的个数
  const rows = grid.length
  const cols = grid[0].length
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        fresh++
      }
      if (grid[i][j] === 2) {
        q.push([i, j])
      }
    }
  }

  // 广度优先搜索
  while (q.length && fresh) {
    let newQ = [] // 这里注意要更新队列，因为上一分钟的烂橘子已经无需关心了
    while (q.length) {
      let bad = q.shift()
      fresh -= infectOthers(grid, bad[0], bad[1], newQ)
    }
    minutes++
    q = newQ
  }
  if (fresh !== 0) {
    return -1
  }
  return minutes
}

// @lc code=end
