/**
 * 数组深度克隆 North Shi
 * 调用方法
 * Clone(Array);
 */

const Clone = array => {
    let _duckclone = (obj) => {
        let v = {};
        if (typeof obj === "object") {
            for (let o in obj) {
                if (typeof obj[o] === "object" && obj[o] != null) {
                    v[o] = _duckclone(obj[o]);
                } else {
                    v[o] = obj[o];
                }
            }
        } else
            v = obj;
        return v;
    };
    let clonearr = [],
        len = array.length;
    for (let i = 0; i < len; i++) {
        let item = array[i];
        if (typeof item === "object") {
            item = _duckclone(item);
            clonearr.push(item);
        } else
            clonearr.push(item);
    }
    return clonearr;
};

export default Clone;
