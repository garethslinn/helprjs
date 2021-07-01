// sortByKey(people, 'age');

export const sortByKey = (arr, key) => {
    return arr.sort( (a,b) => a[key] - b[key] );
}


