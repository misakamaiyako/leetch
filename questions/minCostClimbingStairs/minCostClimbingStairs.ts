export default function minCostClimbingStairs (cost:number[]):number {
	let used:number[] = [0,0];
	const costLength = cost.length;
	for (let i = 2; i <= costLength; i++) {
		used.push(Math.min(used[i-1]+cost[i-1],used[i-2]+cost[i-2]))
	}
	// console.log(used);
	return <number>used.pop()
}
