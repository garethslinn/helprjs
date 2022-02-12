// toTruncate(people, 'firstName', 3);
export const toTruncate= (arr: [], key: string, len: number) => {
    return arr.map((item: {}) => ({
            ...item,
            [key]: `${item[key].toString().slice(0, len)}...`
         })
    );
}
