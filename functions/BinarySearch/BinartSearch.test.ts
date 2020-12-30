import BinarySearch from "./BinarySearch";

test('1',()=>{
  expect(BinarySearch([1,2,5,7,8,23,99],23)).toBe(5)
})
test('2',()=>{
  expect(BinarySearch([1,23,56,78,99,123,450],9)).toBe(-1)
})
