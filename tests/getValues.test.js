import { getValues } from '../dist/index.js';

const ages = [{ age: 53 }, { age: 50 }, { age: 51 }];

describe('getValues', () => {
	const result = getValues(ages, 'age');
	test('get value is correct', () => {
		expect(result[0]).toBe(53);
		expect(result[1]).toBe(50);
		expect(result[2]).toBe(51);
	});
	test('get 3 results', () => {
		expect(result.length).toBe(3);
	});
});
