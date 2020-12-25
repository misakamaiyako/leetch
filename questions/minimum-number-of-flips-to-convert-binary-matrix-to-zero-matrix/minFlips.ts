export default function minFlips (mat:number[][]):number {
	let set:Set<string> = new Set<string>()
	let valueChunk:string[] = [ c(mat) ]
	if (valueChunk[ 0 ] === '0') return 0;
	const m = mat.length;
	const n = mat[ 0 ].length;
	const numberCount:number = m * n;
	let nextValue:string[] = [];
	let times:number = 1;
	for (let i = 0; i < valueChunk.length; i++) {
		let valueI = valueChunk[ i ]
		for (let j = 0; j < numberCount; j++) {
			const x = j % n
			const y = Math.floor(j / n)
			let flipped = valueI.split('');
			flip(flipped, j)
			if (x !== 0) {
				flip(flipped, j - 1)
			}
			if (x !== n - 1) {
				flip(flipped, j + 1)
			}
			if (y !== 0) {
				flip(flipped, j - n)
			}
			if (y !== m - 1) {
				flip(flipped, j + n)
			}
			let result = flipped.join('')
			if (to10(result) === '0') {
				return times
			} else if (!set.has(result)) {
				set.add(result);
				nextValue.push(result)
			}
		}
		if (i === valueChunk.length - 1) {
			valueChunk = nextValue
			nextValue = []
			times++
			i = 0
		}
	}
	return -1
}

function to10 (value:string) {
	return parseInt(value, 2).toString()
}

function flip (value:string[], index:number) {
	if (value[ index ] === '0') {
		value[ index ] = '1'
	} else {
		value[ index ] = '0'
	}
}

function c (n:number[][]):string {
	let s:string = ''
	for (let i = 0; i < n.length; i++) {
		s += n[ i ].join('')
	}
	return s
}
