// setAllValues(people, 'age', '25');

export function setAllValues(arr: [], key: string, value: string | number) {
    return arr.map((item: {})=> Object.assign({}, {...item, [key]: value}));
}

