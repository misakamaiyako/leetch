export default function totalMoney (n:number):number {
  let remain:number = n % 7
  let monday:number = (n - remain) / 7
  let total:number = 0
  // if (monday>0){
  total = 28 * monday + (7 * (monday - 1)) * monday / 2
  // }
  let lastWeakMonday = 1 + monday
  for (let i = 0; i < remain; i++) {
    total += lastWeakMonday + i
  }
  return total
}
