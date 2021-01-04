export default function avoidFlood (rains:number[]):number[] {
  const length = rains.length;
  let result:Array<number> = new Array(length).fill(-1);
  let lastRain:Map<number,number> = new Map<number, number>();
  for (let i = 0; i < length; i++) {
    const pool = rains[i];
    if (pool>0){
      // filled.add(pool)
      if (lastRain.has(pool)){
        let lastRainDay = <number>lastRain.get(pool);
        let find:boolean = false;
        for (let j = lastRainDay+1; j < i; j++) {
          let rj = rains[j];
          if (rj===0){
            result[j] = pool;
            rains[j] = -1;
            find = true;
            break;
          }
        }
        if (!find){
          return []
        }
      }
      lastRain.set(pool,i);
    } else {
      result[i]=-2
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i]===-2){
      result[i] = 1
    }
  }
  return result;
}
