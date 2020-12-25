export default function multiply (A:number, B:number):number {
	return cacl(Math.max(A, B), Math.min(A, B))
}

function cacl (big:number, small:number):number {
	if (small === 0) return 0
	if (small === 1) return big
	if (small === 2) return big + big

	if (!/[13579]$/.test(small.toString())) {
		return cacl(big, small >> 1) << 1
	} else {
		return big + (cacl(big, small >> 1) << 1)
	}
}
