// addNewProperty(people, 'registered', true);
export function addNewProperty(arr: [], key: string, value: unknown) {
    return arr.map((item: {}) => Object.assign({}, {...item, [key]: value}));
}
