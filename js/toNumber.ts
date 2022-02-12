// toNumber(people, 'age');

export const toNumber = (arr: [], key: string) => {
    return arr.map((item: {}) => ({
            ...item,
            [key]: parseInt(item[key])
        })
    );
}
