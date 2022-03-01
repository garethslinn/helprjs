import { isString } from '../../dist/index.js';

describe('isString ', () => {
	const result = isString('test');

	it('is isString if true', () => {
		expect(result).toBe(true);
	});
});
