// toLower(people, 'firstname');
export const toLower = (arr: [], key: string) => {
    return arr.map((item: any) => ({
            ...item, [key]: item[key].toLowerCase()
        })
    );
}