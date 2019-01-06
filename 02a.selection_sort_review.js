// selection sort的原理是每次找出最大/最小数，然后跟最左边的数交换，同时左边的边界向右加1

const arr = [5, 3, -200, 6, 70, -32]

const swap = (arr, idx1, idx2) => {
  if (idx1 === idx2) return
  let temp = arr[idx2]
  arr[idx2] = arr[idx1]
  arr[idx1] = temp
}

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    // 内轮循环用于比较的开始的index永远是当前循环的左边界
    let tempMinIndex = i
    // 内轮循环找最小数的index
    for (let j = i; j < arr.length; j++) {
      if (arr[tempMinIndex] > arr[j + 1]) {
        tempMinIndex = j + 1
      }
    }
    // 注意！交换发生于外轮循环，内轮循环只负责找每轮的最小数的index,
    // 此时i 是左边界，tempMinIndex是上轮循环的找到的最小数的index
    swap(arr, tempMinIndex, i)
  }
}

selectionSort(arr)
console.log(arr)
