// toArray(people, 'age');
// ["61","55","60","33","47","24","58"]
export const toArray = (arr: [], key: string) => {
    return arr.map(item => item[key]);
}


