import Node from '../../questions/Node';
export default function DPF(tree:Node|null,target:number):boolean{
  if (!tree){
    return false
  }
  if (tree.val===target){
    return true
  }
  if (tree.children.length===0){
    return false
  } else {
    for (let i = 0; i < tree.children.length; i++) {
      if (DPF(tree.children[i],target)){
        return  true
      }
    }
    return false
  }
}
