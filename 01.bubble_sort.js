const R = require('ramda')

const bubbleSort = target => {
  const targetCloned = R.clone(target)
  let swapped = true
  /**
   * *首先遍历数组当中的每一个元素，index[i] 代表数组当中的每一个元素，知道倒数第二个元素
   * *不包含倒数第一个元素的原因是倒数第一个元素它右边没有元素了，无法向右再继续推
   * ! 如果在上一轮内循环当中发生过任何值交换，就表明这个数组不是已排序数组，
   * ! 这个逻辑是为了防止tartget一上来就是排好序的[1,2,3,4], 这样就是best complexity O(n)
   * ! https://stackoverflow.com/questions/12505832/why-is-the-time-complexity-of-bubble-sorts-best-case-being-on
   */
  for (let i = 0; i < targetCloned.length - 1 && swapped; i++) {
    /**
     * * index[j] 是每次进行过一次寻找最大数之后，剩余的所有元素
     */
    swapped = false
    for (let j = 0; j < targetCloned.length - i - 1; j++) {
      /**
       * * 下面是使用临时变量temp进行换位
       */
      let temp = targetCloned[j]
      if (targetCloned[j] > targetCloned[j + 1]) {
        temp = targetCloned[j + 1]
        targetCloned[j + 1] = targetCloned[j]
        targetCloned[j] = temp
        swapped = true
      }
    }
  }
  return targetCloned
}

module.exports = bubbleSort
