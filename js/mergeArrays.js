// mergeArrays(people,people2);

function mergeArrays(arr1, arr2) {
   return result = [arr1, arr2].reduce((a, b) => a.map((c, i) => Object.assign({}, c, b[i])));
}

