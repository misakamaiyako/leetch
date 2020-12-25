const mode = (1000000007);
export default class Fancy {
  //记录所有的原始数据
  value:number[] = [];
  //记录所有的操作
  operations:Array<(value:number) => number> = []
  //记录所有的数据应该忽视的操作数量
  ignore:Array<number> = [];

  constructor () {

  }

  append (val:number):void {
    this.ignore.push(this.operations.length);
    this.value.push(val);
  }

  addAll (inc:number):void {
    if (this.operations.length>0&&this.ignore[this.ignore.length-1]!== this.operations.length){
      const lastOperation = this.operations[this.operations.length-1];
      if (lastOperation.name==='A'){
        // 上一次操作也是加且在两次添加数字中间，合并两个连加
        this.operations[this.operations.length-1] = function A (value){return (value+lastOperation(0)+inc)%mode}
        return
      }
    }
    this.operations.push(function A(value) {return (value + inc)});
  }

  multAll (m:number):void {
    if (this.operations.length>0&&this.ignore[this.ignore.length-1]!== this.operations.length) {
      const lastOperation = this.operations[ this.operations.length - 1 ];
      if (lastOperation.name==='M'){
        // 上一次操作也是乘法且在两次添加数字中间，合并两个连乘
        const lastM =  lastOperation(1);
        this.operations[this.operations.length-1] = function M(value){
          let r = value * m * lastM;
            if (r > mode) {
              return r % mode;
            } else {
              return r;
            }
        }
        return
      }
    }
    this.operations.push(function M (value) {
      let r = value * m;
      if (r > mode) {
        return r % mode;
      } else {
        return r;
      }
    });
  }

  getIndex (idx:number):number {
    if (idx >= this.value.length) {
      return -1;
    }
    let b = this.value[ idx ];
    const thisOperations = this.operations;
    const thisOperationsLength = thisOperations.length;
    for (let i = this.ignore[ idx ]; i < thisOperationsLength; i++) {
      b = thisOperations[ i ](b);
    }
    return b
  }
}
// (ax + b)c = axc+bc = fx
// a = fx%x;
// b = fx
// value = a*mode + b
// value + x = a*mode + b + x = a*mode + (b+x)%mode = a* mode + c*mode + d = (a+c)mode + d
// value*x = (a*mode + b)*x = a*mode*x + b*x =  a*mode*x + (c*mode + d) = (a+x+c)mode + d
