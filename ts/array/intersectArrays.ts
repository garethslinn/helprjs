// Useage: intersectArrays([0,1,2,3,4],[0,1,2,5,6])
// [0,1,2]

//@ts-ignore
export function intersectArrays(arr1: Iterable<any>, arr2: string | any[]) {
    //@ts-ignore
    return [...new Set(arr1)].filter((item: any) => arr2.includes(item));
}