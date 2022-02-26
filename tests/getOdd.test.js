import { getOdd } from '../dist/index.js';

const ages = [{ age: 53 }, { age: 50 }, { age: 51 }];

describe('getOdd', () => {
	test('all numbers are odd', () => {
		const result = getOdd(ages, 'age');
		expect(result[0].age).toBe(53);
	});
});
