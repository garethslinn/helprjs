// sortByKey(people, 'age', 'desc');

export const sortByKey = (arr, key, desc) => {
    if (desc) {
        return arr.sort((a, b) => b[key].localeCompare(a[key]))
    }
    return arr.sort((a, b) => a[key].localeCompare(b[key]))
}

