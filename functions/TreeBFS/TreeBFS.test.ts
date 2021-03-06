import Node from "../../questions/Node";

import BFS from "./TreeBFS";
const tree = new Node(1,[
  new Node(2,[new Node(3)]),
  new Node(4),
  new Node(5,[new Node(6,[new Node(7)])])
])
test('1',()=>{
  expect(BFS(tree,6)).toBe(true)
})
test('2',()=>{
  expect(BFS(tree,90)).toBe(false)
})
test('2',()=>{
  expect(BFS(tree,0)).toBe(false)
})
