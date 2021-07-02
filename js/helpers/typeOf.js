// typeOf(value)
// typeOf(/^.g/); returns "regex"
// typeOf(1); returns "number"
// typeOf([1,2,3]); returns "array"
// typeOf({x: 1}); returns "object"

export function typeOf(val) {
    return Object.prototype.toString.call(val)
        .replace(/^\[object\s+([a-z]+)\]$/i, '$1')
        .toLowerCase();
}