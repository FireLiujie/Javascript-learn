function deepClone(obj) {
    let res = Array.isArray(obj) ? [] : {}
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] == 'object') {
            res[key] = deepClone(obj[key])
        } else {
            res[key] = obj[key]
        }
    })
    return res
}