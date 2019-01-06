// insertion sort的原理是第一轮从1位开始，跟左边0位比，找出最大/最小数/交换，第二轮从2位比，跟左边0，1位比，找出最大/最小数/交换，以此类推

const arr = [5, 3, -200, 6, 70, -32]

const swap = (arr, idx1, idx2) => {
  if (idx1 === idx2) return
  let temp = arr[idx2]
  arr[idx2] = arr[idx1]
  arr[idx1] = temp
}

const insertionSort = arr => {
  // 外轮从1开始，因为比较大小至少需要两个数开始
  for (let i = 1; i < arr.length; i++) {
    // 内轮每次从i的index开始，每次循环跟它左边的数相比，如果右边比左边小，就交换
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1)
      }
    }
  }
}

insertionSort(arr)
console.log(arr)
