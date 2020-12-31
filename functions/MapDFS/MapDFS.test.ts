import find from "./MapDFS";
const grid:number[][] = [];
for (let i = 0; i < 50; i++) {
  let row:number[] = [];
  for (let j = 0; j < 50; j++) {
    row.push(50*i+j);
  }
  grid.push(row)
}
test('1',()=>{
  expect(find(grid,20)).toBe(true)
},50);
test('2',()=>{
  expect(find(grid,-1)).toBe(false)
},50);
test('3',()=>{
  expect(find(grid,100_000)).toBe(false)
},50);
