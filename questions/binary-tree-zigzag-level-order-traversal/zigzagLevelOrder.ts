import TreeNode from "../TreeNode";

export default function zigzagLevelOrder (root:TreeNode | null):number[][] {
  if (!root) return [];
  let result:number[][] = [];
  let nextTrees:TreeNode[] = [ root ];
  let current:TreeNode[] = [];
  let reverse:boolean = false;
  while (nextTrees.length > 0) {
    current = nextTrees;
    nextTrees = [];
    let thisLeave:number[] = []
    if (reverse) {
      for (let i = current.length - 1; i >= 0; i--) {
        let node = current[ i ]
        thisLeave.push(node.val)
        if (node.right) {
          nextTrees.push(node.right)
        }
        if (node.left) {
          nextTrees.push(node.left)
        }
      }
    } else {
      for (let i = current.length - 1; i >= 0; i--) {
        let node = current[ i ]
        thisLeave.push(node.val)
        if (node.left) {
          nextTrees.push(node.left)
        }
        if (node.right) {
          nextTrees.push(node.right)
        }
      }
    }
    result.push(thisLeave)
    reverse = !reverse
  }
  return result
}
