const R = require('ramda')

// 01. generate random value in a random-sized array
function randomArrayGenerator (size, value) {
  const sampleLength = Math.ceil(size * Math.random())
  let result = []

  for (let i = 0; i < sampleLength; i++) {
    const sampleRandomValue = parseInt(
      (value + 1) * Math.random() - parseInt(value * Math.random())
    )
    result[i] = sampleRandomValue
  }
  return result
}

// create a absolute correct method using system method, as comparison to our method
function systemSorter (arr) {
  const arrCloned = R.clone(arr)
  return arrCloned.sort(function (a, b) {
    return a - b
  })
}

function hasEqualValue (arr1, arr2) {
  if (
    (arr1 === undefined && arr2 !== undefined) ||
    (arr1 !== undefined && arr2 === undefined)
  ) { return false }
  if (arr1.length !== arr2.length) return false
  if (arr1 === undefined && arr2 === undefined) return true
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

module.exports = {
  randomArrayGenerator: randomArrayGenerator,
  systemSorter: systemSorter,
  hasEqualValue: hasEqualValue
}
