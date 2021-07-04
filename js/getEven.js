// getEven(people,'age');
// get even numbers only

export function getEven(arr, key) {
    return arr.filter(item => item[key] % 2 == 0);
}



