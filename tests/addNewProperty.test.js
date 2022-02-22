import { addNewProperty } from '../dist/index.js';
import { people } from '../tests/peopleObject.js'

describe('addNewProperty', () => {
    test('added extra key / value', () => {
        const result = addNewProperty(people, 'registered', true)
        expect(result[0].registered).toBe(true);
    });
});