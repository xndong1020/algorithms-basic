const merge = (target, L, middle, R) => {
  let temp = []
  let i = 0
  let p1 = L
  let p2 = middle + 1

  // 当左右集合没有越过中界， 且没有超出数组长度的时候，总左集合和右集合的最左边逐一比对其值的大小，并将结果添加到 temp
  while (p1 <= middle && p2 <= R) {
    temp[i++] = target[p1] < target[p2] ? target[p1++] : target[p2++]
  }

  // 这个跟下面的 while (p2 <= R) temp[i++] = target[p2++]只会被执行一个，因为左右集合只可能有一组越过中界
  while (p1 <= middle) temp[i++] = target[p1++]

  while (p2 <= R) temp[i++] = target[p2++]

  for (let j = 0; j < temp.length; j++) {
    target[L + j] = temp[j]
  }
}

const startProcess = (target, L, R) => {
  if (L === R) return

  const middle = Math.floor((L + R) / 2)
  startProcess(target, L, middle)
  startProcess(target, middle + 1, R)
  merge(target, L, middle, R)
}

const mergeSort = target => {
  if (!target || target.length < 2) return
  startProcess(target, 0, target.length - 1)
}

let test = [3, 2, 1, 0]
mergeSort(test)
console.log(test)
