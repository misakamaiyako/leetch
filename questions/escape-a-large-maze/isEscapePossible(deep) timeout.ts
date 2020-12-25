export default function isEscapePossible (blocked:number[][], source:number[], target:number[]):boolean {
	if (blocked.length === 0) {
		return true
	}
	let used:Set<string> = new Set<string>()
	for (let i = 0; i < blocked.length; i++) {
		used.add(blocked[ i ].join())
	}
	let x:number = source[ 0 ]
	let y:number = source[ 1 ]
	const targetX = target[ 0 ]
	const targetY = target[ 1 ]
	let find:boolean = false;

	function go (x1:number, y1:number, moveX:number, moveY:number):boolean {
		if (find) return true;
		const nextX = x1 + moveX
		const nextY = y1 + moveY
		if (nextX < 0) {
			return false
		} else if (nextY <= 0) {
			return false
		} else if (nextX >= 1e6) {
			return false
		} else if (nextY >= 1e6) {
			return false
		} else if (used.has(x1 + ',' + y1)) {
			return false
		} else if (x1 === targetX && y1 === targetY) {
			return true
		} else {
			return go(nextX, nextY, -1, 0) || go(nextX, nextY, 1, 0) || go(nextX, nextY, 0, 1) || go(nextX, nextY, 0, 1)
		}
	}

	return go(x, y, -1, 0) || go(x, y, 1, 0) || go(x, y, 0, 1) || go(x, y, 0, 1)
}
