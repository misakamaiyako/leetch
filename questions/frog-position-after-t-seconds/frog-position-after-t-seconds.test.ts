import frogPosition from "./frog-position-after-t-seconds";

test('Test1', () => {
	expect(frogPosition(10,
		[ [ 2, 1 ], [ 3, 2 ], [ 4, 2 ], [ 5, 2 ], [ 6, 5 ], [ 7, 1 ], [ 8, 3 ], [ 9, 1 ], [ 10, 1 ] ],
		1,
		9)).toBe(0.25);
});
test('Test2', () => {
	expect(frogPosition(7,
		[[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]],
	2,
	4)).toBe(0.16666666666666666);
});
test('Test3', () => {
	expect(frogPosition(2,
		[[2,1]],
	1,
	2)).toBe(1);
});
