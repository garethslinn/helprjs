// addNewProperty(people, 'registered', true);

export function addNewProperty(arr: any[], key: any, value: any) {
    return arr.map((item: any) => Object.assign({}, {...item, [key]: value}));
}

