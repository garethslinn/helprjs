// getMinimum(people,'age');
// 24

export function getMinimum(arr, key) {
    const min = Math.min.apply(null, arr.map(function(item) {
        return item[key];
    }));
    return min;
}

