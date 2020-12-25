export default function leastBricks (wall:number[][]):number {
	let sides:{ [ key:number ]:number } = {}
	for (let i = 0; i < wall.length; i++) {
		const row = wall[ i ]
		const rowLength = row.length-1
		let pin =0
		for (let j = 0; j < rowLength; j++) {
			pin += row[ j ]
			if (sides[ pin ] !== undefined) {
				sides[ pin ]++
			} else {
				sides[ pin ] = 1
			}
		}
	}
	if (Object.keys(sides).length === 0) {
		return wall.length
	} else {
		const pin = Math.max.apply(null, Object.values(sides))
		return wall.length - pin
	}
}
