import multiply from './recursive-mulitply-lcci'

test('Test1',()=>{
	expect(multiply(1,10)).toBe(10)
})
test('random',()=>{
	let A = Math.random()*1000|0
	let B = Math.random()*1000|0
	console.log(A,B)
	expect(multiply(A,B)).toBe(A*B)
})
test('Test2',()=>{
	let A = 100
	let B = 61
	expect(multiply(A,B)).toBe(A*B)
})
