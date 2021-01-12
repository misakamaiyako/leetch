import smallestStringWithSwaps from './smallestStringWithSwaps'
import { s, pairs, result } from './testX'
test('1',()=>{
  expect(smallestStringWithSwaps("dcab",
    [[0,3],[1,2],[0,2]])).toBe('abcd')
})
test('2',()=>{
  expect(smallestStringWithSwaps("qdwyt",
    [[2,3],[3,2],[0,1],[4,0],[3,2]])).toBe('dqwyt')
})
test('3',()=>{
  expect(smallestStringWithSwaps("udyyek",
    [[3,3],[3,0],[5,1],[3,1],[3,4],[3,5]])).toBe("deykuy")
})
test('4',()=>{
  expect(smallestStringWithSwaps("pwqlmqm",
    [[5,3],[3,0],[5,1],[1,1],[1,5],[3,0],[0,2]])).toBe("lpqqmwm")
})
test('5',()=>{
  expect(smallestStringWithSwaps("rdpycmpktsnujtkw",
    [[10,7],[15,8],[0,9],[15,15],[9,9],[11,15],[13,1],[9,11],[6,13],[15,12],[15,13],[2,1],[2,15],[0,7],[12,15],[7,10]])).toBe("djkycmnpprsttukw")
})
test('100',()=>{
  // @ts-ignore
  expect(smallestStringWithSwaps(s, pairs)).toBe(result)
})
