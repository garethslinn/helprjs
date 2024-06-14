// findAllDuplicates.test.ts

import { findAllDuplicates } from './findAllDuplicates';

interface Person {
	id: number;
	firstName: string;
	secondName: string;
	age: string | number;
	status: number | boolean | null | undefined;
}

describe('findAllDuplicates', () => {
	it('should return an array of duplicate entries', () => {
		const people: Person[] = [
			{ id: 1, firstName: "John", secondName: "Smith", age: "61", status: 1 },
			{ id: 2, firstName: "John", secondName: "West", age: "55", status: true },
			{ id: 3, firstName: "Brenda", secondName: "Holt", age: "60", status: false },
			{ id: 4, firstName: "Sally", secondName: "Brampton", age: "33", status: undefined },
			{ id: 5, firstName: "June", secondName: "Chester", age: "47", status: NaN },
			{ id: 6, firstName: "Jack", secondName: "Carter", age: "24", status: null },
			{ id: 7, firstName: "Jack", secondName: "Foster", age: "58", status: 0 },
			{ id: 7, firstName: "Jack", secondName: "Foster", age: "58", status: 0 },
			{ id: 7, firstName: "Jack", secondName: "Foster", age: "58", status: 0 },
		];

		const expectedDuplicates: Person[] = [
			{ id: 7, firstName: "Jack", secondName: "Foster", age: "58", status: 0 },
			{ id: 7, firstName: "Jack", secondName: "Foster", age: "58", status: 0 },
			{ id: 7, firstName: "Jack", secondName: "Foster", age: "58", status: 0 },
		];

		const result = findAllDuplicates(people);
		expect(result).toEqual(expectedDuplicates);
	});

	it('should return an empty array when there are no duplicates', () => {
		const people: Person[] = [
			{ id: 1, firstName: "John", secondName: "Smith", age: "61", status: 1 },
			{ id: 2, firstName: "John", secondName: "West", age: "55", status: true },
			{ id: 3, firstName: "Brenda", secondName: "Holt", age: "60", status: false },
		];

		const expectedDuplicates: Person[] = [];

		const result = findAllDuplicates(people);
		expect(result).toEqual(expectedDuplicates);
	});
});
