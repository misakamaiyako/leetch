export default function largeGroupPositions(s: string): number[][] {
  if (s.length<3){
    return [];
  }
  let result:number[][] = [];
  let target:string = s[0];
  let start:number = 0;
  s+='0';
  for (let i = 1; i < s.length; i++) {
    if (s[i]!==target){
      if (i-start>=3){
        result.push([start,i-1])
      }
      start = i;
      target = s[i];
    }
  }
  return result;
}
