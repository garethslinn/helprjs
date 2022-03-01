import { isArray } from '../../dist/index.js';

describe('isArray', () => {
	const result = isArray([1, 2, 3]);

	it('is array if true', () => {
		expect(result).toBe(true);
	});
});
