import { isBigint } from '../../dist/index.js';

describe('isBigint', () => {
	const result = isBigint(9_007_199_254_740_991n);

	it('is Bigint if true', () => {
		expect(result).toBe(true);
	});
});
