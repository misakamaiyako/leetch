import MapBFS from "./MapBFS";

const map = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12]
]

test('1',()=>{
  expect(MapBFS(map,12)).toBe(true)
})
test('2',()=>{
  expect(MapBFS(map,90)).toBe(false)
})
