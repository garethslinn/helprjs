// findAllDuplicates.ts

// const people: Person[] = [
//     { id: 1, firstName: "John", secondName: "Smith", age: "61", status: 1 },
//     { id: 2, firstName: "John", secondName: "West", age: "55", status: true },
//     { id: 3, firstName: "Brenda", secondName: "Holt", age: "60", status: false },
//     { id: 4, firstName: "Sally", secondName: "Brampton", age: "33", status: undefined },
//     { id: 5, firstName: "June", secondName: "Chester", age: "47", status: NaN },
//     { id: 6, firstName: "Jack", secondName: "Carter", age: "24", status: null },
//     { id: 7, firstName: "Jack", secondName: "Foster", age: "58", status: 0 },
//     { id: 7, firstName: "Jack", secondName: "Foster", age: "58", status: 0 },
//     { id: 7, firstName: "Jack", secondName: "Foster", age: "58", status: 0 },
// ];
//
// const duplicates = findAllDuplicates(people);
// console.log(duplicates);
//
// Duplicates: [
//   { id: 7, firstName: 'Jack', secondName: 'Foster', age: '58', status: 0 },
//   { id: 7, firstName: 'Jack', secondName: 'Foster', age: '58', status: 0 },
//   { id: 7, firstName: 'Jack', secondName: 'Foster', age: '58', status: 0 }
// ]

interface Identifiable {
    id: number;
    [key: string]: any;
}

export const findAllDuplicates = <T extends Identifiable>(array: T[]): T[] => {
    const duplicates = array.reduce<T[]>((acc, current, index, self) => {
        if (self.findIndex(p => p.id === current.id && p !== current) !== -1) {
            acc.push(current);
        }
        return acc;
    }, []);
    return duplicates;
};