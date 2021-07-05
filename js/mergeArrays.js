// mergeArrays(people,people2);

export function mergeArrays(arr1, arr2) {
   return [arr1, arr2].reduce((a, b) => a.map((c, i) => Object.assign({}, c, b[i])));
}

