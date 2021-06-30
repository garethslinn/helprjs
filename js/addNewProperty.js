// addNewProperty(people, 'registered', true);

export function addNewProperty(arr, key, value) {
    return arr.map(item => Object.assign({}, {...item, [key]: value}));
}
