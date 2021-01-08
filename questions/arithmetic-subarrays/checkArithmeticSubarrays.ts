export default function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
  let result:boolean[]=[];
  for (let i = 0; i < l.length; i++) {
    const start = l[i];
    const end = r[i];
    if (end-start<2){
      result.push(true)
    } else {
      const temp = nums.slice(start,end+1).sort((m,n)=>m-n);
      const step = temp[1]-temp[0];
      let flag:boolean = true
      for (let j = 2; j < temp.length; j++) {
        if (temp[j]-temp[j-1]!==step){
          flag = false;
          break;
        }
      }
      result.push(flag)
    }
  }
  return result;
}
