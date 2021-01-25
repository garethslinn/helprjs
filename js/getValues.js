// getValues(people, 'firstName');
// ["John", "John", "Brenda", "Sally", "June", "Jack", "Jack"]

export function getValues(collection, field) {
    return collection.map(function (item) {
        return item[field];
    });
};

getValues(people, 'firstName');