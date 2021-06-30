// getEven(people,'age');
// get even numbers only

export function getEven(arr, key) {
    const result = arr.map(function (item) {
        if (parseInt(item[key]) % 2 == 0) {
            return item
        }
    });
    return result.filter(x => x !== undefined);
};



