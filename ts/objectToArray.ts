// Useage: objectToArray({firstName: 'Mike', lastName: 'Jones', age: 34, registered: true})
// pass in an object
// Returns ['Mike', 'Jones', 34, true]

export const objectToArray = ( obj: {} ) => Object.values(obj);