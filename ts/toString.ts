// toString(people, 'id');

export const toString = (arr: [], key: string) => arr.map((item: any) => ({
    ...item,
    [key]: item[key].toString()
}))


