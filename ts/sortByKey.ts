// sortByKey(people, 'age', 'desc');

export const sortByKey = (arr: [], key: string, desc: string) => {
    if (desc) {
        return arr.sort((a: any[number] | string, b: any[number] | string) => b[key].localeCompare(a[key]))
    }
    return arr.sort((a: any[number] | string, b: any[number] | string) => a[key].localeCompare(b[key]))
}

