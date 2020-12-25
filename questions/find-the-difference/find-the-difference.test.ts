import findTheDifference from './find-the-difference'

test('Test1',()=>{
	expect(findTheDifference('abcd','abcde')).toBe('e')
})
test('Test2',()=>{
	expect(findTheDifference('a','aa')).toBe('a')
})
