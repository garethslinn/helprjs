// Useage: uniqueArray(["one",1,1,2,3,"two","three","four","one","two"])
// ["one", 1, 2, 3, "two", "three", "four"]

export function uniqueArray(arr: Iterable<unknown>) {
    return Array.from(new Set(arr));
}

