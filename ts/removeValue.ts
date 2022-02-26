// removeValue(people,'firstName', 'John');
// remove all objects that have this value
// Note: this is not case sensitive
export function removeValue(arr: [], key: string, value: any) {
    return arr.filter(item => item[key] !== value);
};




