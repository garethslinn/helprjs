import { reverseArray } from '../../dist/index.js';

describe('reverseArray', () => {
	const result = reverseArray([0, 1, 2, 3, 4, 5, 6]);

	it('matches if the actual array does contains the expected elements', () => {
		expect(result).toEqual(
			expect.arrayContaining([6, 5, 4, 3, 2, 1, 0])
		);
	});
});
