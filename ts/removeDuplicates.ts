// const newArray = removeDuplicates(people, 'firstName');
// console.log("remaing objects: " + JSON.stringify(newArray));
export function removeDuplicates(arr: [], key: any) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}
