// const newArray = removeDuplicates(people, 'firstName');
// console.log("remaing objects: " + JSON.stringify(newArray));

export function removeDuplicates(arr, key) {
    const newArray = [];
    const obj  = {};
    for(let i in arr) {
        obj[arr[i][key]] = arr[i];
    }
    for(i in obj) {
        newArray.push(obj[i]);
    }
    return newArray;
}
