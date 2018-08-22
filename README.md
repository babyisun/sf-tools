sf-tools 常用函数库
============================
A common function package.

Install
-------

First make sure you have installed the latest version of [node.js](http://nodejs.org/)
(You may need to restart your computer after this step).

From NPM for programmatic use:

    npm install uglify-js

#### 文档

<!-- vim-markdown-toc GFM -->

* [Array 数组操作方法](#array)
  * [深度克隆 clone](#array-clone)
  * [求最大值/最小值/求和 max/min/sum](#array-maxminsum)
* [cookie操作](#cookie)
* [storage操作](#storage)

<!-- vim-markdown-toc -->

## Array

### Array Clone
待补充

### Array Max/Min/Sum

| 参数 | 类型 | 说明 |
|----------|----------|----------|
|  arr  |  Array  | 第一层函数参数，传入待计算数组 |
| name/lambda/空缺  | String/Lambda/空  | 第二层函数参数，可传入待计算属性名/lambda表达式/数值型数组可以空缺 |

函数式调用方式一
```
 let arr = [1,2,3,4];
 Max(arr)();
 Min(arr)();
 Sum(arr)();
```
函数式调用方式二
```
 let arr = [{ name: "north", age: 2 }, { age: 4 }, { age: 3 }];
 Max(arr)("age");
 Min(arr)("age");
 Sum(arr)("age");
```
函数式调用方式三
```
 let arr = [{ name: "north", age: 2 }, { age: 4 }, { age: 3 }];
 Max(arr)(r=>r.age);
 Min(arr)(r=>r.age);
 Sum(arr)(r=>r.age);
```