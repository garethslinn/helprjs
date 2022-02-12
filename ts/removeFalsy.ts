// removeFalsy(people,'age');
// remove all objects that have falsy value
export function removeFalsy(arr: [], key: string) {
    return arr.filter(item => !!item[key]);
};



