const getMax = (target, L, R) => {
  if (L === R) return target[L]

  const middle = Math.floor((L + R) / 2)
  const maxLeft = getMax(target, L, middle)
  const maxRight = getMax(target, middle + 1, R)
  return Math.max(maxLeft, maxRight)
}

var target = [8, -1, 2, -9, 7]
var result = getMax(target, 0, target.length - 1)

console.log(result)
