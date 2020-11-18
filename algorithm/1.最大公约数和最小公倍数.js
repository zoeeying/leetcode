var maxDivisorAndMinMultiple = function (num1, num2) {
  // 最大公约数
  const maxDivisor = (a, b) => {
    let max = Math.max(a, b)
    let min = Math.min(a, b)
    let temp = 0
    while (max % min) {
      temp = max % min
      max = min
      min = temp
    }
    return min
  }
  // 最小公倍数
  return (num1 * num2) / maxDivisor(num1, num2)
}
