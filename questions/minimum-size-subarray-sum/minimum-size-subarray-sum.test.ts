import minSubArrayLen from './minimum-size-subarray-sum'
test('Test1',()=>{
	expect(minSubArrayLen(7,[2,3,1,2,4,3])).toBe(2)
},1000)

test('Test2',()=>{
	expect(minSubArrayLen(11,[1,2,3,4,5])).toBe(3)
},1000)
