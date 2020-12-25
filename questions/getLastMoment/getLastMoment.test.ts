import getLastMoment from './getLastMoment'

test('Test1',()=>{
	expect(getLastMoment(4,[4,3],[0,1])).toBe(4)
})
test('Test2',()=>{
	expect(getLastMoment(7,[],[0,1,2,3,4,5,6,7])).toBe(7)
})
test('Test3',()=>{
	expect(getLastMoment(7,[0,1,2,3,4,5,6,7],[])).toBe(7)
})
