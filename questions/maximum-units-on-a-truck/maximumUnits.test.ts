import maximumUnits from './maximumUnits'

test('1', () => {
  expect(maximumUnits([ [ 5, 10 ], [ 2, 5 ], [ 4, 7 ], [ 3, 9 ] ], 10)).toBe(91)
})
test('2', () => {
  expect(maximumUnits([ [ 1, 3 ], [ 5, 5 ], [ 2, 5 ], [ 4, 2 ], [ 4, 1 ], [ 3, 1 ], [ 2, 2 ], [ 1, 3 ], [ 2, 5 ], [ 3, 2 ] ], 35)).toBe(91)
})
