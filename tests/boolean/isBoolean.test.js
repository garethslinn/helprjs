import { isBoolean } from '../../dist/index.js';

describe('isBoolean', () => {
	const result = isBoolean(true);

	it('is isBoolean if true', () => {
		expect(result).toBe(true);
	});
});
