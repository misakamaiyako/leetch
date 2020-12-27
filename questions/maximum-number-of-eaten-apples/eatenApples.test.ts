import  eatenApples from './eatenApples';
test('1',()=>{
  expect(eatenApples( [1,2,3,5,2],  [3,2,1,4,2])).toBe(7)
})
test('2',()=>{
  expect(eatenApples( [3,0,0,0,0,2],  [3,0,0,0,0,2])).toBe(5)
})
