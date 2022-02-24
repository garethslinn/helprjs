import { objectToArray } from '../dist/index.js';

describe('objectToArray', () => {
    const result = objectToArray({firstName: 'Mike', lastName: 'Jones', age: 34, registered: true})
    test('is an array', () => {
        expect(Array.isArray(result)).toBe(true);
    });
    test('has array value of Mike', () => {
        expect(result[0]).toBe('Mike');
    });
    test('has array value of Jones', () => {
        expect(result[1]).toBe('Jones');
    });
    test('has array value of 34', () => {
        expect(result[2]).toBe(34);
    });
    test('has array value of true', () => {
        expect(result[3]).toBe(true);
    });
});
