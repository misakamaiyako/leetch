import checkArithmeticSubarrays from './checkArithmeticSubarrays'

test('1',()=>{
  let nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5];
  expect(checkArithmeticSubarrays(nums,l,r)).toStrictEqual([true,false,true])
})
test('2',()=>{
  let nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10];
  expect(checkArithmeticSubarrays(nums,l,r)).toStrictEqual([false,true,false,false,true,true])
})
test('3',()=>{
  expect(checkArithmeticSubarrays([-3,-6,-8,-4,-2,-8,-6,0,0,0,0],
    [5,4,3,2,4,7,6,1,7],
    [6,5,6,3,7,10,7,4,10])).toStrictEqual([true,true,true,true,false,true,true,true,true])
})
