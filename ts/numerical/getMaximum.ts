// getMaximum(people,'age');
// 61
export function getMaximum(arr: any[], key: string | number) {
    const max = Math.max.apply(null, arr.map(function(item: { [x: string]: any; }) {
        return item[key];
    }));
    return max;
}



