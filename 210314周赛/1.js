/**
 * 仅执行一次字符串交换能否使两个字符串相等
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) {
    return true
  }
  let i = 0,
    j = 0
  const hash = {}
  while (i < s1.length && j < s2.length) {
    if (s1[i] !== s2[j]) {
      hash[s1[i]] = s2[j]
    }
    i++
    j++
  }
  const tmp = Object.entries(hash)
  if (tmp.length === 2 && tmp[0][0] === tmp[1][1] && tmp[0][1] === tmp[1][0]) {
    return true
  }
  return false
}
console.log(areAlmostEqual('bank', 'kanb'))
