export default function accountsMerge(accounts: string[][]): string[][] {
  let unionFind = new UnionFind()
  for (let i = 0; i < accounts.length; i++) {
    const user:string = accounts[i][0];
    unionFind.union(user,accounts[i])
  }
  return unionFind.getMerge()
}
class UnionFind{
  private map:Map<string|number,string>;
  private userName:string[];
  constructor () {
    this.map= new Map<string|number, string>();
    this.userName = new Array<string>();
  }
  find(x:string):string|number{
    if (!this.map.has(x)){
      this.map.set(x,x);
    }
    if (x!==this.map.get(x)){
      this.map.set(x,<string>this.find(<string>this.map.get(x)))
    }
    return <string|number>this.map.get(x);
  }
  union(user:string,emails:string[]){
    // let userIndex:number=-1;
    const length = emails.length;
    // const rootEmail = emails[1];
    if (length<2){
      this.find(emails[1])
    } else {
      for (let i = 2; i < length; i++) {
        const rootEmailX = this.find(emails[i-1]);
        const rootEmailY = this.find(emails[i]);
        if (rootEmailX===rootEmailY){
          continue
        }
        // @ts-ignore
        this.map.set(rootEmailX,rootEmailY)
      }
    }
    const root = this.find(emails[1]);
    if (emails.some(t=>t===root)){
      this.map.set(this.userName.length,emails[1]);
      this.userName.push(user)
    }
    // this.find(emails[1])
    // let ex = this.find(emails[1])
    // if (typeof ex!=="number"){
    //   //@ts-ignore
    //   this.map.set(ex,this.userName.length)
    //   this.userName.push(user)
    // }
  }
  getMerge(){
    let result:string[][] = [];

    return result;
  }
}
