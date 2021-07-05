// Useage: intersectArrays([0,1,2,3,4],[0,1,2,5,6])
// [0,1,2]

export function intersectArrays(arr1, arr2) {
    return [...new Set(arr1)].filter(item => arr2.includes(item));
}

