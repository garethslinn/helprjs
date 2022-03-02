import { capitalise } from '../../dist/index.js';

describe('capitalise', () => {
	const result = capitalise('hello world');

	test('first letter of first world to be a capital letter', () => {
		expect(result).toBe('Hello world');
	});
});
