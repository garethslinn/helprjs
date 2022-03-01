import { isObject } from '../../dist/index.js';

describe('isObject ', () => {
	const result = isObject({ id: 1 });

	it('is isObject if true', () => {
		expect(result).toBe(true);
	});
});
