// toLower(people, 'firstname');
export const toLower = (arr: [], key: string) => {
    return arr.map((item: {}) => ({
            ...item, [key]: item[key].toLowerCase()
        })
    );
}