export  function firstUniqChar (s:string):number {
  if (s.length < 2) return s.length - 1;
  let sArray:Array<string> = s.split('');
  let pin:number = -1;
  let sArrayLength = sArray.length
  while (pin<sArrayLength-1){
    pin++;
    let char = sArray[pin];
    if (char!==''){
      let flag:boolean = true;
      for (let i = pin+1; i<sArrayLength; i++) {
        if (sArray[i]===char){
          sArray[i]='';
          flag = false;
          // sArray.splice(i,1)
        }
      }
      if (flag){
        return pin
      }
    }
  }
  return -1
}

export default  function HASHMAP (s:string):number{
  let times:Map<string,number> = new Map<string, number>();
  for (let i=0;i<s.length;i++){
    let char:string = s[i];
    if (times.has(char)){
      // @ts-ignore
      times.set(char,times.get(char)+1)
    } else {
      times.set(char,0)
    }
  }
  let entries = times.entries()
  let value;
  while (!(value=entries.next()).done){
    if (value.value[1]===0){
      return s.indexOf(value.value[0]);
    }
  }
  return -1
}
