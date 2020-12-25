export default function findTheDifference (s:string, t:string):string {
	const TLength = t.length
	let set:Array<string> = new Array<string>()
	for (let i = 0; i < TLength; i++) {
		set.push(t[ i ])
	}
	const SArrayLength = s.length;
	for (let i = 0; i < SArrayLength; i++) {
		const si = s[ i ]
		for (let j = 0; j < set.length; j++) {
			if (set[ j ] === si) {
				set.splice(j, 1)
				break
			}
		}
	}
	return set[0]
}
