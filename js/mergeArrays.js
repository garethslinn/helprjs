// mergeArrays(people,people2);

const people = [
    { firstName: 'John', secondName: 'Smith', age: '61',  },
    { firstName: 'John', secondName: 'West', age: '55',  },
    { firstName: 'Brenda', secondName: 'Holt', age: '60',  },
    { firstName: 'Sally', secondName: 'Brampton', age: '33',  },
    { firstName: 'June', secondName: 'Chester', age: '47',  },
    { firstName: 'Jack', secondName: 'Carter', age: '24',  },
    { firstName: 'Jack', secondName: 'Foster', age: '58',  },
    { firstName: 'Jack', secondName: 'Foster', age: '58',  },
    { firstName: 'Jack', secondName: 'Foster', age: '58',  },
];

const people2 = [
    { firstName: 'John', secondName: 'Smith', age: '61',  },
    { firstName: 'John', secondName: 'West', age: '55',  },
    { firstName: 'Brenda', secondName: 'Holt', age: '60',  },
    { firstName: 'Brenda', secondName: 'Holt', age: '60',  },
    { firstName: 'Brenda', secondName: 'Holt', age: '60',  },
    { firstName: 'Brenda', secondName: 'Holt', age: '60',  },
    { firstName: 'Sally', secondName: 'Brampton', age: '33',  },
    { firstName: 'June', secondName: 'Chester', age: '47',  },
    { firstName: 'Jack', secondName: 'Carter', age: '24',  },
    { firstName: 'Jack', secondName: 'Foster', age: '58',  }
];

export function mergeArrays(arr1, arr2) {
   const mergedArr = [...new Set([...arr1, ...arr2])];
}



