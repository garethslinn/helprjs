// setAllValues(people, 'age', '25');

export function setAllValues(obj, key, value) {
    return obj.map(item => Object.assign({}, {...item, [key]: value}));
}

