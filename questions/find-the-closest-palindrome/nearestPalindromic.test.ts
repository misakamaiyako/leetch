import nearestPalindromic from "./nearestPalindromic";

test('1',()=>{
  expect(nearestPalindromic('123')).toBe('121')
})

test('2',()=>{
  expect(nearestPalindromic('1234')).toBe('1221')
})

test('3',()=>{
  expect(nearestPalindromic('999')).toBe('1001')
})

test('4',()=>{
  expect(nearestPalindromic('1000')).toBe('999')
})
test('5',()=>{
  expect(nearestPalindromic('10000')).toBe('9999')
})
test('6',()=>{
  expect(nearestPalindromic('12321')).toBe('12221')
})
test('7',()=>{
  expect(nearestPalindromic("1283")).toBe("1331")
})
test('8',()=>{
  expect(nearestPalindromic("88")).toBe("77")
})
test('9',()=>{
  expect(nearestPalindromic("12389")).toBe("12421")
})
test('10',()=>{
  expect(nearestPalindromic("1837722381")).toBe("1837667381")
})
