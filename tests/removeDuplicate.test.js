import { removeDuplicates } from '../dist/index.js';

const arr = [{ age: 20 }, { age: 30 }, { age: 30 }, { age: 30 }];

describe('removeDuplicates', () => {
	const result = removeDuplicates(arr, 'age');

	it('matches if the actual object does contain expected key: value pairs', () => {
		expect(result[0]).toEqual(
			expect.objectContaining({
				age: 20,
			})
		);
	});

	it('matches if the actual object does contain expected key: value pairs', () => {
		expect(result[1]).toEqual(
			expect.objectContaining({
				age: 30,
			})
		);
	});

	it('matches if the actual object does not contain expected key: value pairs', () => {
		expect(result[2]).toEqual(
			expect.not.objectContaining({
				age: 30,
			})
		);
	});

	test('array has only two objects', () => {
		expect(result.length).toBe(2);
	});
});
