import totalNQueens from "./totalNQueens";

test('1',()=>{
  expect(totalNQueens(1)).toBe(1)
});

test('3',()=>{
  expect(totalNQueens(3)).toBe(0)
});

test('5',()=>{
  expect(totalNQueens(5)).toBe(10)
});

test('7',()=>{
  expect(totalNQueens(7)).toBe(40)
});

test('9',()=>{
  expect(totalNQueens(9)).toBe(352)
});
