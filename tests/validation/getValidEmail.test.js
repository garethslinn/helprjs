import { getValidEmail } from '../../dist/index.js';

describe('getValidEmail', () => {
	const result = getValidEmail(
		[
			{ id: 1, email: 'badEmailDotgmail.com' },
			{ id: 2, email: 'test@validEmail.com' },
			{ id: 3, email: 'test@badEmail' },
		],
		'email'
	);

	test('array has one object only', () => {
		expect(result.length).toBe(1);
	});

	it('matches if the actual object does contain expected array', () => {
		expect(result).toEqual(
			expect.arrayContaining([
				{ id: 2, email: 'test@validEmail.com' },
			])
		);
	});
});
