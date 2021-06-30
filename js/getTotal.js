// getTotal(people, 'age');
// 338

export function getTotal(arr, key) {
    return arr.reduce((acc, obj) => { return acc + parseInt(obj[key]); }, 0);
}