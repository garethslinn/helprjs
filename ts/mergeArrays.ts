// mergeArrays(people,people2,key);
export function mergeArrays(arr1: [], arr2: [], key: string) {
   const arr = [...arr1, ...arr2]; // add both arrays
   //@ts-ignore
   return [...new Map(arr.map(item => [item[key], item])).values()]; // remove duplicates
}

