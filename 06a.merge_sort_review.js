// merge sort的原理就是先利用recursion进行二分, 然后每次都把两个arr进行merge
// merge的时候如果两个都不越界，那么按照大小插入帮助数列，
// 如果任何一个数列越界了说明它被完全插入帮助数列了（遍历尽了），那么另外一个数组就append到帮助数列的尾部即可

const arr = [5, -200, 3, 6, 70, -32]

const merge = (arr, L, middle, R) => {
  let temp = []
  let leftIndex = L
  let rightIndex = middle + 1
  let i = 0
  while (leftIndex <= middle && rightIndex <= R) {
    temp[i++] =
      arr[leftIndex] < arr[rightIndex] ? arr[leftIndex++] : arr[rightIndex++]
  }

  while (leftIndex <= middle) {
    temp[i++] = arr[leftIndex++]
  }

  while (rightIndex <= R) {
    temp[i++] = arr[rightIndex++]
  }

  for (let j = 0; j < temp.length; j++) {
    arr[L + j] = temp[j]
  }
}

const startProcess = (arr, L, R) => {
  if (L === R) return
  const middle = Math.floor((L + R) / 2)

  startProcess(arr, 0, middle)
  startProcess(arr, middle + 1, R)
  merge(arr, L, middle, R)
}

const mergeSort = arr => {
  if (!arr || arr.length < 2) return arr
  startProcess(arr, 0, arr.length - 1)
}

mergeSort(arr)
console.log(arr)
