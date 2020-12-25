import firstUniqChar  from './firstUniqChar'

test('1',()=>{
  expect(firstUniqChar('leetcode')).toBe(0)
})

test('2',()=>{
  expect(firstUniqChar('loveleetcode')).toBe(2)
})
test('3',()=>{
  expect(firstUniqChar('cc')).toBe(-1)
})
test('4',()=>{
  expect(firstUniqChar('dddccdbba')).toBe(8)
})
