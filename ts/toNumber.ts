// toNumber(people, 'age');

export const toNumber = (arr: [], key: string) => arr.map((item: any) => ({
        ...item,
        [key]: parseInt(item[key])
    })
)
