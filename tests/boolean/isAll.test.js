import { isAll } from '../../dist/index.js';
import { people } from '../peopleObject.js';

describe('isAll', () => {
	const isBelow = (currentValue) => currentValue < 99;
	const result = isAll(people, 'age', isBelow);

	it('has a value of 3', () => {
		expect(result).toBe(true);
	});
});
