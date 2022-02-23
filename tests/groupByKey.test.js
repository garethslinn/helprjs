import { groupByKey } from '../dist/index.js';
import { people } from './peopleObject.js'

describe('groupByKey', () => {
    const result = groupByKey(people, 'firstName');
    test('5 object keys', () => {
        expect(Object.keys(result).length).toBe(5);
    });
    test('All arrays are the correct length', () => {
        expect(result.John.length).toBe(2);
        expect(result.Brenda.length).toBe(1);
        expect(result.Sally.length).toBe(1);
        expect(result.June.length).toBe(1);
        expect(result.Jack.length).toBe(4);
    });
});

