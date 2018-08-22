/**
 * 数组求和 North Shi
 * 调用方法
 * let arr = [1,2,3,4];
   Sum(arr)();
 * let arr = [{ name: "north", age: 2 }, { age: 4 }, { age: 3 }];
   Sum(arr)("age");
 */
import CreateClause from './createClause';
var Sum = function Sum(array) {
    return function (clause) {
        var sumValue = 0,
            len = array.length,
            _clause = CreateClause(clause);

        for (var i = 0; i < len; i++) {
            var t = +_clause(array[i]);
            if (isNaN(t)) {
                // throw new TypeError("类型错误，必须为数值");
                console.error("类型错误，必须为数值");
                return 0;
            }
            sumValue += t;
        }
        return sumValue;
    };
};

export default Sum;