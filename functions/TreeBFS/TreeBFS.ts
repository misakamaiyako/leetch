import Node from "../../questions/Node";

export default function BFS(tree:Node|null,target:number):boolean{
  if (!tree) return false;
  let current:Node[]=[tree];
  let next:Node[]=[];
  while (current.length>0){
    for (let i = 0; i < current.length; i++) {
      if (current[i].val===target){
        return true
      }
      let children = current[i].children;
      if (children){
        for (let j = 0; j < children.length; j++) {
          next.push(children[j])
        }
      }
    }
    current = next;
    next = [];
  }
  return false
}
