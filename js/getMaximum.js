// getMaximum(people,'age');
// 61
export function getMaximum(arr, key) {
    const max = Math.max.apply(null, arr.map(function(item) {
        return item[key];
    }));
    return max;
}



