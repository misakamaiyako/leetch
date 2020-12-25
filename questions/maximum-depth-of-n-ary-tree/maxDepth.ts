import Node from "../Node";
export default function maxDepth(root?:Node):number{
	if (root){
		let Deep:number = 1;
		function dpf (node:Node,deep:number){
			if (node.children.length===0){
				Deep = Math.max(Deep,deep)
			} else {
				for (let i = 0; i < node.children.length; i++) {
					dpf(node.children[i],deep+1)
				}
			}
		}
		dpf(root,1)
		return Deep;
	} else {
		return 0
	}
}
