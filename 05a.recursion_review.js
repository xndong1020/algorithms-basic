// 原理，每次二分，然后自己调用自己，停止条件是左边界等于右边界L == R, 表示只有1个元素，分无可分

const arr = [5, 3, -200, 6, 70, -32]

const getMax = (arr, L, R) => {
  if (L === R) return arr[L]

  const middle = Math.floor((L + R) / 2)
  const leftMax = getMax(arr, L, middle)
  const rightMax = getMax(arr, middle + 1, R)

  return Math.max(leftMax, rightMax)
}

console.log(getMax(arr, 0, arr.length - 1))
