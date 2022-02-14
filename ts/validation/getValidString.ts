// getValidString(people, 'firstName', 5, 99)

export function getValidString(arr: any[], key: string | number, min: number, max: number) {
    return arr.filter((item: { [x: string]: string | any[]; }) => item[key] === item[key] && item[key].length >= min && item[key].length <= max);
}



