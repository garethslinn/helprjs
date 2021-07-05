// Useage: uniqueArray(["one",1,1,2,3,"two","three","four","one","two"])
// ["one", 1, 2, 3, "two", "three", "four"]

export function uniqueArray(arr) {
    return Array.from(new Set(arr));
}

