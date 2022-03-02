import { getValidString } from '../../dist/index.js';

describe('getValidString', () => {
	const result = getValidString(
		[
			{ id: 1, words: 'This is a test' },
			{ id: 2, words: 'This is another test' },
			{ id: 3, words: 'This is a test that has more words' },
			{ id: 4, words: 'This is' },
		],
		'words',
		1,
		7
	);

	test('array has one object only', () => {
		expect(result.length).toBe(1);
	});

	it('matches if the actual object does contain expected array', () => {
		expect(result).toEqual(
			expect.arrayContaining([{ id: 4, words: 'This is' }])
		);
	});
});
