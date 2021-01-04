import BlackBox from "./BlackBox";

test('1',()=>{
  let blackBox = new BlackBox(2,3);
  expect(blackBox.open(6,-1)).toBe(6);
  expect(blackBox.open(4,-1)).toBe(4);
  expect(blackBox.open(0,-1)).toBe(6);
  blackBox.close(6);
  expect(blackBox.open(0,-1)).toBe(4);
})

test('2',()=>{
  let blackBox = new BlackBox(1,6);
  const operation:('open'|"close")[] = ["open","open","close","open","open","open","close","open","open","close","open","open","open","open","close","open","open","open","open","open","open","open","close","open","open","open","open","open","close","open","open","close","open","open","open","open","open","open","open","close","open","open","open","close","close","close","close","open","open","open","open","close","open","open","open","open","open","open"]
    const value = [[7,-1],[7,-1],[7],[3,-1],[3,1],[1,-1],[1],[6,1],[12,-1],[6],[13,1],[2,1],[13,1],[12,-1],[3],[5,1],[11,-1],[1,-1],[1,-1],[6,1],[9,-1],[9,-1],[6],[5,-1],[8,-1],[13,1],[1,-1],[13,1],[11],[3,-1],[0,-1],[2],[7,-1],[11,1],[13,1],[0,-1],[4,-1],[11,-1],[2,-1],[2],[2,1],[9,1],[2,-1],[12],[7],[3],[9],[11,1],[13,1],[13,1],[3,1],[13],[6,1],[5,1],[7,-1],[13,1],[11,-1],[13,1]];
  const result = [7,7,undefined,3,3,3,undefined,6,12,undefined,3,12,3,12,undefined,13,13,11,11,2,11,11,undefined,5,2,1,11,1,undefined,9,12,undefined,5,3,1,12,8,1,4,undefined,12,5,4,undefined,undefined,undefined,undefined,5,1,1,11,undefined,8,3,5,1,1,1];
  for (let i = 0; i < operation.length; i++) {
    // @ts-ignore
    expect(blackBox[operation[i]].apply(blackBox,value[i])).toBe(result[i])

  }
})
