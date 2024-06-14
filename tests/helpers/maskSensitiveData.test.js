import { maskSensitiveData } from '../../dist/index.js';
describe('maskSensitiveData', () => {
	it('should mask the specified fields', () => {
		const people = [
			{ id: 1, firstName: 'John', secondName: 'Smith', age: '61', status: 1 },
			{ id: 2, firstName: 'John', secondName: 'West', age: '55', status: true },
			{ id: 3, firstName: 'Brenda', secondName: 'Holt', age: '60', status: false },
		];

		const masked = maskSensitiveData(people, ['firstName', 'secondName']);

		expect(masked).toEqual([
			{ id: 1, firstName: '****', secondName: '*****', age: '61', status: 1 },
			{ id: 2, firstName: '****', secondName: '****', age: '55', status: true },
			{ id: 3, firstName: '******', secondName: '****', age: '60', status: false },
		]);
	});

	it('should handle undefined and null values correctly', () => {
		const people = [
			{ id: 1, firstName: 'John', secondName: 'Smith', age: '61', status: undefined },
			{ id: 2, firstName: 'Jane', secondName: 'Doe', age: '55', status: null },
		];

		const masked = maskSensitiveData(people, ['status']);

		expect(masked).toEqual([
			{ id: 1, firstName: 'John', secondName: 'Smith', age: '61', status: undefined },
			{ id: 2, firstName: 'Jane', secondName: 'Doe', age: '55', status: null },
		]);
	});

	it('should not alter fields that are not specified', () => {
		const people = [
			{ id: 1, firstName: 'John', secondName: 'Smith', age: '61', status: 1 },
			{ id: 2, firstName: 'John', secondName: 'West', age: '55', status: true },
		];

		const masked = maskSensitiveData(people, ['firstName']);

		expect(masked).toEqual([
			{ id: 1, firstName: '****', secondName: 'Smith', age: '61', status: 1 },
			{ id: 2, firstName: '****', secondName: 'West', age: '55', status: true },
		]);
	});
});
