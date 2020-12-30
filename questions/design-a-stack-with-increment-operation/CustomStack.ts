export default class CustomStack {
  stack:number[]=[];
  maxSize:number;
  count:number = 0;
  constructor(maxSize: number) {
    this.maxSize = maxSize
  }

  push(x: number): void {
    if (this.count<this.maxSize){
      this.stack.push(x);
      this.count++;
    }
  }

  pop(): number {
    if (this.count>0){
      this.count--;
      return <number>this.stack.pop()
    } else {
      return -1
    }
  }

  increment(k: number, val: number): void {
    k = Math.min(this.count,k);
    for (let i = 0; i < k; i++) {
      this.stack[i]+=val
    }
  }
}
