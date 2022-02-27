import { arrayToObject } from '../dist/index.js';

describe('objectToArray', () => {
	const result1 = arrayToObject(['Mike', 'Jones', 34, true]);
	const result2 = arrayToObject(
		['Mike', 'Jones', 34, true],
		['firstName', 'lastName', 'age', 'registered']
	);

	test('result1 is an object', () => {
		expect(!Array.isArray(result1) && result1 !== null).toBe(true);
	});

	test('result2 is an object', () => {
		expect(!Array.isArray(result2) && result2 !== null).toBe(true);
	});

	it('matches if the actual object does contain expected key: value pairs', () => {
		expect(result1).toEqual(
			expect.objectContaining({
				0: 'Mike',
				1: 'Jones',
				2: 34,
				3: true,
			})
		);
	});

	it('matches if the actual object does contain expected key: value pairs', () => {
		expect(result2).toEqual(
			expect.objectContaining({
				firstName: 'Mike',
				lastName: 'Jones',
				age: 34,
				registered: true,
			})
		);
	});
});
