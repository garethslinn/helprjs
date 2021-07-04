// toUpper(people, 'firstname');

export const toUpper = (arr, key) => {
        return arr.map(item => ({
                ...item,
                [key]: item[key].toUpperCase()
        })
    );
}
