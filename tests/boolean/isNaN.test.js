import { isNaN } from '../../dist/index.js';

describe('isNaN', () => {
	const result = isNaN(NaN);

	it('is isNaN if true', () => {
		expect(result).toBe(true);
	});
});
