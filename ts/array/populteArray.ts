// Useage: populateArray(0,20,4)
// Output: [4,8,12,16,20]

export function populateArray(min: any, max: number, incriment: any){
    const arr = [];
    for(let i = min; i <= max; i += incriment){
        arr.push(i);
    }
    return arr;
}

