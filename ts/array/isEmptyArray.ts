
// isEmptyArray([1,2]);
// false
const isEmptyArray = (arr: []) => Array.isArray(arr) && !(arr.length > 0);
