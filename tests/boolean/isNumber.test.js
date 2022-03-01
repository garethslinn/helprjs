import { isNumber } from '../../dist/index.js';

describe('isNumber', () => {
	const result = isNumber(1);

	it('is isNumber if true', () => {
		expect(result).toBe(true);
	});
});
