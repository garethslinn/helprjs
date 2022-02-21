// getAverage([1, 2, 3, 4, 4, 4]));
// 3
export function getAverage(acc: number[]) {
    return acc.reduce((acc, currentValue) => acc + currentValue) / acc.length;
}

