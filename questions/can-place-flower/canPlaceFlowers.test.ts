import canPlaceFlowers from './canPlaceFlowers'

test('1', () => {
  expect(canPlaceFlowers([ 1, 0, 0, 0, 1 ], 1)).toBe(true)
})

test('2', () => {
  expect(canPlaceFlowers([ 1, 0, 0, 0, 1 ], 2)).toBe(false)
})
test('3', () => {
  expect(canPlaceFlowers([ 1, 0, 0, 0, 0, 0, 1 ], 2)).toBe(true)
})
