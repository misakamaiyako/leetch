import avoidFlood from './avoidFlood'

test('1',()=>{
  expect(avoidFlood([1,2,3,4])).toStrictEqual([-1,-1,-1,-1])
})
test('2',()=>{
  expect(avoidFlood([1,2,0,1,2])).toStrictEqual([])
})
test('3',()=>{
  expect(avoidFlood([69,0,0,0,69])).toStrictEqual([-1,69,1,1,-1])
})
test('4',()=>{
  expect(avoidFlood([0,1,1])).toStrictEqual([])
})

test('5',()=>{
  expect(avoidFlood([2,3,0,0,3,1,0,1,0,2,2])).toStrictEqual([])
})
