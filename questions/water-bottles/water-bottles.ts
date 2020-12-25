export default function numWaterBottles (numBottles:number, numExchange:number):number {
	let totalDrank:number = 0;
	let emptyBottles:number = 0
	do {
		totalDrank += numBottles
		emptyBottles += numBottles;
		numBottles = Math.floor(emptyBottles / numExchange);
		emptyBottles = emptyBottles % numExchange
	} while (numBottles !== 0)
	return totalDrank
}
