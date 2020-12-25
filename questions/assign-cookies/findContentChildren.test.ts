import findContentChildren from './findContentChildren'

test('1',()=>{
  expect(findContentChildren([1,2,3],[1,1])).toBe(1)
})
test('2',()=>{
  expect(findContentChildren([1,2],[1,2,3])).toBe(2)
})
test('3',()=>{
  expect(findContentChildren([10,9,8,7],[5,6,7,8])).toBe(2)
})
test('4',()=>{
  expect(findContentChildren([10,9,8,7,10,9,8,7],[10,9,8,7])).toBe(4)
})
