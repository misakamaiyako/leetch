export default function maximizeXor(nums: number[], queries: number[][]): number[] {
  let result:number[] = [];
  nums = nums.sort((a,b)=>a-b)
  for (let i = 0; i < queries.length; i++) {
    let max:number = -1;
    const findMax = queries[i][1];
    const xor = queries[i][0]
    for (let j = 0; j < nums.length; j++) {
      let n = nums[j];
      if (n>findMax){
        break
      } else {
        max = Math.max(max,n^xor)
      }
    }
    result.push(max)
  }
  return result
}
