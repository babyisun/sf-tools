sf-tools 常用函数库
============================
A common function package.

Install
-------

请确保你已经安装了node.js[node.js](http://nodejs.org/)

然后执行包安装命令:

    npm install sf-tools

#### 文档

<!-- vim-markdown-toc GFM -->

* [Array 数组操作方法](#array)
  * [求最大值/最小值/求和 max/min/sum](#array-maxminsum)
* [cookie操作](#cookie)
* [storage操作](#storage)
* [深度克隆操作](#clone)

<!-- vim-markdown-toc -->

## Clone
可传入各类参数，若为数组/对象时返回一个与该参数数据内容的新数组/对象；若为其他类型参数则返回原参数。

## Function

### debounce

  | 参数 | 类型 | 说明 |
|----------|----------|----------|
|  fn  |  Function  | 第一层函数参数 1，传入目标函数|
|  delay  |  number  | 第一层函数参数 2，传入响应时间|
| any/空缺  | any/空  | 第二层函数参数，可传入 any/空缺 |

### throttle

  | 参数 | 类型 | 说明 |
|----------|----------|----------|
|  fn  |  Function  | 第一层函数参数 1，传入目标函数|
|  threshhold  |  number  | 第一层函数参数 2，传入节流时间|
| any/空缺  | any/空  | 第二层函数参数，可传入 any/空缺 |

## Array

### Array Max/Min/Sum

| 参数 | 类型 | 说明 |
|----------|----------|----------|
|  arr  |  Array  | 第一层函数参数，传入待计算数组 |
| name/lambda/空缺  | String/Lambda/空  | 第二层函数参数，可传入待计算属性名/lambda表达式/数值型数组可以空缺 |

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
