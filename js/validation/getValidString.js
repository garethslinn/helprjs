// getValidString(people, 'firstName', 5, 99)

export function getValidString(arr, key, min, max) {
    return arr.filter(item => item[key] === item[key] && item[key].length >= min && item[key].length <= max);
}



