// addNewProperty(people, 'registered', true);
export function addNewProperty(arr: [], key: string, value: any) {
    return arr.map((item: any) => Object.assign({}, {...item, [key]: value}));
}


