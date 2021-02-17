const array = [2, 4, 1, 5, 7, 10, 32, 55, 2, 1, 43, 67, 200, 98, 100]
const bubbleSort = (temp) => {
  const arr = [...temp]
  const len = arr.length
  // 冒泡排序，第一层循环表示排序的轮数，第二层循环比较当前项和下一项
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      // 如果当前项大于下一项，那么交换这两个项的值
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
// 内循环中减去外循环已经跑过的轮数，可以避免内循环中不必要的比较
// 比如第一轮比较后，会把最大的元素放在数组的最后面，那么第二轮比较的时候，就不会再去跟最后一个元素进行比较了
const bubbleSortAdvanced = (temp) => {
  const arr = [...temp]
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSortAdvanced(array))
