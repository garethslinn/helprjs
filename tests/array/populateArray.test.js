import { populateArray } from '../../dist/index.js';

describe('populateArray', () => {
	const result = populateArray(0, 20, 4);

	it('matches if the actual array does contains the expected elements', () => {
		expect(result).toEqual(
			expect.arrayContaining([4, 8, 12, 16, 20])
		);
	});
});
