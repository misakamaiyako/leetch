import minFlips from './minFlips'

test('1', () => {
	expect(minFlips([ [ 0, 0 ], [ 0, 1 ] ])).toBe(3)
}, 2000)
test('2', () => {
	expect(minFlips([ [ 0 ] ])).toBe(0)
}, 2000)
test('3', () => {
	expect(minFlips([ [ 1, 0, 0 ], [ 1, 0, 0 ] ])).toBe(-1)
}, 2000)
test('4', () => {
	expect(minFlips([[1,1,1],[1,0,1],[0,0,0]])).toBe(6)
}, 2000)
