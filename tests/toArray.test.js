import { toArray } from '../dist/index.js';
import { people } from '../tests/peopleObject.js';

describe('toArray', () => {
	const result = toArray(people, 'age');

	test('is an array', () => {
		expect(Array.isArray(result)).toBe(true);
	});

	it('matches if the actual array does contains the expected elements', () => {
		expect(result).toEqual(
			expect.arrayContaining([
				'61',
				'55',
				'60',
				'33',
				'47',
				'24',
				'58',
			])
		);
	});
});
