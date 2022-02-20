// Useage: arrayToObject(["Mike","Jones",34,true])
// pass in an array of values
// Returns {0: 'Mike', 1: 'Jones', 2: 34, 3: true}

// Useage: arrayToObject(["Mike","Jones",34,true], ["firstName", "lastName","age","registered"])
// pass in an array of values and custom keys
// Returns {firstName: 'Mike', lastName: 'Jones', age: 34, registered: true}

export const arrayToObject = ( values: [], keys: [] ) => {
    const obj: any = {};

    for (let i = 0; i < values.length; i++) {
        const key = (keys !== undefined) ? keys[i] : i;
        obj[key] = values[i];
    }
    return obj
}

