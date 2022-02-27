// deGroup(people, grouped)
// {returns 9 obects}

export function deGroup(groupedArr: any) {

    const _arr: {}[] = [];

    for (const name in groupedArr) {
        groupedArr[name].map((item: {}) => _arr.push({ ...item }));
    }

    return _arr;
}