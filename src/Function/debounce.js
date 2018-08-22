/**
 * 
 * 函数防抖
 * 调用方式 F = debounce(fn, delay)
 * delay 可选 默认 300
 */

const debounce =  (fn, delay) => {
    let timer,
        delay = delay || 300;
    return function( ...params) {
        let context = this;
        clearTimeout(timer)
        timer = setTimeout(function(){
            fn.apply(context, ...params);
        },  delay);
    } 
}

export default debounce