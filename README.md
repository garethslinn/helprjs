# helpr

A small collection of useful methods for manipulating object arrays with added helpers



## Example array of objects

Most of the examples here make use of this people object.  

```
const people = [
    { id: 1, firstName: 'John', secondName: 'Smith', age: '61', status: 1 },
    { id: 2, firstName: 'John', secondName: 'West', age: '55', status: true },
    { id: 3, firstName: 'Brenda', secondName: 'Holt', age: '60', status: false },
    { id: 4, firstName: 'Sally', secondName: 'Brampton', age: '33', status: undefined },
    { id: 5, firstName: 'June', secondName: 'Chester', age: '47', status: NaN },
    { id: 6, firstName: 'Jack', secondName: 'Carter', age: '24', status: null },
    { id: 7, firstName: 'Jack', secondName: 'Foster', age: '58', status: 0 },
    { id: 7, firstName: 'Jack', secondName: 'Foster', age: '58', status: 0 },
    { id: 7, firstName: 'Jack', secondName: 'Foster', age: '58', status: 0 },
];
```

## Example of use - React example
```
import { getEven } from 'helprjs';

function App() {

  const people = [
    { id: 1, firstName: 'John', secondName: 'Smith', age: '61', status: 1 },
    { id: 2, firstName: 'John', secondName: 'West', age: '55', status: true },
    { id: 3, firstName: 'Brenda', secondName: 'Holt', age: '60', status: false },
    { id: 4, firstName: 'Sally', secondName: 'Brampton', age: '33', status: undefined },
    { id: 5, firstName: 'June', secondName: 'Chester', age: '47', status: NaN },
    { id: 6, firstName: 'Jack', secondName: 'Carter', age: '24', status: null },
    { id: 7, firstName: 'Jack', secondName: 'Foster', age: '58', status: 0 },
    { id: 7, firstName: 'Jack', secondName: 'Foster', age: '58', status: 0 },
    { id: 7, firstName: 'Jack', secondName: 'Foster', age: '58', status: 0 },
  ];

  const result = getEven(people,'age');

  return (
    <div className="App">
      <h1>Users with an even age</h1>
      <table>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Second Name</th>
          <th scope="col">Age</th>
        </tr>
      {result && result.map((item, index) =>
          <tr key={index}>
            <td>{item.firstName}</td>
            <td>{item.secondName}</td>
            <td>{item.age}</td>
          </tr>)
      }
      </table>
    </div>
  );
}

export default App;

```

## Methods

Methods can be grouped into the following categories: 

General : object array manipulation 

Array: array only

Boolean : returns true or false

Helpers : deals with values

Numerical : uses numerical data


## General

#### addNewProperty
```
addNewProperty(people, 'registered', true)
adds new key value to all objects
```

#### countKeys
```
countKeys({a:1, b:2, c:3});
// 3
```

#### getEven
```
getEven(people,'age');
returns objects containing only even values
```

#### getMaximum
```
getMaximum(people,'age');
// 61
```

#### getMinimum
```
getMinimum(people,'age');
// 24
```

#### getOdd
```
getOdd(people,'age');
returns objects containing only odd values
```

#### getTotal
```
getTotal(people, 'age');
returns sum total
```

#### getValues
```
getValues(people, 'firstName');
// ["John", "John", "Brenda", "Sally", "June", "Jack", "Jack"]
```

#### groupByKey
```
groupByKey(people, 'firstName')
// {John: Array(2), Brenda: Array(1), Sally: Array(1), June: Array(1), Jack: Array(2)}
```

#### mergeArrays
```
mergeArrays(people,people2); 
use a 2nd array to merge with first array
```

#### randomOrder
```
randomOrder(people);
returns randomly ordered array
```

#### removeFalsy
```
removeFalsy(people, 'status');
removes all objects containing falsy values
```

#### removeValue
```
removeValue(people,'firstName', 'John');
remove all objects that have this value
Note: 1 and '1' will give a different result, be sure to include quotation marks if targetting a string
```

#### setAllValues
```
setAllValues(people, 'age', '25');
(sets all ages to 25)
```

#### sortByKey
```
sortByKey(people, 'age');
returns object in age order
```

## Array

#### populateArray
```
populateArray(0,20,4)
Output: [4,8,12,16,20]
```

## Boolean

#### isArray
```
isArray([1,2,3]);
// true
```

#### isBigint
```
isBigint(9007199254740991n);
// true
```

#### isBoolean
```
isBoolean(true);
// true
```

#### isNaN
```
isNaN(true);
// true
```

#### isNull
```
isNull(null);
// true
```

#### isNumber
```
isNumber(1);
// true
```

#### isObject
```
isObject({x:1, y:2});
// true
```

#### isString
```
isString('abc'});
// true
```

#### isSymbol
```
isSymbol(Symbol());
// true
```

#### isUndefined
```
isUndefined(undefined);
// true
```

## Helpers

#### typeOf
```
typeOf(value);

// typeOf(1); returns "number"
// typeOf([1,2,3]); returns "array"
// typeOf({x: 1}); returns "object"
```
