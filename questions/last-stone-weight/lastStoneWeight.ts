export default function lastStoneWeight (stones:number[]):number {
  const l = stones.length;
  if (l===0){
    return 0
  }
  if (l===1){
    return stones[0]
  }
  if (l===2){
    return Math.abs(stones[0]-stones[1])
  }
  stones = stones.sort((m, n) =>m-n);
  while (stones.length>2){
    const x:number = stones.pop() as number;
    const y:number = stones.pop() as number;
    if (x!==y){
      const z = x-y;
      let i = 0;
      for (; i < stones.length; i++) {
        if (stones[i]>z){
          stones.splice(i,0,z);
          break;
        }
      }
      if (i===stones.length){
        stones.push(z)
      }
    }
  }
  if (stones.length===2){
    return stones[1]-stones[0]
  } else {
    return stones[0]
  }
}
