// refine(people,'age', '58');
// return only objects that match criteria
export function refine(arr: [], key: string, value: string | number) {
    return arr.filter((item) => item[key] === value);
}



