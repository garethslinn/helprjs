import { addNewProperty } from '../dist/index.js';
import { people } from '../tests/peopleObject.js'

test('addNewProperty: added extra key / value', () => {
    const result = addNewProperty(people, 'registered', 'yes')
    expect(result[0].registered).toBe('yes');
});