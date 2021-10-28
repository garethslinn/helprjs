// isPresent(people,'age', fnc);
// does at least one value match the criteria?

export function isPresent(arr, key, fnc) {
    const _arr = [];
    arr.forEach((item) => {
        _arr.push(item[key]);
    });
    return _arr.some(fnc);
}
