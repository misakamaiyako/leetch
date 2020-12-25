export default function minSubArrayLen (s:number, nums:number[]):number {
	let pin1:number = 0;
	let pin2:number = 0;
	const length = nums.length;
	let resultLength:number = length;
	let count:number = 0;
	while (pin2 !== length) {
		while (count < s && pin1 < length) {
			count += nums[ pin1 ]
			pin1++
		}
		if (count < s && pin2 === 0) {
			return 0
		}
		if (count >= s) {
			resultLength = Math.min(resultLength, pin1 - pin2)
		}
		count -= nums[ pin2 ]
		pin2++
	}
	return resultLength;
}
