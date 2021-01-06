// export default function calcEquation (equations:string[][], values:number[], queries:string[][]):number[] {
//   let result:number[] = [];
//   const equationsLength = equations.length;
//
//   function find (a:string, b:string, result:number, flagMap:boolean[]):number {
//     for (let i = 0; i < equations.length; i++) {
//       if (equations[ i ][ 0 ] === a && !flagMap[ i ]) {
//         flagMap[ i ] = true;
//         if (equations[ i ][ 1 ] === b) {
//           return result * values[ i ];
//         }  else {
//           let r = Math.max(find(equations[ i ][ 1 ], b, result * values[ i ], flagMap), 1 / find(b, equations[ i ][ 1 ], result / values[ i ], Array.from(flagMap)));
//           if (r > -1) {
//             return r;
//           }
//         }
//       }
//     }
//     return -1
//   }
//
//   for (let i = 0; i < queries.length; i++) {
//     const a = queries[ i ][ 0 ];
//     const b = queries[ i ][ 1 ];
//     if (a===b&&equations.find(t=>t[0]===a||t[1]===a)){
//       result.push(1)
//     } else {
//       result.push(
//         Math.max(find(a, b, 1, new Array(equationsLength).fill(false)),
//           1 / find(b, a, 1, new Array(equationsLength).fill(false))))
//     }
//   }
//   return result
// }
export default function calcEquation (equations:string[][], values:number[], queries:string[][]):number[] {
  let valueMaps:Array<Map<string, number>> = []
  let used:Set<number> = new Set<number>()
  function dp(a:string,value:number,valueMap:Map<string, number>){
    for (let i = 0; i < equations.length; i++) {
      if (!used.has(i)){
        if (equations[i][0]===a){
          used.add(i);
          let t = value/values[i];
          valueMap.set(equations[i][1],t)
          dp(equations[i][1],t,valueMap)
        } else if (equations[i][1]===a){
          used.add(i);
          let t = value*values[i];
          valueMap.set(equations[i][0],t)
          dp(equations[i][0],t,valueMap)
        }
      }
    }
  }
  let p:number = 0;
  while (used.size!==equations.length){
    if (!used.has(p)){
      let valueMap:Map<string, number> = new Map<string, number>();
      let heap = equations[ p ];
      valueMap.set(heap[ 0 ], 1);
      valueMap.set(heap[ 1 ], 1/values[ p ]);
      used.add(0);
      dp(heap[ 1 ], 1/values[ p ],valueMap);
      dp(heap[ 0 ], 1,valueMap);
      valueMaps.push(valueMap)
    }
    p++
  }
  let result:number[]=[];
  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j < valueMaps.length; j++) {
      const valueMap = valueMaps[j]
      const a = valueMap.get(queries[i][0]);
      const b = valueMap.get(queries[i][1]);
      if (a!==undefined&&b!==undefined){
        result.push(Math.round(a/b*1_000_00)/1_000_00);
        break;
      } else if (a!==undefined||b!==undefined) {
        result.push(-1);
        break;
      } else if (j===valueMaps.length-1){
        result.push(-1)
      }
    }
  }
  return result;
}
