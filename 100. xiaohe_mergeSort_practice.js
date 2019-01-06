const target = [3, 1, 4, 2, 5]

const merge = (target, L, middle, R) => {
  let temp = []
  let i = 0
  let p1 = L
  let p2 = middle + 1
  let sum = 0

  while (p1 <= middle && p2 <= R) {
    sum += target[p1] < target[p2] ? target[p1] * (R - p2 + 1) : 0
    temp[i++] = target[p1] < target[p2] ? target[p1++] : target[p2++]
  }

  while (p1 <= middle) {
    temp[i++] = target[p1++]
  }

  while (p2 <= R) {
    temp[i++] = target[p2++]
  }

  for (let j = 0; j < temp.length; j++) {
    target[L + j] = temp[j]
  }

  return sum
}

const startProcess = (target, L, R) => {
  if (L === R) return 0

  const middle = Math.floor((L + R) / 2)
  const result =
    startProcess(target, L, middle) +
    startProcess(target, middle + 1, R) +
    merge(target, L, middle, R)
  return result
}

const mergeSort = target => {
  if (!target || target < 2) return 0
  return startProcess(target, 0, target.length - 1)
}

let result = mergeSort(target)
console.log(result)
