import { randomOrder } from '../dist/index.js';

const obj = [
    { count: 0 },
    { count: 1 },
    { count: 2 },
    { count: 3 },
    { count: 4 },
    { count: 5 },
    { count: 6 },
    { count: 7 },
    { count: 8 },
    { count: 9 },
    { count: 10 }
]

describe('randomOrder', () => {

    const arr1 = [];
    const arr2 = [];
    const obj2 = randomOrder(obj);

    obj.forEach((item, index) => {
        arr1.push(item.count === index);
    })

    obj2.forEach((item, index) => {
        arr2.push(item.count === index);
    })

    const isTrue = jest.fn(item => item === true);

    test('objects are in the same order', () => {
        expect(arr1.every(isTrue)).toBe(true);
    });

    test('objects are not in the same order', () => {
        expect(arr2.every(isTrue)).toBe(false);
    });
});
