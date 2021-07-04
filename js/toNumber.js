// toNumber(people, 'age');

export const toNumber = (arr, key) => {
    return arr.map(item => ({
            ...item,
            [key]: parseInt(item[key]))
        })
    );
}