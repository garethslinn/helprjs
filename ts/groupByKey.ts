// groupByKey(people, 'firstName')
// {John: Array(2), Brenda: Array(1), Sally: Array(1), June: Array(1), Jack: Array(2)}

export function groupByKey(arr: [], key: string) {
    return arr
        .reduce((hash, obj) => {
            if(obj[key] === undefined) return hash;
            //@ts-ignore
            return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
        }, {})
}
