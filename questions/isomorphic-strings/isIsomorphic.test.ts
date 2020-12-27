import isIsomorphic from './isIsomorphic'

test('1', () => {
  expect(isIsomorphic('paper', 'title')).toBe(true)
})
test('2', () => {
  expect(isIsomorphic('foo', 'bar')).toBe(false)
})
test('3', () => {
  expect(isIsomorphic('ab', 'aa')).toBe(false)
})
