/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
// 在当前密码的基础上，向上拨动一次转盘
const plusOne = (cur, i) => {
  const arr = cur.split('')
  if (arr[i] === '9') {
    arr[i] = '0'
  } else {
    arr[i] = Number(arr[i]) + 1
  }
  return arr.join('')
}

// 在当前密码的基础上，向下拨动一次转盘
const minusOne = (cur, i) => {
  const arr = cur.split('')
  if (arr[i] === '0') {
    arr[i] = '9'
  } else {
    arr[i] -= 1
  }
  return arr.join('')
}
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const deads = new Set(deadends)
  const visited = new Set()
  const q = []
  let step = 0
  q.push('0000')
  visited.add('0000')
  while (q.length) {
    let levelSize = q.length
    for (let i = 0; i < levelSize; i++) {
      const cur = q.shift()
      if (deads.has(cur)) {
        continue
      }
      if (cur === target) {
        return step
      }
      // 将当前节点的周围节点且没有遍历过的，加入队列
      for (let j = 0; j < 4; j++) {
        const up = plusOne(cur, j)
        const down = minusOne(cur, j)
        if (!visited.has(up)) {
          q.push(up)
          visited.add(up)
        }
        if (!visited.has(down)) {
          q.push(down)
          visited.add(down)
        }
      }
    }
    step++
  }
  return -1
}
console.log(openLock(['0201', '0101', '0102', '1212', '2002'], '0202'))
// @lc code=end
