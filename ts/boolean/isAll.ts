// isAll(people,'age',fnc);
// do all values match the criteria?
export function isAll(arr: any[], key: string | number, fnc: (value: any, index: number,
        // do all values match the criteria?
        array: any[]) => value is any) {
    const _arr: any[] = [];
    arr.forEach((item) => {
        _arr.push(item[key]);
    })
    return _arr.every(fnc);
}


