// setAllValues(people, 'age', '25');

export function setAllValues(arr, key, value) {
    return arr.map(item => Object.assign({}, {...item, [key]: value}));
}

