import { removeDuplicates } from '../dist/index.js';

describe('removeDuplicates', () => {

    const arr = [
        { age: 20 },{ age: 30 },{ age: 30 },{ age: 30 }
    ]

    const result = removeDuplicates(arr, 'age');

    test('array is the expected size', () => {
        expect(result.length).toBe(2);
    });
});