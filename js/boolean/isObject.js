export function isObject(val) {
    const item = Object.prototype.toString.call(val)
        .replace(/^\[object\s+([a-z]+)\]$/i, '$1')
        .toLowerCase();
    return item === 'object';
}