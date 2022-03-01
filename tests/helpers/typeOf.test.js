import { typeOf } from '../../dist/index.js';

// typeOf(/^.g/); returns "regex"
// typeOf(1); returns "number"
// typeOf([1,2,3]); returns "array"
// typeOf({x: 1}); returns "object"

describe('typeOf', () => {
	it('is an array', () => {
		expect(typeOf([])).toBe('array');
	});
	it('is an object', () => {
		expect(typeOf({})).toBe('object');
	});
	it('is a string', () => {
		expect(typeOf('test')).toBe('string');
	});
	it('is a symbol', () => {
		expect(typeOf(Symbol())).toBe('symbol');
	});
	it('is a bigint', () => {
		expect(typeOf(9_007_199_254_740_991n)).toBe('bigint');
	});
	it('is a number', () => {
		expect(typeOf(1)).toBe('number');
	});
});
