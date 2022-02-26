import { removeValue } from '../dist/index.js';

describe('removeValue', () => {

    const arr = [
        { a: 1, b: 1 },
        { a: 1, b: 2 },
        { a: 1, b: 3 },
        { a: 1, b: 4 },
    ]

    const result = removeValue(arr, 'b', 4);

    test('array has the length of 4', () => {
        expect(arr.length).toBe(4);
    });

    test('array has the length of 3', () => {
        expect(result.length).toBe(3);
    });

    test('item 1 is 1', () => {
        expect(result[0].b).toBe(1);
    });

    test('item 2 is 2', () => {
        expect(result[1].b).toBe(2);
    });

    test('item 3 is 3', () => {
        expect(result[2].b).toBe(3);
    });
});