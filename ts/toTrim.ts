// toTrim(people, 'firstname');

export const toTrim = (arr: [], key: string) => arr.map((item: any)=> ({
            ...item,
            [key]: item[key].trim()
    })
)
