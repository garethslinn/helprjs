// toTrim(people, 'firstname');

export const toTrim = (arr: [], key: string) => {
        return arr.map((item: {})=> ({
                ...item,
                [key]: item[key].trim()
        })
    );
}
