import { setAllValues } from '../dist/index.js';

const arr = [
    { a: 1, b: 1 },
    { a: 1, b: 2 },
    { a: 1, b: 3 },
    { a: 1, b: 4 },
]

describe('setAllValues', () => {

    const result = setAllValues(arr, 'b', 5);

    test('array has the length of 4', () => {
        expect(arr.length).toBe(4);
    });

    test('array has the length of 4', () => {
        expect(result.length).toBe(4);
    });

    test('item 1 is 1', () => {
        expect(arr[0].b).toBe(1);
    });

    test('item 2 is 2', () => {
        expect(arr[1].b).toBe(2);
    });

    test('item 3 is 3', () => {
        expect(arr[2].b).toBe(3);
    });

    test('item 4 is 4', () => {
        expect(arr[3].b).toBe(4);
    });

    test('item 1 is 5', () => {
        expect(result[0].b).toBe(5);
    });

    test('item 2 is 5', () => {
        expect(result[1].b).toBe(5);
    });

    test('item 3 is 5', () => {
        expect(result[2].b).toBe(5);
    });

    test('item 4 is 5', () => {
        expect(result[3].b).toBe(5);
    });
});