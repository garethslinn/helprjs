// toUpper(people, 'firstname');
export const toUpper = (arr: [], key: string) => {
        return arr.map((item: any) => ({
                ...item,
                [key]: item[key].toUpperCase()
        })
    );
}
