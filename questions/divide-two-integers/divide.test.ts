import divide from "./divide";

test('1', () => {
  expect(divide(10, 3)).toBe(3)
})
test('2', () => {
  expect(divide(7, -3)).toBe(-2)
})
test('3', () => {
  expect(divide(-(2 ** 31), -1)).toBe(2 ** 31 - 1)
})
test('4', () => {
  expect(divide(-2147483648, 1)).toBe(-2147483648)
})
