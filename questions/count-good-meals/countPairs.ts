export default function countPairs (deliciousness:number[]):number {
  //
  let need:Map<number,number> = new Map<number, number>();
  let total:number = 0;
  const deliciousnessLength = deliciousness.length
  for (let i = 0; i < deliciousnessLength; i++) {
    const value = deliciousness[ i ]
    for (let j = 0; j < 22; j++) {
      const target = Math.pow(2,j)-value;
      if (target>=0){
        //target + value = 2^n;
        if (need.has(target)){
          // @ts-ignore
          total+=need.get(target);
        }
      }
    }
    //记录数字出现的次数
    need.set(value,(need.get(value)||0)+1)
  }
  return total%(1e9+7)
}
