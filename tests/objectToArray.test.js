import { objectToArray } from '../dist/index.js';

describe('objectToArray', () => {
	const result = objectToArray({
		firstName: 'Mike',
		lastName: 'Jones',
		age: 34,
		registered: true,
	});

	test('is an array', () => {
		expect(Array.isArray(result)).toBe(true);
	});

	it('matches if the actual array does contains the expected elements', () => {
		expect(result).toEqual(
			expect.arrayContaining(['Mike', 'Jones', 34, true])
		);
	});
});
