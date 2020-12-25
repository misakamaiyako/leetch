import minCostClimbingStairs from './minCostClimbingStairs'

test('Test1',()=>{
	expect(minCostClimbingStairs([10, 15, 20])).toBe(15)
},1500)
test('Test2',()=>{
	expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6)
},1500)
