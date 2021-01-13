import TreeNode from "../../questions/TreeNode";

export default function ArrayToTre(val:number[]):TreeNode{
  let root = new TreeNode(val[0]);
  let flat:Array<TreeNode> = new Array<TreeNode>();
  flat[0] = root;
  for (let i = 1; i < val.length; i++) {
    let p = (i-1)>>>1;
    let t = new TreeNode(val[i])
    flat[i] = t;
    if(i%2===1){
      flat[p].left = t
    } else {
      flat[p].right = t
    }
  }
  return root;
}
