import { countObjects } from '../dist/index.js';
import { people } from './peopleObject.js'

describe('countObjects', () => {
    test('has 9 objects', () => {
        const result = countObjects(people);
        expect(result).toBe(9);
    });
});
