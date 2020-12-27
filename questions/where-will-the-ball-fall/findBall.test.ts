import findBall from './findBall'

test('1',()=>{
  expect(findBall([[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]])).toStrictEqual([1,-1,-1,-1,-1])
})
