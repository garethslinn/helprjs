// sortByKey(people, 'age', 'desc');

export const sortByKey = (arr: [], key: string, desc: string) => {
    if (desc) {
        return arr.sort((a: number | string, b: number | string) => b[key].localeCompare(a[key]))
    }
    return arr.sort((a: number | string, b: number | string) => a[key].localeCompare(b[key]))
}

