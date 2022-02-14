// getTotal(people, 'age');
// 338

export function getTotal(arr: any[], key: string | number) {
    return arr.reduce((acc: number, currentValue: { [x: string]: string; }) => acc + parseInt(currentValue[key]), 0);
}
