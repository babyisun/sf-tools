"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 数组深度克隆 North Shi
 * 调用方法
 * Clone(Array);
 */

var Clone = function Clone(array) {
    var _duckclone = function _duckclone(obj) {
        var v = {};
        if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
            for (var o in obj) {
                if (_typeof(obj[o]) === "object" && obj[o] != null) {
                    v[o] = _duckclone(obj[o]);
                } else {
                    v[o] = obj[o];
                }
            }
        } else v = obj;
        return v;
    };
    var clonearr = [],
        len = array.length;
    for (var i = 0; i < len; i++) {
        var item = array[i];
        if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object") {
            item = _duckclone(item);
            clonearr.push(item);
        } else clonearr.push(item);
    }
    return clonearr;
};

exports.default = Clone;