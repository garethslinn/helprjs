# helprjs

Easy to use collection of useful methods for manipulating object arrays with added helpers

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

#### addNewProperty - [Demo](https://codesandbox.io/s/addnewproperty-y3ch8)
```
addNewProperty(people, 'registered', true)
adds new key value to all objects
```

#### countKeys - [Demo](https://codesandbox.io/s/countkeys-oojbt)
```
countKeys({a:1, b:2, c:3});
// 3
```

#### getEven - [Demo](https://codesandbox.io/s/geteven-fdv6c)
```
getEven(people,'age');
returns objects containing only even values
```

#### getObject - [Demo](https://codesandbox.io/s/suspicious-tu-859vt)
```
getObject(people,2);
returns an object from an array from array key
```

#### getOdd - [Demo](https://codesandbox.io/s/getodd-lsj78)
```
getOdd(people,'age');
returns objects containing only odd values
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

[comment]: <> (#### mergeArrays)

[comment]: <> (```)

[comment]: <> (mergeArrays&#40;people,people2&#41;; )

[comment]: <> (use a 2nd array to merge with first array)

[comment]: <> (```)

#### randomOrder - [Demo](https://codesandbox.io/s/randomorder-9mc74)
```
randomOrder(people);
returns randomly ordered array
```

#### removeFalsy - [Demo](https://codesandbox.io/s/removefalsy-y05sr)
```
removeFalsy(people, 'status');
removes all objects containing falsy values
```

#### removeValue - [Demo](https://codesandbox.io/s/removevalue-2uynr)
```
removeValue(people,'firstName', 'John');
remove all objects that have this value
Note: 1 and '1' will give a different result, be sure to include quotation marks if targetting a string
```

#### setAllValues - [Demo](https://codesandbox.io/s/setallvalues-b61xe)
```
setAllValues(people, 'age', '25');
(sets all values to 25)
```

#### sortByKey - [Demo](https://codesandbox.io/s/ortbykey-3js9v)
```
sortByKey(people, 'age');
returns object in value order
```

#### toArray
```
toArray(people, 'age');
// ["61","55","60","33","47","24","58"]
```

#### toLower - [Demo](https://codesandbox.io/s/tolower-8wu14?file=/src/App.js)
```
toLower(people, 'firstName');
returns object with values as lowercase
```

#### toUpper - [Demo](https://codesandbox.io/s/toupper-35cel?file=/src/App.js)
```
toUpper(people, 'firstName');
returns object with values as uppercase
```

#### toString
```
toString(people, 'id');
returns object with values as a string
```

#### toTruncate
```
toTruncate(people, 'firstName', 3);
returns object with values truncated to numerical value
```

#### toNumber
```
toNumber(people, 'age');
returns object with values as numbers
```

## Array

#### populateArray
```
populateArray(0,20,4)
// [4,8,12,16,20]
```

#### uniqueArray
```
uniqueArray(["one",1,1,2,3,"two","three","four","one","two"])
// ["one", 1, 2, 3, "two", "three", "four"]
```

#### intersectArrays
```
intersectArrays([0,1,2,3,4],[0,1,2,5,6])
// [0,1,2]
```

#### emptyArray
```
emptyArray(["one","two","three","four"])
// []
```

#### reverseArray
```
reverseArray([0,1,2,3,4,5,6])
// [6,5,4,3,2,1,0]
```

#### shuffleArray
```
shuffleArray([0,1,2,3,4,5,6])
// [4,0,1,6,5,3,2]
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
isNaN(NaN);
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

#### uuid
```
uuid();

// Random uuid generator
// uuid(); returns random id
// e.g. 8ac16a9e-12fc-44fd-8311-952d212cbe02
```

#### randomId
```
randomId();

// Random ID generator
// zxrm95d6ug
```

## Numerical 

#### getMaximum - [Demo](https://codesandbox.io/s/getmaximum-swhbw)
```
getMaximum(people,'age');
// 61
```

#### getMinimum - [Demo](https://codesandbox.io/s/getminimum-2fn0k)
```
getMinimum(people,'age');
// 24
```

#### getTotal - [Demo](https://codesandbox.io/s/gettotal-tlu96)
```
getTotal(people, 'age');
returns sum total
```

