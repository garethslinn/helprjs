// toLower(people, 'firstname');

export const toLower = (arr, key) => {
    return arr.map(item => ({
            ...item,
            [key]: item[key].toLowerCase()
        })
    );
}