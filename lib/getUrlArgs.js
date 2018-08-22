var getUrlArgs = function getUrlArgs() {
    var args = {},
        query = location.search.substring(1),
        pairs = query.split("&"),
        plength = pairs.length;
    for (var i = 0; i < plength; i++) {
        var pos = pairs[i].indexOf('=');
        if (pos == -1) continue;
        var argname = pairs[i].substring(0, pos),
            value = pairs[i].substring(pos + 1);
        value = decodeURIComponent(value);
        args[argname] = value;
    }
    return args;
};
export default getUrlArgs;