export default function atMostNGivenDigitSet(digits: string[], n: number): number {
  const max = String(n);
  const length = max.length;
  const digitsCount = digits.length;
  let count:number = 0;
  let lastBiggest:string = '';
  // if (max[0]!=='1')
  for (let i = 0; i < length; i++) {
    let number = max[i];
    let j = 0;
    if (lastBiggest<max[i-1]||lastBiggest===undefined){
      count = count*Math.pow(digitsCount,length-i);
      break;
    }
    for (;j < digitsCount; j++) {
      if (digits[j]>number){
        break;
      }
    }
    if(j==0&&i===0){
      break;
    }
    if (lastBiggest===max[i-1]){
      count = (count-1)*digitsCount+j;
    } else {
      count = count*digitsCount+j;
    }
    lastBiggest = digits[j-1]
  }
  for (let i = 1; i < length; i++) {
    count+=Math.pow(digitsCount,i)
  }
  return count;
}
