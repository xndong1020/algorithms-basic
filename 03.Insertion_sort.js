const R = require('ramda')

// Todo: how to implement best complexity O(n)
const insertionSort = target => {
  const targetCloned = R.clone(target)
  // let swapped = true
  for (let i = 1; i < targetCloned.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = targetCloned[j]

      if (targetCloned[i - j] < targetCloned[i - j - 1]) {
        temp = targetCloned[i - j]
        targetCloned[i - j] = targetCloned[i - j - 1]
        targetCloned[i - j - 1] = temp
      }
    }
  }
  // console.log("inside insertionSort", targetCloned, swapped);
  return targetCloned
}

module.exports = insertionSort
