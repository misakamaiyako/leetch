import reformatNumber from './reformatNumber'
test('Test1',()=>{
	expect(reformatNumber('123 4-5678')).toBe('123-456-78')
})
test('Test2',()=>{
	expect(reformatNumber('12')).toBe('12')
})
test('Test3',()=>{
	expect(reformatNumber('1-23-45 6')).toBe('123-456')
})
test('Test4',()=>{
	expect(reformatNumber("123 4-567")).toBe("123-45-67")
})
