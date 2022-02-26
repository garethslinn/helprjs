import { removeDuplicates } from '../dist/index.js';

const arr = [{ age: 20 }, { age: 30 }, { age: 30 }, { age: 30 }];

describe('removeDuplicates', () => {
	const result = removeDuplicates(arr, 'age');

	test('array is the expected size of 2', () => {
		expect(result.length).toBe(2);
	});
});
