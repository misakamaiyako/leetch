import lastStoneWeight from "./lastStoneWeight";
test('1',()=>{
  expect(lastStoneWeight([2,7,4,1,8,1])).toBe(1)
})
test('2',()=>{
  expect(lastStoneWeight([1,3])).toBe(2)
})
