// getTotal(people, 'age');
// 338

export function getTotal(arr, key) {
    return arr.reduce((acc, currentValue) => { return acc + parseInt(currentValue[key]); }, 0);
}
