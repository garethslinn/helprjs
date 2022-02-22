import { addNewProperty } from '../dist/index.js';
import { people } from '../tests/peopleObject.js'

describe('addNewProperty', () => {
    test('original object does not contain registered', () => {
        expect(people[0].registered).toBe(undefined);
    });
    test('transformed object contains registered', () => {
        const result = addNewProperty(people, 'registered', true)
        expect(result[0].registered).toBe(true);
    });
});