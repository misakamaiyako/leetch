export default function getLastMoment(n: number, left: number[], right: number[]): number {
	const lMax = Math.max.apply(null,left)
	const rMin = Math.min.apply(null,right)
	if (lMax===undefined){
		return n-rMin
	}
	if (rMin===undefined){
		return lMax
	}
	return Math.max(lMax,n-rMin)
}
