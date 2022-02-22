// toTrim(people, 'firstname');

export const toTrim = (arr: [], key: string) => {
        return arr.map((item: any)=> ({
                ...item,
                [key]: item[key].trim()
        })
    );
}
