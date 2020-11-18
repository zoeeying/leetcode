const binarySearch = (arr, value) => {
  // 迭代法
  // let left = 0,
  //   right = arr.length - 1
  // while (left <= right) {
  //   const mid = Math.floor(left + right)
  //   if (arr[mid] < value) {
  //     left = mid + 1
  //   } else if (arr[mid] > value) {
  //     right = mid - 1
  //   } else {
  //     return mid
  //   }
  // }
  // return -1
  // ----------------------------------------------
  // 分治法
  const recursion = (arr, value, left, right) => {
    if (left <= right) {
      const mid = Math.floor(left + right)
      if (arr[mid] < value) {
        return recursion(arr, value, mid + 1, right)
      } else if (arr[mid] > value) {
        return recursion(arr, value, left, mid - 1)
      } else {
        return mid
      }
    }
    return -1
  }
  const left = 0,
    right = arr.length - 1
  return recursion(arr, value, left, right)
}
console.log(binarySearch([1, 3, 4, 5, 7], 5))
