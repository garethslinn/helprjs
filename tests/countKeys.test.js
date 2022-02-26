import { countKeys } from '../dist/index.js';

describe('countKeys', () => {
	test('has 3 keys', () => {
		const result = countKeys({ a: 1, b: 2, c: 3 });
		expect(result).toBe(3);
	});
});
