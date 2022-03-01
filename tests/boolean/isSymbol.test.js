import { isSymbol } from '../../dist/index.js';

describe('isSymbol', () => {
	const result = isSymbol(Symbol());

	it('is isSymbol if true', () => {
		expect(result).toBe(true);
	});
});
