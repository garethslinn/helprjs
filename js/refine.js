// refine(people,'age', '58);
// return only objects that match criteria

export function refine(arr, key, value) {
    return arr.filter((item) => item[key] === value);
}



