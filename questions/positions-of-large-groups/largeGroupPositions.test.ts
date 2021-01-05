import largeGroupPositions from "./largeGroupPositions";

test('1', () => {
  expect(largeGroupPositions('abbxxxxzzy')).toStrictEqual([ [ 3, 6 ] ])
})
test('2', () => {
  expect(largeGroupPositions('abcdddeeeeaabbbcd')).toStrictEqual([[3,5],[6,9],[12,14]])
})
