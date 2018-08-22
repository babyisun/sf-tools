const getUrlArgs = () => {
    let args = {},
        query = location.search.substring(1),
        pairs = query.split("&"),
        plength = pairs.length;
    for (let i = 0; i < plength; i++) {
        let pos = pairs[i].indexOf('=');
        if (pos == -1) continue;
        let argname = pairs[i].substring(0, pos),
            value = pairs[i].substring(pos + 1);
        value = decodeURIComponent(value);
        args[argname] = value;
    }
    return args;
}
export default getUrlArgs;