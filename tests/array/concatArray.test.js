import { concatArray } from '../../dist/index.js';

describe('concatArray', () => {
	const result = concatArray([[1, 2], ['three', 'four'], [5], [6]]);

	it('matches if the actual array does contains the expected elements', () => {
		expect(result).toEqual(
			expect.arrayContaining([1, 2, 'three', 'four', 5, 6])
		);
	});
});
