const getDeepValue = (target) => {
    let result = {};

    const get = (obj) => {
        let _clone = Array.isArray(obj) ? [...obj] : {...obj}
        for(let key in _clone) {
            let ele = _clone[key];
            if(Array.isArray(ele)) {
                ele.length ? result[key] = ele : delete _clone[key]
            }else if(Object.prototype.toString.call(ele) === '[object Object]') {
                get(ele)
            }else{
                result = {...result, [key]: ele}
            }
        }
    }
    if(!Object.prototype.toString.call(target) === '[object Object]' && !Array.isArray(target)){
        return target
    }else {
        get(target)
    }

}

export default getDeepValue