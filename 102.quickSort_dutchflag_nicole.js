const swap = (arr, left, right) => {
  if (arr[left] === arr[right]) return
  const temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
}

const partition = (arr, L, R) => {
  let less = L - 1
  let more = R

  while (L < more) {
    if (arr[L] < arr[more]) {
      swap(arr, ++less, L++)
    } else if (arr[L] > arr[more]) {
      swap(arr, --more, L)
    } else {
      L++
    }
  }
  swap(arr, more, R)
  return [less + 1, more]
}

const startProcess = (arr, L, R) => {
  if (L < R) {
    let p = partition(arr, L, R)
    startProcess(arr, L, p[0] - 1)
    startProcess(arr, p[1] + 1, R)
  }
}

const quickSort = arr => {
  if (!arr || arr.length < 2) return
  startProcess(arr, 0, arr.length - 1)
}

const arr = [1, 4, 5, 2, 3, 200, -70, 600]
quickSort(arr)
console.log(arr)
