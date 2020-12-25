import zigzagLevelOrder from './zigzagLevelOrder'
import TreeNode from "../TreeNode";

test('1',()=>{
  const tree = new TreeNode(3,new TreeNode(9),new TreeNode(20,new TreeNode(15),new TreeNode(7)))
  expect(zigzagLevelOrder(tree)).toStrictEqual([
    [3],
    [20,9],
    [15,7]
  ])
})
test('2',()=>{
  const tree = new TreeNode(1,
    new TreeNode(2,new TreeNode(4)),
    new TreeNode(3,null,new TreeNode(5)))
  expect(zigzagLevelOrder(tree)).toStrictEqual([[1],[3,2],[4,5]])
})
