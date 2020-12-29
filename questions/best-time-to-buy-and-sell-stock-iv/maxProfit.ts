export default function maxProfit (k:number, prices:number[]):number {
  const length = prices.length
  if (length === 0) return 0;
  k = Math.min(k, Math.floor(length / 2));
  let buy:Array<number> = new Array<number>(k+1).fill(-Infinity);
  let sell:Array<number> = new Array<number>(k+1).fill(-Infinity);
  buy[0] = -prices[0];
  sell[0] = 0;
  for (let i=1;i<length;i++){
    buy[0]=Math.max(buy[0],sell[0]-prices[i]);
    for (let j=1;j<k+1;j++){
      buy[j] = Math.max(buy[j],sell[j]-prices[i]);
      sell[j] = Math.max(sell[j],buy[j-1]+prices[i])
    }
  }
  return Math.max.apply(null,sell)
}
