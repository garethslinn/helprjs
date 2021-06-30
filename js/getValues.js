// getValues(people, 'firstName');
// ["John", "John", "Brenda", "Sally", "June", "Jack", "Jack"]

export function getValues(obj, field) {
    return obj.map(function (item) {
        return item[field];
    });
};

getValues(people, 'firstName');