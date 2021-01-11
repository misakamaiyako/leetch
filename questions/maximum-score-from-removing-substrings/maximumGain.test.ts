import maximumGain from './maximumGain'

test('1', () => {
  expect(maximumGain('cdbcbbaaabab', 4, 5)).toBe(19)
})
test('2', () => {
  expect(maximumGain('aabbaaxybbaabb', 5, 4)).toBe(20)
})
test('3', () => {
  expect(maximumGain('aabbrtababbabmaaaeaabeawmvaataabnaabbaaaybbbaabbabbbjpjaabbtabbxaaavsmmnblbbabaeuasvababjbbabbabbasxbbtgbrbbajeabbbfbarbagha', 8484, 4096)).toBe(198644)
})
