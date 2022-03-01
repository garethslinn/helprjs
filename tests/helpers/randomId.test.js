import { randomId } from '../../dist/index.js';

describe('randomId', () => {
	const result = randomId();

	it('is randomId if true', () => {
		expect(result.length).not.toBe(0);
	});
});
