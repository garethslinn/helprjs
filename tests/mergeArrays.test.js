import { mergeArrays } from '../dist/index.js';

const people1 = [
    { id: 1, firstName: "John", secondName: "Smith", age: "61", status: 1 },
    { id: 2, firstName: "John", secondName: "West", age: "55", status: true },
    { id: 3, firstName: "Brenda", secondName: "Holt", age: "60", status: false }
  ];

  const people2 = [
    { id: 4, firstName: "John", secondName: "Smith", age: "61", status: 1 },
    { id: 5, firstName: "John", secondName: "West", age: "55", status: true },
    { id: 6, firstName: "Paul", secondName: "Luck", age: "22", status: false }
  ];

describe('mergeArrays ', () => {
    test('Arrays merged length is 6', () => {
        const result = mergeArrays(people1, people2, "firstName");
        expect(result.length).toBe(6);
    });
});
