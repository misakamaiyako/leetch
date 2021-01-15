export default class DiscreteUnionFind{
  map:Map<number,number>;
  count:number;
  constructor () {
    this.map = new Map<number, number>()
    this.count = 0;
  }
  union(x:number,y:number){
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX===rootY){
      return
    }
    this.map.set(rootX,rootY);
    this.count--;
  }
  find(value:number):number{
    if (!this.map.has(value)){
      this.map.set(value,value);
      this.count++;
    }
    if (value!==this.map.get(value)){
      this.map.set(value,this.find(<number>this.map.get(value)))
    }
    return <number>this.map.get(value)
  }
}
