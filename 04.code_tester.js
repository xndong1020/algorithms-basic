const bubbleSort = require('./01.bubble_sort')
// const selectionSort = require('./02.selection_sort')
// const insertionSort = require('./03.Insertion_sort')
const { randomArrayGenerator, systemSorter, hasEqualValue } = require('./utils')

let correct = true
for (let index = 0; index < 50000 && correct; index++) {
  let sampleArray = randomArrayGenerator(1000, 10000)
  let sampleArraySortedByTestMethod = bubbleSort(sampleArray)
  let sampleArraySorted = systemSorter(sampleArray)

  if (!hasEqualValue(sampleArraySortedByTestMethod, sampleArraySorted)) {
    correct = false
    console.log(sampleArray, sampleArraySortedByTestMethod, sampleArraySorted)
  }
}
if (correct) {
  console.log('passed')
} else {
  console.log('failed')
}
