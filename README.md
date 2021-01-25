# useful_functions

A small collection of useful method for manipulating arrays of objects.

## Example array of objects
```const people = [
    { firstName: 'John', secondName: 'Smith', age: '61',  },
    { firstName: 'John', secondName: 'West', age: '55',  },
    { firstName: 'Brenda', secondName: 'Holt', age: '60',  },
    { firstName: 'Sally', secondName: 'Brampton', age: '33',  },
    { firstName: 'June', secondName: 'Chester', age: '47',  },
    { firstName: 'Jack', secondName: 'Carter', age: '24',  },
    { firstName: 'Jack', secondName: 'Foster', age: '58',  }
];
```

## removeDuplicates
```
const newArray = removeDuplicates(people, 'firstName');
console.log("remaing objects: " + JSON.stringify(newArray));
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

## getMinimum
```
getMinimum(people,'age');
24
```

## getMaximum
```
getMaximum(people,'age');
61
```













