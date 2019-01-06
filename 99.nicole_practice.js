// const getMax = (target, L, R) => {
//   if (L == R) return target[L];

//   const middle = Math.floor((L + R) / 2);
//   const maxLeft = getMax(target, L, middle);
//   const maxRight = getMax(target, middle + 1, R);
//   return Math.max(maxLeft, maxRight);
// };

// const target = [7, -2, 6, 0, 5, 55, 555555];
// const result = getMax(target, 0, target.length - 1);

// console.log(result);

const merge = (target, L, middle, R) => {
  let temp = []
  let i = 0
  let p1 = L
  let p2 = middle + 1

  while (p1 <= middle && p2 <= R) {
    temp[i++] = target[p1] < target[p2] ? target[p1++] : target[p2++]
  }

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

let test = [-3, 8, 9, -7]
mergeSort(test)
console.log(test)
