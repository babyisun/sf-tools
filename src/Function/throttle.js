/**
 * 
 * 函数节流
 * 调用方式 F = throttle(fn, threshhold)
 * threshhold 可选 默认 160
 */

const throttle = (fn, threshhold) => {
    let start = new Date(),
        defaultThreshhold = threshhold || 160;
    return function(...params) {
        let now = new Date(),
            context = this;
        clearTimeout(timer);
        if(now - start >= defaultThreshhold) {
            fn.apply(this, ...params);
            now = start
        }else {
            fn.timer = setTimeout(() => fn.apply(context, ...params),  defaultThreshhold)
        }
    } 
}

export default throttle