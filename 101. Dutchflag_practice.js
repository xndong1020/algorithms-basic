const arr = [3, 1, 7, 8, 4]

const partition = (arr, number) => {
  let currentIndex = 0
  let less = currentIndex - 1
  let more = arr.length

  const swap = (arr, L, R) => {
    let temp = arr[L]
    arr[L] = arr[R]
    arr[R] = temp
  }

  while (currentIndex < more) {
    if (arr[currentIndex] < number) {
      swap(arr, ++less, currentIndex++)
    } else if (arr[currentIndex] > number) {
      swap(arr, --more, currentIndex)
    } else {
      currentIndex++
    }
  }

  return arr
}

console.log(partition(arr, 5))
