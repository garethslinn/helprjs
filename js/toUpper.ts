// toUpper(people, 'firstname');
export const toUpper = (arr: [], key: string) => {
        return arr.map((item: {}) => ({
                ...item,
                [key]: item[key].toUpperCase()
        })
    );
}
