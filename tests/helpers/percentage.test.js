import { percentage } from '../../dist/index.js';

describe('percentage', () => {
	const result = percentage(50, 200);

	it('is percentage if true', () => {
		expect(result).toBe(25);
	});
});
