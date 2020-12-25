export default function reformatNumber (number:string):string {
	number = number.replace(/[ -]/g, '');
	let result:string = ''
	let shouldLast:number = 0;
	switch (number.length % 3) {
		case 0:
			shouldLast = 0;
			break;
		case 1:
			shouldLast = 4;
			break
		case 2:
			shouldLast = 2;
	}
	const max1 = number.length - shouldLast;
	let i = 0;
	for (; i < max1; result += '-') {
		result += (number[ i ] + number[ i + 1 ] + number[ i + 2 ])
		i += 3
	}
	if (shouldLast === 4) {
		result += number[ i++ ] + number[ i++ ] + '-' + number[ i++ ] + number[ i++ ]
	} else if (shouldLast === 2) {
		result += number[ i++ ] + number[ i++ ]
	} else {
		result = result.substring(0, result.length - 1)
	}
	return result
}
