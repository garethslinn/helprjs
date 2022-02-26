import { removeFalsy } from '../dist/index.js';

describe('removeFalsey', () => {

    const arr = [
        { item: true },{ item: false },{ item: 0 },{ item: -0 },{ item: 1 },{ item: 0n },{ item: '' },{ item: null },{ item: undefined },
    ]

    const result = removeFalsy(arr, 'item').sort();

    test('array has the length of 9', () => {
        expect(arr.length).toBe(9);
    });

    test('array has the length of 2', () => {
        expect(result.length).toBe(2);
    });

    test('first item is true', () => {
        expect(result[0].item).toBe(true);
    });

    test('second item is 1', () => {
        expect(result[1].item).toBe(1);
    });
});