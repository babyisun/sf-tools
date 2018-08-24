/**
 * 
 * 函数节流
 * 调用方式 F = throttle(fn, threshhold)
 * threshhold 可选 默认 160
 */

const Throttle = (fn, threshhold) => {
    let start = new Date(),
        timer,
        defaultThreshhold = threshhold || 160;
    return function(...params) {
        let now = new Date(),
            context = this;
        clearTimeout(timer);
        if(now - start >= defaultThreshhold) {
            fn.apply(this, ...params);
            start = now
        }else {
            timer = setTimeout(() => fn.apply(context, ...params),  defaultThreshhold)
        }
    } 
}

export default Throttle