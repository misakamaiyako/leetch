import minimumTimeRequired from './minimumTimeRequired'

test('1', () => {
  expect(minimumTimeRequired([ 3, 2, 3 ], 3)).toBe(3)
})
test('2', () => {
  expect(minimumTimeRequired([ 1, 2, 4, 7, 8 ], 2)).toBe(11)
})
test('3', () => {
  expect(minimumTimeRequired([ 38, 49, 91, 59, 14, 76, 84 ], 3)).toBe(140)
})
test('4', () => {
  expect(minimumTimeRequired([ 17, 20, 4, 6, 2, 5, 13, 5, 8 ],
    8))
}, 1)
test('5', () => {
  expect(minimumTimeRequired([ 11, 2, 20, 18, 2, 1, 7, 11, 7, 10 ],
    9))
}, 1)
test('6', () => {
  expect(minimumTimeRequired([ 1, 3, 5, 1000 ],
    4)).toBe(1000)
}, 1)
test('7', () => {
  expect(minimumTimeRequired([ 46, 13, 54, 51, 38, 49, 54, 67, 26, 78, 33 ],
    10)).toBe(78)
}, 1)
test('8', () => {
  expect(minimumTimeRequired([ 254, 256, 256, 254, 251, 256, 254, 253, 255, 251, 251, 255 ],
    10)).toBe(504)
}, 1)
