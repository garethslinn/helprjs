// toString(people, 'id');

export const toString = (arr, key) => {
    return arr.map(item => ({
        ...item,
        [key]: item[key].toString()
    }));
}


