import { refine } from '../dist/index.js';

describe('refine', () => {

    const arr = [
        { age: 20 },{ age: 30 },{ age: 40 },{ age: 50 },{ age: 60 }
    ]

    const result = refine(arr, 'age', 40);

    test('result contains 1 object', () => {
        expect(result.length).toBe(1);
    });

    test('age value is 40', () => {
        expect(result[0].age).toBe(40);
    });
});