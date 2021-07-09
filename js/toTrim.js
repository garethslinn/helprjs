// toTrim(people, 'firstname');

export const toTrim = (arr, key) => {
        return arr.map(item => ({
                ...item,
                [key]: item[key].trim()
        })
    );
}
