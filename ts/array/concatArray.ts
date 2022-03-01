// Useage: concatArray([ [1,2],["three", "four"],[5],[6] ])
// pass in an array of arrays
// Returns [1,2,"three","four",5,6]

export const concatArray = (arr: []) => [].concat.apply([], arr);
