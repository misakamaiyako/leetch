import decode from './decode'

test('1', () => {
  expect(decode([ 1, 2, 3 ], 1)).toStrictEqual([ 1, 0, 2, 1 ])
})
test('2', () => {
  expect(decode([ 6, 2, 7, 3 ], 4)).toStrictEqual([ 4, 2, 0, 7, 4 ])
})
