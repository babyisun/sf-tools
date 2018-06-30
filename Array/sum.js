/**
 * 数组求和 North Shi
 * 调用方法
 * let arr = [1,2,3,4];
   Sum(arr)();
 * let arr = [{ name: "north", age: 2 }, { age: 4 }, { age: 3 }];
   Sum(arr)("age");
 */

const Sum = array => clause => {
    let sumValue = 0,
        len = array.length,
        _clause;
    if (!clause)
        _clause = c => c;
    else if (typeof clause === "string")
        _clause = c => c[clause];
    else if (typeof clause === "function")
        _clause = clause;

    for (let i = 0; i < len; i++) {
        let t = +_clause(array[i]);
        if (/[^\d]/.test(t)) {
            throw new TypeError("类型错误，必须为数值");
        }
        sumValue += t;
    }
    return sumValue;
};

export default Sum;
