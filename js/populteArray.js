// Useage: populateArray(1,20,4)
// Output: [4,8,12,16,20]

export function populateArray(min, max, incriment){
    let arr = [];
    for(let i = min; i <= max; i += incriment){
        arr.push(i);
    }
    return arr;
}

