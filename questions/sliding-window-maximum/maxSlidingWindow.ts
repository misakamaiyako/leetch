export default function maxSlidingWindow (nums:number[], k:number):number[] {
  let max:number[] = []
  const length = nums.length
  let lastMax:number = -Number.MAX_SAFE_INTEGER
  for (let i = 0; i < k; i++) {
    lastMax = Math.max(nums[ i ], lastMax)
  }
  max.push(lastMax)
  for (let i = k; i < length; i++) {
    if (nums[ i - k ] !== lastMax) {
      lastMax = Math.max(nums[ i ], lastMax)
    } else {
      lastMax = -Number.MAX_SAFE_INTEGER
      for (let j = i - k + 1; j <= i; j++) {
        lastMax = Math.max(nums[ j ], lastMax)
      }
    }
    max.push(lastMax)
  }
  return max
}
