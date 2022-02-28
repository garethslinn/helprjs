import { concatArray } from '../../dist/index.js';

describe('concatArray', () => {
	const result = concatArray([[1, 2], ['three', 'four'], [5], [6]]);

	it('matches if the actual array that contains an object with the correct key values', () => {
		expect(result).toEqual(
			expect.arrayContaining([1, 2, 'three', 'four', 5, 6])
		);
	});
});
