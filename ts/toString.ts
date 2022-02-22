// toString(people, 'id');

export const toString = (arr: [], key: string) => {
    return arr.map((item: any) => ({
        ...item,
        [key]: item[key].toString()
    }));
}


