const arr = [7, 3, 4, 2, 5]
// for (let i = 1; i < arr.length; i++) {
//    for (let j = 0; j < i; j++) {
//        if(arr[i] > arr[j]) {
//            sum += arr[j]
//        }
//    }
// }
// console.log(sum);

const merge = (arr, L, middle, R) => {
  let temp = []
  let i = 0
  let p1 = L
  let p2 = middle + 1
  let sum = 0

  while (p1 <= middle && p2 <= R) {
    sum += arr[p1] < arr[p2] ? arr[p1] * (R - p2 + 1) : 0
    temp[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
  }

  while (p1 <= middle) {
    temp[i++] = arr[p1++]
  }

  while (p2 <= R) {
    temp[i++] = arr[p2++]
  }

  for (let j = 0; j < temp.length; j++) {
    arr[L + j] = temp[j]
  }

  return sum
}

const startProcess = (arr, L, R) => {
  if (L === R) return 0

  const middle = Math.floor((L + R) / 2)

  const result =
    startProcess(arr, L, middle) +
    startProcess(arr, middle + 1, R) +
    merge(arr, L, middle, R)

  return result
}

const getSum = arr => {
  if (!arr) return 0
  if (arr.length === 1) return 0
  return startProcess(arr, 0, arr.length - 1)
}

let result = getSum(arr)
console.log(arr)
console.log(result)
