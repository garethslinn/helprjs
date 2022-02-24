// const newArray = removeDuplicates(people, 'firstName');
// console.log("remaing objects: " + JSON.stringify(newArray));
export function removeDuplicates(arr: [], key: any) {
    return Object.values(arr.reduce((acc,cur)=>Object.assign(acc,{[cur[key]]:cur}),{}))
}