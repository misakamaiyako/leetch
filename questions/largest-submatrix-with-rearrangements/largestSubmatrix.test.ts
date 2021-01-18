import largestSubmatrix from './largestSubmatrix'

test('1', () => {
  expect(largestSubmatrix([ [ 0, 0, 1 ], [ 1, 1, 1 ], [ 1, 0, 1 ] ])).toBe(4)
})
