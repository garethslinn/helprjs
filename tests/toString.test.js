import { toString } from '../dist/index.js';

export const people = [
	{
		id: 1,
		firstName: 'John',
		secondName: 'Smith',
		age: 61,
		status: 1,
	},
];

describe('toString', () => {
	const result = toString(people, 'age');

	it('matches if the actual array that contains an object with the correct key values', () => {
		expect(result).toEqual(
			expect.arrayContaining([
				{
					id: 1,
					firstName: 'John',
					secondName: 'Smith',
					age: '61',
					status: 1,
				},
			])
		);
	});
});
