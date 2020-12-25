import numWaterBottles from './water-bottles'
test('Test1',()=>{
	expect(numWaterBottles(9,3)).toBe(13)
},300)
test('Test2',()=>{
	expect(numWaterBottles(15,4)).toBe(19)
},300)
test('Test3',()=>{
	expect(numWaterBottles(5,5)).toBe(6)
},300)
