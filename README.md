# helpr

A small collection of useful methods for manipulating object arrays with added helpers

## Object Arrays

## Example array of objects
```
const people = [
    { id: 1, firstName: 'John', secondName: 'Smith', age: '61', status: 1 },
    { id: 2, firstName: 'John', secondName: 'West', age: '55', status: true },
    { id: 3, firstName: 'Brenda', secondName: 'Holt', age: '60', status: false },
    { id: 4, firstName: 'Sally', secondName: 'Brampton', age: '33', status: undefined },
    { id: 5, firstName: 'June', secondName: 'Chester', age: '47', status: NaN },
    { id: 6, firstName: 'Jack', secondName: 'Carter', age: '24', status: null },
    { id: 7, firstName: 'Jack', secondName: 'Foster', age: '58', status: 0 }
];
```

## removeDuplicates
```
const newArray = removeDuplicates(people, 'firstName');
console.log("remaining objects: " + JSON.stringify(newArray));
```

## populateArray
```
populateArray(1,20,4)
Output: [4,8,12,16,20]
```

## groupByKey
```
groupByKey(people, 'firstName')
{John: Array(2), Brenda: Array(1), Sally: Array(1), June: Array(1), Jack: Array(2)}
```

## getValues
```
getValues(people, 'firstName');
["John", "John", "Brenda", "Sally", "June", "Jack", "Jack"]
```

## setAllValues
```
setAllValues(people, 'age', '25');
(sets all ages to 25)
```

### getMinimum
```
getMinimum(people,'age');
24
```

### getMaximum
```
getMaximum(people,'age');
61
```

### getOdd
```
getOdd(people,'age');
returns objects containing only odd values
```

### getEven
```
getEven(people,'age');
returns objects containing only even values
```

### emptyArray
```
emptyArray(people);
[]
```

### mergeArrays
```
mergeArrays(people,people2); 
use a 2nd array to merge with first array
```

### removeValue
```
removeValue(people,'firstName', 'John');
remove all objects that have this value
Note: this is not case-asensitive
```

### removeFalsy
```
removeFalsy(people, 'status');
removes all objects containing falsy values
```

### addNewProperty
```
addNewProperty(people, 'registered', true)
adds new key value to all objects
```

### keyToArray
```
keyToArray(people, 'age');
returns array of all values for that key
```

### getTotal
```
getTotal(people, 'age');
returns sum total
```

### sortByKey
```
sortByKey(people, 'age');
returns object in age order
```

### countObjects
```
countObjects(people);
7
```

### countKeys
```
countKeys({a:1, b:2, c:3})
3
```

### randomOrder
```
randomOrder(people);
returns randomly ordered array
```

## Helpers

### typeOf
```
typeOf(value);

// typeOf(/^.g/); returns "regex"
// typeOf(1); returns "number"
// typeOf([1,2,3]); returns "array"
// typeOf({x: 1}); returns "object"
```



