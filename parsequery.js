function kv2query(kv = {}){
    return Object.entries(kv).map(([key, value]) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(value)
    }).join('&')
}

function query2kv(qs = ''){
    return qs
        .split('&')
        .map(param => param.split('='))
        .map(([key, val]) => ({[decodeURIComponent(key)]: decodeURIComponent(val)}))
        .reduce((a,b) => Object.assign(a,b))
}
