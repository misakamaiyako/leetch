import atMostNGivenDigitSet from "./atMostNGivenDigitSet";

test("1",()=>{
  expect(atMostNGivenDigitSet(["1","2","3","4","5","6"],3456)).toBe(828);
})
test("2",()=>{
  expect(atMostNGivenDigitSet(["1","3","5","7","9"],2468)).toBe(280);
})
test("3",()=>{
  expect(atMostNGivenDigitSet(["1","3","5","7","9"],4680)).toBe(405);
})

test("4",()=>{
  expect(atMostNGivenDigitSet(["1","4","9"],1000000000)).toBe(29523);
})
test("5",()=>{
  expect(atMostNGivenDigitSet(["4","5"],19)).toBe(2);
})
test("6",()=>{
  expect(atMostNGivenDigitSet(["3","4","6","7","9"],4170)).toBe(280);
})
