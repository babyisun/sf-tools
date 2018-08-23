/**
 * 对于各类元素的克隆方法 lihao 673252102@outlook.com
 * 调用方法
 * Clone(Array);
 */

const Clone = obj => {
    const judgeType = (item) => {
        if (typeof item === 'object') {
            if (Array.isArray(item)) {
                return 'array';
            } else {
                return 'obj'
            }
        } else {
            return 'other';
        }
    }
    const cloneArr = (arr) => {
        let clonearr = [],
        len = arr.length;
        let value = null;
        let type = null;
        for (let i = 0; i < len; i++) {
            value = arr[i];
            type = judgeType(value);
            if (type === 'array') clonearr.push(cloneArr(value));
            if (type === 'obj') clonearr.push(cloneObj(value));
            if (type === 'other') clonearr.push(value);
        }
        return clonearr;
    };
    const cloneObj = (obj) => {
        let clonedObj = {...obj};
        let value = null;
        let type = null;
        for (let i in clonedObj) {
            value = clonedObj[i];
            type = judgeType(value);
            if (type === 'array') clonedObj[i] = cloneArr(value);
            if (type === 'obj') clonedObj[i] = cloneObj(value);
        }
        return clonedObj;
    }
    let type = judgeType(obj);
    if (type === 'array') return cloneArr(obj);
    if (type === 'obj') return cloneObj(obj);
    if (type === 'other') return obj;
};

export default Clone;
