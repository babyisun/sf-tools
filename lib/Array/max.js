/**
 * 找出最大项 North Shi
 * 调用方法
 * let arr = [1,2,3,4];
   Max(arr)();
 * let arr = [{ name: "north", age: 2 }, { age: 4 }, { age: 3 }];
   Max(arr)("age");
 */
import CreateClause from './createClause';
var Max = function Max(array) {
    return function (clause) {
        var len = array.length;
        if (len === 0) return null;
        var item = array[0];
        if (len === 1) return item;
        var _clause = CreateClause(clause),
            maxValue = _clause(item);
        for (var i = 1; i < len; i++) {
            var temp = _clause(array[i]);
            if (maxValue < temp) {
                maxValue = temp;
                item = array[i];
            }
        }
        return item;
    };
};

export default Max;