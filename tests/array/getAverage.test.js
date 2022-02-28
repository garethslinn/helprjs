import { getAverage } from '../../dist/index.js';

describe('getAverage', () => {
	const result = getAverage([1, 2, 3, 4, 4, 4]);

	it('matches if the actual array that contains an object with the correct key values', () => {
		expect(result).toBe(3);
	});
});
