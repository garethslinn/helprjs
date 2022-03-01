import { isUndefined } from '../../dist/index.js';

describe('isUndefined', () => {
	const result = isUndefined(undefined);

	it('is isUndefined if true', () => {
		expect(result).toBe(true);
	});
});
