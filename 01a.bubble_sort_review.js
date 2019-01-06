// bubble sort的原理是array当中的每个数，都与右边的邻居相比，每轮排出去一个最大数/最小数到数列的右边
// 复杂性是O(N的平方)

const arr = [2, 3, 5, 6, 7]
let swapped = false

const swap = (arr, idx1, idx2) => {
  if (idx1 === idx2) return false
  let temp = arr[idx2]
  arr[idx2] = arr[idx1]
  arr[idx1] = temp
  return true
}

const bubbleSort = arr => {
  swapped = true
  // 数列最后一个数不用跟它右边的数比，所以是arr.length - 1
  for (let i = 0; i < arr.length - 1 && swapped; i++) {
    // 因为每轮排出去一个，所有长度随i的增大而减小，所以是array.length - i - 1
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = swap(arr, j, j + 1)
      }
    }
  }
}

bubbleSort(arr)
console.log(arr)
