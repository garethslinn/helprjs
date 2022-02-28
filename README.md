# helprjs

A toolkit to help solve challenging tasks with object and arrays.
Helprjs is fully documented with live Demos and its really simple to use!


## Most of the examples here make use of this people object.

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

## Methods

Methods can be grouped into the following categories: 

General : object array manipulation 

Array: array only

Boolean : returns true or false

Helpers : deals with values

Numerical : uses numerical data

Vailidation : returns only objects that meet the valid criteria


## General


#### **NEW** deGroup - [Demo](https://codesandbox.io/s/groupbyid-lv5mp?file=/src/App.js)
```
reverses a grouped object.
deGroup(people, groupObject)
returns 9 obects
```

#### **NEW** objectToArray - [Demo](https://codesandbox.io/s/objecttoarray-hmbbsg?file=/src/App.js)
```
pass in an object
Useage: objectToArray({firstName: 'Mike', lastName: 'Jones', age: 34, registered: true})
Returns ['Mike', 'Jones', 34, true]
```
#### **NEW** arrayToObject - [Demo](https://codesandbox.io/s/arraytoobject-r3lwcz?file=/src/App.js)
```
pass in an array of values
Useage: arrayToObject(["Mike","Jones",34,true])
Returns {0: 'Mike', 1: 'Jones', 2: 34, 3: true}

pass in an array of values and custom keys
Useage: arrayToObject(["Mike","Jones",34,true], ["firstName", "lastName","age","registered"])
Returns {firstName: 'Mike', lastName: 'Jones', age: 34, registered: true}
```

#### addNewProperty - [Demo](https://codesandbox.io/s/addnewproperty-unbg66?file=/src/App.js)
```
addNewProperty(people, 'registered', true)
adds new key/value to all objects.
```

#### countKeys - [Demo](https://codesandbox.io/s/countkeys-oojbt)
```
countKeys({a:1, b:2, c:3});
// 3
```

#### CSVtoArray - [Demo](https://codesandbox.io/s/csvto-skj8q?file=/src/App.js)
```
CSVtoArray(csvfile');
// [ {...} {...} ]
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

#### getValues - [Demo](https://codesandbox.io/s/getvalues-34vg2?file=/src/App.js)
```
getValues(people, 'firstName');
// ["John", "John", "Brenda", "Sally", "June", "Jack", "Jack"]
```

#### groupByKey - [Demo](https://codesandbox.io/s/groupbyid-lv5mp?file=/src/App.js)
```
groupByKey(people, 'firstName')
// {John: Array(2), Brenda: Array(1), Sally: Array(1), June: Array(1), Jack: Array(2)}
```

#### mergeArrays - [Demo](https://codesandbox.io/s/mergearrays-p130j?file=/src/App.js)

```

mergeArrays(arr1,arr2,key); 
returns a single merged array

```

#### randomOrder - [Demo](https://codesandbox.io/s/randomorder-9mc74)
```
randomOrder(people);
returns randomly ordered array
```

#### refine - [Demo](https://codesandbox.io/s/refine-fdv6c?file=/src/App.js)
```
const result = refine(people, "firstName", "Jack");
// return only objects that match criteria
```

#### removeDuplicates  - [Demo](https://codesandbox.io/s/removeduplicates-do4oe?file=/src/App.js)
```
removeDuplicates(people, 'firstName');
removes all objects containing duplicates values
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
sortByKey(people, 'age', 'desc');
returns object in value order
Note, 3rd paramenter is optional.  desc = decending order.
```

#### toArray - [Demo](https://codesandbox.io/s/toarray-n67wv?file=/src/App.js)
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

#### toString - [Demo](https://codesandbox.io/s/tostring-q4jhu)
```
toString(people, 'id');
returns object with values as a string
```

#### toTruncate - [Demo](https://codesandbox.io/s/totruncate-34fcb?file=/src/App.js)
```
toTruncate(people, 'firstName', 3);
returns object with values truncated to numerical value
```

#### toNumber - [Demo](https://codesandbox.io/s/tonumber-i0kr7?file=/src/App.js)
```
toNumber(people, 'age');
returns object with values as numbers
```

#### toTrim - [Demo](https://codesandbox.io/s/totrim-hdtfu?file=/src/App.js)
```
toTrim(people, 'firstName');
returns object values with whitespace removed
```


## Array

#### **NEW** isEmptyArray
```
isEmptyArray([1,2]);
false
```

#### **NEW** getAverage 
```
getAverage([1, 2, 3, 4, 4, 4]));
3
```

#### **NEW** concatArray - [Demo](https://codesandbox.io/s/concatarray-69w8ly?file=/src/App.js)
```
pass in an array of arrays
Useage: concatArray([ [1,2],["three", "four"],[5],[6] ])
Returns [1,2,"three","four",5,6]
```
#### populateArray - [Demo](https://codesandbox.io/s/populatearray-suvdi?file=/src/App.js)
```
populateArray(0,20,4)
// [4,8,12,16,20]
```

#### uniqueArray - [Demo](https://codesandbox.io/s/uniquearray-2uoe1?file=/src/App.js)
```
uniqueArray(["one",1,1,2,3,"two","three","four","one","two"])
// ["one", 1, 2, 3, "two", "three", "four"]
```

#### emptyArray - [Demo](https://codesandbox.io/s/emptyarray-4hgb1?file=/src/App.js)
```
emptyArray(["one","two","three","four"])
// []
```

#### reverseArray - [Demo](https://codesandbox.io/s/reversearray-6hvt4?file=/src/App.js)
```
reverseArray([0,1,2,3,4,5,6])
// [6,5,4,3,2,1,0]
```

#### shuffleArray - [Demo](https://codesandbox.io/s/shufflearray-qq4yy?file=/src/App.js)
```
shuffleArray([0,1,2,3,4,5,6])
// [4,0,1,6,5,3,2]
```


## Boolean

#### isAll - [Demo](https://codesandbox.io/s/isall-y3ch8?file=/src/App.js)
```
pass in object array, key and function. 

const isBelow = (currentValue) => currentValue < 99;
const result = isAll(people, 'age', isBelow)
console.log('result', result)
// true
```

#### isPresent - [Demo](https://codesandbox.io/s/ispresent-y3ch8?file=/src/App.js)
```
pass in object array, key and function. 

const age = 48;
const isBelow = (currentValue) => currentValue < age;
const result = isPresent(people, "age", isBelow);
console.log('result', result)
// true
```

#### isArray - [Demo](https://codesandbox.io/s/isarray-8k28g?file=/src/App.js:0-222)
```
isArray([1,2,3]);
// true
```

#### isBigint - [Demo](https://codesandbox.io/s/isbigint-s5f4d?file=/src/App.js)
```
isBigint(9007199254740991n);
// true
```

#### isBoolean - [Demo](https://codesandbox.io/s/isboolean-53rq4?file=/src/App.js)
```
isBoolean(true);
// true
```

#### isNaN - [Demo](https://codesandbox.io/s/isnan-e6xfc?file=/src/App.js)
```
isNaN(NaN);
// true
```

#### isNull - [Demo](https://codesandbox.io/s/isnull-7l5ds?file=/src/App.js)
```
isNull(null);
// true
```

#### isNumber - [Demo](https://codesandbox.io/s/isnumber-nz40w?file=/src/App.js)
```
isNumber(1);
// true
```

#### isObject - [Demo](https://codesandbox.io/s/isnumber-nz40w?file=/src/App.js)
```
isObject({x:1, y:2});
// true
```

#### isString - [Demo](https://codesandbox.io/s/isstring-0prvt?file=/src/App.js)
```
isString('abc'});
// true
```

#### isSymbol - [Demo](https://codesandbox.io/s/issymbol-z8cti?file=/src/App.js)
```
isSymbol(Symbol());
// true
```

#### isUndefined - [Demo](https://codesandbox.io/s/isundefined-88xpm?file=/src/App.js)
```
isUndefined(undefined);
// true
```

## Helpers

#### percentage - [Demo](https://codesandbox.io/s/percentage-rh65d?file=/src/App.js)
```
percentage(partial, total)

// percentage(50, 200)
// 25
// calculate percentage of partial against total number
```

#### typeOf - [Demo](https://codesandbox.io/s/typeof-uuuc9?file=/src/App.js)
```
typeOf(value);

// typeOf(1); returns "number"
// typeOf([1,2,3]); returns "array"
// typeOf({x: 1}); returns "object"
```

#### uuid - [Demo](https://codesandbox.io/s/uuid-1j8jx?file=/src/App.js)
```
uuid();

// Random uuid generator
// uuid(); returns random id
// e.g. 8ac16a9e-12fc-44fd-8311-952d212cbe02
```

#### randomId - [Demo](https://codesandbox.io/s/randomid-jgznb?file=/src/App.js)
```
randomId();

// Random ID generator
// zxrm95d6ug
```

## NEW String

```
capitalise('hello world')
Returns 'Hello world'
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

## Validation

#### getValidEmail 
```
getValidEmail( [{ id: 1, email: 'badEmailDotgmail.com'  },{ id: 2, email: 'test@gmail.com'  }] ,'email');
[{ email: 'test@gmail.com  }]
returns only objects containing valid email addresses 
```

#### getValidString
```
getValidString(people, 'firstName', 5, 99)
//Note: (array, key, minimumLength, maximumLength)
returns only objects containing text within min and max length
```

## Combination - [Demo](https://codesandbox.io/s/combination-2use4)

```
In this example five methods have been used to generate a desired output.  
It is overengineered and an unlikely requirement however it demonstrates 
more possibilities when using helprjs.  
```