// getMinimum(people,'age');
// 24

export function getMinimum(arr: any[], key: string | number) {
    const min = Math.min.apply(null, arr.map(function(item: { [x: string]: any; }) {
        return item[key];
    }));
    return min;
}

