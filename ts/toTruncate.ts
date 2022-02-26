// toTruncate(people, 'firstName', 3);
export const toTruncate= (arr: [], key: string, len: number) => arr.map((item: any) => ({
        ...item,
        [key]: `${item[key].toString().slice(0, len)}...`
     })
)

