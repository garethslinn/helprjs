import { uniqueArray } from '../../dist/index.js';

// Useage: uniqueArray(["one",1,1,2,3,"two","three","four","one","two"])
// ["one", 1, 2, 3, "two", "three", "four"]

describe(' uniqueArray', () => {
	const result = uniqueArray([
		'one',
		1,
		1,
		2,
		3,
		'two',
		'three',
		'four',
		'one',
		'two',
	]);

	it('matches if the actual array does contains the expected elements', () => {
		expect(result).toEqual(
			expect.arrayContaining(['one', 1, 2, 3, 'two', 'three', 'four'])
		);
	});
});
