// getValues(people, 'firstName');
// ["John", "John", "Brenda", "Sally", "June", "Jack", "Jack"]
export function getValues(arr: [], key: string) {
    return arr.map(function (item) {
        return item[key];
    });
};
