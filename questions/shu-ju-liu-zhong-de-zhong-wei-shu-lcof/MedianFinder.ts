// 插入排序
export default class MedianFinder {
  middle:number = -.5;
  nums:number[] = []

  constructor () {

  }

  addNum (num:number):void {
    this.middle += 0.5;
    for (let i = 0; i < this.nums.length; i++) {
      if (this.nums[ i ] > num) {
        this.nums.splice(i, 0, num);
        return
      }
    }
    this.nums.push(num)
  }

  findMedian ():number {
    return (this.nums[ Math.floor(this.middle) ] + this.nums[ Math.ceil(this.middle) ]) / 2
  }
}
/**
 * 平衡树
 */
// export default class MedianFinder {
//   //大数堆的最小值
//   bigger:number[] =  [Number.MAX_SAFE_INTEGER];
//   //小数堆的最大值
//   smaller:number[] = [-Number.MAX_SAFE_INTEGER];
//   bigCount:number = 0;
//   smallCount:number = 0;
//
//   get middle ():number {
//     if (this.bigCount > this.smallCount) {
//       return this.bigger[0]
//     } else {
//       return (this.bigger[0] + this.smaller[0]) / 2
//     }
//   };
//
//   constructor () {
//
//   }
//
//   addNum (num:number):void {
//     //  新的数比中位数大
//     if (num > this.middle) {
//       if (this.bigger[0] > num) {
//         this.smaller = this.bigger;
//         this.bigger = num;
//         this.smallCount++
//       } else {
//         this.bigCount++;
//       }
//     } else {
//       if (num < this.smaller) {
//         this.bigger = this.smaller;
//         this.smaller = num;
//         this.bigCount++;
//       }else {
//         this.smallCount++;
//       }
//     }
//   }
//
//   findMedian ():number {
//     return this.middle
//   }
// }
