// groupByKey(people, 'firstName')
// {John: Array(2), Brenda: Array(1), Sally: Array(1), June: Array(1), Jack: Array(2)}

export function groupByKey(array, key) {
    return array
        .reduce((hash, obj) => {
            if(obj[key] === undefined) return hash;
            return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
        }, {})
}
