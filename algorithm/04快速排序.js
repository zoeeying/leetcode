// 阮一峰版快速排序
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  var pivotIndex = Math.floor(arr.length / 2)
  var pivot = arr.splice(pivotIndex, 1)[0] // 删除中间的元素
  var left = []
  var right = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}
// -------------------------------
// 《学习JavaScript数据结构与算法》中的快速排序
// 采用分而治之的方法，将原始数组分为较小的数组
const quickSort2 = (arr) => {
  const partition = (arr, left, right) => {
    const pivot = arr[Math.floor((right + left) / 2)]
    let i = left
    let j = right
    while (i <= j) {
      while (arr[i] < pivot) {
        i++
      }
      while (arr[j] > pivot) {
        j--
      }
      if (i <= j) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
      }
    }
    return i
  }
  const quick = (arr, left, right) => {
    let index // 通过index来把子数组分离为较小值数组和较大值数组，index的值通过partition得到
    if (arr.length <= 1) {
      return arr
    }
    index = partition(arr, left, right)
    if (left < index - 1) {
      quick(arr, left, index - 1)
    }
    if (index < right) {
      quick(arr, index, right)
    }
  }
  return quick(arr, 0, arr.length - 1)
}

console.log(quickSort2([9, 6, 4, 12, 54, 110, 22, 1, 21, 33, 888, 9, 11]))
