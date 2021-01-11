import totalMoney from './totalMoney'

test('1', () => {
  expect(totalMoney(4)).toBe(10)
})
test('2', () => {
  expect(totalMoney(10)).toBe(37)
})
test('3', () => {
  expect(totalMoney(20)).toBe(96)
})
test('4', () => {
  expect(totalMoney(26)).toBe(135)
})
