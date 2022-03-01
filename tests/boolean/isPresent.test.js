import { isPresent } from '../../dist/index.js';
import { people } from '../peopleObject.js';

describe('isPresent ', () => {
	const age = 48;
	const isBelow = (currentValue) => currentValue < age;
	const result = isPresent(people, 'age', isBelow);

	it('is isPresent if true', () => {
		expect(result).toBe(true);
	});
});
