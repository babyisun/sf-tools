"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var CreateClause = function CreateClause(clause) {
    var _clause = void 0;
    if (!clause) _clause = function _clause(c) {
        return c;
    };else if (typeof clause === "string") _clause = function _clause(c) {
        return c[clause];
    };else if (typeof clause === "function") _clause = clause;
    return _clause;
};

exports.default = CreateClause;