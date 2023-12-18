// const array1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
// const array2 = [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];

// const mergedArray = mergeArraysRemoveDuplicates(array1, array2);
// console.log(mergedArray);

export function mergeArraysRemoveDuplicates<T extends Record<string, unknown>>(arr1: T[], arr2: T[]): T[] {
   const mergedArray: T[] = [...arr1, ...arr2];
   const uniqueObjects: Map<string, T> = new Map();

   for (const item of mergedArray) {
      // Serialize object to string for comparison
      const itemString: string = JSON.stringify(item);
      uniqueObjects.set(itemString, item);
   }

   return Array.from(uniqueObjects.values());
}
