export default function eatenApples (apples:number[], days:number[]):number {
  let eat:number=0;
  let day:number = 0;
  while (true){
    let amostRust = Infinity;
    let shouldEat = 0;
    let shouldCount = Math.min(day,days.length-1)
    for (let i = 0; i <= shouldCount; i++) {
      if (days[i]-- >0&&apples[i]>0){
        if (amostRust>days[i]){
          amostRust = days[i];
          shouldEat = i
        }
      }
    }
    if (amostRust===Infinity){
      if (day>days.length) return eat
    } else {
      apples[shouldEat]--;
      eat++
    }
    day++
  }
}
