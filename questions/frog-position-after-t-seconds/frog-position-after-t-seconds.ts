let status:'normal' | 'end';

class Tree {
	value:number;
	children:Tree[] = [];

	constructor (value:number) {
		this.value = value
	}

	add (parent:number, node:Tree) {
		if (status === "normal") {
			if (this.value === undefined) {
				this.value = parent
				this.children.push(node)
				status = "end"
			} else if (parent === this.value) {
				this.children.push(node)
				status = "end"
			} else {
				for (let i = 0; i < this.children.length; i++) {
					this.children[ i ].add(parent, node)
				}
			}
		}
	}
}


export default function frogPosition (n:number, edges:number[][], t:number, target:number):number {
	let tree:Tree = new Tree(1)
	let unused:number = edges.length;
	let lastFloorValue:number[] = [1]
	while (unused > 0) {
		let nextFloor:number[] = [];
		for (let i = 0; i < lastFloorValue.length; i++) {
			const value = lastFloorValue[i];
			for (let j = 0; j < edges.length; j++) {
				if (edges[j][0]===value){
					status = "normal"
					tree.add(edges[j][0],new Tree(edges[j][1]))
					nextFloor.push(edges[j][1])
					edges.splice(j,1)
					j--
					unused--
				} else if (edges[j][1]===value){
					status = "normal"
					tree.add(edges[j][1],new Tree(edges[j][0]))
					nextFloor.push(edges[j][0])
					edges.splice(j,1)
					j--
					unused--
				}
			}
		}
		lastFloorValue=nextFloor
	}
	let paths:Tree[][] = [ [ tree ] ]
	let possible:number[][] = [ [ 1 ] ]
	for (let i = 1; i <= t; i++) {
		jump(paths, possible)
	}
	const lastTrees:Tree[] = paths.pop() as Tree[]
	const index = lastTrees.findIndex(t => t.value === target)
	return index < 0 ? 0 : (possible.pop() as number[])[ index ]
}

function jump (paths:Tree[][], possible:number[][]) {
	const last = paths[ paths.length - 1 ]
	const lastLength = last.length
	let thisResult:Tree[] = [];
	let thisPossible:number[] = []
	let lastPossible = possible[ possible.length - 1 ]
	for (let i = 0; i < lastLength; i++) {
		const current = last[ i ]
		if (current.children.length === 0) {
			thisResult.push(current)
			thisPossible.push(lastPossible[ i ])
		} else {
			const currentChildren = current.children
			const currentChildrenLength = currentChildren.length
			for (let j = 0; j < currentChildrenLength; j++) {
				thisResult.push(currentChildren[ j ])
				thisPossible.push(lastPossible[ i ] / currentChildrenLength)
			}
		}
	}
	paths.push(thisResult)
	possible.push(thisPossible)
}
