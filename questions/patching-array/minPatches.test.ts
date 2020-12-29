import minPatches from './minPatches'

test('1',()=>{
  expect(minPatches([1,3],6)).toBe(1)
})
test('2',()=>{
  expect(minPatches([1,5,10],  20)).toBe(2)
})
test('3',()=>{
  expect(minPatches([],  7)).toBe(3)
})
test('4',()=>{
  expect(minPatches([],  8)).toBe(4)
})
test('5',()=>{
  expect(minPatches([1,2,31,33],214_7483_647)).toBe(28)
})
