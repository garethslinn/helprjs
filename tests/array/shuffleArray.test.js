import { shuffleArray } from '../../dist/index.js';

describe('shuffleArray', () => {
	const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	const result = shuffleArray(arr);

	it('matches if the actual array does contains the expected elements', () => {
		expect(result).toEqual(expect.arrayContaining(arr));
	});
});
