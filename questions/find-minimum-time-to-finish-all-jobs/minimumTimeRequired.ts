export default function minimumTimeRequired (jobs:number[], k:number):number {
  const jobCount:number = jobs.length
  let average:number = 0
  for (let i = 0; i < jobs.length; i++) {
    average += jobs[ i ]
  }
  jobs.sort((a, b) => b - a)
  average = average / k * 2

  function dfs (workers:number[], i:number):number {
    if (i === jobCount) {
      return Math.max.apply(null, workers)
    } else {
      let count = jobs[ i ]
      let array:number[] = []
      for (let j = 0; j < k; j++) {
        let t = [ ...workers ]
        t[ j ] += count
        if (count >= average || t[ j ] <= average) {
          array.push(dfs(t, i + 1))
        }
      }
      return Math.min.apply(null, array)
    }
  }

  let workers:number[] = new Array(k).fill(0)
  for (let i = 0; i < k; i++) {
    workers[ i ] = jobs[ i ]
  }
  return dfs(workers, k)
}
/**
 * let workers:number[] = new Array(k).fill(0);
 jobs.sort((a,b)=>b-a);
 for (let i = 0; i < jobs.length; i++) {
    let time:number = jobs[i];
    let less = 0;
    for (let j = 0; j < k; j++) {
      if (workers[j]<workers[less]){
        less = j
      }
    }
    workers[less]+=time;
  }
 return Math.max.apply(null,workers)
 **/
