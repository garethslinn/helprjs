import { getEven } from '../dist/index.js';

const ages = [
    { age: 53 },{ age: 50 },{ age: 51 }
]

describe('getEven', () => {
    test('all numbers are even', () => {
    
        const result = getEven(ages, 'age');
        expect(result[0].age).toBe(50);
    });
});
