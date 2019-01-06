const arr = [3, 5, 2, 4, 1, -100, 200, -30, 4000, -5, 6]

const swap = (arr, left, right) => {
  let temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
}

const partition = (arr, number) => {
  let less = -1 // small left index
  let more = arr.length // bigger right index
  // let currentIndex = 0 // arr left index

  // while (currentIndex < more) {
  //   if (arr[currentIndex] < number) {
  //     swap(arr, ++less, currentIndex++);
  //   } else if (arr[currentIndex] > number) {
  //     swap(arr, --more, currentIndex);
  //   } else {
  //     currentIndex++;
  //   }
  // }

  for (let i = 0; i < more;) {
    if (arr[i] < number) {
      swap(arr, ++less, i++)
    } else if (arr[i] > number) {
      swap(arr, --more, i)
    } else {
      i++
    }
  }

  return arr
}

console.log(partition(arr, 2))
