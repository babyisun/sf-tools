'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 对于各类元素的克隆方法 lihao 673252102@outlook.com
 * 调用方法
 * Clone(Array);
 */

var Clone = function Clone(obj) {
    var judgeType = function judgeType(item) {
        if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
            if (Array.isArray(item)) {
                return 'array';
            } else {
                return 'obj';
            }
        } else {
            return 'other';
        }
    };
    var cloneArr = function cloneArr(arr) {
        var clonearr = [],
            len = arr.length;
        var value = null;
        var type = null;
        for (var i = 0; i < len; i++) {
            value = arr[i];
            type = judgeType(value);
            if (type === 'array') clonearr.push(cloneArr(value));
            if (type === 'obj') clonearr.push(cloneObj(value));
            if (type === 'other') clonearr.push(value);
        }
        return clonearr;
    };
    var cloneObj = function cloneObj(obj) {
        var clonedObj = _extends({}, obj);
        var value = null;
        var type = null;
        for (var i in clonedObj) {
            value = clonedObj[i];
            type = judgeType(value);
            if (type === 'array') clonedObj[i] = cloneArr(value);
            if (type === 'obj') clonedObj[i] = cloneObj(value);
        }
        return clonedObj;
    };
    var type = judgeType(obj);
    if (type === 'array') return cloneArr(obj);
    if (type === 'obj') return cloneObj(obj);
    if (type === 'other') return obj;
};

exports.default = Clone;