// isPresent(people,'age', fnc);
// does at least one value match the criteria?

export function isPresent(arr: any[], key: string | number, fnc: (value: any, index: number, array // does at least one value match the criteria?
        : any[]) => unknown) {
    const _arr: any[] = [];
    arr.forEach((item: { [x: string]: any; }) => {
        _arr.push(item[key]);
    });
    return _arr.some(fnc);
}
