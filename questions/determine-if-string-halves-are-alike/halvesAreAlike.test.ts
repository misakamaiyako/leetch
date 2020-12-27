import halvesAreAlike from './halvesAreAlike'

test('1',()=>{
  expect(halvesAreAlike('book')).toBe(true)
})
test('2',()=>{
  expect(halvesAreAlike('textbook')).toBe(false)
})
test('3',()=>{
  expect(halvesAreAlike('MerryChristmas')).toBe(false)
})
test('4',()=>{
  expect(halvesAreAlike('AbCdEfGh')).toBe(true)
})
