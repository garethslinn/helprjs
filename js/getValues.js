// getValues(people, 'firstName');
// ["John", "John", "Brenda", "Sally", "June", "Jack", "Jack"]

export function getValues(arr, key) {
    return arr.map(function (item) {
        return item[key];
    });
};

getValues(people, 'firstName');