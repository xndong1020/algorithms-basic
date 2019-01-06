// 使用荷兰国旗，分出大于区，小于区，然后返回等于区的值以便进行recursion再次分区

const arr = [3, 5, 2, 4, 1, -100, 200, -30, 4000, -5, 6]

const swap = (arr, idx1, idx2) => {
  if (idx1 === idx2) return
  let temp = arr[idx2]
  arr[idx2] = arr[idx1]
  arr[idx1] = temp
}

const partition = (arr, L, R, number) => {
  if (!arr || arr.length < 2) return arr

  let less = L - 1
  let more = R + 1

  while (L < more) {
    if (arr[L] < number) {
      swap(arr, ++less, L++)
    } else if (arr[L] > number) {
      // 如果等于，就不断将右边大于区的数换到当前被检查的L位置进行检查，开始是最右边的，然后下次大于的话是右边倒数第二个，然后是下次大于的话倒数第三个（因为--more，所以大于区不断向中心迫近）
      swap(arr, --more, L)
    } else {
      L++ // 如果等于，就不动这个数，即保留这个数在其当前位置，同时左边界L 自增1
    }
  }
}

partition(arr, 0, arr.length - 1, 1)
console.log(arr)
