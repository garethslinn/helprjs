import { toLower } from '../dist/index.js';

export const people = [
	{
		id: 1,
		firstName: 'JOHN',
		status: 1,
	},
];

describe('toLower', () => {
	const result = toLower(people, 'firstName');

	it('matches if the actual array that contains an object with the correct key values', () => {
		expect(result).toEqual(
			expect.arrayContaining([
				{
					id: 1,
					firstName: 'john',
					status: 1,
				},
			])
		);
	});
});
