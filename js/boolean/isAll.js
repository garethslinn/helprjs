// isAll(people,'age',fnc);
// do all values match the criteria?

export function isAll(arr, key, fnc) {
    const _arr = [];
    arr.forEach((item) => {
        _arr.push(item[key]);
    })
    return _arr.every(fnc);
}

