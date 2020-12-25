import maxDepth from "./maxDepth";
import Node from "../Node";

test('test1',()=>{
	const root = new Node(1,[
		new Node(3,[new Node(5),new Node(6)]),
		new Node(2),
		new Node(4)
	])
	expect(maxDepth(root)).toBe(3)
})
test('test2',()=>{
	expect(maxDepth()).toBe(0)
})
