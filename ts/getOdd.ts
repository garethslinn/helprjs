// getOdd(people,'age');
// get odd numbers only
export function getOdd(arr: [], key: string) {
    return arr.filter(item => item[key] % 2 == 1);
}


