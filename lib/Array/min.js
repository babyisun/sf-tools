'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClause = require('./createClause');

var _createClause2 = _interopRequireDefault(_createClause);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Min = function Min(array) {
    return function (clause) {
        var len = array.length;
        if (len === 0) return null;
        var item = array[0];
        if (len === 1) return item;
        var _clause = (0, _createClause2.default)(clause),
            minValue = _clause(item);
        for (var i = 1; i < len; i++) {
            var temp = _clause(array[i]);
            if (minValue > temp) {
                minValue = temp;
                item = array[i];
            }
        }
        return item;
    };
}; /**
    * 找出最大项 North Shi
    * 调用方法
    * let arr = [1,2,3,4];
      Min(arr)();
    * let arr = [{ name: "north", age: 2 }, { age: 4 }, { age: 3 }];
      Min(arr)("age");
    */
exports.default = Min;