import { toTruncate } from '../dist/index.js';

export const text = [
	{
		id: 1,
		description:
			'After setting up this configuration, Prettier makes sure that only single quotes are used and that the line length is set to the given number of characters.',
	},
];

describe('toTruncate', () => {
	const result = toTruncate(text, 'description', 5);

	it('matches if the actual array that contains an object with the correct key values', () => {
		expect(result).toEqual(
			expect.arrayContaining([
				{
					id: 1,
					description: 'After...',
				},
			])
		);
	});
});
