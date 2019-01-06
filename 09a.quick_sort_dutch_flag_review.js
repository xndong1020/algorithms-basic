// 荷兰国旗 + 快排的原理是recursion不断2分，在merge的时候，左边使用经典的荷兰国旗，小于区从-1开始迫近，大于区从最后一位而不是最后一位的外面迫近，在返回等于区之前，将标杆和大于区的第一位进行互换

const arr = [5, 3, -200, 6, 70, -32]

const swap = (arr, idx1, idx2) => {
  if (idx1 === idx2) return
  let temp = arr[idx2]
  arr[idx2] = arr[idx1]
  arr[idx1] = temp
}

const merge = (arr, L, R) => {
  let less = L - 1
  let more = R

  // 从数列第一个数arr[L] 开始比较， L同时代表小于区里面的第一个数，不应该碰上大于区的第一个数
  while (L < more) {
    // 因为使用最右边的边界索引arr[R]作为标杆数，从数列第一个数arr[L] 开始比较
    if (arr[L] < arr[R]) {
      swap(arr, ++less, L++) // 如果arr[L] < arr[R],那么将less自增1，同时跟L位置的数互换，然后L自增1，这样下次比较arr[L] < arr[R]，是从第一个小于区的数的右边开始比起
    } else if (arr[L] > arr[R]) {
      // 如果arr[L] > arr[R],那么将more自减1，也就是arr[R]这个标杆数的左边一位的数跟L位置的数互换
      // 注意L不自增1，因为我们刚刚将arr[R]这个标杆数的左边一位的数跟L位置的数互换，但是我们不知道arr[R]这个标杆数的左边一位的数是不是大于标杆数，所以还要在L位置检查（此时L位置是我们刚刚换过去的arr[R]这个标杆数的左边一位的数）
      // 之所以我们不交换将arr[R]这个标杆数而是交换arr[R]这个标杆数的左边一位的数， 是因为我们不希望标杆数发生变化，这样比较大小就没有一个标准了
      swap(arr, --more, L)
    } else {
      L++
    }
  }
  // 由于我们之前没有处理arr[R]这个标杆数，它还在数列的右侧，所以我们此时将他换到大于区的第一个数，也就是more所在的位置
  swap(arr, more, R)
  // 返回等于区的起止位置，即小于区的右边一位，以及大于区的左边一位（因为先自减more）
  return [less + 1, more]
}

const partition = (arr, L, R) => {
  if (L === R) return

  const p = merge(arr, L, R)
  merge(arr, 0, p[0] - 1)
  merge(arr, [p[1] + 1], R)
}

const quickSort = arr => {
  if (!arr || arr.length < 2) return arr
  partition(arr, 0, arr.length - 1)
}

quickSort(arr)
console.log(arr)
