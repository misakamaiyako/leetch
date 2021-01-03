import maxSlidingWindow from './maxSlidingWindow'

test('1', () => {
  expect(maxSlidingWindow([ 1, 3, -1, -3, 5, 3, 6, 7 ], 3)).toStrictEqual([ 3, 3, 5, 5, 6, 7 ])
})
test('2', () => {
  expect(maxSlidingWindow([ 1, 3, 1, 2, 0, 5 ], 3)).toStrictEqual([ 3, 3, 2, 5 ])
})
test('3', () => {
  expect(maxSlidingWindow([ 1, 3, -1, -3, 5, 3, 6, 7 ], 3)).toStrictEqual([ 3, 3, 5, 5, 6, 7 ])
})
