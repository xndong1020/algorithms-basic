const R = require('ramda')

const selectionSort = target => {
  const targetCloned = R.clone(target)
  for (let i = 0; i < targetCloned.length; i++) {
    let tempMin = targetCloned[i]
    let tempMinIndex = i

    for (let j = i; j < targetCloned.length; j++) {
      if (tempMin > targetCloned[j + 1]) {
        tempMin = targetCloned[j + 1]
        tempMin = j + 1
      }
    }
    targetCloned[tempMinIndex] = targetCloned[i]
    targetCloned[i] = tempMin
  }
  return targetCloned
}

module.exports = selectionSort
