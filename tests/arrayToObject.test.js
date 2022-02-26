import { arrayToObject } from '../dist/index.js';

describe('objectToArray', () => {
    const result1 = arrayToObject(["Mike","Jones",34,true])
    const result2 = arrayToObject(["Mike","Jones",34,true], ["firstName", "lastName","age","registered"])
    
    test('result1 is an object', () => {
        expect(!Array.isArray(result1) && result1 !== null).toBe(true);
    });

    test('result2 is an object', () => {
        expect(!Array.isArray(result2) && result2 !== null).toBe(true);
    });
    
    test('result1 keys match values', () => {
        expect(result1[0] === 'Mike').toBe(true);
        expect(result1[1] === 'Jones').toBe(true);
        expect(result1[2] === 34).toBe(true);
        expect(result1[3] === true).toBe(true);
    });

    test('result2 keys match values', () => {
        expect(result2.firstName === 'Mike').toBe(true);
        expect(result2.lastName === 'Jones').toBe(true);
        expect(result2.age === 34).toBe(true);
        expect(result2.registered === true).toBe(true);
    });
});
