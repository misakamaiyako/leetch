import maximizeXor from './maximizeXor'

test('1', () => {
  expect(maximizeXor([ 0, 1, 2, 3, 4 ], [ [ 3, 1 ], [ 1, 3 ], [ 5, 6 ] ])).toStrictEqual([ 3, 3, 7 ])
})
test('2', () => {
  expect(maximizeXor([ 5, 2, 4, 6, 6, 3 ], [ [ 12, 4 ], [ 8, 1 ], [ 6, 3 ] ])).toStrictEqual([ 15, -1, 5 ])
})
