import fib from "./fib";

test('1',()=>{
  expect(fib(0)).toBe(0)
})
test('2',()=>{
  expect(fib(1)).toBe(1)
})
test('3',()=>{
  expect(fib(6)).toBe(8)
})
test('4',()=>{
  expect(fib(12)).toBe(144)
})
