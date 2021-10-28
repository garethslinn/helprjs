// isAll(people,'age');
// do all values match the criteria?

export function isAll(arr, key, fnc) {
    const _arr = [];
    arr.forEach((item) => {
        _arr.push(item[key]);
    })
    return _arr.every(fnc);
}

// const isBelow = (currentValue) => currentValue < 99;
//
// const result = isAll(people, 'age', isBelow)
//
// console.log('result', result)

